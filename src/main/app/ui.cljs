(ns app.ui
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]))

(defsc Person [this {:person/keys [name age]}]              ; The person component is destructuring the state
  (dom/li
    (dom/h5 (str name " (age: " age ")"))))

;; The keyfn generates a React key for each element based on props. See React documentation on keys.
(def ui-person (comp/factory Person {:keyfn :person/name})) ;ui-person is creating an instance of Person component using a key based on the name

(defsc PersonList [this {:list/keys [label people]}]
  (dom/div
    (dom/h4 label)
    (dom/ul
      (map ui-person people))))

(def ui-person-list (comp/factory PersonList))

(defsc Root [this {:keys [ui/react-key]}]
  (let [ui-data {:friends {:list/label "Friends" :list/people
                           [{:person/name "Sally" :person/age 32}
                            {:person/name "Joe" :person/age 22}]}
                 :enemies {:list/label "Enemies" :list/people
                           [{:person/name "Fred" :person/age 11}
                            {:person/name "Bobby" :person/age 55}]}}]
    (dom/div
      (ui-person-list (:friends ui-data))
      (ui-person-list (:enemies ui-data)))))