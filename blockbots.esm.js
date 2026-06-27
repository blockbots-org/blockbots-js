(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('button{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body.theme-dark{background-color:#222;color:#d9d9d9}body.theme-dark a{color:#fff}body.theme-dark a:hover{text-decoration:underline;color:#ee730a}body.theme-dark .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-dark .font-red{color:#b20f03}body.theme-dark .ctp-button{background-color:#4693ff;color:#1d1d1d}body.theme-dark #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body.theme-dark #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}body.theme-light{background-color:#fff;color:#313131}body.theme-light a{color:#0051c3}body.theme-light a:hover{text-decoration:underline;color:#ee730a}body.theme-light .lds-ring div{border-color:#595959 rgba(0,0,0,0) rgba(0,0,0,0)}body.theme-light .font-red{color:#fc574a}body.theme-light .ctp-button{border-color:#003681;background-color:#003681;color:#fff}body.theme-light #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=)}body.theme-light #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}a{transition:color .15s ease;background-color:#0000;text-decoration:none;color:#0051c3}a:hover{text-decoration:underline;color:#ee730a}.main-content{margin:8rem auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem}.main-content .loading-verifying{height:76.391px}.spacer{margin:2rem 0}.spacer-top{margin-top:4rem}.spacer-bottom{margin-bottom:2rem}.heading-favicon{margin-right:.5rem;width:2rem;height:2rem}@media (width <= 720px){.main-content{margin-top:4rem}.heading-favicon{width:1.5rem;height:1.5rem}}.main-wrapper{display:flex;flex:1;flex-direction:column;align-items:center}.font-red{color:#b20f03}.h1{line-height:3.75rem;font-size:2.5rem;font-weight:500}.core-msg{line-height:2.25rem;font-size:1.5rem;font-weight:400}.body-text{line-height:1.25rem;font-size:1rem;font-weight:400}@media (width <= 720px){.h1{line-height:1.75rem;font-size:1.5rem}.h2{line-height:1.5rem;font-size:1.25rem}.core-msg{line-height:1.5rem;font-size:1rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjNTc0YSIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjZmM1NzRhIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}#challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=);background-repeat:no-repeat;background-size:contain;padding-left:42px}.text-center{text-align:center}.ctp-button{transition-duration:.2s;transition-property:background-color,border-color,color;transition-timing-function:ease;margin:2rem 0;border:.063rem solid #0051c3;border-radius:.313rem;background-color:#0051c3;cursor:pointer;padding:.375rem 1rem;line-height:1.313rem;color:#fff;font-size:.875rem}.ctp-button:hover{border-color:#003681;background-color:#003681;cursor:pointer;color:#fff}.footer{margin:0 auto;padding-right:1.5rem;padding-left:1.5rem;width:100%;max-width:60rem;line-height:1.125rem;font-size:.75rem}.footer-inner{border-top:1px solid #d9d9d9;padding-top:1rem;padding-bottom:1rem}.clearfix:after{display:table;clear:both;content:""}.clearfix .column{float:left;padding-right:1.5rem;width:50%}.diagnostic-wrapper{margin-bottom:.5rem}.footer .ray-id{text-align:center}.footer .ray-id code{font-family:monaco,courier,monospace}.core-msg,.zone-name-title{overflow-wrap:break-word}@media (width <= 720px){.diagnostic-wrapper{display:flex;flex-wrap:wrap;justify-content:center}.clearfix:after{display:initial;clear:none;text-align:center;content:none}.column{padding-bottom:2rem}.clearfix .column{float:none;padding:0;width:auto;word-break:keep-all}.zone-name-title{margin-bottom:1rem}}.loading-verifying{height:76.391px}.lds-ring{display:inline-block;position:relative;width:1.875rem;height:1.875rem}.lds-ring div{box-sizing:border-box;display:block;position:absolute;border:.3rem solid #595959;border-radius:50%;border-color:#313131 rgba(0,0,0,0) rgba(0,0,0,0);width:1.875rem;height:1.875rem;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.rtl .heading-favicon{margin-right:0;margin-left:.5rem}.rtl #challenge-success-text{background-position:right;padding-right:42px;padding-left:0}.rtl #challenge-error-text{background-position:right;padding-right:34px;padding-left:0}.challenge-content .loading-verifying{height:76.391px}@media (prefers-color-scheme: dark){body{background-color:#222;color:#d9d9d9}body a{color:#fff}body a:hover{text-decoration:underline;color:#ee730a}body .lds-ring div{border-color:#999 rgba(0,0,0,0) rgba(0,0,0,0)}body .font-red{color:#b20f03}body .ctp-button{background-color:#4693ff;color:#1d1d1d}body #challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)}body #challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+)}}*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{display:flex;flex-direction:column;height:100vh;min-height:100vh}.main-content{margin:8rem auto;padding-left:1.5rem;max-width:60rem}@media (width <= 720px){.main-content{margin-top:4rem}}.h2{line-height:2.25rem;font-size:1.5rem;font-weight:500}@media (width <= 720px){.h2{line-height:1.5rem;font-size:1.25rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}@media (prefers-color-scheme: dark){body{background-color:#222;color:#d9d9d9}}.slider-captcha-stage{position:relative;border:1px solid #ccc;border-radius:8px;overflow:hidden}.slider-captcha-stage canvas{position:absolute;top:0;left:0}.slider-captcha-light .slider-captcha-bar{background:#f0f0f0;border:1px solid #ccc;color:#333}.slider-captcha-light .slider-captcha-thumb{background:#fff;border:1px solid #ccc;box-shadow:0 2px 6px #0003}.slider-captcha-light .slider-captcha-status{background:#fafafa;border:1px solid #ddd;color:#333}.slider-captcha-light .slider-captcha-status.ok{color:#16a34a}.slider-captcha-light .slider-captcha-status.err{color:#dc2626}.slider-captcha-dark .slider-captcha-bar{background:#0b1220;border:1px solid rgba(255,255,255,.08);color:#e5e7eb}.slider-captcha-dark .slider-captcha-thumb{background:#0f172a;border:1px solid rgba(255,255,255,.15);box-shadow:0 4px 16px #0006}.slider-captcha-dark .slider-captcha-status{background:#ffffff08;border:1px solid rgba(255,255,255,.1);color:#e5e7eb}.slider-captcha-dark .slider-captcha-status.ok{color:#16a34a}.slider-captcha-dark .slider-captcha-status.err{color:#dc2626}.slider-captcha-bar{position:relative;display:flex;align-items:center;gap:10px;width:var(--w, 320px);height:44px;background:#0b1220;border-radius:999px;margin-top:12px;border:1px solid rgba(255,255,255,.08);font-size:14px;color:#e5e7eb}.slider-captcha-track{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:999px;overflow:hidden}.slider-captcha-fill{position:absolute;left:0;top:0;bottom:0;width:0;background:linear-gradient(90deg,#2563eb40,#2563eb59)}.slider-captcha-thumb{position:relative;z-index:2;margin-left:6px;width:36px;height:36px;border-radius:999px;background:#0f172a;border:1px solid rgba(255,255,255,.15);display:grid;place-items:center;cursor:grab;-webkit-user-select:none;user-select:none;box-shadow:0 4px 16px #0006}.slider-captcha-thumb:active{cursor:grabbing}.slider-captcha-thumb svg{width:18px;height:18px;opacity:.9}.slider-captcha-status{flex-shrink:0;margin-left:auto;margin-right:8px;padding:4px 12px;border-radius:999px;font-size:13px;line-height:1.4;white-space:nowrap;border:1px solid rgba(255,255,255,.1);background:#ffffff08}.slider-captcha-status.ok{color:#16a34a;border-color:#16a34a66}.slider-captcha-status.err{color:#dc2626;border-color:#dc262666}.slider-captcha-status.shake{animation:shake .35s linear}@keyframes shake{0%{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-4px)}to{transform:translate(0)}}.slider-captcha-refresh{cursor:pointer;margin-left:auto}.slider-captcha-loading{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:#fff9;z-index:15}.slider-captcha-loading .spinner{width:28px;height:28px;border:3px solid #999;border-top-color:transparent;border-radius:50%;animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function lr() {
  const e = {
    verified: [],
    blocked: [],
    error: []
  };
  return {
    on(t, i) {
      var r;
      (r = e[t]) == null || r.push(i);
    },
    emit(t, i) {
      for (const r of e[t] || [])
        try {
          r(i);
        } catch (n) {
          console.error("BlockBots hook error:", n);
        }
    }
  };
}
function ur(e, t = 0) {
  t = t || 0;
  let i = 3735928559 ^ t, r = 1103547991 ^ t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    i = Math.imul(i ^ o, 2654435761), r = Math.imul(r ^ o, 1597334677);
  }
  return i = Math.imul(i ^ i >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(i ^ i >>> 13, 3266489909), 4294967296 * (2097151 & r) + (i >>> 0);
}
var hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fr(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var i = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    i.prototype = t.prototype;
  } else
    i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(i, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), i;
}
var Pi = { exports: {} };
const dr = {}, pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" })), ii = /* @__PURE__ */ fr(pr);
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
    var t = "input is invalid type", i = "finalize already called", r = typeof window == "object", n = r ? window : {};
    n.JS_MD5_NO_WINDOW && (r = !1);
    var o = !r && typeof self == "object", s = !n.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    s ? n = hr : o && (n = self);
    var h = !n.JS_MD5_NO_COMMON_JS && !0 && e.exports, d = !n.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", f = "0123456789abcdef".split(""), b = [128, 32768, 8388608, -2147483648], _ = [0, 8, 16, 24], R = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), S = [], k;
    if (d) {
      var A = new ArrayBuffer(68);
      k = new Uint8Array(A), S = new Uint32Array(A);
    }
    var I = Array.isArray;
    (n.JS_MD5_NO_NODE_JS || !I) && (I = function(a) {
      return Object.prototype.toString.call(a) === "[object Array]";
    });
    var B = ArrayBuffer.isView;
    d && (n.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !B) && (B = function(a) {
      return typeof a == "object" && a.buffer && a.buffer.constructor === ArrayBuffer;
    });
    var N = function(a) {
      var l = typeof a;
      if (l === "string")
        return [a, !0];
      if (l !== "object" || a === null)
        throw new Error(t);
      if (d && a.constructor === ArrayBuffer)
        return [new Uint8Array(a), !1];
      if (!I(a) && !B(a))
        throw new Error(t);
      return [a, !1];
    }, J = function(a) {
      return function(l) {
        return new M(!0).update(l)[a]();
      };
    }, H = function() {
      var a = J("hex");
      s && (a = Z(a)), a.create = function() {
        return new M();
      }, a.update = function(c) {
        return a.create().update(c);
      };
      for (var l = 0; l < R.length; ++l) {
        var u = R[l];
        a[u] = J(u);
      }
      return a;
    }, Z = function(a) {
      var l = ii, u = ii.Buffer, c;
      u.from && !n.JS_MD5_NO_BUFFER_FROM ? c = u.from : c = function(E) {
        return new u(E);
      };
      var C = function(E) {
        if (typeof E == "string")
          return l.createHash("md5").update(E, "utf8").digest("hex");
        if (E == null)
          throw new Error(t);
        return E.constructor === ArrayBuffer && (E = new Uint8Array(E)), I(E) || B(E) || E.constructor === u ? l.createHash("md5").update(c(E)).digest("hex") : a(E);
      };
      return C;
    }, Q = function(a) {
      return function(l, u) {
        return new $e(l, !0).update(u)[a]();
      };
    }, be = function() {
      var a = Q("hex");
      a.create = function(c) {
        return new $e(c);
      }, a.update = function(c, C) {
        return a.create(c).update(C);
      };
      for (var l = 0; l < R.length; ++l) {
        var u = R[l];
        a[u] = Q(u);
      }
      return a;
    };
    function M(a) {
      if (a)
        S[0] = S[16] = S[1] = S[2] = S[3] = S[4] = S[5] = S[6] = S[7] = S[8] = S[9] = S[10] = S[11] = S[12] = S[13] = S[14] = S[15] = 0, this.blocks = S, this.buffer8 = k;
      else if (d) {
        var l = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(l), this.blocks = new Uint32Array(l);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    M.prototype.update = function(a) {
      if (this.finalized)
        throw new Error(i);
      var l = N(a);
      a = l[0];
      for (var u = l[1], c, C = 0, E, x = a.length, O = this.blocks, z = this.buffer8; C < x; ) {
        if (this.hashed && (this.hashed = !1, O[0] = O[16], O[16] = O[1] = O[2] = O[3] = O[4] = O[5] = O[6] = O[7] = O[8] = O[9] = O[10] = O[11] = O[12] = O[13] = O[14] = O[15] = 0), u)
          if (d)
            for (E = this.start; C < x && E < 64; ++C)
              c = a.charCodeAt(C), c < 128 ? z[E++] = c : c < 2048 ? (z[E++] = 192 | c >>> 6, z[E++] = 128 | c & 63) : c < 55296 || c >= 57344 ? (z[E++] = 224 | c >>> 12, z[E++] = 128 | c >>> 6 & 63, z[E++] = 128 | c & 63) : (c = 65536 + ((c & 1023) << 10 | a.charCodeAt(++C) & 1023), z[E++] = 240 | c >>> 18, z[E++] = 128 | c >>> 12 & 63, z[E++] = 128 | c >>> 6 & 63, z[E++] = 128 | c & 63);
          else
            for (E = this.start; C < x && E < 64; ++C)
              c = a.charCodeAt(C), c < 128 ? O[E >>> 2] |= c << _[E++ & 3] : c < 2048 ? (O[E >>> 2] |= (192 | c >>> 6) << _[E++ & 3], O[E >>> 2] |= (128 | c & 63) << _[E++ & 3]) : c < 55296 || c >= 57344 ? (O[E >>> 2] |= (224 | c >>> 12) << _[E++ & 3], O[E >>> 2] |= (128 | c >>> 6 & 63) << _[E++ & 3], O[E >>> 2] |= (128 | c & 63) << _[E++ & 3]) : (c = 65536 + ((c & 1023) << 10 | a.charCodeAt(++C) & 1023), O[E >>> 2] |= (240 | c >>> 18) << _[E++ & 3], O[E >>> 2] |= (128 | c >>> 12 & 63) << _[E++ & 3], O[E >>> 2] |= (128 | c >>> 6 & 63) << _[E++ & 3], O[E >>> 2] |= (128 | c & 63) << _[E++ & 3]);
        else if (d)
          for (E = this.start; C < x && E < 64; ++C)
            z[E++] = a[C];
        else
          for (E = this.start; C < x && E < 64; ++C)
            O[E >>> 2] |= a[C] << _[E++ & 3];
        this.lastByteIndex = E, this.bytes += E - this.start, E >= 64 ? (this.start = E - 64, this.hash(), this.hashed = !0) : this.start = E;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, M.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var a = this.blocks, l = this.lastByteIndex;
        a[l >>> 2] |= b[l & 3], l >= 56 && (this.hashed || this.hash(), a[0] = a[16], a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), a[14] = this.bytes << 3, a[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, M.prototype.hash = function() {
      var a, l, u, c, C, E, x = this.blocks;
      this.first ? (a = x[0] - 680876937, a = (a << 7 | a >>> 25) - 271733879 << 0, c = (-1732584194 ^ a & 2004318071) + x[1] - 117830708, c = (c << 12 | c >>> 20) + a << 0, u = (-271733879 ^ c & (a ^ -271733879)) + x[2] - 1126478375, u = (u << 17 | u >>> 15) + c << 0, l = (a ^ u & (c ^ a)) + x[3] - 1316259209, l = (l << 22 | l >>> 10) + u << 0) : (a = this.h0, l = this.h1, u = this.h2, c = this.h3, a += (c ^ l & (u ^ c)) + x[0] - 680876936, a = (a << 7 | a >>> 25) + l << 0, c += (u ^ a & (l ^ u)) + x[1] - 389564586, c = (c << 12 | c >>> 20) + a << 0, u += (l ^ c & (a ^ l)) + x[2] + 606105819, u = (u << 17 | u >>> 15) + c << 0, l += (a ^ u & (c ^ a)) + x[3] - 1044525330, l = (l << 22 | l >>> 10) + u << 0), a += (c ^ l & (u ^ c)) + x[4] - 176418897, a = (a << 7 | a >>> 25) + l << 0, c += (u ^ a & (l ^ u)) + x[5] + 1200080426, c = (c << 12 | c >>> 20) + a << 0, u += (l ^ c & (a ^ l)) + x[6] - 1473231341, u = (u << 17 | u >>> 15) + c << 0, l += (a ^ u & (c ^ a)) + x[7] - 45705983, l = (l << 22 | l >>> 10) + u << 0, a += (c ^ l & (u ^ c)) + x[8] + 1770035416, a = (a << 7 | a >>> 25) + l << 0, c += (u ^ a & (l ^ u)) + x[9] - 1958414417, c = (c << 12 | c >>> 20) + a << 0, u += (l ^ c & (a ^ l)) + x[10] - 42063, u = (u << 17 | u >>> 15) + c << 0, l += (a ^ u & (c ^ a)) + x[11] - 1990404162, l = (l << 22 | l >>> 10) + u << 0, a += (c ^ l & (u ^ c)) + x[12] + 1804603682, a = (a << 7 | a >>> 25) + l << 0, c += (u ^ a & (l ^ u)) + x[13] - 40341101, c = (c << 12 | c >>> 20) + a << 0, u += (l ^ c & (a ^ l)) + x[14] - 1502002290, u = (u << 17 | u >>> 15) + c << 0, l += (a ^ u & (c ^ a)) + x[15] + 1236535329, l = (l << 22 | l >>> 10) + u << 0, a += (u ^ c & (l ^ u)) + x[1] - 165796510, a = (a << 5 | a >>> 27) + l << 0, c += (l ^ u & (a ^ l)) + x[6] - 1069501632, c = (c << 9 | c >>> 23) + a << 0, u += (a ^ l & (c ^ a)) + x[11] + 643717713, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ a & (u ^ c)) + x[0] - 373897302, l = (l << 20 | l >>> 12) + u << 0, a += (u ^ c & (l ^ u)) + x[5] - 701558691, a = (a << 5 | a >>> 27) + l << 0, c += (l ^ u & (a ^ l)) + x[10] + 38016083, c = (c << 9 | c >>> 23) + a << 0, u += (a ^ l & (c ^ a)) + x[15] - 660478335, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ a & (u ^ c)) + x[4] - 405537848, l = (l << 20 | l >>> 12) + u << 0, a += (u ^ c & (l ^ u)) + x[9] + 568446438, a = (a << 5 | a >>> 27) + l << 0, c += (l ^ u & (a ^ l)) + x[14] - 1019803690, c = (c << 9 | c >>> 23) + a << 0, u += (a ^ l & (c ^ a)) + x[3] - 187363961, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ a & (u ^ c)) + x[8] + 1163531501, l = (l << 20 | l >>> 12) + u << 0, a += (u ^ c & (l ^ u)) + x[13] - 1444681467, a = (a << 5 | a >>> 27) + l << 0, c += (l ^ u & (a ^ l)) + x[2] - 51403784, c = (c << 9 | c >>> 23) + a << 0, u += (a ^ l & (c ^ a)) + x[7] + 1735328473, u = (u << 14 | u >>> 18) + c << 0, l += (c ^ a & (u ^ c)) + x[12] - 1926607734, l = (l << 20 | l >>> 12) + u << 0, C = l ^ u, a += (C ^ c) + x[5] - 378558, a = (a << 4 | a >>> 28) + l << 0, c += (C ^ a) + x[8] - 2022574463, c = (c << 11 | c >>> 21) + a << 0, E = c ^ a, u += (E ^ l) + x[11] + 1839030562, u = (u << 16 | u >>> 16) + c << 0, l += (E ^ u) + x[14] - 35309556, l = (l << 23 | l >>> 9) + u << 0, C = l ^ u, a += (C ^ c) + x[1] - 1530992060, a = (a << 4 | a >>> 28) + l << 0, c += (C ^ a) + x[4] + 1272893353, c = (c << 11 | c >>> 21) + a << 0, E = c ^ a, u += (E ^ l) + x[7] - 155497632, u = (u << 16 | u >>> 16) + c << 0, l += (E ^ u) + x[10] - 1094730640, l = (l << 23 | l >>> 9) + u << 0, C = l ^ u, a += (C ^ c) + x[13] + 681279174, a = (a << 4 | a >>> 28) + l << 0, c += (C ^ a) + x[0] - 358537222, c = (c << 11 | c >>> 21) + a << 0, E = c ^ a, u += (E ^ l) + x[3] - 722521979, u = (u << 16 | u >>> 16) + c << 0, l += (E ^ u) + x[6] + 76029189, l = (l << 23 | l >>> 9) + u << 0, C = l ^ u, a += (C ^ c) + x[9] - 640364487, a = (a << 4 | a >>> 28) + l << 0, c += (C ^ a) + x[12] - 421815835, c = (c << 11 | c >>> 21) + a << 0, E = c ^ a, u += (E ^ l) + x[15] + 530742520, u = (u << 16 | u >>> 16) + c << 0, l += (E ^ u) + x[2] - 995338651, l = (l << 23 | l >>> 9) + u << 0, a += (u ^ (l | ~c)) + x[0] - 198630844, a = (a << 6 | a >>> 26) + l << 0, c += (l ^ (a | ~u)) + x[7] + 1126891415, c = (c << 10 | c >>> 22) + a << 0, u += (a ^ (c | ~l)) + x[14] - 1416354905, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~a)) + x[5] - 57434055, l = (l << 21 | l >>> 11) + u << 0, a += (u ^ (l | ~c)) + x[12] + 1700485571, a = (a << 6 | a >>> 26) + l << 0, c += (l ^ (a | ~u)) + x[3] - 1894986606, c = (c << 10 | c >>> 22) + a << 0, u += (a ^ (c | ~l)) + x[10] - 1051523, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~a)) + x[1] - 2054922799, l = (l << 21 | l >>> 11) + u << 0, a += (u ^ (l | ~c)) + x[8] + 1873313359, a = (a << 6 | a >>> 26) + l << 0, c += (l ^ (a | ~u)) + x[15] - 30611744, c = (c << 10 | c >>> 22) + a << 0, u += (a ^ (c | ~l)) + x[6] - 1560198380, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~a)) + x[13] + 1309151649, l = (l << 21 | l >>> 11) + u << 0, a += (u ^ (l | ~c)) + x[4] - 145523070, a = (a << 6 | a >>> 26) + l << 0, c += (l ^ (a | ~u)) + x[11] - 1120210379, c = (c << 10 | c >>> 22) + a << 0, u += (a ^ (c | ~l)) + x[2] + 718787259, u = (u << 15 | u >>> 17) + c << 0, l += (c ^ (u | ~a)) + x[9] - 343485551, l = (l << 21 | l >>> 11) + u << 0, this.first ? (this.h0 = a + 1732584193 << 0, this.h1 = l - 271733879 << 0, this.h2 = u - 1732584194 << 0, this.h3 = c + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + a << 0, this.h1 = this.h1 + l << 0, this.h2 = this.h2 + u << 0, this.h3 = this.h3 + c << 0);
    }, M.prototype.hex = function() {
      this.finalize();
      var a = this.h0, l = this.h1, u = this.h2, c = this.h3;
      return f[a >>> 4 & 15] + f[a & 15] + f[a >>> 12 & 15] + f[a >>> 8 & 15] + f[a >>> 20 & 15] + f[a >>> 16 & 15] + f[a >>> 28 & 15] + f[a >>> 24 & 15] + f[l >>> 4 & 15] + f[l & 15] + f[l >>> 12 & 15] + f[l >>> 8 & 15] + f[l >>> 20 & 15] + f[l >>> 16 & 15] + f[l >>> 28 & 15] + f[l >>> 24 & 15] + f[u >>> 4 & 15] + f[u & 15] + f[u >>> 12 & 15] + f[u >>> 8 & 15] + f[u >>> 20 & 15] + f[u >>> 16 & 15] + f[u >>> 28 & 15] + f[u >>> 24 & 15] + f[c >>> 4 & 15] + f[c & 15] + f[c >>> 12 & 15] + f[c >>> 8 & 15] + f[c >>> 20 & 15] + f[c >>> 16 & 15] + f[c >>> 28 & 15] + f[c >>> 24 & 15];
    }, M.prototype.toString = M.prototype.hex, M.prototype.digest = function() {
      this.finalize();
      var a = this.h0, l = this.h1, u = this.h2, c = this.h3;
      return [
        a & 255,
        a >>> 8 & 255,
        a >>> 16 & 255,
        a >>> 24 & 255,
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
    }, M.prototype.array = M.prototype.digest, M.prototype.arrayBuffer = function() {
      this.finalize();
      var a = new ArrayBuffer(16), l = new Uint32Array(a);
      return l[0] = this.h0, l[1] = this.h1, l[2] = this.h2, l[3] = this.h3, a;
    }, M.prototype.buffer = M.prototype.arrayBuffer, M.prototype.base64 = function() {
      for (var a, l, u, c = "", C = this.array(), E = 0; E < 15; )
        a = C[E++], l = C[E++], u = C[E++], c += P[a >>> 2] + P[(a << 4 | l >>> 4) & 63] + P[(l << 2 | u >>> 6) & 63] + P[u & 63];
      return a = C[E], c += P[a >>> 2] + P[a << 4 & 63] + "==", c;
    };
    function $e(a, l) {
      var u, c = N(a);
      if (a = c[0], c[1]) {
        var C = [], E = a.length, x = 0, O;
        for (u = 0; u < E; ++u)
          O = a.charCodeAt(u), O < 128 ? C[x++] = O : O < 2048 ? (C[x++] = 192 | O >>> 6, C[x++] = 128 | O & 63) : O < 55296 || O >= 57344 ? (C[x++] = 224 | O >>> 12, C[x++] = 128 | O >>> 6 & 63, C[x++] = 128 | O & 63) : (O = 65536 + ((O & 1023) << 10 | a.charCodeAt(++u) & 1023), C[x++] = 240 | O >>> 18, C[x++] = 128 | O >>> 12 & 63, C[x++] = 128 | O >>> 6 & 63, C[x++] = 128 | O & 63);
        a = C;
      }
      a.length > 64 && (a = new M(!0).update(a).array());
      var z = [], ei = [];
      for (u = 0; u < 64; ++u) {
        var ti = a[u] || 0;
        z[u] = 92 ^ ti, ei[u] = 54 ^ ti;
      }
      M.call(this, l), this.update(ei), this.oKeyPad = z, this.inner = !0, this.sharedMemory = l;
    }
    $e.prototype = new M(), $e.prototype.finalize = function() {
      if (M.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var a = this.array();
        M.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(a), M.prototype.finalize.call(this);
      }
    };
    var ke = H();
    ke.md5 = ke, ke.md5.hmac = be(), h ? e.exports = ke : n.md5 = ke;
  })();
})(Pi);
var mr = Pi.exports;
const Bi = () => {
  const e = document.createElement("canvas");
  return !!(e.getContext && e.getContext("2d"));
}, wr = () => {
  if (!Bi())
    return "None";
  const e = document.createElement("canvas"), t = e.getContext("2d"), i = "BlockBots,org <canvas>";
  e.setAttribute("width", 220), e.setAttribute("height", 30);
  try {
    t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(i, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(i, 4, 17);
  } catch {
    console.log("Canvas not supported");
  }
  let r = e.toDataURL().split(",")[1], n = atob(r), o = new Uint8Array(n.length);
  for (let s = 0; s < n.length; s++)
    o[s] = n.charCodeAt(s);
  return ur(o).toString();
}, br = () => {
  if (!Bi())
    return "None";
  const e = document.createElement("canvas"), t = e.getContext("2d"), i = "BrowserLeaks,com <canvas> 1.0";
  e.setAttribute("width", 220), e.setAttribute("height", 30);
  try {
    t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(i, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(i, 4, 17);
  } catch {
    console.log("Canvas not supported");
  }
  let r = e.toDataURL().split(",")[1], n = atob(r), o = new Uint8Array(n.length);
  for (let s = 0; s < n.length; s++)
    o[s] = n.charCodeAt(s);
  return mr.md5(o);
}, gr = () => new Promise((e, t) => {
  e(wr());
}), yr = () => new Promise((e, t) => {
  e(br());
});
var vr = "2.0.4", Bt = 500, ri = "user-agent", _e = "", ni = "?", rt = "function", he = "undefined", Ee = "object", It = "string", q = "browser", ne = "cpu", re = "device", G = "engine", X = "os", ve = "result", y = "name", m = "type", g = "vendor", v = "version", W = "architecture", He = "major", w = "model", Ue = "console", T = "mobile", L = "tablet", D = "smarttv", te = "wearable", Je = "xr", De = "embedded", Oe = "inapp", Vt = "brands", pe = "formFactors", $t = "fullVersionList", xe = "platform", Jt = "platformVersion", lt = "bitness", fe = "sec-ch-ua", xr = fe + "-full-version-list", _r = fe + "-arch", Er = fe + "-" + lt, Sr = fe + "-form-factors", Ar = fe + "-" + T, Rr = fe + "-" + w, Ii = fe + "-" + xe, Cr = Ii + "-version", Li = [Vt, $t, T, w, xe, Jt, W, pe, lt], Xe = "Amazon", ge = "Apple", si = "ASUS", oi = "BlackBerry", de = "Google", ai = "Huawei", gt = "Lenovo", ci = "Honor", Ge = "LG", yt = "Microsoft", vt = "Motorola", xt = "Nvidia", li = "OnePlus", _t = "OPPO", Te = "Samsung", ui = "Sharp", Fe = "Sony", Et = "Xiaomi", St = "Zebra", hi = "Chrome", fi = "Chromium", ce = "Chromecast", Ze = "Edge", Pe = "Firefox", Be = "Opera", At = "Facebook", di = "Sogou", ye = "Mobile ", Ie = " Browser", Lt = "Windows", kr = typeof window !== he, V = kr && window.navigator ? window.navigator : void 0, ue = V && V.userAgentData ? V.userAgentData : void 0, Or = function(e, t) {
  var i = {}, r = t;
  if (!nt(t)) {
    r = {};
    for (var n in t)
      for (var o in t[n])
        r[o] = t[n][o].concat(r[o] ? r[o] : []);
  }
  for (var s in e)
    i[s] = r[s] && r[s].length % 2 === 0 ? r[s].concat(e[s]) : e[s];
  return i;
}, ut = function(e) {
  for (var t = {}, i = 0; i < e.length; i++)
    t[e[i].toUpperCase()] = e[i];
  return t;
}, Mt = function(e, t) {
  if (typeof e === Ee && e.length > 0) {
    for (var i in e)
      if (se(t) == se(e[i]))
        return !0;
    return !1;
  }
  return Ae(e) ? se(t) == se(e) : !1;
}, nt = function(e, t) {
  for (var i in e)
    return /^(browser|cpu|device|engine|os)$/.test(i) || (t ? nt(e[i]) : !1);
}, Ae = function(e) {
  return typeof e === It;
}, Rt = function(e) {
  if (e) {
    for (var t = [], i = Se(/\\?\"/g, e).split(","), r = 0; r < i.length; r++)
      if (i[r].indexOf(";") > -1) {
        var n = st(i[r]).split(";v=");
        t[r] = { brand: n[0], version: n[1] };
      } else
        t[r] = st(i[r]);
    return t;
  }
}, se = function(e) {
  return Ae(e) ? e.toLowerCase() : e;
}, Ct = function(e) {
  return Ae(e) ? Se(/[^\d\.]/g, e).split(".")[0] : void 0;
}, oe = function(e) {
  for (var t in e) {
    var i = e[t];
    typeof i == Ee && i.length == 2 ? this[i[0]] = i[1] : this[i] = void 0;
  }
  return this;
}, Se = function(e, t) {
  return Ae(t) ? t.replace(e, _e) : t;
}, Le = function(e) {
  return Se(/\\?\"/g, e);
}, st = function(e, t) {
  if (Ae(e))
    return e = Se(/^\s\s*/, e), typeof t === he ? e : e.substring(0, Bt);
}, kt = function(e, t) {
  if (!(!e || !t))
    for (var i = 0, r, n, o, s, h, d; i < t.length && !h; ) {
      var f = t[i], b = t[i + 1];
      for (r = n = 0; r < f.length && !h && f[r]; )
        if (h = f[r++].exec(e), h)
          for (o = 0; o < b.length; o++)
            d = h[++n], s = b[o], typeof s === Ee && s.length > 0 ? s.length === 2 ? typeof s[1] == rt ? this[s[0]] = s[1].call(this, d) : this[s[0]] = s[1] : s.length >= 3 && (typeof s[1] === rt && !(s[1].exec && s[1].test) ? s.length > 3 ? this[s[0]] = d ? s[1].apply(this, s.slice(2)) : void 0 : this[s[0]] = d ? s[1].call(this, d, s[2]) : void 0 : s.length == 3 ? this[s[0]] = d ? d.replace(s[1], s[2]) : void 0 : s.length == 4 ? this[s[0]] = d ? s[3].call(this, d.replace(s[1], s[2])) : void 0 : s.length > 4 && (this[s[0]] = d ? s[3].apply(this, [d.replace(s[1], s[2])].concat(s.slice(4))) : void 0)) : this[s] = d || void 0;
      i += 2;
    }
}, ie = function(e, t) {
  for (var i in t)
    if (typeof t[i] === Ee && t[i].length > 0) {
      for (var r = 0; r < t[i].length; r++)
        if (Mt(t[i][r], e))
          return i === ni ? void 0 : i;
    } else if (Mt(t[i], e))
      return i === ni ? void 0 : i;
  return t.hasOwnProperty("*") ? t["*"] : e;
}, pi = {
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
}, mi = {
  embedded: "Automotive",
  mobile: "Mobile",
  tablet: ["Tablet", "EInk"],
  smarttv: "TV",
  wearable: "Watch",
  xr: ["VR", "XR"],
  "?": ["Desktop", "Unknown"],
  "*": void 0
}, Tr = {
  Chrome: "Google Chrome",
  Edge: "Microsoft Edge",
  "Edge WebView2": "Microsoft Edge WebView2",
  "Chrome WebView": "Android WebView",
  "Chrome Headless": "HeadlessChrome",
  "Huawei Browser": "HuaweiBrowser",
  "MIUI Browser": "Miui Browser",
  "Opera Mobi": "OperaMobile",
  Yandex: "YaBrowser"
}, wi = {
  browser: [
    [
      // Most common regardless engine
      /\b(?:crmo|crios)\/([\w\.]+)/i
      // Chrome for Android/iOS
    ],
    [v, [y, ye + "Chrome"]],
    [
      /webview.+edge\/([\w\.]+)/i
      // Microsoft Edge
    ],
    [v, [y, Ze + " WebView"]],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i
    ],
    [v, [y, "Edge"]],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i,
      // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
      // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      // Opera
    ],
    [y, v],
    [
      /opios[\/ ]+([\w\.]+)/i
      // Opera mini on iphone >= 8.0
    ],
    [v, [y, Be + " Mini"]],
    [
      /\bop(?:rg)?x\/([\w\.]+)/i
      // Opera GX
    ],
    [v, [y, Be + " GX"]],
    [
      /\bopr\/([\w\.]+)/i
      // Opera Webkit
    ],
    [v, [y, Be]],
    [
      // Mixed
      /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      // Baidu
    ],
    [v, [y, "Baidu"]],
    [
      /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      // Maxthon
    ],
    [v, [y, "Maxthon"]],
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
    [y, v],
    [
      /quark(?:pc)?\/([-\w\.]+)/i
      // Quark
    ],
    [v, [y, "Quark"]],
    [
      /\bddg\/([\w\.]+)/i
      // DuckDuckGo
    ],
    [v, [y, "DuckDuckGo"]],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      // UCBrowser
    ],
    [v, [y, "UCBrowser"]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i,
      // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i,
      /micromessenger\/([\w\.]+)/i
      // WeChat
    ],
    [v, [y, "WeChat"]],
    [
      /konqueror\/([\w\.]+)/i
      // Konqueror
    ],
    [v, [y, "Konqueror"]],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      // IE11
    ],
    [v, [y, "IE"]],
    [
      /ya(?:search)?browser\/([\w\.]+)/i
      // Yandex
    ],
    [v, [y, "Yandex"]],
    [
      /slbrowser\/([\w\.]+)/i
      // Smart Lenovo Browser
    ],
    [v, [y, "Smart " + gt + Ie]],
    [
      /(avast|avg)\/([\w\.]+)/i
      // Avast/AVG Secure Browser
    ],
    [[y, /(.+)/, "$1 Secure" + Ie], v],
    [
      /\bfocus\/([\w\.]+)/i
      // Firefox Focus
    ],
    [v, [y, Pe + " Focus"]],
    [
      /\bopt\/([\w\.]+)/i
      // Opera Touch
    ],
    [v, [y, Be + " Touch"]],
    [
      /coc_coc\w+\/([\w\.]+)/i
      // Coc Coc Browser
    ],
    [v, [y, "Coc Coc"]],
    [
      /dolfin\/([\w\.]+)/i
      // Dolphin
    ],
    [v, [y, "Dolphin"]],
    [
      /coast\/([\w\.]+)/i
      // Opera Coast
    ],
    [v, [y, Be + " Coast"]],
    [
      /miuibrowser\/([\w\.]+)/i
      // MIUI Browser
    ],
    [v, [y, "MIUI" + Ie]],
    [
      /fxios\/([\w\.-]+)/i
      // Firefox for iOS
    ],
    [v, [y, ye + Pe]],
    [
      /\bqihoobrowser\/?([\w\.]*)/i
      // 360
    ],
    [v, [y, "360"]],
    [
      /\b(qq)\/([\w\.]+)/i
      // QQ
    ],
    [[y, /(.+)/, "$1Browser"], v],
    [
      /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
    ],
    [[y, /(.+)/, "$1" + Ie], v],
    [
      // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
      /samsungbrowser\/([\w\.]+)/i
      // Samsung Internet
    ],
    [v, [y, Te + " Internet"]],
    [
      /metasr[\/ ]?([\d\.]+)/i
      // Sogou Explorer
    ],
    [v, [y, di + " Explorer"]],
    [
      /(sogou)mo\w+\/([\d\.]+)/i
      // Sogou Mobile
    ],
    [[y, di + " Mobile"], v],
    [
      /(electron)\/([\w\.]+) safari/i,
      // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
      // Tesla
      /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      // QQ/2345
    ],
    [y, v],
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
    [v, y],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      // Facebook App for iOS & Android
    ],
    [[y, At], v, [m, Oe]],
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
    [y, v, [m, Oe]],
    [
      /\bgsa\/([\w\.]+) .*safari\//i
      // Google Search Appliance on iOS
    ],
    [v, [y, "GSA"], [m, Oe]],
    [
      /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      // TikTok
    ],
    [v, [y, "TikTok"], [m, Oe]],
    [
      /\[(linkedin)app\]/i
      // LinkedIn App for iOS & Android
    ],
    [y, [m, Oe]],
    [
      /(chromium)[\/ ]([-\w\.]+)/i
      // Chromium
    ],
    [y, v],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i
      // Chrome Headless
    ],
    [v, [y, hi + " Headless"]],
    [
      /wv\).+chrome\/([\w\.]+).+edgw\//i
      // Edge WebView2
    ],
    [v, [y, Ze + " WebView2"]],
    [
      / wv\).+(chrome)\/([\w\.]+)/i
      // Chrome WebView
    ],
    [[y, hi + " WebView"], v],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      // Android Browser
    ],
    [v, [y, "Android" + Ie]],
    [
      /chrome\/([\w\.]+) mobile/i
      // Chrome Mobile
    ],
    [v, [y, ye + "Chrome"]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [y, v],
    [
      /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      // Safari Mobile
    ],
    [v, [y, ye + "Safari"]],
    [
      /iphone .*mobile(?:\/\w+ | ?)safari/i
    ],
    [[y, ye + "Safari"]],
    [
      /version\/([\w\.\,]+) .*(safari)/i
      // Safari
    ],
    [v, y],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      // Safari < 3.0
    ],
    [y, [v, "1"]],
    [
      /(webkit|khtml)\/([\w\.]+)/i
    ],
    [y, v],
    [
      // Gecko based
      /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      // Firefox Mobile
    ],
    [[y, ye + Pe], v],
    [
      /(navigator|netscape\d?)\/([-\w\.]+)/i
      // Netscape
    ],
    [[y, "Netscape"], v],
    [
      /(wolvic|librewolf)\/([\w\.]+)/i
      // Wolvic/LibreWolf
    ],
    [y, v],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i
      // Firefox Reality
    ],
    [v, [y, Pe + " Reality"]],
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
    [y, [v, /_/g, "."]],
    [
      /(cobalt)\/([\w\.]+)/i
      // Cobalt
    ],
    [y, [v, /[^\d\.]+./, _e]]
  ],
  cpu: [
    [
      /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      // AMD64 (x64)
    ],
    [[W, "amd64"]],
    [
      /(ia32(?=;))/i,
      // IA32 (quicktime)
      /\b((i[346]|x)86)(pc)?\b/i
      // IA32 (x86)
    ],
    [[W, "ia32"]],
    [
      /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      // ARM64
    ],
    [[W, "arm64"]],
    [
      /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      // ARMHF
    ],
    [[W, "armhf"]],
    [
      // PocketPC mistakenly identified as PowerPC
      /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
    ],
    [[W, "arm"]],
    [
      /((ppc|powerpc)(64)?)( mac|;|\))/i
      // PowerPC
    ],
    [[W, /ower/, _e, se]],
    [
      / sun4\w[;\)]/i
      // SPARC
    ],
    [[W, "sparc"]],
    [
      /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
    ],
    [[W, se]]
  ],
  device: [
    [
      //////////////////////////
      // MOBILES & TABLETS
      /////////////////////////
      // Samsung
      /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
    ],
    [w, [g, Te], [m, L]],
    [
      /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
      /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [w, [g, Te], [m, T]],
    [
      // Apple
      /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      // iPod/iPhone
    ],
    [w, [g, ge], [m, T]],
    [
      /\((ipad);[-\w\),; ]+apple/i,
      // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [w, [g, ge], [m, L]],
    [
      /(macintosh);/i
    ],
    [w, [g, ge]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [w, [g, ui], [m, T]],
    [
      // Honor
      /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
    ],
    [w, [g, ci], [m, L]],
    [
      /honor([-\w ]+)[;\)]/i
    ],
    [w, [g, ci], [m, T]],
    [
      // Huawei
      /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
    ],
    [w, [g, ai], [m, L]],
    [
      /(?:huawei)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [w, [g, ai], [m, T]],
    [
      // Xiaomi
      /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
      /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      // Mi Pad tablets
    ],
    [[w, /_/g, " "], [g, Et], [m, L]],
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
    [[w, /_/g, " "], [g, Et], [m, T]],
    [
      // OnePlus
      /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [w, [g, li], [m, T]],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [w, [g, _t], [m, T]],
    [
      /\b(opd2(\d{3}a?))(?: bui|\))/i
    ],
    [w, [g, ie, { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": _t }], [m, L]],
    [
      // BLU
      /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      // Vivo series
    ],
    [w, [g, "BLU"], [m, T]],
    [
      // Vivo
      /; vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [w, [g, "Vivo"], [m, T]],
    [
      // Realme
      /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
    ],
    [w, [g, "Realme"], [m, T]],
    [
      // Lenovo
      /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
      /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
    ],
    [w, [g, gt], [m, L]],
    [
      /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
    ],
    [w, [g, gt], [m, T]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
      /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
    ],
    [w, [g, vt], [m, T]],
    [
      /\b(mz60\d|xoom[2 ]{0,2}) build\//i
    ],
    [w, [g, vt], [m, L]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [w, [g, Ge], [m, L]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [w, [g, Ge], [m, T]],
    [
      // Nokia
      /(nokia) (t[12][01])/i
    ],
    [g, w, [m, L]],
    [
      /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
      /nokia[-_ ]?(([-\w\. ]*))/i
    ],
    [[w, /_/g, " "], [m, T], [g, "Nokia"]],
    [
      // Google
      /(pixel (c|tablet))\b/i
      // Google Pixel C/Tablet
    ],
    [w, [g, de], [m, L]],
    [
      // Google Pixel
      /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
    ],
    [w, [g, de], [m, T]],
    [
      /(google) (pixelbook( go)?)/i
    ],
    [g, w],
    [
      // Sony
      /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [w, [g, Fe], [m, T]],
    [
      /sony tablet [ps]/i,
      /\b(?:sony)?sgp\w+(?: bui|\))/i
    ],
    [[w, "Xperia Tablet"], [g, Fe], [m, L]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
      // Kindle Fire without Silk / Echo Show
      /(kf[a-z]+)( bui|\)).+silk\//i
      // Kindle Fire HD
    ],
    [w, [g, Xe], [m, L]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      // Fire Phone
    ],
    [[w, /(.+)/g, "Fire Phone $1"], [g, Xe], [m, T]],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i
      // BlackBerry PlayBook
    ],
    [w, g, [m, L]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i
      // BlackBerry 10
    ],
    [w, [g, oi], [m, T]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [w, [g, si], [m, L]],
    [
      / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
    ],
    [w, [g, si], [m, T]],
    [
      // HTC
      /(nexus 9)/i
      // HTC Nexus 9
    ],
    [w, [g, "HTC"], [m, L]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
      // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [g, [w, /_/g, " "], [m, T]],
    [
      // TCL
      /tcl (xess p17aa)/i,
      /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [w, [g, "TCL"], [m, L]],
    [
      /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [w, [g, "TCL"], [m, T]],
    [
      // itel
      /(itel) ((\w+))/i
    ],
    [[g, se], w, [m, ie, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [w, [g, "Acer"], [m, L]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [w, [g, "Meizu"], [m, T]],
    [
      // Ulefone
      /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
    ],
    [w, [g, "Ulefone"], [m, T]],
    [
      // Energizer
      /; (energy ?\w+)(?: bui|\))/i,
      /; energizer ([\w ]+)(?: bui|\))/i
    ],
    [w, [g, "Energizer"], [m, T]],
    [
      // Cat
      /; cat (b35);/i,
      /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
    ],
    [w, [g, "Cat"], [m, T]],
    [
      // Smartfren
      /((?:new )?andromax[\w- ]+)(?: bui|\))/i
    ],
    [w, [g, "Smartfren"], [m, T]],
    [
      // Nothing
      /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
    ],
    [w, [g, "Nothing"], [m, T]],
    [
      // Archos
      /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
      /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
    ],
    [w, [g, "Archos"], [m, L]],
    [
      /archos ([\w ]+)( b|\))/i,
      /; (ac[3-6]\d\w{2,8})( b|\))/i
    ],
    [w, [g, "Archos"], [m, T]],
    [
      // HMD
      /; (n159v)/i
    ],
    [w, [g, "HMD"], [m, T]],
    [
      // MIXED
      /(imo) (tab \w+)/i,
      // IMO
      /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      // Infinix XPad / Tecno
    ],
    [g, w, [m, L]],
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
    [g, w, [m, T]],
    [
      /(kobo)\s(ereader|touch)/i,
      // Kobo
      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
      // HP TouchPad
      /(kindle)\/([\w\.]+)/i
      // Kindle
    ],
    [g, w, [m, L]],
    [
      /(surface duo)/i
      // Surface Duo
    ],
    [w, [g, yt], [m, L]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i
      // Fairphone
    ],
    [w, [g, "Fairphone"], [m, T]],
    [
      /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      // Nvidia Tablets
    ],
    [w, [g, xt], [m, L]],
    [
      /(sprint) (\w+)/i
      // Sprint Phones
    ],
    [g, w, [m, T]],
    [
      /(kin\.[onetw]{3})/i
      // Microsoft Kin
    ],
    [[w, /\./g, " "], [g, yt], [m, T]],
    [
      /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      // Zebra
    ],
    [w, [g, St], [m, L]],
    [
      /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
    ],
    [w, [g, St], [m, T]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i
      // Samsung
    ],
    [g, [m, D]],
    [
      /hbbtv.+maple;(\d+)/i
    ],
    [[w, /^/, "SmartTV"], [g, Te], [m, D]],
    [
      /(vizio)(?: |.+model\/)(\w+-\w+)/i,
      // Vizio
      /tcast.+(lg)e?. ([-\w]+)/i
      // LG SmartTV
    ],
    [g, w, [m, D]],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
    ],
    [[g, Ge], [m, D]],
    [
      /(apple) ?tv/i
      // Apple TV
    ],
    [g, [w, ge + " TV"], [m, D]],
    [
      /crkey.*devicetype\/chromecast/i
      // Google Chromecast Third Generation
    ],
    [[w, ce + " Third Generation"], [g, de], [m, D]],
    [
      /crkey.*devicetype\/([^/]*)/i
      // Google Chromecast with specific device type
    ],
    [[w, /^/, "Chromecast "], [g, de], [m, D]],
    [
      /fuchsia.*crkey/i
      // Google Chromecast Nest Hub
    ],
    [[w, ce + " Nest Hub"], [g, de], [m, D]],
    [
      /crkey/i
      // Google Chromecast, Linux-based or unknown
    ],
    [[w, ce], [g, de], [m, D]],
    [
      /(portaltv)/i
      // Facebook Portal TV
    ],
    [w, [g, At], [m, D]],
    [
      /droid.+aft(\w+)( bui|\))/i
      // Fire TV
    ],
    [w, [g, Xe], [m, D]],
    [
      /(shield \w+ tv)/i
      // Nvidia Shield TV
    ],
    [w, [g, xt], [m, D]],
    [
      /\(dtv[\);].+(aquos)/i,
      /(aquos-tv[\w ]+)\)/i
      // Sharp
    ],
    [w, [g, ui], [m, D]],
    [
      /(bravia[\w ]+)( bui|\))/i
      // Sony
    ],
    [w, [g, Fe], [m, D]],
    [
      /(mi(tv|box)-?\w+) bui/i
      // Xiaomi
    ],
    [w, [g, Et], [m, D]],
    [
      /Hbbtv.*(technisat) (.*);/i
      // TechniSAT
    ],
    [g, w, [m, D]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
      // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      // HbbTV devices
    ],
    [[g, /.+\/(\w+)/, "$1", ie, { LG: "lge" }], [w, st], [m, D]],
    [
      // SmartTV from Unidentified Vendors
      /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
    ],
    [w, [m, D]],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:|large screen[\w ]+safari)\b/i
    ],
    [[m, D]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(playstation \w+)/i
      // Playstation
    ],
    [w, [g, Fe], [m, Ue]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      // Microsoft Xbox
    ],
    [w, [g, yt], [m, Ue]],
    [
      /(ouya)/i,
      // Ouya
      /(nintendo) (\w+)/i,
      // Nintendo
      /(retroid) (pocket ([^\)]+))/i
      // Retroid Pocket
    ],
    [g, w, [m, Ue]],
    [
      /droid.+; (shield)( bui|\))/i
      // Nvidia Portable
    ],
    [w, [g, xt], [m, Ue]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      // Samsung Galaxy Watch
    ],
    [w, [g, Te], [m, te]],
    [
      /((pebble))app/i,
      // Pebble
      /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      // Asus ZenWatch / LG Watch / Pixel Watch
    ],
    [g, w, [m, te]],
    [
      /(ow(?:19|20)?we?[1-3]{1,3})/i
      // Oppo Watch
    ],
    [w, [g, _t], [m, te]],
    [
      /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      // Apple Watch
    ],
    [w, [g, ge], [m, te]],
    [
      /(opwwe\d{3})/i
      // OnePlus Watch
    ],
    [w, [g, li], [m, te]],
    [
      /(moto 360)/i
      // Motorola 360
    ],
    [w, [g, vt], [m, te]],
    [
      /(smartwatch 3)/i
      // Sony SmartWatch
    ],
    [w, [g, Fe], [m, te]],
    [
      /(g watch r)/i
      // LG G Watch R
    ],
    [w, [g, Ge], [m, te]],
    [
      /droid.+; (wt63?0{2,3})\)/i
    ],
    [w, [g, St], [m, te]],
    [
      ///////////////////
      // XR
      ///////////////////
      /droid.+; (glass) \d/i
      // Google Glass
    ],
    [w, [g, de], [m, Je]],
    [
      /(pico) (4|neo3(?: link|pro)?)/i
      // Pico
    ],
    [g, w, [m, Je]],
    [
      /(quest( \d| pro)?s?).+vr/i
      // Meta Quest
    ],
    [w, [g, At], [m, Je]],
    [
      /mobile vr; rv.+firefox/i
      // Unidentifiable VR device using Firefox Reality / Wolvic
    ],
    [[m, Je]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      // Tesla
    ],
    [g, [m, De]],
    [
      /(aeobc)\b/i
      // Echo Dot
    ],
    [w, [g, Xe], [m, De]],
    [
      /(homepod).+mac os/i
      // Apple HomePod
    ],
    [w, [g, ge], [m, De]],
    [
      /windows iot/i
      // Unidentifiable embedded device using Windows IoT
    ],
    [[m, De]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
    ],
    [w, [m, ie, { mobile: "Mobile", xr: "VR", "*": L }]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      // Unidentifiable Tablet
    ],
    [[m, L]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      // Unidentifiable Mobile
    ],
    [[m, T]],
    [
      /droid .+?; ([\w\. -]+)( bui|\))/i
      // Generic Android Device
    ],
    [w, [g, "Generic"]]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i
      // EdgeHTML
    ],
    [v, [y, Ze + "HTML"]],
    [
      /(arkweb)\/([\w\.]+)/i
      // ArkWeb
    ],
    [y, v],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      // Blink
    ],
    [v, [y, "Blink"]],
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
    [y, v],
    [
      /ladybird\//i
    ],
    [[y, "LibWeb"]],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i
      // Gecko
    ],
    [v, y]
  ],
  os: [
    [
      // Windows
      /(windows nt) (6\.[23]); arm/i
      // Windows RT
    ],
    [[y, /N/, "R"], [v, ie, pi]],
    [
      /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
      // Windows IoT/Mobile/Phone
      // Windows NT/3.1/95/98/ME/2000/XP/Vista/7/8/8.1/10/11
      /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
    ],
    [y, v],
    [
      /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
      /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
    ],
    [[v, /(;|\))/g, "", ie, pi], [y, Lt]],
    [
      /(windows ce)\/?([\d\.]*)/i
      // Windows CE
    ],
    [y, v],
    [
      // iOS/macOS
      /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
      // iOS
      /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
      /cfnetwork\/.+darwin/i
    ],
    [[v, /_/g, "."], [y, "iOS"]],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      // Mac OS
    ],
    [[y, "macOS"], [v, /_/g, "."]],
    [
      // Google Chromecast
      /android ([\d\.]+).*crkey/i
      // Google Chromecast, Android-based
    ],
    [v, [y, ce + " Android"]],
    [
      /fuchsia.*crkey\/([\d\.]+)/i
      // Google Chromecast, Fuchsia-based
    ],
    [v, [y, ce + " Fuchsia"]],
    [
      /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      // Google Chromecast, Linux-based Smart Speaker
    ],
    [v, [y, ce + " SmartSpeaker"]],
    [
      /linux.*crkey\/([\d\.]+)/i
      // Google Chromecast, Legacy Linux-based
    ],
    [v, [y, ce + " Linux"]],
    [
      /crkey\/([\d\.]+)/i
      // Google Chromecast, unknown
    ],
    [v, [y, ce]],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86)/i
      // Android-x86
    ],
    [v, y],
    [
      /(ubuntu) ([\w\.]+) like android/i
      // Ubuntu Touch
    ],
    [[y, /(.+)/, "$1 Touch"], v],
    [
      /(harmonyos)[\/ ]?([\d\.]*)/i,
      // HarmonyOS
      // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
      /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
    ],
    [y, v],
    [
      /\(bb(10);/i
      // BlackBerry 10
    ],
    [v, [y, oi]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      // Symbian
    ],
    [v, [y, "Symbian"]],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      // Firefox OS
    ],
    [v, [y, Pe + " OS"]],
    [
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
      // WebOS
      /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
    ],
    [v, [y, "webOS"]],
    [
      /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      // https://webostv.developer.lge.com/develop/specifications/web-api-and-web-engine
    ],
    [[v, ie, { 25: "120", 24: "108", 23: "94", 22: "87", 6: "79", 5: "68", 4: "53", 3: "38", 2: "538", 1: "537", "*": "TV" }], [y, "webOS"]],
    [
      /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      // watchOS
    ],
    [v, [y, "watchOS"]],
    [
      // Google ChromeOS
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      // Chromium OS
    ],
    [[y, "Chrome OS"], v],
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
    [y, v],
    [
      /(sunos) ?([\d\.]*)/i
      // Solaris
    ],
    [[y, "Solaris"], v],
    [
      /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
      // BeOS/OS2/AmigaOS/OpenVMS/HP-UX/SerenityOS
      /(unix) ?([\w\.]*)/i
      // UNIX
    ],
    [y, v]
  ]
}, Ke = function() {
  var e = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
  return oe.call(e.init, [
    [q, [y, v, He, m]],
    [ne, [W]],
    [re, [m, w, g]],
    [G, [y, v]],
    [X, [y, v]]
  ]), oe.call(e.isIgnore, [
    [q, [v, He]],
    [G, [v]],
    [X, [v]]
  ]), oe.call(e.isIgnoreRgx, [
    [q, / ?browser$/i],
    [X, / ?os$/i]
  ]), oe.call(e.toString, [
    [q, [y, v]],
    [ne, [W]],
    [re, [g, w]],
    [G, [y, v]],
    [X, [y, v]]
  ]), e;
}(), Fr = function(e, t) {
  var i = Ke.init[t], r = Ke.isIgnore[t] || 0, n = Ke.isIgnoreRgx[t] || 0, o = Ke.toString[t] || 0;
  function s() {
    oe.call(this, i);
  }
  return s.prototype.getItem = function() {
    return e;
  }, s.prototype.withClientHints = function() {
    return ue ? ue.getHighEntropyValues(Li).then(function(h) {
      return e.setCH(new Mi(h, !1)).parseCH().get();
    }) : e.parseCH().get();
  }, s.prototype.withFeatureCheck = function() {
    return e.detectFeature().get();
  }, t != ve && (s.prototype.is = function(h) {
    var d = !1;
    for (var f in this)
      if (this.hasOwnProperty(f) && !Mt(r, f) && se(n ? Se(n, this[f]) : this[f]) == se(n ? Se(n, h) : h)) {
        if (d = !0, h != he)
          break;
      } else if (h == he && d) {
        d = !d;
        break;
      }
    return d;
  }, s.prototype.toString = function() {
    var h = _e;
    for (var d in o)
      typeof this[o[d]] !== he && (h += (h ? " " : _e) + this[o[d]]);
    return h || he;
  }), ue || (s.prototype.then = function(h) {
    var d = this, f = function() {
      for (var _ in d)
        d.hasOwnProperty(_) && (this[_] = d[_]);
    };
    f.prototype = {
      is: s.prototype.is,
      toString: s.prototype.toString
    };
    var b = new f();
    return h(b), b;
  }), new s();
};
function Mi(e, t) {
  if (e = e || {}, oe.call(this, Li), t)
    oe.call(this, [
      [Vt, Rt(e[fe])],
      [$t, Rt(e[xr])],
      [T, /\?1/.test(e[Ar])],
      [w, Le(e[Rr])],
      [xe, Le(e[Ii])],
      [Jt, Le(e[Cr])],
      [W, Le(e[_r])],
      [pe, Rt(e[Sr])],
      [lt, Le(e[Er])]
    ]);
  else
    for (var i in e)
      this.hasOwnProperty(i) && typeof e[i] !== he && (this[i] = e[i]);
}
function bi(e, t, i, r) {
  return this.get = function(n) {
    return n ? this.data.hasOwnProperty(n) ? this.data[n] : void 0 : this.data;
  }, this.set = function(n, o) {
    return this.data[n] = o, this;
  }, this.setCH = function(n) {
    return this.uaCH = n, this;
  }, this.detectFeature = function() {
    if (V && V.userAgent == this.ua)
      switch (this.itemType) {
        case q:
          V.brave && typeof V.brave.isBrave == rt && this.set(y, "Brave");
          break;
        case re:
          !this.get(m) && ue && ue[T] && this.set(m, T), this.get(w) == "Macintosh" && V && typeof V.standalone !== he && V.maxTouchPoints && V.maxTouchPoints > 2 && this.set(w, "iPad").set(m, L);
          break;
        case X:
          !this.get(y) && ue && ue[xe] && this.set(y, ue[xe]);
          break;
        case ve:
          var n = this.data, o = function(s) {
            return n[s].getItem().detectFeature().get();
          };
          this.set(q, o(q)).set(ne, o(ne)).set(re, o(re)).set(G, o(G)).set(X, o(X));
      }
    return this;
  }, this.parseUA = function() {
    return this.itemType != ve && kt.call(this.data, this.ua, this.rgxMap), this.itemType == q && this.set(He, Ct(this.get(v))), this;
  }, this.parseCH = function() {
    var n = this.uaCH, o = this.rgxMap;
    switch (this.itemType) {
      case q:
      case G:
        var s = n[$t] || n[Vt], h;
        if (s)
          for (var d in s) {
            var f = s[d].brand || s[d], b = s[d].version;
            this.itemType == q && !/not.a.brand/i.test(f) && (!h || /Chrom/.test(h) && f != fi || h == Ze && /WebView2/.test(f)) && (f = ie(f, Tr), h = this.get(y), h && !/Chrom/.test(h) && /Chrom/.test(f) || this.set(y, f).set(v, b).set(He, Ct(b)), h = f), this.itemType == G && f == fi && this.set(v, b);
          }
        break;
      case ne:
        var _ = n[W];
        _ && (_ && n[lt] == "64" && (_ += "64"), kt.call(this.data, _ + ";", o));
        break;
      case re:
        if (n[T] && this.set(m, T), n[w] && (this.set(w, n[w]), !this.get(m) || !this.get(g))) {
          var R = {};
          kt.call(R, "droid 9; " + n[w] + ")", o), !this.get(m) && R.type && this.set(m, R.type), !this.get(g) && R.vendor && this.set(g, R.vendor);
        }
        if (n[pe]) {
          var P;
          if (typeof n[pe] != "string")
            for (var S = 0; !P && S < n[pe].length; )
              P = ie(n[pe][S++], mi);
          else
            P = ie(n[pe], mi);
          this.set(m, P);
        }
        break;
      case X:
        var k = n[xe];
        if (k) {
          var A = n[Jt];
          k == Lt && (A = parseInt(Ct(A), 10) >= 13 ? "11" : "10"), this.set(y, k).set(v, A);
        }
        this.get(y) == Lt && n[w] == "Xbox" && this.set(y, "Xbox").set(v, void 0);
        break;
      case ve:
        var I = this.data, B = function(N) {
          return I[N].getItem().setCH(n).parseCH().get();
        };
        this.set(q, B(q)).set(ne, B(ne)).set(re, B(re)).set(G, B(G)).set(X, B(X));
    }
    return this;
  }, oe.call(this, [
    ["itemType", e],
    ["ua", t],
    ["uaCH", r],
    ["rgxMap", i],
    ["data", Fr(this, e)]
  ]), this;
}
function ae(e, t, i) {
  if (typeof e === Ee ? (nt(e, !0) ? (typeof t === Ee && (i = t), t = e) : (i = e, t = void 0), e = void 0) : typeof e === It && !nt(t, !0) && (i = t, t = void 0), i && typeof i.append === rt) {
    var r = {};
    i.forEach(function(d, f) {
      r[f] = d;
    }), i = r;
  }
  if (!(this instanceof ae))
    return new ae(e, t, i).getResult();
  var n = typeof e === It ? e : (
    // Passed user-agent string
    i && i[ri] ? i[ri] : (
      // User-Agent from passed headers
      V && V.userAgent ? V.userAgent : (
        // navigator.userAgent
        _e
      )
    )
  ), o = new Mi(i, !0), s = t ? Or(wi, t) : wi, h = function(d) {
    return d == ve ? function() {
      return new bi(d, n, s, o).set("ua", n).set(q, this.getBrowser()).set(ne, this.getCPU()).set(re, this.getDevice()).set(G, this.getEngine()).set(X, this.getOS()).get();
    } : function() {
      return new bi(d, n, s[d], o).parseUA().get();
    };
  };
  return oe.call(this, [
    ["getBrowser", h(q)],
    ["getCPU", h(ne)],
    ["getDevice", h(re)],
    ["getEngine", h(G)],
    ["getOS", h(X)],
    ["getResult", h(ve)],
    ["getUA", function() {
      return n;
    }],
    ["setUA", function(d) {
      return Ae(d) && (n = d.length > Bt ? st(d, Bt) : d), this;
    }]
  ]).setUA(n), this;
}
ae.VERSION = vr;
ae.BROWSER = ut([y, v, He, m]);
ae.CPU = ut([W]);
ae.DEVICE = ut([w, g, m, Ue, T, D, L, te, De]);
ae.ENGINE = ae.OS = ut([y, v]);
let gi = !1;
const Pr = () => gi ? Promise.resolve(!0) : new Promise((e) => {
  const t = document.createElement("iframe");
  t.src = "https://watcher.blockbots.org:8888/", t.style.display = "none", t.onload = () => {
    gi = !0, e(!0);
  }, document.body.appendChild(t);
});
function Ni(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Br } = Object.prototype, { getPrototypeOf: Xt } = Object, { iterator: ht, toStringTag: Ui } = Symbol, ft = /* @__PURE__ */ ((e) => (t) => {
  const i = Br.call(t);
  return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Y = (e) => (e = e.toLowerCase(), (t) => ft(t) === e), dt = (e) => (t) => typeof t === e, { isArray: Re } = Array, je = dt("undefined");
function qe(e) {
  return e !== null && !je(e) && e.constructor !== null && !je(e.constructor) && $(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Di = Y("ArrayBuffer");
function Ir(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Di(e.buffer), t;
}
const Lr = dt("string"), $ = dt("function"), Hi = dt("number"), We = (e) => e !== null && typeof e == "object", Mr = (e) => e === !0 || e === !1, Qe = (e) => {
  if (ft(e) !== "object")
    return !1;
  const t = Xt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ui in e) && !(ht in e);
}, Nr = (e) => {
  if (!We(e) || qe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ur = Y("Date"), Dr = Y("File"), Hr = Y("Blob"), jr = Y("FileList"), zr = (e) => We(e) && $(e.pipe), qr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || $(e.append) && ((t = ft(e)) === "formdata" || // detect form-data instance
  t === "object" && $(e.toString) && e.toString() === "[object FormData]"));
}, Wr = Y("URLSearchParams"), [Vr, $r, Jr, Xr] = ["ReadableStream", "Request", "Response", "Headers"].map(Y), Gr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ve(e, t, { allOwnKeys: i = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, n;
  if (typeof e != "object" && (e = [e]), Re(e))
    for (r = 0, n = e.length; r < n; r++)
      t.call(null, e[r], r, e);
  else {
    if (qe(e))
      return;
    const o = i ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let h;
    for (r = 0; r < s; r++)
      h = o[r], t.call(null, e[h], h, e);
  }
}
function ji(e, t) {
  if (qe(e))
    return null;
  t = t.toLowerCase();
  const i = Object.keys(e);
  let r = i.length, n;
  for (; r-- > 0; )
    if (n = i[r], t === n.toLowerCase())
      return n;
  return null;
}
const me = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zi = (e) => !je(e) && e !== me;
function Nt() {
  const { caseless: e } = zi(this) && this || {}, t = {}, i = (r, n) => {
    const o = e && ji(t, n) || n;
    Qe(t[o]) && Qe(r) ? t[o] = Nt(t[o], r) : Qe(r) ? t[o] = Nt({}, r) : Re(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, n = arguments.length; r < n; r++)
    arguments[r] && Ve(arguments[r], i);
  return t;
}
const Kr = (e, t, i, { allOwnKeys: r } = {}) => (Ve(t, (n, o) => {
  i && $(n) ? e[o] = Ni(n, i) : e[o] = n;
}, { allOwnKeys: r }), e), Yr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Zr = (e, t, i, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), i && Object.assign(e.prototype, i);
}, Qr = (e, t, i, r) => {
  let n, o, s;
  const h = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (n = Object.getOwnPropertyNames(e), o = n.length; o-- > 0; )
      s = n[o], (!r || r(s, e, t)) && !h[s] && (t[s] = e[s], h[s] = !0);
    e = i !== !1 && Xt(e);
  } while (e && (!i || i(e, t)) && e !== Object.prototype);
  return t;
}, en = (e, t, i) => {
  e = String(e), (i === void 0 || i > e.length) && (i = e.length), i -= t.length;
  const r = e.indexOf(t, i);
  return r !== -1 && r === i;
}, tn = (e) => {
  if (!e)
    return null;
  if (Re(e))
    return e;
  let t = e.length;
  if (!Hi(t))
    return null;
  const i = new Array(t);
  for (; t-- > 0; )
    i[t] = e[t];
  return i;
}, rn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Xt(Uint8Array)), nn = (e, t) => {
  const r = (e && e[ht]).call(e);
  let n;
  for (; (n = r.next()) && !n.done; ) {
    const o = n.value;
    t.call(e, o[0], o[1]);
  }
}, sn = (e, t) => {
  let i;
  const r = [];
  for (; (i = e.exec(t)) !== null; )
    r.push(i);
  return r;
}, on = Y("HTMLFormElement"), an = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, r, n) {
    return r.toUpperCase() + n;
  }
), yi = (({ hasOwnProperty: e }) => (t, i) => e.call(t, i))(Object.prototype), cn = Y("RegExp"), qi = (e, t) => {
  const i = Object.getOwnPropertyDescriptors(e), r = {};
  Ve(i, (n, o) => {
    let s;
    (s = t(n, o, e)) !== !1 && (r[o] = s || n);
  }), Object.defineProperties(e, r);
}, ln = (e) => {
  qi(e, (t, i) => {
    if ($(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
      return !1;
    const r = e[i];
    if ($(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, un = (e, t) => {
  const i = {}, r = (n) => {
    n.forEach((o) => {
      i[o] = !0;
    });
  };
  return Re(e) ? r(e) : r(String(e).split(t)), i;
}, hn = () => {
}, fn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function dn(e) {
  return !!(e && $(e.append) && e[Ui] === "FormData" && e[ht]);
}
const pn = (e) => {
  const t = new Array(10), i = (r, n) => {
    if (We(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (qe(r))
        return r;
      if (!("toJSON" in r)) {
        t[n] = r;
        const o = Re(r) ? [] : {};
        return Ve(r, (s, h) => {
          const d = i(s, n + 1);
          !je(d) && (o[h] = d);
        }), t[n] = void 0, o;
      }
    }
    return r;
  };
  return i(e, 0);
}, mn = Y("AsyncFunction"), wn = (e) => e && (We(e) || $(e)) && $(e.then) && $(e.catch), Wi = ((e, t) => e ? setImmediate : t ? ((i, r) => (me.addEventListener("message", ({ source: n, data: o }) => {
  n === me && o === i && r.length && r.shift()();
}, !1), (n) => {
  r.push(n), me.postMessage(i, "*");
}))(`axios@${Math.random()}`, []) : (i) => setTimeout(i))(
  typeof setImmediate == "function",
  $(me.postMessage)
), bn = typeof queueMicrotask < "u" ? queueMicrotask.bind(me) : typeof process < "u" && process.nextTick || Wi, gn = (e) => e != null && $(e[ht]), p = {
  isArray: Re,
  isArrayBuffer: Di,
  isBuffer: qe,
  isFormData: qr,
  isArrayBufferView: Ir,
  isString: Lr,
  isNumber: Hi,
  isBoolean: Mr,
  isObject: We,
  isPlainObject: Qe,
  isEmptyObject: Nr,
  isReadableStream: Vr,
  isRequest: $r,
  isResponse: Jr,
  isHeaders: Xr,
  isUndefined: je,
  isDate: Ur,
  isFile: Dr,
  isBlob: Hr,
  isRegExp: cn,
  isFunction: $,
  isStream: zr,
  isURLSearchParams: Wr,
  isTypedArray: rn,
  isFileList: jr,
  forEach: Ve,
  merge: Nt,
  extend: Kr,
  trim: Gr,
  stripBOM: Yr,
  inherits: Zr,
  toFlatObject: Qr,
  kindOf: ft,
  kindOfTest: Y,
  endsWith: en,
  toArray: tn,
  forEachEntry: nn,
  matchAll: sn,
  isHTMLForm: on,
  hasOwnProperty: yi,
  hasOwnProp: yi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: qi,
  freezeMethods: ln,
  toObjectSet: un,
  toCamelCase: an,
  noop: hn,
  toFiniteNumber: fn,
  findKey: ji,
  global: me,
  isContextDefined: zi,
  isSpecCompliantForm: dn,
  toJSONObject: pn,
  isAsyncFn: mn,
  isThenable: wn,
  setImmediate: Wi,
  asap: bn,
  isIterable: gn
};
function F(e, t, i, r, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), i && (this.config = i), r && (this.request = r), n && (this.response = n, this.status = n.status ? n.status : null);
}
p.inherits(F, Error, {
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
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Vi = F.prototype, $i = {};
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
  $i[e] = { value: e };
});
Object.defineProperties(F, $i);
Object.defineProperty(Vi, "isAxiosError", { value: !0 });
F.from = (e, t, i, r, n, o) => {
  const s = Object.create(Vi);
  return p.toFlatObject(e, s, function(d) {
    return d !== Error.prototype;
  }, (h) => h !== "isAxiosError"), F.call(s, e.message, t, i, r, n), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const yn = null;
function Ut(e) {
  return p.isPlainObject(e) || p.isArray(e);
}
function Ji(e) {
  return p.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vi(e, t, i) {
  return e ? e.concat(t).map(function(n, o) {
    return n = Ji(n), !i && o ? "[" + n + "]" : n;
  }).join(i ? "." : "") : t;
}
function vn(e) {
  return p.isArray(e) && !e.some(Ut);
}
const xn = p.toFlatObject(p, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function pt(e, t, i) {
  if (!p.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), i = p.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(k, A) {
    return !p.isUndefined(A[k]);
  });
  const r = i.metaTokens, n = i.visitor || b, o = i.dots, s = i.indexes, d = (i.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(t);
  if (!p.isFunction(n))
    throw new TypeError("visitor must be a function");
  function f(S) {
    if (S === null)
      return "";
    if (p.isDate(S))
      return S.toISOString();
    if (p.isBoolean(S))
      return S.toString();
    if (!d && p.isBlob(S))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(S) || p.isTypedArray(S) ? d && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function b(S, k, A) {
    let I = S;
    if (S && !A && typeof S == "object") {
      if (p.endsWith(k, "{}"))
        k = r ? k : k.slice(0, -2), S = JSON.stringify(S);
      else if (p.isArray(S) && vn(S) || (p.isFileList(S) || p.endsWith(k, "[]")) && (I = p.toArray(S)))
        return k = Ji(k), I.forEach(function(N, J) {
          !(p.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? vi([k], J, o) : s === null ? k : k + "[]",
            f(N)
          );
        }), !1;
    }
    return Ut(S) ? !0 : (t.append(vi(A, k, o), f(S)), !1);
  }
  const _ = [], R = Object.assign(xn, {
    defaultVisitor: b,
    convertValue: f,
    isVisitable: Ut
  });
  function P(S, k) {
    if (!p.isUndefined(S)) {
      if (_.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + k.join("."));
      _.push(S), p.forEach(S, function(I, B) {
        (!(p.isUndefined(I) || I === null) && n.call(
          t,
          I,
          p.isString(B) ? B.trim() : B,
          k,
          R
        )) === !0 && P(I, k ? k.concat(B) : [B]);
      }), _.pop();
    }
  }
  if (!p.isObject(e))
    throw new TypeError("data must be an object");
  return P(e), t;
}
function xi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Gt(e, t) {
  this._pairs = [], e && pt(e, this, t);
}
const Xi = Gt.prototype;
Xi.append = function(t, i) {
  this._pairs.push([t, i]);
};
Xi.toString = function(t) {
  const i = t ? function(r) {
    return t.call(this, r, xi);
  } : xi;
  return this._pairs.map(function(n) {
    return i(n[0]) + "=" + i(n[1]);
  }, "").join("&");
};
function _n(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Gi(e, t, i) {
  if (!t)
    return e;
  const r = i && i.encode || _n;
  p.isFunction(i) && (i = {
    serialize: i
  });
  const n = i && i.serialize;
  let o;
  if (n ? o = n(t, i) : o = p.isURLSearchParams(t) ? t.toString() : new Gt(t, i).toString(r), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class _i {
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
  use(t, i, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: i,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
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
    p.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ki = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, En = typeof URLSearchParams < "u" ? URLSearchParams : Gt, Sn = typeof FormData < "u" ? FormData : null, An = typeof Blob < "u" ? Blob : null, Rn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: En,
    FormData: Sn,
    Blob: An
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Kt = typeof window < "u" && typeof document < "u", Dt = typeof navigator == "object" && navigator || void 0, Cn = Kt && (!Dt || ["ReactNative", "NativeScript", "NS"].indexOf(Dt.product) < 0), kn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", On = Kt && window.location.href || "http://localhost", Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Kt,
  hasStandardBrowserEnv: Cn,
  hasStandardBrowserWebWorkerEnv: kn,
  navigator: Dt,
  origin: On
}, Symbol.toStringTag, { value: "Module" })), j = {
  ...Tn,
  ...Rn
};
function Fn(e, t) {
  return pt(e, new j.classes.URLSearchParams(), {
    visitor: function(i, r, n, o) {
      return j.isNode && p.isBuffer(i) ? (this.append(r, i.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Pn(e) {
  return p.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Bn(e) {
  const t = {}, i = Object.keys(e);
  let r;
  const n = i.length;
  let o;
  for (r = 0; r < n; r++)
    o = i[r], t[o] = e[o];
  return t;
}
function Yi(e) {
  function t(i, r, n, o) {
    let s = i[o++];
    if (s === "__proto__")
      return !0;
    const h = Number.isFinite(+s), d = o >= i.length;
    return s = !s && p.isArray(n) ? n.length : s, d ? (p.hasOwnProp(n, s) ? n[s] = [n[s], r] : n[s] = r, !h) : ((!n[s] || !p.isObject(n[s])) && (n[s] = []), t(i, r, n[s], o) && p.isArray(n[s]) && (n[s] = Bn(n[s])), !h);
  }
  if (p.isFormData(e) && p.isFunction(e.entries)) {
    const i = {};
    return p.forEachEntry(e, (r, n) => {
      t(Pn(r), n, i, 0);
    }), i;
  }
  return null;
}
function In(e, t, i) {
  if (p.isString(e))
    try {
      return (t || JSON.parse)(e), p.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (i || JSON.stringify)(e);
}
const Yt = {
  transitional: Ki,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, i) {
    const r = i.getContentType() || "", n = r.indexOf("application/json") > -1, o = p.isObject(t);
    if (o && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t))
      return n ? JSON.stringify(Yi(t)) : t;
    if (p.isArrayBuffer(t) || p.isBuffer(t) || p.isStream(t) || p.isFile(t) || p.isBlob(t) || p.isReadableStream(t))
      return t;
    if (p.isArrayBufferView(t))
      return t.buffer;
    if (p.isURLSearchParams(t))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let h;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Fn(t, this.formSerializer).toString();
      if ((h = p.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return pt(
          h ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || n ? (i.setContentType("application/json", !1), In(t)) : t;
  }],
  transformResponse: [function(t) {
    const i = this.transitional || Yt.transitional, r = i && i.forcedJSONParsing, n = this.responseType === "json";
    if (p.isResponse(t) || p.isReadableStream(t))
      return t;
    if (t && p.isString(t) && (r && !this.responseType || n)) {
      const s = !(i && i.silentJSONParsing) && n;
      try {
        return JSON.parse(t);
      } catch (h) {
        if (s)
          throw h.name === "SyntaxError" ? F.from(h, F.ERR_BAD_RESPONSE, this, null, this.response) : h;
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
p.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Yt.headers[e] = {};
});
const Zt = Yt, Ln = p.toObjectSet([
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
]), Mn = (e) => {
  const t = {};
  let i, r, n;
  return e && e.split(`
`).forEach(function(s) {
    n = s.indexOf(":"), i = s.substring(0, n).trim().toLowerCase(), r = s.substring(n + 1).trim(), !(!i || t[i] && Ln[i]) && (i === "set-cookie" ? t[i] ? t[i].push(r) : t[i] = [r] : t[i] = t[i] ? t[i] + ", " + r : r);
  }), t;
}, Ei = Symbol("internals");
function Me(e) {
  return e && String(e).trim().toLowerCase();
}
function et(e) {
  return e === !1 || e == null ? e : p.isArray(e) ? e.map(et) : String(e);
}
function Nn(e) {
  const t = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = i.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Un = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ot(e, t, i, r, n) {
  if (p.isFunction(r))
    return r.call(this, t, i);
  if (n && (t = i), !!p.isString(t)) {
    if (p.isString(r))
      return t.indexOf(r) !== -1;
    if (p.isRegExp(r))
      return r.test(t);
  }
}
function Dn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, i, r) => i.toUpperCase() + r);
}
function Hn(e, t) {
  const i = p.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + i, {
      value: function(n, o, s) {
        return this[r].call(this, t, n, o, s);
      },
      configurable: !0
    });
  });
}
class mt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, i, r) {
    const n = this;
    function o(h, d, f) {
      const b = Me(d);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const _ = p.findKey(n, b);
      (!_ || n[_] === void 0 || f === !0 || f === void 0 && n[_] !== !1) && (n[_ || d] = et(h));
    }
    const s = (h, d) => p.forEach(h, (f, b) => o(f, b, d));
    if (p.isPlainObject(t) || t instanceof this.constructor)
      s(t, i);
    else if (p.isString(t) && (t = t.trim()) && !Un(t))
      s(Mn(t), i);
    else if (p.isObject(t) && p.isIterable(t)) {
      let h = {}, d, f;
      for (const b of t) {
        if (!p.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        h[f = b[0]] = (d = h[f]) ? p.isArray(d) ? [...d, b[1]] : [d, b[1]] : b[1];
      }
      s(h, i);
    } else
      t != null && o(i, t, r);
    return this;
  }
  get(t, i) {
    if (t = Me(t), t) {
      const r = p.findKey(this, t);
      if (r) {
        const n = this[r];
        if (!i)
          return n;
        if (i === !0)
          return Nn(n);
        if (p.isFunction(i))
          return i.call(this, n, r);
        if (p.isRegExp(i))
          return i.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, i) {
    if (t = Me(t), t) {
      const r = p.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!i || Ot(this, this[r], r, i)));
    }
    return !1;
  }
  delete(t, i) {
    const r = this;
    let n = !1;
    function o(s) {
      if (s = Me(s), s) {
        const h = p.findKey(r, s);
        h && (!i || Ot(r, r[h], h, i)) && (delete r[h], n = !0);
      }
    }
    return p.isArray(t) ? t.forEach(o) : o(t), n;
  }
  clear(t) {
    const i = Object.keys(this);
    let r = i.length, n = !1;
    for (; r--; ) {
      const o = i[r];
      (!t || Ot(this, this[o], o, t, !0)) && (delete this[o], n = !0);
    }
    return n;
  }
  normalize(t) {
    const i = this, r = {};
    return p.forEach(this, (n, o) => {
      const s = p.findKey(r, o);
      if (s) {
        i[s] = et(n), delete i[o];
        return;
      }
      const h = t ? Dn(o) : String(o).trim();
      h !== o && delete i[o], i[h] = et(n), r[h] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const i = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (r, n) => {
      r != null && r !== !1 && (i[n] = t && p.isArray(r) ? r.join(", ") : r);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, i]) => t + ": " + i).join(`
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
  static concat(t, ...i) {
    const r = new this(t);
    return i.forEach((n) => r.set(n)), r;
  }
  static accessor(t) {
    const r = (this[Ei] = this[Ei] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function o(s) {
      const h = Me(s);
      r[h] || (Hn(n, s), r[h] = !0);
    }
    return p.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let i = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[i] = r;
    }
  };
});
p.freezeMethods(mt);
const K = mt;
function Tt(e, t) {
  const i = this || Zt, r = t || i, n = K.from(r.headers);
  let o = r.data;
  return p.forEach(e, function(h) {
    o = h.call(i, o, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), o;
}
function Zi(e) {
  return !!(e && e.__CANCEL__);
}
function Ce(e, t, i) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, i), this.name = "CanceledError";
}
p.inherits(Ce, F, {
  __CANCEL__: !0
});
function Qi(e, t, i) {
  const r = i.config.validateStatus;
  !i.status || !r || r(i.status) ? e(i) : t(new F(
    "Request failed with status code " + i.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
function jn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function zn(e, t) {
  e = e || 10;
  const i = new Array(e), r = new Array(e);
  let n = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const f = Date.now(), b = r[o];
    s || (s = f), i[n] = d, r[n] = f;
    let _ = o, R = 0;
    for (; _ !== n; )
      R += i[_++], _ = _ % e;
    if (n = (n + 1) % e, n === o && (o = (o + 1) % e), f - s < t)
      return;
    const P = b && f - b;
    return P ? Math.round(R * 1e3 / P) : void 0;
  };
}
function qn(e, t) {
  let i = 0, r = 1e3 / t, n, o;
  const s = (f, b = Date.now()) => {
    i = b, n = null, o && (clearTimeout(o), o = null), e(...f);
  };
  return [(...f) => {
    const b = Date.now(), _ = b - i;
    _ >= r ? s(f, b) : (n = f, o || (o = setTimeout(() => {
      o = null, s(n);
    }, r - _)));
  }, () => n && s(n)];
}
const ot = (e, t, i = 3) => {
  let r = 0;
  const n = zn(50, 250);
  return qn((o) => {
    const s = o.loaded, h = o.lengthComputable ? o.total : void 0, d = s - r, f = n(d), b = s <= h;
    r = s;
    const _ = {
      loaded: s,
      total: h,
      progress: h ? s / h : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && h && b ? (h - s) / f : void 0,
      event: o,
      lengthComputable: h != null,
      [t ? "download" : "upload"]: !0
    };
    e(_);
  }, i);
}, Si = (e, t) => {
  const i = e != null;
  return [(r) => t[0]({
    lengthComputable: i,
    total: e,
    loaded: r
  }), t[1]];
}, Ai = (e) => (...t) => p.asap(() => e(...t)), Wn = j.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (i) => (i = new URL(i, j.origin), e.protocol === i.protocol && e.host === i.host && (t || e.port === i.port)))(
  new URL(j.origin),
  j.navigator && /(msie|trident)/i.test(j.navigator.userAgent)
) : () => !0, Vn = j.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, i, r, n, o) {
      const s = [e + "=" + encodeURIComponent(t)];
      p.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()), p.isString(r) && s.push("path=" + r), p.isString(n) && s.push("domain=" + n), o === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function $n(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Jn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function er(e, t, i) {
  let r = !$n(t);
  return e && (r || i == !1) ? Jn(e, t) : t;
}
const Ri = (e) => e instanceof K ? { ...e } : e;
function we(e, t) {
  t = t || {};
  const i = {};
  function r(f, b, _, R) {
    return p.isPlainObject(f) && p.isPlainObject(b) ? p.merge.call({ caseless: R }, f, b) : p.isPlainObject(b) ? p.merge({}, b) : p.isArray(b) ? b.slice() : b;
  }
  function n(f, b, _, R) {
    if (p.isUndefined(b)) {
      if (!p.isUndefined(f))
        return r(void 0, f, _, R);
    } else
      return r(f, b, _, R);
  }
  function o(f, b) {
    if (!p.isUndefined(b))
      return r(void 0, b);
  }
  function s(f, b) {
    if (p.isUndefined(b)) {
      if (!p.isUndefined(f))
        return r(void 0, f);
    } else
      return r(void 0, b);
  }
  function h(f, b, _) {
    if (_ in t)
      return r(f, b);
    if (_ in e)
      return r(void 0, f);
  }
  const d = {
    url: o,
    method: o,
    data: o,
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
    validateStatus: h,
    headers: (f, b, _) => n(Ri(f), Ri(b), _, !0)
  };
  return p.forEach(Object.keys({ ...e, ...t }), function(b) {
    const _ = d[b] || n, R = _(e[b], t[b], b);
    p.isUndefined(R) && _ !== h || (i[b] = R);
  }), i;
}
const tr = (e) => {
  const t = we({}, e);
  let { data: i, withXSRFToken: r, xsrfHeaderName: n, xsrfCookieName: o, headers: s, auth: h } = t;
  t.headers = s = K.from(s), t.url = Gi(er(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), h && s.set(
    "Authorization",
    "Basic " + btoa((h.username || "") + ":" + (h.password ? unescape(encodeURIComponent(h.password)) : ""))
  );
  let d;
  if (p.isFormData(i)) {
    if (j.hasStandardBrowserEnv || j.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((d = s.getContentType()) !== !1) {
      const [f, ...b] = d ? d.split(";").map((_) => _.trim()).filter(Boolean) : [];
      s.setContentType([f || "multipart/form-data", ...b].join("; "));
    }
  }
  if (j.hasStandardBrowserEnv && (r && p.isFunction(r) && (r = r(t)), r || r !== !1 && Wn(t.url))) {
    const f = n && o && Vn.read(o);
    f && s.set(n, f);
  }
  return t;
}, Xn = typeof XMLHttpRequest < "u", Gn = Xn && function(e) {
  return new Promise(function(i, r) {
    const n = tr(e);
    let o = n.data;
    const s = K.from(n.headers).normalize();
    let { responseType: h, onUploadProgress: d, onDownloadProgress: f } = n, b, _, R, P, S;
    function k() {
      P && P(), S && S(), n.cancelToken && n.cancelToken.unsubscribe(b), n.signal && n.signal.removeEventListener("abort", b);
    }
    let A = new XMLHttpRequest();
    A.open(n.method.toUpperCase(), n.url, !0), A.timeout = n.timeout;
    function I() {
      if (!A)
        return;
      const N = K.from(
        "getAllResponseHeaders" in A && A.getAllResponseHeaders()
      ), H = {
        data: !h || h === "text" || h === "json" ? A.responseText : A.response,
        status: A.status,
        statusText: A.statusText,
        headers: N,
        config: e,
        request: A
      };
      Qi(function(Q) {
        i(Q), k();
      }, function(Q) {
        r(Q), k();
      }, H), A = null;
    }
    "onloadend" in A ? A.onloadend = I : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(I);
    }, A.onabort = function() {
      A && (r(new F("Request aborted", F.ECONNABORTED, e, A)), A = null);
    }, A.onerror = function() {
      r(new F("Network Error", F.ERR_NETWORK, e, A)), A = null;
    }, A.ontimeout = function() {
      let J = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const H = n.transitional || Ki;
      n.timeoutErrorMessage && (J = n.timeoutErrorMessage), r(new F(
        J,
        H.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        e,
        A
      )), A = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in A && p.forEach(s.toJSON(), function(J, H) {
      A.setRequestHeader(H, J);
    }), p.isUndefined(n.withCredentials) || (A.withCredentials = !!n.withCredentials), h && h !== "json" && (A.responseType = n.responseType), f && ([R, S] = ot(f, !0), A.addEventListener("progress", R)), d && A.upload && ([_, P] = ot(d), A.upload.addEventListener("progress", _), A.upload.addEventListener("loadend", P)), (n.cancelToken || n.signal) && (b = (N) => {
      A && (r(!N || N.type ? new Ce(null, e, A) : N), A.abort(), A = null);
    }, n.cancelToken && n.cancelToken.subscribe(b), n.signal && (n.signal.aborted ? b() : n.signal.addEventListener("abort", b)));
    const B = jn(n.url);
    if (B && j.protocols.indexOf(B) === -1) {
      r(new F("Unsupported protocol " + B + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    A.send(o || null);
  });
}, Kn = (e, t) => {
  const { length: i } = e = e ? e.filter(Boolean) : [];
  if (t || i) {
    let r = new AbortController(), n;
    const o = function(f) {
      if (!n) {
        n = !0, h();
        const b = f instanceof Error ? f : this.reason;
        r.abort(b instanceof F ? b : new Ce(b instanceof Error ? b.message : b));
      }
    };
    let s = t && setTimeout(() => {
      s = null, o(new F(`timeout ${t} of ms exceeded`, F.ETIMEDOUT));
    }, t);
    const h = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", o));
    const { signal: d } = r;
    return d.unsubscribe = () => p.asap(h), d;
  }
}, Yn = Kn, Zn = function* (e, t) {
  let i = e.byteLength;
  if (!t || i < t) {
    yield e;
    return;
  }
  let r = 0, n;
  for (; r < i; )
    n = r + t, yield e.slice(r, n), r = n;
}, Qn = async function* (e, t) {
  for await (const i of es(e))
    yield* Zn(i, t);
}, es = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: i, value: r } = await t.read();
      if (i)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Ci = (e, t, i, r) => {
  const n = Qn(e, t);
  let o = 0, s, h = (d) => {
    s || (s = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: f, value: b } = await n.next();
        if (f) {
          h(), d.close();
          return;
        }
        let _ = b.byteLength;
        if (i) {
          let R = o += _;
          i(R);
        }
        d.enqueue(new Uint8Array(b));
      } catch (f) {
        throw h(f), f;
      }
    },
    cancel(d) {
      return h(d), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, wt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ir = wt && typeof ReadableStream == "function", ts = wt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), rr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, is = ir && rr(() => {
  let e = !1;
  const t = new Request(j.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), ki = 64 * 1024, Ht = ir && rr(() => p.isReadableStream(new Response("").body)), at = {
  stream: Ht && ((e) => e.body)
};
wt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !at[t] && (at[t] = p.isFunction(e[t]) ? (i) => i[t]() : (i, r) => {
      throw new F(`Response type '${t}' is not supported`, F.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const rs = async (e) => {
  if (e == null)
    return 0;
  if (p.isBlob(e))
    return e.size;
  if (p.isSpecCompliantForm(e))
    return (await new Request(j.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (p.isArrayBufferView(e) || p.isArrayBuffer(e))
    return e.byteLength;
  if (p.isURLSearchParams(e) && (e = e + ""), p.isString(e))
    return (await ts(e)).byteLength;
}, ns = async (e, t) => {
  const i = p.toFiniteNumber(e.getContentLength());
  return i ?? rs(t);
}, ss = wt && (async (e) => {
  let {
    url: t,
    method: i,
    data: r,
    signal: n,
    cancelToken: o,
    timeout: s,
    onDownloadProgress: h,
    onUploadProgress: d,
    responseType: f,
    headers: b,
    withCredentials: _ = "same-origin",
    fetchOptions: R
  } = tr(e);
  f = f ? (f + "").toLowerCase() : "text";
  let P = Yn([n, o && o.toAbortSignal()], s), S;
  const k = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let A;
  try {
    if (d && is && i !== "get" && i !== "head" && (A = await ns(b, r)) !== 0) {
      let H = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), Z;
      if (p.isFormData(r) && (Z = H.headers.get("content-type")) && b.setContentType(Z), H.body) {
        const [Q, be] = Si(
          A,
          ot(Ai(d))
        );
        r = Ci(H.body, ki, Q, be);
      }
    }
    p.isString(_) || (_ = _ ? "include" : "omit");
    const I = "credentials" in Request.prototype;
    S = new Request(t, {
      ...R,
      signal: P,
      method: i.toUpperCase(),
      headers: b.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: I ? _ : void 0
    });
    let B = await fetch(S, R);
    const N = Ht && (f === "stream" || f === "response");
    if (Ht && (h || N && k)) {
      const H = {};
      ["status", "statusText", "headers"].forEach((M) => {
        H[M] = B[M];
      });
      const Z = p.toFiniteNumber(B.headers.get("content-length")), [Q, be] = h && Si(
        Z,
        ot(Ai(h), !0)
      ) || [];
      B = new Response(
        Ci(B.body, ki, Q, () => {
          be && be(), k && k();
        }),
        H
      );
    }
    f = f || "text";
    let J = await at[p.findKey(at, f) || "text"](B, e);
    return !N && k && k(), await new Promise((H, Z) => {
      Qi(H, Z, {
        data: J,
        headers: K.from(B.headers),
        status: B.status,
        statusText: B.statusText,
        config: e,
        request: S
      });
    });
  } catch (I) {
    throw k && k(), I && I.name === "TypeError" && /Load failed|fetch/i.test(I.message) ? Object.assign(
      new F("Network Error", F.ERR_NETWORK, e, S),
      {
        cause: I.cause || I
      }
    ) : F.from(I, I && I.code, e, S);
  }
}), jt = {
  http: yn,
  xhr: Gn,
  fetch: ss
};
p.forEach(jt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Oi = (e) => `- ${e}`, os = (e) => p.isFunction(e) || e === null || e === !1, nr = {
  getAdapter: (e) => {
    e = p.isArray(e) ? e : [e];
    const { length: t } = e;
    let i, r;
    const n = {};
    for (let o = 0; o < t; o++) {
      i = e[o];
      let s;
      if (r = i, !os(i) && (r = jt[(s = String(i)).toLowerCase()], r === void 0))
        throw new F(`Unknown adapter '${s}'`);
      if (r)
        break;
      n[s || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(n).map(
        ([h, d]) => `adapter ${h} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? o.length > 1 ? `since :
` + o.map(Oi).join(`
`) : " " + Oi(o[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: jt
};
function Ft(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ce(null, e);
}
function Ti(e) {
  return Ft(e), e.headers = K.from(e.headers), e.data = Tt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), nr.getAdapter(e.adapter || Zt.adapter)(e).then(function(r) {
    return Ft(e), r.data = Tt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = K.from(r.headers), r;
  }, function(r) {
    return Zi(r) || (Ft(e), r && r.response && (r.response.data = Tt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = K.from(r.response.headers))), Promise.reject(r);
  });
}
const sr = "1.11.0", bt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  bt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Fi = {};
bt.transitional = function(t, i, r) {
  function n(o, s) {
    return "[Axios v" + sr + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, h) => {
    if (t === !1)
      throw new F(
        n(s, " has been removed" + (i ? " in " + i : "")),
        F.ERR_DEPRECATED
      );
    return i && !Fi[s] && (Fi[s] = !0, console.warn(
      n(
        s,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), t ? t(o, s, h) : !0;
  };
};
bt.spelling = function(t) {
  return (i, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function as(e, t, i) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let n = r.length;
  for (; n-- > 0; ) {
    const o = r[n], s = t[o];
    if (s) {
      const h = e[o], d = h === void 0 || s(h, o, e);
      if (d !== !0)
        throw new F("option " + o + " must be " + d, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new F("Unknown option " + o, F.ERR_BAD_OPTION);
  }
}
const tt = {
  assertOptions: as,
  validators: bt
}, ee = tt.validators;
class ct {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new _i(),
      response: new _i()
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
  async request(t, i) {
    try {
      return await this._request(t, i);
    } catch (r) {
      if (r instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
        const o = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, i) {
    typeof t == "string" ? (i = i || {}, i.url = t) : i = t || {}, i = we(this.defaults, i);
    const { transitional: r, paramsSerializer: n, headers: o } = i;
    r !== void 0 && tt.assertOptions(r, {
      silentJSONParsing: ee.transitional(ee.boolean),
      forcedJSONParsing: ee.transitional(ee.boolean),
      clarifyTimeoutError: ee.transitional(ee.boolean)
    }, !1), n != null && (p.isFunction(n) ? i.paramsSerializer = {
      serialize: n
    } : tt.assertOptions(n, {
      encode: ee.function,
      serialize: ee.function
    }, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), tt.assertOptions(i, {
      baseUrl: ee.spelling("baseURL"),
      withXsrfToken: ee.spelling("withXSRFToken")
    }, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let s = o && p.merge(
      o.common,
      o[i.method]
    );
    o && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (S) => {
        delete o[S];
      }
    ), i.headers = K.concat(s, o);
    const h = [];
    let d = !0;
    this.interceptors.request.forEach(function(k) {
      typeof k.runWhen == "function" && k.runWhen(i) === !1 || (d = d && k.synchronous, h.unshift(k.fulfilled, k.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(k) {
      f.push(k.fulfilled, k.rejected);
    });
    let b, _ = 0, R;
    if (!d) {
      const S = [Ti.bind(this), void 0];
      for (S.unshift(...h), S.push(...f), R = S.length, b = Promise.resolve(i); _ < R; )
        b = b.then(S[_++], S[_++]);
      return b;
    }
    R = h.length;
    let P = i;
    for (_ = 0; _ < R; ) {
      const S = h[_++], k = h[_++];
      try {
        P = S(P);
      } catch (A) {
        k.call(this, A);
        break;
      }
    }
    try {
      b = Ti.call(this, P);
    } catch (S) {
      return Promise.reject(S);
    }
    for (_ = 0, R = f.length; _ < R; )
      b = b.then(f[_++], f[_++]);
    return b;
  }
  getUri(t) {
    t = we(this.defaults, t);
    const i = er(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Gi(i, t.params, t.paramsSerializer);
  }
}
p.forEach(["delete", "get", "head", "options"], function(t) {
  ct.prototype[t] = function(i, r) {
    return this.request(we(r || {}, {
      method: t,
      url: i,
      data: (r || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(t) {
  function i(r) {
    return function(o, s, h) {
      return this.request(we(h || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  ct.prototype[t] = i(), ct.prototype[t + "Form"] = i(!0);
});
const it = ct;
class Qt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(o) {
      i = o;
    });
    const r = this;
    this.promise.then((n) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](n);
      r._listeners = null;
    }), this.promise.then = (n) => {
      let o;
      const s = new Promise((h) => {
        r.subscribe(h), o = h;
      }).then(n);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, t(function(o, s, h) {
      r.reason || (r.reason = new Ce(o, s, h), i(r.reason));
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
    const i = this._listeners.indexOf(t);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), i = (r) => {
      t.abort(r);
    };
    return this.subscribe(i), t.signal.unsubscribe = () => this.unsubscribe(i), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Qt(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
}
const cs = Qt;
function ls(e) {
  return function(i) {
    return e.apply(null, i);
  };
}
function us(e) {
  return p.isObject(e) && e.isAxiosError === !0;
}
const zt = {
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
Object.entries(zt).forEach(([e, t]) => {
  zt[t] = e;
});
const hs = zt;
function or(e) {
  const t = new it(e), i = Ni(it.prototype.request, t);
  return p.extend(i, it.prototype, t, { allOwnKeys: !0 }), p.extend(i, t, null, { allOwnKeys: !0 }), i.create = function(n) {
    return or(we(e, n));
  }, i;
}
const U = or(Zt);
U.Axios = it;
U.CanceledError = Ce;
U.CancelToken = cs;
U.isCancel = Zi;
U.VERSION = sr;
U.toFormData = pt;
U.AxiosError = F;
U.Cancel = U.CanceledError;
U.all = function(t) {
  return Promise.all(t);
};
U.spread = ls;
U.isAxiosError = us;
U.mergeConfig = we;
U.AxiosHeaders = K;
U.formToJSON = (e) => Yi(p.isHTMLForm(e) ? new FormData(e) : e);
U.getAdapter = nr.getAdapter;
U.HttpStatusCode = hs;
U.default = U;
const fs = async () => {
  try {
    return (await U.get("https://api.ipify.org?format=json")).data.ip;
  } catch (e) {
    console.error("Error getting IP:", e);
  }
}, ds = () => Object.keys(window).find((e) => e.match(/^cdc_[a-zA-Z0-9]+_(Array|Promise|Symbol)$/)), ps = () => typeof window.__puppeteer_evaluation_script__ < "u" || typeof window.__pwPage < "u", ms = () => {
  try {
    return performance.getEntriesByType("mark").some((e) => e.name.startsWith("CDP"));
  } catch {
    return !1;
  }
}, ws = () => {
  try {
    return !!(window.chrome && window.chrome.debugger);
  } catch {
    return !1;
  }
}, bs = () => {
  try {
    const e = Function.prototype.toString.toString();
    if (!e.includes("[native code]") || e.length > 200 || !Function.prototype.toString.toString.toString.call(
      Function.prototype.toString.toString
    ).includes("[native code]"))
      return !0;
    const i = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
    return !!(i && (i.configurable === !1 || typeof i.value != "function"));
  } catch {
    return !0;
  }
}, gs = () => !window.performance || !window.performance.memory ? Promise.resolve(!1) : new Promise((e) => {
  const t = [], i = setInterval(() => {
    new Array(1e5).fill(0).map(() => Math.random());
  }, 100);
  let r = 0;
  const n = setInterval(() => {
    t.push(performance.memory.usedJSHeapSize), r++, r >= 6 && (clearInterval(i), clearInterval(n), e(t.every((o) => o === t[0])));
  }, 300);
}), ys = () => new Promise((e) => {
  const t = [];
  let i = performance.now(), r = 0;
  const n = setInterval(() => {
    const o = performance.now();
    if (t.push(o - i - 20), i = o, ++r >= 15) {
      clearInterval(n);
      const s = t.reduce((h, d) => h + d * d, 0) / t.length;
      e(s < 0.05);
    }
  }, 20);
}), vs = () => {
  try {
    const e = document.createElement("canvas"), t = e.getContext("webgl") || e.getContext("experimental-webgl");
    if (!t)
      return "";
    const i = t.getExtension("WEBGL_debug_renderer_info");
    return i && t.getParameter(i.UNMASKED_RENDERER_WEBGL) || "";
  } catch {
    return "";
  }
}, xs = () => {
  const e = navigator.userAgent;
  if (!/Android|iPhone|Mobile/.test(e))
    return !1;
  const i = navigator.maxTouchPoints === 0 && !("ontouchstart" in window), r = vs().toLowerCase(), n = /swiftshader|llvmpipe|mesa|virtualbox|vmware|software/.test(r), o = /adreno|mali|powervr|apple gpu/.test(r);
  return i || r !== "" && n && !o;
}, _s = async () => {
  const e = {};
  e.playwright = !!(navigator.userAgent.includes("Playwright") || window.__playwright || window.__playwright_evaluate || window.__pw_manual || window.__pwPage || document.__playwright), e.puppeteer = !!(window._phantom || window.__nightmare || window.domAutomation || window.domAutomationController || window.callPhantom || window.__puppeteer_evaluation_script__), e.webdriver = !!navigator.webdriver, e.cdp_cdc_property = !!ds(), e.cdp_binding = ps(), e.cdp_perf_marks = ms(), e.cdp_debugger_api = ws(), e.cdp_patched_tostring = bs();
  const t = navigator.userAgent;
  e.headless_ua = t.includes("HeadlessChrome") || t.includes("Headless"), e.no_plugins = navigator.plugins.length === 0, e.no_languages = !navigator.languages || navigator.languages.length === 0, e.permissions_inconsistent = !1;
  try {
    if (navigator.permissions && typeof navigator.permissions.query == "function") {
      const i = await navigator.permissions.query({ name: "notifications" });
      e.permissions_inconsistent = Notification.permission === "denied" && i.state === "prompt";
    }
  } catch {
    e.permissions_inconsistent = !1;
  }
  try {
    [e.heap_static, e.loop_jitter_static] = await Promise.all([
      gs(),
      ys()
    ]);
  } catch {
    e.heap_static = !1, e.loop_jitter_static = !1;
  }
  try {
    e.cloud_phone_suspect = xs();
  } catch {
    e.cloud_phone_suspect = !1;
  }
  return e;
}, Es = [
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
], Ss = (e) => Es.map((t) => e[t] ? "1" : "0").join(""), As = async (e = 3e3, t = 200) => new Promise((i) => {
  const r = Date.now(), n = setInterval(() => {
    (qt() || Date.now() - r > e) && (clearInterval(n), i(qt()));
  }, t);
});
function qt() {
  return document.cookie.includes("__bbst=") && document.cookie.includes("__bbts=");
}
function ze(e) {
  let t = e + "=", r = decodeURIComponent(document.cookie).split(";");
  for (let n = 0; n < r.length; n++) {
    let o = r[n];
    for (; o.charAt(0) == " "; )
      o = o.substring(1);
    if (o.indexOf(t) == 0)
      return o.substring(t.length, o.length);
  }
  return "";
}
function Ye(e, t, i = {}) {
  i = {
    path: "/",
    ...i
  };
  let r = encodeURIComponent(e) + "=" + encodeURIComponent(t);
  for (const n in i) {
    r += "; " + n;
    const o = i[n];
    o !== !0 && (r += "=" + o);
  }
  document.cookie = r;
}
function Rs(e) {
  Array.isArray(e) || (e = [e]);
  const t = "Thu, 01 Jan 1970 00:00:00 GMT";
  e.forEach((i) => {
    document.cookie = `${i}=; Path=/; Expires=${t}`, document.cookie = `${i}=; Path=/; Domain=${location.hostname}; Expires=${t}`;
  });
}
const Cs = "https://api.blockbots.org";
async function ks(e, t) {
  var i, r;
  try {
    return (await U.post(
      Cs + "/v1/js",
      e,
      {
        headers: {
          "X-API-Key": t,
          "Content-Type": "application/json"
        }
      }
    )).data;
  } catch (n) {
    return console.error("Request failed:", ((i = n.response) == null ? void 0 : i.data) || n.message), (r = n.response) == null ? void 0 : r.data;
  }
}
const Pt = async (e) => {
  let t = {};
  const i = ae(navigator.userAgent);
  t.os = i.os.name, t.ua = navigator.userAgent, t.fp = await gr(), t.bl_fp = await yr(), t.lang = navigator.language, t.s = Ss(await _s()), t.ip = await fs(), t.st = ze("__bbst"), t.ts = ze("__bbts"), console.log(t), await Pr();
  const r = await ks(t, e);
  return r && r.status === !0 && r.__bbst && r.__bbts && (Ye("__bbst", r.__bbst, { "Max-Age": 240, Secure: !0 }), Ye("__bbts", r.__bbts, { "Max-Age": 240, Secure: !0 }), Ye("__bbjwt", r.__bbjwt, { "Max-Age": 240, Secure: !0 })), r && r.status === "forbidden" && Ye("__bb_decision", "1", { "Max-Age": 240, Secure: !0 }), r;
};
async function Os(e) {
  return new Promise((t) => setTimeout(t, e));
}
const Ts = "https://api.blockbots.org";
async function Fs() {
  try {
    const e = ze("__bbst"), t = ze("__bbts");
    if (!e || !t)
      return !1;
    const i = new URLSearchParams({
      st: e,
      ts: t
    });
    return (await U.get(Ts + "/validate?" + i.toString())).status === 200;
  } catch {
    return Rs(["__bbst", "__bbts"]), !1;
  }
}
function Ps(e, t) {
  return t = { exports: {} }, e(t, t.exports), t.exports;
}
var le = Ps(function(e, t) {
  (function(i) {
    var r = "function", n = "isNode", o = function(d, f) {
      return typeof d === f;
    }, s = function(d, f) {
      f !== null && (Array.isArray(f) ? f.map(function(b) {
        return s(d, b);
      }) : (h[n](f) || (f = document.createTextNode(f)), d.appendChild(f)));
    };
    function h(d, f) {
      var b = arguments, _ = 1, R, P;
      if (d = h.isElement(d) ? d : document.createElement(d), o(f, "object") && !h[n](f) && !Array.isArray(f)) {
        _++;
        for (R in f)
          P = f[R], R = h.attrMap[R] || R, o(R, r) ? R(d, P) : o(P, r) ? d[R] = P : d.setAttribute(R, P);
      }
      for (; _ < b.length; _++)
        s(d, b[_]);
      return d;
    }
    h.attrMap = {}, h.isElement = function(d) {
      return d instanceof Element;
    }, h[n] = function(d) {
      return d instanceof Node;
    }, typeof Proxy < "u" && (h.proxy = new Proxy(h, {
      get: function(d, f) {
        return !(f in h) && (h[f] = h.bind(null, f)), h[f];
      }
    })), i(h, r);
  })(function(i, r) {
    e.exports = i;
  });
});
let Wt = !1;
function ar() {
  if (Wt)
    return;
  Wt = !0, document.body.innerHTML = `
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
function cr() {
  const e = document.getElementById("loader-status"), t = document.getElementById("loader");
  t && t.remove(), e && (e.textContent = "Access blocked. Automated traffic detected.", e.style.color = "#e5533d", e.style.fontWeight = "600");
}
function Bs() {
  document.body.innerHTML = "", Wt = !1;
}
const Ne = {
  bgSize: {
    width: 320,
    height: 160
  },
  puzzleSize: {
    width: 60,
    left: 0
  }
};
class Is {
  constructor(t = { root: null }) {
    this.solved = !1, this._dpr = window.devicePixelRatio || 1, this.opt = Object.assign({
      root: null,
      width: 320,
      height: 160,
      pieceSize: 44,
      tolerance: 6,
      imageUrl: null,
      fit: "cover",
      crossOrigin: null,
      theme: "light",
      onSuccess: () => {
      },
      onFail: () => {
      },
      onRefresh: () => {
      }
    }, t), this.root = typeof this.opt.root == "string" ? document.querySelector(this.opt.root) : this.opt.root, this.stage = document.createElement("div"), this.stage.className = "slider-captcha-stage";
    const i = typeof this.opt.width == "number" ? this.opt.width + "px" : this.opt.width;
    this.stage.style.width = i, this.stage.style.height = this.opt.height + "px", this.root.appendChild(this.stage), this.bgImgEl = document.createElement("img"), this.bgImgEl.style.position = "absolute", this.bgImgEl.style.width = "100%", this.bgImgEl.style.height = "100%", this.bgImgEl.style.objectFit = "cover", this.pieceImgEl = document.createElement("img"), this.pieceImgEl.style.position = "absolute", this.pieceImgEl.style.width = "44px", this.pieceImgEl.style.cursor = "grab", this.bgCanvas = document.createElement("canvas"), this.cutCanvas = document.createElement("canvas"), this.pieceCanvas = document.createElement("canvas"), this.pieceCanvas.style.cursor = "grab", this.bar = document.createElement("div"), this.bar.className = "slider-captcha-bar", this.track = document.createElement("div"), this.track.className = "slider-captcha-track", this.fill = document.createElement("div"), this.fill.className = "slider-captcha-fill", this.track.appendChild(this.fill), this.thumb = document.createElement("div"), this.thumb.className = "slider-captcha-thumb", this.thumb.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5l8 7-8 7"/></svg>', this.thumb.style.cursor = "grab", this.status = document.createElement("div"), this.status.className = "slider-captcha-status", this.status.innerText = "Slide to verify", this.bar.append(this.track, this.thumb, this.status), this.bar.style.width = i, this.root.appendChild(this.bar), this.root.classList.remove("slider-captcha-light", "slider-captcha-dark"), this.root.classList.add(this.opt.theme === "dark" ? "slider-captcha-dark" : "slider-captcha-light"), this._bindDrag(), this.numericWidth = typeof this.opt.width == "number" ? this.opt.width : this.stage.offsetWidth || 320, this.numericHeight = typeof this.opt.height == "number" ? this.opt.height : this.stage.offsetHeight || 160, [this.bgCanvas, this.cutCanvas, this.pieceCanvas].forEach((r) => {
      var n;
      r.width = this.numericWidth * this._dpr, r.height = this.numericHeight * this._dpr, r.style.width = i, r.style.height = this.numericHeight + "px", (n = r.getContext("2d")) === null || n === void 0 || n.setTransform(this._dpr, 0, 0, this._dpr, 0, 0);
    }), this.loadingBox = document.createElement("div"), this.loadingBox.className = "slider-captcha-loading", this.loadingBox.appendChild(document.createElement("div")).className = "spinner", this.stage.style.position = "relative", this.stage.appendChild(this.loadingBox), this._showLoading(!1), this.refreshBtn = document.createElement("div"), this.refreshBtn.className = "slider-captcha-refresh", this.refreshBtn.innerHTML = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#333"><path d="M866.133333 573.013333a42.666667 42.666667 0 0 0-53.333333 27.733334A304.64 304.64 0 0 1 519.68 810.666667 302.933333 302.933333 0 0 1 213.333333 512a302.933333 302.933333 0 0 1 306.346667-298.666667 309.76 309.76 0 0 1 198.4 71.253334l-92.586667-15.36a42.666667 42.666667 0 0 0-49.066666 35.413333 42.666667 42.666667 0 0 0 35.413333 49.066667l180.906667 29.866666h7.253333a42.666667 42.666667 0 0 0 14.506667-2.56 14.08 14.08 0 0 0 4.266666-2.56 33.28 33.28 0 0 0 8.533334-4.693333l3.84-4.693333c0-2.133333 3.84-3.84 5.546666-6.4s0-4.266667 2.133334-5.973334a57.173333 57.173333 0 0 0 2.986666-7.68l32-170.666666a42.666667 42.666667 0 0 0-85.333333-16.213334l-11.52 61.866667A392.96 392.96 0 0 0 519.68 128 388.266667 388.266667 0 0 0 128 512a388.266667 388.266667 0 0 0 391.68 384A389.12 389.12 0 0 0 896 626.346667a42.666667 42.666667 0 0 0-29.866667-53.333334z"/></svg>', this.refreshBtn.style.cssText = `
      position:absolute;top:8px;right:8px;cursor:pointer;
      background:#fff;border:1px solid #ddd;border-radius:50%;padding:4px;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 2px 6px rgba(0,0,0,0.15);
      transition:background 0.2s;
      color:#333;
      z-index:20;
    `, this.refreshBtn.onmouseover = () => {
      this.refreshBtn.style.background = "#f0f0f0";
    }, this.refreshBtn.onmouseout = () => {
      this.refreshBtn.style.background = "#fff";
    }, this.stage.appendChild(this.refreshBtn), this.refreshBtn.addEventListener("click", () => this.refresh()), this._seed(), this.refresh();
  }
  _showLoading(t) {
    this.loadingBox && (this.loadingBox.style.display = t ? "flex" : "none"), this.cutCanvas && this.pieceCanvas && (this.cutCanvas.style.visibility = t ? "hidden" : "visible", this.pieceCanvas.style.visibility = t ? "hidden" : "visible");
  }
  _seed() {
    const t = this.opt.pieceSize || 44, i = 8;
    this.targetX = Math.floor(Math.random() * (this.numericWidth - t - i) + i), this.targetY = Math.floor(Math.random() * (this.numericHeight - t - i) + i);
  }
  async refresh() {
    var t, i;
    this.solved = !1;
    try {
      this.numericWidth = typeof this.opt.width == "number" ? this.opt.width : this.stage.offsetWidth || 320, this.numericHeight = typeof this.opt.height == "number" ? this.opt.height : this.stage.offsetHeight || 160, this._seed(), await this._drawBackground(), (!this.bgImgEl.src || !this.pieceImgEl.src) && (this._prepareCutout(), this._drawPiece(0)), this.fill.style.width = "0px", this.thumb.style.transform = "translateX(0px)", this.status && (this.status.innerText = "Slide to verify", this.status.className = "slider-captcha-status"), (i = (t = this.opt).onRefresh) === null || i === void 0 || i.call(t), this._resetPosition();
    } catch (r) {
      console.error("SliderCaptcha refresh failed:", r);
    }
  }
  async _drawBackground() {
    const t = this.bgCanvas.getContext("2d");
    t.clearRect(0, 0, this.numericWidth, this.numericHeight), this._showLoading(!0);
    try {
      if (this.opt.request) {
        const { bgUrl: i, puzzleUrl: r } = await this.opt.request();
        this.bgImgEl && this.pieceImgEl && (this.bgImgEl.src = i, this.bgImgEl.style.width = Ne.bgSize.width + "px", this.bgImgEl.style.height = Ne.bgSize.height + "px", this.pieceImgEl.src = r, this.pieceImgEl.style.width = Ne.puzzleSize.width + "px", this.pieceImgEl.style.left = Ne.puzzleSize.left + "px"), this._puzzleImage = void 0, this.stage.appendChild(this.bgImgEl), this.stage.appendChild(this.pieceImgEl);
      } else {
        this.bgCanvas.parentNode || (this.stage.append(this.bgCanvas, this.cutCanvas, this.pieceCanvas), this.bgCanvas.style.position = "absolute", this.bgCanvas.style.top = "0", this.bgCanvas.style.left = "0", this.cutCanvas.style.position = "absolute", this.cutCanvas.style.top = "0", this.cutCanvas.style.left = "0", this.cutCanvas.style.zIndex = "5", this.pieceCanvas.style.position = "absolute", this.pieceCanvas.style.top = "0", this.pieceCanvas.style.left = "0", this.pieceCanvas.style.zIndex = "10");
        let i = this.opt.imageUrl;
        if (!i) {
          const n = typeof this.opt.width == "number" ? this.opt.width : this.root.offsetWidth || 320, o = typeof this.opt.height == "number" ? this.opt.height : this.root.offsetHeight || 160;
          i = `https://picsum.photos/${n}/${o}?random=${Date.now()}`, this.opt.crossOrigin = "anonymous";
        }
        const r = await this._loadImage(i, this.opt.crossOrigin || void 0);
        this._drawImageFit(t, r, this.numericWidth, this.numericHeight, this.opt.fit);
      }
    } catch (i) {
      console.warn("Image load failed, fallback to gradient:", i), this._drawGradient(t);
    }
    this._showLoading(!1);
  }
  _drawGradient(t) {
    const i = t.createLinearGradient(0, 0, this.numericWidth, this.numericHeight);
    i.addColorStop(0, "#0b1020"), i.addColorStop(1, "#131c34"), t.fillStyle = i, t.fillRect(0, 0, this.numericWidth, this.numericHeight);
  }
  _drawImageFit(t, i, r, n, o = "cover") {
    const s = i.naturalWidth || i.width, h = i.naturalHeight || i.height;
    if (!s || !h || !r || !n)
      return;
    if (o === "stretch") {
      t.drawImage(i, 0, 0, r, n);
      return;
    }
    const d = o === "cover" ? Math.max(r / s, n / h) : Math.min(r / s, n / h), f = s * d, b = h * d, _ = (r - f) / 2, R = (n - b) / 2;
    t.drawImage(i, _, R, f, b);
  }
  _prepareCutout() {
    const t = this.opt.pieceSize || 44, i = this.targetX, r = this.targetY, n = 8, o = new Path2D();
    o.moveTo(i + n, r), o.lineTo(i + t / 3, r), o.arc(i + t / 2, r, t / 6, Math.PI, 0, !0), o.lineTo(i + t - n, r), o.arcTo(i + t, r, i + t, r + n, n), o.lineTo(i + t, r + t / 3), o.arc(i + t, r + t / 2, t / 6, -Math.PI / 2, Math.PI / 2, !1), o.lineTo(i + t, r + t - n), o.arcTo(i + t, r + t, i + t - n, r + t, n), o.lineTo(i + 2 * t / 3, r + t), o.arc(i + t / 2, r + t, t / 6, 0, Math.PI, !0), o.lineTo(i + n, r + t), o.arcTo(i, r + t, i, r + t - n, n), o.lineTo(i, r + 2 * t / 3), o.arc(i, r + t / 2, t / 6, Math.PI / 2, -Math.PI / 2, !0), o.lineTo(i, r + n), o.arcTo(i, r, i + n, r, n), o.closePath(), this._piecePath = o;
    const s = this.cutCanvas.getContext("2d"), h = this.cutCanvas.width / this._dpr, d = this.cutCanvas.height / this._dpr;
    s.clearRect(0, 0, h, d), s.save(), s.fillStyle = "rgba(0,0,0,.45)", s.fillRect(0, 0, h, d), s.globalCompositeOperation = "destination-out", s.lineJoin = "round", s.lineCap = "round", s.lineWidth = 2, s.stroke(o), s.fill(o), s.restore(), s.save(), s.globalCompositeOperation = "source-over", s.fillStyle = "rgba(255,255,255,0.45)", s.fill(o), s.restore(), s.save(), s.globalCompositeOperation = "source-over", s.strokeStyle = "rgba(0,0,0,0.25)", s.lineWidth = 3, s.shadowColor = "rgba(0,0,0,0.4)", s.shadowBlur = 4, s.stroke(o), s.restore(), s.save(), s.strokeStyle = "#fff", s.lineWidth = 2, s.shadowColor = "rgba(0,0,0,0.3)", s.shadowBlur = 2, s.lineJoin = "round", s.lineCap = "round", s.stroke(o), s.restore();
  }
  _drawPiece(t) {
    if (!this._piecePath)
      return;
    const i = this.pieceCanvas.getContext("2d");
    i.clearRect(0, 0, this.numericWidth, this.numericHeight), i.save(), i.clip(this._piecePath), i.drawImage(this.bgCanvas, 0, 0), i.restore(), i.save(), i.strokeStyle = "#fff", i.lineWidth = 1.5, i.shadowColor = "rgba(0,0,0,0.3)", i.shadowBlur = 2, i.stroke(this._piecePath), i.restore(), this.pieceCanvas.style.transform = `translateX(${t - this.targetX}px)`;
  }
  async _check() {
    var t, i, r, n;
    const o = (parseFloat(this.fill.style.width) || 0) - this.thumb.offsetWidth;
    if (this.opt.request && this.opt.onVerify) {
      try {
        await this.opt.onVerify({
          duration: Date.now() - (this._startTime || Date.now()),
          trail: this._trail || [],
          targetType: this._targetType,
          x: o
        }), this.solved = !0, this.status.innerText = this.opt.successText || "✅ Verified!", this.status.className = "slider-captcha-status ok", (i = (t = this.opt).onSuccess) === null || i === void 0 || i.call(t);
      } catch {
        this._fail();
      }
      return;
    }
    let s = !1;
    if (this.opt.onVerify)
      try {
        await this.opt.onVerify({
          duration: Date.now() - (this._startTime || Date.now()),
          trail: this._trail || [],
          targetType: this._targetType,
          x: o
        }), s = !0;
      } catch {
        this._fail();
      }
    else
      s = Math.abs(o - this.targetX) <= (this.opt.tolerance || 6);
    s ? (this.solved = !0, this.status.innerText = this.opt.successText || "✅ Verified!", this.status.className = "slider-captcha-status ok", (n = (r = this.opt).onSuccess) === null || n === void 0 || n.call(r)) : this._fail();
  }
  _resetPosition() {
    this.fill.style.width = "0px", this.thumb.style.transform = "translateX(0px)", !this.bgImgEl.src || !this.pieceImgEl.src ? this._drawPiece(0) : (this.pieceImgEl.style.left = Ne.puzzleSize.left + "px", this.pieceImgEl.style.transform = "translateX(0px)");
  }
  _fail() {
    if (this._errorCount = (this._errorCount || 0) + 1, this.status.innerText = this.opt.failText || "❌ Try again!", this.status.className = "slider-captcha-status err shake", this._resetPosition(), this._errorCount >= 3) {
      this.refresh(), this._errorCount = 0;
      return;
    }
  }
  _bindDrag() {
    let t = !1, i = 0, r = 0;
    const n = (h) => {
      this.solved || (t = !0, "touches" in h ? (i = h.touches[0].clientX, this._startY = h.touches[0].clientY) : (i = h.clientX, this._startY = h.clientY), r = parseFloat(getComputedStyle(this.fill).width) || 0, h.cancelable && h.preventDefault(), this._startTime = Date.now(), this._trail = [], this._targetType = "button", this._deltaY = 0, this.thumb.style.cursor = "grabbing", this.pieceCanvas.style.cursor = "grabbing", this.pieceImgEl.style.cursor = "grabbing");
    }, o = (h) => {
      var d;
      if (!t)
        return;
      let f, b;
      "touches" in h ? (f = h.touches[0].clientX, b = h.touches[0].clientY) : (f = h.clientX, b = h.clientY);
      const _ = typeof this.opt.width == "number" ? this.opt.width : this.stage.offsetWidth || 320, R = Math.max(0, Math.min(_ - 44, r + (f - i)));
      this.fill.style.width = R + this.thumb.offsetWidth + "px", this.thumb.style.transform = `translateX(${R}px)`, !this.bgImgEl.src || !this.pieceImgEl.src ? this._drawPiece(R) : this.pieceImgEl.style.transform = `translateX(${R}px)`, this._deltaY = b - (this._startY || 0), (d = this._trail) === null || d === void 0 || d.push([f, b]);
    }, s = () => {
      t && (t = !1, this._check(), this.thumb.style.cursor = "grab", this.pieceCanvas.style.cursor = "grab", this.pieceImgEl.style.cursor = "grab");
    };
    this.thumb.addEventListener("mousedown", n), this.thumb.addEventListener("touchstart", n, { passive: !1 }), this.pieceCanvas.addEventListener("mousedown", n), this.pieceCanvas.addEventListener("touchstart", n, { passive: !1 }), this.pieceImgEl.addEventListener("mousedown", n), this.pieceImgEl.addEventListener("touchstart", n, { passive: !1 }), window.addEventListener("mousemove", o, { passive: !1 }), window.addEventListener("touchmove", o, { passive: !1 }), window.addEventListener("mouseup", s), window.addEventListener("touchend", s);
  }
  _loadImage(t, i) {
    return new Promise((r, n) => {
      const o = new Image();
      i && (o.crossOrigin = i), o.onload = () => r(o), o.onerror = n, o.src = t;
    });
  }
  destroy() {
    this.root && this.stage && (this.root.removeChild(this.stage), this.root.removeChild(this.bar));
  }
}
function Ls() {
  return new Promise((e) => {
    const t = document.querySelector(".main-content");
    if (!t)
      return e();
    const i = document.createElement("div");
    i.id = "bb-slider-captcha", i.style.margin = "2rem 0", t.appendChild(i);
    const r = new Is({
      root: i,
      width: 320,
      height: 160,
      onSuccess: () => {
        setTimeout(() => {
          i.remove(), e();
        }, 600);
      },
      onFail: () => {
        r.refresh();
      }
    });
  });
}
async function Ms({ apiKey: e, retries: t, delay: i, ui: r }) {
  r && ar();
  for (let n = 0; n < t && !ze("__bb_decision"); n++) {
    if (!qt()) {
      const o = await Pt(e);
      if (o && o.status === !1 && (await Ls(), await Pt(e)), !await As())
        continue;
    }
    if (await Fs())
      return r && Bs(), !0;
    await Pt(e), await Os(i);
  }
  return r && cr(), !1;
}
class Ns {
  constructor({
    apiKey: t,
    retries: i = 3,
    delay: r = 1e3,
    ui: n = !0
  }) {
    if (!t)
      throw new Error("BlockBots: apiKey is required");
    this.apiKey = t, this.retries = i, this.delay = r, this.ui = !0, this.hooks = lr();
  }
  /*static showLoader() {
      showLoader();
  }*/
  static setLoaderBlocked() {
    ar(), cr();
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
      return await Ms({
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
  Ns as BlockBots
};
