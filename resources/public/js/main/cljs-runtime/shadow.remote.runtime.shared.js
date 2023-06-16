goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__63377,res){
var map__63378 = p__63377;
var map__63378__$1 = cljs.core.__destructure_map(map__63378);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63378__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63378__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__63379 = res;
var G__63379__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63379,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__63379);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63379__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__63379__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__63383 = arguments.length;
switch (G__63383) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__63384,msg,handlers,timeout_after_ms){
var map__63385 = p__63384;
var map__63385__$1 = cljs.core.__destructure_map(map__63385);
var runtime = map__63385__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63385__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63516 = arguments.length;
var i__4865__auto___63517 = (0);
while(true){
if((i__4865__auto___63517 < len__4864__auto___63516)){
args__4870__auto__.push((arguments[i__4865__auto___63517]));

var G__63518 = (i__4865__auto___63517 + (1));
i__4865__auto___63517 = G__63518;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__63389,ev,args){
var map__63390 = p__63389;
var map__63390__$1 = cljs.core.__destructure_map(map__63390);
var runtime = map__63390__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63390__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__63391 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__63394 = null;
var count__63395 = (0);
var i__63396 = (0);
while(true){
if((i__63396 < count__63395)){
var ext = chunk__63394.cljs$core$IIndexed$_nth$arity$2(null,i__63396);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__63522 = seq__63391;
var G__63523 = chunk__63394;
var G__63524 = count__63395;
var G__63525 = (i__63396 + (1));
seq__63391 = G__63522;
chunk__63394 = G__63523;
count__63395 = G__63524;
i__63396 = G__63525;
continue;
} else {
var G__63527 = seq__63391;
var G__63528 = chunk__63394;
var G__63529 = count__63395;
var G__63530 = (i__63396 + (1));
seq__63391 = G__63527;
chunk__63394 = G__63528;
count__63395 = G__63529;
i__63396 = G__63530;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63391);
if(temp__5753__auto__){
var seq__63391__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63391__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63391__$1);
var G__63532 = cljs.core.chunk_rest(seq__63391__$1);
var G__63533 = c__4679__auto__;
var G__63534 = cljs.core.count(c__4679__auto__);
var G__63535 = (0);
seq__63391 = G__63532;
chunk__63394 = G__63533;
count__63395 = G__63534;
i__63396 = G__63535;
continue;
} else {
var ext = cljs.core.first(seq__63391__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__63536 = cljs.core.next(seq__63391__$1);
var G__63537 = null;
var G__63538 = (0);
var G__63539 = (0);
seq__63391 = G__63536;
chunk__63394 = G__63537;
count__63395 = G__63538;
i__63396 = G__63539;
continue;
} else {
var G__63543 = cljs.core.next(seq__63391__$1);
var G__63544 = null;
var G__63545 = (0);
var G__63546 = (0);
seq__63391 = G__63543;
chunk__63394 = G__63544;
count__63395 = G__63545;
i__63396 = G__63546;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq63386){
var G__63387 = cljs.core.first(seq63386);
var seq63386__$1 = cljs.core.next(seq63386);
var G__63388 = cljs.core.first(seq63386__$1);
var seq63386__$2 = cljs.core.next(seq63386__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63387,G__63388,seq63386__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__63404,p__63405){
var map__63406 = p__63404;
var map__63406__$1 = cljs.core.__destructure_map(map__63406);
var runtime = map__63406__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63406__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__63407 = p__63405;
var map__63407__$1 = cljs.core.__destructure_map(map__63407);
var msg = map__63407__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63407__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__63408 = cljs.core.deref(state_ref);
var map__63408__$1 = cljs.core.__destructure_map(map__63408);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63408__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63408__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__63416){
var map__63417 = p__63416;
var map__63417__$1 = cljs.core.__destructure_map(map__63417);
var runtime = map__63417__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63417__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__63437,msg){
var map__63438 = p__63437;
var map__63438__$1 = cljs.core.__destructure_map(map__63438);
var runtime = map__63438__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63438__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__63439,key,p__63440){
var map__63441 = p__63439;
var map__63441__$1 = cljs.core.__destructure_map(map__63441);
var state = map__63441__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63441__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__63442 = p__63440;
var map__63442__$1 = cljs.core.__destructure_map(map__63442);
var spec = map__63442__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63442__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__63449,key,spec){
var map__63454 = p__63449;
var map__63454__$1 = cljs.core.__destructure_map(map__63454);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63454__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__63455_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__63455_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__63456_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__63456_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__63457_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__63457_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__63458_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__63458_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__63459_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__63459_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__63468,key){
var map__63469 = p__63468;
var map__63469__$1 = cljs.core.__destructure_map(map__63469);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63469__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__63474,msg){
var map__63475 = p__63474;
var map__63475__$1 = cljs.core.__destructure_map(map__63475);
var runtime = map__63475__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63475__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__63484,p__63485){
var map__63486 = p__63484;
var map__63486__$1 = cljs.core.__destructure_map(map__63486);
var runtime = map__63486__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63486__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__63487 = p__63485;
var map__63487__$1 = cljs.core.__destructure_map(map__63487);
var msg = map__63487__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63487__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63487__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__63488 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__63490 = null;
var count__63491 = (0);
var i__63492 = (0);
while(true){
if((i__63492 < count__63491)){
var map__63501 = chunk__63490.cljs$core$IIndexed$_nth$arity$2(null,i__63492);
var map__63501__$1 = cljs.core.__destructure_map(map__63501);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__63571 = seq__63488;
var G__63572 = chunk__63490;
var G__63573 = count__63491;
var G__63574 = (i__63492 + (1));
seq__63488 = G__63571;
chunk__63490 = G__63572;
count__63491 = G__63573;
i__63492 = G__63574;
continue;
} else {
var G__63575 = seq__63488;
var G__63576 = chunk__63490;
var G__63577 = count__63491;
var G__63578 = (i__63492 + (1));
seq__63488 = G__63575;
chunk__63490 = G__63576;
count__63491 = G__63577;
i__63492 = G__63578;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63488);
if(temp__5753__auto__){
var seq__63488__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63488__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63488__$1);
var G__63584 = cljs.core.chunk_rest(seq__63488__$1);
var G__63585 = c__4679__auto__;
var G__63586 = cljs.core.count(c__4679__auto__);
var G__63587 = (0);
seq__63488 = G__63584;
chunk__63490 = G__63585;
count__63491 = G__63586;
i__63492 = G__63587;
continue;
} else {
var map__63502 = cljs.core.first(seq__63488__$1);
var map__63502__$1 = cljs.core.__destructure_map(map__63502);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63502__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__63588 = cljs.core.next(seq__63488__$1);
var G__63589 = null;
var G__63590 = (0);
var G__63591 = (0);
seq__63488 = G__63588;
chunk__63490 = G__63589;
count__63491 = G__63590;
i__63492 = G__63591;
continue;
} else {
var G__63592 = cljs.core.next(seq__63488__$1);
var G__63593 = null;
var G__63594 = (0);
var G__63595 = (0);
seq__63488 = G__63592;
chunk__63490 = G__63593;
count__63491 = G__63594;
i__63492 = G__63595;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
