goog.provide('com.fulcrologic.fulcro.inspect.inspect_client');
goog.scope(function(){
  com.fulcrologic.fulcro.inspect.inspect_client.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * @define {boolean}
 */
com.fulcrologic.fulcro.inspect.inspect_client.INSPECT = goog.define("com.fulcrologic.fulcro.inspect.inspect_client.INSPECT",false);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.run_picker !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.run_picker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key = new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.send_ch !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((50000)));
}
com.fulcrologic.fulcro.inspect.inspect_client.post_message = (function com$fulcrologic$fulcro$inspect$inspect_client$post_message(type,data){
try{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.send_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,data], null));
}catch (e55676){var e = e55676;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot send to inspect. Channel closed. See https://book.fulcrologic.com/#err-inspect-ch-closed"], null);
}),null)),null,-865725329,null);
}});
/**
 * Returns true when env is a cljs macro &env
 */
com.fulcrologic.fulcro.inspect.inspect_client.cljs_QMARK_ = (function com$fulcrologic$fulcro$inspect$inspect_client$cljs_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.inspect.inspect_client.isoget = (function com$fulcrologic$fulcro$inspect$inspect_client$isoget(var_args){
var G__55682 = arguments.length;
switch (G__55682) {
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
}));

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__4253__auto__ = com.fulcrologic.fulcro.inspect.inspect_client.goog$module$goog$object.get(obj,(function (){var G__55683 = k;
if((G__55683 == null)){
return null;
} else {
return cljs.core.name(G__55683);
}
})());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.inspect.inspect_client.app_state = (function com$fulcrologic$fulcro$inspect$inspect_client$app_state(app__$1){
var G__55684 = app__$1;
var G__55684__$1 = (((G__55684 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__55684));
if((G__55684__$1 == null)){
return null;
} else {
return cljs.core.deref(G__55684__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$runtime_atom(app__$1){
var G__55685 = app__$1;
if((G__55685 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__55685);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.state_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$state_atom(app__$1){
var G__55686 = app__$1;
if((G__55686 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__55686);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid = (function com$fulcrologic$fulcro$inspect$inspect_client$app_uuid(app__$1){
var G__55687 = app__$1;
var G__55687__$1 = (((G__55687 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__55687));
var G__55687__$2 = (((G__55687__$1 == null))?null:cljs.core.deref(G__55687__$1));
if((G__55687__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__55687__$2,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.remotes = (function com$fulcrologic$fulcro$inspect$inspect_client$remotes(app__$1){
var G__55688 = com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1);
var G__55688__$1 = (((G__55688 == null))?null:cljs.core.deref(G__55688));
if((G__55688__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__55688__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$app_id(app__$1){
var G__55689 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
if((G__55689 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__55689);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$fulcro_app_id(app__$1){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
});
com.fulcrologic.fulcro.inspect.inspect_client.get_component_name = (function com$fulcrologic$fulcro$inspect$inspect_client$get_component_name(component){
if(cljs.core.truth_(component)){
var G__55691 = com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if((G__55691 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(G__55691);
}
} else {
return null;
}
});
com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$comp_transact_BANG_(app__$1,tx,options){
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,options) : tx_BANG_.call(null,app__$1,tx,options));
});
com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE = (100);
/**
 * Current time in the recorded history of states
 */
com.fulcrologic.fulcro.inspect.inspect_client.current_history_id = (function com$fulcrologic$fulcro$inspect$inspect_client$current_history_id(app__$1){
var or__4253__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","time","com.fulcrologic.fulcro.inspect.inspect-client/time",-124222029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1)));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
});
/**
 * Record a state change in this history. Returns the ID of the newly recorded entry.
 */
com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$record_history_entry_BANG_(app__$1,state){
var now = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1),(function (runtime){
var history = new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","history","com.fulcrologic.fulcro.inspect.inspect-client/history",1397701395).cljs$core$IFn$_invoke$arity$1(runtime);
var pruned_history = (((history == null))?cljs.core.PersistentVector.EMPTY:(((cljs.core.count(history) > com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(history,(1)):history
));
var new_history = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pruned_history,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),now,new cljs.core.Keyword(null,"value","value",305978217),state], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","time","com.fulcrologic.fulcro.inspect.inspect-client/time",-124222029),(now + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","history","com.fulcrologic.fulcro.inspect.inspect-client/history",1397701395),new_history], 0));
}));

return now;
});
com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry = (function com$fulcrologic$fulcro$inspect$inspect_client$get_history_entry(app__$1,id){
var history = new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","history","com.fulcrologic.fulcro.inspect.inspect-client/history",1397701395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1)));
var entry = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__55697){
var map__55698 = p__55697;
var map__55698__$1 = cljs.core.__destructure_map(map__55698);
var entry_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,entry_id);
}),cljs.core.seq(history)));
return entry;
});
/**
 * Notify Inspect that the database changed
 */
com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$db_changed_BANG_(app__$1,old_state,new_state){
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
var state_id = com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app__$1,new_state);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","db-changed!","fulcro.inspect.client/db-changed!",1922305221),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","state-id","fulcro.inspect.client/state-id",-828161304),state_id]));
});
com.fulcrologic.fulcro.inspect.inspect_client.event_data = (function com$fulcrologic$fulcro$inspect$inspect_client$event_data(event){
var G__55700 = event;
var G__55700__$1 = (((G__55700 == null))?null:com.fulcrologic.fulcro.inspect.inspect_client.goog$module$goog$object.getValueByKeys(G__55700,"data","fulcro-inspect-devtool-message"));
if((G__55700__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.inspect.transit.read(G__55700__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop = (function com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop(){
var c__49738__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_55727){
var state_val_55728 = (state_55727[(1)]);
if((state_val_55728 === (1))){
var state_55727__$1 = state_55727;
var statearr_55732_55827 = state_55727__$1;
(statearr_55732_55827[(2)] = null);

(statearr_55732_55827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55728 === (2))){
var state_55727__$1 = state_55727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55727__$1,(4),com.fulcrologic.fulcro.inspect.inspect_client.send_ch);
} else {
if((state_val_55728 === (3))){
var inst_55725 = (state_55727[(2)]);
var state_55727__$1 = state_55727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55727__$1,inst_55725);
} else {
if((state_val_55728 === (4))){
var inst_55703 = (state_55727[(7)]);
var inst_55703__$1 = (state_55727[(2)]);
var state_55727__$1 = (function (){var statearr_55735 = state_55727;
(statearr_55735[(7)] = inst_55703__$1);

return statearr_55735;
})();
if(cljs.core.truth_(inst_55703__$1)){
var statearr_55736_55828 = state_55727__$1;
(statearr_55736_55828[(1)] = (5));

} else {
var statearr_55737_55829 = state_55727__$1;
(statearr_55737_55829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55728 === (5))){
var inst_55703 = (state_55727[(7)]);
var inst_55708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55703,(0),null);
var inst_55709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55703,(1),null);
var inst_55710 = [new cljs.core.Keyword(null,"fulcro-inspect-remote-message","fulcro-inspect-remote-message",1518065210)];
var inst_55711 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_55712 = (new Date());
var inst_55713 = [inst_55708,inst_55709,inst_55712];
var inst_55714 = cljs.core.PersistentHashMap.fromArrays(inst_55711,inst_55713);
var inst_55715 = com.fulcrologic.fulcro.inspect.transit.write(inst_55714);
var inst_55716 = [inst_55715];
var inst_55717 = cljs.core.PersistentHashMap.fromArrays(inst_55710,inst_55716);
var inst_55718 = cljs.core.clj__GT_js(inst_55717);
var inst_55719 = window.postMessage(inst_55718,"*");
var state_55727__$1 = (function (){var statearr_55740 = state_55727;
(statearr_55740[(8)] = inst_55719);

return statearr_55740;
})();
var statearr_55741_55831 = state_55727__$1;
(statearr_55741_55831[(2)] = null);

(statearr_55741_55831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55728 === (6))){
var state_55727__$1 = state_55727;
var statearr_55742_55832 = state_55727__$1;
(statearr_55742_55832[(2)] = null);

(statearr_55742_55832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55728 === (7))){
var inst_55723 = (state_55727[(2)]);
var state_55727__$1 = state_55727;
var statearr_55743_55833 = state_55727__$1;
(statearr_55743_55833[(2)] = inst_55723);

(statearr_55743_55833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto__ = null;
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto____0 = (function (){
var statearr_55746 = [null,null,null,null,null,null,null,null,null];
(statearr_55746[(0)] = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto__);

(statearr_55746[(1)] = (1));

return statearr_55746;
});
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto____1 = (function (state_55727){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_55727);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e55747){var ex__49650__auto__ = e55747;
var statearr_55748_55835 = state_55727;
(statearr_55748_55835[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_55727[(4)]))){
var statearr_55749_55836 = state_55727;
(statearr_55749_55836[(1)] = cljs.core.first((state_55727[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55838 = state_55727;
state_55727 = G__55838;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto__ = function(state_55727){
switch(arguments.length){
case 0:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto____0.call(this);
case 1:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto____1.call(this,state_55727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto____0;
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto____1;
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_55750 = f__49739__auto__();
(statearr_55750[(6)] = c__49738__auto__);

return statearr_55750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));

return c__49738__auto__;
});
com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages = (function com$fulcrologic$fulcro$inspect$inspect_client$listen_local_messages(){
return window.addEventListener("message",(function (event){
if(cljs.core.truth_((function (){var and__4251__auto__ = (event.source === window);
if(and__4251__auto__){
return com.fulcrologic.fulcro.inspect.inspect_client.goog$module$goog$object.getValueByKeys(event,"data","fulcro-inspect-devtool-message");
} else {
return and__4251__auto__;
}
})())){
var G__55751 = com.fulcrologic.fulcro.inspect.inspect_client.event_data(event);
return (com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1(G__55751) : com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.call(null,G__55751));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = (event.source === window);
if(and__4251__auto__){
return com.fulcrologic.fulcro.inspect.inspect_client.goog$module$goog$object.getValueByKeys(event,"data","fulcro-inspect-start-consume");
} else {
return and__4251__auto__;
}
})())){
return com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop();
} else {
return null;
}
}
}),false);
});
com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$transact_inspector_BANG_(var_args){
var G__55753 = arguments.length;
switch (G__55753) {
case 1:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
}));

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ref,tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","tx-ref","fulcro.inspect.client/tx-ref",-1370560773),ref,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
}));

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.inspect.inspect_client.dispose_app = (function com$fulcrologic$fulcro$inspect$inspect_client$dispose_app(app_uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.dissoc,app_uuid);

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","dispose-app","fulcro.inspect.client/dispose-app",-574872452),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.set_active_app = (function com$fulcrologic$fulcro$inspect$inspect_client$set_active_app(app_uuid){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","set-active-app","fulcro.inspect.client/set-active-app",-2049837528),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_started_BANG_(app__$1,remote,tx_id,txn){
var start = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),start,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),txn], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_finished_BANG_(app__$1,remote,tx_id,response){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_failed_BANG_(app__$1,tx_id,error){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message = (function com$fulcrologic$fulcro$inspect$inspect_client$handle_devtool_message(p__55766){
var map__55767 = p__55766;
var map__55767__$1 = cljs.core.__destructure_map(map__55767);
var message = map__55767__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55767__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55767__$1,new cljs.core.Keyword(null,"data","data",-232669377));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.inspect.inspect-client",null,191,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Devtools Message received",message], null);
}),null)),null,-737602049,null);

