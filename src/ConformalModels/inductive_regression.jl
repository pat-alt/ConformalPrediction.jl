"A base type for Inductive Conformal Regressors."
abstract type InductiveConformalRegressor <: InductiveConformalModel end

"The `SimpleInductiveRegressor` is the simplest approach to Inductive Conformal Regression. Contrary to the [`NaiveRegressor`](@ref) it computes nonconformity scores using a designated calibration dataset."
mutable struct SimpleInductiveRegressor{Model <: Supervised} <: InductiveConformalRegressor
    model::Model
    fitresult::Any
    scores::Union{Nothing,AbstractArray}
end

function SimpleInductiveRegressor(model::Supervised, fitresult=nothing)
    return SimpleInductiveRegressor(model, fitresult, nothing)
end

function score(conf_model::SimpleInductiveRegressor, Xcal, ycal)
    ŷ = MMI.predict(conf_model.model, conf_model.fitresult, Xcal)
    return @.(abs(ŷ - ycal))
end

function prediction_region(conf_model::SimpleInductiveRegressor, Xnew, q̂::Real)
    ŷnew = MMI.predict(conf_model.model, conf_model.fitresult, Xnew)
    ŷnew = map(x -> ["lower" => x .- q̂, "upper" => x .+ q̂],eachrow(ŷnew))
    return ŷnew 
end