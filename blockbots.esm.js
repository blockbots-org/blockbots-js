(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('button{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body.theme-dark{background-color:#222;color:#d9d9d9}body.theme-dark a{color:#fff}body.theme-dark a:hover{text-decoration:underline;color:#ee730a}body.theme-dark .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-dark .font-red{color:#b20f03}body.theme-dark .ctp-button{background-color:#4693ff;color:#1d1d1d}body.theme-dark #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body.theme-dark #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}body.theme-light{background-color:#fff;color:#313131}body.theme-light a{color:#0051c3}body.theme-light a:hover{text-decoration:underline;color:#ee730a}body.theme-light .lds-ring div{border-color:#595959 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-light .font-red{color:#fc574a}body.theme-light .ctp-button{border-color:#003681;background-color:#003681;color:#fff}body.theme-light #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=)}body.theme-light #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}a{transition:color .15s ease;background-color:#0000;text-decoration:none;color:#0051c3}a:hover{text-decoration:underline;color:#ee730a}.main-content{margin:8rem auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem}.main-content .loading-verifying{height:76.391px}.spacer{margin:2rem 0}.spacer-top{margin-top:4rem}.spacer-bottom{margin-bottom:2rem}.heading-favicon{margin-right:.5rem;width:2rem;height:2rem}@media(max-width:720px){.main-content{margin-top:4rem}.heading-favicon{width:1.5rem;height:1.5rem}}.main-wrapper{display:flex;flex:1;flex-direction:column;align-items:center}.font-red{color:#b20f03}.h1{line-height:3.75rem;font-size:2.5rem;font-weight:500}.core-msg{line-height:2.25rem;font-size:1.5rem;font-weight:400}.body-text{line-height:1.25rem;font-size:1rem;font-weight:400}@media(max-width:720px){.h1{line-height:1.75rem;font-size:1.5rem}.h2{line-height:1.5rem;font-size:1.25rem}.core-msg{line-height:1.5rem;font-size:1rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}#challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=);background-repeat:no-repeat;background-size:contain;padding-left:42px}.text-center{text-align:center}.ctp-button{transition-duration:.2s;transition-property:background-color,border-color,color;transition-timing-function:ease;margin:2rem 0;border:.063rem solid #0051c3;border-radius:.313rem;background-color:#0051c3;cursor:pointer;padding:.375rem 1rem;line-height:1.313rem;color:#fff;font-size:.875rem}.ctp-button:hover{border-color:#003681;background-color:#003681;cursor:pointer;color:#fff}.footer{margin:0 auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem;line-height:1.125rem;font-size:.75rem}.footer-inner{border-top:1px solid #d9d9d9;padding-top:1rem;padding-bottom:1rem}.clearfix:after{display:table;clear:both;content:""}.clearfix .column{float:left;padding-right:1.5rem;width:50%}.diagnostic-wrapper{margin-bottom:.5rem}.footer .ray-id{text-align:center}.footer .ray-id code{font-family:monaco,courier,monospace}.core-msg,.zone-name-title{overflow-wrap:break-word}@media(max-width:720px){.diagnostic-wrapper{display:flex;flex-wrap:wrap;justify-content:center}.clearfix:after{display:initial;clear:none;text-align:center;content:none}.column{padding-bottom:2rem}.clearfix .column{float:none;padding:0;width:auto;word-break:keep-all}.zone-name-title{margin-bottom:1rem}}.loading-verifying{height:76.391px}.lds-ring{display:inline-block;position:relative;width:1.875rem;height:1.875rem}.lds-ring div{box-sizing:border-box;display:block;position:absolute;border:.3rem solid #595959;border-radius:50%;border-color:#313131 rgba(0,0,0,0) rgba(0,0,0,0);width:1.875rem;height:1.875rem;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.rtl .heading-favicon{margin-right:0;margin-left:.5rem}.rtl #challenge-success-text{background-position:right;padding-right:42px;padding-left:0}.rtl #challenge-error-text{background-position:right;padding-right:34px;padding-left:0}.challenge-content .loading-verifying{height:76.391px}@media(prefers-color-scheme:dark){body{background-color:#222;color:#d9d9d9}body a{color:#fff}body a:hover{text-decoration:underline;color:#ee730a}body .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body .font-red{color:#b20f03}body .ctp-button{background-color:#4693ff;color:#1d1d1d}body #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}}*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{display:flex;flex-direction:column;height:100vh;min-height:100vh}.main-content{margin:8rem auto;padding-left:1.5rem;max-width:60rem}@media(max-width:720px){.main-content{margin-top:4rem}}.h2{line-height:2.25rem;font-size:1.5rem;font-weight:500}@media(max-width:720px){.h2{line-height:1.5rem;font-size:1.25rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}@media(prefers-color-scheme:dark){body{background-color:#222;color:#d9d9d9}}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
function id() {
  const r = {
    verified: [],
    blocked: [],
    error: []
  };
  return {
    on(n, a) {
      r[n]?.push(a);
    },
    emit(n, a) {
      for (const s of r[n] || [])
        try {
          s(a);
        } catch (c) {
          console.error("BlockBots hook error:", c);
        }
    }
  };
}
function od(r, n = 0) {
  n = n || 0;
  let a = 3735928559 ^ n, s = 1103547991 ^ n;
  for (let c = 0; c < r.length; c++) {
    const p = r[c];
    a = Math.imul(a ^ p, 2654435761), s = Math.imul(s ^ p, 1597334677);
  }
  return a = Math.imul(a ^ a >>> 16, 2246822507) ^ Math.imul(s ^ s >>> 13, 3266489909), s = Math.imul(s ^ s >>> 16, 2246822507) ^ Math.imul(a ^ a >>> 13, 3266489909), 4294967296 * (2097151 & s) + (a >>> 0);
}
var ad = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sd(r) {
  if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
  var n = r.default;
  if (typeof n == "function") {
    var a = function s() {
      var c = !1;
      try {
        c = this instanceof s;
      } catch {
      }
      return c ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    a.prototype = n.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(r).forEach(function(s) {
    var c = Object.getOwnPropertyDescriptor(r, s);
    Object.defineProperty(a, s, c.get ? c : {
      enumerable: !0,
      get: function() {
        return r[s];
      }
    });
  }), a;
}
var Io = { exports: {} };
const ld = {}, cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ld
}, Symbol.toStringTag, { value: "Module" })), Gs = /* @__PURE__ */ sd(cd);
var Ys;
function ud() {
  return Ys || (Ys = 1, (function(r) {
    (function() {
      var n = "input is invalid type", a = "finalize already called", s = typeof window == "object", c = s ? window : {};
      c.JS_MD5_NO_WINDOW && (s = !1);
      var p = !s && typeof self == "object", h = !c.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      h ? c = ad : p && (c = self);
      var E = !c.JS_MD5_NO_COMMON_JS && !0 && r.exports, A = !c.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", k = "0123456789abcdef".split(""), M = [128, 32768, 8388608, -2147483648], U = [0, 8, 16, 24], X = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), B = [], Z;
      if (A) {
        var j = new ArrayBuffer(68);
        Z = new Uint8Array(j), B = new Uint32Array(j);
      }
      var pe = Array.isArray;
      (c.JS_MD5_NO_NODE_JS || !pe) && (pe = function(d) {
        return Object.prototype.toString.call(d) === "[object Array]";
      });
      var ve = ArrayBuffer.isView;
      A && (c.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ve) && (ve = function(d) {
        return typeof d == "object" && d.buffer && d.buffer.constructor === ArrayBuffer;
      });
      var Ae = function(d) {
        var g = typeof d;
        if (g === "string")
          return [d, !0];
        if (g !== "object" || d === null)
          throw new Error(n);
        if (A && d.constructor === ArrayBuffer)
          return [new Uint8Array(d), !1];
        if (!pe(d) && !ve(d))
          throw new Error(n);
        return [d, !1];
      }, Le = function(d) {
        return function(g) {
          return new ie(!0).update(g)[d]();
        };
      }, Ce = function() {
        var d = Le("hex");
        h && (d = Ve(d)), d.create = function() {
          return new ie();
        }, d.update = function(v) {
          return d.create().update(v);
        };
        for (var g = 0; g < X.length; ++g) {
          var w = X[g];
          d[w] = Le(w);
        }
        return d;
      }, Ve = function(d) {
        var g = Gs, w = Gs.Buffer, v;
        w.from && !c.JS_MD5_NO_BUFFER_FROM ? v = w.from : v = function(N) {
          return new w(N);
        };
        var q = function(N) {
          if (typeof N == "string")
            return g.createHash("md5").update(N, "utf8").digest("hex");
          if (N == null)
            throw new Error(n);
          return N.constructor === ArrayBuffer && (N = new Uint8Array(N)), pe(N) || ve(N) || N.constructor === w ? g.createHash("md5").update(v(N)).digest("hex") : d(N);
        };
        return q;
      }, ut = function(d) {
        return function(g, w) {
          return new Ue(g, !0).update(w)[d]();
        };
      }, Je = function() {
        var d = ut("hex");
        d.create = function(v) {
          return new Ue(v);
        }, d.update = function(v, q) {
          return d.create(v).update(q);
        };
        for (var g = 0; g < X.length; ++g) {
          var w = X[g];
          d[w] = ut(w);
        }
        return d;
      };
      function ie(d) {
        if (d)
          B[0] = B[16] = B[1] = B[2] = B[3] = B[4] = B[5] = B[6] = B[7] = B[8] = B[9] = B[10] = B[11] = B[12] = B[13] = B[14] = B[15] = 0, this.blocks = B, this.buffer8 = Z;
        else if (A) {
          var g = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(g), this.blocks = new Uint32Array(g);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      ie.prototype.update = function(d) {
        if (this.finalized)
          throw new Error(a);
        var g = Ae(d);
        d = g[0];
        for (var w = g[1], v, q = 0, N, D = d.length, K = this.blocks, nt = this.buffer8; q < D; ) {
          if (this.hashed && (this.hashed = !1, K[0] = K[16], K[16] = K[1] = K[2] = K[3] = K[4] = K[5] = K[6] = K[7] = K[8] = K[9] = K[10] = K[11] = K[12] = K[13] = K[14] = K[15] = 0), w)
            if (A)
              for (N = this.start; q < D && N < 64; ++q)
                v = d.charCodeAt(q), v < 128 ? nt[N++] = v : v < 2048 ? (nt[N++] = 192 | v >>> 6, nt[N++] = 128 | v & 63) : v < 55296 || v >= 57344 ? (nt[N++] = 224 | v >>> 12, nt[N++] = 128 | v >>> 6 & 63, nt[N++] = 128 | v & 63) : (v = 65536 + ((v & 1023) << 10 | d.charCodeAt(++q) & 1023), nt[N++] = 240 | v >>> 18, nt[N++] = 128 | v >>> 12 & 63, nt[N++] = 128 | v >>> 6 & 63, nt[N++] = 128 | v & 63);
            else
              for (N = this.start; q < D && N < 64; ++q)
                v = d.charCodeAt(q), v < 128 ? K[N >>> 2] |= v << U[N++ & 3] : v < 2048 ? (K[N >>> 2] |= (192 | v >>> 6) << U[N++ & 3], K[N >>> 2] |= (128 | v & 63) << U[N++ & 3]) : v < 55296 || v >= 57344 ? (K[N >>> 2] |= (224 | v >>> 12) << U[N++ & 3], K[N >>> 2] |= (128 | v >>> 6 & 63) << U[N++ & 3], K[N >>> 2] |= (128 | v & 63) << U[N++ & 3]) : (v = 65536 + ((v & 1023) << 10 | d.charCodeAt(++q) & 1023), K[N >>> 2] |= (240 | v >>> 18) << U[N++ & 3], K[N >>> 2] |= (128 | v >>> 12 & 63) << U[N++ & 3], K[N >>> 2] |= (128 | v >>> 6 & 63) << U[N++ & 3], K[N >>> 2] |= (128 | v & 63) << U[N++ & 3]);
          else if (A)
            for (N = this.start; q < D && N < 64; ++q)
              nt[N++] = d[q];
          else
            for (N = this.start; q < D && N < 64; ++q)
              K[N >>> 2] |= d[q] << U[N++ & 3];
          this.lastByteIndex = N, this.bytes += N - this.start, N >= 64 ? (this.start = N - 64, this.hash(), this.hashed = !0) : this.start = N;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, ie.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var d = this.blocks, g = this.lastByteIndex;
          d[g >>> 2] |= M[g & 3], g >= 56 && (this.hashed || this.hash(), d[0] = d[16], d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0), d[14] = this.bytes << 3, d[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, ie.prototype.hash = function() {
        var d, g, w, v, q, N, D = this.blocks;
        this.first ? (d = D[0] - 680876937, d = (d << 7 | d >>> 25) - 271733879 << 0, v = (-1732584194 ^ d & 2004318071) + D[1] - 117830708, v = (v << 12 | v >>> 20) + d << 0, w = (-271733879 ^ v & (d ^ -271733879)) + D[2] - 1126478375, w = (w << 17 | w >>> 15) + v << 0, g = (d ^ w & (v ^ d)) + D[3] - 1316259209, g = (g << 22 | g >>> 10) + w << 0) : (d = this.h0, g = this.h1, w = this.h2, v = this.h3, d += (v ^ g & (w ^ v)) + D[0] - 680876936, d = (d << 7 | d >>> 25) + g << 0, v += (w ^ d & (g ^ w)) + D[1] - 389564586, v = (v << 12 | v >>> 20) + d << 0, w += (g ^ v & (d ^ g)) + D[2] + 606105819, w = (w << 17 | w >>> 15) + v << 0, g += (d ^ w & (v ^ d)) + D[3] - 1044525330, g = (g << 22 | g >>> 10) + w << 0), d += (v ^ g & (w ^ v)) + D[4] - 176418897, d = (d << 7 | d >>> 25) + g << 0, v += (w ^ d & (g ^ w)) + D[5] + 1200080426, v = (v << 12 | v >>> 20) + d << 0, w += (g ^ v & (d ^ g)) + D[6] - 1473231341, w = (w << 17 | w >>> 15) + v << 0, g += (d ^ w & (v ^ d)) + D[7] - 45705983, g = (g << 22 | g >>> 10) + w << 0, d += (v ^ g & (w ^ v)) + D[8] + 1770035416, d = (d << 7 | d >>> 25) + g << 0, v += (w ^ d & (g ^ w)) + D[9] - 1958414417, v = (v << 12 | v >>> 20) + d << 0, w += (g ^ v & (d ^ g)) + D[10] - 42063, w = (w << 17 | w >>> 15) + v << 0, g += (d ^ w & (v ^ d)) + D[11] - 1990404162, g = (g << 22 | g >>> 10) + w << 0, d += (v ^ g & (w ^ v)) + D[12] + 1804603682, d = (d << 7 | d >>> 25) + g << 0, v += (w ^ d & (g ^ w)) + D[13] - 40341101, v = (v << 12 | v >>> 20) + d << 0, w += (g ^ v & (d ^ g)) + D[14] - 1502002290, w = (w << 17 | w >>> 15) + v << 0, g += (d ^ w & (v ^ d)) + D[15] + 1236535329, g = (g << 22 | g >>> 10) + w << 0, d += (w ^ v & (g ^ w)) + D[1] - 165796510, d = (d << 5 | d >>> 27) + g << 0, v += (g ^ w & (d ^ g)) + D[6] - 1069501632, v = (v << 9 | v >>> 23) + d << 0, w += (d ^ g & (v ^ d)) + D[11] + 643717713, w = (w << 14 | w >>> 18) + v << 0, g += (v ^ d & (w ^ v)) + D[0] - 373897302, g = (g << 20 | g >>> 12) + w << 0, d += (w ^ v & (g ^ w)) + D[5] - 701558691, d = (d << 5 | d >>> 27) + g << 0, v += (g ^ w & (d ^ g)) + D[10] + 38016083, v = (v << 9 | v >>> 23) + d << 0, w += (d ^ g & (v ^ d)) + D[15] - 660478335, w = (w << 14 | w >>> 18) + v << 0, g += (v ^ d & (w ^ v)) + D[4] - 405537848, g = (g << 20 | g >>> 12) + w << 0, d += (w ^ v & (g ^ w)) + D[9] + 568446438, d = (d << 5 | d >>> 27) + g << 0, v += (g ^ w & (d ^ g)) + D[14] - 1019803690, v = (v << 9 | v >>> 23) + d << 0, w += (d ^ g & (v ^ d)) + D[3] - 187363961, w = (w << 14 | w >>> 18) + v << 0, g += (v ^ d & (w ^ v)) + D[8] + 1163531501, g = (g << 20 | g >>> 12) + w << 0, d += (w ^ v & (g ^ w)) + D[13] - 1444681467, d = (d << 5 | d >>> 27) + g << 0, v += (g ^ w & (d ^ g)) + D[2] - 51403784, v = (v << 9 | v >>> 23) + d << 0, w += (d ^ g & (v ^ d)) + D[7] + 1735328473, w = (w << 14 | w >>> 18) + v << 0, g += (v ^ d & (w ^ v)) + D[12] - 1926607734, g = (g << 20 | g >>> 12) + w << 0, q = g ^ w, d += (q ^ v) + D[5] - 378558, d = (d << 4 | d >>> 28) + g << 0, v += (q ^ d) + D[8] - 2022574463, v = (v << 11 | v >>> 21) + d << 0, N = v ^ d, w += (N ^ g) + D[11] + 1839030562, w = (w << 16 | w >>> 16) + v << 0, g += (N ^ w) + D[14] - 35309556, g = (g << 23 | g >>> 9) + w << 0, q = g ^ w, d += (q ^ v) + D[1] - 1530992060, d = (d << 4 | d >>> 28) + g << 0, v += (q ^ d) + D[4] + 1272893353, v = (v << 11 | v >>> 21) + d << 0, N = v ^ d, w += (N ^ g) + D[7] - 155497632, w = (w << 16 | w >>> 16) + v << 0, g += (N ^ w) + D[10] - 1094730640, g = (g << 23 | g >>> 9) + w << 0, q = g ^ w, d += (q ^ v) + D[13] + 681279174, d = (d << 4 | d >>> 28) + g << 0, v += (q ^ d) + D[0] - 358537222, v = (v << 11 | v >>> 21) + d << 0, N = v ^ d, w += (N ^ g) + D[3] - 722521979, w = (w << 16 | w >>> 16) + v << 0, g += (N ^ w) + D[6] + 76029189, g = (g << 23 | g >>> 9) + w << 0, q = g ^ w, d += (q ^ v) + D[9] - 640364487, d = (d << 4 | d >>> 28) + g << 0, v += (q ^ d) + D[12] - 421815835, v = (v << 11 | v >>> 21) + d << 0, N = v ^ d, w += (N ^ g) + D[15] + 530742520, w = (w << 16 | w >>> 16) + v << 0, g += (N ^ w) + D[2] - 995338651, g = (g << 23 | g >>> 9) + w << 0, d += (w ^ (g | ~v)) + D[0] - 198630844, d = (d << 6 | d >>> 26) + g << 0, v += (g ^ (d | ~w)) + D[7] + 1126891415, v = (v << 10 | v >>> 22) + d << 0, w += (d ^ (v | ~g)) + D[14] - 1416354905, w = (w << 15 | w >>> 17) + v << 0, g += (v ^ (w | ~d)) + D[5] - 57434055, g = (g << 21 | g >>> 11) + w << 0, d += (w ^ (g | ~v)) + D[12] + 1700485571, d = (d << 6 | d >>> 26) + g << 0, v += (g ^ (d | ~w)) + D[3] - 1894986606, v = (v << 10 | v >>> 22) + d << 0, w += (d ^ (v | ~g)) + D[10] - 1051523, w = (w << 15 | w >>> 17) + v << 0, g += (v ^ (w | ~d)) + D[1] - 2054922799, g = (g << 21 | g >>> 11) + w << 0, d += (w ^ (g | ~v)) + D[8] + 1873313359, d = (d << 6 | d >>> 26) + g << 0, v += (g ^ (d | ~w)) + D[15] - 30611744, v = (v << 10 | v >>> 22) + d << 0, w += (d ^ (v | ~g)) + D[6] - 1560198380, w = (w << 15 | w >>> 17) + v << 0, g += (v ^ (w | ~d)) + D[13] + 1309151649, g = (g << 21 | g >>> 11) + w << 0, d += (w ^ (g | ~v)) + D[4] - 145523070, d = (d << 6 | d >>> 26) + g << 0, v += (g ^ (d | ~w)) + D[11] - 1120210379, v = (v << 10 | v >>> 22) + d << 0, w += (d ^ (v | ~g)) + D[2] + 718787259, w = (w << 15 | w >>> 17) + v << 0, g += (v ^ (w | ~d)) + D[9] - 343485551, g = (g << 21 | g >>> 11) + w << 0, this.first ? (this.h0 = d + 1732584193 << 0, this.h1 = g - 271733879 << 0, this.h2 = w - 1732584194 << 0, this.h3 = v + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + d << 0, this.h1 = this.h1 + g << 0, this.h2 = this.h2 + w << 0, this.h3 = this.h3 + v << 0);
      }, ie.prototype.hex = function() {
        this.finalize();
        var d = this.h0, g = this.h1, w = this.h2, v = this.h3;
        return k[d >>> 4 & 15] + k[d & 15] + k[d >>> 12 & 15] + k[d >>> 8 & 15] + k[d >>> 20 & 15] + k[d >>> 16 & 15] + k[d >>> 28 & 15] + k[d >>> 24 & 15] + k[g >>> 4 & 15] + k[g & 15] + k[g >>> 12 & 15] + k[g >>> 8 & 15] + k[g >>> 20 & 15] + k[g >>> 16 & 15] + k[g >>> 28 & 15] + k[g >>> 24 & 15] + k[w >>> 4 & 15] + k[w & 15] + k[w >>> 12 & 15] + k[w >>> 8 & 15] + k[w >>> 20 & 15] + k[w >>> 16 & 15] + k[w >>> 28 & 15] + k[w >>> 24 & 15] + k[v >>> 4 & 15] + k[v & 15] + k[v >>> 12 & 15] + k[v >>> 8 & 15] + k[v >>> 20 & 15] + k[v >>> 16 & 15] + k[v >>> 28 & 15] + k[v >>> 24 & 15];
      }, ie.prototype.toString = ie.prototype.hex, ie.prototype.digest = function() {
        this.finalize();
        var d = this.h0, g = this.h1, w = this.h2, v = this.h3;
        return [
          d & 255,
          d >>> 8 & 255,
          d >>> 16 & 255,
          d >>> 24 & 255,
          g & 255,
          g >>> 8 & 255,
          g >>> 16 & 255,
          g >>> 24 & 255,
          w & 255,
          w >>> 8 & 255,
          w >>> 16 & 255,
          w >>> 24 & 255,
          v & 255,
          v >>> 8 & 255,
          v >>> 16 & 255,
          v >>> 24 & 255
        ];
      }, ie.prototype.array = ie.prototype.digest, ie.prototype.arrayBuffer = function() {
        this.finalize();
        var d = new ArrayBuffer(16), g = new Uint32Array(d);
        return g[0] = this.h0, g[1] = this.h1, g[2] = this.h2, g[3] = this.h3, d;
      }, ie.prototype.buffer = ie.prototype.arrayBuffer, ie.prototype.base64 = function() {
        for (var d, g, w, v = "", q = this.array(), N = 0; N < 15; )
          d = q[N++], g = q[N++], w = q[N++], v += re[d >>> 2] + re[(d << 4 | g >>> 4) & 63] + re[(g << 2 | w >>> 6) & 63] + re[w & 63];
        return d = q[N], v += re[d >>> 2] + re[d << 4 & 63] + "==", v;
      };
      function Ue(d, g) {
        var w, v = Ae(d);
        if (d = v[0], v[1]) {
          var q = [], N = d.length, D = 0, K;
          for (w = 0; w < N; ++w)
            K = d.charCodeAt(w), K < 128 ? q[D++] = K : K < 2048 ? (q[D++] = 192 | K >>> 6, q[D++] = 128 | K & 63) : K < 55296 || K >= 57344 ? (q[D++] = 224 | K >>> 12, q[D++] = 128 | K >>> 6 & 63, q[D++] = 128 | K & 63) : (K = 65536 + ((K & 1023) << 10 | d.charCodeAt(++w) & 1023), q[D++] = 240 | K >>> 18, q[D++] = 128 | K >>> 12 & 63, q[D++] = 128 | K >>> 6 & 63, q[D++] = 128 | K & 63);
          d = q;
        }
        d.length > 64 && (d = new ie(!0).update(d).array());
        var nt = [], Ut = [];
        for (w = 0; w < 64; ++w) {
          var xr = d[w] || 0;
          nt[w] = 92 ^ xr, Ut[w] = 54 ^ xr;
        }
        ie.call(this, g), this.update(Ut), this.oKeyPad = nt, this.inner = !0, this.sharedMemory = g;
      }
      Ue.prototype = new ie(), Ue.prototype.finalize = function() {
        if (ie.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var d = this.array();
          ie.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(d), ie.prototype.finalize.call(this);
        }
      };
      var rt = Ce();
      rt.md5 = rt, rt.md5.hmac = Je(), E ? r.exports = rt : c.md5 = rt;
    })();
  })(Io)), Io.exports;
}
var fd = ud();
const Rl = () => {
  const r = document.createElement("canvas");
  return !!(r.getContext && r.getContext("2d"));
}, dd = () => {
  if (!Rl()) return "None";
  const r = document.createElement("canvas"), n = r.getContext("2d"), a = "BlockBots,org <canvas>";
  r.setAttribute("width", 220), r.setAttribute("height", 30);
  try {
    n.textBaseline = "top", n.font = "14px 'Arial'", n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.fillText(a, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.7)", n.fillText(a, 4, 17);
  } catch {
    console.log("Canvas not supported");
  }
  let s = r.toDataURL().split(",")[1], c = atob(s), p = new Uint8Array(c.length);
  for (let h = 0; h < c.length; h++)
    p[h] = c.charCodeAt(h);
  return od(p).toString();
}, hd = () => {
  if (!Rl()) return "None";
  const r = document.createElement("canvas"), n = r.getContext("2d"), a = "BrowserLeaks,com <canvas> 1.0";
  r.setAttribute("width", 220), r.setAttribute("height", 30);
  try {
    n.textBaseline = "top", n.font = "14px 'Arial'", n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.fillText(a, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.7)", n.fillText(a, 4, 17);
  } catch {
    console.log("Canvas not supported");
  }
  let s = r.toDataURL().split(",")[1], c = atob(s), p = new Uint8Array(c.length);
  for (let h = 0; h < c.length; h++)
    p[h] = c.charCodeAt(h);
  return fd.md5(p);
}, pd = () => new Promise((r, n) => {
  r(dd());
}), vd = () => new Promise((r, n) => {
  r(hd());
});
var gd = "2.0.4", Go = 500, Js = "user-agent", Qr = "", Xs = "?", xi = "function", yr = "undefined", en = "object", Yo = "string", vt = "browser", sr = "cpu", Qt = "device", Nt = "engine", It = "os", Xr = "result", I = "name", T = "type", F = "vendor", $ = "version", gt = "architecture", Dn = "major", O = "model", $n = "console", oe = "mobile", Se = "tablet", Ye = "smarttv", Xt = "wearable", pi = "xr", Nn = "embedded", Rn = "inapp", aa = "brands", Mr = "formFactors", sa = "fullVersionList", Zr = "platform", la = "platformVersion", Ci = "bitness", _r = "sec-ch-ua", bd = _r + "-full-version-list", md = _r + "-arch", wd = _r + "-" + Ci, yd = _r + "-form-factors", _d = _r + "-" + oe, xd = _r + "-" + O, Tl = _r + "-" + Zr, Ed = Tl + "-version", Ol = [aa, sa, oe, O, Zr, la, gt, Mr, Ci], vi = "Amazon", Yr = "Apple", Zs = "ASUS", Qs = "BlackBerry", Lr = "Google", el = "Huawei", Lo = "Lenovo", tl = "Honor", gi = "LG", Mo = "Microsoft", $o = "Motorola", No = "Nvidia", rl = "OnePlus", Do = "OPPO", Tn = "Samsung", nl = "Sharp", On = "Sony", Uo = "Xiaomi", Bo = "Zebra", il = "Chrome", ol = "Chromium", br = "Chromecast", mi = "Edge", Pn = "Firefox", Fn = "Opera", jo = "Facebook", al = "Sogou", Jr = "Mobile ", In = " Browser", Jo = "Windows", kd = typeof window !== yr, bt = kd && window.navigator ? window.navigator : void 0, wr = bt && bt.userAgentData ? bt.userAgentData : void 0, Sd = function(r, n) {
  var a = {}, s = n;
  if (!Ei(n)) {
    s = {};
    for (var c in n)
      for (var p in n[c])
        s[p] = n[c][p].concat(s[p] ? s[p] : []);
  }
  for (var h in r)
    a[h] = s[h] && s[h].length % 2 === 0 ? s[h].concat(r[h]) : r[h];
  return a;
}, Ri = function(r) {
  for (var n = {}, a = 0; a < r.length; a++)
    n[r[a].toUpperCase()] = r[a];
  return n;
}, Xo = function(r, n) {
  if (typeof r === en && r.length > 0) {
    for (var a in r)
      if (lr(n) == lr(r[a])) return !0;
    return !1;
  }
  return rn(r) ? lr(n) == lr(r) : !1;
}, Ei = function(r, n) {
  for (var a in r)
    return /^(browser|cpu|device|engine|os)$/.test(a) || (n ? Ei(r[a]) : !1);
}, rn = function(r) {
  return typeof r === Yo;
}, Ho = function(r) {
  if (r) {
    for (var n = [], a = tn(/\\?\"/g, r).split(","), s = 0; s < a.length; s++)
      if (a[s].indexOf(";") > -1) {
        var c = ki(a[s]).split(";v=");
        n[s] = { brand: c[0], version: c[1] };
      } else
        n[s] = ki(a[s]);
    return n;
  }
}, lr = function(r) {
  return rn(r) ? r.toLowerCase() : r;
}, zo = function(r) {
  return rn(r) ? tn(/[^\d\.]/g, r).split(".")[0] : void 0;
}, cr = function(r) {
  for (var n in r) {
    var a = r[n];
    typeof a == en && a.length == 2 ? this[a[0]] = a[1] : this[a] = void 0;
  }
  return this;
}, tn = function(r, n) {
  return rn(n) ? n.replace(r, Qr) : n;
}, Ln = function(r) {
  return tn(/\\?\"/g, r);
}, ki = function(r, n) {
  if (rn(r))
    return r = tn(/^\s\s*/, r), typeof n === yr ? r : r.substring(0, Go);
}, Vo = function(r, n) {
  if (!(!r || !n))
    for (var a = 0, s, c, p, h, E, A; a < n.length && !E; ) {
      var k = n[a], M = n[a + 1];
      for (s = c = 0; s < k.length && !E && k[s]; )
        if (E = k[s++].exec(r), E)
          for (p = 0; p < M.length; p++)
            A = E[++c], h = M[p], typeof h === en && h.length > 0 ? h.length === 2 ? typeof h[1] == xi ? this[h[0]] = h[1].call(this, A) : this[h[0]] = h[1] : h.length >= 3 && (typeof h[1] === xi && !(h[1].exec && h[1].test) ? h.length > 3 ? this[h[0]] = A ? h[1].apply(this, h.slice(2)) : void 0 : this[h[0]] = A ? h[1].call(this, A, h[2]) : void 0 : h.length == 3 ? this[h[0]] = A ? A.replace(h[1], h[2]) : void 0 : h.length == 4 ? this[h[0]] = A ? h[3].call(this, A.replace(h[1], h[2])) : void 0 : h.length > 4 && (this[h[0]] = A ? h[3].apply(this, [A.replace(h[1], h[2])].concat(h.slice(4))) : void 0)) : this[h] = A || void 0;
      a += 2;
    }
}, Zt = function(r, n) {
  for (var a in n)
    if (typeof n[a] === en && n[a].length > 0) {
      for (var s = 0; s < n[a].length; s++)
        if (Xo(n[a][s], r))
          return a === Xs ? void 0 : a;
    } else if (Xo(n[a], r))
      return a === Xs ? void 0 : a;
  return n.hasOwnProperty("*") ? n["*"] : r;
}, sl = {
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
}, ll = {
  embedded: "Automotive",
  mobile: "Mobile",
  tablet: ["Tablet", "EInk"],
  smarttv: "TV",
  wearable: "Watch",
  xr: ["VR", "XR"],
  "?": ["Desktop", "Unknown"],
  "*": void 0
}, Ad = {
  Chrome: "Google Chrome",
  Edge: "Microsoft Edge",
  "Edge WebView2": "Microsoft Edge WebView2",
  "Chrome WebView": "Android WebView",
  "Chrome Headless": "HeadlessChrome",
  "Huawei Browser": "HuaweiBrowser",
  "MIUI Browser": "Miui Browser",
  "Opera Mobi": "OperaMobile",
  Yandex: "YaBrowser"
}, cl = {
  browser: [
    [
      // Most common regardless engine
      /\b(?:crmo|crios)\/([\w\.]+)/i
      // Chrome for Android/iOS
    ],
    [$, [I, Jr + "Chrome"]],
    [
      /webview.+edge\/([\w\.]+)/i
      // Microsoft Edge
    ],
    [$, [I, mi + " WebView"]],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i
    ],
    [$, [I, "Edge"]],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i,
      // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
      // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      // Opera
    ],
    [I, $],
    [
      /opios[\/ ]+([\w\.]+)/i
      // Opera mini on iphone >= 8.0
    ],
    [$, [I, Fn + " Mini"]],
    [
      /\bop(?:rg)?x\/([\w\.]+)/i
      // Opera GX
    ],
    [$, [I, Fn + " GX"]],
    [
      /\bopr\/([\w\.]+)/i
      // Opera Webkit
    ],
    [$, [I, Fn]],
    [
      // Mixed
      /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      // Baidu
    ],
    [$, [I, "Baidu"]],
    [
      /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      // Maxthon
    ],
    [$, [I, "Maxthon"]],
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
    [I, $],
    [
      /quark(?:pc)?\/([-\w\.]+)/i
      // Quark
    ],
    [$, [I, "Quark"]],
    [
      /\bddg\/([\w\.]+)/i
      // DuckDuckGo
    ],
    [$, [I, "DuckDuckGo"]],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      // UCBrowser
    ],
    [$, [I, "UCBrowser"]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i,
      // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i,
      /micromessenger\/([\w\.]+)/i
      // WeChat
    ],
    [$, [I, "WeChat"]],
    [
      /konqueror\/([\w\.]+)/i
      // Konqueror
    ],
    [$, [I, "Konqueror"]],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      // IE11
    ],
    [$, [I, "IE"]],
    [
      /ya(?:search)?browser\/([\w\.]+)/i
      // Yandex
    ],
    [$, [I, "Yandex"]],
    [
      /slbrowser\/([\w\.]+)/i
      // Smart Lenovo Browser
    ],
    [$, [I, "Smart " + Lo + In]],
    [
      /(avast|avg)\/([\w\.]+)/i
      // Avast/AVG Secure Browser
    ],
    [[I, /(.+)/, "$1 Secure" + In], $],
    [
      /\bfocus\/([\w\.]+)/i
      // Firefox Focus
    ],
    [$, [I, Pn + " Focus"]],
    [
      /\bopt\/([\w\.]+)/i
      // Opera Touch
    ],
    [$, [I, Fn + " Touch"]],
    [
      /coc_coc\w+\/([\w\.]+)/i
      // Coc Coc Browser
    ],
    [$, [I, "Coc Coc"]],
    [
      /dolfin\/([\w\.]+)/i
      // Dolphin
    ],
    [$, [I, "Dolphin"]],
    [
      /coast\/([\w\.]+)/i
      // Opera Coast
    ],
    [$, [I, Fn + " Coast"]],
    [
      /miuibrowser\/([\w\.]+)/i
      // MIUI Browser
    ],
    [$, [I, "MIUI" + In]],
    [
      /fxios\/([\w\.-]+)/i
      // Firefox for iOS
    ],
    [$, [I, Jr + Pn]],
    [
      /\bqihoobrowser\/?([\w\.]*)/i
      // 360
    ],
    [$, [I, "360"]],
    [
      /\b(qq)\/([\w\.]+)/i
      // QQ
    ],
    [[I, /(.+)/, "$1Browser"], $],
    [
      /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
    ],
    [[I, /(.+)/, "$1" + In], $],
    [
      // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
      /samsungbrowser\/([\w\.]+)/i
      // Samsung Internet
    ],
    [$, [I, Tn + " Internet"]],
    [
      /metasr[\/ ]?([\d\.]+)/i
      // Sogou Explorer
    ],
    [$, [I, al + " Explorer"]],
    [
      /(sogou)mo\w+\/([\d\.]+)/i
      // Sogou Mobile
    ],
    [[I, al + " Mobile"], $],
    [
      /(electron)\/([\w\.]+) safari/i,
      // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
      // Tesla
      /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      // QQ/2345
    ],
    [I, $],
    [
      /(lbbrowser|rekonq)/i
      // LieBao Browser/Rekonq
    ],
    [I],
    [
      /ome\/([\w\.]+) \w* ?(iron) saf/i,
      // Iron
      /ome\/([\w\.]+).+qihu (360)[es]e/i
      // 360
    ],
    [$, I],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      // Facebook App for iOS & Android
    ],
    [[I, jo], $, [T, Rn]],
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
    [I, $, [T, Rn]],
    [
      /\bgsa\/([\w\.]+) .*safari\//i
      // Google Search Appliance on iOS
    ],
    [$, [I, "GSA"], [T, Rn]],
    [
      /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      // TikTok
    ],
    [$, [I, "TikTok"], [T, Rn]],
    [
      /\[(linkedin)app\]/i
      // LinkedIn App for iOS & Android
    ],
    [I, [T, Rn]],
    [
      /(chromium)[\/ ]([-\w\.]+)/i
      // Chromium
    ],
    [I, $],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i
      // Chrome Headless
    ],
    [$, [I, il + " Headless"]],
    [
      /wv\).+chrome\/([\w\.]+).+edgw\//i
      // Edge WebView2
    ],
    [$, [I, mi + " WebView2"]],
    [
      / wv\).+(chrome)\/([\w\.]+)/i
      // Chrome WebView
    ],
    [[I, il + " WebView"], $],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      // Android Browser
    ],
    [$, [I, "Android" + In]],
    [
      /chrome\/([\w\.]+) mobile/i
      // Chrome Mobile
    ],
    [$, [I, Jr + "Chrome"]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [I, $],
    [
      /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      // Safari Mobile
    ],
    [$, [I, Jr + "Safari"]],
    [
      /iphone .*mobile(?:\/\w+ | ?)safari/i
    ],
    [[I, Jr + "Safari"]],
    [
      /version\/([\w\.\,]+) .*(safari)/i
      // Safari
    ],
    [$, I],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      // Safari < 3.0
    ],
    [I, [$, "1"]],
    [
      /(webkit|khtml)\/([\w\.]+)/i
    ],
    [I, $],
    [
      // Gecko based
      /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      // Firefox Mobile
    ],
    [[I, Jr + Pn], $],
    [
      /(navigator|netscape\d?)\/([-\w\.]+)/i
      // Netscape
    ],
    [[I, "Netscape"], $],
    [
      /(wolvic|librewolf)\/([\w\.]+)/i
      // Wolvic/LibreWolf
    ],
    [I, $],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i
      // Firefox Reality
    ],
    [$, [I, Pn + " Reality"]],
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
    [I, [$, /_/g, "."]],
    [
      /(cobalt)\/([\w\.]+)/i
      // Cobalt
    ],
    [I, [$, /[^\d\.]+./, Qr]]
  ],
  cpu: [
    [
      /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      // AMD64 (x64)
    ],
    [[gt, "amd64"]],
    [
      /(ia32(?=;))/i,
      // IA32 (quicktime)
      /\b((i[346]|x)86)(pc)?\b/i
      // IA32 (x86)
    ],
    [[gt, "ia32"]],
    [
      /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      // ARM64
    ],
    [[gt, "arm64"]],
    [
      /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      // ARMHF
    ],
    [[gt, "armhf"]],
    [
      // PocketPC mistakenly identified as PowerPC
      /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
    ],
    [[gt, "arm"]],
    [
      /((ppc|powerpc)(64)?)( mac|;|\))/i
      // PowerPC
    ],
    [[gt, /ower/, Qr, lr]],
    [
      / sun4\w[;\)]/i
      // SPARC
    ],
    [[gt, "sparc"]],
    [
      /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
    ],
    [[gt, lr]]
  ],
  device: [
    [
      //////////////////////////
      // MOBILES & TABLETS
      /////////////////////////
      // Samsung
      /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
    ],
    [O, [F, Tn], [T, Se]],
    [
      /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
      /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [O, [F, Tn], [T, oe]],
    [
      // Apple
      /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      // iPod/iPhone
    ],
    [O, [F, Yr], [T, oe]],
    [
      /\((ipad);[-\w\),; ]+apple/i,
      // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [O, [F, Yr], [T, Se]],
    [
      /(macintosh);/i
    ],
    [O, [F, Yr]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [O, [F, nl], [T, oe]],
    [
      // Honor
      /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
    ],
    [O, [F, tl], [T, Se]],
    [
      /honor([-\w ]+)[;\)]/i
    ],
    [O, [F, tl], [T, oe]],
    [
      // Huawei
      /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
    ],
    [O, [F, el], [T, Se]],
    [
      /(?:huawei)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [O, [F, el], [T, oe]],
    [
      // Xiaomi
      /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
      /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      // Mi Pad tablets
    ],
    [[O, /_/g, " "], [F, Uo], [T, Se]],
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
    [[O, /_/g, " "], [F, Uo], [T, oe]],
    [
      // OnePlus
      /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [O, [F, rl], [T, oe]],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [O, [F, Do], [T, oe]],
    [
      /\b(opd2(\d{3}a?))(?: bui|\))/i
    ],
    [O, [F, Zt, { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": Do }], [T, Se]],
    [
      // BLU
      /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      // Vivo series
    ],
    [O, [F, "BLU"], [T, oe]],
    [
      // Vivo
      /; vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [O, [F, "Vivo"], [T, oe]],
    [
      // Realme
      /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
    ],
    [O, [F, "Realme"], [T, oe]],
    [
      // Lenovo
      /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
      /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
    ],
    [O, [F, Lo], [T, Se]],
    [
      /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
    ],
    [O, [F, Lo], [T, oe]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
      /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
    ],
    [O, [F, $o], [T, oe]],
    [
      /\b(mz60\d|xoom[2 ]{0,2}) build\//i
    ],
    [O, [F, $o], [T, Se]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [O, [F, gi], [T, Se]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [O, [F, gi], [T, oe]],
    [
      // Nokia
      /(nokia) (t[12][01])/i
    ],
    [F, O, [T, Se]],
    [
      /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
      /nokia[-_ ]?(([-\w\. ]*))/i
    ],
    [[O, /_/g, " "], [T, oe], [F, "Nokia"]],
    [
      // Google
      /(pixel (c|tablet))\b/i
      // Google Pixel C/Tablet
    ],
    [O, [F, Lr], [T, Se]],
    [
      // Google Pixel
      /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
    ],
    [O, [F, Lr], [T, oe]],
    [
      /(google) (pixelbook( go)?)/i
    ],
    [F, O],
    [
      // Sony
      /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [O, [F, On], [T, oe]],
    [
      /sony tablet [ps]/i,
      /\b(?:sony)?sgp\w+(?: bui|\))/i
    ],
    [[O, "Xperia Tablet"], [F, On], [T, Se]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
      // Kindle Fire without Silk / Echo Show
      /(kf[a-z]+)( bui|\)).+silk\//i
      // Kindle Fire HD
    ],
    [O, [F, vi], [T, Se]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      // Fire Phone
    ],
    [[O, /(.+)/g, "Fire Phone $1"], [F, vi], [T, oe]],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i
      // BlackBerry PlayBook
    ],
    [O, F, [T, Se]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i
      // BlackBerry 10
    ],
    [O, [F, Qs], [T, oe]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [O, [F, Zs], [T, Se]],
    [
      / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
    ],
    [O, [F, Zs], [T, oe]],
    [
      // HTC
      /(nexus 9)/i
      // HTC Nexus 9
    ],
    [O, [F, "HTC"], [T, Se]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
      // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [F, [O, /_/g, " "], [T, oe]],
    [
      // TCL
      /tcl (xess p17aa)/i,
      /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [O, [F, "TCL"], [T, Se]],
    [
      /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [O, [F, "TCL"], [T, oe]],
    [
      // itel
      /(itel) ((\w+))/i
    ],
    [[F, lr], O, [T, Zt, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [O, [F, "Acer"], [T, Se]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [O, [F, "Meizu"], [T, oe]],
    [
      // Ulefone
      /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
    ],
    [O, [F, "Ulefone"], [T, oe]],
    [
      // Energizer
      /; (energy ?\w+)(?: bui|\))/i,
      /; energizer ([\w ]+)(?: bui|\))/i
    ],
    [O, [F, "Energizer"], [T, oe]],
    [
      // Cat
      /; cat (b35);/i,
      /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
    ],
    [O, [F, "Cat"], [T, oe]],
    [
      // Smartfren
      /((?:new )?andromax[\w- ]+)(?: bui|\))/i
    ],
    [O, [F, "Smartfren"], [T, oe]],
    [
      // Nothing
      /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
    ],
    [O, [F, "Nothing"], [T, oe]],
    [
      // Archos
      /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
      /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
    ],
    [O, [F, "Archos"], [T, Se]],
    [
      /archos ([\w ]+)( b|\))/i,
      /; (ac[3-6]\d\w{2,8})( b|\))/i
    ],
    [O, [F, "Archos"], [T, oe]],
    [
      // HMD
      /; (n159v)/i
    ],
    [O, [F, "HMD"], [T, oe]],
    [
      // MIXED
      /(imo) (tab \w+)/i,
      // IMO
      /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      // Infinix XPad / Tecno
    ],
    [F, O, [T, Se]],
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
    [F, O, [T, oe]],
    [
      /(kobo)\s(ereader|touch)/i,
      // Kobo
      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
      // HP TouchPad
      /(kindle)\/([\w\.]+)/i
      // Kindle
    ],
    [F, O, [T, Se]],
    [
      /(surface duo)/i
      // Surface Duo
    ],
    [O, [F, Mo], [T, Se]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i
      // Fairphone
    ],
    [O, [F, "Fairphone"], [T, oe]],
    [
      /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      // Nvidia Tablets
    ],
    [O, [F, No], [T, Se]],
    [
      /(sprint) (\w+)/i
      // Sprint Phones
    ],
    [F, O, [T, oe]],
    [
      /(kin\.[onetw]{3})/i
      // Microsoft Kin
    ],
    [[O, /\./g, " "], [F, Mo], [T, oe]],
    [
      /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      // Zebra
    ],
    [O, [F, Bo], [T, Se]],
    [
      /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
    ],
    [O, [F, Bo], [T, oe]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i
      // Samsung
    ],
    [F, [T, Ye]],
    [
      /hbbtv.+maple;(\d+)/i
    ],
    [[O, /^/, "SmartTV"], [F, Tn], [T, Ye]],
    [
      /(vizio)(?: |.+model\/)(\w+-\w+)/i,
      // Vizio
      /tcast.+(lg)e?. ([-\w]+)/i
      // LG SmartTV
    ],
    [F, O, [T, Ye]],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
    ],
    [[F, gi], [T, Ye]],
    [
      /(apple) ?tv/i
      // Apple TV
    ],
    [F, [O, Yr + " TV"], [T, Ye]],
    [
      /crkey.*devicetype\/chromecast/i
      // Google Chromecast Third Generation
    ],
    [[O, br + " Third Generation"], [F, Lr], [T, Ye]],
    [
      /crkey.*devicetype\/([^/]*)/i
      // Google Chromecast with specific device type
    ],
    [[O, /^/, "Chromecast "], [F, Lr], [T, Ye]],
    [
      /fuchsia.*crkey/i
      // Google Chromecast Nest Hub
    ],
    [[O, br + " Nest Hub"], [F, Lr], [T, Ye]],
    [
      /crkey/i
      // Google Chromecast, Linux-based or unknown
    ],
    [[O, br], [F, Lr], [T, Ye]],
    [
      /(portaltv)/i
      // Facebook Portal TV
    ],
    [O, [F, jo], [T, Ye]],
    [
      /droid.+aft(\w+)( bui|\))/i
      // Fire TV
    ],
    [O, [F, vi], [T, Ye]],
    [
      /(shield \w+ tv)/i
      // Nvidia Shield TV
    ],
    [O, [F, No], [T, Ye]],
    [
      /\(dtv[\);].+(aquos)/i,
      /(aquos-tv[\w ]+)\)/i
      // Sharp
    ],
    [O, [F, nl], [T, Ye]],
    [
      /(bravia[\w ]+)( bui|\))/i
      // Sony
    ],
    [O, [F, On], [T, Ye]],
    [
      /(mi(tv|box)-?\w+) bui/i
      // Xiaomi
    ],
    [O, [F, Uo], [T, Ye]],
    [
      /Hbbtv.*(technisat) (.*);/i
      // TechniSAT
    ],
    [F, O, [T, Ye]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
      // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      // HbbTV devices
    ],
    [[F, /.+\/(\w+)/, "$1", Zt, { LG: "lge" }], [O, ki], [T, Ye]],
    [
      // SmartTV from Unidentified Vendors
      /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
    ],
    [O, [T, Ye]],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:|large screen[\w ]+safari)\b/i
    ],
    [[T, Ye]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(playstation \w+)/i
      // Playstation
    ],
    [O, [F, On], [T, $n]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      // Microsoft Xbox
    ],
    [O, [F, Mo], [T, $n]],
    [
      /(ouya)/i,
      // Ouya
      /(nintendo) (\w+)/i,
      // Nintendo
      /(retroid) (pocket ([^\)]+))/i
      // Retroid Pocket
    ],
    [F, O, [T, $n]],
    [
      /droid.+; (shield)( bui|\))/i
      // Nvidia Portable
    ],
    [O, [F, No], [T, $n]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      // Samsung Galaxy Watch
    ],
    [O, [F, Tn], [T, Xt]],
    [
      /((pebble))app/i,
      // Pebble
      /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      // Asus ZenWatch / LG Watch / Pixel Watch
    ],
    [F, O, [T, Xt]],
    [
      /(ow(?:19|20)?we?[1-3]{1,3})/i
      // Oppo Watch
    ],
    [O, [F, Do], [T, Xt]],
    [
      /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      // Apple Watch
    ],
    [O, [F, Yr], [T, Xt]],
    [
      /(opwwe\d{3})/i
      // OnePlus Watch
    ],
    [O, [F, rl], [T, Xt]],
    [
      /(moto 360)/i
      // Motorola 360
    ],
    [O, [F, $o], [T, Xt]],
    [
      /(smartwatch 3)/i
      // Sony SmartWatch
    ],
    [O, [F, On], [T, Xt]],
    [
      /(g watch r)/i
      // LG G Watch R
    ],
    [O, [F, gi], [T, Xt]],
    [
      /droid.+; (wt63?0{2,3})\)/i
    ],
    [O, [F, Bo], [T, Xt]],
    [
      ///////////////////
      // XR
      ///////////////////
      /droid.+; (glass) \d/i
      // Google Glass
    ],
    [O, [F, Lr], [T, pi]],
    [
      /(pico) (4|neo3(?: link|pro)?)/i
      // Pico
    ],
    [F, O, [T, pi]],
    [
      /(quest( \d| pro)?s?).+vr/i
      // Meta Quest
    ],
    [O, [F, jo], [T, pi]],
    [
      /mobile vr; rv.+firefox/i
      // Unidentifiable VR device using Firefox Reality / Wolvic
    ],
    [[T, pi]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      // Tesla
    ],
    [F, [T, Nn]],
    [
      /(aeobc)\b/i
      // Echo Dot
    ],
    [O, [F, vi], [T, Nn]],
    [
      /(homepod).+mac os/i
      // Apple HomePod
    ],
    [O, [F, Yr], [T, Nn]],
    [
      /windows iot/i
      // Unidentifiable embedded device using Windows IoT
    ],
    [[T, Nn]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
    ],
    [O, [T, Zt, { mobile: "Mobile", xr: "VR", "*": Se }]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      // Unidentifiable Tablet
    ],
    [[T, Se]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      // Unidentifiable Mobile
    ],
    [[T, oe]],
    [
      /droid .+?; ([\w\. -]+)( bui|\))/i
      // Generic Android Device
    ],
    [O, [F, "Generic"]]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i
      // EdgeHTML
    ],
    [$, [I, mi + "HTML"]],
    [
      /(arkweb)\/([\w\.]+)/i
      // ArkWeb
    ],
    [I, $],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      // Blink
    ],
    [$, [I, "Blink"]],
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
    [I, $],
    [
      /ladybird\//i
    ],
    [[I, "LibWeb"]],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i
      // Gecko
    ],
    [$, I]
  ],
  os: [
    [
      // Windows
      /(windows nt) (6\.[23]); arm/i
      // Windows RT
    ],
    [[I, /N/, "R"], [$, Zt, sl]],
    [
      /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
      // Windows IoT/Mobile/Phone
      // Windows NT/3.1/95/98/ME/2000/XP/Vista/7/8/8.1/10/11
      /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
    ],
    [I, $],
    [
      /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
      /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
    ],
    [[$, /(;|\))/g, "", Zt, sl], [I, Jo]],
    [
      /(windows ce)\/?([\d\.]*)/i
      // Windows CE
    ],
    [I, $],
    [
      // iOS/macOS
      /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
      // iOS
      /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
      /cfnetwork\/.+darwin/i
    ],
    [[$, /_/g, "."], [I, "iOS"]],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      // Mac OS
    ],
    [[I, "macOS"], [$, /_/g, "."]],
    [
      // Google Chromecast
      /android ([\d\.]+).*crkey/i
      // Google Chromecast, Android-based
    ],
    [$, [I, br + " Android"]],
    [
      /fuchsia.*crkey\/([\d\.]+)/i
      // Google Chromecast, Fuchsia-based
    ],
    [$, [I, br + " Fuchsia"]],
    [
      /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      // Google Chromecast, Linux-based Smart Speaker
    ],
    [$, [I, br + " SmartSpeaker"]],
    [
      /linux.*crkey\/([\d\.]+)/i
      // Google Chromecast, Legacy Linux-based
    ],
    [$, [I, br + " Linux"]],
    [
      /crkey\/([\d\.]+)/i
      // Google Chromecast, unknown
    ],
    [$, [I, br]],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86)/i
      // Android-x86
    ],
    [$, I],
    [
      /(ubuntu) ([\w\.]+) like android/i
      // Ubuntu Touch
    ],
    [[I, /(.+)/, "$1 Touch"], $],
    [
      /(harmonyos)[\/ ]?([\d\.]*)/i,
      // HarmonyOS
      // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
      /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
    ],
    [I, $],
    [
      /\(bb(10);/i
      // BlackBerry 10
    ],
    [$, [I, Qs]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      // Symbian
    ],
    [$, [I, "Symbian"]],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      // Firefox OS
    ],
    [$, [I, Pn + " OS"]],
    [
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
      // WebOS
      /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
    ],
    [$, [I, "webOS"]],
    [
      /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      // https://webostv.developer.lge.com/develop/specifications/web-api-and-web-engine
    ],
    [[$, Zt, { 25: "120", 24: "108", 23: "94", 22: "87", 6: "79", 5: "68", 4: "53", 3: "38", 2: "538", 1: "537", "*": "TV" }], [I, "webOS"]],
    [
      /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      // watchOS
    ],
    [$, [I, "watchOS"]],
    [
      // Google ChromeOS
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      // Chromium OS
    ],
    [[I, "Chrome OS"], $],
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
    [I, $],
    [
      /(sunos) ?([\d\.]*)/i
      // Solaris
    ],
    [[I, "Solaris"], $],
    [
      /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
      // BeOS/OS2/AmigaOS/OpenVMS/HP-UX/SerenityOS
      /(unix) ?([\w\.]*)/i
      // UNIX
    ],
    [I, $]
  ]
}, bi = (function() {
  var r = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
  return cr.call(r.init, [
    [vt, [I, $, Dn, T]],
    [sr, [gt]],
    [Qt, [T, O, F]],
    [Nt, [I, $]],
    [It, [I, $]]
  ]), cr.call(r.isIgnore, [
    [vt, [$, Dn]],
    [Nt, [$]],
    [It, [$]]
  ]), cr.call(r.isIgnoreRgx, [
    [vt, / ?browser$/i],
    [It, / ?os$/i]
  ]), cr.call(r.toString, [
    [vt, [I, $]],
    [sr, [gt]],
    [Qt, [F, O]],
    [Nt, [I, $]],
    [It, [I, $]]
  ]), r;
})(), Cd = function(r, n) {
  var a = bi.init[n], s = bi.isIgnore[n] || 0, c = bi.isIgnoreRgx[n] || 0, p = bi.toString[n] || 0;
  function h() {
    cr.call(this, a);
  }
  return h.prototype.getItem = function() {
    return r;
  }, h.prototype.withClientHints = function() {
    return wr ? wr.getHighEntropyValues(Ol).then(function(E) {
      return r.setCH(new Pl(E, !1)).parseCH().get();
    }) : r.parseCH().get();
  }, h.prototype.withFeatureCheck = function() {
    return r.detectFeature().get();
  }, n != Xr && (h.prototype.is = function(E) {
    var A = !1;
    for (var k in this)
      if (this.hasOwnProperty(k) && !Xo(s, k) && lr(c ? tn(c, this[k]) : this[k]) == lr(c ? tn(c, E) : E)) {
        if (A = !0, E != yr) break;
      } else if (E == yr && A) {
        A = !A;
        break;
      }
    return A;
  }, h.prototype.toString = function() {
    var E = Qr;
    for (var A in p)
      typeof this[p[A]] !== yr && (E += (E ? " " : Qr) + this[p[A]]);
    return E || yr;
  }), wr || (h.prototype.then = function(E) {
    var A = this, k = function() {
      for (var U in A)
        A.hasOwnProperty(U) && (this[U] = A[U]);
    };
    k.prototype = {
      is: h.prototype.is,
      toString: h.prototype.toString
    };
    var M = new k();
    return E(M), M;
  }), new h();
};
function Pl(r, n) {
  if (r = r || {}, cr.call(this, Ol), n)
    cr.call(this, [
      [aa, Ho(r[_r])],
      [sa, Ho(r[bd])],
      [oe, /\?1/.test(r[_d])],
      [O, Ln(r[xd])],
      [Zr, Ln(r[Tl])],
      [la, Ln(r[Ed])],
      [gt, Ln(r[md])],
      [Mr, Ho(r[yd])],
      [Ci, Ln(r[wd])]
    ]);
  else
    for (var a in r)
      this.hasOwnProperty(a) && typeof r[a] !== yr && (this[a] = r[a]);
}
function ul(r, n, a, s) {
  return this.get = function(c) {
    return c ? this.data.hasOwnProperty(c) ? this.data[c] : void 0 : this.data;
  }, this.set = function(c, p) {
    return this.data[c] = p, this;
  }, this.setCH = function(c) {
    return this.uaCH = c, this;
  }, this.detectFeature = function() {
    if (bt && bt.userAgent == this.ua)
      switch (this.itemType) {
        case vt:
          bt.brave && typeof bt.brave.isBrave == xi && this.set(I, "Brave");
          break;
        case Qt:
          !this.get(T) && wr && wr[oe] && this.set(T, oe), this.get(O) == "Macintosh" && bt && typeof bt.standalone !== yr && bt.maxTouchPoints && bt.maxTouchPoints > 2 && this.set(O, "iPad").set(T, Se);
          break;
        case It:
          !this.get(I) && wr && wr[Zr] && this.set(I, wr[Zr]);
          break;
        case Xr:
          var c = this.data, p = function(h) {
            return c[h].getItem().detectFeature().get();
          };
          this.set(vt, p(vt)).set(sr, p(sr)).set(Qt, p(Qt)).set(Nt, p(Nt)).set(It, p(It));
      }
    return this;
  }, this.parseUA = function() {
    return this.itemType != Xr && Vo.call(this.data, this.ua, this.rgxMap), this.itemType == vt && this.set(Dn, zo(this.get($))), this;
  }, this.parseCH = function() {
    var c = this.uaCH, p = this.rgxMap;
    switch (this.itemType) {
      case vt:
      case Nt:
        var h = c[sa] || c[aa], E;
        if (h)
          for (var A in h) {
            var k = h[A].brand || h[A], M = h[A].version;
            this.itemType == vt && !/not.a.brand/i.test(k) && (!E || /Chrom/.test(E) && k != ol || E == mi && /WebView2/.test(k)) && (k = Zt(k, Ad), E = this.get(I), E && !/Chrom/.test(E) && /Chrom/.test(k) || this.set(I, k).set($, M).set(Dn, zo(M)), E = k), this.itemType == Nt && k == ol && this.set($, M);
          }
        break;
      case sr:
        var U = c[gt];
        U && (U && c[Ci] == "64" && (U += "64"), Vo.call(this.data, U + ";", p));
        break;
      case Qt:
        if (c[oe] && this.set(T, oe), c[O] && (this.set(O, c[O]), !this.get(T) || !this.get(F))) {
          var X = {};
          Vo.call(X, "droid 9; " + c[O] + ")", p), !this.get(T) && X.type && this.set(T, X.type), !this.get(F) && X.vendor && this.set(F, X.vendor);
        }
        if (c[Mr]) {
          var re;
          if (typeof c[Mr] != "string")
            for (var B = 0; !re && B < c[Mr].length; )
              re = Zt(c[Mr][B++], ll);
          else
            re = Zt(c[Mr], ll);
          this.set(T, re);
        }
        break;
      case It:
        var Z = c[Zr];
        if (Z) {
          var j = c[la];
          Z == Jo && (j = parseInt(zo(j), 10) >= 13 ? "11" : "10"), this.set(I, Z).set($, j);
        }
        this.get(I) == Jo && c[O] == "Xbox" && this.set(I, "Xbox").set($, void 0);
        break;
      case Xr:
        var pe = this.data, ve = function(Ae) {
          return pe[Ae].getItem().setCH(c).parseCH().get();
        };
        this.set(vt, ve(vt)).set(sr, ve(sr)).set(Qt, ve(Qt)).set(Nt, ve(Nt)).set(It, ve(It));
    }
    return this;
  }, cr.call(this, [
    ["itemType", r],
    ["ua", n],
    ["uaCH", s],
    ["rgxMap", a],
    ["data", Cd(this, r)]
  ]), this;
}
function ur(r, n, a) {
  if (typeof r === en ? (Ei(r, !0) ? (typeof n === en && (a = n), n = r) : (a = r, n = void 0), r = void 0) : typeof r === Yo && !Ei(n, !0) && (a = n, n = void 0), a && typeof a.append === xi) {
    var s = {};
    a.forEach(function(A, k) {
      s[k] = A;
    }), a = s;
  }
  if (!(this instanceof ur))
    return new ur(r, n, a).getResult();
  var c = typeof r === Yo ? r : (
    // Passed user-agent string
    a && a[Js] ? a[Js] : (
      // User-Agent from passed headers
      bt && bt.userAgent ? bt.userAgent : (
        // navigator.userAgent
        Qr
      )
    )
  ), p = new Pl(a, !0), h = n ? Sd(cl, n) : cl, E = function(A) {
    return A == Xr ? function() {
      return new ul(A, c, h, p).set("ua", c).set(vt, this.getBrowser()).set(sr, this.getCPU()).set(Qt, this.getDevice()).set(Nt, this.getEngine()).set(It, this.getOS()).get();
    } : function() {
      return new ul(A, c, h[A], p).parseUA().get();
    };
  };
  return cr.call(this, [
    ["getBrowser", E(vt)],
    ["getCPU", E(sr)],
    ["getDevice", E(Qt)],
    ["getEngine", E(Nt)],
    ["getOS", E(It)],
    ["getResult", E(Xr)],
    ["getUA", function() {
      return c;
    }],
    ["setUA", function(A) {
      return rn(A) && (c = A.length > Go ? ki(A, Go) : A), this;
    }]
  ]).setUA(c), this;
}
ur.VERSION = gd;
ur.BROWSER = Ri([I, $, Dn, T]);
ur.CPU = Ri([gt]);
ur.DEVICE = Ri([O, F, T, $n, oe, Ye, Se, Xt, Nn]);
ur.ENGINE = ur.OS = Ri([I, $]);
let fl = !1;
const Rd = () => fl ? Promise.resolve(!0) : new Promise((r) => {
  const n = document.createElement("iframe");
  n.src = "https://watcher.blockbots.org:8888/", n.style.display = "none", n.onload = () => {
    fl = !0, r(!0);
  }, document.body.appendChild(n);
});
function Fl(r, n) {
  return function() {
    return r.apply(n, arguments);
  };
}
const { toString: Td } = Object.prototype, { getPrototypeOf: ca } = Object, { iterator: Ti, toStringTag: Il } = Symbol, Oi = /* @__PURE__ */ ((r) => (n) => {
  const a = Td.call(n);
  return r[a] || (r[a] = a.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Dt = (r) => (r = r.toLowerCase(), (n) => Oi(n) === r), Pi = (r) => (n) => typeof n === r, { isArray: nn } = Array, Un = Pi("undefined");
function jn(r) {
  return r !== null && !Un(r) && r.constructor !== null && !Un(r.constructor) && mt(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const Ll = Dt("ArrayBuffer");
function Od(r) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(r) : n = r && r.buffer && Ll(r.buffer), n;
}
const Pd = Pi("string"), mt = Pi("function"), Ml = Pi("number"), Hn = (r) => r !== null && typeof r == "object", Fd = (r) => r === !0 || r === !1, wi = (r) => {
  if (Oi(r) !== "object")
    return !1;
  const n = ca(r);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Il in r) && !(Ti in r);
}, Id = (r) => {
  if (!Hn(r) || jn(r))
    return !1;
  try {
    return Object.keys(r).length === 0 && Object.getPrototypeOf(r) === Object.prototype;
  } catch {
    return !1;
  }
}, Ld = Dt("Date"), Md = Dt("File"), $d = Dt("Blob"), Nd = Dt("FileList"), Dd = (r) => Hn(r) && mt(r.pipe), Ud = (r) => {
  let n;
  return r && (typeof FormData == "function" && r instanceof FormData || mt(r.append) && ((n = Oi(r)) === "formdata" || // detect form-data instance
  n === "object" && mt(r.toString) && r.toString() === "[object FormData]"));
}, Bd = Dt("URLSearchParams"), [jd, Hd, zd, Vd] = ["ReadableStream", "Request", "Response", "Headers"].map(Dt), qd = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zn(r, n, { allOwnKeys: a = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let s, c;
  if (typeof r != "object" && (r = [r]), nn(r))
    for (s = 0, c = r.length; s < c; s++)
      n.call(null, r[s], s, r);
  else {
    if (jn(r))
      return;
    const p = a ? Object.getOwnPropertyNames(r) : Object.keys(r), h = p.length;
    let E;
    for (s = 0; s < h; s++)
      E = p[s], n.call(null, r[E], E, r);
  }
}
function $l(r, n) {
  if (jn(r))
    return null;
  n = n.toLowerCase();
  const a = Object.keys(r);
  let s = a.length, c;
  for (; s-- > 0; )
    if (c = a[s], n === c.toLowerCase())
      return c;
  return null;
}
const $r = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Nl = (r) => !Un(r) && r !== $r;
function Zo() {
  const { caseless: r } = Nl(this) && this || {}, n = {}, a = (s, c) => {
    const p = r && $l(n, c) || c;
    wi(n[p]) && wi(s) ? n[p] = Zo(n[p], s) : wi(s) ? n[p] = Zo({}, s) : nn(s) ? n[p] = s.slice() : n[p] = s;
  };
  for (let s = 0, c = arguments.length; s < c; s++)
    arguments[s] && zn(arguments[s], a);
  return n;
}
const Kd = (r, n, a, { allOwnKeys: s } = {}) => (zn(n, (c, p) => {
  a && mt(c) ? r[p] = Fl(c, a) : r[p] = c;
}, { allOwnKeys: s }), r), Wd = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), Gd = (r, n, a, s) => {
  r.prototype = Object.create(n.prototype, s), r.prototype.constructor = r, Object.defineProperty(r, "super", {
    value: n.prototype
  }), a && Object.assign(r.prototype, a);
}, Yd = (r, n, a, s) => {
  let c, p, h;
  const E = {};
  if (n = n || {}, r == null) return n;
  do {
    for (c = Object.getOwnPropertyNames(r), p = c.length; p-- > 0; )
      h = c[p], (!s || s(h, r, n)) && !E[h] && (n[h] = r[h], E[h] = !0);
    r = a !== !1 && ca(r);
  } while (r && (!a || a(r, n)) && r !== Object.prototype);
  return n;
}, Jd = (r, n, a) => {
  r = String(r), (a === void 0 || a > r.length) && (a = r.length), a -= n.length;
  const s = r.indexOf(n, a);
  return s !== -1 && s === a;
}, Xd = (r) => {
  if (!r) return null;
  if (nn(r)) return r;
  let n = r.length;
  if (!Ml(n)) return null;
  const a = new Array(n);
  for (; n-- > 0; )
    a[n] = r[n];
  return a;
}, Zd = /* @__PURE__ */ ((r) => (n) => r && n instanceof r)(typeof Uint8Array < "u" && ca(Uint8Array)), Qd = (r, n) => {
  const s = (r && r[Ti]).call(r);
  let c;
  for (; (c = s.next()) && !c.done; ) {
    const p = c.value;
    n.call(r, p[0], p[1]);
  }
}, eh = (r, n) => {
  let a;
  const s = [];
  for (; (a = r.exec(n)) !== null; )
    s.push(a);
  return s;
}, th = Dt("HTMLFormElement"), rh = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(a, s, c) {
    return s.toUpperCase() + c;
  }
), dl = (({ hasOwnProperty: r }) => (n, a) => r.call(n, a))(Object.prototype), nh = Dt("RegExp"), Dl = (r, n) => {
  const a = Object.getOwnPropertyDescriptors(r), s = {};
  zn(a, (c, p) => {
    let h;
    (h = n(c, p, r)) !== !1 && (s[p] = h || c);
  }), Object.defineProperties(r, s);
}, ih = (r) => {
  Dl(r, (n, a) => {
    if (mt(r) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
      return !1;
    const s = r[a];
    if (mt(s)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + a + "'");
      });
    }
  });
}, oh = (r, n) => {
  const a = {}, s = (c) => {
    c.forEach((p) => {
      a[p] = !0;
    });
  };
  return nn(r) ? s(r) : s(String(r).split(n)), a;
}, ah = () => {
}, sh = (r, n) => r != null && Number.isFinite(r = +r) ? r : n;
function lh(r) {
  return !!(r && mt(r.append) && r[Il] === "FormData" && r[Ti]);
}
const ch = (r) => {
  const n = new Array(10), a = (s, c) => {
    if (Hn(s)) {
      if (n.indexOf(s) >= 0)
        return;
      if (jn(s))
        return s;
      if (!("toJSON" in s)) {
        n[c] = s;
        const p = nn(s) ? [] : {};
        return zn(s, (h, E) => {
          const A = a(h, c + 1);
          !Un(A) && (p[E] = A);
        }), n[c] = void 0, p;
      }
    }
    return s;
  };
  return a(r, 0);
}, uh = Dt("AsyncFunction"), fh = (r) => r && (Hn(r) || mt(r)) && mt(r.then) && mt(r.catch), Ul = ((r, n) => r ? setImmediate : n ? ((a, s) => ($r.addEventListener("message", ({ source: c, data: p }) => {
  c === $r && p === a && s.length && s.shift()();
}, !1), (c) => {
  s.push(c), $r.postMessage(a, "*");
}))(`axios@${Math.random()}`, []) : (a) => setTimeout(a))(
  typeof setImmediate == "function",
  mt($r.postMessage)
), dh = typeof queueMicrotask < "u" ? queueMicrotask.bind($r) : typeof process < "u" && process.nextTick || Ul, hh = (r) => r != null && mt(r[Ti]), C = {
  isArray: nn,
  isArrayBuffer: Ll,
  isBuffer: jn,
  isFormData: Ud,
  isArrayBufferView: Od,
  isString: Pd,
  isNumber: Ml,
  isBoolean: Fd,
  isObject: Hn,
  isPlainObject: wi,
  isEmptyObject: Id,
  isReadableStream: jd,
  isRequest: Hd,
  isResponse: zd,
  isHeaders: Vd,
  isUndefined: Un,
  isDate: Ld,
  isFile: Md,
  isBlob: $d,
  isRegExp: nh,
  isFunction: mt,
  isStream: Dd,
  isURLSearchParams: Bd,
  isTypedArray: Zd,
  isFileList: Nd,
  forEach: zn,
  merge: Zo,
  extend: Kd,
  trim: qd,
  stripBOM: Wd,
  inherits: Gd,
  toFlatObject: Yd,
  kindOf: Oi,
  kindOfTest: Dt,
  endsWith: Jd,
  toArray: Xd,
  forEachEntry: Qd,
  matchAll: eh,
  isHTMLForm: th,
  hasOwnProperty: dl,
  hasOwnProp: dl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Dl,
  freezeMethods: ih,
  toObjectSet: oh,
  toCamelCase: rh,
  noop: ah,
  toFiniteNumber: sh,
  findKey: $l,
  global: $r,
  isContextDefined: Nl,
  isSpecCompliantForm: lh,
  toJSONObject: ch,
  isAsyncFn: uh,
  isThenable: fh,
  setImmediate: Ul,
  asap: dh,
  isIterable: hh
};
function se(r, n, a, s, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", n && (this.code = n), a && (this.config = a), s && (this.request = s), c && (this.response = c, this.status = c.status ? c.status : null);
}
C.inherits(se, Error, {
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
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Bl = se.prototype, jl = {};
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
].forEach((r) => {
  jl[r] = { value: r };
});
Object.defineProperties(se, jl);
Object.defineProperty(Bl, "isAxiosError", { value: !0 });
se.from = (r, n, a, s, c, p) => {
  const h = Object.create(Bl);
  return C.toFlatObject(r, h, function(A) {
    return A !== Error.prototype;
  }, (E) => E !== "isAxiosError"), se.call(h, r.message, n, a, s, c), h.cause = r, h.name = r.name, p && Object.assign(h, p), h;
};
const ph = null;
function Qo(r) {
  return C.isPlainObject(r) || C.isArray(r);
}
function Hl(r) {
  return C.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function hl(r, n, a) {
  return r ? r.concat(n).map(function(c, p) {
    return c = Hl(c), !a && p ? "[" + c + "]" : c;
  }).join(a ? "." : "") : n;
}
function vh(r) {
  return C.isArray(r) && !r.some(Qo);
}
const gh = C.toFlatObject(C, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Fi(r, n, a) {
  if (!C.isObject(r))
    throw new TypeError("target must be an object");
  n = n || new FormData(), a = C.toFlatObject(a, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(Z, j) {
    return !C.isUndefined(j[Z]);
  });
  const s = a.metaTokens, c = a.visitor || M, p = a.dots, h = a.indexes, A = (a.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(n);
  if (!C.isFunction(c))
    throw new TypeError("visitor must be a function");
  function k(B) {
    if (B === null) return "";
    if (C.isDate(B))
      return B.toISOString();
    if (C.isBoolean(B))
      return B.toString();
    if (!A && C.isBlob(B))
      throw new se("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(B) || C.isTypedArray(B) ? A && typeof Blob == "function" ? new Blob([B]) : Buffer.from(B) : B;
  }
  function M(B, Z, j) {
    let pe = B;
    if (B && !j && typeof B == "object") {
      if (C.endsWith(Z, "{}"))
        Z = s ? Z : Z.slice(0, -2), B = JSON.stringify(B);
      else if (C.isArray(B) && vh(B) || (C.isFileList(B) || C.endsWith(Z, "[]")) && (pe = C.toArray(B)))
        return Z = Hl(Z), pe.forEach(function(Ae, Le) {
          !(C.isUndefined(Ae) || Ae === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? hl([Z], Le, p) : h === null ? Z : Z + "[]",
            k(Ae)
          );
        }), !1;
    }
    return Qo(B) ? !0 : (n.append(hl(j, Z, p), k(B)), !1);
  }
  const U = [], X = Object.assign(gh, {
    defaultVisitor: M,
    convertValue: k,
    isVisitable: Qo
  });
  function re(B, Z) {
    if (!C.isUndefined(B)) {
      if (U.indexOf(B) !== -1)
        throw Error("Circular reference detected in " + Z.join("."));
      U.push(B), C.forEach(B, function(pe, ve) {
        (!(C.isUndefined(pe) || pe === null) && c.call(
          n,
          pe,
          C.isString(ve) ? ve.trim() : ve,
          Z,
          X
        )) === !0 && re(pe, Z ? Z.concat(ve) : [ve]);
      }), U.pop();
    }
  }
  if (!C.isObject(r))
    throw new TypeError("data must be an object");
  return re(r), n;
}
function pl(r) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function(s) {
    return n[s];
  });
}
function ua(r, n) {
  this._pairs = [], r && Fi(r, this, n);
}
const zl = ua.prototype;
zl.append = function(n, a) {
  this._pairs.push([n, a]);
};
zl.toString = function(n) {
  const a = n ? function(s) {
    return n.call(this, s, pl);
  } : pl;
  return this._pairs.map(function(c) {
    return a(c[0]) + "=" + a(c[1]);
  }, "").join("&");
};
function bh(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Vl(r, n, a) {
  if (!n)
    return r;
  const s = a && a.encode || bh;
  C.isFunction(a) && (a = {
    serialize: a
  });
  const c = a && a.serialize;
  let p;
  if (c ? p = c(n, a) : p = C.isURLSearchParams(n) ? n.toString() : new ua(n, a).toString(s), p) {
    const h = r.indexOf("#");
    h !== -1 && (r = r.slice(0, h)), r += (r.indexOf("?") === -1 ? "?" : "&") + p;
  }
  return r;
}
class vl {
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
  use(n, a, s) {
    return this.handlers.push({
      fulfilled: n,
      rejected: a,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
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
  forEach(n) {
    C.forEach(this.handlers, function(s) {
      s !== null && n(s);
    });
  }
}
const ql = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, mh = typeof URLSearchParams < "u" ? URLSearchParams : ua, wh = typeof FormData < "u" ? FormData : null, yh = typeof Blob < "u" ? Blob : null, _h = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mh,
    FormData: wh,
    Blob: yh
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, fa = typeof window < "u" && typeof document < "u", ea = typeof navigator == "object" && navigator || void 0, xh = fa && (!ea || ["ReactNative", "NativeScript", "NS"].indexOf(ea.product) < 0), Eh = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", kh = fa && window.location.href || "http://localhost", Sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: fa,
  hasStandardBrowserEnv: xh,
  hasStandardBrowserWebWorkerEnv: Eh,
  navigator: ea,
  origin: kh
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...Sh,
  ..._h
};
function Ah(r, n) {
  return Fi(r, new at.classes.URLSearchParams(), {
    visitor: function(a, s, c, p) {
      return at.isNode && C.isBuffer(a) ? (this.append(s, a.toString("base64")), !1) : p.defaultVisitor.apply(this, arguments);
    },
    ...n
  });
}
function Ch(r) {
  return C.matchAll(/\w+|\[(\w*)]/g, r).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function Rh(r) {
  const n = {}, a = Object.keys(r);
  let s;
  const c = a.length;
  let p;
  for (s = 0; s < c; s++)
    p = a[s], n[p] = r[p];
  return n;
}
function Kl(r) {
  function n(a, s, c, p) {
    let h = a[p++];
    if (h === "__proto__") return !0;
    const E = Number.isFinite(+h), A = p >= a.length;
    return h = !h && C.isArray(c) ? c.length : h, A ? (C.hasOwnProp(c, h) ? c[h] = [c[h], s] : c[h] = s, !E) : ((!c[h] || !C.isObject(c[h])) && (c[h] = []), n(a, s, c[h], p) && C.isArray(c[h]) && (c[h] = Rh(c[h])), !E);
  }
  if (C.isFormData(r) && C.isFunction(r.entries)) {
    const a = {};
    return C.forEachEntry(r, (s, c) => {
      n(Ch(s), c, a, 0);
    }), a;
  }
  return null;
}
function Th(r, n, a) {
  if (C.isString(r))
    try {
      return (n || JSON.parse)(r), C.trim(r);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (a || JSON.stringify)(r);
}
const Vn = {
  transitional: ql,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, a) {
    const s = a.getContentType() || "", c = s.indexOf("application/json") > -1, p = C.isObject(n);
    if (p && C.isHTMLForm(n) && (n = new FormData(n)), C.isFormData(n))
      return c ? JSON.stringify(Kl(n)) : n;
    if (C.isArrayBuffer(n) || C.isBuffer(n) || C.isStream(n) || C.isFile(n) || C.isBlob(n) || C.isReadableStream(n))
      return n;
    if (C.isArrayBufferView(n))
      return n.buffer;
    if (C.isURLSearchParams(n))
      return a.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let E;
    if (p) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Ah(n, this.formSerializer).toString();
      if ((E = C.isFileList(n)) || s.indexOf("multipart/form-data") > -1) {
        const A = this.env && this.env.FormData;
        return Fi(
          E ? { "files[]": n } : n,
          A && new A(),
          this.formSerializer
        );
      }
    }
    return p || c ? (a.setContentType("application/json", !1), Th(n)) : n;
  }],
  transformResponse: [function(n) {
    const a = this.transitional || Vn.transitional, s = a && a.forcedJSONParsing, c = this.responseType === "json";
    if (C.isResponse(n) || C.isReadableStream(n))
      return n;
    if (n && C.isString(n) && (s && !this.responseType || c)) {
      const h = !(a && a.silentJSONParsing) && c;
      try {
        return JSON.parse(n);
      } catch (E) {
        if (h)
          throw E.name === "SyntaxError" ? se.from(E, se.ERR_BAD_RESPONSE, this, null, this.response) : E;
      }
    }
    return n;
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
    FormData: at.classes.FormData,
    Blob: at.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  Vn.headers[r] = {};
});
const Oh = C.toObjectSet([
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
]), Ph = (r) => {
  const n = {};
  let a, s, c;
  return r && r.split(`
`).forEach(function(h) {
    c = h.indexOf(":"), a = h.substring(0, c).trim().toLowerCase(), s = h.substring(c + 1).trim(), !(!a || n[a] && Oh[a]) && (a === "set-cookie" ? n[a] ? n[a].push(s) : n[a] = [s] : n[a] = n[a] ? n[a] + ", " + s : s);
  }), n;
}, gl = /* @__PURE__ */ Symbol("internals");
function Mn(r) {
  return r && String(r).trim().toLowerCase();
}
function yi(r) {
  return r === !1 || r == null ? r : C.isArray(r) ? r.map(yi) : String(r);
}
function Fh(r) {
  const n = /* @__PURE__ */ Object.create(null), a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = a.exec(r); )
    n[s[1]] = s[2];
  return n;
}
const Ih = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function qo(r, n, a, s, c) {
  if (C.isFunction(s))
    return s.call(this, n, a);
  if (c && (n = a), !!C.isString(n)) {
    if (C.isString(s))
      return n.indexOf(s) !== -1;
    if (C.isRegExp(s))
      return s.test(n);
  }
}
function Lh(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, a, s) => a.toUpperCase() + s);
}
function Mh(r, n) {
  const a = C.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(r, s + a, {
      value: function(c, p, h) {
        return this[s].call(this, n, c, p, h);
      },
      configurable: !0
    });
  });
}
let wt = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, a, s) {
    const c = this;
    function p(E, A, k) {
      const M = Mn(A);
      if (!M)
        throw new Error("header name must be a non-empty string");
      const U = C.findKey(c, M);
      (!U || c[U] === void 0 || k === !0 || k === void 0 && c[U] !== !1) && (c[U || A] = yi(E));
    }
    const h = (E, A) => C.forEach(E, (k, M) => p(k, M, A));
    if (C.isPlainObject(n) || n instanceof this.constructor)
      h(n, a);
    else if (C.isString(n) && (n = n.trim()) && !Ih(n))
      h(Ph(n), a);
    else if (C.isObject(n) && C.isIterable(n)) {
      let E = {}, A, k;
      for (const M of n) {
        if (!C.isArray(M))
          throw TypeError("Object iterator must return a key-value pair");
        E[k = M[0]] = (A = E[k]) ? C.isArray(A) ? [...A, M[1]] : [A, M[1]] : M[1];
      }
      h(E, a);
    } else
      n != null && p(a, n, s);
    return this;
  }
  get(n, a) {
    if (n = Mn(n), n) {
      const s = C.findKey(this, n);
      if (s) {
        const c = this[s];
        if (!a)
          return c;
        if (a === !0)
          return Fh(c);
        if (C.isFunction(a))
          return a.call(this, c, s);
        if (C.isRegExp(a))
          return a.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, a) {
    if (n = Mn(n), n) {
      const s = C.findKey(this, n);
      return !!(s && this[s] !== void 0 && (!a || qo(this, this[s], s, a)));
    }
    return !1;
  }
  delete(n, a) {
    const s = this;
    let c = !1;
    function p(h) {
      if (h = Mn(h), h) {
        const E = C.findKey(s, h);
        E && (!a || qo(s, s[E], E, a)) && (delete s[E], c = !0);
      }
    }
    return C.isArray(n) ? n.forEach(p) : p(n), c;
  }
  clear(n) {
    const a = Object.keys(this);
    let s = a.length, c = !1;
    for (; s--; ) {
      const p = a[s];
      (!n || qo(this, this[p], p, n, !0)) && (delete this[p], c = !0);
    }
    return c;
  }
  normalize(n) {
    const a = this, s = {};
    return C.forEach(this, (c, p) => {
      const h = C.findKey(s, p);
      if (h) {
        a[h] = yi(c), delete a[p];
        return;
      }
      const E = n ? Lh(p) : String(p).trim();
      E !== p && delete a[p], a[E] = yi(c), s[E] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const a = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (s, c) => {
      s != null && s !== !1 && (a[c] = n && C.isArray(s) ? s.join(", ") : s);
    }), a;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, a]) => n + ": " + a).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...a) {
    const s = new this(n);
    return a.forEach((c) => s.set(c)), s;
  }
  static accessor(n) {
    const s = (this[gl] = this[gl] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function p(h) {
      const E = Mn(h);
      s[E] || (Mh(c, h), s[E] = !0);
    }
    return C.isArray(n) ? n.forEach(p) : p(n), this;
  }
};
wt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(wt.prototype, ({ value: r }, n) => {
  let a = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => r,
    set(s) {
      this[a] = s;
    }
  };
});
C.freezeMethods(wt);
function Ko(r, n) {
  const a = this || Vn, s = n || a, c = wt.from(s.headers);
  let p = s.data;
  return C.forEach(r, function(E) {
    p = E.call(a, p, c.normalize(), n ? n.status : void 0);
  }), c.normalize(), p;
}
function Wl(r) {
  return !!(r && r.__CANCEL__);
}
function on(r, n, a) {
  se.call(this, r ?? "canceled", se.ERR_CANCELED, n, a), this.name = "CanceledError";
}
C.inherits(on, se, {
  __CANCEL__: !0
});
function Gl(r, n, a) {
  const s = a.config.validateStatus;
  !a.status || !s || s(a.status) ? r(a) : n(new se(
    "Request failed with status code " + a.status,
    [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
    a.config,
    a.request,
    a
  ));
}
function $h(r) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return n && n[1] || "";
}
function Nh(r, n) {
  r = r || 10;
  const a = new Array(r), s = new Array(r);
  let c = 0, p = 0, h;
  return n = n !== void 0 ? n : 1e3, function(A) {
    const k = Date.now(), M = s[p];
    h || (h = k), a[c] = A, s[c] = k;
    let U = p, X = 0;
    for (; U !== c; )
      X += a[U++], U = U % r;
    if (c = (c + 1) % r, c === p && (p = (p + 1) % r), k - h < n)
      return;
    const re = M && k - M;
    return re ? Math.round(X * 1e3 / re) : void 0;
  };
}
function Dh(r, n) {
  let a = 0, s = 1e3 / n, c, p;
  const h = (k, M = Date.now()) => {
    a = M, c = null, p && (clearTimeout(p), p = null), r(...k);
  };
  return [(...k) => {
    const M = Date.now(), U = M - a;
    U >= s ? h(k, M) : (c = k, p || (p = setTimeout(() => {
      p = null, h(c);
    }, s - U)));
  }, () => c && h(c)];
}
const Si = (r, n, a = 3) => {
  let s = 0;
  const c = Nh(50, 250);
  return Dh((p) => {
    const h = p.loaded, E = p.lengthComputable ? p.total : void 0, A = h - s, k = c(A), M = h <= E;
    s = h;
    const U = {
      loaded: h,
      total: E,
      progress: E ? h / E : void 0,
      bytes: A,
      rate: k || void 0,
      estimated: k && E && M ? (E - h) / k : void 0,
      event: p,
      lengthComputable: E != null,
      [n ? "download" : "upload"]: !0
    };
    r(U);
  }, a);
}, bl = (r, n) => {
  const a = r != null;
  return [(s) => n[0]({
    lengthComputable: a,
    total: r,
    loaded: s
  }), n[1]];
}, ml = (r) => (...n) => C.asap(() => r(...n)), Uh = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((r, n) => (a) => (a = new URL(a, at.origin), r.protocol === a.protocol && r.host === a.host && (n || r.port === a.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Bh = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(r, n, a, s, c, p) {
      const h = [r + "=" + encodeURIComponent(n)];
      C.isNumber(a) && h.push("expires=" + new Date(a).toGMTString()), C.isString(s) && h.push("path=" + s), C.isString(c) && h.push("domain=" + c), p === !0 && h.push("secure"), document.cookie = h.join("; ");
    },
    read(r) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
    },
    remove(r) {
      this.write(r, "", Date.now() - 864e5);
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
function jh(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function Hh(r, n) {
  return n ? r.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : r;
}
function Yl(r, n, a) {
  let s = !jh(n);
  return r && (s || a == !1) ? Hh(r, n) : n;
}
const wl = (r) => r instanceof wt ? { ...r } : r;
function Ur(r, n) {
  n = n || {};
  const a = {};
  function s(k, M, U, X) {
    return C.isPlainObject(k) && C.isPlainObject(M) ? C.merge.call({ caseless: X }, k, M) : C.isPlainObject(M) ? C.merge({}, M) : C.isArray(M) ? M.slice() : M;
  }
  function c(k, M, U, X) {
    if (C.isUndefined(M)) {
      if (!C.isUndefined(k))
        return s(void 0, k, U, X);
    } else return s(k, M, U, X);
  }
  function p(k, M) {
    if (!C.isUndefined(M))
      return s(void 0, M);
  }
  function h(k, M) {
    if (C.isUndefined(M)) {
      if (!C.isUndefined(k))
        return s(void 0, k);
    } else return s(void 0, M);
  }
  function E(k, M, U) {
    if (U in n)
      return s(k, M);
    if (U in r)
      return s(void 0, k);
  }
  const A = {
    url: p,
    method: p,
    data: p,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: E,
    headers: (k, M, U) => c(wl(k), wl(M), U, !0)
  };
  return C.forEach(Object.keys({ ...r, ...n }), function(M) {
    const U = A[M] || c, X = U(r[M], n[M], M);
    C.isUndefined(X) && U !== E || (a[M] = X);
  }), a;
}
const Jl = (r) => {
  const n = Ur({}, r);
  let { data: a, withXSRFToken: s, xsrfHeaderName: c, xsrfCookieName: p, headers: h, auth: E } = n;
  n.headers = h = wt.from(h), n.url = Vl(Yl(n.baseURL, n.url, n.allowAbsoluteUrls), r.params, r.paramsSerializer), E && h.set(
    "Authorization",
    "Basic " + btoa((E.username || "") + ":" + (E.password ? unescape(encodeURIComponent(E.password)) : ""))
  );
  let A;
  if (C.isFormData(a)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if ((A = h.getContentType()) !== !1) {
      const [k, ...M] = A ? A.split(";").map((U) => U.trim()).filter(Boolean) : [];
      h.setContentType([k || "multipart/form-data", ...M].join("; "));
    }
  }
  if (at.hasStandardBrowserEnv && (s && C.isFunction(s) && (s = s(n)), s || s !== !1 && Uh(n.url))) {
    const k = c && p && Bh.read(p);
    k && h.set(c, k);
  }
  return n;
}, zh = typeof XMLHttpRequest < "u", Vh = zh && function(r) {
  return new Promise(function(a, s) {
    const c = Jl(r);
    let p = c.data;
    const h = wt.from(c.headers).normalize();
    let { responseType: E, onUploadProgress: A, onDownloadProgress: k } = c, M, U, X, re, B;
    function Z() {
      re && re(), B && B(), c.cancelToken && c.cancelToken.unsubscribe(M), c.signal && c.signal.removeEventListener("abort", M);
    }
    let j = new XMLHttpRequest();
    j.open(c.method.toUpperCase(), c.url, !0), j.timeout = c.timeout;
    function pe() {
      if (!j)
        return;
      const Ae = wt.from(
        "getAllResponseHeaders" in j && j.getAllResponseHeaders()
      ), Ce = {
        data: !E || E === "text" || E === "json" ? j.responseText : j.response,
        status: j.status,
        statusText: j.statusText,
        headers: Ae,
        config: r,
        request: j
      };
      Gl(function(ut) {
        a(ut), Z();
      }, function(ut) {
        s(ut), Z();
      }, Ce), j = null;
    }
    "onloadend" in j ? j.onloadend = pe : j.onreadystatechange = function() {
      !j || j.readyState !== 4 || j.status === 0 && !(j.responseURL && j.responseURL.indexOf("file:") === 0) || setTimeout(pe);
    }, j.onabort = function() {
      j && (s(new se("Request aborted", se.ECONNABORTED, r, j)), j = null);
    }, j.onerror = function() {
      s(new se("Network Error", se.ERR_NETWORK, r, j)), j = null;
    }, j.ontimeout = function() {
      let Le = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const Ce = c.transitional || ql;
      c.timeoutErrorMessage && (Le = c.timeoutErrorMessage), s(new se(
        Le,
        Ce.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
        r,
        j
      )), j = null;
    }, p === void 0 && h.setContentType(null), "setRequestHeader" in j && C.forEach(h.toJSON(), function(Le, Ce) {
      j.setRequestHeader(Ce, Le);
    }), C.isUndefined(c.withCredentials) || (j.withCredentials = !!c.withCredentials), E && E !== "json" && (j.responseType = c.responseType), k && ([X, B] = Si(k, !0), j.addEventListener("progress", X)), A && j.upload && ([U, re] = Si(A), j.upload.addEventListener("progress", U), j.upload.addEventListener("loadend", re)), (c.cancelToken || c.signal) && (M = (Ae) => {
      j && (s(!Ae || Ae.type ? new on(null, r, j) : Ae), j.abort(), j = null);
    }, c.cancelToken && c.cancelToken.subscribe(M), c.signal && (c.signal.aborted ? M() : c.signal.addEventListener("abort", M)));
    const ve = $h(c.url);
    if (ve && at.protocols.indexOf(ve) === -1) {
      s(new se("Unsupported protocol " + ve + ":", se.ERR_BAD_REQUEST, r));
      return;
    }
    j.send(p || null);
  });
}, qh = (r, n) => {
  const { length: a } = r = r ? r.filter(Boolean) : [];
  if (n || a) {
    let s = new AbortController(), c;
    const p = function(k) {
      if (!c) {
        c = !0, E();
        const M = k instanceof Error ? k : this.reason;
        s.abort(M instanceof se ? M : new on(M instanceof Error ? M.message : M));
      }
    };
    let h = n && setTimeout(() => {
      h = null, p(new se(`timeout ${n} of ms exceeded`, se.ETIMEDOUT));
    }, n);
    const E = () => {
      r && (h && clearTimeout(h), h = null, r.forEach((k) => {
        k.unsubscribe ? k.unsubscribe(p) : k.removeEventListener("abort", p);
      }), r = null);
    };
    r.forEach((k) => k.addEventListener("abort", p));
    const { signal: A } = s;
    return A.unsubscribe = () => C.asap(E), A;
  }
}, Kh = function* (r, n) {
  let a = r.byteLength;
  if (a < n) {
    yield r;
    return;
  }
  let s = 0, c;
  for (; s < a; )
    c = s + n, yield r.slice(s, c), s = c;
}, Wh = async function* (r, n) {
  for await (const a of Gh(r))
    yield* Kh(a, n);
}, Gh = async function* (r) {
  if (r[Symbol.asyncIterator]) {
    yield* r;
    return;
  }
  const n = r.getReader();
  try {
    for (; ; ) {
      const { done: a, value: s } = await n.read();
      if (a)
        break;
      yield s;
    }
  } finally {
    await n.cancel();
  }
}, yl = (r, n, a, s) => {
  const c = Wh(r, n);
  let p = 0, h, E = (A) => {
    h || (h = !0, s && s(A));
  };
  return new ReadableStream({
    async pull(A) {
      try {
        const { done: k, value: M } = await c.next();
        if (k) {
          E(), A.close();
          return;
        }
        let U = M.byteLength;
        if (a) {
          let X = p += U;
          a(X);
        }
        A.enqueue(new Uint8Array(M));
      } catch (k) {
        throw E(k), k;
      }
    },
    cancel(A) {
      return E(A), c.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ii = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Xl = Ii && typeof ReadableStream == "function", Yh = Ii && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (n) => r.encode(n))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), Zl = (r, ...n) => {
  try {
    return !!r(...n);
  } catch {
    return !1;
  }
}, Jh = Xl && Zl(() => {
  let r = !1;
  const n = new Request(at.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !n;
}), _l = 64 * 1024, ta = Xl && Zl(() => C.isReadableStream(new Response("").body)), Ai = {
  stream: ta && ((r) => r.body)
};
Ii && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Ai[n] && (Ai[n] = C.isFunction(r[n]) ? (a) => a[n]() : (a, s) => {
      throw new se(`Response type '${n}' is not supported`, se.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const Xh = async (r) => {
  if (r == null)
    return 0;
  if (C.isBlob(r))
    return r.size;
  if (C.isSpecCompliantForm(r))
    return (await new Request(at.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (C.isArrayBufferView(r) || C.isArrayBuffer(r))
    return r.byteLength;
  if (C.isURLSearchParams(r) && (r = r + ""), C.isString(r))
    return (await Yh(r)).byteLength;
}, Zh = async (r, n) => {
  const a = C.toFiniteNumber(r.getContentLength());
  return a ?? Xh(n);
}, Qh = Ii && (async (r) => {
  let {
    url: n,
    method: a,
    data: s,
    signal: c,
    cancelToken: p,
    timeout: h,
    onDownloadProgress: E,
    onUploadProgress: A,
    responseType: k,
    headers: M,
    withCredentials: U = "same-origin",
    fetchOptions: X
  } = Jl(r);
  k = k ? (k + "").toLowerCase() : "text";
  let re = qh([c, p && p.toAbortSignal()], h), B;
  const Z = re && re.unsubscribe && (() => {
    re.unsubscribe();
  });
  let j;
  try {
    if (A && Jh && a !== "get" && a !== "head" && (j = await Zh(M, s)) !== 0) {
      let Ce = new Request(n, {
        method: "POST",
        body: s,
        duplex: "half"
      }), Ve;
      if (C.isFormData(s) && (Ve = Ce.headers.get("content-type")) && M.setContentType(Ve), Ce.body) {
        const [ut, Je] = bl(
          j,
          Si(ml(A))
        );
        s = yl(Ce.body, _l, ut, Je);
      }
    }
    C.isString(U) || (U = U ? "include" : "omit");
    const pe = "credentials" in Request.prototype;
    B = new Request(n, {
      ...X,
      signal: re,
      method: a.toUpperCase(),
      headers: M.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: pe ? U : void 0
    });
    let ve = await fetch(B, X);
    const Ae = ta && (k === "stream" || k === "response");
    if (ta && (E || Ae && Z)) {
      const Ce = {};
      ["status", "statusText", "headers"].forEach((ie) => {
        Ce[ie] = ve[ie];
      });
      const Ve = C.toFiniteNumber(ve.headers.get("content-length")), [ut, Je] = E && bl(
        Ve,
        Si(ml(E), !0)
      ) || [];
      ve = new Response(
        yl(ve.body, _l, ut, () => {
          Je && Je(), Z && Z();
        }),
        Ce
      );
    }
    k = k || "text";
    let Le = await Ai[C.findKey(Ai, k) || "text"](ve, r);
    return !Ae && Z && Z(), await new Promise((Ce, Ve) => {
      Gl(Ce, Ve, {
        data: Le,
        headers: wt.from(ve.headers),
        status: ve.status,
        statusText: ve.statusText,
        config: r,
        request: B
      });
    });
  } catch (pe) {
    throw Z && Z(), pe && pe.name === "TypeError" && /Load failed|fetch/i.test(pe.message) ? Object.assign(
      new se("Network Error", se.ERR_NETWORK, r, B),
      {
        cause: pe.cause || pe
      }
    ) : se.from(pe, pe && pe.code, r, B);
  }
}), ra = {
  http: ph,
  xhr: Vh,
  fetch: Qh
};
C.forEach(ra, (r, n) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: n });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: n });
  }
});
const xl = (r) => `- ${r}`, ep = (r) => C.isFunction(r) || r === null || r === !1, Ql = {
  getAdapter: (r) => {
    r = C.isArray(r) ? r : [r];
    const { length: n } = r;
    let a, s;
    const c = {};
    for (let p = 0; p < n; p++) {
      a = r[p];
      let h;
      if (s = a, !ep(a) && (s = ra[(h = String(a)).toLowerCase()], s === void 0))
        throw new se(`Unknown adapter '${h}'`);
      if (s)
        break;
      c[h || "#" + p] = s;
    }
    if (!s) {
      const p = Object.entries(c).map(
        ([E, A]) => `adapter ${E} ` + (A === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let h = n ? p.length > 1 ? `since :
` + p.map(xl).join(`
`) : " " + xl(p[0]) : "as no adapter specified";
      throw new se(
        "There is no suitable adapter to dispatch the request " + h,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: ra
};
function Wo(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new on(null, r);
}
function El(r) {
  return Wo(r), r.headers = wt.from(r.headers), r.data = Ko.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), Ql.getAdapter(r.adapter || Vn.adapter)(r).then(function(s) {
    return Wo(r), s.data = Ko.call(
      r,
      r.transformResponse,
      s
    ), s.headers = wt.from(s.headers), s;
  }, function(s) {
    return Wl(s) || (Wo(r), s && s.response && (s.response.data = Ko.call(
      r,
      r.transformResponse,
      s.response
    ), s.response.headers = wt.from(s.response.headers))), Promise.reject(s);
  });
}
const ec = "1.11.0", Li = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, n) => {
  Li[r] = function(s) {
    return typeof s === r || "a" + (n < 1 ? "n " : " ") + r;
  };
});
const kl = {};
Li.transitional = function(n, a, s) {
  function c(p, h) {
    return "[Axios v" + ec + "] Transitional option '" + p + "'" + h + (s ? ". " + s : "");
  }
  return (p, h, E) => {
    if (n === !1)
      throw new se(
        c(h, " has been removed" + (a ? " in " + a : "")),
        se.ERR_DEPRECATED
      );
    return a && !kl[h] && (kl[h] = !0, console.warn(
      c(
        h,
        " has been deprecated since v" + a + " and will be removed in the near future"
      )
    )), n ? n(p, h, E) : !0;
  };
};
Li.spelling = function(n) {
  return (a, s) => (console.warn(`${s} is likely a misspelling of ${n}`), !0);
};
function tp(r, n, a) {
  if (typeof r != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(r);
  let c = s.length;
  for (; c-- > 0; ) {
    const p = s[c], h = n[p];
    if (h) {
      const E = r[p], A = E === void 0 || h(E, p, r);
      if (A !== !0)
        throw new se("option " + p + " must be " + A, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0)
      throw new se("Unknown option " + p, se.ERR_BAD_OPTION);
  }
}
const _i = {
  assertOptions: tp,
  validators: Li
}, Jt = _i.validators;
let Dr = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new vl(),
      response: new vl()
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
  async request(n, a) {
    try {
      return await this._request(n, a);
    } catch (s) {
      if (s instanceof Error) {
        let c = {};
        Error.captureStackTrace ? Error.captureStackTrace(c) : c = new Error();
        const p = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? p && !String(s.stack).endsWith(p.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + p) : s.stack = p;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(n, a) {
    typeof n == "string" ? (a = a || {}, a.url = n) : a = n || {}, a = Ur(this.defaults, a);
    const { transitional: s, paramsSerializer: c, headers: p } = a;
    s !== void 0 && _i.assertOptions(s, {
      silentJSONParsing: Jt.transitional(Jt.boolean),
      forcedJSONParsing: Jt.transitional(Jt.boolean),
      clarifyTimeoutError: Jt.transitional(Jt.boolean)
    }, !1), c != null && (C.isFunction(c) ? a.paramsSerializer = {
      serialize: c
    } : _i.assertOptions(c, {
      encode: Jt.function,
      serialize: Jt.function
    }, !0)), a.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? a.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : a.allowAbsoluteUrls = !0), _i.assertOptions(a, {
      baseUrl: Jt.spelling("baseURL"),
      withXsrfToken: Jt.spelling("withXSRFToken")
    }, !0), a.method = (a.method || this.defaults.method || "get").toLowerCase();
    let h = p && C.merge(
      p.common,
      p[a.method]
    );
    p && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (B) => {
        delete p[B];
      }
    ), a.headers = wt.concat(h, p);
    const E = [];
    let A = !0;
    this.interceptors.request.forEach(function(Z) {
      typeof Z.runWhen == "function" && Z.runWhen(a) === !1 || (A = A && Z.synchronous, E.unshift(Z.fulfilled, Z.rejected));
    });
    const k = [];
    this.interceptors.response.forEach(function(Z) {
      k.push(Z.fulfilled, Z.rejected);
    });
    let M, U = 0, X;
    if (!A) {
      const B = [El.bind(this), void 0];
      for (B.unshift(...E), B.push(...k), X = B.length, M = Promise.resolve(a); U < X; )
        M = M.then(B[U++], B[U++]);
      return M;
    }
    X = E.length;
    let re = a;
    for (U = 0; U < X; ) {
      const B = E[U++], Z = E[U++];
      try {
        re = B(re);
      } catch (j) {
        Z.call(this, j);
        break;
      }
    }
    try {
      M = El.call(this, re);
    } catch (B) {
      return Promise.reject(B);
    }
    for (U = 0, X = k.length; U < X; )
      M = M.then(k[U++], k[U++]);
    return M;
  }
  getUri(n) {
    n = Ur(this.defaults, n);
    const a = Yl(n.baseURL, n.url, n.allowAbsoluteUrls);
    return Vl(a, n.params, n.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function(n) {
  Dr.prototype[n] = function(a, s) {
    return this.request(Ur(s || {}, {
      method: n,
      url: a,
      data: (s || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(n) {
  function a(s) {
    return function(p, h, E) {
      return this.request(Ur(E || {}, {
        method: n,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: p,
        data: h
      }));
    };
  }
  Dr.prototype[n] = a(), Dr.prototype[n + "Form"] = a(!0);
});
let rp = class tc {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function(p) {
      a = p;
    });
    const s = this;
    this.promise.then((c) => {
      if (!s._listeners) return;
      let p = s._listeners.length;
      for (; p-- > 0; )
        s._listeners[p](c);
      s._listeners = null;
    }), this.promise.then = (c) => {
      let p;
      const h = new Promise((E) => {
        s.subscribe(E), p = E;
      }).then(c);
      return h.cancel = function() {
        s.unsubscribe(p);
      }, h;
    }, n(function(p, h, E) {
      s.reason || (s.reason = new on(p, h, E), a(s.reason));
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
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(n) {
    if (!this._listeners)
      return;
    const a = this._listeners.indexOf(n);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const n = new AbortController(), a = (s) => {
      n.abort(s);
    };
    return this.subscribe(a), n.signal.unsubscribe = () => this.unsubscribe(a), n.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new tc(function(c) {
        n = c;
      }),
      cancel: n
    };
  }
};
function np(r) {
  return function(a) {
    return r.apply(null, a);
  };
}
function ip(r) {
  return C.isObject(r) && r.isAxiosError === !0;
}
const na = {
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
Object.entries(na).forEach(([r, n]) => {
  na[n] = r;
});
function rc(r) {
  const n = new Dr(r), a = Fl(Dr.prototype.request, n);
  return C.extend(a, Dr.prototype, n, { allOwnKeys: !0 }), C.extend(a, n, null, { allOwnKeys: !0 }), a.create = function(c) {
    return rc(Ur(r, c));
  }, a;
}
const De = rc(Vn);
De.Axios = Dr;
De.CanceledError = on;
De.CancelToken = rp;
De.isCancel = Wl;
De.VERSION = ec;
De.toFormData = Fi;
De.AxiosError = se;
De.Cancel = De.CanceledError;
De.all = function(n) {
  return Promise.all(n);
};
De.spread = np;
De.isAxiosError = ip;
De.mergeConfig = Ur;
De.AxiosHeaders = wt;
De.formToJSON = (r) => Kl(C.isHTMLForm(r) ? new FormData(r) : r);
De.getAdapter = Ql.getAdapter;
De.HttpStatusCode = na;
De.default = De;
const {
  Axios: Lp,
  AxiosError: Mp,
  CanceledError: $p,
  isCancel: Np,
  CancelToken: Dp,
  VERSION: Up,
  all: Bp,
  Cancel: jp,
  isAxiosError: Hp,
  spread: zp,
  toFormData: Vp,
  AxiosHeaders: qp,
  HttpStatusCode: Kp,
  formToJSON: Wp,
  getAdapter: Gp,
  mergeConfig: Yp
} = De, op = async () => {
  try {
    return (await De.get("https://api.ipify.org?format=json")).data.ip;
  } catch (r) {
    console.error("Error getting IP:", r);
  }
}, ap = () => Object.keys(window).find((r) => r.match(/^cdc_[a-zA-Z0-9]+_(Array|Promise|Symbol)$/)), sp = () => typeof window.__puppeteer_evaluation_script__ < "u" || typeof window.__pwPage < "u", lp = () => {
  try {
    return performance.getEntriesByType("mark").some((r) => r.name.startsWith("CDP"));
  } catch {
    return !1;
  }
}, cp = () => {
  try {
    return !!(window.chrome && window.chrome.debugger);
  } catch {
    return !1;
  }
}, up = () => {
  try {
    const r = Function.prototype.toString.toString();
    if (!r.includes("[native code]") || r.length > 200 || !Function.prototype.toString.toString.toString.call(
      Function.prototype.toString.toString
    ).includes("[native code]"))
      return !0;
    const a = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
    return !!(a && (a.configurable === !1 || typeof a.value != "function"));
  } catch {
    return !0;
  }
}, fp = () => !window.performance || !window.performance.memory ? Promise.resolve(!1) : new Promise((r) => {
  const n = [], a = setInterval(() => {
    new Array(1e5).fill(0).map(() => Math.random());
  }, 100);
  let s = 0;
  const c = setInterval(() => {
    n.push(performance.memory.usedJSHeapSize), s++, s >= 6 && (clearInterval(a), clearInterval(c), r(n.every((p) => p === n[0])));
  }, 300);
}), dp = () => new Promise((r) => {
  const n = [];
  let a = performance.now(), s = 0;
  const c = setInterval(() => {
    const p = performance.now();
    if (n.push(p - a - 20), a = p, ++s >= 15) {
      clearInterval(c);
      const h = n.reduce((E, A) => E + A * A, 0) / n.length;
      r(h < 0.05);
    }
  }, 20);
}), hp = () => {
  try {
    const r = document.createElement("canvas"), n = r.getContext("webgl") || r.getContext("experimental-webgl");
    if (!n) return "";
    const a = n.getExtension("WEBGL_debug_renderer_info");
    return a && n.getParameter(a.UNMASKED_RENDERER_WEBGL) || "";
  } catch {
    return "";
  }
}, pp = () => {
  const r = navigator.userAgent;
  if (!/Android|iPhone|Mobile/.test(r)) return !1;
  const a = navigator.maxTouchPoints === 0 && !("ontouchstart" in window), s = hp().toLowerCase(), c = /swiftshader|llvmpipe|mesa|virtualbox|vmware|software/.test(s), p = /adreno|mali|powervr|apple gpu/.test(s);
  return a || s !== "" && c && !p;
}, vp = async () => {
  const r = {};
  r.playwright = !!(navigator.userAgent.includes("Playwright") || window.__playwright || window.__playwright_evaluate || window.__pw_manual || window.__pwPage || document.__playwright), r.puppeteer = !!(window._phantom || window.__nightmare || window.domAutomation || window.domAutomationController || window.callPhantom || window.__puppeteer_evaluation_script__), r.webdriver = !!navigator.webdriver, r.cdp_cdc_property = !!ap(), r.cdp_binding = sp(), r.cdp_perf_marks = lp(), r.cdp_debugger_api = cp(), r.cdp_patched_tostring = up();
  const n = navigator.userAgent;
  r.headless_ua = n.includes("HeadlessChrome") || n.includes("Headless"), r.no_plugins = navigator.plugins.length === 0, r.no_languages = !navigator.languages || navigator.languages.length === 0, r.permissions_inconsistent = !1;
  try {
    if (navigator.permissions && typeof navigator.permissions.query == "function") {
      const a = await navigator.permissions.query({ name: "notifications" });
      r.permissions_inconsistent = Notification.permission === "denied" && a.state === "prompt";
    }
  } catch {
    r.permissions_inconsistent = !1;
  }
  try {
    [r.heap_static, r.loop_jitter_static] = await Promise.all([
      fp(),
      dp()
    ]);
  } catch {
    r.heap_static = !1, r.loop_jitter_static = !1;
  }
  try {
    r.cloud_phone_suspect = pp();
  } catch {
    r.cloud_phone_suspect = !1;
  }
  return r;
}, gp = [
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
], bp = (r) => gp.map((n) => r[n] ? "1" : "0").join(""), mp = async (r = 3e3, n = 200) => new Promise((a) => {
  const s = Date.now(), c = setInterval(() => {
    (ia() || Date.now() - s > r) && (clearInterval(c), a(ia()));
  }, n);
});
function ia() {
  return document.cookie.includes("__bbst=") && document.cookie.includes("__bbts=");
}
function Bn(r) {
  let n = r + "=", s = decodeURIComponent(document.cookie).split(";");
  for (let c = 0; c < s.length; c++) {
    let p = s[c];
    for (; p.charAt(0) == " "; )
      p = p.substring(1);
    if (p.indexOf(n) == 0)
      return p.substring(n.length, p.length);
  }
  return "";
}
function Nr(r, n, a = {}) {
  a = {
    path: "/",
    ...a
  };
  let s = encodeURIComponent(r) + "=" + encodeURIComponent(n);
  for (const c in a) {
    s += "; " + c;
    const p = a[c];
    p !== !0 && (s += "=" + p);
  }
  document.cookie = s;
}
function wp(r) {
  Array.isArray(r) || (r = [r]);
  const n = "Thu, 01 Jan 1970 00:00:00 GMT";
  r.forEach((a) => {
    document.cookie = `${a}=; Path=/; Expires=${n}`, document.cookie = `${a}=; Path=/; Domain=${location.hostname}; Expires=${n}`;
  });
}
const yp = "https://api.blockbots.org";
async function _p(r, n) {
  try {
    return (await De.post(
      yp + "/v1/js",
      r,
      {
        headers: {
          "X-API-Key": n,
          "Content-Type": "application/json"
        }
      }
    )).data;
  } catch (a) {
    return console.error("Request failed:", a.response?.data || a.message), a.response?.data;
  }
}
const Sl = async (r) => {
  let n = {};
  const a = ur(navigator.userAgent);
  n.os = a.os.name, n.ua = navigator.userAgent, n.fp = await pd(), n.bl_fp = await vd(), n.lang = navigator.language, n.s = bp(await vp()), n.ip = await op(), n.st = Bn("__bbst"), n.ts = Bn("__bbts"), console.log(n), await Rd();
  const s = await _p(n, r);
  return s && s.status === !0 && s.__bbst && s.__bbts && (Nr("__bbst", s.__bbst, { "Max-Age": 240, Secure: !0 }), Nr("__bbts", s.__bbts, { "Max-Age": 240, Secure: !0 }), Nr("__bbjwt", s.__bbjwt, { "Max-Age": 240, Secure: !0 })), s && s.status === "forbidden" && Nr("__bb_decision", "1", { "Max-Age": 240, Secure: !0 }), s;
};
async function xp(r) {
  return new Promise((n) => setTimeout(n, r));
}
const Ep = "https://api.blockbots.org";
async function kp() {
  try {
    const r = Bn("__bbst"), n = Bn("__bbts");
    if (!r || !n) return !1;
    const a = new URLSearchParams({
      st: r,
      ts: n
    });
    return (await De.get(Ep + "/validate?" + a.toString())).status === 200;
  } catch {
    return wp(["__bbst", "__bbts"]), !1;
  }
}
function Sp(r, n) {
  return n = { exports: {} }, r(n, n.exports), n.exports;
}
var mr = Sp(function(r, n) {
  (function(a) {
    var s = "function", c = "isNode", p = function(A, k) {
      return typeof A === k;
    }, h = function(A, k) {
      k !== null && (Array.isArray(k) ? k.map(function(M) {
        return h(A, M);
      }) : (E[c](k) || (k = document.createTextNode(k)), A.appendChild(k)));
    };
    function E(A, k) {
      var M = arguments, U = 1, X, re;
      if (A = E.isElement(A) ? A : document.createElement(A), p(k, "object") && !E[c](k) && !Array.isArray(k)) {
        U++;
        for (X in k)
          re = k[X], X = E.attrMap[X] || X, p(X, s) ? X(A, re) : p(re, s) ? A[X] = re : A.setAttribute(X, re);
      }
      for (; U < M.length; U++)
        h(A, M[U]);
      return A;
    }
    E.attrMap = {}, E.isElement = function(A) {
      return A instanceof Element;
    }, E[c] = function(A) {
      return A instanceof Node;
    }, typeof Proxy < "u" && (E.proxy = new Proxy(E, {
      get: function(A, k) {
        return !(k in E) && (E[k] = E.bind(null, k)), E[k];
      }
    })), a(E, s);
  })(function(a, s) {
    r.exports = a;
  });
});
let oa = !1;
function nc() {
  if (oa) return;
  oa = !0, document.body.innerHTML = `
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
    mr("h1", { class: "zone-name-title h1" }, location.hostname),
    mr(
      "div",
      { id: "loader", class: "spacer loading-verifying" },
      mr(
        "div",
        { class: "lds-ring" },
        mr("div"),
        mr("div"),
        mr("div"),
        mr("div")
      )
    ),
    mr(
      "div",
      {
        id: "loader-status",
        class: "core-msg spacer"
      },
      `${location.hostname} is checking your browser before accessing the site.`
    )
  );
}
function ic() {
  const r = document.getElementById("loader-status"), n = document.getElementById("loader");
  n && n.remove(), r && (r.textContent = "Access blocked. Automated traffic detected.", r.style.color = "#e5533d", r.style.fontWeight = "600");
}
function Ap() {
  document.body.innerHTML = "", oa = !1;
}
var Al = {}, Cl;
function Cp() {
  if (Cl) return Al;
  Cl = 1;
  const r = !1;
  var n = Array.isArray, a = Array.prototype.indexOf, s = Array.prototype.includes, c = Array.from, p = Object.keys, h = Object.defineProperty, E = Object.getOwnPropertyDescriptor, A = Object.getOwnPropertyDescriptors, k = Object.prototype, M = Array.prototype, U = Object.getPrototypeOf, X = Object.isExtensible;
  const re = () => {
  };
  function B(e) {
    for (var t = 0; t < e.length; t++)
      e[t]();
  }
  function Z() {
    var e, t, i = new Promise((o, l) => {
      e = o, t = l;
    });
    return { promise: i, resolve: e, reject: t };
  }
  const j = 2, pe = 4, ve = 8, Ae = 1 << 24, Le = 16, Ce = 32, Ve = 64, ut = 128, Je = 512, ie = 1024, Ue = 2048, rt = 4096, d = 8192, g = 16384, w = 32768, v = 1 << 25, q = 65536, N = 1 << 17, D = 1 << 18, K = 1 << 19, nt = 1 << 20, Ut = 65536, xr = 1 << 21, Br = 1 << 22, fr = 1 << 23, jr = /* @__PURE__ */ Symbol("$state"), oc = /* @__PURE__ */ Symbol("legacy props"), ac = /* @__PURE__ */ Symbol(""), da = /* @__PURE__ */ Symbol("attributes"), Mi = /* @__PURE__ */ Symbol("class"), $i = /* @__PURE__ */ Symbol("style"), Ni = /* @__PURE__ */ Symbol("text"), an = /* @__PURE__ */ Symbol("form reset"), qn = new class extends Error {
    name = "StaleReactionError";
    message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
  }(), sn = (
    // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
    !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
  ), ln = 3, cn = 8;
  function ha(e) {
    return e === this.v;
  }
  function pa(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
  }
  function sc(e) {
    return !pa(e, this.v);
  }
  function lc(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function cc() {
    throw new Error("https://svelte.dev/e/async_derived_orphan");
  }
  function uc(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function fc() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function dc(e) {
    throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function hc() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function pc() {
    throw new Error("https://svelte.dev/e/hydration_failed");
  }
  function vc() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function gc() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function bc() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  function mc() {
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
  }
  let wc = !1;
  const yc = 1, _c = 2, Di = "[", va = "[!", ga = "[?", ba = "]", Er = {}, qe = /* @__PURE__ */ Symbol("uninitialized"), ma = "http://www.w3.org/1999/xhtml", xc = "http://www.w3.org/2000/svg", Ec = "http://www.w3.org/1998/Math/MathML", kc = "@attach";
  let ft = null;
  function Hr(e) {
    ft = e;
  }
  function er(e, t = !1, i) {
    ft = {
      p: ft,
      i: !1,
      c: null,
      e: null,
      s: e,
      x: null,
      r: (
        /** @type {Effect} */
        ce
      ),
      l: null
    };
  }
  function tr(e) {
    var t = (
      /** @type {ComponentContext} */
      ft
    ), i = t.e;
    if (i !== null) {
      t.e = null;
      for (var o of i)
        es(o);
    }
    return e !== void 0 && (t.x = e), t.i = !0, ft = t.p, e ?? /** @type {T} */
    {};
  }
  function wa() {
    return !0;
  }
  let kr = [];
  function ya() {
    var e = kr;
    kr = [], B(e);
  }
  function rr(e) {
    if (kr.length === 0 && !dn) {
      var t = kr;
      queueMicrotask(() => {
        t === kr && ya();
      });
    }
    kr.push(e);
  }
  function Sc() {
    for (; kr.length > 0; )
      ya();
  }
  function Ac() {
    console.warn("https://svelte.dev/e/derived_inert");
  }
  function un(e) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  function Cc() {
    console.warn("https://svelte.dev/e/select_multiple_invalid_value");
  }
  function Rc() {
    console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
  }
  let fe = !1;
  function Bt(e) {
    fe = e;
  }
  let be;
  function st(e) {
    if (e === null)
      throw un(), Er;
    return be = e;
  }
  function Sr() {
    return st(/* @__PURE__ */ Ht(be));
  }
  function Pe(e) {
    if (fe) {
      if (/* @__PURE__ */ Ht(be) !== null)
        throw un(), Er;
      be = e;
    }
  }
  function Ui(e = 1) {
    if (fe) {
      for (var t = e, i = be; t--; )
        i = /** @type {TemplateNode} */
        /* @__PURE__ */ Ht(i);
      be = i;
    }
  }
  function Bi(e = !0) {
    for (var t = 0, i = be; ; ) {
      if (i.nodeType === cn) {
        var o = (
          /** @type {Comment} */
          i.data
        );
        if (o === ba) {
          if (t === 0) return i;
          t -= 1;
        } else (o === Di || o === va || // "[1", "[2", etc. for if blocks
        o[0] === "[" && !isNaN(Number(o.slice(1)))) && (t += 1);
      }
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ht(i)
      );
      e && i.remove(), i = l;
    }
  }
  function _a(e) {
    if (!e || e.nodeType !== cn)
      throw un(), Er;
    return (
      /** @type {Comment} */
      e.data
    );
  }
  function nr(e) {
    if (typeof e != "object" || e === null || jr in e)
      return e;
    const t = U(e);
    if (t !== k && t !== M)
      return e;
    var i = /* @__PURE__ */ new Map(), o = n(e), l = /* @__PURE__ */ he(0), f = Tr, b = (m) => {
      if (Tr === f)
        return m();
      var _ = we, y = Tr;
      Ct(null), Ga(f);
      var S = m();
      return Ct(_), Ga(y), S;
    };
    return o && i.set("length", /* @__PURE__ */ he(
      /** @type {any[]} */
      e.length
    )), new Proxy(
      /** @type {any} */
      e,
      {
        defineProperty(m, _, y) {
          (!("value" in y) || y.configurable === !1 || y.enumerable === !1 || y.writable === !1) && vc();
          var S = i.get(_);
          return S === void 0 ? b(() => {
            var P = /* @__PURE__ */ he(y.value);
            return i.set(_, P), P;
          }) : G(S, y.value, !0), !0;
        },
        deleteProperty(m, _) {
          var y = i.get(_);
          if (y === void 0) {
            if (_ in m) {
              const S = b(() => /* @__PURE__ */ he(qe));
              i.set(_, S), pn(l);
            }
          } else
            G(y, qe), pn(l);
          return !0;
        },
        get(m, _, y) {
          if (_ === jr)
            return e;
          var S = i.get(_), P = _ in m;
          if (S === void 0 && (!P || E(m, _)?.writable) && (S = b(() => {
            var z = nr(P ? m[_] : qe), H = /* @__PURE__ */ he(z);
            return H;
          }), i.set(_, S)), S !== void 0) {
            var R = u(S);
            return R === qe ? void 0 : R;
          }
          return Reflect.get(m, _, y);
        },
        getOwnPropertyDescriptor(m, _) {
          var y = Reflect.getOwnPropertyDescriptor(m, _);
          if (y && "value" in y) {
            var S = i.get(_);
            S && (y.value = u(S));
          } else if (y === void 0) {
            var P = i.get(_), R = P?.v;
            if (P !== void 0 && R !== qe)
              return {
                enumerable: !0,
                configurable: !0,
                value: R,
                writable: !0
              };
          }
          return y;
        },
        has(m, _) {
          if (_ === jr)
            return !0;
          var y = i.get(_), S = y !== void 0 && y.v !== qe || Reflect.has(m, _);
          if (y !== void 0 || ce !== null && (!S || E(m, _)?.writable)) {
            y === void 0 && (y = b(() => {
              var R = S ? nr(m[_]) : qe, z = /* @__PURE__ */ he(R);
              return z;
            }), i.set(_, y));
            var P = u(y);
            if (P === qe)
              return !1;
          }
          return S;
        },
        set(m, _, y, S) {
          var P = i.get(_), R = _ in m;
          if (o && _ === "length")
            for (var z = y; z < /** @type {Source<number>} */
            P.v; z += 1) {
              var H = i.get(z + "");
              H !== void 0 ? G(H, qe) : z in m && (H = b(() => /* @__PURE__ */ he(qe)), i.set(z + "", H));
            }
          if (P === void 0)
            (!R || E(m, _)?.writable) && (P = b(() => /* @__PURE__ */ he(void 0)), G(P, nr(y)), i.set(_, P));
          else {
            R = P.v !== qe;
            var Q = b(() => nr(y));
            G(P, Q);
          }
          var le = Reflect.getOwnPropertyDescriptor(m, _);
          if (le?.set && le.set.call(S, y), !R) {
            if (o && typeof _ == "string") {
              var ge = (
                /** @type {Source<number>} */
                i.get("length")
              ), Qe = Number(_);
              Number.isInteger(Qe) && Qe >= ge.v && G(ge, Qe + 1);
            }
            pn(l);
          }
          return !0;
        },
        ownKeys(m) {
          u(l);
          var _ = Reflect.ownKeys(m).filter((P) => {
            var R = i.get(P);
            return R === void 0 || R.v !== qe;
          });
          for (var [y, S] of i)
            S.v !== qe && !(y in m) && _.push(y);
          return _;
        },
        setPrototypeOf() {
          gc();
        }
      }
    );
  }
  function xa(e) {
    try {
      if (e !== null && typeof e == "object" && jr in e)
        return e[jr];
    } catch {
    }
    return e;
  }
  function Tc(e, t) {
    return Object.is(xa(e), xa(t));
  }
  var Ar, ji, Ea, ka, Sa;
  function Hi() {
    if (Ar === void 0) {
      Ar = window, ji = document, Ea = /Firefox/.test(navigator.userAgent);
      var e = Element.prototype, t = Node.prototype, i = Text.prototype;
      ka = E(t, "firstChild").get, Sa = E(t, "nextSibling").get, X(e) && (e[Mi] = void 0, e[da] = null, e[$i] = void 0, e.__e = void 0), X(i) && (i[Ni] = void 0);
    }
  }
  function jt(e = "") {
    return document.createTextNode(e);
  }
  // @__NO_SIDE_EFFECTS__
  function yt(e) {
    return (
      /** @type {TemplateNode | null} */
      ka.call(e)
    );
  }
  // @__NO_SIDE_EFFECTS__
  function Ht(e) {
    return (
      /** @type {TemplateNode | null} */
      Sa.call(e)
    );
  }
  function Be(e, t) {
    if (!fe)
      return /* @__PURE__ */ yt(e);
    var i = /* @__PURE__ */ yt(be);
    if (i === null)
      i = be.appendChild(jt());
    else if (t && i.nodeType !== ln) {
      var o = jt();
      return i?.before(o), st(o), o;
    }
    return t && Kn(
      /** @type {Text} */
      i
    ), st(i), i;
  }
  function zr(e, t = !1) {
    if (!fe) {
      var i = /* @__PURE__ */ yt(e);
      return i instanceof Comment && i.data === "" ? /* @__PURE__ */ Ht(i) : i;
    }
    if (t) {
      if (be?.nodeType !== ln) {
        var o = jt();
        return be?.before(o), st(o), o;
      }
      Kn(
        /** @type {Text} */
        be
      );
    }
    return be;
  }
  function Me(e, t = 1, i = !1) {
    let o = fe ? be : e;
    for (var l; t--; )
      l = o, o = /** @type {TemplateNode} */
      /* @__PURE__ */ Ht(o);
    if (!fe)
      return o;
    if (i) {
      if (o?.nodeType !== ln) {
        var f = jt();
        return o === null ? l?.after(f) : o.before(f), st(f), f;
      }
      Kn(
        /** @type {Text} */
        o
      );
    }
    return st(o), o;
  }
  function Oc(e) {
    e.textContent = "";
  }
  function zi(e, t, i) {
    return (
      /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
      document.createElementNS(t ?? ma, e, void 0)
    );
  }
  function Kn(e) {
    if (
      /** @type {string} */
      e.nodeValue.length < 65536
    )
      return;
    let t = e.nextSibling;
    for (; t !== null && t.nodeType === ln; )
      t.remove(), e.nodeValue += /** @type {string} */
      t.nodeValue, t = e.nextSibling;
  }
  function Aa(e) {
    var t = ce;
    if (t === null)
      return we.f |= fr, e;
    if ((t.f & w) === 0 && (t.f & pe) === 0)
      throw e;
    dr(e, t);
  }
  function dr(e, t) {
    for (; t !== null; ) {
      if ((t.f & ut) !== 0) {
        if ((t.f & w) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (i) {
          e = i;
        }
      }
      t = t.parent;
    }
    throw e;
  }
  const Pc = -7169;
  function He(e, t) {
    e.f = e.f & Pc | t;
  }
  function Vi(e) {
    (e.f & Je) !== 0 || e.deps === null ? He(e, ie) : He(e, rt);
  }
  function Ca(e) {
    if (e !== null)
      for (const t of e)
        (t.f & j) === 0 || (t.f & Ut) === 0 || (t.f ^= Ut, Ca(
          /** @type {Derived} */
          t.deps
        ));
  }
  function Ra(e, t, i) {
    (e.f & Ue) !== 0 ? t.add(e) : (e.f & rt) !== 0 && i.add(e), Ca(e.deps), He(e, ie);
  }
  function Ta(e, t, i) {
    if (e == null)
      return t(void 0), re;
    const o = bn(
      () => e.subscribe(
        t,
        // @ts-expect-error
        i
      )
    );
    return o.unsubscribe ? () => o.unsubscribe() : o;
  }
  const Vr = [];
  function Fc(e, t = re) {
    let i = null;
    const o = /* @__PURE__ */ new Set();
    function l(m) {
      if (pa(e, m) && (e = m, i)) {
        const _ = !Vr.length;
        for (const y of o)
          y[1](), Vr.push(y, e);
        if (_) {
          for (let y = 0; y < Vr.length; y += 2)
            Vr[y][0](Vr[y + 1]);
          Vr.length = 0;
        }
      }
    }
    function f(m) {
      l(m(
        /** @type {T} */
        e
      ));
    }
    function b(m, _ = re) {
      const y = [m, _];
      return o.add(y), o.size === 1 && (i = t(l, f) || re), m(
        /** @type {T} */
        e
      ), () => {
        o.delete(y), o.size === 0 && i && (i(), i = null);
      };
    }
    return { set: l, update: f, subscribe: b };
  }
  function fn(e) {
    let t;
    return Ta(e, (i) => t = i)(), t;
  }
  let qi = /* @__PURE__ */ Symbol("unmounted");
  function Oa(e, t, i) {
    const o = i[t] ??= {
      store: null,
      source: /* @__PURE__ */ ja(void 0),
      unsubscribe: re
    };
    if (o.store !== e && !(qi in i))
      if (o.unsubscribe(), o.store = e ?? null, e == null)
        o.source.v = void 0, o.unsubscribe = re;
      else {
        var l = !0;
        o.unsubscribe = Ta(e, (f) => {
          l ? o.source.v = f : G(o.source, f);
        }), l = !1;
      }
    return e && qi in i ? fn(e) : u(o.source);
  }
  function Ic() {
    const e = {};
    function t() {
      ei(() => {
        for (var i in e)
          e[i].unsubscribe();
        h(e, qi, {
          enumerable: !1,
          value: !0
        });
      });
    }
    return [e, t];
  }
  let Ki = null, qr = null, de = null, Wi = null, Lt = null, Gi = null, dn = !1, Yi = !1, Kr = null, Wn = null;
  var Pa = 0;
  let Lc = 1;
  class ir {
    id = Lc++;
    /** True as soon as `#process` was called */
    #e = !1;
    linked = !0;
    /** @type {Batch | null} */
    #t = null;
    /** @type {Batch | null} */
    #r = null;
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    async_deriveds = /* @__PURE__ */ new Map();
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    current = /* @__PURE__ */ new Map();
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    previous = /* @__PURE__ */ new Map();
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    unblocked = /* @__PURE__ */ new Set();
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    #l = /* @__PURE__ */ new Set();
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    #n = /* @__PURE__ */ new Set();
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    #a = /* @__PURE__ */ new Set();
    /**
     * The number of async effects that are currently in flight
     */
    #i = 0;
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    #o = /* @__PURE__ */ new Map();
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    #d = null;
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    #s = [];
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    #p = [];
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    #h = /* @__PURE__ */ new Set();
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    #c = /* @__PURE__ */ new Set();
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    #u = /* @__PURE__ */ new Map();
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    #f = /* @__PURE__ */ new Set();
    is_fork = !1;
    #b = !1;
    #_() {
      if (this.is_fork) return !0;
      for (const o of this.#o.keys()) {
        for (var t = o, i = !1; t.parent !== null; ) {
          if (this.#u.has(t)) {
            i = !0;
            break;
          }
          t = t.parent;
        }
        if (!i)
          return !0;
      }
      return !1;
    }
    /**
     * Add an effect to the #skipped_branches map and reset its children
     * @param {Effect} effect
     */
    skip_effect(t) {
      this.#u.has(t) || this.#u.set(t, { d: [], m: [] }), this.#f.delete(t);
    }
    /**
     * Remove an effect from the #skipped_branches map and reschedule
     * any tracked dirty/maybe_dirty child effects
     * @param {Effect} effect
     * @param {(e: Effect) => void} callback
     */
    unskip_effect(t, i = (o) => this.schedule(o)) {
      var o = this.#u.get(t);
      if (o) {
        this.#u.delete(t);
        for (var l of o.d)
          He(l, Ue), i(l);
        for (l of o.m)
          He(l, rt), i(l);
      }
      this.#f.add(t);
    }
    #g() {
      if (this.#e = !0, Pa++ > 1e3 && (this.#y(), Mc()), !this.#_()) {
        for (const _ of this.#h)
          this.#c.delete(_), He(_, Ue), this.schedule(_);
        for (const _ of this.#c)
          He(_, rt), this.schedule(_);
      }
      const t = this.#s;
      this.#s = [], this.apply();
      var i = Kr = [], o = [], l = Wn = [];
      for (const _ of t)
        try {
          this.#x(_, i, o);
        } catch (y) {
          throw Ma(_), y;
        }
      if (de = null, l.length > 0) {
        var f = ir.ensure();
        for (const _ of l)
          f.schedule(_);
      }
      if (Kr = null, Wn = null, this.#_()) {
        this.#v(o), this.#v(i);
        for (const [_, y] of this.#u)
          La(_, y);
        l.length > 0 && de.#g();
        return;
      }
      const b = this.#E();
      if (b) {
        b.#m(this);
        return;
      }
      this.#h.clear(), this.#c.clear();
      for (const _ of this.#l) _(this);
      this.#l.clear(), Wi = this, Fa(o), Fa(i), Wi = null, this.#d?.resolve();
      var m = (
        /** @type {Batch | null} */
        /** @type {unknown} */
        de
      );
      if (this.linked && this.#i === 0 && this.#y(), this.#s.length > 0) {
        m === null && (m = this, this.#w());
        const _ = m;
        _.#s.push(...this.#s.filter((y) => !_.#s.includes(y)));
      }
      m !== null && m.#g();
    }
    /**
     * Traverse the effect tree, executing effects or stashing
     * them for later execution as appropriate
     * @param {Effect} root
     * @param {Effect[]} effects
     * @param {Effect[]} render_effects
     */
    #x(t, i, o) {
      t.f ^= ie;
      for (var l = t.first; l !== null; ) {
        var f = l.f, b = (f & (Ce | Ve)) !== 0, m = b && (f & ie) !== 0, _ = m || (f & d) !== 0 || this.#u.has(l);
        if (!_ && l.fn !== null) {
          b ? l.f ^= ie : (f & pe) !== 0 ? i.push(l) : vn(l) && ((f & Le) !== 0 && this.#c.add(l), Wr(l));
          var y = l.first;
          if (y !== null) {
            l = y;
            continue;
          }
        }
        for (; l !== null; ) {
          var S = l.next;
          if (S !== null) {
            l = S;
            break;
          }
          l = l.parent;
        }
      }
    }
    #E() {
      for (var t = this.#t; t !== null; ) {
        if (!t.is_fork) {
          for (const [i, [, o]] of this.current)
            if (t.current.has(i) && !o)
              return t;
        }
        t = t.#t;
      }
      return null;
    }
    /**
     * @param {Batch} batch
     */
    #m(t) {
      for (const [o, l] of t.current)
        !this.previous.has(o) && t.previous.has(o) && this.previous.set(o, t.previous.get(o)), this.current.set(o, l);
      for (const [o, l] of t.async_deriveds) {
        const f = this.async_deriveds.get(o);
        f && l.promise.then(f.resolve);
      }
      const i = (o) => {
        var l = o.reactions;
        if (l !== null)
          for (const m of l) {
            var f = m.f;
            if ((f & j) !== 0)
              i(
                /** @type {Derived} */
                m
              );
            else {
              var b = (
                /** @type {Effect} */
                m
              );
              f & (Br | Le) && !this.async_deriveds.has(b) && (this.#c.delete(b), He(b, Ue), this.schedule(b));
            }
          }
      };
      for (const o of this.current.keys())
        i(o);
      this.oncommit(() => t.discard()), t.#y(), de = this, this.#g();
    }
    /**
     * @param {Effect[]} effects
     */
    #v(t) {
      for (var i = 0; i < t.length; i += 1)
        Ra(t[i], this.#h, this.#c);
    }
    /**
     * Associate a change to a given source with the current
     * batch, noting its previous and current values
     * @param {Value} source
     * @param {any} value
     * @param {boolean} [is_derived]
     */
    capture(t, i, o = !1) {
      t.v !== qe && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & fr) === 0 && (this.current.set(t, [i, o]), Lt?.set(t, i)), this.is_fork || (t.v = i);
    }
    activate() {
      de = this;
    }
    deactivate() {
      de = null, Lt = null;
    }
    flush() {
      try {
        Yi = !0, de = this, this.#g();
      } finally {
        Pa = 0, Gi = null, Kr = null, Wn = null, Yi = !1, de = null, Lt = null, Cr.clear();
      }
    }
    discard() {
      for (const t of this.#n) t(this);
      this.#n.clear(), this.#a.clear(), this.#y();
    }
    /**
     * @param {Effect} effect
     */
    register_created_effect(t) {
      this.#p.push(t);
    }
    #k() {
      this.#y();
      for (let S = Ki; S !== null; S = S.#r) {
        var t = S.id < this.id, i = [];
        for (const [P, [R, z]] of this.current) {
          if (S.current.has(P)) {
            var o = (
              /** @type {[any, boolean]} */
              S.current.get(P)[0]
            );
            if (t && R !== o)
              S.current.set(P, [R, z]);
            else
              continue;
          }
          i.push(P);
        }
        if (t)
          for (const [P, R] of this.async_deriveds) {
            const z = S.async_deriveds.get(P);
            z && R.promise.then(z.resolve);
          }
        if (S.#e) {
          var l = [...S.current.keys()].filter((P) => !this.current.has(P));
          if (l.length === 0)
            t && S.discard();
          else if (i.length > 0) {
            if (t)
              for (const P of this.#f)
                S.unskip_effect(P, (R) => {
                  (R.f & (Le | Br)) !== 0 ? S.schedule(R) : S.#v([R]);
                });
            S.activate();
            var f = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map();
            for (var m of i)
              Ia(m, l, f, b);
            b = /* @__PURE__ */ new Map();
            var _ = [...S.current.keys()].filter(
              (P) => this.current.has(P) ? (
                /** @type {[any, boolean]} */
                this.current.get(P)[0] !== P.v
              ) : !0
            );
            if (_.length > 0)
              for (const P of this.#p)
                (P.f & (g | d | N)) === 0 && Ji(P, _, b) && ((P.f & (Br | Le)) !== 0 ? (He(P, Ue), S.schedule(P)) : S.#h.add(P));
            if (S.#s.length > 0) {
              S.apply();
              for (var y of S.#s)
                S.#x(y, [], []);
              S.#s = [];
            }
            S.deactivate();
          }
        }
      }
    }
    /**
     * @param {boolean} blocking
     * @param {Effect} effect
     */
    increment(t, i) {
      if (this.#i += 1, t) {
        let o = this.#o.get(i) ?? 0;
        this.#o.set(i, o + 1);
      }
    }
    /**
     * @param {boolean} blocking
     * @param {Effect} effect
     */
    decrement(t, i) {
      if (this.#i -= 1, t) {
        let o = this.#o.get(i) ?? 0;
        o === 1 ? this.#o.delete(i) : this.#o.set(i, o - 1);
      }
      this.#b || (this.#b = !0, rr(() => {
        this.#b = !1, this.linked && this.flush();
      }));
    }
    /**
     * @param {Set<Effect>} dirty_effects
     * @param {Set<Effect>} maybe_dirty_effects
     */
    transfer_effects(t, i) {
      for (const o of t)
        this.#h.add(o);
      for (const o of i)
        this.#c.add(o);
      t.clear(), i.clear();
    }
    /** @param {(batch: Batch) => void} fn */
    oncommit(t) {
      this.#l.add(t);
    }
    /** @param {(batch: Batch) => void} fn */
    ondiscard(t) {
      this.#n.add(t);
    }
    /** @param {(batch: Batch) => void} fn */
    on_fork_commit(t) {
      this.#a.add(t);
    }
    run_fork_commit_callbacks() {
      for (const t of this.#a) t(this);
      this.#a.clear();
    }
    settled() {
      return (this.#d ??= Z()).promise;
    }
    static ensure() {
      if (de === null) {
        const t = de = new ir();
        t.#w(), !Yi && !dn && rr(() => {
          t.#e || t.flush();
        });
      }
      return de;
    }
    apply() {
      {
        Lt = null;
        return;
      }
    }
    /**
     *
     * @param {Effect} effect
     */
    schedule(t) {
      if (Gi = t, t.b?.is_pending && (t.f & (pe | ve | Ae)) !== 0 && (t.f & w) === 0) {
        t.b.defer_effect(t);
        return;
      }
      for (var i = t; i.parent !== null; ) {
        i = i.parent;
        var o = i.f;
        if (Kr !== null && i === ce && (we === null || (we.f & j) === 0))
          return;
        if ((o & (Ve | Ce)) !== 0) {
          if ((o & ie) === 0)
            return;
          i.f ^= ie;
        }
      }
      this.#s.push(i);
    }
    #w() {
      qr === null ? Ki = qr = this : (qr.#r = this, this.#t = qr), qr = this;
    }
    #y() {
      var t = this.#t, i = this.#r;
      t === null ? Ki = i : t.#r = i, i === null ? qr = t : i.#t = t, this.linked = !1;
    }
  }
  function Te(e) {
    var t = dn;
    dn = !0;
    try {
      for (var i; ; ) {
        if (Sc(), de === null)
          return (
            /** @type {T} */
            i
          );
        de.flush();
      }
    } finally {
      dn = t;
    }
  }
  function Mc() {
    try {
      hc();
    } catch (e) {
      dr(e, Gi);
    }
  }
  let or = null;
  function Fa(e) {
    var t = e.length;
    if (t !== 0) {
      for (var i = 0; i < t; ) {
        var o = e[i++];
        if ((o.f & (g | d)) === 0 && vn(o) && (or = /* @__PURE__ */ new Set(), Wr(o), o.deps === null && o.first === null && o.nodes === null && o.teardown === null && o.ac === null && is(o), or?.size > 0)) {
          Cr.clear();
          for (const l of or) {
            if ((l.f & (g | d)) !== 0) continue;
            const f = [l];
            let b = l.parent;
            for (; b !== null; )
              or.has(b) && (or.delete(b), f.push(b)), b = b.parent;
            for (let m = f.length - 1; m >= 0; m--) {
              const _ = f[m];
              (_.f & (g | d)) === 0 && Wr(_);
            }
          }
          or.clear();
        }
      }
      or = null;
    }
  }
  function Ia(e, t, i, o) {
    if (!i.has(e) && (i.add(e), e.reactions !== null))
      for (const l of e.reactions) {
        const f = l.f;
        (f & j) !== 0 ? Ia(
          /** @type {Derived} */
          l,
          t,
          i,
          o
        ) : (f & (Br | Le)) !== 0 && (f & Ue) === 0 && Ji(l, t, o) && (He(l, Ue), Xi(
          /** @type {Effect} */
          l
        ));
      }
  }
  function Ji(e, t, i) {
    const o = i.get(e);
    if (o !== void 0) return o;
    if (e.deps !== null)
      for (const l of e.deps) {
        if (s.call(t, l))
          return !0;
        if ((l.f & j) !== 0 && Ji(
          /** @type {Derived} */
          l,
          t,
          i
        ))
          return i.set(
            /** @type {Derived} */
            l,
            !0
          ), !0;
      }
    return i.set(e, !1), !1;
  }
  function Xi(e) {
    de.schedule(e);
  }
  function La(e, t) {
    if (!((e.f & Ce) !== 0 && (e.f & ie) !== 0)) {
      (e.f & Ue) !== 0 ? t.d.push(e) : (e.f & rt) !== 0 && t.m.push(e), He(e, ie);
      for (var i = e.first; i !== null; )
        La(i, t), i = i.next;
    }
  }
  function Ma(e) {
    He(e, ie);
    for (var t = e.first; t !== null; )
      Ma(t), t = t.next;
  }
  function $c(e) {
    let t = 0, i = hn(0), o;
    return () => {
      eo() && (u(i), ti(() => (t === 0 && (o = bn(() => e(() => pn(i)))), t += 1, () => {
        rr(() => {
          t -= 1, t === 0 && (o?.(), o = void 0, pn(i));
        });
      })));
    };
  }
  var Nc = q | K;
  function Dc(e, t, i, o) {
    new Uc(e, t, i, o);
  }
  class Uc {
    /** @type {Boundary | null} */
    parent;
    is_pending = !1;
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    transform_error;
    /** @type {TemplateNode} */
    #e;
    /** @type {TemplateNode | null} */
    #t = fe ? be : null;
    /** @type {BoundaryProps} */
    #r;
    /** @type {((anchor: Node) => void)} */
    #l;
    /** @type {Effect} */
    #n;
    /** @type {Effect | null} */
    #a = null;
    /** @type {Effect | null} */
    #i = null;
    /** @type {Effect | null} */
    #o = null;
    /** @type {DocumentFragment | null} */
    #d = null;
    #s = 0;
    #p = 0;
    #h = !1;
    /** @type {Set<Effect>} */
    #c = /* @__PURE__ */ new Set();
    /** @type {Set<Effect>} */
    #u = /* @__PURE__ */ new Set();
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    #f = null;
    #b = $c(() => (this.#f = hn(this.#s), () => {
      this.#f = null;
    }));
    /**
     * @param {TemplateNode} node
     * @param {BoundaryProps} props
     * @param {((anchor: Node) => void)} children
     * @param {((error: unknown) => unknown) | undefined} [transform_error]
     */
    constructor(t, i, o, l) {
      this.#e = t, this.#r = i, this.#l = (f) => {
        var b = (
          /** @type {Effect} */
          ce
        );
        b.b = this, b.f |= ut, o(f);
      }, this.parent = /** @type {Effect} */
      ce.b, this.transform_error = l ?? this.parent?.transform_error ?? ((f) => f), this.#n = mn(() => {
        if (fe) {
          const f = (
            /** @type {Comment} */
            this.#t
          );
          Sr();
          const b = f.data === va;
          if (f.data.startsWith(ga)) {
            const _ = JSON.parse(f.data.slice(ga.length));
            this.#g(_);
          } else b ? this.#x() : this.#_();
        } else
          this.#E();
      }, Nc), fe && (this.#e = be);
    }
    #_() {
      try {
        this.#a = Vt(() => this.#l(this.#e));
      } catch (t) {
        this.error(t);
      }
    }
    /**
     * @param {unknown} error The deserialized error from the server's hydration comment
     */
    #g(t) {
      const i = this.#r.failed;
      i && (this.#o = Vt(() => {
        i(
          this.#e,
          () => t,
          () => () => {
          }
        );
      }));
    }
    #x() {
      const t = this.#r.pending;
      t && (this.is_pending = !0, this.#i = Vt(() => t(this.#e)), rr(() => {
        var i = this.#d = document.createDocumentFragment(), o = jt();
        i.append(o), this.#a = this.#v(() => Vt(() => this.#l(o))), this.#p === 0 && (this.#e.before(i), this.#d = null, wn(
          /** @type {Effect} */
          this.#i,
          () => {
            this.#i = null;
          }
        ), this.#m(
          /** @type {Batch} */
          de
        ));
      }));
    }
    #E() {
      try {
        if (this.is_pending = this.has_pending_snippet(), this.#p = 0, this.#s = 0, this.#a = Vt(() => {
          this.#l(this.#e);
        }), this.#p > 0) {
          var t = this.#d = document.createDocumentFragment();
          ss(this.#a, t);
          const i = (
            /** @type {(anchor: Node) => void} */
            this.#r.pending
          );
          this.#i = Vt(() => i(this.#e));
        } else
          this.#m(
            /** @type {Batch} */
            de
          );
      } catch (i) {
        this.error(i);
      }
    }
    /**
     * @param {Batch} batch
     */
    #m(t) {
      this.is_pending = !1, t.transfer_effects(this.#c, this.#u);
    }
    /**
     * Defer an effect inside a pending boundary until the boundary resolves
     * @param {Effect} effect
     */
    defer_effect(t) {
      Ra(t, this.#c, this.#u);
    }
    /**
     * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
     * @returns {boolean}
     */
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!this.#r.pending;
    }
    /**
     * @template T
     * @param {() => T} fn
     */
    #v(t) {
      var i = ce, o = we, l = ft;
      zt(this.#n), Ct(this.#n), Hr(this.#n.ctx);
      try {
        return ir.ensure(), t();
      } catch (f) {
        return Aa(f), null;
      } finally {
        zt(i), Ct(o), Hr(l);
      }
    }
    /**
     * Updates the pending count associated with the currently visible pending snippet,
     * if any, such that we can replace the snippet with content once work is done
     * @param {1 | -1} d
     * @param {Batch} batch
     */
    #k(t, i) {
      if (!this.has_pending_snippet()) {
        this.parent && this.parent.#k(t, i);
        return;
      }
      this.#p += t, this.#p === 0 && (this.#m(i), this.#i && wn(this.#i, () => {
        this.#i = null;
      }), this.#d && (this.#e.before(this.#d), this.#d = null));
    }
    /**
     * Update the source that powers `$effect.pending()` inside this boundary,
     * and controls when the current `pending` snippet (if any) is removed.
     * Do not call from inside the class
     * @param {1 | -1} d
     * @param {Batch} batch
     */
    update_pending_count(t, i) {
      this.#k(t, i), this.#s += t, !(!this.#f || this.#h) && (this.#h = !0, rr(() => {
        this.#h = !1, this.#f && Xn(this.#f, this.#s);
      }));
    }
    get_effect_pending() {
      return this.#b(), u(
        /** @type {Source<number>} */
        this.#f
      );
    }
    /** @param {unknown} error */
    error(t) {
      if (!this.#r.onerror && !this.#r.failed)
        throw t;
      de?.is_fork ? (this.#a && de.skip_effect(this.#a), this.#i && de.skip_effect(this.#i), this.#o && de.skip_effect(this.#o), de.on_fork_commit(() => {
        this.#w(t);
      })) : this.#w(t);
    }
    /**
     * @param {unknown} error
     */
    #w(t) {
      this.#a && (et(this.#a), this.#a = null), this.#i && (et(this.#i), this.#i = null), this.#o && (et(this.#o), this.#o = null), fe && (st(
        /** @type {TemplateNode} */
        this.#t
      ), Ui(), st(Bi()));
      var i = this.#r.onerror;
      let o = this.#r.failed;
      var l = !1, f = !1;
      const b = () => {
        if (l) {
          Rc();
          return;
        }
        l = !0, f && mc(), this.#o !== null && wn(this.#o, () => {
          this.#o = null;
        }), this.#v(() => {
          this.#E();
        });
      }, m = (_) => {
        try {
          f = !0, i?.(_, b), f = !1;
        } catch (y) {
          dr(y, this.#n && this.#n.parent);
        }
        o && (this.#o = this.#v(() => {
          try {
            return Vt(() => {
              var y = (
                /** @type {Effect} */
                ce
              );
              y.b = this, y.f |= ut, o(
                this.#e,
                () => _,
                () => b
              );
            });
          } catch (y) {
            return dr(
              y,
              /** @type {Effect} */
              this.#n.parent
            ), null;
          }
        }));
      };
      rr(() => {
        var _;
        try {
          _ = this.transform_error(t);
        } catch (y) {
          dr(y, this.#n && this.#n.parent);
          return;
        }
        _ !== null && typeof _ == "object" && typeof /** @type {any} */
        _.then == "function" ? _.then(
          m,
          /** @param {unknown} e */
          (y) => dr(y, this.#n && this.#n.parent)
        ) : m(_);
      });
    }
  }
  function $a(e, t, i, o) {
    const l = Zi;
    var f = e.filter((R) => !R.settled);
    if (i.length === 0 && f.length === 0) {
      o(t.map(l));
      return;
    }
    var b = (
      /** @type {Effect} */
      ce
    ), m = Bc(), _ = f.length === 1 ? f[0].promise : f.length > 1 ? Promise.all(f.map((R) => R.promise)) : null;
    function y(R) {
      if ((b.f & g) === 0) {
        m();
        try {
          o(R);
        } catch (z) {
          dr(z, b);
        }
        Gn();
      }
    }
    var S = Na();
    if (i.length === 0) {
      _.then(() => y(t.map(l))).finally(S);
      return;
    }
    function P() {
      Promise.all(i.map((R) => /* @__PURE__ */ jc(R))).then((R) => y([...t.map(l), ...R])).catch((R) => dr(R, b)).finally(S);
    }
    _ ? _.then(() => {
      m(), P(), Gn();
    }) : P();
  }
  function Bc() {
    var e = (
      /** @type {Effect} */
      ce
    ), t = we, i = ft, o = (
      /** @type {Batch} */
      de
    );
    return function(f = !0) {
      zt(e), Ct(t), Hr(i), f && (e.f & g) === 0 && (o?.activate(), o?.apply());
    };
  }
  function Gn(e = !0) {
    zt(null), Ct(null), Hr(null), e && de?.deactivate();
  }
  function Na() {
    var e = (
      /** @type {Effect} */
      ce
    ), t = (
      /** @type {Boundary} */
      e.b
    ), i = (
      /** @type {Batch} */
      de
    ), o = t.is_rendered();
    return t.update_pending_count(1, i), i.increment(o, e), () => {
      t.update_pending_count(-1, i), i.decrement(o, e);
    };
  }
  // @__NO_SIDE_EFFECTS__
  function Zi(e) {
    var t = j | Ue;
    return ce !== null && (ce.f |= K), {
      ctx: ft,
      deps: null,
      effects: null,
      equals: ha,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        qe
      ),
      wv: 0,
      parent: ce,
      ac: null
    };
  }
  const Yn = /* @__PURE__ */ Symbol("obsolete");
  // @__NO_SIDE_EFFECTS__
  function jc(e, t, i) {
    let o = (
      /** @type {Effect | null} */
      ce
    );
    o === null && cc();
    var l = (
      /** @type {Promise<V>} */
      /** @type {unknown} */
      void 0
    ), f = hn(
      /** @type {V} */
      qe
    ), b = !we, m = /* @__PURE__ */ new Set();
    return Qc(() => {
      var _ = (
        /** @type {Effect} */
        ce
      ), y = Z();
      l = y.promise;
      try {
        Promise.resolve(e()).then(y.resolve, (z) => {
          z !== qn && y.reject(z);
        }).finally(Gn);
      } catch (z) {
        y.reject(z), Gn();
      }
      var S = (
        /** @type {Batch} */
        de
      );
      if (b) {
        if ((_.f & w) !== 0)
          var P = Na();
        if (
          /** @type {Boundary} */
          o.b.is_rendered()
        )
          S.async_deriveds.get(_)?.reject(Yn);
        else
          for (const z of m.values())
            z.reject(Yn);
        m.add(y), S.async_deriveds.set(_, y);
      }
      const R = (z, H = void 0) => {
        P?.(), m.delete(y), H !== Yn && (S.activate(), H ? (f.f |= fr, Xn(f, H)) : ((f.f & fr) !== 0 && (f.f ^= fr), Xn(f, z)), S.deactivate());
      };
      y.promise.then(R, (z) => R(null, z || "unknown"));
    }), ei(() => {
      for (const _ of m)
        _.reject(Yn);
    }), new Promise((_) => {
      function y(S) {
        function P() {
          S === l ? _(f) : y(l);
        }
        S.then(P, P);
      }
      y(l);
    });
  }
  // @__NO_SIDE_EFFECTS__
  function lt(e) {
    const t = /* @__PURE__ */ Zi(e);
    return Ka(t), t;
  }
  function Hc(e) {
    var t = e.effects;
    if (t !== null) {
      e.effects = null;
      for (var i = 0; i < t.length; i += 1)
        et(
          /** @type {Effect} */
          t[i]
        );
    }
  }
  function Qi(e) {
    var t, i = ce, o = e.parent;
    if (!ar && o !== null && e.v !== qe && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
    (o.f & (g | d)) !== 0)
      return Ac(), e.v;
    zt(o);
    try {
      e.f &= ~Ut, Hc(e), t = Xa(e);
    } finally {
      zt(i);
    }
    return t;
  }
  function Da(e) {
    var t = Qi(e);
    if (!e.equals(t) && (e.wv = Ya(), (!de?.is_fork || e.deps === null) && (de !== null ? (de.capture(e, t, !0), Wi?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
      He(e, ie);
      return;
    }
    ar || (Lt !== null ? (eo() || de?.is_fork) && Lt.set(e, t) : Vi(e));
  }
  function zc(e) {
    if (e.effects !== null)
      for (const t of e.effects)
        (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(qn), t.fn !== null && (t.teardown = re), t.ac = null, gn(t, 0), ro(t));
  }
  function Ua(e) {
    if (e.effects !== null)
      for (const t of e.effects)
        t.teardown && t.fn !== null && Wr(t);
  }
  let Jn = /* @__PURE__ */ new Set();
  const Cr = /* @__PURE__ */ new Map();
  let Ba = !1;
  function hn(e, t) {
    var i = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v: e,
      reactions: null,
      equals: ha,
      rv: 0,
      wv: 0
    };
    return i;
  }
  // @__NO_SIDE_EFFECTS__
  function he(e, t) {
    const i = hn(e);
    return Ka(i), i;
  }
  // @__NO_SIDE_EFFECTS__
  function ja(e, t = !1, i = !0) {
    const o = hn(e);
    return t || (o.equals = sc), o;
  }
  function G(e, t, i = !1) {
    we !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
    // to ensure we error if state is set inside an inspect effect
    (!Mt || (we.f & N) !== 0) && wa() && (we.f & (j | Le | Br | N)) !== 0 && (Rt === null || !s.call(Rt, e)) && bc();
    let o = i ? nr(t) : t;
    return Xn(e, o, Wn);
  }
  function Xn(e, t, i = null) {
    if (!e.equals(t)) {
      Cr.set(e, ar ? t : e.v);
      var o = ir.ensure();
      if (o.capture(e, t), (e.f & j) !== 0) {
        const l = (
          /** @type {Derived} */
          e
        );
        (e.f & Ue) !== 0 && Qi(l), Lt === null && Vi(l);
      }
      e.wv = Ya(), Ha(e, Ue, i), ce !== null && (ce.f & ie) !== 0 && (ce.f & (Ce | Ve)) === 0 && (Tt === null ? Wc([e]) : Tt.push(e)), !o.is_fork && Jn.size > 0 && !Ba && Vc();
    }
    return t;
  }
  function Vc() {
    Ba = !1;
    for (const e of Jn) {
      (e.f & ie) !== 0 && He(e, rt);
      let t;
      try {
        t = vn(e);
      } catch {
        t = !0;
      }
      t && Wr(e);
    }
    Jn.clear();
  }
  function pn(e) {
    G(e, e.v + 1);
  }
  function Ha(e, t, i) {
    var o = e.reactions;
    if (o !== null)
      for (var l = o.length, f = 0; f < l; f++) {
        var b = o[f], m = b.f, _ = (m & Ue) === 0;
        if (_ && He(b, t), (m & N) !== 0)
          Jn.add(
            /** @type {Effect} */
            b
          );
        else if ((m & j) !== 0) {
          var y = (
            /** @type {Derived} */
            b
          );
          Lt?.delete(y), (m & Ut) === 0 && (m & Je && (ce === null || (ce.f & xr) === 0) && (b.f |= Ut), Ha(y, rt, i));
        } else if (_) {
          var S = (
            /** @type {Effect} */
            b
          );
          (m & Le) !== 0 && or !== null && or.add(S), i !== null ? i.push(S) : Xi(S);
        }
      }
  }
  function qc(e, t) {
    if (t) {
      const i = document.body;
      e.autofocus = !0, rr(() => {
        document.activeElement === i && e.focus();
      });
    }
  }
  let za = !1;
  function Va() {
    za || (za = !0, document.addEventListener(
      "reset",
      (e) => {
        Promise.resolve().then(() => {
          if (!e.defaultPrevented)
            for (
              const t of
              /**@type {HTMLFormElement} */
              e.target.elements
            )
              t[an]?.();
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
      { capture: !0 }
    ));
  }
  function Zn(e) {
    var t = we, i = ce;
    Ct(null), zt(null);
    try {
      return e();
    } finally {
      Ct(t), zt(i);
    }
  }
  function Kc(e, t, i, o = i) {
    e.addEventListener(t, () => Zn(i));
    const l = (
      /** @type {any} */
      e[an]
    );
    l ? e[an] = () => {
      l(), o(!0);
    } : e[an] = () => o(!0), Va();
  }
  let Qn = !1, ar = !1;
  function qa(e) {
    ar = e;
  }
  let we = null, Mt = !1;
  function Ct(e) {
    we = e;
  }
  let ce = null;
  function zt(e) {
    ce = e;
  }
  let Rt = null;
  function Ka(e) {
    we !== null && (Rt === null ? Rt = [e] : Rt.push(e));
  }
  let dt = null, _t = 0, Tt = null;
  function Wc(e) {
    Tt = e;
  }
  let Wa = 1, Rr = 0, Tr = Rr;
  function Ga(e) {
    Tr = e;
  }
  function Ya() {
    return ++Wa;
  }
  function vn(e) {
    var t = e.f;
    if ((t & Ue) !== 0)
      return !0;
    if (t & j && (e.f &= ~Ut), (t & rt) !== 0) {
      for (var i = (
        /** @type {Value[]} */
        e.deps
      ), o = i.length, l = 0; l < o; l++) {
        var f = i[l];
        if (vn(
          /** @type {Derived} */
          f
        ) && Da(
          /** @type {Derived} */
          f
        ), f.wv > e.wv)
          return !0;
      }
      (t & Je) !== 0 && // During time traveling we don't want to reset the status so that
      // traversal of the graph in the other batches still happens
      Lt === null && He(e, ie);
    }
    return !1;
  }
  function Ja(e, t, i = !0) {
    var o = e.reactions;
    if (o !== null && !(Rt !== null && s.call(Rt, e)))
      for (var l = 0; l < o.length; l++) {
        var f = o[l];
        (f.f & j) !== 0 ? Ja(
          /** @type {Derived} */
          f,
          t,
          !1
        ) : t === f && (i ? He(f, Ue) : (f.f & ie) !== 0 && He(f, rt), Xi(
          /** @type {Effect} */
          f
        ));
      }
  }
  function Xa(e) {
    var t = dt, i = _t, o = Tt, l = we, f = Rt, b = ft, m = Mt, _ = Tr, y = e.f;
    dt = /** @type {null | Value[]} */
    null, _t = 0, Tt = null, we = (y & (Ce | Ve)) === 0 ? e : null, Rt = null, Hr(e.ctx), Mt = !1, Tr = ++Rr, e.ac !== null && (Zn(() => {
      e.ac.abort(qn);
    }), e.ac = null);
    try {
      e.f |= xr;
      var S = (
        /** @type {Function} */
        e.fn
      ), P = S();
      e.f |= w;
      var R = e.deps, z = de?.is_fork;
      if (dt !== null) {
        var H;
        if (z || gn(e, _t), R !== null && _t > 0)
          for (R.length = _t + dt.length, H = 0; H < dt.length; H++)
            R[_t + H] = dt[H];
        else
          e.deps = R = dt;
        if (eo() && (e.f & Je) !== 0)
          for (H = _t; H < R.length; H++)
            (R[H].reactions ??= []).push(e);
      } else !z && R !== null && _t < R.length && (gn(e, _t), R.length = _t);
      if (wa() && Tt !== null && !Mt && R !== null && (e.f & (j | rt | Ue)) === 0)
        for (H = 0; H < /** @type {Source[]} */
        Tt.length; H++)
          Ja(
            Tt[H],
            /** @type {Effect} */
            e
          );
      if (l !== null && l !== e) {
        if (Rr++, l.deps !== null)
          for (let Q = 0; Q < i; Q += 1)
            l.deps[Q].rv = Rr;
        if (t !== null)
          for (const Q of t)
            Q.rv = Rr;
        Tt !== null && (o === null ? o = Tt : o.push(.../** @type {Source[]} */
        Tt));
      }
      return (e.f & fr) !== 0 && (e.f ^= fr), P;
    } catch (Q) {
      return Aa(Q);
    } finally {
      e.f ^= xr, dt = t, _t = i, Tt = o, we = l, Rt = f, Hr(b), Mt = m, Tr = _;
    }
  }
  function Gc(e, t) {
    let i = t.reactions;
    if (i !== null) {
      var o = a.call(i, e);
      if (o !== -1) {
        var l = i.length - 1;
        l === 0 ? i = t.reactions = null : (i[o] = i[l], i.pop());
      }
    }
    if (i === null && (t.f & j) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (dt === null || !s.call(dt, t))) {
      var f = (
        /** @type {Derived} */
        t
      );
      (f.f & Je) !== 0 && (f.f ^= Je, f.f &= ~Ut), f.v !== qe && Vi(f), zc(f), gn(f, 0);
    }
  }
  function gn(e, t) {
    var i = e.deps;
    if (i !== null)
      for (var o = t; o < i.length; o++)
        Gc(e, i[o]);
  }
  function Wr(e) {
    var t = e.f;
    if ((t & g) === 0) {
      He(e, ie);
      var i = ce, o = Qn;
      ce = e, Qn = !0;
      try {
        (t & (Le | Ae)) !== 0 ? eu(e) : ro(e), rs(e);
        var l = Xa(e);
        e.teardown = typeof l == "function" ? l : null, e.wv = Wa;
        var f;
        r && wc && (e.f & Ue) !== 0 && e.deps;
      } finally {
        Qn = o, ce = i;
      }
    }
  }
  async function Or() {
    await Promise.resolve(), Te();
  }
  function u(e) {
    var t = e.f, i = (t & j) !== 0;
    if (we !== null && !Mt) {
      var o = ce !== null && (ce.f & g) !== 0;
      if (!o && (Rt === null || !s.call(Rt, e))) {
        var l = we.deps;
        if ((we.f & xr) !== 0)
          e.rv < Rr && (e.rv = Rr, dt === null && l !== null && l[_t] === e ? _t++ : dt === null ? dt = [e] : dt.push(e));
        else {
          (we.deps ??= []).push(e);
          var f = e.reactions;
          f === null ? e.reactions = [we] : s.call(f, we) || f.push(we);
        }
      }
    }
    if (ar && Cr.has(e))
      return Cr.get(e);
    if (i) {
      var b = (
        /** @type {Derived} */
        e
      );
      if (ar) {
        var m = b.v;
        return ((b.f & ie) === 0 && b.reactions !== null || Qa(b)) && (m = Qi(b)), Cr.set(b, m), m;
      }
      var _ = (b.f & Je) === 0 && !Mt && we !== null && (Qn || (we.f & Je) !== 0), y = (b.f & w) === 0;
      vn(b) && (_ && (b.f |= Je), Da(b)), _ && !y && (Ua(b), Za(b));
    }
    if (Lt?.has(e))
      return Lt.get(e);
    if ((e.f & fr) !== 0)
      throw e.v;
    return e.v;
  }
  function Za(e) {
    if (e.f |= Je, e.deps !== null)
      for (const t of e.deps)
        (t.reactions ??= []).push(e), (t.f & j) !== 0 && (t.f & Je) === 0 && (Ua(
          /** @type {Derived} */
          t
        ), Za(
          /** @type {Derived} */
          t
        ));
  }
  function Qa(e) {
    if (e.v === qe) return !0;
    if (e.deps === null) return !1;
    for (const t of e.deps)
      if (Cr.has(t) || (t.f & j) !== 0 && Qa(
        /** @type {Derived} */
        t
      ))
        return !0;
    return !1;
  }
  function bn(e) {
    var t = Mt;
    try {
      return Mt = !0, e();
    } finally {
      Mt = t;
    }
  }
  function Yc(e) {
    ce === null && (we === null && dc(), fc()), ar && uc();
  }
  function Jc(e, t) {
    var i = t.last;
    i === null ? t.last = t.first = e : (i.next = e, e.prev = i, t.last = e);
  }
  function $t(e, t) {
    var i = ce;
    i !== null && (i.f & d) !== 0 && (e |= d);
    var o = {
      ctx: ft,
      deps: null,
      nodes: null,
      f: e | Ue | Je,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: i,
      b: i && i.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null
    };
    de?.register_created_effect(o);
    var l = o;
    if ((e & pe) !== 0)
      Kr !== null ? Kr.push(o) : ir.ensure().schedule(o);
    else if (t !== null) {
      try {
        Wr(o);
      } catch (b) {
        throw et(o), b;
      }
      l.deps === null && l.teardown === null && l.nodes === null && l.first === l.last && // either `null`, or a singular child
      (l.f & K) === 0 && (l = l.first, (e & Le) !== 0 && (e & q) !== 0 && l !== null && (l.f |= q));
    }
    if (l !== null && (l.parent = i, i !== null && Jc(l, i), we !== null && (we.f & j) !== 0 && (e & Ve) === 0)) {
      var f = (
        /** @type {Derived} */
        we
      );
      (f.effects ??= []).push(l);
    }
    return o;
  }
  function eo() {
    return we !== null && !Mt;
  }
  function ei(e) {
    const t = $t(ve, null);
    return He(t, ie), t.teardown = e, t;
  }
  function xt(e) {
    Yc();
    var t = (
      /** @type {Effect} */
      ce.f
    ), i = !we && (t & Ce) !== 0 && (t & w) === 0;
    if (i) {
      var o = (
        /** @type {ComponentContext} */
        ft
      );
      (o.e ??= []).push(e);
    } else
      return es(e);
  }
  function es(e) {
    return $t(pe | nt, e);
  }
  function Xc(e) {
    ir.ensure();
    const t = $t(Ve | K, e);
    return () => {
      et(t);
    };
  }
  function Zc(e) {
    ir.ensure();
    const t = $t(Ve | K, e);
    return (i = {}) => new Promise((o) => {
      i.outro ? wn(t, () => {
        et(t), o(void 0);
      }) : (et(t), o(void 0));
    });
  }
  function to(e) {
    return $t(pe, e);
  }
  function Qc(e) {
    return $t(Br | K, e);
  }
  function ti(e, t = 0) {
    return $t(ve | t, e);
  }
  function it(e, t = [], i = [], o = []) {
    $a(o, t, i, (l) => {
      $t(ve, () => e(...l.map(u)));
    });
  }
  function mn(e, t = 0) {
    var i = $t(Le | t, e);
    return i;
  }
  function ts(e, t = 0) {
    var i = $t(Ae | t, e);
    return i;
  }
  function Vt(e) {
    return $t(Ce | K, e);
  }
  function rs(e) {
    var t = e.teardown;
    if (t !== null) {
      const i = ar, o = we;
      qa(!0), Ct(null);
      try {
        t.call(null);
      } finally {
        qa(i), Ct(o);
      }
    }
  }
  function ro(e, t = !1) {
    var i = e.first;
    for (e.first = e.last = null; i !== null; ) {
      const l = i.ac;
      l !== null && Zn(() => {
        l.abort(qn);
      });
      var o = i.next;
      (i.f & Ve) !== 0 ? i.parent = null : et(i, t), i = o;
    }
  }
  function eu(e) {
    for (var t = e.first; t !== null; ) {
      var i = t.next;
      (t.f & Ce) === 0 && et(t), t = i;
    }
  }
  function et(e, t = !0) {
    var i = !1;
    (t || (e.f & D) !== 0) && e.nodes !== null && e.nodes.end !== null && (ns(
      e.nodes.start,
      /** @type {TemplateNode} */
      e.nodes.end
    ), i = !0), He(e, v), ro(e, t && !i), gn(e, 0);
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const f of o)
        f.stop();
    rs(e), e.f ^= v, e.f |= g;
    var l = e.parent;
    l !== null && l.first !== null && is(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
  }
  function ns(e, t) {
    for (; e !== null; ) {
      var i = e === t ? null : /* @__PURE__ */ Ht(e);
      e.remove(), e = i;
    }
  }
  function is(e) {
    var t = e.parent, i = e.prev, o = e.next;
    i !== null && (i.next = o), o !== null && (o.prev = i), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = i));
  }
  function wn(e, t, i = !0) {
    var o = [];
    os(e, o, !0);
    var l = () => {
      i && et(e), t && t();
    }, f = o.length;
    if (f > 0) {
      var b = () => --f || l();
      for (var m of o)
        m.out(b);
    } else
      l();
  }
  function os(e, t, i) {
    if ((e.f & d) === 0) {
      e.f ^= d;
      var o = e.nodes && e.nodes.t;
      if (o !== null)
        for (const m of o)
          (m.is_global || i) && t.push(m);
      for (var l = e.first; l !== null; ) {
        var f = l.next;
        if ((l.f & Ve) === 0) {
          var b = (l.f & q) !== 0 || // If this is a branch effect without a block effect parent,
          // it means the parent block effect was pruned. In that case,
          // transparency information was transferred to the branch effect.
          (l.f & Ce) !== 0 && (e.f & Le) !== 0;
          os(l, t, b ? i : !1);
        }
        l = f;
      }
    }
  }
  function tu(e) {
    as(e, !0);
  }
  function as(e, t) {
    if ((e.f & d) !== 0) {
      e.f ^= d, (e.f & ie) === 0 && (He(e, Ue), ir.ensure().schedule(e));
      for (var i = e.first; i !== null; ) {
        var o = i.next, l = (i.f & q) !== 0 || (i.f & Ce) !== 0;
        as(i, l ? t : !1), i = o;
      }
      var f = e.nodes && e.nodes.t;
      if (f !== null)
        for (const b of f)
          (b.is_global || t) && b.in();
    }
  }
  function ss(e, t) {
    if (e.nodes)
      for (var i = e.nodes.start, o = e.nodes.end; i !== null; ) {
        var l = i === o ? null : /* @__PURE__ */ Ht(i);
        t.append(i), i = l;
      }
  }
  function ls(e) {
    const t = {
      get: (i) => fn(t.store)[i],
      set: (i, o) => {
        typeof i == "string" ? Object.assign(fn(t.store), {
          [i]: o
        }) : Object.assign(fn(t.store), i), t.store.set(fn(t.store));
      },
      store: Fc(e)
    };
    return t;
  }
  globalThis.$altcha = globalThis.$altcha || {
    algorithms: /* @__PURE__ */ new Map(),
    defaults: ls({}),
    i18n: ls({}),
    instances: /* @__PURE__ */ new Set(),
    plugins: /* @__PURE__ */ new Set()
  };
  const ru = {
    ariaLinkLabel: "Altcha (official website)",
    cancel: "Cancel",
    enterCode: "Enter code",
    enterCodeAria: "Enter code you hear. Press Space to play audio.",
    enterCodeFromImage: "To proceed, please enter the code from the image below.",
    error: "Verification failed. Try again later.",
    expired: "Verification expired. Try again.",
    footer: 'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (official website)">ALTCHA</a>',
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
  "$altcha" in globalThis && globalThis.$altcha.i18n.set("en", ru);
  const nu = "5";
  typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(nu);
  const yn = /* @__PURE__ */ Symbol("events"), cs = /* @__PURE__ */ new Set(), no = /* @__PURE__ */ new Set();
  function us(e, t, i, o = {}) {
    function l(f) {
      if (o.capture || io.call(t, f), !f.cancelBubble)
        return Zn(() => i?.call(this, f));
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? rr(() => {
      t.addEventListener(e, l, o);
    }) : t.addEventListener(e, l, o), l;
  }
  function Xe(e, t, i, o, l) {
    var f = { capture: o, passive: l }, b = us(e, t, i, f);
    (t === document.body || // @ts-ignore
    t === window || // @ts-ignore
    t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
    t instanceof HTMLMediaElement) && ei(() => {
      t.removeEventListener(e, b, f);
    });
  }
  function ri(e, t, i) {
    (t[yn] ??= {})[e] = i;
  }
  function ni(e) {
    for (var t = 0; t < e.length; t++)
      cs.add(e[t]);
    for (var i of no)
      i(e);
  }
  let fs = null;
  function io(e) {
    var t = this, i = (
      /** @type {Node} */
      t.ownerDocument
    ), o = e.type, l = e.composedPath?.() || [], f = (
      /** @type {null | Element} */
      l[0] || e.target
    );
    fs = e;
    var b = 0, m = fs === e && e[yn];
    if (m) {
      var _ = l.indexOf(m);
      if (_ !== -1 && (t === document || t === /** @type {any} */
      window)) {
        e[yn] = t;
        return;
      }
      var y = l.indexOf(t);
      if (y === -1)
        return;
      _ <= y && (b = _);
    }
    if (f = /** @type {Element} */
    l[b] || e.target, f !== t) {
      h(e, "currentTarget", {
        configurable: !0,
        get() {
          return f || i;
        }
      });
      var S = we, P = ce;
      Ct(null), zt(null);
      try {
        for (var R, z = []; f !== null; ) {
          var H = f.assignedSlot || f.parentNode || /** @type {any} */
          f.host || null;
          try {
            var Q = f[yn]?.[o];
            Q != null && (!/** @type {any} */
            f.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
            // -> the target could not have been disabled because it emits the event in the first place
            e.target === f) && Q.call(f, e);
          } catch (le) {
            R ? z.push(le) : R = le;
          }
          if (e.cancelBubble || H === t || H === null)
            break;
          f = H;
        }
        if (R) {
          for (let le of z)
            queueMicrotask(() => {
              throw le;
            });
          throw R;
        }
      } finally {
        e[yn] = t, delete e.currentTarget, Ct(S), zt(P);
      }
    }
  }
  const iu = (
    // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
    globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
      /** @param {string} html */
      createHTML: (e) => e
    })
  );
  function ou(e) {
    return (
      /** @type {string} */
      iu?.createHTML(e) ?? e
    );
  }
  function ds(e) {
    var t = zi("template");
    return t.innerHTML = ou(e.replaceAll("<!>", "<!---->")), t.content;
  }
  function Et(e, t) {
    var i = (
      /** @type {Effect} */
      ce
    );
    i.nodes === null && (i.nodes = { start: e, end: t, a: null, t: null });
  }
  // @__NO_SIDE_EFFECTS__
  function $e(e, t) {
    var i = (t & yc) !== 0, o = (t & _c) !== 0, l, f = !e.startsWith("<!>");
    return () => {
      if (fe)
        return Et(be, null), be;
      l === void 0 && (l = ds(f ? e : "<!>" + e), i || (l = /** @type {TemplateNode} */
      /* @__PURE__ */ yt(l)));
      var b = (
        /** @type {TemplateNode} */
        o || Ea ? document.importNode(l, !0) : l.cloneNode(!0)
      );
      if (i) {
        var m = (
          /** @type {TemplateNode} */
          /* @__PURE__ */ yt(b)
        ), _ = (
          /** @type {TemplateNode} */
          b.lastChild
        );
        Et(m, _);
      } else
        Et(b, b);
      return b;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function au(e, t, i = "svg") {
    var o = !e.startsWith("<!>"), l = `<${i}>${o ? e : "<!>" + e}</${i}>`, f;
    return () => {
      if (fe)
        return Et(be, null), be;
      if (!f) {
        var b = (
          /** @type {DocumentFragment} */
          ds(l)
        ), m = (
          /** @type {Element} */
          /* @__PURE__ */ yt(b)
        );
        f = /** @type {Element} */
        /* @__PURE__ */ yt(m);
      }
      var _ = (
        /** @type {TemplateNode} */
        f.cloneNode(!0)
      );
      return Et(_, _), _;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function oo(e, t) {
    return /* @__PURE__ */ au(e, t, "svg");
  }
  function ii(e = "") {
    if (!fe) {
      var t = jt(e + "");
      return Et(t, t), t;
    }
    var i = be;
    return i.nodeType !== ln ? (i.before(i = jt()), st(i)) : Kn(
      /** @type {Text} */
      i
    ), Et(i, i), i;
  }
  function hs() {
    if (fe)
      return Et(be, null), be;
    var e = document.createDocumentFragment(), t = document.createComment(""), i = jt();
    return e.append(t, i), Et(t, i), e;
  }
  function me(e, t) {
    if (fe) {
      var i = (
        /** @type {Effect & { nodes: EffectNodes }} */
        ce
      );
      ((i.f & w) === 0 || i.nodes.end === null) && (i.nodes.end = be), Sr();
      return;
    }
    e !== null && e.before(
      /** @type {Node} */
      t
    );
  }
  function su(e) {
    return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
  }
  const lu = [
    "beforeinput",
    "click",
    "change",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart"
  ];
  function cu(e) {
    return lu.includes(e);
  }
  const uu = {
    // no `class: 'className'` because we handle that separately
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject",
    novalidate: "noValidate",
    allowfullscreen: "allowFullscreen",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback"
  };
  function fu(e) {
    return e = e.toLowerCase(), uu[e] ?? e;
  }
  const du = ["touchstart", "touchmove"];
  function hu(e) {
    return du.includes(e);
  }
  function qt(e, t) {
    var i = t == null ? "" : typeof t == "object" ? `${t}` : t;
    i !== /** @type {any} */
    (e[Ni] ??= e.nodeValue) && (e[Ni] = i, e.nodeValue = `${i}`);
  }
  function ps(e, t) {
    return vs(e, t);
  }
  function pu(e, t) {
    Hi(), t.intro = t.intro ?? !1;
    const i = t.target, o = fe, l = be;
    try {
      for (var f = /* @__PURE__ */ yt(i); f && (f.nodeType !== cn || /** @type {Comment} */
      f.data !== Di); )
        f = /* @__PURE__ */ Ht(f);
      if (!f)
        throw Er;
      Bt(!0), st(
        /** @type {Comment} */
        f
      );
      const b = vs(e, { ...t, anchor: f });
      return Bt(!1), /**  @type {Exports} */
      b;
    } catch (b) {
      if (b instanceof Error && b.message.split(`
`).some((m) => m.startsWith("https://svelte.dev/e/")))
        throw b;
      return b !== Er && console.warn("Failed to hydrate: ", b), t.recover === !1 && pc(), Hi(), Oc(i), Bt(!1), ps(e, t);
    } finally {
      Bt(o), st(l);
    }
  }
  const oi = /* @__PURE__ */ new Map();
  function vs(e, { target: t, anchor: i, props: o = {}, events: l, context: f, intro: b = !0, transformError: m }) {
    Hi();
    var _ = void 0, y = Zc(() => {
      var S = i ?? t.appendChild(jt());
      Dc(
        /** @type {TemplateNode} */
        S,
        {
          pending: () => {
          }
        },
        (z) => {
          er({});
          var H = (
            /** @type {ComponentContext} */
            ft
          );
          if (f && (H.c = f), l && (o.$$events = l), fe && Et(
            /** @type {TemplateNode} */
            z,
            null
          ), _ = e(z, o) || {}, fe && (ce.nodes.end = be, be === null || be.nodeType !== cn || /** @type {Comment} */
          be.data !== ba))
            throw un(), Er;
          tr();
        },
        m
      );
      var P = /* @__PURE__ */ new Set(), R = (z) => {
        for (var H = 0; H < z.length; H++) {
          var Q = z[H];
          if (!P.has(Q)) {
            P.add(Q);
            var le = hu(Q);
            for (const Ke of [t, document]) {
              var ge = oi.get(Ke);
              ge === void 0 && (ge = /* @__PURE__ */ new Map(), oi.set(Ke, ge));
              var Qe = ge.get(Q);
              Qe === void 0 ? (Ke.addEventListener(Q, io, { passive: le }), ge.set(Q, 1)) : ge.set(Q, Qe + 1);
            }
          }
        }
      };
      return R(c(cs)), no.add(R), () => {
        for (var z of P)
          for (const le of [t, document]) {
            var H = (
              /** @type {Map<string, number>} */
              oi.get(le)
            ), Q = (
              /** @type {number} */
              H.get(z)
            );
            --Q == 0 ? (le.removeEventListener(z, io), H.delete(z), H.size === 0 && oi.delete(le)) : H.set(z, Q);
          }
        no.delete(R), S !== i && S.parentNode?.removeChild(S);
      };
    });
    return ao.set(_, y), _;
  }
  let ao = /* @__PURE__ */ new WeakMap();
  function vu(e, t) {
    const i = ao.get(e);
    return i ? (ao.delete(e), i(t)) : Promise.resolve();
  }
  class ai {
    /** @type {TemplateNode} */
    anchor;
    /** @type {Map<Batch, Key>} */
    #e = /* @__PURE__ */ new Map();
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    #t = /* @__PURE__ */ new Map();
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    #r = /* @__PURE__ */ new Map();
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    #l = /* @__PURE__ */ new Set();
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    #n = !0;
    /**
     * @param {TemplateNode} anchor
     * @param {boolean} transition
     */
    constructor(t, i = !0) {
      this.anchor = t, this.#n = i;
    }
    /**
     * @param {Batch} batch
     */
    #a = (t) => {
      if (this.#e.has(t)) {
        var i = (
          /** @type {Key} */
          this.#e.get(t)
        ), o = this.#t.get(i);
        if (o)
          tu(o), this.#l.delete(i);
        else {
          var l = this.#r.get(i);
          l && (this.#t.set(i, l.effect), this.#r.delete(i), l.fragment.lastChild.remove(), this.anchor.before(l.fragment), o = l.effect);
        }
        for (const [f, b] of this.#e) {
          if (this.#e.delete(f), f === t)
            break;
          const m = this.#r.get(b);
          m && (et(m.effect), this.#r.delete(b));
        }
        for (const [f, b] of this.#t) {
          if (f === i || this.#l.has(f)) continue;
          const m = () => {
            if (Array.from(this.#e.values()).includes(f)) {
              var y = document.createDocumentFragment();
              ss(b, y), y.append(jt()), this.#r.set(f, { effect: b, fragment: y });
            } else
              et(b);
            this.#l.delete(f), this.#t.delete(f);
          };
          this.#n || !o ? (this.#l.add(f), wn(b, m, !1)) : m();
        }
      }
    };
    /**
     * @param {Batch} batch
     */
    #i = (t) => {
      this.#e.delete(t);
      const i = Array.from(this.#e.values());
      for (const [o, l] of this.#r)
        i.includes(o) || (et(l.effect), this.#r.delete(o));
    };
    /**
     *
     * @param {any} key
     * @param {null | ((target: TemplateNode) => void)} fn
     */
    ensure(t, i) {
      var o = (
        /** @type {Batch} */
        de
      );
      i && !this.#t.has(t) && !this.#r.has(t) && this.#t.set(
        t,
        Vt(() => i(this.anchor))
      ), this.#e.set(o, t), fe && (this.anchor = be), this.#a(o);
    }
  }
  function gu(e, t, ...i) {
    var o = new ai(e);
    mn(() => {
      const l = t() ?? null;
      o.ensure(l, l && ((f) => l(f, ...i)));
    }, q);
  }
  function so(e) {
    ft === null && lc(), xt(() => {
      const t = bn(e);
      if (typeof t == "function") return (
        /** @type {() => void} */
        t
      );
    });
  }
  function Ze(e, t, i = !1) {
    var o;
    fe && (o = be, Sr());
    var l = new ai(e), f = i ? q : 0;
    function b(m, _) {
      if (fe) {
        var y = _a(
          /** @type {TemplateNode} */
          o
        );
        if (m !== parseInt(y.substring(1))) {
          var S = Bi();
          st(S), l.anchor = S, Bt(!1), l.ensure(m, _), Bt(!0);
          return;
        }
      }
      l.ensure(m, _);
    }
    mn(() => {
      var m = !1;
      t((_, y = 0) => {
        m = !0, b(y, _);
      }), m || b(-1, null);
    }, f);
  }
  const bu = /* @__PURE__ */ Symbol("NaN");
  function mu(e, t, i) {
    fe && Sr();
    var o = new ai(e);
    mn(() => {
      var l = t();
      l !== l && (l = /** @type {any} */
      bu), o.ensure(l, i);
    });
  }
  function gs(e, t, i = !1, o = !1, l = !1, f = !1) {
    var b = e, m = "";
    if (i) {
      var _ = (
        /** @type {Element} */
        e
      );
      fe && (b = st(/* @__PURE__ */ yt(_)));
    }
    it(() => {
      var y = (
        /** @type {Effect} */
        ce
      );
      if (m === (m = t() ?? "")) {
        fe && Sr();
        return;
      }
      if (i && !fe) {
        y.nodes = null, _.innerHTML = /** @type {string} */
        m, m !== "" && Et(
          /** @type {TemplateNode} */
          /* @__PURE__ */ yt(_),
          /** @type {TemplateNode} */
          _.lastChild
        );
        return;
      }
      if (y.nodes !== null && (ns(
        y.nodes.start,
        /** @type {TemplateNode} */
        y.nodes.end
      ), y.nodes = null), m !== "") {
        if (fe) {
          be.data;
          for (var S = Sr(), P = S; S !== null && (S.nodeType !== cn || /** @type {Comment} */
          S.data !== ""); )
            P = S, S = /* @__PURE__ */ Ht(S);
          if (S === null)
            throw un(), Er;
          Et(be, P), b = st(S);
          return;
        }
        var R = o ? xc : l ? Ec : void 0, z = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          zi(o ? "svg" : l ? "math" : "template", R)
        );
        z.innerHTML = /** @type {any} */
        m;
        var H = o || l ? z : (
          /** @type {HTMLTemplateElement} */
          z.content
        );
        if (Et(
          /** @type {TemplateNode} */
          /* @__PURE__ */ yt(H),
          /** @type {TemplateNode} */
          H.lastChild
        ), o || l)
          for (; /* @__PURE__ */ yt(H); )
            b.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ yt(H)
            );
        else
          b.before(H);
      }
    });
  }
  function wu(e, t, i) {
    var o;
    fe && (o = be, Sr());
    var l = new ai(e);
    mn(() => {
      var f = t() ?? null;
      if (fe) {
        var b = _a(
          /** @type {TemplateNode} */
          o
        ), m = b === Di, _ = f !== null;
        if (m !== _) {
          var y = Bi();
          st(y), l.anchor = y, Bt(!1), l.ensure(f, f && ((S) => i(S, f))), Bt(!0);
          return;
        }
      }
      l.ensure(f, f && ((S) => i(S, f)));
    }, q);
  }
  function yu(e, t) {
    var i = void 0, o;
    ts(() => {
      i !== (i = t()) && (o && (et(o), o = null), i && (o = Vt(() => {
        to(() => (
          /** @type {(node: Element) => void} */
          i(e)
        ));
      })));
    });
  }
  function bs(e) {
    var t, i, o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++) e[t] && (i = bs(e[t])) && (o && (o += " "), o += i);
    } else for (i in e) e[i] && (o && (o += " "), o += i);
    return o;
  }
  function _u() {
    for (var e, t, i = 0, o = "", l = arguments.length; i < l; i++) (e = arguments[i]) && (t = bs(e)) && (o && (o += " "), o += t);
    return o;
  }
  function xu(e) {
    return typeof e == "object" ? _u(e) : e ?? "";
  }
  const ms = [...` 	
\r\f \v\uFEFF`];
  function Eu(e, t, i) {
    var o = e == null ? "" : "" + e;
    if (i) {
      for (var l of Object.keys(i))
        if (i[l])
          o = o ? o + " " + l : l;
        else if (o.length)
          for (var f = l.length, b = 0; (b = o.indexOf(l, b)) >= 0; ) {
            var m = b + f;
            (b === 0 || ms.includes(o[b - 1])) && (m === o.length || ms.includes(o[m])) ? o = (b === 0 ? "" : o.substring(0, b)) + o.substring(m + 1) : b = m;
          }
    }
    return o === "" ? null : o;
  }
  function ws(e, t = !1) {
    var i = t ? " !important;" : ";", o = "";
    for (var l of Object.keys(e)) {
      var f = e[l];
      f != null && f !== "" && (o += " " + l + ": " + f + i);
    }
    return o;
  }
  function lo(e) {
    return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
  }
  function ku(e, t) {
    if (t) {
      var i = "", o, l;
      if (Array.isArray(t) ? (o = t[0], l = t[1]) : o = t, e) {
        e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
        var f = !1, b = 0, m = !1, _ = [];
        o && _.push(...Object.keys(o).map(lo)), l && _.push(...Object.keys(l).map(lo));
        var y = 0, S = -1;
        const Q = e.length;
        for (var P = 0; P < Q; P++) {
          var R = e[P];
          if (m ? R === "/" && e[P - 1] === "*" && (m = !1) : f ? f === R && (f = !1) : R === "/" && e[P + 1] === "*" ? m = !0 : R === '"' || R === "'" ? f = R : R === "(" ? b++ : R === ")" && b--, !m && f === !1 && b === 0) {
            if (R === ":" && S === -1)
              S = P;
            else if (R === ";" || P === Q - 1) {
              if (S !== -1) {
                var z = lo(e.substring(y, S).trim());
                if (!_.includes(z)) {
                  R !== ";" && P++;
                  var H = e.substring(y, P).trim();
                  i += " " + H + ";";
                }
              }
              y = P + 1, S = -1;
            }
          }
        }
      }
      return o && (i += ws(o)), l && (i += ws(l, !0)), i = i.trim(), i === "" ? null : i;
    }
    return e == null ? null : String(e);
  }
  function Su(e, t, i, o, l, f) {
    var b = (
      /** @type {any} */
      e[Mi]
    );
    if (fe || b !== i || b === void 0) {
      var m = Eu(i, o, f);
      (!fe || m !== e.getAttribute("class")) && (m == null ? e.removeAttribute("class") : t ? e.className = m : e.setAttribute("class", m)), e[Mi] = i;
    } else if (f && l !== f)
      for (var _ in f) {
        var y = !!f[_];
        (l == null || y !== !!l[_]) && e.classList.toggle(_, y);
      }
    return f;
  }
  function co(e, t = {}, i, o) {
    for (var l in i) {
      var f = i[l];
      t[l] !== f && (i[l] == null ? e.style.removeProperty(l) : e.style.setProperty(l, f, o));
    }
  }
  function Au(e, t, i, o) {
    var l = (
      /** @type {any} */
      e[$i]
    );
    if (fe || l !== t) {
      var f = ku(t, o);
      (!fe || f !== e.getAttribute("style")) && (f == null ? e.removeAttribute("style") : e.style.cssText = f), e[$i] = t;
    } else o && (Array.isArray(o) ? (co(e, i?.[0], o[0]), co(e, i?.[1], o[1], "important")) : co(e, i, o));
    return o;
  }
  function uo(e, t, i = !1) {
    if (e.multiple) {
      if (t == null)
        return;
      if (!n(t))
        return Cc();
      for (var o of e.options)
        o.selected = t.includes(ys(o));
      return;
    }
    for (o of e.options) {
      var l = ys(o);
      if (Tc(l, t)) {
        o.selected = !0;
        return;
      }
    }
    (!i || t !== void 0) && (e.selectedIndex = -1);
  }
  function Cu(e) {
    var t = new MutationObserver(() => {
      uo(e, e.__value);
    });
    t.observe(e, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), ei(() => {
      t.disconnect();
    });
  }
  function ys(e) {
    return "__value" in e ? e.__value : e.value;
  }
  const _n = /* @__PURE__ */ Symbol("class"), xn = /* @__PURE__ */ Symbol("style"), _s = /* @__PURE__ */ Symbol("is custom element"), xs = /* @__PURE__ */ Symbol("is html"), Ru = sn ? "link" : "LINK", Tu = sn ? "input" : "INPUT", Ou = sn ? "option" : "OPTION", Pu = sn ? "select" : "SELECT", Fu = sn ? "progress" : "PROGRESS";
  function fo(e) {
    if (fe) {
      var t = !1, i = () => {
        if (!t) {
          if (t = !0, e.hasAttribute("value")) {
            var o = e.value;
            Ee(e, "value", null), e.value = o;
          }
          if (e.hasAttribute("checked")) {
            var l = e.checked;
            Ee(e, "checked", null), e.checked = l;
          }
        }
      };
      e[an] = i, rr(i), Va();
    }
  }
  function Iu(e, t) {
    var i = ho(e);
    i.value === (i.value = // treat null and undefined the same for the initial value
    t ?? void 0) || // @ts-expect-error
    // `progress` elements always need their value set when it's `0`
    e.value === t && (t !== 0 || e.nodeName !== Fu) || (e.value = t ?? "");
  }
  function Lu(e, t) {
    t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
  }
  function Ee(e, t, i, o) {
    var l = ho(e);
    fe && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ru) || l[t] !== (l[t] = i) && (t === "loading" && (e[ac] = i), i == null ? e.removeAttribute(t) : typeof i != "string" && ks(e).includes(t) ? e[t] = i : e.setAttribute(t, i));
  }
  function Mu(e, t, i, o, l = !1, f = !1) {
    if (fe && l && e.nodeName === Tu) {
      var b = (
        /** @type {HTMLInputElement} */
        e
      ), m = b.type === "checkbox" ? "defaultChecked" : "defaultValue";
      m in i || fo(b);
    }
    var _ = ho(e), y = _[_s], S = !_[xs];
    let P = fe && y;
    P && Bt(!1);
    var R = t || {}, z = e.nodeName === Ou;
    for (var H in t)
      H in i || (i[H] = null);
    i.class ? i.class = xu(i.class) : i[_n] && (i.class = null), i[xn] && (i.style ??= null);
    var Q = ks(e);
    for (const _e in i) {
      let te = i[_e];
      if (z && _e === "value" && te == null) {
        e.value = e.__value = "", R[_e] = te;
        continue;
      }
      if (_e === "class") {
        var le = e.namespaceURI === "http://www.w3.org/1999/xhtml";
        Su(e, le, te, o, t?.[_n], i[_n]), R[_e] = te, R[_n] = i[_n];
        continue;
      }
      if (_e === "style") {
        Au(e, te, t?.[xn], i[xn]), R[_e] = te, R[xn] = i[xn];
        continue;
      }
      var ge = R[_e];
      if (!(te === ge && !(te === void 0 && e.hasAttribute(_e)))) {
        R[_e] = te;
        var Qe = _e[0] + _e[1];
        if (Qe !== "$$")
          if (Qe === "on") {
            const Fe = {}, ct = "$$" + _e;
            let ue = _e.slice(2);
            var Ke = cu(ue);
            if (su(ue) && (ue = ue.slice(0, -7), Fe.capture = !0), !Ke && ge) {
              if (te != null) continue;
              e.removeEventListener(ue, R[ct], Fe), R[ct] = null;
            }
            if (Ke)
              ri(ue, e, te), ni([ue]);
            else if (te != null) {
              let We = function(Kt) {
                R[_e].call(this, Kt);
              };
              R[ct] = us(ue, e, We, Fe);
            }
          } else if (_e === "style")
            Ee(e, _e, te);
          else if (_e === "autofocus")
            qc(
              /** @type {HTMLElement} */
              e,
              !!te
            );
          else if (!y && (_e === "__value" || _e === "value" && te != null))
            e.value = e.__value = te;
          else if (_e === "selected" && z)
            Lu(
              /** @type {HTMLOptionElement} */
              e,
              te
            );
          else {
            var ye = _e;
            S || (ye = fu(ye));
            var ot = ye === "defaultValue" || ye === "defaultChecked";
            if (te == null && !y && !ot)
              if (_[_e] = null, ye === "value" || ye === "checked") {
                let Fe = (
                  /** @type {HTMLInputElement} */
                  e
                );
                const ct = t === void 0;
                if (ye === "value") {
                  let ue = Fe.defaultValue;
                  Fe.removeAttribute(ye), Fe.defaultValue = ue, Fe.value = Fe.__value = ct ? ue : null;
                } else {
                  let ue = Fe.defaultChecked;
                  Fe.removeAttribute(ye), Fe.defaultChecked = ue, Fe.checked = ct ? ue : !1;
                }
              } else
                e.removeAttribute(_e);
            else ot || Q.includes(ye) && (y || typeof te != "string") ? (e[ye] = te, ye in _ && (_[ye] = qe)) : typeof te != "function" && Ee(e, ye, te);
          }
      }
    }
    return P && Bt(!0), R;
  }
  function si(e, t, i = [], o = [], l = [], f, b = !1, m = !1) {
    $a(l, i, o, (_) => {
      var y = void 0, S = {}, P = e.nodeName === Pu, R = !1;
      if (ts(() => {
        var H = t(..._.map(u)), Q = Mu(
          e,
          y,
          H,
          f,
          b,
          m
        );
        R && P && "value" in H && uo(
          /** @type {HTMLSelectElement} */
          e,
          H.value
        );
        for (let ge of Object.getOwnPropertySymbols(S))
          H[ge] || et(S[ge]);
        for (let ge of Object.getOwnPropertySymbols(H)) {
          var le = H[ge];
          ge.description === kc && (!y || le !== y[ge]) && (S[ge] && et(S[ge]), S[ge] = Vt(() => yu(e, () => le))), Q[ge] = le;
        }
        y = Q;
      }), P) {
        var z = (
          /** @type {HTMLSelectElement} */
          e
        );
        to(() => {
          uo(
            z,
            /** @type {Record<string | symbol, any>} */
            y.value,
            !0
          ), Cu(z);
        });
      }
      R = !0;
    });
  }
  function ho(e) {
    return (
      /** @type {Record<string | symbol, unknown>} **/
      /** @type {any} */
      e[da] ??= {
        [_s]: e.nodeName.includes("-"),
        [xs]: e.namespaceURI === ma
      }
    );
  }
  var Es = /* @__PURE__ */ new Map();
  function ks(e) {
    var t = e.getAttribute("is") || e.nodeName, i = Es.get(t);
    if (i) return i;
    Es.set(t, i = []);
    for (var o, l = e, f = Element.prototype; f !== l; ) {
      o = A(l);
      for (var b in o)
        o[b].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
        b !== "innerHTML" && b !== "textContent" && b !== "innerText" && i.push(b);
      l = U(l);
    }
    return i;
  }
  function $u(e, t, i = t) {
    var o = /* @__PURE__ */ new WeakSet();
    Kc(e, "input", async (l) => {
      var f = l ? e.defaultValue : e.value;
      if (f = po(e) ? vo(f) : f, i(f), de !== null && o.add(de), await Or(), f !== (f = t())) {
        var b = e.selectionStart, m = e.selectionEnd, _ = e.value.length;
        if (e.value = f ?? "", m !== null) {
          var y = e.value.length;
          b === m && m === _ && y > _ ? (e.selectionStart = y, e.selectionEnd = y) : (e.selectionStart = b, e.selectionEnd = Math.min(m, y));
        }
      }
    }), // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    (fe && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
    // TODO Svelte 6: remove input.value check and set to empty string?
    bn(t) == null && e.value) && (i(po(e) ? vo(e.value) : e.value), de !== null && o.add(de)), ti(() => {
      var l = t();
      if (e === document.activeElement) {
        var f = (
          /** @type {Batch} */
          de
        );
        if (o.has(f))
          return;
      }
      po(e) && l === vo(e.value) || e.type === "date" && !l && !e.value || l !== e.value && (e.value = l ?? "");
    });
  }
  function po(e) {
    var t = e.type;
    return t === "number" || t === "range";
  }
  function vo(e) {
    return e === "" ? null : +e;
  }
  function go(e, t) {
    return e === t || e?.[jr] === t;
  }
  function hr(e = {}, t, i, o) {
    var l = (
      /** @type {ComponentContext} */
      ft.r
    ), f = (
      /** @type {Effect} */
      ce
    );
    return to(() => {
      var b, m;
      return ti(() => {
        b = m, m = [], bn(() => {
          go(i(...m), e) || (t(e, ...m), b && go(i(...b), e) && t(null, ...b));
        });
      }), () => {
        let _ = f;
        for (; _ !== l && _.parent !== null && _.parent.f & v; )
          _ = _.parent;
        const y = () => {
          m && go(i(...m), e) && t(null, ...m);
        }, S = _.teardown;
        _.teardown = () => {
          y(), S?.();
        };
      };
    }), e;
  }
  const Nu = {
    get(e, t) {
      if (!e.exclude.includes(t))
        return e.props[t];
    },
    set(e, t) {
      return !1;
    },
    getOwnPropertyDescriptor(e, t) {
      if (!e.exclude.includes(t) && t in e.props)
        return {
          enumerable: !0,
          configurable: !0,
          value: e.props[t]
        };
    },
    has(e, t) {
      return e.exclude.includes(t) ? !1 : t in e.props;
    },
    ownKeys(e) {
      return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
    }
  };
  // @__NO_SIDE_EFFECTS__
  function li(e, t, i) {
    return new Proxy(
      { props: e, exclude: t },
      Nu
    );
  }
  function Ne(e, t, i, o) {
    var l = (
      /** @type {V} */
      o
    ), f = !0, b = () => (f && (f = !1, l = /** @type {V} */
    o), l), m;
    m = /** @type {V} */
    e[t], m === void 0 && o !== void 0 && (m = b());
    var _;
    _ = () => {
      var R = (
        /** @type {V} */
        e[t]
      );
      return R === void 0 ? b() : (f = !0, R);
    };
    var y = !1, S = /* @__PURE__ */ Zi(() => (y = !1, _())), P = (
      /** @type {Effect} */
      ce
    );
    return (
      /** @type {() => V} */
      (function(R, z) {
        if (arguments.length > 0) {
          const H = z ? u(S) : R;
          return G(S, H), y = !0, l !== void 0 && (l = H), R;
        }
        return ar && y || (P.f & g) !== 0 ? S.v : u(S);
      })
    );
  }
  function Du(e) {
    return new Uu(e);
  }
  class Uu {
    /** @type {any} */
    #e;
    /** @type {Record<string, any>} */
    #t;
    /**
     * @param {ComponentConstructorOptions & {
     *  component: any;
     * }} options
     */
    constructor(t) {
      var i = /* @__PURE__ */ new Map(), o = (f, b) => {
        var m = /* @__PURE__ */ ja(b, !1, !1);
        return i.set(f, m), m;
      };
      const l = new Proxy(
        { ...t.props || {}, $$events: {} },
        {
          get(f, b) {
            return u(i.get(b) ?? o(b, Reflect.get(f, b)));
          },
          has(f, b) {
            return b === oc ? !0 : (u(i.get(b) ?? o(b, Reflect.get(f, b))), Reflect.has(f, b));
          },
          set(f, b, m) {
            return G(i.get(b) ?? o(b, m), m), Reflect.set(f, b, m);
          }
        }
      );
      this.#t = (t.hydrate ? pu : ps)(t.component, {
        target: t.target,
        anchor: t.anchor,
        props: l,
        context: t.context,
        intro: t.intro ?? !1,
        recover: t.recover,
        transformError: t.transformError
      }), (!t?.props?.$$host || t.sync === !1) && Te(), this.#e = l.$$events;
      for (const f of Object.keys(this.#t))
        f === "$set" || f === "$destroy" || f === "$on" || h(this, f, {
          get() {
            return this.#t[f];
          },
          /** @param {any} value */
          set(b) {
            this.#t[f] = b;
          },
          enumerable: !0
        });
      this.#t.$set = /** @param {Record<string, any>} next */
      (f) => {
        Object.assign(l, f);
      }, this.#t.$destroy = () => {
        vu(this.#t);
      };
    }
    /** @param {Record<string, any>} props */
    $set(t) {
      this.#t.$set(t);
    }
    /**
     * @param {string} event
     * @param {(...args: any[]) => any} callback
     * @returns {any}
     */
    $on(t, i) {
      this.#e[t] = this.#e[t] || [];
      const o = (...l) => i.call(this, ...l);
      return this.#e[t].push(o), () => {
        this.#e[t] = this.#e[t].filter(
          /** @param {any} fn */
          (l) => l !== o
        );
      };
    }
    $destroy() {
      this.#t.$destroy();
    }
  }
  let Ss = class {
  };
  typeof HTMLElement == "function" && (Ss = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** @type {any} The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = !1;
    /** @type {Record<string, any>} Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = !1;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $$l = {};
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    /** @type {any} The managed render effect for reflecting attributes */
    $$me;
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    $$shadowRoot = null;
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {ShadowRootInit | undefined} shadow_root_init
     */
    constructor(e, t, i) {
      super(), this.$$ctor = e, this.$$s = t, i && (this.$$shadowRoot = this.attachShadow(i));
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(e, t, i) {
      if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
        const o = this.$$c.$on(e, t);
        this.$$l_u.set(t, o);
      }
      super.addEventListener(e, t, i);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(e, t, i) {
      if (super.removeEventListener(e, t, i), this.$$c) {
        const o = this.$$l_u.get(t);
        o && (o(), this.$$l_u.delete(t));
      }
    }
    async connectedCallback() {
      if (this.$$cn = !0, !this.$$c) {
        let e = function(o) {
          return (l) => {
            const f = zi("slot");
            o !== "default" && (f.name = o), me(l, f);
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c)
          return;
        const t = {}, i = Bu(this);
        for (const o of this.$$s)
          o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = e(o), t.default = !0) : t[o] = e(o));
        for (const o of this.attributes) {
          const l = this.$$g_p(o.name);
          l in this.$$d || (this.$$d[l] = ci(l, o.value, this.$$p_d, "toProp"));
        }
        for (const o in this.$$p_d)
          !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
        this.$$c = Du({
          component: this.$$ctor,
          target: this.$$shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots: t,
            $$host: this
          }
        }), this.$$me = Xc(() => {
          ti(() => {
            this.$$r = !0;
            for (const o of p(this.$$c)) {
              if (!this.$$p_d[o]?.reflect) continue;
              this.$$d[o] = this.$$c[o];
              const l = ci(
                o,
                this.$$d[o],
                this.$$p_d,
                "toAttribute"
              );
              l == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, l);
            }
            this.$$r = !1;
          });
        });
        for (const o in this.$$l)
          for (const l of this.$$l[o]) {
            const f = this.$$c.$on(o, l);
            this.$$l_u.set(l, f);
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
    attributeChangedCallback(e, t, i) {
      this.$$r || (e = this.$$g_p(e), this.$$d[e] = ci(e, i, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(e) {
      return p(this.$$p_d).find(
        (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
      ) || e;
    }
  });
  function ci(e, t, i, o) {
    const l = i[e]?.type;
    if (t = l === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !i[e])
      return t;
    if (o === "toAttribute")
      switch (l) {
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
      switch (l) {
        case "Object":
        case "Array":
          return t && JSON.parse(t);
        case "Boolean":
          return t;
        // conversion already handled above
        case "Number":
          return t != null ? +t : t;
        default:
          return t;
      }
  }
  function Bu(e) {
    const t = {};
    return e.childNodes.forEach((i) => {
      t[
        /** @type {Element} node */
        i.slot || "default"
      ] = !0;
    }), t;
  }
  function pr(e, t, i, o, l, f) {
    let b = class extends Ss {
      constructor() {
        super(e, i, l), this.$$p_d = t;
      }
      static get observedAttributes() {
        return p(t).map(
          (m) => (t[m].attribute || m).toLowerCase()
        );
      }
    };
    return p(t).forEach((m) => {
      h(b.prototype, m, {
        get() {
          return this.$$c && m in this.$$c ? this.$$c[m] : this.$$d[m];
        },
        set(_) {
          _ = ci(m, _, t), this.$$d[m] = _;
          var y = this.$$c;
          if (y) {
            var S = E(y, m)?.get;
            S ? y[m] = _ : y.$set({ [m]: _ });
          }
        }
      });
    }), o.forEach((m) => {
      h(b.prototype, m, {
        get() {
          return this.$$c?.[m];
        }
      });
    }), e.element = /** @type {any} */
    b, b;
  }
  var ju = /* @__PURE__ */ $e('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');
  function As(e, t) {
    er(t, !0);
    let i = Ne(t, "loading"), o = /* @__PURE__ */ li(t, ["$$slots", "$$events", "$$legacy", "$$host", "loading"]), l;
    function f() {
      l?.click();
    }
    var b = {
      get loading() {
        return i();
      },
      set loading(S) {
        i(S), Te();
      }
    }, m = ju(), _ = Be(m);
    si(_, () => ({ type: "checkbox", ...o }), void 0, void 0, void 0, void 0, !0), hr(_, (S) => l = S, () => l);
    var y = Me(_, 2);
    return Ui(2), Pe(m), it(() => Ee(m, "data-loading", i())), ri("click", y, f), me(e, m), tr(b);
  }
  ni(["click"]), pr(As, { loading: {} }, [], [], { mode: "open" });
  var Hu = /* @__PURE__ */ $e('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');
  function Cs(e, t) {
    er(t, !0);
    let i = Ne(t, "loading"), o = /* @__PURE__ */ li(t, ["$$slots", "$$events", "$$legacy", "$$host", "loading"]);
    var l = {
      get loading() {
        return i();
      },
      set loading(m) {
        i(m), Te();
      }
    }, f = Hu(), b = Be(f);
    return si(b, () => ({ type: "checkbox", ...o }), void 0, void 0, void 0, void 0, !0), Ui(2), Pe(f), it(() => Ee(f, "data-loading", i())), me(e, f), tr(l);
  }
  pr(Cs, { loading: {} }, [], [], { mode: "open" });
  var zu = /* @__PURE__ */ $e('<div><a target="_blank" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');
  function bo(e, t) {
    er(t, !0);
    let i = Ne(t, "strings");
    const o = "https://altcha.org";
    var l = {
      get strings() {
        return i();
      },
      set strings(m) {
        i(m), Te();
      }
    }, f = zu(), b = Be(f);
    return Ee(b, "href", o), Pe(f), it(() => Ee(b, "aria-label", i().ariaLinkLabel)), me(e, f), tr(l);
  }
  pr(bo, { strings: {} }, [], [], { mode: "open" });
  var Vu = /* @__PURE__ */ $e('<div class="altcha-footer"><p></p> <!></div>');
  function mo(e, t) {
    er(t, !0);
    let i = Ne(t, "logo"), o = Ne(t, "strings");
    var l = {
      get logo() {
        return i();
      },
      set logo(y) {
        i(y), Te();
      },
      get strings() {
        return o();
      },
      set strings(y) {
        o(y), Te();
      }
    }, f = Vu(), b = Be(f);
    gs(b, () => o().footer, !0), Pe(b);
    var m = Me(b, 2);
    {
      var _ = (y) => {
        bo(y, {
          get strings() {
            return o();
          }
        });
      };
      Ze(m, (y) => {
        i() && y(_);
      });
    }
    return Pe(f), me(e, f), tr(l);
  }
  pr(mo, { logo: {}, strings: {} }, [], [], { mode: "open" });
  var qu = /* @__PURE__ */ $e('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');
  function Rs(e, t) {
    er(t, !0);
    let i = Ne(t, "loading"), o = /* @__PURE__ */ li(t, ["$$slots", "$$events", "$$legacy", "$$host", "loading"]), l;
    function f() {
      l?.click();
    }
    var b = {
      get loading() {
        return i();
      },
      set loading(S) {
        i(S), Te();
      }
    }, m = qu(), _ = Be(m);
    si(_, () => ({ type: "checkbox", ...o }), void 0, void 0, void 0, void 0, !0), hr(_, (S) => l = S, () => l);
    var y = Me(_, 2);
    return Pe(m), it(() => Ee(m, "data-loading", i())), ri("click", y, f), me(e, m), tr(b);
  }
  ni(["click"]), pr(Rs, { loading: {} }, [], [], { mode: "open" });
  var tt = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(tt || {}), xe = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(xe || {}), Ku = /* @__PURE__ */ $e('<div class="altcha-code-challenge-title"> </div>'), Wu = /* @__PURE__ */ $e('<div class="altcha-spinner"></div>'), Gu = /* @__PURE__ */ oo('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Yu = /* @__PURE__ */ oo('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), Ju = /* @__PURE__ */ oo('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), Xu = /* @__PURE__ */ $e('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'), Zu = /* @__PURE__ */ $e('<audio hidden="" autoplay=""></audio>'), Qu = /* @__PURE__ */ $e('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');
  function Ts(e, t) {
    er(t, !0);
    let i = Ne(t, "audioUrl"), o = Ne(t, "codeChallenge"), l = Ne(t, "config"), f = Ne(t, "imageUrl"), b = Ne(t, "onCancel"), m = Ne(t, "onReload"), _ = Ne(t, "onSubmit"), y = Ne(t, "strings"), S = /* @__PURE__ */ he(void 0), P = /* @__PURE__ */ he(void 0), R = /* @__PURE__ */ he(void 0), z = /* @__PURE__ */ he(!1), H = /* @__PURE__ */ he(""), Q = /* @__PURE__ */ he(!1);
    so(() => (l().disableAutoFocus || Or().then(() => {
      u(R)?.focus();
    }), () => {
      u(P) && (u(P).pause(), G(P, void 0));
    }));
    function le() {
      G(S, tt.PAUSED, !0);
    }
    function ge(W) {
      G(S, tt.ERROR, !0);
    }
    function Qe() {
      G(S, tt.READY, !0);
    }
    function Ke() {
      G(S, tt.LOADING, !0);
    }
    function ye() {
      G(S, tt.PLAYING, !0);
    }
    function ot() {
      G(S, tt.PAUSED, !0);
    }
    function _e(W) {
      W.code === "Space" ? (W.preventDefault(), W.stopPropagation(), Fe()) : W.code === "Escape" && (W.preventDefault(), W.stopPropagation(), b()?.());
    }
    function te(W) {
      W.preventDefault(), W.stopPropagation(), _()?.(u(H));
    }
    function Fe() {
      u(P) ? u(S) === tt.LOADING || (u(P).paused ? (i() && u(P).src !== i() && (u(P).src = i()), u(P).currentTime = 0, u(P).play()) : u(P).pause()) : (G(Q, !0), requestAnimationFrame(() => {
        u(P) && i() && (u(P).src = i(), u(P).play());
      }));
    }
    var ct = {
      get audioUrl() {
        return i();
      },
      set audioUrl(W) {
        i(W), Te();
      },
      get codeChallenge() {
        return o();
      },
      set codeChallenge(W) {
        o(W), Te();
      },
      get config() {
        return l();
      },
      set config(W) {
        l(W), Te();
      },
      get imageUrl() {
        return f();
      },
      set imageUrl(W) {
        f(W), Te();
      },
      get onCancel() {
        return b();
      },
      set onCancel(W) {
        b(W), Te();
      },
      get onReload() {
        return m();
      },
      set onReload(W) {
        m(W), Te();
      },
      get onSubmit() {
        return _();
      },
      set onSubmit(W) {
        _(W), Te();
      },
      get strings() {
        return y();
      },
      set strings(W) {
        y(W), Te();
      }
    }, ue = Qu(), We = Be(ue), Kt = Be(We);
    {
      var kt = (W) => {
        var ze = Ku(), Ir = Be(ze, !0);
        Pe(ze), it(() => qt(Ir, y().verificationRequired)), me(W, ze);
      };
      Ze(Kt, (W) => {
        l().codeChallengeDisplay !== "standard" && W(kt);
      });
    }
    var ht = Me(Kt, 2), je = Be(ht, !0);
    Pe(ht);
    var Wt = Me(ht, 2), ee = Me(Wt, 2), Re = Be(ee);
    fo(Re), Re.disabled = u(z), hr(Re, (W) => G(R, W), () => u(R));
    var St = Me(Re, 2);
    {
      var V = (W) => {
        var ze = Xu(), Ir = Be(ze);
        {
          var Eo = (pt) => {
            var Gt = Wu();
            me(pt, Gt);
          }, An = (pt) => {
            var Gt = Gu();
            me(pt, Gt);
          }, ko = (pt) => {
            var Gt = Yu();
            me(pt, Gt);
          }, So = (pt) => {
            var Gt = Ju();
            me(pt, Gt);
          };
          Ze(Ir, (pt) => {
            u(S) === tt.LOADING ? pt(Eo) : u(S) === tt.ERROR ? pt(An, 1) : u(S) === tt.PLAYING ? pt(ko, 2) : pt(So, -1);
          });
        }
        Pe(ze), it(() => {
          Ee(ze, "title", y().getAudioChallenge), ze.disabled = u(S) === tt.LOADING || u(S) === tt.ERROR, Ee(ze, "aria-label", u(S) === tt.LOADING ? y().loading : y().getAudioChallenge);
        }), Xe("click", ze, () => Fe(), !0), me(W, ze);
      };
      Ze(St, (W) => {
        o().audio && W(V);
      });
    }
    var Pr = Me(St, 2);
    Pe(ee);
    var ui = Me(ee, 2), Ot = Be(ui), xo = Be(Ot, !0);
    Pe(Ot);
    var Fr = Me(Ot, 2), En = Be(Fr, !0);
    Pe(Fr), Pe(ui), Pe(We);
    var kn = Me(We, 2);
    {
      var Sn = (W) => {
        var ze = Zu();
        hr(ze, (Ir) => G(P, Ir), () => u(P)), Xe("error", ze, ge), Xe("loadstart", ze, Ke), Xe("canplay", ze, Qe), Xe("pause", ze, ot), Xe("playing", ze, ye), Xe("ended", ze, le), me(W, ze);
      };
      Ze(kn, (W) => {
        u(Q) && W(Sn);
      });
    }
    return Pe(ue), it(() => {
      qt(je, y().enterCodeFromImage), Ee(Wt, "src", f()), Ee(Re, "minlength", o().length || 1), Ee(Re, "maxlength", o().length), Ee(Re, "placeholder", y().enterCode), Ee(Re, "aria-label", u(S) === tt.LOADING ? y().loading : u(S) === tt.PLAYING ? "" : y().enterCodeAria), Ee(Re, "aria-live", u(S) ? "assertive" : "polite"), Ee(Re, "aria-busy", u(S) === tt.LOADING), Ee(Pr, "title", y().reload), Ee(Pr, "aria-label", y().reload), Ee(Ot, "aria-label", y().verify), qt(xo, y().verify), Ee(Fr, "aria-label", y().cancel), qt(En, y().cancel);
    }), Xe("submit", We, te, !0), ri("keydown", Re, _e), $u(Re, () => u(H), (W) => G(H, W)), Xe("click", Pr, () => m()?.(), !0), Xe("click", Fr, () => b()?.(), !0), me(e, ue), tr(ct);
  }
  ni(["keydown"]), pr(
    Ts,
    {
      audioUrl: {},
      codeChallenge: {},
      config: {},
      imageUrl: {},
      onCancel: {},
      onReload: {},
      onSubmit: {},
      strings: {}
    },
    [],
    [],
    { mode: "open" }
  );
  var ef = /* @__PURE__ */ $e('<div class="altcha-popover-backdrop" data-backdrop=""></div>'), tf = /* @__PURE__ */ $e('<div class="altcha-popover-arrow"></div>'), rf = /* @__PURE__ */ $e('<div role="button" class="altcha-popover-close">&times;</div>'), nf = /* @__PURE__ */ $e('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>', 1);
  function wo(e, t) {
    er(t, !0);
    let i = Ne(t, "anchor"), o = Ne(t, "children"), l = Ne(t, "display", 7, "standard"), f = Ne(t, "backdrop", 7, !1), b = Ne(t, "onClickOutside"), m = Ne(t, "onClickOutsideDelay", 7, 600), _ = Ne(t, "onClose"), y = Ne(t, "placement", 7, "auto"), S = Ne(t, "updateUISignal"), P = Ne(t, "variant", 7, "neutral"), R = /* @__PURE__ */ li(t, [
      "$$slots",
      "$$events",
      "$$legacy",
      "$$host",
      "anchor",
      "children",
      "display",
      "backdrop",
      "onClickOutside",
      "onClickOutsideDelay",
      "onClose",
      "placement",
      "updateUISignal",
      "variant"
    ]), z = /* @__PURE__ */ he(void 0), H = /* @__PURE__ */ he(void 0), Q = /* @__PURE__ */ he(!1), le = /* @__PURE__ */ he(0);
    xt(() => {
      y() !== "auto" && G(Q, y() === "top");
    }), xt(() => {
      S() && ot();
    }), so(() => {
      const ee = l() === "bottomsheet" || l() === "overlay";
      return ee && (u(H) && document.body.append(u(H)), u(z) && document.body.append(u(z))), ot(), Or().then(() => {
        G(le, Date.now(), !0);
      }), () => {
        ee && (u(H) && document.body.removeChild(u(H)), u(z) && document.body.removeChild(u(z)));
      };
    });
    function ge() {
      _()?.();
    }
    function Qe(ee) {
      const Re = ee.target;
      !u(z)?.contains(Re) && (!m() || u(le) + m() < Date.now()) && b()?.();
    }
    function Ke() {
      ot();
    }
    function ye() {
      ot();
    }
    function ot() {
      if (i() && y() === "auto" && u(z)) {
        const ee = i().getBoundingClientRect(), St = document.documentElement.clientHeight - (ee.top + ee.height) < u(z).clientHeight;
        u(Q) !== St && G(Q, St);
      }
    }
    var _e = {
      get anchor() {
        return i();
      },
      set anchor(ee) {
        i(ee), Te();
      },
      get children() {
        return o();
      },
      set children(ee) {
        o(ee), Te();
      },
      get display() {
        return l();
      },
      set display(ee = "standard") {
        l(ee), Te();
      },
      get backdrop() {
        return f();
      },
      set backdrop(ee = !1) {
        f(ee), Te();
      },
      get onClickOutside() {
        return b();
      },
      set onClickOutside(ee) {
        b(ee), Te();
      },
      get onClickOutsideDelay() {
        return m();
      },
      set onClickOutsideDelay(ee = 600) {
        m(ee), Te();
      },
      get onClose() {
        return _();
      },
      set onClose(ee) {
        _(ee), Te();
      },
      get placement() {
        return y();
      },
      set placement(ee = "auto") {
        y(ee), Te();
      },
      get updateUISignal() {
        return S();
      },
      set updateUISignal(ee) {
        S(ee), Te();
      },
      get variant() {
        return P();
      },
      set variant(ee = "neutral") {
        P(ee), Te();
      }
    }, te = nf();
    Xe("click", Ar, Qe, !0), Xe("resize", Ar, Ke), Xe("scroll", Ar, ye);
    var Fe = zr(te);
    {
      var ct = (ee) => {
        var Re = ef();
        hr(Re, (St) => G(H, St), () => u(H)), me(ee, Re);
      };
      Ze(Fe, (ee) => {
        f() && ee(ct);
      });
    }
    var ue = Me(Fe, 2);
    si(ue, () => ({
      ...R,
      class: `altcha-popover ${(t.class || "") ?? ""}`,
      "data-popover": !0,
      "data-variant": P(),
      "data-top": u(Q),
      "data-display": l()
    }));
    var We = Be(ue);
    {
      var Kt = (ee) => {
        var Re = tf();
        me(ee, Re);
      };
      Ze(We, (ee) => {
        l() === "standard" && ee(Kt);
      });
    }
    var kt = Me(We, 2);
    {
      var ht = (ee) => {
        var Re = rf();
        Xe("click", Re, ge, !0), me(ee, Re);
      };
      Ze(kt, (ee) => {
        l() !== "standard" && ee(ht);
      });
    }
    var je = Me(kt, 2), Wt = Be(je);
    return gu(Wt, () => o() ?? re), Pe(je), Pe(ue), hr(ue, (ee) => G(z, ee), () => u(z)), me(e, te), tr(_e);
  }
  pr(
    wo,
    {
      anchor: {},
      children: {},
      display: {},
      backdrop: {},
      onClickOutside: {},
      onClickOutsideDelay: {},
      onClose: {},
      placement: {},
      updateUISignal: {},
      variant: {}
    },
    [],
    [],
    { mode: "open" }
  );
  function of(e) {
    return Array.from(new Uint8Array(e)).map((t) => t.toString(16).padStart(2, "0")).join("");
  }
  function af(e, t = "altcha-css", i) {
    if (typeof document < "u" && document && !document.getElementById(t)) {
      const o = document.createElement("style");
      o.id = t, o.textContent = e;
      const l = document.currentScript?.nonce ?? document.querySelector('meta[name="csp-nonce"]')?.content;
      l && (o.nonce = l), document.head.appendChild(o);
    }
  }
  async function Os(e) {
    const {
      challenge: t,
      concurrency: i = navigator.hardwareConcurrency,
      controller: o = new AbortController(),
      createWorker: l,
      onOutOfMemory: f = (R) => R > 1 ? Math.floor(R / 2) : 0,
      counterMode: b,
      timeout: m = 9e4
    } = e, _ = Math.min(16, Math.max(1, i)), y = [], S = () => {
      for (const R of y)
        R.terminate();
    };
    for (let R = 0; R < _; R++)
      y.push(await l(t.parameters.algorithm));
    let P = null;
    try {
      P = await Promise.race(
        y.map((R, z) => (o.signal.addEventListener("abort", () => {
          R.postMessage({ type: "abort" });
        }), new Promise((H, Q) => {
          R.addEventListener("error", (le) => {
            Q(le);
          }), R.addEventListener("message", (le) => {
            if (le.data) {
              for (const ge of y)
                ge !== R && ge.postMessage({ type: "abort" });
              if (le.data.error)
                return Q(new Error(le.data.error));
            }
            H(le.data);
          }), R.postMessage({
            challenge: t,
            counterMode: b,
            counterStart: z,
            counterStep: _,
            timeout: m,
            type: "work"
          });
        })))
      );
    } catch (R) {
      if (R instanceof Error && !!R?.message?.includes("Out of memory") && f) {
        S();
        const H = f(_);
        if (H)
          return Os({
            ...e,
            challenge: t,
            controller: o,
            concurrency: H,
            createWorker: l
          });
      }
      throw R;
    } finally {
      S();
    }
    return o.signal.aborted ? null : P || null;
  }
  class sf {
    TAG_CODES = {
      INPUT: 1,
      TEXTAREA: 2,
      SELECT: 3,
      BUTTON: 4,
      A: 5,
      DETAILS: 6,
      SUMMARY: 7,
      IFRAME: 8,
      VIDEO: 9,
      AUDIO: 10
    };
    maxSamples;
    sampleInterval;
    target;
    focusStartTime = 0;
    focusInteraction = 0;
    focusInteractionTimer = null;
    lastPointerSample = 0;
    lastTouchSample = 0;
    lastScrollSample = 0;
    pendingPointer = null;
    pendingTouch = null;
    focus = [];
    pointer = [];
    scroll = [];
    touch = [];
    constructor(t = {}) {
      const { maxSamples: i = 60, sampleInterval: o = 50, target: l = window } = t;
      this.maxSamples = i, this.sampleInterval = o, this.target = l, this.attach();
    }
    destroy() {
      const t = { capture: !0 };
      this.target.removeEventListener("focusin", this.onFocus, t), this.target.removeEventListener("keydown", this.onInteraction, t), this.target.removeEventListener("pointerdown", this.onInteraction, t), this.target.removeEventListener("pointermove", this.onPointer, t), this.target.removeEventListener("scroll", this.onScroll, t), this.target.removeEventListener("touchmove", this.onTouchMove, t);
    }
    export() {
      return {
        focus: this.focus,
        maxTouchPoints: navigator.maxTouchPoints || 0,
        pointer: this.pointer,
        scroll: this.scroll,
        time: Date.now(),
        touch: this.touch
      };
    }
    attach() {
      const t = { passive: !0, capture: !0 };
      this.target.addEventListener("focusin", this.onFocus, t), this.target.addEventListener("keydown", this.onInteraction, t), this.target.addEventListener("pointerdown", this.onInteraction, t), this.target.addEventListener("pointermove", this.onPointer, t), this.target.addEventListener("scroll", this.onScroll, t), this.target.addEventListener("touchmove", this.onTouchMove, t);
    }
    evict(t) {
      t.length > this.maxSamples && t.splice(0, t.length - this.maxSamples);
    }
    onFocus = (t) => {
      if (this.focusInteraction === 2)
        return;
      const i = t.target;
      if (!(i instanceof Element))
        return;
      const o = performance.now();
      this.focusStartTime === 0 && (this.focusStartTime = o), this.focus.push([
        Math.round(o - this.focusStartTime),
        i.tabIndex,
        this.TAG_CODES[i.tagName] ?? 0,
        this.focusInteraction ? 1 : 0
      ]), this.evict(this.focus);
    };
    onInteraction = (t) => {
      this.focusInteraction = "keyCode" in t ? 1 : 2, this.focusInteractionTimer && clearTimeout(this.focusInteractionTimer), this.focusInteractionTimer = setTimeout(() => {
        this.focusInteraction = 0;
      }, 100);
    };
    onPointer = (t) => {
      if (t.pointerType === "touch")
        return;
      const i = t.timeStamp || performance.now();
      this.pendingPointer = [Math.round(t.clientX), Math.round(t.clientY), Math.round(i)], i - this.lastPointerSample >= this.sampleInterval && (this.pointer.push(this.pendingPointer), this.lastPointerSample = i, this.pendingPointer = null, this.evict(this.pointer));
    };
    onScroll = () => {
      const t = performance.now();
      t - this.lastScrollSample < this.sampleInterval || (this.scroll.push([Math.round(window.scrollY), Math.round(t)]), this.lastScrollSample = t, this.evict(this.scroll));
    };
    onTouchMove = (t) => {
      const i = t.timeStamp || performance.now(), o = t.touches[0];
      o && (this.pendingTouch = [
        Math.round(o.clientX),
        Math.round(o.clientY),
        Math.round(i),
        Math.round(o.force * 1e3) / 1e3,
        Math.round(o.radiusX || 0),
        Math.round(o.radiusY || 0)
      ], i - this.lastTouchSample >= this.sampleInterval && (this.touch.push(this.pendingTouch), this.lastTouchSample = i, this.pendingTouch = null, this.evict(this.touch)));
    };
  }
  var lf = /* @__PURE__ */ $e('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'), cf = /* @__PURE__ */ $e('<div class="altcha-overlay-content"></div>'), uf = /* @__PURE__ */ $e('<div role="button" class="altcha-overlay-close">&times;</div> <!>', 1), ff = /* @__PURE__ */ $e('<div class="altcha-floating-arrow"></div>'), df = /* @__PURE__ */ $e('<input type="hidden"/>'), hf = /* @__PURE__ */ $e('<div class="altcha-error">Secure context (HTTPS) required.</div>'), pf = /* @__PURE__ */ $e('<div class="altcha-error"> </div>'), vf = /* @__PURE__ */ $e('<div class="altcha-error"> </div>'), gf = /* @__PURE__ */ $e("<!> <!>", 1), bf = /* @__PURE__ */ $e('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>', 1);
  function mf(e, t) {
    er(t, !0);
    const i = () => Oa(S, "$altchaDefaults", l), o = () => Oa(H, "$altchaI18nStore", l), [l, f] = Ic(), b = 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])', m = 'input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])', _ = ["ar", "fa", "he", "ur"], { isSecureContext: y } = globalThis, { store: S } = globalThis.$altcha.defaults, P = navigator.hardwareConcurrency || 2, R = navigator.deviceMemory || 0, z = R && R <= 4 ? Math.min(4, P) : P, H = globalThis.$altcha.i18n.store, Q = t.$$host, le = (x, L) => {
      Or().then(() => {
        Q?.dispatchEvent(new CustomEvent(x, { detail: L }));
      });
    };
    let ge = null, Qe = /* @__PURE__ */ he(nr(new URL(location.origin))), Ke = /* @__PURE__ */ he(!1), ye = /* @__PURE__ */ he(null), ot = /* @__PURE__ */ he(null), _e = /* @__PURE__ */ he(null), te = /* @__PURE__ */ he(nr(xe.UNVERIFIED)), Fe = /* @__PURE__ */ he(void 0), ct = /* @__PURE__ */ he(void 0), ue = /* @__PURE__ */ he(null), We = /* @__PURE__ */ he(void 0), Kt = /* @__PURE__ */ he(null), kt = /* @__PURE__ */ he(null), ht = /* @__PURE__ */ he(null), je = /* @__PURE__ */ he(null), Wt = /* @__PURE__ */ he(nr([])), ee = /* @__PURE__ */ he(0), Re = /* @__PURE__ */ he(nr({})), St = /* @__PURE__ */ he(!0);
    const V = /* @__PURE__ */ lt(() => ({
      fetch: (x, L) => fetch(x, L),
      audioChallengeLanguage: "",
      auto: "off",
      barPlacement: "bottom",
      challenge: "",
      codeChallenge: null,
      codeChallengeDisplay: "standard",
      credentials: null,
      debug: !1,
      disableAutoFocus: !1,
      display: "standard",
      floatingAnchor: "",
      floatingOffset: 8,
      floatingPersist: !1,
      floatingPlacement: "auto",
      hideFooter: !1,
      hideLogo: !1,
      humanInteractionSignature: !0,
      language: "",
      mockError: !1,
      minDuration: 500,
      overlayContent: "",
      name: "altcha",
      popoverPlacement: "auto",
      retryOnOutOfMemoryError: !0,
      setCookie: null,
      serverVerificationFields: !1,
      serverVerificationTimeZone: !1,
      test: !1,
      timeout: 9e4,
      type: "checkbox",
      validationMessage: "",
      verifyFunction: null,
      verifyUrl: "",
      workers: z,
      ...i(),
      ...u(Re)
    })), Pr = /* @__PURE__ */ lt(() => `altcha-checkbox-${t.id || Math.floor(Math.random() * 1e12).toString(16)}`), ui = /* @__PURE__ */ lt(() => _f(u(V).type)), Ot = /* @__PURE__ */ lt(() => u(V).auto), xo = /* @__PURE__ */ lt(() => u(te) === xe.VERIFYING), Fr = /* @__PURE__ */ lt(() => !u(V).hideFooter), En = /* @__PURE__ */ lt(() => !u(V).hideLogo && u(V).display !== "bar"), kn = /* @__PURE__ */ lt(() => xf(o(), [
      u(V).language,
      document.documentElement.lang,
      ...navigator.languages
    ])), Sn = /* @__PURE__ */ lt(() => _.includes(u(kn).language) ? "rtl" : void 0), W = /* @__PURE__ */ lt(() => ({ ...u(kn).strings })), ze = /* @__PURE__ */ lt(() => u(ye)?.audio?.match(/^(https?:)?\//) ? fi(u(ye).audio, u(Qe), {
      language: u(V).audioChallengeLanguage || u(kn).language
    }).toString() : u(ye)?.audio), Ir = /* @__PURE__ */ lt(() => u(ye)?.image?.match(/^(https?:)?\//) ? fi(u(ye).image, u(Qe)) : u(ye)?.image);
    xt(() => {
      Cn({
        auto: t.auto,
        challenge: t.challenge,
        display: t.display,
        language: t.language,
        name: t.name,
        type: t.type,
        workers: t.workers
      });
    }), xt(() => {
      if (t.configuration)
        try {
          Cn(JSON.parse(t.configuration));
        } catch {
          Oe("unable to parse the `configuration` attribute (JSON expected)");
        }
    }), xt(() => {
      u(_e) !== u(V).display && di(u(V).display);
    }), xt(() => {
      u(Ke) && u(te) === xe.VERIFYING && G(Ke, !1);
    }), xt(() => {
      !u(Ke) && u(te) === xe.VERIFIED && G(Ke, !0);
    }), xt(() => {
      if (!u(Ke)) {
        const x = Ao();
        x && x.checked && (x.checked = !1);
      }
    }), xt(() => {
      u(te) === xe.VERIFIED && Ao()?.setCustomValidity("");
    }), xt(() => {
      if (u(Ot) === "onload") {
        const x = setTimeout(
          () => {
            Gr();
          },
          1
        );
        return () => {
          x && clearTimeout(x);
        };
      }
    }), xt(() => {
      u(kt) && Oe("error:", u(kt));
    }), xt(() => {
      u(je) && u(V).setCookie && $f(u(je), u(V).setCookie);
    }), so(() => (Oe("mounted", "3.1.0"), Q && globalThis.$altcha.instances.add(Q), G(ue, u(We)?.closest("form"), !0), u(ue)?.addEventListener("reset", Ns), u(ue)?.addEventListener("submit", Ds, { capture: !0 }), u(ue)?.addEventListener("focusin", $s), Eo(), u(V).humanInteractionSignature && (Oe("human interaction signature enabled"), ge = new sf()), le("load"), y || Oe("secure context (HTTPS) required"), () => {
      ko(), Q && globalThis.$altcha.instances.delete(Q), u(ht) && clearTimeout(u(ht)), u(ue)?.removeEventListener("reset", Ns), u(ue)?.removeEventListener("submit", Ds, { capture: !0 }), u(ue)?.removeEventListener("focusin", $s), ge?.destroy();
    }));
    function Eo() {
      G(Wt, [...globalThis.$altcha.plugins].map((x) => new x(Q)), !0), Oe("activating plugins", u(Wt).map((x) => x.constructor.name));
      for (const x of u(Wt))
        x.activate();
    }
    async function An(x, ...L) {
      let Y;
      for (const J of u(Wt))
        Y = await J[x].call(J, ...L);
      return Y;
    }
    function ko() {
      for (const x of u(Wt))
        x.destroy();
    }
    function So(x) {
      const [L, Y] = x.salt.split("?"), J = {};
      if (Y)
        try {
          Object.assign(J, Object.fromEntries(new URLSearchParams(Y).entries()));
        } catch {
        }
      const ae = {
        codeChallenge: x.codeChallenge,
        parameters: {
          algorithm: x.algorithm,
          cost: 1,
          data: J,
          expiresAt: J?.expires ? parseInt(J.expires, 10) : void 0,
          keyLength: x.algorithm === "SHA-512" ? 64 : x.algorithm === "SHA-384" ? 48 : 32,
          nonce: of(new TextEncoder().encode(x.salt)),
          keyPrefix: x.challenge,
          salt: ""
        },
        signature: x.signature
      };
      return Object.defineProperties(ae, {
        _originalSalt: { enumerable: !1, value: x.salt, writable: !1 },
        _version: { enumerable: !1, value: 1, writable: !1 }
      }), ae;
    }
    function pt(x, L) {
      return {
        algorithm: x.parameters.algorithm,
        challenge: x.parameters.keyPrefix,
        number: L.counter,
        salt: "_originalSalt" in x ? x._originalSalt : x.parameters.nonce,
        signature: x.signature,
        took: L.time || 0
      };
    }
    async function Gt(x) {
      await new Promise((L) => setTimeout(L, x));
    }
    async function Ms(x = u(V).challenge, L) {
      const Y = await An("onFetchChallenge", x);
      let J = null;
      if (Y !== void 0)
        return Y;
      if (typeof x == "string")
        if (x.startsWith("{")) {
          Oe("parsing JSON challenge");
          try {
            J = JSON.parse(x);
          } catch {
            throw new Error("Unable to parse JSON challenge.");
          }
        } else {
          Oe("fetching challenge from", L?.method || "GET", x), G(Qe, new URL(x, location.origin), !0);
          const ae = await u(V).fetch(x, {
            credentials: u(V).credentials || void 0,
            ...L
          });
          await Bs(ae);
          const ne = ae.headers.get("x-altcha-config");
          ne && If(ne);
          const ke = await ae.json();
          if (ke && "his" in ke && ke.his) {
            if (Oe("requested HIS"), !ge)
              throw new Error("Server requested HIS data but collector is disabled.");
            return Ms(fi(ke.his.url, u(Qe)), {
              body: JSON.stringify({ his: ge.export() }),
              headers: { "content-type": "application/json" },
              method: "POST"
            });
          }
          ke && "hisResult" in ke && ke.hisResult && Oe("HIS result", ke.hisResult), J = ke;
        }
      else if (x && typeof x == "object")
        try {
          J = JSON.parse(JSON.stringify(x));
        } catch {
          throw new Error("Unable to parse JSON challenge.");
        }
      if (wf(J) && (J = So(J)), !yf(J))
        throw new Error("Challenge validation failed.");
      return J;
    }
    function wf(x) {
      return typeof x == "object" && "challenge" in x;
    }
    function yf(x) {
      return !!x && typeof x == "object" && "parameters" in x && !!x.parameters && typeof x.parameters == "object" && "algorithm" in x.parameters && "nonce" in x.parameters && "salt" in x.parameters && "keyPrefix" in x.parameters;
    }
    function Ao() {
      return document.getElementById(u(Pr));
    }
    function _f(x) {
      switch (x) {
        case "checkbox":
          return As;
        case "switch":
          return Rs;
        default:
          return Cs;
      }
    }
    function xf(x, L) {
      const Y = Object.keys(x).map((ae) => ae.toLowerCase());
      let J = L.reduce(
        (ae, ne) => (ne = ne.toLowerCase(), ae || (x[ne] ? ne : null) || Y.find((ke) => ne.split("-")[0] === ke.split("-")[0]) || null),
        null
      );
      return x[J || ""] || (J = "en"), { language: J, strings: x[J] };
    }
    function Ef(x) {
      switch (x) {
        case "bar":
          return u(V).barPlacement || "bottom";
        case "floating":
          return u(V).floatingPlacement || "auto";
        default:
          return;
      }
    }
    function kf(x) {
      return [
        ...u(ue)?.querySelectorAll(b) || []
      ].reduce(
        (Y, J) => {
          const ae = J.name, ne = J.value;
          return ae && ne && (Y[ae] = /\n/.test(ne) ? ne.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : ne), Y;
        },
        {}
      );
    }
    function Sf() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch {
      }
    }
    function fi(x, L, Y) {
      const J = new URL(x, L);
      if (J.search || (J.search = L.search), Y)
        for (const ae in Y)
          Y[ae] !== void 0 && Y[ae] !== null && J.searchParams.set(ae, Y[ae]);
      return J.toString();
    }
    function Af(x) {
      !u(Ke) && x.currentTarget.checked ? (x.preventDefault(), x.currentTarget.checked = !1, u(te) !== xe.VERIFYING && Gr()) : x.currentTarget.checked || (x.preventDefault(), Pt());
    }
    function Cf(x) {
      u(te) === xe.VERIFYING ? x.currentTarget.setCustomValidity(u(W).waitAlert) : u(V).validationMessage && x.currentTarget.setCustomValidity(u(V).validationMessage);
    }
    function Rf() {
      di(u(V).display), Pt();
    }
    function Tf() {
      hi();
    }
    function Of(x) {
      const L = x.target;
      u(V).display === "floating" && L && !Q?.contains(L) && !L.hasAttribute("data-backdrop") && !L.closest("[data-popover]") && u(te) !== xe.VERIFIED && !u(V).floatingPersist && Co();
    }
    function $s(x) {
      u(Ot) === "onfocus" && u(te) === xe.UNVERIFIED && Gr();
    }
    function Ns() {
      di(u(V).display), Pt();
    }
    function Ds(x) {
      x.target?.getAttribute("data-code-challenge") !== "true" && u(Ot) === "onsubmit" && u(te) === xe.UNVERIFIED && (x.preventDefault(), x.stopPropagation(), G(Kt, x.submitter, !0), Ro(), Gr().then((Y) => {
        Y && !u(ye) && Or().then(() => {
          Us(u(Kt));
        });
      }));
    }
    function Pf(x) {
      x.persisted && (di(u(V).display), Pt());
    }
    function Ff() {
      hi();
    }
    function If(x) {
      try {
        const L = JSON.parse(x);
        L && typeof L == "object" && Cn({
          // Backward compatibility mappings
          serverVerificationFields: L?.sentinel?.fields,
          serverVerificationTimeZone: L?.sentinel?.timeZone,
          verifyUrl: L.verifyurl,
          ...L
        });
      } catch (L) {
        Oe("unable to configure from x-altcha-config header", L);
      }
    }
    function Lf(x = 20) {
      if (!u(We))
        return;
      const L = u(V).floatingPlacement;
      if (!u(ct) && (G(
        ct,
        (u(V).floatingAnchor instanceof HTMLElement ? u(V).floatingAnchor : u(V).floatingAnchor ? document.querySelector(u(V).floatingAnchor) : u(ue)?.querySelector(m)) || u(ue),
        !0
      ), !u(ct))) {
        Oe("unable to find floating anchor element");
        return;
      }
      const Y = parseInt(u(V).floatingOffset, 10) || 12, J = u(ct).getBoundingClientRect(), ae = u(We).getBoundingClientRect(), ne = document.documentElement.clientHeight, ke = document.documentElement.clientWidth, At = !L || L === "auto" ? J.bottom + ae.height + Y + x > ne : L === "top", Ie = Math.max(x, Math.min(ke - x - ae.width, J.left + J.width / 2 - ae.width / 2));
      if (u(We).style.setProperty("--altcha-floating-left", `${Ie}px`), u(We).style.setProperty("--altcha-floating-top", At ? `${J.top - (ae.height + Y)}px` : `${J.bottom + Y}px`), u(We).setAttribute("data-floating-position", At ? "top" : "bottom"), u(Fe)) {
        const Ge = u(Fe).getBoundingClientRect();
        u(Fe).style.left = J.left - Ie + J.width / 2 - Ge.width / 2 + "px";
      }
    }
    async function Mf(x, L) {
      const Y = await An("onRequestServerVerification", x, L);
      if (Y !== void 0)
        return Y;
      if (Oe("requesting server verification from", u(V).verifyUrl), !u(V).verifyUrl)
        throw new Error("Parameter verifyUrl must be set for server verification.");
      const J = await u(V).fetch(fi(u(V).verifyUrl, u(Qe)), {
        body: JSON.stringify({
          code: L,
          fields: u(V).serverVerificationFields ? kf() : void 0,
          payload: x,
          timeZone: u(V).serverVerificationTimeZone ? Sf() : void 0
        }),
        credentials: u(V).credentials || void 0,
        headers: { "Content-Type": "application/json" },
        method: "POST"
      });
      await Bs(J);
      const ae = await J.json();
      return ae && typeof ae == "object" && "payload" in ae && ae.payload && le("serververification", ae), ae;
    }
    function Us(x) {
      u(ue) && "requestSubmit" in u(ue) ? u(ue).requestSubmit(x) : u(ue)?.reportValidity() && (x ? x.click() : u(ue).submit());
    }
    function $f(x, L = {}) {
      const {
        domain: Y,
        name: J = u(V).name,
        maxAge: ae,
        path: ne,
        sameSite: ke,
        secure: At
      } = L;
      let Ie = `${encodeURIComponent(J)}=${encodeURIComponent(x)}`;
      Y && (Ie += `; Domain=${Y}`), ae != null && (Ie += `; Max-Age=${ae}`), ne && (Ie += `; Path=${ne}`), ke && (Ie += `; SameSite=${ke}`), At && (Ie += "; Secure"), document.cookie = Ie;
    }
    function di(x) {
      switch (x) {
        case "bar":
        case "floating":
        case "overlay":
          Co(), (!u(Ot) || u(Ot) === "off") && (u(Re).auto = "onsubmit");
          break;
        case "standard":
          Ro();
      }
      u(_e) !== x && G(_e, x, !0);
    }
    function Nf(x) {
      u(ht) && clearTimeout(u(ht));
      const L = () => {
        u(te) !== xe.UNVERIFIED ? (G(Ke, !1), Ft(xe.EXPIRED)) : Pt(), le("expired");
      }, Y = x * 1e3 - Date.now();
      Y >= 1 ? G(ht, setTimeout(L, Y), !0) : L();
    }
    async function Bs(x) {
      if (x.status >= 400) {
        if (x.headers.get("content-type")?.includes("/json")) {
          let Y;
          try {
            Y = await x.json();
          } catch {
          }
          if (Y && "error" in Y)
            throw new Error(`Server responded with ${x.status} - ${Y.error}`);
        }
        throw new Error(`Server responded with ${x.status}.`);
      }
      const L = x.headers.get("content-type");
      if (!L || !L.includes("/json"))
        throw new Error(`Server responded with invalid content-type. Expected application/json, received ${L}.`);
    }
    async function js(x) {
      if (!u(je)) {
        Ft(xe.ERROR, "Cannot verify code challenge without PoW payload.");
        return;
      }
      Ft(xe.VERIFYING);
      let L = null;
      if (u(V).verifyUrl)
        L = await Mf(u(je), x);
      else if (u(V).verifyFunction)
        L = await u(V).verifyFunction(u(je), x);
      else {
        Ft(xe.ERROR, "Parameter verifyUrl is required for code challenge verification.");
        return;
      }
      L?.payload && (G(je, L.payload, !0), Oe("server payload", u(je))), L?.verified === !0 ? (Oe("verified"), Ft(xe.VERIFIED), le("verified", { payload: u(je) }), u(Ot) === "onsubmit" && Or().then(() => {
        Us(u(Kt));
      })) : Ft(xe.ERROR, L?.reason || "Verification failed."), u(V).disableAutoFocus || Ao()?.focus();
    }
    function Cn(x) {
      Object.assign(u(Re), {
        ...Object.fromEntries(Object.entries(x).filter(([L, Y]) => Y !== void 0))
      });
    }
    function Df() {
      return { ...u(V) };
    }
    function Uf() {
      return u(te);
    }
    function Co() {
      G(St, !1);
    }
    function Oe(...x) {
      (u(V).debug || x.some((L) => L instanceof Error)) && console[x[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${u(V).name}]`, ...x);
    }
    function Pt(x = xe.UNVERIFIED, L = null) {
      G(Ke, !1), G(kt, L, !0), G(je, null), u(ot) && u(ot).abort(), u(ht) && (clearTimeout(u(ht)), G(ht, null)), Ft(x);
    }
    function Ft(x, L = null) {
      G(te, x, !0), G(kt, L, !0), le("statechange", { payload: u(je), state: u(te) });
    }
    function Ro() {
      G(St, !0), Or().then(() => {
        hi();
      });
    }
    function hi() {
      if (u(V).display === "floating")
        return Lf();
      G(ee, u(ee) + 1);
    }
    async function Gr(x = {}) {
      const {
        concurrency: L = Math.max(1, u(V).workers),
        controller: Y = new AbortController(),
        minDuration: J = u(V).minDuration
      } = x, ae = performance.now();
      let ne = null, ke = null, At = !1;
      const Ie = await An("onVerify", x);
      if (Ie !== void 0)
        return Ie;
      Pt(xe.VERIFYING), G(ot, Y, !0);
      try {
        if (!y)
          throw new Error("Secure context (HTTPS) required.");
        if (u(V).mockError)
          throw new Error("Mock error.");
        if (u(V).test)
          return Oe("running test mode with null challenge"), await Gt(Math.max(0, J - (performance.now() - ae))), u(ot)?.signal.aborted ? (Pt(), null) : (G(je, btoa(JSON.stringify({ challenge: null, solution: null, test: !0 })), !0), Oe("verified"), Ft(xe.VERIFIED), le("verified", { payload: u(je) }), { payload: u(je) });
        if (ne = await Ms(), !ne)
          throw new Error("Failed to fetch challenge.");
        Oe("challenge", ne), "configuration" in ne && (Oe("re-configuring from challenge", ne.configuration), Cn(ne.configuration)), ne.parameters.expiresAt && Nf(ne.parameters.expiresAt), At = "_version" in ne && ne._version === 1;
        const Ge = globalThis.$altcha.algorithms.get(ne.parameters.algorithm);
        if (!Ge)
          throw new Error(`Unsupported algorithm ${ne.parameters.algorithm}.`);
        if (ke = await Os({
          challenge: ne,
          concurrency: L,
          controller: Y,
          createWorker: Ge,
          counterMode: At ? "string" : "uint32",
          onOutOfMemory: (vr) => {
            if (Oe("out of memory error received"), le("outofmemory"), u(V).retryOnOutOfMemoryError && vr > 1) {
              const gr = Math.floor(vr / 2);
              return Oe(`retrying with ${gr} workers...`), gr;
            }
          },
          timeout: u(V).timeout
        }), u(ot)?.signal.aborted)
          return Pt(), null;
        if (!ke)
          throw new Error("Failed to find solution.");
        Oe("solution", ke), await Gt(Math.max(0, J - (performance.now() - ae))), G(ye, ne.codeChallenge || u(V).codeChallenge || null, !0), At ? G(je, btoa(JSON.stringify(pt(ne, ke))), !0) : G(
          je,
          btoa(JSON.stringify({
            challenge: {
              parameters: ne.parameters,
              signature: ne.signature
            },
            solution: ke
          })),
          !0
        ), u(ye) ? (Oe("requesting code verification"), Ft(xe.CODE), le("codechallenge", { codeChallenge: u(ye) })) : u(V).verifyUrl ? await js() : (Oe("verified"), Ft(xe.VERIFIED), le("verified", { payload: u(je) }));
      } catch (Ge) {
        return Oe("verification failed", Ge), Ft(xe.ERROR, String(Ge)), null;
      } finally {
        G(ot, null);
      }
      return { challenge: ne, payload: u(je), solution: ke };
    }
    var Bf = {
      configure: Cn,
      getConfiguration: Df,
      getState: Uf,
      hide: Co,
      log: Oe,
      reset: Pt,
      setState: Ft,
      show: Ro,
      updateUI: hi,
      verify: Gr
    }, Hs = bf();
    Xe("scroll", ji, Tf), Xe("click", ji, Of), Xe("pageshow", Ar, Pf), Xe("resize", Ar, Ff);
    var zs = zr(Hs);
    {
      var jf = (x) => {
        var L = lf();
        me(x, L);
      };
      Ze(zs, (x) => {
        u(V).display === "overlay" && u(St) && x(jf);
      });
    }
    var Yt = Me(zs, 2), Vs = Be(Yt);
    {
      var Hf = (x) => {
        var L = uf(), Y = zr(L), J = Me(Y, 2);
        {
          var ae = (ne) => {
            var ke = cf();
            gs(ke, () => document.querySelector(u(V).overlayContent)?.innerHTML, !0), Pe(ke), me(ne, ke);
          };
          Ze(J, (ne) => {
            u(V).overlayContent && ne(ae);
          });
        }
        Xe("click", Y, Rf, !0), me(x, L);
      };
      Ze(Vs, (x) => {
        u(V).display === "overlay" && u(St) && x(Hf);
      });
    }
    var To = Me(Vs, 2), Oo = Be(To), Po = Be(Oo), qs = Be(Po);
    {
      let x = /* @__PURE__ */ lt(() => u(V).display === "standard" && u(Ot) !== "onsubmit" || u(te) === xe.VERIFYING);
      wu(qs, () => u(ui), (L, Y) => {
        Y(L, {
          get id() {
            return u(Pr);
          },
          name: "",
          get required() {
            return u(x);
          },
          get loading() {
            return u(xo);
          },
          get checked() {
            return u(Ke);
          },
          onchange: Af,
          oninvalid: Cf
        });
      });
    }
    var Fo = Me(qs, 2), zf = Be(Fo);
    {
      var Vf = (x) => {
        var L = ii();
        it(() => qt(L, u(W).verificationRequired)), me(x, L);
      }, qf = (x) => {
        var L = ii();
        it(() => qt(L, u(W).verifying)), me(x, L);
      }, Kf = (x) => {
        var L = ii();
        it(() => qt(L, u(W).verified)), me(x, L);
      }, Wf = (x) => {
        var L = ii();
        it(() => qt(L, u(W).label)), me(x, L);
      };
      Ze(zf, (x) => {
        u(te) === xe.CODE && u(ye) ? x(Vf) : u(te) === xe.VERIFYING ? x(qf, 1) : u(te) === xe.VERIFIED ? x(Kf, 2) : x(Wf, -1);
      });
    }
    Pe(Fo), Pe(Po);
    var Gf = Me(Po, 2);
    {
      var Yf = (x) => {
        bo(x, {
          get strings() {
            return u(W);
          }
        });
      };
      Ze(Gf, (x) => {
        u(En) && x(Yf);
      });
    }
    Pe(Oo);
    var Ks = Me(Oo, 2);
    {
      var Jf = (x) => {
        {
          let L = /* @__PURE__ */ lt(() => u(V).display === "bar" && u(En));
          mo(x, {
            get logo() {
              return u(L);
            },
            get strings() {
              return u(W);
            }
          });
        }
      };
      Ze(Ks, (x) => {
        u(Fr) && x(Jf);
      });
    }
    var Ws = Me(Ks, 2);
    {
      var Xf = (x) => {
        var L = ff();
        hr(L, (Y) => G(Fe, Y), () => u(Fe)), me(x, L);
      };
      Ze(Ws, (x) => {
        u(V).display === "floating" && x(Xf);
      });
    }
    var Zf = Me(Ws, 2);
    {
      var Qf = (x) => {
        var L = df();
        fo(L), it(() => {
          Ee(L, "name", u(V).name), Iu(L, u(je));
        }), me(x, L);
      };
      Ze(Zf, (x) => {
        u(V).setCookie || x(Qf);
      });
    }
    Pe(To);
    var ed = Me(To, 2);
    {
      var td = (x) => {
        wo(x, {
          get anchor() {
            return u(We);
          },
          onClickOutside: () => {
            y && Pt();
          },
          get placement() {
            return u(V).popoverPlacement;
          },
          role: "alert",
          variant: "error",
          get dir() {
            return u(Sn);
          },
          get updateUISignal() {
            return u(ee);
          },
          children: (L, Y) => {
            var J = hs(), ae = zr(J);
            {
              var ne = (Ie) => {
                var Ge = hf();
                me(Ie, Ge);
              }, ke = (Ie) => {
                var Ge = pf(), vr = Be(Ge, !0);
                Pe(Ge), it(() => qt(vr, u(W).expired)), me(Ie, Ge);
              }, At = (Ie) => {
                var Ge = vf(), vr = Be(Ge, !0);
                Pe(Ge), it(() => {
                  Ee(Ge, "title", u(kt)), qt(vr, u(W).error);
                }), me(Ie, Ge);
              };
              Ze(ae, (Ie) => {
                !u(kt) && !y ? Ie(ne) : !u(kt) && u(te) === xe.EXPIRED ? Ie(ke, 1) : Ie(At, -1);
              });
            }
            me(L, J);
          },
          $$slots: { default: !0 }
        });
      }, rd = (x) => {
        var L = hs(), Y = zr(L);
        mu(Y, () => u(ye), (J) => {
          {
            let ae = /* @__PURE__ */ lt(() => u(V).codeChallengeDisplay !== "standard");
            wo(J, {
              get anchor() {
                return u(We);
              },
              get backdrop() {
                return u(ae);
              },
              get display() {
                return u(V).codeChallengeDisplay;
              },
              onClose: () => {
                Pt();
              },
              get placement() {
                return u(V).popoverPlacement;
              },
              role: "dialog",
              get "aria-label"() {
                return u(W).verificationRequired;
              },
              get dir() {
                return u(Sn);
              },
              get updateUISignal() {
                return u(ee);
              },
              children: (ne, ke) => {
                var At = gf(), Ie = zr(At);
                Ts(Ie, {
                  get audioUrl() {
                    return u(ze);
                  },
                  get imageUrl() {
                    return u(Ir);
                  },
                  onCancel: () => Pt(),
                  onReload: () => Gr(),
                  onSubmit: (gr) => js(gr),
                  get codeChallenge() {
                    return u(ye);
                  },
                  get config() {
                    return u(V);
                  },
                  get strings() {
                    return u(W);
                  }
                });
                var Ge = Me(Ie, 2);
                {
                  var vr = (gr) => {
                    mo(gr, {
                      get logo() {
                        return u(En);
                      },
                      get strings() {
                        return u(W);
                      }
                    });
                  };
                  Ze(Ge, (gr) => {
                    u(Fr) && u(V).codeChallengeDisplay !== "standard" && gr(vr);
                  });
                }
                me(ne, At);
              },
              $$slots: { default: !0 }
            });
          }
        }), me(x, L);
      };
      Ze(ed, (x) => {
        u(kt) || u(te) === xe.EXPIRED || !y ? x(td) : u(ye) && u(te) === xe.CODE && x(rd, 1);
      });
    }
    Pe(Yt), hr(Yt, (x) => G(We, x), () => u(We)), it(
      (x) => {
        Ee(Yt, "data-state", u(te)), Ee(Yt, "data-display", u(V).display || void 0), Ee(Yt, "data-placement", x), Ee(Yt, "data-visible", u(St) || void 0), Ee(Yt, "dir", u(Sn)), Ee(Fo, "for", u(Pr)), Yt.dir = Yt.dir;
      },
      [() => Ef(u(V).display)]
    ), me(e, Hs);
    var nd = tr(Bf);
    return f(), nd;
  }
  typeof window < "u" && window.customElements && !customElements.get("altcha-widget") && customElements.define("altcha-widget", pr(
    mf,
    {
      auto: { type: "String" },
      challenge: { type: "String" },
      configuration: { type: "String" },
      display: { type: "String" },
      language: { type: "String" },
      name: { type: "String" },
      theme: { type: "String" },
      type: { type: "String" },
      workers: { type: "Number" }
    },
    [],
    [
      "configure",
      "getConfiguration",
      "getState",
      "hide",
      "log",
      "reset",
      "setState",
      "show",
      "updateUI",
      "verify"
    ]
  ));
  const Ps = `(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  function getDigest(algorithm) {
    switch (algorithm) {
      case "PBKDF2/SHA-512":
        return "SHA-512";
      case "PBKDF2/SHA-384":
        return "SHA-384";
      case "PBKDF2/SHA-256":
      default:
        return "SHA-256";
    }
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: getDigest(algorithm)
      },
      passwordKey,
      { name: "AES-GCM", length: keyLength * 8 },
      true,
      ["encrypt"]
    );
    return {
      derivedKey: new Uint8Array(await crypto.subtle.exportKey("raw", derivedKey))
    };
  }
  handler({
    deriveKey
  });
})();
`, Fs = typeof self < "u" && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", Ps], { type: "text/javascript;charset=utf-8" });
  function yo(e) {
    let t;
    try {
      if (t = Fs && (self.URL || self.webkitURL).createObjectURL(Fs), !t) throw "";
      const i = new Worker(t, {
        name: e?.name
      });
      return i.addEventListener("error", () => {
        (self.URL || self.webkitURL).revokeObjectURL(t);
      }), i;
    } catch {
      return new Worker(
        "data:text/javascript;charset=utf-8," + encodeURIComponent(Ps),
        {
          name: e?.name
        }
      );
    }
  }
  const Is = `(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    const iterations = Math.max(1, parameters.cost);
    let data = void 0;
    let derivedKey = void 0;
    for (let i = 0; i < iterations; i++) {
      if (i === 0) {
        data = concatBuffers(salt, password);
      } else {
        data = derivedKey;
      }
      derivedKey = new Uint8Array(
        (await crypto.subtle.digest(algorithm, data)).slice(0, keyLength)
      );
    }
    return {
      parameters: {},
      derivedKey
    };
  }
  handler({
    deriveKey
  });
})();
`, Ls = typeof self < "u" && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", Is], { type: "text/javascript;charset=utf-8" });
  function _o(e) {
    let t;
    try {
      if (t = Ls && (self.URL || self.webkitURL).createObjectURL(Ls), !t) throw "";
      const i = new Worker(t, {
        name: e?.name
      });
      return i.addEventListener("error", () => {
        (self.URL || self.webkitURL).revokeObjectURL(t);
      }), i;
    } catch {
      return new Worker(
        "data:text/javascript;charset=utf-8," + encodeURIComponent(Is),
        {
          name: e?.name
        }
      );
    }
  }
  return af(`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`), $altcha.algorithms.set("SHA-256", () => new _o()), $altcha.algorithms.set("SHA-384", () => new _o()), $altcha.algorithms.set("SHA-512", () => new _o()), $altcha.algorithms.set("PBKDF2/SHA-256", () => new yo()), $altcha.algorithms.set("PBKDF2/SHA-384", () => new yo()), $altcha.algorithms.set("PBKDF2/SHA-512", () => new yo()), Al;
}
Cp();
const Rp = "https://api.blockbots.org";
function Tp(r, n) {
  return new Promise((a, s) => {
    const c = document.querySelector(".main-content");
    if (!c) return a();
    const p = document.createElement("altcha-widget");
    p.id = "bb-altcha", p.setAttribute("challengejson", JSON.stringify(n)), p.setAttribute("style", "margin: 2rem 0; display: block;"), c.appendChild(p), p.addEventListener("statechange", async (h) => {
      if (h.detail?.state === "verified")
        try {
          const A = (await De.post(
            `${Rp}/v1/captcha/verify`,
            { altcha: h.detail.payload },
            { headers: { "X-API-Key": r } }
          )).data;
          A.__bbst && A.__bbts && (Nr("__bbst", A.__bbst, { "Max-Age": 240, Secure: !0 }), Nr("__bbts", A.__bbts, { "Max-Age": 240, Secure: !0 }), Nr("__bbjwt", A.__bbjwt, { "Max-Age": 240, Secure: !0 })), p.remove(), a();
        } catch {
          p.remove(), s(new Error("Captcha verification failed"));
        }
    });
  });
}
async function Op({ apiKey: r, retries: n, delay: a, ui: s }) {
  s && nc();
  for (let c = 0; c < n && !Bn("__bb_decision"); c++) {
    if (!ia()) {
      const p = await Sl(r);
      if (console.log("[blockbots] sendFingerprints result:", p), p && p.status === "challenge" && await Tp(r, p.challenge), !await mp()) continue;
    }
    if (await kp())
      return s && Ap(), !0;
    await Sl(r), await xp(a);
  }
  return s && ic(), !1;
}
class Xp {
  constructor({
    apiKey: n,
    retries: a = 3,
    delay: s = 1e3,
    extraToken: c = !1,
    ui: p = !0
  }) {
    if (!n)
      throw new Error("BlockBots: apiKey is required");
    this.apiKey = n, this.retries = a, this.delay = s, this.extraToken = c, this.ui = p, this.hooks = id();
  }
  /*static showLoader() {
      showLoader();
  }*/
  static setLoaderBlocked() {
    nc(), ic();
  }
  /*static hideLoader() {
      hideLoader();
  }*/
  onVerified(n) {
    return this.hooks.on("verified", n), this;
  }
  onBlocked(n) {
    return this.hooks.on("blocked", n), this;
  }
  onError(n) {
    return this.hooks.on("error", n), this;
  }
  async verify() {
    try {
      return await Op({
        apiKey: this.apiKey,
        retries: this.retries,
        delay: this.delay,
        extraToken: this.extraToken,
        ui: this.ui
      }) ? (this.hooks.emit("verified"), !0) : (this.hooks.emit("blocked", "validation_failed"), !1);
    } catch (n) {
      return this.hooks.emit("error", n), !1;
    }
  }
}
export {
  Xp as BlockBots
};
