goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ident;
} else {
return and__4251__auto__;
}
})())){
var map__58002 = app__$1;
var map__58002__$1 = cljs.core.__destructure_map(map__58002);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58002__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4253__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__58003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__58004 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__58003,G__58004) : com.fulcrologic.fulcro.components.computed.call(null,G__58003,G__58004));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,2071399863,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__58006 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__58006) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__58006));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-1397132037,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__58009 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__58010 = null;
var count__58011 = (0);
var i__58012 = (0);
while(true){
if((i__58012 < count__58011)){
var c = chunk__58010.cljs$core$IIndexed$_nth$arity$2(null,i__58012);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58116 = seq__58009;
var G__58117 = chunk__58010;
var G__58118 = count__58011;
var G__58119 = (i__58012 + (1));
seq__58009 = G__58116;
chunk__58010 = G__58117;
count__58011 = G__58118;
i__58012 = G__58119;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58009);
if(temp__5753__auto__){
var seq__58009__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58009__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58009__$1);
var G__58121 = cljs.core.chunk_rest(seq__58009__$1);
var G__58122 = c__4679__auto__;
var G__58123 = cljs.core.count(c__4679__auto__);
var G__58124 = (0);
seq__58009 = G__58121;
chunk__58010 = G__58122;
count__58011 = G__58123;
i__58012 = G__58124;
continue;
} else {
var c = cljs.core.first(seq__58009__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58125 = cljs.core.next(seq__58009__$1);
var G__58126 = null;
var G__58127 = (0);
var G__58128 = (0);
seq__58009 = G__58125;
chunk__58010 = G__58126;
count__58011 = G__58127;
i__58012 = G__58128;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__58017 = app__$1;
var map__58017__$1 = cljs.core.__destructure_map(map__58017);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58017__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58018 = cljs.core.deref(runtime_atom);
var map__58018__$1 = cljs.core.__destructure_map(map__58018);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58018__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__58019 = indexes;
var map__58019__$1 = cljs.core.__destructure_map(map__58019);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58019__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58019__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58019__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__58020 = cljs.core.seq(classes);
var chunk__58021 = null;
var count__58022 = (0);
var i__58023 = (0);
while(true){
if((i__58023 < count__58022)){
var class$ = chunk__58021.cljs$core$IIndexed$_nth$arity$2(null,i__58023);
var seq__58039_58129 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__58041_58130 = null;
var count__58042_58131 = (0);
var i__58043_58132 = (0);
while(true){
if((i__58043_58132 < count__58042_58131)){
var component_58134 = chunk__58041_58130.cljs$core$IIndexed$_nth$arity$2(null,i__58043_58132);
var component_ident_58136 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58134) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58134));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58136,component_58134);


var G__58137 = seq__58039_58129;
var G__58138 = chunk__58041_58130;
var G__58139 = count__58042_58131;
var G__58140 = (i__58043_58132 + (1));
seq__58039_58129 = G__58137;
chunk__58041_58130 = G__58138;
count__58042_58131 = G__58139;
i__58043_58132 = G__58140;
continue;
} else {
var temp__5753__auto___58141 = cljs.core.seq(seq__58039_58129);
if(temp__5753__auto___58141){
var seq__58039_58142__$1 = temp__5753__auto___58141;
if(cljs.core.chunked_seq_QMARK_(seq__58039_58142__$1)){
var c__4679__auto___58143 = cljs.core.chunk_first(seq__58039_58142__$1);
var G__58144 = cljs.core.chunk_rest(seq__58039_58142__$1);
var G__58145 = c__4679__auto___58143;
var G__58146 = cljs.core.count(c__4679__auto___58143);
var G__58147 = (0);
seq__58039_58129 = G__58144;
chunk__58041_58130 = G__58145;
count__58042_58131 = G__58146;
i__58043_58132 = G__58147;
continue;
} else {
var component_58148 = cljs.core.first(seq__58039_58142__$1);
var component_ident_58149 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58148) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58148));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58149,component_58148);


var G__58151 = cljs.core.next(seq__58039_58142__$1);
var G__58152 = null;
var G__58153 = (0);
var G__58154 = (0);
seq__58039_58129 = G__58151;
chunk__58041_58130 = G__58152;
count__58042_58131 = G__58153;
i__58043_58132 = G__58154;
continue;
}
} else {
}
}
break;
}


var G__58156 = seq__58020;
var G__58157 = chunk__58021;
var G__58158 = count__58022;
var G__58159 = (i__58023 + (1));
seq__58020 = G__58156;
chunk__58021 = G__58157;
count__58022 = G__58158;
i__58023 = G__58159;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58020);
if(temp__5753__auto__){
var seq__58020__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58020__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58020__$1);
var G__58160 = cljs.core.chunk_rest(seq__58020__$1);
var G__58161 = c__4679__auto__;
var G__58162 = cljs.core.count(c__4679__auto__);
var G__58163 = (0);
seq__58020 = G__58160;
chunk__58021 = G__58161;
count__58022 = G__58162;
i__58023 = G__58163;
continue;
} else {
var class$ = cljs.core.first(seq__58020__$1);
var seq__58045_58164 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__58047_58165 = null;
var count__58048_58166 = (0);
var i__58049_58167 = (0);
while(true){
if((i__58049_58167 < count__58048_58166)){
var component_58169 = chunk__58047_58165.cljs$core$IIndexed$_nth$arity$2(null,i__58049_58167);
var component_ident_58170 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58169) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58169));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58170,component_58169);


