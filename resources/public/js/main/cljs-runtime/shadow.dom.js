goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_63890 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_63890(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_63891 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_63891(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__63121 = coll;
var G__63122 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__63121,G__63122) : shadow.dom.lazy_native_coll_seq.call(null,G__63121,G__63122));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__63154 = arguments.length;
switch (G__63154) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__63161 = arguments.length;
switch (G__63161) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__63174 = arguments.length;
switch (G__63174) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__63191 = arguments.length;
switch (G__63191) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__63197 = arguments.length;
switch (G__63197) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__63216 = arguments.length;
switch (G__63216) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e63238){if((e63238 instanceof Object)){
var e = e63238;
return console.log("didnt support attachEvent",el,e);
} else {
throw e63238;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__63241 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__63242 = null;
var count__63243 = (0);
var i__63244 = (0);
while(true){
if((i__63244 < count__63243)){
var el = chunk__63242.cljs$core$IIndexed$_nth$arity$2(null,i__63244);
var handler_63908__$1 = ((function (seq__63241,chunk__63242,count__63243,i__63244,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__63241,chunk__63242,count__63243,i__63244,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_63908__$1);


var G__63909 = seq__63241;
var G__63910 = chunk__63242;
var G__63911 = count__63243;
var G__63912 = (i__63244 + (1));
seq__63241 = G__63909;
chunk__63242 = G__63910;
count__63243 = G__63911;
i__63244 = G__63912;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63241);
if(temp__5753__auto__){
var seq__63241__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63241__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63241__$1);
var G__63913 = cljs.core.chunk_rest(seq__63241__$1);
var G__63914 = c__4679__auto__;
var G__63915 = cljs.core.count(c__4679__auto__);
var G__63916 = (0);
seq__63241 = G__63913;
chunk__63242 = G__63914;
count__63243 = G__63915;
i__63244 = G__63916;
continue;
} else {
var el = cljs.core.first(seq__63241__$1);
var handler_63917__$1 = ((function (seq__63241,chunk__63242,count__63243,i__63244,el,seq__63241__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__63241,chunk__63242,count__63243,i__63244,el,seq__63241__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_63917__$1);


var G__63918 = cljs.core.next(seq__63241__$1);
var G__63919 = null;
var G__63920 = (0);
var G__63921 = (0);
seq__63241 = G__63918;
chunk__63242 = G__63919;
count__63243 = G__63920;
i__63244 = G__63921;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__63255 = arguments.length;
switch (G__63255) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__63256 = cljs.core.seq(events);
var chunk__63257 = null;
var count__63258 = (0);
var i__63259 = (0);
while(true){
if((i__63259 < count__63258)){
var vec__63266 = chunk__63257.cljs$core$IIndexed$_nth$arity$2(null,i__63259);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63266,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63923 = seq__63256;
var G__63924 = chunk__63257;
var G__63925 = count__63258;
var G__63926 = (i__63259 + (1));
seq__63256 = G__63923;
chunk__63257 = G__63924;
count__63258 = G__63925;
i__63259 = G__63926;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63256);
if(temp__5753__auto__){
var seq__63256__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63256__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63256__$1);
var G__63928 = cljs.core.chunk_rest(seq__63256__$1);
var G__63929 = c__4679__auto__;
var G__63930 = cljs.core.count(c__4679__auto__);
var G__63931 = (0);
seq__63256 = G__63928;
chunk__63257 = G__63929;
count__63258 = G__63930;
i__63259 = G__63931;
continue;
} else {
var vec__63269 = cljs.core.first(seq__63256__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63269,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63933 = cljs.core.next(seq__63256__$1);
var G__63934 = null;
var G__63935 = (0);
var G__63936 = (0);
seq__63256 = G__63933;
chunk__63257 = G__63934;
count__63258 = G__63935;
i__63259 = G__63936;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__63272 = cljs.core.seq(styles);
var chunk__63273 = null;
var count__63274 = (0);
var i__63275 = (0);
while(true){
if((i__63275 < count__63274)){
var vec__63282 = chunk__63273.cljs$core$IIndexed$_nth$arity$2(null,i__63275);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63282,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__63937 = seq__63272;
var G__63938 = chunk__63273;
var G__63939 = count__63274;
var G__63940 = (i__63275 + (1));
seq__63272 = G__63937;
chunk__63273 = G__63938;
count__63274 = G__63939;
i__63275 = G__63940;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63272);
if(temp__5753__auto__){
var seq__63272__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63272__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63272__$1);
var G__63941 = cljs.core.chunk_rest(seq__63272__$1);
var G__63942 = c__4679__auto__;
var G__63943 = cljs.core.count(c__4679__auto__);
var G__63944 = (0);
seq__63272 = G__63941;
chunk__63273 = G__63942;
count__63274 = G__63943;
i__63275 = G__63944;
continue;
} else {
var vec__63285 = cljs.core.first(seq__63272__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63285,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63285,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__63945 = cljs.core.next(seq__63272__$1);
var G__63946 = null;
var G__63947 = (0);
var G__63948 = (0);
seq__63272 = G__63945;
chunk__63273 = G__63946;
count__63274 = G__63947;
i__63275 = G__63948;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__63290_63950 = key;
var G__63290_63951__$1 = (((G__63290_63950 instanceof cljs.core.Keyword))?G__63290_63950.fqn:null);
switch (G__63290_63951__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_63953 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_63953,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_63953,"aria-");
}
})())){
el.setAttribute(ks_63953,value);
} else {
(el[ks_63953] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__63297){
var map__63298 = p__63297;
var map__63298__$1 = cljs.core.__destructure_map(map__63298);
var props = map__63298__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63298__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__63299 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63299,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63299,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63299,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__63302 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__63302,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__63302;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__63304 = arguments.length;
switch (G__63304) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__63305){
var vec__63306 = p__63305;
var seq__63307 = cljs.core.seq(vec__63306);
var first__63308 = cljs.core.first(seq__63307);
var seq__63307__$1 = cljs.core.next(seq__63307);
var nn = first__63308;
var first__63308__$1 = cljs.core.first(seq__63307__$1);
var seq__63307__$2 = cljs.core.next(seq__63307__$1);
var np = first__63308__$1;
var nc = seq__63307__$2;
var node = vec__63306;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63310 = nn;
var G__63311 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63310,G__63311) : create_fn.call(null,G__63310,G__63311));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63312 = nn;
var G__63313 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63312,G__63313) : create_fn.call(null,G__63312,G__63313));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__63327 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63327,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63327,(1),null);
var seq__63330_63980 = cljs.core.seq(node_children);
var chunk__63331_63981 = null;
var count__63332_63982 = (0);
var i__63333_63983 = (0);
while(true){
if((i__63333_63983 < count__63332_63982)){
var child_struct_63984 = chunk__63331_63981.cljs$core$IIndexed$_nth$arity$2(null,i__63333_63983);
var children_63985 = shadow.dom.dom_node(child_struct_63984);
if(cljs.core.seq_QMARK_(children_63985)){
var seq__63354_63986 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_63985));
var chunk__63356_63987 = null;
var count__63357_63988 = (0);
var i__63358_63989 = (0);
while(true){
if((i__63358_63989 < count__63357_63988)){
var child_63991 = chunk__63356_63987.cljs$core$IIndexed$_nth$arity$2(null,i__63358_63989);
if(cljs.core.truth_(child_63991)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63991);


var G__63995 = seq__63354_63986;
var G__63996 = chunk__63356_63987;
var G__63997 = count__63357_63988;
var G__63998 = (i__63358_63989 + (1));
seq__63354_63986 = G__63995;
chunk__63356_63987 = G__63996;
count__63357_63988 = G__63997;
i__63358_63989 = G__63998;
continue;
} else {
var G__63999 = seq__63354_63986;
var G__64000 = chunk__63356_63987;
var G__64001 = count__63357_63988;
var G__64002 = (i__63358_63989 + (1));
seq__63354_63986 = G__63999;
chunk__63356_63987 = G__64000;
count__63357_63988 = G__64001;
i__63358_63989 = G__64002;
continue;
}
} else {
var temp__5753__auto___64003 = cljs.core.seq(seq__63354_63986);
if(temp__5753__auto___64003){
var seq__63354_64004__$1 = temp__5753__auto___64003;
if(cljs.core.chunked_seq_QMARK_(seq__63354_64004__$1)){
var c__4679__auto___64005 = cljs.core.chunk_first(seq__63354_64004__$1);
var G__64006 = cljs.core.chunk_rest(seq__63354_64004__$1);
var G__64007 = c__4679__auto___64005;
var G__64008 = cljs.core.count(c__4679__auto___64005);
var G__64009 = (0);
seq__63354_63986 = G__64006;
chunk__63356_63987 = G__64007;
count__63357_63988 = G__64008;
i__63358_63989 = G__64009;
continue;
} else {
var child_64010 = cljs.core.first(seq__63354_64004__$1);
if(cljs.core.truth_(child_64010)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64010);


var G__64011 = cljs.core.next(seq__63354_64004__$1);
var G__64012 = null;
var G__64013 = (0);
var G__64014 = (0);
seq__63354_63986 = G__64011;
chunk__63356_63987 = G__64012;
count__63357_63988 = G__64013;
i__63358_63989 = G__64014;
continue;
} else {
var G__64015 = cljs.core.next(seq__63354_64004__$1);
var G__64016 = null;
var G__64017 = (0);
var G__64018 = (0);
seq__63354_63986 = G__64015;
chunk__63356_63987 = G__64016;
count__63357_63988 = G__64017;
i__63358_63989 = G__64018;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_63985);
}


var G__64019 = seq__63330_63980;
var G__64020 = chunk__63331_63981;
var G__64021 = count__63332_63982;
var G__64022 = (i__63333_63983 + (1));
seq__63330_63980 = G__64019;
chunk__63331_63981 = G__64020;
count__63332_63982 = G__64021;
i__63333_63983 = G__64022;
continue;
} else {
var temp__5753__auto___64023 = cljs.core.seq(seq__63330_63980);
if(temp__5753__auto___64023){
var seq__63330_64024__$1 = temp__5753__auto___64023;
if(cljs.core.chunked_seq_QMARK_(seq__63330_64024__$1)){
var c__4679__auto___64030 = cljs.core.chunk_first(seq__63330_64024__$1);
var G__64035 = cljs.core.chunk_rest(seq__63330_64024__$1);
var G__64036 = c__4679__auto___64030;
var G__64037 = cljs.core.count(c__4679__auto___64030);
var G__64038 = (0);
seq__63330_63980 = G__64035;
chunk__63331_63981 = G__64036;
count__63332_63982 = G__64037;
i__63333_63983 = G__64038;
continue;
} else {
var child_struct_64039 = cljs.core.first(seq__63330_64024__$1);
var children_64040 = shadow.dom.dom_node(child_struct_64039);
if(cljs.core.seq_QMARK_(children_64040)){
var seq__63360_64041 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_64040));
var chunk__63362_64042 = null;
var count__63363_64043 = (0);
var i__63364_64044 = (0);
while(true){
if((i__63364_64044 < count__63363_64043)){
var child_64045 = chunk__63362_64042.cljs$core$IIndexed$_nth$arity$2(null,i__63364_64044);
if(cljs.core.truth_(child_64045)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64045);


var G__64046 = seq__63360_64041;
var G__64047 = chunk__63362_64042;
var G__64048 = count__63363_64043;
var G__64049 = (i__63364_64044 + (1));
seq__63360_64041 = G__64046;
chunk__63362_64042 = G__64047;
count__63363_64043 = G__64048;
i__63364_64044 = G__64049;
continue;
} else {
var G__64050 = seq__63360_64041;
var G__64051 = chunk__63362_64042;
var G__64052 = count__63363_64043;
var G__64053 = (i__63364_64044 + (1));
seq__63360_64041 = G__64050;
chunk__63362_64042 = G__64051;
count__63363_64043 = G__64052;
i__63364_64044 = G__64053;
continue;
}
} else {
var temp__5753__auto___64054__$1 = cljs.core.seq(seq__63360_64041);
if(temp__5753__auto___64054__$1){
var seq__63360_64057__$1 = temp__5753__auto___64054__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63360_64057__$1)){
var c__4679__auto___64058 = cljs.core.chunk_first(seq__63360_64057__$1);
var G__64059 = cljs.core.chunk_rest(seq__63360_64057__$1);
var G__64060 = c__4679__auto___64058;
var G__64061 = cljs.core.count(c__4679__auto___64058);
var G__64062 = (0);
seq__63360_64041 = G__64059;
chunk__63362_64042 = G__64060;
count__63363_64043 = G__64061;
i__63364_64044 = G__64062;
continue;
} else {
var child_64067 = cljs.core.first(seq__63360_64057__$1);
if(cljs.core.truth_(child_64067)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64067);


var G__64069 = cljs.core.next(seq__63360_64057__$1);
var G__64070 = null;
var G__64071 = (0);
var G__64072 = (0);
seq__63360_64041 = G__64069;
chunk__63362_64042 = G__64070;
count__63363_64043 = G__64071;
i__63364_64044 = G__64072;
continue;
} else {
var G__64073 = cljs.core.next(seq__63360_64057__$1);
var G__64074 = null;
var G__64075 = (0);
var G__64076 = (0);
seq__63360_64041 = G__64073;
chunk__63362_64042 = G__64074;
count__63363_64043 = G__64075;
i__63364_64044 = G__64076;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_64040);
}


var G__64077 = cljs.core.next(seq__63330_64024__$1);
var G__64078 = null;
var G__64079 = (0);
var G__64080 = (0);
seq__63330_63980 = G__64077;
chunk__63331_63981 = G__64078;
count__63332_63982 = G__64079;
i__63333_63983 = G__64080;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__63368 = cljs.core.seq(node);
var chunk__63369 = null;
var count__63370 = (0);
var i__63371 = (0);
while(true){
if((i__63371 < count__63370)){
var n = chunk__63369.cljs$core$IIndexed$_nth$arity$2(null,i__63371);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64092 = seq__63368;
var G__64093 = chunk__63369;
var G__64094 = count__63370;
var G__64095 = (i__63371 + (1));
seq__63368 = G__64092;
chunk__63369 = G__64093;
count__63370 = G__64094;
i__63371 = G__64095;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63368);
if(temp__5753__auto__){
var seq__63368__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63368__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63368__$1);
var G__64097 = cljs.core.chunk_rest(seq__63368__$1);
var G__64098 = c__4679__auto__;
var G__64099 = cljs.core.count(c__4679__auto__);
var G__64100 = (0);
seq__63368 = G__64097;
chunk__63369 = G__64098;
count__63370 = G__64099;
i__63371 = G__64100;
continue;
} else {
var n = cljs.core.first(seq__63368__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64101 = cljs.core.next(seq__63368__$1);
var G__64102 = null;
var G__64103 = (0);
var G__64104 = (0);
seq__63368 = G__64101;
chunk__63369 = G__64102;
count__63370 = G__64103;
i__63371 = G__64104;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__63373 = arguments.length;
switch (G__63373) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__63376 = arguments.length;
switch (G__63376) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__63382 = arguments.length;
switch (G__63382) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64133 = arguments.length;
var i__4865__auto___64134 = (0);
while(true){
if((i__4865__auto___64134 < len__4864__auto___64133)){
args__4870__auto__.push((arguments[i__4865__auto___64134]));

var G__64135 = (i__4865__auto___64134 + (1));
i__4865__auto___64134 = G__64135;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__63400_64136 = cljs.core.seq(nodes);
var chunk__63401_64137 = null;
var count__63402_64138 = (0);
var i__63403_64139 = (0);
while(true){
if((i__63403_64139 < count__63402_64138)){
var node_64140 = chunk__63401_64137.cljs$core$IIndexed$_nth$arity$2(null,i__63403_64139);
fragment.appendChild(shadow.dom._to_dom(node_64140));


var G__64141 = seq__63400_64136;
var G__64142 = chunk__63401_64137;
var G__64143 = count__63402_64138;
var G__64144 = (i__63403_64139 + (1));
seq__63400_64136 = G__64141;
chunk__63401_64137 = G__64142;
count__63402_64138 = G__64143;
i__63403_64139 = G__64144;
continue;
} else {
var temp__5753__auto___64145 = cljs.core.seq(seq__63400_64136);
if(temp__5753__auto___64145){
var seq__63400_64146__$1 = temp__5753__auto___64145;
if(cljs.core.chunked_seq_QMARK_(seq__63400_64146__$1)){
var c__4679__auto___64147 = cljs.core.chunk_first(seq__63400_64146__$1);
var G__64148 = cljs.core.chunk_rest(seq__63400_64146__$1);
var G__64149 = c__4679__auto___64147;
var G__64150 = cljs.core.count(c__4679__auto___64147);
var G__64151 = (0);
seq__63400_64136 = G__64148;
chunk__63401_64137 = G__64149;
count__63402_64138 = G__64150;
i__63403_64139 = G__64151;
continue;
} else {
var node_64152 = cljs.core.first(seq__63400_64146__$1);
fragment.appendChild(shadow.dom._to_dom(node_64152));


var G__64153 = cljs.core.next(seq__63400_64146__$1);
var G__64154 = null;
var G__64155 = (0);
var G__64156 = (0);
seq__63400_64136 = G__64153;
chunk__63401_64137 = G__64154;
count__63402_64138 = G__64155;
i__63403_64139 = G__64156;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq63399){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63399));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__63409_64157 = cljs.core.seq(scripts);
var chunk__63410_64158 = null;
var count__63411_64159 = (0);
var i__63412_64160 = (0);
while(true){
if((i__63412_64160 < count__63411_64159)){
var vec__63421_64161 = chunk__63410_64158.cljs$core$IIndexed$_nth$arity$2(null,i__63412_64160);
var script_tag_64162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63421_64161,(0),null);
var script_body_64163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63421_64161,(1),null);
eval(script_body_64163);


var G__64164 = seq__63409_64157;
var G__64165 = chunk__63410_64158;
var G__64166 = count__63411_64159;
var G__64167 = (i__63412_64160 + (1));
seq__63409_64157 = G__64164;
chunk__63410_64158 = G__64165;
count__63411_64159 = G__64166;
i__63412_64160 = G__64167;
continue;
} else {
var temp__5753__auto___64168 = cljs.core.seq(seq__63409_64157);
if(temp__5753__auto___64168){
var seq__63409_64169__$1 = temp__5753__auto___64168;
if(cljs.core.chunked_seq_QMARK_(seq__63409_64169__$1)){
var c__4679__auto___64170 = cljs.core.chunk_first(seq__63409_64169__$1);
var G__64171 = cljs.core.chunk_rest(seq__63409_64169__$1);
var G__64172 = c__4679__auto___64170;
var G__64173 = cljs.core.count(c__4679__auto___64170);
var G__64174 = (0);
seq__63409_64157 = G__64171;
chunk__63410_64158 = G__64172;
count__63411_64159 = G__64173;
i__63412_64160 = G__64174;
continue;
} else {
var vec__63426_64175 = cljs.core.first(seq__63409_64169__$1);
var script_tag_64176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63426_64175,(0),null);
var script_body_64177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63426_64175,(1),null);
eval(script_body_64177);


var G__64178 = cljs.core.next(seq__63409_64169__$1);
var G__64179 = null;
var G__64180 = (0);
var G__64181 = (0);
seq__63409_64157 = G__64178;
chunk__63410_64158 = G__64179;
count__63411_64159 = G__64180;
i__63412_64160 = G__64181;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__63429){
var vec__63430 = p__63429;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63430,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63430,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__63444 = arguments.length;
switch (G__63444) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__63480 = cljs.core.seq(style_keys);
var chunk__63481 = null;
var count__63482 = (0);
var i__63483 = (0);
while(true){
if((i__63483 < count__63482)){
var it = chunk__63481.cljs$core$IIndexed$_nth$arity$2(null,i__63483);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64183 = seq__63480;
var G__64184 = chunk__63481;
var G__64185 = count__63482;
var G__64186 = (i__63483 + (1));
seq__63480 = G__64183;
chunk__63481 = G__64184;
count__63482 = G__64185;
i__63483 = G__64186;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63480);
if(temp__5753__auto__){
var seq__63480__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63480__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63480__$1);
var G__64187 = cljs.core.chunk_rest(seq__63480__$1);
var G__64188 = c__4679__auto__;
var G__64189 = cljs.core.count(c__4679__auto__);
var G__64190 = (0);
seq__63480 = G__64187;
chunk__63481 = G__64188;
count__63482 = G__64189;
i__63483 = G__64190;
continue;
} else {
var it = cljs.core.first(seq__63480__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64191 = cljs.core.next(seq__63480__$1);
var G__64192 = null;
var G__64193 = (0);
var G__64194 = (0);
seq__63480 = G__64191;
chunk__63481 = G__64192;
count__63482 = G__64193;
i__63483 = G__64194;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k63495,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__63503 = k63495;
var G__63503__$1 = (((G__63503 instanceof cljs.core.Keyword))?G__63503.fqn:null);
switch (G__63503__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63495,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__63504){
var vec__63505 = p__63504;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63505,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63505,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63494){
var self__ = this;
var G__63494__$1 = this;
return (new cljs.core.RecordIter((0),G__63494__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63496,other63497){
var self__ = this;
var this63496__$1 = this;
return (((!((other63497 == null)))) && ((((this63496__$1.constructor === other63497.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63496__$1.x,other63497.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63496__$1.y,other63497.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63496__$1.__extmap,other63497.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k63495){
var self__ = this;
var this__4509__auto____$1 = this;
var G__63548 = k63495;
var G__63548__$1 = (((G__63548 instanceof cljs.core.Keyword))?G__63548.fqn:null);
switch (G__63548__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63495);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__63494){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__63549 = cljs.core.keyword_identical_QMARK_;
var expr__63550 = k__4511__auto__;
if(cljs.core.truth_((pred__63549.cljs$core$IFn$_invoke$arity$2 ? pred__63549.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__63550) : pred__63549.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__63550)))){
return (new shadow.dom.Coordinate(G__63494,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63549.cljs$core$IFn$_invoke$arity$2 ? pred__63549.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__63550) : pred__63549.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__63550)))){
return (new shadow.dom.Coordinate(self__.x,G__63494,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__63494),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__63494){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__63494,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__63500){
var extmap__4542__auto__ = (function (){var G__63557 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63500,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__63500)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63557);
} else {
return G__63557;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__63500),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__63500),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k63564,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__63606 = k63564;
var G__63606__$1 = (((G__63606 instanceof cljs.core.Keyword))?G__63606.fqn:null);
switch (G__63606__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63564,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__63620){
var vec__63621 = p__63620;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63621,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63621,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63563){
var self__ = this;
var G__63563__$1 = this;
return (new cljs.core.RecordIter((0),G__63563__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63565,other63566){
var self__ = this;
var this63565__$1 = this;
return (((!((other63566 == null)))) && ((((this63565__$1.constructor === other63566.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63565__$1.w,other63566.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63565__$1.h,other63566.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63565__$1.__extmap,other63566.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k63564){
var self__ = this;
var this__4509__auto____$1 = this;
var G__63633 = k63564;
var G__63633__$1 = (((G__63633 instanceof cljs.core.Keyword))?G__63633.fqn:null);
switch (G__63633__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63564);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__63563){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__63651 = cljs.core.keyword_identical_QMARK_;
var expr__63652 = k__4511__auto__;
if(cljs.core.truth_((pred__63651.cljs$core$IFn$_invoke$arity$2 ? pred__63651.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__63652) : pred__63651.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__63652)))){
return (new shadow.dom.Size(G__63563,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63651.cljs$core$IFn$_invoke$arity$2 ? pred__63651.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__63652) : pred__63651.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__63652)))){
return (new shadow.dom.Size(self__.w,G__63563,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__63563),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__63563){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__63563,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__63583){
var extmap__4542__auto__ = (function (){var G__63708 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63583,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__63583)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63708);
} else {
return G__63708;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__63583),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__63583),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__64224 = (i + (1));
var G__64225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__64224;
ret = G__64225;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63724){
var vec__63725 = p__63724;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63725,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__63730 = arguments.length;
switch (G__63730) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__64231 = ps;
var G__64232 = (i + (1));
el__$1 = G__64231;
i = G__64232;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__63749 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63749,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63749,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63749,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__63753_64233 = cljs.core.seq(props);
var chunk__63754_64234 = null;
var count__63755_64235 = (0);
var i__63756_64236 = (0);
while(true){
if((i__63756_64236 < count__63755_64235)){
var vec__63770_64237 = chunk__63754_64234.cljs$core$IIndexed$_nth$arity$2(null,i__63756_64236);
var k_64238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63770_64237,(0),null);
var v_64239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63770_64237,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_64238);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_64238),v_64239);


var G__64240 = seq__63753_64233;
var G__64241 = chunk__63754_64234;
var G__64242 = count__63755_64235;
var G__64243 = (i__63756_64236 + (1));
seq__63753_64233 = G__64240;
chunk__63754_64234 = G__64241;
count__63755_64235 = G__64242;
i__63756_64236 = G__64243;
continue;
} else {
var temp__5753__auto___64244 = cljs.core.seq(seq__63753_64233);
if(temp__5753__auto___64244){
var seq__63753_64245__$1 = temp__5753__auto___64244;
if(cljs.core.chunked_seq_QMARK_(seq__63753_64245__$1)){
var c__4679__auto___64246 = cljs.core.chunk_first(seq__63753_64245__$1);
var G__64247 = cljs.core.chunk_rest(seq__63753_64245__$1);
var G__64248 = c__4679__auto___64246;
var G__64249 = cljs.core.count(c__4679__auto___64246);
var G__64250 = (0);
seq__63753_64233 = G__64247;
chunk__63754_64234 = G__64248;
count__63755_64235 = G__64249;
i__63756_64236 = G__64250;
continue;
} else {
var vec__63777_64251 = cljs.core.first(seq__63753_64245__$1);
var k_64252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63777_64251,(0),null);
var v_64253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63777_64251,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_64252);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_64252),v_64253);


var G__64254 = cljs.core.next(seq__63753_64245__$1);
var G__64255 = null;
var G__64256 = (0);
var G__64257 = (0);
seq__63753_64233 = G__64254;
chunk__63754_64234 = G__64255;
count__63755_64235 = G__64256;
i__63756_64236 = G__64257;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__63786 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63786,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63786,(1),null);
var seq__63790_64259 = cljs.core.seq(node_children);
var chunk__63792_64260 = null;
var count__63793_64261 = (0);
var i__63794_64262 = (0);
while(true){
if((i__63794_64262 < count__63793_64261)){
var child_struct_64263 = chunk__63792_64260.cljs$core$IIndexed$_nth$arity$2(null,i__63794_64262);
if((!((child_struct_64263 == null)))){
if(typeof child_struct_64263 === 'string'){
var text_64264 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_64264),child_struct_64263].join(''));
} else {
var children_64265 = shadow.dom.svg_node(child_struct_64263);
if(cljs.core.seq_QMARK_(children_64265)){
var seq__63822_64266 = cljs.core.seq(children_64265);
var chunk__63824_64267 = null;
var count__63825_64268 = (0);
var i__63826_64269 = (0);
while(true){
if((i__63826_64269 < count__63825_64268)){
var child_64270 = chunk__63824_64267.cljs$core$IIndexed$_nth$arity$2(null,i__63826_64269);
if(cljs.core.truth_(child_64270)){
node.appendChild(child_64270);


var G__64271 = seq__63822_64266;
var G__64272 = chunk__63824_64267;
var G__64273 = count__63825_64268;
var G__64274 = (i__63826_64269 + (1));
seq__63822_64266 = G__64271;
chunk__63824_64267 = G__64272;
count__63825_64268 = G__64273;
i__63826_64269 = G__64274;
continue;
} else {
var G__64275 = seq__63822_64266;
var G__64276 = chunk__63824_64267;
var G__64277 = count__63825_64268;
var G__64278 = (i__63826_64269 + (1));
seq__63822_64266 = G__64275;
chunk__63824_64267 = G__64276;
count__63825_64268 = G__64277;
i__63826_64269 = G__64278;
continue;
}
} else {
var temp__5753__auto___64279 = cljs.core.seq(seq__63822_64266);
if(temp__5753__auto___64279){
var seq__63822_64280__$1 = temp__5753__auto___64279;
if(cljs.core.chunked_seq_QMARK_(seq__63822_64280__$1)){
var c__4679__auto___64281 = cljs.core.chunk_first(seq__63822_64280__$1);
var G__64282 = cljs.core.chunk_rest(seq__63822_64280__$1);
var G__64283 = c__4679__auto___64281;
var G__64284 = cljs.core.count(c__4679__auto___64281);
var G__64285 = (0);
seq__63822_64266 = G__64282;
chunk__63824_64267 = G__64283;
count__63825_64268 = G__64284;
i__63826_64269 = G__64285;
continue;
} else {
var child_64286 = cljs.core.first(seq__63822_64280__$1);
if(cljs.core.truth_(child_64286)){
node.appendChild(child_64286);


var G__64287 = cljs.core.next(seq__63822_64280__$1);
var G__64288 = null;
var G__64289 = (0);
var G__64290 = (0);
seq__63822_64266 = G__64287;
chunk__63824_64267 = G__64288;
count__63825_64268 = G__64289;
i__63826_64269 = G__64290;
continue;
} else {
var G__64291 = cljs.core.next(seq__63822_64280__$1);
var G__64292 = null;
var G__64293 = (0);
var G__64294 = (0);
seq__63822_64266 = G__64291;
chunk__63824_64267 = G__64292;
count__63825_64268 = G__64293;
i__63826_64269 = G__64294;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_64265);
}
}


var G__64295 = seq__63790_64259;
var G__64296 = chunk__63792_64260;
var G__64297 = count__63793_64261;
var G__64298 = (i__63794_64262 + (1));
seq__63790_64259 = G__64295;
chunk__63792_64260 = G__64296;
count__63793_64261 = G__64297;
i__63794_64262 = G__64298;
continue;
} else {
var G__64299 = seq__63790_64259;
var G__64300 = chunk__63792_64260;
var G__64301 = count__63793_64261;
var G__64302 = (i__63794_64262 + (1));
seq__63790_64259 = G__64299;
chunk__63792_64260 = G__64300;
count__63793_64261 = G__64301;
i__63794_64262 = G__64302;
continue;
}
} else {
var temp__5753__auto___64303 = cljs.core.seq(seq__63790_64259);
if(temp__5753__auto___64303){
var seq__63790_64304__$1 = temp__5753__auto___64303;
if(cljs.core.chunked_seq_QMARK_(seq__63790_64304__$1)){
var c__4679__auto___64305 = cljs.core.chunk_first(seq__63790_64304__$1);
var G__64306 = cljs.core.chunk_rest(seq__63790_64304__$1);
var G__64307 = c__4679__auto___64305;
var G__64308 = cljs.core.count(c__4679__auto___64305);
var G__64309 = (0);
seq__63790_64259 = G__64306;
chunk__63792_64260 = G__64307;
count__63793_64261 = G__64308;
i__63794_64262 = G__64309;
continue;
} else {
var child_struct_64310 = cljs.core.first(seq__63790_64304__$1);
if((!((child_struct_64310 == null)))){
if(typeof child_struct_64310 === 'string'){
var text_64311 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_64311),child_struct_64310].join(''));
} else {
var children_64313 = shadow.dom.svg_node(child_struct_64310);
if(cljs.core.seq_QMARK_(children_64313)){
var seq__63831_64315 = cljs.core.seq(children_64313);
var chunk__63833_64316 = null;
var count__63834_64317 = (0);
var i__63835_64318 = (0);
while(true){
if((i__63835_64318 < count__63834_64317)){
var child_64319 = chunk__63833_64316.cljs$core$IIndexed$_nth$arity$2(null,i__63835_64318);
if(cljs.core.truth_(child_64319)){
node.appendChild(child_64319);


var G__64321 = seq__63831_64315;
var G__64322 = chunk__63833_64316;
var G__64323 = count__63834_64317;
var G__64324 = (i__63835_64318 + (1));
seq__63831_64315 = G__64321;
chunk__63833_64316 = G__64322;
count__63834_64317 = G__64323;
i__63835_64318 = G__64324;
continue;
} else {
var G__64325 = seq__63831_64315;
var G__64326 = chunk__63833_64316;
var G__64327 = count__63834_64317;
var G__64328 = (i__63835_64318 + (1));
seq__63831_64315 = G__64325;
chunk__63833_64316 = G__64326;
count__63834_64317 = G__64327;
i__63835_64318 = G__64328;
continue;
}
} else {
var temp__5753__auto___64329__$1 = cljs.core.seq(seq__63831_64315);
if(temp__5753__auto___64329__$1){
var seq__63831_64330__$1 = temp__5753__auto___64329__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63831_64330__$1)){
var c__4679__auto___64331 = cljs.core.chunk_first(seq__63831_64330__$1);
var G__64332 = cljs.core.chunk_rest(seq__63831_64330__$1);
var G__64333 = c__4679__auto___64331;
var G__64334 = cljs.core.count(c__4679__auto___64331);
var G__64335 = (0);
seq__63831_64315 = G__64332;
chunk__63833_64316 = G__64333;
count__63834_64317 = G__64334;
i__63835_64318 = G__64335;
continue;
} else {
var child_64336 = cljs.core.first(seq__63831_64330__$1);
if(cljs.core.truth_(child_64336)){
node.appendChild(child_64336);


var G__64337 = cljs.core.next(seq__63831_64330__$1);
var G__64338 = null;
var G__64339 = (0);
var G__64340 = (0);
seq__63831_64315 = G__64337;
chunk__63833_64316 = G__64338;
count__63834_64317 = G__64339;
i__63835_64318 = G__64340;
continue;
} else {
var G__64341 = cljs.core.next(seq__63831_64330__$1);
var G__64342 = null;
var G__64343 = (0);
var G__64344 = (0);
seq__63831_64315 = G__64341;
chunk__63833_64316 = G__64342;
count__63834_64317 = G__64343;
i__63835_64318 = G__64344;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_64313);
}
}


var G__64345 = cljs.core.next(seq__63790_64304__$1);
var G__64346 = null;
var G__64347 = (0);
var G__64348 = (0);
seq__63790_64259 = G__64345;
chunk__63792_64260 = G__64346;
count__63793_64261 = G__64347;
i__63794_64262 = G__64348;
continue;
} else {
var G__64349 = cljs.core.next(seq__63790_64304__$1);
var G__64350 = null;
var G__64351 = (0);
var G__64352 = (0);
seq__63790_64259 = G__64349;
chunk__63792_64260 = G__64350;
count__63793_64261 = G__64351;
i__63794_64262 = G__64352;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64354 = arguments.length;
var i__4865__auto___64355 = (0);
while(true){
if((i__4865__auto___64355 < len__4864__auto___64354)){
args__4870__auto__.push((arguments[i__4865__auto___64355]));

var G__64356 = (i__4865__auto___64355 + (1));
i__4865__auto___64355 = G__64356;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq63844){
var G__63845 = cljs.core.first(seq63844);
var seq63844__$1 = cljs.core.next(seq63844);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63845,seq63844__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__63848 = arguments.length;
switch (G__63848) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__49738__auto___64362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_63861){
var state_val_63862 = (state_63861[(1)]);
if((state_val_63862 === (1))){
var state_63861__$1 = state_63861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63861__$1,(2),once_or_cleanup);
} else {
if((state_val_63862 === (2))){
var inst_63858 = (state_63861[(2)]);
var inst_63859 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_63861__$1 = (function (){var statearr_63865 = state_63861;
(statearr_63865[(7)] = inst_63858);

return statearr_63865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63861__$1,inst_63859);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__49647__auto__ = null;
var shadow$dom$state_machine__49647__auto____0 = (function (){
var statearr_63866 = [null,null,null,null,null,null,null,null];
(statearr_63866[(0)] = shadow$dom$state_machine__49647__auto__);

(statearr_63866[(1)] = (1));

return statearr_63866;
});
var shadow$dom$state_machine__49647__auto____1 = (function (state_63861){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_63861);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e63867){var ex__49650__auto__ = e63867;
var statearr_63868_64368 = state_63861;
(statearr_63868_64368[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_63861[(4)]))){
var statearr_63869_64369 = state_63861;
(statearr_63869_64369[(1)] = cljs.core.first((state_63861[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64370 = state_63861;
state_63861 = G__64370;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
shadow$dom$state_machine__49647__auto__ = function(state_63861){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49647__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49647__auto____1.call(this,state_63861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49647__auto____0;
shadow$dom$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49647__auto____1;
return shadow$dom$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_63874 = f__49739__auto__();
(statearr_63874[(6)] = c__49738__auto___64362);

return statearr_63874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
