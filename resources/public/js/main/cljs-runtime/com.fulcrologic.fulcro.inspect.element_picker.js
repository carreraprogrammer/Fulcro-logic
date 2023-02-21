goog.provide('com.fulcrologic.fulcro.inspect.element_picker');
goog.scope(function(){
  com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
com.fulcrologic.fulcro.inspect.element_picker.base_me_style = ({"box-sizing": "border-box", "color": "#fff", "font-size": "12px", "overflow": "hidden", "background": "rgba(67, 132, 208, 0.5)", "z-index": "999999", "padding": "3px 5px", "display": "block", "position": "absolute", "pointer-events": "none", "font-family": "monospace"});
com.fulcrologic.fulcro.inspect.element_picker.base_ml_style = ({"box-sizing": "border-box", "color": "#ffab66", "white-space": "nowrap", "font-size": "10px", "font-weight": "bold", "background": "#333740", "z-index": "999999", "padding": "6px 8px", "display": "block", "position": "absolute", "border-radius": "3px", "pointer-events": "none", "font-family": "sans-serif"});
com.fulcrologic.fulcro.inspect.element_picker.me_style = (function com$fulcrologic$fulcro$inspect$element_picker$me_style(style){
var result = ({});
com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.extend(result,com.fulcrologic.fulcro.inspect.element_picker.base_me_style,style);

return result;
});
com.fulcrologic.fulcro.inspect.element_picker.ml_style = (function com$fulcrologic$fulcro$inspect$element_picker$ml_style(style){
var result = ({});
com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.extend(result,com.fulcrologic.fulcro.inspect.element_picker.base_ml_style,style);

return result;
});
com.fulcrologic.fulcro.inspect.element_picker.marker_element = (function com$fulcrologic$fulcro$inspect$element_picker$marker_element(){
var id = "__fulcro_inspect_marker";
var or__4253__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__57305 = document.createElement("div");
com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.set(G__57305,"id",id);

goog.dom.appendChild(document.body,G__57305);

return G__57305;
}
});
com.fulcrologic.fulcro.inspect.element_picker.marker_label_element = (function com$fulcrologic$fulcro$inspect$element_picker$marker_label_element(){
var id = "__fulcro_inspect_marker_label";
var or__4253__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__57310 = document.createElement("div");
com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.set(G__57310,"id",id);

goog.dom.appendChild(document.body,G__57310);

return G__57310;
}
});
com.fulcrologic.fulcro.inspect.element_picker.react_raw_instance = (function com$fulcrologic$fulcro$inspect$element_picker$react_raw_instance(node){
var temp__5751__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57311_SHARP_){
return ((clojure.string.starts_with_QMARK_(p1__57311_SHARP_,"__reactInternalInstance$")) || (clojure.string.starts_with_QMARK_(p1__57311_SHARP_,"__reactFiber$")));
}),com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.getKeys(node)));
if(cljs.core.truth_(temp__5751__auto__)){
var instance_key = temp__5751__auto__;
return com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.get(node,instance_key);
} else {
return null;
}
});
com.fulcrologic.fulcro.inspect.element_picker.react_instance = (function com$fulcrologic$fulcro$inspect$element_picker$react_instance(node){
var temp__5751__auto__ = com.fulcrologic.fulcro.inspect.element_picker.react_raw_instance(node);
if(cljs.core.truth_(temp__5751__auto__)){
var raw = temp__5751__auto__;
var instance = (function (){var or__4253__auto__ = com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.getValueByKeys(raw,"_currentElement","_owner","_instance");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.getValueByKeys(raw,"return","stateNode");
}
})();
if((((instance == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.getValueByKeys(raw,"return","type"),com.fulcrologic.fulcro.react.error_boundaries.BodyContainer)))){
return com.fulcrologic.fulcro.inspect.element_picker.goog$module$goog$object.getValueByKeys(raw,"return","return","return","stateNode");
} else {
return instance;
}
} else {
return null;
}
});
com.fulcrologic.fulcro.inspect.element_picker.pick_element = (function com$fulcrologic$fulcro$inspect$element_picker$pick_element(p__57320){
var map__57321 = p__57320;
var map__57321__$1 = cljs.core.__destructure_map(map__57321);
var on_pick = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57321__$1,new cljs.core.Keyword(null,"on-pick","on-pick",-1995648316),cljs.core.identity);
var marker = com.fulcrologic.fulcro.inspect.element_picker.marker_element();
var marker_label = com.fulcrologic.fulcro.inspect.element_picker.marker_label_element();
var current = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var over_handler = (function (e){
var target = e.target;
var target__$1 = target;
while(true){
if(cljs.core.truth_(target__$1)){
var instance = (function (){var G__57326 = target__$1;
if((G__57326 == null)){
return null;
} else {
return com.fulcrologic.fulcro.inspect.element_picker.react_instance(G__57326);
}
})();
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(instance)){
e.stopPropagation();

cljs.core.reset_BANG_(current,instance);

goog.dom.setTextContent(marker_label,(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(instance) : com.fulcrologic.fulcro.components.component_name.call(null,instance)));

var target_SINGLEQUOTE_ = module$node_modules$react_dom$index.findDOMNode(instance);
var offset = goog.style.getPageOffset(target_SINGLEQUOTE_);
var size = goog.style.getSize(target_SINGLEQUOTE_);
goog.style.setStyle(marker_label,com.fulcrologic.fulcro.inspect.element_picker.ml_style(({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.x),"px"].join(''), "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset.y - (36))),"px"].join('')})));

return goog.style.setStyle(marker,com.fulcrologic.fulcro.inspect.element_picker.me_style(({"width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.width),"px"].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.height),"px"].join(''), "left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.x),"px"].join(''), "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.y),"px"].join('')})));
} else {
var G__57349 = goog.dom.getParentElement(target__$1);
target__$1 = G__57349;
continue;
}
} else {
return null;
}
break;
}
});
var pick_handler = (function com$fulcrologic$fulcro$inspect$element_picker$pick_element_$_self(){
var G__57327_57350 = cljs.core.deref(current);
(on_pick.cljs$core$IFn$_invoke$arity$1 ? on_pick.cljs$core$IFn$_invoke$arity$1(G__57327_57350) : on_pick.call(null,G__57327_57350));

goog.style.setStyle(marker,({"display": "none"}));

goog.style.setStyle(marker_label,({"display": "none"}));

removeEventListener("click",com$fulcrologic$fulcro$inspect$element_picker$pick_element_$_self);

return removeEventListener("mouseover",over_handler);
});
goog.style.setStyle(marker,com.fulcrologic.fulcro.inspect.element_picker.me_style(({"display": "block", "top": "-100000px", "left": "-100000px"})));

goog.style.setStyle(marker_label,com.fulcrologic.fulcro.inspect.element_picker.ml_style(({"display": "block", "top": "-100000px", "left": "-100000px"})));

addEventListener("mouseover",over_handler);

return setTimeout((function (){
return addEventListener("click",pick_handler);
}),(10));
});
com.fulcrologic.fulcro.inspect.element_picker.inspect_component = (function com$fulcrologic$fulcro$inspect$element_picker$inspect_component(comp){
var state_map = (function (){var G__57329 = com.fulcrologic.fulcro.components.any__GT_app(comp);
var G__57329__$1 = (((G__57329 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__57329));
if((G__57329__$1 == null)){
return null;
} else {
return cljs.core.deref(G__57329__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("fulcro.inspect.ui.element","display-name","fulcro.inspect.ui.element/display-name",-1091845070),(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(comp) : com.fulcrologic.fulcro.components.component_name.call(null,comp)),new cljs.core.Keyword("fulcro.inspect.ui.element","props","fulcro.inspect.ui.element/props",-1984763386),(com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(comp) : com.fulcrologic.fulcro.components.props.call(null,comp)),new cljs.core.Keyword("fulcro.inspect.ui.element","ident","fulcro.inspect.ui.element/ident",-1839254913),(function (){try{return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(comp) : com.fulcrologic.fulcro.components.get_ident.call(null,comp));
}catch (e57332){var _ = e57332;
return null;
}})(),new cljs.core.Keyword("fulcro.inspect.ui.element","static-query","fulcro.inspect.ui.element/static-query",1120589305),(function (){try{var G__57334 = comp;
var G__57334__$1 = (((G__57334 == null))?null:com.fulcrologic.fulcro.components.react_type(G__57334));
if((G__57334__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(G__57334__$1);
}
}catch (e57333){var _ = e57333;
return null;
}})(),new cljs.core.Keyword("fulcro.inspect.ui.element","query","fulcro.inspect.ui.element/query",113020567),(function (){try{var G__57336 = comp;
var G__57336__$1 = (((G__57336 == null))?null:com.fulcrologic.fulcro.components.react_type(G__57336));
if((G__57336__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(G__57336__$1,state_map);
}
}catch (e57335){var _ = e57335;
return null;
}})()], null);
});
/**
 * Install element picker support.
 */
com.fulcrologic.fulcro.inspect.element_picker.install_BANG_ = (function com$fulcrologic$fulcro$inspect$element_picker$install_BANG_(){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.element-picker",null,159,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Installing Inspect Element Picker"], null);
}),null)),null,1512131470,null);

cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.run_picker,(function (data){
var map__57339 = data;
var map__57339__$1 = cljs.core.__destructure_map(map__57339);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57339__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
return com.fulcrologic.fulcro.inspect.element_picker.pick_element(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid,new cljs.core.Keyword(null,"on-pick","on-pick",-1995648316),(function (comp){
if(cljs.core.truth_(comp)){
var details = com.fulcrologic.fulcro.inspect.element_picker.inspect_component(comp);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.element","set-element","fulcro.inspect.ui.element/set-element",1898236728,null),null,(1),null)),(new cljs.core.List(null,details,null,(1),null)))))], null));
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","picking?","ui/picking?",969621556),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)))))], null));
}
})], null));
}));

return true;
});

//# sourceMappingURL=com.fulcrologic.fulcro.inspect.element_picker.js.map
