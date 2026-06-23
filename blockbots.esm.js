(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('button{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body.theme-dark{background-color:#222;color:#d9d9d9}body.theme-dark a{color:#fff}body.theme-dark a:hover{text-decoration:underline;color:#ee730a}body.theme-dark .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-dark .font-red{color:#b20f03}body.theme-dark .ctp-button{background-color:#4693ff;color:#1d1d1d}body.theme-dark #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body.theme-dark #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}body.theme-light{background-color:#fff;color:#313131}body.theme-light a{color:#0051c3}body.theme-light a:hover{text-decoration:underline;color:#ee730a}body.theme-light .lds-ring div{border-color:#595959 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-light .font-red{color:#fc574a}body.theme-light .ctp-button{border-color:#003681;background-color:#003681;color:#fff}body.theme-light #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=)}body.theme-light #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}a{transition:color .15s ease;background-color:#0000;text-decoration:none;color:#0051c3}a:hover{text-decoration:underline;color:#ee730a}.main-content{margin:8rem auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem}.main-content .loading-verifying{height:76.391px}.spacer{margin:2rem 0}.spacer-top{margin-top:4rem}.spacer-bottom{margin-bottom:2rem}.heading-favicon{margin-right:.5rem;width:2rem;height:2rem}@media (width <= 720px){.main-content{margin-top:4rem}.heading-favicon{width:1.5rem;height:1.5rem}}.main-wrapper{display:flex;flex:1;flex-direction:column;align-items:center}.font-red{color:#b20f03}.h1{line-height:3.75rem;font-size:2.5rem;font-weight:500}.core-msg{line-height:2.25rem;font-size:1.5rem;font-weight:400}.body-text{line-height:1.25rem;font-size:1rem;font-weight:400}@media (width <= 720px){.h1{line-height:1.75rem;font-size:1.5rem}.h2{line-height:1.5rem;font-size:1.25rem}.core-msg{line-height:1.5rem;font-size:1rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}#challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=);background-repeat:no-repeat;background-size:contain;padding-left:42px}.text-center{text-align:center}.ctp-button{transition-duration:.2s;transition-property:background-color,border-color,color;transition-timing-function:ease;margin:2rem 0;border:.063rem solid #0051c3;border-radius:.313rem;background-color:#0051c3;cursor:pointer;padding:.375rem 1rem;line-height:1.313rem;color:#fff;font-size:.875rem}.ctp-button:hover{border-color:#003681;background-color:#003681;cursor:pointer;color:#fff}.footer{margin:0 auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem;line-height:1.125rem;font-size:.75rem}.footer-inner{border-top:1px solid #d9d9d9;padding-top:1rem;padding-bottom:1rem}.clearfix:after{display:table;clear:both;content:""}.clearfix .column{float:left;padding-right:1.5rem;width:50%}.diagnostic-wrapper{margin-bottom:.5rem}.footer .ray-id{text-align:center}.footer .ray-id code{font-family:monaco,courier,monospace}.core-msg,.zone-name-title{overflow-wrap:break-word}@media (width <= 720px){.diagnostic-wrapper{display:flex;flex-wrap:wrap;justify-content:center}.clearfix:after{display:initial;clear:none;text-align:center;content:none}.column{padding-bottom:2rem}.clearfix .column{float:none;padding:0;width:auto;word-break:keep-all}.zone-name-title{margin-bottom:1rem}}.loading-verifying{height:76.391px}.lds-ring{display:inline-block;position:relative;width:1.875rem;height:1.875rem}.lds-ring div{box-sizing:border-box;display:block;position:absolute;border:.3rem solid #595959;border-radius:50%;border-color:#313131 rgba(0,0,0,0) rgba(0,0,0,0);width:1.875rem;height:1.875rem;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.rtl .heading-favicon{margin-right:0;margin-left:.5rem}.rtl #challenge-success-text{background-position:right;padding-right:42px;padding-left:0}.rtl #challenge-error-text{background-position:right;padding-right:34px;padding-left:0}.challenge-content .loading-verifying{height:76.391px}@media (prefers-color-scheme: dark){body{background-color:#222;color:#d9d9d9}body a{color:#fff}body a:hover{text-decoration:underline;color:#ee730a}body .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body .font-red{color:#b20f03}body .ctp-button{background-color:#4693ff;color:#1d1d1d}body #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}}*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{display:flex;flex-direction:column;height:100vh;min-height:100vh}.main-content{margin:8rem auto;padding-left:1.5rem;max-width:60rem}@media (width <= 720px){.main-content{margin-top:4rem}}.h2{line-height:2.25rem;font-size:1.5rem;font-weight:500}@media (width <= 720px){.h2{line-height:1.5rem;font-size:1.25rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}@media (prefers-color-scheme: dark){body{background-color:#222;color:#d9d9d9}}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
function ln() {
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
        } catch (i) {
          console.error("BlockBots hook error:", i);
        }
    }
  };
}
function un(e, t = 0) {
  t = t || 0;
  let r = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    r = Math.imul(r ^ a, 2654435761), n = Math.imul(n ^ a, 1597334677);
  }
  return r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), 4294967296 * (2097151 & n) + (r >>> 0);
}
var fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dn(e) {
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
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Fr = { exports: {} };
const hn = {}, pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn
}, Symbol.toStringTag, { value: "Module" })), er = /* @__PURE__ */ dn(pn);
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
    var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", i = n ? window : {};
    i.JS_MD5_NO_WINDOW && (n = !1);
    var a = !n && typeof self == "object", s = !i.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    s ? i = fn : a && (i = self);
    var d = !i.JS_MD5_NO_COMMON_JS && !0 && e.exports, p = !i.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", f = "0123456789abcdef".split(""), x = [128, 32768, 8388608, -2147483648], _ = [0, 8, 16, 24], O = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), A = [], k;
    if (p) {
      var S = new ArrayBuffer(68);
      k = new Uint8Array(S), A = new Uint32Array(S);
    }
    var U = Array.isArray;
    (i.JS_MD5_NO_NODE_JS || !U) && (U = function(o) {
      return Object.prototype.toString.call(o) === "[object Array]";
    });
    var B = ArrayBuffer.isView;
    p && (i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !B) && (B = function(o) {
      return typeof o == "object" && o.buffer && o.buffer.constructor === ArrayBuffer;
    });
    var M = function(o) {
      var l = typeof o;
      if (l === "string")
        return [o, !0];
      if (l !== "object" || o === null)
        throw new Error(t);
      if (p && o.constructor === ArrayBuffer)
        return [new Uint8Array(o), !1];
      if (!U(o) && !B(o))
        throw new Error(t);
      return [o, !1];
    }, J = function(o) {
      return function(l) {
        return new L(!0).update(l)[o]();
      };
    }, H = function() {
      var o = J("hex");
      s && (o = Z(o)), o.create = function() {
        return new L();
      }, o.update = function(c) {
        return o.create().update(c);
      };
      for (var l = 0; l < O.length; ++l) {
        var u = O[l];
        o[u] = J(u);
      }
      return o;
    }, Z = function(o) {
      var l = er, u = er.Buffer, c;
      u.from && !i.JS_MD5_NO_BUFFER_FROM ? c = u.from : c = function(v) {
        return new u(v);
      };
      var R = function(v) {
        if (typeof v == "string")
          return l.createHash("md5").update(v, "utf8").digest("hex");
        if (v == null)
          throw new Error(t);
        return v.constructor === ArrayBuffer && (v = new Uint8Array(v)), U(v) || B(v) || v.constructor === u ? l.createHash("md5").update(c(v)).digest("hex") : o(v);
      };
      return R;
    }, Q = function(o) {
      return function(l, u) {
        return new We(l, !0).update(u)[o]();
      };
    }, me = function() {
      var o = Q("hex");
      o.create = function(c) {
        return new We(c);
      }, o.update = function(c, R) {
        return o.create(c).update(R);
      };
      for (var l = 0; l < O.length; ++l) {
        var u = O[l];
        o[u] = Q(u);
      }
      return o;
    };
    function L(o) {
      if (o)
        A[0] = A[16] = A[1] = A[2] = A[3] = A[4] = A[5] = A[6] = A[7] = A[8] = A[9] = A[10] = A[11] = A[12] = A[13] = A[14] = A[15] = 0, this.blocks = A, this.buffer8 = k;
      else if (p) {
        var l = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(l), this.blocks = new Uint32Array(l);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    L.prototype.update = function(o) {
      if (this.finalized)
        throw new Error(r);
      var l = M(o);
      o = l[0];
      for (var u = l[1], c, R = 0, v, E = o.length, C = this.blocks, q = this.buffer8; R < E; ) {
        if (this.hashed && (this.hashed = !1, C[0] = C[16], C[16] = C[1] = C[2] = C[3] = C[4] = C[5] = C[6] = C[7] = C[8] = C[9] = C[10] = C[11] = C[12] = C[13] = C[14] = C[15] = 0), u)
          if (p)
            for (v = this.start; R < E && v < 64; ++R)
              c = o.charCodeAt(R), c < 128 ? q[v++] = c : c < 2048 ? (q[v++] = 192 | c >>> 6, q[v++] = 128 | c & 63) : c < 55296 || c >= 57344 ? (q[v++] = 224 | c >>> 12, q[v++] = 128 | c >>> 6 & 63, q[v++] = 128 | c & 63) : (c = 65536 + ((c & 1023) << 10 | o.charCodeAt(++R) & 1023), q[v++] = 240 | c >>> 18, q[v++] = 128 | c >>> 12 & 63, q[v++] = 128 | c >>> 6 & 63, q[v++] = 128 | c & 63);
          else
            for (v = this.start; R < E && v < 64; ++R)
              c = o.charCodeAt(R), c < 128 ? C[v >>> 2] |= c << _[v++ & 3] : c < 2048 ? (C[v >>> 2] |= (192 | c >>> 6) << _[v++ & 3], C[v >>> 2] |= (128 | c & 63) << _[v++ & 3]) : c < 55296 || c >= 57344 ? (C[v >>> 2] |= (224 | c >>> 12) << _[v++ & 3], C[v >>> 2] |= (128 | c >>> 6 & 63) << _[v++ & 3], C[v >>> 2] |= (128 | c & 63) << _[v++ & 3]) : (c = 65536 + ((c & 1023) << 10 | o.charCodeAt(++R) & 1023), C[v >>> 2] |= (240 | c >>> 18) << _[v++ & 3], C[v >>> 2] |= (128 | c >>> 12 & 63) << _[v++ & 3], C[v >>> 2] |= (128 | c >>> 6 & 63) << _[v++ & 3], C[v >>> 2] |= (128 | c & 63) << _[v++ & 3]);
        else if (p)
          for (v = this.start; R < E && v < 64; ++R)
            q[v++] = o[R];
        else
          for (v = this.start; R < E && v < 64; ++R)
            C[v >>> 2] |= o[R] << _[v++ & 3];
        this.lastByteIndex = v, this.bytes += v - this.start, v >= 64 ? (this.start = v - 64, this.hash(), this.hashed = !0) : this.start = v;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, L.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var o = this.blocks, l = this.lastByteIndex;
        o[l >>> 2] |= x[l & 3], l >= 56 && (this.hashed || this.hash(), o[0] = o[16], o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), o[14] = this.bytes << 3, o[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, L.prototype.hash = function() {
      var o, l, u, c, R, v, E = this.blocks;
      this.first ? (o = E[0] - 680876937, o = (o << 7 | o >>> 25) - 271733879 << 0, c = (-1732584194 ^ o & 2004318071) + E[1] - 117830708, c = (c << 12 | c >>> 20) + o << 0, u = (-271733879 ^ c & (o ^ -271733879)) + E[2] - 1126478375, u = (u << 17 | u >>> 15) + c << 0, l = (o ^ u & (c ^ o)) + E[3] - 1316259209, l = (l << 22 | l >>> 10) + u << 0) : (o = this.h0, l = this.h1, u = this.h2, c = this.h3, o += (c ^ l & (u ^ c)) + E[0] - 680876936, o = (o << 7 | o >>> 25) + l << 0, c += (u ^ o & (l ^ u)) + E[1] - 389564586, c = (c << 12 | c >>> 20) + o << 0, u += (l ^ c & (o ^ l)) + E[2] + 606105819, u = (u << 17 | u >>> 15) + c << 0, l += (o ^ u & (c ^ o)) + E[3] - 1044525330, l = (l << 22 | l >>> 10) + u << 0), o += (c ^ l & (u ^ c)) + E[4] - 176418897, o = (o << 7 | o >>> 25) + l << 0, c += (u ^ o & (l ^ u)) + E[5] + 1200080426, c = (c << 12 | c >>> 20) + o << 0, u += (l ^ c & (o ^ l)) + E[6] - 1473231341, u = (u << 17 | u >>> 15) + c << 0, l += (o ^ u & (c ^ o)) + E[7] - 45705983, l = (l << 22 | l >>> 10) + u << 0, o += (c ^ l & (u ^ c)) + E[8] + 1770035416, o = (o << 7 | o >>> 25) + l << 0, c += (u ^ o & (l ^ u)) + E[9] - 1958414417, c = (c << 12 | c >>> 20) + o << 0, u += (l ^ c & (o ^ l)) + E[10] - 42063, u = (u << 17 | u >>> 15) + c << 0, l += (o ^ u & (c ^ o)) + E[11] - 1990404162, l = (l << 22 | l >>> 10) + u << 0, o += (c ^ l & (u ^ c)) + E[12] + 1804603682, o = (o << 7 | o >>> 25) + l << 0, c += (u ^ o & (l ^ u)) + E[13] - 40341101, c = (c << 12 | c >>> 20) + o << 0, u += (l ^ c & (o ^ l)) + E[14] - 1502002290, u = (u << 17 | u >>> 15) + c << 0, l += (o ^ u & (c ^ o)) + E[15] + 1236535329, l = (l << 22 | l >>> 10) + u << 0, o += (u ^ c & (l ^ u)) + E[1] - 165796510, o = (o << 5 | o >>> 27) + l << 0, c += (l ^ u & (o ^ l)) + E[6] - 1069501632, c = (c << 9 | c >>> 23) + o << 0, u += (o ^ l & (c ^ o)) + E[11] + 643717713, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ o & (u ^ c)) + E[0] - 373897302, l = (l << 20 | l >>> 12) + u << 0, o += (u ^ c & (l ^ u)) + E[5] - 701558691, o = (o << 5 | o >>> 27) + l << 0, c += (l ^ u & (o ^ l)) + E[10] + 38016083, c = (c << 9 | c >>> 23) + o << 0, u += (o ^ l & (c ^ o)) + E[15] - 660478335, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ o & (u ^ c)) + E[4] - 405537848, l = (l << 20 | l >>> 12) + u << 0, o += (u ^ c & (l ^ u)) + E[9] + 568446438, o = (o << 5 | o >>> 27) + l << 0, c += (l ^ u & (o ^ l)) + E[14] - 1019803690, c = (c << 9 | c >>> 23) + o << 0, u += (o ^ l & (c ^ o)) + E[3] - 187363961, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ o & (u ^ c)) + E[8] + 1163531501, l = (l << 20 | l >>> 12) + u << 0, o += (u ^ c & (l ^ u)) + E[13] - 1444681467, o = (o << 5 | o >>> 27) + l << 0, c += (l ^ u & (o ^ l)) + E[2] - 51403784, c = (c << 9 | c >>> 23) + o << 0, u += (o ^ l & (c ^ o)) + E[7] + 1735328473, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ o & (u ^ c)) + E[12] - 1926607734, l = (l << 20 | l >>> 12) + u << 0, R = l ^ u, o += (R ^ c) + E[5] - 378558, o = (o << 4 | o >>> 28) + l << 0, c += (R ^ o) + E[8] - 2022574463, c = (c << 11 | c >>> 21) + o << 0, v = c ^ o, u += (v ^ l) + E[11] + 1839030562, u = (u << 16 | u >>> 16) + c << 0, l += (v ^ u) + E[14] - 35309556, l = (l << 23 | l >>> 9) + u << 0, R = l ^ u, o += (R ^ c) + E[1] - 1530992060, o = (o << 4 | o >>> 28) + l << 0, c += (R ^ o) + E[4] + 1272893353, c = (c << 11 | c >>> 21) + o << 0, v = c ^ o, u += (v ^ l) + E[7] - 155497632, u = (u << 16 | u >>> 16) + c << 0, l += (v ^ u) + E[10] - 1094730640, l = (l << 23 | l >>> 9) + u << 0, R = l ^ u, o += (R ^ c) + E[13] + 681279174, o = (o << 4 | o >>> 28) + l << 0, c += (R ^ o) + E[0] - 358537222, c = (c << 11 | c >>> 21) + o << 0, v = c ^ o, u += (v ^ l) + E[3] - 722521979, u = (u << 16 | u >>> 16) + c << 0, l += (v ^ u) + E[6] + 76029189, l = (l << 23 | l >>> 9) + u << 0, R = l ^ u, o += (R ^ c) + E[9] - 640364487, o = (o << 4 | o >>> 28) + l << 0, c += (R ^ o) + E[12] - 421815835, c = (c << 11 | c >>> 21) + o << 0, v = c ^ o, u += (v ^ l) + E[15] + 530742520, u = (u << 16 | u >>> 16) + c << 0, l += (v ^ u) + E[2] - 995338651, l = (l << 23 | l >>> 9) + u << 0, o += (u ^ (l | ~c)) + E[0] - 198630844, o = (o << 6 | o >>> 26) + l << 0, c += (l ^ (o | ~u)) + E[7] + 1126891415, c = (c << 10 | c >>> 22) + o << 0, u += (o ^ (c | ~l)) + E[14] - 1416354905, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~o)) + E[5] - 57434055, l = (l << 21 | l >>> 11) + u << 0, o += (u ^ (l | ~c)) + E[12] + 1700485571, o = (o << 6 | o >>> 26) + l << 0, c += (l ^ (o | ~u)) + E[3] - 1894986606, c = (c << 10 | c >>> 22) + o << 0, u += (o ^ (c | ~l)) + E[10] - 1051523, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~o)) + E[1] - 2054922799, l = (l << 21 | l >>> 11) + u << 0, o += (u ^ (l | ~c)) + E[8] + 1873313359, o = (o << 6 | o >>> 26) + l << 0, c += (l ^ (o | ~u)) + E[15] - 30611744, c = (c << 10 | c >>> 22) + o << 0, u += (o ^ (c | ~l)) + E[6] - 1560198380, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~o)) + E[13] + 1309151649, l = (l << 21 | l >>> 11) + u << 0, o += (u ^ (l | ~c)) + E[4] - 145523070, o = (o << 6 | o >>> 26) + l << 0, c += (l ^ (o | ~u)) + E[11] - 1120210379, c = (c << 10 | c >>> 22) + o << 0, u += (o ^ (c | ~l)) + E[2] + 718787259, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~o)) + E[9] - 343485551, l = (l << 21 | l >>> 11) + u << 0, this.first ? (this.h0 = o + 1732584193 << 0, this.h1 = l - 271733879 << 0, this.h2 = u - 1732584194 << 0, this.h3 = c + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + o << 0, this.h1 = this.h1 + l << 0, this.h2 = this.h2 + u << 0, this.h3 = this.h3 + c << 0);
    }, L.prototype.hex = function() {
      this.finalize();
      var o = this.h0, l = this.h1, u = this.h2, c = this.h3;
      return f[o >>> 4 & 15] + f[o & 15] + f[o >>> 12 & 15] + f[o >>> 8 & 15] + f[o >>> 20 & 15] + f[o >>> 16 & 15] + f[o >>> 28 & 15] + f[o >>> 24 & 15] + f[l >>> 4 & 15] + f[l & 15] + f[l >>> 12 & 15] + f[l >>> 8 & 15] + f[l >>> 20 & 15] + f[l >>> 16 & 15] + f[l >>> 28 & 15] + f[l >>> 24 & 15] + f[u >>> 4 & 15] + f[u & 15] + f[u >>> 12 & 15] + f[u >>> 8 & 15] + f[u >>> 20 & 15] + f[u >>> 16 & 15] + f[u >>> 28 & 15] + f[u >>> 24 & 15] + f[c >>> 4 & 15] + f[c & 15] + f[c >>> 12 & 15] + f[c >>> 8 & 15] + f[c >>> 20 & 15] + f[c >>> 16 & 15] + f[c >>> 28 & 15] + f[c >>> 24 & 15];
    }, L.prototype.toString = L.prototype.hex, L.prototype.digest = function() {
      this.finalize();
      var o = this.h0, l = this.h1, u = this.h2, c = this.h3;
      return [
        o & 255,
        o >>> 8 & 255,
        o >>> 16 & 255,
        o >>> 24 & 255,
        l & 255,
        l >>> 8 & 255,
        l >>> 16 & 255,
        l >>> 24 & 255,
        u & 255,
        u >>> 8 & 255,
        u >>> 16 & 255,
        u >>> 24 & 255,
        c & 255,
        c >>> 8 & 255,
        c >>> 16 & 255,
        c >>> 24 & 255
      ];
    }, L.prototype.array = L.prototype.digest, L.prototype.arrayBuffer = function() {
      this.finalize();
      var o = new ArrayBuffer(16), l = new Uint32Array(o);
      return l[0] = this.h0, l[1] = this.h1, l[2] = this.h2, l[3] = this.h3, o;
    }, L.prototype.buffer = L.prototype.arrayBuffer, L.prototype.base64 = function() {
      for (var o, l, u, c = "", R = this.array(), v = 0; v < 15; )
        o = R[v++], l = R[v++], u = R[v++], c += P[o >>> 2] + P[(o << 4 | l >>> 4) & 63] + P[(l << 2 | u >>> 6) & 63] + P[u & 63];
      return o = R[v], c += P[o >>> 2] + P[o << 4 & 63] + "==", c;
    };
    function We(o, l) {
      var u, c = M(o);
      if (o = c[0], c[1]) {
        var R = [], v = o.length, E = 0, C;
        for (u = 0; u < v; ++u)
          C = o.charCodeAt(u), C < 128 ? R[E++] = C : C < 2048 ? (R[E++] = 192 | C >>> 6, R[E++] = 128 | C & 63) : C < 55296 || C >= 57344 ? (R[E++] = 224 | C >>> 12, R[E++] = 128 | C >>> 6 & 63, R[E++] = 128 | C & 63) : (C = 65536 + ((C & 1023) << 10 | o.charCodeAt(++u) & 1023), R[E++] = 240 | C >>> 18, R[E++] = 128 | C >>> 12 & 63, R[E++] = 128 | C >>> 6 & 63, R[E++] = 128 | C & 63);
        o = R;
      }
      o.length > 64 && (o = new L(!0).update(o).array());
      var q = [], Zt = [];
      for (u = 0; u < 64; ++u) {
        var Qt = o[u] || 0;
        q[u] = 92 ^ Qt, Zt[u] = 54 ^ Qt;
      }
      L.call(this, l), this.update(Zt), this.oKeyPad = q, this.inner = !0, this.sharedMemory = l;
    }
    We.prototype = new L(), We.prototype.finalize = function() {
      if (L.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var o = this.array();
        L.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(o), L.prototype.finalize.call(this);
      }
    };
    var ke = H();
    ke.md5 = ke, ke.md5.hmac = me(), d ? e.exports = ke : i.md5 = ke;
  })();
})(Fr);
var wn = Fr.exports;
const Pr = () => {
  const e = document.createElement("canvas");
  return !!(e.getContext && e.getContext("2d"));
}, bn = () => {
  if (!Pr())
    return "None";
  const e = document.createElement("canvas"), t = e.getContext("2d"), r = "BlockBots,org <canvas>";
  e.setAttribute("width", 220), e.setAttribute("height", 30);
  try {
    t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(r, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(r, 4, 17);
  } catch {
    console.log("Canvas not supported");
  }
  let n = e.toDataURL().split(",")[1], i = atob(n), a = new Uint8Array(i.length);
  for (let s = 0; s < i.length; s++)
    a[s] = i.charCodeAt(s);
  return un(a).toString();
}, mn = () => {
  if (!Pr())
    return "None";
  const e = document.createElement("canvas"), t = e.getContext("2d"), r = "BrowserLeaks,com <canvas> 1.0";
  e.setAttribute("width", 220), e.setAttribute("height", 30);
  try {
    t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(r, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(r, 4, 17);
  } catch {
    console.log("Canvas not supported");
  }
  let n = e.toDataURL().split(",")[1], i = atob(n), a = new Uint8Array(i.length);
  for (let s = 0; s < i.length; s++)
    a[s] = i.charCodeAt(s);
  return wn.md5(a);
}, gn = () => new Promise((e, t) => {
  e(bn());
}), yn = () => new Promise((e, t) => {
  e(mn());
});
var xn = "2.0.4", Ft = 500, tr = "user-agent", ve = "", rr = "?", rt = "function", fe = "undefined", _e = "object", Pt = "string", z = "browser", ie = "cpu", ne = "device", G = "engine", K = "os", xe = "result", g = "name", w = "type", m = "vendor", y = "version", V = "architecture", Ie = "major", b = "model", Me = "console", T = "mobile", N = "tablet", I = "smarttv", te = "wearable", $e = "xr", De = "embedded", Ce = "inapp", zt = "brands", pe = "formFactors", Vt = "fullVersionList", Ee = "platform", Wt = "platformVersion", ct = "bitness", de = "sec-ch-ua", En = de + "-full-version-list", vn = de + "-arch", _n = de + "-" + ct, An = de + "-form-factors", Sn = de + "-" + T, Rn = de + "-" + b, Br = de + "-" + Ee, On = Br + "-version", Ur = [zt, Vt, T, b, Ee, Wt, V, pe, ct], Je = "Amazon", ge = "Apple", nr = "ASUS", ir = "BlackBerry", he = "Google", or = "Huawei", mt = "Lenovo", sr = "Honor", Ke = "LG", gt = "Microsoft", yt = "Motorola", xt = "Nvidia", ar = "OnePlus", Et = "OPPO", Te = "Samsung", cr = "Sharp", Fe = "Sony", vt = "Xiaomi", _t = "Zebra", lr = "Chrome", ur = "Chromium", ce = "Chromecast", Ye = "Edge", Pe = "Firefox", Be = "Opera", At = "Facebook", fr = "Sogou", ye = "Mobile ", Ue = " Browser", Bt = "Windows", kn = typeof window !== fe, W = kn && window.navigator ? window.navigator : void 0, ue = W && W.userAgentData ? W.userAgentData : void 0, Cn = function(e, t) {
  var r = {}, n = t;
  if (!nt(t)) {
    n = {};
    for (var i in t)
      for (var a in t[i])
        n[a] = t[i][a].concat(n[a] ? n[a] : []);
  }
  for (var s in e)
    r[s] = n[s] && n[s].length % 2 === 0 ? n[s].concat(e[s]) : e[s];
  return r;
}, lt = function(e) {
  for (var t = {}, r = 0; r < e.length; r++)
    t[e[r].toUpperCase()] = e[r];
  return t;
}, Ut = function(e, t) {
  if (typeof e === _e && e.length > 0) {
    for (var r in e)
      if (oe(t) == oe(e[r]))
        return !0;
    return !1;
  }
  return Se(e) ? oe(t) == oe(e) : !1;
}, nt = function(e, t) {
  for (var r in e)
    return /^(browser|cpu|device|engine|os)$/.test(r) || (t ? nt(e[r]) : !1);
}, Se = function(e) {
  return typeof e === Pt;
}, St = function(e) {
  if (e) {
    for (var t = [], r = Ae(/\\?\"/g, e).split(","), n = 0; n < r.length; n++)
      if (r[n].indexOf(";") > -1) {
        var i = it(r[n]).split(";v=");
        t[n] = { brand: i[0], version: i[1] };
      } else
        t[n] = it(r[n]);
    return t;
  }
}, oe = function(e) {
  return Se(e) ? e.toLowerCase() : e;
}, Rt = function(e) {
  return Se(e) ? Ae(/[^\d\.]/g, e).split(".")[0] : void 0;
}, se = function(e) {
  for (var t in e) {
    var r = e[t];
    typeof r == _e && r.length == 2 ? this[r[0]] = r[1] : this[r] = void 0;
  }
  return this;
}, Ae = function(e, t) {
  return Se(t) ? t.replace(e, ve) : t;
}, Ne = function(e) {
  return Ae(/\\?\"/g, e);
}, it = function(e, t) {
  if (Se(e))
    return e = Ae(/^\s\s*/, e), typeof t === fe ? e : e.substring(0, Ft);
}, Ot = function(e, t) {
  if (!(!e || !t))
    for (var r = 0, n, i, a, s, d, p; r < t.length && !d; ) {
      var f = t[r], x = t[r + 1];
      for (n = i = 0; n < f.length && !d && f[n]; )
        if (d = f[n++].exec(e), d)
          for (a = 0; a < x.length; a++)
            p = d[++i], s = x[a], typeof s === _e && s.length > 0 ? s.length === 2 ? typeof s[1] == rt ? this[s[0]] = s[1].call(this, p) : this[s[0]] = s[1] : s.length >= 3 && (typeof s[1] === rt && !(s[1].exec && s[1].test) ? s.length > 3 ? this[s[0]] = p ? s[1].apply(this, s.slice(2)) : void 0 : this[s[0]] = p ? s[1].call(this, p, s[2]) : void 0 : s.length == 3 ? this[s[0]] = p ? p.replace(s[1], s[2]) : void 0 : s.length == 4 ? this[s[0]] = p ? s[3].call(this, p.replace(s[1], s[2])) : void 0 : s.length > 4 && (this[s[0]] = p ? s[3].apply(this, [p.replace(s[1], s[2])].concat(s.slice(4))) : void 0)) : this[s] = p || void 0;
      r += 2;
    }
}, re = function(e, t) {
  for (var r in t)
    if (typeof t[r] === _e && t[r].length > 0) {
      for (var n = 0; n < t[r].length; n++)
        if (Ut(t[r][n], e))
          return r === rr ? void 0 : r;
    } else if (Ut(t[r], e))
      return r === rr ? void 0 : r;
  return t.hasOwnProperty("*") ? t["*"] : e;
}, dr = {
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
}, hr = {
  embedded: "Automotive",
  mobile: "Mobile",
  tablet: ["Tablet", "EInk"],
  smarttv: "TV",
  wearable: "Watch",
  xr: ["VR", "XR"],
  "?": ["Desktop", "Unknown"],
  "*": void 0
}, Tn = {
  Chrome: "Google Chrome",
  Edge: "Microsoft Edge",
  "Edge WebView2": "Microsoft Edge WebView2",
  "Chrome WebView": "Android WebView",
  "Chrome Headless": "HeadlessChrome",
  "Huawei Browser": "HuaweiBrowser",
  "MIUI Browser": "Miui Browser",
  "Opera Mobi": "OperaMobile",
  Yandex: "YaBrowser"
}, pr = {
  browser: [
    [
      // Most common regardless engine
      /\b(?:crmo|crios)\/([\w\.]+)/i
      // Chrome for Android/iOS
    ],
    [y, [g, ye + "Chrome"]],
    [
      /webview.+edge\/([\w\.]+)/i
      // Microsoft Edge
    ],
    [y, [g, Ye + " WebView"]],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i
    ],
    [y, [g, "Edge"]],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i,
      // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
      // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      // Opera
    ],
    [g, y],
    [
      /opios[\/ ]+([\w\.]+)/i
      // Opera mini on iphone >= 8.0
    ],
    [y, [g, Be + " Mini"]],
    [
      /\bop(?:rg)?x\/([\w\.]+)/i
      // Opera GX
    ],
    [y, [g, Be + " GX"]],
    [
      /\bopr\/([\w\.]+)/i
      // Opera Webkit
    ],
    [y, [g, Be]],
    [
      // Mixed
      /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      // Baidu
    ],
    [y, [g, "Baidu"]],
    [
      /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      // Maxthon
    ],
    [y, [g, "Maxthon"]],
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
    [g, y],
    [
      /quark(?:pc)?\/([-\w\.]+)/i
      // Quark
    ],
    [y, [g, "Quark"]],
    [
      /\bddg\/([\w\.]+)/i
      // DuckDuckGo
    ],
    [y, [g, "DuckDuckGo"]],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      // UCBrowser
    ],
    [y, [g, "UCBrowser"]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i,
      // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i,
      /micromessenger\/([\w\.]+)/i
      // WeChat
    ],
    [y, [g, "WeChat"]],
    [
      /konqueror\/([\w\.]+)/i
      // Konqueror
    ],
    [y, [g, "Konqueror"]],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      // IE11
    ],
    [y, [g, "IE"]],
    [
      /ya(?:search)?browser\/([\w\.]+)/i
      // Yandex
    ],
    [y, [g, "Yandex"]],
    [
      /slbrowser\/([\w\.]+)/i
      // Smart Lenovo Browser
    ],
    [y, [g, "Smart " + mt + Ue]],
    [
      /(avast|avg)\/([\w\.]+)/i
      // Avast/AVG Secure Browser
    ],
    [[g, /(.+)/, "$1 Secure" + Ue], y],
    [
      /\bfocus\/([\w\.]+)/i
      // Firefox Focus
    ],
    [y, [g, Pe + " Focus"]],
    [
      /\bopt\/([\w\.]+)/i
      // Opera Touch
    ],
    [y, [g, Be + " Touch"]],
    [
      /coc_coc\w+\/([\w\.]+)/i
      // Coc Coc Browser
    ],
    [y, [g, "Coc Coc"]],
    [
      /dolfin\/([\w\.]+)/i
      // Dolphin
    ],
    [y, [g, "Dolphin"]],
    [
      /coast\/([\w\.]+)/i
      // Opera Coast
    ],
    [y, [g, Be + " Coast"]],
    [
      /miuibrowser\/([\w\.]+)/i
      // MIUI Browser
    ],
    [y, [g, "MIUI" + Ue]],
    [
      /fxios\/([\w\.-]+)/i
      // Firefox for iOS
    ],
    [y, [g, ye + Pe]],
    [
      /\bqihoobrowser\/?([\w\.]*)/i
      // 360
    ],
    [y, [g, "360"]],
    [
      /\b(qq)\/([\w\.]+)/i
      // QQ
    ],
    [[g, /(.+)/, "$1Browser"], y],
    [
      /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
    ],
    [[g, /(.+)/, "$1" + Ue], y],
    [
      // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
      /samsungbrowser\/([\w\.]+)/i
      // Samsung Internet
    ],
    [y, [g, Te + " Internet"]],
    [
      /metasr[\/ ]?([\d\.]+)/i
      // Sogou Explorer
    ],
    [y, [g, fr + " Explorer"]],
    [
      /(sogou)mo\w+\/([\d\.]+)/i
      // Sogou Mobile
    ],
    [[g, fr + " Mobile"], y],
    [
      /(electron)\/([\w\.]+) safari/i,
      // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
      // Tesla
      /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      // QQ/2345
    ],
    [g, y],
    [
      /(lbbrowser|rekonq)/i
      // LieBao Browser/Rekonq
    ],
    [g],
    [
      /ome\/([\w\.]+) \w* ?(iron) saf/i,
      // Iron
      /ome\/([\w\.]+).+qihu (360)[es]e/i
      // 360
    ],
    [y, g],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      // Facebook App for iOS & Android
    ],
    [[g, At], y, [w, Ce]],
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
    [g, y, [w, Ce]],
    [
      /\bgsa\/([\w\.]+) .*safari\//i
      // Google Search Appliance on iOS
    ],
    [y, [g, "GSA"], [w, Ce]],
    [
      /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      // TikTok
    ],
    [y, [g, "TikTok"], [w, Ce]],
    [
      /\[(linkedin)app\]/i
      // LinkedIn App for iOS & Android
    ],
    [g, [w, Ce]],
    [
      /(chromium)[\/ ]([-\w\.]+)/i
      // Chromium
    ],
    [g, y],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i
      // Chrome Headless
    ],
    [y, [g, lr + " Headless"]],
    [
      /wv\).+chrome\/([\w\.]+).+edgw\//i
      // Edge WebView2
    ],
    [y, [g, Ye + " WebView2"]],
    [
      / wv\).+(chrome)\/([\w\.]+)/i
      // Chrome WebView
    ],
    [[g, lr + " WebView"], y],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      // Android Browser
    ],
    [y, [g, "Android" + Ue]],
    [
      /chrome\/([\w\.]+) mobile/i
      // Chrome Mobile
    ],
    [y, [g, ye + "Chrome"]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [g, y],
    [
      /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      // Safari Mobile
    ],
    [y, [g, ye + "Safari"]],
    [
      /iphone .*mobile(?:\/\w+ | ?)safari/i
    ],
    [[g, ye + "Safari"]],
    [
      /version\/([\w\.\,]+) .*(safari)/i
      // Safari
    ],
    [y, g],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      // Safari < 3.0
    ],
    [g, [y, "1"]],
    [
      /(webkit|khtml)\/([\w\.]+)/i
    ],
    [g, y],
    [
      // Gecko based
      /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      // Firefox Mobile
    ],
    [[g, ye + Pe], y],
    [
      /(navigator|netscape\d?)\/([-\w\.]+)/i
      // Netscape
    ],
    [[g, "Netscape"], y],
    [
      /(wolvic|librewolf)\/([\w\.]+)/i
      // Wolvic/LibreWolf
    ],
    [g, y],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i
      // Firefox Reality
    ],
    [y, [g, Pe + " Reality"]],
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
    [g, [y, /_/g, "."]],
    [
      /(cobalt)\/([\w\.]+)/i
      // Cobalt
    ],
    [g, [y, /[^\d\.]+./, ve]]
  ],
  cpu: [
    [
      /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      // AMD64 (x64)
    ],
    [[V, "amd64"]],
    [
      /(ia32(?=;))/i,
      // IA32 (quicktime)
      /\b((i[346]|x)86)(pc)?\b/i
      // IA32 (x86)
    ],
    [[V, "ia32"]],
    [
      /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      // ARM64
    ],
    [[V, "arm64"]],
    [
      /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      // ARMHF
    ],
    [[V, "armhf"]],
    [
      // PocketPC mistakenly identified as PowerPC
      /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
    ],
    [[V, "arm"]],
    [
      /((ppc|powerpc)(64)?)( mac|;|\))/i
      // PowerPC
    ],
    [[V, /ower/, ve, oe]],
    [
      / sun4\w[;\)]/i
      // SPARC
    ],
    [[V, "sparc"]],
    [
      /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
    ],
    [[V, oe]]
  ],
  device: [
    [
      //////////////////////////
      // MOBILES & TABLETS
      /////////////////////////
      // Samsung
      /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
    ],
    [b, [m, Te], [w, N]],
    [
      /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
      /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [b, [m, Te], [w, T]],
    [
      // Apple
      /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      // iPod/iPhone
    ],
    [b, [m, ge], [w, T]],
    [
      /\((ipad);[-\w\),; ]+apple/i,
      // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [b, [m, ge], [w, N]],
    [
      /(macintosh);/i
    ],
    [b, [m, ge]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [b, [m, cr], [w, T]],
    [
      // Honor
      /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
    ],
    [b, [m, sr], [w, N]],
    [
      /honor([-\w ]+)[;\)]/i
    ],
    [b, [m, sr], [w, T]],
    [
      // Huawei
      /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
    ],
    [b, [m, or], [w, N]],
    [
      /(?:huawei)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [b, [m, or], [w, T]],
    [
      // Xiaomi
      /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
      /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      // Mi Pad tablets
    ],
    [[b, /_/g, " "], [m, vt], [w, N]],
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
    [[b, /_/g, " "], [m, vt], [w, T]],
    [
      // OnePlus
      /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [b, [m, ar], [w, T]],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [b, [m, Et], [w, T]],
    [
      /\b(opd2(\d{3}a?))(?: bui|\))/i
    ],
    [b, [m, re, { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": Et }], [w, N]],
    [
      // BLU
      /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      // Vivo series
    ],
    [b, [m, "BLU"], [w, T]],
    [
      // Vivo
      /; vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [b, [m, "Vivo"], [w, T]],
    [
      // Realme
      /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
    ],
    [b, [m, "Realme"], [w, T]],
    [
      // Lenovo
      /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
      /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
    ],
    [b, [m, mt], [w, N]],
    [
      /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
    ],
    [b, [m, mt], [w, T]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
      /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
    ],
    [b, [m, yt], [w, T]],
    [
      /\b(mz60\d|xoom[2 ]{0,2}) build\//i
    ],
    [b, [m, yt], [w, N]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [b, [m, Ke], [w, N]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [b, [m, Ke], [w, T]],
    [
      // Nokia
      /(nokia) (t[12][01])/i
    ],
    [m, b, [w, N]],
    [
      /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
      /nokia[-_ ]?(([-\w\. ]*))/i
    ],
    [[b, /_/g, " "], [w, T], [m, "Nokia"]],
    [
      // Google
      /(pixel (c|tablet))\b/i
      // Google Pixel C/Tablet
    ],
    [b, [m, he], [w, N]],
    [
      // Google Pixel
      /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
    ],
    [b, [m, he], [w, T]],
    [
      /(google) (pixelbook( go)?)/i
    ],
    [m, b],
    [
      // Sony
      /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [b, [m, Fe], [w, T]],
    [
      /sony tablet [ps]/i,
      /\b(?:sony)?sgp\w+(?: bui|\))/i
    ],
    [[b, "Xperia Tablet"], [m, Fe], [w, N]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
      // Kindle Fire without Silk / Echo Show
      /(kf[a-z]+)( bui|\)).+silk\//i
      // Kindle Fire HD
    ],
    [b, [m, Je], [w, N]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      // Fire Phone
    ],
    [[b, /(.+)/g, "Fire Phone $1"], [m, Je], [w, T]],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i
      // BlackBerry PlayBook
    ],
    [b, m, [w, N]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i
      // BlackBerry 10
    ],
    [b, [m, ir], [w, T]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [b, [m, nr], [w, N]],
    [
      / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
    ],
    [b, [m, nr], [w, T]],
    [
      // HTC
      /(nexus 9)/i
      // HTC Nexus 9
    ],
    [b, [m, "HTC"], [w, N]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
      // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [m, [b, /_/g, " "], [w, T]],
    [
      // TCL
      /tcl (xess p17aa)/i,
      /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [b, [m, "TCL"], [w, N]],
    [
      /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [b, [m, "TCL"], [w, T]],
    [
      // itel
      /(itel) ((\w+))/i
    ],
    [[m, oe], b, [w, re, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [b, [m, "Acer"], [w, N]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [b, [m, "Meizu"], [w, T]],
    [
      // Ulefone
      /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
    ],
    [b, [m, "Ulefone"], [w, T]],
    [
      // Energizer
      /; (energy ?\w+)(?: bui|\))/i,
      /; energizer ([\w ]+)(?: bui|\))/i
    ],
    [b, [m, "Energizer"], [w, T]],
    [
      // Cat
      /; cat (b35);/i,
      /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
    ],
    [b, [m, "Cat"], [w, T]],
    [
      // Smartfren
      /((?:new )?andromax[\w- ]+)(?: bui|\))/i
    ],
    [b, [m, "Smartfren"], [w, T]],
    [
      // Nothing
      /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
    ],
    [b, [m, "Nothing"], [w, T]],
    [
      // Archos
      /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
      /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
    ],
    [b, [m, "Archos"], [w, N]],
    [
      /archos ([\w ]+)( b|\))/i,
      /; (ac[3-6]\d\w{2,8})( b|\))/i
    ],
    [b, [m, "Archos"], [w, T]],
    [
      // HMD
      /; (n159v)/i
    ],
    [b, [m, "HMD"], [w, T]],
    [
      // MIXED
      /(imo) (tab \w+)/i,
      // IMO
      /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      // Infinix XPad / Tecno
    ],
    [m, b, [w, N]],
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
    [m, b, [w, T]],
    [
      /(kobo)\s(ereader|touch)/i,
      // Kobo
      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
      // HP TouchPad
      /(kindle)\/([\w\.]+)/i
      // Kindle
    ],
    [m, b, [w, N]],
    [
      /(surface duo)/i
      // Surface Duo
    ],
    [b, [m, gt], [w, N]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i
      // Fairphone
    ],
    [b, [m, "Fairphone"], [w, T]],
    [
      /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      // Nvidia Tablets
    ],
    [b, [m, xt], [w, N]],
    [
      /(sprint) (\w+)/i
      // Sprint Phones
    ],
    [m, b, [w, T]],
    [
      /(kin\.[onetw]{3})/i
      // Microsoft Kin
    ],
    [[b, /\./g, " "], [m, gt], [w, T]],
    [
      /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      // Zebra
    ],
    [b, [m, _t], [w, N]],
    [
      /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
    ],
    [b, [m, _t], [w, T]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i
      // Samsung
    ],
    [m, [w, I]],
    [
      /hbbtv.+maple;(\d+)/i
    ],
    [[b, /^/, "SmartTV"], [m, Te], [w, I]],
    [
      /(vizio)(?: |.+model\/)(\w+-\w+)/i,
      // Vizio
      /tcast.+(lg)e?. ([-\w]+)/i
      // LG SmartTV
    ],
    [m, b, [w, I]],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
    ],
    [[m, Ke], [w, I]],
    [
      /(apple) ?tv/i
      // Apple TV
    ],
    [m, [b, ge + " TV"], [w, I]],
    [
      /crkey.*devicetype\/chromecast/i
      // Google Chromecast Third Generation
    ],
    [[b, ce + " Third Generation"], [m, he], [w, I]],
    [
      /crkey.*devicetype\/([^/]*)/i
      // Google Chromecast with specific device type
    ],
    [[b, /^/, "Chromecast "], [m, he], [w, I]],
    [
      /fuchsia.*crkey/i
      // Google Chromecast Nest Hub
    ],
    [[b, ce + " Nest Hub"], [m, he], [w, I]],
    [
      /crkey/i
      // Google Chromecast, Linux-based or unknown
    ],
    [[b, ce], [m, he], [w, I]],
    [
      /(portaltv)/i
      // Facebook Portal TV
    ],
    [b, [m, At], [w, I]],
    [
      /droid.+aft(\w+)( bui|\))/i
      // Fire TV
    ],
    [b, [m, Je], [w, I]],
    [
      /(shield \w+ tv)/i
      // Nvidia Shield TV
    ],
    [b, [m, xt], [w, I]],
    [
      /\(dtv[\);].+(aquos)/i,
      /(aquos-tv[\w ]+)\)/i
      // Sharp
    ],
    [b, [m, cr], [w, I]],
    [
      /(bravia[\w ]+)( bui|\))/i
      // Sony
    ],
    [b, [m, Fe], [w, I]],
    [
      /(mi(tv|box)-?\w+) bui/i
      // Xiaomi
    ],
    [b, [m, vt], [w, I]],
    [
      /Hbbtv.*(technisat) (.*);/i
      // TechniSAT
    ],
    [m, b, [w, I]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
      // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      // HbbTV devices
    ],
    [[m, /.+\/(\w+)/, "$1", re, { LG: "lge" }], [b, it], [w, I]],
    [
      // SmartTV from Unidentified Vendors
      /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
    ],
    [b, [w, I]],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:|large screen[\w ]+safari)\b/i
    ],
    [[w, I]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(playstation \w+)/i
      // Playstation
    ],
    [b, [m, Fe], [w, Me]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      // Microsoft Xbox
    ],
    [b, [m, gt], [w, Me]],
    [
      /(ouya)/i,
      // Ouya
      /(nintendo) (\w+)/i,
      // Nintendo
      /(retroid) (pocket ([^\)]+))/i
      // Retroid Pocket
    ],
    [m, b, [w, Me]],
    [
      /droid.+; (shield)( bui|\))/i
      // Nvidia Portable
    ],
    [b, [m, xt], [w, Me]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      // Samsung Galaxy Watch
    ],
    [b, [m, Te], [w, te]],
    [
      /((pebble))app/i,
      // Pebble
      /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      // Asus ZenWatch / LG Watch / Pixel Watch
    ],
    [m, b, [w, te]],
    [
      /(ow(?:19|20)?we?[1-3]{1,3})/i
      // Oppo Watch
    ],
    [b, [m, Et], [w, te]],
    [
      /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      // Apple Watch
    ],
    [b, [m, ge], [w, te]],
    [
      /(opwwe\d{3})/i
      // OnePlus Watch
    ],
    [b, [m, ar], [w, te]],
    [
      /(moto 360)/i
      // Motorola 360
    ],
    [b, [m, yt], [w, te]],
    [
      /(smartwatch 3)/i
      // Sony SmartWatch
    ],
    [b, [m, Fe], [w, te]],
    [
      /(g watch r)/i
      // LG G Watch R
    ],
    [b, [m, Ke], [w, te]],
    [
      /droid.+; (wt63?0{2,3})\)/i
    ],
    [b, [m, _t], [w, te]],
    [
      ///////////////////
      // XR
      ///////////////////
      /droid.+; (glass) \d/i
      // Google Glass
    ],
    [b, [m, he], [w, $e]],
    [
      /(pico) (4|neo3(?: link|pro)?)/i
      // Pico
    ],
    [m, b, [w, $e]],
    [
      /(quest( \d| pro)?s?).+vr/i
      // Meta Quest
    ],
    [b, [m, At], [w, $e]],
    [
      /mobile vr; rv.+firefox/i
      // Unidentifiable VR device using Firefox Reality / Wolvic
    ],
    [[w, $e]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      // Tesla
    ],
    [m, [w, De]],
    [
      /(aeobc)\b/i
      // Echo Dot
    ],
    [b, [m, Je], [w, De]],
    [
      /(homepod).+mac os/i
      // Apple HomePod
    ],
    [b, [m, ge], [w, De]],
    [
      /windows iot/i
      // Unidentifiable embedded device using Windows IoT
    ],
    [[w, De]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
    ],
    [b, [w, re, { mobile: "Mobile", xr: "VR", "*": N }]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      // Unidentifiable Tablet
    ],
    [[w, N]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      // Unidentifiable Mobile
    ],
    [[w, T]],
    [
      /droid .+?; ([\w\. -]+)( bui|\))/i
      // Generic Android Device
    ],
    [b, [m, "Generic"]]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i
      // EdgeHTML
    ],
    [y, [g, Ye + "HTML"]],
    [
      /(arkweb)\/([\w\.]+)/i
      // ArkWeb
    ],
    [g, y],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      // Blink
    ],
    [y, [g, "Blink"]],
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
    [g, y],
    [
      /ladybird\//i
    ],
    [[g, "LibWeb"]],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i
      // Gecko
    ],
    [y, g]
  ],
  os: [
    [
      // Windows
      /(windows nt) (6\.[23]); arm/i
      // Windows RT
    ],
    [[g, /N/, "R"], [y, re, dr]],
    [
      /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
      // Windows IoT/Mobile/Phone
      // Windows NT/3.1/95/98/ME/2000/XP/Vista/7/8/8.1/10/11
      /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
    ],
    [g, y],
    [
      /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
      /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
    ],
    [[y, /(;|\))/g, "", re, dr], [g, Bt]],
    [
      /(windows ce)\/?([\d\.]*)/i
      // Windows CE
    ],
    [g, y],
    [
      // iOS/macOS
      /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
      // iOS
      /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
      /cfnetwork\/.+darwin/i
    ],
    [[y, /_/g, "."], [g, "iOS"]],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      // Mac OS
    ],
    [[g, "macOS"], [y, /_/g, "."]],
    [
      // Google Chromecast
      /android ([\d\.]+).*crkey/i
      // Google Chromecast, Android-based
    ],
    [y, [g, ce + " Android"]],
    [
      /fuchsia.*crkey\/([\d\.]+)/i
      // Google Chromecast, Fuchsia-based
    ],
    [y, [g, ce + " Fuchsia"]],
    [
      /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      // Google Chromecast, Linux-based Smart Speaker
    ],
    [y, [g, ce + " SmartSpeaker"]],
    [
      /linux.*crkey\/([\d\.]+)/i
      // Google Chromecast, Legacy Linux-based
    ],
    [y, [g, ce + " Linux"]],
    [
      /crkey\/([\d\.]+)/i
      // Google Chromecast, unknown
    ],
    [y, [g, ce]],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86)/i
      // Android-x86
    ],
    [y, g],
    [
      /(ubuntu) ([\w\.]+) like android/i
      // Ubuntu Touch
    ],
    [[g, /(.+)/, "$1 Touch"], y],
    [
      /(harmonyos)[\/ ]?([\d\.]*)/i,
      // HarmonyOS
      // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
      /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
    ],
    [g, y],
    [
      /\(bb(10);/i
      // BlackBerry 10
    ],
    [y, [g, ir]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      // Symbian
    ],
    [y, [g, "Symbian"]],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      // Firefox OS
    ],
    [y, [g, Pe + " OS"]],
    [
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
      // WebOS
      /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
    ],
    [y, [g, "webOS"]],
    [
      /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      // https://webostv.developer.lge.com/develop/specifications/web-api-and-web-engine
    ],
    [[y, re, { 25: "120", 24: "108", 23: "94", 22: "87", 6: "79", 5: "68", 4: "53", 3: "38", 2: "538", 1: "537", "*": "TV" }], [g, "webOS"]],
    [
      /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      // watchOS
    ],
    [y, [g, "watchOS"]],
    [
      // Google ChromeOS
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      // Chromium OS
    ],
    [[g, "Chrome OS"], y],
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
    [g, y],
    [
      /(sunos) ?([\d\.]*)/i
      // Solaris
    ],
    [[g, "Solaris"], y],
    [
      /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
      // BeOS/OS2/AmigaOS/OpenVMS/HP-UX/SerenityOS
      /(unix) ?([\w\.]*)/i
      // UNIX
    ],
    [g, y]
  ]
}, Ge = function() {
  var e = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
  return se.call(e.init, [
    [z, [g, y, Ie, w]],
    [ie, [V]],
    [ne, [w, b, m]],
    [G, [g, y]],
    [K, [g, y]]
  ]), se.call(e.isIgnore, [
    [z, [y, Ie]],
    [G, [y]],
    [K, [y]]
  ]), se.call(e.isIgnoreRgx, [
    [z, / ?browser$/i],
    [K, / ?os$/i]
  ]), se.call(e.toString, [
    [z, [g, y]],
    [ie, [V]],
    [ne, [m, b]],
    [G, [g, y]],
    [K, [g, y]]
  ]), e;
}(), Fn = function(e, t) {
  var r = Ge.init[t], n = Ge.isIgnore[t] || 0, i = Ge.isIgnoreRgx[t] || 0, a = Ge.toString[t] || 0;
  function s() {
    se.call(this, r);
  }
  return s.prototype.getItem = function() {
    return e;
  }, s.prototype.withClientHints = function() {
    return ue ? ue.getHighEntropyValues(Ur).then(function(d) {
      return e.setCH(new Nr(d, !1)).parseCH().get();
    }) : e.parseCH().get();
  }, s.prototype.withFeatureCheck = function() {
    return e.detectFeature().get();
  }, t != xe && (s.prototype.is = function(d) {
    var p = !1;
    for (var f in this)
      if (this.hasOwnProperty(f) && !Ut(n, f) && oe(i ? Ae(i, this[f]) : this[f]) == oe(i ? Ae(i, d) : d)) {
        if (p = !0, d != fe)
          break;
      } else if (d == fe && p) {
        p = !p;
        break;
      }
    return p;
  }, s.prototype.toString = function() {
    var d = ve;
    for (var p in a)
      typeof this[a[p]] !== fe && (d += (d ? " " : ve) + this[a[p]]);
    return d || fe;
  }), ue || (s.prototype.then = function(d) {
    var p = this, f = function() {
      for (var _ in p)
        p.hasOwnProperty(_) && (this[_] = p[_]);
    };
    f.prototype = {
      is: s.prototype.is,
      toString: s.prototype.toString
    };
    var x = new f();
    return d(x), x;
  }), new s();
};
function Nr(e, t) {
  if (e = e || {}, se.call(this, Ur), t)
    se.call(this, [
      [zt, St(e[de])],
      [Vt, St(e[En])],
      [T, /\?1/.test(e[Sn])],
      [b, Ne(e[Rn])],
      [Ee, Ne(e[Br])],
      [Wt, Ne(e[On])],
      [V, Ne(e[vn])],
      [pe, St(e[An])],
      [ct, Ne(e[_n])]
    ]);
  else
    for (var r in e)
      this.hasOwnProperty(r) && typeof e[r] !== fe && (this[r] = e[r]);
}
function wr(e, t, r, n) {
  return this.get = function(i) {
    return i ? this.data.hasOwnProperty(i) ? this.data[i] : void 0 : this.data;
  }, this.set = function(i, a) {
    return this.data[i] = a, this;
  }, this.setCH = function(i) {
    return this.uaCH = i, this;
  }, this.detectFeature = function() {
    if (W && W.userAgent == this.ua)
      switch (this.itemType) {
        case z:
          W.brave && typeof W.brave.isBrave == rt && this.set(g, "Brave");
          break;
        case ne:
          !this.get(w) && ue && ue[T] && this.set(w, T), this.get(b) == "Macintosh" && W && typeof W.standalone !== fe && W.maxTouchPoints && W.maxTouchPoints > 2 && this.set(b, "iPad").set(w, N);
          break;
        case K:
          !this.get(g) && ue && ue[Ee] && this.set(g, ue[Ee]);
          break;
        case xe:
          var i = this.data, a = function(s) {
            return i[s].getItem().detectFeature().get();
          };
          this.set(z, a(z)).set(ie, a(ie)).set(ne, a(ne)).set(G, a(G)).set(K, a(K));
      }
    return this;
  }, this.parseUA = function() {
    return this.itemType != xe && Ot.call(this.data, this.ua, this.rgxMap), this.itemType == z && this.set(Ie, Rt(this.get(y))), this;
  }, this.parseCH = function() {
    var i = this.uaCH, a = this.rgxMap;
    switch (this.itemType) {
      case z:
      case G:
        var s = i[Vt] || i[zt], d;
        if (s)
          for (var p in s) {
            var f = s[p].brand || s[p], x = s[p].version;
            this.itemType == z && !/not.a.brand/i.test(f) && (!d || /Chrom/.test(d) && f != ur || d == Ye && /WebView2/.test(f)) && (f = re(f, Tn), d = this.get(g), d && !/Chrom/.test(d) && /Chrom/.test(f) || this.set(g, f).set(y, x).set(Ie, Rt(x)), d = f), this.itemType == G && f == ur && this.set(y, x);
          }
        break;
      case ie:
        var _ = i[V];
        _ && (_ && i[ct] == "64" && (_ += "64"), Ot.call(this.data, _ + ";", a));
        break;
      case ne:
        if (i[T] && this.set(w, T), i[b] && (this.set(b, i[b]), !this.get(w) || !this.get(m))) {
          var O = {};
          Ot.call(O, "droid 9; " + i[b] + ")", a), !this.get(w) && O.type && this.set(w, O.type), !this.get(m) && O.vendor && this.set(m, O.vendor);
        }
        if (i[pe]) {
          var P;
          if (typeof i[pe] != "string")
            for (var A = 0; !P && A < i[pe].length; )
              P = re(i[pe][A++], hr);
          else
            P = re(i[pe], hr);
          this.set(w, P);
        }
        break;
      case K:
        var k = i[Ee];
        if (k) {
          var S = i[Wt];
          k == Bt && (S = parseInt(Rt(S), 10) >= 13 ? "11" : "10"), this.set(g, k).set(y, S);
        }
        this.get(g) == Bt && i[b] == "Xbox" && this.set(g, "Xbox").set(y, void 0);
        break;
      case xe:
        var U = this.data, B = function(M) {
          return U[M].getItem().setCH(i).parseCH().get();
        };
        this.set(z, B(z)).set(ie, B(ie)).set(ne, B(ne)).set(G, B(G)).set(K, B(K));
    }
    return this;
  }, se.call(this, [
    ["itemType", e],
    ["ua", t],
    ["uaCH", n],
    ["rgxMap", r],
    ["data", Fn(this, e)]
  ]), this;
}
function ae(e, t, r) {
  if (typeof e === _e ? (nt(e, !0) ? (typeof t === _e && (r = t), t = e) : (r = e, t = void 0), e = void 0) : typeof e === Pt && !nt(t, !0) && (r = t, t = void 0), r && typeof r.append === rt) {
    var n = {};
    r.forEach(function(p, f) {
      n[f] = p;
    }), r = n;
  }
  if (!(this instanceof ae))
    return new ae(e, t, r).getResult();
  var i = typeof e === Pt ? e : (
    // Passed user-agent string
    r && r[tr] ? r[tr] : (
      // User-Agent from passed headers
      W && W.userAgent ? W.userAgent : (
        // navigator.userAgent
        ve
      )
    )
  ), a = new Nr(r, !0), s = t ? Cn(pr, t) : pr, d = function(p) {
    return p == xe ? function() {
      return new wr(p, i, s, a).set("ua", i).set(z, this.getBrowser()).set(ie, this.getCPU()).set(ne, this.getDevice()).set(G, this.getEngine()).set(K, this.getOS()).get();
    } : function() {
      return new wr(p, i, s[p], a).parseUA().get();
    };
  };
  return se.call(this, [
    ["getBrowser", d(z)],
    ["getCPU", d(ie)],
    ["getDevice", d(ne)],
    ["getEngine", d(G)],
    ["getOS", d(K)],
    ["getResult", d(xe)],
    ["getUA", function() {
      return i;
    }],
    ["setUA", function(p) {
      return Se(p) && (i = p.length > Ft ? it(p, Ft) : p), this;
    }]
  ]).setUA(i), this;
}
ae.VERSION = xn;
ae.BROWSER = lt([g, y, Ie, w]);
ae.CPU = lt([V]);
ae.DEVICE = lt([b, m, w, Me, T, I, N, te, De]);
ae.ENGINE = ae.OS = lt([g, y]);
let br = !1;
const Pn = () => br ? Promise.resolve(!0) : new Promise((e) => {
  const t = document.createElement("iframe");
  t.src = "https://watcher.blockbots.org:8888/", t.style.display = "none", t.onload = () => {
    br = !0, e(!0);
  }, document.body.appendChild(t);
});
function Lr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Bn } = Object.prototype, { getPrototypeOf: $t } = Object, { iterator: ut, toStringTag: Mr } = Symbol, ft = /* @__PURE__ */ ((e) => (t) => {
  const r = Bn.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Y = (e) => (e = e.toLowerCase(), (t) => ft(t) === e), dt = (e) => (t) => typeof t === e, { isArray: Re } = Array, He = dt("undefined");
function qe(e) {
  return e !== null && !He(e) && e.constructor !== null && !He(e.constructor) && $(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Dr = Y("ArrayBuffer");
function Un(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Dr(e.buffer), t;
}
const Nn = dt("string"), $ = dt("function"), Ir = dt("number"), ze = (e) => e !== null && typeof e == "object", Ln = (e) => e === !0 || e === !1, Ze = (e) => {
  if (ft(e) !== "object")
    return !1;
  const t = $t(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Mr in e) && !(ut in e);
}, Mn = (e) => {
  if (!ze(e) || qe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Dn = Y("Date"), In = Y("File"), Hn = Y("Blob"), jn = Y("FileList"), qn = (e) => ze(e) && $(e.pipe), zn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || $(e.append) && ((t = ft(e)) === "formdata" || // detect form-data instance
  t === "object" && $(e.toString) && e.toString() === "[object FormData]"));
}, Vn = Y("URLSearchParams"), [Wn, $n, Jn, Kn] = ["ReadableStream", "Request", "Response", "Headers"].map(Y), Gn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ve(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), Re(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    if (qe(e))
      return;
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let d;
    for (n = 0; n < s; n++)
      d = a[n], t.call(null, e[d], d, e);
  }
}
function Hr(e, t) {
  if (qe(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const we = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, jr = (e) => !He(e) && e !== we;
function Nt() {
  const { caseless: e } = jr(this) && this || {}, t = {}, r = (n, i) => {
    const a = e && Hr(t, i) || i;
    Ze(t[a]) && Ze(n) ? t[a] = Nt(t[a], n) : Ze(n) ? t[a] = Nt({}, n) : Re(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Ve(arguments[n], r);
  return t;
}
const Xn = (e, t, r, { allOwnKeys: n } = {}) => (Ve(t, (i, a) => {
  r && $(i) ? e[a] = Lr(i, r) : e[a] = i;
}, { allOwnKeys: n }), e), Yn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Zn = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Qn = (e, t, r, n) => {
  let i, a, s;
  const d = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      s = i[a], (!n || n(s, e, t)) && !d[s] && (t[s] = e[s], d[s] = !0);
    e = r !== !1 && $t(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ei = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ti = (e) => {
  if (!e)
    return null;
  if (Re(e))
    return e;
  let t = e.length;
  if (!Ir(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ri = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && $t(Uint8Array)), ni = (e, t) => {
  const n = (e && e[ut]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, ii = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, oi = Y("HTMLFormElement"), si = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), mr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ai = Y("RegExp"), qr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ve(r, (i, a) => {
    let s;
    (s = t(i, a, e)) !== !1 && (n[a] = s || i);
  }), Object.defineProperties(e, n);
}, ci = (e) => {
  qr(e, (t, r) => {
    if ($(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if ($(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, li = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return Re(e) ? n(e) : n(String(e).split(t)), r;
}, ui = () => {
}, fi = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function di(e) {
  return !!(e && $(e.append) && e[Mr] === "FormData" && e[ut]);
}
const hi = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (ze(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (qe(n))
        return n;
      if (!("toJSON" in n)) {
        t[i] = n;
        const a = Re(n) ? [] : {};
        return Ve(n, (s, d) => {
          const p = r(s, i + 1);
          !He(p) && (a[d] = p);
        }), t[i] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, pi = Y("AsyncFunction"), wi = (e) => e && (ze(e) || $(e)) && $(e.then) && $(e.catch), zr = ((e, t) => e ? setImmediate : t ? ((r, n) => (we.addEventListener("message", ({ source: i, data: a }) => {
  i === we && a === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), we.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  $(we.postMessage)
), bi = typeof queueMicrotask < "u" ? queueMicrotask.bind(we) : typeof process < "u" && process.nextTick || zr, mi = (e) => e != null && $(e[ut]), h = {
  isArray: Re,
  isArrayBuffer: Dr,
  isBuffer: qe,
  isFormData: zn,
  isArrayBufferView: Un,
  isString: Nn,
  isNumber: Ir,
  isBoolean: Ln,
  isObject: ze,
  isPlainObject: Ze,
  isEmptyObject: Mn,
  isReadableStream: Wn,
  isRequest: $n,
  isResponse: Jn,
  isHeaders: Kn,
  isUndefined: He,
  isDate: Dn,
  isFile: In,
  isBlob: Hn,
  isRegExp: ai,
  isFunction: $,
  isStream: qn,
  isURLSearchParams: Vn,
  isTypedArray: ri,
  isFileList: jn,
  forEach: Ve,
  merge: Nt,
  extend: Xn,
  trim: Gn,
  stripBOM: Yn,
  inherits: Zn,
  toFlatObject: Qn,
  kindOf: ft,
  kindOfTest: Y,
  endsWith: ei,
  toArray: ti,
  forEachEntry: ni,
  matchAll: ii,
  isHTMLForm: oi,
  hasOwnProperty: mr,
  hasOwnProp: mr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: qr,
  freezeMethods: ci,
  toObjectSet: li,
  toCamelCase: si,
  noop: ui,
  toFiniteNumber: fi,
  findKey: Hr,
  global: we,
  isContextDefined: jr,
  isSpecCompliantForm: di,
  toJSONObject: hi,
  isAsyncFn: pi,
  isThenable: wi,
  setImmediate: zr,
  asap: bi,
  isIterable: mi
};
function F(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
h.inherits(F, Error, {
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
      config: h.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Vr = F.prototype, Wr = {};
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
  Wr[e] = { value: e };
});
Object.defineProperties(F, Wr);
Object.defineProperty(Vr, "isAxiosError", { value: !0 });
F.from = (e, t, r, n, i, a) => {
  const s = Object.create(Vr);
  return h.toFlatObject(e, s, function(p) {
    return p !== Error.prototype;
  }, (d) => d !== "isAxiosError"), F.call(s, e.message, t, r, n, i), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const gi = null;
function Lt(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function $r(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gr(e, t, r) {
  return e ? e.concat(t).map(function(i, a) {
    return i = $r(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function yi(e) {
  return h.isArray(e) && !e.some(Lt);
}
const xi = h.toFlatObject(h, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ht(e, t, r) {
  if (!h.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(k, S) {
    return !h.isUndefined(S[k]);
  });
  const n = r.metaTokens, i = r.visitor || x, a = r.dots, s = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(t);
  if (!h.isFunction(i))
    throw new TypeError("visitor must be a function");
  function f(A) {
    if (A === null)
      return "";
    if (h.isDate(A))
      return A.toISOString();
    if (h.isBoolean(A))
      return A.toString();
    if (!p && h.isBlob(A))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(A) || h.isTypedArray(A) ? p && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function x(A, k, S) {
    let U = A;
    if (A && !S && typeof A == "object") {
      if (h.endsWith(k, "{}"))
        k = n ? k : k.slice(0, -2), A = JSON.stringify(A);
      else if (h.isArray(A) && yi(A) || (h.isFileList(A) || h.endsWith(k, "[]")) && (U = h.toArray(A)))
        return k = $r(k), U.forEach(function(M, J) {
          !(h.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? gr([k], J, a) : s === null ? k : k + "[]",
            f(M)
          );
        }), !1;
    }
    return Lt(A) ? !0 : (t.append(gr(S, k, a), f(A)), !1);
  }
  const _ = [], O = Object.assign(xi, {
    defaultVisitor: x,
    convertValue: f,
    isVisitable: Lt
  });
  function P(A, k) {
    if (!h.isUndefined(A)) {
      if (_.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + k.join("."));
      _.push(A), h.forEach(A, function(U, B) {
        (!(h.isUndefined(U) || U === null) && i.call(
          t,
          U,
          h.isString(B) ? B.trim() : B,
          k,
          O
        )) === !0 && P(U, k ? k.concat(B) : [B]);
      }), _.pop();
    }
  }
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return P(e), t;
}
function yr(e) {
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
function Jt(e, t) {
  this._pairs = [], e && ht(e, this, t);
}
const Jr = Jt.prototype;
Jr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Jr.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, yr);
  } : yr;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Ei(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Kr(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ei;
  h.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let a;
  if (i ? a = i(t, r) : a = h.isURLSearchParams(t) ? t.toString() : new Jt(t, r).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class xr {
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
    h.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Gr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, vi = typeof URLSearchParams < "u" ? URLSearchParams : Jt, _i = typeof FormData < "u" ? FormData : null, Ai = typeof Blob < "u" ? Blob : null, Si = {
  isBrowser: !0,
  classes: {
    URLSearchParams: vi,
    FormData: _i,
    Blob: Ai
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Kt = typeof window < "u" && typeof document < "u", Mt = typeof navigator == "object" && navigator || void 0, Ri = Kt && (!Mt || ["ReactNative", "NativeScript", "NS"].indexOf(Mt.product) < 0), Oi = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ki = Kt && window.location.href || "http://localhost", Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Kt,
  hasStandardBrowserEnv: Ri,
  hasStandardBrowserWebWorkerEnv: Oi,
  navigator: Mt,
  origin: ki
}, Symbol.toStringTag, { value: "Module" })), j = {
  ...Ci,
  ...Si
};
function Ti(e, t) {
  return ht(e, new j.classes.URLSearchParams(), {
    visitor: function(r, n, i, a) {
      return j.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Fi(e) {
  return h.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Pi(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function Xr(e) {
  function t(r, n, i, a) {
    let s = r[a++];
    if (s === "__proto__")
      return !0;
    const d = Number.isFinite(+s), p = a >= r.length;
    return s = !s && h.isArray(i) ? i.length : s, p ? (h.hasOwnProp(i, s) ? i[s] = [i[s], n] : i[s] = n, !d) : ((!i[s] || !h.isObject(i[s])) && (i[s] = []), t(r, n, i[s], a) && h.isArray(i[s]) && (i[s] = Pi(i[s])), !d);
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const r = {};
    return h.forEachEntry(e, (n, i) => {
      t(Fi(n), i, r, 0);
    }), r;
  }
  return null;
}
function Bi(e, t, r) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Gt = {
  transitional: Gr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = h.isObject(t);
    if (a && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t))
      return i ? JSON.stringify(Xr(t)) : t;
    if (h.isArrayBuffer(t) || h.isBuffer(t) || h.isStream(t) || h.isFile(t) || h.isBlob(t) || h.isReadableStream(t))
      return t;
    if (h.isArrayBufferView(t))
      return t.buffer;
    if (h.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let d;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ti(t, this.formSerializer).toString();
      if ((d = h.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return ht(
          d ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Bi(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Gt.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (h.isResponse(t) || h.isReadableStream(t))
      return t;
    if (t && h.isString(t) && (n && !this.responseType || i)) {
      const s = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (d) {
        if (s)
          throw d.name === "SyntaxError" ? F.from(d, F.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
    FormData: j.classes.FormData,
    Blob: j.classes.Blob
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
h.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Gt.headers[e] = {};
});
const Xt = Gt, Ui = h.toObjectSet([
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
]), Ni = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), r = s.substring(0, i).trim().toLowerCase(), n = s.substring(i + 1).trim(), !(!r || t[r] && Ui[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Er = Symbol("internals");
function Le(e) {
  return e && String(e).trim().toLowerCase();
}
function Qe(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(Qe) : String(e);
}
function Li(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Mi = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function kt(e, t, r, n, i) {
  if (h.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!h.isString(t)) {
    if (h.isString(n))
      return t.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(t);
  }
}
function Di(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ii(e, t) {
  const r = h.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, a, s) {
        return this[n].call(this, t, i, a, s);
      },
      configurable: !0
    });
  });
}
class pt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(d, p, f) {
      const x = Le(p);
      if (!x)
        throw new Error("header name must be a non-empty string");
      const _ = h.findKey(i, x);
      (!_ || i[_] === void 0 || f === !0 || f === void 0 && i[_] !== !1) && (i[_ || p] = Qe(d));
    }
    const s = (d, p) => h.forEach(d, (f, x) => a(f, x, p));
    if (h.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (h.isString(t) && (t = t.trim()) && !Mi(t))
      s(Ni(t), r);
    else if (h.isObject(t) && h.isIterable(t)) {
      let d = {}, p, f;
      for (const x of t) {
        if (!h.isArray(x))
          throw TypeError("Object iterator must return a key-value pair");
        d[f = x[0]] = (p = d[f]) ? h.isArray(p) ? [...p, x[1]] : [p, x[1]] : x[1];
      }
      s(d, r);
    } else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Le(t), t) {
      const n = h.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Li(i);
        if (h.isFunction(r))
          return r.call(this, i, n);
        if (h.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Le(t), t) {
      const n = h.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || kt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(s) {
      if (s = Le(s), s) {
        const d = h.findKey(n, s);
        d && (!r || kt(n, n[d], d, r)) && (delete n[d], i = !0);
      }
    }
    return h.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || kt(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return h.forEach(this, (i, a) => {
      const s = h.findKey(n, a);
      if (s) {
        r[s] = Qe(i), delete r[a];
        return;
      }
      const d = t ? Di(a) : String(a).trim();
      d !== a && delete r[a], r[d] = Qe(i), n[d] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return h.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && h.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[Er] = this[Er] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(s) {
      const d = Le(s);
      n[d] || (Ii(i, s), n[d] = !0);
    }
    return h.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
pt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(pt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(pt);
const X = pt;
function Ct(e, t) {
  const r = this || Xt, n = t || r, i = X.from(n.headers);
  let a = n.data;
  return h.forEach(e, function(d) {
    a = d.call(r, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function Yr(e) {
  return !!(e && e.__CANCEL__);
}
function Oe(e, t, r) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, r), this.name = "CanceledError";
}
h.inherits(Oe, F, {
  __CANCEL__: !0
});
function Zr(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new F(
    "Request failed with status code " + r.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Hi(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ji(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const f = Date.now(), x = n[a];
    s || (s = f), r[i] = p, n[i] = f;
    let _ = a, O = 0;
    for (; _ !== i; )
      O += r[_++], _ = _ % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), f - s < t)
      return;
    const P = x && f - x;
    return P ? Math.round(O * 1e3 / P) : void 0;
  };
}
function qi(e, t) {
  let r = 0, n = 1e3 / t, i, a;
  const s = (f, x = Date.now()) => {
    r = x, i = null, a && (clearTimeout(a), a = null), e(...f);
  };
  return [(...f) => {
    const x = Date.now(), _ = x - r;
    _ >= n ? s(f, x) : (i = f, a || (a = setTimeout(() => {
      a = null, s(i);
    }, n - _)));
  }, () => i && s(i)];
}
const ot = (e, t, r = 3) => {
  let n = 0;
  const i = ji(50, 250);
  return qi((a) => {
    const s = a.loaded, d = a.lengthComputable ? a.total : void 0, p = s - n, f = i(p), x = s <= d;
    n = s;
    const _ = {
      loaded: s,
      total: d,
      progress: d ? s / d : void 0,
      bytes: p,
      rate: f || void 0,
      estimated: f && d && x ? (d - s) / f : void 0,
      event: a,
      lengthComputable: d != null,
      [t ? "download" : "upload"]: !0
    };
    e(_);
  }, r);
}, vr = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, _r = (e) => (...t) => h.asap(() => e(...t)), zi = j.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, j.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(j.origin),
  j.navigator && /(msie|trident)/i.test(j.navigator.userAgent)
) : () => !0, Vi = j.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      h.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), h.isString(n) && s.push("path=" + n), h.isString(i) && s.push("domain=" + i), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Wi(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function $i(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Qr(e, t, r) {
  let n = !Wi(t);
  return e && (n || r == !1) ? $i(e, t) : t;
}
const Ar = (e) => e instanceof X ? { ...e } : e;
function be(e, t) {
  t = t || {};
  const r = {};
  function n(f, x, _, O) {
    return h.isPlainObject(f) && h.isPlainObject(x) ? h.merge.call({ caseless: O }, f, x) : h.isPlainObject(x) ? h.merge({}, x) : h.isArray(x) ? x.slice() : x;
  }
  function i(f, x, _, O) {
    if (h.isUndefined(x)) {
      if (!h.isUndefined(f))
        return n(void 0, f, _, O);
    } else
      return n(f, x, _, O);
  }
  function a(f, x) {
    if (!h.isUndefined(x))
      return n(void 0, x);
  }
  function s(f, x) {
    if (h.isUndefined(x)) {
      if (!h.isUndefined(f))
        return n(void 0, f);
    } else
      return n(void 0, x);
  }
  function d(f, x, _) {
    if (_ in t)
      return n(f, x);
    if (_ in e)
      return n(void 0, f);
  }
  const p = {
    url: a,
    method: a,
    data: a,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: d,
    headers: (f, x, _) => i(Ar(f), Ar(x), _, !0)
  };
  return h.forEach(Object.keys({ ...e, ...t }), function(x) {
    const _ = p[x] || i, O = _(e[x], t[x], x);
    h.isUndefined(O) && _ !== d || (r[x] = O);
  }), r;
}
const en = (e) => {
  const t = be({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: a, headers: s, auth: d } = t;
  t.headers = s = X.from(s), t.url = Kr(Qr(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), d && s.set(
    "Authorization",
    "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))
  );
  let p;
  if (h.isFormData(r)) {
    if (j.hasStandardBrowserEnv || j.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((p = s.getContentType()) !== !1) {
      const [f, ...x] = p ? p.split(";").map((_) => _.trim()).filter(Boolean) : [];
      s.setContentType([f || "multipart/form-data", ...x].join("; "));
    }
  }
  if (j.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(t)), n || n !== !1 && zi(t.url))) {
    const f = i && a && Vi.read(a);
    f && s.set(i, f);
  }
  return t;
}, Ji = typeof XMLHttpRequest < "u", Ki = Ji && function(e) {
  return new Promise(function(r, n) {
    const i = en(e);
    let a = i.data;
    const s = X.from(i.headers).normalize();
    let { responseType: d, onUploadProgress: p, onDownloadProgress: f } = i, x, _, O, P, A;
    function k() {
      P && P(), A && A(), i.cancelToken && i.cancelToken.unsubscribe(x), i.signal && i.signal.removeEventListener("abort", x);
    }
    let S = new XMLHttpRequest();
    S.open(i.method.toUpperCase(), i.url, !0), S.timeout = i.timeout;
    function U() {
      if (!S)
        return;
      const M = X.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), H = {
        data: !d || d === "text" || d === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: M,
        config: e,
        request: S
      };
      Zr(function(Q) {
        r(Q), k();
      }, function(Q) {
        n(Q), k();
      }, H), S = null;
    }
    "onloadend" in S ? S.onloadend = U : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(U);
    }, S.onabort = function() {
      S && (n(new F("Request aborted", F.ECONNABORTED, e, S)), S = null);
    }, S.onerror = function() {
      n(new F("Network Error", F.ERR_NETWORK, e, S)), S = null;
    }, S.ontimeout = function() {
      let J = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const H = i.transitional || Gr;
      i.timeoutErrorMessage && (J = i.timeoutErrorMessage), n(new F(
        J,
        H.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        e,
        S
      )), S = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in S && h.forEach(s.toJSON(), function(J, H) {
      S.setRequestHeader(H, J);
    }), h.isUndefined(i.withCredentials) || (S.withCredentials = !!i.withCredentials), d && d !== "json" && (S.responseType = i.responseType), f && ([O, A] = ot(f, !0), S.addEventListener("progress", O)), p && S.upload && ([_, P] = ot(p), S.upload.addEventListener("progress", _), S.upload.addEventListener("loadend", P)), (i.cancelToken || i.signal) && (x = (M) => {
      S && (n(!M || M.type ? new Oe(null, e, S) : M), S.abort(), S = null);
    }, i.cancelToken && i.cancelToken.subscribe(x), i.signal && (i.signal.aborted ? x() : i.signal.addEventListener("abort", x)));
    const B = Hi(i.url);
    if (B && j.protocols.indexOf(B) === -1) {
      n(new F("Unsupported protocol " + B + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    S.send(a || null);
  });
}, Gi = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const a = function(f) {
      if (!i) {
        i = !0, d();
        const x = f instanceof Error ? f : this.reason;
        n.abort(x instanceof F ? x : new Oe(x instanceof Error ? x.message : x));
      }
    };
    let s = t && setTimeout(() => {
      s = null, a(new F(`timeout ${t} of ms exceeded`, F.ETIMEDOUT));
    }, t);
    const d = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(a) : f.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", a));
    const { signal: p } = n;
    return p.unsubscribe = () => h.asap(d), p;
  }
}, Xi = Gi, Yi = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, Zi = async function* (e, t) {
  for await (const r of Qi(e))
    yield* Yi(r, t);
}, Qi = async function* (e) {
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
}, Sr = (e, t, r, n) => {
  const i = Zi(e, t);
  let a = 0, s, d = (p) => {
    s || (s = !0, n && n(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: f, value: x } = await i.next();
        if (f) {
          d(), p.close();
          return;
        }
        let _ = x.byteLength;
        if (r) {
          let O = a += _;
          r(O);
        }
        p.enqueue(new Uint8Array(x));
      } catch (f) {
        throw d(f), f;
      }
    },
    cancel(p) {
      return d(p), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, wt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", tn = wt && typeof ReadableStream == "function", eo = wt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), rn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, to = tn && rn(() => {
  let e = !1;
  const t = new Request(j.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Rr = 64 * 1024, Dt = tn && rn(() => h.isReadableStream(new Response("").body)), st = {
  stream: Dt && ((e) => e.body)
};
wt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !st[t] && (st[t] = h.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new F(`Response type '${t}' is not supported`, F.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const ro = async (e) => {
  if (e == null)
    return 0;
  if (h.isBlob(e))
    return e.size;
  if (h.isSpecCompliantForm(e))
    return (await new Request(j.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(e) || h.isArrayBuffer(e))
    return e.byteLength;
  if (h.isURLSearchParams(e) && (e = e + ""), h.isString(e))
    return (await eo(e)).byteLength;
}, no = async (e, t) => {
  const r = h.toFiniteNumber(e.getContentLength());
  return r ?? ro(t);
}, io = wt && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: i,
    cancelToken: a,
    timeout: s,
    onDownloadProgress: d,
    onUploadProgress: p,
    responseType: f,
    headers: x,
    withCredentials: _ = "same-origin",
    fetchOptions: O
  } = en(e);
  f = f ? (f + "").toLowerCase() : "text";
  let P = Xi([i, a && a.toAbortSignal()], s), A;
  const k = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let S;
  try {
    if (p && to && r !== "get" && r !== "head" && (S = await no(x, n)) !== 0) {
      let H = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), Z;
      if (h.isFormData(n) && (Z = H.headers.get("content-type")) && x.setContentType(Z), H.body) {
        const [Q, me] = vr(
          S,
          ot(_r(p))
        );
        n = Sr(H.body, Rr, Q, me);
      }
    }
    h.isString(_) || (_ = _ ? "include" : "omit");
    const U = "credentials" in Request.prototype;
    A = new Request(t, {
      ...O,
      signal: P,
      method: r.toUpperCase(),
      headers: x.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: U ? _ : void 0
    });
    let B = await fetch(A, O);
    const M = Dt && (f === "stream" || f === "response");
    if (Dt && (d || M && k)) {
      const H = {};
      ["status", "statusText", "headers"].forEach((L) => {
        H[L] = B[L];
      });
      const Z = h.toFiniteNumber(B.headers.get("content-length")), [Q, me] = d && vr(
        Z,
        ot(_r(d), !0)
      ) || [];
      B = new Response(
        Sr(B.body, Rr, Q, () => {
          me && me(), k && k();
        }),
        H
      );
    }
    f = f || "text";
    let J = await st[h.findKey(st, f) || "text"](B, e);
    return !M && k && k(), await new Promise((H, Z) => {
      Zr(H, Z, {
        data: J,
        headers: X.from(B.headers),
        status: B.status,
        statusText: B.statusText,
        config: e,
        request: A
      });
    });
  } catch (U) {
    throw k && k(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
      new F("Network Error", F.ERR_NETWORK, e, A),
      {
        cause: U.cause || U
      }
    ) : F.from(U, U && U.code, e, A);
  }
}), It = {
  http: gi,
  xhr: Ki,
  fetch: io
};
h.forEach(It, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Or = (e) => `- ${e}`, oo = (e) => h.isFunction(e) || e === null || e === !1, nn = {
  getAdapter: (e) => {
    e = h.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let s;
      if (n = r, !oo(r) && (n = It[(s = String(r)).toLowerCase()], n === void 0))
        throw new F(`Unknown adapter '${s}'`);
      if (n)
        break;
      i[s || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([d, p]) => `adapter ${d} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(Or).join(`
`) : " " + Or(a[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: It
};
function Tt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Oe(null, e);
}
function kr(e) {
  return Tt(e), e.headers = X.from(e.headers), e.data = Ct.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), nn.getAdapter(e.adapter || Xt.adapter)(e).then(function(n) {
    return Tt(e), n.data = Ct.call(
      e,
      e.transformResponse,
      n
    ), n.headers = X.from(n.headers), n;
  }, function(n) {
    return Yr(n) || (Tt(e), n && n.response && (n.response.data = Ct.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = X.from(n.response.headers))), Promise.reject(n);
  });
}
const on = "1.11.0", bt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  bt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Cr = {};
bt.transitional = function(t, r, n) {
  function i(a, s) {
    return "[Axios v" + on + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, d) => {
    if (t === !1)
      throw new F(
        i(s, " has been removed" + (r ? " in " + r : "")),
        F.ERR_DEPRECATED
      );
    return r && !Cr[s] && (Cr[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, s, d) : !0;
  };
};
bt.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function so(e, t, r) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], s = t[a];
    if (s) {
      const d = e[a], p = d === void 0 || s(d, a, e);
      if (p !== !0)
        throw new F("option " + a + " must be " + p, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new F("Unknown option " + a, F.ERR_BAD_OPTION);
  }
}
const et = {
  assertOptions: so,
  validators: bt
}, ee = et.validators;
class at {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new xr(),
      response: new xr()
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
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = be(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && et.assertOptions(n, {
      silentJSONParsing: ee.transitional(ee.boolean),
      forcedJSONParsing: ee.transitional(ee.boolean),
      clarifyTimeoutError: ee.transitional(ee.boolean)
    }, !1), i != null && (h.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : et.assertOptions(i, {
      encode: ee.function,
      serialize: ee.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), et.assertOptions(r, {
      baseUrl: ee.spelling("baseURL"),
      withXsrfToken: ee.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = a && h.merge(
      a.common,
      a[r.method]
    );
    a && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (A) => {
        delete a[A];
      }
    ), r.headers = X.concat(s, a);
    const d = [];
    let p = !0;
    this.interceptors.request.forEach(function(k) {
      typeof k.runWhen == "function" && k.runWhen(r) === !1 || (p = p && k.synchronous, d.unshift(k.fulfilled, k.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(k) {
      f.push(k.fulfilled, k.rejected);
    });
    let x, _ = 0, O;
    if (!p) {
      const A = [kr.bind(this), void 0];
      for (A.unshift(...d), A.push(...f), O = A.length, x = Promise.resolve(r); _ < O; )
        x = x.then(A[_++], A[_++]);
      return x;
    }
    O = d.length;
    let P = r;
    for (_ = 0; _ < O; ) {
      const A = d[_++], k = d[_++];
      try {
        P = A(P);
      } catch (S) {
        k.call(this, S);
        break;
      }
    }
    try {
      x = kr.call(this, P);
    } catch (A) {
      return Promise.reject(A);
    }
    for (_ = 0, O = f.length; _ < O; )
      x = x.then(f[_++], f[_++]);
    return x;
  }
  getUri(t) {
    t = be(this.defaults, t);
    const r = Qr(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Kr(r, t.params, t.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(t) {
  at.prototype[t] = function(r, n) {
    return this.request(be(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, s, d) {
      return this.request(be(d || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  at.prototype[t] = r(), at.prototype[t + "Form"] = r(!0);
});
const tt = at;
class Yt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const s = new Promise((d) => {
        n.subscribe(d), a = d;
      }).then(i);
      return s.cancel = function() {
        n.unsubscribe(a);
      }, s;
    }, t(function(a, s, d) {
      n.reason || (n.reason = new Oe(a, s, d), r(n.reason));
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
      token: new Yt(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const ao = Yt;
function co(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function lo(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}
const Ht = {
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
Object.entries(Ht).forEach(([e, t]) => {
  Ht[t] = e;
});
const uo = Ht;
function sn(e) {
  const t = new tt(e), r = Lr(tt.prototype.request, t);
  return h.extend(r, tt.prototype, t, { allOwnKeys: !0 }), h.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return sn(be(e, i));
  }, r;
}
const D = sn(Xt);
D.Axios = tt;
D.CanceledError = Oe;
D.CancelToken = ao;
D.isCancel = Yr;
D.VERSION = on;
D.toFormData = ht;
D.AxiosError = F;
D.Cancel = D.CanceledError;
D.all = function(t) {
  return Promise.all(t);
};
D.spread = co;
D.isAxiosError = lo;
D.mergeConfig = be;
D.AxiosHeaders = X;
D.formToJSON = (e) => Xr(h.isHTMLForm(e) ? new FormData(e) : e);
D.getAdapter = nn.getAdapter;
D.HttpStatusCode = uo;
D.default = D;
const fo = async () => {
  try {
    return (await D.get("https://api.ipify.org?format=json")).data.ip;
  } catch (e) {
    console.error("Error getting IP:", e);
  }
}, ho = () => Object.keys(window).find((e) => e.match(/^cdc_[a-zA-Z0-9]+_(Array|Promise|Symbol)$/)), po = () => typeof window.__puppeteer_evaluation_script__ < "u" || typeof window.__pwPage < "u", wo = () => {
  try {
    return performance.getEntriesByType("mark").some((e) => e.name.startsWith("CDP"));
  } catch {
    return !1;
  }
}, bo = () => {
  try {
    return !!(window.chrome && window.chrome.debugger);
  } catch {
    return !1;
  }
}, mo = () => {
  const e = Function.prototype.toString.toString();
  return !e.includes("[native code]") || e.length > 200;
}, go = async () => {
  const e = {};
  e.playwright = !!(navigator.userAgent.includes("Playwright") || window.__playwright || window.__playwright_evaluate || window.__pw_manual || window.__pwPage || document.__playwright), e.puppeteer = !!(window._phantom || window.__nightmare || window.domAutomation || window.domAutomationController || window.callPhantom || window.__puppeteer_evaluation_script__), e.webdriver = !!navigator.webdriver, e.cdp_cdc_property = !!ho(), e.cdp_binding = po(), e.cdp_perf_marks = wo(), e.cdp_debugger_api = bo(), e.cdp_patched_tostring = mo();
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
  return e;
}, yo = async (e = 3e3, t = 200) => new Promise((r) => {
  const n = Date.now(), i = setInterval(() => {
    (jt() || Date.now() - n > e) && (clearInterval(i), r(jt()));
  }, t);
});
function jt() {
  return document.cookie.includes("__bbst=") && document.cookie.includes("__bbts=");
}
function je(e) {
  let t = e + "=", n = decodeURIComponent(document.cookie).split(";");
  for (let i = 0; i < n.length; i++) {
    let a = n[i];
    for (; a.charAt(0) == " "; )
      a = a.substring(1);
    if (a.indexOf(t) == 0)
      return a.substring(t.length, a.length);
  }
  return "";
}
function Xe(e, t, r = {}) {
  r = {
    path: "/",
    ...r
  };
  let n = encodeURIComponent(e) + "=" + encodeURIComponent(t);
  for (const i in r) {
    n += "; " + i;
    const a = r[i];
    a !== !0 && (n += "=" + a);
  }
  document.cookie = n;
}
function xo(e) {
  Array.isArray(e) || (e = [e]);
  const t = "Thu, 01 Jan 1970 00:00:00 GMT";
  e.forEach((r) => {
    document.cookie = `${r}=; Path=/; Expires=${t}`, document.cookie = `${r}=; Path=/; Domain=${location.hostname}; Expires=${t}`;
  });
}
const Eo = "https://api.blockbots.org";
async function vo(e, t) {
  var r, n;
  try {
    return (await D.post(
      Eo + "/v1/js",
      e,
      {
        headers: {
          "X-API-Key": t,
          "Content-Type": "application/json"
        }
      }
    )).data;
  } catch (i) {
    return console.error("Request failed:", ((r = i.response) == null ? void 0 : r.data) || i.message), (n = i.response) == null ? void 0 : n.data;
  }
}
const Tr = async (e) => {
  let t = {};
  const r = ae(navigator.userAgent);
  t.os = r.os.name, t.useragent = navigator.userAgent, t.fingerprint = await gn(), t.bl_fingerprint = await yn(), t.lang = navigator.language, t.automation = await go(), t.ip = await fo(), t.st = je("__bbst"), t.ts = je("__bbts"), console.log(t), await Pn();
  const n = await vo(t, e);
  n && n.status === !0 && n.__bbst && n.__bbts && (Xe("__bbst", n.__bbst, { "Max-Age": 240, Secure: !0 }), Xe("__bbts", n.__bbts, { "Max-Age": 240, Secure: !0 }), Xe("__bbjwt", n.__bbjwt, { "Max-Age": 240, Secure: !0 })), n && n.status === "forbidden" && Xe("__bb_decision", "1", { "Max-Age": 240, Secure: !0 });
};
async function _o(e) {
  return new Promise((t) => setTimeout(t, e));
}
const Ao = "https://api.blockbots.org";
async function So() {
  try {
    const e = je("__bbst"), t = je("__bbts");
    if (!e || !t)
      return !1;
    const r = new URLSearchParams({
      st: e,
      ts: t
    });
    return (await D.get(Ao + "/validate?" + r.toString())).status === 200;
  } catch {
    return xo(["__bbst", "__bbts"]), !1;
  }
}
function Ro(e, t) {
  return t = { exports: {} }, e(t, t.exports), t.exports;
}
var le = Ro(function(e, t) {
  (function(r) {
    var n = "function", i = "isNode", a = function(p, f) {
      return typeof p === f;
    }, s = function(p, f) {
      f !== null && (Array.isArray(f) ? f.map(function(x) {
        return s(p, x);
      }) : (d[i](f) || (f = document.createTextNode(f)), p.appendChild(f)));
    };
    function d(p, f) {
      var x = arguments, _ = 1, O, P;
      if (p = d.isElement(p) ? p : document.createElement(p), a(f, "object") && !d[i](f) && !Array.isArray(f)) {
        _++;
        for (O in f)
          P = f[O], O = d.attrMap[O] || O, a(O, n) ? O(p, P) : a(P, n) ? p[O] = P : p.setAttribute(O, P);
      }
      for (; _ < x.length; _++)
        s(p, x[_]);
      return p;
    }
    d.attrMap = {}, d.isElement = function(p) {
      return p instanceof Element;
    }, d[i] = function(p) {
      return p instanceof Node;
    }, typeof Proxy < "u" && (d.proxy = new Proxy(d, {
      get: function(p, f) {
        return !(f in d) && (d[f] = d.bind(null, f)), d[f];
      }
    })), r(d, n);
  })(function(r, n) {
    e.exports = r;
  });
});
let qt = !1;
function an() {
  if (qt)
    return;
  qt = !0, document.body.innerHTML = `
      <div class="main-wrapper" role="main">
        <div class="main-content"></div>
      </div>
      <div class="footer" role="contentinfo">
        <div class="footer-inner">
          <div class="text-center" id="footer-text">
            Performance & security by BlockBots
          </div>
        </div>
      </div>
    `, document.querySelector(".main-content").append(
    le("h1", { class: "zone-name-title h1" }, location.hostname),
    le(
      "div",
      { id: "loader", class: "spacer loading-verifying" },
      le(
        "div",
        { class: "lds-ring" },
        le("div"),
        le("div"),
        le("div"),
        le("div")
      )
    ),
    le(
      "div",
      {
        id: "loader-status",
        class: "core-msg spacer"
      },
      `${location.hostname} is checking your browser before accessing the site.`
    )
  );
}
function cn() {
  const e = document.getElementById("loader-status"), t = document.getElementById("loader");
  t && t.remove(), e && (e.textContent = "Access blocked. Automated traffic detected.", e.style.color = "#e5533d", e.style.fontWeight = "600");
}
function Oo() {
  document.body.innerHTML = "", qt = !1;
}
async function ko({ apiKey: e, retries: t, delay: r, ui: n }) {
  n && an();
  for (let i = 0; i < t && !je("__bb_decision"); i++)
    if (!(!jt() && (await Tr(e), !await yo()))) {
      if (await So())
        return n && Oo(), !0;
      await Tr(e), await _o(r);
    }
  return n && cn(), !1;
}
class Co {
  constructor({
    apiKey: t,
    retries: r = 3,
    delay: n = 1e3,
    ui: i = !0
  }) {
    if (!t)
      throw new Error("BlockBots: apiKey is required");
    this.apiKey = t, this.retries = r, this.delay = n, this.ui = !0, this.hooks = ln();
  }
  /*static showLoader() {
      showLoader();
  }*/
  static setLoaderBlocked() {
    an(), cn();
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
      return await ko({
        apiKey: this.apiKey,
        retries: this.retries,
        delay: this.delay,
        ui: this.ui
      }) ? (this.hooks.emit("verified"), !0) : (this.hooks.emit("blocked", "validation_failed"), !1);
    } catch (t) {
      return this.hooks.emit("error", t), !1;
    }
  }
}
export {
  Co as BlockBots
};
