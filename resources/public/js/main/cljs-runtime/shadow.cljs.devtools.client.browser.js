goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65170 = arguments.length;
var i__4865__auto___65171 = (0);
while(true){
if((i__4865__auto___65171 < len__4864__auto___65170)){
args__4870__auto__.push((arguments[i__4865__auto___65171]));

var G__65172 = (i__4865__auto___65171 + (1));
i__4865__auto___65171 = G__65172;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq65041){
var G__65042 = cljs.core.first(seq65041);
var seq65041__$1 = cljs.core.next(seq65041);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65042,seq65041__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__65048 = cljs.core.seq(sources);
var chunk__65049 = null;
var count__65050 = (0);
var i__65051 = (0);
while(true){
if((i__65051 < count__65050)){
var map__65056 = chunk__65049.cljs$core$IIndexed$_nth$arity$2(null,i__65051);
var map__65056__$1 = cljs.core.__destructure_map(map__65056);
var src = map__65056__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65056__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65056__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65056__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65056__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65057){var e_65173 = e65057;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65173);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65173.message)].join('')));
}

var G__65174 = seq__65048;
var G__65175 = chunk__65049;
var G__65176 = count__65050;
var G__65177 = (i__65051 + (1));
seq__65048 = G__65174;
chunk__65049 = G__65175;
count__65050 = G__65176;
i__65051 = G__65177;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65048);
if(temp__5753__auto__){
var seq__65048__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65048__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__65048__$1);
var G__65178 = cljs.core.chunk_rest(seq__65048__$1);
var G__65179 = c__4679__auto__;
var G__65180 = cljs.core.count(c__4679__auto__);
var G__65181 = (0);
seq__65048 = G__65178;
chunk__65049 = G__65179;
count__65050 = G__65180;
i__65051 = G__65181;
continue;
} else {
var map__65058 = cljs.core.first(seq__65048__$1);
var map__65058__$1 = cljs.core.__destructure_map(map__65058);
var src = map__65058__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65058__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65058__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65058__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65058__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65060){var e_65182 = e65060;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65182);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65182.message)].join('')));
}

var G__65183 = cljs.core.next(seq__65048__$1);
var G__65184 = null;
var G__65185 = (0);
var G__65186 = (0);
seq__65048 = G__65183;
chunk__65049 = G__65184;
count__65050 = G__65185;
i__65051 = G__65186;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__65062 = cljs.core.seq(js_requires);
var chunk__65063 = null;
var count__65064 = (0);
var i__65065 = (0);
while(true){
if((i__65065 < count__65064)){
var js_ns = chunk__65063.cljs$core$IIndexed$_nth$arity$2(null,i__65065);
var require_str_65187 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65187);


var G__65188 = seq__65062;
var G__65189 = chunk__65063;
var G__65190 = count__65064;
var G__65191 = (i__65065 + (1));
seq__65062 = G__65188;
chunk__65063 = G__65189;
count__65064 = G__65190;
i__65065 = G__65191;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65062);
if(temp__5753__auto__){
var seq__65062__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65062__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__65062__$1);
var G__65192 = cljs.core.chunk_rest(seq__65062__$1);
var G__65193 = c__4679__auto__;
var G__65194 = cljs.core.count(c__4679__auto__);
var G__65195 = (0);
seq__65062 = G__65192;
chunk__65063 = G__65193;
count__65064 = G__65194;
i__65065 = G__65195;
continue;
} else {
var js_ns = cljs.core.first(seq__65062__$1);
var require_str_65196 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65196);


