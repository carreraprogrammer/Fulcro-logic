goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__63424){
var map__63425 = p__63424;
var map__63425__$1 = cljs.core.__destructure_map(map__63425);
var m = map__63425__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63433_63629 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63434_63630 = null;
var count__63435_63631 = (0);
var i__63436_63632 = (0);
while(true){
if((i__63436_63632 < count__63435_63631)){
var f_63634 = chunk__63434_63630.cljs$core$IIndexed$_nth$arity$2(null,i__63436_63632);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63634], 0));


var G__63635 = seq__63433_63629;
var G__63636 = chunk__63434_63630;
var G__63637 = count__63435_63631;
var G__63638 = (i__63436_63632 + (1));
seq__63433_63629 = G__63635;
chunk__63434_63630 = G__63636;
count__63435_63631 = G__63637;
i__63436_63632 = G__63638;
continue;
} else {
var temp__5753__auto___63639 = cljs.core.seq(seq__63433_63629);
if(temp__5753__auto___63639){
var seq__63433_63640__$1 = temp__5753__auto___63639;
if(cljs.core.chunked_seq_QMARK_(seq__63433_63640__$1)){
var c__4679__auto___63641 = cljs.core.chunk_first(seq__63433_63640__$1);
var G__63642 = cljs.core.chunk_rest(seq__63433_63640__$1);
var G__63643 = c__4679__auto___63641;
var G__63644 = cljs.core.count(c__4679__auto___63641);
var G__63645 = (0);
seq__63433_63629 = G__63642;
chunk__63434_63630 = G__63643;
count__63435_63631 = G__63644;
i__63436_63632 = G__63645;
continue;
} else {
var f_63646 = cljs.core.first(seq__63433_63640__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63646], 0));


var G__63647 = cljs.core.next(seq__63433_63640__$1);
var G__63648 = null;
var G__63649 = (0);
var G__63650 = (0);
seq__63433_63629 = G__63647;
chunk__63434_63630 = G__63648;
count__63435_63631 = G__63649;
i__63436_63632 = G__63650;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_63654 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_63654], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_63654)))?cljs.core.second(arglists_63654):arglists_63654)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63445_63655 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63446_63656 = null;
var count__63447_63657 = (0);
var i__63448_63658 = (0);
while(true){
if((i__63448_63658 < count__63447_63657)){
var vec__63464_63659 = chunk__63446_63656.cljs$core$IIndexed$_nth$arity$2(null,i__63448_63658);
var name_63660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63464_63659,(0),null);
var map__63467_63661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63464_63659,(1),null);
var map__63467_63662__$1 = cljs.core.__destructure_map(map__63467_63661);
var doc_63663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63467_63662__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63467_63662__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63660], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63664], 0));

if(cljs.core.truth_(doc_63663)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63663], 0));
} else {
}


var G__63669 = seq__63445_63655;
var G__63670 = chunk__63446_63656;
var G__63671 = count__63447_63657;
var G__63672 = (i__63448_63658 + (1));
seq__63445_63655 = G__63669;
chunk__63446_63656 = G__63670;
count__63447_63657 = G__63671;
i__63448_63658 = G__63672;
continue;
} else {
var temp__5753__auto___63673 = cljs.core.seq(seq__63445_63655);
if(temp__5753__auto___63673){
var seq__63445_63675__$1 = temp__5753__auto___63673;
if(cljs.core.chunked_seq_QMARK_(seq__63445_63675__$1)){
var c__4679__auto___63676 = cljs.core.chunk_first(seq__63445_63675__$1);
var G__63677 = cljs.core.chunk_rest(seq__63445_63675__$1);
var G__63678 = c__4679__auto___63676;
var G__63679 = cljs.core.count(c__4679__auto___63676);
var G__63680 = (0);
seq__63445_63655 = G__63677;
chunk__63446_63656 = G__63678;
count__63447_63657 = G__63679;
i__63448_63658 = G__63680;
continue;
} else {
var vec__63470_63681 = cljs.core.first(seq__63445_63675__$1);
var name_63682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63470_63681,(0),null);
var map__63473_63683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63470_63681,(1),null);
var map__63473_63684__$1 = cljs.core.__destructure_map(map__63473_63683);
var doc_63685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473_63684__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63473_63684__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63682], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63686], 0));

if(cljs.core.truth_(doc_63685)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63685], 0));
} else {
}


var G__63687 = cljs.core.next(seq__63445_63675__$1);
var G__63688 = null;
var G__63689 = (0);
var G__63690 = (0);
seq__63445_63655 = G__63687;
chunk__63446_63656 = G__63688;
count__63447_63657 = G__63689;
i__63448_63658 = G__63690;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__63476 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__63477 = null;
var count__63478 = (0);
var i__63479 = (0);
while(true){
if((i__63479 < count__63478)){
var role = chunk__63477.cljs$core$IIndexed$_nth$arity$2(null,i__63479);
var temp__5753__auto___63692__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___63692__$1)){
var spec_63693 = temp__5753__auto___63692__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63693)], 0));
} else {
}


var G__63694 = seq__63476;
var G__63695 = chunk__63477;
var G__63696 = count__63478;
var G__63697 = (i__63479 + (1));
seq__63476 = G__63694;
chunk__63477 = G__63695;
count__63478 = G__63696;
i__63479 = G__63697;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__63476);
if(temp__5753__auto____$1){
var seq__63476__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__63476__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63476__$1);
var G__63699 = cljs.core.chunk_rest(seq__63476__$1);
var G__63700 = c__4679__auto__;
var G__63701 = cljs.core.count(c__4679__auto__);
var G__63702 = (0);
seq__63476 = G__63699;
chunk__63477 = G__63700;
count__63478 = G__63701;
i__63479 = G__63702;
continue;
} else {
var role = cljs.core.first(seq__63476__$1);
var temp__5753__auto___63706__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___63706__$2)){
var spec_63707 = temp__5753__auto___63706__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63707)], 0));
} else {
}