var G__55768 = type;
var G__55768__$1 = (((G__55768 instanceof cljs.core.Keyword))?G__55768.fqn:null);
switch (G__55768__$1) {
case "fulcro.inspect.client/request-page-apps":
var seq__55769 = cljs.core.seq(cljs.core.vals(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_)));
var chunk__55770 = null;
var count__55771 = (0);
var i__55772 = (0);
while(true){
if((i__55772 < count__55771)){
var app__$1 = chunk__55770.cljs$core$IIndexed$_nth$arity$2(null,i__55772);
var state_55848 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var state_id_55849 = com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app__$1,state_55848);
var remote_names_55850 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__55769,chunk__55770,count__55771,i__55772,state_55848,state_id_55849,remote_names_55850,app__$1,G__55768,G__55768__$1,map__55767,map__55767__$1,message,type,data){
return (function (p1__55763_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__55763_SHARP_);
});})(seq__55769,chunk__55770,count__55771,i__55772,state_55848,state_id_55849,remote_names_55850,app__$1,G__55768,G__55768__$1,map__55767,map__55767__$1,message,type,data))
,cljs.core.str),cljs.core.keys(remote_names_55850)),new cljs.core.Keyword("fulcro.inspect.client","initial-history-step","fulcro.inspect.client/initial-history-step",1169628321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),state_id_55849,new cljs.core.Keyword(null,"value","value",305978217),state_55848], null)]));


