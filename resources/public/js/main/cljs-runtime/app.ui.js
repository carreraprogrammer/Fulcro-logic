goog.provide('app.ui');

var options__48850__auto___52195 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__52148){
var map__52149 = p__52148;
var map__52149__$1 = cljs.core.__destructure_map(map__52149);
var props = map__52149__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52149__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52149__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52149__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__52150){
var map__52151 = p__52150;
var map__52151__$1 = cljs.core.__destructure_map(map__52151);
var params = map__52151__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52151__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52151__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52151__$1,new cljs.core.Keyword(null,"age","age",-604307804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","name","person/name",549444500),name,new cljs.core.Keyword("person","age","person/age",387881455),age], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52152 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52152__$1 = cljs.core.__destructure_map(map__52152);
var props = map__52152__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52152__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52152__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52152__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var map__52153 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__52153__$1 = cljs.core.__destructure_map(map__52153);
var onDelete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52153__$1,new cljs.core.Keyword(null,"onDelete","onDelete",1331388507));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (age: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(age),")"].join(''),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (onDelete.cljs$core$IFn$_invoke$arity$1 ? onDelete.cljs$core$IFn$_invoke$arity$1(id) : onDelete.call(null,id));
})], null),"X"], null),null)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Person = (function app$ui$Person(props__48851__auto__){
var this__48852__auto__ = this;
var temp__5751__auto___52196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48850__auto___52195,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52196)){
var init_state__48853__auto___52197 = temp__5751__auto___52196;
(this__48852__auto__.state = (function (){var obj52155 = ({"fulcro$state":(function (){var G__52156 = this__48852__auto__;
var G__52157 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48851__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48851__auto__,"fulcro$value"));
return (init_state__48853__auto___52197.cljs$core$IFn$_invoke$arity$2 ? init_state__48853__auto___52197.cljs$core$IFn$_invoke$arity$2(G__52156,G__52157) : init_state__48853__auto___52197.call(null,G__52156,G__52157));
})()});
return obj52155;
})());
} else {
(this__48852__auto__.state = (function (){var obj52159 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52159;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__48850__auto___52195);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__48850__auto___52198 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","label","list/label",1746874574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","people","list/people",1438389142),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.Person)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__52161){
var map__52162 = p__52161;
var map__52162__$1 = cljs.core.__destructure_map(map__52162);
var props = map__52162__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52162__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52162__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52162__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","id","list/id",-1385338442).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__52163){
var map__52164 = p__52163;
var map__52164__$1 = cljs.core.__destructure_map(map__52164);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52164__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52164__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("list","id","list/id",-1385338442),id,new cljs.core.Keyword("list","label","list/label",1746874574),label,new cljs.core.Keyword("list","people","list/people",1438389142),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"friends","friends",-127631374)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52165 = app.ui.Person;
var G__52166 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Sally",new cljs.core.Keyword(null,"age","age",-604307804),(32)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52165,G__52166) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52165,G__52166));
})(),(function (){var G__52167 = app.ui.Person;
var G__52168 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Joe",new cljs.core.Keyword(null,"age","age",-604307804),(22)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52167,G__52168) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52167,G__52168));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52169 = app.ui.Person;
var G__52170 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Fred",new cljs.core.Keyword(null,"age","age",-604307804),(11)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52169,G__52170) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52169,G__52170));
})(),(function (){var G__52171 = app.ui.Person;
var G__52172 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"Bobby",new cljs.core.Keyword(null,"age","age",-604307804),(55)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52171,G__52172) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52171,G__52172));
})()], null))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52173 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52173__$1 = cljs.core.__destructure_map(map__52173);
var props = map__52173__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52173__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52173__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52173__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
var delete_person = (function (person_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52174 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","id","list/id",-1385338442),id,new cljs.core.Keyword("person","id","person/id",-392409377),person_id], null);
return (app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1 ? app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1(G__52174) : app.mutations.delete_person.call(null,G__52174));
})()], null));
});
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52160_SHARP_){
var G__52175 = (function (){var G__52176 = p1__52160_SHARP_;
var G__52177 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),delete_person], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__52176,G__52177) : com.fulcrologic.fulcro.components.computed.call(null,G__52176,G__52177));
})();
return (app.ui.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person.cljs$core$IFn$_invoke$arity$1(G__52175) : app.ui.ui_person.call(null,G__52175));
}),people)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__48851__auto__){
var this__48852__auto__ = this;
var temp__5751__auto___52199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48850__auto___52198,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52199)){
var init_state__48853__auto___52200 = temp__5751__auto___52199;
(this__48852__auto__.state = (function (){var obj52179 = ({"fulcro$state":(function (){var G__52180 = this__48852__auto__;
var G__52181 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48851__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48851__auto__,"fulcro$value"));
return (init_state__48853__auto___52200.cljs$core$IFn$_invoke$arity$2 ? init_state__48853__auto___52200.cljs$core$IFn$_invoke$arity$2(G__52180,G__52181) : init_state__48853__auto___52200.call(null,G__52180,G__52181));
})()});
return obj52179;
})());
} else {
(this__48852__auto__.state = (function (){var obj52183 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52183;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__48850__auto___52198);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__48850__auto___52201 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"friends","friends",-127631374),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemies","enemies",2114285722),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(function (){var G__52184 = app.ui.PersonList;
var G__52185 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.Keyword(null,"label","label",1718410804),"Friends"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52184,G__52185) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52184,G__52185));
})(),new cljs.core.Keyword(null,"enemies","enemies",2114285722),(function (){var G__52186 = app.ui.PersonList;
var G__52187 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.Keyword(null,"label","label",1718410804),"Enemies"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52186,G__52187) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52186,G__52187));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52188 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52188__$1 = cljs.core.__destructure_map(map__52188);
var friends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52188__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52188__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(friends) : app.ui.ui_person_list.call(null,friends)),(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(enemies) : app.ui.ui_person_list.call(null,enemies))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__48851__auto__){
var this__48852__auto__ = this;
var temp__5751__auto___52202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48850__auto___52201,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52202)){
var init_state__48853__auto___52203 = temp__5751__auto___52202;
(this__48852__auto__.state = (function (){var obj52190 = ({"fulcro$state":(function (){var G__52191 = this__48852__auto__;
var G__52192 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48851__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48851__auto__,"fulcro$value"));
return (init_state__48853__auto___52203.cljs$core$IFn$_invoke$arity$2 ? init_state__48853__auto___52203.cljs$core$IFn$_invoke$arity$2(G__52191,G__52192) : init_state__48853__auto___52203.call(null,G__52191,G__52192));
})()});
return obj52190;
})());
} else {
(this__48852__auto__.state = (function (){var obj52194 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52194;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__48850__auto___52201);

//# sourceMappingURL=app.ui.js.map