var G__63709 = cljs.core.next(seq__63476__$1);
var G__63710 = null;
var G__63711 = (0);
var G__63712 = (0);
seq__63476 = G__63709;
chunk__63477 = G__63710;
count__63478 = G__63711;
i__63479 = G__63712;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__63713 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__63714 = cljs.core.ex_cause(t);
via = G__63713;
t = G__63714;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__63511 = datafied_throwable;
var map__63511__$1 = cljs.core.__destructure_map(map__63511);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63511__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63511__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63511__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__63512 = cljs.core.last(via);
var map__63512__$1 = cljs.core.__destructure_map(map__63512);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63512__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63512__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63512__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__63513 = data;
var map__63513__$1 = cljs.core.__destructure_map(map__63513);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63513__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63513__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63513__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__63514 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__63514__$1 = cljs.core.__destructure_map(map__63514);
var top_data = map__63514__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63514__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__63515 = phase;
var G__63515__$1 = (((G__63515 instanceof cljs.core.Keyword))?G__63515.fqn:null);
switch (G__63515__$1) {
case "read-source":
var map__63519 = data;
var map__63519__$1 = cljs.core.__destructure_map(map__63519);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63519__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63519__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__63520 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__63520__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63520,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63520);
var G__63520__$2 = (cljs.core.truth_((function (){var fexpr__63521 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63521.cljs$core$IFn$_invoke$arity$1 ? fexpr__63521.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63521.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63520__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63520__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63520__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63520__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__63526 = top_data;
var G__63526__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63526,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63526);
var G__63526__$2 = (cljs.core.truth_((function (){var fexpr__63531 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63531.cljs$core$IFn$_invoke$arity$1 ? fexpr__63531.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63531.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63526__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63526__$1);
var G__63526__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63526__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63526__$2);
var G__63526__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63526__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63526__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63526__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63526__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__63540 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63540,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63540,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63540,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63540,(3),null);
var G__63547 = top_data;
var G__63547__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63547,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__63547);
var G__63547__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__63547__$1);
var G__63547__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63547__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__63547__$2);
var G__63547__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63547__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63547__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63547__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63547__$4;
}

break;
case "execution":
var vec__63552 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63552,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63552,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63552,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63552,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63509_SHARP_){
var or__4253__auto__ = (p1__63509_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__63555 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63555.cljs$core$IFn$_invoke$arity$1 ? fexpr__63555.cljs$core$IFn$_invoke$arity$1(p1__63509_SHARP_) : fexpr__63555.call(null,p1__63509_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__63556 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__63556__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63556,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__63556);
var G__63556__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63556__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63556__$1);
var G__63556__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63556__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__63556__$2);
var G__63556__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63556__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__63556__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63556__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63556__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63515__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__63560){
var map__63561 = p__63560;
var map__63561__$1 = cljs.core.__destructure_map(map__63561);
var triage_data = map__63561__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63561__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63561__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63561__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63561__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63561__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63561__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63561__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63561__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__63562 = phase;
var G__63562__$1 = (((G__63562 instanceof cljs.core.Keyword))?G__63562.fqn:null);
switch (G__63562__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__63567 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__63568 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63569 = loc;
var G__63570 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63579_63732 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63580_63733 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63581_63734 = true;
var _STAR_print_fn_STAR__temp_val__63582_63735 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63581_63734);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63582_63735);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63558_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63558_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63580_63733);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63579_63732);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63567,G__63568,G__63569,G__63570) : format.call(null,G__63567,G__63568,G__63569,G__63570));

break;
case "macroexpansion":
var G__63596 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__63597 = cause_type;
var G__63598 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63599 = loc;
var G__63600 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63596,G__63597,G__63598,G__63599,G__63600) : format.call(null,G__63596,G__63597,G__63598,G__63599,G__63600));

break;
case "compile-syntax-check":
var G__63601 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__63602 = cause_type;
var G__63603 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63604 = loc;
var G__63605 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63601,G__63602,G__63603,G__63604,G__63605) : format.call(null,G__63601,G__63602,G__63603,G__63604,G__63605));

break;
case "compilation":
var G__63607 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__63608 = cause_type;
var G__63609 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63610 = loc;
var G__63611 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63607,G__63608,G__63609,G__63610,G__63611) : format.call(null,G__63607,G__63608,G__63609,G__63610,G__63611));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__63612 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__63613 = symbol;
var G__63614 = loc;
var G__63615 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63616_63737 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63617_63738 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63618_63739 = true;
var _STAR_print_fn_STAR__temp_val__63619_63740 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63618_63739);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63619_63740);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63559_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63559_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63617_63738);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63616_63737);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63612,G__63613,G__63614,G__63615) : format.call(null,G__63612,G__63613,G__63614,G__63615));
} else {
var G__63624 = "Execution error%s at %s(%s).\n%s\n";
var G__63625 = cause_type;
var G__63626 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63627 = loc;
var G__63628 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63624,G__63625,G__63626,G__63627,G__63628) : format.call(null,G__63624,G__63625,G__63626,G__63627,G__63628));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63562__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