var G__55854 = seq__55769;
var G__55855 = chunk__55770;
var G__55856 = count__55771;
var G__55857 = (i__55772 + (1));
seq__55769 = G__55854;
chunk__55770 = G__55855;
count__55771 = G__55856;
i__55772 = G__55857;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55769);
if(temp__5753__auto__){
var seq__55769__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55769__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__55769__$1);
var G__55859 = cljs.core.chunk_rest(seq__55769__$1);
var G__55860 = c__4679__auto__;
var G__55861 = cljs.core.count(c__4679__auto__);
var G__55862 = (0);
seq__55769 = G__55859;
chunk__55770 = G__55860;
count__55771 = G__55861;
i__55772 = G__55862;
continue;
} else {
var app__$1 = cljs.core.first(seq__55769__$1);
var state_55864 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var state_id_55865 = com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app__$1,state_55864);
var remote_names_55866 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__55769,chunk__55770,count__55771,i__55772,state_55864,state_id_55865,remote_names_55866,app__$1,seq__55769__$1,temp__5753__auto__,G__55768,G__55768__$1,map__55767,map__55767__$1,message,type,data){
return (function (p1__55763_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__55763_SHARP_);
});})(seq__55769,chunk__55770,count__55771,i__55772,state_55864,state_id_55865,remote_names_55866,app__$1,seq__55769__$1,temp__5753__auto__,G__55768,G__55768__$1,map__55767,map__55767__$1,message,type,data))
,cljs.core.str),cljs.core.keys(remote_names_55866)),new cljs.core.Keyword("fulcro.inspect.client","initial-history-step","fulcro.inspect.client/initial-history-step",1169628321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),state_id_55865,new cljs.core.Keyword(null,"value","value",305978217),state_55864], null)]));


