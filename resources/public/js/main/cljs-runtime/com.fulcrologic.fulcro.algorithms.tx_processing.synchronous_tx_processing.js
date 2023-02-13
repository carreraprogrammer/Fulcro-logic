goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

/**
 * Returns true if the current thread is running non-nested transaction processing code.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.top_level_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$top_level_QMARK_(p__61786){
var map__61787 = p__61786;
var map__61787__$1 = cljs.core.__destructure_map(map__61787);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61787__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,(0)),(0));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_submission_queue_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62000 = arguments.length;
var i__4865__auto___62001 = (0);
while(true){
if((i__4865__auto___62001 < len__4864__auto___62000)){
args__4870__auto__.push((arguments[i__4865__auto___62001]));

var G__62002 = (i__4865__auto___62001 + (1));
i__4865__auto___62001 = G__62002;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$applyTo = (function (seq61789){
var G__61790 = cljs.core.first(seq61789);
var seq61789__$1 = cljs.core.next(seq61789);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61790,seq61789__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_submission_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submission_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_post_processing_steps_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62004 = arguments.length;
var i__4865__auto___62005 = (0);
while(true){
if((i__4865__auto___62005 < len__4864__auto___62004)){
args__4870__auto__.push((arguments[i__4865__auto___62005]));

var G__62006 = (i__4865__auto___62005 + (1));
i__4865__auto___62005 = G__62006;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$applyTo = (function (seq61794){
var G__61795 = cljs.core.first(seq61794);
var seq61794__$1 = cljs.core.next(seq61794);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61795,seq61794__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_post_processing_steps_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_steps(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_active_queue_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62008 = arguments.length;
var i__4865__auto___62009 = (0);
while(true){
if((i__4865__auto___62009 < len__4864__auto___62008)){
args__4870__auto__.push((arguments[i__4865__auto___62009]));

var G__62010 = (i__4865__auto___62009 + (1));
i__4865__auto___62009 = G__62010;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$applyTo = (function (seq61802){
var G__61803 = cljs.core.first(seq61802);
var seq61802__$1 = cljs.core.next(seq61802);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61803,seq61802__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_active_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$active_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_send_queue_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62015 = arguments.length;
var i__4865__auto___62016 = (0);
while(true){
if((i__4865__auto___62016 < len__4864__auto___62015)){
args__4870__auto__.push((arguments[i__4865__auto___62016]));

var G__62017 = (i__4865__auto___62016 + (1));
i__4865__auto___62016 = G__62017;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,remote,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$applyTo = (function (seq61809){
var G__61810 = cljs.core.first(seq61809);
var seq61809__$1 = cljs.core.next(seq61809);
var G__61811 = cljs.core.first(seq61809__$1);
var seq61809__$2 = cljs.core.next(seq61809__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61810,G__61811,seq61809__$2);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_send_queue_BANG_(app__$1,remote,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$send_queue(app__$1,remote){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)));
});
/**
 * Add `f` as a function that will run after the current transaction has been fully processed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_after_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_after_BANG_(app__$1,f){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),f], 0));
});
/**
 * Is there post processing to do?
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_QMARK_(app__$1){
return cljs.core.boolean$(cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1)));
});
/**
 * Runs the queued post processing steps until the post-processing queue is empty.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.do_post_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$do_post_processing_BANG_(app__$1){
var steps = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1);
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_(app__$1,cljs.core.PersistentVector.EMPTY);

var seq__61820_62019 = cljs.core.seq(steps);
var chunk__61821_62020 = null;
var count__61822_62021 = (0);
var i__61823_62022 = (0);
while(true){
if((i__61823_62022 < count__61822_62021)){
var f_62023 = chunk__61821_62020.cljs$core$IIndexed$_nth$arity$2(null,i__61823_62022);
try{(f_62023.cljs$core$IFn$_invoke$arity$0 ? f_62023.cljs$core$IFn$_invoke$arity$0() : f_62023.call(null));
}catch (e61835){var e_62024 = e61835;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61820_62019,chunk__61821_62020,count__61822_62021,i__61823_62022,steps,e_62024,f_62023){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_62024,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__61820_62019,chunk__61821_62020,count__61822_62021,i__61823_62022,steps,e_62024,f_62023))
,null)),null,-247273909,null);
}

var G__62028 = seq__61820_62019;
var G__62029 = chunk__61821_62020;
var G__62030 = count__61822_62021;
var G__62031 = (i__61823_62022 + (1));
seq__61820_62019 = G__62028;
chunk__61821_62020 = G__62029;
count__61822_62021 = G__62030;
i__61823_62022 = G__62031;
continue;
} else {
var temp__5753__auto___62032 = cljs.core.seq(seq__61820_62019);
if(temp__5753__auto___62032){
var seq__61820_62033__$1 = temp__5753__auto___62032;
if(cljs.core.chunked_seq_QMARK_(seq__61820_62033__$1)){
var c__4679__auto___62034 = cljs.core.chunk_first(seq__61820_62033__$1);
var G__62035 = cljs.core.chunk_rest(seq__61820_62033__$1);
var G__62036 = c__4679__auto___62034;
var G__62037 = cljs.core.count(c__4679__auto___62034);
var G__62038 = (0);
seq__61820_62019 = G__62035;
chunk__61821_62020 = G__62036;
count__61822_62021 = G__62037;
i__61823_62022 = G__62038;
continue;
} else {
var f_62039 = cljs.core.first(seq__61820_62033__$1);
try{(f_62039.cljs$core$IFn$_invoke$arity$0 ? f_62039.cljs$core$IFn$_invoke$arity$0() : f_62039.call(null));
}catch (e61838){var e_62040 = e61838;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61820_62019,chunk__61821_62020,count__61822_62021,i__61823_62022,steps,e_62040,f_62039,seq__61820_62033__$1,temp__5753__auto___62032){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_62040,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__61820_62019,chunk__61821_62020,count__61822_62021,i__61823_62022,steps,e_62040,f_62039,seq__61820_62033__$1,temp__5753__auto___62032))
,null)),null,-1061982791,null);
}

var G__62041 = cljs.core.next(seq__61820_62033__$1);
var G__62042 = null;
var G__62043 = (0);
var G__62044 = (0);
seq__61820_62019 = G__62041;
chunk__61821_62020 = G__62042;
count__61822_62021 = G__62043;
i__61823_62022 = G__62044;
continue;
}
} else {
}
}
break;
}

var temp__5753__auto__ = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1));
if(temp__5753__auto__){
var next_steps = temp__5753__auto__;
var G__62045 = next_steps;
steps = G__62045;
continue;
} else {
return null;
}
break;
}
});
/**
 * Returns true if the current thread is in the midst of running the optimistic actions of a new transaction.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$in_transaction_QMARK_(p__61844){
var map__61845 = p__61844;
var map__61845__$1 = cljs.core.__destructure_map(map__61845);
var app__$1 = map__61845__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61845__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,(0)));
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$release_post_render_tasks_BANG_(app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
})], 0));
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__61851,remote){
var map__61852 = p__61851;
var map__61852__$1 = cljs.core.__destructure_map(map__61852);
var tx_element = map__61852__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61852__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61852__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61852__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61852__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61852__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var result_62049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_62050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_62050)){
var env_62051 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_62049], null));
try{(handler_62050.cljs$core$IFn$_invoke$arity$1 ? handler_62050.cljs$core$IFn$_invoke$arity$1(env_62051) : handler_62050.call(null,env_62051));
}catch (e61857){var e_62053 = e61857;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_62053,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-stp-res-action-exc"], null);
}),null)),null,2027999394,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__61861){
var map__61862 = p__61861;
var map__61862__$1 = cljs.core.__destructure_map(map__61862);
var tx_element = map__61862__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61862__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61862__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$node_index(queue,txn_id){
var n = cljs.core.count(queue);
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__61869){
var map__61870 = p__61869;
var map__61870__$1 = cljs.core.__destructure_map(map__61870);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61870__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),queue);
if((idx < n)){
return idx;
} else {
return null;
}
});
/**
 * Side-effects against the app state to distribute the result for txn-id element at ele-idx. This will call the result
 * handler and mark that remote as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_results_BANG_(app__$1,txn_id,ele_idx){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var tx_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,idx);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx], null),(function (p1__61873_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_(app__$1,tx_node,p1__61873_SHARP_);
})], 0));
});
/**
 * Deal with a network result on the given txn/element.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$record_result_BANG_(var_args){
var G__61880 = arguments.length;
switch (G__61880) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (app__$1,txn_id,ele_idx,remote,result,result_key){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var txn_idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,209,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-stp-res-lacks-valid-node"], null);
}),null)),null,1019443278,null);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_(app__$1,txn_id,ele_idx);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$remove_send_BANG_(app__$1,remote,txn_id,ele_idx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (old_queue){
return cljs.core.filterv((function (p__61885){
var map__61886 = p__61885;
var map__61886__$1 = cljs.core.__destructure_map(map__61886);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61886__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61886__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
})], 0));
});
/**
 * Generate a new send node and add it to the appropriate send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG_(app__$1,p__61888,ele_idx,remote){
var map__61889 = p__61888;
var map__61889__$1 = cljs.core.__destructure_map(map__61889);
var tx_node = map__61889__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
var id__61532__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__61532__auto__,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

var G__61891 = app__$1;
var G__61892 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__61891,G__61892) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__61891,G__61892));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__61532__auto__,cljs.core.dec);
}});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_result_handler_STAR_(result){
var id__61532__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__61532__auto__,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

var G__61894 = app__$1;
var G__61895 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__61894,G__61895) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__61894,G__61895));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__61532__auto__,cljs.core.dec);
}});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),send_node], 0));
} else {
com.fulcrologic.fulcro.algorithms.scheduling.defer((function (){
return handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));
}),(1));
}

return null;
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__61897){
var map__61898 = p__61897;
var map__61898__$1 = cljs.core.__destructure_map(map__61898);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61898__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61898__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61898__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_sends_BANG_(app__$1,p__61903){
var map__61904 = p__61903;
var map__61904__$1 = cljs.core.__destructure_map(map__61904);
var tx_node = map__61904__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61904__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61904__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_tx_node_BANG_(app__$1,p__61906){
var map__61907 = p__61906;
var map__61907__$1 = cljs.core.__destructure_map(map__61907);
var tx_node = map__61907__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61907__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,tx_node)));
}
});
/**
 * Process the send queues against the remotes, which will cause idle remotes with queued work to issue network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_send_queues_BANG_(app__$1){
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__61910_62076 = cljs.core.seq(remote_names);
var chunk__61911_62077 = null;
var count__61912_62078 = (0);
var i__61913_62079 = (0);
while(true){
if((i__61913_62079 < count__61912_62078)){
var remote_62080 = chunk__61911_62077.cljs$core$IIndexed$_nth$arity$2(null,i__61913_62079);
var send_queue_62081 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_62080);
var vec__61940_62082 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue_62081);
var p_62083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61940_62082,(0),null);
var serial_62084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61940_62082,(1),null);
var front_62085 = cljs.core.first(serial_62084);
var seq__61943_62088 = cljs.core.seq(p_62083);
var chunk__61944_62089 = null;
var count__61945_62090 = (0);
var i__61946_62091 = (0);
while(true){
if((i__61946_62091 < count__61945_62090)){
var item_62092 = chunk__61944_62089.cljs$core$IIndexed$_nth$arity$2(null,i__61946_62091);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__61943_62088,chunk__61944_62089,count__61945_62090,i__61946_62091,seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,item_62092,send_queue_62081,vec__61940_62082,p_62083,serial_62084,front_62085,remote_62080,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_62092,remote_62080);
});})(seq__61943_62088,chunk__61944_62089,count__61945_62090,i__61946_62091,seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,item_62092,send_queue_62081,vec__61940_62082,p_62083,serial_62084,front_62085,remote_62080,remote_names,operations))
);


var G__62094 = seq__61943_62088;
var G__62095 = chunk__61944_62089;
var G__62096 = count__61945_62090;
var G__62097 = (i__61946_62091 + (1));
seq__61943_62088 = G__62094;
chunk__61944_62089 = G__62095;
count__61945_62090 = G__62096;
i__61946_62091 = G__62097;
continue;
} else {
var temp__5753__auto___62098 = cljs.core.seq(seq__61943_62088);
if(temp__5753__auto___62098){
var seq__61943_62099__$1 = temp__5753__auto___62098;
if(cljs.core.chunked_seq_QMARK_(seq__61943_62099__$1)){
var c__4679__auto___62100 = cljs.core.chunk_first(seq__61943_62099__$1);
var G__62101 = cljs.core.chunk_rest(seq__61943_62099__$1);
var G__62102 = c__4679__auto___62100;
var G__62103 = cljs.core.count(c__4679__auto___62100);
var G__62104 = (0);
seq__61943_62088 = G__62101;
chunk__61944_62089 = G__62102;
count__61945_62090 = G__62103;
i__61946_62091 = G__62104;
continue;
} else {
var item_62105 = cljs.core.first(seq__61943_62099__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__61943_62088,chunk__61944_62089,count__61945_62090,i__61946_62091,seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,item_62105,seq__61943_62099__$1,temp__5753__auto___62098,send_queue_62081,vec__61940_62082,p_62083,serial_62084,front_62085,remote_62080,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_62105,remote_62080);
});})(seq__61943_62088,chunk__61944_62089,count__61945_62090,i__61946_62091,seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,item_62105,seq__61943_62099__$1,temp__5753__auto___62098,send_queue_62081,vec__61940_62082,p_62083,serial_62084,front_62085,remote_62080,remote_names,operations))
);


var G__62107 = cljs.core.next(seq__61943_62099__$1);
var G__62108 = null;
var G__62109 = (0);
var G__62110 = (0);
seq__61943_62088 = G__62107;
chunk__61944_62089 = G__62108;
count__61945_62090 = G__62109;
i__61946_62091 = G__62110;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active?",-132674601).cljs$core$IFn$_invoke$arity$1(front_62085))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_62080,serial_62084);
} else {
var map__61949_62111 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote_62080,serial_62084);
var map__61949_62112__$1 = cljs.core.__destructure_map(map__61949_62111);
var send_queue_62113__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61949_62112__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_62114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61949_62112__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_62114)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,map__61949_62111,map__61949_62112__$1,send_queue_62113__$1,send_node_62114,send_queue_62081,vec__61940_62082,p_62083,serial_62084,front_62085,remote_62080,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node_62114,remote_62080);
});})(seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,map__61949_62111,map__61949_62112__$1,send_queue_62113__$1,send_node_62114,send_queue_62081,vec__61940_62082,p_62083,serial_62084,front_62085,remote_62080,remote_names,operations))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_62080,send_queue_62113__$1);
}


var G__62117 = seq__61910_62076;
var G__62118 = chunk__61911_62077;
var G__62119 = count__61912_62078;
var G__62120 = (i__61913_62079 + (1));
seq__61910_62076 = G__62117;
chunk__61911_62077 = G__62118;
count__61912_62078 = G__62119;
i__61913_62079 = G__62120;
continue;
} else {
var temp__5753__auto___62121 = cljs.core.seq(seq__61910_62076);
if(temp__5753__auto___62121){
var seq__61910_62122__$1 = temp__5753__auto___62121;
if(cljs.core.chunked_seq_QMARK_(seq__61910_62122__$1)){
var c__4679__auto___62123 = cljs.core.chunk_first(seq__61910_62122__$1);
var G__62125 = cljs.core.chunk_rest(seq__61910_62122__$1);
var G__62126 = c__4679__auto___62123;
var G__62127 = cljs.core.count(c__4679__auto___62123);
var G__62128 = (0);
seq__61910_62076 = G__62125;
chunk__61911_62077 = G__62126;
count__61912_62078 = G__62127;
i__61913_62079 = G__62128;
continue;
} else {
var remote_62129 = cljs.core.first(seq__61910_62122__$1);
var send_queue_62130 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_62129);
var vec__61951_62131 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue_62130);
var p_62132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61951_62131,(0),null);
var serial_62133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61951_62131,(1),null);
var front_62134 = cljs.core.first(serial_62133);
var seq__61954_62135 = cljs.core.seq(p_62132);
var chunk__61955_62136 = null;
var count__61956_62137 = (0);
var i__61957_62138 = (0);
while(true){
if((i__61957_62138 < count__61956_62137)){
var item_62139 = chunk__61955_62136.cljs$core$IIndexed$_nth$arity$2(null,i__61957_62138);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__61954_62135,chunk__61955_62136,count__61956_62137,i__61957_62138,seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,item_62139,send_queue_62130,vec__61951_62131,p_62132,serial_62133,front_62134,remote_62129,seq__61910_62122__$1,temp__5753__auto___62121,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_62139,remote_62129);
});})(seq__61954_62135,chunk__61955_62136,count__61956_62137,i__61957_62138,seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,item_62139,send_queue_62130,vec__61951_62131,p_62132,serial_62133,front_62134,remote_62129,seq__61910_62122__$1,temp__5753__auto___62121,remote_names,operations))
);


var G__62140 = seq__61954_62135;
var G__62141 = chunk__61955_62136;
var G__62142 = count__61956_62137;
var G__62143 = (i__61957_62138 + (1));
seq__61954_62135 = G__62140;
chunk__61955_62136 = G__62141;
count__61956_62137 = G__62142;
i__61957_62138 = G__62143;
continue;
} else {
var temp__5753__auto___62144__$1 = cljs.core.seq(seq__61954_62135);
if(temp__5753__auto___62144__$1){
var seq__61954_62145__$1 = temp__5753__auto___62144__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61954_62145__$1)){
var c__4679__auto___62146 = cljs.core.chunk_first(seq__61954_62145__$1);
var G__62147 = cljs.core.chunk_rest(seq__61954_62145__$1);
var G__62148 = c__4679__auto___62146;
var G__62149 = cljs.core.count(c__4679__auto___62146);
var G__62150 = (0);
seq__61954_62135 = G__62147;
chunk__61955_62136 = G__62148;
count__61956_62137 = G__62149;
i__61957_62138 = G__62150;
continue;
} else {
var item_62153 = cljs.core.first(seq__61954_62145__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__61954_62135,chunk__61955_62136,count__61956_62137,i__61957_62138,seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,item_62153,seq__61954_62145__$1,temp__5753__auto___62144__$1,send_queue_62130,vec__61951_62131,p_62132,serial_62133,front_62134,remote_62129,seq__61910_62122__$1,temp__5753__auto___62121,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_62153,remote_62129);
});})(seq__61954_62135,chunk__61955_62136,count__61956_62137,i__61957_62138,seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,item_62153,seq__61954_62145__$1,temp__5753__auto___62144__$1,send_queue_62130,vec__61951_62131,p_62132,serial_62133,front_62134,remote_62129,seq__61910_62122__$1,temp__5753__auto___62121,remote_names,operations))
);


var G__62155 = cljs.core.next(seq__61954_62145__$1);
var G__62156 = null;
var G__62157 = (0);
var G__62158 = (0);
seq__61954_62135 = G__62155;
chunk__61955_62136 = G__62156;
count__61956_62137 = G__62157;
i__61957_62138 = G__62158;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active?",-132674601).cljs$core$IFn$_invoke$arity$1(front_62134))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_62129,serial_62133);
} else {
var map__61960_62159 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote_62129,serial_62133);
var map__61960_62160__$1 = cljs.core.__destructure_map(map__61960_62159);
var send_queue_62161__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61960_62160__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_62162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61960_62160__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_62162)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,map__61960_62159,map__61960_62160__$1,send_queue_62161__$1,send_node_62162,send_queue_62130,vec__61951_62131,p_62132,serial_62133,front_62134,remote_62129,seq__61910_62122__$1,temp__5753__auto___62121,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node_62162,remote_62129);
});})(seq__61910_62076,chunk__61911_62077,count__61912_62078,i__61913_62079,map__61960_62159,map__61960_62160__$1,send_queue_62161__$1,send_node_62162,send_queue_62130,vec__61951_62131,p_62132,serial_62133,front_62134,remote_62129,seq__61910_62122__$1,temp__5753__auto___62121,remote_names,operations))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_62129,send_queue_62161__$1);
}


var G__62164 = cljs.core.next(seq__61910_62122__$1);
var G__62165 = null;
var G__62166 = (0);
var G__62167 = (0);
seq__61910_62076 = G__62164;
chunk__61911_62077 = G__62165;
count__61912_62078 = G__62166;
i__61913_62079 = G__62167;
continue;
}
} else {
}
}
break;
}

var seq__61961 = cljs.core.seq(cljs.core.deref(operations));
var chunk__61962 = null;
var count__61963 = (0);
var i__61964 = (0);
while(true){
if((i__61964 < count__61963)){
var op = chunk__61962.cljs$core$IIndexed$_nth$arity$2(null,i__61964);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__62168 = seq__61961;
var G__62169 = chunk__61962;
var G__62170 = count__61963;
var G__62171 = (i__61964 + (1));
seq__61961 = G__62168;
chunk__61962 = G__62169;
count__61963 = G__62170;
i__61964 = G__62171;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61961);
if(temp__5753__auto__){
var seq__61961__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61961__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61961__$1);
var G__62172 = cljs.core.chunk_rest(seq__61961__$1);
var G__62173 = c__4679__auto__;
var G__62174 = cljs.core.count(c__4679__auto__);
var G__62175 = (0);
seq__61961 = G__62172;
chunk__61962 = G__62173;
count__61963 = G__62174;
i__61964 = G__62175;
continue;
} else {
var op = cljs.core.first(seq__61961__$1);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__62176 = cljs.core.next(seq__61961__$1);
var G__62177 = null;
var G__62178 = (0);
var G__62179 = (0);
seq__61961 = G__62176;
chunk__61962 = G__62177;
count__61963 = G__62178;
i__61964 = G__62179;
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
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG_(p__61967){
var map__61968 = p__61967;
var map__61968__$1 = cljs.core.__destructure_map(map__61968);
var app__$1 = map__61968__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61968__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61968__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var old_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5751__auto__)){
var new_node = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,old_queue);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_queue,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,325,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Old queue changed! See https://book.fulcrologic.com/#err-stp-old-queue-chng"], null);
}),null)),null,-78911329,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_(app__$1,new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_(app__$1);

return null;
});
/**
 * Returns true if the submission queue has work on it that can proceed without any restrictions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$available_work_QMARK_(app__$1){
var map__61971 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__61971__$1 = cljs.core.__destructure_map(map__61971);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61971__$1,false);
return cljs.core.boolean$(cljs.core.seq(ready));
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$activate_submissions_BANG_(app__$1){
var map__61973 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__61973__$1 = cljs.core.__destructure_map(map__61973);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61973__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61973__$1,false);
var _ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_(app__$1,cljs.core.vec(blocked));
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61972_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__61972_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__61972_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),dispatched_nodes], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_(app__$1);
});
/**
 * Runs the submission queue. If the submission queue's optimistic actions submit more to the submission queue, then those
 * are processed as well until the submission queue remains empty. This can start network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_all_immediate_work_BANG_(app__$1){
try{return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_(app__$1);
}catch (e61975){var e = e61975;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,358,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Error processing tx queue! See https://book.fulcrologic.com/#err-stp-err-processing-tx-q"], null);
}),null)),null,1000066620,null);
}});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_queue_BANG_(app__$1,p__61977){
while(true){
var map__61978 = p__61977;
var map__61978__$1 = cljs.core.__destructure_map(map__61978);
var options = map__61978__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61978__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61978__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
continue;
} else {
}
break;
}

if(cljs.core.truth_((function (){var and__4251__auto__ = synchronous_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return component;
} else {
return and__4251__auto__;
}
})())){
com.fulcrologic.fulcro.components.refresh_component_BANG_(component);
} else {
var temp__5753__auto___62184 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(temp__5753__auto___62184)){
var render_BANG__62186 = temp__5753__auto___62184;
(render_BANG__62186.cljs$core$IFn$_invoke$arity$2 ? render_BANG__62186.cljs$core$IFn$_invoke$arity$2(app__$1,options) : render_BANG__62186.call(null,app__$1,options));
} else {
}
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
var G__62187 = app__$1;
var G__62188 = cljs.core.PersistentArrayMap.EMPTY;
app__$1 = G__62187;
p__61977 = G__62188;
continue;
} else {
return null;
}
break;
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$sync_tx_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62190 = arguments.length;
var i__4865__auto___62191 = (0);
while(true){
if((i__4865__auto___62191 < len__4864__auto___62190)){
args__4870__auto__.push((arguments[i__4865__auto___62191]));

var G__62193 = (i__4865__auto___62191 + (1));
i__4865__auto___62191 = G__62193;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("BREAKING CHANGE. Please use `with-synchronous-transaction` to add sync transaction support to your Fulcro app",cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$applyTo = (function (seq61981){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61981));
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submit_sync_tx_BANG_(var_args){
var G__61986 = arguments.length;
switch (G__61986) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__61988,tx,options){
var map__61989 = p__61988;
var map__61989__$1 = cljs.core.__destructure_map(map__61989);
var app__$1 = map__61989__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61989__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__61990 = options;
var map__61990__$1 = cljs.core.__destructure_map(map__61990);
var options__$1 = map__61990__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61990__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61990__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61990__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61983_SHARP_){
return (((p1__61983_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__61983_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__61992 = cljs.core.set(refresh);
var G__61992__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__61992,follow_on_reads):G__61992);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__61992__$1,ref);
} else {
return G__61992__$1;
}
})();
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),node], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__61994 = s;
var G__61994__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61994,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__61994);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61994__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__61994__$1;
}
}));

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_(app__$1)){
} else {
var id__61532__auto___62197 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__61532__auto___62197,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_(app__$1,options__$1);
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__61532__auto___62197,cljs.core.dec);
}}

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * [app abort-id]
 * 
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.abort_BANG_;
/**
 * Installs synchronous transaction processing on a fulcro application.
 * 
 *   ```
 *   (defonce app (stx/with-synchronous-transactions
 *               (app/fulcro-app {...})))
 *   ```
 * 
 *   This plug-in attempts to do as much work as possible synchronously, including the processing of "remotes" that
 *   can behave synchronously. This processing system
 *   preserves transactional ordering semantics for nested submissions, but cannot guarantee that the overall sequence of
 *   operations will exactly match what you'd see if using the standard tx processing.
 * 
 *   The options map you can pass to `transact!` supports most of the same things as the standard tx processing, with the significant exception of
 *   `:optimistic? false` (pessimistic transactions). It also *always* assumes synchronous operation, thought the
 *   `synchronous?` option (if used) does imply that only the current component should be refreshed in the UI.
 * 
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:synchronous?` - When true, causes the rendering to only refresh the calling component (if possible), since the implication
 *   is for fast-as-possible refresh semantics, even though this tx processing is already sync.
 *   - `:refresh` - A hint. Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - A hint. Vector of idents/keywords.  If the underlying configured rendering algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI, and they may be refreshed immediately on
 *  `transact!`. This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$with_synchronous_transactions(app__$1){
var remotes = cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1))));
var send_queues = cljs.core.zipmap(remotes,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
})));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_], 0)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),send_queues], null));
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.js.map