var G__65197 = cljs.core.next(seq__65062__$1);
var G__65198 = null;
var G__65199 = (0);
var G__65200 = (0);
seq__65062 = G__65197;
chunk__65063 = G__65198;
count__65064 = G__65199;
i__65065 = G__65200;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__65067){
var map__65068 = p__65067;
var map__65068__$1 = cljs.core.__destructure_map(map__65068);
var msg = map__65068__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65068__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65068__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65069(s__65070){
return (new cljs.core.LazySeq(null,(function (){
var s__65070__$1 = s__65070;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__65070__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__65075 = cljs.core.first(xs__6308__auto__);
var map__65075__$1 = cljs.core.__destructure_map(map__65075);
var src = map__65075__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65075__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65075__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__65070__$1,map__65075,map__65075__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65068,map__65068__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65069_$_iter__65071(s__65072){
return (new cljs.core.LazySeq(null,((function (s__65070__$1,map__65075,map__65075__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65068,map__65068__$1,msg,info,reload_info){
return (function (){
var s__65072__$1 = s__65072;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__65072__$1);
if(temp__5753__auto____$1){
var s__65072__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65072__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__65072__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__65074 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__65073 = (0);
while(true){
if((i__65073 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__65073);
cljs.core.chunk_append(b__65074,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__65201 = (i__65073 + (1));
i__65073 = G__65201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65074),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65069_$_iter__65071(cljs.core.chunk_rest(s__65072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65074),null);
}
} else {
var warning = cljs.core.first(s__65072__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65069_$_iter__65071(cljs.core.rest(s__65072__$2)));
}
} else {
return null;
}
break;
}
});})(s__65070__$1,map__65075,map__65075__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65068,map__65068__$1,msg,info,reload_info))
,null,null));
});})(s__65070__$1,map__65075,map__65075__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65068,map__65068__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65069(cljs.core.rest(s__65070__$1)));
} else {
var G__65202 = cljs.core.rest(s__65070__$1);
s__65070__$1 = G__65202;
continue;
}
} else {
var G__65203 = cljs.core.rest(s__65070__$1);
s__65070__$1 = G__65203;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__65076_65204 = cljs.core.seq(warnings);
var chunk__65077_65205 = null;
var count__65078_65206 = (0);
var i__65079_65207 = (0);
while(true){
if((i__65079_65207 < count__65078_65206)){
var map__65082_65208 = chunk__65077_65205.cljs$core$IIndexed$_nth$arity$2(null,i__65079_65207);
var map__65082_65209__$1 = cljs.core.__destructure_map(map__65082_65208);
var w_65210 = map__65082_65209__$1;
var msg_65211__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65082_65209__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65082_65209__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65082_65209__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65082_65209__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65214)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65212),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65213),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65211__$1)].join(''));


var G__65215 = seq__65076_65204;
var G__65216 = chunk__65077_65205;
var G__65217 = count__65078_65206;
var G__65218 = (i__65079_65207 + (1));
seq__65076_65204 = G__65215;
chunk__65077_65205 = G__65216;
count__65078_65206 = G__65217;
i__65079_65207 = G__65218;
continue;
} else {
var temp__5753__auto___65219 = cljs.core.seq(seq__65076_65204);
if(temp__5753__auto___65219){
var seq__65076_65220__$1 = temp__5753__auto___65219;
if(cljs.core.chunked_seq_QMARK_(seq__65076_65220__$1)){
var c__4679__auto___65221 = cljs.core.chunk_first(seq__65076_65220__$1);
var G__65222 = cljs.core.chunk_rest(seq__65076_65220__$1);
var G__65223 = c__4679__auto___65221;
var G__65224 = cljs.core.count(c__4679__auto___65221);
var G__65225 = (0);
seq__65076_65204 = G__65222;
chunk__65077_65205 = G__65223;
count__65078_65206 = G__65224;
i__65079_65207 = G__65225;
continue;
} else {
var map__65083_65226 = cljs.core.first(seq__65076_65220__$1);
var map__65083_65227__$1 = cljs.core.__destructure_map(map__65083_65226);
var w_65228 = map__65083_65227__$1;
var msg_65229__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083_65227__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083_65227__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083_65227__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083_65227__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65232)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65230),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65231),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65229__$1)].join(''));


