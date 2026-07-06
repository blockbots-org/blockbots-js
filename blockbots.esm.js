(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('button{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body.theme-dark{background-color:#222;color:#d9d9d9}body.theme-dark a{color:#fff}body.theme-dark a:hover{text-decoration:underline;color:#ee730a}body.theme-dark .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-dark .font-red{color:#b20f03}body.theme-dark .ctp-button{background-color:#4693ff;color:#1d1d1d}body.theme-dark #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body.theme-dark #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}body.theme-light{background-color:#fff;color:#313131}body.theme-light a{color:#0051c3}body.theme-light a:hover{text-decoration:underline;color:#ee730a}body.theme-light .lds-ring div{border-color:#595959 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-light .font-red{color:#fc574a}body.theme-light .ctp-button{border-color:#003681;background-color:#003681;color:#fff}body.theme-light #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=)}body.theme-light #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}a{transition:color .15s ease;background-color:#0000;text-decoration:none;color:#0051c3}a:hover{text-decoration:underline;color:#ee730a}.main-content{margin:8rem auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem}.main-content .loading-verifying{height:76.391px}.spacer{margin:2rem 0}.spacer-top{margin-top:4rem}.spacer-bottom{margin-bottom:2rem}.heading-favicon{margin-right:.5rem;width:2rem;height:2rem}@media (width <= 720px){.main-content{margin-top:4rem}.heading-favicon{width:1.5rem;height:1.5rem}}.main-wrapper{display:flex;flex:1;flex-direction:column;align-items:center}.font-red{color:#b20f03}.h1{line-height:3.75rem;font-size:2.5rem;font-weight:500}.core-msg{line-height:2.25rem;font-size:1.5rem;font-weight:400}.body-text{line-height:1.25rem;font-size:1rem;font-weight:400}@media (width <= 720px){.h1{line-height:1.75rem;font-size:1.5rem}.h2{line-height:1.5rem;font-size:1.25rem}.core-msg{line-height:1.5rem;font-size:1rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}#challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=);background-repeat:no-repeat;background-size:contain;padding-left:42px}.text-center{text-align:center}.ctp-button{transition-duration:.2s;transition-property:background-color,border-color,color;transition-timing-function:ease;margin:2rem 0;border:.063rem solid #0051c3;border-radius:.313rem;background-color:#0051c3;cursor:pointer;padding:.375rem 1rem;line-height:1.313rem;color:#fff;font-size:.875rem}.ctp-button:hover{border-color:#003681;background-color:#003681;cursor:pointer;color:#fff}.footer{margin:0 auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem;line-height:1.125rem;font-size:.75rem}.footer-inner{border-top:1px solid #d9d9d9;padding-top:1rem;padding-bottom:1rem}.clearfix:after{display:table;clear:both;content:""}.clearfix .column{float:left;padding-right:1.5rem;width:50%}.diagnostic-wrapper{margin-bottom:.5rem}.footer .ray-id{text-align:center}.footer .ray-id code{font-family:monaco,courier,monospace}.core-msg,.zone-name-title{overflow-wrap:break-word}@media (width <= 720px){.diagnostic-wrapper{display:flex;flex-wrap:wrap;justify-content:center}.clearfix:after{display:initial;clear:none;text-align:center;content:none}.column{padding-bottom:2rem}.clearfix .column{float:none;padding:0;width:auto;word-break:keep-all}.zone-name-title{margin-bottom:1rem}}.loading-verifying{height:76.391px}.lds-ring{display:inline-block;position:relative;width:1.875rem;height:1.875rem}.lds-ring div{box-sizing:border-box;display:block;position:absolute;border:.3rem solid #595959;border-radius:50%;border-color:#313131 rgba(0,0,0,0) rgba(0,0,0,0);width:1.875rem;height:1.875rem;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.rtl .heading-favicon{margin-right:0;margin-left:.5rem}.rtl #challenge-success-text{background-position:right;padding-right:42px;padding-left:0}.rtl #challenge-error-text{background-position:right;padding-right:34px;padding-left:0}.challenge-content .loading-verifying{height:76.391px}@media (prefers-color-scheme: dark){body{background-color:#222;color:#d9d9d9}body a{color:#fff}body a:hover{text-decoration:underline;color:#ee730a}body .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body .font-red{color:#b20f03}body .ctp-button{background-color:#4693ff;color:#1d1d1d}body #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}}*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{display:flex;flex-direction:column;height:100vh;min-height:100vh}.main-content{margin:8rem auto;padding-left:1.5rem;max-width:60rem}@media (width <= 720px){.main-content{margin-top:4rem}}.h2{line-height:2.25rem;font-size:1.5rem;font-weight:500}@media (width <= 720px){.h2{line-height:1.5rem;font-size:1.25rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}@media (prefers-color-scheme: dark){body{background-color:#222;color:#d9d9d9}}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
var hc = Object.defineProperty;
var pc = (e, t, r) => t in e ? hc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ke = (e, t, r) => (pc(e, typeof t != "symbol" ? t + "" : t, r), r), na = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var $e = (e, t, r) => (na(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ho = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, po = (e, t, r, n) => (na(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
function bc() {
  const e = {
    verified: [],
    blocked: [],
    error: []
  };
  return {
    on(t, r) {
      var n;
      (n = e[t]) == null || n.push(r);
    },
    emit(t, r) {
      for (const n of e[t] || [])
        try {
          n(r);
        } catch (o) {
          console.error("BlockBots hook error:", o);
        }
    }
  };
}
function gc(e, t = 0) {
  t = t || 0;
  let r = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    r = Math.imul(r ^ i, 2654435761), n = Math.imul(n ^ i, 1597334677);
  }
  return r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), 4294967296 * (2097151 & n) + (r >>> 0);
}
var mc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wc(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Ya = { exports: {} };
const vc = {}, yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vc
}, Symbol.toStringTag, { value: "Module" })), oa = /* @__PURE__ */ wc(yc);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
(function(e) {
  (function() {
    var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", o = n ? window : {};
    o.JS_MD5_NO_WINDOW && (n = !1);
    var i = !n && typeof self == "object", a = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    a ? o = mc : i && (o = self);
    var l = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, f = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", u = "0123456789abcdef".split(""), g = [128, 32768, 8388608, -2147483648], m = [0, 8, 16, 24], x = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], $ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), R = [], P;
    if (f) {
      var T = new ArrayBuffer(68);
      P = new Uint8Array(T), R = new Uint32Array(T);
    }
    var I = Array.isArray;
    (o.JS_MD5_NO_NODE_JS || !I) && (I = function(c) {
      return Object.prototype.toString.call(c) === "[object Array]";
    });
    var B = ArrayBuffer.isView;
    f && (o.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !B) && (B = function(c) {
      return typeof c == "object" && c.buffer && c.buffer.constructor === ArrayBuffer;
    });
    var V = function(c) {
      var h = typeof c;
      if (h === "string")
        return [c, !0];
      if (h !== "object" || c === null)
        throw new Error(t);
      if (f && c.constructor === ArrayBuffer)
        return [new Uint8Array(c), !1];
      if (!I(c) && !B(c))
        throw new Error(t);
      return [c, !1];
    }, Q = function(c) {
      return function(h) {
        return new G(!0).update(h)[c]();
      };
    }, oe = function() {
      var c = Q("hex");
      a && (c = J(c)), c.create = function() {
        return new G();
      }, c.update = function(d) {
        return c.create().update(d);
      };
      for (var h = 0; h < x.length; ++h) {
        var b = x[h];
        c[b] = Q(b);
      }
      return c;
    }, J = function(c) {
      var h = oa, b = oa.Buffer, d;
      b.from && !o.JS_MD5_NO_BUFFER_FROM ? d = b.from : d = function(S) {
        return new b(S);
      };
      var D = function(S) {
        if (typeof S == "string")
          return h.createHash("md5").update(S, "utf8").digest("hex");
        if (S == null)
          throw new Error(t);
        return S.constructor === ArrayBuffer && (S = new Uint8Array(S)), I(S) || B(S) || S.constructor === b ? h.createHash("md5").update(d(S)).digest("hex") : c(S);
      };
      return D;
    }, de = function(c) {
      return function(h, b) {
        return new He(h, !0).update(b)[c]();
      };
    }, Ce = function() {
      var c = de("hex");
      c.create = function(d) {
        return new He(d);
      }, c.update = function(d, D) {
        return c.create(d).update(D);
      };
      for (var h = 0; h < x.length; ++h) {
        var b = x[h];
        c[b] = de(b);
      }
      return c;
    };
    function G(c) {
      if (c)
        R[0] = R[16] = R[1] = R[2] = R[3] = R[4] = R[5] = R[6] = R[7] = R[8] = R[9] = R[10] = R[11] = R[12] = R[13] = R[14] = R[15] = 0, this.blocks = R, this.buffer8 = P;
      else if (f) {
        var h = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(h), this.blocks = new Uint32Array(h);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    G.prototype.update = function(c) {
      if (this.finalized)
        throw new Error(r);
      var h = V(c);
      c = h[0];
      for (var b = h[1], d, D = 0, S, k = c.length, N = this.blocks, Z = this.buffer8; D < k; ) {
        if (this.hashed && (this.hashed = !1, N[0] = N[16], N[16] = N[1] = N[2] = N[3] = N[4] = N[5] = N[6] = N[7] = N[8] = N[9] = N[10] = N[11] = N[12] = N[13] = N[14] = N[15] = 0), b)
          if (f)
            for (S = this.start; D < k && S < 64; ++D)
              d = c.charCodeAt(D), d < 128 ? Z[S++] = d : d < 2048 ? (Z[S++] = 192 | d >>> 6, Z[S++] = 128 | d & 63) : d < 55296 || d >= 57344 ? (Z[S++] = 224 | d >>> 12, Z[S++] = 128 | d >>> 6 & 63, Z[S++] = 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | c.charCodeAt(++D) & 1023), Z[S++] = 240 | d >>> 18, Z[S++] = 128 | d >>> 12 & 63, Z[S++] = 128 | d >>> 6 & 63, Z[S++] = 128 | d & 63);
          else
            for (S = this.start; D < k && S < 64; ++D)
              d = c.charCodeAt(D), d < 128 ? N[S >>> 2] |= d << m[S++ & 3] : d < 2048 ? (N[S >>> 2] |= (192 | d >>> 6) << m[S++ & 3], N[S >>> 2] |= (128 | d & 63) << m[S++ & 3]) : d < 55296 || d >= 57344 ? (N[S >>> 2] |= (224 | d >>> 12) << m[S++ & 3], N[S >>> 2] |= (128 | d >>> 6 & 63) << m[S++ & 3], N[S >>> 2] |= (128 | d & 63) << m[S++ & 3]) : (d = 65536 + ((d & 1023) << 10 | c.charCodeAt(++D) & 1023), N[S >>> 2] |= (240 | d >>> 18) << m[S++ & 3], N[S >>> 2] |= (128 | d >>> 12 & 63) << m[S++ & 3], N[S >>> 2] |= (128 | d >>> 6 & 63) << m[S++ & 3], N[S >>> 2] |= (128 | d & 63) << m[S++ & 3]);
        else if (f)
          for (S = this.start; D < k && S < 64; ++D)
            Z[S++] = c[D];
        else
          for (S = this.start; D < k && S < 64; ++D)
            N[S >>> 2] |= c[D] << m[S++ & 3];
        this.lastByteIndex = S, this.bytes += S - this.start, S >= 64 ? (this.start = S - 64, this.hash(), this.hashed = !0) : this.start = S;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, G.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var c = this.blocks, h = this.lastByteIndex;
        c[h >>> 2] |= g[h & 3], h >= 56 && (this.hashed || this.hash(), c[0] = c[16], c[16] = c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = 0), c[14] = this.bytes << 3, c[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, G.prototype.hash = function() {
      var c, h, b, d, D, S, k = this.blocks;
      this.first ? (c = k[0] - 680876937, c = (c << 7 | c >>> 25) - 271733879 << 0, d = (-1732584194 ^ c & 2004318071) + k[1] - 117830708, d = (d << 12 | d >>> 20) + c << 0, b = (-271733879 ^ d & (c ^ -271733879)) + k[2] - 1126478375, b = (b << 17 | b >>> 15) + d << 0, h = (c ^ b & (d ^ c)) + k[3] - 1316259209, h = (h << 22 | h >>> 10) + b << 0) : (c = this.h0, h = this.h1, b = this.h2, d = this.h3, c += (d ^ h & (b ^ d)) + k[0] - 680876936, c = (c << 7 | c >>> 25) + h << 0, d += (b ^ c & (h ^ b)) + k[1] - 389564586, d = (d << 12 | d >>> 20) + c << 0, b += (h ^ d & (c ^ h)) + k[2] + 606105819, b = (b << 17 | b >>> 15) + d << 0, h += (c ^ b & (d ^ c)) + k[3] - 1044525330, h = (h << 22 | h >>> 10) + b << 0), c += (d ^ h & (b ^ d)) + k[4] - 176418897, c = (c << 7 | c >>> 25) + h << 0, d += (b ^ c & (h ^ b)) + k[5] + 1200080426, d = (d << 12 | d >>> 20) + c << 0, b += (h ^ d & (c ^ h)) + k[6] - 1473231341, b = (b << 17 | b >>> 15) + d << 0, h += (c ^ b & (d ^ c)) + k[7] - 45705983, h = (h << 22 | h >>> 10) + b << 0, c += (d ^ h & (b ^ d)) + k[8] + 1770035416, c = (c << 7 | c >>> 25) + h << 0, d += (b ^ c & (h ^ b)) + k[9] - 1958414417, d = (d << 12 | d >>> 20) + c << 0, b += (h ^ d & (c ^ h)) + k[10] - 42063, b = (b << 17 | b >>> 15) + d << 0, h += (c ^ b & (d ^ c)) + k[11] - 1990404162, h = (h << 22 | h >>> 10) + b << 0, c += (d ^ h & (b ^ d)) + k[12] + 1804603682, c = (c << 7 | c >>> 25) + h << 0, d += (b ^ c & (h ^ b)) + k[13] - 40341101, d = (d << 12 | d >>> 20) + c << 0, b += (h ^ d & (c ^ h)) + k[14] - 1502002290, b = (b << 17 | b >>> 15) + d << 0, h += (c ^ b & (d ^ c)) + k[15] + 1236535329, h = (h << 22 | h >>> 10) + b << 0, c += (b ^ d & (h ^ b)) + k[1] - 165796510, c = (c << 5 | c >>> 27) + h << 0, d += (h ^ b & (c ^ h)) + k[6] - 1069501632, d = (d << 9 | d >>> 23) + c << 0, b += (c ^ h & (d ^ c)) + k[11] + 643717713, b = (b << 14 | b >>> 18) + d << 0, h += (d ^ c & (b ^ d)) + k[0] - 373897302, h = (h << 20 | h >>> 12) + b << 0, c += (b ^ d & (h ^ b)) + k[5] - 701558691, c = (c << 5 | c >>> 27) + h << 0, d += (h ^ b & (c ^ h)) + k[10] + 38016083, d = (d << 9 | d >>> 23) + c << 0, b += (c ^ h & (d ^ c)) + k[15] - 660478335, b = (b << 14 | b >>> 18) + d << 0, h += (d ^ c & (b ^ d)) + k[4] - 405537848, h = (h << 20 | h >>> 12) + b << 0, c += (b ^ d & (h ^ b)) + k[9] + 568446438, c = (c << 5 | c >>> 27) + h << 0, d += (h ^ b & (c ^ h)) + k[14] - 1019803690, d = (d << 9 | d >>> 23) + c << 0, b += (c ^ h & (d ^ c)) + k[3] - 187363961, b = (b << 14 | b >>> 18) + d << 0, h += (d ^ c & (b ^ d)) + k[8] + 1163531501, h = (h << 20 | h >>> 12) + b << 0, c += (b ^ d & (h ^ b)) + k[13] - 1444681467, c = (c << 5 | c >>> 27) + h << 0, d += (h ^ b & (c ^ h)) + k[2] - 51403784, d = (d << 9 | d >>> 23) + c << 0, b += (c ^ h & (d ^ c)) + k[7] + 1735328473, b = (b << 14 | b >>> 18) + d << 0, h += (d ^ c & (b ^ d)) + k[12] - 1926607734, h = (h << 20 | h >>> 12) + b << 0, D = h ^ b, c += (D ^ d) + k[5] - 378558, c = (c << 4 | c >>> 28) + h << 0, d += (D ^ c) + k[8] - 2022574463, d = (d << 11 | d >>> 21) + c << 0, S = d ^ c, b += (S ^ h) + k[11] + 1839030562, b = (b << 16 | b >>> 16) + d << 0, h += (S ^ b) + k[14] - 35309556, h = (h << 23 | h >>> 9) + b << 0, D = h ^ b, c += (D ^ d) + k[1] - 1530992060, c = (c << 4 | c >>> 28) + h << 0, d += (D ^ c) + k[4] + 1272893353, d = (d << 11 | d >>> 21) + c << 0, S = d ^ c, b += (S ^ h) + k[7] - 155497632, b = (b << 16 | b >>> 16) + d << 0, h += (S ^ b) + k[10] - 1094730640, h = (h << 23 | h >>> 9) + b << 0, D = h ^ b, c += (D ^ d) + k[13] + 681279174, c = (c << 4 | c >>> 28) + h << 0, d += (D ^ c) + k[0] - 358537222, d = (d << 11 | d >>> 21) + c << 0, S = d ^ c, b += (S ^ h) + k[3] - 722521979, b = (b << 16 | b >>> 16) + d << 0, h += (S ^ b) + k[6] + 76029189, h = (h << 23 | h >>> 9) + b << 0, D = h ^ b, c += (D ^ d) + k[9] - 640364487, c = (c << 4 | c >>> 28) + h << 0, d += (D ^ c) + k[12] - 421815835, d = (d << 11 | d >>> 21) + c << 0, S = d ^ c, b += (S ^ h) + k[15] + 530742520, b = (b << 16 | b >>> 16) + d << 0, h += (S ^ b) + k[2] - 995338651, h = (h << 23 | h >>> 9) + b << 0, c += (b ^ (h | ~d)) + k[0] - 198630844, c = (c << 6 | c >>> 26) + h << 0, d += (h ^ (c | ~b)) + k[7] + 1126891415, d = (d << 10 | d >>> 22) + c << 0, b += (c ^ (d | ~h)) + k[14] - 1416354905, b = (b << 15 | b >>> 17) + d << 0, h += (d ^ (b | ~c)) + k[5] - 57434055, h = (h << 21 | h >>> 11) + b << 0, c += (b ^ (h | ~d)) + k[12] + 1700485571, c = (c << 6 | c >>> 26) + h << 0, d += (h ^ (c | ~b)) + k[3] - 1894986606, d = (d << 10 | d >>> 22) + c << 0, b += (c ^ (d | ~h)) + k[10] - 1051523, b = (b << 15 | b >>> 17) + d << 0, h += (d ^ (b | ~c)) + k[1] - 2054922799, h = (h << 21 | h >>> 11) + b << 0, c += (b ^ (h | ~d)) + k[8] + 1873313359, c = (c << 6 | c >>> 26) + h << 0, d += (h ^ (c | ~b)) + k[15] - 30611744, d = (d << 10 | d >>> 22) + c << 0, b += (c ^ (d | ~h)) + k[6] - 1560198380, b = (b << 15 | b >>> 17) + d << 0, h += (d ^ (b | ~c)) + k[13] + 1309151649, h = (h << 21 | h >>> 11) + b << 0, c += (b ^ (h | ~d)) + k[4] - 145523070, c = (c << 6 | c >>> 26) + h << 0, d += (h ^ (c | ~b)) + k[11] - 1120210379, d = (d << 10 | d >>> 22) + c << 0, b += (c ^ (d | ~h)) + k[2] + 718787259, b = (b << 15 | b >>> 17) + d << 0, h += (d ^ (b | ~c)) + k[9] - 343485551, h = (h << 21 | h >>> 11) + b << 0, this.first ? (this.h0 = c + 1732584193 << 0, this.h1 = h - 271733879 << 0, this.h2 = b - 1732584194 << 0, this.h3 = d + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + c << 0, this.h1 = this.h1 + h << 0, this.h2 = this.h2 + b << 0, this.h3 = this.h3 + d << 0);
    }, G.prototype.hex = function() {
      this.finalize();
      var c = this.h0, h = this.h1, b = this.h2, d = this.h3;
      return u[c >>> 4 & 15] + u[c & 15] + u[c >>> 12 & 15] + u[c >>> 8 & 15] + u[c >>> 20 & 15] + u[c >>> 16 & 15] + u[c >>> 28 & 15] + u[c >>> 24 & 15] + u[h >>> 4 & 15] + u[h & 15] + u[h >>> 12 & 15] + u[h >>> 8 & 15] + u[h >>> 20 & 15] + u[h >>> 16 & 15] + u[h >>> 28 & 15] + u[h >>> 24 & 15] + u[b >>> 4 & 15] + u[b & 15] + u[b >>> 12 & 15] + u[b >>> 8 & 15] + u[b >>> 20 & 15] + u[b >>> 16 & 15] + u[b >>> 28 & 15] + u[b >>> 24 & 15] + u[d >>> 4 & 15] + u[d & 15] + u[d >>> 12 & 15] + u[d >>> 8 & 15] + u[d >>> 20 & 15] + u[d >>> 16 & 15] + u[d >>> 28 & 15] + u[d >>> 24 & 15];
    }, G.prototype.toString = G.prototype.hex, G.prototype.digest = function() {
      this.finalize();
      var c = this.h0, h = this.h1, b = this.h2, d = this.h3;
      return [
        c & 255,
        c >>> 8 & 255,
        c >>> 16 & 255,
        c >>> 24 & 255,
        h & 255,
        h >>> 8 & 255,
        h >>> 16 & 255,
        h >>> 24 & 255,
        b & 255,
        b >>> 8 & 255,
        b >>> 16 & 255,
        b >>> 24 & 255,
        d & 255,
        d >>> 8 & 255,
        d >>> 16 & 255,
        d >>> 24 & 255
      ];
    }, G.prototype.array = G.prototype.digest, G.prototype.arrayBuffer = function() {
      this.finalize();
      var c = new ArrayBuffer(16), h = new Uint32Array(c);
      return h[0] = this.h0, h[1] = this.h1, h[2] = this.h2, h[3] = this.h3, c;
    }, G.prototype.buffer = G.prototype.arrayBuffer, G.prototype.base64 = function() {
      for (var c, h, b, d = "", D = this.array(), S = 0; S < 15; )
        c = D[S++], h = D[S++], b = D[S++], d += $[c >>> 2] + $[(c << 4 | h >>> 4) & 63] + $[(h << 2 | b >>> 6) & 63] + $[b & 63];
      return c = D[S], d += $[c >>> 2] + $[c << 4 & 63] + "==", d;
    };
    function He(c, h) {
      var b, d = V(c);
      if (c = d[0], d[1]) {
        var D = [], S = c.length, k = 0, N;
        for (b = 0; b < S; ++b)
          N = c.charCodeAt(b), N < 128 ? D[k++] = N : N < 2048 ? (D[k++] = 192 | N >>> 6, D[k++] = 128 | N & 63) : N < 55296 || N >= 57344 ? (D[k++] = 224 | N >>> 12, D[k++] = 128 | N >>> 6 & 63, D[k++] = 128 | N & 63) : (N = 65536 + ((N & 1023) << 10 | c.charCodeAt(++b) & 1023), D[k++] = 240 | N >>> 18, D[k++] = 128 | N >>> 12 & 63, D[k++] = 128 | N >>> 6 & 63, D[k++] = 128 | N & 63);
        c = D;
      }
      c.length > 64 && (c = new G(!0).update(c).array());
      var Z = [], pt = [];
      for (b = 0; b < 64; ++b) {
        var Et = c[b] || 0;
        Z[b] = 92 ^ Et, pt[b] = 54 ^ Et;
      }
      G.call(this, h), this.update(pt), this.oKeyPad = Z, this.inner = !0, this.sharedMemory = h;
    }
    He.prototype = new G(), He.prototype.finalize = function() {
      if (G.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var c = this.array();
        G.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(c), G.prototype.finalize.call(this);
      }
    };
    var Je = oe();
    Je.md5 = Je, Je.md5.hmac = Ce(), l ? e.exports = Je : o.md5 = Je;
  })();
})(Ya);
var xc = Ya.exports;
const Za = () => {
  const e = document.createElement("canvas");
  return !!(e.getContext && e.getContext("2d"));
}, Ec = () => {
  if (!Za())
    return "None";
  const e = document.createElement("canvas"), t = e.getContext("2d"), r = "BlockBots,org <canvas>";
  e.setAttribute("width", 220), e.setAttribute("height", 30);
  try {
    t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(r, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(r, 4, 17);
  } catch {
    console.log("Canvas not supported");
  }
  let n = e.toDataURL().split(",")[1], o = atob(n), i = new Uint8Array(o.length);
  for (let a = 0; a < o.length; a++)
    i[a] = o.charCodeAt(a);
  return gc(i).toString();
}, _c = () => {
  if (!Za())
    return "None";
  const e = document.createElement("canvas"), t = e.getContext("2d"), r = "BrowserLeaks,com <canvas> 1.0";
  e.setAttribute("width", 220), e.setAttribute("height", 30);
  try {
    t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(r, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(r, 4, 17);
  } catch {
    console.log("Canvas not supported");
  }
  let n = e.toDataURL().split(",")[1], o = atob(n), i = new Uint8Array(o.length);
  for (let a = 0; a < o.length; a++)
    i[a] = o.charCodeAt(a);
  return xc.md5(i);
}, Ac = () => new Promise((e, t) => {
  e(Ec());
}), Rc = () => new Promise((e, t) => {
  e(_c());
});
var Cc = "2.0.4", Fo = 500, ia = "user-agent", mr = "", aa = "?", kn = "function", Ft = "undefined", wr = "object", Po = "string", Pe = "browser", mt = "cpu", ct = "device", Xe = "engine", ze = "os", hr = "result", A = "name", y = "type", _ = "vendor", C = "version", Le = "architecture", Jr = "major", E = "model", Hr = "console", M = "mobile", ee = "tablet", pe = "smarttv", at = "wearable", hn = "xr", qr = "embedded", Fr = "inapp", Qo = "brands", Wt = "formFactors", ei = "fullVersionList", pr = "platform", ti = "platformVersion", jn = "bitness", Dt = "sec-ch-ua", Sc = Dt + "-full-version-list", kc = Dt + "-arch", Oc = Dt + "-" + jn, Tc = Dt + "-form-factors", $c = Dt + "-" + M, Fc = Dt + "-" + E, Qa = Dt + "-" + pr, Pc = Qa + "-version", es = [Qo, ei, M, E, pr, ti, Le, Wt, jn], pn = "Amazon", lr = "Apple", sa = "ASUS", la = "BlackBerry", Vt = "Google", ca = "Huawei", bo = "Lenovo", ua = "Honor", bn = "LG", go = "Microsoft", mo = "Motorola", wo = "Nvidia", fa = "OnePlus", vo = "OPPO", Pr = "Samsung", da = "Sharp", Lr = "Sony", yo = "Xiaomi", xo = "Zebra", ha = "Chrome", pa = "Chromium", St = "Chromecast", yn = "Edge", Nr = "Firefox", Ir = "Opera", Eo = "Facebook", ba = "Sogou", cr = "Mobile ", Dr = " Browser", Lo = "Windows", Lc = typeof window !== Ft, Ne = Lc && window.navigator ? window.navigator : void 0, Tt = Ne && Ne.userAgentData ? Ne.userAgentData : void 0, Nc = function(e, t) {
  var r = {}, n = t;
  if (!On(t)) {
    n = {};
    for (var o in t)
      for (var i in t[o])
        n[i] = t[o][i].concat(n[i] ? n[i] : []);
  }
  for (var a in e)
    r[a] = n[a] && n[a].length % 2 === 0 ? n[a].concat(e[a]) : e[a];
  return r;
}, Hn = function(e) {
  for (var t = {}, r = 0; r < e.length; r++)
    t[e[r].toUpperCase()] = e[r];
  return t;
}, No = function(e, t) {
  if (typeof e === wr && e.length > 0) {
    for (var r in e)
      if (wt(t) == wt(e[r]))
        return !0;
    return !1;
  }
  return Er(e) ? wt(t) == wt(e) : !1;
}, On = function(e, t) {
  for (var r in e)
    return /^(browser|cpu|device|engine|os)$/.test(r) || (t ? On(e[r]) : !1);
}, Er = function(e) {
  return typeof e === Po;
}, _o = function(e) {
  if (e) {
    for (var t = [], r = vr(/\\?\"/g, e).split(","), n = 0; n < r.length; n++)
      if (r[n].indexOf(";") > -1) {
        var o = Tn(r[n]).split(";v=");
        t[n] = { brand: o[0], version: o[1] };
      } else
        t[n] = Tn(r[n]);
    return t;
  }
}, wt = function(e) {
  return Er(e) ? e.toLowerCase() : e;
}, Ao = function(e) {
  return Er(e) ? vr(/[^\d\.]/g, e).split(".")[0] : void 0;
}, vt = function(e) {
  for (var t in e) {
    var r = e[t];
    typeof r == wr && r.length == 2 ? this[r[0]] = r[1] : this[r] = void 0;
  }
  return this;
}, vr = function(e, t) {
  return Er(t) ? t.replace(e, mr) : t;
}, Ur = function(e) {
  return vr(/\\?\"/g, e);
}, Tn = function(e, t) {
  if (Er(e))
    return e = vr(/^\s\s*/, e), typeof t === Ft ? e : e.substring(0, Fo);
}, Ro = function(e, t) {
  if (!(!e || !t))
    for (var r = 0, n, o, i, a, l, f; r < t.length && !l; ) {
      var u = t[r], g = t[r + 1];
      for (n = o = 0; n < u.length && !l && u[n]; )
        if (l = u[n++].exec(e), l)
          for (i = 0; i < g.length; i++)
            f = l[++o], a = g[i], typeof a === wr && a.length > 0 ? a.length === 2 ? typeof a[1] == kn ? this[a[0]] = a[1].call(this, f) : this[a[0]] = a[1] : a.length >= 3 && (typeof a[1] === kn && !(a[1].exec && a[1].test) ? a.length > 3 ? this[a[0]] = f ? a[1].apply(this, a.slice(2)) : void 0 : this[a[0]] = f ? a[1].call(this, f, a[2]) : void 0 : a.length == 3 ? this[a[0]] = f ? f.replace(a[1], a[2]) : void 0 : a.length == 4 ? this[a[0]] = f ? a[3].call(this, f.replace(a[1], a[2])) : void 0 : a.length > 4 && (this[a[0]] = f ? a[3].apply(this, [f.replace(a[1], a[2])].concat(a.slice(4))) : void 0)) : this[a] = f || void 0;
      r += 2;
    }
}, lt = function(e, t) {
  for (var r in t)
    if (typeof t[r] === wr && t[r].length > 0) {
      for (var n = 0; n < t[r].length; n++)
        if (No(t[r][n], e))
          return r === aa ? void 0 : r;
    } else if (No(t[r], e))
      return r === aa ? void 0 : r;
  return t.hasOwnProperty("*") ? t["*"] : e;
}, ga = {
  ME: "4.90",
  "NT 3.51": "3.51",
  "NT 4.0": "4.0",
  2e3: ["5.0", "5.01"],
  XP: ["5.1", "5.2"],
  Vista: "6.0",
  7: "6.1",
  8: "6.2",
  "8.1": "6.3",
  10: ["6.4", "10.0"],
  NT: ""
}, ma = {
  embedded: "Automotive",
  mobile: "Mobile",
  tablet: ["Tablet", "EInk"],
  smarttv: "TV",
  wearable: "Watch",
  xr: ["VR", "XR"],
  "?": ["Desktop", "Unknown"],
  "*": void 0
}, Ic = {
  Chrome: "Google Chrome",
  Edge: "Microsoft Edge",
  "Edge WebView2": "Microsoft Edge WebView2",
  "Chrome WebView": "Android WebView",
  "Chrome Headless": "HeadlessChrome",
  "Huawei Browser": "HuaweiBrowser",
  "MIUI Browser": "Miui Browser",
  "Opera Mobi": "OperaMobile",
  Yandex: "YaBrowser"
}, wa = {
  browser: [
    [
      // Most common regardless engine
      /\b(?:crmo|crios)\/([\w\.]+)/i
      // Chrome for Android/iOS
    ],
    [C, [A, cr + "Chrome"]],
    [
      /webview.+edge\/([\w\.]+)/i
      // Microsoft Edge
    ],
    [C, [A, yn + " WebView"]],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i
    ],
    [C, [A, "Edge"]],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i,
      // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
      // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      // Opera
    ],
    [A, C],
    [
      /opios[\/ ]+([\w\.]+)/i
      // Opera mini on iphone >= 8.0
    ],
    [C, [A, Ir + " Mini"]],
    [
      /\bop(?:rg)?x\/([\w\.]+)/i
      // Opera GX
    ],
    [C, [A, Ir + " GX"]],
    [
      /\bopr\/([\w\.]+)/i
      // Opera Webkit
    ],
    [C, [A, Ir]],
    [
      // Mixed
      /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      // Baidu
    ],
    [C, [A, "Baidu"]],
    [
      /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      // Maxthon
    ],
    [C, [A, "Maxthon"]],
    [
      /(kindle)\/([\w\.]+)/i,
      // Kindle
      /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
      // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
      // Trident based
      /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
      // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
      /(?:ms|\()(ie) ([\w\.]+)/i,
      // Internet Explorer
      // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon/LG Browser/Otter/qutebrowser/Dooble
      /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,
      // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
      /(heytap|ovi|115|surf)browser\/([\d\.]+)/i,
      // HeyTap/Ovi/115/Surf
      /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
      // Ecosia/Weibo
    ],
    [A, C],
    [
      /quark(?:pc)?\/([-\w\.]+)/i
      // Quark
    ],
    [C, [A, "Quark"]],
    [
      /\bddg\/([\w\.]+)/i
      // DuckDuckGo
    ],
    [C, [A, "DuckDuckGo"]],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      // UCBrowser
    ],
    [C, [A, "UCBrowser"]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i,
      // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i,
      /micromessenger\/([\w\.]+)/i
      // WeChat
    ],
    [C, [A, "WeChat"]],
    [
      /konqueror\/([\w\.]+)/i
      // Konqueror
    ],
    [C, [A, "Konqueror"]],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      // IE11
    ],
    [C, [A, "IE"]],
    [
      /ya(?:search)?browser\/([\w\.]+)/i
      // Yandex
    ],
    [C, [A, "Yandex"]],
    [
      /slbrowser\/([\w\.]+)/i
      // Smart Lenovo Browser
    ],
    [C, [A, "Smart " + bo + Dr]],
    [
      /(avast|avg)\/([\w\.]+)/i
      // Avast/AVG Secure Browser
    ],
    [[A, /(.+)/, "$1 Secure" + Dr], C],
    [
      /\bfocus\/([\w\.]+)/i
      // Firefox Focus
    ],
    [C, [A, Nr + " Focus"]],
    [
      /\bopt\/([\w\.]+)/i
      // Opera Touch
    ],
    [C, [A, Ir + " Touch"]],
    [
      /coc_coc\w+\/([\w\.]+)/i
      // Coc Coc Browser
    ],
    [C, [A, "Coc Coc"]],
    [
      /dolfin\/([\w\.]+)/i
      // Dolphin
    ],
    [C, [A, "Dolphin"]],
    [
      /coast\/([\w\.]+)/i
      // Opera Coast
    ],
    [C, [A, Ir + " Coast"]],
    [
      /miuibrowser\/([\w\.]+)/i
      // MIUI Browser
    ],
    [C, [A, "MIUI" + Dr]],
    [
      /fxios\/([\w\.-]+)/i
      // Firefox for iOS
    ],
    [C, [A, cr + Nr]],
    [
      /\bqihoobrowser\/?([\w\.]*)/i
      // 360
    ],
    [C, [A, "360"]],
    [
      /\b(qq)\/([\w\.]+)/i
      // QQ
    ],
    [[A, /(.+)/, "$1Browser"], C],
    [
      /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
    ],
    [[A, /(.+)/, "$1" + Dr], C],
    [
      // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
      /samsungbrowser\/([\w\.]+)/i
      // Samsung Internet
    ],
    [C, [A, Pr + " Internet"]],
    [
      /metasr[\/ ]?([\d\.]+)/i
      // Sogou Explorer
    ],
    [C, [A, ba + " Explorer"]],
    [
      /(sogou)mo\w+\/([\d\.]+)/i
      // Sogou Mobile
    ],
    [[A, ba + " Mobile"], C],
    [
      /(electron)\/([\w\.]+) safari/i,
      // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
      // Tesla
      /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      // QQ/2345
    ],
    [A, C],
    [
      /(lbbrowser|rekonq)/i
      // LieBao Browser/Rekonq
    ],
    [A],
    [
      /ome\/([\w\.]+) \w* ?(iron) saf/i,
      // Iron
      /ome\/([\w\.]+).+qihu (360)[es]e/i
      // 360
    ],
    [C, A],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      // Facebook App for iOS & Android
    ],
    [[A, Eo], C, [y, Fr]],
    [
      /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
      // Kakao App
      /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
      // Naver InApp
      /(daum)apps[\/ ]([\w\.]+)/i,
      // Daum App
      /safari (line)\/([\w\.]+)/i,
      // Line App for iOS
      /\b(line)\/([\w\.]+)\/iab/i,
      // Line App for Android
      /(alipay)client\/([\w\.]+)/i,
      // Alipay
      /(twitter)(?:and| f.+e\/([\w\.]+))/i,
      // Twitter
      /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i
      // Instagram/Snapchat/Klarna
    ],
    [A, C, [y, Fr]],
    [
      /\bgsa\/([\w\.]+) .*safari\//i
      // Google Search Appliance on iOS
    ],
    [C, [A, "GSA"], [y, Fr]],
    [
      /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      // TikTok
    ],
    [C, [A, "TikTok"], [y, Fr]],
    [
      /\[(linkedin)app\]/i
      // LinkedIn App for iOS & Android
    ],
    [A, [y, Fr]],
    [
      /(chromium)[\/ ]([-\w\.]+)/i
      // Chromium
    ],
    [A, C],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i
      // Chrome Headless
    ],
    [C, [A, ha + " Headless"]],
    [
      /wv\).+chrome\/([\w\.]+).+edgw\//i
      // Edge WebView2
    ],
    [C, [A, yn + " WebView2"]],
    [
      / wv\).+(chrome)\/([\w\.]+)/i
      // Chrome WebView
    ],
    [[A, ha + " WebView"], C],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      // Android Browser
    ],
    [C, [A, "Android" + Dr]],
    [
      /chrome\/([\w\.]+) mobile/i
      // Chrome Mobile
    ],
    [C, [A, cr + "Chrome"]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [A, C],
    [
      /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      // Safari Mobile
    ],
    [C, [A, cr + "Safari"]],
    [
      /iphone .*mobile(?:\/\w+ | ?)safari/i
    ],
    [[A, cr + "Safari"]],
    [
      /version\/([\w\.\,]+) .*(safari)/i
      // Safari
    ],
    [C, A],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      // Safari < 3.0
    ],
    [A, [C, "1"]],
    [
      /(webkit|khtml)\/([\w\.]+)/i
    ],
    [A, C],
    [
      // Gecko based
      /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      // Firefox Mobile
    ],
    [[A, cr + Nr], C],
    [
      /(navigator|netscape\d?)\/([-\w\.]+)/i
      // Netscape
    ],
    [[A, "Netscape"], C],
    [
      /(wolvic|librewolf)\/([\w\.]+)/i
      // Wolvic/LibreWolf
    ],
    [A, C],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i
      // Firefox Reality
    ],
    [C, [A, Nr + " Reality"]],
    [
      /ekiohf.+(flow)\/([\w\.]+)/i,
      // Flow
      /(swiftfox)/i,
      // Swiftfox
      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
      // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
      /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
      // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
      /(firefox)\/([\w\.]+)/i,
      // Other Firefox-based
      /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
      // Mozilla
      // Other
      /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
      // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
      /\b(links) \(([\w\.]+)/i
      // Links
    ],
    [A, [C, /_/g, "."]],
    [
      /(cobalt)\/([\w\.]+)/i
      // Cobalt
    ],
    [A, [C, /[^\d\.]+./, mr]]
  ],
  cpu: [
    [
      /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      // AMD64 (x64)
    ],
    [[Le, "amd64"]],
    [
      /(ia32(?=;))/i,
      // IA32 (quicktime)
      /\b((i[346]|x)86)(pc)?\b/i
      // IA32 (x86)
    ],
    [[Le, "ia32"]],
    [
      /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      // ARM64
    ],
    [[Le, "arm64"]],
    [
      /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      // ARMHF
    ],
    [[Le, "armhf"]],
    [
      // PocketPC mistakenly identified as PowerPC
      /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
    ],
    [[Le, "arm"]],
    [
      /((ppc|powerpc)(64)?)( mac|;|\))/i
      // PowerPC
    ],
    [[Le, /ower/, mr, wt]],
    [
      / sun4\w[;\)]/i
      // SPARC
    ],
    [[Le, "sparc"]],
    [
      /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
    ],
    [[Le, wt]]
  ],
  device: [
    [
      //////////////////////////
      // MOBILES & TABLETS
      /////////////////////////
      // Samsung
      /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
    ],
    [E, [_, Pr], [y, ee]],
    [
      /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
      /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [E, [_, Pr], [y, M]],
    [
      // Apple
      /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      // iPod/iPhone
    ],
    [E, [_, lr], [y, M]],
    [
      /\((ipad);[-\w\),; ]+apple/i,
      // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [E, [_, lr], [y, ee]],
    [
      /(macintosh);/i
    ],
    [E, [_, lr]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [E, [_, da], [y, M]],
    [
      // Honor
      /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
    ],
    [E, [_, ua], [y, ee]],
    [
      /honor([-\w ]+)[;\)]/i
    ],
    [E, [_, ua], [y, M]],
    [
      // Huawei
      /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
    ],
    [E, [_, ca], [y, ee]],
    [
      /(?:huawei)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [E, [_, ca], [y, M]],
    [
      // Xiaomi
      /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
      /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      // Mi Pad tablets
    ],
    [[E, /_/g, " "], [_, yo], [y, ee]],
    [
      /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
      // Xiaomi POCO
      /\b; (\w+) build\/hm\1/i,
      // Xiaomi Hongmi 'numeric' models
      /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
      // Xiaomi Hongmi
      /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
      // Xiaomi Redmi
      /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
      // Xiaomi Redmi 'numeric' models
      /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
      // Xiaomi Mi
      / ([\w ]+) miui\/v?\d/i
    ],
    [[E, /_/g, " "], [_, yo], [y, M]],
    [
      // OnePlus
      /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [E, [_, fa], [y, M]],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [E, [_, vo], [y, M]],
    [
      /\b(opd2(\d{3}a?))(?: bui|\))/i
    ],
    [E, [_, lt, { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": vo }], [y, ee]],
    [
      // BLU
      /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      // Vivo series
    ],
    [E, [_, "BLU"], [y, M]],
    [
      // Vivo
      /; vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [E, [_, "Vivo"], [y, M]],
    [
      // Realme
      /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
    ],
    [E, [_, "Realme"], [y, M]],
    [
      // Lenovo
      /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
      /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
    ],
    [E, [_, bo], [y, ee]],
    [
      /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
    ],
    [E, [_, bo], [y, M]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
      /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
    ],
    [E, [_, mo], [y, M]],
    [
      /\b(mz60\d|xoom[2 ]{0,2}) build\//i
    ],
    [E, [_, mo], [y, ee]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [E, [_, bn], [y, ee]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [E, [_, bn], [y, M]],
    [
      // Nokia
      /(nokia) (t[12][01])/i
    ],
    [_, E, [y, ee]],
    [
      /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
      /nokia[-_ ]?(([-\w\. ]*))/i
    ],
    [[E, /_/g, " "], [y, M], [_, "Nokia"]],
    [
      // Google
      /(pixel (c|tablet))\b/i
      // Google Pixel C/Tablet
    ],
    [E, [_, Vt], [y, ee]],
    [
      // Google Pixel
      /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
    ],
    [E, [_, Vt], [y, M]],
    [
      /(google) (pixelbook( go)?)/i
    ],
    [_, E],
    [
      // Sony
      /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [E, [_, Lr], [y, M]],
    [
      /sony tablet [ps]/i,
      /\b(?:sony)?sgp\w+(?: bui|\))/i
    ],
    [[E, "Xperia Tablet"], [_, Lr], [y, ee]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
      // Kindle Fire without Silk / Echo Show
      /(kf[a-z]+)( bui|\)).+silk\//i
      // Kindle Fire HD
    ],
    [E, [_, pn], [y, ee]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      // Fire Phone
    ],
    [[E, /(.+)/g, "Fire Phone $1"], [_, pn], [y, M]],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i
      // BlackBerry PlayBook
    ],
    [E, _, [y, ee]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i
      // BlackBerry 10
    ],
    [E, [_, la], [y, M]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [E, [_, sa], [y, ee]],
    [
      / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
    ],
    [E, [_, sa], [y, M]],
    [
      // HTC
      /(nexus 9)/i
      // HTC Nexus 9
    ],
    [E, [_, "HTC"], [y, ee]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
      // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [_, [E, /_/g, " "], [y, M]],
    [
      // TCL
      /tcl (xess p17aa)/i,
      /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [E, [_, "TCL"], [y, ee]],
    [
      /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [E, [_, "TCL"], [y, M]],
    [
      // itel
      /(itel) ((\w+))/i
    ],
    [[_, wt], E, [y, lt, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [E, [_, "Acer"], [y, ee]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [E, [_, "Meizu"], [y, M]],
    [
      // Ulefone
      /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
    ],
    [E, [_, "Ulefone"], [y, M]],
    [
      // Energizer
      /; (energy ?\w+)(?: bui|\))/i,
      /; energizer ([\w ]+)(?: bui|\))/i
    ],
    [E, [_, "Energizer"], [y, M]],
    [
      // Cat
      /; cat (b35);/i,
      /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
    ],
    [E, [_, "Cat"], [y, M]],
    [
      // Smartfren
      /((?:new )?andromax[\w- ]+)(?: bui|\))/i
    ],
    [E, [_, "Smartfren"], [y, M]],
    [
      // Nothing
      /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
    ],
    [E, [_, "Nothing"], [y, M]],
    [
      // Archos
      /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
      /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
    ],
    [E, [_, "Archos"], [y, ee]],
    [
      /archos ([\w ]+)( b|\))/i,
      /; (ac[3-6]\d\w{2,8})( b|\))/i
    ],
    [E, [_, "Archos"], [y, M]],
    [
      // HMD
      /; (n159v)/i
    ],
    [E, [_, "HMD"], [y, M]],
    [
      // MIXED
      /(imo) (tab \w+)/i,
      // IMO
      /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      // Infinix XPad / Tecno
    ],
    [_, E, [y, ee]],
    [
      /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
      // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Tecno/Micromax/Advan
      /; (blu|hmd|imo|infinix|lava|oneplus|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
      // BLU/HMD/IMO/Infinix/Lava/OnePlus/TCL
      /(hp) ([\w ]+\w)/i,
      // HP iPAQ
      /(microsoft); (lumia[\w ]+)/i,
      // Microsoft Lumia
      /(oppo) ?([\w ]+) bui/i
      // OPPO
    ],
    [_, E, [y, M]],
    [
      /(kobo)\s(ereader|touch)/i,
      // Kobo
      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
      // HP TouchPad
      /(kindle)\/([\w\.]+)/i
      // Kindle
    ],
    [_, E, [y, ee]],
    [
      /(surface duo)/i
      // Surface Duo
    ],
    [E, [_, go], [y, ee]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i
      // Fairphone
    ],
    [E, [_, "Fairphone"], [y, M]],
    [
      /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      // Nvidia Tablets
    ],
    [E, [_, wo], [y, ee]],
    [
      /(sprint) (\w+)/i
      // Sprint Phones
    ],
    [_, E, [y, M]],
    [
      /(kin\.[onetw]{3})/i
      // Microsoft Kin
    ],
    [[E, /\./g, " "], [_, go], [y, M]],
    [
      /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      // Zebra
    ],
    [E, [_, xo], [y, ee]],
    [
      /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
    ],
    [E, [_, xo], [y, M]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i
      // Samsung
    ],
    [_, [y, pe]],
    [
      /hbbtv.+maple;(\d+)/i
    ],
    [[E, /^/, "SmartTV"], [_, Pr], [y, pe]],
    [
      /(vizio)(?: |.+model\/)(\w+-\w+)/i,
      // Vizio
      /tcast.+(lg)e?. ([-\w]+)/i
      // LG SmartTV
    ],
    [_, E, [y, pe]],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
    ],
    [[_, bn], [y, pe]],
    [
      /(apple) ?tv/i
      // Apple TV
    ],
    [_, [E, lr + " TV"], [y, pe]],
    [
      /crkey.*devicetype\/chromecast/i
      // Google Chromecast Third Generation
    ],
    [[E, St + " Third Generation"], [_, Vt], [y, pe]],
    [
      /crkey.*devicetype\/([^/]*)/i
      // Google Chromecast with specific device type
    ],
    [[E, /^/, "Chromecast "], [_, Vt], [y, pe]],
    [
      /fuchsia.*crkey/i
      // Google Chromecast Nest Hub
    ],
    [[E, St + " Nest Hub"], [_, Vt], [y, pe]],
    [
      /crkey/i
      // Google Chromecast, Linux-based or unknown
    ],
    [[E, St], [_, Vt], [y, pe]],
    [
      /(portaltv)/i
      // Facebook Portal TV
    ],
    [E, [_, Eo], [y, pe]],
    [
      /droid.+aft(\w+)( bui|\))/i
      // Fire TV
    ],
    [E, [_, pn], [y, pe]],
    [
      /(shield \w+ tv)/i
      // Nvidia Shield TV
    ],
    [E, [_, wo], [y, pe]],
    [
      /\(dtv[\);].+(aquos)/i,
      /(aquos-tv[\w ]+)\)/i
      // Sharp
    ],
    [E, [_, da], [y, pe]],
    [
      /(bravia[\w ]+)( bui|\))/i
      // Sony
    ],
    [E, [_, Lr], [y, pe]],
    [
      /(mi(tv|box)-?\w+) bui/i
      // Xiaomi
    ],
    [E, [_, yo], [y, pe]],
    [
      /Hbbtv.*(technisat) (.*);/i
      // TechniSAT
    ],
    [_, E, [y, pe]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
      // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      // HbbTV devices
    ],
    [[_, /.+\/(\w+)/, "$1", lt, { LG: "lge" }], [E, Tn], [y, pe]],
    [
      // SmartTV from Unidentified Vendors
      /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
    ],
    [E, [y, pe]],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:|large screen[\w ]+safari)\b/i
    ],
    [[y, pe]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(playstation \w+)/i
      // Playstation
    ],
    [E, [_, Lr], [y, Hr]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      // Microsoft Xbox
    ],
    [E, [_, go], [y, Hr]],
    [
      /(ouya)/i,
      // Ouya
      /(nintendo) (\w+)/i,
      // Nintendo
      /(retroid) (pocket ([^\)]+))/i
      // Retroid Pocket
    ],
    [_, E, [y, Hr]],
    [
      /droid.+; (shield)( bui|\))/i
      // Nvidia Portable
    ],
    [E, [_, wo], [y, Hr]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      // Samsung Galaxy Watch
    ],
    [E, [_, Pr], [y, at]],
    [
      /((pebble))app/i,
      // Pebble
      /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      // Asus ZenWatch / LG Watch / Pixel Watch
    ],
    [_, E, [y, at]],
    [
      /(ow(?:19|20)?we?[1-3]{1,3})/i
      // Oppo Watch
    ],
    [E, [_, vo], [y, at]],
    [
      /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      // Apple Watch
    ],
    [E, [_, lr], [y, at]],
    [
      /(opwwe\d{3})/i
      // OnePlus Watch
    ],
    [E, [_, fa], [y, at]],
    [
      /(moto 360)/i
      // Motorola 360
    ],
    [E, [_, mo], [y, at]],
    [
      /(smartwatch 3)/i
      // Sony SmartWatch
    ],
    [E, [_, Lr], [y, at]],
    [
      /(g watch r)/i
      // LG G Watch R
    ],
    [E, [_, bn], [y, at]],
    [
      /droid.+; (wt63?0{2,3})\)/i
    ],
    [E, [_, xo], [y, at]],
    [
      ///////////////////
      // XR
      ///////////////////
      /droid.+; (glass) \d/i
      // Google Glass
    ],
    [E, [_, Vt], [y, hn]],
    [
      /(pico) (4|neo3(?: link|pro)?)/i
      // Pico
    ],
    [_, E, [y, hn]],
    [
      /(quest( \d| pro)?s?).+vr/i
      // Meta Quest
    ],
    [E, [_, Eo], [y, hn]],
    [
      /mobile vr; rv.+firefox/i
      // Unidentifiable VR device using Firefox Reality / Wolvic
    ],
    [[y, hn]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      // Tesla
    ],
    [_, [y, qr]],
    [
      /(aeobc)\b/i
      // Echo Dot
    ],
    [E, [_, pn], [y, qr]],
    [
      /(homepod).+mac os/i
      // Apple HomePod
    ],
    [E, [_, lr], [y, qr]],
    [
      /windows iot/i
      // Unidentifiable embedded device using Windows IoT
    ],
    [[y, qr]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
    ],
    [E, [y, lt, { mobile: "Mobile", xr: "VR", "*": ee }]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      // Unidentifiable Tablet
    ],
    [[y, ee]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      // Unidentifiable Mobile
    ],
    [[y, M]],
    [
      /droid .+?; ([\w\. -]+)( bui|\))/i
      // Generic Android Device
    ],
    [E, [_, "Generic"]]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i
      // EdgeHTML
    ],
    [C, [A, yn + "HTML"]],
    [
      /(arkweb)\/([\w\.]+)/i
      // ArkWeb
    ],
    [A, C],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      // Blink
    ],
    [C, [A, "Blink"]],
    [
      /(presto)\/([\w\.]+)/i,
      // Presto
      /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
      // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
      /ekioh(flow)\/([\w\.]+)/i,
      // Flow
      /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
      // KHTML/Tasman/Links
      /(icab)[\/ ]([23]\.[\d\.]+)/i,
      // iCab
      /\b(libweb)/i
      // LibWeb
    ],
    [A, C],
    [
      /ladybird\//i
    ],
    [[A, "LibWeb"]],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i
      // Gecko
    ],
    [C, A]
  ],
  os: [
    [
      // Windows
      /(windows nt) (6\.[23]); arm/i
      // Windows RT
    ],
    [[A, /N/, "R"], [C, lt, ga]],
    [
      /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
      // Windows IoT/Mobile/Phone
      // Windows NT/3.1/95/98/ME/2000/XP/Vista/7/8/8.1/10/11
      /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
    ],
    [A, C],
    [
      /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
      /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
    ],
    [[C, /(;|\))/g, "", lt, ga], [A, Lo]],
    [
      /(windows ce)\/?([\d\.]*)/i
      // Windows CE
    ],
    [A, C],
    [
      // iOS/macOS
      /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
      // iOS
      /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
      /cfnetwork\/.+darwin/i
    ],
    [[C, /_/g, "."], [A, "iOS"]],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      // Mac OS
    ],
    [[A, "macOS"], [C, /_/g, "."]],
    [
      // Google Chromecast
      /android ([\d\.]+).*crkey/i
      // Google Chromecast, Android-based
    ],
    [C, [A, St + " Android"]],
    [
      /fuchsia.*crkey\/([\d\.]+)/i
      // Google Chromecast, Fuchsia-based
    ],
    [C, [A, St + " Fuchsia"]],
    [
      /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      // Google Chromecast, Linux-based Smart Speaker
    ],
    [C, [A, St + " SmartSpeaker"]],
    [
      /linux.*crkey\/([\d\.]+)/i
      // Google Chromecast, Legacy Linux-based
    ],
    [C, [A, St + " Linux"]],
    [
      /crkey\/([\d\.]+)/i
      // Google Chromecast, unknown
    ],
    [C, [A, St]],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86)/i
      // Android-x86
    ],
    [C, A],
    [
      /(ubuntu) ([\w\.]+) like android/i
      // Ubuntu Touch
    ],
    [[A, /(.+)/, "$1 Touch"], C],
    [
      /(harmonyos)[\/ ]?([\d\.]*)/i,
      // HarmonyOS
      // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
      /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
    ],
    [A, C],
    [
      /\(bb(10);/i
      // BlackBerry 10
    ],
    [C, [A, la]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      // Symbian
    ],
    [C, [A, "Symbian"]],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      // Firefox OS
    ],
    [C, [A, Nr + " OS"]],
    [
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
      // WebOS
      /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
    ],
    [C, [A, "webOS"]],
    [
      /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      // https://webostv.developer.lge.com/develop/specifications/web-api-and-web-engine
    ],
    [[C, lt, { 25: "120", 24: "108", 23: "94", 22: "87", 6: "79", 5: "68", 4: "53", 3: "38", 2: "538", 1: "537", "*": "TV" }], [A, "webOS"]],
    [
      /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      // watchOS
    ],
    [C, [A, "watchOS"]],
    [
      // Google ChromeOS
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      // Chromium OS
    ],
    [[A, "Chrome OS"], C],
    [
      // Smart TVs
      /panasonic;(viera)/i,
      // Panasonic Viera
      /(netrange)mmh/i,
      // Netrange
      /(nettv)\/(\d+\.[\w\.]+)/i,
      // NetTV
      // Console
      /(nintendo|playstation) (\w+)/i,
      // Nintendo/Playstation
      /(xbox); +xbox ([^\);]+)/i,
      // Microsoft Xbox (360, One, X, S, Series X, Series S)
      /(pico) .+os([\w\.]+)/i,
      // Pico
      // Other
      /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
      // Joli/Palm
      /linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
      // Mint
      /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
      // Mageia/VectorLinux/Fuchsia/ArcaOS/Arch
      /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
      // Ubuntu/Debian/SUSE/Gentoo/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire/Knoppix
      /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
      // Solaris
      /\b(aix)[; ]([1-9\.]{0,4})/i,
      // AIX
      /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
      // Hurd/Linux/MorphOS
      /(gnu) ?([\w\.]*)/i,
      // GNU
      /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
      // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
      /(haiku) ?(r\d)?/i
      // Haiku
    ],
    [A, C],
    [
      /(sunos) ?([\d\.]*)/i
      // Solaris
    ],
    [[A, "Solaris"], C],
    [
      /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
      // BeOS/OS2/AmigaOS/OpenVMS/HP-UX/SerenityOS
      /(unix) ?([\w\.]*)/i
      // UNIX
    ],
    [A, C]
  ]
}, gn = function() {
  var e = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
  return vt.call(e.init, [
    [Pe, [A, C, Jr, y]],
    [mt, [Le]],
    [ct, [y, E, _]],
    [Xe, [A, C]],
    [ze, [A, C]]
  ]), vt.call(e.isIgnore, [
    [Pe, [C, Jr]],
    [Xe, [C]],
    [ze, [C]]
  ]), vt.call(e.isIgnoreRgx, [
    [Pe, / ?browser$/i],
    [ze, / ?os$/i]
  ]), vt.call(e.toString, [
    [Pe, [A, C]],
    [mt, [Le]],
    [ct, [_, E]],
    [Xe, [A, C]],
    [ze, [A, C]]
  ]), e;
}(), Dc = function(e, t) {
  var r = gn.init[t], n = gn.isIgnore[t] || 0, o = gn.isIgnoreRgx[t] || 0, i = gn.toString[t] || 0;
  function a() {
    vt.call(this, r);
  }
  return a.prototype.getItem = function() {
    return e;
  }, a.prototype.withClientHints = function() {
    return Tt ? Tt.getHighEntropyValues(es).then(function(l) {
      return e.setCH(new ts(l, !1)).parseCH().get();
    }) : e.parseCH().get();
  }, a.prototype.withFeatureCheck = function() {
    return e.detectFeature().get();
  }, t != hr && (a.prototype.is = function(l) {
    var f = !1;
    for (var u in this)
      if (this.hasOwnProperty(u) && !No(n, u) && wt(o ? vr(o, this[u]) : this[u]) == wt(o ? vr(o, l) : l)) {
        if (f = !0, l != Ft)
          break;
      } else if (l == Ft && f) {
        f = !f;
        break;
      }
    return f;
  }, a.prototype.toString = function() {
    var l = mr;
    for (var f in i)
      typeof this[i[f]] !== Ft && (l += (l ? " " : mr) + this[i[f]]);
    return l || Ft;
  }), Tt || (a.prototype.then = function(l) {
    var f = this, u = function() {
      for (var m in f)
        f.hasOwnProperty(m) && (this[m] = f[m]);
    };
    u.prototype = {
      is: a.prototype.is,
      toString: a.prototype.toString
    };
    var g = new u();
    return l(g), g;
  }), new a();
};
function ts(e, t) {
  if (e = e || {}, vt.call(this, es), t)
    vt.call(this, [
      [Qo, _o(e[Dt])],
      [ei, _o(e[Sc])],
      [M, /\?1/.test(e[$c])],
      [E, Ur(e[Fc])],
      [pr, Ur(e[Qa])],
      [ti, Ur(e[Pc])],
      [Le, Ur(e[kc])],
      [Wt, _o(e[Tc])],
      [jn, Ur(e[Oc])]
    ]);
  else
    for (var r in e)
      this.hasOwnProperty(r) && typeof e[r] !== Ft && (this[r] = e[r]);
}
function va(e, t, r, n) {
  return this.get = function(o) {
    return o ? this.data.hasOwnProperty(o) ? this.data[o] : void 0 : this.data;
  }, this.set = function(o, i) {
    return this.data[o] = i, this;
  }, this.setCH = function(o) {
    return this.uaCH = o, this;
  }, this.detectFeature = function() {
    if (Ne && Ne.userAgent == this.ua)
      switch (this.itemType) {
        case Pe:
          Ne.brave && typeof Ne.brave.isBrave == kn && this.set(A, "Brave");
          break;
        case ct:
          !this.get(y) && Tt && Tt[M] && this.set(y, M), this.get(E) == "Macintosh" && Ne && typeof Ne.standalone !== Ft && Ne.maxTouchPoints && Ne.maxTouchPoints > 2 && this.set(E, "iPad").set(y, ee);
          break;
        case ze:
          !this.get(A) && Tt && Tt[pr] && this.set(A, Tt[pr]);
          break;
        case hr:
          var o = this.data, i = function(a) {
            return o[a].getItem().detectFeature().get();
          };
          this.set(Pe, i(Pe)).set(mt, i(mt)).set(ct, i(ct)).set(Xe, i(Xe)).set(ze, i(ze));
      }
    return this;
  }, this.parseUA = function() {
    return this.itemType != hr && Ro.call(this.data, this.ua, this.rgxMap), this.itemType == Pe && this.set(Jr, Ao(this.get(C))), this;
  }, this.parseCH = function() {
    var o = this.uaCH, i = this.rgxMap;
    switch (this.itemType) {
      case Pe:
      case Xe:
        var a = o[ei] || o[Qo], l;
        if (a)
          for (var f in a) {
            var u = a[f].brand || a[f], g = a[f].version;
            this.itemType == Pe && !/not.a.brand/i.test(u) && (!l || /Chrom/.test(l) && u != pa || l == yn && /WebView2/.test(u)) && (u = lt(u, Ic), l = this.get(A), l && !/Chrom/.test(l) && /Chrom/.test(u) || this.set(A, u).set(C, g).set(Jr, Ao(g)), l = u), this.itemType == Xe && u == pa && this.set(C, g);
          }
        break;
      case mt:
        var m = o[Le];
        m && (m && o[jn] == "64" && (m += "64"), Ro.call(this.data, m + ";", i));
        break;
      case ct:
        if (o[M] && this.set(y, M), o[E] && (this.set(E, o[E]), !this.get(y) || !this.get(_))) {
          var x = {};
          Ro.call(x, "droid 9; " + o[E] + ")", i), !this.get(y) && x.type && this.set(y, x.type), !this.get(_) && x.vendor && this.set(_, x.vendor);
        }
        if (o[Wt]) {
          var $;
          if (typeof o[Wt] != "string")
            for (var R = 0; !$ && R < o[Wt].length; )
              $ = lt(o[Wt][R++], ma);
          else
            $ = lt(o[Wt], ma);
          this.set(y, $);
        }
        break;
      case ze:
        var P = o[pr];
        if (P) {
          var T = o[ti];
          P == Lo && (T = parseInt(Ao(T), 10) >= 13 ? "11" : "10"), this.set(A, P).set(C, T);
        }
        this.get(A) == Lo && o[E] == "Xbox" && this.set(A, "Xbox").set(C, void 0);
        break;
      case hr:
        var I = this.data, B = function(V) {
          return I[V].getItem().setCH(o).parseCH().get();
        };
        this.set(Pe, B(Pe)).set(mt, B(mt)).set(ct, B(ct)).set(Xe, B(Xe)).set(ze, B(ze));
    }
    return this;
  }, vt.call(this, [
    ["itemType", e],
    ["ua", t],
    ["uaCH", n],
    ["rgxMap", r],
    ["data", Dc(this, e)]
  ]), this;
}
function yt(e, t, r) {
  if (typeof e === wr ? (On(e, !0) ? (typeof t === wr && (r = t), t = e) : (r = e, t = void 0), e = void 0) : typeof e === Po && !On(t, !0) && (r = t, t = void 0), r && typeof r.append === kn) {
    var n = {};
    r.forEach(function(f, u) {
      n[u] = f;
    }), r = n;
  }
  if (!(this instanceof yt))
    return new yt(e, t, r).getResult();
  var o = typeof e === Po ? e : (
    // Passed user-agent string
    r && r[ia] ? r[ia] : (
      // User-Agent from passed headers
      Ne && Ne.userAgent ? Ne.userAgent : (
        // navigator.userAgent
        mr
      )
    )
  ), i = new ts(r, !0), a = t ? Nc(wa, t) : wa, l = function(f) {
    return f == hr ? function() {
      return new va(f, o, a, i).set("ua", o).set(Pe, this.getBrowser()).set(mt, this.getCPU()).set(ct, this.getDevice()).set(Xe, this.getEngine()).set(ze, this.getOS()).get();
    } : function() {
      return new va(f, o, a[f], i).parseUA().get();
    };
  };
  return vt.call(this, [
    ["getBrowser", l(Pe)],
    ["getCPU", l(mt)],
    ["getDevice", l(ct)],
    ["getEngine", l(Xe)],
    ["getOS", l(ze)],
    ["getResult", l(hr)],
    ["getUA", function() {
      return o;
    }],
    ["setUA", function(f) {
      return Er(f) && (o = f.length > Fo ? Tn(f, Fo) : f), this;
    }]
  ]).setUA(o), this;
}
yt.VERSION = Cc;
yt.BROWSER = Hn([A, C, Jr, y]);
yt.CPU = Hn([Le]);
yt.DEVICE = Hn([E, _, y, Hr, M, pe, ee, at, qr]);
yt.ENGINE = yt.OS = Hn([A, C]);
let ya = !1;
const Uc = () => ya ? Promise.resolve(!0) : new Promise((e) => {
  const t = document.createElement("iframe");
  t.src = "https://watcher.blockbots.org:8888/", t.style.display = "none", t.onload = () => {
    ya = !0, e(!0);
  }, document.body.appendChild(t);
}), Bc = () => Object.keys(window).find((e) => e.match(/^cdc_[a-zA-Z0-9]+_(Array|Promise|Symbol)$/)), Mc = () => typeof window.__puppeteer_evaluation_script__ < "u" || typeof window.__pwPage < "u", jc = () => {
  try {
    return performance.getEntriesByType("mark").some((e) => e.name.startsWith("CDP"));
  } catch {
    return !1;
  }
}, Hc = () => {
  try {
    return !!(window.chrome && window.chrome.debugger);
  } catch {
    return !1;
  }
}, qc = () => {
  try {
    const e = Function.prototype.toString.toString();
    if (!e.includes("[native code]") || e.length > 200 || !Function.prototype.toString.toString.toString.call(
      Function.prototype.toString.toString
    ).includes("[native code]"))
      return !0;
    const r = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
    return !!(r && (r.configurable === !1 || typeof r.value != "function"));
  } catch {
    return !0;
  }
}, Vc = () => !window.performance || !window.performance.memory ? Promise.resolve(!1) : new Promise((e) => {
  const t = [], r = setInterval(() => {
    new Array(1e5).fill(0).map(() => Math.random());
  }, 100);
  let n = 0;
  const o = setInterval(() => {
    t.push(performance.memory.usedJSHeapSize), n++, n >= 6 && (clearInterval(r), clearInterval(o), e(t.every((i) => i === t[0])));
  }, 300);
}), zc = () => new Promise((e) => {
  const t = [];
  let r = performance.now(), n = 0;
  const o = setInterval(() => {
    const i = performance.now();
    if (t.push(i - r - 20), r = i, ++n >= 15) {
      clearInterval(o);
      const a = t.reduce((l, f) => l + f * f, 0) / t.length;
      e(a < 0.05);
    }
  }, 20);
}), Wc = () => {
  try {
    const e = document.createElement("canvas"), t = e.getContext("webgl") || e.getContext("experimental-webgl");
    if (!t)
      return "";
    const r = t.getExtension("WEBGL_debug_renderer_info");
    return r && t.getParameter(r.UNMASKED_RENDERER_WEBGL) || "";
  } catch {
    return "";
  }
}, Jc = () => {
  const e = navigator.userAgent;
  if (!/Android|iPhone|Mobile/.test(e))
    return !1;
  const r = navigator.maxTouchPoints === 0 && !("ontouchstart" in window), n = Wc().toLowerCase(), o = /swiftshader|llvmpipe|mesa|virtualbox|vmware|software/.test(n), i = /adreno|mali|powervr|apple gpu/.test(n);
  return r || n !== "" && o && !i;
}, Gc = async () => {
  const e = {};
  e.playwright = !!(navigator.userAgent.includes("Playwright") || window.__playwright || window.__playwright_evaluate || window.__pw_manual || window.__pwPage || document.__playwright), e.puppeteer = !!(window._phantom || window.__nightmare || window.domAutomation || window.domAutomationController || window.callPhantom || window.__puppeteer_evaluation_script__), e.webdriver = !!navigator.webdriver, e.cdp_cdc_property = !!Bc(), e.cdp_binding = Mc(), e.cdp_perf_marks = jc(), e.cdp_debugger_api = Hc(), e.cdp_patched_tostring = qc();
  const t = navigator.userAgent;
  e.headless_ua = t.includes("HeadlessChrome") || t.includes("Headless"), e.no_plugins = navigator.plugins.length === 0, e.no_languages = !navigator.languages || navigator.languages.length === 0, e.permissions_inconsistent = !1;
  try {
    if (navigator.permissions && typeof navigator.permissions.query == "function") {
      const r = await navigator.permissions.query({ name: "notifications" });
      e.permissions_inconsistent = Notification.permission === "denied" && r.state === "prompt";
    }
  } catch {
    e.permissions_inconsistent = !1;
  }
  try {
    [e.heap_static, e.loop_jitter_static] = await Promise.all([
      Vc(),
      zc()
    ]);
  } catch {
    e.heap_static = !1, e.loop_jitter_static = !1;
  }
  try {
    e.cloud_phone_suspect = Jc();
  } catch {
    e.cloud_phone_suspect = !1;
  }
  return e;
}, Kc = [
  "playwright",
  "puppeteer",
  "webdriver",
  "cdp_cdc_property",
  "cdp_binding",
  "cdp_perf_marks",
  "cdp_debugger_api",
  "cdp_patched_tostring",
  "headless_ua",
  "no_plugins",
  "no_languages",
  "permissions_inconsistent",
  "heap_static",
  "loop_jitter_static",
  "cloud_phone_suspect"
], Xc = (e) => Kc.map((t) => e[t] ? "1" : "0").join(""), Yc = async (e = 3e3, t = 200) => new Promise((r) => {
  const n = Date.now(), o = setInterval(() => {
    (Io() || Date.now() - n > e) && (clearInterval(o), r(Io()));
  }, t);
});
function Io() {
  return document.cookie.includes("__bbst=") && document.cookie.includes("__bbts=");
}
function Gr(e) {
  let t = e + "=", n = decodeURIComponent(document.cookie).split(";");
  for (let o = 0; o < n.length; o++) {
    let i = n[o];
    for (; i.charAt(0) == " "; )
      i = i.substring(1);
    if (i.indexOf(t) == 0)
      return i.substring(t.length, i.length);
  }
  return "";
}
function Jt(e, t, r = {}) {
  r = {
    path: "/",
    ...r
  };
  let n = encodeURIComponent(e) + "=" + encodeURIComponent(t);
  for (const o in r) {
    n += "; " + o;
    const i = r[o];
    i !== !0 && (n += "=" + i);
  }
  document.cookie = n;
}
function Zc(e) {
  Array.isArray(e) || (e = [e]);
  const t = "Thu, 01 Jan 1970 00:00:00 GMT";
  e.forEach((r) => {
    document.cookie = `${r}=; Path=/; Expires=${t}`, document.cookie = `${r}=; Path=/; Domain=${location.hostname}; Expires=${t}`;
  });
}
function rs(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Qc } = Object.prototype, { getPrototypeOf: ri } = Object, { iterator: qn, toStringTag: ns } = Symbol, Vn = /* @__PURE__ */ ((e) => (t) => {
  const r = Qc.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), et = (e) => (e = e.toLowerCase(), (t) => Vn(t) === e), zn = (e) => (t) => typeof t === e, { isArray: _r } = Array, Kr = zn("undefined");
function en(e) {
  return e !== null && !Kr(e) && e.constructor !== null && !Kr(e.constructor) && Ie(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const os = et("ArrayBuffer");
function eu(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && os(e.buffer), t;
}
const tu = zn("string"), Ie = zn("function"), is = zn("number"), tn = (e) => e !== null && typeof e == "object", ru = (e) => e === !0 || e === !1, xn = (e) => {
  if (Vn(e) !== "object")
    return !1;
  const t = ri(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ns in e) && !(qn in e);
}, nu = (e) => {
  if (!tn(e) || en(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ou = et("Date"), iu = et("File"), au = et("Blob"), su = et("FileList"), lu = (e) => tn(e) && Ie(e.pipe), cu = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ie(e.append) && ((t = Vn(e)) === "formdata" || // detect form-data instance
  t === "object" && Ie(e.toString) && e.toString() === "[object FormData]"));
}, uu = et("URLSearchParams"), [fu, du, hu, pu] = ["ReadableStream", "Request", "Response", "Headers"].map(et), bu = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function rn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), _r(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (en(e))
      return;
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let l;
    for (n = 0; n < a; n++)
      l = i[n], t.call(null, e[l], l, e);
  }
}
function as(e, t) {
  if (en(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Gt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ss = (e) => !Kr(e) && e !== Gt;
function Do() {
  const { caseless: e } = ss(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && as(t, o) || o;
    xn(t[i]) && xn(n) ? t[i] = Do(t[i], n) : xn(n) ? t[i] = Do({}, n) : _r(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && rn(arguments[n], r);
  return t;
}
const gu = (e, t, r, { allOwnKeys: n } = {}) => (rn(t, (o, i) => {
  r && Ie(o) ? e[i] = rs(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), mu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), wu = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, vu = (e, t, r, n) => {
  let o, i, a;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = r !== !1 && ri(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, yu = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, xu = (e) => {
  if (!e)
    return null;
  if (_r(e))
    return e;
  let t = e.length;
  if (!is(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Eu = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ri(Uint8Array)), _u = (e, t) => {
  const n = (e && e[qn]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Au = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Ru = et("HTMLFormElement"), Cu = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), xa = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Su = et("RegExp"), ls = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  rn(r, (o, i) => {
    let a;
    (a = t(o, i, e)) !== !1 && (n[i] = a || o);
  }), Object.defineProperties(e, n);
}, ku = (e) => {
  ls(e, (t, r) => {
    if (Ie(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Ie(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ou = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return _r(e) ? n(e) : n(String(e).split(t)), r;
}, Tu = () => {
}, $u = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Fu(e) {
  return !!(e && Ie(e.append) && e[ns] === "FormData" && e[qn]);
}
const Pu = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (tn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (en(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = _r(n) ? [] : {};
        return rn(n, (a, l) => {
          const f = r(a, o + 1);
          !Kr(f) && (i[l] = f);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Lu = et("AsyncFunction"), Nu = (e) => e && (tn(e) || Ie(e)) && Ie(e.then) && Ie(e.catch), cs = ((e, t) => e ? setImmediate : t ? ((r, n) => (Gt.addEventListener("message", ({ source: o, data: i }) => {
  o === Gt && i === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), Gt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ie(Gt.postMessage)
), Iu = typeof queueMicrotask < "u" ? queueMicrotask.bind(Gt) : typeof process < "u" && process.nextTick || cs, Du = (e) => e != null && Ie(e[qn]), v = {
  isArray: _r,
  isArrayBuffer: os,
  isBuffer: en,
  isFormData: cu,
  isArrayBufferView: eu,
  isString: tu,
  isNumber: is,
  isBoolean: ru,
  isObject: tn,
  isPlainObject: xn,
  isEmptyObject: nu,
  isReadableStream: fu,
  isRequest: du,
  isResponse: hu,
  isHeaders: pu,
  isUndefined: Kr,
  isDate: ou,
  isFile: iu,
  isBlob: au,
  isRegExp: Su,
  isFunction: Ie,
  isStream: lu,
  isURLSearchParams: uu,
  isTypedArray: Eu,
  isFileList: su,
  forEach: rn,
  merge: Do,
  extend: gu,
  trim: bu,
  stripBOM: mu,
  inherits: wu,
  toFlatObject: vu,
  kindOf: Vn,
  kindOfTest: et,
  endsWith: yu,
  toArray: xu,
  forEachEntry: _u,
  matchAll: Au,
  isHTMLForm: Ru,
  hasOwnProperty: xa,
  hasOwnProp: xa,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ls,
  freezeMethods: ku,
  toObjectSet: Ou,
  toCamelCase: Cu,
  noop: Tu,
  toFiniteNumber: $u,
  findKey: as,
  global: Gt,
  isContextDefined: ss,
  isSpecCompliantForm: Fu,
  toJSONObject: Pu,
  isAsyncFn: Lu,
  isThenable: Nu,
  setImmediate: cs,
  asap: Iu,
  isIterable: Du
};
function j(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
v.inherits(j, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: v.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const us = j.prototype, fs = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  fs[e] = { value: e };
});
Object.defineProperties(j, fs);
Object.defineProperty(us, "isAxiosError", { value: !0 });
j.from = (e, t, r, n, o, i) => {
  const a = Object.create(us);
  return v.toFlatObject(e, a, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), j.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const Uu = null;
function Uo(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function ds(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ea(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = ds(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Bu(e) {
  return v.isArray(e) && !e.some(Uo);
}
const Mu = v.toFlatObject(v, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Wn(e, t, r) {
  if (!v.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = v.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, T) {
    return !v.isUndefined(T[P]);
  });
  const n = r.metaTokens, o = r.visitor || g, i = r.dots, a = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && v.isSpecCompliantForm(t);
  if (!v.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(R) {
    if (R === null)
      return "";
    if (v.isDate(R))
      return R.toISOString();
    if (v.isBoolean(R))
      return R.toString();
    if (!f && v.isBlob(R))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(R) || v.isTypedArray(R) ? f && typeof Blob == "function" ? new Blob([R]) : Buffer.from(R) : R;
  }
  function g(R, P, T) {
    let I = R;
    if (R && !T && typeof R == "object") {
      if (v.endsWith(P, "{}"))
        P = n ? P : P.slice(0, -2), R = JSON.stringify(R);
      else if (v.isArray(R) && Bu(R) || (v.isFileList(R) || v.endsWith(P, "[]")) && (I = v.toArray(R)))
        return P = ds(P), I.forEach(function(V, Q) {
          !(v.isUndefined(V) || V === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ea([P], Q, i) : a === null ? P : P + "[]",
            u(V)
          );
        }), !1;
    }
    return Uo(R) ? !0 : (t.append(Ea(T, P, i), u(R)), !1);
  }
  const m = [], x = Object.assign(Mu, {
    defaultVisitor: g,
    convertValue: u,
    isVisitable: Uo
  });
  function $(R, P) {
    if (!v.isUndefined(R)) {
      if (m.indexOf(R) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      m.push(R), v.forEach(R, function(I, B) {
        (!(v.isUndefined(I) || I === null) && o.call(
          t,
          I,
          v.isString(B) ? B.trim() : B,
          P,
          x
        )) === !0 && $(I, P ? P.concat(B) : [B]);
      }), m.pop();
    }
  }
  if (!v.isObject(e))
    throw new TypeError("data must be an object");
  return $(e), t;
}
function _a(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ni(e, t) {
  this._pairs = [], e && Wn(e, this, t);
}
const hs = ni.prototype;
hs.append = function(t, r) {
  this._pairs.push([t, r]);
};
hs.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, _a);
  } : _a;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ju(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ps(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ju;
  v.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = v.isURLSearchParams(t) ? t.toString() : new ni(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Aa {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    v.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const bs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Hu = typeof URLSearchParams < "u" ? URLSearchParams : ni, qu = typeof FormData < "u" ? FormData : null, Vu = typeof Blob < "u" ? Blob : null, zu = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Hu,
    FormData: qu,
    Blob: Vu
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, oi = typeof window < "u" && typeof document < "u", Bo = typeof navigator == "object" && navigator || void 0, Wu = oi && (!Bo || ["ReactNative", "NativeScript", "NS"].indexOf(Bo.product) < 0), Ju = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Gu = oi && window.location.href || "http://localhost", Ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: oi,
  hasStandardBrowserEnv: Wu,
  hasStandardBrowserWebWorkerEnv: Ju,
  navigator: Bo,
  origin: Gu
}, Symbol.toStringTag, { value: "Module" })), Re = {
  ...Ku,
  ...zu
};
function Xu(e, t) {
  return Wn(e, new Re.classes.URLSearchParams(), {
    visitor: function(r, n, o, i) {
      return Re.isNode && v.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Yu(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Zu(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function gs(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    if (a === "__proto__")
      return !0;
    const l = Number.isFinite(+a), f = i >= r.length;
    return a = !a && v.isArray(o) ? o.length : a, f ? (v.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !l) : ((!o[a] || !v.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && v.isArray(o[a]) && (o[a] = Zu(o[a])), !l);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const r = {};
    return v.forEachEntry(e, (n, o) => {
      t(Yu(n), o, r, 0);
    }), r;
  }
  return null;
}
function Qu(e, t, r) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ii = {
  transitional: bs,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = v.isObject(t);
    if (i && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t))
      return o ? JSON.stringify(gs(t)) : t;
    if (v.isArrayBuffer(t) || v.isBuffer(t) || v.isStream(t) || v.isFile(t) || v.isBlob(t) || v.isReadableStream(t))
      return t;
    if (v.isArrayBufferView(t))
      return t.buffer;
    if (v.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Xu(t, this.formSerializer).toString();
      if ((l = v.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Wn(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), Qu(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ii.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (v.isResponse(t) || v.isReadableStream(t))
      return t;
    if (t && v.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? j.from(l, j.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Re.classes.FormData,
    Blob: Re.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ii.headers[e] = {};
});
const ai = ii, ef = v.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), tf = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && ef[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Ra = Symbol("internals");
function Br(e) {
  return e && String(e).trim().toLowerCase();
}
function En(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(En) : String(e);
}
function rf(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const nf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Co(e, t, r, n, o) {
  if (v.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!v.isString(t)) {
    if (v.isString(n))
      return t.indexOf(n) !== -1;
    if (v.isRegExp(n))
      return n.test(t);
  }
}
function of(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function af(e, t) {
  const r = v.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class Jn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(l, f, u) {
      const g = Br(f);
      if (!g)
        throw new Error("header name must be a non-empty string");
      const m = v.findKey(o, g);
      (!m || o[m] === void 0 || u === !0 || u === void 0 && o[m] !== !1) && (o[m || f] = En(l));
    }
    const a = (l, f) => v.forEach(l, (u, g) => i(u, g, f));
    if (v.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (v.isString(t) && (t = t.trim()) && !nf(t))
      a(tf(t), r);
    else if (v.isObject(t) && v.isIterable(t)) {
      let l = {}, f, u;
      for (const g of t) {
        if (!v.isArray(g))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = g[0]] = (f = l[u]) ? v.isArray(f) ? [...f, g[1]] : [f, g[1]] : g[1];
      }
      a(l, r);
    } else
      t != null && i(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Br(t), t) {
      const n = v.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return rf(o);
        if (v.isFunction(r))
          return r.call(this, o, n);
        if (v.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Br(t), t) {
      const n = v.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Co(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = Br(a), a) {
        const l = v.findKey(n, a);
        l && (!r || Co(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return v.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Co(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return v.forEach(this, (o, i) => {
      const a = v.findKey(n, i);
      if (a) {
        r[a] = En(o), delete r[i];
        return;
      }
      const l = t ? of(i) : String(i).trim();
      l !== i && delete r[i], r[l] = En(o), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return v.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && v.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Ra] = this[Ra] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const l = Br(a);
      n[l] || (af(o, a), n[l] = !0);
    }
    return v.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Jn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(Jn.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
v.freezeMethods(Jn);
const Ye = Jn;
function So(e, t) {
  const r = this || ai, n = t || r, o = Ye.from(n.headers);
  let i = n.data;
  return v.forEach(e, function(l) {
    i = l.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function ms(e) {
  return !!(e && e.__CANCEL__);
}
function Ar(e, t, r) {
  j.call(this, e ?? "canceled", j.ERR_CANCELED, t, r), this.name = "CanceledError";
}
v.inherits(Ar, j, {
  __CANCEL__: !0
});
function ws(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new j(
    "Request failed with status code " + r.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function sf(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function lf(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), g = n[i];
    a || (a = u), r[o] = f, n[o] = u;
    let m = i, x = 0;
    for (; m !== o; )
      x += r[m++], m = m % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - a < t)
      return;
    const $ = g && u - g;
    return $ ? Math.round(x * 1e3 / $) : void 0;
  };
}
function cf(e, t) {
  let r = 0, n = 1e3 / t, o, i;
  const a = (u, g = Date.now()) => {
    r = g, o = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const g = Date.now(), m = g - r;
    m >= n ? a(u, g) : (o = u, i || (i = setTimeout(() => {
      i = null, a(o);
    }, n - m)));
  }, () => o && a(o)];
}
const $n = (e, t, r = 3) => {
  let n = 0;
  const o = lf(50, 250);
  return cf((i) => {
    const a = i.loaded, l = i.lengthComputable ? i.total : void 0, f = a - n, u = o(f), g = a <= l;
    n = a;
    const m = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && l && g ? (l - a) / u : void 0,
      event: i,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(m);
  }, r);
}, Ca = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Sa = (e) => (...t) => v.asap(() => e(...t)), uf = Re.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, Re.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(Re.origin),
  Re.navigator && /(msie|trident)/i.test(Re.navigator.userAgent)
) : () => !0, ff = Re.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, i) {
      const a = [e + "=" + encodeURIComponent(t)];
      v.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), v.isString(n) && a.push("path=" + n), v.isString(o) && a.push("domain=" + o), i === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function df(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hf(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function vs(e, t, r) {
  let n = !df(t);
  return e && (n || r == !1) ? hf(e, t) : t;
}
const ka = (e) => e instanceof Ye ? { ...e } : e;
function Yt(e, t) {
  t = t || {};
  const r = {};
  function n(u, g, m, x) {
    return v.isPlainObject(u) && v.isPlainObject(g) ? v.merge.call({ caseless: x }, u, g) : v.isPlainObject(g) ? v.merge({}, g) : v.isArray(g) ? g.slice() : g;
  }
  function o(u, g, m, x) {
    if (v.isUndefined(g)) {
      if (!v.isUndefined(u))
        return n(void 0, u, m, x);
    } else
      return n(u, g, m, x);
  }
  function i(u, g) {
    if (!v.isUndefined(g))
      return n(void 0, g);
  }
  function a(u, g) {
    if (v.isUndefined(g)) {
      if (!v.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, g);
  }
  function l(u, g, m) {
    if (m in t)
      return n(u, g);
    if (m in e)
      return n(void 0, u);
  }
  const f = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, g, m) => o(ka(u), ka(g), m, !0)
  };
  return v.forEach(Object.keys({ ...e, ...t }), function(g) {
    const m = f[g] || o, x = m(e[g], t[g], g);
    v.isUndefined(x) && m !== l || (r[g] = x);
  }), r;
}
const ys = (e) => {
  const t = Yt({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: l } = t;
  t.headers = a = Ye.from(a), t.url = ps(vs(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let f;
  if (v.isFormData(r)) {
    if (Re.hasStandardBrowserEnv || Re.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((f = a.getContentType()) !== !1) {
      const [u, ...g] = f ? f.split(";").map((m) => m.trim()).filter(Boolean) : [];
      a.setContentType([u || "multipart/form-data", ...g].join("; "));
    }
  }
  if (Re.hasStandardBrowserEnv && (n && v.isFunction(n) && (n = n(t)), n || n !== !1 && uf(t.url))) {
    const u = o && i && ff.read(i);
    u && a.set(o, u);
  }
  return t;
}, pf = typeof XMLHttpRequest < "u", bf = pf && function(e) {
  return new Promise(function(r, n) {
    const o = ys(e);
    let i = o.data;
    const a = Ye.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: u } = o, g, m, x, $, R;
    function P() {
      $ && $(), R && R(), o.cancelToken && o.cancelToken.unsubscribe(g), o.signal && o.signal.removeEventListener("abort", g);
    }
    let T = new XMLHttpRequest();
    T.open(o.method.toUpperCase(), o.url, !0), T.timeout = o.timeout;
    function I() {
      if (!T)
        return;
      const V = Ye.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), oe = {
        data: !l || l === "text" || l === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: V,
        config: e,
        request: T
      };
      ws(function(de) {
        r(de), P();
      }, function(de) {
        n(de), P();
      }, oe), T = null;
    }
    "onloadend" in T ? T.onloadend = I : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(I);
    }, T.onabort = function() {
      T && (n(new j("Request aborted", j.ECONNABORTED, e, T)), T = null);
    }, T.onerror = function() {
      n(new j("Network Error", j.ERR_NETWORK, e, T)), T = null;
    }, T.ontimeout = function() {
      let Q = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const oe = o.transitional || bs;
      o.timeoutErrorMessage && (Q = o.timeoutErrorMessage), n(new j(
        Q,
        oe.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        e,
        T
      )), T = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in T && v.forEach(a.toJSON(), function(Q, oe) {
      T.setRequestHeader(oe, Q);
    }), v.isUndefined(o.withCredentials) || (T.withCredentials = !!o.withCredentials), l && l !== "json" && (T.responseType = o.responseType), u && ([x, R] = $n(u, !0), T.addEventListener("progress", x)), f && T.upload && ([m, $] = $n(f), T.upload.addEventListener("progress", m), T.upload.addEventListener("loadend", $)), (o.cancelToken || o.signal) && (g = (V) => {
      T && (n(!V || V.type ? new Ar(null, e, T) : V), T.abort(), T = null);
    }, o.cancelToken && o.cancelToken.subscribe(g), o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
    const B = sf(o.url);
    if (B && Re.protocols.indexOf(B) === -1) {
      n(new j("Unsupported protocol " + B + ":", j.ERR_BAD_REQUEST, e));
      return;
    }
    T.send(i || null);
  });
}, gf = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, l();
        const g = u instanceof Error ? u : this.reason;
        n.abort(g instanceof j ? g : new Ar(g instanceof Error ? g.message : g));
      }
    };
    let a = t && setTimeout(() => {
      a = null, i(new j(`timeout ${t} of ms exceeded`, j.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: f } = n;
    return f.unsubscribe = () => v.asap(l), f;
  }
}, mf = gf, wf = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, vf = async function* (e, t) {
  for await (const r of yf(e))
    yield* wf(r, t);
}, yf = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Oa = (e, t, r, n) => {
  const o = vf(e, t);
  let i = 0, a, l = (f) => {
    a || (a = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: g } = await o.next();
        if (u) {
          l(), f.close();
          return;
        }
        let m = g.byteLength;
        if (r) {
          let x = i += m;
          r(x);
        }
        f.enqueue(new Uint8Array(g));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(f) {
      return l(f), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Gn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", xs = Gn && typeof ReadableStream == "function", xf = Gn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Es = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ef = xs && Es(() => {
  let e = !1;
  const t = new Request(Re.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ta = 64 * 1024, Mo = xs && Es(() => v.isReadableStream(new Response("").body)), Fn = {
  stream: Mo && ((e) => e.body)
};
Gn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Fn[t] && (Fn[t] = v.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new j(`Response type '${t}' is not supported`, j.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const _f = async (e) => {
  if (e == null)
    return 0;
  if (v.isBlob(e))
    return e.size;
  if (v.isSpecCompliantForm(e))
    return (await new Request(Re.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (v.isArrayBufferView(e) || v.isArrayBuffer(e))
    return e.byteLength;
  if (v.isURLSearchParams(e) && (e = e + ""), v.isString(e))
    return (await xf(e)).byteLength;
}, Af = async (e, t) => {
  const r = v.toFiniteNumber(e.getContentLength());
  return r ?? _f(t);
}, Rf = Gn && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: o,
    cancelToken: i,
    timeout: a,
    onDownloadProgress: l,
    onUploadProgress: f,
    responseType: u,
    headers: g,
    withCredentials: m = "same-origin",
    fetchOptions: x
  } = ys(e);
  u = u ? (u + "").toLowerCase() : "text";
  let $ = mf([o, i && i.toAbortSignal()], a), R;
  const P = $ && $.unsubscribe && (() => {
    $.unsubscribe();
  });
  let T;
  try {
    if (f && Ef && r !== "get" && r !== "head" && (T = await Af(g, n)) !== 0) {
      let oe = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), J;
      if (v.isFormData(n) && (J = oe.headers.get("content-type")) && g.setContentType(J), oe.body) {
        const [de, Ce] = Ca(
          T,
          $n(Sa(f))
        );
        n = Oa(oe.body, Ta, de, Ce);
      }
    }
    v.isString(m) || (m = m ? "include" : "omit");
    const I = "credentials" in Request.prototype;
    R = new Request(t, {
      ...x,
      signal: $,
      method: r.toUpperCase(),
      headers: g.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: I ? m : void 0
    });
    let B = await fetch(R, x);
    const V = Mo && (u === "stream" || u === "response");
    if (Mo && (l || V && P)) {
      const oe = {};
      ["status", "statusText", "headers"].forEach((G) => {
        oe[G] = B[G];
      });
      const J = v.toFiniteNumber(B.headers.get("content-length")), [de, Ce] = l && Ca(
        J,
        $n(Sa(l), !0)
      ) || [];
      B = new Response(
        Oa(B.body, Ta, de, () => {
          Ce && Ce(), P && P();
        }),
        oe
      );
    }
    u = u || "text";
    let Q = await Fn[v.findKey(Fn, u) || "text"](B, e);
    return !V && P && P(), await new Promise((oe, J) => {
      ws(oe, J, {
        data: Q,
        headers: Ye.from(B.headers),
        status: B.status,
        statusText: B.statusText,
        config: e,
        request: R
      });
    });
  } catch (I) {
    throw P && P(), I && I.name === "TypeError" && /Load failed|fetch/i.test(I.message) ? Object.assign(
      new j("Network Error", j.ERR_NETWORK, e, R),
      {
        cause: I.cause || I
      }
    ) : j.from(I, I && I.code, e, R);
  }
}), jo = {
  http: Uu,
  xhr: bf,
  fetch: Rf
};
v.forEach(jo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const $a = (e) => `- ${e}`, Cf = (e) => v.isFunction(e) || e === null || e === !1, _s = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let a;
      if (n = r, !Cf(r) && (n = jo[(a = String(r)).toLowerCase()], n === void 0))
        throw new j(`Unknown adapter '${a}'`);
      if (n)
        break;
      o[a || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(o).map(
        ([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? i.length > 1 ? `since :
` + i.map($a).join(`
`) : " " + $a(i[0]) : "as no adapter specified";
      throw new j(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: jo
};
function ko(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ar(null, e);
}
function Fa(e) {
  return ko(e), e.headers = Ye.from(e.headers), e.data = So.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), _s.getAdapter(e.adapter || ai.adapter)(e).then(function(n) {
    return ko(e), n.data = So.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ye.from(n.headers), n;
  }, function(n) {
    return ms(n) || (ko(e), n && n.response && (n.response.data = So.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ye.from(n.response.headers))), Promise.reject(n);
  });
}
const As = "1.11.0", Kn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Kn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Pa = {};
Kn.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + As + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, l) => {
    if (t === !1)
      throw new j(
        o(a, " has been removed" + (r ? " in " + r : "")),
        j.ERR_DEPRECATED
      );
    return r && !Pa[a] && (Pa[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, l) : !0;
  };
};
Kn.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Sf(e, t, r) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = t[i];
    if (a) {
      const l = e[i], f = l === void 0 || a(l, i, e);
      if (f !== !0)
        throw new j("option " + i + " must be " + f, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new j("Unknown option " + i, j.ERR_BAD_OPTION);
  }
}
const _n = {
  assertOptions: Sf,
  validators: Kn
}, it = _n.validators;
class Pn {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Aa(),
      response: new Aa()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Yt(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && _n.assertOptions(n, {
      silentJSONParsing: it.transitional(it.boolean),
      forcedJSONParsing: it.transitional(it.boolean),
      clarifyTimeoutError: it.transitional(it.boolean)
    }, !1), o != null && (v.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : _n.assertOptions(o, {
      encode: it.function,
      serialize: it.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), _n.assertOptions(r, {
      baseUrl: it.spelling("baseURL"),
      withXsrfToken: it.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = i && v.merge(
      i.common,
      i[r.method]
    );
    i && v.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (R) => {
        delete i[R];
      }
    ), r.headers = Ye.concat(a, i);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(P) {
      typeof P.runWhen == "function" && P.runWhen(r) === !1 || (f = f && P.synchronous, l.unshift(P.fulfilled, P.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(P) {
      u.push(P.fulfilled, P.rejected);
    });
    let g, m = 0, x;
    if (!f) {
      const R = [Fa.bind(this), void 0];
      for (R.unshift(...l), R.push(...u), x = R.length, g = Promise.resolve(r); m < x; )
        g = g.then(R[m++], R[m++]);
      return g;
    }
    x = l.length;
    let $ = r;
    for (m = 0; m < x; ) {
      const R = l[m++], P = l[m++];
      try {
        $ = R($);
      } catch (T) {
        P.call(this, T);
        break;
      }
    }
    try {
      g = Fa.call(this, $);
    } catch (R) {
      return Promise.reject(R);
    }
    for (m = 0, x = u.length; m < x; )
      g = g.then(u[m++], u[m++]);
    return g;
  }
  getUri(t) {
    t = Yt(this.defaults, t);
    const r = vs(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ps(r, t.params, t.paramsSerializer);
  }
}
v.forEach(["delete", "get", "head", "options"], function(t) {
  Pn.prototype[t] = function(r, n) {
    return this.request(Yt(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, l) {
      return this.request(Yt(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Pn.prototype[t] = r(), Pn.prototype[t + "Form"] = r(!0);
});
const An = Pn;
class si {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((l) => {
        n.subscribe(l), i = l;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, t(function(i, a, l) {
      n.reason || (n.reason = new Ar(i, a, l), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new si(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const kf = si;
function Of(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Tf(e) {
  return v.isObject(e) && e.isAxiosError === !0;
}
const Ho = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ho).forEach(([e, t]) => {
  Ho[t] = e;
});
const $f = Ho;
function Rs(e) {
  const t = new An(e), r = rs(An.prototype.request, t);
  return v.extend(r, An.prototype, t, { allOwnKeys: !0 }), v.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Rs(Yt(e, o));
  }, r;
}
const he = Rs(ai);
he.Axios = An;
he.CanceledError = Ar;
he.CancelToken = kf;
he.isCancel = ms;
he.VERSION = As;
he.toFormData = Wn;
he.AxiosError = j;
he.Cancel = he.CanceledError;
he.all = function(t) {
  return Promise.all(t);
};
he.spread = Of;
he.isAxiosError = Tf;
he.mergeConfig = Yt;
he.AxiosHeaders = Ye;
he.formToJSON = (e) => gs(v.isHTMLForm(e) ? new FormData(e) : e);
he.getAdapter = _s.getAdapter;
he.HttpStatusCode = $f;
he.default = he;
const Ff = "https://api.blockbots.org";
async function Pf(e, t) {
  var r, n;
  try {
    return (await he.post(
      Ff + "/v1/js",
      e,
      {
        headers: {
          "X-API-Key": t,
          "Content-Type": "application/json"
        }
      }
    )).data;
  } catch (o) {
    return console.error("Request failed:", ((r = o.response) == null ? void 0 : r.data) || o.message), (n = o.response) == null ? void 0 : n.data;
  }
}
const La = async (e, t = null, r = null) => {
  let n = {};
  const o = yt(navigator.userAgent);
  n.os = o.os.name, n.ua = navigator.userAgent, n.fp = await Ac(), n.bl_fp = await Rc(), n.lang = navigator.language, n.s = Xc(await Gc()), n.st = Gr("__bbst"), n.ts = Gr("__bbts"), r && (n.extra_token = r), console.log(n), await Uc();
  const i = await Pf(n, e);
  return i && i.status === !0 && i.__bbst && i.__bbts && (Jt("__bbst", i.__bbst, { "Max-Age": 240, Secure: !0 }), Jt("__bbts", i.__bbts, { "Max-Age": 240, Secure: !0 }), i.__bbjwt && Jt("__bbjwt", i.__bbjwt, { "Max-Age": 240, Secure: !0 })), i && i.status === "forbidden" && Jt("__bb_decision", "1", { "Max-Age": 240, Secure: !0 }), i;
};
async function Lf(e) {
  return new Promise((t) => setTimeout(t, e));
}
const Nf = "https://api.blockbots.org";
async function If() {
  try {
    const e = Gr("__bbst"), t = Gr("__bbts");
    if (!e || !t)
      return !1;
    const r = new URLSearchParams({
      st: e,
      ts: t
    });
    return (await he.get(Nf + "/validate?" + r.toString())).status === 200;
  } catch {
    return Zc(["__bbst", "__bbts"]), !1;
  }
}
function Df(e, t) {
  return t = { exports: {} }, e(t, t.exports), t.exports;
}
var kt = Df(function(e, t) {
  (function(r) {
    var n = "function", o = "isNode", i = function(f, u) {
      return typeof f === u;
    }, a = function(f, u) {
      u !== null && (Array.isArray(u) ? u.map(function(g) {
        return a(f, g);
      }) : (l[o](u) || (u = document.createTextNode(u)), f.appendChild(u)));
    };
    function l(f, u) {
      var g = arguments, m = 1, x, $;
      if (f = l.isElement(f) ? f : document.createElement(f), i(u, "object") && !l[o](u) && !Array.isArray(u)) {
        m++;
        for (x in u)
          $ = u[x], x = l.attrMap[x] || x, i(x, n) ? x(f, $) : i($, n) ? f[x] = $ : f.setAttribute(x, $);
      }
      for (; m < g.length; m++)
        a(f, g[m]);
      return f;
    }
    l.attrMap = {}, l.isElement = function(f) {
      return f instanceof Element;
    }, l[o] = function(f) {
      return f instanceof Node;
    }, typeof Proxy < "u" && (l.proxy = new Proxy(l, {
      get: function(f, u) {
        return !(u in l) && (l[u] = l.bind(null, u)), l[u];
      }
    })), r(l, n);
  })(function(r, n) {
    e.exports = r;
  });
});
let qo = !1;
function Cs() {
  if (qo)
    return;
  qo = !0, document.body.innerHTML = `
      <div class="main-wrapper" role="main">
        <div class="main-content"></div>
      </div>
      <div class="footer" role="contentinfo">
        <div class="footer-inner">
          <div class="text-center" id="footer-text">
            Performance & security by <a href="https://blockbots.org" rel="nofollow noopener">BlockBots</a>
          </div>
        </div>
      </div>
    `, document.querySelector(".main-content").append(
    kt("h1", { class: "zone-name-title h1" }, location.hostname),
    kt(
      "div",
      { id: "loader", class: "spacer loading-verifying" },
      kt(
        "div",
        { class: "lds-ring" },
        kt("div"),
        kt("div"),
        kt("div"),
        kt("div")
      )
    ),
    kt(
      "div",
      {
        id: "loader-status",
        class: "core-msg spacer"
      },
      `${location.hostname} is checking your browser before accessing the site.`
    )
  );
}
function Uf() {
  const e = document.getElementById("loader");
  e && e.remove();
}
function Ss() {
  const e = document.getElementById("loader-status"), t = document.getElementById("loader");
  t && t.remove(), e && (e.textContent = "Access blocked. Automated traffic detected.", e.style.color = "#e5533d", e.style.fontWeight = "600");
}
function Bf() {
  document.body.innerHTML = "", qo = !1;
}
const ks = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,l=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=l;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const l="AES-GCM",o=new AbortController,a=Date.now(),s=async()=>{for(let i=n;i<=r;i+=1){if(o.signal.aborted||!c||!u)return null;try{const f=await crypto.subtle.decrypt({name:l,iv:g(i)},c,u);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,u=null;try{u=h(e);const i=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",i,l,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:s(),controller:o}}let y;onmessage=async e=>{const{type:t,payload:r,start:n,max:l}=e.data;let o=null;if(t==="abort")y?.abort(),y=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:s}=r||{};o=await m(s,a,l,n)}else{const{algorithm:a,challenge:s,salt:c}=r||{};o=w(s,c,a,l,n)}y=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Na = typeof self < "u" && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", ks], { type: "text/javascript;charset=utf-8" });
function Mf(e) {
  let t;
  try {
    if (t = Na && (self.URL || self.webkitURL).createObjectURL(Na), !t)
      throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(ks),
      {
        name: e == null ? void 0 : e.name
      }
    );
  }
}
const jf = "5";
var Xa;
typeof window < "u" && ((Xa = window.__svelte ?? (window.__svelte = {})).v ?? (Xa.v = /* @__PURE__ */ new Set())).add(jf);
const Hf = 1, qf = 4, Vf = 8, zf = 16, Wf = 1, Jf = 2, li = "[", Os = "[!", Ts = "]", br = {}, Fe = Symbol(), Gf = "http://www.w3.org/1999/xhtml", Kf = !1;
function $s(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Fs = Array.isArray, Xf = Array.prototype.indexOf, Yf = Array.from, Ln = Object.keys, Xr = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Zf = Object.getOwnPropertyDescriptors, Qf = Object.prototype, ed = Array.prototype, Ps = Object.getPrototypeOf, Ia = Object.isExtensible;
const gr = () => {
};
function Ls(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function td(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Ze = 2, Ns = 4, Xn = 8, ci = 16, xt = 32, Qt = 64, Nn = 128, je = 256, In = 512, De = 1024, dt = 2048, er = 4096, yr = 8192, Yn = 16384, rd = 32768, ui = 65536, nd = 1 << 19, Is = 1 << 20, Vo = 1 << 21, zr = Symbol("$state"), Ds = Symbol("legacy props"), od = Symbol("");
function id(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ad() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function sd(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ld() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function cd() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ud(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function fd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function dd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function hd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Zn(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let ce = !1;
function dr(e) {
  ce = e;
}
let le;
function Lt(e) {
  if (e === null)
    throw Zn(), br;
  return le = e;
}
function xr() {
  return Lt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(le)
  );
}
function ye(e) {
  if (ce) {
    if (/* @__PURE__ */ Ut(le) !== null)
      throw Zn(), br;
    le = e;
  }
}
function pd() {
  for (var e = 0, t = le; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Ts) {
        if (e === 0)
          return t;
        e -= 1;
      } else
        (r === li || r === Os) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(t)
    );
    t.remove(), t = n;
  }
}
let bd = !1;
function $t(e) {
  if (typeof e != "object" || e === null || zr in e)
    return e;
  const t = Ps(e);
  if (t !== Qf && t !== ed)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Fs(e), o = /* @__PURE__ */ ae(0), i = re, a = (l) => {
    var f = re;
    ht(i);
    var u = l();
    return ht(f), u;
  };
  return n && r.set("length", /* @__PURE__ */ ae(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && fd();
        var g = r.get(f);
        return g === void 0 ? (g = a(() => /* @__PURE__ */ ae(u.value)), r.set(f, g)) : U(
          g,
          a(() => $t(u.value))
        ), !0;
      },
      deleteProperty(l, f) {
        var u = r.get(f);
        if (u === void 0)
          f in l && (r.set(
            f,
            a(() => /* @__PURE__ */ ae(Fe))
          ), Oo(o));
        else {
          if (n && typeof f == "string") {
            var g = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(f);
            Number.isInteger(m) && m < g.v && U(g, m);
          }
          U(u, Fe), Oo(o);
        }
        return !0;
      },
      get(l, f, u) {
        var $;
        if (f === zr)
          return e;
        var g = r.get(f), m = f in l;
        if (g === void 0 && (!m || ($ = Kt(l, f)) != null && $.writable) && (g = a(() => /* @__PURE__ */ ae($t(m ? l[f] : Fe))), r.set(f, g)), g !== void 0) {
          var x = p(g);
          return x === Fe ? void 0 : x;
        }
        return Reflect.get(l, f, u);
      },
      getOwnPropertyDescriptor(l, f) {
        var u = Reflect.getOwnPropertyDescriptor(l, f);
        if (u && "value" in u) {
          var g = r.get(f);
          g && (u.value = p(g));
        } else if (u === void 0) {
          var m = r.get(f), x = m == null ? void 0 : m.v;
          if (m !== void 0 && x !== Fe)
            return {
              enumerable: !0,
              configurable: !0,
              value: x,
              writable: !0
            };
        }
        return u;
      },
      has(l, f) {
        var x;
        if (f === zr)
          return !0;
        var u = r.get(f), g = u !== void 0 && u.v !== Fe || Reflect.has(l, f);
        if (u !== void 0 || ne !== null && (!g || (x = Kt(l, f)) != null && x.writable)) {
          u === void 0 && (u = a(() => /* @__PURE__ */ ae(g ? $t(l[f]) : Fe)), r.set(f, u));
          var m = p(u);
          if (m === Fe)
            return !1;
        }
        return g;
      },
      set(l, f, u, g) {
        var B;
        var m = r.get(f), x = f in l;
        if (n && f === "length")
          for (var $ = u; $ < /** @type {Source<number>} */
          m.v; $ += 1) {
            var R = r.get($ + "");
            R !== void 0 ? U(R, Fe) : $ in l && (R = a(() => /* @__PURE__ */ ae(Fe)), r.set($ + "", R));
          }
        m === void 0 ? (!x || (B = Kt(l, f)) != null && B.writable) && (m = a(() => /* @__PURE__ */ ae(void 0)), U(
          m,
          a(() => $t(u))
        ), r.set(f, m)) : (x = m.v !== Fe, U(
          m,
          a(() => $t(u))
        ));
        var P = Reflect.getOwnPropertyDescriptor(l, f);
        if (P != null && P.set && P.set.call(g, u), !x) {
          if (n && typeof f == "string") {
            var T = (
              /** @type {Source<number>} */
              r.get("length")
            ), I = Number(f);
            Number.isInteger(I) && I >= T.v && U(T, I + 1);
          }
          Oo(o);
        }
        return !0;
      },
      ownKeys(l) {
        p(o);
        var f = Reflect.ownKeys(l).filter((m) => {
          var x = r.get(m);
          return x === void 0 || x.v !== Fe;
        });
        for (var [u, g] of r)
          g.v !== Fe && !(u in l) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        dd();
      }
    }
  );
}
function Oo(e, t = 1) {
  U(e, e.v + t);
}
var Da, Us, Bs, Ms;
function zo() {
  if (Da === void 0) {
    Da = window, Us = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Bs = Kt(t, "firstChild").get, Ms = Kt(t, "nextSibling").get, Ia(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ia(r) && (r.__t = void 0);
  }
}
function Qn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return Bs.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return Ms.call(e);
}
function xe(e, t) {
  if (!ce)
    return /* @__PURE__ */ We(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ We(le)
  );
  return r === null && (r = le.appendChild(Qn())), Lt(r), r;
}
function Mr(e, t) {
  if (!ce) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ We(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ut(r) : r;
  }
  return le;
}
function Ee(e, t = 1, r = !1) {
  let n = ce ? le : e;
  for (var o; t--; )
    o = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(n);
  if (!ce)
    return n;
  var i = n == null ? void 0 : n.nodeType;
  if (r && i !== 3) {
    var a = Qn();
    return n === null ? o == null || o.after(a) : n.before(a), Lt(a), a;
  }
  return Lt(n), /** @type {TemplateNode} */
  n;
}
function gd(e) {
  e.textContent = "";
}
function js(e) {
  return e === this.v;
}
function Hs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function fi(e) {
  return !Hs(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function eo(e) {
  var t = Ze | dt, r = re !== null && re.f & Ze ? (
    /** @type {Derived} */
    re
  ) : null;
  return ne === null || r !== null && r.f & je ? t |= je : ne.f |= Is, {
    ctx: Te,
    deps: null,
    effects: null,
    equals: js,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? ne
  };
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  const t = /* @__PURE__ */ eo(e);
  return tl(t), t;
}
// @__NO_SIDE_EFFECTS__
function md(e) {
  const t = /* @__PURE__ */ eo(e);
  return t.equals = fi, t;
}
function qs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Nt(
        /** @type {Effect} */
        t[r]
      );
  }
}
function wd(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Ze))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Vs(e) {
  var t, r = ne;
  It(wd(e));
  try {
    qs(e), t = il(e);
  } finally {
    It(r);
  }
  return t;
}
function zs(e) {
  var t = Vs(e), r = (Pt || e.f & je) && e.deps !== null ? er : De;
  Qe(e, r), e.equals(t) || (e.v = t, e.wv = nl());
}
function vd(e) {
  ne === null && re === null && sd(), re !== null && re.f & je && ne === null && ad(), nn && id();
}
function yd(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function tr(e, t, r, n = !0) {
  var o = ne, i = {
    ctx: Te,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | dt,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      gi(i), i.f |= rd;
    } catch (f) {
      throw Nt(i), f;
    }
  else
    t !== null && ro(i);
  var a = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Is | Nn)) === 0;
  if (!a && n && (o !== null && yd(i, o), re !== null && (re.f & Ze) !== 0)) {
    var l = (
      /** @type {Derived} */
      re
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return i;
}
function di(e) {
  const t = tr(Xn, null, !1);
  return Qe(t, De), t.teardown = e, t;
}
function Wo(e) {
  vd();
  var t = ne !== null && (ne.f & xt) !== 0 && Te !== null && !Te.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      Te
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: ne,
      reaction: re
    });
  } else {
    var n = hi(e);
    return n;
  }
}
function xd(e) {
  const t = tr(Qt, e, !0);
  return () => {
    Nt(t);
  };
}
function Ed(e) {
  const t = tr(Qt, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Go(t, () => {
      Nt(t), n(void 0);
    }) : (Nt(t), n(void 0));
  });
}
function hi(e) {
  return tr(Ns, e, !1);
}
function pi(e) {
  return tr(Xn, e, !0);
}
function st(e, t = [], r = eo) {
  const n = t.map(r);
  return Ws(() => e(...n.map(p)));
}
function Ws(e, t = 0) {
  return tr(Xn | ci | t, e, !0);
}
function Jo(e, t = !0) {
  return tr(Xn | xt, e, !0, t);
}
function Js(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = nn, n = re;
    Ba(!0), ht(null);
    try {
      t.call(null);
    } finally {
      Ba(r), ht(n);
    }
  }
}
function Gs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    r.f & Qt ? r.parent = null : Nt(r, t), r = n;
  }
}
function _d(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    !(t.f & xt) && Nt(t), t = r;
  }
}
function Nt(e, t = !0) {
  var r = !1;
  (t || e.f & nd) && e.nodes_start !== null && (Ks(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Gs(e, t && !r), Mn(e, 0), Qe(e, Yn);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  Js(e);
  var o = e.parent;
  o !== null && o.first !== null && Xs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ks(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(e)
    );
    e.remove(), e = r;
  }
}
function Xs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Go(e, t) {
  var r = [];
  Ys(e, r, !0), Ad(r, () => {
    Nt(e), t && t();
  });
}
function Ad(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var o of e)
      o.out(n);
  } else
    t();
}
function Ys(e, t, r) {
  if (!(e.f & yr)) {
    if (e.f ^= yr, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var o = n.next, i = (n.f & ui) !== 0 || (n.f & xt) !== 0;
      Ys(n, t, i ? r : !1), n = o;
    }
  }
}
function Ua(e) {
  Zs(e, !0);
}
function Zs(e, t) {
  if (e.f & yr) {
    e.f ^= yr, !(e.f & De) && (e.f ^= De), on(e) && (Qe(e, dt), ro(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, o = (r.f & ui) !== 0 || (r.f & xt) !== 0;
      Zs(r, o ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Rd = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Yr = [], Zr = [];
function Qs() {
  var e = Yr;
  Yr = [], Ls(e);
}
function el() {
  var e = Zr;
  Zr = [], Ls(e);
}
function bi(e) {
  Yr.length === 0 && queueMicrotask(Qs), Yr.push(e);
}
function Cd(e) {
  Zr.length === 0 && Rd(el), Zr.push(e);
}
function Sd() {
  Yr.length > 0 && Qs(), Zr.length > 0 && el();
}
let Rn = !1, Dn = !1, Un = null, Xt = !1, nn = !1;
function Ba(e) {
  nn = e;
}
let Wr = [], re = null, ut = !1;
function ht(e) {
  re = e;
}
let ne = null;
function It(e) {
  ne = e;
}
let Oe = null;
function tl(e) {
  re !== null && re.f & Vo && (Oe === null ? Oe = [e] : Oe.push(e));
}
let ke = null, Me = 0, qe = null;
function kd(e) {
  qe = e;
}
let rl = 1, Bn = 0, Pt = !1;
function nl() {
  return ++rl;
}
function on(e) {
  var m;
  var t = e.f;
  if (t & dt)
    return !0;
  if (t & er) {
    var r = e.deps, n = (t & je) !== 0;
    if (r !== null) {
      var o, i, a = (t & In) !== 0, l = n && ne !== null && !Pt, f = r.length;
      if (a || l) {
        var u = (
          /** @type {Derived} */
          e
        ), g = u.parent;
        for (o = 0; o < f; o++)
          i = r[o], (a || !((m = i == null ? void 0 : i.reactions) != null && m.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        a && (u.f ^= In), l && g !== null && !(g.f & je) && (u.f ^= je);
      }
      for (o = 0; o < f; o++)
        if (i = r[o], on(
          /** @type {Derived} */
          i
        ) && zs(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || ne !== null && !Pt) && Qe(e, De);
  }
  return !1;
}
function Od(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & Nn)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Nn;
      }
    r = r.parent;
  }
  throw Rn = !1, e;
}
function Ma(e) {
  return (e.f & Yn) === 0 && (e.parent === null || (e.parent.f & Nn) === 0);
}
function to(e, t, r, n) {
  if (Rn) {
    if (r === null && (Rn = !1), Ma(t))
      throw e;
    return;
  }
  if (r !== null && (Rn = !0), Od(e, t), Ma(t))
    throw e;
}
function ol(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var o = 0; o < n.length; o++) {
      var i = n[o];
      Oe != null && Oe.includes(e) || (i.f & Ze ? ol(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? Qe(i, dt) : i.f & De && Qe(i, er), ro(
        /** @type {Effect} */
        i
      )));
    }
}
function il(e) {
  var $;
  var t = ke, r = Me, n = qe, o = re, i = Pt, a = Oe, l = Te, f = ut, u = e.f;
  ke = /** @type {null | Value[]} */
  null, Me = 0, qe = null, Pt = (u & je) !== 0 && (ut || !Xt || re === null), re = u & (xt | Qt) ? null : e, Oe = null, ja(e.ctx), ut = !1, Bn++, e.f |= Vo;
  try {
    var g = (
      /** @type {Function} */
      (0, e.fn)()
    ), m = e.deps;
    if (ke !== null) {
      var x;
      if (Mn(e, Me), m !== null && Me > 0)
        for (m.length = Me + ke.length, x = 0; x < ke.length; x++)
          m[Me + x] = ke[x];
      else
        e.deps = m = ke;
      if (!Pt)
        for (x = Me; x < m.length; x++)
          (($ = m[x]).reactions ?? ($.reactions = [])).push(e);
    } else
      m !== null && Me < m.length && (Mn(e, Me), m.length = Me);
    if (fl() && qe !== null && !ut && m !== null && !(e.f & (Ze | er | dt)))
      for (x = 0; x < /** @type {Source[]} */
      qe.length; x++)
        ol(
          qe[x],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Bn++, qe !== null && (n === null ? n = qe : n.push(.../** @type {Source[]} */
    qe))), g;
  } finally {
    ke = t, Me = r, qe = n, re = o, Pt = i, Oe = a, ja(l), ut = f, e.f ^= Vo;
  }
}
function Td(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Xf.call(r, e);
    if (n !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[n] = r[o], r.pop());
    }
  }
  r === null && t.f & Ze && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ke === null || !ke.includes(t)) && (Qe(t, er), !(t.f & (je | In)) && (t.f ^= In), qs(
    /** @type {Derived} **/
    t
  ), Mn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Mn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Td(e, r[n]);
}
function gi(e) {
  var t = e.f;
  if (!(t & Yn)) {
    Qe(e, De);
    var r = ne, n = Te, o = Xt;
    ne = e, Xt = !0;
    try {
      t & ci ? _d(e) : Gs(e), Js(e);
      var i = il(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = rl;
      var a = e.deps, l;
      Kf && bd && e.f & dt;
    } catch (f) {
      to(f, e, r, n || e.ctx);
    } finally {
      Xt = o, ne = r;
    }
  }
}
function $d() {
  try {
    ld();
  } catch (e) {
    if (Un !== null)
      to(e, Un, null);
    else
      throw e;
  }
}
function al() {
  var e = Xt;
  try {
    var t = 0;
    for (Xt = !0; Wr.length > 0; ) {
      t++ > 1e3 && $d();
      var r = Wr, n = r.length;
      Wr = [];
      for (var o = 0; o < n; o++) {
        var i = Pd(r[o]);
        Fd(i);
      }
      Qr.clear();
    }
  } finally {
    Dn = !1, Xt = e, Un = null;
  }
}
function Fd(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      if (!(n.f & (Yn | yr)))
        try {
          on(n) && (gi(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Xs(n) : n.fn = null));
        } catch (o) {
          to(o, n, null, n.ctx);
        }
    }
}
function ro(e) {
  Dn || (Dn = !0, queueMicrotask(al));
  for (var t = Un = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Qt | xt)) {
      if (!(r & De))
        return;
      t.f ^= De;
    }
  }
  Wr.push(t);
}
function Pd(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f, o = (n & (xt | Qt)) !== 0, i = o && (n & De) !== 0;
    if (!i && !(n & yr)) {
      if (n & Ns)
        t.push(r);
      else if (o)
        r.f ^= De;
      else
        try {
          on(r) && gi(r);
        } catch (f) {
          to(f, r, null, r.ctx);
        }
      var a = r.first;
      if (a !== null) {
        r = a;
        continue;
      }
    }
    var l = r.parent;
    for (r = r.next; r === null && l !== null; )
      r = l.next, l = l.parent;
  }
  return t;
}
function z(e) {
  for (var t; ; ) {
    if (Sd(), Wr.length === 0)
      return (
        /** @type {T} */
        t
      );
    Dn = !0, al();
  }
}
async function To() {
  await Promise.resolve(), z();
}
function p(e) {
  var t = e.f, r = (t & Ze) !== 0;
  if (re !== null && !ut) {
    if (!(Oe != null && Oe.includes(e))) {
      var n = re.deps;
      e.rv < Bn && (e.rv = Bn, ke === null && n !== null && n[Me] === e ? Me++ : ke === null ? ke = [e] : (!Pt || !ke.includes(e)) && ke.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & je) && (o.f ^= je);
  }
  return r && (o = /** @type {Derived} */
  e, on(o) && zs(o)), nn && Qr.has(e) ? Qr.get(e) : e.v;
}
function Zt(e) {
  var t = ut;
  try {
    return ut = !0, e();
  } finally {
    ut = t;
  }
}
const Ld = -7169;
function Qe(e, t) {
  e.f = e.f & Ld | t;
}
const Qr = /* @__PURE__ */ new Map();
function sl(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: js,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ae(e, t) {
  const r = sl(e);
  return tl(r), r;
}
// @__NO_SIDE_EFFECTS__
function mi(e, t = !1) {
  const r = sl(e);
  return t || (r.equals = fi), r;
}
function U(e, t, r = !1) {
  re !== null && !ut && fl() && re.f & (Ze | ci) && !(Oe != null && Oe.includes(e)) && hd();
  let n = r ? $t(t) : t;
  return Nd(e, n);
}
function Nd(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    nn ? Qr.set(e, t) : Qr.set(e, r), e.v = t, e.f & Ze && (e.f & dt && Vs(
      /** @type {Derived} */
      e
    ), Qe(e, e.f & je ? er : De)), e.wv = nl(), ll(e, dt), ne !== null && ne.f & De && !(ne.f & (xt | Qt)) && (qe === null ? kd([e]) : qe.push(e));
  }
  return t;
}
function ll(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, o = 0; o < n; o++) {
      var i = r[o], a = i.f;
      !(a & dt) && (Qe(i, t), a & (De | je) && (a & Ze ? ll(
        /** @type {Derived} */
        i,
        er
      ) : ro(
        /** @type {Effect} */
        i
      )));
    }
}
let Te = null;
function ja(e) {
  Te = e;
}
function cl(e, t = !1, r) {
  var n = Te = {
    p: Te,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  di(() => {
    n.d = !0;
  });
}
function ul(e) {
  const t = Te;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var r = ne, n = re;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          It(i.effect), ht(i.reaction), hi(i.fn);
        }
      } finally {
        It(r), ht(n);
      }
    }
    Te = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function fl() {
  return !0;
}
const Id = ["touchstart", "touchmove"];
function Dd(e) {
  return Id.includes(e);
}
function Ud(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, bi(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Ha = !1;
function dl() {
  Ha || (Ha = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function hl(e) {
  var t = re, r = ne;
  ht(null), It(null);
  try {
    return e();
  } finally {
    ht(t), It(r);
  }
}
function Bd(e, t, r, n = r) {
  e.addEventListener(t, () => hl(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), n(!0);
  } : e.__on_r = () => n(!0), dl();
}
const pl = /* @__PURE__ */ new Set(), Ko = /* @__PURE__ */ new Set();
function Md(e, t, r, n = {}) {
  function o(i) {
    if (n.capture || Vr.call(t, i), !i.cancelBubble)
      return hl(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? bi(() => {
    t.addEventListener(e, o, n);
  }) : t.addEventListener(e, o, n), o;
}
function Ot(e, t, r, n, o) {
  var i = { capture: n, passive: o }, a = Md(e, t, r, i);
  (t === document.body || t === window || t === document) && di(() => {
    t.removeEventListener(e, a, i);
  });
}
function jd(e) {
  for (var t = 0; t < e.length; t++)
    pl.add(e[t]);
  for (var r of Ko)
    r(e);
}
function Vr(e) {
  var B;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, o = ((B = e.composedPath) == null ? void 0 : B.call(e)) || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  ), a = 0, l = e.__root;
  if (l) {
    var f = o.indexOf(l);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = o.indexOf(t);
    if (u === -1)
      return;
    f <= u && (a = f);
  }
  if (i = /** @type {Element} */
  o[a] || e.target, i !== t) {
    Xr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var g = re, m = ne;
    ht(null), It(null);
    try {
      for (var x, $ = []; i !== null; ) {
        var R = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var P = i["__" + n];
          if (P != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Fs(P)) {
              var [T, ...I] = P;
              T.apply(i, [e, ...I]);
            } else
              P.call(i, e);
        } catch (V) {
          x ? $.push(V) : x = V;
        }
        if (e.cancelBubble || R === t || R === null)
          break;
        i = R;
      }
      if (x) {
        for (let V of $)
          queueMicrotask(() => {
            throw V;
          });
        throw x;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ht(g), It(m);
    }
  }
}
function wi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ft(e, t) {
  var r = (
    /** @type {Effect} */
    ne
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function tt(e, t) {
  var r = (t & Wf) !== 0, n = (t & Jf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (ce)
      return ft(le, null), le;
    o === void 0 && (o = wi(i ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ We(o)));
    var a = (
      /** @type {TemplateNode} */
      n || Us ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ We(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ft(l, f);
    } else
      ft(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function no(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), o = `<${r}>${n ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (ce)
      return ft(le, null), le;
    if (!i) {
      var a = (
        /** @type {DocumentFragment} */
        wi(o)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ We(a)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ We(l);
    }
    var f = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return ft(f, f), f;
  };
}
function mn() {
  if (ce)
    return ft(le, null), le;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Qn();
  return e.append(t, r), ft(t, r), e;
}
function be(e, t) {
  if (ce) {
    ne.nodes_end = le, xr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Hd(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function bl(e, t) {
  return gl(e, t);
}
function qd(e, t) {
  zo(), t.intro = t.intro ?? !1;
  const r = t.target, n = ce, o = le;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(r)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== li); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(i);
    if (!i)
      throw br;
    dr(!0), Lt(
      /** @type {Comment} */
      i
    ), xr();
    const a = gl(e, { ...t, anchor: i });
    if (le === null || le.nodeType !== 8 || /** @type {Comment} */
    le.data !== Ts)
      throw Zn(), br;
    return dr(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === br)
      return t.recover === !1 && cd(), zo(), gd(r), dr(!1), bl(e, t);
    throw a;
  } finally {
    dr(n), Lt(o);
  }
}
const ur = /* @__PURE__ */ new Map();
function gl(e, { target: t, anchor: r, props: n = {}, events: o, context: i, intro: a = !0 }) {
  zo();
  var l = /* @__PURE__ */ new Set(), f = (m) => {
    for (var x = 0; x < m.length; x++) {
      var $ = m[x];
      if (!l.has($)) {
        l.add($);
        var R = Dd($);
        t.addEventListener($, Vr, { passive: R });
        var P = ur.get($);
        P === void 0 ? (document.addEventListener($, Vr, { passive: R }), ur.set($, 1)) : ur.set($, P + 1);
      }
    }
  };
  f(Yf(pl)), Ko.add(f);
  var u = void 0, g = Ed(() => {
    var m = r ?? t.appendChild(Qn());
    return Jo(() => {
      if (i) {
        cl({});
        var x = (
          /** @type {ComponentContext} */
          Te
        );
        x.c = i;
      }
      o && (n.$$events = o), ce && ft(
        /** @type {TemplateNode} */
        m,
        null
      ), u = e(m, n) || {}, ce && (ne.nodes_end = le), i && ul();
    }), () => {
      var R;
      for (var x of l) {
        t.removeEventListener(x, Vr);
        var $ = (
          /** @type {number} */
          ur.get(x)
        );
        --$ === 0 ? (document.removeEventListener(x, Vr), ur.delete(x)) : ur.set(x, $);
      }
      Ko.delete(f), m !== r && ((R = m.parentNode) == null || R.removeChild(m));
    };
  });
  return Xo.set(u, g), u;
}
let Xo = /* @__PURE__ */ new WeakMap();
function Vd(e, t) {
  const r = Xo.get(e);
  return r ? (Xo.delete(e), r(t)) : Promise.resolve();
}
function _e(e, t, [r, n] = [0, 0]) {
  ce && r === 0 && xr();
  var o = e, i = null, a = null, l = Fe, f = r > 0 ? ui : 0, u = !1;
  const g = (x, $ = !0) => {
    u = !0, m($, x);
  }, m = (x, $) => {
    if (l === (l = x))
      return;
    let R = !1;
    if (ce && n !== -1) {
      if (r === 0) {
        const T = (
          /** @type {Comment} */
          o.data
        );
        T === li ? n = 0 : T === Os ? n = 1 / 0 : (n = parseInt(T.substring(1)), n !== n && (n = l ? 1 / 0 : -1));
      }
      const P = n > r;
      !!l === P && (o = pd(), Lt(o), dr(!1), R = !0, n = -1);
    }
    l ? (i ? Ua(i) : $ && (i = Jo(() => $(o))), a && Go(a, () => {
      a = null;
    })) : (a ? Ua(a) : $ && (a = Jo(() => $(o, [r + 1, n]))), i && Go(i, () => {
      i = null;
    })), R && dr(!0);
  };
  Ws(() => {
    u = !1, t(g), u || m(null, null);
  }, f), ce && (o = le);
}
function zt(e, t, r = !1, n = !1, o = !1) {
  var i = e, a = "";
  st(() => {
    var l = (
      /** @type {Effect} */
      ne
    );
    if (a === (a = t() ?? "")) {
      ce && xr();
      return;
    }
    if (l.nodes_start !== null && (Ks(
      l.nodes_start,
      /** @type {TemplateNode} */
      l.nodes_end
    ), l.nodes_start = l.nodes_end = null), a !== "") {
      if (ce) {
        le.data;
        for (var f = xr(), u = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          u = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Ut(f);
        if (f === null)
          throw Zn(), br;
        ft(le, u), i = Lt(f);
        return;
      }
      var g = a + "";
      r ? g = `<svg>${g}</svg>` : n && (g = `<math>${g}</math>`);
      var m = wi(g);
      if ((r || n) && (m = /** @type {Element} */
      /* @__PURE__ */ We(m)), ft(
        /** @type {TemplateNode} */
        /* @__PURE__ */ We(m),
        /** @type {TemplateNode} */
        m.lastChild
      ), r || n)
        for (; /* @__PURE__ */ We(m); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ We(m)
          );
      else
        i.before(m);
    }
  });
}
function zd(e, t, r, n, o) {
  var l;
  ce && xr();
  var i = (l = t.$$slots) == null ? void 0 : l[r], a = !1;
  i === !0 && (i = t.children, a = !0), i === void 0 || i(e, a ? () => n : n);
}
const qa = [...` 	
\r\f \v\uFEFF`];
function Wd(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        n = n ? n + " " + o : o;
      else if (n.length)
        for (var i = o.length, a = 0; (a = n.indexOf(o, a)) >= 0; ) {
          var l = a + i;
          (a === 0 || qa.includes(n[a - 1])) && (l === n.length || qa.includes(n[l])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(l + 1) : a = l;
        }
  }
  return n === "" ? null : n;
}
function Jd(e, t, r, n, o, i) {
  var a = e.__className;
  if (ce || a !== r || a === void 0) {
    var l = Wd(r, n, i);
    (!ce || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : e.className = l), e.__className = r;
  } else if (i && o !== i)
    for (var f in i) {
      var u = !!i[f];
      (o == null || u !== !!o[f]) && e.classList.toggle(f, u);
    }
  return i;
}
const Gd = Symbol("is custom element"), Kd = Symbol("is html");
function Va(e) {
  if (ce) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          te(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          te(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, Cd(r), dl();
  }
}
function Xd(e, t) {
  var r = ml(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function te(e, t, r, n) {
  var o = ml(e);
  ce && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[od] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Yd(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ml(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Gd]: e.nodeName.includes("-"),
      [Kd]: e.namespaceURI === Gf
    })
  );
}
var za = /* @__PURE__ */ new Map();
function Yd(e) {
  var t = za.get(e.nodeName);
  if (t)
    return t;
  za.set(e.nodeName, t = []);
  for (var r, n = e, o = Element.prototype; o !== n; ) {
    r = Zf(n);
    for (var i in r)
      r[i].set && t.push(i);
    n = Ps(n);
  }
  return t;
}
function Zd(e, t, r = t) {
  Bd(e, "change", (n) => {
    var o = n ? e.defaultChecked : e.checked;
    r(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (ce && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Zt(t) == null) && r(e.checked), pi(() => {
    var n = t();
    e.checked = !!n;
  });
}
function Wa(e, t) {
  return e === t || (e == null ? void 0 : e[zr]) === t;
}
function wn(e = {}, t, r, n) {
  return hi(() => {
    var o, i;
    return pi(() => {
      o = i, i = [], Zt(() => {
        e !== r(...i) && (t(e, ...i), o && Wa(r(...o), e) && t(null, ...o));
      });
    }), () => {
      bi(() => {
        i && Wa(r(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function wl(e) {
  Te === null && $s(), Wo(() => {
    const t = Zt(e);
    if (typeof t == "function")
      return (
        /** @type {() => void} */
        t
      );
  });
}
function Qd(e) {
  Te === null && $s(), wl(() => () => Zt(e));
}
function vl(e, t, r) {
  if (e == null)
    return t(void 0), gr;
  const n = Zt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const fr = [];
function eh(e, t = gr) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function o(l) {
    if (Hs(e, l) && (e = l, r)) {
      const f = !fr.length;
      for (const u of n)
        u[1](), fr.push(u, e);
      if (f) {
        for (let u = 0; u < fr.length; u += 2)
          fr[u][0](fr[u + 1]);
        fr.length = 0;
      }
    }
  }
  function i(l) {
    o(l(
      /** @type {T} */
      e
    ));
  }
  function a(l, f = gr) {
    const u = [l, f];
    return n.add(u), n.size === 1 && (r = t(o, i) || gr), l(
      /** @type {T} */
      e
    ), () => {
      n.delete(u), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: i, subscribe: a };
}
function Cn(e) {
  let t;
  return vl(e, (r) => t = r)(), t;
}
let vn = !1, Yo = Symbol();
function th(e, t, r) {
  const n = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ mi(void 0),
    unsubscribe: gr
  });
  if (n.store !== e && !(Yo in r))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = gr;
    else {
      var o = !0;
      n.unsubscribe = vl(e, (i) => {
        o ? n.source.v = i : U(n.source, i);
      }), o = !1;
    }
  return e && Yo in r ? Cn(e) : p(n.source);
}
function rh() {
  const e = {};
  function t() {
    di(() => {
      for (var r in e)
        e[r].unsubscribe();
      Xr(e, Yo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function nh(e) {
  var t = vn;
  try {
    return vn = !1, [e(), vn];
  } finally {
    vn = t;
  }
}
function Ja(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function W(e, t, r, n) {
  var oe;
  var o = (r & Hf) !== 0, i = !0, a = (r & Vf) !== 0, l = (r & zf) !== 0, f = !1, u;
  a ? [u, f] = nh(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var g = zr in e || Ds in e, m = a && (((oe = Kt(e, t)) == null ? void 0 : oe.set) ?? (g && t in e && ((J) => e[t] = J))) || void 0, x = (
    /** @type {V} */
    n
  ), $ = !0, R = !1, P = () => (R = !0, $ && ($ = !1, l ? x = Zt(
    /** @type {() => V} */
    n
  ) : x = /** @type {V} */
  n), x);
  u === void 0 && n !== void 0 && (m && i && ud(), u = P(), m && m(u));
  var T;
  if (T = () => {
    var J = (
      /** @type {V} */
      e[t]
    );
    return J === void 0 ? P() : ($ = !0, R = !1, J);
  }, (r & qf) === 0)
    return T;
  if (m) {
    var I = e.$$legacy;
    return function(J, de) {
      return arguments.length > 0 ? ((!de || I || f) && m(de ? T() : J), J) : T();
    };
  }
  var B = !1, V = /* @__PURE__ */ mi(u), Q = /* @__PURE__ */ eo(() => {
    var J = T(), de = p(V);
    return B ? (B = !1, de) : V.v = J;
  });
  return a && p(Q), o || (Q.equals = fi), function(J, de) {
    if (arguments.length > 0) {
      const Ce = de ? p(Q) : a ? $t(J) : J;
      if (!Q.equals(Ce)) {
        if (B = !0, U(V, Ce), R && x !== void 0 && (x = Ce), Ja(Q))
          return J;
        Zt(() => p(Q));
      }
      return J;
    }
    return Ja(Q) ? Q.v : p(Q);
  };
}
function oh(e) {
  return new ih(e);
}
var gt, Ve;
class ih {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ho(this, gt, void 0);
    /** @type {Record<string, any>} */
    ho(this, Ve, void 0);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (a, l) => {
      var f = /* @__PURE__ */ mi(l);
      return r.set(a, f), f;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, l) {
          return p(r.get(l) ?? n(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Ds ? !0 : (p(r.get(l) ?? n(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, f) {
          return U(r.get(l) ?? n(l, f), f), Reflect.set(a, l, f);
        }
      }
    );
    po(this, Ve, (t.hydrate ? qd : bl)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && z(), po(this, gt, o.$$events);
    for (const a of Object.keys($e(this, Ve)))
      a === "$set" || a === "$destroy" || a === "$on" || Xr(this, a, {
        get() {
          return $e(this, Ve)[a];
        },
        /** @param {any} value */
        set(l) {
          $e(this, Ve)[a] = l;
        },
        enumerable: !0
      });
    $e(this, Ve).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(o, a);
    }, $e(this, Ve).$destroy = () => {
      Vd($e(this, Ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    $e(this, Ve).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    $e(this, gt)[t] = $e(this, gt)[t] || [];
    const n = (...o) => r.call(this, ...o);
    return $e(this, gt)[t].push(n), () => {
      $e(this, gt)[t] = $e(this, gt)[t].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    $e(this, Ve).$destroy();
  }
}
gt = new WeakMap(), Ve = new WeakMap();
let yl;
typeof HTMLElement == "function" && (yl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    Ke(this, "$$ctor");
    /** Slots */
    Ke(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ke(this, "$$c");
    /** Whether or not the custom element is connected */
    Ke(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ke(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ke(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ke(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ke(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ke(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ke(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const o = this.$$c.$on(t, r);
      this.$$l_u.set(r, o);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (i) => {
          const a = document.createElement("slot");
          o !== "default" && (a.name = o), be(i, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = ah(this);
      for (const o of this.$$s)
        o in n && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = Sn(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = oh({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = xd(() => {
        pi(() => {
          var o;
          this.$$r = !0;
          for (const i of Ln(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect))
              continue;
            this.$$d[i] = this.$$c[i];
            const a = Sn(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, a);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const i of this.$$l[o]) {
          const a = this.$$c.$on(o, i);
          this.$$l_u.set(i, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Sn(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Ln(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Sn(e, t, r, n) {
  var i;
  const o = (i = r[e]) == null ? void 0 : i.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ah(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function sh(e, t, r, n, o, i) {
  let a = class extends yl {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ln(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Ln(t).forEach((l) => {
    Xr(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(f) {
        var m;
        f = Sn(l, f, t), this.$$d[l] = f;
        var u = this.$$c;
        if (u) {
          var g = (m = Kt(u, l)) == null ? void 0 : m.get;
          g ? u[l] = f : u.$set({ [l]: f });
        }
      }
    });
  }), n.forEach((l) => {
    Xr(a.prototype, l, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[l];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const xl = new TextEncoder();
function lh(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function ch(e, t = "SHA-256", r = 1e5) {
  const n = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await El(n, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: n,
    signature: ""
  };
}
async function El(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return lh(
    await crypto.subtle.digest(
      r.toUpperCase(),
      xl.encode(e + t)
    )
  );
}
function uh(e, t, r = "SHA-256", n = 1e6, o = 0) {
  const i = new AbortController(), a = Date.now();
  return {
    promise: (async () => {
      for (let l = o; l <= n; l += 1) {
        if (i.signal.aborted)
          return null;
        if (await El(t, l, r) === e)
          return {
            number: l,
            took: Date.now() - a
          };
      }
      return null;
    })(),
    controller: i
  };
}
function Ga() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function fh(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++)
    r[n] = t.charCodeAt(n);
  return r;
}
function dh(e, t = 12) {
  const r = new Uint8Array(t);
  for (let n = 0; n < t; n++)
    r[n] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function hh(e, t = "", r = 1e6, n = 0) {
  const o = "AES-GCM", i = new AbortController(), a = Date.now(), l = async () => {
    for (let g = n; g <= r; g += 1) {
      if (i.signal.aborted || !f || !u)
        return null;
      try {
        const m = await crypto.subtle.decrypt(
          {
            name: o,
            iv: dh(g)
          },
          f,
          u
        );
        if (m)
          return {
            clearText: new TextDecoder().decode(m),
            took: Date.now() - a
          };
      } catch {
      }
    }
    return null;
  };
  let f = null, u = null;
  try {
    u = fh(e);
    const g = await crypto.subtle.digest(
      "SHA-256",
      xl.encode(t)
    );
    f = await crypto.subtle.importKey(
      "raw",
      g,
      o,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: i
    };
  }
  return {
    promise: l(),
    controller: i
  };
}
var q = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(q || {}), Ae = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Ae || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => Cn(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(Cn(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(Cn(globalThis.altchaI18n.store));
  },
  store: eh({})
};
const ph = {
  ariaLinkLabel: "Visit Altcha.org",
  enterCode: "Enter code",
  enterCodeAria: "Enter code you hear. Press Space to play audio.",
  error: "Verification failed. Try again later.",
  expired: "Verification expired. Try again.",
  footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Get an audio challenge",
  label: "I'm not a robot",
  loading: "Loading...",
  reload: "Reload",
  verify: "Verify",
  verificationRequired: "Verification required!",
  verified: "Verified",
  verifying: "Verifying...",
  waitAlert: "Verifying... please wait."
};
globalThis.altchaI18n.set("en", ph);
const $o = (e, t) => {
  let r = /* @__PURE__ */ md(() => td(t == null ? void 0 : t(), 24));
  var n = wh();
  st(() => {
    te(n, "width", p(r)), te(n, "height", p(r));
  }), be(e, n);
};
function bh(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function gh(e, t) {
  e.preventDefault(), t();
}
function mh(e, t, r, n, o, i, a, l) {
  var f;
  [
    q.UNVERIFIED,
    q.ERROR,
    q.EXPIRED,
    q.CODE
  ].includes(p(t)) ? r() !== !1 && ((f = p(n)) == null ? void 0 : f.reportValidity()) === !1 ? U(o, !1) : i() ? a() : l() : U(o, !0);
}
var wh = /* @__PURE__ */ no('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), vh = /* @__PURE__ */ tt('<input type="hidden">'), yh = /* @__PURE__ */ tt('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), xh = /* @__PURE__ */ no('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Eh = /* @__PURE__ */ no('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), _h = /* @__PURE__ */ no('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), Ah = /* @__PURE__ */ tt('<button type="button" class="altcha-code-challenge-audio"><!></button>'), Rh = /* @__PURE__ */ tt("<audio hidden autoplay><source></audio>"), Ch = /* @__PURE__ */ tt('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), Sh = /* @__PURE__ */ tt("<div><!></div>"), kh = /* @__PURE__ */ tt("<div><!></div>"), Oh = /* @__PURE__ */ tt('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Th = /* @__PURE__ */ tt('<div class="altcha-footer"><div><!></div></div>'), $h = /* @__PURE__ */ tt('<div class="altcha-anchor-arrow"></div>'), Fh = /* @__PURE__ */ tt('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Ph(e, t) {
  var ta, ra;
  cl(t, !0);
  const [r, n] = rh(), o = () => th(Cl, "$altchaI18nStore", r);
  let i = W(t, "auto", 7, void 0), a = W(t, "blockspam", 7, void 0), l = W(t, "challengeurl", 7, void 0), f = W(t, "challengejson", 7, void 0), u = W(t, "credentials", 7, void 0), g = W(t, "customfetch", 7, void 0), m = W(t, "debug", 7, !1), x = W(t, "delay", 7, 0), $ = W(t, "disableautofocus", 7, !1), R = W(t, "refetchonexpire", 7, !0), P = W(t, "disablerefetchonexpire", 23, () => !R()), T = W(t, "expire", 7, void 0), I = W(t, "floating", 7, void 0), B = W(t, "floatinganchor", 7, void 0), V = W(t, "floatingoffset", 7, void 0), Q = W(t, "floatingpersist", 7, !1), oe = W(t, "hidefooter", 7, !1), J = W(t, "hidelogo", 7, !1), de = W(t, "id", 7, void 0), Ce = W(t, "language", 7, void 0), G = W(t, "name", 7, "altcha"), He = W(t, "maxnumber", 7, 1e6), Je = W(t, "mockerror", 7, !1), c = W(t, "obfuscated", 7, void 0), h = W(t, "overlay", 7, void 0), b = W(t, "overlaycontent", 7, void 0), d = W(t, "plugins", 7, void 0), D = W(t, "sentinel", 7, void 0), S = W(t, "spamfilter", 7, !1), k = W(t, "strings", 7, void 0), N = W(t, "test", 7, !1), Z = W(t, "verifyurl", 7, void 0), pt = W(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Et = W(t, "workerurl", 7, void 0);
  const { altchaI18n: Rl } = globalThis, Cl = Rl.store, vi = ["SHA-256", "SHA-384", "SHA-512"], Sl = "https://altcha.org/", _t = (s, w) => {
    t.$$host.dispatchEvent(new CustomEvent(s, { detail: w }));
  }, yi = (ra = (ta = document.documentElement.lang) == null ? void 0 : ta.split("-")) == null ? void 0 : ra[0], oo = /* @__PURE__ */ jr(() => {
    var s;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((s = l()) != null && s.includes("apiKey=ckey_"));
  }), an = /* @__PURE__ */ jr(() => f() ? Li(f()) : void 0), kl = /* @__PURE__ */ jr(() => k() ? Li(k()) : {}), se = /* @__PURE__ */ jr(() => ({
    ..._i(o()),
    ...p(kl)
  })), xi = /* @__PURE__ */ jr(() => `${de() || G()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Bt = /* @__PURE__ */ ae(null), Rr = /* @__PURE__ */ ae(!1), ge = /* @__PURE__ */ ae(null), K = /* @__PURE__ */ ae($t(q.UNVERIFIED)), ue = /* @__PURE__ */ ae(void 0), Cr = /* @__PURE__ */ ae(null), At = /* @__PURE__ */ ae(null), Ue = /* @__PURE__ */ ae(null), io = /* @__PURE__ */ ae(null), rr = /* @__PURE__ */ ae(null), ie = /* @__PURE__ */ ae(null), Sr = /* @__PURE__ */ ae(null), Mt = /* @__PURE__ */ ae(null), rt = null, me = /* @__PURE__ */ ae(null), jt = /* @__PURE__ */ ae(!1), Rt = [], ao = /* @__PURE__ */ ae(!1), nt = /* @__PURE__ */ ae(null);
  Wo(() => {
    jl(p(Mt));
  }), Wo(() => {
    Hl(p(K));
  }), Qd(() => {
    Ol(), U(Sr, null), p(ie) && (p(ie).removeEventListener("submit", Oi), p(ie).removeEventListener("reset", Ti), p(ie).removeEventListener("focusin", ki), U(ie, null)), rt && (clearTimeout(rt), rt = null), document.removeEventListener("click", Ci), document.removeEventListener("scroll", Si), window.removeEventListener("resize", Pi);
  }), wl(() => {
    var s;
    X("mounted", "2.2.4"), X("workers", pt()), Pl(), X("plugins", Rt.length ? Rt.map((w) => w.constructor.pluginName).join(", ") : "none"), N() && X("using test mode"), T() && lo(T()), i() !== void 0 && X("auto", i()), I() !== void 0 && Ui(I()), U(ie, (s = p(ue)) == null ? void 0 : s.closest("form"), !0), p(ie) && (p(ie).addEventListener("submit", Oi, { capture: !0 }), p(ie).addEventListener("reset", Ti), (i() === "onfocus" || Q() === "focus") && p(ie).addEventListener("focusin", ki)), h() && Bi(!0), i() === "onload" && (c() ? kr() : bt()), p(oo) && (oe() || J()) && X("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      _t("load");
    });
  });
  function sn(s, w) {
    return btoa(JSON.stringify({
      algorithm: s.algorithm,
      challenge: s.challenge,
      number: w.number,
      salt: s.salt,
      signature: s.signature,
      test: N() ? !0 : void 0,
      took: w.took
    }));
  }
  function Ol() {
    for (const s of Rt)
      s.destroy();
  }
  function Ei() {
    l() && !P() && p(K) === q.VERIFIED ? bt() : Ht(q.EXPIRED, p(se).expired);
  }
  async function Tl() {
    if (Je())
      throw X("mocking error"), new Error("Mocked error.");
    if (p(an))
      return X("using provided json data"), Ni(p(an).salt), p(an);
    if (N())
      return X("generating test challenge", { test: N() }), ch(typeof N() != "boolean" ? +N() : void 0);
    {
      if (!l() && p(ie)) {
        const O = p(ie).getAttribute("action");
        O != null && O.includes("/form/") && l(O + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      X("fetching challenge from", l());
      const s = {
        credentials: typeof u() == "boolean" ? "include" : u(),
        headers: S() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, w = await so()(l(), s);
      if (!w || !(w instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (w.status !== 200)
        throw new Error(`Server responded with ${w.status}.`);
      const F = w.headers.get("X-Altcha-Config"), L = await w.json();
      if (Ni(L.salt), F)
        try {
          const O = JSON.parse(F);
          O && typeof O == "object" && (O.verifyurl && !O.verifyurl.startsWith("fn:") && (O.verifyurl = Ri(O.verifyurl)), Hi(O));
        } catch (O) {
          X("unable to configure from X-Altcha-Config", O);
        }
      return L;
    }
  }
  function $l(s) {
    var F, L;
    const w = (F = p(ie)) == null ? void 0 : F.querySelector(typeof s == "string" ? `input[name="${s}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((L = w == null ? void 0 : w.value) == null ? void 0 : L.slice(w.value.indexOf("@"))) || void 0;
  }
  function so() {
    let s = fetch;
    if (g())
      if (X("using customfetch"), typeof g() == "string") {
        if (s = globalThis[g()] || null, !s)
          throw new Error(`Custom fetch function not found: ${g()}`);
      } else
        s = g();
    return s;
  }
  function _i(s, w = [
    Ce() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const F = Object.keys(s).map((O) => O.toLowerCase()), L = w.reduce(
      (O, H) => (H = H.toLowerCase(), O || (s[H] ? H : null) || F.find((Y) => H.split("-")[0] === Y.split("-")[0]) || null),
      null
    );
    return s[L || "en"];
  }
  function Fl() {
    return S() === "ipAddress" ? {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: !1,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: !1,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    } : typeof S() == "object" ? S() : {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: void 0,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: void 0,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    };
  }
  function Ai(s) {
    var w;
    return [
      ...((w = p(ie)) == null ? void 0 : w.querySelectorAll(s != null && s.length ? s.map((F) => `input[name="${F}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (F, L) => {
        const O = L.name, H = L.value;
        return O && H && (F[O] = /\n/.test(H) ? H.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : H), F;
      },
      {}
    );
  }
  function Ri(s, w) {
    const F = new URL(l() || location.origin), L = new URL(s, F);
    if (L.search || (L.search = F.search), w)
      for (const O in w)
        w[O] !== void 0 && w[O] !== null && L.searchParams.set(O, w[O]);
    return L.toString();
  }
  function Pl() {
    const s = d() !== void 0 ? d().split(",") : void 0;
    for (const w of globalThis.altchaPlugins)
      (!s || s.includes(w.pluginName)) && Rt.push(new w({
        el: p(ue),
        clarify: kr,
        dispatch: _t,
        getConfiguration: qi,
        getFloatingAnchor: Vi,
        getState: zi,
        log: X,
        reset: Ht,
        solve: ji,
        setState: ot,
        setFloatingAnchor: Wi,
        verify: bt
      }));
  }
  function X(...s) {
    (m() || s.some((w) => w instanceof Error)) && console[s[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${G()}]`, ...s);
  }
  function Ll() {
    U(me, Ae.PAUSED, !0);
  }
  function Nl(s) {
    U(me, Ae.ERROR, !0);
  }
  function Il() {
    U(me, Ae.READY, !0);
  }
  function Dl() {
    U(me, Ae.LOADING, !0);
  }
  function Ul() {
    U(me, Ae.PLAYING, !0);
  }
  function Bl() {
    U(me, Ae.PAUSED, !0);
  }
  function Ml(s) {
    var w;
    if (s.preventDefault(), s.stopPropagation(), p(ge)) {
      const F = new FormData(s.target), L = String(F.get("code"));
      if ((w = Z()) != null && w.startsWith("fn:")) {
        const O = Z().replace(/^fn:/, "");
        if (X(`calling ${O} function instead of verifyurl`), !(O in globalThis))
          throw new Error(`Global function "${O}" is undefined.`);
        return globalThis[O]({
          challenge: p(ge).challenge,
          code: L,
          solution: p(ge).solution
        });
      }
      U(jt, !0), Ii(sn(p(ge).challenge, p(ge).solution), L).then(({ reason: O, verified: H }) => {
        H ? (U(ge, null), ot(q.VERIFIED), X("verified"), To().then(() => {
          var Y;
          (Y = p(io)) == null || Y.focus(), _t("verified", { payload: p(nt) }), i() === "onsubmit" ? Di(p(Sr)) : h() && Or();
        })) : (Ht(), U(Mt, O || "Verification failed", !0));
      }).catch((O) => {
        U(ge, null), ot(q.ERROR, O), X("sentinel verification failed:", O);
      }).finally(() => {
        U(jt, !1);
      });
    }
  }
  function Ci(s) {
    var F;
    const w = s.target;
    I() && w && !p(ue).contains(w) && (p(K) === q.VERIFIED && Q() === !1 || p(K) === q.VERIFIED && Q() === "focus" && !((F = p(ie)) != null && F.matches(":focus-within")) || i() === "off" && p(K) === q.UNVERIFIED) && Or();
  }
  function Si() {
    I() && p(K) !== q.UNVERIFIED && Tr();
  }
  function jl(s) {
    for (const w of Rt)
      typeof w.onErrorChange == "function" && w.onErrorChange(p(Mt));
  }
  function ki(s) {
    p(K) === q.UNVERIFIED ? bt() : I() && Q() === "focus" && p(K) === q.VERIFIED && ln();
  }
  function Oi(s) {
    var w, F;
    (w = s.target) != null && w.hasAttribute("data-code-challenge-form") || (U(Sr, s.submitter, !0), p(ie) && i() === "onsubmit" ? ((F = p(Sr)) == null || F.blur(), p(K) === q.UNVERIFIED ? (s.preventDefault(), s.stopPropagation(), bt().then(() => {
      Di(p(Sr));
    })) : p(K) !== q.VERIFIED && (s.preventDefault(), s.stopPropagation(), p(K) === q.VERIFYING && $i())) : p(ie) && I() && i() === "off" && p(K) === q.UNVERIFIED && (s.preventDefault(), s.stopPropagation(), ln()));
  }
  function Ti() {
    Ht();
  }
  function $i() {
    p(K) === q.VERIFYING && p(se).waitAlert && alert(p(se).waitAlert);
  }
  function Fi() {
    p(At) ? p(At).paused ? (p(At).currentTime = 0, p(At).play()) : p(At).pause() : (U(ao, !0), requestAnimationFrame(() => {
      var s;
      (s = p(At)) == null || s.play();
    }));
  }
  function Hl(s) {
    for (const w of Rt)
      typeof w.onStateChange == "function" && w.onStateChange(p(K));
    I() && p(K) !== q.UNVERIFIED && requestAnimationFrame(() => {
      Tr();
    }), U(Rr, p(K) === q.VERIFIED), h() && p(Ue) && (p(K) !== q.UNVERIFIED ? ln() : Or());
  }
  function Pi() {
    I() && Tr();
  }
  function Li(s) {
    return JSON.parse(s);
  }
  function Ni(s) {
    var L;
    const w = new URLSearchParams((L = s.split("?")) == null ? void 0 : L[1]), F = w.get("expires") || w.get("expire");
    if (F) {
      const O = new Date(+F * 1e3), H = isNaN(O.getTime()) ? 0 : O.getTime() - Date.now();
      H > 0 && lo(H);
    } else
      rt && (clearTimeout(rt), rt = null);
  }
  async function ql(s) {
    if (!Z())
      throw new Error("Attribute verifyurl not set.");
    X("requesting server verification from", Z());
    const w = { payload: s };
    if (S() !== !1) {
      const {
        blockedCountries: O,
        classifier: H,
        disableRules: Y,
        email: fe,
        expectedLanguages: Se,
        expectedCountries: we,
        fields: Be,
        ipAddress: Ct,
        text: or,
        timeZone: fn
      } = Fl();
      w.blockedCountries = O, w.classifier = H, w.disableRules = Y, w.email = fe === !1 ? void 0 : $l(fe), w.expectedCountries = we, w.expectedLanguages = Se || (yi ? [yi] : void 0), w.fields = Be === !1 ? void 0 : Ai(Be), w.ipAddress = Ct === !1 ? void 0 : Ct || "auto", w.text = or, w.timeZone = fn === !1 ? void 0 : fn || Ga();
    }
    const F = await so()(Z(), {
      body: JSON.stringify(w),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!F || !(F instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (F.status !== 200)
      throw new Error(`Server responded with ${F.status}.`);
    const L = await F.json();
    if (L != null && L.payload && U(nt, L.payload, !0), _t("serververification", L), a() && L.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Ii(s, w) {
    if (!Z())
      throw new Error("Attribute verifyurl not set.");
    X("requesting sentinel verification from", Z());
    const F = { code: w, payload: s };
    D() && (F.fields = D().fields ? Ai() : void 0, F.timeZone = D().timeZone ? Ga() : void 0);
    const L = await so()(Z(), {
      body: JSON.stringify(F),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!L || !(L instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (L.status !== 200)
      throw new Error(`Server responded with ${L.status}.`);
    const O = await L.json();
    return O != null && O.payload && U(nt, O.payload, !0), _t("sentinelverification", O), O;
  }
  function Di(s) {
    var w;
    p(ie) && "requestSubmit" in p(ie) ? p(ie).requestSubmit(s) : (w = p(ie)) != null && w.reportValidity() && (s ? s.click() : p(ie).submit());
  }
  function lo(s) {
    X("expire", s), rt && (clearTimeout(rt), rt = null), s < 1 ? Ei() : rt = setTimeout(Ei, s);
  }
  function Ui(s) {
    X("floating", s), I() !== s && (p(ue).style.left = "", p(ue).style.top = ""), I(s === !0 || s === "" ? "auto" : s === !1 || s === "false" ? void 0 : I()), I() ? (i() || i("onsubmit"), document.addEventListener("scroll", Si), document.addEventListener("click", Ci), window.addEventListener("resize", Pi)) : i() === "onsubmit" && i(void 0);
  }
  function Bi(s) {
    var w, F;
    if (X("overlay", s), h(s), s) {
      if (i() || i("onsubmit"), p(Ue) && p(ue).parentElement && p(Ue).replaceWith(p(ue).parentElement), (F = (w = p(ue)) == null ? void 0 : w.parentElement) == null ? void 0 : F.parentElement) {
        U(Ue, document.createElement("div"), !0), p(ue).parentElement.parentElement.appendChild(p(Ue));
        const L = document.createElement("div"), O = document.createElement("button");
        O.type = "button", O.innerHTML = "&times;", O.addEventListener("click", (H) => {
          H.preventDefault(), Ht();
        }), p(Ue).classList.add("altcha-overlay-backdrop"), O.classList.add("altcha-overlay-close-button"), L.classList.add("altcha-overlay"), p(Ue).append(L), L.append(O), b() && L.append(...document.querySelectorAll(b())), L.append(p(ue).parentElement);
      }
    } else
      p(Ue) && p(ue).parentElement && (p(Ue).replaceWith(p(ue).parentElement), p(ue).style.display = "block");
  }
  function Mi(s) {
    if (!s.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (s.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!vi.includes(s.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${vi.join(", ")}`);
    if (!s.challenge || s.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!s.salt || s.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function ji(s) {
    let w = null, F = null;
    if ("Worker" in window) {
      try {
        w = Vl(s, s.maxNumber || s.maxnumber || He()), U(Bt, w.controller, !0), F = await w.promise;
      } catch (L) {
        X(L);
      } finally {
        U(Bt, null);
      }
      if (F === null || (F == null ? void 0 : F.number) !== void 0 || "obfuscated" in s)
        return { data: s, solution: F };
    }
    if ("obfuscated" in s) {
      const L = await hh(s.obfuscated, s.key, s.maxNumber || s.maxnumber);
      return { data: s, solution: await L.promise };
    }
    w = uh(s.challenge, s.salt, s.algorithm, s.maxNumber || s.maxnumber || He()), U(Bt, w.controller, !0);
    try {
      F = await w.promise;
    } catch (L) {
      X(L);
    } finally {
      U(Bt, null);
    }
    return { data: s, solution: F };
  }
  function Vl(s, w = typeof N() == "number" ? N() : s.maxNumber || s.maxnumber || He(), F = Math.ceil(pt())) {
    const L = new AbortController(), O = [];
    F = Math.min(16, w, Math.max(1, F));
    for (let Y = 0; Y < F; Y++)
      O.push(altchaCreateWorker(Et()));
    const H = Math.ceil(w / F);
    return { promise: (async () => {
      const Y = await Promise.all(O.map((fe, Se) => {
        const we = Se * H;
        return L.signal.addEventListener("abort", () => {
          fe.postMessage({ type: "abort" });
        }), new Promise((Be) => {
          fe.addEventListener("message", (Ct) => {
            if (Ct.data)
              for (const or of O)
                or !== fe && or.postMessage({ type: "abort" });
            Be(Ct.data);
          }), fe.postMessage({
            payload: s,
            max: we + H,
            start: we,
            type: "work"
          });
        });
      }));
      for (const fe of O)
        fe.terminate();
      return Y.find((fe) => !!fe) || null;
    })(), controller: L };
  }
  async function kr() {
    if (!c()) {
      ot(q.ERROR);
      return;
    }
    const s = Rt.find((w) => w.constructor.pluginName === "obfuscation");
    if (!s || !("clarify" in s)) {
      ot(q.ERROR), X("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in s && typeof s.clarify == "function")
      return s.clarify();
  }
  function Hi(s) {
    s.obfuscated !== void 0 && c(s.obfuscated), s.auto !== void 0 && (i(s.auto), i() === "onload" && (c() ? kr() : bt())), s.blockspam !== void 0 && a(!!s.blockspam), s.customfetch !== void 0 && g(s.customfetch), s.floatinganchor !== void 0 && B(s.floatinganchor), s.delay !== void 0 && x(s.delay), s.floatingoffset !== void 0 && V(s.floatingoffset), s.floating !== void 0 && Ui(s.floating), s.expire !== void 0 && (lo(s.expire), T(s.expire)), s.challenge && (f(typeof s.challenge == "string" ? s.challenge : JSON.stringify(s.challenge)), Mi(p(an))), s.challengeurl !== void 0 && l(s.challengeurl), s.debug !== void 0 && m(!!s.debug), s.hidefooter !== void 0 && oe(!!s.hidefooter), s.hidelogo !== void 0 && J(!!s.hidelogo), s.language !== void 0 && k(_i(o(), [s.language])), s.maxnumber !== void 0 && He(+s.maxnumber), s.mockerror !== void 0 && Je(!!s.mockerror), s.name !== void 0 && G(s.name), s.overlaycontent !== void 0 && b(s.overlaycontent), s.overlay !== void 0 && Bi(s.overlay), s.refetchonexpire !== void 0 && P(!s.refetchonexpire), s.disablerefetchonexpire !== void 0 && P(!s.disablerefetchonexpire), s.sentinel !== void 0 && typeof s.sentinel == "object" && D(s.sentinel), s.spamfilter !== void 0 && S(typeof s.spamfilter == "object" ? s.spamfilter : !!s.spamfilter), s.strings && k(typeof s.strings == "string" ? s.strings : JSON.stringify(s.strings)), s.test !== void 0 && N(typeof s.test == "number" ? s.test : !!s.test), s.verifyurl !== void 0 && Z(s.verifyurl), s.workers !== void 0 && pt(+s.workers), s.workerurl !== void 0 && Et(s.workerurl);
  }
  function qi() {
    return {
      auto: i(),
      blockspam: a(),
      challengeurl: l(),
      debug: m(),
      delay: x(),
      disableautofocus: $(),
      disablerefetchonexpire: P(),
      expire: T(),
      floating: I(),
      floatinganchor: B(),
      floatingoffset: V(),
      hidefooter: oe(),
      hidelogo: J(),
      name: G(),
      maxnumber: He(),
      mockerror: Je(),
      obfuscated: c(),
      overlay: h(),
      refetchonexpire: !P(),
      spamfilter: S(),
      strings: p(se),
      test: N(),
      verifyurl: Z(),
      workers: pt(),
      workerurl: Et()
    };
  }
  function Vi() {
    return p(rr);
  }
  function zl(s) {
    return Rt.find((w) => w.constructor.pluginName === s);
  }
  function zi() {
    return p(K);
  }
  function Or() {
    p(ue).style.display = "none", h() && p(Ue) && (p(Ue).style.display = "none");
  }
  function Tr(s = 20) {
    var w;
    if (p(ue))
      if (p(rr) || U(rr, (B() ? document.querySelector(B()) : (w = p(ie)) == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || p(ie), !0), p(rr)) {
        const F = parseInt(V(), 10) || 12, L = p(rr).getBoundingClientRect(), O = p(ue).getBoundingClientRect(), H = document.documentElement.clientHeight, Y = document.documentElement.clientWidth, fe = I() === "auto" ? L.bottom + O.height + F + s > H : I() === "top", Se = Math.max(s, Math.min(Y - s - O.width, L.left + L.width / 2 - O.width / 2));
        if (fe ? p(ue).style.top = `${L.top - (O.height + F)}px` : p(ue).style.top = `${L.bottom + F}px`, p(ue).style.left = `${Se}px`, p(ue).setAttribute("data-floating", fe ? "top" : "bottom"), p(Cr)) {
          const we = p(Cr).getBoundingClientRect();
          p(Cr).style.left = L.left - Se + L.width / 2 - we.width / 2 + "px";
        }
      } else
        X("unable to find floating anchor element");
  }
  function Ht(s = q.UNVERIFIED, w = null) {
    p(Bt) && (p(Bt).abort(), U(Bt, null)), U(Rr, !1), U(nt, null), U(ge, null), U(ao, !1), U(me, null), ot(s, w);
  }
  function Wi(s) {
    U(rr, s, !0);
  }
  function ot(s, w = null) {
    U(K, s, !0), U(Mt, w, !0), _t("statechange", {
      payload: p(nt),
      state: p(K)
    });
  }
  function ln() {
    p(ue).style.display = "block", I() && Tr(), h() && p(Ue) && (p(Ue).style.display = "flex");
  }
  async function bt() {
    return Ht(q.VERIFYING), await new Promise((s) => setTimeout(s, x() || 0)), Tl().then((s) => (Mi(s), X("challenge", s), ji(s))).then(({ data: s, solution: w }) => {
      var F;
      if (X("solution", w), !w || s && "challenge" in s && !("clearText" in w)) {
        if ((w == null ? void 0 : w.number) !== void 0 && "challenge" in s)
          if (Z() && "codeChallenge" in s)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((F = document.activeElement) == null ? void 0 : F.tagName) || "") && $() === !1 && document.activeElement.blur(), U(ge, { challenge: s, solution: w }, !0);
          else {
            if (Z() && D() !== void 0)
              return Ii(sn(s, w));
            if (Z())
              return ql(sn(s, w));
            U(nt, sn(s, w), !0), X("payload", p(nt));
          }
        else if (p(K) !== q.EXPIRED)
          throw X("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      p(ge) ? (ot(q.CODE), To().then(() => {
        _t("code", { codeChallenge: p(ge) });
      })) : p(nt) && (ot(q.VERIFIED), X("verified"), To().then(() => {
        _t("verified", { payload: p(nt) }), h() && Or();
      }));
    }).catch((s) => {
      X(s), ot(q.ERROR, s.message);
    });
  }
  var Ji = Fh(), Gi = Mr(Ji);
  zd(Gi, t, "default", {});
  var nr = Ee(Gi, 2), co = xe(nr), cn = xe(co);
  let Ki;
  var Xi = xe(cn);
  {
    var Wl = (s) => {
      $o(s);
    };
    _e(Xi, (s) => {
      p(K) === q.VERIFYING && s(Wl);
    });
  }
  var qt = Ee(Xi, 2);
  Va(qt), qt.__change = [
    mh,
    K,
    S,
    ie,
    Rr,
    c,
    kr,
    bt
  ], wn(qt, (s) => U(io, s), () => p(io)), ye(cn);
  var un = Ee(cn, 2), Jl = xe(un);
  {
    var Gl = (s) => {
      var w = mn(), F = Mr(w);
      zt(F, () => p(se).verified), be(s, w);
    }, Kl = (s, w) => {
      {
        var F = (O) => {
          var H = mn(), Y = Mr(H);
          zt(Y, () => p(se).verifying), be(O, H);
        }, L = (O, H) => {
          {
            var Y = (Se) => {
              var we = mn(), Be = Mr(we);
              zt(Be, () => p(se).verificationRequired), be(Se, we);
            }, fe = (Se) => {
              var we = mn(), Be = Mr(we);
              zt(Be, () => p(se).label), be(Se, we);
            };
            _e(
              O,
              (Se) => {
                p(K) === q.CODE ? Se(Y) : Se(fe, !1);
              },
              H
            );
          }
        };
        _e(
          s,
          (O) => {
            p(K) === q.VERIFYING ? O(F) : O(L, !1);
          },
          w
        );
      }
    };
    _e(Jl, (s) => {
      p(K) === q.VERIFIED ? s(Gl) : s(Kl, !1);
    });
  }
  ye(un);
  var Yi = Ee(un, 2);
  {
    var Xl = (s) => {
      var w = vh();
      Va(w), st(() => {
        te(w, "name", G()), Xd(w, p(nt));
      }), be(s, w);
    };
    _e(Yi, (s) => {
      p(K) === q.VERIFIED && s(Xl);
    });
  }
  var Zi = Ee(Yi, 2);
  {
    var Yl = (s) => {
      var w = yh(), F = xe(w);
      te(F, "href", Sl), ye(w), st(() => te(F, "aria-label", p(se).ariaLinkLabel)), be(s, w);
    };
    _e(Zi, (s) => {
      (J() !== !0 || p(oo)) && s(Yl);
    });
  }
  var Zl = Ee(Zi, 2);
  {
    var Ql = (s) => {
      var w = Ch(), F = Ee(xe(w), 2), L = xe(F), O = Ee(L, 2);
      Ud(O, !$()), O.__keydown = [
        bh,
        Fi
      ];
      var H = Ee(O, 2), Y = xe(H), fe = xe(Y);
      {
        var Se = (Ge) => {
          var ve = Ah();
          ve.__click = Fi;
          var dn = xe(ve);
          {
            var $r = (ir) => {
              $o(ir, () => 20);
            }, sc = (ir, lc) => {
              {
                var cc = (ar) => {
                  var uo = xh();
                  be(ar, uo);
                }, uc = (ar, uo) => {
                  {
                    var fc = (sr) => {
                      var fo = Eh();
                      be(sr, fo);
                    }, dc = (sr) => {
                      var fo = _h();
                      be(sr, fo);
                    };
                    _e(
                      ar,
                      (sr) => {
                        p(me) === Ae.PLAYING ? sr(fc) : sr(dc, !1);
                      },
                      uo
                    );
                  }
                };
                _e(
                  ir,
                  (ar) => {
                    p(me) === Ae.ERROR ? ar(cc) : ar(uc, !1);
                  },
                  lc
                );
              }
            };
            _e(dn, (ir) => {
              p(me) === Ae.LOADING ? ir($r) : ir(sc, !1);
            });
          }
          ye(ve), st(() => {
            te(ve, "title", p(se).getAudioChallenge), ve.disabled = p(me) === Ae.LOADING || p(me) === Ae.ERROR || p(jt), te(ve, "aria-label", p(me) === Ae.LOADING ? p(se).loading : p(se).getAudioChallenge);
          }), be(Ge, ve);
        };
        _e(fe, (Ge) => {
          p(ge).challenge.codeChallenge.audio && Ge(Se);
        });
      }
      var we = Ee(fe, 2);
      we.__click = [gh, bt], ye(Y);
      var Be = Ee(Y, 2), Ct = xe(Be);
      {
        var or = (Ge) => {
          $o(Ge, () => 16);
        };
        _e(Ct, (Ge) => {
          p(jt) && Ge(or);
        });
      }
      var fn = Ee(Ct);
      ye(Be), ye(H);
      var ic = Ee(H, 2);
      {
        var ac = (Ge) => {
          var ve = Rh(), dn = xe(ve);
          ye(ve), wn(ve, ($r) => U(At, $r), () => p(At)), st(($r) => te(dn, "src", $r), [
            () => Ri(p(ge).challenge.codeChallenge.audio, { language: Ce() })
          ]), Ot("loadstart", ve, Dl), Ot("canplay", ve, Il), Ot("pause", ve, Bl), Ot("playing", ve, Ul), Ot("ended", ve, Ll), Ot("error", dn, Nl), be(Ge, ve);
        };
        _e(ic, (Ge) => {
          p(ge).challenge.codeChallenge.audio && p(ao) && Ge(ac);
        });
      }
      ye(F), ye(w), st(() => {
        te(w, "aria-label", p(se).verificationRequired), te(L, "src", p(ge).challenge.codeChallenge.image), te(O, "minlength", p(ge).challenge.codeChallenge.length || 1), te(O, "maxlength", p(ge).challenge.codeChallenge.length), te(O, "placeholder", p(se).enterCode), te(O, "aria-label", p(me) === Ae.LOADING ? p(se).loading : p(me) === Ae.PLAYING ? "" : p(se).enterCodeAria), te(O, "aria-live", p(me) ? "assertive" : "polite"), te(O, "aria-busy", p(me) === Ae.LOADING), O.disabled = p(jt), te(we, "aria-label", p(se).reload), te(we, "title", p(se).reload), we.disabled = p(jt), Be.disabled = p(jt), te(Be, "aria-label", p(se).verify), Hd(fn, ` ${p(se).verify ?? ""}`);
      }), Ot("submit", F, Ml, !0), be(s, w);
    };
    _e(Zl, (s) => {
      var w;
      (w = p(ge)) != null && w.challenge.codeChallenge && s(Ql);
    });
  }
  ye(co);
  var Qi = Ee(co, 2);
  {
    var ec = (s) => {
      var w = Oh(), F = Ee(xe(w), 2);
      {
        var L = (H) => {
          var Y = Sh(), fe = xe(Y);
          zt(fe, () => p(se).expired), ye(Y), st(() => te(Y, "title", p(Mt))), be(H, Y);
        }, O = (H) => {
          var Y = kh(), fe = xe(Y);
          zt(fe, () => p(se).error), ye(Y), st(() => te(Y, "title", p(Mt))), be(H, Y);
        };
        _e(F, (H) => {
          p(K) === q.EXPIRED ? H(L) : H(O, !1);
        });
      }
      ye(w), be(s, w);
    };
    _e(Qi, (s) => {
      (p(Mt) || p(K) === q.EXPIRED) && s(ec);
    });
  }
  var ea = Ee(Qi, 2);
  {
    var tc = (s) => {
      var w = Th(), F = xe(w), L = xe(F);
      zt(L, () => p(se).footer), ye(F), ye(w), be(s, w);
    };
    _e(ea, (s) => {
      p(se).footer && (oe() !== !0 || p(oo)) && s(tc);
    });
  }
  var rc = Ee(ea, 2);
  {
    var nc = (s) => {
      var w = $h();
      wn(w, (F) => U(Cr, F), () => p(Cr)), be(s, w);
    };
    _e(rc, (s) => {
      I() && s(nc);
    });
  }
  ye(nr), wn(nr, (s) => U(ue, s), () => p(ue)), st(
    (s) => {
      te(nr, "data-state", p(K)), te(nr, "data-floating", I()), te(nr, "data-overlay", h()), Ki = Jd(cn, 1, "altcha-checkbox", null, Ki, s), te(qt, "id", p(xi)), qt.required = i() !== "onsubmit" && (!I() || i() !== "off"), te(un, "for", p(xi));
    },
    [
      () => ({
        "altcha-checkbox-verifying": p(K) === q.VERIFYING
      })
    ]
  ), Ot("invalid", qt, $i), Zd(qt, () => p(Rr), (s) => U(Rr, s)), be(e, Ji);
  var oc = ul({
    clarify: kr,
    configure: Hi,
    getConfiguration: qi,
    getFloatingAnchor: Vi,
    getPlugin: zl,
    getState: zi,
    hide: Or,
    repositionFloating: Tr,
    reset: Ht,
    setFloatingAnchor: Wi,
    setState: ot,
    show: ln,
    verify: bt,
    get auto() {
      return i();
    },
    set auto(s = void 0) {
      i(s), z();
    },
    get blockspam() {
      return a();
    },
    set blockspam(s = void 0) {
      a(s), z();
    },
    get challengeurl() {
      return l();
    },
    set challengeurl(s = void 0) {
      l(s), z();
    },
    get challengejson() {
      return f();
    },
    set challengejson(s = void 0) {
      f(s), z();
    },
    get credentials() {
      return u();
    },
    set credentials(s = void 0) {
      u(s), z();
    },
    get customfetch() {
      return g();
    },
    set customfetch(s = void 0) {
      g(s), z();
    },
    get debug() {
      return m();
    },
    set debug(s = !1) {
      m(s), z();
    },
    get delay() {
      return x();
    },
    set delay(s = 0) {
      x(s), z();
    },
    get disableautofocus() {
      return $();
    },
    set disableautofocus(s = !1) {
      $(s), z();
    },
    get refetchonexpire() {
      return R();
    },
    set refetchonexpire(s = !0) {
      R(s), z();
    },
    get disablerefetchonexpire() {
      return P();
    },
    set disablerefetchonexpire(s = !R) {
      P(s), z();
    },
    get expire() {
      return T();
    },
    set expire(s = void 0) {
      T(s), z();
    },
    get floating() {
      return I();
    },
    set floating(s = void 0) {
      I(s), z();
    },
    get floatinganchor() {
      return B();
    },
    set floatinganchor(s = void 0) {
      B(s), z();
    },
    get floatingoffset() {
      return V();
    },
    set floatingoffset(s = void 0) {
      V(s), z();
    },
    get floatingpersist() {
      return Q();
    },
    set floatingpersist(s = !1) {
      Q(s), z();
    },
    get hidefooter() {
      return oe();
    },
    set hidefooter(s = !1) {
      oe(s), z();
    },
    get hidelogo() {
      return J();
    },
    set hidelogo(s = !1) {
      J(s), z();
    },
    get id() {
      return de();
    },
    set id(s = void 0) {
      de(s), z();
    },
    get language() {
      return Ce();
    },
    set language(s = void 0) {
      Ce(s), z();
    },
    get name() {
      return G();
    },
    set name(s = "altcha") {
      G(s), z();
    },
    get maxnumber() {
      return He();
    },
    set maxnumber(s = 1e6) {
      He(s), z();
    },
    get mockerror() {
      return Je();
    },
    set mockerror(s = !1) {
      Je(s), z();
    },
    get obfuscated() {
      return c();
    },
    set obfuscated(s = void 0) {
      c(s), z();
    },
    get overlay() {
      return h();
    },
    set overlay(s = void 0) {
      h(s), z();
    },
    get overlaycontent() {
      return b();
    },
    set overlaycontent(s = void 0) {
      b(s), z();
    },
    get plugins() {
      return d();
    },
    set plugins(s = void 0) {
      d(s), z();
    },
    get sentinel() {
      return D();
    },
    set sentinel(s = void 0) {
      D(s), z();
    },
    get spamfilter() {
      return S();
    },
    set spamfilter(s = !1) {
      S(s), z();
    },
    get strings() {
      return k();
    },
    set strings(s = void 0) {
      k(s), z();
    },
    get test() {
      return N();
    },
    set test(s = !1) {
      N(s), z();
    },
    get verifyurl() {
      return Z();
    },
    set verifyurl(s = void 0) {
      Z(s), z();
    },
    get workers() {
      return pt();
    },
    set workers(s = Math.min(16, navigator.hardwareConcurrency || 8)) {
      pt(s), z();
    },
    get workerurl() {
      return Et();
    },
    set workerurl(s = void 0) {
      Et(s), z();
    }
  });
  return n(), oc;
}
jd(["change", "keydown", "click"]);
customElements.define("altcha-widget", sh(
  Ph,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    disableautofocus: { type: "Boolean" },
    disablerefetchonexpire: { type: "Boolean" },
    expire: { type: "Number" },
    floatingoffset: { type: "Number" },
    hidefooter: { type: "Boolean" },
    hidelogo: { type: "Boolean" },
    maxnumber: { type: "Number" },
    mockerror: { type: "Boolean" },
    refetchonexpire: { type: "Boolean" },
    test: { type: "Boolean" },
    workers: { type: "Number" },
    auto: {},
    challengeurl: {},
    challengejson: {},
    credentials: {},
    customfetch: {},
    floating: {},
    floatinganchor: {},
    floatingpersist: {},
    id: {},
    language: {},
    name: {},
    obfuscated: {},
    overlay: {},
    overlaycontent: {},
    plugins: {},
    sentinel: {},
    spamfilter: {},
    strings: {},
    verifyurl: {},
    workerurl: {}
  },
  ["default"],
  [
    "clarify",
    "configure",
    "getConfiguration",
    "getFloatingAnchor",
    "getPlugin",
    "getState",
    "hide",
    "repositionFloating",
    "reset",
    "setFloatingAnchor",
    "setState",
    "show",
    "verify"
  ],
  !1
));
const _l = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:99999999}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
function Al(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new Mf();
Al(_l);
Al(_l);
const Ka = "https://api.blockbots.org", Zo = "bb-captcha";
async function Lh() {
  if (customElements.get(Zo))
    return;
  await customElements.whenDefined("altcha-widget");
  const e = customElements.get("altcha-widget");
  customElements.define(Zo, class extends e {
  });
}
async function Nh(e, t) {
  return await Lh(), new Promise((r, n) => {
    const o = document.querySelector(".main-content");
    if (!o)
      return r(null);
    let i = null;
    const a = document.createElement(Zo);
    a.setAttribute("style", "margin: 2rem 0; display: block; --altcha-color-base: #fff; --altcha-color-text: #000; --altcha-color-border: #ccc;"), a.setAttribute("hidelogo", ""), a.setAttribute("strings", JSON.stringify({
      footer: 'Protected by <a href="https://blockbots.org" target="_blank">BlockBots</a>'
    })), a.setAttribute("challengejson", JSON.stringify(t)), a.setAttribute("verifyurl", `${Ka}/v1/captcha/verify`), a.customfetch = async (f, u) => {
      const g = JSON.parse(u.body), x = await (await fetch(`${Ka}/v1/captcha/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-API-Key": e },
        body: JSON.stringify({ payload: g.payload })
      })).json();
      return x.__bbst && x.__bbts && (Jt("__bbst", x.__bbst, { "Max-Age": 240, Secure: !0 }), Jt("__bbts", x.__bbts, { "Max-Age": 240, Secure: !0 }), x.__bbjwt && Jt("__bbjwt", x.__bbjwt, { "Max-Age": 240, Secure: !0 })), new Response(
        JSON.stringify({ verified: x.success === !0, payload: g.payload }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    };
    const l = document.getElementById("loader-status");
    l ? o.insertBefore(a, l) : o.appendChild(a), a.addEventListener("statechange", (f) => {
      var u, g;
      ((u = f.detail) == null ? void 0 : u.state) === "verified" ? (a.remove(), r(i)) : ((g = f.detail) == null ? void 0 : g.state) === "error" && (a.remove(), n(new Error("Captcha failed")));
    });
  });
}
async function Ih({ apiKey: e, retries: t, delay: r, extraToken: n, ui: o }) {
  o && Cs();
  for (let i = 0; i < t && !Gr("__bb_decision"); i++) {
    if (!Io()) {
      const a = await La(e, null, n);
      if (console.log("[blockbots] sendFingerprints result:", a), a && a.status === "challenge" && (o && Uf(), await Nh(e, a.challenge)), !await Yc())
        continue;
    }
    if (await If())
      return o && Bf(), !0;
    await La(e, null, n), await Lf(r);
  }
  return o && Ss(), !1;
}
class Uh {
  constructor({
    apiKey: t,
    retries: r = 3,
    delay: n = 1e3,
    extraToken: o = !1,
    ui: i = !0
  }) {
    if (!t)
      throw new Error("BlockBots: apiKey is required");
    this.apiKey = t, this.retries = r, this.delay = n, this.extraToken = o, this.ui = i, this.hooks = bc();
  }
  /*static showLoader() {
      showLoader();
  }*/
  static setLoaderBlocked() {
    Cs(), Ss();
  }
  /*static hideLoader() {
      hideLoader();
  }*/
  onVerified(t) {
    return this.hooks.on("verified", t), this;
  }
  onBlocked(t) {
    return this.hooks.on("blocked", t), this;
  }
  onError(t) {
    return this.hooks.on("error", t), this;
  }
  async verify() {
    try {
      return await Ih({
        apiKey: this.apiKey,
        retries: this.retries,
        delay: this.delay,
        extraToken: this.extraToken,
        ui: this.ui
      }) ? (this.hooks.emit("verified"), !0) : (this.hooks.emit("blocked", "validation_failed"), !1);
    } catch (t) {
      return this.hooks.emit("error", t), !1;
    }
  }
}
export {
  Uh as BlockBots
};
