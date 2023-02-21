(ns app.application
  (:require
    [com.fulcrologic.fulcro.application :as app]))

(defonce app (app/fulcro-app))                              ;Create an instance of fulcro-app and save it in a variable called app