var G__65233 = cljs.core.next(seq__65076_65220__$1);
var G__65234 = null;
var G__65235 = (0);
var G__65236 = (0);
seq__65076_65204 = G__65233;
chunk__65077_65205 = G__65234;
count__65078_65206 = G__65235;
i__65079_65207 = G__65236;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__65066_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__65066_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__65084){
var map__65085 = p__65084;
var map__65085__$1 = cljs.core.__destructure_map(map__65085);
var msg = map__65085__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65085__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__65086 = cljs.core.seq(updates);
var chunk__65088 = null;
var count__65089 = (0);
var i__65090 = (0);
while(true){
if((i__65090 < count__65089)){
var path = chunk__65088.cljs$core$IIndexed$_nth$arity$2(null,i__65090);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65120_65237 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65124_65238 = null;
var count__65125_65239 = (0);
var i__65126_65240 = (0);
while(true){
if((i__65126_65240 < count__65125_65239)){
var node_65241 = chunk__65124_65238.cljs$core$IIndexed$_nth$arity$2(null,i__65126_65240);
if(cljs.core.not(node_65241.shadow$old)){
var path_match_65242 = shadow.cljs.devtools.client.browser.match_paths(node_65241.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65242)){
var new_link_65243 = (function (){var G__65132 = node_65241.cloneNode(true);
G__65132.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65242),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65132;
})();
(node_65241.shadow$old = true);

(new_link_65243.onload = ((function (seq__65120_65237,chunk__65124_65238,count__65125_65239,i__65126_65240,seq__65086,chunk__65088,count__65089,i__65090,new_link_65243,path_match_65242,node_65241,path,map__65085,map__65085__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_65241);
});})(seq__65120_65237,chunk__65124_65238,count__65125_65239,i__65126_65240,seq__65086,chunk__65088,count__65089,i__65090,new_link_65243,path_match_65242,node_65241,path,map__65085,map__65085__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65242], 0));

goog.dom.insertSiblingAfter(new_link_65243,node_65241);


var G__65244 = seq__65120_65237;
var G__65245 = chunk__65124_65238;
var G__65246 = count__65125_65239;
var G__65247 = (i__65126_65240 + (1));
seq__65120_65237 = G__65244;
chunk__65124_65238 = G__65245;
count__65125_65239 = G__65246;
i__65126_65240 = G__65247;
continue;
} else {
var G__65248 = seq__65120_65237;
var G__65249 = chunk__65124_65238;
var G__65250 = count__65125_65239;
var G__65251 = (i__65126_65240 + (1));
seq__65120_65237 = G__65248;
chunk__65124_65238 = G__65249;
count__65125_65239 = G__65250;
i__65126_65240 = G__65251;
continue;
}
} else {
var G__65252 = seq__65120_65237;
var G__65253 = chunk__65124_65238;
var G__65254 = count__65125_65239;
var G__65255 = (i__65126_65240 + (1));
seq__65120_65237 = G__65252;
chunk__65124_65238 = G__65253;
count__65125_65239 = G__65254;
i__65126_65240 = G__65255;
continue;
}
} else {
var temp__5753__auto___65256 = cljs.core.seq(seq__65120_65237);
if(temp__5753__auto___65256){
var seq__65120_65257__$1 = temp__5753__auto___65256;
if(cljs.core.chunked_seq_QMARK_(seq__65120_65257__$1)){
var c__4679__auto___65258 = cljs.core.chunk_first(seq__65120_65257__$1);
var G__65259 = cljs.core.chunk_rest(seq__65120_65257__$1);
var G__65260 = c__4679__auto___65258;
var G__65261 = cljs.core.count(c__4679__auto___65258);
var G__65262 = (0);
seq__65120_65237 = G__65259;
chunk__65124_65238 = G__65260;
count__65125_65239 = G__65261;
i__65126_65240 = G__65262;
continue;
} else {
var node_65263 = cljs.core.first(seq__65120_65257__$1);
if(cljs.core.not(node_65263.shadow$old)){
var path_match_65264 = shadow.cljs.devtools.client.browser.match_paths(node_65263.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65264)){
var new_link_65265 = (function (){var G__65133 = node_65263.cloneNode(true);
G__65133.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65264),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65133;
})();
(node_65263.shadow$old = true);

(new_link_65265.onload = ((function (seq__65120_65237,chunk__65124_65238,count__65125_65239,i__65126_65240,seq__65086,chunk__65088,count__65089,i__65090,new_link_65265,path_match_65264,node_65263,seq__65120_65257__$1,temp__5753__auto___65256,path,map__65085,map__65085__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_65263);
});})(seq__65120_65237,chunk__65124_65238,count__65125_65239,i__65126_65240,seq__65086,chunk__65088,count__65089,i__65090,new_link_65265,path_match_65264,node_65263,seq__65120_65257__$1,temp__5753__auto___65256,path,map__65085,map__65085__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65264], 0));

goog.dom.insertSiblingAfter(new_link_65265,node_65263);


var G__65266 = cljs.core.next(seq__65120_65257__$1);
var G__65267 = null;
var G__65268 = (0);
var G__65269 = (0);
seq__65120_65237 = G__65266;
chunk__65124_65238 = G__65267;
count__65125_65239 = G__65268;
i__65126_65240 = G__65269;
continue;
} else {
var G__65270 = cljs.core.next(seq__65120_65257__$1);
var G__65271 = null;
var G__65272 = (0);
var G__65273 = (0);
seq__65120_65237 = G__65270;
chunk__65124_65238 = G__65271;
count__65125_65239 = G__65272;
i__65126_65240 = G__65273;
continue;
}
} else {
var G__65274 = cljs.core.next(seq__65120_65257__$1);
var G__65275 = null;
var G__65276 = (0);
var G__65277 = (0);
seq__65120_65237 = G__65274;
chunk__65124_65238 = G__65275;
count__65125_65239 = G__65276;
i__65126_65240 = G__65277;
continue;
}
}
} else {
}
}
break;
}