var G__55872 = cljs.core.next(seq__55769__$1);
var G__55873 = null;
var G__55874 = (0);
var G__55875 = (0);
seq__55769 = G__55872;
chunk__55770 = G__55873;
count__55771 = G__55874;
i__55772 = G__55875;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "fulcro.inspect.client/reset-app-state":
var map__55779 = data;
var map__55779__$1 = cljs.core.__destructure_map(map__55779);
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55779__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55779__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5751__auto__)){
var app__$1 = temp__5751__auto__;
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_state))){
var map__55780_55878 = target_state;
var map__55780_55879__$1 = cljs.core.__destructure_map(map__55780_55878);
var id_55880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55780_55879__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var b2__45523__auto___55881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__45523__auto___55881)){
var app_55882__$2 = b2__45523__auto___55881;
var b2__45523__auto___55883__$1 = com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry(app_55882__$2,id_55880);
if(cljs.core.truth_(b2__45523__auto___55883__$1)){
var map__55781_55884 = b2__45523__auto___55883__$1;
var map__55781_55885__$1 = cljs.core.__destructure_map(map__55781_55884);
var value_55886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55781_55885__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app_55882__$2),value_55886);
} else {
}
} else {
}
} else {
}

var G__55782 = app__$1;
var G__55783 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__55782,G__55783) : render_BANG_.call(null,G__55782,G__55783));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,219,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reset app on invalid uuid",app_uuid], null);
}),null)),null,-1234424133,null);
}