var G__58171 = seq__58045_58164;
var G__58172 = chunk__58047_58165;
var G__58173 = count__58048_58166;
var G__58174 = (i__58049_58167 + (1));
seq__58045_58164 = G__58171;
chunk__58047_58165 = G__58172;
count__58048_58166 = G__58173;
i__58049_58167 = G__58174;
continue;
} else {
var temp__5753__auto___58175__$1 = cljs.core.seq(seq__58045_58164);
if(temp__5753__auto___58175__$1){
var seq__58045_58176__$1 = temp__5753__auto___58175__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58045_58176__$1)){
var c__4679__auto___58177 = cljs.core.chunk_first(seq__58045_58176__$1);
var G__58178 = cljs.core.chunk_rest(seq__58045_58176__$1);
var G__58179 = c__4679__auto___58177;
var G__58180 = cljs.core.count(c__4679__auto___58177);
var G__58181 = (0);
seq__58045_58164 = G__58178;
chunk__58047_58165 = G__58179;
count__58048_58166 = G__58180;
i__58049_58167 = G__58181;
continue;
} else {
var component_58182 = cljs.core.first(seq__58045_58176__$1);
var component_ident_58183 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58182) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58182));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58183,component_58182);


var G__58184 = cljs.core.next(seq__58045_58176__$1);
var G__58185 = null;
var G__58186 = (0);
var G__58187 = (0);
seq__58045_58164 = G__58184;
chunk__58047_58165 = G__58185;
count__58048_58166 = G__58186;
i__58049_58167 = G__58187;
continue;
}
} else {
}
}
break;
}


var G__58188 = cljs.core.next(seq__58020__$1);
var G__58189 = null;
var G__58190 = (0);
var G__58191 = (0);
seq__58020 = G__58188;
chunk__58021 = G__58189;
count__58022 = G__58190;
i__58023 = G__58191;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__58058 = app__$1;
var map__58058__$1 = cljs.core.__destructure_map(map__58058);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58059 = cljs.core.deref(runtime_atom);
var map__58059__$1 = cljs.core.__destructure_map(map__58059);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58059__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__58060 = indexes;
var map__58060__$1 = cljs.core.__destructure_map(map__58060);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58060__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58060__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__58054_SHARP_,p2__58055_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__58054_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__58055_SHARP_) : class__GT_components.call(null,p2__58055_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__58064 = app__$1;
var map__58064__$1 = cljs.core.__destructure_map(map__58064);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58064__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58064__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__58066 = cljs.core.deref(runtime_atom);
var map__58066__$1 = cljs.core.__destructure_map(map__58066);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58066__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58066__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58066__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58066__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__58067 = indexes;
var map__58067__$1 = cljs.core.__destructure_map(map__58067);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__58069 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__58069__$1 = cljs.core.__destructure_map(map__58069);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__58070_58199 = cljs.core.seq(limited_to_render);
var chunk__58072_58200 = null;
var count__58073_58201 = (0);
var i__58074_58202 = (0);
while(true){
if((i__58074_58202 < count__58073_58201)){
var c_58203 = chunk__58072_58200.cljs$core$IIndexed$_nth$arity$2(null,i__58074_58202);
var ident_58204 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58203) : com.fulcrologic.fulcro.components.get_ident.call(null,c_58203));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58204,c_58203);


var G__58205 = seq__58070_58199;
var G__58206 = chunk__58072_58200;
var G__58207 = count__58073_58201;
var G__58208 = (i__58074_58202 + (1));
seq__58070_58199 = G__58205;
chunk__58072_58200 = G__58206;
count__58073_58201 = G__58207;
i__58074_58202 = G__58208;
continue;
} else {
var temp__5753__auto___58209 = cljs.core.seq(seq__58070_58199);
if(temp__5753__auto___58209){
var seq__58070_58210__$1 = temp__5753__auto___58209;
if(cljs.core.chunked_seq_QMARK_(seq__58070_58210__$1)){
var c__4679__auto___58212 = cljs.core.chunk_first(seq__58070_58210__$1);
var G__58213 = cljs.core.chunk_rest(seq__58070_58210__$1);
var G__58214 = c__4679__auto___58212;
var G__58215 = cljs.core.count(c__4679__auto___58212);
var G__58216 = (0);
seq__58070_58199 = G__58213;
chunk__58072_58200 = G__58214;
count__58073_58201 = G__58215;
i__58074_58202 = G__58216;
continue;
} else {
var c_58217 = cljs.core.first(seq__58070_58210__$1);
var ident_58218 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58217) : com.fulcrologic.fulcro.components.get_ident.call(null,c_58217));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58218,c_58217);


