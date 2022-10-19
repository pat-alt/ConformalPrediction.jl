var documenterSearchIndex = {"docs":
[{"location":"reference/","page":"Reference","title":"Reference","text":"CurrentModule = ConformalPrediction","category":"page"},{"location":"reference/#All-functions-and-types","page":"Reference","title":"All functions and types","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"","category":"page"},{"location":"reference/#Exported-functions","page":"Reference","title":"Exported functions","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [\n    ConformalPrediction,\n    ConformalPrediction.ConformalModels\n]\nPrivate = false","category":"page"},{"location":"reference/#ConformalPrediction.ConformalModels.available_models","page":"Reference","title":"ConformalPrediction.ConformalModels.available_models","text":"A container listing all available methods for conformal prediction.\n\n\n\n\n\n","category":"constant"},{"location":"reference/#ConformalPrediction.ConformalModels.AdaptiveInductiveClassifier","page":"Reference","title":"ConformalPrediction.ConformalModels.AdaptiveInductiveClassifier","text":"The AdaptiveInductiveClassifier is the simplest approach to Inductive Conformal Classification. Contrary to the NaiveClassifier it computes nonconformity scores using a designated calibration dataset.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.CVMinMaxRegressor","page":"Reference","title":"ConformalPrediction.ConformalModels.CVMinMaxRegressor","text":"Constructor for CVMinMaxRegressor.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.CVPlusRegressor","page":"Reference","title":"ConformalPrediction.ConformalModels.CVPlusRegressor","text":"Constructor for CVPlusRegressor.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.ConformalModel","page":"Reference","title":"ConformalPrediction.ConformalModels.ConformalModel","text":"An abstract base type for conformal models.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.InductiveConformalClassifier","page":"Reference","title":"ConformalPrediction.ConformalModels.InductiveConformalClassifier","text":"A base type for Inductive Conformal Classifiers.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.InductiveConformalModel","page":"Reference","title":"ConformalPrediction.ConformalModels.InductiveConformalModel","text":"An abstract base time of Inductive Conformal Models. These models rely on data splitting. In particular, we partition the training data as 1n=mathcalD_texttrain cup mathcalD_textcalibration.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.InductiveConformalRegressor","page":"Reference","title":"ConformalPrediction.ConformalModels.InductiveConformalRegressor","text":"A base type for Inductive Conformal Regressors.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.JackknifeMinMaxRegressor","page":"Reference","title":"ConformalPrediction.ConformalModels.JackknifeMinMaxRegressor","text":"Constructor for JackknifeMinMaxRegressor.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.JackknifePlusRegressor","page":"Reference","title":"ConformalPrediction.ConformalModels.JackknifePlusRegressor","text":"Constructor for JackknifePlusRegressor.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.JackknifeRegressor","page":"Reference","title":"ConformalPrediction.ConformalModels.JackknifeRegressor","text":"Constructor for JackknifeRegressor.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.NaiveClassifier","page":"Reference","title":"ConformalPrediction.ConformalModels.NaiveClassifier","text":"The NaiveClassifier is the simplest approach to Inductive Conformal Classification. Contrary to the NaiveClassifier it computes nonconformity scores using a designated trainibration dataset.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.NaiveRegressor","page":"Reference","title":"ConformalPrediction.ConformalModels.NaiveRegressor","text":"The NaiveRegressor for conformal prediction is the simplest approach to conformal regression.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.SimpleInductiveClassifier","page":"Reference","title":"ConformalPrediction.ConformalModels.SimpleInductiveClassifier","text":"The SimpleInductiveClassifier is the simplest approach to Inductive Conformal Classification. Contrary to the NaiveClassifier it computes nonconformity scores using a designated calibration dataset.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.SimpleInductiveRegressor","page":"Reference","title":"ConformalPrediction.ConformalModels.SimpleInductiveRegressor","text":"The SimpleInductiveRegressor is the simplest approach to Inductive Conformal Regression. Contrary to the NaiveRegressor it computes nonconformity scores using a designated calibration dataset.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.TransductiveConformalClassifier","page":"Reference","title":"ConformalPrediction.ConformalModels.TransductiveConformalClassifier","text":"A base type for Transductive Conformal Classifiers.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.TransductiveConformalModel","page":"Reference","title":"ConformalPrediction.ConformalModels.TransductiveConformalModel","text":"An abstract base time of Transductive Conformal Models. These models do not rely on data splitting. In particular, nonconformity scores are computed using the entire trainign data set 1n=mathcalD_texttrain.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.TransductiveConformalRegressor","page":"Reference","title":"ConformalPrediction.ConformalModels.TransductiveConformalRegressor","text":"A base type for Transductive Conformal Regressors.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ConformalPrediction.ConformalModels.conformal_model-Tuple{MLJModelInterface.Supervised}","page":"Reference","title":"ConformalPrediction.ConformalModels.conformal_model","text":"conformal_model(model::Supervised; method::Union{Nothing, Symbol}=nothing, kwargs...)\n\nA simple wrapper function that turns a model::Supervised into a conformal model. It accepts an optional key argument that can be used to specify the desired method for conformal prediction as well as additinal kwargs... specific to the method.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Internal-functions","page":"Reference","title":"Internal functions","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [\n    ConformalPrediction,\n    ConformalPrediction.ConformalModels\n]\nPublic = false","category":"page"},{"location":"reference/#MLJModelInterface.fit-Tuple{ConformalModel, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::ConformalModel, verbosity, X, y)\n\nGeneric fit method used to train conformal models. If no specific fit method is dispatched for conf_model::ConformalModel, calling fit defaults to simply fitting the underling atomic model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{ConformalPrediction.ConformalModels.AdaptiveInductiveClassifier, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::AdaptiveInductiveClassifier, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{ConformalPrediction.ConformalModels.CVMinMaxRegressor, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::CVMinMaxRegressor, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{ConformalPrediction.ConformalModels.CVPlusRegressor, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::CVPlusRegressor, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model. \n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{ConformalPrediction.ConformalModels.JackknifeMinMaxRegressor, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::JackknifeMinMaxRegressor, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{ConformalPrediction.ConformalModels.JackknifePlusRegressor, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::JackknifeRegressor, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{JackknifeRegressor, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::JackknifeRegressor, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{NaiveClassifier, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::NaiveClassifier, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model. \n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{NaiveRegressor, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::NaiveRegressor, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{SimpleInductiveClassifier, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::SimpleInductiveClassifier, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.fit-Tuple{SimpleInductiveRegressor, Any, Any, Any}","page":"Reference","title":"MLJModelInterface.fit","text":"MMI.fit(conf_model::SimpleInductiveRegressor, verbosity, X, y)\n\nWrapper function to fit the underlying MLJ model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{ConformalModel, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::ConformalModel, fitresult, Xnew)\n\nGeneric MMI.predict method used to predict from a conformal model given a fitresult and data Xnew. If no specific predict method is dispatched for conf_model::ConformalModel, calling predict defaults to simply predicting from the underlying atomic model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{ConformalPrediction.ConformalModels.AdaptiveInductiveClassifier, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::AdaptiveInductiveClassifier, fitresult, Xnew)\n\nFor the AdaptiveInductiveClassifier nonconformity scores are computed by cumulatively summing the ranked scores of each label in descending order until reaching the true label y_i:\n\ns_i(X_iy_i) = sum_j=1^k  hatmu(X_i)_pi_j  textwhere   y_i=pi_k  i in mathcalD_textcalibration\n\nPrediction sets are then computed as follows,\n\nhatC_nalpha(X_n+1) = lefty s(X_n+1y) le hatq_n alpha^+ s_i(X_iy_i) right  i in mathcalD_textcalibration\n\nwhere mathcalD_textcalibration denotes the designated calibration data and hatmu denotes the model fitted on training data mathcalD_texttrain.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{ConformalPrediction.ConformalModels.CVMinMaxRegressor, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::CVMinMaxRegressor, fitresult, Xnew)\n\nFor the CVMinMaxRegressor prediction intervals are computed as follows,\n\nhatC_nalpha(X_n+1) = left min_i=1n hatmu_-mathcalD_k(i)(X_n+1) -  hatq_n alpha^+ R_i^textCV  max_i=1n hatmu_-mathcalD_k(i)(X_n+1) + hatq_n alpha^+  R_i^textCV right  i in mathcalD_texttrain\n\nwith \n\nR_i^textCV=Y_i - hatmu_-mathcalD_k(i)(X_i)\n\nwhere hatmu_-mathcalD_k(i) denotes the model fitted on training data with subset mathcalD_k(i) that contains the i th point removed.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{ConformalPrediction.ConformalModels.CVPlusRegressor, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::CVPlusRegressor, fitresult, Xnew)\n\nFor the CVPlusRegressor prediction intervals are computed as follows,\n\nhatC_nalpha(X_n+1) = left hatq_n alpha^- hatmu_-mathcalD_k(i)(X_n+1) - R_i^textCV  hatq_n alpha^+ hatmu_-mathcalD_k(i)(X_n+1) + R_i^textCV right   i in mathcalD_texttrain\n\nwith \n\nR_i^textCV=Y_i - hatmu_-mathcalD_k(i)(X_i)\n\nwhere hatmu_-mathcalD_k(i) denotes the model fitted on training data with subset mathcalD_k(i) that contains the i th point removed.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{ConformalPrediction.ConformalModels.JackknifeMinMaxRegressor, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::JackknifeMinMaxRegressor, fitresult, Xnew)\n\nFor the JackknifeMinMaxRegressor prediction intervals are computed as follows,\n\nhatC_nalpha(X_n+1) = left min_i=1n hatmu_-i(X_n+1) -  hatq_n alpha^+ R_i^textLOO  max_i=1n hatmu_-i(X_n+1) + hatq_n alpha^+  R_i^textLOO right   i in mathcalD_texttrain\n\nwith \n\nR_i^textLOO=Y_i - hatmu_-i(X_i)\n\nwhere hatmu_-i denotes the model fitted on training data with ith point removed. The jackknife-minmax procedure is more conservative than the JackknifePlusRegressor.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{ConformalPrediction.ConformalModels.JackknifePlusRegressor, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::JackknifePlusRegressor, fitresult, Xnew)\n\nFor the JackknifePlusRegressor prediction intervals are computed as follows,\n\nhatC_nalpha(X_n+1) = left hatq_n alpha^- hatmu_-i(X_n+1) - R_i^textLOO  hatq_n alpha^+ hatmu_-i(X_n+1) + R_i^textLOO right  i in mathcalD_texttrain\n\nwith\n\nR_i^textLOO=Y_i - hatmu_-i(X_i)\n\nwhere hatmu_-i denotes the model fitted on training data with ith point removed. The jackknife+ procedure is more stable than the JackknifeRegressor.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{JackknifeRegressor, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::JackknifeRegressor, fitresult, Xnew)\n\nFor the JackknifeRegressor prediction intervals are computed as follows,\n\nhatC_nalpha(X_n+1) = hatmu(X_n+1) pm hatq_n alpha^+ Y_i - hatmu_-i(X_i)  i in mathcalD_texttrain\n\nwhere hatmu_-i denotes the model fitted on training data with ith point removed. The jackknife procedure addresses the overfitting issue associated with the NaiveRegressor.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{NaiveClassifier, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::NaiveClassifier, fitresult, Xnew)\n\nFor the NaiveClassifier prediction sets are computed as follows:\n\nhatC_nalpha(X_n+1) = lefty s(X_n+1y) le hatq_n alpha^+ 1 - hatmu(X_i)  right  i in mathcalD_texttrain\n\nThe naive approach typically produces prediction regions that undercover due to overfitting.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{NaiveRegressor, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::NaiveRegressor, fitresult, Xnew)\n\nFor the NaiveRegressor prediction intervals are computed as follows:\n\nhatC_nalpha(X_n+1) = hatmu(X_n+1) pm hatq_n alpha^+ Y_i - hatmu(X_i)   i in mathcalD_texttrain\n\nThe naive approach typically produces prediction regions that undercover due to overfitting.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{SimpleInductiveClassifier, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::SimpleInductiveClassifier, fitresult, Xnew)\n\nFor the SimpleInductiveClassifier prediction sets are computed as follows,\n\nhatC_nalpha(X_n+1) = lefty s(X_n+1y) le hatq_n alpha^+ 1 - hatmu(X_i) right  i in mathcalD_textcalibration\n\nwhere mathcalD_textcalibration denotes the designated calibration data and hatmu denotes the model fitted on training data mathcalD_texttrain.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MLJModelInterface.predict-Tuple{SimpleInductiveRegressor, Any, Any}","page":"Reference","title":"MLJModelInterface.predict","text":"MMI.predict(conf_model::SimpleInductiveRegressor, fitresult, Xnew)\n\nFor the SimpleInductiveRegressor prediction intervals are computed as follows,\n\nhatC_nalpha(X_n+1) = hatmu(X_n+1) pm hatq_n alpha^+ Y_i - hatmu(X_i)   i in mathcalD_textcalibration\n\nwhere mathcalD_textcalibration denotes the designated calibration data and hatmu denotes the model fitted on training data mathcalD_texttrain.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = ConformalPrediction","category":"page"},{"location":"#ConformalPrediction","page":"Home","title":"ConformalPrediction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ConformalPrediction.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = ConformalPrediction","category":"page"},{"location":"","page":"Home","title":"Home","text":"ConformalPrediction.jl is a package for Uncertainty Quantification (UQ) through Conformal Prediction (CP) in Julia. It is designed to work with supervised models trained in MLJ. Conformal Prediction is distribution-free, easy-to-understand, easy-to-use and model-agnostic.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation 🚩","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install the first stable release from the general registry:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"ConformalPrediction\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"The development version can be installed as follows:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(url=\"https://github.com/pat-alt/ConformalPrediction.jl\")","category":"page"},{"location":"#Status","page":"Home","title":"Status 🔁","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is in its very early stages of development and therefore still subject to changes to the core architecture. The following approaches have been implemented in the development version:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Regression:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Inductive\nNaive Transductive\nJackknife\nJackknife+\nJackknife-minmax\nCV+\nCV-minmax","category":"page"},{"location":"","page":"Home","title":"Home","text":"Classification:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Inductive (LABEL (Sadinle, Lei, and Wasserman 2019))\nAdaptive Inductive","category":"page"},{"location":"","page":"Home","title":"Home","text":"I have only tested it for a few of the supervised models offered by MLJ.","category":"page"},{"location":"#Usage-Example","page":"Home","title":"Usage Example 🔍","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To illustrate the intended use of the package, let’s have a quick look at a simple regression problem. Using MLJ we first generate some synthetic data and then determine indices for our training, calibration and test data:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using MLJ\nX, y = MLJ.make_regression(1000, 2)\ntrain, test = partition(eachindex(y), 0.4, 0.4)","category":"page"},{"location":"","page":"Home","title":"Home","text":"We then import a decision tree (DecisionTree) following the standard MLJ procedure.","category":"page"},{"location":"","page":"Home","title":"Home","text":"DecisionTreeRegressor = @load DecisionTreeRegressor pkg=DecisionTree\nmodel = DecisionTreeRegressor() ","category":"page"},{"location":"","page":"Home","title":"Home","text":"To turn our conventional model into a conformal model, we just need to declare it as such by using conformal_model wrapper function. The generated conformal model instance can wrapped in data to create a machine. Finally, we proceed by fitting the machine on training data using the generic fit! method:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using ConformalPrediction\nconf_model = conformal_model(model)\nmach = machine(conf_model, X, y)\nfit!(mach, rows=train)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Predictions can then be computed using the generic predict method. The code below produces predictions for the first n samples. Each tuple contains the lower and upper bound for the prediction interval.","category":"page"},{"location":"","page":"Home","title":"Home","text":"n = 10\nXtest = selectrows(X, first(test,n))\nytest = y[first(test,n)]\npredict(mach, Xtest)","category":"page"},{"location":"","page":"Home","title":"Home","text":"╭──────────────────────────────────────────────────────────────────╮\n│                                                                  │\n│       (1)   ([-0.16035036780321532], [1.4939904924997824])       │\n│       (2)   ([-1.086589388667894], [0.5677514716351038])         │\n│       (3)   ([-1.086589388667894], [0.5677514716351038])         │\n│       (4)   ([-1.6661164684544767], [-0.011775608151479156])     │\n│       (5)   ([-3.0116018507211617], [-1.3572609904181638])       │\n│       (6)   ([0.5337083913933376], [2.1880492516963352])         │\n│       (7)   ([-1.2219266921060266], [0.43241416819697115])       │\n│       (8)   ([-1.6867950029289869], [-0.032454142625989335])     │\n│       (9)   ([-2.0599181285783263], [-0.4055772682753287])       │\n│      (10)   ([-0.06499897951385392], [1.5893418807891437])       │\n│                                                                  │\n│                                                                  │\n╰───────────────────────────────────────────────────── 10 items ───╯","category":"page"},{"location":"#Contribute","page":"Home","title":"Contribute 🛠","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Contributions are welcome! Please follow the SciML ColPrac guide.","category":"page"},{"location":"#References","page":"Home","title":"References 🎓","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Sadinle, Mauricio, Jing Lei, and Larry Wasserman. 2019. “Least Ambiguous Set-Valued Classifiers with Bounded Error Levels.” Journal of the American Statistical Association 114 (525): 223–34.","category":"page"}]
}