break;
case "fulcro.inspect.client/fetch-history-step":
var map__55784 = data;
var map__55784__$1 = cljs.core.__destructure_map(map__55784);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var based_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55784__$1,new cljs.core.Keyword(null,"based-on","based-on",1217703581));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55784__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__45523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__45523__auto__)){
var app__$1 = b2__45523__auto__;
var b2__45523__auto____$1 = com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry(app__$1,id);
if(cljs.core.truth_(b2__45523__auto____$1)){
var map__55785 = b2__45523__auto____$1;
var map__55785__$1 = cljs.core.__destructure_map(map__55785);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55785__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prior_state = com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry(app__$1,based_on);
var diff = (cljs.core.truth_(prior_state)?com.fulcrologic.fulcro.inspect.diff.diff(prior_state,value):null);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","history-entry","fulcro.inspect.client/history-entry",1162276680),(function (){var G__55786 = cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","state-id","fulcro.inspect.core/state-id",-89620020),id]);
var G__55786__$1 = (cljs.core.truth_(diff)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__55786,new cljs.core.Keyword("fulcro.inspect.client","diff","fulcro.inspect.client/diff",1522519471),diff,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"based-on","based-on",1217703581),based_on], 0)):G__55786);
if(cljs.core.not(diff)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55786__$1,new cljs.core.Keyword("fulcro.inspect.client","state","fulcro.inspect.client/state",-1243075171),value);
} else {
return G__55786__$1;
}
})());
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/transact":
var map__55787 = data;
var map__55787__$1 = cljs.core.__destructure_map(map__55787);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55787__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var tx_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55787__$1,new cljs.core.Keyword(null,"tx-ref","tx-ref",-216104949));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55787__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5751__auto__)){
var app__$1 = temp__5751__auto__;
if(cljs.core.truth_(tx_ref)){
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),tx_ref], null));
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,244,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transact on invalid uuid",app_uuid,"See https://book.fulcrologic.com/#err-inspect-invalid-app-uuid"], null);
}),null)),null,380350767,null);
}

break;
case "fulcro.inspect.client/pick-element":
if(cljs.core.truth_(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.run_picker))){
var fexpr__55788 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.run_picker);
return (fexpr__55788.cljs$core$IFn$_invoke$arity$1 ? fexpr__55788.cljs$core$IFn$_invoke$arity$1(data) : fexpr__55788.call(null,data));
} else {
try{return alert("Element picker not installed. Add it to your preload.");
}catch (e55789){var _e = e55789;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,252,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Element picker not installed in app. You must add it to you preloads. See https://book.fulcrologic.com/#err-inspect-elm-picker-missing"], null);
}),null)),null,-97168172,null);
}}

break;
case "fulcro.inspect.client/network-request":
var map__55790 = data;
var map__55790__$1 = cljs.core.__destructure_map(map__55790);
var remote_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55790__$1,new cljs.core.Keyword("fulcro.inspect.client","remote","fulcro.inspect.client/remote",-306964848));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55790__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55790__$1,new cljs.core.Keyword(null,"mutation","mutation",-285823378));
var msg_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55790__$1,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55790__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__45523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__45523__auto__)){
var app__$1 = b2__45523__auto__;
var b2__45523__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__45523__auto____$1)){
var remote = b2__45523__auto____$1;
var b2__45523__auto____$2 = new cljs.core.Keyword(null,"transmit!","transmit!",-107149039).cljs$core$IFn$_invoke$arity$1(remote);
if(cljs.core.truth_(b2__45523__auto____$2)){
var transmit_BANG_ = b2__45523__auto____$2;
var b2__45523__auto____$3 = edn_query_language.core.query__GT_ast((function (){var or__4253__auto__ = query;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return mutation;
}
})());
if(cljs.core.truth_(b2__45523__auto____$3)){
var ast = b2__45523__auto____$3;
var b2__45523__auto____$4 = cljs.core.random_uuid();
if(cljs.core.truth_(b2__45523__auto____$4)){
var tx_id = b2__45523__auto____$4;
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,tx_id,(function (){var or__4253__auto__ = query;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return mutation;
}
})());

var G__55793 = remote;
var G__55794 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),tx_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),(0),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),cljs.core.identity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__55795){
var map__55796 = p__55795;
var map__55796__$1 = cljs.core.__destructure_map(map__55796);
var result = map__55796__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55796__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var error_QMARK__55893 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((error_QMARK__55893.cljs$core$IFn$_invoke$arity$1 ? error_QMARK__55893.cljs$core$IFn$_invoke$arity$1(result) : error_QMARK__55893.call(null,result)))){
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,tx_id,result);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,tx_id,body);
}

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","message-response","fulcro.inspect.client/message-response",587955053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998),msg_id,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-response","fulcro.inspect.ui-parser/msg-response",1721295840),body], null));
})], null);
return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(G__55793,G__55794) : transmit_BANG_.call(null,G__55793,G__55794));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/console-log":
var map__55797 = data;
var map__55797__$1 = cljs.core.__destructure_map(map__55797);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55797__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var log_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55797__$1,new cljs.core.Keyword(null,"log-js","log-js",-1565471667));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55797__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55797__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(log)){
return console.log(log);
} else {
if(cljs.core.truth_(log_js)){
return console.log(cljs.core.clj__GT_js(log_js));
} else {
if(cljs.core.truth_(warn)){
return console.warn(warn);
} else {
if(cljs.core.truth_(error)){
return console.error(error);
} else {
return null;
}
}
}
}

