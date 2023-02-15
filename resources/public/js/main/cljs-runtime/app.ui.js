goog.provide('app.ui');

var options__48968__auto___52311 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__52274){
var map__52275 = p__52274;
var map__52275__$1 = cljs.core.__destructure_map(map__52275);
var params = map__52275__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52275__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52275__$1,new cljs.core.Keyword(null,"age","age",-604307804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),name,new cljs.core.Keyword("person","age","person/age",387881455),age], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52276 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52276__$1 = cljs.core.__destructure_map(map__52276);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52276__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52276__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"(age: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(age),")"].join('')], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Person = (function app$ui$Person(props__48969__auto__){
var this__48970__auto__ = this;
var temp__5751__auto___52312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48968__auto___52311,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52312)){
var init_state__48971__auto___52313 = temp__5751__auto___52312;
(this__48970__auto__.state = (function (){var obj52278 = ({"fulcro$state":(function (){var G__52279 = this__48970__auto__;
var G__52280 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48969__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48969__auto__,"fulcro$value"));
return (init_state__48971__auto___52313.cljs$core$IFn$_invoke$arity$2 ? init_state__48971__auto___52313.cljs$core$IFn$_invoke$arity$2(G__52279,G__52280) : init_state__48971__auto___52313.call(null,G__52279,G__52280));
})()});
return obj52278;
})());
} else {
(this__48970__auto__.state = (function (){var obj52282 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52282;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__48968__auto___52311);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__48968__auto___52314 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","label","list/label",1746874574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","people","list/people",1438389142),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.Person)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__52283){
var map__52284 = p__52283;
var map__52284__$1 = cljs.core.__destructure_map(map__52284);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),label,new cljs.core.Keyword("list","people","list/people",1438389142),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,"Friends"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52285 = app.ui.Person;
var G__52286 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sally",new cljs.core.Keyword(null,"age","age",-604307804),(32)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52285,G__52286) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52285,G__52286));
})(),(function (){var G__52287 = app.ui.Person;
var G__52288 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Joe",new cljs.core.Keyword(null,"age","age",-604307804),(22)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52287,G__52288) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52287,G__52288));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52289 = app.ui.Person;
var G__52290 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Fred",new cljs.core.Keyword(null,"age","age",-604307804),(11)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52289,G__52290) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52289,G__52290));
})(),(function (){var G__52291 = app.ui.Person;
var G__52292 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bobby",new cljs.core.Keyword(null,"age","age",-604307804),(55)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52291,G__52292) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52291,G__52292));
})()], null))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52293 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52293__$1 = cljs.core.__destructure_map(map__52293);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52293__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52293__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.ui_person,people)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__48969__auto__){
var this__48970__auto__ = this;
var temp__5751__auto___52315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48968__auto___52314,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52315)){
var init_state__48971__auto___52316 = temp__5751__auto___52315;
(this__48970__auto__.state = (function (){var obj52295 = ({"fulcro$state":(function (){var G__52296 = this__48970__auto__;
var G__52297 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48969__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48969__auto__,"fulcro$value"));
return (init_state__48971__auto___52316.cljs$core$IFn$_invoke$arity$2 ? init_state__48971__auto___52316.cljs$core$IFn$_invoke$arity$2(G__52296,G__52297) : init_state__48971__auto___52316.call(null,G__52296,G__52297));
})()});
return obj52295;
})());
} else {
(this__48970__auto__.state = (function (){var obj52299 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52299;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__48968__auto___52314);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__48968__auto___52317 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(function (){var G__52300 = app.ui.PersonList;
var G__52301 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Friends"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52300,G__52301) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52300,G__52301));
})(),new cljs.core.Keyword(null,"enemies","enemies",2114285722),(function (){var G__52302 = app.ui.PersonList;
var G__52303 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Enemies"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__52302,G__52303) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__52302,G__52303));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52304 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52304__$1 = cljs.core.__destructure_map(map__52304);
var friends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52304__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52304__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(friends) : app.ui.ui_person_list.call(null,friends)),(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(enemies) : app.ui.ui_person_list.call(null,enemies))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__48969__auto__){
var this__48970__auto__ = this;
var temp__5751__auto___52318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48968__auto___52317,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52318)){
var init_state__48971__auto___52319 = temp__5751__auto___52318;
(this__48970__auto__.state = (function (){var obj52306 = ({"fulcro$state":(function (){var G__52307 = this__48970__auto__;
var G__52308 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48969__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48969__auto__,"fulcro$value"));
return (init_state__48971__auto___52319.cljs$core$IFn$_invoke$arity$2 ? init_state__48971__auto___52319.cljs$core$IFn$_invoke$arity$2(G__52307,G__52308) : init_state__48971__auto___52319.call(null,G__52307,G__52308));
})()});
return obj52306;
})());
} else {
(this__48970__auto__.state = (function (){var obj52310 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52310;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__48968__auto___52317);

//# sourceMappingURL=app.ui.js.map
