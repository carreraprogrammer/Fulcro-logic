goog.provide('com.fulcrologic.guardrails.impl.externs');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.impl !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs.externs_registry !== 'undefined')){
} else {
com.fulcrologic.guardrails.impl.externs.externs_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.impl !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs.spec_registry !== 'undefined')){
} else {
com.fulcrologic.guardrails.impl.externs.spec_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.impl !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs.function_registry !== 'undefined')){
} else {
com.fulcrologic.guardrails.impl.externs.function_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.impl !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs.external_function_registry !== 'undefined')){
} else {
com.fulcrologic.guardrails.impl.externs.external_function_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.guardrails.impl.externs.register_externs_BANG_ = (function com$fulcrologic$guardrails$impl$externs$register_externs_BANG_(NS,fn_name,externs){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.guardrails.impl.externs.externs_registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [NS,fn_name], null),externs);
});
com.fulcrologic.guardrails.impl.externs.register_specs_BANG_ = (function com$fulcrologic$guardrails$impl$externs$register_specs_BANG_(function$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.guardrails.impl.externs.spec_registry,cljs.core.merge,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","spec-registry","com.fulcrologic.guardrails.registry/spec-registry",1477479211).cljs$core$IFn$_invoke$arity$1(function$));
});
com.fulcrologic.guardrails.impl.externs.clean_function = (function com$fulcrologic$guardrails$impl$externs$clean_function(function$){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(function$,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","arities","com.fulcrologic.guardrails.registry/arities",1446074922),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.utils.map_vals,(function (p1__47685_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47685_SHARP_,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","body","com.fulcrologic.guardrails.registry/body",1170523854));
}))),new cljs.core.Keyword("com.fulcrologic.guardrails.registry","spec-registry","com.fulcrologic.guardrails.registry/spec-registry",1477479211));
});
com.fulcrologic.guardrails.impl.externs.register_function_BANG_ = (function com$fulcrologic$guardrails$impl$externs$register_function_BANG_(NS,fn_name,function$){
com.fulcrologic.guardrails.impl.externs.register_specs_BANG_(function$);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.guardrails.impl.externs.function_registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [NS,fn_name], null),com.fulcrologic.guardrails.impl.externs.clean_function(function$));
});
com.fulcrologic.guardrails.impl.externs.record_defn_BANG_ = (function com$fulcrologic$guardrails$impl$externs$record_defn_BANG_(NS,p__47686,externs){
var map__47687 = p__47686;
var map__47687__$1 = cljs.core.__destructure_map(map__47687);
var function$ = map__47687__$1;
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47687__$1,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","fn-name","com.fulcrologic.guardrails.registry/fn-name",-1837692103));
com.fulcrologic.guardrails.impl.externs.register_externs_BANG_(NS,fn_name,externs);

return com.fulcrologic.guardrails.impl.externs.register_function_BANG_(NS,fn_name,function$);
});
com.fulcrologic.guardrails.impl.externs.register_external_function_BANG_ = (function com$fulcrologic$guardrails$impl$externs$register_external_function_BANG_(p__47688){
var map__47690 = p__47688;
var map__47690__$1 = cljs.core.__destructure_map(map__47690);
var external_function = map__47690__$1;
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47690__$1,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","var-name","com.fulcrologic.guardrails.registry/var-name",502701799));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.guardrails.impl.externs.external_function_registry,cljs.core.assoc,var_name,com.fulcrologic.guardrails.impl.externs.clean_function(external_function));
});
com.fulcrologic.guardrails.impl.externs.record_fdef_BANG_ = (function com$fulcrologic$guardrails$impl$externs$record_fdef_BANG_(external_function){
com.fulcrologic.guardrails.impl.externs.register_specs_BANG_(external_function);

return com.fulcrologic.guardrails.impl.externs.register_external_function_BANG_(external_function);
});

//# sourceMappingURL=com.fulcrologic.guardrails.impl.externs.js.map
