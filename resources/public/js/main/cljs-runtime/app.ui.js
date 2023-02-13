goog.provide('app.ui');

var options__48898__auto___52970 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52956 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52956__$1 = cljs.core.__destructure_map(map__52956);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52956__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52956__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Age: ",com.fulcrologic.fulcro.components.force_children(age)])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Person = (function app$ui$Person(props__48899__auto__){
var this__48900__auto__ = this;
var temp__5751__auto___52971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48898__auto___52970,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52971)){
var init_state__48901__auto___52972 = temp__5751__auto___52971;
(this__48900__auto__.state = (function (){var obj52958 = ({"fulcro$state":(function (){var G__52959 = this__48900__auto__;
var G__52960 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48899__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48899__auto__,"fulcro$value"));
return (init_state__48901__auto___52972.cljs$core$IFn$_invoke$arity$2 ? init_state__48901__auto___52972.cljs$core$IFn$_invoke$arity$2(G__52959,G__52960) : init_state__48901__auto___52972.call(null,G__52959,G__52960));
})()});
return obj52958;
})());
} else {
(this__48900__auto__.state = (function (){var obj52962 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52962;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__48898__auto___52970);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.Person);

var options__48898__auto___52973 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52963 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Joe",new cljs.core.Keyword("person","age","person/age",387881455),(22)], null);
return (app.ui.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person.cljs$core$IFn$_invoke$arity$1(G__52963) : app.ui.ui_person.call(null,G__52963));
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__48899__auto__){
var this__48900__auto__ = this;
var temp__5751__auto___52974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48898__auto___52973,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52974)){
var init_state__48901__auto___52975 = temp__5751__auto___52974;
(this__48900__auto__.state = (function (){var obj52965 = ({"fulcro$state":(function (){var G__52966 = this__48900__auto__;
var G__52967 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48899__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48899__auto__,"fulcro$value"));
return (init_state__48901__auto___52975.cljs$core$IFn$_invoke$arity$2 ? init_state__48901__auto___52975.cljs$core$IFn$_invoke$arity$2(G__52966,G__52967) : init_state__48901__auto___52975.call(null,G__52966,G__52967));
})()});
return obj52965;
})());
} else {
(this__48900__auto__.state = (function (){var obj52969 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52969;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__48898__auto___52973);

//# sourceMappingURL=app.ui.js.map
