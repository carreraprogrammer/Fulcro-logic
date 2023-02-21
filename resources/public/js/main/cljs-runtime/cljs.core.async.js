goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49845 = arguments.length;
switch (G__49845) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49846 = (function (f,blockable,meta49847){
this.f = f;
this.blockable = blockable;
this.meta49847 = meta49847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49848,meta49847__$1){
var self__ = this;
var _49848__$1 = this;
return (new cljs.core.async.t_cljs$core$async49846(self__.f,self__.blockable,meta49847__$1));
}));

(cljs.core.async.t_cljs$core$async49846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49848){
var self__ = this;
var _49848__$1 = this;
return self__.meta49847;
}));

(cljs.core.async.t_cljs$core$async49846.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49847","meta49847",2009442387,null)], null);
}));

(cljs.core.async.t_cljs$core$async49846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49846");

(cljs.core.async.t_cljs$core$async49846.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49846.
 */
cljs.core.async.__GT_t_cljs$core$async49846 = (function cljs$core$async$__GT_t_cljs$core$async49846(f__$1,blockable__$1,meta49847){
return (new cljs.core.async.t_cljs$core$async49846(f__$1,blockable__$1,meta49847));
});

}

return (new cljs.core.async.t_cljs$core$async49846(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__49867 = arguments.length;
switch (G__49867) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__49878 = arguments.length;
switch (G__49878) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__49886 = arguments.length;
switch (G__49886) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52615 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52615) : fn1.call(null,val_52615));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52615) : fn1.call(null,val_52615));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__49903 = arguments.length;
switch (G__49903) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___52618 = n;
var x_52619 = (0);
while(true){
if((x_52619 < n__4741__auto___52618)){
(a[x_52619] = x_52619);

var G__52624 = (x_52619 + (1));
x_52619 = G__52624;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49920 = (function (flag,meta49921){
this.flag = flag;
this.meta49921 = meta49921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49922,meta49921__$1){
var self__ = this;
var _49922__$1 = this;
return (new cljs.core.async.t_cljs$core$async49920(self__.flag,meta49921__$1));
}));

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49922){
var self__ = this;
var _49922__$1 = this;
return self__.meta49921;
}));

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49921","meta49921",799158680,null)], null);
}));

(cljs.core.async.t_cljs$core$async49920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49920");

(cljs.core.async.t_cljs$core$async49920.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49920.
 */
cljs.core.async.__GT_t_cljs$core$async49920 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49920(flag__$1,meta49921){
return (new cljs.core.async.t_cljs$core$async49920(flag__$1,meta49921));
});

}

return (new cljs.core.async.t_cljs$core$async49920(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49931 = (function (flag,cb,meta49932){
this.flag = flag;
this.cb = cb;
this.meta49932 = meta49932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49933,meta49932__$1){
var self__ = this;
var _49933__$1 = this;
return (new cljs.core.async.t_cljs$core$async49931(self__.flag,self__.cb,meta49932__$1));
}));

(cljs.core.async.t_cljs$core$async49931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49933){
var self__ = this;
var _49933__$1 = this;
return self__.meta49932;
}));

(cljs.core.async.t_cljs$core$async49931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49932","meta49932",655946103,null)], null);
}));

(cljs.core.async.t_cljs$core$async49931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49931");

(cljs.core.async.t_cljs$core$async49931.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49931.
 */
cljs.core.async.__GT_t_cljs$core$async49931 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49931(flag__$1,cb__$1,meta49932){
return (new cljs.core.async.t_cljs$core$async49931(flag__$1,cb__$1,meta49932));
});

}

