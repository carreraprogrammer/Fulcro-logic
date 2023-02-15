goog.provide('app.ui');

var options__45787__auto___49097 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__49060){
var map__49061 = p__49060;
var map__49061__$1 = cljs.core.__destructure_map(map__49061);
var params = map__49061__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49061__$1,new cljs.core.Keyword(null,"age","age",-604307804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),name,new cljs.core.Keyword("person","age","person/age",387881455),age], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49062 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__49062__$1 = cljs.core.__destructure_map(map__49062);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49062__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49062__$1,new cljs.core.Keyword("person","age","person/age",387881455));
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
var temp__5751__auto___49098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45787__auto___49097,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49098)){
var init_state__45790__auto___49099 = temp__5751__auto___49098;
(this__45789__auto__.state = (function (){var obj49064 = ({"fulcro$state":(function (){var G__49065 = this__45789__auto__;
var G__49066 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45788__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45788__auto__,"fulcro$value"));
return (init_state__45790__auto___49099.cljs$core$IFn$_invoke$arity$2 ? init_state__45790__auto___49099.cljs$core$IFn$_invoke$arity$2(G__49065,G__49066) : init_state__45790__auto___49099.call(null,G__49065,G__49066));
})()});
return obj49064;
})());
} else {
(this__45789__auto__.state = (function (){var obj49068 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49068;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__45787__auto___49097);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__45787__auto___49100 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__49069){
var map__49070 = p__49069;
var map__49070__$1 = cljs.core.__destructure_map(map__49070);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49070__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),label,new cljs.core.Keyword("list","people","list/people",1438389142),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,"Friends"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49071 = app.ui.Person;
var G__49072 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sally",new cljs.core.Keyword(null,"age","age",-604307804),(32)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49071,G__49072) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49071,G__49072));
})(),(function (){var G__49073 = app.ui.Person;
var G__49074 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Joe",new cljs.core.Keyword(null,"age","age",-604307804),(22)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49073,G__49074) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49073,G__49074));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49075 = app.ui.Person;
var G__49076 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Fred",new cljs.core.Keyword(null,"age","age",-604307804),(11)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49075,G__49076) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49075,G__49076));
})(),(function (){var G__49077 = app.ui.Person;
var G__49078 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bobby",new cljs.core.Keyword(null,"age","age",-604307804),(55)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49077,G__49078) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49077,G__49078));
})()], null))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49079 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__49079__$1 = cljs.core.__destructure_map(map__49079);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49079__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49079__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
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
var temp__5751__auto___49101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45787__auto___49100,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49101)){
var init_state__45790__auto___49102 = temp__5751__auto___49101;
(this__45789__auto__.state = (function (){var obj49081 = ({"fulcro$state":(function (){var G__49082 = this__45789__auto__;
var G__49083 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45788__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45788__auto__,"fulcro$value"));
return (init_state__45790__auto___49102.cljs$core$IFn$_invoke$arity$2 ? init_state__45790__auto___49102.cljs$core$IFn$_invoke$arity$2(G__49082,G__49083) : init_state__45790__auto___49102.call(null,G__49082,G__49083));
})()});
return obj49081;
})());
} else {
(this__45789__auto__.state = (function (){var obj49085 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49085;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__45787__auto___49100);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__45787__auto___49103 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(function (){var G__49086 = app.ui.PersonList;
var G__49087 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Friends"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49086,G__49087) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49086,G__49087));
})(),new cljs.core.Keyword(null,"enemies","enemies",2114285722),(function (){var G__49088 = app.ui.PersonList;
var G__49089 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Enemies"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__49088,G__49089) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__49088,G__49089));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49090 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__49090__$1 = cljs.core.__destructure_map(map__49090);
var friends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49090__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49090__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
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
var temp__5751__auto___49104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45787__auto___49103,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49104)){
var init_state__45790__auto___49105 = temp__5751__auto___49104;
(this__45789__auto__.state = (function (){var obj49092 = ({"fulcro$state":(function (){var G__49093 = this__45789__auto__;
var G__49094 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45788__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45788__auto__,"fulcro$value"));
return (init_state__45790__auto___49105.cljs$core$IFn$_invoke$arity$2 ? init_state__45790__auto___49105.cljs$core$IFn$_invoke$arity$2(G__49093,G__49094) : init_state__45790__auto___49105.call(null,G__49093,G__49094));
})()});
return obj49092;
})());
} else {
(this__45789__auto__.state = (function (){var obj49096 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49096;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__45787__auto___49103);

//# sourceMappingURL=app.ui.js.map
