goog.provide('app.client');
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined')){
} else {
app.client.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}

var options__48898__auto___52950 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52936 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52936__$1 = cljs.core.__destructure_map(map__52936);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Age: ",com.fulcrologic.fulcro.components.force_children(age)])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Person = (function app$client$Person(props__48899__auto__){
var this__48900__auto__ = this;
var temp__5751__auto___52951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48898__auto___52950,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52951)){
var init_state__48901__auto___52952 = temp__5751__auto___52951;
(this__48900__auto__.state = (function (){var obj52938 = ({"fulcro$state":(function (){var G__52939 = this__48900__auto__;
var G__52940 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48899__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48899__auto__,"fulcro$value"));
return (init_state__48901__auto___52952.cljs$core$IFn$_invoke$arity$2 ? init_state__48901__auto___52952.cljs$core$IFn$_invoke$arity$2(G__52939,G__52940) : init_state__48901__auto___52952.call(null,G__52939,G__52940));
})()});
return obj52938;
})());
} else {
(this__48900__auto__.state = (function (){var obj52942 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52942;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__48898__auto___52950);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.Person);

var options__48898__auto___52953 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52943 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Daniel",new cljs.core.Keyword("person","age","person/age",387881455),(22)], null);
return (app.client.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person.cljs$core$IFn$_invoke$arity$1(G__52943) : app.client.ui_person.call(null,G__52943));
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Root = (function app$client$Root(props__48899__auto__){
var this__48900__auto__ = this;
var temp__5751__auto___52954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48898__auto___52953,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52954)){
var init_state__48901__auto___52955 = temp__5751__auto___52954;
(this__48900__auto__.state = (function (){var obj52945 = ({"fulcro$state":(function (){var G__52946 = this__48900__auto__;
var G__52947 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48899__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48899__auto__,"fulcro$value"));
return (init_state__48901__auto___52955.cljs$core$IFn$_invoke$arity$2 ? init_state__48901__auto___52955.cljs$core$IFn$_invoke$arity$2(G__52946,G__52947) : init_state__48901__auto___52955.call(null,G__52946,G__52947));
})()});
return obj52945;
})());
} else {
(this__48900__auto__.state = (function (){var obj52949 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52949;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__48898__auto___52953);
/**
 * Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build.
 */
app.client.init = (function app$client$init(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

return console.log("Loaded");
});
goog.exportSymbol('app.client.init', app.client.init);
/**
 * During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn
 */
app.client.refresh = (function app$client$refresh(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(app.client.app);

return console.log("Hot reload");
});
goog.exportSymbol('app.client.refresh', app.client.refresh);

//# sourceMappingURL=app.client.js.map