return (new cljs.core.async.t_cljs$core$async49931(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49967_SHARP_){
var G__49974 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49967_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49974) : fret.call(null,G__49974));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49968_SHARP_){
var G__49976 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49968_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49976) : fret.call(null,G__49976));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52639 = (i + (1));
i = G__52639;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52643 = arguments.length;
var i__4865__auto___52644 = (0);
while(true){
if((i__4865__auto___52644 < len__4864__auto___52643)){
args__4870__auto__.push((arguments[i__4865__auto___52644]));

var G__52646 = (i__4865__auto___52644 + (1));
i__4865__auto___52644 = G__52646;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49988){
var map__49989 = p__49988;
var map__49989__$1 = cljs.core.__destructure_map(map__49989);
var opts = map__49989__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49984){
var G__49985 = cljs.core.first(seq49984);
var seq49984__$1 = cljs.core.next(seq49984);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49985,seq49984__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50008 = arguments.length;
switch (G__50008) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49738__auto___52651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_50052){
var state_val_50053 = (state_50052[(1)]);
if((state_val_50053 === (7))){
var inst_50044 = (state_50052[(2)]);
var state_50052__$1 = state_50052;
var statearr_50060_52652 = state_50052__$1;
(statearr_50060_52652[(2)] = inst_50044);

(statearr_50060_52652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (1))){
var state_50052__$1 = state_50052;
var statearr_50061_52654 = state_50052__$1;
(statearr_50061_52654[(2)] = null);

(statearr_50061_52654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (4))){
var inst_50027 = (state_50052[(7)]);
var inst_50027__$1 = (state_50052[(2)]);
var inst_50028 = (inst_50027__$1 == null);
var state_50052__$1 = (function (){var statearr_50062 = state_50052;
(statearr_50062[(7)] = inst_50027__$1);

return statearr_50062;
})();
if(cljs.core.truth_(inst_50028)){
var statearr_50063_52655 = state_50052__$1;
(statearr_50063_52655[(1)] = (5));

} else {
var statearr_50064_52657 = state_50052__$1;
(statearr_50064_52657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (13))){
var state_50052__$1 = state_50052;
var statearr_50065_52661 = state_50052__$1;
(statearr_50065_52661[(2)] = null);

(statearr_50065_52661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (6))){
var inst_50027 = (state_50052[(7)]);
var state_50052__$1 = state_50052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50052__$1,(11),to,inst_50027);
} else {
if((state_val_50053 === (3))){
var inst_50050 = (state_50052[(2)]);
var state_50052__$1 = state_50052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50052__$1,inst_50050);
} else {
if((state_val_50053 === (12))){
var state_50052__$1 = state_50052;
var statearr_50080_52666 = state_50052__$1;
(statearr_50080_52666[(2)] = null);

(statearr_50080_52666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (2))){
var state_50052__$1 = state_50052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50052__$1,(4),from);
} else {
if((state_val_50053 === (11))){
var inst_50037 = (state_50052[(2)]);
var state_50052__$1 = state_50052;
if(cljs.core.truth_(inst_50037)){
var statearr_50081_52667 = state_50052__$1;
(statearr_50081_52667[(1)] = (12));

} else {
var statearr_50082_52668 = state_50052__$1;
(statearr_50082_52668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (9))){
var state_50052__$1 = state_50052;
var statearr_50083_52669 = state_50052__$1;
(statearr_50083_52669[(2)] = null);

(statearr_50083_52669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (5))){
var state_50052__$1 = state_50052;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50084_52670 = state_50052__$1;
(statearr_50084_52670[(1)] = (8));

} else {
var statearr_50085_52671 = state_50052__$1;
(statearr_50085_52671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (14))){
var inst_50042 = (state_50052[(2)]);
var state_50052__$1 = state_50052;
var statearr_50089_52672 = state_50052__$1;
(statearr_50089_52672[(2)] = inst_50042);

(statearr_50089_52672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (10))){
var inst_50034 = (state_50052[(2)]);
var state_50052__$1 = state_50052;
var statearr_50090_52673 = state_50052__$1;
(statearr_50090_52673[(2)] = inst_50034);

(statearr_50090_52673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (8))){
var inst_50031 = cljs.core.async.close_BANG_(to);
var state_50052__$1 = state_50052;
var statearr_50091_52677 = state_50052__$1;
(statearr_50091_52677[(2)] = inst_50031);

(statearr_50091_52677[(1)] = (10));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_50092 = [null,null,null,null,null,null,null,null];
(statearr_50092[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_50092[(1)] = (1));

return statearr_50092;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_50052){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50052);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50093){var ex__49650__auto__ = e50093;
var statearr_50094_52681 = state_50052;
(statearr_50094_52681[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50052[(4)]))){
var statearr_50095_52682 = state_50052;
(statearr_50095_52682[(1)] = cljs.core.first((state_50052[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52683 = state_50052;
state_50052 = G__52683;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_50052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_50052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_50099 = f__49739__auto__();
(statearr_50099[(6)] = c__49738__auto___52651);

return statearr_50099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__50103){
var vec__50104 = p__50103;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104,(1),null);
var job = vec__50104;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49738__auto___52690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_50112){
var state_val_50114 = (state_50112[(1)]);
if((state_val_50114 === (1))){
var state_50112__$1 = state_50112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50112__$1,(2),res,v);
} else {
if((state_val_50114 === (2))){
var inst_50108 = (state_50112[(2)]);
var inst_50109 = cljs.core.async.close_BANG_(res);
var state_50112__$1 = (function (){var statearr_50116 = state_50112;
(statearr_50116[(7)] = inst_50108);

return statearr_50116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50112__$1,inst_50109);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0 = (function (){
var statearr_50117 = [null,null,null,null,null,null,null,null];
(statearr_50117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__);

(statearr_50117[(1)] = (1));

return statearr_50117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1 = (function (state_50112){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50112);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50119){var ex__49650__auto__ = e50119;
var statearr_50120_52695 = state_50112;
(statearr_50120_52695[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50112[(4)]))){
var statearr_50121_52696 = state_50112;
(statearr_50121_52696[(1)] = cljs.core.first((state_50112[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52697 = state_50112;
state_50112 = G__52697;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = function(state_50112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1.call(this,state_50112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_50122 = f__49739__auto__();
(statearr_50122[(6)] = c__49738__auto___52690);

return statearr_50122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50123){
var vec__50124 = p__50123;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(1),null);
var job = vec__50124;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___52698 = n;
var __52699 = (0);
while(true){
if((__52699 < n__4741__auto___52698)){
var G__50127_52700 = type;
var G__50127_52701__$1 = (((G__50127_52700 instanceof cljs.core.Keyword))?G__50127_52700.fqn:null);
switch (G__50127_52701__$1) {
case "compute":
var c__49738__auto___52706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52699,c__49738__auto___52706,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async){
return (function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = ((function (__52699,c__49738__auto___52706,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async){
return (function (state_50140){
var state_val_50141 = (state_50140[(1)]);
if((state_val_50141 === (1))){
var state_50140__$1 = state_50140;
var statearr_50142_52709 = state_50140__$1;
(statearr_50142_52709[(2)] = null);

(statearr_50142_52709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50141 === (2))){
var state_50140__$1 = state_50140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50140__$1,(4),jobs);
} else {
if((state_val_50141 === (3))){
var inst_50138 = (state_50140[(2)]);
var state_50140__$1 = state_50140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50140__$1,inst_50138);
} else {
if((state_val_50141 === (4))){
var inst_50130 = (state_50140[(2)]);
var inst_50131 = process(inst_50130);
var state_50140__$1 = state_50140;
if(cljs.core.truth_(inst_50131)){
var statearr_50143_52710 = state_50140__$1;
(statearr_50143_52710[(1)] = (5));

} else {
var statearr_50144_52711 = state_50140__$1;
(statearr_50144_52711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50141 === (5))){
var state_50140__$1 = state_50140;
var statearr_50145_52712 = state_50140__$1;
(statearr_50145_52712[(2)] = null);

(statearr_50145_52712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50141 === (6))){
var state_50140__$1 = state_50140;
var statearr_50146_52713 = state_50140__$1;
(statearr_50146_52713[(2)] = null);

(statearr_50146_52713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50141 === (7))){
var inst_50136 = (state_50140[(2)]);
var state_50140__$1 = state_50140;
var statearr_50147_52715 = state_50140__$1;
(statearr_50147_52715[(2)] = inst_50136);

(statearr_50147_52715[(1)] = (3));


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
});})(__52699,c__49738__auto___52706,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async))
;
return ((function (__52699,switch__49646__auto__,c__49738__auto___52706,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0 = (function (){
var statearr_50148 = [null,null,null,null,null,null,null];
(statearr_50148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__);

(statearr_50148[(1)] = (1));

return statearr_50148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1 = (function (state_50140){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50140);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50150){var ex__49650__auto__ = e50150;
var statearr_50151_52717 = state_50140;
(statearr_50151_52717[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50140[(4)]))){
var statearr_50152_52721 = state_50140;
(statearr_50152_52721[(1)] = cljs.core.first((state_50140[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52724 = state_50140;
state_50140 = G__52724;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = function(state_50140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1.call(this,state_50140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__;
})()
;})(__52699,switch__49646__auto__,c__49738__auto___52706,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async))
})();
var state__49740__auto__ = (function (){var statearr_50153 = f__49739__auto__();
(statearr_50153[(6)] = c__49738__auto___52706);

return statearr_50153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
});})(__52699,c__49738__auto___52706,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async))
);


break;
case "async":
var c__49738__auto___52725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52699,c__49738__auto___52725,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async){
return (function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = ((function (__52699,c__49738__auto___52725,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async){
return (function (state_50167){
var state_val_50168 = (state_50167[(1)]);
if((state_val_50168 === (1))){
var state_50167__$1 = state_50167;
var statearr_50171_52726 = state_50167__$1;
(statearr_50171_52726[(2)] = null);

(statearr_50171_52726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50168 === (2))){
var state_50167__$1 = state_50167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50167__$1,(4),jobs);
} else {
if((state_val_50168 === (3))){
var inst_50165 = (state_50167[(2)]);
var state_50167__$1 = state_50167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50167__$1,inst_50165);
} else {
if((state_val_50168 === (4))){
var inst_50157 = (state_50167[(2)]);
var inst_50158 = async(inst_50157);
var state_50167__$1 = state_50167;
if(cljs.core.truth_(inst_50158)){
var statearr_50173_52728 = state_50167__$1;
(statearr_50173_52728[(1)] = (5));

} else {
var statearr_50177_52729 = state_50167__$1;
(statearr_50177_52729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50168 === (5))){
var state_50167__$1 = state_50167;
var statearr_50182_52731 = state_50167__$1;
(statearr_50182_52731[(2)] = null);

(statearr_50182_52731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50168 === (6))){
var state_50167__$1 = state_50167;
var statearr_50183_52732 = state_50167__$1;
(statearr_50183_52732[(2)] = null);

(statearr_50183_52732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50168 === (7))){
var inst_50163 = (state_50167[(2)]);
var state_50167__$1 = state_50167;
var statearr_50185_52733 = state_50167__$1;
(statearr_50185_52733[(2)] = inst_50163);

(statearr_50185_52733[(1)] = (3));


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
});})(__52699,c__49738__auto___52725,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async))
;
return ((function (__52699,switch__49646__auto__,c__49738__auto___52725,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0 = (function (){
var statearr_50186 = [null,null,null,null,null,null,null];
(statearr_50186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__);

(statearr_50186[(1)] = (1));

return statearr_50186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1 = (function (state_50167){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50167);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50188){var ex__49650__auto__ = e50188;
var statearr_50189_52736 = state_50167;
(statearr_50189_52736[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50167[(4)]))){
var statearr_50190_52739 = state_50167;
(statearr_50190_52739[(1)] = cljs.core.first((state_50167[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52740 = state_50167;
state_50167 = G__52740;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = function(state_50167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1.call(this,state_50167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__;
})()
;})(__52699,switch__49646__auto__,c__49738__auto___52725,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async))
})();
var state__49740__auto__ = (function (){var statearr_50191 = f__49739__auto__();
(statearr_50191[(6)] = c__49738__auto___52725);

return statearr_50191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
});})(__52699,c__49738__auto___52725,G__50127_52700,G__50127_52701__$1,n__4741__auto___52698,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50127_52701__$1)].join('')));

}

var G__52744 = (__52699 + (1));
__52699 = G__52744;
continue;
} else {
}
break;
}

var c__49738__auto___52745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_50217){
var state_val_50219 = (state_50217[(1)]);
if((state_val_50219 === (7))){
var inst_50211 = (state_50217[(2)]);
var state_50217__$1 = state_50217;
var statearr_50221_52746 = state_50217__$1;
(statearr_50221_52746[(2)] = inst_50211);

(statearr_50221_52746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50219 === (1))){
var state_50217__$1 = state_50217;
var statearr_50222_52747 = state_50217__$1;
(statearr_50222_52747[(2)] = null);

(statearr_50222_52747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50219 === (4))){
var inst_50194 = (state_50217[(7)]);
var inst_50194__$1 = (state_50217[(2)]);
var inst_50197 = (inst_50194__$1 == null);
var state_50217__$1 = (function (){var statearr_50227 = state_50217;
(statearr_50227[(7)] = inst_50194__$1);

return statearr_50227;
})();
if(cljs.core.truth_(inst_50197)){
var statearr_50228_52750 = state_50217__$1;
(statearr_50228_52750[(1)] = (5));

} else {
var statearr_50229_52751 = state_50217__$1;
(statearr_50229_52751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50219 === (6))){
var inst_50194 = (state_50217[(7)]);
var inst_50201 = (state_50217[(8)]);
var inst_50201__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50203 = [inst_50194,inst_50201__$1];
var inst_50204 = (new cljs.core.PersistentVector(null,2,(5),inst_50202,inst_50203,null));
var state_50217__$1 = (function (){var statearr_50230 = state_50217;
(statearr_50230[(8)] = inst_50201__$1);

return statearr_50230;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50217__$1,(8),jobs,inst_50204);
} else {
if((state_val_50219 === (3))){
var inst_50213 = (state_50217[(2)]);
var state_50217__$1 = state_50217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50217__$1,inst_50213);
} else {
if((state_val_50219 === (2))){
var state_50217__$1 = state_50217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50217__$1,(4),from);
} else {
if((state_val_50219 === (9))){
var inst_50208 = (state_50217[(2)]);
var state_50217__$1 = (function (){var statearr_50239 = state_50217;
(statearr_50239[(9)] = inst_50208);

return statearr_50239;
})();
var statearr_50240_52753 = state_50217__$1;
(statearr_50240_52753[(2)] = null);

(statearr_50240_52753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50219 === (5))){
var inst_50199 = cljs.core.async.close_BANG_(jobs);
var state_50217__$1 = state_50217;
var statearr_50241_52754 = state_50217__$1;
(statearr_50241_52754[(2)] = inst_50199);

(statearr_50241_52754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50219 === (8))){
var inst_50201 = (state_50217[(8)]);
var inst_50206 = (state_50217[(2)]);
var state_50217__$1 = (function (){var statearr_50242 = state_50217;
(statearr_50242[(10)] = inst_50206);

return statearr_50242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50217__$1,(9),results,inst_50201);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0 = (function (){
var statearr_50243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__);

(statearr_50243[(1)] = (1));

return statearr_50243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1 = (function (state_50217){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50217);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50248){var ex__49650__auto__ = e50248;
var statearr_50249_52758 = state_50217;
(statearr_50249_52758[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50217[(4)]))){
var statearr_50250_52759 = state_50217;
(statearr_50250_52759[(1)] = cljs.core.first((state_50217[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52760 = state_50217;
state_50217 = G__52760;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = function(state_50217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1.call(this,state_50217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_50251 = f__49739__auto__();
(statearr_50251[(6)] = c__49738__auto___52745);

return statearr_50251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


var c__49738__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_50289){
var state_val_50290 = (state_50289[(1)]);
if((state_val_50290 === (7))){
var inst_50285 = (state_50289[(2)]);
var state_50289__$1 = state_50289;
var statearr_50292_52762 = state_50289__$1;
(statearr_50292_52762[(2)] = inst_50285);

(statearr_50292_52762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (20))){
var state_50289__$1 = state_50289;
var statearr_50293_52763 = state_50289__$1;
(statearr_50293_52763[(2)] = null);

(statearr_50293_52763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (1))){
var state_50289__$1 = state_50289;
var statearr_50294_52764 = state_50289__$1;
(statearr_50294_52764[(2)] = null);

(statearr_50294_52764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (4))){
var inst_50254 = (state_50289[(7)]);
var inst_50254__$1 = (state_50289[(2)]);
var inst_50255 = (inst_50254__$1 == null);
var state_50289__$1 = (function (){var statearr_50295 = state_50289;
(statearr_50295[(7)] = inst_50254__$1);

return statearr_50295;
})();
if(cljs.core.truth_(inst_50255)){
var statearr_50296_52765 = state_50289__$1;
(statearr_50296_52765[(1)] = (5));

} else {
var statearr_50297_52766 = state_50289__$1;
(statearr_50297_52766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (15))){
var inst_50267 = (state_50289[(8)]);
var state_50289__$1 = state_50289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50289__$1,(18),to,inst_50267);
} else {
if((state_val_50290 === (21))){
var inst_50280 = (state_50289[(2)]);
var state_50289__$1 = state_50289;
var statearr_50298_52767 = state_50289__$1;
(statearr_50298_52767[(2)] = inst_50280);

(statearr_50298_52767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (13))){
var inst_50282 = (state_50289[(2)]);
var state_50289__$1 = (function (){var statearr_50299 = state_50289;
(statearr_50299[(9)] = inst_50282);

return statearr_50299;
})();
var statearr_50300_52768 = state_50289__$1;
(statearr_50300_52768[(2)] = null);

(statearr_50300_52768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (6))){
var inst_50254 = (state_50289[(7)]);
var state_50289__$1 = state_50289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50289__$1,(11),inst_50254);
} else {
if((state_val_50290 === (17))){
var inst_50275 = (state_50289[(2)]);
var state_50289__$1 = state_50289;
if(cljs.core.truth_(inst_50275)){
var statearr_50301_52769 = state_50289__$1;
(statearr_50301_52769[(1)] = (19));

} else {
var statearr_50302_52770 = state_50289__$1;
(statearr_50302_52770[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (3))){
var inst_50287 = (state_50289[(2)]);
var state_50289__$1 = state_50289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50289__$1,inst_50287);
} else {
if((state_val_50290 === (12))){
var inst_50264 = (state_50289[(10)]);
var state_50289__$1 = state_50289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50289__$1,(14),inst_50264);
} else {
if((state_val_50290 === (2))){
var state_50289__$1 = state_50289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50289__$1,(4),results);
} else {
if((state_val_50290 === (19))){
var state_50289__$1 = state_50289;
var statearr_50303_52771 = state_50289__$1;
(statearr_50303_52771[(2)] = null);

(statearr_50303_52771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (11))){
var inst_50264 = (state_50289[(2)]);
var state_50289__$1 = (function (){var statearr_50304 = state_50289;
(statearr_50304[(10)] = inst_50264);

return statearr_50304;
})();
var statearr_50305_52774 = state_50289__$1;
(statearr_50305_52774[(2)] = null);

(statearr_50305_52774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (9))){
var state_50289__$1 = state_50289;
var statearr_50306_52776 = state_50289__$1;
(statearr_50306_52776[(2)] = null);

(statearr_50306_52776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (5))){
var state_50289__$1 = state_50289;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50307_52777 = state_50289__$1;
(statearr_50307_52777[(1)] = (8));

} else {
var statearr_50308_52778 = state_50289__$1;
(statearr_50308_52778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (14))){
var inst_50267 = (state_50289[(8)]);
var inst_50269 = (state_50289[(11)]);
var inst_50267__$1 = (state_50289[(2)]);
var inst_50268 = (inst_50267__$1 == null);
var inst_50269__$1 = cljs.core.not(inst_50268);
var state_50289__$1 = (function (){var statearr_50309 = state_50289;
(statearr_50309[(8)] = inst_50267__$1);

(statearr_50309[(11)] = inst_50269__$1);

return statearr_50309;
})();
if(inst_50269__$1){
var statearr_50310_52780 = state_50289__$1;
(statearr_50310_52780[(1)] = (15));

} else {
var statearr_50311_52781 = state_50289__$1;
(statearr_50311_52781[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (16))){
var inst_50269 = (state_50289[(11)]);
var state_50289__$1 = state_50289;
var statearr_50312_52783 = state_50289__$1;
(statearr_50312_52783[(2)] = inst_50269);

(statearr_50312_52783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (10))){
var inst_50261 = (state_50289[(2)]);
var state_50289__$1 = state_50289;
var statearr_50313_52784 = state_50289__$1;
(statearr_50313_52784[(2)] = inst_50261);

(statearr_50313_52784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (18))){
var inst_50272 = (state_50289[(2)]);
var state_50289__$1 = state_50289;
var statearr_50314_52785 = state_50289__$1;
(statearr_50314_52785[(2)] = inst_50272);

(statearr_50314_52785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50290 === (8))){
var inst_50258 = cljs.core.async.close_BANG_(to);
var state_50289__$1 = state_50289;
var statearr_50315_52786 = state_50289__$1;
(statearr_50315_52786[(2)] = inst_50258);

(statearr_50315_52786[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0 = (function (){
var statearr_50318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__);

(statearr_50318[(1)] = (1));

return statearr_50318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1 = (function (state_50289){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50289);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50319){var ex__49650__auto__ = e50319;
var statearr_50320_52789 = state_50289;
(statearr_50320_52789[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50289[(4)]))){
var statearr_50321_52791 = state_50289;
(statearr_50321_52791[(1)] = cljs.core.first((state_50289[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52792 = state_50289;
state_50289 = G__52792;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__ = function(state_50289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1.call(this,state_50289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_50323 = f__49739__auto__();
(statearr_50323[(6)] = c__49738__auto__);

return statearr_50323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));

return c__49738__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50326 = arguments.length;
switch (G__50326) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50335 = arguments.length;
switch (G__50335) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50342 = arguments.length;
switch (G__50342) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__49738__auto___52809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_50370){
var state_val_50371 = (state_50370[(1)]);
if((state_val_50371 === (7))){
var inst_50365 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
var statearr_50372_52810 = state_50370__$1;
(statearr_50372_52810[(2)] = inst_50365);

(statearr_50372_52810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (1))){
var state_50370__$1 = state_50370;
var statearr_50373_52811 = state_50370__$1;
(statearr_50373_52811[(2)] = null);

(statearr_50373_52811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (4))){
var inst_50345 = (state_50370[(7)]);
var inst_50345__$1 = (state_50370[(2)]);
var inst_50346 = (inst_50345__$1 == null);
var state_50370__$1 = (function (){var statearr_50374 = state_50370;
(statearr_50374[(7)] = inst_50345__$1);

return statearr_50374;
})();
if(cljs.core.truth_(inst_50346)){
var statearr_50375_52812 = state_50370__$1;
(statearr_50375_52812[(1)] = (5));

} else {
var statearr_50376_52813 = state_50370__$1;
(statearr_50376_52813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (13))){
var state_50370__$1 = state_50370;
var statearr_50381_52815 = state_50370__$1;
(statearr_50381_52815[(2)] = null);

(statearr_50381_52815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (6))){
var inst_50345 = (state_50370[(7)]);
var inst_50351 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50345) : p.call(null,inst_50345));
var state_50370__$1 = state_50370;
if(cljs.core.truth_(inst_50351)){
var statearr_50383_52817 = state_50370__$1;
(statearr_50383_52817[(1)] = (9));

} else {
var statearr_50384_52818 = state_50370__$1;
(statearr_50384_52818[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (3))){
var inst_50367 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50370__$1,inst_50367);
} else {
if((state_val_50371 === (12))){
var state_50370__$1 = state_50370;
var statearr_50386_52820 = state_50370__$1;
(statearr_50386_52820[(2)] = null);

(statearr_50386_52820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (2))){
var state_50370__$1 = state_50370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50370__$1,(4),ch);
} else {
if((state_val_50371 === (11))){
var inst_50345 = (state_50370[(7)]);
var inst_50356 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50370__$1,(8),inst_50356,inst_50345);
} else {
if((state_val_50371 === (9))){
var state_50370__$1 = state_50370;
var statearr_50391_52824 = state_50370__$1;
(statearr_50391_52824[(2)] = tc);

(statearr_50391_52824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (5))){
var inst_50348 = cljs.core.async.close_BANG_(tc);
var inst_50349 = cljs.core.async.close_BANG_(fc);
var state_50370__$1 = (function (){var statearr_50394 = state_50370;
(statearr_50394[(8)] = inst_50348);

return statearr_50394;
})();
var statearr_50395_52826 = state_50370__$1;
(statearr_50395_52826[(2)] = inst_50349);

(statearr_50395_52826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (14))){
var inst_50363 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
var statearr_50396_52829 = state_50370__$1;
(statearr_50396_52829[(2)] = inst_50363);

(statearr_50396_52829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (10))){
var state_50370__$1 = state_50370;
var statearr_50397_52831 = state_50370__$1;
(statearr_50397_52831[(2)] = fc);

(statearr_50397_52831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (8))){
var inst_50358 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
if(cljs.core.truth_(inst_50358)){
var statearr_50398_52835 = state_50370__$1;
(statearr_50398_52835[(1)] = (12));

} else {
var statearr_50399_52836 = state_50370__$1;
(statearr_50399_52836[(1)] = (13));

}

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_50402 = [null,null,null,null,null,null,null,null,null];
(statearr_50402[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_50402[(1)] = (1));

return statearr_50402;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_50370){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50370);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50403){var ex__49650__auto__ = e50403;
var statearr_50406_52838 = state_50370;
(statearr_50406_52838[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50370[(4)]))){
var statearr_50407_52839 = state_50370;
(statearr_50407_52839[(1)] = cljs.core.first((state_50370[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52840 = state_50370;
state_50370 = G__52840;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_50370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_50370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_50408 = f__49739__auto__();
(statearr_50408[(6)] = c__49738__auto___52809);

return statearr_50408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49738__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_50434){
var state_val_50435 = (state_50434[(1)]);
if((state_val_50435 === (7))){
var inst_50430 = (state_50434[(2)]);
var state_50434__$1 = state_50434;
var statearr_50436_52848 = state_50434__$1;
(statearr_50436_52848[(2)] = inst_50430);

(statearr_50436_52848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50435 === (1))){
var inst_50413 = init;
var inst_50414 = inst_50413;
var state_50434__$1 = (function (){var statearr_50437 = state_50434;
(statearr_50437[(7)] = inst_50414);

return statearr_50437;
})();
var statearr_50438_52850 = state_50434__$1;
(statearr_50438_52850[(2)] = null);

(statearr_50438_52850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50435 === (4))){
var inst_50417 = (state_50434[(8)]);
var inst_50417__$1 = (state_50434[(2)]);
var inst_50418 = (inst_50417__$1 == null);
var state_50434__$1 = (function (){var statearr_50439 = state_50434;
(statearr_50439[(8)] = inst_50417__$1);

return statearr_50439;
})();
if(cljs.core.truth_(inst_50418)){
var statearr_50440_52854 = state_50434__$1;
(statearr_50440_52854[(1)] = (5));

} else {
var statearr_50441_52856 = state_50434__$1;
(statearr_50441_52856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50435 === (6))){
var inst_50417 = (state_50434[(8)]);
var inst_50421 = (state_50434[(9)]);
var inst_50414 = (state_50434[(7)]);
var inst_50421__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50414,inst_50417) : f.call(null,inst_50414,inst_50417));
var inst_50422 = cljs.core.reduced_QMARK_(inst_50421__$1);
var state_50434__$1 = (function (){var statearr_50445 = state_50434;
(statearr_50445[(9)] = inst_50421__$1);

return statearr_50445;
})();
if(inst_50422){
var statearr_50446_52857 = state_50434__$1;
(statearr_50446_52857[(1)] = (8));

} else {
var statearr_50448_52858 = state_50434__$1;
(statearr_50448_52858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50435 === (3))){
var inst_50432 = (state_50434[(2)]);
var state_50434__$1 = state_50434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50434__$1,inst_50432);
} else {
if((state_val_50435 === (2))){
var state_50434__$1 = state_50434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50434__$1,(4),ch);
} else {
if((state_val_50435 === (9))){
var inst_50421 = (state_50434[(9)]);
var inst_50414 = inst_50421;
var state_50434__$1 = (function (){var statearr_50453 = state_50434;
(statearr_50453[(7)] = inst_50414);

return statearr_50453;
})();
var statearr_50454_52864 = state_50434__$1;
(statearr_50454_52864[(2)] = null);

(statearr_50454_52864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50435 === (5))){
var inst_50414 = (state_50434[(7)]);
var state_50434__$1 = state_50434;
var statearr_50455_52869 = state_50434__$1;
(statearr_50455_52869[(2)] = inst_50414);

(statearr_50455_52869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50435 === (10))){
var inst_50428 = (state_50434[(2)]);
var state_50434__$1 = state_50434;
var statearr_50456_52870 = state_50434__$1;
(statearr_50456_52870[(2)] = inst_50428);

(statearr_50456_52870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50435 === (8))){
var inst_50421 = (state_50434[(9)]);
var inst_50424 = cljs.core.deref(inst_50421);
var state_50434__$1 = state_50434;
var statearr_50461_52873 = state_50434__$1;
(statearr_50461_52873[(2)] = inst_50424);

(statearr_50461_52873[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__49647__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49647__auto____0 = (function (){
var statearr_50466 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50466[(0)] = cljs$core$async$reduce_$_state_machine__49647__auto__);

(statearr_50466[(1)] = (1));

return statearr_50466;
});
var cljs$core$async$reduce_$_state_machine__49647__auto____1 = (function (state_50434){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50434);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50467){var ex__49650__auto__ = e50467;
var statearr_50468_52879 = state_50434;
(statearr_50468_52879[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50434[(4)]))){
var statearr_50469_52881 = state_50434;
(statearr_50469_52881[(1)] = cljs.core.first((state_50434[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52895 = state_50434;
state_50434 = G__52895;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49647__auto__ = function(state_50434){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49647__auto____1.call(this,state_50434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49647__auto____0;
cljs$core$async$reduce_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49647__auto____1;
return cljs$core$async$reduce_$_state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_50470 = f__49739__auto__();
(statearr_50470[(6)] = c__49738__auto__);

return statearr_50470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));

return c__49738__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49738__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_50479){
var state_val_50480 = (state_50479[(1)]);
if((state_val_50480 === (1))){
var inst_50474 = cljs.core.async.reduce(f__$1,init,ch);
var state_50479__$1 = state_50479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50479__$1,(2),inst_50474);
} else {
if((state_val_50480 === (2))){
var inst_50476 = (state_50479[(2)]);
var inst_50477 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50476) : f__$1.call(null,inst_50476));
var state_50479__$1 = state_50479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50479__$1,inst_50477);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49647__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49647__auto____0 = (function (){
var statearr_50481 = [null,null,null,null,null,null,null];
(statearr_50481[(0)] = cljs$core$async$transduce_$_state_machine__49647__auto__);

(statearr_50481[(1)] = (1));

return statearr_50481;
});
var cljs$core$async$transduce_$_state_machine__49647__auto____1 = (function (state_50479){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50479);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50482){var ex__49650__auto__ = e50482;
var statearr_50483_52900 = state_50479;
(statearr_50483_52900[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50479[(4)]))){
var statearr_50487_52901 = state_50479;
(statearr_50487_52901[(1)] = cljs.core.first((state_50479[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52902 = state_50479;
state_50479 = G__52902;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49647__auto__ = function(state_50479){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49647__auto____1.call(this,state_50479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49647__auto____0;
cljs$core$async$transduce_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49647__auto____1;
return cljs$core$async$transduce_$_state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_50488 = f__49739__auto__();
(statearr_50488[(6)] = c__49738__auto__);

return statearr_50488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));

return c__49738__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50491 = arguments.length;
switch (G__50491) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49738__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_50521){
var state_val_50522 = (state_50521[(1)]);
if((state_val_50522 === (7))){
var inst_50503 = (state_50521[(2)]);
var state_50521__$1 = state_50521;
var statearr_50529_52909 = state_50521__$1;
(statearr_50529_52909[(2)] = inst_50503);

(statearr_50529_52909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (1))){
var inst_50497 = cljs.core.seq(coll);
var inst_50498 = inst_50497;
var state_50521__$1 = (function (){var statearr_50530 = state_50521;
(statearr_50530[(7)] = inst_50498);

return statearr_50530;
})();
var statearr_50531_52911 = state_50521__$1;
(statearr_50531_52911[(2)] = null);

(statearr_50531_52911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (4))){
var inst_50498 = (state_50521[(7)]);
var inst_50501 = cljs.core.first(inst_50498);
var state_50521__$1 = state_50521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50521__$1,(7),ch,inst_50501);
} else {
if((state_val_50522 === (13))){
var inst_50515 = (state_50521[(2)]);
var state_50521__$1 = state_50521;
var statearr_50532_52917 = state_50521__$1;
(statearr_50532_52917[(2)] = inst_50515);

(statearr_50532_52917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (6))){
var inst_50506 = (state_50521[(2)]);
var state_50521__$1 = state_50521;
if(cljs.core.truth_(inst_50506)){
var statearr_50537_52919 = state_50521__$1;
(statearr_50537_52919[(1)] = (8));

} else {
var statearr_50538_52920 = state_50521__$1;
(statearr_50538_52920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (3))){
var inst_50519 = (state_50521[(2)]);
var state_50521__$1 = state_50521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50521__$1,inst_50519);
} else {
if((state_val_50522 === (12))){
var state_50521__$1 = state_50521;
var statearr_50539_52922 = state_50521__$1;
(statearr_50539_52922[(2)] = null);

(statearr_50539_52922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (2))){
var inst_50498 = (state_50521[(7)]);
var state_50521__$1 = state_50521;
if(cljs.core.truth_(inst_50498)){
var statearr_50540_52923 = state_50521__$1;
(statearr_50540_52923[(1)] = (4));

} else {
var statearr_50541_52924 = state_50521__$1;
(statearr_50541_52924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (11))){
var inst_50512 = cljs.core.async.close_BANG_(ch);
var state_50521__$1 = state_50521;
var statearr_50542_52928 = state_50521__$1;
(statearr_50542_52928[(2)] = inst_50512);

(statearr_50542_52928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (9))){
var state_50521__$1 = state_50521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50543_52931 = state_50521__$1;
(statearr_50543_52931[(1)] = (11));

} else {
var statearr_50544_52932 = state_50521__$1;
(statearr_50544_52932[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (5))){
var inst_50498 = (state_50521[(7)]);
var state_50521__$1 = state_50521;
var statearr_50545_52935 = state_50521__$1;
(statearr_50545_52935[(2)] = inst_50498);

(statearr_50545_52935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (10))){
var inst_50517 = (state_50521[(2)]);
var state_50521__$1 = state_50521;
var statearr_50553_52936 = state_50521__$1;
(statearr_50553_52936[(2)] = inst_50517);

(statearr_50553_52936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50522 === (8))){
var inst_50498 = (state_50521[(7)]);
var inst_50508 = cljs.core.next(inst_50498);
var inst_50498__$1 = inst_50508;
var state_50521__$1 = (function (){var statearr_50554 = state_50521;
(statearr_50554[(7)] = inst_50498__$1);

return statearr_50554;
})();
var statearr_50555_52938 = state_50521__$1;
(statearr_50555_52938[(2)] = null);

(statearr_50555_52938[(1)] = (2));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_50559 = [null,null,null,null,null,null,null,null];
(statearr_50559[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_50559[(1)] = (1));

return statearr_50559;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_50521){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50521);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50563){var ex__49650__auto__ = e50563;
var statearr_50564_52945 = state_50521;
(statearr_50564_52945[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50521[(4)]))){
var statearr_50568_52946 = state_50521;
(statearr_50568_52946[(1)] = cljs.core.first((state_50521[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52948 = state_50521;
state_50521 = G__52948;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_50521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_50521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_50572 = f__49739__auto__();
(statearr_50572[(6)] = c__49738__auto__);

return statearr_50572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));

return c__49738__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50581 = arguments.length;
switch (G__50581) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52955 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52955(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52958 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52958(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52964 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52964(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52971 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52971(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50608 = (function (ch,cs,meta50609){
this.ch = ch;
this.cs = cs;
this.meta50609 = meta50609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50610,meta50609__$1){
var self__ = this;
var _50610__$1 = this;
return (new cljs.core.async.t_cljs$core$async50608(self__.ch,self__.cs,meta50609__$1));
}));

(cljs.core.async.t_cljs$core$async50608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50610){
var self__ = this;
var _50610__$1 = this;
return self__.meta50609;
}));

(cljs.core.async.t_cljs$core$async50608.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50608.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50608.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50608.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50608.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50609","meta50609",1662069425,null)], null);
}));

(cljs.core.async.t_cljs$core$async50608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50608");

(cljs.core.async.t_cljs$core$async50608.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50608.
 */
cljs.core.async.__GT_t_cljs$core$async50608 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50608(ch__$1,cs__$1,meta50609){
return (new cljs.core.async.t_cljs$core$async50608(ch__$1,cs__$1,meta50609));
});

}

return (new cljs.core.async.t_cljs$core$async50608(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__49738__auto___52982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_50789){
var state_val_50790 = (state_50789[(1)]);
if((state_val_50790 === (7))){
var inst_50780 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
var statearr_50791_52985 = state_50789__$1;
(statearr_50791_52985[(2)] = inst_50780);

(statearr_50791_52985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (20))){
var inst_50673 = (state_50789[(7)]);
var inst_50690 = cljs.core.first(inst_50673);
var inst_50691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50690,(0),null);
var inst_50692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50690,(1),null);
var state_50789__$1 = (function (){var statearr_50792 = state_50789;
(statearr_50792[(8)] = inst_50691);

return statearr_50792;
})();
if(cljs.core.truth_(inst_50692)){
var statearr_50794_52990 = state_50789__$1;
(statearr_50794_52990[(1)] = (22));

} else {
var statearr_50795_52991 = state_50789__$1;
(statearr_50795_52991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (27))){
var inst_50623 = (state_50789[(9)]);
var inst_50722 = (state_50789[(10)]);
var inst_50730 = (state_50789[(11)]);
var inst_50724 = (state_50789[(12)]);
var inst_50730__$1 = cljs.core._nth(inst_50722,inst_50724);
var inst_50731 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50730__$1,inst_50623,done);
var state_50789__$1 = (function (){var statearr_50796 = state_50789;
(statearr_50796[(11)] = inst_50730__$1);

return statearr_50796;
})();
if(cljs.core.truth_(inst_50731)){
var statearr_50797_52995 = state_50789__$1;
(statearr_50797_52995[(1)] = (30));

} else {
var statearr_50798_52997 = state_50789__$1;
(statearr_50798_52997[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (1))){
var state_50789__$1 = state_50789;
var statearr_50801_52999 = state_50789__$1;
(statearr_50801_52999[(2)] = null);

(statearr_50801_52999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (24))){
var inst_50673 = (state_50789[(7)]);
var inst_50699 = (state_50789[(2)]);
var inst_50700 = cljs.core.next(inst_50673);
var inst_50632 = inst_50700;
var inst_50633 = null;
var inst_50634 = (0);
var inst_50635 = (0);
var state_50789__$1 = (function (){var statearr_50803 = state_50789;
(statearr_50803[(13)] = inst_50635);

(statearr_50803[(14)] = inst_50634);

(statearr_50803[(15)] = inst_50633);

(statearr_50803[(16)] = inst_50632);

(statearr_50803[(17)] = inst_50699);

return statearr_50803;
})();
var statearr_50804_53001 = state_50789__$1;
(statearr_50804_53001[(2)] = null);

(statearr_50804_53001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (39))){
var state_50789__$1 = state_50789;
var statearr_50810_53004 = state_50789__$1;
(statearr_50810_53004[(2)] = null);

(statearr_50810_53004[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (4))){
var inst_50623 = (state_50789[(9)]);
var inst_50623__$1 = (state_50789[(2)]);
var inst_50624 = (inst_50623__$1 == null);
var state_50789__$1 = (function (){var statearr_50812 = state_50789;
(statearr_50812[(9)] = inst_50623__$1);

return statearr_50812;
})();
if(cljs.core.truth_(inst_50624)){
var statearr_50813_53005 = state_50789__$1;
(statearr_50813_53005[(1)] = (5));

} else {
var statearr_50814_53006 = state_50789__$1;
(statearr_50814_53006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (15))){
var inst_50635 = (state_50789[(13)]);
var inst_50634 = (state_50789[(14)]);
var inst_50633 = (state_50789[(15)]);
var inst_50632 = (state_50789[(16)]);
var inst_50660 = (state_50789[(2)]);
var inst_50662 = (inst_50635 + (1));
var tmp50806 = inst_50634;
var tmp50807 = inst_50633;
var tmp50808 = inst_50632;
var inst_50632__$1 = tmp50808;
var inst_50633__$1 = tmp50807;
var inst_50634__$1 = tmp50806;
var inst_50635__$1 = inst_50662;
var state_50789__$1 = (function (){var statearr_50821 = state_50789;
(statearr_50821[(13)] = inst_50635__$1);

(statearr_50821[(14)] = inst_50634__$1);

(statearr_50821[(15)] = inst_50633__$1);

(statearr_50821[(16)] = inst_50632__$1);

(statearr_50821[(18)] = inst_50660);

return statearr_50821;
})();
var statearr_50822_53016 = state_50789__$1;
(statearr_50822_53016[(2)] = null);

(statearr_50822_53016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (21))){
var inst_50703 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
var statearr_50826_53018 = state_50789__$1;
(statearr_50826_53018[(2)] = inst_50703);

(statearr_50826_53018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (31))){
var inst_50730 = (state_50789[(11)]);
var inst_50735 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50730);
var state_50789__$1 = state_50789;
var statearr_50827_53020 = state_50789__$1;
(statearr_50827_53020[(2)] = inst_50735);

(statearr_50827_53020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (32))){
var inst_50722 = (state_50789[(10)]);
var inst_50721 = (state_50789[(19)]);
var inst_50724 = (state_50789[(12)]);
var inst_50723 = (state_50789[(20)]);
var inst_50737 = (state_50789[(2)]);
var inst_50738 = (inst_50724 + (1));
var tmp50823 = inst_50722;
var tmp50824 = inst_50721;
var tmp50825 = inst_50723;
var inst_50721__$1 = tmp50824;
var inst_50722__$1 = tmp50823;
var inst_50723__$1 = tmp50825;
var inst_50724__$1 = inst_50738;
var state_50789__$1 = (function (){var statearr_50833 = state_50789;
(statearr_50833[(10)] = inst_50722__$1);

(statearr_50833[(19)] = inst_50721__$1);

(statearr_50833[(12)] = inst_50724__$1);

(statearr_50833[(20)] = inst_50723__$1);

(statearr_50833[(21)] = inst_50737);

return statearr_50833;
})();
var statearr_50836_53025 = state_50789__$1;
(statearr_50836_53025[(2)] = null);

(statearr_50836_53025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (40))){
var inst_50751 = (state_50789[(22)]);
var inst_50755 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50751);
var state_50789__$1 = state_50789;
var statearr_50837_53026 = state_50789__$1;
(statearr_50837_53026[(2)] = inst_50755);

(statearr_50837_53026[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (33))){
var inst_50742 = (state_50789[(23)]);
var inst_50744 = cljs.core.chunked_seq_QMARK_(inst_50742);
var state_50789__$1 = state_50789;
if(inst_50744){
var statearr_50838_53032 = state_50789__$1;
(statearr_50838_53032[(1)] = (36));

} else {
var statearr_50839_53033 = state_50789__$1;
(statearr_50839_53033[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (13))){
var inst_50650 = (state_50789[(24)]);
var inst_50657 = cljs.core.async.close_BANG_(inst_50650);
var state_50789__$1 = state_50789;
var statearr_50840_53034 = state_50789__$1;
(statearr_50840_53034[(2)] = inst_50657);

(statearr_50840_53034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (22))){
var inst_50691 = (state_50789[(8)]);
var inst_50695 = cljs.core.async.close_BANG_(inst_50691);
var state_50789__$1 = state_50789;
var statearr_50841_53036 = state_50789__$1;
(statearr_50841_53036[(2)] = inst_50695);

(statearr_50841_53036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (36))){
var inst_50742 = (state_50789[(23)]);
var inst_50746 = cljs.core.chunk_first(inst_50742);
var inst_50747 = cljs.core.chunk_rest(inst_50742);
var inst_50748 = cljs.core.count(inst_50746);
var inst_50721 = inst_50747;
var inst_50722 = inst_50746;
var inst_50723 = inst_50748;
var inst_50724 = (0);
var state_50789__$1 = (function (){var statearr_50847 = state_50789;
(statearr_50847[(10)] = inst_50722);

(statearr_50847[(19)] = inst_50721);

(statearr_50847[(12)] = inst_50724);

(statearr_50847[(20)] = inst_50723);

return statearr_50847;
})();
var statearr_50851_53039 = state_50789__$1;
(statearr_50851_53039[(2)] = null);

(statearr_50851_53039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (41))){
var inst_50742 = (state_50789[(23)]);
var inst_50757 = (state_50789[(2)]);
var inst_50758 = cljs.core.next(inst_50742);
var inst_50721 = inst_50758;
var inst_50722 = null;
var inst_50723 = (0);
var inst_50724 = (0);
var state_50789__$1 = (function (){var statearr_50856 = state_50789;
(statearr_50856[(10)] = inst_50722);

(statearr_50856[(25)] = inst_50757);

(statearr_50856[(19)] = inst_50721);

(statearr_50856[(12)] = inst_50724);

(statearr_50856[(20)] = inst_50723);

return statearr_50856;
})();
var statearr_50857_53041 = state_50789__$1;
(statearr_50857_53041[(2)] = null);

(statearr_50857_53041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (43))){
var state_50789__$1 = state_50789;
var statearr_50858_53043 = state_50789__$1;
(statearr_50858_53043[(2)] = null);

(statearr_50858_53043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (29))){
var inst_50766 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
var statearr_50859_53046 = state_50789__$1;
(statearr_50859_53046[(2)] = inst_50766);

(statearr_50859_53046[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (44))){
var inst_50776 = (state_50789[(2)]);
var state_50789__$1 = (function (){var statearr_50860 = state_50789;
(statearr_50860[(26)] = inst_50776);

return statearr_50860;
})();
var statearr_50861_53049 = state_50789__$1;
(statearr_50861_53049[(2)] = null);

(statearr_50861_53049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (6))){
var inst_50713 = (state_50789[(27)]);
var inst_50712 = cljs.core.deref(cs);
var inst_50713__$1 = cljs.core.keys(inst_50712);
var inst_50714 = cljs.core.count(inst_50713__$1);
var inst_50715 = cljs.core.reset_BANG_(dctr,inst_50714);
var inst_50720 = cljs.core.seq(inst_50713__$1);
var inst_50721 = inst_50720;
var inst_50722 = null;
var inst_50723 = (0);
var inst_50724 = (0);
var state_50789__$1 = (function (){var statearr_50863 = state_50789;
(statearr_50863[(10)] = inst_50722);

(statearr_50863[(28)] = inst_50715);

(statearr_50863[(27)] = inst_50713__$1);

(statearr_50863[(19)] = inst_50721);

(statearr_50863[(12)] = inst_50724);

(statearr_50863[(20)] = inst_50723);

return statearr_50863;
})();
var statearr_50864_53054 = state_50789__$1;
(statearr_50864_53054[(2)] = null);

(statearr_50864_53054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (28))){
var inst_50742 = (state_50789[(23)]);
var inst_50721 = (state_50789[(19)]);
var inst_50742__$1 = cljs.core.seq(inst_50721);
var state_50789__$1 = (function (){var statearr_50865 = state_50789;
(statearr_50865[(23)] = inst_50742__$1);

return statearr_50865;
})();
if(inst_50742__$1){
var statearr_50866_53059 = state_50789__$1;
(statearr_50866_53059[(1)] = (33));

} else {
var statearr_50867_53060 = state_50789__$1;
(statearr_50867_53060[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (25))){
var inst_50724 = (state_50789[(12)]);
var inst_50723 = (state_50789[(20)]);
var inst_50726 = (inst_50724 < inst_50723);
var inst_50727 = inst_50726;
var state_50789__$1 = state_50789;
if(cljs.core.truth_(inst_50727)){
var statearr_50868_53063 = state_50789__$1;
(statearr_50868_53063[(1)] = (27));

} else {
var statearr_50870_53065 = state_50789__$1;
(statearr_50870_53065[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (34))){
var state_50789__$1 = state_50789;
var statearr_50871_53066 = state_50789__$1;
(statearr_50871_53066[(2)] = null);

(statearr_50871_53066[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (17))){
var state_50789__$1 = state_50789;
var statearr_50872_53067 = state_50789__$1;
(statearr_50872_53067[(2)] = null);

(statearr_50872_53067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (3))){
var inst_50783 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50789__$1,inst_50783);
} else {
if((state_val_50790 === (12))){
var inst_50708 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
var statearr_50874_53069 = state_50789__$1;
(statearr_50874_53069[(2)] = inst_50708);

(statearr_50874_53069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (2))){
var state_50789__$1 = state_50789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50789__$1,(4),ch);
} else {
if((state_val_50790 === (23))){
var state_50789__$1 = state_50789;
var statearr_50875_53075 = state_50789__$1;
(statearr_50875_53075[(2)] = null);

(statearr_50875_53075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (35))){
var inst_50764 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
var statearr_50877_53078 = state_50789__$1;
(statearr_50877_53078[(2)] = inst_50764);

(statearr_50877_53078[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (19))){
var inst_50673 = (state_50789[(7)]);
var inst_50678 = cljs.core.chunk_first(inst_50673);
var inst_50683 = cljs.core.chunk_rest(inst_50673);
var inst_50684 = cljs.core.count(inst_50678);
var inst_50632 = inst_50683;
var inst_50633 = inst_50678;
var inst_50634 = inst_50684;
var inst_50635 = (0);
var state_50789__$1 = (function (){var statearr_50882 = state_50789;
(statearr_50882[(13)] = inst_50635);

(statearr_50882[(14)] = inst_50634);

(statearr_50882[(15)] = inst_50633);

(statearr_50882[(16)] = inst_50632);

return statearr_50882;
})();
var statearr_50883_53081 = state_50789__$1;
(statearr_50883_53081[(2)] = null);

(statearr_50883_53081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (11))){
var inst_50632 = (state_50789[(16)]);
var inst_50673 = (state_50789[(7)]);
var inst_50673__$1 = cljs.core.seq(inst_50632);
var state_50789__$1 = (function (){var statearr_50888 = state_50789;
(statearr_50888[(7)] = inst_50673__$1);

return statearr_50888;
})();
if(inst_50673__$1){
var statearr_50889_53083 = state_50789__$1;
(statearr_50889_53083[(1)] = (16));

} else {
var statearr_50890_53084 = state_50789__$1;
(statearr_50890_53084[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (9))){
var inst_50710 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
var statearr_50891_53085 = state_50789__$1;
(statearr_50891_53085[(2)] = inst_50710);

(statearr_50891_53085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (5))){
var inst_50630 = cljs.core.deref(cs);
var inst_50631 = cljs.core.seq(inst_50630);
var inst_50632 = inst_50631;
var inst_50633 = null;
var inst_50634 = (0);
var inst_50635 = (0);
var state_50789__$1 = (function (){var statearr_50893 = state_50789;
(statearr_50893[(13)] = inst_50635);

(statearr_50893[(14)] = inst_50634);

(statearr_50893[(15)] = inst_50633);

(statearr_50893[(16)] = inst_50632);

return statearr_50893;
})();
var statearr_50894_53090 = state_50789__$1;
(statearr_50894_53090[(2)] = null);

(statearr_50894_53090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (14))){
var state_50789__$1 = state_50789;
var statearr_50895_53091 = state_50789__$1;
(statearr_50895_53091[(2)] = null);

(statearr_50895_53091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (45))){
var inst_50772 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
var statearr_50896_53092 = state_50789__$1;
(statearr_50896_53092[(2)] = inst_50772);

(statearr_50896_53092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (26))){
var inst_50713 = (state_50789[(27)]);
var inst_50768 = (state_50789[(2)]);
var inst_50769 = cljs.core.seq(inst_50713);
var state_50789__$1 = (function (){var statearr_50897 = state_50789;
(statearr_50897[(29)] = inst_50768);

return statearr_50897;
})();
if(inst_50769){
var statearr_50898_53097 = state_50789__$1;
(statearr_50898_53097[(1)] = (42));

} else {
var statearr_50899_53098 = state_50789__$1;
(statearr_50899_53098[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (16))){
var inst_50673 = (state_50789[(7)]);
var inst_50676 = cljs.core.chunked_seq_QMARK_(inst_50673);
var state_50789__$1 = state_50789;
if(inst_50676){
var statearr_50903_53102 = state_50789__$1;
(statearr_50903_53102[(1)] = (19));

} else {
var statearr_50904_53103 = state_50789__$1;
(statearr_50904_53103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (38))){
var inst_50761 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
var statearr_50905_53104 = state_50789__$1;
(statearr_50905_53104[(2)] = inst_50761);

(statearr_50905_53104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (30))){
var state_50789__$1 = state_50789;
var statearr_50906_53105 = state_50789__$1;
(statearr_50906_53105[(2)] = null);

(statearr_50906_53105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (10))){
var inst_50635 = (state_50789[(13)]);
var inst_50633 = (state_50789[(15)]);
var inst_50648 = cljs.core._nth(inst_50633,inst_50635);
var inst_50650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50648,(0),null);
var inst_50651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50648,(1),null);
var state_50789__$1 = (function (){var statearr_50912 = state_50789;
(statearr_50912[(24)] = inst_50650);

return statearr_50912;
})();
if(cljs.core.truth_(inst_50651)){
var statearr_50913_53108 = state_50789__$1;
(statearr_50913_53108[(1)] = (13));

} else {
var statearr_50914_53110 = state_50789__$1;
(statearr_50914_53110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (18))){
var inst_50706 = (state_50789[(2)]);
var state_50789__$1 = state_50789;
var statearr_50915_53112 = state_50789__$1;
(statearr_50915_53112[(2)] = inst_50706);

(statearr_50915_53112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (42))){
var state_50789__$1 = state_50789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50789__$1,(45),dchan);
} else {
if((state_val_50790 === (37))){
var inst_50623 = (state_50789[(9)]);
var inst_50742 = (state_50789[(23)]);
var inst_50751 = (state_50789[(22)]);
var inst_50751__$1 = cljs.core.first(inst_50742);
var inst_50752 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50751__$1,inst_50623,done);
var state_50789__$1 = (function (){var statearr_50916 = state_50789;
(statearr_50916[(22)] = inst_50751__$1);

return statearr_50916;
})();
if(cljs.core.truth_(inst_50752)){
var statearr_50917_53115 = state_50789__$1;
(statearr_50917_53115[(1)] = (39));

} else {
var statearr_50918_53116 = state_50789__$1;
(statearr_50918_53116[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50790 === (8))){
var inst_50635 = (state_50789[(13)]);
var inst_50634 = (state_50789[(14)]);
var inst_50638 = (inst_50635 < inst_50634);
var inst_50639 = inst_50638;
var state_50789__$1 = state_50789;
if(cljs.core.truth_(inst_50639)){
var statearr_50921_53119 = state_50789__$1;
(statearr_50921_53119[(1)] = (10));

} else {
var statearr_50923_53120 = state_50789__$1;
(statearr_50923_53120[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__49647__auto__ = null;
var cljs$core$async$mult_$_state_machine__49647__auto____0 = (function (){
var statearr_50924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50924[(0)] = cljs$core$async$mult_$_state_machine__49647__auto__);

(statearr_50924[(1)] = (1));

return statearr_50924;
});
var cljs$core$async$mult_$_state_machine__49647__auto____1 = (function (state_50789){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_50789);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e50925){var ex__49650__auto__ = e50925;
var statearr_50926_53123 = state_50789;
(statearr_50926_53123[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_50789[(4)]))){
var statearr_50927_53125 = state_50789;
(statearr_50927_53125[(1)] = cljs.core.first((state_50789[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53129 = state_50789;
state_50789 = G__53129;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49647__auto__ = function(state_50789){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49647__auto____1.call(this,state_50789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49647__auto____0;
cljs$core$async$mult_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49647__auto____1;
return cljs$core$async$mult_$_state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_50928 = f__49739__auto__();
(statearr_50928[(6)] = c__49738__auto___52982);

return statearr_50928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__50931 = arguments.length;
switch (G__50931) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_53137 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53137(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53141 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53141(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53143 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53143(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53147 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_53147(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53148 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53148(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53152 = arguments.length;
var i__4865__auto___53153 = (0);
while(true){
if((i__4865__auto___53153 < len__4864__auto___53152)){
args__4870__auto__.push((arguments[i__4865__auto___53153]));

var G__53154 = (i__4865__auto___53153 + (1));
i__4865__auto___53153 = G__53154;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50959){
var map__50960 = p__50959;
var map__50960__$1 = cljs.core.__destructure_map(map__50960);
var opts = map__50960__$1;
var statearr_50961_53156 = state;
(statearr_50961_53156[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50962_53158 = state;
(statearr_50962_53158[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_50963_53159 = state;
(statearr_50963_53159[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50953){
var G__50954 = cljs.core.first(seq50953);
var seq50953__$1 = cljs.core.next(seq50953);
var G__50955 = cljs.core.first(seq50953__$1);
var seq50953__$2 = cljs.core.next(seq50953__$1);
var G__50956 = cljs.core.first(seq50953__$2);
var seq50953__$3 = cljs.core.next(seq50953__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50954,G__50955,G__50956,seq50953__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50997 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50998){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50998 = meta50998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50999,meta50998__$1){
var self__ = this;
var _50999__$1 = this;
return (new cljs.core.async.t_cljs$core$async50997(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50998__$1));
}));

(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50999){
var self__ = this;
var _50999__$1 = this;
return self__.meta50998;
}));

(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50997.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50998","meta50998",2002503854,null)], null);
}));

(cljs.core.async.t_cljs$core$async50997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50997");

(cljs.core.async.t_cljs$core$async50997.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50997.
 */
cljs.core.async.__GT_t_cljs$core$async50997 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50997(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50998){
return (new cljs.core.async.t_cljs$core$async50997(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50998));
});

}

return (new cljs.core.async.t_cljs$core$async50997(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49738__auto___53184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_51089){
var state_val_51090 = (state_51089[(1)]);
if((state_val_51090 === (7))){
var inst_51049 = (state_51089[(2)]);
var state_51089__$1 = state_51089;
if(cljs.core.truth_(inst_51049)){
var statearr_51093_53187 = state_51089__$1;
(statearr_51093_53187[(1)] = (8));

} else {
var statearr_51094_53189 = state_51089__$1;
(statearr_51094_53189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (20))){
var inst_51042 = (state_51089[(7)]);
var state_51089__$1 = state_51089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51089__$1,(23),out,inst_51042);
} else {
if((state_val_51090 === (1))){
var inst_51025 = calc_state();
var inst_51026 = cljs.core.__destructure_map(inst_51025);
var inst_51027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51026,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51026,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51026,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51030 = inst_51025;
var state_51089__$1 = (function (){var statearr_51100 = state_51089;
(statearr_51100[(8)] = inst_51027);

(statearr_51100[(9)] = inst_51029);

(statearr_51100[(10)] = inst_51028);

(statearr_51100[(11)] = inst_51030);

return statearr_51100;
})();
var statearr_51101_53196 = state_51089__$1;
(statearr_51101_53196[(2)] = null);

(statearr_51101_53196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (24))){
var inst_51033 = (state_51089[(12)]);
var inst_51030 = inst_51033;
var state_51089__$1 = (function (){var statearr_51103 = state_51089;
(statearr_51103[(11)] = inst_51030);

return statearr_51103;
})();
var statearr_51104_53199 = state_51089__$1;
(statearr_51104_53199[(2)] = null);

(statearr_51104_53199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (4))){
var inst_51042 = (state_51089[(7)]);
var inst_51044 = (state_51089[(13)]);
var inst_51041 = (state_51089[(2)]);
var inst_51042__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51041,(0),null);
var inst_51043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51041,(1),null);
var inst_51044__$1 = (inst_51042__$1 == null);
var state_51089__$1 = (function (){var statearr_51106 = state_51089;
(statearr_51106[(14)] = inst_51043);

(statearr_51106[(7)] = inst_51042__$1);

(statearr_51106[(13)] = inst_51044__$1);

return statearr_51106;
})();
if(cljs.core.truth_(inst_51044__$1)){
var statearr_51107_53204 = state_51089__$1;
(statearr_51107_53204[(1)] = (5));

} else {
var statearr_51108_53205 = state_51089__$1;
(statearr_51108_53205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (15))){
var inst_51034 = (state_51089[(15)]);
var inst_51063 = (state_51089[(16)]);
var inst_51063__$1 = cljs.core.empty_QMARK_(inst_51034);
var state_51089__$1 = (function (){var statearr_51109 = state_51089;
(statearr_51109[(16)] = inst_51063__$1);

return statearr_51109;
})();
if(inst_51063__$1){
var statearr_51110_53207 = state_51089__$1;
(statearr_51110_53207[(1)] = (17));

} else {
var statearr_51111_53209 = state_51089__$1;
(statearr_51111_53209[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (21))){
var inst_51033 = (state_51089[(12)]);
var inst_51030 = inst_51033;
var state_51089__$1 = (function (){var statearr_51112 = state_51089;
(statearr_51112[(11)] = inst_51030);

return statearr_51112;
})();
var statearr_51113_53210 = state_51089__$1;
(statearr_51113_53210[(2)] = null);

(statearr_51113_53210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (13))){
var inst_51056 = (state_51089[(2)]);
var inst_51057 = calc_state();
var inst_51030 = inst_51057;
var state_51089__$1 = (function (){var statearr_51117 = state_51089;
(statearr_51117[(17)] = inst_51056);

(statearr_51117[(11)] = inst_51030);

return statearr_51117;
})();
var statearr_51118_53213 = state_51089__$1;
(statearr_51118_53213[(2)] = null);

(statearr_51118_53213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (22))){
var inst_51083 = (state_51089[(2)]);
var state_51089__$1 = state_51089;
var statearr_51120_53214 = state_51089__$1;
(statearr_51120_53214[(2)] = inst_51083);

(statearr_51120_53214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (6))){
var inst_51043 = (state_51089[(14)]);
var inst_51047 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51043,change);
var state_51089__$1 = state_51089;
var statearr_51121_53217 = state_51089__$1;
(statearr_51121_53217[(2)] = inst_51047);

(statearr_51121_53217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (25))){
var state_51089__$1 = state_51089;
var statearr_51122_53219 = state_51089__$1;
(statearr_51122_53219[(2)] = null);

(statearr_51122_53219[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (17))){
var inst_51043 = (state_51089[(14)]);
var inst_51035 = (state_51089[(18)]);
var inst_51065 = (inst_51035.cljs$core$IFn$_invoke$arity$1 ? inst_51035.cljs$core$IFn$_invoke$arity$1(inst_51043) : inst_51035.call(null,inst_51043));
var inst_51066 = cljs.core.not(inst_51065);
var state_51089__$1 = state_51089;
var statearr_51123_53226 = state_51089__$1;
(statearr_51123_53226[(2)] = inst_51066);

(statearr_51123_53226[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (3))){
var inst_51087 = (state_51089[(2)]);
var state_51089__$1 = state_51089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51089__$1,inst_51087);
} else {
if((state_val_51090 === (12))){
var state_51089__$1 = state_51089;
var statearr_51124_53227 = state_51089__$1;
(statearr_51124_53227[(2)] = null);

(statearr_51124_53227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (2))){
var inst_51033 = (state_51089[(12)]);
var inst_51030 = (state_51089[(11)]);
var inst_51033__$1 = cljs.core.__destructure_map(inst_51030);
var inst_51034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51033__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51033__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51033__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51089__$1 = (function (){var statearr_51125 = state_51089;
(statearr_51125[(15)] = inst_51034);

(statearr_51125[(18)] = inst_51035);

(statearr_51125[(12)] = inst_51033__$1);

return statearr_51125;
})();
return cljs.core.async.ioc_alts_BANG_(state_51089__$1,(4),inst_51036);
} else {
if((state_val_51090 === (23))){
var inst_51074 = (state_51089[(2)]);
var state_51089__$1 = state_51089;
if(cljs.core.truth_(inst_51074)){
var statearr_51126_53231 = state_51089__$1;
(statearr_51126_53231[(1)] = (24));

} else {
var statearr_51127_53232 = state_51089__$1;
(statearr_51127_53232[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (19))){
var inst_51069 = (state_51089[(2)]);
var state_51089__$1 = state_51089;
var statearr_51130_53233 = state_51089__$1;
(statearr_51130_53233[(2)] = inst_51069);

(statearr_51130_53233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (11))){
var inst_51043 = (state_51089[(14)]);
var inst_51053 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51043);
var state_51089__$1 = state_51089;
var statearr_51131_53234 = state_51089__$1;
(statearr_51131_53234[(2)] = inst_51053);

(statearr_51131_53234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (9))){
var inst_51043 = (state_51089[(14)]);
var inst_51034 = (state_51089[(15)]);
var inst_51060 = (state_51089[(19)]);
var inst_51060__$1 = (inst_51034.cljs$core$IFn$_invoke$arity$1 ? inst_51034.cljs$core$IFn$_invoke$arity$1(inst_51043) : inst_51034.call(null,inst_51043));
var state_51089__$1 = (function (){var statearr_51139 = state_51089;
(statearr_51139[(19)] = inst_51060__$1);

return statearr_51139;
})();
if(cljs.core.truth_(inst_51060__$1)){
var statearr_51140_53235 = state_51089__$1;
(statearr_51140_53235[(1)] = (14));

} else {
var statearr_51141_53236 = state_51089__$1;
(statearr_51141_53236[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (5))){
var inst_51044 = (state_51089[(13)]);
var state_51089__$1 = state_51089;
var statearr_51142_53237 = state_51089__$1;
(statearr_51142_53237[(2)] = inst_51044);

(statearr_51142_53237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (14))){
var inst_51060 = (state_51089[(19)]);
var state_51089__$1 = state_51089;
var statearr_51143_53238 = state_51089__$1;
(statearr_51143_53238[(2)] = inst_51060);

(statearr_51143_53238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (26))){
var inst_51079 = (state_51089[(2)]);
var state_51089__$1 = state_51089;
var statearr_51146_53239 = state_51089__$1;
(statearr_51146_53239[(2)] = inst_51079);

(statearr_51146_53239[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (16))){
var inst_51071 = (state_51089[(2)]);
var state_51089__$1 = state_51089;
if(cljs.core.truth_(inst_51071)){
var statearr_51147_53240 = state_51089__$1;
(statearr_51147_53240[(1)] = (20));

} else {
var statearr_51148_53242 = state_51089__$1;
(statearr_51148_53242[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (10))){
var inst_51085 = (state_51089[(2)]);
var state_51089__$1 = state_51089;
var statearr_51149_53243 = state_51089__$1;
(statearr_51149_53243[(2)] = inst_51085);

(statearr_51149_53243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (18))){
var inst_51063 = (state_51089[(16)]);
var state_51089__$1 = state_51089;
var statearr_51150_53244 = state_51089__$1;
(statearr_51150_53244[(2)] = inst_51063);

(statearr_51150_53244[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51090 === (8))){
var inst_51042 = (state_51089[(7)]);
var inst_51051 = (inst_51042 == null);
var state_51089__$1 = state_51089;
if(cljs.core.truth_(inst_51051)){
var statearr_51154_53245 = state_51089__$1;
(statearr_51154_53245[(1)] = (11));

} else {
var statearr_51155_53246 = state_51089__$1;
(statearr_51155_53246[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__49647__auto__ = null;
var cljs$core$async$mix_$_state_machine__49647__auto____0 = (function (){
var statearr_51156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51156[(0)] = cljs$core$async$mix_$_state_machine__49647__auto__);

(statearr_51156[(1)] = (1));

return statearr_51156;
});
var cljs$core$async$mix_$_state_machine__49647__auto____1 = (function (state_51089){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_51089);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e51157){var ex__49650__auto__ = e51157;
var statearr_51158_53251 = state_51089;
(statearr_51158_53251[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_51089[(4)]))){
var statearr_51160_53252 = state_51089;
(statearr_51160_53252[(1)] = cljs.core.first((state_51089[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53254 = state_51089;
state_51089 = G__53254;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49647__auto__ = function(state_51089){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49647__auto____1.call(this,state_51089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49647__auto____0;
cljs$core$async$mix_$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49647__auto____1;
return cljs$core$async$mix_$_state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_51167 = f__49739__auto__();
(statearr_51167[(6)] = c__49738__auto___53184);

return statearr_51167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_53258 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53258(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53261 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53261(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53262 = (function() {
var G__53263 = null;
var G__53263__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53263__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53263 = function(p,v){
switch(arguments.length){
case 1:
return G__53263__1.call(this,p);
case 2:
return G__53263__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53263.cljs$core$IFn$_invoke$arity$1 = G__53263__1;
G__53263.cljs$core$IFn$_invoke$arity$2 = G__53263__2;
return G__53263;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51184 = arguments.length;
switch (G__51184) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53262(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53262(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51189 = arguments.length;
switch (G__51189) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51187_SHARP_){
if(cljs.core.truth_((p1__51187_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51187_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51187_SHARP_.call(null,topic)))){
return p1__51187_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51187_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51193 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51194){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51194 = meta51194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51195,meta51194__$1){
var self__ = this;
var _51195__$1 = this;
return (new cljs.core.async.t_cljs$core$async51193(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51194__$1));
}));

(cljs.core.async.t_cljs$core$async51193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51195){
var self__ = this;
var _51195__$1 = this;
return self__.meta51194;
}));

(cljs.core.async.t_cljs$core$async51193.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51193.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51193.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51193.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51194","meta51194",446005311,null)], null);
}));

(cljs.core.async.t_cljs$core$async51193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51193");

(cljs.core.async.t_cljs$core$async51193.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51193.
 */
cljs.core.async.__GT_t_cljs$core$async51193 = (function cljs$core$async$__GT_t_cljs$core$async51193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51194){
return (new cljs.core.async.t_cljs$core$async51193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51194));
});

}

return (new cljs.core.async.t_cljs$core$async51193(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49738__auto___53276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_51293){
var state_val_51294 = (state_51293[(1)]);
if((state_val_51294 === (7))){
var inst_51289 = (state_51293[(2)]);
var state_51293__$1 = state_51293;
var statearr_51295_53277 = state_51293__$1;
(statearr_51295_53277[(2)] = inst_51289);

(statearr_51295_53277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (20))){
var state_51293__$1 = state_51293;
var statearr_51298_53278 = state_51293__$1;
(statearr_51298_53278[(2)] = null);

(statearr_51298_53278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (1))){
var state_51293__$1 = state_51293;
var statearr_51299_53281 = state_51293__$1;
(statearr_51299_53281[(2)] = null);

(statearr_51299_53281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (24))){
var inst_51272 = (state_51293[(7)]);
var inst_51281 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51272);
var state_51293__$1 = state_51293;
var statearr_51300_53282 = state_51293__$1;
(statearr_51300_53282[(2)] = inst_51281);

(statearr_51300_53282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (4))){
var inst_51214 = (state_51293[(8)]);
var inst_51214__$1 = (state_51293[(2)]);
var inst_51215 = (inst_51214__$1 == null);
var state_51293__$1 = (function (){var statearr_51301 = state_51293;
(statearr_51301[(8)] = inst_51214__$1);

return statearr_51301;
})();
if(cljs.core.truth_(inst_51215)){
var statearr_51302_53285 = state_51293__$1;
(statearr_51302_53285[(1)] = (5));

} else {
var statearr_51303_53286 = state_51293__$1;
(statearr_51303_53286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (15))){
var inst_51266 = (state_51293[(2)]);
var state_51293__$1 = state_51293;
var statearr_51308_53287 = state_51293__$1;
(statearr_51308_53287[(2)] = inst_51266);

(statearr_51308_53287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (21))){
var inst_51286 = (state_51293[(2)]);
var state_51293__$1 = (function (){var statearr_51309 = state_51293;
(statearr_51309[(9)] = inst_51286);

return statearr_51309;
})();
var statearr_51310_53288 = state_51293__$1;
(statearr_51310_53288[(2)] = null);

(statearr_51310_53288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (13))){
var inst_51243 = (state_51293[(10)]);
var inst_51249 = cljs.core.chunked_seq_QMARK_(inst_51243);
var state_51293__$1 = state_51293;
if(inst_51249){
var statearr_51311_53289 = state_51293__$1;
(statearr_51311_53289[(1)] = (16));

} else {
var statearr_51312_53290 = state_51293__$1;
(statearr_51312_53290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (22))){
var inst_51278 = (state_51293[(2)]);
var state_51293__$1 = state_51293;
if(cljs.core.truth_(inst_51278)){
var statearr_51316_53292 = state_51293__$1;
(statearr_51316_53292[(1)] = (23));

} else {
var statearr_51317_53293 = state_51293__$1;
(statearr_51317_53293[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (6))){
var inst_51214 = (state_51293[(8)]);
var inst_51272 = (state_51293[(7)]);
var inst_51274 = (state_51293[(11)]);
var inst_51272__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51214) : topic_fn.call(null,inst_51214));
var inst_51273 = cljs.core.deref(mults);
var inst_51274__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51273,inst_51272__$1);
var state_51293__$1 = (function (){var statearr_51318 = state_51293;
(statearr_51318[(7)] = inst_51272__$1);

(statearr_51318[(11)] = inst_51274__$1);

return statearr_51318;
})();
if(cljs.core.truth_(inst_51274__$1)){
var statearr_51319_53294 = state_51293__$1;
(statearr_51319_53294[(1)] = (19));

} else {
var statearr_51320_53295 = state_51293__$1;
(statearr_51320_53295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (25))){
var inst_51283 = (state_51293[(2)]);
var state_51293__$1 = state_51293;
var statearr_51323_53298 = state_51293__$1;
(statearr_51323_53298[(2)] = inst_51283);

(statearr_51323_53298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (17))){
var inst_51243 = (state_51293[(10)]);
var inst_51257 = cljs.core.first(inst_51243);
var inst_51258 = cljs.core.async.muxch_STAR_(inst_51257);
var inst_51259 = cljs.core.async.close_BANG_(inst_51258);
var inst_51260 = cljs.core.next(inst_51243);
var inst_51224 = inst_51260;
var inst_51225 = null;
var inst_51226 = (0);
var inst_51227 = (0);
var state_51293__$1 = (function (){var statearr_51325 = state_51293;
(statearr_51325[(12)] = inst_51225);

(statearr_51325[(13)] = inst_51259);

(statearr_51325[(14)] = inst_51224);

(statearr_51325[(15)] = inst_51226);

(statearr_51325[(16)] = inst_51227);

return statearr_51325;
})();
var statearr_51326_53301 = state_51293__$1;
(statearr_51326_53301[(2)] = null);

(statearr_51326_53301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (3))){
var inst_51291 = (state_51293[(2)]);
var state_51293__$1 = state_51293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51293__$1,inst_51291);
} else {
if((state_val_51294 === (12))){
var inst_51268 = (state_51293[(2)]);
var state_51293__$1 = state_51293;
var statearr_51328_53303 = state_51293__$1;
(statearr_51328_53303[(2)] = inst_51268);

(statearr_51328_53303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (2))){
var state_51293__$1 = state_51293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51293__$1,(4),ch);
} else {
if((state_val_51294 === (23))){
var state_51293__$1 = state_51293;
var statearr_51329_53304 = state_51293__$1;
(statearr_51329_53304[(2)] = null);

(statearr_51329_53304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (19))){
var inst_51214 = (state_51293[(8)]);
var inst_51274 = (state_51293[(11)]);
var inst_51276 = cljs.core.async.muxch_STAR_(inst_51274);
var state_51293__$1 = state_51293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51293__$1,(22),inst_51276,inst_51214);
} else {
if((state_val_51294 === (11))){
var inst_51243 = (state_51293[(10)]);
var inst_51224 = (state_51293[(14)]);
var inst_51243__$1 = cljs.core.seq(inst_51224);
var state_51293__$1 = (function (){var statearr_51331 = state_51293;
(statearr_51331[(10)] = inst_51243__$1);

return statearr_51331;
})();
if(inst_51243__$1){
var statearr_51332_53309 = state_51293__$1;
(statearr_51332_53309[(1)] = (13));

} else {
var statearr_51333_53310 = state_51293__$1;
(statearr_51333_53310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (9))){
var inst_51270 = (state_51293[(2)]);
var state_51293__$1 = state_51293;
var statearr_51334_53311 = state_51293__$1;
(statearr_51334_53311[(2)] = inst_51270);

(statearr_51334_53311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (5))){
var inst_51221 = cljs.core.deref(mults);
var inst_51222 = cljs.core.vals(inst_51221);
var inst_51223 = cljs.core.seq(inst_51222);
var inst_51224 = inst_51223;
var inst_51225 = null;
var inst_51226 = (0);
var inst_51227 = (0);
var state_51293__$1 = (function (){var statearr_51335 = state_51293;
(statearr_51335[(12)] = inst_51225);

(statearr_51335[(14)] = inst_51224);

(statearr_51335[(15)] = inst_51226);

(statearr_51335[(16)] = inst_51227);

return statearr_51335;
})();
var statearr_51336_53313 = state_51293__$1;
(statearr_51336_53313[(2)] = null);

(statearr_51336_53313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (14))){
var state_51293__$1 = state_51293;
var statearr_51340_53316 = state_51293__$1;
(statearr_51340_53316[(2)] = null);

(statearr_51340_53316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (16))){
var inst_51243 = (state_51293[(10)]);
var inst_51251 = cljs.core.chunk_first(inst_51243);
var inst_51252 = cljs.core.chunk_rest(inst_51243);
var inst_51253 = cljs.core.count(inst_51251);
var inst_51224 = inst_51252;
var inst_51225 = inst_51251;
var inst_51226 = inst_51253;
var inst_51227 = (0);
var state_51293__$1 = (function (){var statearr_51341 = state_51293;
(statearr_51341[(12)] = inst_51225);

(statearr_51341[(14)] = inst_51224);

(statearr_51341[(15)] = inst_51226);

(statearr_51341[(16)] = inst_51227);

return statearr_51341;
})();
var statearr_51342_53319 = state_51293__$1;
(statearr_51342_53319[(2)] = null);

(statearr_51342_53319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (10))){
var inst_51225 = (state_51293[(12)]);
var inst_51224 = (state_51293[(14)]);
var inst_51226 = (state_51293[(15)]);
var inst_51227 = (state_51293[(16)]);
var inst_51233 = cljs.core._nth(inst_51225,inst_51227);
var inst_51234 = cljs.core.async.muxch_STAR_(inst_51233);
var inst_51235 = cljs.core.async.close_BANG_(inst_51234);
var inst_51236 = (inst_51227 + (1));
var tmp51337 = inst_51225;
var tmp51338 = inst_51224;
var tmp51339 = inst_51226;
var inst_51224__$1 = tmp51338;
var inst_51225__$1 = tmp51337;
var inst_51226__$1 = tmp51339;
var inst_51227__$1 = inst_51236;
var state_51293__$1 = (function (){var statearr_51343 = state_51293;
(statearr_51343[(17)] = inst_51235);

(statearr_51343[(12)] = inst_51225__$1);

(statearr_51343[(14)] = inst_51224__$1);

(statearr_51343[(15)] = inst_51226__$1);

(statearr_51343[(16)] = inst_51227__$1);

return statearr_51343;
})();
var statearr_51344_53320 = state_51293__$1;
(statearr_51344_53320[(2)] = null);

(statearr_51344_53320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (18))){
var inst_51263 = (state_51293[(2)]);
var state_51293__$1 = state_51293;
var statearr_51345_53322 = state_51293__$1;
(statearr_51345_53322[(2)] = inst_51263);

(statearr_51345_53322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51294 === (8))){
var inst_51226 = (state_51293[(15)]);
var inst_51227 = (state_51293[(16)]);
var inst_51230 = (inst_51227 < inst_51226);
var inst_51231 = inst_51230;
var state_51293__$1 = state_51293;
if(cljs.core.truth_(inst_51231)){
var statearr_51346_53323 = state_51293__$1;
(statearr_51346_53323[(1)] = (10));

} else {
var statearr_51350_53324 = state_51293__$1;
(statearr_51350_53324[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_51352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51352[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_51352[(1)] = (1));

return statearr_51352;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_51293){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_51293);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e51355){var ex__49650__auto__ = e51355;
var statearr_51356_53329 = state_51293;
(statearr_51356_53329[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_51293[(4)]))){
var statearr_51357_53330 = state_51293;
(statearr_51357_53330[(1)] = cljs.core.first((state_51293[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53331 = state_51293;
state_51293 = G__53331;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_51293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_51293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_51358 = f__49739__auto__();
(statearr_51358[(6)] = c__49738__auto___53276);

return statearr_51358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51360 = arguments.length;
switch (G__51360) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51370 = arguments.length;
switch (G__51370) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51380 = arguments.length;
switch (G__51380) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__49738__auto___53340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_51450){
var state_val_51451 = (state_51450[(1)]);
if((state_val_51451 === (7))){
var state_51450__$1 = state_51450;
var statearr_51454_53342 = state_51450__$1;
(statearr_51454_53342[(2)] = null);

(statearr_51454_53342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (1))){
var state_51450__$1 = state_51450;
var statearr_51457_53343 = state_51450__$1;
(statearr_51457_53343[(2)] = null);

(statearr_51457_53343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (4))){
var inst_51399 = (state_51450[(7)]);
var inst_51401 = (state_51450[(8)]);
var inst_51404 = (inst_51401 < inst_51399);
var state_51450__$1 = state_51450;
if(cljs.core.truth_(inst_51404)){
var statearr_51461_53344 = state_51450__$1;
(statearr_51461_53344[(1)] = (6));

} else {
var statearr_51462_53345 = state_51450__$1;
(statearr_51462_53345[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (15))){
var inst_51436 = (state_51450[(9)]);
var inst_51441 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51436);
var state_51450__$1 = state_51450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51450__$1,(17),out,inst_51441);
} else {
if((state_val_51451 === (13))){
var inst_51436 = (state_51450[(9)]);
var inst_51436__$1 = (state_51450[(2)]);
var inst_51437 = cljs.core.some(cljs.core.nil_QMARK_,inst_51436__$1);
var state_51450__$1 = (function (){var statearr_51465 = state_51450;
(statearr_51465[(9)] = inst_51436__$1);

return statearr_51465;
})();
if(cljs.core.truth_(inst_51437)){
var statearr_51466_53348 = state_51450__$1;
(statearr_51466_53348[(1)] = (14));

} else {
var statearr_51467_53349 = state_51450__$1;
(statearr_51467_53349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (6))){
var state_51450__$1 = state_51450;
var statearr_51468_53350 = state_51450__$1;
(statearr_51468_53350[(2)] = null);

(statearr_51468_53350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (17))){
var inst_51443 = (state_51450[(2)]);
var state_51450__$1 = (function (){var statearr_51474 = state_51450;
(statearr_51474[(10)] = inst_51443);

return statearr_51474;
})();
var statearr_51475_53353 = state_51450__$1;
(statearr_51475_53353[(2)] = null);

(statearr_51475_53353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (3))){
var inst_51448 = (state_51450[(2)]);
var state_51450__$1 = state_51450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51450__$1,inst_51448);
} else {
if((state_val_51451 === (12))){
var _ = (function (){var statearr_51477 = state_51450;
(statearr_51477[(4)] = cljs.core.rest((state_51450[(4)])));

return statearr_51477;
})();
var state_51450__$1 = state_51450;
var ex51473 = (state_51450__$1[(2)]);
var statearr_51478_53354 = state_51450__$1;
(statearr_51478_53354[(5)] = ex51473);


if((ex51473 instanceof Object)){
var statearr_51482_53355 = state_51450__$1;
(statearr_51482_53355[(1)] = (11));

(statearr_51482_53355[(5)] = null);

} else {
throw ex51473;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (2))){
var inst_51398 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51399 = cnt;
var inst_51401 = (0);
var state_51450__$1 = (function (){var statearr_51486 = state_51450;
(statearr_51486[(7)] = inst_51399);

(statearr_51486[(11)] = inst_51398);

(statearr_51486[(8)] = inst_51401);

return statearr_51486;
})();
var statearr_51488_53357 = state_51450__$1;
(statearr_51488_53357[(2)] = null);

(statearr_51488_53357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (11))){
var inst_51414 = (state_51450[(2)]);
var inst_51415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51450__$1 = (function (){var statearr_51489 = state_51450;
(statearr_51489[(12)] = inst_51414);

return statearr_51489;
})();
var statearr_51490_53358 = state_51450__$1;
(statearr_51490_53358[(2)] = inst_51415);

(statearr_51490_53358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (9))){
var inst_51401 = (state_51450[(8)]);
var _ = (function (){var statearr_51493 = state_51450;
(statearr_51493[(4)] = cljs.core.cons((12),(state_51450[(4)])));

return statearr_51493;
})();
var inst_51421 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51401) : chs__$1.call(null,inst_51401));
var inst_51422 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51401) : done.call(null,inst_51401));
var inst_51423 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51421,inst_51422);
var ___$1 = (function (){var statearr_51496 = state_51450;
(statearr_51496[(4)] = cljs.core.rest((state_51450[(4)])));

return statearr_51496;
})();
var state_51450__$1 = state_51450;
var statearr_51497_53361 = state_51450__$1;
(statearr_51497_53361[(2)] = inst_51423);

(statearr_51497_53361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (5))){
var inst_51434 = (state_51450[(2)]);
var state_51450__$1 = (function (){var statearr_51498 = state_51450;
(statearr_51498[(13)] = inst_51434);

return statearr_51498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51450__$1,(13),dchan);
} else {
if((state_val_51451 === (14))){
var inst_51439 = cljs.core.async.close_BANG_(out);
var state_51450__$1 = state_51450;
var statearr_51500_53364 = state_51450__$1;
(statearr_51500_53364[(2)] = inst_51439);

(statearr_51500_53364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (16))){
var inst_51446 = (state_51450[(2)]);
var state_51450__$1 = state_51450;
var statearr_51501_53365 = state_51450__$1;
(statearr_51501_53365[(2)] = inst_51446);

(statearr_51501_53365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (10))){
var inst_51401 = (state_51450[(8)]);
var inst_51426 = (state_51450[(2)]);
var inst_51428 = (inst_51401 + (1));
var inst_51401__$1 = inst_51428;
var state_51450__$1 = (function (){var statearr_51502 = state_51450;
(statearr_51502[(14)] = inst_51426);

(statearr_51502[(8)] = inst_51401__$1);

return statearr_51502;
})();
var statearr_51503_53367 = state_51450__$1;
(statearr_51503_53367[(2)] = null);

(statearr_51503_53367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51451 === (8))){
var inst_51432 = (state_51450[(2)]);
var state_51450__$1 = state_51450;
var statearr_51504_53368 = state_51450__$1;
(statearr_51504_53368[(2)] = inst_51432);

(statearr_51504_53368[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_51506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51506[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_51506[(1)] = (1));

return statearr_51506;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_51450){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_51450);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e51508){var ex__49650__auto__ = e51508;
var statearr_51510_53369 = state_51450;
(statearr_51510_53369[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_51450[(4)]))){
var statearr_51518_53370 = state_51450;
(statearr_51518_53370[(1)] = cljs.core.first((state_51450[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53372 = state_51450;
state_51450 = G__53372;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_51450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_51450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_51522 = f__49739__auto__();
(statearr_51522[(6)] = c__49738__auto___53340);

return statearr_51522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51528 = arguments.length;
switch (G__51528) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49738__auto___53377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_51565){
var state_val_51566 = (state_51565[(1)]);
if((state_val_51566 === (7))){
var inst_51544 = (state_51565[(7)]);
var inst_51542 = (state_51565[(8)]);
var inst_51542__$1 = (state_51565[(2)]);
var inst_51544__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51542__$1,(0),null);
var inst_51545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51542__$1,(1),null);
var inst_51546 = (inst_51544__$1 == null);
var state_51565__$1 = (function (){var statearr_51568 = state_51565;
(statearr_51568[(7)] = inst_51544__$1);

(statearr_51568[(8)] = inst_51542__$1);

(statearr_51568[(9)] = inst_51545);

return statearr_51568;
})();
if(cljs.core.truth_(inst_51546)){
var statearr_51569_53379 = state_51565__$1;
(statearr_51569_53379[(1)] = (8));

} else {
var statearr_51571_53380 = state_51565__$1;
(statearr_51571_53380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51566 === (1))){
var inst_51532 = cljs.core.vec(chs);
var inst_51533 = inst_51532;
var state_51565__$1 = (function (){var statearr_51573 = state_51565;
(statearr_51573[(10)] = inst_51533);

return statearr_51573;
})();
var statearr_51574_53383 = state_51565__$1;
(statearr_51574_53383[(2)] = null);

(statearr_51574_53383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51566 === (4))){
var inst_51533 = (state_51565[(10)]);
var state_51565__$1 = state_51565;
return cljs.core.async.ioc_alts_BANG_(state_51565__$1,(7),inst_51533);
} else {
if((state_val_51566 === (6))){
var inst_51561 = (state_51565[(2)]);
var state_51565__$1 = state_51565;
var statearr_51577_53386 = state_51565__$1;
(statearr_51577_53386[(2)] = inst_51561);

(statearr_51577_53386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51566 === (3))){
var inst_51563 = (state_51565[(2)]);
var state_51565__$1 = state_51565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51565__$1,inst_51563);
} else {
if((state_val_51566 === (2))){
var inst_51533 = (state_51565[(10)]);
var inst_51535 = cljs.core.count(inst_51533);
var inst_51536 = (inst_51535 > (0));
var state_51565__$1 = state_51565;
if(cljs.core.truth_(inst_51536)){
var statearr_51580_53388 = state_51565__$1;
(statearr_51580_53388[(1)] = (4));

} else {
var statearr_51581_53389 = state_51565__$1;
(statearr_51581_53389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51566 === (11))){
var inst_51533 = (state_51565[(10)]);
var inst_51553 = (state_51565[(2)]);
var tmp51579 = inst_51533;
var inst_51533__$1 = tmp51579;
var state_51565__$1 = (function (){var statearr_51583 = state_51565;
(statearr_51583[(11)] = inst_51553);

(statearr_51583[(10)] = inst_51533__$1);

return statearr_51583;
})();
var statearr_51584_53392 = state_51565__$1;
(statearr_51584_53392[(2)] = null);

(statearr_51584_53392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51566 === (9))){
var inst_51544 = (state_51565[(7)]);
var state_51565__$1 = state_51565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51565__$1,(11),out,inst_51544);
} else {
if((state_val_51566 === (5))){
var inst_51559 = cljs.core.async.close_BANG_(out);
var state_51565__$1 = state_51565;
var statearr_51590_53395 = state_51565__$1;
(statearr_51590_53395[(2)] = inst_51559);

(statearr_51590_53395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51566 === (10))){
var inst_51556 = (state_51565[(2)]);
var state_51565__$1 = state_51565;
var statearr_51592_53396 = state_51565__$1;
(statearr_51592_53396[(2)] = inst_51556);

(statearr_51592_53396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51566 === (8))){
var inst_51544 = (state_51565[(7)]);
var inst_51533 = (state_51565[(10)]);
var inst_51542 = (state_51565[(8)]);
var inst_51545 = (state_51565[(9)]);
var inst_51548 = (function (){var cs = inst_51533;
var vec__51538 = inst_51542;
var v = inst_51544;
var c = inst_51545;
return (function (p1__51526_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51526_SHARP_);
});
})();
var inst_51549 = cljs.core.filterv(inst_51548,inst_51533);
var inst_51533__$1 = inst_51549;
var state_51565__$1 = (function (){var statearr_51597 = state_51565;
(statearr_51597[(10)] = inst_51533__$1);

return statearr_51597;
})();
var statearr_51598_53397 = state_51565__$1;
(statearr_51598_53397[(2)] = null);

(statearr_51598_53397[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_51600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51600[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_51600[(1)] = (1));

return statearr_51600;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_51565){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_51565);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e51601){var ex__49650__auto__ = e51601;
var statearr_51602_53399 = state_51565;
(statearr_51602_53399[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_51565[(4)]))){
var statearr_51604_53400 = state_51565;
(statearr_51604_53400[(1)] = cljs.core.first((state_51565[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53401 = state_51565;
state_51565 = G__53401;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_51565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_51565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_51607 = f__49739__auto__();
(statearr_51607[(6)] = c__49738__auto___53377);

return statearr_51607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51615 = arguments.length;
switch (G__51615) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49738__auto___53407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_51646){
var state_val_51647 = (state_51646[(1)]);
if((state_val_51647 === (7))){
var inst_51627 = (state_51646[(7)]);
var inst_51627__$1 = (state_51646[(2)]);
var inst_51629 = (inst_51627__$1 == null);
var inst_51630 = cljs.core.not(inst_51629);
var state_51646__$1 = (function (){var statearr_51651 = state_51646;
(statearr_51651[(7)] = inst_51627__$1);

return statearr_51651;
})();
if(inst_51630){
var statearr_51653_53409 = state_51646__$1;
(statearr_51653_53409[(1)] = (8));

} else {
var statearr_51654_53410 = state_51646__$1;
(statearr_51654_53410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (1))){
var inst_51622 = (0);
var state_51646__$1 = (function (){var statearr_51655 = state_51646;
(statearr_51655[(8)] = inst_51622);

return statearr_51655;
})();
var statearr_51657_53412 = state_51646__$1;
(statearr_51657_53412[(2)] = null);

(statearr_51657_53412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (4))){
var state_51646__$1 = state_51646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51646__$1,(7),ch);
} else {
if((state_val_51647 === (6))){
var inst_51641 = (state_51646[(2)]);
var state_51646__$1 = state_51646;
var statearr_51660_53416 = state_51646__$1;
(statearr_51660_53416[(2)] = inst_51641);

(statearr_51660_53416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (3))){
var inst_51643 = (state_51646[(2)]);
var inst_51644 = cljs.core.async.close_BANG_(out);
var state_51646__$1 = (function (){var statearr_51662 = state_51646;
(statearr_51662[(9)] = inst_51643);

return statearr_51662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51646__$1,inst_51644);
} else {
if((state_val_51647 === (2))){
var inst_51622 = (state_51646[(8)]);
var inst_51624 = (inst_51622 < n);
var state_51646__$1 = state_51646;
if(cljs.core.truth_(inst_51624)){
var statearr_51663_53417 = state_51646__$1;
(statearr_51663_53417[(1)] = (4));

} else {
var statearr_51668_53418 = state_51646__$1;
(statearr_51668_53418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (11))){
var inst_51622 = (state_51646[(8)]);
var inst_51633 = (state_51646[(2)]);
var inst_51634 = (inst_51622 + (1));
var inst_51622__$1 = inst_51634;
var state_51646__$1 = (function (){var statearr_51674 = state_51646;
(statearr_51674[(8)] = inst_51622__$1);

(statearr_51674[(10)] = inst_51633);

return statearr_51674;
})();
var statearr_51676_53420 = state_51646__$1;
(statearr_51676_53420[(2)] = null);

(statearr_51676_53420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (9))){
var state_51646__$1 = state_51646;
var statearr_51682_53421 = state_51646__$1;
(statearr_51682_53421[(2)] = null);

(statearr_51682_53421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (5))){
var state_51646__$1 = state_51646;
var statearr_51687_53422 = state_51646__$1;
(statearr_51687_53422[(2)] = null);

(statearr_51687_53422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (10))){
var inst_51638 = (state_51646[(2)]);
var state_51646__$1 = state_51646;
var statearr_51689_53423 = state_51646__$1;
(statearr_51689_53423[(2)] = inst_51638);

(statearr_51689_53423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (8))){
var inst_51627 = (state_51646[(7)]);
var state_51646__$1 = state_51646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51646__$1,(11),out,inst_51627);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_51694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51694[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_51694[(1)] = (1));

return statearr_51694;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_51646){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_51646);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e51698){var ex__49650__auto__ = e51698;
var statearr_51700_53426 = state_51646;
(statearr_51700_53426[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_51646[(4)]))){
var statearr_51705_53427 = state_51646;
(statearr_51705_53427[(1)] = cljs.core.first((state_51646[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53430 = state_51646;
state_51646 = G__53430;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_51646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_51646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_51712 = f__49739__auto__();
(statearr_51712[(6)] = c__49738__auto___53407);

return statearr_51712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51719 = (function (f,ch,meta51720){
this.f = f;
this.ch = ch;
this.meta51720 = meta51720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51721,meta51720__$1){
var self__ = this;
var _51721__$1 = this;
return (new cljs.core.async.t_cljs$core$async51719(self__.f,self__.ch,meta51720__$1));
}));

(cljs.core.async.t_cljs$core$async51719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51721){
var self__ = this;
var _51721__$1 = this;
return self__.meta51720;
}));

(cljs.core.async.t_cljs$core$async51719.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51719.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51733 = (function (f,ch,meta51720,_,fn1,meta51734){
this.f = f;
this.ch = ch;
this.meta51720 = meta51720;
this._ = _;
this.fn1 = fn1;
this.meta51734 = meta51734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51735,meta51734__$1){
var self__ = this;
var _51735__$1 = this;
return (new cljs.core.async.t_cljs$core$async51733(self__.f,self__.ch,self__.meta51720,self__._,self__.fn1,meta51734__$1));
}));

(cljs.core.async.t_cljs$core$async51733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51735){
var self__ = this;
var _51735__$1 = this;
return self__.meta51734;
}));

(cljs.core.async.t_cljs$core$async51733.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51733.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51715_SHARP_){
var G__51740 = (((p1__51715_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51715_SHARP_) : self__.f.call(null,p1__51715_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51740) : f1.call(null,G__51740));
});
}));

(cljs.core.async.t_cljs$core$async51733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51720","meta51720",-362866721,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51719","cljs.core.async/t_cljs$core$async51719",365878354,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51734","meta51734",1551655292,null)], null);
}));

(cljs.core.async.t_cljs$core$async51733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51733");

(cljs.core.async.t_cljs$core$async51733.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51733.
 */
cljs.core.async.__GT_t_cljs$core$async51733 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51733(f__$1,ch__$1,meta51720__$1,___$2,fn1__$1,meta51734){
return (new cljs.core.async.t_cljs$core$async51733(f__$1,ch__$1,meta51720__$1,___$2,fn1__$1,meta51734));
});

}

return (new cljs.core.async.t_cljs$core$async51733(self__.f,self__.ch,self__.meta51720,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51749 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51749) : self__.f.call(null,G__51749));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51719.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51720","meta51720",-362866721,null)], null);
}));

(cljs.core.async.t_cljs$core$async51719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51719");

(cljs.core.async.t_cljs$core$async51719.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51719.
 */
cljs.core.async.__GT_t_cljs$core$async51719 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51719(f__$1,ch__$1,meta51720){
return (new cljs.core.async.t_cljs$core$async51719(f__$1,ch__$1,meta51720));
});

}

return (new cljs.core.async.t_cljs$core$async51719(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51765 = (function (f,ch,meta51766){
this.f = f;
this.ch = ch;
this.meta51766 = meta51766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51767,meta51766__$1){
var self__ = this;
var _51767__$1 = this;
return (new cljs.core.async.t_cljs$core$async51765(self__.f,self__.ch,meta51766__$1));
}));

(cljs.core.async.t_cljs$core$async51765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51767){
var self__ = this;
var _51767__$1 = this;
return self__.meta51766;
}));

(cljs.core.async.t_cljs$core$async51765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51766","meta51766",-233048171,null)], null);
}));

(cljs.core.async.t_cljs$core$async51765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51765");

(cljs.core.async.t_cljs$core$async51765.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51765.
 */
cljs.core.async.__GT_t_cljs$core$async51765 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51765(f__$1,ch__$1,meta51766){
return (new cljs.core.async.t_cljs$core$async51765(f__$1,ch__$1,meta51766));
});

}

return (new cljs.core.async.t_cljs$core$async51765(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51789 = (function (p,ch,meta51790){
this.p = p;
this.ch = ch;
this.meta51790 = meta51790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51791,meta51790__$1){
var self__ = this;
var _51791__$1 = this;
return (new cljs.core.async.t_cljs$core$async51789(self__.p,self__.ch,meta51790__$1));
}));

(cljs.core.async.t_cljs$core$async51789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51791){
var self__ = this;
var _51791__$1 = this;
return self__.meta51790;
}));

(cljs.core.async.t_cljs$core$async51789.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51789.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51789.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51789.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51789.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51789.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51789.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51790","meta51790",64614857,null)], null);
}));

(cljs.core.async.t_cljs$core$async51789.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51789");

(cljs.core.async.t_cljs$core$async51789.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51789");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51789.
 */
cljs.core.async.__GT_t_cljs$core$async51789 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51789(p__$1,ch__$1,meta51790){
return (new cljs.core.async.t_cljs$core$async51789(p__$1,ch__$1,meta51790));
});

}

return (new cljs.core.async.t_cljs$core$async51789(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51804 = arguments.length;
switch (G__51804) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49738__auto___53451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_51838){
var state_val_51839 = (state_51838[(1)]);
if((state_val_51839 === (7))){
var inst_51832 = (state_51838[(2)]);
var state_51838__$1 = state_51838;
var statearr_51849_53454 = state_51838__$1;
(statearr_51849_53454[(2)] = inst_51832);

(statearr_51849_53454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (1))){
var state_51838__$1 = state_51838;
var statearr_51851_53456 = state_51838__$1;
(statearr_51851_53456[(2)] = null);

(statearr_51851_53456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (4))){
var inst_51816 = (state_51838[(7)]);
var inst_51816__$1 = (state_51838[(2)]);
var inst_51818 = (inst_51816__$1 == null);
var state_51838__$1 = (function (){var statearr_51852 = state_51838;
(statearr_51852[(7)] = inst_51816__$1);

return statearr_51852;
})();
if(cljs.core.truth_(inst_51818)){
var statearr_51854_53457 = state_51838__$1;
(statearr_51854_53457[(1)] = (5));

} else {
var statearr_51855_53458 = state_51838__$1;
(statearr_51855_53458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (6))){
var inst_51816 = (state_51838[(7)]);
var inst_51823 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51816) : p.call(null,inst_51816));
var state_51838__$1 = state_51838;
if(cljs.core.truth_(inst_51823)){
var statearr_51856_53460 = state_51838__$1;
(statearr_51856_53460[(1)] = (8));

} else {
var statearr_51858_53461 = state_51838__$1;
(statearr_51858_53461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (3))){
var inst_51834 = (state_51838[(2)]);
var state_51838__$1 = state_51838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51838__$1,inst_51834);
} else {
if((state_val_51839 === (2))){
var state_51838__$1 = state_51838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51838__$1,(4),ch);
} else {
if((state_val_51839 === (11))){
var inst_51826 = (state_51838[(2)]);
var state_51838__$1 = state_51838;
var statearr_51859_53462 = state_51838__$1;
(statearr_51859_53462[(2)] = inst_51826);

(statearr_51859_53462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (9))){
var state_51838__$1 = state_51838;
var statearr_51860_53466 = state_51838__$1;
(statearr_51860_53466[(2)] = null);

(statearr_51860_53466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (5))){
var inst_51820 = cljs.core.async.close_BANG_(out);
var state_51838__$1 = state_51838;
var statearr_51865_53468 = state_51838__$1;
(statearr_51865_53468[(2)] = inst_51820);

(statearr_51865_53468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (10))){
var inst_51829 = (state_51838[(2)]);
var state_51838__$1 = (function (){var statearr_51867 = state_51838;
(statearr_51867[(8)] = inst_51829);

return statearr_51867;
})();
var statearr_51868_53469 = state_51838__$1;
(statearr_51868_53469[(2)] = null);

(statearr_51868_53469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (8))){
var inst_51816 = (state_51838[(7)]);
var state_51838__$1 = state_51838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51838__$1,(11),out,inst_51816);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_51871 = [null,null,null,null,null,null,null,null,null];
(statearr_51871[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_51871[(1)] = (1));

return statearr_51871;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_51838){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_51838);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e51873){var ex__49650__auto__ = e51873;
var statearr_51874_53473 = state_51838;
(statearr_51874_53473[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_51838[(4)]))){
var statearr_51876_53474 = state_51838;
(statearr_51876_53474[(1)] = cljs.core.first((state_51838[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53477 = state_51838;
state_51838 = G__53477;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_51838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_51838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_51878 = f__49739__auto__();
(statearr_51878[(6)] = c__49738__auto___53451);

return statearr_51878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51885 = arguments.length;
switch (G__51885) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49738__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_51973){
var state_val_51974 = (state_51973[(1)]);
if((state_val_51974 === (7))){
var inst_51969 = (state_51973[(2)]);
var state_51973__$1 = state_51973;
var statearr_51979_53481 = state_51973__$1;
(statearr_51979_53481[(2)] = inst_51969);

(statearr_51979_53481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (20))){
var inst_51935 = (state_51973[(7)]);
var inst_51950 = (state_51973[(2)]);
var inst_51951 = cljs.core.next(inst_51935);
var inst_51918 = inst_51951;
var inst_51919 = null;
var inst_51920 = (0);
var inst_51921 = (0);
var state_51973__$1 = (function (){var statearr_51980 = state_51973;
(statearr_51980[(8)] = inst_51919);

(statearr_51980[(9)] = inst_51950);

(statearr_51980[(10)] = inst_51921);

(statearr_51980[(11)] = inst_51920);

(statearr_51980[(12)] = inst_51918);

return statearr_51980;
})();
var statearr_51985_53485 = state_51973__$1;
(statearr_51985_53485[(2)] = null);

(statearr_51985_53485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (1))){
var state_51973__$1 = state_51973;
var statearr_51991_53486 = state_51973__$1;
(statearr_51991_53486[(2)] = null);

(statearr_51991_53486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (4))){
var inst_51904 = (state_51973[(13)]);
var inst_51904__$1 = (state_51973[(2)]);
var inst_51905 = (inst_51904__$1 == null);
var state_51973__$1 = (function (){var statearr_51992 = state_51973;
(statearr_51992[(13)] = inst_51904__$1);

return statearr_51992;
})();
if(cljs.core.truth_(inst_51905)){
var statearr_51994_53487 = state_51973__$1;
(statearr_51994_53487[(1)] = (5));

} else {
var statearr_51995_53488 = state_51973__$1;
(statearr_51995_53488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (15))){
var state_51973__$1 = state_51973;
var statearr_52000_53490 = state_51973__$1;
(statearr_52000_53490[(2)] = null);

(statearr_52000_53490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (21))){
var state_51973__$1 = state_51973;
var statearr_52003_53491 = state_51973__$1;
(statearr_52003_53491[(2)] = null);

(statearr_52003_53491[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (13))){
var inst_51919 = (state_51973[(8)]);
var inst_51921 = (state_51973[(10)]);
var inst_51920 = (state_51973[(11)]);
var inst_51918 = (state_51973[(12)]);
var inst_51931 = (state_51973[(2)]);
var inst_51932 = (inst_51921 + (1));
var tmp51996 = inst_51919;
var tmp51997 = inst_51920;
var tmp51998 = inst_51918;
var inst_51918__$1 = tmp51998;
var inst_51919__$1 = tmp51996;
var inst_51920__$1 = tmp51997;
var inst_51921__$1 = inst_51932;
var state_51973__$1 = (function (){var statearr_52008 = state_51973;
(statearr_52008[(8)] = inst_51919__$1);

(statearr_52008[(14)] = inst_51931);

(statearr_52008[(10)] = inst_51921__$1);

(statearr_52008[(11)] = inst_51920__$1);

(statearr_52008[(12)] = inst_51918__$1);

return statearr_52008;
})();
var statearr_52011_53496 = state_51973__$1;
(statearr_52011_53496[(2)] = null);

(statearr_52011_53496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (22))){
var state_51973__$1 = state_51973;
var statearr_52013_53497 = state_51973__$1;
(statearr_52013_53497[(2)] = null);

(statearr_52013_53497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (6))){
var inst_51904 = (state_51973[(13)]);
var inst_51916 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51904) : f.call(null,inst_51904));
var inst_51917 = cljs.core.seq(inst_51916);
var inst_51918 = inst_51917;
var inst_51919 = null;
var inst_51920 = (0);
var inst_51921 = (0);
var state_51973__$1 = (function (){var statearr_52018 = state_51973;
(statearr_52018[(8)] = inst_51919);

(statearr_52018[(10)] = inst_51921);

(statearr_52018[(11)] = inst_51920);

(statearr_52018[(12)] = inst_51918);

return statearr_52018;
})();
var statearr_52019_53499 = state_51973__$1;
(statearr_52019_53499[(2)] = null);

(statearr_52019_53499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (17))){
var inst_51935 = (state_51973[(7)]);
var inst_51943 = cljs.core.chunk_first(inst_51935);
var inst_51944 = cljs.core.chunk_rest(inst_51935);
var inst_51945 = cljs.core.count(inst_51943);
var inst_51918 = inst_51944;
var inst_51919 = inst_51943;
var inst_51920 = inst_51945;
var inst_51921 = (0);
var state_51973__$1 = (function (){var statearr_52027 = state_51973;
(statearr_52027[(8)] = inst_51919);

(statearr_52027[(10)] = inst_51921);

(statearr_52027[(11)] = inst_51920);

(statearr_52027[(12)] = inst_51918);

return statearr_52027;
})();
var statearr_52028_53502 = state_51973__$1;
(statearr_52028_53502[(2)] = null);

(statearr_52028_53502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (3))){
var inst_51971 = (state_51973[(2)]);
var state_51973__$1 = state_51973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51973__$1,inst_51971);
} else {
if((state_val_51974 === (12))){
var inst_51959 = (state_51973[(2)]);
var state_51973__$1 = state_51973;
var statearr_52030_53505 = state_51973__$1;
(statearr_52030_53505[(2)] = inst_51959);

(statearr_52030_53505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (2))){
var state_51973__$1 = state_51973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51973__$1,(4),in$);
} else {
if((state_val_51974 === (23))){
var inst_51967 = (state_51973[(2)]);
var state_51973__$1 = state_51973;
var statearr_52034_53506 = state_51973__$1;
(statearr_52034_53506[(2)] = inst_51967);

(statearr_52034_53506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (19))){
var inst_51954 = (state_51973[(2)]);
var state_51973__$1 = state_51973;
var statearr_52035_53507 = state_51973__$1;
(statearr_52035_53507[(2)] = inst_51954);

(statearr_52035_53507[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (11))){
var inst_51935 = (state_51973[(7)]);
var inst_51918 = (state_51973[(12)]);
var inst_51935__$1 = cljs.core.seq(inst_51918);
var state_51973__$1 = (function (){var statearr_52036 = state_51973;
(statearr_52036[(7)] = inst_51935__$1);

return statearr_52036;
})();
if(inst_51935__$1){
var statearr_52037_53512 = state_51973__$1;
(statearr_52037_53512[(1)] = (14));

} else {
var statearr_52038_53513 = state_51973__$1;
(statearr_52038_53513[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (9))){
var inst_51961 = (state_51973[(2)]);
var inst_51962 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51973__$1 = (function (){var statearr_52039 = state_51973;
(statearr_52039[(15)] = inst_51961);

return statearr_52039;
})();
if(cljs.core.truth_(inst_51962)){
var statearr_52040_53515 = state_51973__$1;
(statearr_52040_53515[(1)] = (21));

} else {
var statearr_52041_53516 = state_51973__$1;
(statearr_52041_53516[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (5))){
var inst_51910 = cljs.core.async.close_BANG_(out);
var state_51973__$1 = state_51973;
var statearr_52042_53517 = state_51973__$1;
(statearr_52042_53517[(2)] = inst_51910);

(statearr_52042_53517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (14))){
var inst_51935 = (state_51973[(7)]);
var inst_51938 = cljs.core.chunked_seq_QMARK_(inst_51935);
var state_51973__$1 = state_51973;
if(inst_51938){
var statearr_52044_53518 = state_51973__$1;
(statearr_52044_53518[(1)] = (17));

} else {
var statearr_52045_53519 = state_51973__$1;
(statearr_52045_53519[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (16))){
var inst_51957 = (state_51973[(2)]);
var state_51973__$1 = state_51973;
var statearr_52046_53520 = state_51973__$1;
(statearr_52046_53520[(2)] = inst_51957);

(statearr_52046_53520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51974 === (10))){
var inst_51919 = (state_51973[(8)]);
var inst_51921 = (state_51973[(10)]);
var inst_51929 = cljs.core._nth(inst_51919,inst_51921);
var state_51973__$1 = state_51973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51973__$1,(13),out,inst_51929);
} else {
if((state_val_51974 === (18))){
var inst_51935 = (state_51973[(7)]);
var inst_51948 = cljs.core.first(inst_51935);
var state_51973__$1 = state_51973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51973__$1,(20),out,inst_51948);
} else {
if((state_val_51974 === (8))){
var inst_51921 = (state_51973[(10)]);
var inst_51920 = (state_51973[(11)]);
var inst_51926 = (inst_51921 < inst_51920);
var inst_51927 = inst_51926;
var state_51973__$1 = state_51973;
if(cljs.core.truth_(inst_51927)){
var statearr_52049_53521 = state_51973__$1;
(statearr_52049_53521[(1)] = (10));

} else {
var statearr_52050_53522 = state_51973__$1;
(statearr_52050_53522[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49647__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49647__auto____0 = (function (){
var statearr_52059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52059[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49647__auto__);

(statearr_52059[(1)] = (1));

return statearr_52059;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49647__auto____1 = (function (state_51973){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_51973);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e52061){var ex__49650__auto__ = e52061;
var statearr_52063_53523 = state_51973;
(statearr_52063_53523[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_51973[(4)]))){
var statearr_52065_53524 = state_51973;
(statearr_52065_53524[(1)] = cljs.core.first((state_51973[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53525 = state_51973;
state_51973 = G__53525;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49647__auto__ = function(state_51973){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49647__auto____1.call(this,state_51973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49647__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49647__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_52066 = f__49739__auto__();
(statearr_52066[(6)] = c__49738__auto__);

return statearr_52066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));

return c__49738__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52076 = arguments.length;
switch (G__52076) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52099 = arguments.length;
switch (G__52099) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52115 = arguments.length;
switch (G__52115) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49738__auto___53536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_52150){
var state_val_52151 = (state_52150[(1)]);
if((state_val_52151 === (7))){
var inst_52143 = (state_52150[(2)]);
var state_52150__$1 = state_52150;
var statearr_52157_53538 = state_52150__$1;
(statearr_52157_53538[(2)] = inst_52143);

(statearr_52157_53538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52151 === (1))){
var inst_52120 = null;
var state_52150__$1 = (function (){var statearr_52158 = state_52150;
(statearr_52158[(7)] = inst_52120);

return statearr_52158;
})();
var statearr_52160_53539 = state_52150__$1;
(statearr_52160_53539[(2)] = null);

(statearr_52160_53539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52151 === (4))){
var inst_52127 = (state_52150[(8)]);
var inst_52127__$1 = (state_52150[(2)]);
var inst_52128 = (inst_52127__$1 == null);
var inst_52129 = cljs.core.not(inst_52128);
var state_52150__$1 = (function (){var statearr_52169 = state_52150;
(statearr_52169[(8)] = inst_52127__$1);

return statearr_52169;
})();
if(inst_52129){
var statearr_52174_53541 = state_52150__$1;
(statearr_52174_53541[(1)] = (5));

} else {
var statearr_52175_53542 = state_52150__$1;
(statearr_52175_53542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52151 === (6))){
var state_52150__$1 = state_52150;
var statearr_52178_53543 = state_52150__$1;
(statearr_52178_53543[(2)] = null);

(statearr_52178_53543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52151 === (3))){
var inst_52146 = (state_52150[(2)]);
var inst_52147 = cljs.core.async.close_BANG_(out);
var state_52150__$1 = (function (){var statearr_52179 = state_52150;
(statearr_52179[(9)] = inst_52146);

return statearr_52179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52150__$1,inst_52147);
} else {
if((state_val_52151 === (2))){
var state_52150__$1 = state_52150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52150__$1,(4),ch);
} else {
if((state_val_52151 === (11))){
var inst_52127 = (state_52150[(8)]);
var inst_52137 = (state_52150[(2)]);
var inst_52120 = inst_52127;
var state_52150__$1 = (function (){var statearr_52180 = state_52150;
(statearr_52180[(7)] = inst_52120);

(statearr_52180[(10)] = inst_52137);

return statearr_52180;
})();
var statearr_52181_53544 = state_52150__$1;
(statearr_52181_53544[(2)] = null);

(statearr_52181_53544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52151 === (9))){
var inst_52127 = (state_52150[(8)]);
var state_52150__$1 = state_52150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52150__$1,(11),out,inst_52127);
} else {
if((state_val_52151 === (5))){
var inst_52120 = (state_52150[(7)]);
var inst_52127 = (state_52150[(8)]);
var inst_52132 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52127,inst_52120);
var state_52150__$1 = state_52150;
if(inst_52132){
var statearr_52187_53549 = state_52150__$1;
(statearr_52187_53549[(1)] = (8));

} else {
var statearr_52190_53550 = state_52150__$1;
(statearr_52190_53550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52151 === (10))){
var inst_52140 = (state_52150[(2)]);
var state_52150__$1 = state_52150;
var statearr_52197_53551 = state_52150__$1;
(statearr_52197_53551[(2)] = inst_52140);

(statearr_52197_53551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52151 === (8))){
var inst_52120 = (state_52150[(7)]);
var tmp52185 = inst_52120;
var inst_52120__$1 = tmp52185;
var state_52150__$1 = (function (){var statearr_52198 = state_52150;
(statearr_52198[(7)] = inst_52120__$1);

return statearr_52198;
})();
var statearr_52199_53552 = state_52150__$1;
(statearr_52199_53552[(2)] = null);

(statearr_52199_53552[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_52201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52201[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_52201[(1)] = (1));

return statearr_52201;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_52150){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_52150);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e52207){var ex__49650__auto__ = e52207;
var statearr_52208_53553 = state_52150;
(statearr_52208_53553[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_52150[(4)]))){
var statearr_52209_53554 = state_52150;
(statearr_52209_53554[(1)] = cljs.core.first((state_52150[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53555 = state_52150;
state_52150 = G__53555;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_52150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_52150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_52210 = f__49739__auto__();
(statearr_52210[(6)] = c__49738__auto___53536);

return statearr_52210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52225 = arguments.length;
switch (G__52225) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49738__auto___53558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_52274){
var state_val_52275 = (state_52274[(1)]);
if((state_val_52275 === (7))){
var inst_52269 = (state_52274[(2)]);
var state_52274__$1 = state_52274;
var statearr_52278_53561 = state_52274__$1;
(statearr_52278_53561[(2)] = inst_52269);

(statearr_52278_53561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (1))){
var inst_52231 = (new Array(n));
var inst_52233 = inst_52231;
var inst_52234 = (0);
var state_52274__$1 = (function (){var statearr_52281 = state_52274;
(statearr_52281[(7)] = inst_52233);

(statearr_52281[(8)] = inst_52234);

return statearr_52281;
})();
var statearr_52282_53562 = state_52274__$1;
(statearr_52282_53562[(2)] = null);

(statearr_52282_53562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (4))){
var inst_52240 = (state_52274[(9)]);
var inst_52240__$1 = (state_52274[(2)]);
var inst_52242 = (inst_52240__$1 == null);
var inst_52243 = cljs.core.not(inst_52242);
var state_52274__$1 = (function (){var statearr_52289 = state_52274;
(statearr_52289[(9)] = inst_52240__$1);

return statearr_52289;
})();
if(inst_52243){
var statearr_52290_53563 = state_52274__$1;
(statearr_52290_53563[(1)] = (5));

} else {
var statearr_52291_53566 = state_52274__$1;
(statearr_52291_53566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (15))){
var inst_52263 = (state_52274[(2)]);
var state_52274__$1 = state_52274;
var statearr_52292_53567 = state_52274__$1;
(statearr_52292_53567[(2)] = inst_52263);

(statearr_52292_53567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (13))){
var state_52274__$1 = state_52274;
var statearr_52293_53568 = state_52274__$1;
(statearr_52293_53568[(2)] = null);

(statearr_52293_53568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (6))){
var inst_52234 = (state_52274[(8)]);
var inst_52259 = (inst_52234 > (0));
var state_52274__$1 = state_52274;
if(cljs.core.truth_(inst_52259)){
var statearr_52305_53569 = state_52274__$1;
(statearr_52305_53569[(1)] = (12));

} else {
var statearr_52307_53570 = state_52274__$1;
(statearr_52307_53570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (3))){
var inst_52271 = (state_52274[(2)]);
var state_52274__$1 = state_52274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52274__$1,inst_52271);
} else {
if((state_val_52275 === (12))){
var inst_52233 = (state_52274[(7)]);
var inst_52261 = cljs.core.vec(inst_52233);
var state_52274__$1 = state_52274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52274__$1,(15),out,inst_52261);
} else {
if((state_val_52275 === (2))){
var state_52274__$1 = state_52274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52274__$1,(4),ch);
} else {
if((state_val_52275 === (11))){
var inst_52253 = (state_52274[(2)]);
var inst_52254 = (new Array(n));
var inst_52233 = inst_52254;
var inst_52234 = (0);
var state_52274__$1 = (function (){var statearr_52322 = state_52274;
(statearr_52322[(7)] = inst_52233);

(statearr_52322[(10)] = inst_52253);

(statearr_52322[(8)] = inst_52234);

return statearr_52322;
})();
var statearr_52327_53572 = state_52274__$1;
(statearr_52327_53572[(2)] = null);

(statearr_52327_53572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (9))){
var inst_52233 = (state_52274[(7)]);
var inst_52251 = cljs.core.vec(inst_52233);
var state_52274__$1 = state_52274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52274__$1,(11),out,inst_52251);
} else {
if((state_val_52275 === (5))){
var inst_52233 = (state_52274[(7)]);
var inst_52240 = (state_52274[(9)]);
var inst_52234 = (state_52274[(8)]);
var inst_52246 = (state_52274[(11)]);
var inst_52245 = (inst_52233[inst_52234] = inst_52240);
var inst_52246__$1 = (inst_52234 + (1));
var inst_52247 = (inst_52246__$1 < n);
var state_52274__$1 = (function (){var statearr_52332 = state_52274;
(statearr_52332[(12)] = inst_52245);

(statearr_52332[(11)] = inst_52246__$1);

return statearr_52332;
})();
if(cljs.core.truth_(inst_52247)){
var statearr_52335_53577 = state_52274__$1;
(statearr_52335_53577[(1)] = (8));

} else {
var statearr_52336_53578 = state_52274__$1;
(statearr_52336_53578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (14))){
var inst_52266 = (state_52274[(2)]);
var inst_52267 = cljs.core.async.close_BANG_(out);
var state_52274__$1 = (function (){var statearr_52340 = state_52274;
(statearr_52340[(13)] = inst_52266);

return statearr_52340;
})();
var statearr_52344_53579 = state_52274__$1;
(statearr_52344_53579[(2)] = inst_52267);

(statearr_52344_53579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (10))){
var inst_52257 = (state_52274[(2)]);
var state_52274__$1 = state_52274;
var statearr_52346_53580 = state_52274__$1;
(statearr_52346_53580[(2)] = inst_52257);

(statearr_52346_53580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52275 === (8))){
var inst_52233 = (state_52274[(7)]);
var inst_52246 = (state_52274[(11)]);
var tmp52339 = inst_52233;
var inst_52233__$1 = tmp52339;
var inst_52234 = inst_52246;
var state_52274__$1 = (function (){var statearr_52347 = state_52274;
(statearr_52347[(7)] = inst_52233__$1);

(statearr_52347[(8)] = inst_52234);

return statearr_52347;
})();
var statearr_52348_53582 = state_52274__$1;
(statearr_52348_53582[(2)] = null);

(statearr_52348_53582[(1)] = (2));


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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_52354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52354[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_52354[(1)] = (1));

return statearr_52354;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_52274){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_52274);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e52355){var ex__49650__auto__ = e52355;
var statearr_52356_53584 = state_52274;
(statearr_52356_53584[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_52274[(4)]))){
var statearr_52359_53585 = state_52274;
(statearr_52359_53585[(1)] = cljs.core.first((state_52274[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53586 = state_52274;
state_52274 = G__53586;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_52274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_52274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_52362 = f__49739__auto__();
(statearr_52362[(6)] = c__49738__auto___53558);

return statearr_52362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52373 = arguments.length;
switch (G__52373) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49738__auto___53590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49739__auto__ = (function (){var switch__49646__auto__ = (function (state_52442){
var state_val_52443 = (state_52442[(1)]);
if((state_val_52443 === (7))){
var inst_52433 = (state_52442[(2)]);
var state_52442__$1 = state_52442;
var statearr_52447_53592 = state_52442__$1;
(statearr_52447_53592[(2)] = inst_52433);

(statearr_52447_53592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (1))){
var inst_52390 = [];
var inst_52391 = inst_52390;
var inst_52392 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52442__$1 = (function (){var statearr_52456 = state_52442;
(statearr_52456[(7)] = inst_52391);

(statearr_52456[(8)] = inst_52392);

return statearr_52456;
})();
var statearr_52457_53594 = state_52442__$1;
(statearr_52457_53594[(2)] = null);

(statearr_52457_53594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (4))){
var inst_52395 = (state_52442[(9)]);
var inst_52395__$1 = (state_52442[(2)]);
var inst_52396 = (inst_52395__$1 == null);
var inst_52397 = cljs.core.not(inst_52396);
var state_52442__$1 = (function (){var statearr_52461 = state_52442;
(statearr_52461[(9)] = inst_52395__$1);

return statearr_52461;
})();
if(inst_52397){
var statearr_52463_53595 = state_52442__$1;
(statearr_52463_53595[(1)] = (5));

} else {
var statearr_52464_53596 = state_52442__$1;
(statearr_52464_53596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (15))){
var inst_52391 = (state_52442[(7)]);
var inst_52424 = cljs.core.vec(inst_52391);
var state_52442__$1 = state_52442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52442__$1,(18),out,inst_52424);
} else {
if((state_val_52443 === (13))){
var inst_52419 = (state_52442[(2)]);
var state_52442__$1 = state_52442;
var statearr_52465_53597 = state_52442__$1;
(statearr_52465_53597[(2)] = inst_52419);

(statearr_52465_53597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (6))){
var inst_52391 = (state_52442[(7)]);
var inst_52421 = inst_52391.length;
var inst_52422 = (inst_52421 > (0));
var state_52442__$1 = state_52442;
if(cljs.core.truth_(inst_52422)){
var statearr_52469_53598 = state_52442__$1;
(statearr_52469_53598[(1)] = (15));

} else {
var statearr_52470_53599 = state_52442__$1;
(statearr_52470_53599[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (17))){
var inst_52429 = (state_52442[(2)]);
var inst_52431 = cljs.core.async.close_BANG_(out);
var state_52442__$1 = (function (){var statearr_52473 = state_52442;
(statearr_52473[(10)] = inst_52429);

return statearr_52473;
})();
var statearr_52474_53600 = state_52442__$1;
(statearr_52474_53600[(2)] = inst_52431);

(statearr_52474_53600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (3))){
var inst_52435 = (state_52442[(2)]);
var state_52442__$1 = state_52442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52442__$1,inst_52435);
} else {
if((state_val_52443 === (12))){
var inst_52391 = (state_52442[(7)]);
var inst_52411 = cljs.core.vec(inst_52391);
var state_52442__$1 = state_52442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52442__$1,(14),out,inst_52411);
} else {
if((state_val_52443 === (2))){
var state_52442__$1 = state_52442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52442__$1,(4),ch);
} else {
if((state_val_52443 === (11))){
var inst_52391 = (state_52442[(7)]);
var inst_52399 = (state_52442[(11)]);
var inst_52395 = (state_52442[(9)]);
var inst_52407 = inst_52391.push(inst_52395);
var tmp52477 = inst_52391;
var inst_52391__$1 = tmp52477;
var inst_52392 = inst_52399;
var state_52442__$1 = (function (){var statearr_52479 = state_52442;
(statearr_52479[(7)] = inst_52391__$1);

(statearr_52479[(8)] = inst_52392);

(statearr_52479[(12)] = inst_52407);

return statearr_52479;
})();
var statearr_52480_53601 = state_52442__$1;
(statearr_52480_53601[(2)] = null);

(statearr_52480_53601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (9))){
var inst_52392 = (state_52442[(8)]);
var inst_52403 = cljs.core.keyword_identical_QMARK_(inst_52392,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52442__$1 = state_52442;
var statearr_52483_53602 = state_52442__$1;
(statearr_52483_53602[(2)] = inst_52403);

(statearr_52483_53602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (5))){
var inst_52392 = (state_52442[(8)]);
var inst_52400 = (state_52442[(13)]);
var inst_52399 = (state_52442[(11)]);
var inst_52395 = (state_52442[(9)]);
var inst_52399__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52395) : f.call(null,inst_52395));
var inst_52400__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52399__$1,inst_52392);
var state_52442__$1 = (function (){var statearr_52488 = state_52442;
(statearr_52488[(13)] = inst_52400__$1);

(statearr_52488[(11)] = inst_52399__$1);

return statearr_52488;
})();
if(inst_52400__$1){
var statearr_52490_53604 = state_52442__$1;
(statearr_52490_53604[(1)] = (8));

} else {
var statearr_52491_53605 = state_52442__$1;
(statearr_52491_53605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (14))){
var inst_52399 = (state_52442[(11)]);
var inst_52395 = (state_52442[(9)]);
var inst_52413 = (state_52442[(2)]);
var inst_52414 = [];
var inst_52415 = inst_52414.push(inst_52395);
var inst_52391 = inst_52414;
var inst_52392 = inst_52399;
var state_52442__$1 = (function (){var statearr_52494 = state_52442;
(statearr_52494[(14)] = inst_52413);

(statearr_52494[(7)] = inst_52391);

(statearr_52494[(15)] = inst_52415);

(statearr_52494[(8)] = inst_52392);

return statearr_52494;
})();
var statearr_52495_53608 = state_52442__$1;
(statearr_52495_53608[(2)] = null);

(statearr_52495_53608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (16))){
var state_52442__$1 = state_52442;
var statearr_52499_53609 = state_52442__$1;
(statearr_52499_53609[(2)] = null);

(statearr_52499_53609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (10))){
var inst_52405 = (state_52442[(2)]);
var state_52442__$1 = state_52442;
if(cljs.core.truth_(inst_52405)){
var statearr_52502_53612 = state_52442__$1;
(statearr_52502_53612[(1)] = (11));

} else {
var statearr_52503_53613 = state_52442__$1;
(statearr_52503_53613[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (18))){
var inst_52426 = (state_52442[(2)]);
var state_52442__$1 = state_52442;
var statearr_52504_53614 = state_52442__$1;
(statearr_52504_53614[(2)] = inst_52426);

(statearr_52504_53614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52443 === (8))){
var inst_52400 = (state_52442[(13)]);
var state_52442__$1 = state_52442;
var statearr_52505_53615 = state_52442__$1;
(statearr_52505_53615[(2)] = inst_52400);

(statearr_52505_53615[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49647__auto__ = null;
var cljs$core$async$state_machine__49647__auto____0 = (function (){
var statearr_52512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52512[(0)] = cljs$core$async$state_machine__49647__auto__);

(statearr_52512[(1)] = (1));

return statearr_52512;
});
var cljs$core$async$state_machine__49647__auto____1 = (function (state_52442){
while(true){
var ret_value__49648__auto__ = (function (){try{while(true){
var result__49649__auto__ = switch__49646__auto__(state_52442);
if(cljs.core.keyword_identical_QMARK_(result__49649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49649__auto__;
}
break;
}
}catch (e52516){var ex__49650__auto__ = e52516;
var statearr_52517_53617 = state_52442;
(statearr_52517_53617[(2)] = ex__49650__auto__);


if(cljs.core.seq((state_52442[(4)]))){
var statearr_52522_53618 = state_52442;
(statearr_52522_53618[(1)] = cljs.core.first((state_52442[(4)])));

} else {
throw ex__49650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53620 = state_52442;
state_52442 = G__53620;
continue;
} else {
return ret_value__49648__auto__;
}
break;
}
});
cljs$core$async$state_machine__49647__auto__ = function(state_52442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49647__auto____1.call(this,state_52442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49647__auto____0;
cljs$core$async$state_machine__49647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49647__auto____1;
return cljs$core$async$state_machine__49647__auto__;
})()
})();
var state__49740__auto__ = (function (){var statearr_52524 = f__49739__auto__();
(statearr_52524[(6)] = c__49738__auto___53590);

return statearr_52524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49740__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
