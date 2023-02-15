goog.provide('app.ui');

var options__45732__auto___49286 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49263 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__49263__$1 = cljs.core.__destructure_map(map__49263);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49263__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49263__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (age: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(age),")"].join('')], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Person = (function app$ui$Person(props__45733__auto__){
var this__45734__auto__ = this;
var temp__5751__auto___49287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45732__auto___49286,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49287)){
var init_state__45735__auto___49288 = temp__5751__auto___49287;
(this__45734__auto__.state = (function (){var obj49265 = ({"fulcro$state":(function (){var G__49266 = this__45734__auto__;
var G__49267 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45733__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45733__auto__,"fulcro$value"));
return (init_state__45735__auto___49288.cljs$core$IFn$_invoke$arity$2 ? init_state__45735__auto___49288.cljs$core$IFn$_invoke$arity$2(G__49266,G__49267) : init_state__45735__auto___49288.call(null,G__49266,G__49267));
})()});
return obj49265;
})());
} else {
(this__45734__auto__.state = (function (){var obj49269 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49269;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__45732__auto___49286);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__45732__auto___49289 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49270 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__49270__$1 = cljs.core.__destructure_map(map__49270);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49270__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49270__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.ui_person,people)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__45733__auto__){
var this__45734__auto__ = this;
var temp__5751__auto___49290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45732__auto___49289,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49290)){
var init_state__45735__auto___49291 = temp__5751__auto___49290;
(this__45734__auto__.state = (function (){var obj49272 = ({"fulcro$state":(function (){var G__49273 = this__45734__auto__;
var G__49274 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45733__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45733__auto__,"fulcro$value"));
return (init_state__45735__auto___49291.cljs$core$IFn$_invoke$arity$2 ? init_state__45735__auto___49291.cljs$core$IFn$_invoke$arity$2(G__49273,G__49274) : init_state__45735__auto___49291.call(null,G__49273,G__49274));
})()});
return obj49272;
})());
} else {
(this__45734__auto__.state = (function (){var obj49276 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49276;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__45732__auto___49289);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__45732__auto___49292 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49277 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__49277__$1 = cljs.core.__destructure_map(map__49277);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49277__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var ui_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),"Friends",new cljs.core.Keyword("list","people","list/people",1438389142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Sally",new cljs.core.Keyword("person","age","person/age",387881455),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Joe",new cljs.core.Keyword("person","age","person/age",387881455),(22)], null)], null)], null),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),"Enemies",new cljs.core.Keyword("list","people","list/people",1438389142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Fred",new cljs.core.Keyword("person","age","person/age",387881455),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Bobby",new cljs.core.Keyword("person","age","person/age",387881455),(55)], null)], null)], null)], null);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49278 = new cljs.core.Keyword(null,"friends","friends",-127631374).cljs$core$IFn$_invoke$arity$1(ui_data);
return (app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(G__49278) : app.ui.ui_person_list.call(null,G__49278));
})(),(function (){var G__49279 = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(ui_data);
return (app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(G__49279) : app.ui.ui_person_list.call(null,G__49279));
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__45733__auto__){
var this__45734__auto__ = this;
var temp__5751__auto___49293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45732__auto___49292,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___49293)){
var init_state__45735__auto___49294 = temp__5751__auto___49293;
(this__45734__auto__.state = (function (){var obj49281 = ({"fulcro$state":(function (){var G__49282 = this__45734__auto__;
var G__49283 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45733__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45733__auto__,"fulcro$value"));
return (init_state__45735__auto___49294.cljs$core$IFn$_invoke$arity$2 ? init_state__45735__auto___49294.cljs$core$IFn$_invoke$arity$2(G__49282,G__49283) : init_state__45735__auto___49294.call(null,G__49282,G__49283));
})()});
return obj49281;
})());
} else {
(this__45734__auto__.state = (function (){var obj49285 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49285;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__45732__auto___49292);

//# sourceMappingURL=app.ui.js.map