var G__58220 = cljs.core.next(seq__58070_58210__$1);
var G__58221 = null;
var G__58222 = (0);
var G__58223 = (0);
seq__58070_58199 = G__58220;
chunk__58072_58200 = G__58221;
count__58073_58201 = G__58222;
i__58074_58202 = G__58223;
continue;
}
} else {
}
}
break;
}

var seq__58079 = cljs.core.seq(limited_idents);
var chunk__58080 = null;
var count__58081 = (0);
var i__58082 = (0);
while(true){
if((i__58082 < count__58081)){
var i = chunk__58080.cljs$core$IIndexed$_nth$arity$2(null,i__58082);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58225 = seq__58079;
var G__58226 = chunk__58080;
var G__58227 = count__58081;
var G__58228 = (i__58082 + (1));
seq__58079 = G__58225;
chunk__58080 = G__58226;
count__58081 = G__58227;
i__58082 = G__58228;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58079);
if(temp__5753__auto__){
var seq__58079__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58079__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58079__$1);
var G__58229 = cljs.core.chunk_rest(seq__58079__$1);
var G__58230 = c__4679__auto__;
var G__58231 = cljs.core.count(c__4679__auto__);
var G__58232 = (0);
seq__58079 = G__58229;
chunk__58080 = G__58230;
count__58081 = G__58231;
i__58082 = G__58232;
continue;
} else {
var i = cljs.core.first(seq__58079__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58234 = cljs.core.next(seq__58079__$1);
var G__58235 = null;
var G__58236 = (0);
var G__58237 = (0);
seq__58079 = G__58234;
chunk__58080 = G__58235;
count__58081 = G__58236;
i__58082 = G__58237;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__58085 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__58085__$1 = cljs.core.__destructure_map(map__58085);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__58086_58238 = cljs.core.seq(all_idents);
var chunk__58087_58239 = null;
var count__58088_58240 = (0);
var i__58089_58241 = (0);
while(true){
if((i__58089_58241 < count__58088_58240)){
var i_58242 = chunk__58087_58239.cljs$core$IIndexed$_nth$arity$2(null,i__58089_58241);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58242);


var G__58243 = seq__58086_58238;
var G__58244 = chunk__58087_58239;
var G__58245 = count__58088_58240;
var G__58246 = (i__58089_58241 + (1));
seq__58086_58238 = G__58243;
chunk__58087_58239 = G__58244;
count__58088_58240 = G__58245;
i__58089_58241 = G__58246;
continue;
} else {
var temp__5753__auto___58247 = cljs.core.seq(seq__58086_58238);
if(temp__5753__auto___58247){
var seq__58086_58248__$1 = temp__5753__auto___58247;
if(cljs.core.chunked_seq_QMARK_(seq__58086_58248__$1)){
var c__4679__auto___58249 = cljs.core.chunk_first(seq__58086_58248__$1);
var G__58250 = cljs.core.chunk_rest(seq__58086_58248__$1);
var G__58251 = c__4679__auto___58249;
var G__58252 = cljs.core.count(c__4679__auto___58249);
var G__58253 = (0);
seq__58086_58238 = G__58250;
chunk__58087_58239 = G__58251;
count__58088_58240 = G__58252;
i__58089_58241 = G__58253;
continue;
} else {
var i_58254 = cljs.core.first(seq__58086_58248__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58254);


var G__58255 = cljs.core.next(seq__58086_58248__$1);
var G__58256 = null;
var G__58257 = (0);
var G__58258 = (0);
seq__58086_58238 = G__58255;
chunk__58087_58239 = G__58256;
count__58088_58240 = G__58257;
i__58089_58241 = G__58258;
continue;
}
} else {
}
}
break;
}

var seq__58095 = cljs.core.seq(extra_to_force);
var chunk__58096 = null;
var count__58097 = (0);
var i__58098 = (0);
while(true){
if((i__58098 < count__58097)){
var c = chunk__58096.cljs$core$IIndexed$_nth$arity$2(null,i__58098);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__58259 = seq__58095;
var G__58260 = chunk__58096;
var G__58261 = count__58097;
var G__58262 = (i__58098 + (1));
seq__58095 = G__58259;
chunk__58096 = G__58260;
count__58097 = G__58261;
i__58098 = G__58262;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58095);
if(temp__5753__auto__){
var seq__58095__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58095__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58095__$1);
var G__58263 = cljs.core.chunk_rest(seq__58095__$1);
var G__58264 = c__4679__auto__;
var G__58265 = cljs.core.count(c__4679__auto__);
var G__58266 = (0);
seq__58095 = G__58263;
chunk__58096 = G__58264;
count__58097 = G__58265;
i__58098 = G__58266;
continue;
} else {
var c = cljs.core.first(seq__58095__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__58267 = cljs.core.next(seq__58095__$1);
var G__58268 = null;
var G__58269 = (0);
var G__58270 = (0);
seq__58095 = G__58267;
chunk__58096 = G__58268;
count__58097 = G__58269;
i__58098 = G__58270;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__58105 = arguments.length;
switch (G__58105) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__58106){
var map__58107 = p__58106;
var map__58107__$1 = cljs.core.__destructure_map(map__58107);
var options = map__58107__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58107__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58107__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4253__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e58111){var e = e58111;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-252361652,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
