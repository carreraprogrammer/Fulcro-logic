goog.provide('app.ui');

var options__45853__auto___49133 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__49091){
var map__49092 = p__49091;
var map__49092__$1 = cljs.core.__destructure_map(map__49092);
var params = map__49092__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49092__$1,new cljs.core.Keyword(null,"age","age",-604307804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),name,new cljs.core.Keyword("person","age","person/age",387881455),age], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49093 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__49093__$1 = cljs.core.__destructure_map(map__49093);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49093__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49093__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var map__49094 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__49094__$1 = cljs.core.__destructure_map(map__49094);
var onDelete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49094__$1,new cljs.core.Keyword(null,"onDelete","onDelete",1331388507));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (age: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(age),")"].join(''),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (onDelete.cljs$core$IFn$_invoke$arity$1 ? onDelete.cljs$core$IFn$_invoke$arity$1(name) : onDelete.call(null,name));
})], null),"X"], null),null)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Person = (function app$ui$Person(props__45854__auto__){
var this__45855__auto__ = this;
var temp__5751__auto___49134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45853__auto___49133,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49134)){
var init_state__45856__auto___49135 = temp__5751__auto___49134;
(this__45855__auto__.state = (function (){var obj49096 = ({"fulcro$state":(function (){var G__49097 = this__45855__auto__;
var G__49098 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45854__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45854__auto__,"fulcro$value"));
return (init_state__45856__auto___49135.cljs$core$IFn$_invoke$arity$2 ? init_state__45856__auto___49135.cljs$core$IFn$_invoke$arity$2(G__49097,G__49098) : init_state__45856__auto___49135.call(null,G__49097,G__49098));
})()});
return obj49096;
})());
} else {
(this__45855__auto__.state = (function (){var obj49100 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49100;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__45853__auto___49133);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__45853__auto___49136 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","label","list/label",1746874574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","people","list/people",1438389142),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.Person)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__49101){
var map__49102 = p__49101;
var map__49102__$1 = cljs.core.__destructure_map(map__49102);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49102__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),label,new cljs.core.Keyword("list","people","list/people",1438389142),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,"Friends"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49103 = app.ui.Person;
var G__49104 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sally",new cljs.core.Keyword(null,"age","age",-604307804),(32)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49103,G__49104) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49103,G__49104));
})(),(function (){var G__49105 = app.ui.Person;
var G__49106 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Joe",new cljs.core.Keyword(null,"age","age",-604307804),(22)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49105,G__49106) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49105,G__49106));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49107 = app.ui.Person;
var G__49108 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Fred",new cljs.core.Keyword(null,"age","age",-604307804),(11)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49107,G__49108) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49107,G__49108));
})(),(function (){var G__49109 = app.ui.Person;
var G__49110 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bobby",new cljs.core.Keyword(null,"age","age",-604307804),(55)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49109,G__49110) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49109,G__49110));
})()], null))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49111 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__49111__$1 = cljs.core.__destructure_map(map__49111);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49111__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49111__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
var delete_person = (function (name){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49112 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-name","list-name",-32600364),label,new cljs.core.Keyword(null,"name","name",1843675177),name], null);
return (app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1 ? app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1(G__49112) : app.mutations.delete_person.call(null,G__49112));
})()], null));
});
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
var G__49113 = (function (){var G__49114 = p;
var G__49115 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),delete_person], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__49114,G__49115) : com.fulcrologic.fulcro.components.computed.call(null,G__49114,G__49115));
})();
return (app.ui.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person.cljs$core$IFn$_invoke$arity$1(G__49113) : app.ui.ui_person.call(null,G__49113));
}),people)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__45854__auto__){
var this__45855__auto__ = this;
var temp__5751__auto___49137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45853__auto___49136,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49137)){
var init_state__45856__auto___49138 = temp__5751__auto___49137;
(this__45855__auto__.state = (function (){var obj49117 = ({"fulcro$state":(function (){var G__49118 = this__45855__auto__;
var G__49119 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45854__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45854__auto__,"fulcro$value"));
return (init_state__45856__auto___49138.cljs$core$IFn$_invoke$arity$2 ? init_state__45856__auto___49138.cljs$core$IFn$_invoke$arity$2(G__49118,G__49119) : init_state__45856__auto___49138.call(null,G__49118,G__49119));
})()});
return obj49117;
})());
} else {
(this__45855__auto__.state = (function (){var obj49121 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49121;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__45853__auto___49136);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__45853__auto___49139 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"friends","friends",-127631374),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemies","enemies",2114285722),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(function (){var G__49122 = app.ui.PersonList;
var G__49123 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Friends"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49122,G__49123) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49122,G__49123));
})(),new cljs.core.Keyword(null,"enemies","enemies",2114285722),(function (){var G__49124 = app.ui.PersonList;
var G__49125 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Enemies"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49124,G__49125) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49124,G__49125));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49126 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__49126__$1 = cljs.core.__destructure_map(map__49126);
var friends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49126__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49126__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(friends) : app.ui.ui_person_list.call(null,friends)),(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(enemies) : app.ui.ui_person_list.call(null,enemies))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__45854__auto__){
var this__45855__auto__ = this;
var temp__5751__auto___49140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45853__auto___49139,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49140)){
var init_state__45856__auto___49141 = temp__5751__auto___49140;
(this__45855__auto__.state = (function (){var obj49128 = ({"fulcro$state":(function (){var G__49129 = this__45855__auto__;
var G__49130 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45854__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45854__auto__,"fulcro$value"));
return (init_state__45856__auto___49141.cljs$core$IFn$_invoke$arity$2 ? init_state__45856__auto___49141.cljs$core$IFn$_invoke$arity$2(G__49129,G__49130) : init_state__45856__auto___49141.call(null,G__49129,G__49130));
})()});
return obj49128;
})());
} else {
(this__45855__auto__.state = (function (){var obj49132 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49132;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__45853__auto___49139);

//# sourceMappingURL=app.ui.js.map
