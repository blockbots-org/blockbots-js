(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('button{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body.theme-dark{background-color:#222;color:#d9d9d9}body.theme-dark a{color:#fff}body.theme-dark a:hover{text-decoration:underline;color:#ee730a}body.theme-dark .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-dark .font-red{color:#b20f03}body.theme-dark .ctp-button{background-color:#4693ff;color:#1d1d1d}body.theme-dark #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body.theme-dark #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}body.theme-light{background-color:#fff;color:#313131}body.theme-light a{color:#0051c3}body.theme-light a:hover{text-decoration:underline;color:#ee730a}body.theme-light .lds-ring div{border-color:#595959 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-light .font-red{color:#fc574a}body.theme-light .ctp-button{border-color:#003681;background-color:#003681;color:#fff}body.theme-light #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=)}body.theme-light #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}a{transition:color .15s ease;background-color:#0000;text-decoration:none;color:#0051c3}a:hover{text-decoration:underline;color:#ee730a}.main-content{margin:8rem auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem}.main-content .loading-verifying{height:76.391px}.spacer{margin:2rem 0}.spacer-top{margin-top:4rem}.spacer-bottom{margin-bottom:2rem}.heading-favicon{margin-right:.5rem;width:2rem;height:2rem}@media(max-width:720px){.main-content{margin-top:4rem}.heading-favicon{width:1.5rem;height:1.5rem}}.main-wrapper{display:flex;flex:1;flex-direction:column;align-items:center}.font-red{color:#b20f03}.h1{line-height:3.75rem;font-size:2.5rem;font-weight:500}.core-msg{line-height:2.25rem;font-size:1.5rem;font-weight:400}.body-text{line-height:1.25rem;font-size:1rem;font-weight:400}@media(max-width:720px){.h1{line-height:1.75rem;font-size:1.5rem}.h2{line-height:1.5rem;font-size:1.25rem}.core-msg{line-height:1.5rem;font-size:1rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}#challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=);background-repeat:no-repeat;background-size:contain;padding-left:42px}.text-center{text-align:center}.ctp-button{transition-duration:.2s;transition-property:background-color,border-color,color;transition-timing-function:ease;margin:2rem 0;border:.063rem solid #0051c3;border-radius:.313rem;background-color:#0051c3;cursor:pointer;padding:.375rem 1rem;line-height:1.313rem;color:#fff;font-size:.875rem}.ctp-button:hover{border-color:#003681;background-color:#003681;cursor:pointer;color:#fff}.footer{margin:0 auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem;line-height:1.125rem;font-size:.75rem}.footer-inner{border-top:1px solid #d9d9d9;padding-top:1rem;padding-bottom:1rem}.clearfix:after{display:table;clear:both;content:""}.clearfix .column{float:left;padding-right:1.5rem;width:50%}.diagnostic-wrapper{margin-bottom:.5rem}.footer .ray-id{text-align:center}.footer .ray-id code{font-family:monaco,courier,monospace}.core-msg,.zone-name-title{overflow-wrap:break-word}@media(max-width:720px){.diagnostic-wrapper{display:flex;flex-wrap:wrap;justify-content:center}.clearfix:after{display:initial;clear:none;text-align:center;content:none}.column{padding-bottom:2rem}.clearfix .column{float:none;padding:0;width:auto;word-break:keep-all}.zone-name-title{margin-bottom:1rem}}.loading-verifying{height:76.391px}.lds-ring{display:inline-block;position:relative;width:1.875rem;height:1.875rem}.lds-ring div{box-sizing:border-box;display:block;position:absolute;border:.3rem solid #595959;border-radius:50%;border-color:#313131 rgba(0,0,0,0) rgba(0,0,0,0);width:1.875rem;height:1.875rem;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.rtl .heading-favicon{margin-right:0;margin-left:.5rem}.rtl #challenge-success-text{background-position:right;padding-right:42px;padding-left:0}.rtl #challenge-error-text{background-position:right;padding-right:34px;padding-left:0}.challenge-content .loading-verifying{height:76.391px}@media(prefers-color-scheme:dark){body{background-color:#222;color:#d9d9d9}body a{color:#fff}body a:hover{text-decoration:underline;color:#ee730a}body .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body .font-red{color:#b20f03}body .ctp-button{background-color:#4693ff;color:#1d1d1d}body #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}}*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{display:flex;flex-direction:column;height:100vh;min-height:100vh}.main-content{margin:8rem auto;padding-left:1.5rem;max-width:60rem}@media(max-width:720px){.main-content{margin-top:4rem}}.h2{line-height:2.25rem;font-size:1.5rem;font-weight:500}@media(max-width:720px){.h2{line-height:1.5rem;font-size:1.25rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}@media(prefers-color-scheme:dark){body{background-color:#222;color:#d9d9d9}}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
function on() {
  const e = {
    verified: [],
    blocked: [],
    error: []
  };
  return {
    on(t, r) {
      e[t]?.push(r);
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
function sn(e, t = 0) {
  t = t || 0;
  let r = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    r = Math.imul(r ^ a, 2654435761), n = Math.imul(n ^ a, 1597334677);
  }
  return r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), 4294967296 * (2097151 & n) + (r >>> 0);
}
var an = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cn(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
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
var wt = { exports: {} };
const ln = {}, un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ln
}, Symbol.toStringTag, { value: "Module" })), Yt = /* @__PURE__ */ cn(un);
var Zt;
function fn() {
  return Zt || (Zt = 1, (function(e) {
    (function() {
      var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", i = n ? window : {};
      i.JS_MD5_NO_WINDOW && (n = !1);
      var a = !n && typeof self == "object", s = !i.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? i = an : a && (i = self);
      var d = !i.JS_MD5_NO_COMMON_JS && !0 && e.exports, p = !i.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", f = "0123456789abcdef".split(""), x = [128, 32768, 8388608, -2147483648], A = [0, 8, 16, 24], _ = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), R = [], k;
      if (p) {
        var S = new ArrayBuffer(68);
        k = new Uint8Array(S), R = new Uint32Array(S);
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
      }, K = function(o) {
        return function(l) {
          return new L(!0).update(l)[o]();
        };
      }, H = function() {
        var o = K("hex");
        s && (o = Z(o)), o.create = function() {
          return new L();
        }, o.update = function(c) {
          return o.create().update(c);
        };
        for (var l = 0; l < _.length; ++l) {
          var u = _[l];
          o[u] = K(u);
        }
        return o;
      }, Z = function(o) {
        var l = Yt, u = Yt.Buffer, c;
        u.from && !i.JS_MD5_NO_BUFFER_FROM ? c = u.from : c = function(v) {
          return new u(v);
        };
        var O = function(v) {
          if (typeof v == "string")
            return l.createHash("md5").update(v, "utf8").digest("hex");
          if (v == null)
            throw new Error(t);
          return v.constructor === ArrayBuffer && (v = new Uint8Array(v)), U(v) || B(v) || v.constructor === u ? l.createHash("md5").update(c(v)).digest("hex") : o(v);
        };
        return O;
      }, Q = function(o) {
        return function(l, u) {
          return new Je(l, !0).update(u)[o]();
        };
      }, ye = function() {
        var o = Q("hex");
        o.create = function(c) {
          return new Je(c);
        }, o.update = function(c, O) {
          return o.create(c).update(O);
        };
        for (var l = 0; l < _.length; ++l) {
          var u = _[l];
          o[u] = Q(u);
        }
        return o;
      };
      function L(o) {
        if (o)
          R[0] = R[16] = R[1] = R[2] = R[3] = R[4] = R[5] = R[6] = R[7] = R[8] = R[9] = R[10] = R[11] = R[12] = R[13] = R[14] = R[15] = 0, this.blocks = R, this.buffer8 = k;
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
        for (var u = l[1], c, O = 0, v, E = o.length, C = this.blocks, q = this.buffer8; O < E; ) {
          if (this.hashed && (this.hashed = !1, C[0] = C[16], C[16] = C[1] = C[2] = C[3] = C[4] = C[5] = C[6] = C[7] = C[8] = C[9] = C[10] = C[11] = C[12] = C[13] = C[14] = C[15] = 0), u)
            if (p)
              for (v = this.start; O < E && v < 64; ++O)
                c = o.charCodeAt(O), c < 128 ? q[v++] = c : c < 2048 ? (q[v++] = 192 | c >>> 6, q[v++] = 128 | c & 63) : c < 55296 || c >= 57344 ? (q[v++] = 224 | c >>> 12, q[v++] = 128 | c >>> 6 & 63, q[v++] = 128 | c & 63) : (c = 65536 + ((c & 1023) << 10 | o.charCodeAt(++O) & 1023), q[v++] = 240 | c >>> 18, q[v++] = 128 | c >>> 12 & 63, q[v++] = 128 | c >>> 6 & 63, q[v++] = 128 | c & 63);
            else
              for (v = this.start; O < E && v < 64; ++O)
                c = o.charCodeAt(O), c < 128 ? C[v >>> 2] |= c << A[v++ & 3] : c < 2048 ? (C[v >>> 2] |= (192 | c >>> 6) << A[v++ & 3], C[v >>> 2] |= (128 | c & 63) << A[v++ & 3]) : c < 55296 || c >= 57344 ? (C[v >>> 2] |= (224 | c >>> 12) << A[v++ & 3], C[v >>> 2] |= (128 | c >>> 6 & 63) << A[v++ & 3], C[v >>> 2] |= (128 | c & 63) << A[v++ & 3]) : (c = 65536 + ((c & 1023) << 10 | o.charCodeAt(++O) & 1023), C[v >>> 2] |= (240 | c >>> 18) << A[v++ & 3], C[v >>> 2] |= (128 | c >>> 12 & 63) << A[v++ & 3], C[v >>> 2] |= (128 | c >>> 6 & 63) << A[v++ & 3], C[v >>> 2] |= (128 | c & 63) << A[v++ & 3]);
          else if (p)
            for (v = this.start; O < E && v < 64; ++O)
              q[v++] = o[O];
          else
            for (v = this.start; O < E && v < 64; ++O)
              C[v >>> 2] |= o[O] << A[v++ & 3];
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
        var o, l, u, c, O, v, E = this.blocks;
        this.first ? (o = E[0] - 680876937, o = (o << 7 | o >>> 25) - 271733879 << 0, c = (-1732584194 ^ o & 2004318071) + E[1] - 117830708, c = (c << 12 | c >>> 20) + o << 0, u = (-271733879 ^ c & (o ^ -271733879)) + E[2] - 1126478375, u = (u << 17 | u >>> 15) + c << 0, l = (o ^ u & (c ^ o)) + E[3] - 1316259209, l = (l << 22 | l >>> 10) + u << 0) : (o = this.h0, l = this.h1, u = this.h2, c = this.h3, o += (c ^ l & (u ^ c)) + E[0] - 680876936, o = (o << 7 | o >>> 25) + l << 0, c += (u ^ o & (l ^ u)) + E[1] - 389564586, c = (c << 12 | c >>> 20) + o << 0, u += (l ^ c & (o ^ l)) + E[2] + 606105819, u = (u << 17 | u >>> 15) + c << 0, l += (o ^ u & (c ^ o)) + E[3] - 1044525330, l = (l << 22 | l >>> 10) + u << 0), o += (c ^ l & (u ^ c)) + E[4] - 176418897, o = (o << 7 | o >>> 25) + l << 0, c += (u ^ o & (l ^ u)) + E[5] + 1200080426, c = (c << 12 | c >>> 20) + o << 0, u += (l ^ c & (o ^ l)) + E[6] - 1473231341, u = (u << 17 | u >>> 15) + c << 0, l += (o ^ u & (c ^ o)) + E[7] - 45705983, l = (l << 22 | l >>> 10) + u << 0, o += (c ^ l & (u ^ c)) + E[8] + 1770035416, o = (o << 7 | o >>> 25) + l << 0, c += (u ^ o & (l ^ u)) + E[9] - 1958414417, c = (c << 12 | c >>> 20) + o << 0, u += (l ^ c & (o ^ l)) + E[10] - 42063, u = (u << 17 | u >>> 15) + c << 0, l += (o ^ u & (c ^ o)) + E[11] - 1990404162, l = (l << 22 | l >>> 10) + u << 0, o += (c ^ l & (u ^ c)) + E[12] + 1804603682, o = (o << 7 | o >>> 25) + l << 0, c += (u ^ o & (l ^ u)) + E[13] - 40341101, c = (c << 12 | c >>> 20) + o << 0, u += (l ^ c & (o ^ l)) + E[14] - 1502002290, u = (u << 17 | u >>> 15) + c << 0, l += (o ^ u & (c ^ o)) + E[15] + 1236535329, l = (l << 22 | l >>> 10) + u << 0, o += (u ^ c & (l ^ u)) + E[1] - 165796510, o = (o << 5 | o >>> 27) + l << 0, c += (l ^ u & (o ^ l)) + E[6] - 1069501632, c = (c << 9 | c >>> 23) + o << 0, u += (o ^ l & (c ^ o)) + E[11] + 643717713, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ o & (u ^ c)) + E[0] - 373897302, l = (l << 20 | l >>> 12) + u << 0, o += (u ^ c & (l ^ u)) + E[5] - 701558691, o = (o << 5 | o >>> 27) + l << 0, c += (l ^ u & (o ^ l)) + E[10] + 38016083, c = (c << 9 | c >>> 23) + o << 0, u += (o ^ l & (c ^ o)) + E[15] - 660478335, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ o & (u ^ c)) + E[4] - 405537848, l = (l << 20 | l >>> 12) + u << 0, o += (u ^ c & (l ^ u)) + E[9] + 568446438, o = (o << 5 | o >>> 27) + l << 0, c += (l ^ u & (o ^ l)) + E[14] - 1019803690, c = (c << 9 | c >>> 23) + o << 0, u += (o ^ l & (c ^ o)) + E[3] - 187363961, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ o & (u ^ c)) + E[8] + 1163531501, l = (l << 20 | l >>> 12) + u << 0, o += (u ^ c & (l ^ u)) + E[13] - 1444681467, o = (o << 5 | o >>> 27) + l << 0, c += (l ^ u & (o ^ l)) + E[2] - 51403784, c = (c << 9 | c >>> 23) + o << 0, u += (o ^ l & (c ^ o)) + E[7] + 1735328473, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ o & (u ^ c)) + E[12] - 1926607734, l = (l << 20 | l >>> 12) + u << 0, O = l ^ u, o += (O ^ c) + E[5] - 378558, o = (o << 4 | o >>> 28) + l << 0, c += (O ^ o) + E[8] - 2022574463, c = (c << 11 | c >>> 21) + o << 0, v = c ^ o, u += (v ^ l) + E[11] + 1839030562, u = (u << 16 | u >>> 16) + c << 0, l += (v ^ u) + E[14] - 35309556, l = (l << 23 | l >>> 9) + u << 0, O = l ^ u, o += (O ^ c) + E[1] - 1530992060, o = (o << 4 | o >>> 28) + l << 0, c += (O ^ o) + E[4] + 1272893353, c = (c << 11 | c >>> 21) + o << 0, v = c ^ o, u += (v ^ l) + E[7] - 155497632, u = (u << 16 | u >>> 16) + c << 0, l += (v ^ u) + E[10] - 1094730640, l = (l << 23 | l >>> 9) + u << 0, O = l ^ u, o += (O ^ c) + E[13] + 681279174, o = (o << 4 | o >>> 28) + l << 0, c += (O ^ o) + E[0] - 358537222, c = (c << 11 | c >>> 21) + o << 0, v = c ^ o, u += (v ^ l) + E[3] - 722521979, u = (u << 16 | u >>> 16) + c << 0, l += (v ^ u) + E[6] + 76029189, l = (l << 23 | l >>> 9) + u << 0, O = l ^ u, o += (O ^ c) + E[9] - 640364487, o = (o << 4 | o >>> 28) + l << 0, c += (O ^ o) + E[12] - 421815835, c = (c << 11 | c >>> 21) + o << 0, v = c ^ o, u += (v ^ l) + E[15] + 530742520, u = (u << 16 | u >>> 16) + c << 0, l += (v ^ u) + E[2] - 995338651, l = (l << 23 | l >>> 9) + u << 0, o += (u ^ (l | ~c)) + E[0] - 198630844, o = (o << 6 | o >>> 26) + l << 0, c += (l ^ (o | ~u)) + E[7] + 1126891415, c = (c << 10 | c >>> 22) + o << 0, u += (o ^ (c | ~l)) + E[14] - 1416354905, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~o)) + E[5] - 57434055, l = (l << 21 | l >>> 11) + u << 0, o += (u ^ (l | ~c)) + E[12] + 1700485571, o = (o << 6 | o >>> 26) + l << 0, c += (l ^ (o | ~u)) + E[3] - 1894986606, c = (c << 10 | c >>> 22) + o << 0, u += (o ^ (c | ~l)) + E[10] - 1051523, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~o)) + E[1] - 2054922799, l = (l << 21 | l >>> 11) + u << 0, o += (u ^ (l | ~c)) + E[8] + 1873313359, o = (o << 6 | o >>> 26) + l << 0, c += (l ^ (o | ~u)) + E[15] - 30611744, c = (c << 10 | c >>> 22) + o << 0, u += (o ^ (c | ~l)) + E[6] - 1560198380, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~o)) + E[13] + 1309151649, l = (l << 21 | l >>> 11) + u << 0, o += (u ^ (l | ~c)) + E[4] - 145523070, o = (o << 6 | o >>> 26) + l << 0, c += (l ^ (o | ~u)) + E[11] - 1120210379, c = (c << 10 | c >>> 22) + o << 0, u += (o ^ (c | ~l)) + E[2] + 718787259, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~o)) + E[9] - 343485551, l = (l << 21 | l >>> 11) + u << 0, this.first ? (this.h0 = o + 1732584193 << 0, this.h1 = l - 271733879 << 0, this.h2 = u - 1732584194 << 0, this.h3 = c + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + o << 0, this.h1 = this.h1 + l << 0, this.h2 = this.h2 + u << 0, this.h3 = this.h3 + c << 0);
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
        for (var o, l, u, c = "", O = this.array(), v = 0; v < 15; )
          o = O[v++], l = O[v++], u = O[v++], c += P[o >>> 2] + P[(o << 4 | l >>> 4) & 63] + P[(l << 2 | u >>> 6) & 63] + P[u & 63];
        return o = O[v], c += P[o >>> 2] + P[o << 4 & 63] + "==", c;
      };
      function Je(o, l) {
        var u, c = M(o);
        if (o = c[0], c[1]) {
          var O = [], v = o.length, E = 0, C;
          for (u = 0; u < v; ++u)
            C = o.charCodeAt(u), C < 128 ? O[E++] = C : C < 2048 ? (O[E++] = 192 | C >>> 6, O[E++] = 128 | C & 63) : C < 55296 || C >= 57344 ? (O[E++] = 224 | C >>> 12, O[E++] = 128 | C >>> 6 & 63, O[E++] = 128 | C & 63) : (C = 65536 + ((C & 1023) << 10 | o.charCodeAt(++u) & 1023), O[E++] = 240 | C >>> 18, O[E++] = 128 | C >>> 12 & 63, O[E++] = 128 | C >>> 6 & 63, O[E++] = 128 | C & 63);
          o = O;
        }
        o.length > 64 && (o = new L(!0).update(o).array());
        var q = [], Gt = [];
        for (u = 0; u < 64; ++u) {
          var Xt = o[u] || 0;
          q[u] = 92 ^ Xt, Gt[u] = 54 ^ Xt;
        }
        L.call(this, l), this.update(Gt), this.oKeyPad = q, this.inner = !0, this.sharedMemory = l;
      }
      Je.prototype = new L(), Je.prototype.finalize = function() {
        if (L.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var o = this.array();
          L.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(o), L.prototype.finalize.call(this);
        }
      };
      var Ce = H();
      Ce.md5 = Ce, Ce.md5.hmac = ye(), d ? e.exports = Ce : i.md5 = Ce;
    })();
  })(wt)), wt.exports;
}
var dn = fn();
const Cr = () => {
  const e = document.createElement("canvas");
  return !!(e.getContext && e.getContext("2d"));
}, hn = () => {
  if (!Cr()) return "None";
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
  return sn(a).toString();
}, pn = () => {
  if (!Cr()) return "None";
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
  return dn.md5(a);
}, bn = () => new Promise((e, t) => {
  e(hn());
}), wn = () => new Promise((e, t) => {
  e(pn());
});
var mn = "2.0.4", Ft = 500, Qt = "user-agent", Ae = "", er = "?", nt = "function", fe = "undefined", Re = "object", Pt = "string", z = "browser", ie = "cpu", ne = "device", X = "engine", G = "os", Ee = "result", y = "name", b = "type", m = "vendor", g = "version", V = "architecture", He = "major", w = "model", De = "console", T = "mobile", N = "tablet", I = "smarttv", te = "wearable", Ke = "xr", Ie = "embedded", Te = "inapp", zt = "brands", pe = "formFactors", Vt = "fullVersionList", ve = "platform", $t = "platformVersion", ct = "bitness", de = "sec-ch-ua", yn = de + "-full-version-list", gn = de + "-arch", xn = de + "-" + ct, En = de + "-form-factors", vn = de + "-" + T, An = de + "-" + w, Tr = de + "-" + ve, Rn = Tr + "-version", Fr = [zt, Vt, T, w, ve, $t, V, pe, ct], Ge = "Amazon", ge = "Apple", tr = "ASUS", rr = "BlackBerry", he = "Google", nr = "Huawei", mt = "Lenovo", ir = "Honor", Xe = "LG", yt = "Microsoft", gt = "Motorola", xt = "Nvidia", or = "OnePlus", Et = "OPPO", Fe = "Samsung", sr = "Sharp", Pe = "Sony", vt = "Xiaomi", At = "Zebra", ar = "Chrome", cr = "Chromium", ce = "Chromecast", Qe = "Edge", Be = "Firefox", Ue = "Opera", Rt = "Facebook", lr = "Sogou", xe = "Mobile ", Ne = " Browser", Bt = "Windows", Sn = typeof window !== fe, $ = Sn && window.navigator ? window.navigator : void 0, ue = $ && $.userAgentData ? $.userAgentData : void 0, On = function(e, t) {
  var r = {}, n = t;
  if (!it(t)) {
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
  if (typeof e === Re && e.length > 0) {
    for (var r in e)
      if (oe(t) == oe(e[r])) return !0;
    return !1;
  }
  return Oe(e) ? oe(t) == oe(e) : !1;
}, it = function(e, t) {
  for (var r in e)
    return /^(browser|cpu|device|engine|os)$/.test(r) || (t ? it(e[r]) : !1);
}, Oe = function(e) {
  return typeof e === Pt;
}, St = function(e) {
  if (e) {
    for (var t = [], r = Se(/\\?\"/g, e).split(","), n = 0; n < r.length; n++)
      if (r[n].indexOf(";") > -1) {
        var i = ot(r[n]).split(";v=");
        t[n] = { brand: i[0], version: i[1] };
      } else
        t[n] = ot(r[n]);
    return t;
  }
}, oe = function(e) {
  return Oe(e) ? e.toLowerCase() : e;
}, Ot = function(e) {
  return Oe(e) ? Se(/[^\d\.]/g, e).split(".")[0] : void 0;
}, se = function(e) {
  for (var t in e) {
    var r = e[t];
    typeof r == Re && r.length == 2 ? this[r[0]] = r[1] : this[r] = void 0;
  }
  return this;
}, Se = function(e, t) {
  return Oe(t) ? t.replace(e, Ae) : t;
}, Le = function(e) {
  return Se(/\\?\"/g, e);
}, ot = function(e, t) {
  if (Oe(e))
    return e = Se(/^\s\s*/, e), typeof t === fe ? e : e.substring(0, Ft);
}, _t = function(e, t) {
  if (!(!e || !t))
    for (var r = 0, n, i, a, s, d, p; r < t.length && !d; ) {
      var f = t[r], x = t[r + 1];
      for (n = i = 0; n < f.length && !d && f[n]; )
        if (d = f[n++].exec(e), d)
          for (a = 0; a < x.length; a++)
            p = d[++i], s = x[a], typeof s === Re && s.length > 0 ? s.length === 2 ? typeof s[1] == nt ? this[s[0]] = s[1].call(this, p) : this[s[0]] = s[1] : s.length >= 3 && (typeof s[1] === nt && !(s[1].exec && s[1].test) ? s.length > 3 ? this[s[0]] = p ? s[1].apply(this, s.slice(2)) : void 0 : this[s[0]] = p ? s[1].call(this, p, s[2]) : void 0 : s.length == 3 ? this[s[0]] = p ? p.replace(s[1], s[2]) : void 0 : s.length == 4 ? this[s[0]] = p ? s[3].call(this, p.replace(s[1], s[2])) : void 0 : s.length > 4 && (this[s[0]] = p ? s[3].apply(this, [p.replace(s[1], s[2])].concat(s.slice(4))) : void 0)) : this[s] = p || void 0;
      r += 2;
    }
}, re = function(e, t) {
  for (var r in t)
    if (typeof t[r] === Re && t[r].length > 0) {
      for (var n = 0; n < t[r].length; n++)
        if (Ut(t[r][n], e))
          return r === er ? void 0 : r;
    } else if (Ut(t[r], e))
      return r === er ? void 0 : r;
  return t.hasOwnProperty("*") ? t["*"] : e;
}, ur = {
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
}, fr = {
  embedded: "Automotive",
  mobile: "Mobile",
  tablet: ["Tablet", "EInk"],
  smarttv: "TV",
  wearable: "Watch",
  xr: ["VR", "XR"],
  "?": ["Desktop", "Unknown"],
  "*": void 0
}, _n = {
  Chrome: "Google Chrome",
  Edge: "Microsoft Edge",
  "Edge WebView2": "Microsoft Edge WebView2",
  "Chrome WebView": "Android WebView",
  "Chrome Headless": "HeadlessChrome",
  "Huawei Browser": "HuaweiBrowser",
  "MIUI Browser": "Miui Browser",
  "Opera Mobi": "OperaMobile",
  Yandex: "YaBrowser"
}, dr = {
  browser: [
    [
      // Most common regardless engine
      /\b(?:crmo|crios)\/([\w\.]+)/i
      // Chrome for Android/iOS
    ],
    [g, [y, xe + "Chrome"]],
    [
      /webview.+edge\/([\w\.]+)/i
      // Microsoft Edge
    ],
    [g, [y, Qe + " WebView"]],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i
    ],
    [g, [y, "Edge"]],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i,
      // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
      // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      // Opera
    ],
    [y, g],
    [
      /opios[\/ ]+([\w\.]+)/i
      // Opera mini on iphone >= 8.0
    ],
    [g, [y, Ue + " Mini"]],
    [
      /\bop(?:rg)?x\/([\w\.]+)/i
      // Opera GX
    ],
    [g, [y, Ue + " GX"]],
    [
      /\bopr\/([\w\.]+)/i
      // Opera Webkit
    ],
    [g, [y, Ue]],
    [
      // Mixed
      /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      // Baidu
    ],
    [g, [y, "Baidu"]],
    [
      /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      // Maxthon
    ],
    [g, [y, "Maxthon"]],
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
    [y, g],
    [
      /quark(?:pc)?\/([-\w\.]+)/i
      // Quark
    ],
    [g, [y, "Quark"]],
    [
      /\bddg\/([\w\.]+)/i
      // DuckDuckGo
    ],
    [g, [y, "DuckDuckGo"]],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      // UCBrowser
    ],
    [g, [y, "UCBrowser"]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i,
      // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i,
      /micromessenger\/([\w\.]+)/i
      // WeChat
    ],
    [g, [y, "WeChat"]],
    [
      /konqueror\/([\w\.]+)/i
      // Konqueror
    ],
    [g, [y, "Konqueror"]],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      // IE11
    ],
    [g, [y, "IE"]],
    [
      /ya(?:search)?browser\/([\w\.]+)/i
      // Yandex
    ],
    [g, [y, "Yandex"]],
    [
      /slbrowser\/([\w\.]+)/i
      // Smart Lenovo Browser
    ],
    [g, [y, "Smart " + mt + Ne]],
    [
      /(avast|avg)\/([\w\.]+)/i
      // Avast/AVG Secure Browser
    ],
    [[y, /(.+)/, "$1 Secure" + Ne], g],
    [
      /\bfocus\/([\w\.]+)/i
      // Firefox Focus
    ],
    [g, [y, Be + " Focus"]],
    [
      /\bopt\/([\w\.]+)/i
      // Opera Touch
    ],
    [g, [y, Ue + " Touch"]],
    [
      /coc_coc\w+\/([\w\.]+)/i
      // Coc Coc Browser
    ],
    [g, [y, "Coc Coc"]],
    [
      /dolfin\/([\w\.]+)/i
      // Dolphin
    ],
    [g, [y, "Dolphin"]],
    [
      /coast\/([\w\.]+)/i
      // Opera Coast
    ],
    [g, [y, Ue + " Coast"]],
    [
      /miuibrowser\/([\w\.]+)/i
      // MIUI Browser
    ],
    [g, [y, "MIUI" + Ne]],
    [
      /fxios\/([\w\.-]+)/i
      // Firefox for iOS
    ],
    [g, [y, xe + Be]],
    [
      /\bqihoobrowser\/?([\w\.]*)/i
      // 360
    ],
    [g, [y, "360"]],
    [
      /\b(qq)\/([\w\.]+)/i
      // QQ
    ],
    [[y, /(.+)/, "$1Browser"], g],
    [
      /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
    ],
    [[y, /(.+)/, "$1" + Ne], g],
    [
      // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
      /samsungbrowser\/([\w\.]+)/i
      // Samsung Internet
    ],
    [g, [y, Fe + " Internet"]],
    [
      /metasr[\/ ]?([\d\.]+)/i
      // Sogou Explorer
    ],
    [g, [y, lr + " Explorer"]],
    [
      /(sogou)mo\w+\/([\d\.]+)/i
      // Sogou Mobile
    ],
    [[y, lr + " Mobile"], g],
    [
      /(electron)\/([\w\.]+) safari/i,
      // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
      // Tesla
      /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      // QQ/2345
    ],
    [y, g],
    [
      /(lbbrowser|rekonq)/i
      // LieBao Browser/Rekonq
    ],
    [y],
    [
      /ome\/([\w\.]+) \w* ?(iron) saf/i,
      // Iron
      /ome\/([\w\.]+).+qihu (360)[es]e/i
      // 360
    ],
    [g, y],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      // Facebook App for iOS & Android
    ],
    [[y, Rt], g, [b, Te]],
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
    [y, g, [b, Te]],
    [
      /\bgsa\/([\w\.]+) .*safari\//i
      // Google Search Appliance on iOS
    ],
    [g, [y, "GSA"], [b, Te]],
    [
      /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      // TikTok
    ],
    [g, [y, "TikTok"], [b, Te]],
    [
      /\[(linkedin)app\]/i
      // LinkedIn App for iOS & Android
    ],
    [y, [b, Te]],
    [
      /(chromium)[\/ ]([-\w\.]+)/i
      // Chromium
    ],
    [y, g],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i
      // Chrome Headless
    ],
    [g, [y, ar + " Headless"]],
    [
      /wv\).+chrome\/([\w\.]+).+edgw\//i
      // Edge WebView2
    ],
    [g, [y, Qe + " WebView2"]],
    [
      / wv\).+(chrome)\/([\w\.]+)/i
      // Chrome WebView
    ],
    [[y, ar + " WebView"], g],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      // Android Browser
    ],
    [g, [y, "Android" + Ne]],
    [
      /chrome\/([\w\.]+) mobile/i
      // Chrome Mobile
    ],
    [g, [y, xe + "Chrome"]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [y, g],
    [
      /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      // Safari Mobile
    ],
    [g, [y, xe + "Safari"]],
    [
      /iphone .*mobile(?:\/\w+ | ?)safari/i
    ],
    [[y, xe + "Safari"]],
    [
      /version\/([\w\.\,]+) .*(safari)/i
      // Safari
    ],
    [g, y],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      // Safari < 3.0
    ],
    [y, [g, "1"]],
    [
      /(webkit|khtml)\/([\w\.]+)/i
    ],
    [y, g],
    [
      // Gecko based
      /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      // Firefox Mobile
    ],
    [[y, xe + Be], g],
    [
      /(navigator|netscape\d?)\/([-\w\.]+)/i
      // Netscape
    ],
    [[y, "Netscape"], g],
    [
      /(wolvic|librewolf)\/([\w\.]+)/i
      // Wolvic/LibreWolf
    ],
    [y, g],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i
      // Firefox Reality
    ],
    [g, [y, Be + " Reality"]],
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
    [y, [g, /_/g, "."]],
    [
      /(cobalt)\/([\w\.]+)/i
      // Cobalt
    ],
    [y, [g, /[^\d\.]+./, Ae]]
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
    [[V, /ower/, Ae, oe]],
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
    [w, [m, Fe], [b, N]],
    [
      /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
      /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [w, [m, Fe], [b, T]],
    [
      // Apple
      /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      // iPod/iPhone
    ],
    [w, [m, ge], [b, T]],
    [
      /\((ipad);[-\w\),; ]+apple/i,
      // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [w, [m, ge], [b, N]],
    [
      /(macintosh);/i
    ],
    [w, [m, ge]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [w, [m, sr], [b, T]],
    [
      // Honor
      /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
    ],
    [w, [m, ir], [b, N]],
    [
      /honor([-\w ]+)[;\)]/i
    ],
    [w, [m, ir], [b, T]],
    [
      // Huawei
      /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
    ],
    [w, [m, nr], [b, N]],
    [
      /(?:huawei)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [w, [m, nr], [b, T]],
    [
      // Xiaomi
      /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
      /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      // Mi Pad tablets
    ],
    [[w, /_/g, " "], [m, vt], [b, N]],
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
    [[w, /_/g, " "], [m, vt], [b, T]],
    [
      // OnePlus
      /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [w, [m, or], [b, T]],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [w, [m, Et], [b, T]],
    [
      /\b(opd2(\d{3}a?))(?: bui|\))/i
    ],
    [w, [m, re, { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": Et }], [b, N]],
    [
      // BLU
      /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      // Vivo series
    ],
    [w, [m, "BLU"], [b, T]],
    [
      // Vivo
      /; vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [w, [m, "Vivo"], [b, T]],
    [
      // Realme
      /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
    ],
    [w, [m, "Realme"], [b, T]],
    [
      // Lenovo
      /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
      /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
    ],
    [w, [m, mt], [b, N]],
    [
      /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
    ],
    [w, [m, mt], [b, T]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
      /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
    ],
    [w, [m, gt], [b, T]],
    [
      /\b(mz60\d|xoom[2 ]{0,2}) build\//i
    ],
    [w, [m, gt], [b, N]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [w, [m, Xe], [b, N]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [w, [m, Xe], [b, T]],
    [
      // Nokia
      /(nokia) (t[12][01])/i
    ],
    [m, w, [b, N]],
    [
      /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
      /nokia[-_ ]?(([-\w\. ]*))/i
    ],
    [[w, /_/g, " "], [b, T], [m, "Nokia"]],
    [
      // Google
      /(pixel (c|tablet))\b/i
      // Google Pixel C/Tablet
    ],
    [w, [m, he], [b, N]],
    [
      // Google Pixel
      /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
    ],
    [w, [m, he], [b, T]],
    [
      /(google) (pixelbook( go)?)/i
    ],
    [m, w],
    [
      // Sony
      /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [w, [m, Pe], [b, T]],
    [
      /sony tablet [ps]/i,
      /\b(?:sony)?sgp\w+(?: bui|\))/i
    ],
    [[w, "Xperia Tablet"], [m, Pe], [b, N]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
      // Kindle Fire without Silk / Echo Show
      /(kf[a-z]+)( bui|\)).+silk\//i
      // Kindle Fire HD
    ],
    [w, [m, Ge], [b, N]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      // Fire Phone
    ],
    [[w, /(.+)/g, "Fire Phone $1"], [m, Ge], [b, T]],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i
      // BlackBerry PlayBook
    ],
    [w, m, [b, N]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i
      // BlackBerry 10
    ],
    [w, [m, rr], [b, T]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [w, [m, tr], [b, N]],
    [
      / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
    ],
    [w, [m, tr], [b, T]],
    [
      // HTC
      /(nexus 9)/i
      // HTC Nexus 9
    ],
    [w, [m, "HTC"], [b, N]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
      // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [m, [w, /_/g, " "], [b, T]],
    [
      // TCL
      /tcl (xess p17aa)/i,
      /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [w, [m, "TCL"], [b, N]],
    [
      /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [w, [m, "TCL"], [b, T]],
    [
      // itel
      /(itel) ((\w+))/i
    ],
    [[m, oe], w, [b, re, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [w, [m, "Acer"], [b, N]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [w, [m, "Meizu"], [b, T]],
    [
      // Ulefone
      /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
    ],
    [w, [m, "Ulefone"], [b, T]],
    [
      // Energizer
      /; (energy ?\w+)(?: bui|\))/i,
      /; energizer ([\w ]+)(?: bui|\))/i
    ],
    [w, [m, "Energizer"], [b, T]],
    [
      // Cat
      /; cat (b35);/i,
      /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
    ],
    [w, [m, "Cat"], [b, T]],
    [
      // Smartfren
      /((?:new )?andromax[\w- ]+)(?: bui|\))/i
    ],
    [w, [m, "Smartfren"], [b, T]],
    [
      // Nothing
      /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
    ],
    [w, [m, "Nothing"], [b, T]],
    [
      // Archos
      /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
      /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
    ],
    [w, [m, "Archos"], [b, N]],
    [
      /archos ([\w ]+)( b|\))/i,
      /; (ac[3-6]\d\w{2,8})( b|\))/i
    ],
    [w, [m, "Archos"], [b, T]],
    [
      // HMD
      /; (n159v)/i
    ],
    [w, [m, "HMD"], [b, T]],
    [
      // MIXED
      /(imo) (tab \w+)/i,
      // IMO
      /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      // Infinix XPad / Tecno
    ],
    [m, w, [b, N]],
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
    [m, w, [b, T]],
    [
      /(kobo)\s(ereader|touch)/i,
      // Kobo
      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
      // HP TouchPad
      /(kindle)\/([\w\.]+)/i
      // Kindle
    ],
    [m, w, [b, N]],
    [
      /(surface duo)/i
      // Surface Duo
    ],
    [w, [m, yt], [b, N]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i
      // Fairphone
    ],
    [w, [m, "Fairphone"], [b, T]],
    [
      /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      // Nvidia Tablets
    ],
    [w, [m, xt], [b, N]],
    [
      /(sprint) (\w+)/i
      // Sprint Phones
    ],
    [m, w, [b, T]],
    [
      /(kin\.[onetw]{3})/i
      // Microsoft Kin
    ],
    [[w, /\./g, " "], [m, yt], [b, T]],
    [
      /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      // Zebra
    ],
    [w, [m, At], [b, N]],
    [
      /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
    ],
    [w, [m, At], [b, T]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i
      // Samsung
    ],
    [m, [b, I]],
    [
      /hbbtv.+maple;(\d+)/i
    ],
    [[w, /^/, "SmartTV"], [m, Fe], [b, I]],
    [
      /(vizio)(?: |.+model\/)(\w+-\w+)/i,
      // Vizio
      /tcast.+(lg)e?. ([-\w]+)/i
      // LG SmartTV
    ],
    [m, w, [b, I]],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
    ],
    [[m, Xe], [b, I]],
    [
      /(apple) ?tv/i
      // Apple TV
    ],
    [m, [w, ge + " TV"], [b, I]],
    [
      /crkey.*devicetype\/chromecast/i
      // Google Chromecast Third Generation
    ],
    [[w, ce + " Third Generation"], [m, he], [b, I]],
    [
      /crkey.*devicetype\/([^/]*)/i
      // Google Chromecast with specific device type
    ],
    [[w, /^/, "Chromecast "], [m, he], [b, I]],
    [
      /fuchsia.*crkey/i
      // Google Chromecast Nest Hub
    ],
    [[w, ce + " Nest Hub"], [m, he], [b, I]],
    [
      /crkey/i
      // Google Chromecast, Linux-based or unknown
    ],
    [[w, ce], [m, he], [b, I]],
    [
      /(portaltv)/i
      // Facebook Portal TV
    ],
    [w, [m, Rt], [b, I]],
    [
      /droid.+aft(\w+)( bui|\))/i
      // Fire TV
    ],
    [w, [m, Ge], [b, I]],
    [
      /(shield \w+ tv)/i
      // Nvidia Shield TV
    ],
    [w, [m, xt], [b, I]],
    [
      /\(dtv[\);].+(aquos)/i,
      /(aquos-tv[\w ]+)\)/i
      // Sharp
    ],
    [w, [m, sr], [b, I]],
    [
      /(bravia[\w ]+)( bui|\))/i
      // Sony
    ],
    [w, [m, Pe], [b, I]],
    [
      /(mi(tv|box)-?\w+) bui/i
      // Xiaomi
    ],
    [w, [m, vt], [b, I]],
    [
      /Hbbtv.*(technisat) (.*);/i
      // TechniSAT
    ],
    [m, w, [b, I]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
      // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      // HbbTV devices
    ],
    [[m, /.+\/(\w+)/, "$1", re, { LG: "lge" }], [w, ot], [b, I]],
    [
      // SmartTV from Unidentified Vendors
      /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
    ],
    [w, [b, I]],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:|large screen[\w ]+safari)\b/i
    ],
    [[b, I]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(playstation \w+)/i
      // Playstation
    ],
    [w, [m, Pe], [b, De]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      // Microsoft Xbox
    ],
    [w, [m, yt], [b, De]],
    [
      /(ouya)/i,
      // Ouya
      /(nintendo) (\w+)/i,
      // Nintendo
      /(retroid) (pocket ([^\)]+))/i
      // Retroid Pocket
    ],
    [m, w, [b, De]],
    [
      /droid.+; (shield)( bui|\))/i
      // Nvidia Portable
    ],
    [w, [m, xt], [b, De]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      // Samsung Galaxy Watch
    ],
    [w, [m, Fe], [b, te]],
    [
      /((pebble))app/i,
      // Pebble
      /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      // Asus ZenWatch / LG Watch / Pixel Watch
    ],
    [m, w, [b, te]],
    [
      /(ow(?:19|20)?we?[1-3]{1,3})/i
      // Oppo Watch
    ],
    [w, [m, Et], [b, te]],
    [
      /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      // Apple Watch
    ],
    [w, [m, ge], [b, te]],
    [
      /(opwwe\d{3})/i
      // OnePlus Watch
    ],
    [w, [m, or], [b, te]],
    [
      /(moto 360)/i
      // Motorola 360
    ],
    [w, [m, gt], [b, te]],
    [
      /(smartwatch 3)/i
      // Sony SmartWatch
    ],
    [w, [m, Pe], [b, te]],
    [
      /(g watch r)/i
      // LG G Watch R
    ],
    [w, [m, Xe], [b, te]],
    [
      /droid.+; (wt63?0{2,3})\)/i
    ],
    [w, [m, At], [b, te]],
    [
      ///////////////////
      // XR
      ///////////////////
      /droid.+; (glass) \d/i
      // Google Glass
    ],
    [w, [m, he], [b, Ke]],
    [
      /(pico) (4|neo3(?: link|pro)?)/i
      // Pico
    ],
    [m, w, [b, Ke]],
    [
      /(quest( \d| pro)?s?).+vr/i
      // Meta Quest
    ],
    [w, [m, Rt], [b, Ke]],
    [
      /mobile vr; rv.+firefox/i
      // Unidentifiable VR device using Firefox Reality / Wolvic
    ],
    [[b, Ke]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      // Tesla
    ],
    [m, [b, Ie]],
    [
      /(aeobc)\b/i
      // Echo Dot
    ],
    [w, [m, Ge], [b, Ie]],
    [
      /(homepod).+mac os/i
      // Apple HomePod
    ],
    [w, [m, ge], [b, Ie]],
    [
      /windows iot/i
      // Unidentifiable embedded device using Windows IoT
    ],
    [[b, Ie]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
    ],
    [w, [b, re, { mobile: "Mobile", xr: "VR", "*": N }]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      // Unidentifiable Tablet
    ],
    [[b, N]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      // Unidentifiable Mobile
    ],
    [[b, T]],
    [
      /droid .+?; ([\w\. -]+)( bui|\))/i
      // Generic Android Device
    ],
    [w, [m, "Generic"]]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i
      // EdgeHTML
    ],
    [g, [y, Qe + "HTML"]],
    [
      /(arkweb)\/([\w\.]+)/i
      // ArkWeb
    ],
    [y, g],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      // Blink
    ],
    [g, [y, "Blink"]],
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
    [y, g],
    [
      /ladybird\//i
    ],
    [[y, "LibWeb"]],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i
      // Gecko
    ],
    [g, y]
  ],
  os: [
    [
      // Windows
      /(windows nt) (6\.[23]); arm/i
      // Windows RT
    ],
    [[y, /N/, "R"], [g, re, ur]],
    [
      /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
      // Windows IoT/Mobile/Phone
      // Windows NT/3.1/95/98/ME/2000/XP/Vista/7/8/8.1/10/11
      /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
    ],
    [y, g],
    [
      /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
      /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
    ],
    [[g, /(;|\))/g, "", re, ur], [y, Bt]],
    [
      /(windows ce)\/?([\d\.]*)/i
      // Windows CE
    ],
    [y, g],
    [
      // iOS/macOS
      /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
      // iOS
      /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
      /cfnetwork\/.+darwin/i
    ],
    [[g, /_/g, "."], [y, "iOS"]],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      // Mac OS
    ],
    [[y, "macOS"], [g, /_/g, "."]],
    [
      // Google Chromecast
      /android ([\d\.]+).*crkey/i
      // Google Chromecast, Android-based
    ],
    [g, [y, ce + " Android"]],
    [
      /fuchsia.*crkey\/([\d\.]+)/i
      // Google Chromecast, Fuchsia-based
    ],
    [g, [y, ce + " Fuchsia"]],
    [
      /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      // Google Chromecast, Linux-based Smart Speaker
    ],
    [g, [y, ce + " SmartSpeaker"]],
    [
      /linux.*crkey\/([\d\.]+)/i
      // Google Chromecast, Legacy Linux-based
    ],
    [g, [y, ce + " Linux"]],
    [
      /crkey\/([\d\.]+)/i
      // Google Chromecast, unknown
    ],
    [g, [y, ce]],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86)/i
      // Android-x86
    ],
    [g, y],
    [
      /(ubuntu) ([\w\.]+) like android/i
      // Ubuntu Touch
    ],
    [[y, /(.+)/, "$1 Touch"], g],
    [
      /(harmonyos)[\/ ]?([\d\.]*)/i,
      // HarmonyOS
      // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
      /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
    ],
    [y, g],
    [
      /\(bb(10);/i
      // BlackBerry 10
    ],
    [g, [y, rr]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      // Symbian
    ],
    [g, [y, "Symbian"]],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      // Firefox OS
    ],
    [g, [y, Be + " OS"]],
    [
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
      // WebOS
      /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
    ],
    [g, [y, "webOS"]],
    [
      /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      // https://webostv.developer.lge.com/develop/specifications/web-api-and-web-engine
    ],
    [[g, re, { 25: "120", 24: "108", 23: "94", 22: "87", 6: "79", 5: "68", 4: "53", 3: "38", 2: "538", 1: "537", "*": "TV" }], [y, "webOS"]],
    [
      /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      // watchOS
    ],
    [g, [y, "watchOS"]],
    [
      // Google ChromeOS
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      // Chromium OS
    ],
    [[y, "Chrome OS"], g],
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
    [y, g],
    [
      /(sunos) ?([\d\.]*)/i
      // Solaris
    ],
    [[y, "Solaris"], g],
    [
      /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
      // BeOS/OS2/AmigaOS/OpenVMS/HP-UX/SerenityOS
      /(unix) ?([\w\.]*)/i
      // UNIX
    ],
    [y, g]
  ]
}, Ye = (function() {
  var e = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
  return se.call(e.init, [
    [z, [y, g, He, b]],
    [ie, [V]],
    [ne, [b, w, m]],
    [X, [y, g]],
    [G, [y, g]]
  ]), se.call(e.isIgnore, [
    [z, [g, He]],
    [X, [g]],
    [G, [g]]
  ]), se.call(e.isIgnoreRgx, [
    [z, / ?browser$/i],
    [G, / ?os$/i]
  ]), se.call(e.toString, [
    [z, [y, g]],
    [ie, [V]],
    [ne, [m, w]],
    [X, [y, g]],
    [G, [y, g]]
  ]), e;
})(), kn = function(e, t) {
  var r = Ye.init[t], n = Ye.isIgnore[t] || 0, i = Ye.isIgnoreRgx[t] || 0, a = Ye.toString[t] || 0;
  function s() {
    se.call(this, r);
  }
  return s.prototype.getItem = function() {
    return e;
  }, s.prototype.withClientHints = function() {
    return ue ? ue.getHighEntropyValues(Fr).then(function(d) {
      return e.setCH(new Pr(d, !1)).parseCH().get();
    }) : e.parseCH().get();
  }, s.prototype.withFeatureCheck = function() {
    return e.detectFeature().get();
  }, t != Ee && (s.prototype.is = function(d) {
    var p = !1;
    for (var f in this)
      if (this.hasOwnProperty(f) && !Ut(n, f) && oe(i ? Se(i, this[f]) : this[f]) == oe(i ? Se(i, d) : d)) {
        if (p = !0, d != fe) break;
      } else if (d == fe && p) {
        p = !p;
        break;
      }
    return p;
  }, s.prototype.toString = function() {
    var d = Ae;
    for (var p in a)
      typeof this[a[p]] !== fe && (d += (d ? " " : Ae) + this[a[p]]);
    return d || fe;
  }), ue || (s.prototype.then = function(d) {
    var p = this, f = function() {
      for (var A in p)
        p.hasOwnProperty(A) && (this[A] = p[A]);
    };
    f.prototype = {
      is: s.prototype.is,
      toString: s.prototype.toString
    };
    var x = new f();
    return d(x), x;
  }), new s();
};
function Pr(e, t) {
  if (e = e || {}, se.call(this, Fr), t)
    se.call(this, [
      [zt, St(e[de])],
      [Vt, St(e[yn])],
      [T, /\?1/.test(e[vn])],
      [w, Le(e[An])],
      [ve, Le(e[Tr])],
      [$t, Le(e[Rn])],
      [V, Le(e[gn])],
      [pe, St(e[En])],
      [ct, Le(e[xn])]
    ]);
  else
    for (var r in e)
      this.hasOwnProperty(r) && typeof e[r] !== fe && (this[r] = e[r]);
}
function hr(e, t, r, n) {
  return this.get = function(i) {
    return i ? this.data.hasOwnProperty(i) ? this.data[i] : void 0 : this.data;
  }, this.set = function(i, a) {
    return this.data[i] = a, this;
  }, this.setCH = function(i) {
    return this.uaCH = i, this;
  }, this.detectFeature = function() {
    if ($ && $.userAgent == this.ua)
      switch (this.itemType) {
        case z:
          $.brave && typeof $.brave.isBrave == nt && this.set(y, "Brave");
          break;
        case ne:
          !this.get(b) && ue && ue[T] && this.set(b, T), this.get(w) == "Macintosh" && $ && typeof $.standalone !== fe && $.maxTouchPoints && $.maxTouchPoints > 2 && this.set(w, "iPad").set(b, N);
          break;
        case G:
          !this.get(y) && ue && ue[ve] && this.set(y, ue[ve]);
          break;
        case Ee:
          var i = this.data, a = function(s) {
            return i[s].getItem().detectFeature().get();
          };
          this.set(z, a(z)).set(ie, a(ie)).set(ne, a(ne)).set(X, a(X)).set(G, a(G));
      }
    return this;
  }, this.parseUA = function() {
    return this.itemType != Ee && _t.call(this.data, this.ua, this.rgxMap), this.itemType == z && this.set(He, Ot(this.get(g))), this;
  }, this.parseCH = function() {
    var i = this.uaCH, a = this.rgxMap;
    switch (this.itemType) {
      case z:
      case X:
        var s = i[Vt] || i[zt], d;
        if (s)
          for (var p in s) {
            var f = s[p].brand || s[p], x = s[p].version;
            this.itemType == z && !/not.a.brand/i.test(f) && (!d || /Chrom/.test(d) && f != cr || d == Qe && /WebView2/.test(f)) && (f = re(f, _n), d = this.get(y), d && !/Chrom/.test(d) && /Chrom/.test(f) || this.set(y, f).set(g, x).set(He, Ot(x)), d = f), this.itemType == X && f == cr && this.set(g, x);
          }
        break;
      case ie:
        var A = i[V];
        A && (A && i[ct] == "64" && (A += "64"), _t.call(this.data, A + ";", a));
        break;
      case ne:
        if (i[T] && this.set(b, T), i[w] && (this.set(w, i[w]), !this.get(b) || !this.get(m))) {
          var _ = {};
          _t.call(_, "droid 9; " + i[w] + ")", a), !this.get(b) && _.type && this.set(b, _.type), !this.get(m) && _.vendor && this.set(m, _.vendor);
        }
        if (i[pe]) {
          var P;
          if (typeof i[pe] != "string")
            for (var R = 0; !P && R < i[pe].length; )
              P = re(i[pe][R++], fr);
          else
            P = re(i[pe], fr);
          this.set(b, P);
        }
        break;
      case G:
        var k = i[ve];
        if (k) {
          var S = i[$t];
          k == Bt && (S = parseInt(Ot(S), 10) >= 13 ? "11" : "10"), this.set(y, k).set(g, S);
        }
        this.get(y) == Bt && i[w] == "Xbox" && this.set(y, "Xbox").set(g, void 0);
        break;
      case Ee:
        var U = this.data, B = function(M) {
          return U[M].getItem().setCH(i).parseCH().get();
        };
        this.set(z, B(z)).set(ie, B(ie)).set(ne, B(ne)).set(X, B(X)).set(G, B(G));
    }
    return this;
  }, se.call(this, [
    ["itemType", e],
    ["ua", t],
    ["uaCH", n],
    ["rgxMap", r],
    ["data", kn(this, e)]
  ]), this;
}
function ae(e, t, r) {
  if (typeof e === Re ? (it(e, !0) ? (typeof t === Re && (r = t), t = e) : (r = e, t = void 0), e = void 0) : typeof e === Pt && !it(t, !0) && (r = t, t = void 0), r && typeof r.append === nt) {
    var n = {};
    r.forEach(function(p, f) {
      n[f] = p;
    }), r = n;
  }
  if (!(this instanceof ae))
    return new ae(e, t, r).getResult();
  var i = typeof e === Pt ? e : (
    // Passed user-agent string
    r && r[Qt] ? r[Qt] : (
      // User-Agent from passed headers
      $ && $.userAgent ? $.userAgent : (
        // navigator.userAgent
        Ae
      )
    )
  ), a = new Pr(r, !0), s = t ? On(dr, t) : dr, d = function(p) {
    return p == Ee ? function() {
      return new hr(p, i, s, a).set("ua", i).set(z, this.getBrowser()).set(ie, this.getCPU()).set(ne, this.getDevice()).set(X, this.getEngine()).set(G, this.getOS()).get();
    } : function() {
      return new hr(p, i, s[p], a).parseUA().get();
    };
  };
  return se.call(this, [
    ["getBrowser", d(z)],
    ["getCPU", d(ie)],
    ["getDevice", d(ne)],
    ["getEngine", d(X)],
    ["getOS", d(G)],
    ["getResult", d(Ee)],
    ["getUA", function() {
      return i;
    }],
    ["setUA", function(p) {
      return Oe(p) && (i = p.length > Ft ? ot(p, Ft) : p), this;
    }]
  ]).setUA(i), this;
}
ae.VERSION = mn;
ae.BROWSER = lt([y, g, He, b]);
ae.CPU = lt([V]);
ae.DEVICE = lt([w, m, b, De, T, I, N, te, Ie]);
ae.ENGINE = ae.OS = lt([y, g]);
let pr = !1;
const Cn = () => pr ? Promise.resolve(!0) : new Promise((e) => {
  const t = document.createElement("iframe");
  t.src = "https://watcher.blockbots.org:8888/", t.style.display = "none", t.onload = () => {
    pr = !0, e(!0);
  }, document.body.appendChild(t);
});
function Br(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Tn } = Object.prototype, { getPrototypeOf: Wt } = Object, { iterator: ut, toStringTag: Ur } = Symbol, ft = /* @__PURE__ */ ((e) => (t) => {
  const r = Tn.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Y = (e) => (e = e.toLowerCase(), (t) => ft(t) === e), dt = (e) => (t) => typeof t === e, { isArray: _e } = Array, je = dt("undefined");
function ze(e) {
  return e !== null && !je(e) && e.constructor !== null && !je(e.constructor) && W(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Nr = Y("ArrayBuffer");
function Fn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Nr(e.buffer), t;
}
const Pn = dt("string"), W = dt("function"), Lr = dt("number"), Ve = (e) => e !== null && typeof e == "object", Bn = (e) => e === !0 || e === !1, et = (e) => {
  if (ft(e) !== "object")
    return !1;
  const t = Wt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ur in e) && !(ut in e);
}, Un = (e) => {
  if (!Ve(e) || ze(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Nn = Y("Date"), Ln = Y("File"), Mn = Y("Blob"), Dn = Y("FileList"), In = (e) => Ve(e) && W(e.pipe), Hn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || W(e.append) && ((t = ft(e)) === "formdata" || // detect form-data instance
  t === "object" && W(e.toString) && e.toString() === "[object FormData]"));
}, jn = Y("URLSearchParams"), [qn, zn, Vn, $n] = ["ReadableStream", "Request", "Response", "Headers"].map(Y), Wn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $e(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), _e(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    if (ze(e))
      return;
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let d;
    for (n = 0; n < s; n++)
      d = a[n], t.call(null, e[d], d, e);
  }
}
function Mr(e, t) {
  if (ze(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const be = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Dr = (e) => !je(e) && e !== be;
function Nt() {
  const { caseless: e } = Dr(this) && this || {}, t = {}, r = (n, i) => {
    const a = e && Mr(t, i) || i;
    et(t[a]) && et(n) ? t[a] = Nt(t[a], n) : et(n) ? t[a] = Nt({}, n) : _e(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && $e(arguments[n], r);
  return t;
}
const Jn = (e, t, r, { allOwnKeys: n } = {}) => ($e(t, (i, a) => {
  r && W(i) ? e[a] = Br(i, r) : e[a] = i;
}, { allOwnKeys: n }), e), Kn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Gn = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Xn = (e, t, r, n) => {
  let i, a, s;
  const d = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      s = i[a], (!n || n(s, e, t)) && !d[s] && (t[s] = e[s], d[s] = !0);
    e = r !== !1 && Wt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Yn = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Zn = (e) => {
  if (!e) return null;
  if (_e(e)) return e;
  let t = e.length;
  if (!Lr(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Qn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Wt(Uint8Array)), ei = (e, t) => {
  const n = (e && e[ut]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, ti = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, ri = Y("HTMLFormElement"), ni = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), br = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ii = Y("RegExp"), Ir = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  $e(r, (i, a) => {
    let s;
    (s = t(i, a, e)) !== !1 && (n[a] = s || i);
  }), Object.defineProperties(e, n);
}, oi = (e) => {
  Ir(e, (t, r) => {
    if (W(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (W(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, si = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return _e(e) ? n(e) : n(String(e).split(t)), r;
}, ai = () => {
}, ci = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function li(e) {
  return !!(e && W(e.append) && e[Ur] === "FormData" && e[ut]);
}
const ui = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Ve(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (ze(n))
        return n;
      if (!("toJSON" in n)) {
        t[i] = n;
        const a = _e(n) ? [] : {};
        return $e(n, (s, d) => {
          const p = r(s, i + 1);
          !je(p) && (a[d] = p);
        }), t[i] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, fi = Y("AsyncFunction"), di = (e) => e && (Ve(e) || W(e)) && W(e.then) && W(e.catch), Hr = ((e, t) => e ? setImmediate : t ? ((r, n) => (be.addEventListener("message", ({ source: i, data: a }) => {
  i === be && a === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), be.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  W(be.postMessage)
), hi = typeof queueMicrotask < "u" ? queueMicrotask.bind(be) : typeof process < "u" && process.nextTick || Hr, pi = (e) => e != null && W(e[ut]), h = {
  isArray: _e,
  isArrayBuffer: Nr,
  isBuffer: ze,
  isFormData: Hn,
  isArrayBufferView: Fn,
  isString: Pn,
  isNumber: Lr,
  isBoolean: Bn,
  isObject: Ve,
  isPlainObject: et,
  isEmptyObject: Un,
  isReadableStream: qn,
  isRequest: zn,
  isResponse: Vn,
  isHeaders: $n,
  isUndefined: je,
  isDate: Nn,
  isFile: Ln,
  isBlob: Mn,
  isRegExp: ii,
  isFunction: W,
  isStream: In,
  isURLSearchParams: jn,
  isTypedArray: Qn,
  isFileList: Dn,
  forEach: $e,
  merge: Nt,
  extend: Jn,
  trim: Wn,
  stripBOM: Kn,
  inherits: Gn,
  toFlatObject: Xn,
  kindOf: ft,
  kindOfTest: Y,
  endsWith: Yn,
  toArray: Zn,
  forEachEntry: ei,
  matchAll: ti,
  isHTMLForm: ri,
  hasOwnProperty: br,
  hasOwnProp: br,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ir,
  freezeMethods: oi,
  toObjectSet: si,
  toCamelCase: ni,
  noop: ai,
  toFiniteNumber: ci,
  findKey: Mr,
  global: be,
  isContextDefined: Dr,
  isSpecCompliantForm: li,
  toJSONObject: ui,
  isAsyncFn: fi,
  isThenable: di,
  setImmediate: Hr,
  asap: hi,
  isIterable: pi
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
const jr = F.prototype, qr = {};
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
  qr[e] = { value: e };
});
Object.defineProperties(F, qr);
Object.defineProperty(jr, "isAxiosError", { value: !0 });
F.from = (e, t, r, n, i, a) => {
  const s = Object.create(jr);
  return h.toFlatObject(e, s, function(p) {
    return p !== Error.prototype;
  }, (d) => d !== "isAxiosError"), F.call(s, e.message, t, r, n, i), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const bi = null;
function Lt(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function zr(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function wr(e, t, r) {
  return e ? e.concat(t).map(function(i, a) {
    return i = zr(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function wi(e) {
  return h.isArray(e) && !e.some(Lt);
}
const mi = h.toFlatObject(h, {}, null, function(t) {
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
  function f(R) {
    if (R === null) return "";
    if (h.isDate(R))
      return R.toISOString();
    if (h.isBoolean(R))
      return R.toString();
    if (!p && h.isBlob(R))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(R) || h.isTypedArray(R) ? p && typeof Blob == "function" ? new Blob([R]) : Buffer.from(R) : R;
  }
  function x(R, k, S) {
    let U = R;
    if (R && !S && typeof R == "object") {
      if (h.endsWith(k, "{}"))
        k = n ? k : k.slice(0, -2), R = JSON.stringify(R);
      else if (h.isArray(R) && wi(R) || (h.isFileList(R) || h.endsWith(k, "[]")) && (U = h.toArray(R)))
        return k = zr(k), U.forEach(function(M, K) {
          !(h.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? wr([k], K, a) : s === null ? k : k + "[]",
            f(M)
          );
        }), !1;
    }
    return Lt(R) ? !0 : (t.append(wr(S, k, a), f(R)), !1);
  }
  const A = [], _ = Object.assign(mi, {
    defaultVisitor: x,
    convertValue: f,
    isVisitable: Lt
  });
  function P(R, k) {
    if (!h.isUndefined(R)) {
      if (A.indexOf(R) !== -1)
        throw Error("Circular reference detected in " + k.join("."));
      A.push(R), h.forEach(R, function(U, B) {
        (!(h.isUndefined(U) || U === null) && i.call(
          t,
          U,
          h.isString(B) ? B.trim() : B,
          k,
          _
        )) === !0 && P(U, k ? k.concat(B) : [B]);
      }), A.pop();
    }
  }
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return P(e), t;
}
function mr(e) {
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
const Vr = Jt.prototype;
Vr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Vr.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, mr);
  } : mr;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function yi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $r(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || yi;
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
class yr {
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
const Wr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gi = typeof URLSearchParams < "u" ? URLSearchParams : Jt, xi = typeof FormData < "u" ? FormData : null, Ei = typeof Blob < "u" ? Blob : null, vi = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gi,
    FormData: xi,
    Blob: Ei
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Kt = typeof window < "u" && typeof document < "u", Mt = typeof navigator == "object" && navigator || void 0, Ai = Kt && (!Mt || ["ReactNative", "NativeScript", "NS"].indexOf(Mt.product) < 0), Ri = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Si = Kt && window.location.href || "http://localhost", Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Kt,
  hasStandardBrowserEnv: Ai,
  hasStandardBrowserWebWorkerEnv: Ri,
  navigator: Mt,
  origin: Si
}, Symbol.toStringTag, { value: "Module" })), j = {
  ...Oi,
  ...vi
};
function _i(e, t) {
  return ht(e, new j.classes.URLSearchParams(), {
    visitor: function(r, n, i, a) {
      return j.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function ki(e) {
  return h.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ci(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function Jr(e) {
  function t(r, n, i, a) {
    let s = r[a++];
    if (s === "__proto__") return !0;
    const d = Number.isFinite(+s), p = a >= r.length;
    return s = !s && h.isArray(i) ? i.length : s, p ? (h.hasOwnProp(i, s) ? i[s] = [i[s], n] : i[s] = n, !d) : ((!i[s] || !h.isObject(i[s])) && (i[s] = []), t(r, n, i[s], a) && h.isArray(i[s]) && (i[s] = Ci(i[s])), !d);
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const r = {};
    return h.forEachEntry(e, (n, i) => {
      t(ki(n), i, r, 0);
    }), r;
  }
  return null;
}
function Ti(e, t, r) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const We = {
  transitional: Wr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = h.isObject(t);
    if (a && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t))
      return i ? JSON.stringify(Jr(t)) : t;
    if (h.isArrayBuffer(t) || h.isBuffer(t) || h.isStream(t) || h.isFile(t) || h.isBlob(t) || h.isReadableStream(t))
      return t;
    if (h.isArrayBufferView(t))
      return t.buffer;
    if (h.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let d;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return _i(t, this.formSerializer).toString();
      if ((d = h.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return ht(
          d ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Ti(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || We.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
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
  We.headers[e] = {};
});
const Fi = h.toObjectSet([
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
]), Pi = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), r = s.substring(0, i).trim().toLowerCase(), n = s.substring(i + 1).trim(), !(!r || t[r] && Fi[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, gr = /* @__PURE__ */ Symbol("internals");
function Me(e) {
  return e && String(e).trim().toLowerCase();
}
function tt(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(tt) : String(e);
}
function Bi(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Ui = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Ni(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Li(e, t) {
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
let J = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(d, p, f) {
      const x = Me(p);
      if (!x)
        throw new Error("header name must be a non-empty string");
      const A = h.findKey(i, x);
      (!A || i[A] === void 0 || f === !0 || f === void 0 && i[A] !== !1) && (i[A || p] = tt(d));
    }
    const s = (d, p) => h.forEach(d, (f, x) => a(f, x, p));
    if (h.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (h.isString(t) && (t = t.trim()) && !Ui(t))
      s(Pi(t), r);
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
    if (t = Me(t), t) {
      const n = h.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Bi(i);
        if (h.isFunction(r))
          return r.call(this, i, n);
        if (h.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Me(t), t) {
      const n = h.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || kt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(s) {
      if (s = Me(s), s) {
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
        r[s] = tt(i), delete r[a];
        return;
      }
      const d = t ? Ni(a) : String(a).trim();
      d !== a && delete r[a], r[d] = tt(i), n[d] = !0;
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
    const n = (this[gr] = this[gr] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(s) {
      const d = Me(s);
      n[d] || (Li(i, s), n[d] = !0);
    }
    return h.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
J.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(J.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(J);
function Ct(e, t) {
  const r = this || We, n = t || r, i = J.from(n.headers);
  let a = n.data;
  return h.forEach(e, function(d) {
    a = d.call(r, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function Kr(e) {
  return !!(e && e.__CANCEL__);
}
function ke(e, t, r) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, r), this.name = "CanceledError";
}
h.inherits(ke, F, {
  __CANCEL__: !0
});
function Gr(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new F(
    "Request failed with status code " + r.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Mi(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Di(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const f = Date.now(), x = n[a];
    s || (s = f), r[i] = p, n[i] = f;
    let A = a, _ = 0;
    for (; A !== i; )
      _ += r[A++], A = A % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), f - s < t)
      return;
    const P = x && f - x;
    return P ? Math.round(_ * 1e3 / P) : void 0;
  };
}
function Ii(e, t) {
  let r = 0, n = 1e3 / t, i, a;
  const s = (f, x = Date.now()) => {
    r = x, i = null, a && (clearTimeout(a), a = null), e(...f);
  };
  return [(...f) => {
    const x = Date.now(), A = x - r;
    A >= n ? s(f, x) : (i = f, a || (a = setTimeout(() => {
      a = null, s(i);
    }, n - A)));
  }, () => i && s(i)];
}
const st = (e, t, r = 3) => {
  let n = 0;
  const i = Di(50, 250);
  return Ii((a) => {
    const s = a.loaded, d = a.lengthComputable ? a.total : void 0, p = s - n, f = i(p), x = s <= d;
    n = s;
    const A = {
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
    e(A);
  }, r);
}, xr = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Er = (e) => (...t) => h.asap(() => e(...t)), Hi = j.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, j.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(j.origin),
  j.navigator && /(msie|trident)/i.test(j.navigator.userAgent)
) : () => !0, ji = j.hasStandardBrowserEnv ? (
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
function qi(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function zi(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Xr(e, t, r) {
  let n = !qi(t);
  return e && (n || r == !1) ? zi(e, t) : t;
}
const vr = (e) => e instanceof J ? { ...e } : e;
function me(e, t) {
  t = t || {};
  const r = {};
  function n(f, x, A, _) {
    return h.isPlainObject(f) && h.isPlainObject(x) ? h.merge.call({ caseless: _ }, f, x) : h.isPlainObject(x) ? h.merge({}, x) : h.isArray(x) ? x.slice() : x;
  }
  function i(f, x, A, _) {
    if (h.isUndefined(x)) {
      if (!h.isUndefined(f))
        return n(void 0, f, A, _);
    } else return n(f, x, A, _);
  }
  function a(f, x) {
    if (!h.isUndefined(x))
      return n(void 0, x);
  }
  function s(f, x) {
    if (h.isUndefined(x)) {
      if (!h.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, x);
  }
  function d(f, x, A) {
    if (A in t)
      return n(f, x);
    if (A in e)
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
    headers: (f, x, A) => i(vr(f), vr(x), A, !0)
  };
  return h.forEach(Object.keys({ ...e, ...t }), function(x) {
    const A = p[x] || i, _ = A(e[x], t[x], x);
    h.isUndefined(_) && A !== d || (r[x] = _);
  }), r;
}
const Yr = (e) => {
  const t = me({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: a, headers: s, auth: d } = t;
  t.headers = s = J.from(s), t.url = $r(Xr(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), d && s.set(
    "Authorization",
    "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))
  );
  let p;
  if (h.isFormData(r)) {
    if (j.hasStandardBrowserEnv || j.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((p = s.getContentType()) !== !1) {
      const [f, ...x] = p ? p.split(";").map((A) => A.trim()).filter(Boolean) : [];
      s.setContentType([f || "multipart/form-data", ...x].join("; "));
    }
  }
  if (j.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(t)), n || n !== !1 && Hi(t.url))) {
    const f = i && a && ji.read(a);
    f && s.set(i, f);
  }
  return t;
}, Vi = typeof XMLHttpRequest < "u", $i = Vi && function(e) {
  return new Promise(function(r, n) {
    const i = Yr(e);
    let a = i.data;
    const s = J.from(i.headers).normalize();
    let { responseType: d, onUploadProgress: p, onDownloadProgress: f } = i, x, A, _, P, R;
    function k() {
      P && P(), R && R(), i.cancelToken && i.cancelToken.unsubscribe(x), i.signal && i.signal.removeEventListener("abort", x);
    }
    let S = new XMLHttpRequest();
    S.open(i.method.toUpperCase(), i.url, !0), S.timeout = i.timeout;
    function U() {
      if (!S)
        return;
      const M = J.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), H = {
        data: !d || d === "text" || d === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: M,
        config: e,
        request: S
      };
      Gr(function(Q) {
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
      let K = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const H = i.transitional || Wr;
      i.timeoutErrorMessage && (K = i.timeoutErrorMessage), n(new F(
        K,
        H.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        e,
        S
      )), S = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in S && h.forEach(s.toJSON(), function(K, H) {
      S.setRequestHeader(H, K);
    }), h.isUndefined(i.withCredentials) || (S.withCredentials = !!i.withCredentials), d && d !== "json" && (S.responseType = i.responseType), f && ([_, R] = st(f, !0), S.addEventListener("progress", _)), p && S.upload && ([A, P] = st(p), S.upload.addEventListener("progress", A), S.upload.addEventListener("loadend", P)), (i.cancelToken || i.signal) && (x = (M) => {
      S && (n(!M || M.type ? new ke(null, e, S) : M), S.abort(), S = null);
    }, i.cancelToken && i.cancelToken.subscribe(x), i.signal && (i.signal.aborted ? x() : i.signal.addEventListener("abort", x)));
    const B = Mi(i.url);
    if (B && j.protocols.indexOf(B) === -1) {
      n(new F("Unsupported protocol " + B + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    S.send(a || null);
  });
}, Wi = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const a = function(f) {
      if (!i) {
        i = !0, d();
        const x = f instanceof Error ? f : this.reason;
        n.abort(x instanceof F ? x : new ke(x instanceof Error ? x.message : x));
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
}, Ji = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, Ki = async function* (e, t) {
  for await (const r of Gi(e))
    yield* Ji(r, t);
}, Gi = async function* (e) {
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
}, Ar = (e, t, r, n) => {
  const i = Ki(e, t);
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
        let A = x.byteLength;
        if (r) {
          let _ = a += A;
          r(_);
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
}, pt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Zr = pt && typeof ReadableStream == "function", Xi = pt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Qr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Yi = Zr && Qr(() => {
  let e = !1;
  const t = new Request(j.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Rr = 64 * 1024, Dt = Zr && Qr(() => h.isReadableStream(new Response("").body)), at = {
  stream: Dt && ((e) => e.body)
};
pt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !at[t] && (at[t] = h.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new F(`Response type '${t}' is not supported`, F.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Zi = async (e) => {
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
    return (await Xi(e)).byteLength;
}, Qi = async (e, t) => {
  const r = h.toFiniteNumber(e.getContentLength());
  return r ?? Zi(t);
}, eo = pt && (async (e) => {
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
    withCredentials: A = "same-origin",
    fetchOptions: _
  } = Yr(e);
  f = f ? (f + "").toLowerCase() : "text";
  let P = Wi([i, a && a.toAbortSignal()], s), R;
  const k = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let S;
  try {
    if (p && Yi && r !== "get" && r !== "head" && (S = await Qi(x, n)) !== 0) {
      let H = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), Z;
      if (h.isFormData(n) && (Z = H.headers.get("content-type")) && x.setContentType(Z), H.body) {
        const [Q, ye] = xr(
          S,
          st(Er(p))
        );
        n = Ar(H.body, Rr, Q, ye);
      }
    }
    h.isString(A) || (A = A ? "include" : "omit");
    const U = "credentials" in Request.prototype;
    R = new Request(t, {
      ..._,
      signal: P,
      method: r.toUpperCase(),
      headers: x.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: U ? A : void 0
    });
    let B = await fetch(R, _);
    const M = Dt && (f === "stream" || f === "response");
    if (Dt && (d || M && k)) {
      const H = {};
      ["status", "statusText", "headers"].forEach((L) => {
        H[L] = B[L];
      });
      const Z = h.toFiniteNumber(B.headers.get("content-length")), [Q, ye] = d && xr(
        Z,
        st(Er(d), !0)
      ) || [];
      B = new Response(
        Ar(B.body, Rr, Q, () => {
          ye && ye(), k && k();
        }),
        H
      );
    }
    f = f || "text";
    let K = await at[h.findKey(at, f) || "text"](B, e);
    return !M && k && k(), await new Promise((H, Z) => {
      Gr(H, Z, {
        data: K,
        headers: J.from(B.headers),
        status: B.status,
        statusText: B.statusText,
        config: e,
        request: R
      });
    });
  } catch (U) {
    throw k && k(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
      new F("Network Error", F.ERR_NETWORK, e, R),
      {
        cause: U.cause || U
      }
    ) : F.from(U, U && U.code, e, R);
  }
}), It = {
  http: bi,
  xhr: $i,
  fetch: eo
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
const Sr = (e) => `- ${e}`, to = (e) => h.isFunction(e) || e === null || e === !1, en = {
  getAdapter: (e) => {
    e = h.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let s;
      if (n = r, !to(r) && (n = It[(s = String(r)).toLowerCase()], n === void 0))
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
` + a.map(Sr).join(`
`) : " " + Sr(a[0]) : "as no adapter specified";
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
    throw new ke(null, e);
}
function Or(e) {
  return Tt(e), e.headers = J.from(e.headers), e.data = Ct.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), en.getAdapter(e.adapter || We.adapter)(e).then(function(n) {
    return Tt(e), n.data = Ct.call(
      e,
      e.transformResponse,
      n
    ), n.headers = J.from(n.headers), n;
  }, function(n) {
    return Kr(n) || (Tt(e), n && n.response && (n.response.data = Ct.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = J.from(n.response.headers))), Promise.reject(n);
  });
}
const tn = "1.11.0", bt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  bt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _r = {};
bt.transitional = function(t, r, n) {
  function i(a, s) {
    return "[Axios v" + tn + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, d) => {
    if (t === !1)
      throw new F(
        i(s, " has been removed" + (r ? " in " + r : "")),
        F.ERR_DEPRECATED
      );
    return r && !_r[s] && (_r[s] = !0, console.warn(
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
function ro(e, t, r) {
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
const rt = {
  assertOptions: ro,
  validators: bt
}, ee = rt.validators;
let we = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new yr(),
      response: new yr()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = me(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && rt.assertOptions(n, {
      silentJSONParsing: ee.transitional(ee.boolean),
      forcedJSONParsing: ee.transitional(ee.boolean),
      clarifyTimeoutError: ee.transitional(ee.boolean)
    }, !1), i != null && (h.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : rt.assertOptions(i, {
      encode: ee.function,
      serialize: ee.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), rt.assertOptions(r, {
      baseUrl: ee.spelling("baseURL"),
      withXsrfToken: ee.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = a && h.merge(
      a.common,
      a[r.method]
    );
    a && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (R) => {
        delete a[R];
      }
    ), r.headers = J.concat(s, a);
    const d = [];
    let p = !0;
    this.interceptors.request.forEach(function(k) {
      typeof k.runWhen == "function" && k.runWhen(r) === !1 || (p = p && k.synchronous, d.unshift(k.fulfilled, k.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(k) {
      f.push(k.fulfilled, k.rejected);
    });
    let x, A = 0, _;
    if (!p) {
      const R = [Or.bind(this), void 0];
      for (R.unshift(...d), R.push(...f), _ = R.length, x = Promise.resolve(r); A < _; )
        x = x.then(R[A++], R[A++]);
      return x;
    }
    _ = d.length;
    let P = r;
    for (A = 0; A < _; ) {
      const R = d[A++], k = d[A++];
      try {
        P = R(P);
      } catch (S) {
        k.call(this, S);
        break;
      }
    }
    try {
      x = Or.call(this, P);
    } catch (R) {
      return Promise.reject(R);
    }
    for (A = 0, _ = f.length; A < _; )
      x = x.then(f[A++], f[A++]);
    return x;
  }
  getUri(t) {
    t = me(this.defaults, t);
    const r = Xr(t.baseURL, t.url, t.allowAbsoluteUrls);
    return $r(r, t.params, t.paramsSerializer);
  }
};
h.forEach(["delete", "get", "head", "options"], function(t) {
  we.prototype[t] = function(r, n) {
    return this.request(me(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, s, d) {
      return this.request(me(d || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  we.prototype[t] = r(), we.prototype[t + "Form"] = r(!0);
});
let no = class rn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
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
      n.reason || (n.reason = new ke(a, s, d), r(n.reason));
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
      token: new rn(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function io(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function oo(e) {
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
function nn(e) {
  const t = new we(e), r = Br(we.prototype.request, t);
  return h.extend(r, we.prototype, t, { allOwnKeys: !0 }), h.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return nn(me(e, i));
  }, r;
}
const D = nn(We);
D.Axios = we;
D.CanceledError = ke;
D.CancelToken = no;
D.isCancel = Kr;
D.VERSION = tn;
D.toFormData = ht;
D.AxiosError = F;
D.Cancel = D.CanceledError;
D.all = function(t) {
  return Promise.all(t);
};
D.spread = io;
D.isAxiosError = oo;
D.mergeConfig = me;
D.AxiosHeaders = J;
D.formToJSON = (e) => Jr(h.isHTMLForm(e) ? new FormData(e) : e);
D.getAdapter = en.getAdapter;
D.HttpStatusCode = Ht;
D.default = D;
const {
  Axios: vo,
  AxiosError: Ao,
  CanceledError: Ro,
  isCancel: So,
  CancelToken: Oo,
  VERSION: _o,
  all: ko,
  Cancel: Co,
  isAxiosError: To,
  spread: Fo,
  toFormData: Po,
  AxiosHeaders: Bo,
  HttpStatusCode: Uo,
  formToJSON: No,
  getAdapter: Lo,
  mergeConfig: Mo
} = D, so = async () => {
  try {
    return (await D.get("https://api.ipify.org?format=json")).data.ip;
  } catch (e) {
    console.error("Error getting IP:", e);
  }
}, ao = async (e = 3e3, t = 200) => new Promise((r) => {
  const n = Date.now(), i = setInterval(() => {
    (jt() || Date.now() - n > e) && (clearInterval(i), r(jt()));
  }, t);
});
function jt() {
  return document.cookie.includes("__bbst=") && document.cookie.includes("__bbts=");
}
function qe(e) {
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
function Ze(e, t, r = {}) {
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
function co(e) {
  Array.isArray(e) || (e = [e]);
  const t = "Thu, 01 Jan 1970 00:00:00 GMT";
  e.forEach((r) => {
    document.cookie = `${r}=; Path=/; Expires=${t}`, document.cookie = `${r}=; Path=/; Domain=${location.hostname}; Expires=${t}`;
  });
}
const lo = "https://api.blockbots.org";
async function uo(e, t) {
  try {
    return (await D.post(
      lo + "/v1/js",
      e,
      {
        headers: {
          "X-API-Key": t,
          "Content-Type": "application/json"
        }
      }
    )).data;
  } catch (r) {
    return console.error("Request failed:", r.response?.data || r.message), r.response?.data;
  }
}
const kr = async (e) => {
  let t = {};
  const r = ae(navigator.userAgent);
  t.os = r.os.name, t.useragent = navigator.userAgent, t.fingerprint = await bn(), t.bl_fingerprint = await wn(), t.lang = navigator.language, t.ip = await so(), t.st = qe("__bbst"), t.ts = qe("__bbts"), console.log(t), await Cn();
  const n = await uo(t, e);
  n && n.status === !0 && n.__bbst && n.__bbts && (Ze("__bbst", n.__bbst, { "Max-Age": 240, Secure: !0 }), Ze("__bbts", n.__bbts, { "Max-Age": 240, Secure: !0 }), Ze("__bbjwt", n.__bbjwt, { "Max-Age": 240, Secure: !0 })), n && n.status === "forbidden" && Ze("__bb_decision", "1", { "Max-Age": 640, Secure: !0 });
};
async function fo(e) {
  return new Promise((t) => setTimeout(t, e));
}
const ho = "https://api.blockbots.org";
async function po() {
  try {
    const e = qe("__bbst"), t = qe("__bbts");
    if (!e || !t) return !1;
    const r = new URLSearchParams({
      st: e,
      ts: t
    });
    return (await D.get(ho + "/validate?" + r.toString())).status === 200;
  } catch {
    return co(["__bbst", "__bbts"]), !1;
  }
}
function bo(e, t) {
  return t = { exports: {} }, e(t, t.exports), t.exports;
}
var le = bo(function(e, t) {
  (function(r) {
    var n = "function", i = "isNode", a = function(p, f) {
      return typeof p === f;
    }, s = function(p, f) {
      f !== null && (Array.isArray(f) ? f.map(function(x) {
        return s(p, x);
      }) : (d[i](f) || (f = document.createTextNode(f)), p.appendChild(f)));
    };
    function d(p, f) {
      var x = arguments, A = 1, _, P;
      if (p = d.isElement(p) ? p : document.createElement(p), a(f, "object") && !d[i](f) && !Array.isArray(f)) {
        A++;
        for (_ in f)
          P = f[_], _ = d.attrMap[_] || _, a(_, n) ? _(p, P) : a(P, n) ? p[_] = P : p.setAttribute(_, P);
      }
      for (; A < x.length; A++)
        s(p, x[A]);
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
function wo() {
  if (qt) return;
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
function mo() {
  const e = document.getElementById("loader-status"), t = document.getElementById("loader");
  t && t.remove(), e && (e.textContent = "Access blocked. Automated traffic detected.", e.style.color = "#e5533d", e.style.fontWeight = "600");
}
function yo() {
  document.body.innerHTML = "", qt = !1;
}
async function go({ apiKey: e, retries: t, delay: r, ui: n }) {
  n && wo();
  for (let i = 0; i < t && !qe("__bb_decision"); i++)
    if (!(!jt() && (await kr(e), !await ao()))) {
      if (await po())
        return n && yo(), !0;
      await kr(e), await fo(r);
    }
  return n && mo(), !1;
}
class Do {
  constructor({
    apiKey: t,
    retries: r = 3,
    delay: n = 1e3,
    ui: i = !0
  }) {
    if (!t)
      throw new Error("BlockBots: apiKey is required");
    this.apiKey = t, this.retries = r, this.delay = n, this.ui = !0, this.hooks = on();
  }
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
      return await go({
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
  Do as BlockBots
};
