(ns app.ui
  (:require
    [com.fulcrologic.fulcro.dom :as dom]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [app.mutations :as api]))

(defsc Person [this {:person/keys [name age]} {:keys [onDelete]}] ; (2)
  {:query         [:person/name :person/age]
   :initial-state (fn [{:keys [name age] :as params}] {:person/name name :person/age age})}
  (dom/li
    (dom/h5 (str name " (age: " age ")") (dom/button {:onClick #(onDelete name)} "X"))))

(def ui-person (comp/factory Person {:keyfn :person/name}))

(defsc PersonList [this {:list/keys [label people]}] ;
  {:query [:list/label {:list/people (comp/get-query Person)}]
   :initial-state
   (fn [{:keys [label]}]
     {:list/label  label
      :list/people (if (= label "Friends")
                     [(comp/get-initial-state Person {:name "Sally" :age 32})
                      (comp/get-initial-state Person {:name "Joe" :age 22})]
                     [(comp/get-initial-state Person {:name "Fred" :age 11})
                      (comp/get-initial-state Person {:name "Bobby" :age 55})])})}
  (let [delete-person (fn [name] (comp/transact! this [(api/delete-person {:list-name label :name name})]))]; (1)
    (dom/div
      (dom/h4 label)
      (dom/ul
        (map (fn [p] (ui-person (comp/computed p {:onDelete delete-person}))) people)))))

(def ui-person-list (comp/factory PersonList))

; Root's initial state becomes the entire app's initial state!
(defsc Root [this {:keys [friends enemies]}]
  {:query         [{:friends (comp/get-query PersonList)}
                   {:enemies (comp/get-query PersonList)}]
   :initial-state (fn [params] {:friends (comp/get-initial-state PersonList {:label "Friends"})
                                :enemies (comp/get-initial-state PersonList {:label "Enemies"})})}
  (dom/div
    (ui-person-list friends)
    (ui-person-list enemies)))