goog.provide('app.mutations');
/**
 * Mutation: Delete the person with `:person/id` from the list with `:list/id`
 */
app.mutations.delete_person = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.mutations","delete-person","app.mutations/delete-person",-545955747,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.mutations","delete-person","app.mutations/delete-person",-545955747,null),(function (fulcro_mutation_env_symbol){
var map__52139 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__52139__$1 = cljs.core.__destructure_map(map__52139);
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52139__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var person_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52139__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$mutations$action(p__52140){
var map__52141 = p__52140;
var map__52141__$1 = cljs.core.__destructure_map(map__52141);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52141__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__52142_52146 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__52143_52147 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__52143_52147);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),person_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),list_id,new cljs.core.Keyword("list","people","list/people",1438389142)], null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__52142_52146);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__52144 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__52145 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__52145);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__52144);
}})], null);
}));

//# sourceMappingURL=app.mutations.js.map
