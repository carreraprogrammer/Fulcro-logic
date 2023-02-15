goog.provide('app.ui');

var options__45787__auto___49005 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__48968){
var map__48969 = p__48968;
var map__48969__$1 = cljs.core.__destructure_map(map__48969);
var params = map__48969__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"age","age",-604307804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),name,new cljs.core.Keyword("person","age","person/age",387881455),age], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48970 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__48970__$1 = cljs.core.__destructure_map(map__48970);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"(age: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(age),")"].join('')], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Person = (function app$ui$Person(props__45788__auto__){
var this__45789__auto__ = this;
var temp__5751__auto___49006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45787__auto___49005,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49006)){
var init_state__45790__auto___49007 = temp__5751__auto___49006;
(this__45789__auto__.state = (function (){var obj48972 = ({"fulcro$state":(function (){var G__48973 = this__45789__auto__;
var G__48974 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45788__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45788__auto__,"fulcro$value"));
return (init_state__45790__auto___49007.cljs$core$IFn$_invoke$arity$2 ? init_state__45790__auto___49007.cljs$core$IFn$_invoke$arity$2(G__48973,G__48974) : init_state__45790__auto___49007.call(null,G__48973,G__48974));
})()});
return obj48972;
})());
} else {
(this__45789__auto__.state = (function (){var obj48976 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48976;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__45787__auto___49005);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__45787__auto___49008 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__48977){
var map__48978 = p__48977;
var map__48978__$1 = cljs.core.__destructure_map(map__48978);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48978__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),label,new cljs.core.Keyword("list","people","list/people",1438389142),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,"Friends"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48979 = app.ui.Person;
var G__48980 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sally",new cljs.core.Keyword(null,"age","age",-604307804),(32)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__48979,G__48980) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__48979,G__48980));
})(),(function (){var G__48981 = app.ui.Person;
var G__48982 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Joe",new cljs.core.Keyword(null,"age","age",-604307804),(22)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__48981,G__48982) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__48981,G__48982));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48983 = app.ui.Person;
var G__48984 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Fred",new cljs.core.Keyword(null,"age","age",-604307804),(11)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__48983,G__48984) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__48983,G__48984));
})(),(function (){var G__48985 = app.ui.Person;
var G__48986 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bobby",new cljs.core.Keyword(null,"age","age",-604307804),(55)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__48985,G__48986) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__48985,G__48986));
})()], null))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48987 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__48987__$1 = cljs.core.__destructure_map(map__48987);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.ui_person,people)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__45788__auto__){
var this__45789__auto__ = this;
var temp__5751__auto___49009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45787__auto___49008,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49009)){
var init_state__45790__auto___49010 = temp__5751__auto___49009;
(this__45789__auto__.state = (function (){var obj48989 = ({"fulcro$state":(function (){var G__48990 = this__45789__auto__;
var G__48991 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45788__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45788__auto__,"fulcro$value"));
return (init_state__45790__auto___49010.cljs$core$IFn$_invoke$arity$2 ? init_state__45790__auto___49010.cljs$core$IFn$_invoke$arity$2(G__48990,G__48991) : init_state__45790__auto___49010.call(null,G__48990,G__48991));
})()});
return obj48989;
})());
} else {
(this__45789__auto__.state = (function (){var obj48993 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48993;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__45787__auto___49008);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__45787__auto___49011 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(function (){var G__48994 = app.ui.PersonList;
var G__48995 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Friends"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__48994,G__48995) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__48994,G__48995));
})(),new cljs.core.Keyword(null,"enemies","enemies",2114285722),(function (){var G__48996 = app.ui.PersonList;
var G__48997 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Enemies"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__48996,G__48997) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__48996,G__48997));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48998 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__48998__$1 = cljs.core.__destructure_map(map__48998);
var friends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48998__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48998__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(friends) : app.ui.ui_person_list.call(null,friends)),(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(enemies) : app.ui.ui_person_list.call(null,enemies))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__45788__auto__){
var this__45789__auto__ = this;
var temp__5751__auto___49012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45787__auto___49011,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49012)){
var init_state__45790__auto___49013 = temp__5751__auto___49012;
(this__45789__auto__.state = (function (){var obj49000 = ({"fulcro$state":(function (){var G__49001 = this__45789__auto__;
var G__49002 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45788__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45788__auto__,"fulcro$value"));
return (init_state__45790__auto___49013.cljs$core$IFn$_invoke$arity$2 ? init_state__45790__auto___49013.cljs$core$IFn$_invoke$arity$2(G__49001,G__49002) : init_state__45790__auto___49013.call(null,G__49001,G__49002));
})()});
return obj49000;
})());
} else {
(this__45789__auto__.state = (function (){var obj49004 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49004;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__45787__auto___49011);

//# sourceMappingURL=app.ui.js.map