break;
case "fulcro.inspect.client/check-client-version":
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","client-version","fulcro.inspect.client/client-version",728119531),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),"3.0.0"], null));

break;
default:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.inspect.inspect-client",null,316,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown message",type], null);
}),null)),null,469347272,null);

}
});
com.fulcrologic.fulcro.inspect.inspect_client.install = (function com$fulcrologic$fulcro$inspect$inspect_client$install(_){
document.documentElement.setAttribute("__fulcro-inspect-remote-installed__",true);

if(cljs.core.truth_(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_))){
return null;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,325,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Installing Fulcro 3.x Inspect",cljs.core.PersistentArrayMap.EMPTY], null);
}),null)),null,883483920,null);

cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_,true);

return com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages();
}
});
/**
 * Register the application with Inspect, if it is available.
 */
com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$app_started_BANG_(app__$1){
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4251__auto__;
}
})())){
var networking = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
var state_STAR_ = com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app__$1);
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.assoc,app_uuid,app__$1);

com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app__$1,cljs.core.deref(state_STAR_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);

com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__55800_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__55800_SHARP_);
}),cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(state_STAR_)]));

return cljs.core.add_watch(state_STAR_,app_uuid,(function (p1__55803_SHARP_,p2__55804_SHARP_,p3__55801_SHARP_,p4__55802_SHARP_){
return com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_(app__$1,p3__55801_SHARP_,p4__55802_SHARP_);
}));
} else {
return null;
}
});
/**
 * Notify inspect that a transaction finished.
 * 
 * app - The app
 * env - The mutation env that completed.
 */
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$optimistic_action_finished_BANG_(app__$1,p__55807,p__55808){
var map__55809 = p__55807;
var map__55809__$1 = cljs.core.__destructure_map(map__55809);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__55810 = p__55808;
var map__55810__$1 = cljs.core.__destructure_map(map__55810);
var tx_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"tx-id","tx-id",638275288));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var state_id_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055));
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var component_name = com.fulcrologic.fulcro.inspect.inspect_client.get_component_name(component);
var current_id = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var tx__$1 = (function (){var G__55813 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),tx_id,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993),tx,new cljs.core.Keyword("fulcro.history","db-before-id","fulcro.history/db-before-id",1439381422),state_id_before,new cljs.core.Keyword("fulcro.history","db-after-id","fulcro.history/db-after-id",1928976932),current_id,new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options], null);
var G__55813__$1 = (cljs.core.truth_(component_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55813,new cljs.core.Keyword(null,"component","component",1555936782),component_name):G__55813);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55813__$1,new cljs.core.Keyword(null,"ident-ref","ident-ref",663643478),ref);
} else {
return G__55813__$1;
}
})();
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","new-client-transaction","fulcro.inspect.client/new-client-transaction",-1086637148),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx__$1]));
});

//# sourceMappingURL=com.fulcrologic.fulcro.inspect.inspect_client.js.map
