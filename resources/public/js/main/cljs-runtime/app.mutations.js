goog.provide('app.mutations');
/**
 * Mutation: Delete the person with `name` from the list with `list-name`
 */
app.mutations.delete_person = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.mutations","delete-person","app.mutations/delete-person",-545955747,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.mutations","delete-person","app.mutations/delete-person",-545955747,null),(function (fulcro_mutation_env_symbol){
var map__48969 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__48969__$1 = cljs.core.__destructure_map(map__48969);
var list_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"list-name","list-name",-32600364));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$mutations$action(p__48970){
var map__48971 = p__48970;
var map__48971__$1 = cljs.core.__destructure_map(map__48971);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48971__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__48972_48980 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__48973_48981 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__48973_48981);

try{var path_48982 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Friends",list_name))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.Keyword("list","people","list/people",1438389142)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.Keyword("list","people","list/people",1438389142)], null));
var old_list_48983 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path_48982);
var new_list_48984 = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48968_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("person","name","person/name",549444500).cljs$core$IFn$_invoke$arity$1(p1__48968_SHARP_),name);
}),old_list_48983));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,path_48982,new_list_48984);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__48972_48980);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__48974 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__48975 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__48975);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__48974);
}})], null);
}));

//# sourceMappingURL=app.mutations.js.map