var G__65278 = seq__65086;
var G__65279 = chunk__65088;
var G__65280 = count__65089;
var G__65281 = (i__65090 + (1));
seq__65086 = G__65278;
chunk__65088 = G__65279;
count__65089 = G__65280;
i__65090 = G__65281;
continue;
} else {
var G__65282 = seq__65086;
var G__65283 = chunk__65088;
var G__65284 = count__65089;
var G__65285 = (i__65090 + (1));
seq__65086 = G__65282;
chunk__65088 = G__65283;
count__65089 = G__65284;
i__65090 = G__65285;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65086);
if(temp__5753__auto__){
var seq__65086__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65086__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__65086__$1);
var G__65286 = cljs.core.chunk_rest(seq__65086__$1);
var G__65287 = c__4679__auto__;
var G__65288 = cljs.core.count(c__4679__auto__);
var G__65289 = (0);
seq__65086 = G__65286;
chunk__65088 = G__65287;
count__65089 = G__65288;
i__65090 = G__65289;
continue;
} else {
var path = cljs.core.first(seq__65086__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65134_65290 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65138_65291 = null;
var count__65139_65292 = (0);
var i__65140_65293 = (0);
while(true){
if((i__65140_65293 < count__65139_65292)){
var node_65294 = chunk__65138_65291.cljs$core$IIndexed$_nth$arity$2(null,i__65140_65293);
if(cljs.core.not(node_65294.shadow$old)){
var path_match_65295 = shadow.cljs.devtools.client.browser.match_paths(node_65294.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65295)){
var new_link_65296 = (function (){var G__65146 = node_65294.cloneNode(true);
G__65146.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65295),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65146;
})();
(node_65294.shadow$old = true);

(new_link_65296.onload = ((function (seq__65134_65290,chunk__65138_65291,count__65139_65292,i__65140_65293,seq__65086,chunk__65088,count__65089,i__65090,new_link_65296,path_match_65295,node_65294,path,seq__65086__$1,temp__5753__auto__,map__65085,map__65085__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_65294);
});})(seq__65134_65290,chunk__65138_65291,count__65139_65292,i__65140_65293,seq__65086,chunk__65088,count__65089,i__65090,new_link_65296,path_match_65295,node_65294,path,seq__65086__$1,temp__5753__auto__,map__65085,map__65085__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65295], 0));

goog.dom.insertSiblingAfter(new_link_65296,node_65294);


var G__65297 = seq__65134_65290;
var G__65298 = chunk__65138_65291;
var G__65299 = count__65139_65292;
var G__65300 = (i__65140_65293 + (1));
seq__65134_65290 = G__65297;
chunk__65138_65291 = G__65298;
count__65139_65292 = G__65299;
i__65140_65293 = G__65300;
continue;
} else {
var G__65301 = seq__65134_65290;
var G__65302 = chunk__65138_65291;
var G__65303 = count__65139_65292;
var G__65304 = (i__65140_65293 + (1));
seq__65134_65290 = G__65301;
chunk__65138_65291 = G__65302;
count__65139_65292 = G__65303;
i__65140_65293 = G__65304;
continue;
}
} else {
var G__65305 = seq__65134_65290;
var G__65306 = chunk__65138_65291;
var G__65307 = count__65139_65292;
var G__65308 = (i__65140_65293 + (1));
seq__65134_65290 = G__65305;
chunk__65138_65291 = G__65306;
count__65139_65292 = G__65307;
i__65140_65293 = G__65308;
continue;
}
} else {
var temp__5753__auto___65309__$1 = cljs.core.seq(seq__65134_65290);
if(temp__5753__auto___65309__$1){
var seq__65134_65310__$1 = temp__5753__auto___65309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65134_65310__$1)){
var c__4679__auto___65311 = cljs.core.chunk_first(seq__65134_65310__$1);
var G__65312 = cljs.core.chunk_rest(seq__65134_65310__$1);
var G__65313 = c__4679__auto___65311;
var G__65314 = cljs.core.count(c__4679__auto___65311);
var G__65315 = (0);
seq__65134_65290 = G__65312;
chunk__65138_65291 = G__65313;
count__65139_65292 = G__65314;
i__65140_65293 = G__65315;
continue;
} else {
var node_65316 = cljs.core.first(seq__65134_65310__$1);
if(cljs.core.not(node_65316.shadow$old)){
var path_match_65317 = shadow.cljs.devtools.client.browser.match_paths(node_65316.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65317)){
var new_link_65318 = (function (){var G__65147 = node_65316.cloneNode(true);
G__65147.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65317),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65147;
})();
(node_65316.shadow$old = true);

(new_link_65318.onload = ((function (seq__65134_65290,chunk__65138_65291,count__65139_65292,i__65140_65293,seq__65086,chunk__65088,count__65089,i__65090,new_link_65318,path_match_65317,node_65316,seq__65134_65310__$1,temp__5753__auto___65309__$1,path,seq__65086__$1,temp__5753__auto__,map__65085,map__65085__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_65316);
});})(seq__65134_65290,chunk__65138_65291,count__65139_65292,i__65140_65293,seq__65086,chunk__65088,count__65089,i__65090,new_link_65318,path_match_65317,node_65316,seq__65134_65310__$1,temp__5753__auto___65309__$1,path,seq__65086__$1,temp__5753__auto__,map__65085,map__65085__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65317], 0));

goog.dom.insertSiblingAfter(new_link_65318,node_65316);


var G__65319 = cljs.core.next(seq__65134_65310__$1);
var G__65320 = null;
var G__65321 = (0);
var G__65322 = (0);
seq__65134_65290 = G__65319;
chunk__65138_65291 = G__65320;
count__65139_65292 = G__65321;
i__65140_65293 = G__65322;
continue;
} else {
var G__65323 = cljs.core.next(seq__65134_65310__$1);
var G__65324 = null;
var G__65325 = (0);
var G__65326 = (0);
seq__65134_65290 = G__65323;
chunk__65138_65291 = G__65324;
count__65139_65292 = G__65325;
i__65140_65293 = G__65326;
continue;
}
} else {
var G__65327 = cljs.core.next(seq__65134_65310__$1);
var G__65328 = null;
var G__65329 = (0);
var G__65330 = (0);
seq__65134_65290 = G__65327;
chunk__65138_65291 = G__65328;
count__65139_65292 = G__65329;
i__65140_65293 = G__65330;
continue;
}
}
} else {
}
}
break;
}


var G__65331 = cljs.core.next(seq__65086__$1);
var G__65332 = null;
var G__65333 = (0);
var G__65334 = (0);
seq__65086 = G__65331;
chunk__65088 = G__65332;
count__65089 = G__65333;
i__65090 = G__65334;
continue;
} else {
var G__65335 = cljs.core.next(seq__65086__$1);
var G__65336 = null;
var G__65337 = (0);
var G__65338 = (0);
seq__65086 = G__65335;
chunk__65088 = G__65336;
count__65089 = G__65337;
i__65090 = G__65338;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__65148){
var map__65149 = p__65148;
var map__65149__$1 = cljs.core.__destructure_map(map__65149);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65149__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__65150){
var map__65151 = p__65150;
var map__65151__$1 = cljs.core.__destructure_map(map__65151);
var _ = map__65151__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65151__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__65152,done,error){
var map__65153 = p__65152;
var map__65153__$1 = cljs.core.__destructure_map(map__65153);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65153__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__65154,done,error){
var map__65155 = p__65154;
var map__65155__$1 = cljs.core.__destructure_map(map__65155);
var msg = map__65155__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__65156){
var map__65157 = p__65156;
var map__65157__$1 = cljs.core.__destructure_map(map__65157);
var src = map__65157__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65157__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__65158 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__65158) : done.call(null,G__65158));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__65159){
var map__65160 = p__65159;
var map__65160__$1 = cljs.core.__destructure_map(map__65160);
var msg__$1 = map__65160__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65160__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e65161){var ex = e65161;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__65162){
var map__65163 = p__65162;
var map__65163__$1 = cljs.core.__destructure_map(map__65163);
var env = map__65163__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65163__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__65164){
var map__65165 = p__65164;
var map__65165__$1 = cljs.core.__destructure_map(map__65165);
var msg = map__65165__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65165__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__65166){
var map__65167 = p__65166;
var map__65167__$1 = cljs.core.__destructure_map(map__65167);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65167__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65167__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__65168){
var map__65169 = p__65168;
var map__65169__$1 = cljs.core.__destructure_map(map__65169);
var svc = map__65169__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65169__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
