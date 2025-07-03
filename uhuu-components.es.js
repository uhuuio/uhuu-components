(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@media screen{.uhuu-bleed-visible .pagedjs_pagebox{outline-style:solid;outline-style:dashed;outline-color:var(--uhuu-outline-color)}.pagedjs_page{position:relative;margin-left:auto;margin-right:auto;margin-bottom:1.5rem;overflow:hidden;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));outline-style:solid;outline-color:var(--uhuu-outline-color)}.horizontal_pages .pagedjs_pages{display:flex;min-width:-moz-fit-content!important;min-width:fit-content!important;justify-content:center;gap:1.5rem;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important}.two_pages{display:flex;justify-content:center}.two_pages .pagedjs_left_page{float:left}.two_pages .pagedjs_right_page,.two_pages .pagedjs_first_page{margin-left:var(--pagedjs-width)}}@media screen{:not(.skip-data-uhuu) [data-uhuu]{position:relative}:not(.skip-data-uhuu) [data-uhuu]:before{content:" ";position:absolute;top:0;left:0;z-index:10;margin-left:.25rem;margin-top:.25rem;height:1rem;width:1rem;border-top-left-radius:9999px;border-top-right-radius:9999px;border-bottom-right-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(255 68 204 / var(--tw-bg-opacity, 1));opacity:.2;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:not(.skip-data-uhuu) [data-uhuu]:after{content:" "}:not(.skip-data-uhuu) [data-uhuu]:hover:after{position:absolute;inset:0;z-index:10;cursor:pointer;outline-style:dashed;outline-width:2px;outline-offset:-1px;outline-color:#f4c}:not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:dashed;outline-width:2px;outline-offset:-1px;outline-color:#f4c}}:root{--uhuu-page-width: 210mm;--uhuu-page-height: 297mm;--uhuu-page-bleed: 0mm;--uhuu-page-background: var(--background, #fff);--uhuu-outline-color: var(--outline-color, #d1d5db)}@page{size:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed)) calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));margin:0}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;text-rendering:geometricPrecision}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));position:relative;margin-left:auto;margin-right:auto;min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));overflow:hidden;padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background)}@media screen{.uhuu-bleed-area{position:absolute;top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);outline-style:solid;outline-style:dashed;outline-color:var(--uhuu-outline-color)}.uhuu-page-sheet{margin-bottom:1.5rem;flex-shrink:0;outline-style:solid;outline-color:var(--uhuu-outline-color)}.horizontal_pages{display:flex;min-width:-moz-fit-content!important;min-width:fit-content!important;justify-content:center;gap:1.5rem;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important}.two_pages{display:flex;flex-wrap:wrap;justify-content:center;width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));margin:0 auto}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}.two_pages .pagedjs_left_page{float:left}}.uhuu-image-container{position:absolute;overflow:hidden}.uhuu-image-inner{position:relative;height:100%;width:100%;overflow:hidden}.uhuu-image-inner .cover-vertical{position:absolute;height:100%;max-height:none!important;width:auto;max-width:none!important;left:50%;transform:translate(-50%)}.uhuu-image-inner .cover-horizontal{position:absolute;height:auto;max-height:none!important;width:100%;max-width:none!important;top:50%;transform:translateY(-50%)}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { jsx as V, jsxs as Ua, Fragment as sd } from "react/jsx-runtime";
import { createContext as od, useState as nr, useRef as dt, useEffect as Js, forwardRef as eo, useContext as ir, useImperativeHandle as ld, useCallback as dd } from "react";
function kr(t) {
  if (!t)
    return;
  let e;
  if (typeof t.getBoundingClientRect < "u")
    e = t.getBoundingClientRect();
  else {
    let r = document.createRange();
    r.selectNode(t), e = r.getBoundingClientRect();
  }
  return e;
}
function pd(t) {
  if (!t)
    return;
  let e;
  if (typeof t.getClientRects < "u")
    e = t.getClientRects();
  else {
    let r = document.createRange();
    r.selectNode(t), e = r.getClientRects();
  }
  return e;
}
function ue() {
  var t = (/* @__PURE__ */ new Date()).getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (t += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    var r = (t + Math.random() * 16) % 16 | 0;
    return t = Math.floor(t / 16), (e === "x" ? r : r & 3 | 8).toString(16);
  });
}
function to(t, e) {
  for (var r = 0; r < e.length; r++)
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}
function ro(t) {
  if (arguments.length == 0)
    throw new TypeError("`CSS.escape` requires an argument.");
  for (var e = String(t), r = e.length, a = -1, n, i = "", s = e.charCodeAt(0); ++a < r; ) {
    if (n = e.charCodeAt(a), n == 0) {
      i += "�";
      continue;
    }
    if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
      n >= 1 && n <= 31 || n == 127 || // If the character is the first character and is in the range [0-9]
      // (U+0030 to U+0039), […]
      a == 0 && n >= 48 && n <= 57 || // If the character is the second character and is in the range [0-9]
      // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
      a == 1 && n >= 48 && n <= 57 && s == 45
    ) {
      i += "\\" + n.toString(16) + " ";
      continue;
    }
    if (
      // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      a == 0 && r == 1 && n == 45
    ) {
      i += "\\" + e.charAt(a);
      continue;
    }
    if (n == 46 && e.charAt(0) == "#") {
      i += "\\.";
      continue;
    }
    if (n >= 128 || n == 45 || n == 95 || n == 35 || // Allow #
    n == 46 || // Allow .
    n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
      i += e.charAt(a);
      continue;
    }
    i += "\\" + e.charAt(a);
  }
  return i;
}
function Tr() {
  this.resolve = null, this.reject = null, this.id = ue(), this.promise = new Promise((t, e) => {
    this.resolve = t, this.reject = e;
  }), Object.freeze(this);
}
const cd = typeof window < "u" && ("requestIdleCallback" in window ? window.requestIdleCallback : window.requestAnimationFrame);
function _(t) {
  return t.value + (t.unit || "");
}
function Y(t) {
  return t && t.nodeType === 1;
}
function be(t) {
  return t && t.nodeType === 3;
}
function* _t(t, e) {
  let r = t;
  for (; r; )
    if (yield r, r.childNodes.length)
      r = r.firstChild;
    else if (r.nextSibling) {
      if (e && r === e) {
        r = void 0;
        break;
      }
      r = r.nextSibling;
    } else
      for (; r; ) {
        if (r = r.parentNode, e && r === e) {
          r = void 0;
          break;
        }
        if (r && r.nextSibling) {
          r = r.nextSibling;
          break;
        }
      }
}
function Te(t, e) {
  if (e && t === e)
    return;
  let r = _a(t);
  if (r)
    return r;
  if (t.parentNode)
    for (; t = t.parentNode; ) {
      if (e && t === e)
        return;
      if (r = _a(t), r)
        return r;
    }
}
function Ut(t, e) {
  if (e && t === e)
    return;
  let r = Ea(t);
  if (r)
    return r;
  if (t.parentNode)
    for (; t = t.parentNode; ) {
      if (e && t === e)
        return;
      if (r = Ea(t), r)
        return r;
    }
}
function Ln(t, e) {
  let r = Te(t, e);
  for (; r && r.nodeType !== 1; )
    r = Te(r, e);
  return r;
}
function Wn(t, e) {
  let r = Ut(t, e);
  for (; r && r.nodeType !== 1; )
    r = Ut(r, e);
  return r;
}
function Pn(t, e) {
  let r = Ln(t, e);
  for (; r && r.dataset.undisplayed; )
    r = Ln(r, e);
  return r;
}
function ud(t, e) {
  let r = Wn(t, e);
  for (; r && r.dataset.undisplayed; )
    r = Wn(r, e);
  return r;
}
function ao(t) {
  let e, r, a = [], n = [], i = document.createDocumentFragment();
  if (t.nodeName === "TR") {
    let l = t.previousElementSibling, p = 1;
    for (; l; ) {
      if (l.childElementCount > t.childElementCount) {
        const c = Array.from(t.children);
        for (; t.firstChild; )
          t.firstChild.remove();
        let m = 0;
        for (let d = 0; d < l.children.length; d++) {
          let u = l.children[d];
          if (u.rowSpan && u.rowSpan > p) {
            const g = u.cloneNode(!0);
            g.rowSpan = u.rowSpan - p, t.appendChild(g);
          } else {
            const g = c[m++];
            g && t.appendChild(g);
          }
        }
      }
      l = l.previousElementSibling, p++;
    }
  }
  let s = t;
  for (; s.parentNode && s.parentNode.nodeType === 1; )
    a.unshift(s.parentNode), s = s.parentNode;
  for (var o = 0; o < a.length; o++) {
    if (r = a[o], e = r.cloneNode(!1), e.setAttribute("data-split-from", e.getAttribute("data-ref")), e.hasAttribute("id")) {
      let l = e.getAttribute("id");
      e.setAttribute("data-id", l), e.removeAttribute("id");
    }
    if (e.hasAttribute("data-break-before") && e.removeAttribute("data-break-before"), e.hasAttribute("data-previous-break-after") && e.removeAttribute("data-previous-break-after"), n.length ? n[n.length - 1].appendChild(e) : i.appendChild(e), n.push(e), e.nodeName === "TD" && r.parentElement.contains(r)) {
      let l = r, p = e;
      for (; l = l.previousElementSibling; ) {
        let c = l.cloneNode(!1);
        e.parentElement.insertBefore(c, p), p = c;
      }
    }
  }
  return n = void 0, i;
}
function Er(t) {
  return typeof t < "u" && typeof t.dataset < "u" && typeof t.dataset.breakBefore < "u" && (t.dataset.breakBefore === "always" || t.dataset.breakBefore === "page" || t.dataset.breakBefore === "left" || t.dataset.breakBefore === "right" || t.dataset.breakBefore === "recto" || t.dataset.breakBefore === "verso");
}
function md(t) {
  return typeof t < "u" && typeof t.dataset < "u" && typeof t.dataset.previousBreakAfter < "u" && (t.dataset.previousBreakAfter === "always" || t.dataset.previousBreakAfter === "page" || t.dataset.previousBreakAfter === "left" || t.dataset.previousBreakAfter === "right" || t.dataset.previousBreakAfter === "recto" || t.dataset.previousBreakAfter === "verso");
}
function no(t, e) {
  if (typeof t > "u" || !e || sr(t) || t.dataset && t.dataset.undisplayed)
    return !1;
  let r = e.dataset ? e.dataset.page : void 0;
  if (typeof r > "u") {
    const n = Bn(e);
    n && (r = n.dataset.page);
  }
  let a = t.dataset ? t.dataset.page : void 0;
  if (typeof a > "u") {
    const n = Bn(t, e);
    n && (a = n.dataset.page);
  }
  return a !== r;
}
function* hd(t) {
  let e = t.nodeValue, r = e.length, a = 0, n, i;
  const s = t.parentElement && t.parentElement.nodeName === "PRE";
  for (; a < r; )
    n = e[a], /^[\S\u202F\u00A0]$/.test(n) || s ? i || (i = document.createRange(), i.setStart(t, a)) : i && (i.setEnd(t, a), yield i, i = void 0), a += 1;
  i && (i.setEnd(t, a), yield i);
}
function* gd(t) {
  let e = t.startContainer, r = e.length, a = t.startOffset, n;
  for (; a < r; )
    n = document.createRange(), n.setStart(e, a), n.setEnd(e, a + 1), yield n, a += 1;
}
function io(t) {
  let e;
  if (typeof t.tagName > "u")
    return !0;
  if (t.style && t.style.display === "none")
    return !1;
  switch (t.tagName) {
    case "A":
    case "ABBR":
    case "ACRONYM":
    case "B":
    case "BDO":
    case "BIG":
    case "BR":
    case "BUTTON":
    case "CITE":
    case "CODE":
    case "DFN":
    case "EM":
    case "I":
    case "IMG":
    case "INPUT":
    case "KBD":
    case "LABEL":
    case "MAP":
    case "OBJECT":
    case "Q":
    case "SAMP":
    case "SCRIPT":
    case "SELECT":
    case "SMALL":
    case "SPAN":
    case "STRONG":
    case "SUB":
    case "SUP":
    case "TEXTAREA":
    case "TIME":
    case "TT":
    case "VAR":
    case "P":
    case "H1":
    case "H2":
    case "H3":
    case "H4":
    case "H5":
    case "H6":
    case "FIGCAPTION":
    case "BLOCKQUOTE":
    case "PRE":
    case "LI":
    case "TD":
    case "DT":
    case "DD":
    case "VIDEO":
    case "CANVAS":
      e = !1;
      break;
    default:
      e = !0;
  }
  return e;
}
function fd(t, e = !1) {
  return t.cloneNode(e);
}
function F(t, e, r) {
  const a = t.getAttribute("data-ref");
  return yd(a, e, r);
}
function yd(t, e, r) {
  return !r && e.indexOfRefs && e.indexOfRefs[t] ? e.indexOfRefs[t] : e.querySelector(`[data-ref='${t}']`);
}
function Ta(t) {
  return !!(be(t) || Y(t) && t.dataset.ref);
}
function At(t) {
  for (; !Ta(t) && (t.previousSibling ? t = t.previousSibling : t = t.parentNode, !!t); )
    ;
  return t;
}
function vd(t) {
  let e = t.parentNode;
  return e ? Array.prototype.indexOf.call(e.childNodes, t) : 0;
}
function _r(t, e) {
  return t.childNodes[e];
}
function bd(t) {
  return Y(t) ? !0 : !!(be(t) && t.textContent.trim().length);
}
function In(t, e) {
  if (!be(t))
    return -1;
  let r = t.textContent, a, n = -1;
  for (var i = 0; i < e.childNodes.length; i++)
    if (a = e.childNodes[i], a.nodeType === 3 && e.childNodes[i].textContent.includes(r)) {
      n = i;
      break;
    }
  return n;
}
function sr(t) {
  return t.nodeType === 8 || // A comment node
  t.nodeType === 3 && Sd(t);
}
function Sd(t) {
  return !/[^\t\n\r ]/.test(t.textContent);
}
function Ea(t) {
  for (; t = t.previousSibling; )
    if (!sr(t)) return t;
  return null;
}
function Bn(t, e) {
  if (t && t.dataset && t.dataset.page)
    return t;
  if (t.parentNode)
    for (; t = t.parentNode; ) {
      if (e && t === e)
        return;
      if (t.dataset && t.dataset.page)
        return t;
    }
  return null;
}
function xd(t) {
  for (; t = t.parentNode; )
    if (t && t.dataset && t.dataset.breakInside === "avoid")
      return t;
  return null;
}
function Ar(t, e, r) {
  if (!(r && t === r) && t.parentNode)
    for (; t = t.parentNode; ) {
      if (r && t === r)
        return;
      if (t.nodeName === e)
        return t;
    }
}
function _a(t) {
  for (; t = t.nextSibling; )
    if (!sr(t)) return t;
  return null;
}
function so(t, e, r) {
  const a = document.createTreeWalker(
    t || this.dom,
    r || NodeFilter.SHOW_ALL,
    e ? { acceptNode: e } : null,
    !1
  );
  let n, i;
  for (n = a.nextNode(); n; )
    i = n, n = a.nextNode(), i.parentNode.removeChild(i);
}
class Ze {
  constructor(e, r) {
    this.node = e, this.offset = r;
  }
  equals(e) {
    return !(!e || this.node && e.node && this.node !== e.node || this.offset && e.offset && this.offset !== e.offset);
  }
  toJSON(e) {
    let r, a = 0;
    return this.node ? (Y(this.node) && this.node.dataset.ref ? r = this.node.dataset.ref : e && (r = this.node.parentElement.dataset.ref), this.node.parentElement && (a = Array.from(this.node.parentElement.childNodes).indexOf(this.node)), JSON.stringify({
      node: r,
      index: a,
      offset: this.offset
    })) : {};
  }
}
class Qe {
  constructor(e, r) {
    this.breakToken = e, this.error = r;
  }
}
class qt extends Error {
  constructor(e, r) {
    super(e), this.items = r;
  }
}
var Ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function or(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Aa = { exports: {} }, oo = { exports: {} }, wd = void 0, lo = function(t) {
  return t !== wd && t !== null;
}, Cd = lo, kd = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, Td = function(t) {
  return Cd(t) ? hasOwnProperty.call(kd, typeof t) : !1;
}, Ed = Td, _d = function(t) {
  if (!Ed(t)) return !1;
  try {
    return t.constructor ? t.constructor.prototype === t : !1;
  } catch {
    return !1;
  }
}, Ad = _d, Od = function(t) {
  if (typeof t != "function" || !hasOwnProperty.call(t, "length")) return !1;
  try {
    if (typeof t.length != "number" || typeof t.call != "function" || typeof t.apply != "function") return !1;
  } catch {
    return !1;
  }
  return !Ad(t);
}, zd = Od, jd = /^\s*class[\s{/}]/, Ld = Function.prototype.toString, Wd = function(t) {
  return !(!zd(t) || jd.test(Ld.call(t)));
}, Pd = function() {
  var t = Object.assign, e;
  return typeof t != "function" ? !1 : (e = { foo: "raz" }, t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
}, Or, Rn;
function Id() {
  return Rn || (Rn = 1, Or = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), Or;
}
var Bd = function() {
}, Rd = Bd(), bt = function(t) {
  return t !== Rd && t !== null;
}, zr, Mn;
function Md() {
  if (Mn) return zr;
  Mn = 1;
  var t = bt, e = Object.keys;
  return zr = function(r) {
    return e(t(r) ? Object(r) : r);
  }, zr;
}
var jr, qn;
function qd() {
  return qn || (qn = 1, jr = Id()() ? Object.keys : Md()), jr;
}
var Lr, Dn;
function Ya() {
  if (Dn) return Lr;
  Dn = 1;
  var t = bt;
  return Lr = function(e) {
    if (!t(e)) throw new TypeError("Cannot use null or undefined");
    return e;
  }, Lr;
}
var Wr, Nn;
function Dd() {
  if (Nn) return Wr;
  Nn = 1;
  var t = qd(), e = Ya(), r = Math.max;
  return Wr = function(a, n) {
    var i, s, o = r(arguments.length, 2), l;
    for (a = Object(e(a)), l = function(p) {
      try {
        a[p] = n[p];
      } catch (c) {
        i || (i = c);
      }
    }, s = 1; s < o; ++s)
      n = arguments[s], t(n).forEach(l);
    if (i !== void 0) throw i;
    return a;
  }, Wr;
}
var Nd = Pd() ? Object.assign : Dd(), $d = bt, Fd = Array.prototype.forEach, Gd = Object.create, Vd = function(t, e) {
  var r;
  for (r in t) e[r] = t[r];
}, Hd = function(t) {
  var e = Gd(null);
  return Fd.call(arguments, function(r) {
    $d(r) && Vd(Object(r), e);
  }), e;
}, Pr = "razdwatrzy", Ud = function() {
  return typeof Pr.contains != "function" ? !1 : Pr.contains("dwa") === !0 && Pr.contains("foo") === !1;
}, Ir, $n;
function Yd() {
  if ($n) return Ir;
  $n = 1;
  var t = String.prototype.indexOf;
  return Ir = function(e) {
    return t.call(this, e, arguments[1]) > -1;
  }, Ir;
}
var Kd = Ud() ? String.prototype.contains : Yd(), Dt = lo, Fn = Wd, po = Nd, co = Hd, pt = Kd, Zd = oo.exports = function(t, e) {
  var r, a, n, i, s;
  return arguments.length < 2 || typeof t != "string" ? (i = e, e = t, t = null) : i = arguments[2], Dt(t) ? (r = pt.call(t, "c"), a = pt.call(t, "e"), n = pt.call(t, "w")) : (r = n = !0, a = !1), s = { value: e, configurable: r, enumerable: a, writable: n }, i ? po(co(i), s) : s;
};
Zd.gs = function(t, e, r) {
  var a, n, i, s;
  return typeof t != "string" ? (i = r, r = e, e = t, t = null) : i = arguments[3], Dt(e) ? Fn(e) ? Dt(r) ? Fn(r) || (i = r, r = void 0) : r = void 0 : (i = e, e = r = void 0) : e = void 0, Dt(t) ? (a = pt.call(t, "c"), n = pt.call(t, "e")) : (a = !0, n = !1), s = { get: e, set: r, configurable: a, enumerable: n }, i ? po(co(i), s) : s;
};
var qe = oo.exports, uo = function(t) {
  if (typeof t != "function") throw new TypeError(t + " is not a function");
  return t;
};
(function(t, e) {
  var r = qe, a = uo, n = Function.prototype.apply, i = Function.prototype.call, s = Object.create, o = Object.defineProperty, l = Object.defineProperties, p = Object.prototype.hasOwnProperty, c = { configurable: !0, enumerable: !1, writable: !0 }, m, d, u, g, S, b, f;
  m = function(y, w) {
    var h;
    return a(w), p.call(this, "__ee__") ? h = this.__ee__ : (h = c.value = s(null), o(this, "__ee__", c), c.value = null), h[y] ? typeof h[y] == "object" ? h[y].push(w) : h[y] = [h[y], w] : h[y] = w, this;
  }, d = function(y, w) {
    var h, v;
    return a(w), v = this, m.call(this, y, h = function() {
      u.call(v, y, h), n.call(w, this, arguments);
    }), h.__eeOnceListener__ = w, this;
  }, u = function(y, w) {
    var h, v, x, k;
    if (a(w), !p.call(this, "__ee__")) return this;
    if (h = this.__ee__, !h[y]) return this;
    if (v = h[y], typeof v == "object")
      for (k = 0; x = v[k]; ++k)
        (x === w || x.__eeOnceListener__ === w) && (v.length === 2 ? h[y] = v[k ? 0 : 1] : v.splice(k, 1));
    else
      (v === w || v.__eeOnceListener__ === w) && delete h[y];
    return this;
  }, g = function(y) {
    var w, h, v, x, k;
    if (p.call(this, "__ee__") && (x = this.__ee__[y], !!x))
      if (typeof x == "object") {
        for (h = arguments.length, k = new Array(h - 1), w = 1; w < h; ++w) k[w - 1] = arguments[w];
        for (x = x.slice(), w = 0; v = x[w]; ++w)
          n.call(v, this, k);
      } else
        switch (arguments.length) {
          case 1:
            i.call(x, this);
            break;
          case 2:
            i.call(x, this, arguments[1]);
            break;
          case 3:
            i.call(x, this, arguments[1], arguments[2]);
            break;
          default:
            for (h = arguments.length, k = new Array(h - 1), w = 1; w < h; ++w)
              k[w - 1] = arguments[w];
            n.call(x, this, k);
        }
  }, S = {
    on: m,
    once: d,
    off: u,
    emit: g
  }, b = {
    on: r(m),
    once: r(d),
    off: r(u),
    emit: r(g)
  }, f = l({}, b), t.exports = e = function(y) {
    return y == null ? s(f) : l(Object(y), b);
  }, e.methods = S;
})(Aa, Aa.exports);
var mo = Aa.exports;
const De = /* @__PURE__ */ or(mo);
class z {
  constructor(e) {
    this.context = e || this, this.hooks = [];
  }
  /**
   * Adds a function to be run before a hook completes
   * @example this.content.register(function(){...});
   * @return {undefined} void
   */
  register() {
    for (var e = 0; e < arguments.length; ++e)
      if (typeof arguments[e] == "function")
        this.hooks.push(arguments[e]);
      else
        for (var r = 0; r < arguments[e].length; ++r)
          this.hooks.push(arguments[e][r]);
  }
  /**
   * Triggers a hook to run all functions
   * @example this.content.trigger(args).then(function(){...});
   * @return {Promise} results
   */
  trigger() {
    var e = arguments, r = this.context, a = [];
    return this.hooks.forEach(function(n) {
      var i = n.apply(r, e);
      i && typeof i.then == "function" ? a.push(i) : a.push(new Promise((s, o) => {
        s(i);
      }));
    }), Promise.all(a);
  }
  /**
    * Triggers a hook to run all functions synchronously
    * @example this.content.trigger(args).then(function(){...});
    * @return {Array} results
    */
  triggerSync() {
    var e = arguments, r = this.context, a = [];
    return this.hooks.forEach(function(n) {
      var i = n.apply(r, e);
      a.push(i);
    }), a;
  }
  // Adds a function to be run before a hook completes
  list() {
    return this.hooks;
  }
  clear() {
    return this.hooks = [];
  }
}
const Qd = 1500;
class Ka {
  constructor(e, r, a) {
    this.element = e, this.bounds = this.element.getBoundingClientRect(), this.parentBounds = this.element.offsetParent.getBoundingClientRect();
    let n = parseFloat(window.getComputedStyle(this.element).columnGap);
    if (n) {
      let i = this.bounds.left - this.parentBounds.left;
      this.gap = n - i;
    } else
      this.gap = 0;
    r ? this.hooks = r : (this.hooks = {}, this.hooks.onPageLayout = new z(), this.hooks.layout = new z(), this.hooks.renderNode = new z(), this.hooks.layoutNode = new z(), this.hooks.beforeOverflow = new z(), this.hooks.onOverflow = new z(), this.hooks.afterOverflowRemoved = new z(), this.hooks.onBreakToken = new z(), this.hooks.beforeRenderResult = new z()), this.settings = a || {}, this.maxChars = this.settings.maxChars || Qd, this.forceRenderBreak = !1;
  }
  async renderTo(e, r, a, n = this.bounds) {
    let i = this.getStart(r, a), s = _t(i, r), o, l, p, c, m = !1, d, u = 0, g = a || new Ze(i);
    for (this.hooks && this.hooks.onPageLayout.trigger(e, g, this); !p && !d; ) {
      if (c = s.next(), l = o, o = c.value, p = c.done, !o) {
        this.hooks && this.hooks.layout.trigger(e, this);
        let f = e.querySelectorAll("img");
        return f.length && await this.waitForImages(f), d = this.findBreakToken(e, r, n, g), d && d.equals(g) ? (console.warn("Unable to layout item: ", l), this.hooks && this.hooks.beforeRenderResult.trigger(void 0, e, this), new Qe(void 0, new qt("Unable to layout item", [l]))) : (this.rebuildTableFromBreakToken(d, e), this.hooks && this.hooks.beforeRenderResult.trigger(d, e, this), new Qe(d));
      }
      if (this.hooks && this.hooks.layoutNode.trigger(o), m && this.shouldBreak(o, i)) {
        this.hooks && this.hooks.layout.trigger(e, this);
        let f = e.querySelectorAll("img");
        if (f.length && await this.waitForImages(f), d = this.findBreakToken(e, r, n, g), d ? this.rebuildTableFromBreakToken(d, e) : d = this.breakAt(o), d && d.equals(g)) {
          console.warn("Unable to layout item: ", o);
          let y = d.node && Te(d.node);
          if (y)
            d = new Ze(y);
          else
            return new Qe(void 0, new qt("Unable to layout item", [o]));
        }
        u = 0;
        break;
      }
      if (o.dataset && o.dataset.page) {
        let f = o.dataset.page, y = this.element.closest(".pagedjs_page");
        y.classList.add("pagedjs_named_page"), y.classList.add("pagedjs_" + f + "_page"), o.dataset.splitFrom || y.classList.add("pagedjs_" + f + "_first_page");
      }
      let S = io(o), b = this.append(o, e, a, S);
      if (u += b.textContent.length, m || (m = bd(o)), S || (s = _t(Te(o, r), r)), this.forceRenderBreak) {
        this.hooks && this.hooks.layout.trigger(e, this), d = this.findBreakToken(e, r, n, g), d ? this.rebuildTableFromBreakToken(d, e) : d = this.breakAt(o), u = 0, this.forceRenderBreak = !1;
        break;
      }
      if (u >= this.maxChars) {
        this.hooks && this.hooks.layout.trigger(e, this);
        let f = e.querySelectorAll("img");
        if (f.length && await this.waitForImages(f), d = this.findBreakToken(e, r, n, g), d && (u = 0, this.rebuildTableFromBreakToken(d, e)), d && d.equals(g)) {
          console.warn("Unable to layout item: ", o);
          let y = d.node && Te(d.node);
          if (y)
            d = new Ze(y);
          else
            return this.hooks && this.hooks.beforeRenderResult.trigger(void 0, e, this), new Qe(void 0, new qt("Unable to layout item", [o]));
        }
      }
    }
    return this.hooks && this.hooks.beforeRenderResult.trigger(d, e, this), new Qe(d);
  }
  breakAt(e, r = 0) {
    let a = new Ze(
      e,
      r
    );
    return this.hooks.onBreakToken.triggerSync(a, void 0, e, this).forEach((i) => {
      typeof i < "u" && (a = i);
    }), a;
  }
  shouldBreak(e, r) {
    let a = Ut(e, r), n = e.parentNode, i = Er(e) && n && !a && Er(n), s;
    return i && (s = e.dataset.breakBefore === n.dataset.breakBefore), !s && Er(e) || md(e) || no(e, a);
  }
  forceBreak() {
    this.forceRenderBreak = !0;
  }
  getStart(e, r) {
    let a, n = r && r.node;
    return n ? a = n : a = e.firstChild, a;
  }
  append(e, r, a, n = !0, i = !0) {
    let s = fd(e, !n);
    if (e.parentNode && Y(e.parentNode)) {
      let l = F(e.parentNode, r);
      if (l)
        l.appendChild(s);
      else if (i) {
        let p = ao(e);
        l = F(e.parentNode, p), l ? (a && be(a.node) && a.offset > 0 && (s.textContent = s.textContent.substring(a.offset)), l.appendChild(s)) : r.appendChild(s), r.appendChild(p);
      } else
        r.appendChild(s);
    } else
      r.appendChild(s);
    return s.dataset && s.dataset.ref && (r.indexOfRefs || (r.indexOfRefs = {}), r.indexOfRefs[s.dataset.ref] = s), this.hooks.renderNode.triggerSync(s, e, this).forEach((l) => {
      typeof l < "u" && (s = l);
    }), s;
  }
  rebuildTableFromBreakToken(e, r) {
    if (!e || !e.node)
      return;
    let a = e.node, n = Y(a) ? a.closest("td") : a.parentElement.closest("td");
    if (n) {
      if (!F(n, r, !0))
        return;
      for (; n = n.nextElementSibling; )
        this.append(n, r, null, !0);
    }
  }
  async waitForImages(e) {
    let r = Array.from(e).map(async (a) => this.awaitImageLoaded(a));
    await Promise.all(r);
  }
  async awaitImageLoaded(e) {
    return new Promise((r) => {
      if (e.complete !== !0)
        e.onload = function() {
          let { width: a, height: n } = window.getComputedStyle(e);
          r(a, n);
        }, e.onerror = function(a) {
          let { width: n, height: i } = window.getComputedStyle(e);
          r(n, i, a);
        };
      else {
        let { width: a, height: n } = window.getComputedStyle(e);
        r(a, n);
      }
    });
  }
  avoidBreakInside(e, r) {
    let a;
    if (e !== r) {
      for (; e.parentNode && (e = e.parentNode, e !== r); )
        if (window.getComputedStyle(e)["break-inside"] === "avoid") {
          a = e;
          break;
        }
      return a;
    }
  }
  createBreakToken(e, r, a) {
    let n = e.startContainer, i = e.startOffset, s, o, l, p, c;
    if (Y(n))
      if (c = _r(n, i), Y(c))
        if (o = F(c, r), o)
          s = F(o, a), i = 0;
        else {
          let m = At(c);
          if (Y(m) || (m = m.parentElement), o = F(m, r), !c.nextSibling) {
            const d = F(o, a), g = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT).lastChild();
            if (!F(g, r))
              return;
          }
          s = F(o, a).nextSibling, i = 0;
        }
      else
        o = F(n, r), o || (o = F(At(n), r)), l = F(o, a), p = In(c, l), p === 0 ? (s = l, i = 0) : (s = _r(l, p), i = 0);
    else {
      if (o = F(n.parentNode, r), o || (o = F(At(n.parentNode), r)), l = F(o, a), p = In(n, l), p === -1)
        return;
      s = _r(l, p), i += s.textContent.indexOf(n.textContent);
    }
    if (s)
      return new Ze(
        s,
        i
      );
  }
  findBreakToken(e, r, a = this.bounds, n, i = !0) {
    let s = this.findOverflow(e, a), o, l;
    if (this.hooks.onOverflow.triggerSync(s, e, a, this).forEach((c) => {
      typeof c < "u" && (s = c);
    }), s) {
      if (o = this.createBreakToken(s, e, r), this.hooks.onBreakToken.triggerSync(o, s, e, this).forEach((m) => {
        typeof m < "u" && (o = m);
      }), o && o.equals(n))
        return o;
      if (o && o.node && o.offset && o.node.textContent ? l = o.node.textContent.charAt(o.offset) : l = void 0, o && o.node && i) {
        let m = this.removeOverflow(s, l);
        this.hooks && this.hooks.afterOverflowRemoved.trigger(m, e, this);
      }
    }
    return o;
  }
  hasOverflow(e, r = this.bounds) {
    let a = e && e.parentNode, { width: n, height: i } = e.getBoundingClientRect(), s = a ? a.scrollWidth : 0, o = a ? a.scrollHeight : 0;
    return Math.max(Math.floor(n), s) > Math.round(r.width) || Math.max(Math.floor(i), o) > Math.round(r.height);
  }
  findOverflow(e, r = this.bounds, a = this.gap) {
    if (!this.hasOverflow(e, r)) return;
    let n = Math.floor(r.left), i = Math.round(r.right + a), s = Math.round(r.top), o = Math.round(r.bottom), l, p = _t(e.firstChild, e), c, m, d, u, g, S, b, f;
    for (; !m; )
      if (c = p.next(), m = c.done, d = c.value, g = !1, S = !1, b = void 0, f = void 0, d) {
        let w = kr(d), h = Math.round(w.left), v = Math.floor(w.right), x = Math.round(w.top), k = Math.floor(w.bottom);
        if (!l && (h >= i || x >= o)) {
          let E = !1;
          const A = Ar(d, "TD", e);
          if (A && window.getComputedStyle(A)["break-inside"] === "avoid")
            b = A.parentElement;
          else if (Y(d)) {
            let P = window.getComputedStyle(d);
            E = P.getPropertyValue("float") !== "none", g = P.getPropertyValue("break-inside") === "avoid", S = d.dataset.breakBefore === "avoid" || d.dataset.previousBreakAfter === "avoid", b = S && Ut(d, e), f = d.tagName === "BR" || d.tagName === "WBR";
          }
          let B;
          if (d.nodeName === "TR" ? B = d : B = Ar(d, "TR", e), B) {
            let P = B.parentElement;
            ["TBODY", "THEAD"].includes(P.nodeName) && window.getComputedStyle(P).getPropertyValue("break-inside") === "avoid" && (b = P);
            const M = Ar(B, "TABLE", e), W = M.querySelector("[colspan]");
            if (M && W) {
              let $ = 0;
              for (const R of Array.from(M.rows[0].cells))
                $ += parseInt(R.getAttribute("colspan") || "1");
              if (B.cells.length !== $) {
                let R = B.previousElementSibling, Q;
                for (; R !== null; ) {
                  Q = 0;
                  for (const Et of Array.from(R.cells))
                    Q += parseInt(Et.getAttribute("colspan") || "1");
                  if (Q === $)
                    break;
                  R = R.previousElementSibling;
                }
                Q === $ && (b = R);
              }
            }
          }
          if (b) {
            l = document.createRange(), l.selectNode(b);
            break;
          }
          if (!f && !E && Y(d)) {
            l = document.createRange(), l.selectNode(d);
            break;
          }
          if (be(d) && d.textContent.trim().length) {
            l = document.createRange(), l.selectNode(d);
            break;
          }
        }
        if (!l && be(d) && d.textContent.trim().length && !xd(d.parentNode)) {
          let E = pd(d), A;
          h = 0, x = 0;
          for (var y = 0; y != E.length; y++)
            A = E[y], A.width > 0 && (!h || A.left > h) && (h = A.left), A.height > 0 && (!x || A.top > x) && (x = A.top);
          if (h >= i || x >= o) {
            l = document.createRange(), u = this.textBreak(d, n, i, s, o), u ? l.setStart(d, u) : l = void 0;
            break;
          }
        }
        (g || v <= i && k <= o) && (c = Te(d, e), c && (p = _t(c, e)));
      }
    if (l)
      return l.setEndAfter(e.lastChild), l;
  }
  findEndToken(e, r) {
    if (e.childNodes.length === 0)
      return;
    let a = e.lastChild, n;
    for (; a && a.lastChild; )
      if (!Ta(a))
        a = a.previousSibling;
      else if (Ta(a.lastChild))
        a = a.lastChild;
      else {
        a = At(a.lastChild);
        break;
      }
    be(a) && (a.parentNode.dataset.ref ? (n = vd(a), a = a.parentNode) : a = a.previousSibling);
    let i = F(a, r);
    n && (i = i.childNodes[n]);
    let s = Te(i);
    return this.breakAt(s);
  }
  textBreak(e, r, a, n, i) {
    let s = hd(e), o = 0, l = 0, p = 0, c = 0, m, d, u, g, S;
    for (; !u && (d = s.next(), m = d.value, u = d.done, !!m); ) {
      if (g = kr(m), o = Math.floor(g.left), l = Math.floor(g.right), p = Math.floor(g.top), c = Math.floor(g.bottom), o >= a || p >= i) {
        S = m.startOffset;
        break;
      }
      if (l > a || c > i) {
        let b = gd(m), f, y, w;
        for (; !w && (y = b.next(), f = y.value, w = y.done, !!f); )
          if (g = kr(f), o = Math.floor(g.left), p = Math.floor(g.top), o >= a || p >= i) {
            S = f.startOffset, u = !0;
            break;
          }
      }
    }
    return S;
  }
  removeOverflow(e, r) {
    let { startContainer: a } = e, n = e.extractContents();
    return this.hyphenateAtBreak(a, r), n;
  }
  hyphenateAtBreak(e, r) {
    if (be(e)) {
      let a = e.textContent, n = a[a.length - 1];
      (r && /^\w|\u00AD$/.test(n) && /^\w|\u00AD$/.test(r) || !r && /^\w|\u00AD$/.test(n)) && (e.parentNode.classList.add("pagedjs_hyphen"), e.textContent += this.settings.hyphenGlyph || "‑");
    }
  }
  equalTokens(e, r) {
    return !(!e || !r || e.node && r.node && e.node !== r.node || e.offset && r.offset && e.offset !== r.offset);
  }
}
De(Ka.prototype);
class Oa {
  constructor(e, r, a, n, i) {
    this.pagesArea = e, this.pageTemplate = r, this.blank = a, this.width = void 0, this.height = void 0, this.hooks = n, this.settings = i || {};
  }
  create(e, r) {
    let a = document.importNode(this.pageTemplate.content, !0), n, i;
    r ? (this.pagesArea.insertBefore(a, r.nextElementSibling), i = Array.prototype.indexOf.call(this.pagesArea.children, r.nextElementSibling), n = this.pagesArea.children[i]) : (this.pagesArea.appendChild(a), n = this.pagesArea.lastChild);
    let s = n.querySelector(".pagedjs_pagebox"), o = n.querySelector(".pagedjs_page_content"), l = n.querySelector(".pagedjs_footnote_area"), p = o.getBoundingClientRect();
    return o.style.columnWidth = Math.round(p.width) + "px", o.style.columnGap = "calc(var(--pagedjs-margin-right) + var(--pagedjs-margin-left) + var(--pagedjs-bleed-right) + var(--pagedjs-bleed-left) + var(--pagedjs-column-gap-offset))", this.width = Math.round(p.width), this.height = Math.round(p.height), this.element = n, this.pagebox = s, this.area = o, this.footnotesArea = l, n;
  }
  createWrapper() {
    let e = document.createElement("div");
    return this.area.appendChild(e), this.wrapper = e, e;
  }
  index(e) {
    this.position = e;
    let r = this.element, a = e + 1, n = `page-${a}`;
    this.id = n, r.dataset.pageNumber = a, r.setAttribute("id", n), this.name && r.classList.add("pagedjs_" + this.name + "_page"), this.blank && r.classList.add("pagedjs_blank_page"), e === 0 && r.classList.add("pagedjs_first_page"), e % 2 !== 1 ? (r.classList.remove("pagedjs_left_page"), r.classList.add("pagedjs_right_page")) : (r.classList.remove("pagedjs_right_page"), r.classList.add("pagedjs_left_page"));
  }
  /*
  	size(width, height) {
  		if (width === this.width && height === this.height) {
  			return;
  		}
  		this.width = width;
  		this.height = height;
  
  		this.element.style.width = Math.round(width) + "px";
  		this.element.style.height = Math.round(height) + "px";
  		this.element.style.columnWidth = Math.round(width) + "px";
  	}
  	*/
  async layout(e, r, a) {
    this.clear(), this.startToken = r;
    let n = this.settings;
    !n.maxChars && a && (n.maxChars = a), this.layoutMethod = new Ka(this.area, this.hooks, n);
    let s = (await this.layoutMethod.renderTo(this.wrapper, e, r)).breakToken;
    return this.addListeners(e), this.endToken = s, s;
  }
  async append(e, r) {
    if (!this.layoutMethod)
      return this.layout(e, r);
    let n = (await this.layoutMethod.renderTo(this.wrapper, e, r)).breakToken;
    return this.endToken = n, n;
  }
  getByParent(e, r) {
    let a;
    for (var n = 0; n < r.length; n++)
      if (a = r[n], a.dataset.ref === e)
        return a;
  }
  onOverflow(e) {
    this._onOverflow = e;
  }
  onUnderflow(e) {
    this._onUnderflow = e;
  }
  clear() {
    this.removeListeners(), this.wrapper && this.wrapper.remove(), this.createWrapper();
  }
  addListeners(e) {
    return typeof ResizeObserver < "u" ? this.addResizeObserver(e) : (this._checkOverflowAfterResize = this.checkOverflowAfterResize.bind(this, e), this.element.addEventListener("overflow", this._checkOverflowAfterResize, !1), this.element.addEventListener("underflow", this._checkOverflowAfterResize, !1)), this._onScroll = function() {
      this.listening && (this.element.scrollLeft = 0);
    }.bind(this), this.element.addEventListener("scroll", this._onScroll), this.listening = !0, !0;
  }
  removeListeners() {
    this.listening = !1, typeof ResizeObserver < "u" && this.ro ? this.ro.disconnect() : this.element && (this.element.removeEventListener("overflow", this._checkOverflowAfterResize, !1), this.element.removeEventListener("underflow", this._checkOverflowAfterResize, !1)), this.element && this.element.removeEventListener("scroll", this._onScroll);
  }
  addResizeObserver(e) {
    let r = this.wrapper, a = r.getBoundingClientRect().height;
    this.ro = new ResizeObserver((n) => {
      this.listening && requestAnimationFrame(() => {
        for (let i of n) {
          const s = i.contentRect;
          s.height > a ? (this.checkOverflowAfterResize(e), a = r.getBoundingClientRect().height) : s.height < a && (this.checkUnderflowAfterResize(e), a = s.height);
        }
      });
    }), this.ro.observe(r);
  }
  checkOverflowAfterResize(e) {
    if (!this.listening || !this.layoutMethod)
      return;
    let r = this.layoutMethod.findBreakToken(this.wrapper, e, this.startToken);
    r && (this.endToken = r, this._onOverflow && this._onOverflow(r));
  }
  checkUnderflowAfterResize(e) {
    if (!this.listening || !this.layoutMethod)
      return;
    let r = this.layoutMethod.findEndToken(this.wrapper, e);
    r && this._onUnderflow && this._onUnderflow(r);
  }
  destroy() {
    this.removeListeners(), this.element.remove(), this.element = void 0, this.wrapper = void 0;
  }
}
De(Oa.prototype);
class Xd {
  constructor(e, r) {
    return e && e.nodeType ? this.dom = this.add(e) : typeof e == "string" && (this.dom = this.parse(e)), this.dom;
  }
  parse(e, r) {
    let n = document.createRange().createContextualFragment(e);
    return this.addRefs(n), n;
  }
  add(e) {
    return this.addRefs(e), e;
  }
  addRefs(e) {
    var r = document.createTreeWalker(
      e,
      NodeFilter.SHOW_ELEMENT,
      null,
      !1
    );
    let a = r.nextNode();
    for (; a; ) {
      if (!a.hasAttribute("data-ref")) {
        let n = ue();
        a.setAttribute("data-ref", n);
      }
      a.id && a.setAttribute("data-id", a.id), a = r.nextNode();
    }
  }
  find(e) {
    return this.refs[e];
  }
  destroy() {
    this.refs = void 0, this.dom = void 0;
  }
}
class Jd {
  constructor(e) {
    this._q = [], this.context = e, this.tick = requestAnimationFrame, this.running = !1, this.paused = !1;
  }
  /**
   * Add an item to the queue
   * @return {Promise} enqueued
   */
  enqueue() {
    var e, r, a, n = [].shift.call(arguments), i = arguments;
    if (!n)
      throw new Error("No Task Provided");
    return typeof n == "function" ? (e = new Tr(), r = e.promise, a = {
      task: n,
      args: i,
      //"context"  : context,
      deferred: e,
      promise: r
    }) : a = {
      promise: n
    }, this._q.push(a), this.paused == !1 && !this.running && this.run(), a.promise;
  }
  /**
   * Run one item
   * @return {Promise} dequeued
   */
  dequeue() {
    var e, r, a;
    if (this._q.length && !this.paused) {
      if (e = this._q.shift(), r = e.task, r)
        return a = r.apply(this.context, e.args), a && typeof a.then == "function" ? a.then(function() {
          e.deferred.resolve.apply(this.context, arguments);
        }.bind(this), function() {
          e.deferred.reject.apply(this.context, arguments);
        }.bind(this)) : (e.deferred.resolve.apply(this.context, a), e.promise);
      if (e.promise)
        return e.promise;
    } else
      return e = new Tr(), e.deferred.resolve(), e.promise;
  }
  // Run All Immediately
  dump() {
    for (; this._q.length; )
      this.dequeue();
  }
  /**
   * Run all tasks sequentially, at convince
   * @return {Promise} all run
   */
  run() {
    return this.running || (this.running = !0, this.defered = new Tr()), this.tick.call(window, () => {
      this._q.length ? this.dequeue().then(function() {
        this.run();
      }.bind(this)) : (this.defered.resolve(), this.running = void 0);
    }), this.paused == !0 && (this.paused = !1), this.defered.promise;
  }
  /**
   * Flush all, as quickly as possible
   * @return {Promise} ran
   */
  flush() {
    if (this.running)
      return this.running;
    if (this._q.length)
      return this.running = this.dequeue().then(function() {
        return this.running = void 0, this.flush();
      }.bind(this)), this.running;
  }
  /**
   * Clear all items in wait
   * @return {void}
   */
  clear() {
    this._q = [];
  }
  /**
   * Get the number of tasks in the queue
   * @return {number} tasks
   */
  length() {
    return this._q.length;
  }
  /**
   * Pause a running queue
   * @return {void}
   */
  pause() {
    this.paused = !0;
  }
  /**
   * End the queue
   * @return {void}
   */
  stop() {
    this._q = [], this.running = !1, this.paused = !0;
  }
}
const ep = `
<div class="pagedjs_page">
	<div class="pagedjs_sheet">
		<div class="pagedjs_bleed pagedjs_bleed-top">
			<div class="pagedjs_marks-crop"></div>
			<div class="pagedjs_marks-middle">
				<div class="pagedjs_marks-cross"></div>
			</div>
			<div class="pagedjs_marks-crop"></div>
		</div>
		<div class="pagedjs_bleed pagedjs_bleed-bottom">
			<div class="pagedjs_marks-crop"></div>
			<div class="pagedjs_marks-middle">
				<div class="pagedjs_marks-cross"></div>
			</div>		<div class="pagedjs_marks-crop"></div>
		</div>
		<div class="pagedjs_bleed pagedjs_bleed-left">
			<div class="pagedjs_marks-crop"></div>
			<div class="pagedjs_marks-middle">
				<div class="pagedjs_marks-cross"></div>
			</div>		<div class="pagedjs_marks-crop"></div>
		</div>
		<div class="pagedjs_bleed pagedjs_bleed-right">
			<div class="pagedjs_marks-crop"></div>
			<div class="pagedjs_marks-middle">
				<div class="pagedjs_marks-cross"></div>
			</div>
			<div class="pagedjs_marks-crop"></div>
		</div>
		<div class="pagedjs_pagebox">
			<div class="pagedjs_margin-top-left-corner-holder">
				<div class="pagedjs_margin pagedjs_margin-top-left-corner"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-top">
				<div class="pagedjs_margin pagedjs_margin-top-left"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-top-center"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-top-right"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-top-right-corner-holder">
				<div class="pagedjs_margin pagedjs_margin-top-right-corner"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-right">
				<div class="pagedjs_margin pagedjs_margin-right-top"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-right-middle"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-right-bottom"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-left">
				<div class="pagedjs_margin pagedjs_margin-left-top"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-left-middle"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-left-bottom"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-bottom-left-corner-holder">
				<div class="pagedjs_margin pagedjs_margin-bottom-left-corner"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-bottom">
				<div class="pagedjs_margin pagedjs_margin-bottom-left"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-bottom-center"><div class="pagedjs_margin-content"></div></div>
				<div class="pagedjs_margin pagedjs_margin-bottom-right"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_margin-bottom-right-corner-holder">
				<div class="pagedjs_margin pagedjs_margin-bottom-right-corner"><div class="pagedjs_margin-content"></div></div>
			</div>
			<div class="pagedjs_area">
				<div class="pagedjs_page_content"></div>
				<div class="pagedjs_footnote_area">
					<div class="pagedjs_footnote_content pagedjs_footnote_empty">
						<div class="pagedjs_footnote_inner_content"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>`;
class ho {
  constructor(e, r, a) {
    this.settings = a || {}, this.hooks = {}, this.hooks.beforeParsed = new z(this), this.hooks.filter = new z(this), this.hooks.afterParsed = new z(this), this.hooks.beforePageLayout = new z(this), this.hooks.onPageLayout = new z(this), this.hooks.layout = new z(this), this.hooks.renderNode = new z(this), this.hooks.layoutNode = new z(this), this.hooks.onOverflow = new z(this), this.hooks.afterOverflowRemoved = new z(this), this.hooks.onBreakToken = new z(), this.hooks.beforeRenderResult = new z(this), this.hooks.afterPageLayout = new z(this), this.hooks.finalizePage = new z(this), this.hooks.afterRendered = new z(this), this.pages = [], this.total = 0, this.q = new Jd(this), this.stopped = !1, this.rendered = !1, this.content = e, this.charsPerBreak = [], this.maxChars, e && this.flow(e, r);
  }
  setup(e) {
    this.pagesArea = document.createElement("div"), this.pagesArea.classList.add("pagedjs_pages"), e ? e.appendChild(this.pagesArea) : document.querySelector("body").appendChild(this.pagesArea), this.pageTemplate = document.createElement("template"), this.pageTemplate.innerHTML = ep;
  }
  async flow(e, r) {
    let a;
    await this.hooks.beforeParsed.trigger(e, this), a = new Xd(e), this.hooks.filter.triggerSync(a), this.source = a, this.breakToken = void 0, this.pagesArea && this.pageTemplate ? (this.q.clear(), this.removePages()) : this.setup(r), this.emit("rendering", a), await this.hooks.afterParsed.trigger(a, this), await this.loadFonts();
    let n = await this.render(a, this.breakToken);
    for (; n.canceled; )
      this.start(), n = await this.render(a, this.breakToken);
    return this.rendered = !0, this.pagesArea.style.setProperty("--pagedjs-page-count", this.total), await this.hooks.afterRendered.trigger(this.pages, this), this.emit("rendered", this.pages), this;
  }
  // oversetPages() {
  // 	let overset = [];
  // 	for (let i = 0; i < this.pages.length; i++) {
  // 		let page = this.pages[i];
  // 		if (page.overset) {
  // 			overset.push(page);
  // 			// page.overset = false;
  // 		}
  // 	}
  // 	return overset;
  // }
  //
  // async handleOverset(parsed) {
  // 	let overset = this.oversetPages();
  // 	if (overset.length) {
  // 		console.log("overset", overset);
  // 		let index = this.pages.indexOf(overset[0]) + 1;
  // 		console.log("INDEX", index);
  //
  // 		// Remove pages
  // 		// this.removePages(index);
  //
  // 		// await this.render(parsed, overset[0].overset);
  //
  // 		// return this.handleOverset(parsed);
  // 	}
  // }
  async render(e, r) {
    let a = this.layout(e, r), n = !1, i;
    for (; !n; )
      i = await this.q.enqueue(() => this.renderAsync(a)), n = i.done;
    return i;
  }
  start() {
    this.rendered = !1, this.stopped = !1;
  }
  stop() {
    this.stopped = !0;
  }
  renderOnIdle(e) {
    return new Promise((r) => {
      cd(async () => {
        if (this.stopped)
          return r({ done: !0, canceled: !0 });
        let a = await e.next();
        this.stopped ? r({ done: !0, canceled: !0 }) : r(a);
      });
    });
  }
  async renderAsync(e) {
    if (this.stopped)
      return { done: !0, canceled: !0 };
    let r = await e.next();
    return this.stopped ? { done: !0, canceled: !0 } : r;
  }
  async handleBreaks(e, r) {
    let a = this.total + 1, n = a % 2 === 0 ? "left" : "right", i = a % 2 === 0 ? "verso" : "recto", s, o, l;
    a !== 1 && (e && typeof e.dataset < "u" && typeof e.dataset.previousBreakAfter < "u" && (s = e.dataset.previousBreakAfter), e && typeof e.dataset < "u" && typeof e.dataset.breakBefore < "u" && (o = e.dataset.breakBefore), r ? l = this.addPage(!0) : s && (s === "left" || s === "right") && s !== n ? l = this.addPage(!0) : s && (s === "verso" || s === "recto") && s !== i ? l = this.addPage(!0) : o && (o === "left" || o === "right") && o !== n ? l = this.addPage(!0) : o && (o === "verso" || o === "recto") && o !== i && (l = this.addPage(!0)), l && (await this.hooks.beforePageLayout.trigger(l, void 0, void 0, this), this.emit("page", l), await this.hooks.afterPageLayout.trigger(l.element, l, void 0, this), await this.hooks.finalizePage.trigger(l.element, l, void 0, this), this.emit("renderedPage", l)));
  }
  async *layout(e, r) {
    let a = r || !1, n = [];
    for (; a !== void 0; ) {
      a && a.node ? await this.handleBreaks(a.node) : await this.handleBreaks(e.firstChild);
      let i = this.addPage();
      if (await this.hooks.beforePageLayout.trigger(i, e, a, this), this.emit("page", i), a = await i.layout(e, a, this.maxChars), a) {
        let s = a.toJSON(!0);
        if (n.lastIndexOf(s) > -1) {
          let o = new qt("Layout repeated", [a.node]);
          return console.error("Layout repeated at: ", a.node), o;
        } else
          n.push(s);
      }
      await this.hooks.afterPageLayout.trigger(i.element, i, a, this), await this.hooks.finalizePage.trigger(i.element, i, void 0, this), this.emit("renderedPage", i), this.recoredCharLength(i.wrapper.textContent.length), yield a;
    }
  }
  recoredCharLength(e) {
    e !== 0 && (this.charsPerBreak.push(e), this.charsPerBreak.length > 4 && this.charsPerBreak.shift(), this.maxChars = this.charsPerBreak.reduce((r, a) => r + a, 0) / this.charsPerBreak.length);
  }
  removePages(e = 0) {
    if (!(e >= this.pages.length)) {
      for (let r = e; r < this.pages.length; r++)
        this.pages[r].destroy();
      e > 0 ? this.pages.splice(e) : this.pages = [], this.total = this.pages.length;
    }
  }
  addPage(e) {
    let r = this.pages[this.pages.length - 1], a = new Oa(this.pagesArea, this.pageTemplate, e, this.hooks, this.settings);
    return this.pages.push(a), a.create(void 0, r && r.element), a.index(this.total), e || (a.onOverflow((n) => {
      if (console.warn("overflow on", a.id, n), this.rendered)
        return;
      let i = this.pages.indexOf(a) + 1;
      this.stop(), this.breakToken = n, this.removePages(i), this.rendered === !0 && (this.rendered = !1, this.q.enqueue(async () => {
        this.start(), await this.render(this.source, this.breakToken), this.rendered = !0;
      }));
    }), a.onUnderflow((n) => {
    })), this.total = this.pages.length, a;
  }
  /*
  	insertPage(index, blank) {
  		let lastPage = this.pages[index];
  		// Create a new page from the template
  		let page = new Page(this.pagesArea, this.pageTemplate, blank, this.hooks);
  
  		let total = this.pages.splice(index, 0, page);
  
  		// Create the pages
  		page.create(undefined, lastPage && lastPage.element);
  
  		page.index(index + 1);
  
  		for (let i = index + 2; i < this.pages.length; i++) {
  			this.pages[i].index(i);
  		}
  
  		if (!blank) {
  			// Listen for page overflow
  			page.onOverflow((overflowToken) => {
  				if (total < this.pages.length) {
  					this.pages[total].layout(this.source, overflowToken);
  				} else {
  					let newPage = this.addPage();
  					newPage.layout(this.source, overflowToken);
  				}
  			});
  
  			page.onUnderflow(() => {
  				// console.log("underflow on", page.id);
  			});
  		}
  
  		this.total += 1;
  
  		return page;
  	}
  	*/
  async clonePage(e) {
    let r = this.pages[this.pages.length - 1], a = new Oa(this.pagesArea, this.pageTemplate, !1, this.hooks);
    this.pages.push(a), a.create(void 0, r && r.element), a.index(this.total), await this.hooks.beforePageLayout.trigger(a, void 0, void 0, this), this.emit("page", a);
    for (const n of e.element.classList)
      n !== "pagedjs_left_page" && n !== "pagedjs_right_page" && a.element.classList.add(n);
    await this.hooks.afterPageLayout.trigger(a.element, a, void 0, this), await this.hooks.finalizePage.trigger(a.element, a, void 0, this), this.emit("renderedPage", a);
  }
  loadFonts() {
    let e = [];
    return (document.fonts || []).forEach((r) => {
      if (r.status !== "loaded") {
        let a = r.load().then((n) => r.family, (n) => (console.warn("Failed to preload font-family:", r.family), r.family));
        e.push(a);
      }
    }), Promise.all(e).catch((r) => {
      console.warn(r);
    });
  }
  destroy() {
    this.pagesArea.remove(), this.pageTemplate.remove();
  }
}
De(ho.prototype);
var Za = { exports: {} }, go = {};
function fe(t) {
  return {
    prev: null,
    next: null,
    data: t
  };
}
function Ne(t, e, r) {
  var a;
  return Pe !== null ? (a = Pe, Pe = Pe.cursor, a.prev = e, a.next = r, a.cursor = t.cursor) : a = {
    prev: e,
    next: r,
    cursor: t.cursor
  }, t.cursor = a, a;
}
function $e(t) {
  var e = t.cursor;
  t.cursor = e.cursor, e.prev = null, e.next = null, e.cursor = Pe, Pe = e;
}
var Pe = null, j = function() {
  this.cursor = null, this.head = null, this.tail = null;
};
j.createItem = fe;
j.prototype.createItem = fe;
j.prototype.updateCursors = function(t, e, r, a) {
  for (var n = this.cursor; n !== null; )
    n.prev === t && (n.prev = e), n.next === r && (n.next = a), n = n.cursor;
};
j.prototype.getSize = function() {
  for (var t = 0, e = this.head; e; )
    t++, e = e.next;
  return t;
};
j.prototype.fromArray = function(t) {
  var e = null;
  this.head = null;
  for (var r = 0; r < t.length; r++) {
    var a = fe(t[r]);
    e !== null ? e.next = a : this.head = a, a.prev = e, e = a;
  }
  return this.tail = e, this;
};
j.prototype.toArray = function() {
  for (var t = this.head, e = []; t; )
    e.push(t.data), t = t.next;
  return e;
};
j.prototype.toJSON = j.prototype.toArray;
j.prototype.isEmpty = function() {
  return this.head === null;
};
j.prototype.first = function() {
  return this.head && this.head.data;
};
j.prototype.last = function() {
  return this.tail && this.tail.data;
};
j.prototype.each = function(t, e) {
  var r;
  e === void 0 && (e = this);
  for (var a = Ne(this, null, this.head); a.next !== null; )
    r = a.next, a.next = r.next, t.call(e, r.data, r, this);
  $e(this);
};
j.prototype.forEach = j.prototype.each;
j.prototype.eachRight = function(t, e) {
  var r;
  e === void 0 && (e = this);
  for (var a = Ne(this, this.tail, null); a.prev !== null; )
    r = a.prev, a.prev = r.prev, t.call(e, r.data, r, this);
  $e(this);
};
j.prototype.forEachRight = j.prototype.eachRight;
j.prototype.reduce = function(t, e, r) {
  var a;
  r === void 0 && (r = this);
  for (var n = Ne(this, null, this.head), i = e; n.next !== null; )
    a = n.next, n.next = a.next, i = t.call(r, i, a.data, a, this);
  return $e(this), i;
};
j.prototype.reduceRight = function(t, e, r) {
  var a;
  r === void 0 && (r = this);
  for (var n = Ne(this, this.tail, null), i = e; n.prev !== null; )
    a = n.prev, n.prev = a.prev, i = t.call(r, i, a.data, a, this);
  return $e(this), i;
};
j.prototype.nextUntil = function(t, e, r) {
  if (t !== null) {
    var a;
    r === void 0 && (r = this);
    for (var n = Ne(this, null, t); n.next !== null && (a = n.next, n.next = a.next, !e.call(r, a.data, a, this)); )
      ;
    $e(this);
  }
};
j.prototype.prevUntil = function(t, e, r) {
  if (t !== null) {
    var a;
    r === void 0 && (r = this);
    for (var n = Ne(this, t, null); n.prev !== null && (a = n.prev, n.prev = a.prev, !e.call(r, a.data, a, this)); )
      ;
    $e(this);
  }
};
j.prototype.some = function(t, e) {
  var r = this.head;
  for (e === void 0 && (e = this); r !== null; ) {
    if (t.call(e, r.data, r, this))
      return !0;
    r = r.next;
  }
  return !1;
};
j.prototype.map = function(t, e) {
  var r = new j(), a = this.head;
  for (e === void 0 && (e = this); a !== null; )
    r.appendData(t.call(e, a.data, a, this)), a = a.next;
  return r;
};
j.prototype.filter = function(t, e) {
  var r = new j(), a = this.head;
  for (e === void 0 && (e = this); a !== null; )
    t.call(e, a.data, a, this) && r.appendData(a.data), a = a.next;
  return r;
};
j.prototype.clear = function() {
  this.head = null, this.tail = null;
};
j.prototype.copy = function() {
  for (var t = new j(), e = this.head; e !== null; )
    t.insert(fe(e.data)), e = e.next;
  return t;
};
j.prototype.prepend = function(t) {
  return this.updateCursors(null, t, this.head, t), this.head !== null ? (this.head.prev = t, t.next = this.head) : this.tail = t, this.head = t, this;
};
j.prototype.prependData = function(t) {
  return this.prepend(fe(t));
};
j.prototype.append = function(t) {
  return this.insert(t);
};
j.prototype.appendData = function(t) {
  return this.insert(fe(t));
};
j.prototype.insert = function(t, e) {
  if (e != null)
    if (this.updateCursors(e.prev, t, e, t), e.prev === null) {
      if (this.head !== e)
        throw new Error("before doesn't belong to list");
      this.head = t, e.prev = t, t.next = e, this.updateCursors(null, t);
    } else
      e.prev.next = t, t.prev = e.prev, e.prev = t, t.next = e;
  else
    this.updateCursors(this.tail, t, null, t), this.tail !== null ? (this.tail.next = t, t.prev = this.tail) : this.head = t, this.tail = t;
  return this;
};
j.prototype.insertData = function(t, e) {
  return this.insert(fe(t), e);
};
j.prototype.remove = function(t) {
  if (this.updateCursors(t, t.prev, t, t.next), t.prev !== null)
    t.prev.next = t.next;
  else {
    if (this.head !== t)
      throw new Error("item doesn't belong to list");
    this.head = t.next;
  }
  if (t.next !== null)
    t.next.prev = t.prev;
  else {
    if (this.tail !== t)
      throw new Error("item doesn't belong to list");
    this.tail = t.prev;
  }
  return t.prev = null, t.next = null, t;
};
j.prototype.push = function(t) {
  this.insert(fe(t));
};
j.prototype.pop = function() {
  if (this.tail !== null)
    return this.remove(this.tail);
};
j.prototype.unshift = function(t) {
  this.prepend(fe(t));
};
j.prototype.shift = function() {
  if (this.head !== null)
    return this.remove(this.head);
};
j.prototype.prependList = function(t) {
  return this.insertList(t, this.head);
};
j.prototype.appendList = function(t) {
  return this.insertList(t);
};
j.prototype.insertList = function(t, e) {
  return t.head === null ? this : (e != null ? (this.updateCursors(e.prev, t.tail, e, t.head), e.prev !== null ? (e.prev.next = t.head, t.head.prev = e.prev) : this.head = t.head, e.prev = t.tail, t.tail.next = e) : (this.updateCursors(this.tail, t.tail, null, t.head), this.tail !== null ? (this.tail.next = t.head, t.head.prev = this.tail) : this.head = t.head, this.tail = t.tail), t.head = null, t.tail = null, this);
};
j.prototype.replace = function(t, e) {
  "head" in e ? this.insertList(e, t) : this.insert(e, t), this.remove(t);
};
var Fe = j, Qa = function(e, r) {
  var a = Object.create(SyntaxError.prototype), n = new Error();
  return a.name = e, a.message = r, Object.defineProperty(a, "stack", {
    get: function() {
      return (n.stack || "").replace(/^(.+\n){1,3}/, e + ": " + r + `
`);
    }
  }), a;
}, tp = Qa, Br = 100, Gn = 60, Vn = "    ";
function Hn(t, e) {
  function r(m, d) {
    return a.slice(m, d).map(function(u, g) {
      for (var S = String(m + g + 1); S.length < l; )
        S = " " + S;
      return S + " |" + u;
    }).join(`
`);
  }
  var a = t.source.split(/\r\n?|\n|\f/), n = t.line, i = t.column, s = Math.max(1, n - e) - 1, o = Math.min(n + e, a.length + 1), l = Math.max(4, String(o).length) + 1, p = 0;
  i += (Vn.length - 1) * (a[n - 1].substr(0, i - 1).match(/\t/g) || []).length, i > Br && (p = i - Gn + 3, i = Gn - 2);
  for (var c = s; c <= o; c++)
    c >= 0 && c < a.length && (a[c] = a[c].replace(/\t/g, Vn), a[c] = (p > 0 && a[c].length > p ? "…" : "") + a[c].substr(p, Br - 2) + (a[c].length > p + Br - 1 ? "…" : ""));
  return [
    r(s, n),
    new Array(i + l + 2).join("-") + "^",
    r(n, o)
  ].filter(Boolean).join(`
`);
}
var rp = function(t, e, r, a, n) {
  var i = tp("SyntaxError", t);
  return i.source = e, i.offset = r, i.line = a, i.column = n, i.sourceFragment = function(s) {
    return Hn(i, isNaN(s) ? 0 : s);
  }, Object.defineProperty(i, "formattedMessage", {
    get: function() {
      return "Parse error: " + i.message + `
` + Hn(i, 2);
    }
  }), i.parseError = {
    offset: r,
    line: a,
    column: n
  }, i;
}, fo = rp, za = {
  EOF: 0,
  // <EOF-token>
  Ident: 1,
  // <ident-token>
  Function: 2,
  // <function-token>
  AtKeyword: 3,
  // <at-keyword-token>
  Hash: 4,
  // <hash-token>
  String: 5,
  // <string-token>
  BadString: 6,
  // <bad-string-token>
  Url: 7,
  // <url-token>
  BadUrl: 8,
  // <bad-url-token>
  Delim: 9,
  // <delim-token>
  Number: 10,
  // <number-token>
  Percentage: 11,
  // <percentage-token>
  Dimension: 12,
  // <dimension-token>
  WhiteSpace: 13,
  // <whitespace-token>
  CDO: 14,
  // <CDO-token>
  CDC: 15,
  // <CDC-token>
  Colon: 16,
  // <colon-token>     :
  Semicolon: 17,
  // <semicolon-token> ;
  Comma: 18,
  // <comma-token>     ,
  LeftSquareBracket: 19,
  // <[-token>
  RightSquareBracket: 20,
  // <]-token>
  LeftParenthesis: 21,
  // <(-token>
  RightParenthesis: 22,
  // <)-token>
  LeftCurlyBracket: 23,
  // <{-token>
  RightCurlyBracket: 24,
  // <}-token>
  Comment: 25
}, ap = Object.keys(za).reduce(function(t, e) {
  return t[za[e]] = e, t;
}, {}), lr = {
  TYPE: za,
  NAME: ap
}, np = 0;
function Se(t) {
  return t >= 48 && t <= 57;
}
function ip(t) {
  return Se(t) || // 0 .. 9
  t >= 65 && t <= 70 || // A .. F
  t >= 97 && t <= 102;
}
function yo(t) {
  return t >= 65 && t <= 90;
}
function vo(t) {
  return t >= 97 && t <= 122;
}
function bo(t) {
  return yo(t) || vo(t);
}
function So(t) {
  return t >= 128;
}
function gt(t) {
  return bo(t) || So(t) || t === 95;
}
function sp(t) {
  return gt(t) || Se(t) || t === 45;
}
function xo(t) {
  return t >= 0 && t <= 8 || t === 11 || t >= 14 && t <= 31 || t === 127;
}
function Xa(t) {
  return t === 10 || t === 13 || t === 12;
}
function wo(t) {
  return Xa(t) || t === 32 || t === 9;
}
function ja(t, e) {
  return !(t !== 92 || Xa(e) || e === np);
}
function op(t, e, r) {
  return t === 45 ? gt(e) || e === 45 || ja(e, r) : gt(t) ? !0 : t === 92 ? ja(t, e) : !1;
}
function lp(t, e, r) {
  return t === 43 || t === 45 ? Se(e) ? 2 : e === 46 && Se(r) ? 3 : 0 : t === 46 ? Se(e) ? 2 : 0 : Se(t) ? 1 : 0;
}
function dp(t) {
  return t === 65279 || t === 65534 ? 1 : 0;
}
var Ce = new Array(128);
te.Eof = 128;
te.WhiteSpace = 130;
te.Digit = 131;
te.NameStart = 132;
te.NonPrintable = 133;
for (var X = 0; X < Ce.length; X++)
  switch (!0) {
    case wo(X):
      Ce[X] = te.WhiteSpace;
      break;
    case Se(X):
      Ce[X] = te.Digit;
      break;
    case gt(X):
      Ce[X] = te.NameStart;
      break;
    case xo(X):
      Ce[X] = te.NonPrintable;
      break;
    default:
      Ce[X] = X || te.Eof;
  }
function te(t) {
  return t < 128 ? Ce[t] : te.NameStart;
}
var Co = {
  isDigit: Se,
  isHexDigit: ip,
  isUppercaseLetter: yo,
  isLowercaseLetter: vo,
  isLetter: bo,
  isNonAscii: So,
  isNameStart: gt,
  isName: sp,
  isNonPrintable: xo,
  isNewline: Xa,
  isWhiteSpace: wo,
  isValidEscape: ja,
  isIdentifierStart: op,
  isNumberStart: lp,
  isBOM: dp,
  charCodeCategory: te
}, Ge = Co, Nt = Ge.isDigit, Un = Ge.isHexDigit, ko = Ge.isUppercaseLetter, pp = Ge.isName, Ja = Ge.isWhiteSpace, To = Ge.isValidEscape;
function Re(t, e) {
  return e < t.length ? t.charCodeAt(e) : 0;
}
function Eo(t, e, r) {
  return r === 13 && Re(t, e + 1) === 10 ? 2 : 1;
}
function _o(t, e, r) {
  var a = t.charCodeAt(e);
  return ko(a) && (a = a | 32), a === r;
}
function cp(t, e, r, a) {
  if (r - e !== a.length || e < 0 || r > t.length)
    return !1;
  for (var n = e; n < r; n++) {
    var i = t.charCodeAt(n), s = a.charCodeAt(n - e);
    if (ko(i) && (i = i | 32), i !== s)
      return !1;
  }
  return !0;
}
function up(t, e) {
  for (; e >= 0 && Ja(t.charCodeAt(e)); e--)
    ;
  return e + 1;
}
function mp(t, e) {
  for (; e < t.length && Ja(t.charCodeAt(e)); e++)
    ;
  return e;
}
function Rr(t, e) {
  for (; e < t.length && Nt(t.charCodeAt(e)); e++)
    ;
  return e;
}
function en(t, e) {
  if (e += 2, Un(Re(t, e - 1))) {
    for (var r = Math.min(t.length, e + 5); e < r && Un(Re(t, e)); e++)
      ;
    var a = Re(t, e);
    Ja(a) && (e += Eo(t, e, a));
  }
  return e;
}
function hp(t, e) {
  for (; e < t.length; e++) {
    var r = t.charCodeAt(e);
    if (!pp(r)) {
      if (To(r, Re(t, e + 1))) {
        e = en(t, e) - 1;
        continue;
      }
      break;
    }
  }
  return e;
}
function gp(t, e) {
  var r = t.charCodeAt(e);
  if ((r === 43 || r === 45) && (r = t.charCodeAt(e += 1)), Nt(r) && (e = Rr(t, e + 1), r = t.charCodeAt(e)), r === 46 && Nt(t.charCodeAt(e + 1)) && (r = t.charCodeAt(e += 2), e = Rr(t, e)), _o(
    t,
    e,
    101
    /* e */
  )) {
    var a = 0;
    r = t.charCodeAt(e + 1), (r === 45 || r === 43) && (a = 1, r = t.charCodeAt(e + 2)), Nt(r) && (e = Rr(t, e + 1 + a + 1));
  }
  return e;
}
function fp(t, e) {
  for (; e < t.length; e++) {
    var r = t.charCodeAt(e);
    if (r === 41) {
      e++;
      break;
    }
    To(r, Re(t, e + 1)) && (e = en(t, e));
  }
  return e;
}
var St = {
  consumeEscaped: en,
  consumeName: hp,
  consumeNumber: gp,
  consumeBadUrlRemnants: fp,
  cmpChar: _o,
  cmpStr: cp,
  getNewlineLength: Eo,
  findWhiteSpaceStart: up,
  findWhiteSpaceEnd: mp
}, Ao = lr, ft = Ao.TYPE, yp = Ao.NAME, vp = St, bp = vp.cmpStr, Yn = ft.EOF, Kn = ft.WhiteSpace, Sp = ft.Comment, ne = 16777215, Oe = 24, Oo = function() {
  this.offsetAndType = null, this.balance = null, this.reset();
};
Oo.prototype = {
  reset: function() {
    this.eof = !1, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
  },
  lookupType: function(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t] >> Oe : Yn;
  },
  lookupOffset: function(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t - 1] & ne : this.source.length;
  },
  lookupValue: function(t, e) {
    return t += this.tokenIndex, t < this.tokenCount ? bp(
      this.source,
      this.offsetAndType[t - 1] & ne,
      this.offsetAndType[t] & ne,
      e
    ) : !1;
  },
  getTokenStart: function(t) {
    return t === this.tokenIndex ? this.tokenStart : t > 0 ? t < this.tokenCount ? this.offsetAndType[t - 1] & ne : this.offsetAndType[this.tokenCount] & ne : this.firstCharOffset;
  },
  // TODO: -> skipUntilBalanced
  getRawLength: function(t, e) {
    var r = t, a, n = this.offsetAndType[Math.max(r - 1, 0)] & ne, i;
    e:
      for (; r < this.tokenCount; r++) {
        if (a = this.balance[r], a < t)
          break e;
        switch (i = this.offsetAndType[r] >> Oe, e(i, this.source, n)) {
          case 1:
            break e;
          case 2:
            r++;
            break e;
          default:
            this.balance[a] === r && (r = a), n = this.offsetAndType[r] & ne;
        }
      }
    return r - this.tokenIndex;
  },
  isBalanceEdge: function(t) {
    return this.balance[this.tokenIndex] < t;
  },
  isDelim: function(t, e) {
    return e ? this.lookupType(e) === ft.Delim && this.source.charCodeAt(this.lookupOffset(e)) === t : this.tokenType === ft.Delim && this.source.charCodeAt(this.tokenStart) === t;
  },
  getTokenValue: function() {
    return this.source.substring(this.tokenStart, this.tokenEnd);
  },
  getTokenLength: function() {
    return this.tokenEnd - this.tokenStart;
  },
  substrToCursor: function(t) {
    return this.source.substring(t, this.tokenStart);
  },
  skipWS: function() {
    for (var t = this.tokenIndex, e = 0; t < this.tokenCount && this.offsetAndType[t] >> Oe === Kn; t++, e++)
      ;
    e > 0 && this.skip(e);
  },
  skipSC: function() {
    for (; this.tokenType === Kn || this.tokenType === Sp; )
      this.next();
  },
  skip: function(t) {
    var e = this.tokenIndex + t;
    e < this.tokenCount ? (this.tokenIndex = e, this.tokenStart = this.offsetAndType[e - 1] & ne, e = this.offsetAndType[e], this.tokenType = e >> Oe, this.tokenEnd = e & ne) : (this.tokenIndex = this.tokenCount, this.next());
  },
  next: function() {
    var t = this.tokenIndex + 1;
    t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = this.tokenEnd, t = this.offsetAndType[t], this.tokenType = t >> Oe, this.tokenEnd = t & ne) : (this.tokenIndex = this.tokenCount, this.eof = !0, this.tokenType = Yn, this.tokenStart = this.tokenEnd = this.source.length);
  },
  forEachToken(t) {
    for (var e = 0, r = this.firstCharOffset; e < this.tokenCount; e++) {
      var a = r, n = this.offsetAndType[e], i = n & ne, s = n >> Oe;
      r = i, t(s, a, i, e);
    }
  },
  dump() {
    var t = new Array(this.tokenCount);
    return this.forEachToken((e, r, a, n) => {
      t[n] = {
        idx: n,
        type: yp[e],
        chunk: this.source.substring(r, a),
        balance: this.balance[n]
      };
    }), t;
  }
};
var dr = Oo;
function xp(t) {
  return t;
}
function wp(t) {
  return t.min === 0 && t.max === 0 ? "*" : t.min === 0 && t.max === 1 ? "?" : t.min === 1 && t.max === 0 ? t.comma ? "#" : "+" : t.min === 1 && t.max === 1 ? "" : (t.comma ? "#" : "") + (t.min === t.max ? "{" + t.min + "}" : "{" + t.min + "," + (t.max !== 0 ? t.max : "") + "}");
}
function Cp(t) {
  switch (t.type) {
    case "Range":
      return " [" + (t.min === null ? "-∞" : t.min) + "," + (t.max === null ? "∞" : t.max) + "]";
    default:
      throw new Error("Unknown node type `" + t.type + "`");
  }
}
function kp(t, e, r, a) {
  var n = t.combinator === " " || a ? t.combinator : " " + t.combinator + " ", i = t.terms.map(function(s) {
    return tn(s, e, r, a);
  }).join(n);
  return (t.explicit || r) && (i = (a || i[0] === "," ? "[" : "[ ") + i + (a ? "]" : " ]")), i;
}
function tn(t, e, r, a) {
  var n;
  switch (t.type) {
    case "Group":
      n = kp(t, e, r, a) + (t.disallowEmpty ? "!" : "");
      break;
    case "Multiplier":
      return tn(t.term, e, r, a) + e(wp(t), t);
    case "Type":
      n = "<" + t.name + (t.opts ? e(Cp(t.opts), t.opts) : "") + ">";
      break;
    case "Property":
      n = "<'" + t.name + "'>";
      break;
    case "Keyword":
      n = t.name;
      break;
    case "AtKeyword":
      n = "@" + t.name;
      break;
    case "Function":
      n = t.name + "(";
      break;
    case "String":
    case "Token":
      n = t.value;
      break;
    case "Comma":
      n = ",";
      break;
    default:
      throw new Error("Unknown node type `" + t.type + "`");
  }
  return e(n, t);
}
var rn = function(t, e) {
  var r = xp, a = !1, n = !1;
  return typeof e == "function" ? r = e : e && (a = !!e.forceBraces, n = !!e.compact, typeof e.decorate == "function" && (r = e.decorate)), tn(t, r, a, n);
};
const zo = Qa, Tp = rn, Zn = { offset: 0, line: 1, column: 1 };
function Ep(t, e) {
  const r = t.tokens, a = t.longestMatch, n = a < r.length && r[a].node || null, i = n !== e ? n : null;
  let s = 0, o = 0, l = 0, p = "", c, m;
  for (let d = 0; d < r.length; d++) {
    const u = r[d].value;
    d === a && (o = u.length, s = p.length), i !== null && r[d].node === i && (d <= a ? l++ : l = 0), p += u;
  }
  return a === r.length || l > 1 ? (c = zt(i || e, "end") || at(Zn, p), m = at(c)) : (c = zt(i, "start") || at(zt(e, "start") || Zn, p.slice(0, s)), m = zt(i, "end") || at(c, p.substr(s, o))), {
    css: p,
    mismatchOffset: s,
    mismatchLength: o,
    start: c,
    end: m
  };
}
function zt(t, e) {
  const r = t && t.loc && t.loc[e];
  return r ? "line" in r ? at(r) : r : null;
}
function at({ offset: t, line: e, column: r }, a) {
  const n = {
    offset: t,
    line: e,
    column: r
  };
  if (a) {
    const i = a.split(/\n|\r\n?|\f/);
    n.offset += a.length, n.line += i.length - 1, n.column = i.length === 1 ? n.column + a.length : i.pop().length + 1;
  }
  return n;
}
const _p = function(t, e) {
  const r = zo(
    "SyntaxReferenceError",
    t + (e ? " `" + e + "`" : "")
  );
  return r.reference = e, r;
}, Ap = function(t, e, r, a) {
  const n = zo("SyntaxMatchError", t), {
    css: i,
    mismatchOffset: s,
    mismatchLength: o,
    start: l,
    end: p
  } = Ep(a, r);
  return n.rawMessage = t, n.syntax = e ? Tp(e) : "<generic>", n.css = i, n.mismatchOffset = s, n.mismatchLength = o, n.message = t + `
  syntax: ` + n.syntax + `
   value: ` + (i || "<empty string>") + `
  --------` + new Array(n.mismatchOffset + 1).join("-") + "^", Object.assign(n, l), n.loc = {
    source: r && r.loc && r.loc.source || "<unknown>",
    start: l,
    end: p
  }, n;
};
var jo = {
  SyntaxReferenceError: _p,
  SyntaxMatchError: Ap
}, Yt = Object.prototype.hasOwnProperty, ze = /* @__PURE__ */ Object.create(null), je = /* @__PURE__ */ Object.create(null), Kt = 45;
function an(t, e) {
  return e = e || 0, t.length - e >= 2 && t.charCodeAt(e) === Kt && t.charCodeAt(e + 1) === Kt;
}
function nn(t, e) {
  if (e = e || 0, t.length - e >= 3 && t.charCodeAt(e) === Kt && t.charCodeAt(e + 1) !== Kt) {
    var r = t.indexOf("-", e + 2);
    if (r !== -1)
      return t.substring(e, r + 1);
  }
  return "";
}
function Op(t) {
  if (Yt.call(ze, t))
    return ze[t];
  var e = t.toLowerCase();
  if (Yt.call(ze, e))
    return ze[t] = ze[e];
  var r = an(e, 0), a = r ? "" : nn(e, 0);
  return ze[t] = Object.freeze({
    basename: e.substr(a.length),
    name: e,
    vendor: a,
    prefix: a,
    custom: r
  });
}
function zp(t) {
  if (Yt.call(je, t))
    return je[t];
  var e = t, r = t[0];
  r === "/" ? r = t[1] === "/" ? "//" : "/" : r !== "_" && r !== "*" && r !== "$" && r !== "#" && r !== "+" && r !== "&" && (r = "");
  var a = an(e, r.length);
  if (!a && (e = e.toLowerCase(), Yt.call(je, e)))
    return je[t] = je[e];
  var n = a ? "" : nn(e, r.length), i = e.substr(0, r.length + n.length);
  return je[t] = Object.freeze({
    basename: e.substr(i.length),
    name: e.substr(r.length),
    hack: r,
    vendor: n,
    prefix: i,
    custom: a
  });
}
var sn = {
  keyword: Op,
  property: zp,
  isCustomProperty: an,
  vendorPrefix: nn
}, jp = 16 * 1024, Lp = typeof Uint32Array < "u" ? Uint32Array : Array, Lo = function(e, r) {
  return e === null || e.length < r ? new Lp(Math.max(r + 1024, jp)) : e;
}, Wp = dr, Qn = Lo, La = lr, L = La.TYPE, me = Co, Xn = me.isNewline, Pp = me.isName, jt = me.isValidEscape, Mr = me.isNumberStart, qr = me.isIdentifierStart, J = me.charCodeCategory, Ip = me.isBOM, he = St, Bp = he.cmpStr, Jn = he.getNewlineLength, Lt = he.findWhiteSpaceEnd, ei = he.consumeEscaped, Wt = he.consumeName, Rp = he.consumeNumber, Dr = he.consumeBadUrlRemnants, ti = 16777215, Le = 24;
function pr(t, e) {
  function r(y) {
    return y < o ? t.charCodeAt(y) : 0;
  }
  function a() {
    if (d = Rp(t, d), qr(r(d), r(d + 1), r(d + 2))) {
      f = L.Dimension, d = Wt(t, d);
      return;
    }
    if (r(d) === 37) {
      f = L.Percentage, d++;
      return;
    }
    f = L.Number;
  }
  function n() {
    const y = d;
    if (d = Wt(t, d), Bp(t, y, d, "url") && r(d) === 40) {
      if (d = Lt(t, d + 1), r(d) === 34 || r(d) === 39) {
        f = L.Function, d = y + 4;
        return;
      }
      s();
      return;
    }
    if (r(d) === 40) {
      f = L.Function, d++;
      return;
    }
    f = L.Ident;
  }
  function i(y) {
    for (y || (y = r(d++)), f = L.String; d < t.length; d++) {
      var w = t.charCodeAt(d);
      switch (J(w)) {
        case y:
          d++;
          return;
        case J.Eof:
          return;
        case J.WhiteSpace:
          if (Xn(w)) {
            d += Jn(t, d, w), f = L.BadString;
            return;
          }
          break;
        case 92:
          if (d === t.length - 1)
            break;
          var h = r(d + 1);
          Xn(h) ? d += Jn(t, d + 1, h) : jt(w, h) && (d = ei(t, d) - 1);
          break;
      }
    }
  }
  function s() {
    for (f = L.Url, d = Lt(t, d); d < t.length; d++) {
      var y = t.charCodeAt(d);
      switch (J(y)) {
        case 41:
          d++;
          return;
        case J.Eof:
          return;
        case J.WhiteSpace:
          if (d = Lt(t, d), r(d) === 41 || d >= t.length) {
            d < t.length && d++;
            return;
          }
          d = Dr(t, d), f = L.BadUrl;
          return;
        case 34:
        case 39:
        case 40:
        case J.NonPrintable:
          d = Dr(t, d), f = L.BadUrl;
          return;
        case 92:
          if (jt(y, r(d + 1))) {
            d = ei(t, d) - 1;
            break;
          }
          d = Dr(t, d), f = L.BadUrl;
          return;
      }
    }
  }
  e || (e = new Wp()), t = String(t || "");
  for (var o = t.length, l = Qn(e.offsetAndType, o + 1), p = Qn(e.balance, o + 1), c = 0, m = Ip(r(0)), d = m, u = 0, g = 0, S = 0; d < o; ) {
    var b = t.charCodeAt(d), f = 0;
    switch (p[c] = o, J(b)) {
      case J.WhiteSpace:
        f = L.WhiteSpace, d = Lt(t, d + 1);
        break;
      case 34:
        i();
        break;
      case 35:
        Pp(r(d + 1)) || jt(r(d + 1), r(d + 2)) ? (f = L.Hash, d = Wt(t, d + 1)) : (f = L.Delim, d++);
        break;
      case 39:
        i();
        break;
      case 40:
        f = L.LeftParenthesis, d++;
        break;
      case 41:
        f = L.RightParenthesis, d++;
        break;
      case 43:
        Mr(b, r(d + 1), r(d + 2)) ? a() : (f = L.Delim, d++);
        break;
      case 44:
        f = L.Comma, d++;
        break;
      case 45:
        Mr(b, r(d + 1), r(d + 2)) ? a() : r(d + 1) === 45 && r(d + 2) === 62 ? (f = L.CDC, d = d + 3) : qr(b, r(d + 1), r(d + 2)) ? n() : (f = L.Delim, d++);
        break;
      case 46:
        Mr(b, r(d + 1), r(d + 2)) ? a() : (f = L.Delim, d++);
        break;
      case 47:
        r(d + 1) === 42 ? (f = L.Comment, d = t.indexOf("*/", d + 2) + 2, d === 1 && (d = t.length)) : (f = L.Delim, d++);
        break;
      case 58:
        f = L.Colon, d++;
        break;
      case 59:
        f = L.Semicolon, d++;
        break;
      case 60:
        r(d + 1) === 33 && r(d + 2) === 45 && r(d + 3) === 45 ? (f = L.CDO, d = d + 4) : (f = L.Delim, d++);
        break;
      case 64:
        qr(r(d + 1), r(d + 2), r(d + 3)) ? (f = L.AtKeyword, d = Wt(t, d + 1)) : (f = L.Delim, d++);
        break;
      case 91:
        f = L.LeftSquareBracket, d++;
        break;
      case 92:
        jt(b, r(d + 1)) ? n() : (f = L.Delim, d++);
        break;
      case 93:
        f = L.RightSquareBracket, d++;
        break;
      case 123:
        f = L.LeftCurlyBracket, d++;
        break;
      case 125:
        f = L.RightCurlyBracket, d++;
        break;
      case J.Digit:
        a();
        break;
      case J.NameStart:
        n();
        break;
      case J.Eof:
        break;
      default:
        f = L.Delim, d++;
    }
    switch (f) {
      case u:
        for (S = g & ti, g = p[S], u = g >> Le, p[c] = S, p[S++] = c; S < c; S++)
          p[S] === o && (p[S] = c);
        break;
      case L.LeftParenthesis:
      case L.Function:
        p[c] = g, u = L.RightParenthesis, g = u << Le | c;
        break;
      case L.LeftSquareBracket:
        p[c] = g, u = L.RightSquareBracket, g = u << Le | c;
        break;
      case L.LeftCurlyBracket:
        p[c] = g, u = L.RightCurlyBracket, g = u << Le | c;
        break;
    }
    l[c++] = f << Le | d;
  }
  for (l[c] = L.EOF << Le | d, p[c] = o, p[o] = o; g !== 0; )
    S = g & ti, g = p[S], p[S] = o;
  return e.source = t, e.firstCharOffset = m, e.offsetAndType = l, e.tokenCount = c, e.balance = p, e.reset(), e.next(), e;
}
Object.keys(La).forEach(function(t) {
  pr[t] = La[t];
});
Object.keys(me).forEach(function(t) {
  pr[t] = me[t];
});
Object.keys(he).forEach(function(t) {
  pr[t] = he[t];
});
var T = pr, Wo = T.isDigit, Nr = T.cmpChar, Ve = T.TYPE, Mp = Ve.Delim, qp = Ve.WhiteSpace, Dp = Ve.Comment, Pt = Ve.Ident, Wa = Ve.Number, Np = Ve.Dimension, yt = 43, se = 45, $r = 110, We = !0, $p = !1;
function Pa(t, e) {
  return t !== null && t.type === Mp && t.value.charCodeAt(0) === e;
}
function ct(t, e, r) {
  for (; t !== null && (t.type === qp || t.type === Dp); )
    t = r(++e);
  return e;
}
function ve(t, e, r, a) {
  if (!t)
    return 0;
  var n = t.value.charCodeAt(e);
  if (n === yt || n === se) {
    if (r)
      return 0;
    e++;
  }
  for (; e < t.value.length; e++)
    if (!Wo(t.value.charCodeAt(e)))
      return 0;
  return a + 1;
}
function Fr(t, e, r) {
  var a = !1, n = ct(t, e, r);
  if (t = r(n), t === null)
    return e;
  if (t.type !== Wa)
    if (Pa(t, yt) || Pa(t, se)) {
      if (a = !0, n = ct(r(++n), n, r), t = r(n), t === null && t.type !== Wa)
        return 0;
    } else
      return e;
  if (!a) {
    var i = t.value.charCodeAt(0);
    if (i !== yt && i !== se)
      return 0;
  }
  return ve(t, a ? 0 : 1, a, n);
}
var Fp = function(e, r) {
  var a = 0;
  if (!e)
    return 0;
  if (e.type === Wa)
    return ve(e, 0, $p, a);
  if (e.type === Pt && e.value.charCodeAt(0) === se) {
    if (!Nr(e.value, 1, $r))
      return 0;
    switch (e.value.length) {
      case 2:
        return Fr(r(++a), a, r);
      case 3:
        return e.value.charCodeAt(2) !== se ? 0 : (a = ct(r(++a), a, r), e = r(a), ve(e, 0, We, a));
      default:
        return e.value.charCodeAt(2) !== se ? 0 : ve(e, 3, We, a);
    }
  } else if (e.type === Pt || Pa(e, yt) && r(a + 1).type === Pt) {
    if (e.type !== Pt && (e = r(++a)), e === null || !Nr(e.value, 0, $r))
      return 0;
    switch (e.value.length) {
      case 1:
        return Fr(r(++a), a, r);
      case 2:
        return e.value.charCodeAt(1) !== se ? 0 : (a = ct(r(++a), a, r), e = r(a), ve(e, 0, We, a));
      default:
        return e.value.charCodeAt(1) !== se ? 0 : ve(e, 2, We, a);
    }
  } else if (e.type === Np) {
    for (var n = e.value.charCodeAt(0), i = n === yt || n === se ? 1 : 0, s = i; s < e.value.length && Wo(e.value.charCodeAt(s)); s++)
      ;
    return s === i || !Nr(e.value, s, $r) ? 0 : s + 1 === e.value.length ? Fr(r(++a), a, r) : e.value.charCodeAt(s + 1) !== se ? 0 : s + 2 === e.value.length ? (a = ct(r(++a), a, r), e = r(a), ve(e, 0, We, a)) : ve(e, s + 2, We, a);
  }
  return 0;
}, Gp = T.isHexDigit, Vp = T.cmpChar, cr = T.TYPE, ri = cr.Ident, Hp = cr.Delim, ai = cr.Number, ni = cr.Dimension, Gr = 43, Po = 45, Io = 63, Up = 117;
function Ia(t, e) {
  return t !== null && t.type === Hp && t.value.charCodeAt(0) === e;
}
function Vr(t, e) {
  return t.value.charCodeAt(0) === e;
}
function nt(t, e, r) {
  for (var a = e, n = 0; a < t.value.length; a++) {
    var i = t.value.charCodeAt(a);
    if (i === Po && r && n !== 0)
      return nt(t, e + n + 1, !1) > 0 ? 6 : 0;
    if (!Gp(i) || ++n > 6)
      return 0;
  }
  return n;
}
function It(t, e, r) {
  if (!t)
    return 0;
  for (; Ia(r(e), Io); ) {
    if (++t > 6)
      return 0;
    e++;
  }
  return e;
}
var Yp = function(e, r) {
  var a = 0;
  if (e === null || e.type !== ri || !Vp(e.value, 0, Up) || (e = r(++a), e === null))
    return 0;
  if (Ia(e, Gr))
    return e = r(++a), e === null ? 0 : e.type === ri ? It(nt(e, 0, !0), ++a, r) : Ia(e, Io) ? It(1, ++a, r) : 0;
  if (e.type === ai) {
    if (!Vr(e, Gr))
      return 0;
    var n = nt(e, 1, !0);
    return n === 0 ? 0 : (e = r(++a), e === null ? a : e.type === ni || e.type === ai ? !Vr(e, Po) || !nt(e, 1, !1) ? 0 : a + 1 : It(n, a, r));
  }
  return e.type === ni && Vr(e, Gr) ? It(nt(e, 1, !0), ++a, r) : 0;
}, He = T, Kp = He.isIdentifierStart, Zp = He.isHexDigit, Bo = He.isDigit, Qp = He.cmpStr, Ro = He.consumeNumber, O = He.TYPE, Xp = Fp, Jp = Yp, ec = ["unset", "initial", "inherit"], tc = ["calc(", "-moz-calc(", "-webkit-calc("], rc = {
  // absolute length units
  px: !0,
  mm: !0,
  cm: !0,
  in: !0,
  pt: !0,
  pc: !0,
  q: !0,
  // relative length units
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  // viewport-percentage lengths
  vh: !0,
  vw: !0,
  vmin: !0,
  vmax: !0,
  vm: !0
}, ac = {
  deg: !0,
  grad: !0,
  rad: !0,
  turn: !0
}, nc = {
  s: !0,
  ms: !0
}, ic = {
  hz: !0,
  khz: !0
}, sc = {
  dpi: !0,
  dpcm: !0,
  dppx: !0,
  x: !0
  // https://github.com/w3c/csswg-drafts/issues/461
}, oc = {
  fr: !0
}, lc = {
  db: !0
}, dc = {
  st: !0
};
function ut(t, e) {
  return e < t.length ? t.charCodeAt(e) : 0;
}
function on(t, e) {
  return Qp(t, 0, t.length, e);
}
function Mo(t, e) {
  for (var r = 0; r < e.length; r++)
    if (on(t, e[r]))
      return !0;
  return !1;
}
function qo(t, e) {
  return e !== t.length - 2 ? !1 : t.charCodeAt(e) === 92 && // U+005C REVERSE SOLIDUS (\)
  Bo(t.charCodeAt(e + 1));
}
function ur(t, e, r) {
  if (t && t.type === "Range") {
    var a = Number(
      r !== void 0 && r !== e.length ? e.substr(0, r) : e
    );
    if (isNaN(a) || t.min !== null && a < t.min || t.max !== null && a > t.max)
      return !0;
  }
  return !1;
}
function Do(t, e) {
  var r = t.index, a = 0;
  do
    if (a++, t.balance <= r)
      break;
  while (t = e(a));
  return a;
}
function ee(t) {
  return function(e, r, a) {
    return e === null ? 0 : e.type === O.Function && Mo(e.value, tc) ? Do(e, r) : t(e, r, a);
  };
}
function I(t) {
  return function(e) {
    return e === null || e.type !== t ? 0 : 1;
  };
}
function pc(t) {
  return t = t + "(", function(e, r) {
    return e !== null && on(e.value, t) ? Do(e, r) : 0;
  };
}
function cc(t) {
  if (t === null || t.type !== O.Ident)
    return 0;
  var e = t.value.toLowerCase();
  return Mo(e, ec) || on(e, "default") ? 0 : 1;
}
function uc(t) {
  return t === null || t.type !== O.Ident || ut(t.value, 0) !== 45 || ut(t.value, 1) !== 45 ? 0 : 1;
}
function mc(t) {
  if (t === null || t.type !== O.Hash)
    return 0;
  var e = t.value.length;
  if (e !== 4 && e !== 5 && e !== 7 && e !== 9)
    return 0;
  for (var r = 1; r < e; r++)
    if (!Zp(t.value.charCodeAt(r)))
      return 0;
  return 1;
}
function hc(t) {
  return t === null || t.type !== O.Hash || !Kp(ut(t.value, 1), ut(t.value, 2), ut(t.value, 3)) ? 0 : 1;
}
function gc(t, e) {
  if (!t)
    return 0;
  var r = 0, a = 0, n = t.index;
  e:
    do {
      switch (t.type) {
        case O.BadString:
        case O.BadUrl:
          break e;
        case O.RightCurlyBracket:
        case O.RightParenthesis:
        case O.RightSquareBracket:
          if (t.balance > t.index || t.balance < n)
            break e;
          a--;
          break;
        case O.Semicolon:
          if (a === 0)
            break e;
          break;
        case O.Delim:
          if (t.value === "!" && a === 0)
            break e;
          break;
        case O.Function:
        case O.LeftParenthesis:
        case O.LeftSquareBracket:
        case O.LeftCurlyBracket:
          a++;
          break;
      }
      if (r++, t.balance <= n)
        break;
    } while (t = e(r));
  return r;
}
function fc(t, e) {
  if (!t)
    return 0;
  var r = t.index, a = 0;
  e:
    do {
      switch (t.type) {
        case O.BadString:
        case O.BadUrl:
          break e;
        case O.RightCurlyBracket:
        case O.RightParenthesis:
        case O.RightSquareBracket:
          if (t.balance > t.index || t.balance < r)
            break e;
          break;
      }
      if (a++, t.balance <= r)
        break;
    } while (t = e(a));
  return a;
}
function de(t) {
  return function(e, r, a) {
    if (e === null || e.type !== O.Dimension)
      return 0;
    var n = Ro(e.value, 0);
    if (t !== null) {
      var i = e.value.indexOf("\\", n), s = i === -1 || !qo(e.value, i) ? e.value.substr(n) : e.value.substring(n, i);
      if (t.hasOwnProperty(s.toLowerCase()) === !1)
        return 0;
    }
    return ur(a, e.value, n) ? 0 : 1;
  };
}
function yc(t, e, r) {
  return t === null || t.type !== O.Percentage || ur(r, t.value, t.value.length - 1) ? 0 : 1;
}
function ii(t) {
  return typeof t != "function" && (t = function() {
    return 0;
  }), function(e, r, a) {
    return e !== null && e.type === O.Number && Number(e.value) === 0 ? 1 : t(e, r, a);
  };
}
function vc(t, e, r) {
  if (t === null)
    return 0;
  var a = Ro(t.value, 0), n = a === t.value.length;
  return !n && !qo(t.value, a) || ur(r, t.value, a) ? 0 : 1;
}
function bc(t, e, r) {
  if (t === null || t.type !== O.Number)
    return 0;
  for (var a = t.value.charCodeAt(0) === 43 || // U+002B PLUS SIGN (+)
  t.value.charCodeAt(0) === 45 ? 1 : 0; a < t.value.length; a++)
    if (!Bo(t.value.charCodeAt(a)))
      return 0;
  return ur(r, t.value, a) ? 0 : 1;
}
var Sc = {
  // token types
  "ident-token": I(O.Ident),
  "function-token": I(O.Function),
  "at-keyword-token": I(O.AtKeyword),
  "hash-token": I(O.Hash),
  "string-token": I(O.String),
  "bad-string-token": I(O.BadString),
  "url-token": I(O.Url),
  "bad-url-token": I(O.BadUrl),
  "delim-token": I(O.Delim),
  "number-token": I(O.Number),
  "percentage-token": I(O.Percentage),
  "dimension-token": I(O.Dimension),
  "whitespace-token": I(O.WhiteSpace),
  "CDO-token": I(O.CDO),
  "CDC-token": I(O.CDC),
  "colon-token": I(O.Colon),
  "semicolon-token": I(O.Semicolon),
  "comma-token": I(O.Comma),
  "[-token": I(O.LeftSquareBracket),
  "]-token": I(O.RightSquareBracket),
  "(-token": I(O.LeftParenthesis),
  ")-token": I(O.RightParenthesis),
  "{-token": I(O.LeftCurlyBracket),
  "}-token": I(O.RightCurlyBracket),
  // token type aliases
  string: I(O.String),
  ident: I(O.Ident),
  // complex types
  "custom-ident": cc,
  "custom-property-name": uc,
  "hex-color": mc,
  "id-selector": hc,
  // element( <id-selector> )
  "an-plus-b": Xp,
  urange: Jp,
  "declaration-value": gc,
  "any-value": fc,
  // dimensions
  dimension: ee(de(null)),
  angle: ee(de(ac)),
  decibel: ee(de(lc)),
  frequency: ee(de(ic)),
  flex: ee(de(oc)),
  length: ee(ii(de(rc))),
  resolution: ee(de(sc)),
  semitones: ee(de(dc)),
  time: ee(de(nc)),
  // percentage
  percentage: ee(yc),
  // numeric
  zero: ii(),
  number: ee(vc),
  integer: ee(bc),
  // old IE stuff
  "-ms-legacy-expression": pc("expression")
}, xc = Qa, No = function(e, r, a) {
  var n = xc("SyntaxError", e);
  return n.input = r, n.offset = a, n.rawMessage = e, n.message = n.rawMessage + `
  ` + n.input + `
--` + new Array((n.offset || n.input.length) + 1).join("-") + "^", n;
}, wc = No, Cc = 9, kc = 10, Tc = 12, Ec = 13, _c = 32, $o = function(t) {
  this.str = t, this.pos = 0;
};
$o.prototype = {
  charCodeAt: function(t) {
    return t < this.str.length ? this.str.charCodeAt(t) : 0;
  },
  charCode: function() {
    return this.charCodeAt(this.pos);
  },
  nextCharCode: function() {
    return this.charCodeAt(this.pos + 1);
  },
  nextNonWsCode: function(t) {
    return this.charCodeAt(this.findWsEnd(t));
  },
  findWsEnd: function(t) {
    for (; t < this.str.length; t++) {
      var e = this.str.charCodeAt(t);
      if (e !== Ec && e !== kc && e !== Tc && e !== _c && e !== Cc)
        break;
    }
    return t;
  },
  substringToPos: function(t) {
    return this.str.substring(this.pos, this.pos = t);
  },
  eat: function(t) {
    this.charCode() !== t && this.error("Expect `" + String.fromCharCode(t) + "`"), this.pos++;
  },
  peek: function() {
    return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
  },
  error: function(t) {
    throw new wc(t, this.str, this.pos);
  }
};
var Ac = $o, Oc = Ac, zc = 9, jc = 10, Lc = 12, Wc = 13, Pc = 32, Fo = 33, Go = 35, si = 38, Zt = 39, Vo = 40, Ic = 41, Ho = 42, Uo = 43, ln = 44, oi = 45, dn = 60, Yo = 62, Ko = 63, Bc = 64, mr = 91, pn = 93, Qt = 123, li = 124, di = 125, pi = 8734, Ba = Rc(function(t) {
  return /[a-zA-Z0-9\-]/.test(t);
}), ci = {
  " ": 1,
  "&&": 2,
  "||": 3,
  "|": 4
};
function Rc(t) {
  for (var e = typeof Uint32Array == "function" ? new Uint32Array(128) : new Array(128), r = 0; r < 128; r++)
    e[r] = t(String.fromCharCode(r)) ? 1 : 0;
  return e;
}
function Xt(t) {
  return t.substringToPos(
    t.findWsEnd(t.pos)
  );
}
function hr(t) {
  for (var e = t.pos; e < t.str.length; e++) {
    var r = t.str.charCodeAt(e);
    if (r >= 128 || Ba[r] === 0)
      break;
  }
  return t.pos === e && t.error("Expect a keyword"), t.substringToPos(e);
}
function Jt(t) {
  for (var e = t.pos; e < t.str.length; e++) {
    var r = t.str.charCodeAt(e);
    if (r < 48 || r > 57)
      break;
  }
  return t.pos === e && t.error("Expect a number"), t.substringToPos(e);
}
function Mc(t) {
  var e = t.str.indexOf("'", t.pos + 1);
  return e === -1 && (t.pos = t.str.length, t.error("Expect an apostrophe")), t.substringToPos(e + 1);
}
function ui(t) {
  var e = null, r = null;
  return t.eat(Qt), e = Jt(t), t.charCode() === ln ? (t.pos++, t.charCode() !== di && (r = Jt(t))) : r = e, t.eat(di), {
    min: Number(e),
    max: r ? Number(r) : 0
  };
}
function qc(t) {
  var e = null, r = !1;
  switch (t.charCode()) {
    case Ho:
      t.pos++, e = {
        min: 0,
        max: 0
      };
      break;
    case Uo:
      t.pos++, e = {
        min: 1,
        max: 0
      };
      break;
    case Ko:
      t.pos++, e = {
        min: 0,
        max: 1
      };
      break;
    case Go:
      t.pos++, r = !0, t.charCode() === Qt ? e = ui(t) : e = {
        min: 1,
        max: 0
      };
      break;
    case Qt:
      e = ui(t);
      break;
    default:
      return null;
  }
  return {
    type: "Multiplier",
    comma: r,
    min: e.min,
    max: e.max,
    term: null
  };
}
function vt(t, e) {
  var r = qc(t);
  return r !== null ? (r.term = e, r) : e;
}
function Hr(t) {
  var e = t.peek();
  return e === "" ? null : {
    type: "Token",
    value: e
  };
}
function Dc(t) {
  var e;
  return t.eat(dn), t.eat(Zt), e = hr(t), t.eat(Zt), t.eat(Yo), vt(t, {
    type: "Property",
    name: e
  });
}
function Nc(t) {
  var e = null, r = null, a = 1;
  return t.eat(mr), t.charCode() === oi && (t.peek(), a = -1), a == -1 && t.charCode() === pi ? t.peek() : e = a * Number(Jt(t)), Xt(t), t.eat(ln), Xt(t), t.charCode() === pi ? t.peek() : (a = 1, t.charCode() === oi && (t.peek(), a = -1), r = a * Number(Jt(t))), t.eat(pn), e === null && r === null ? null : {
    type: "Range",
    min: e,
    max: r
  };
}
function $c(t) {
  var e, r = null;
  return t.eat(dn), e = hr(t), t.charCode() === Vo && t.nextCharCode() === Ic && (t.pos += 2, e += "()"), t.charCodeAt(t.findWsEnd(t.pos)) === mr && (Xt(t), r = Nc(t)), t.eat(Yo), vt(t, {
    type: "Type",
    name: e,
    opts: r
  });
}
function Fc(t) {
  var e;
  return e = hr(t), t.charCode() === Vo ? (t.pos++, {
    type: "Function",
    name: e
  }) : vt(t, {
    type: "Keyword",
    name: e
  });
}
function Gc(t, e) {
  function r(o, l) {
    return {
      type: "Group",
      terms: o,
      combinator: l,
      disallowEmpty: !1,
      explicit: !1
    };
  }
  for (e = Object.keys(e).sort(function(o, l) {
    return ci[o] - ci[l];
  }); e.length > 0; ) {
    for (var a = e.shift(), n = 0, i = 0; n < t.length; n++) {
      var s = t[n];
      s.type === "Combinator" && (s.value === a ? (i === -1 && (i = n - 1), t.splice(n, 1), n--) : (i !== -1 && n - i > 1 && (t.splice(
        i,
        n - i,
        r(t.slice(i, n), a)
      ), n = i + 1), i = -1));
    }
    i !== -1 && e.length && t.splice(
      i,
      n - i,
      r(t.slice(i, n), a)
    );
  }
  return a;
}
function Zo(t) {
  for (var e = [], r = {}, a, n = null, i = t.pos; a = Hc(t); )
    a.type !== "Spaces" && (a.type === "Combinator" ? ((n === null || n.type === "Combinator") && (t.pos = i, t.error("Unexpected combinator")), r[a.value] = !0) : n !== null && n.type !== "Combinator" && (r[" "] = !0, e.push({
      type: "Combinator",
      value: " "
    })), e.push(a), n = a, i = t.pos);
  return n !== null && n.type === "Combinator" && (t.pos -= i, t.error("Unexpected combinator")), {
    type: "Group",
    terms: e,
    combinator: Gc(e, r) || " ",
    disallowEmpty: !1,
    explicit: !1
  };
}
function Vc(t) {
  var e;
  return t.eat(mr), e = Zo(t), t.eat(pn), e.explicit = !0, t.charCode() === Fo && (t.pos++, e.disallowEmpty = !0), e;
}
function Hc(t) {
  var e = t.charCode();
  if (e < 128 && Ba[e] === 1)
    return Fc(t);
  switch (e) {
    case pn:
      break;
    case mr:
      return vt(t, Vc(t));
    case dn:
      return t.nextCharCode() === Zt ? Dc(t) : $c(t);
    case li:
      return {
        type: "Combinator",
        value: t.substringToPos(
          t.nextCharCode() === li ? t.pos + 2 : t.pos + 1
        )
      };
    case si:
      return t.pos++, t.eat(si), {
        type: "Combinator",
        value: "&&"
      };
    case ln:
      return t.pos++, {
        type: "Comma"
      };
    case Zt:
      return vt(t, {
        type: "String",
        value: Mc(t)
      });
    case Pc:
    case zc:
    case jc:
    case Wc:
    case Lc:
      return {
        type: "Spaces",
        value: Xt(t)
      };
    case Bc:
      return e = t.nextCharCode(), e < 128 && Ba[e] === 1 ? (t.pos++, {
        type: "AtKeyword",
        name: hr(t)
      }) : Hr(t);
    case Ho:
    case Uo:
    case Ko:
    case Go:
    case Fo:
      break;
    case Qt:
      if (e = t.nextCharCode(), e < 48 || e > 57)
        return Hr(t);
      break;
    default:
      return Hr(t);
  }
}
function Qo(t) {
  var e = new Oc(t), r = Zo(e);
  return e.pos !== t.length && e.error("Unexpected input"), r.terms.length === 1 && r.terms[0].type === "Group" && (r = r.terms[0]), r;
}
Qo("[a&&<b>#|<'c'>*||e() f{2} /,(% g#{1,2} h{2,})]!");
var cn = Qo, it = function() {
};
function mi(t) {
  return typeof t == "function" ? t : it;
}
var Xo = function(t, e, r) {
  function a(s) {
    switch (n.call(r, s), s.type) {
      case "Group":
        s.terms.forEach(a);
        break;
      case "Multiplier":
        a(s.term);
        break;
      case "Type":
      case "Property":
      case "Keyword":
      case "AtKeyword":
      case "Function":
      case "String":
      case "Token":
      case "Comma":
        break;
      default:
        throw new Error("Unknown type: " + s.type);
    }
    i.call(r, s);
  }
  var n = it, i = it;
  if (typeof e == "function" ? n = e : e && (n = mi(e.enter), i = mi(e.leave)), n === it && i === it)
    throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  a(t);
}, Uc = T, Yc = dr, pe = new Yc(), Kc = {
  decorator: function(t) {
    var e = null, r = { len: 0, node: null }, a = [r], n = "";
    return {
      children: t.children,
      node: function(i) {
        var s = e;
        e = i, t.node.call(this, i), e = s;
      },
      chunk: function(i) {
        n += i, r.node !== e ? a.push({
          len: i.length,
          node: e
        }) : r.len += i.length;
      },
      result: function() {
        return Jo(n, a);
      }
    };
  }
};
function Jo(t, e) {
  var r = [], a = 0, n = 0, i = e ? e[n].node : null;
  for (Uc(t, pe); !pe.eof; ) {
    if (e)
      for (; n < e.length && a + e[n].len <= pe.tokenStart; )
        a += e[n++].len, i = e[n].node;
    r.push({
      type: pe.tokenType,
      value: pe.getTokenValue(),
      index: pe.tokenIndex,
      // TODO: remove it, temporary solution
      balance: pe.balance[pe.tokenIndex],
      // TODO: remove it, temporary solution
      node: i
    }), pe.next();
  }
  return r;
}
var Zc = function(t, e) {
  return typeof t == "string" ? Jo(t, null) : e.generate(t, Kc);
}, Qc = cn, q = { type: "Match" }, H = { type: "Mismatch" }, un = { type: "DisallowEmpty" }, Xc = 40, Jc = 41;
function G(t, e, r) {
  return e === q && r === H || t === q && e === q && r === q ? t : (t.type === "If" && t.else === H && e === q && (e = t.then, t = t.match), {
    type: "If",
    match: t,
    then: e,
    else: r
  });
}
function el(t) {
  return t.length > 2 && t.charCodeAt(t.length - 2) === Xc && t.charCodeAt(t.length - 1) === Jc;
}
function hi(t) {
  return t.type === "Keyword" || t.type === "AtKeyword" || t.type === "Function" || t.type === "Type" && el(t.name);
}
function Ra(t, e, r) {
  switch (t) {
    case " ":
      for (var l = q, a = e.length - 1; a >= 0; a--) {
        var n = e[a];
        l = G(
          n,
          l,
          H
        );
      }
      return l;
    case "|":
      for (var l = H, i = null, a = e.length - 1; a >= 0; a--) {
        var n = e[a];
        if (hi(n) && (i === null && a > 0 && hi(e[a - 1]) && (i = /* @__PURE__ */ Object.create(null), l = G(
          {
            type: "Enum",
            map: i
          },
          q,
          l
        )), i !== null)) {
          var s = (el(n.name) ? n.name.slice(0, -1) : n.name).toLowerCase();
          if (!(s in i)) {
            i[s] = n;
            continue;
          }
        }
        i = null, l = G(
          n,
          q,
          l
        );
      }
      return l;
    case "&&":
      if (e.length > 5)
        return {
          type: "MatchOnce",
          terms: e,
          all: !0
        };
      for (var l = H, a = e.length - 1; a >= 0; a--) {
        var n = e[a], o;
        e.length > 1 ? o = Ra(
          t,
          e.filter(function(m) {
            return m !== n;
          }),
          !1
        ) : o = q, l = G(
          n,
          o,
          l
        );
      }
      return l;
    case "||":
      if (e.length > 5)
        return {
          type: "MatchOnce",
          terms: e,
          all: !1
        };
      for (var l = r ? q : H, a = e.length - 1; a >= 0; a--) {
        var n = e[a], o;
        e.length > 1 ? o = Ra(
          t,
          e.filter(function(d) {
            return d !== n;
          }),
          !0
        ) : o = q, l = G(
          n,
          o,
          l
        );
      }
      return l;
  }
}
function eu(t) {
  var e = q, r = mn(t.term);
  if (t.max === 0)
    r = G(
      r,
      un,
      H
    ), e = G(
      r,
      null,
      // will be a loop
      H
    ), e.then = G(
      q,
      q,
      e
      // make a loop
    ), t.comma && (e.then.else = G(
      { type: "Comma", syntax: t },
      e,
      H
    ));
  else
    for (var a = t.min || 1; a <= t.max; a++)
      t.comma && e !== q && (e = G(
        { type: "Comma", syntax: t },
        e,
        H
      )), e = G(
        r,
        G(
          q,
          q,
          e
        ),
        H
      );
  if (t.min === 0)
    e = G(
      q,
      q,
      e
    );
  else
    for (var a = 0; a < t.min - 1; a++)
      t.comma && e !== q && (e = G(
        { type: "Comma", syntax: t },
        e,
        H
      )), e = G(
        r,
        e,
        H
      );
  return e;
}
function mn(t) {
  if (typeof t == "function")
    return {
      type: "Generic",
      fn: t
    };
  switch (t.type) {
    case "Group":
      var e = Ra(
        t.combinator,
        t.terms.map(mn),
        !1
      );
      return t.disallowEmpty && (e = G(
        e,
        un,
        H
      )), e;
    case "Multiplier":
      return eu(t);
    case "Type":
    case "Property":
      return {
        type: t.type,
        name: t.name,
        syntax: t
      };
    case "Keyword":
      return {
        type: t.type,
        name: t.name.toLowerCase(),
        syntax: t
      };
    case "AtKeyword":
      return {
        type: t.type,
        name: "@" + t.name.toLowerCase(),
        syntax: t
      };
    case "Function":
      return {
        type: t.type,
        name: t.name.toLowerCase() + "(",
        syntax: t
      };
    case "String":
      return t.value.length === 3 ? {
        type: "Token",
        value: t.value.charAt(1),
        syntax: t
      } : {
        type: t.type,
        value: t.value.substr(1, t.value.length - 2).replace(/\\'/g, "'"),
        syntax: t
      };
    case "Token":
      return {
        type: t.type,
        value: t.value,
        syntax: t
      };
    case "Comma":
      return {
        type: t.type,
        syntax: t
      };
    default:
      throw new Error("Unknown node type:", t.type);
  }
}
var tl = {
  MATCH: q,
  MISMATCH: H,
  DISALLOW_EMPTY: un,
  buildMatchGraph: function(t, e) {
    return typeof t == "string" && (t = Qc(t)), {
      type: "MatchGraph",
      match: mn(t),
      syntax: e || null,
      source: t
    };
  }
}, gi = Object.prototype.hasOwnProperty, hn = tl, ie = hn.MATCH, U = hn.MISMATCH, tu = hn.DISALLOW_EMPTY, K = lr.TYPE, rl = 0, ru = 1, er = 2, gn = 3, fi = "Match", au = "Mismatch", nu = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)", yi = 15e3, al = 0;
function nl(t) {
  for (var e = null, r = null, a = t; a !== null; )
    r = a.prev, a.prev = e, e = a, a = r;
  return e;
}
function Ur(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++) {
    var a = t.charCodeAt(r), n = e.charCodeAt(r);
    if (a >= 65 && a <= 90 && (a = a | 32), a !== n)
      return !1;
  }
  return !0;
}
function iu(t) {
  return t.type !== K.Delim ? !1 : t.value !== "?";
}
function vi(t) {
  return t === null ? !0 : t.type === K.Comma || t.type === K.Function || t.type === K.LeftParenthesis || t.type === K.LeftSquareBracket || t.type === K.LeftCurlyBracket || iu(t);
}
function bi(t) {
  return t === null ? !0 : t.type === K.RightParenthesis || t.type === K.RightSquareBracket || t.type === K.RightCurlyBracket || t.type === K.Delim;
}
function il(t, e, r) {
  function a() {
    do
      y++, f = y < t.length ? t[y] : null;
    while (f !== null && (f.type === K.WhiteSpace || f.type === K.Comment));
  }
  function n(R) {
    var Q = y + R;
    return Q < t.length ? t[Q] : null;
  }
  function i(R, Q) {
    return {
      nextState: R,
      matchStack: h,
      syntaxStack: m,
      thenStack: d,
      tokenIndex: y,
      prev: Q
    };
  }
  function s(R) {
    d = {
      nextState: R,
      matchStack: h,
      syntaxStack: m,
      prev: d
    };
  }
  function o(R) {
    u = i(R, u);
  }
  function l() {
    h = {
      type: ru,
      syntax: e.syntax,
      token: f,
      prev: h
    }, a(), g = null, y > w && (w = y);
  }
  function p() {
    m = {
      syntax: e.syntax,
      opts: e.syntax.opts || m !== null && m.opts || null,
      prev: m
    }, h = {
      type: er,
      syntax: e.syntax,
      token: h.token,
      prev: h
    };
  }
  function c() {
    h.type === er ? h = h.prev : h = {
      type: gn,
      syntax: m.syntax,
      token: h.token,
      prev: h
    }, m = m.prev;
  }
  var m = null, d = null, u = null, g = null, S = 0, b = null, f = null, y = -1, w = 0, h = {
    type: rl,
    syntax: null,
    token: null,
    prev: null
  };
  for (a(); b === null && ++S < yi; )
    switch (e.type) {
      case "Match":
        if (d === null) {
          if (f !== null && (y !== t.length - 1 || f.value !== "\\0" && f.value !== "\\9")) {
            e = U;
            break;
          }
          b = fi;
          break;
        }
        if (e = d.nextState, e === tu)
          if (d.matchStack === h) {
            e = U;
            break;
          } else
            e = ie;
        for (; d.syntaxStack !== m; )
          c();
        d = d.prev;
        break;
      case "Mismatch":
        if (g !== null && g !== !1)
          (u === null || y > u.tokenIndex) && (u = g, g = !1);
        else if (u === null) {
          b = au;
          break;
        }
        e = u.nextState, d = u.thenStack, m = u.syntaxStack, h = u.matchStack, y = u.tokenIndex, f = y < t.length ? t[y] : null, u = u.prev;
        break;
      case "MatchGraph":
        e = e.match;
        break;
      case "If":
        e.else !== U && o(e.else), e.then !== ie && s(e.then), e = e.match;
        break;
      case "MatchOnce":
        e = {
          type: "MatchOnceBuffer",
          syntax: e,
          index: 0,
          mask: 0
        };
        break;
      case "MatchOnceBuffer":
        var v = e.syntax.terms;
        if (e.index === v.length) {
          if (e.mask === 0 || e.syntax.all) {
            e = U;
            break;
          }
          e = ie;
          break;
        }
        if (e.mask === (1 << v.length) - 1) {
          e = ie;
          break;
        }
        for (; e.index < v.length; e.index++) {
          var x = 1 << e.index;
          if (!(e.mask & x)) {
            o(e), s({
              type: "AddMatchOnce",
              syntax: e.syntax,
              mask: e.mask | x
            }), e = v[e.index++];
            break;
          }
        }
        break;
      case "AddMatchOnce":
        e = {
          type: "MatchOnceBuffer",
          syntax: e.syntax,
          index: 0,
          mask: e.mask
        };
        break;
      case "Enum":
        if (f !== null) {
          var M = f.value.toLowerCase();
          if (M.indexOf("\\") !== -1 && (M = M.replace(/\\[09].*$/, "")), gi.call(e.map, M)) {
            e = e.map[M];
            break;
          }
        }
        e = U;
        break;
      case "Generic":
        var k = m !== null ? m.opts : null, E = y + Math.floor(e.fn(f, n, k));
        if (!isNaN(E) && E > y) {
          for (; y < E; )
            l();
          e = ie;
        } else
          e = U;
        break;
      case "Type":
      case "Property":
        var A = e.type === "Type" ? "types" : "properties", B = gi.call(r, A) ? r[A][e.name] : null;
        if (!B || !B.match)
          throw new Error(
            "Bad syntax reference: " + (e.type === "Type" ? "<" + e.name + ">" : "<'" + e.name + "'>")
          );
        if (g !== !1 && f !== null && e.type === "Type") {
          var P = (
            // https://drafts.csswg.org/css-values-4/#custom-idents
            // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
            // can only claim the keyword if no other unfulfilled production can claim it.
            e.name === "custom-ident" && f.type === K.Ident || // https://drafts.csswg.org/css-values-4/#lengths
            // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
            // it must parse as a <number>
            e.name === "length" && f.value === "0"
          );
          if (P) {
            g === null && (g = i(e, u)), e = U;
            break;
          }
        }
        p(), e = B.match;
        break;
      case "Keyword":
        var M = e.name;
        if (f !== null) {
          var W = f.value;
          if (W.indexOf("\\") !== -1 && (W = W.replace(/\\[09].*$/, "")), Ur(W, M)) {
            l(), e = ie;
            break;
          }
        }
        e = U;
        break;
      case "AtKeyword":
      case "Function":
        if (f !== null && Ur(f.value, e.name)) {
          l(), e = ie;
          break;
        }
        e = U;
        break;
      case "Token":
        if (f !== null && f.value === e.value) {
          l(), e = ie;
          break;
        }
        e = U;
        break;
      case "Comma":
        f !== null && f.type === K.Comma ? vi(h.token) ? e = U : (l(), e = bi(f) ? U : ie) : e = vi(h.token) || bi(f) ? ie : U;
        break;
      case "String":
        for (var $ = "", E = y; E < t.length && $.length < e.value.length; E++)
          $ += t[E].value;
        if (Ur($, e.value)) {
          for (; y < E; )
            l();
          e = ie;
        } else
          e = U;
        break;
      default:
        throw new Error("Unknown node type: " + e.type);
    }
  switch (al += S, b) {
    case null:
      console.warn("[csstree-match] BREAK after " + yi + " iterations"), b = nu, h = null;
      break;
    case fi:
      for (; m !== null; )
        c();
      break;
    default:
      h = null;
  }
  return {
    tokens: t,
    reason: b,
    iterations: S,
    match: h,
    longestMatch: w
  };
}
function su(t, e, r) {
  var a = il(t, e, r || {});
  if (a.match !== null) {
    var n = nl(a.match).prev;
    for (a.match = []; n !== null; ) {
      switch (n.type) {
        case rl:
          break;
        case er:
        case gn:
          a.match.push({
            type: n.type,
            syntax: n.syntax
          });
          break;
        default:
          a.match.push({
            token: n.token.value,
            node: n.token.node
          });
          break;
      }
      n = n.prev;
    }
  }
  return a;
}
function ou(t, e, r) {
  var a = il(t, e, r || {});
  if (a.match === null)
    return a;
  var n = a.match, i = a.match = {
    syntax: e.syntax || null,
    match: []
  }, s = [i];
  for (n = nl(n).prev; n !== null; ) {
    switch (n.type) {
      case er:
        i.match.push(i = {
          syntax: n.syntax,
          match: []
        }), s.push(i);
        break;
      case gn:
        s.pop(), i = s[s.length - 1];
        break;
      default:
        i.match.push({
          syntax: n.syntax || null,
          token: n.token.value,
          node: n.token.node
        });
    }
    n = n.prev;
  }
  return a;
}
var lu = {
  matchAsList: su,
  matchAsTree: ou,
  getTotalIterationCount: function() {
    return al;
  }
};
function sl(t) {
  function e(n) {
    return n === null ? !1 : n.type === "Type" || n.type === "Property" || n.type === "Keyword";
  }
  function r(n) {
    if (Array.isArray(n.match)) {
      for (var i = 0; i < n.match.length; i++)
        if (r(n.match[i]))
          return e(n.syntax) && a.unshift(n.syntax), !0;
    } else if (n.node === t)
      return a = e(n.syntax) ? [n.syntax] : [], !0;
    return !1;
  }
  var a = null;
  return this.matched !== null && r(this.matched), a;
}
function fn(t, e, r) {
  var a = sl.call(t, e);
  return a === null ? !1 : a.some(r);
}
function du(t, e) {
  return fn(this, t, function(r) {
    return r.type === "Type" && r.name === e;
  });
}
function pu(t, e) {
  return fn(this, t, function(r) {
    return r.type === "Property" && r.name === e;
  });
}
function cu(t) {
  return fn(this, t, function(e) {
    return e.type === "Keyword";
  });
}
var uu = {
  getTrace: sl,
  isType: du,
  isProperty: pu,
  isKeyword: cu
}, mu = Fe;
function ol(t) {
  return "node" in t ? t.node : ol(t.match[0]);
}
function ll(t) {
  return "node" in t ? t.node : ll(t.match[t.match.length - 1]);
}
function hu(t, e, r, a, n) {
  function i(o) {
    if (o.syntax !== null && o.syntax.type === a && o.syntax.name === n) {
      var l = ol(o), p = ll(o);
      t.syntax.walk(e, function(c, m, d) {
        if (c === l) {
          var u = new mu();
          do {
            if (u.appendData(m.data), m.data === p)
              break;
            m = m.next;
          } while (m !== null);
          s.push({
            parent: d,
            nodes: u
          });
        }
      });
    }
    Array.isArray(o.match) && o.match.forEach(i);
  }
  var s = [];
  return r.matched !== null && i(r.matched), s;
}
var gu = {
  matchFragments: hu
}, fu = Fe, mt = Object.prototype.hasOwnProperty;
function Yr(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && t >= 0;
}
function Si(t) {
  return !!t && Yr(t.offset) && Yr(t.line) && Yr(t.column);
}
function yu(t, e) {
  return function(a, n) {
    if (!a || a.constructor !== Object)
      return n(a, "Type of node should be an Object");
    for (var i in a) {
      var s = !0;
      if (mt.call(a, i) !== !1) {
        if (i === "type")
          a.type !== t && n(a, "Wrong node type `" + a.type + "`, expected `" + t + "`");
        else if (i === "loc") {
          if (a.loc === null)
            continue;
          if (a.loc && a.loc.constructor === Object)
            if (typeof a.loc.source != "string")
              i += ".source";
            else if (!Si(a.loc.start))
              i += ".start";
            else if (!Si(a.loc.end))
              i += ".end";
            else
              continue;
          s = !1;
        } else if (e.hasOwnProperty(i))
          for (var o = 0, s = !1; !s && o < e[i].length; o++) {
            var l = e[i][o];
            switch (l) {
              case String:
                s = typeof a[i] == "string";
                break;
              case Boolean:
                s = typeof a[i] == "boolean";
                break;
              case null:
                s = a[i] === null;
                break;
              default:
                typeof l == "string" ? s = a[i] && a[i].type === l : Array.isArray(l) && (s = a[i] instanceof fu);
            }
          }
        else
          n(a, "Unknown field `" + i + "` for " + t + " node type");
        s || n(a, "Bad value for `" + t + "." + i + "`");
      }
    }
    for (var i in e)
      mt.call(e, i) && mt.call(a, i) === !1 && n(a, "Field `" + t + "." + i + "` is missed");
  };
}
function vu(t, e) {
  var r = e.structure, a = {
    type: String,
    loc: !0
  }, n = {
    type: '"' + t + '"'
  };
  for (var i in r)
    if (mt.call(r, i) !== !1) {
      for (var s = [], o = a[i] = Array.isArray(r[i]) ? r[i].slice() : [r[i]], l = 0; l < o.length; l++) {
        var p = o[l];
        if (p === String || p === Boolean)
          s.push(p.name);
        else if (p === null)
          s.push("null");
        else if (typeof p == "string")
          s.push("<" + p + ">");
        else if (Array.isArray(p))
          s.push("List");
        else
          throw new Error("Wrong value `" + p + "` in `" + t + "." + i + "` structure definition");
      }
      n[i] = s.join(" | ");
    }
  return {
    docs: n,
    check: yu(t, a)
  };
}
var bu = {
  getStructureFromConfig: function(t) {
    var e = {};
    if (t.node) {
      for (var r in t.node)
        if (mt.call(t.node, r)) {
          var a = t.node[r];
          if (a.structure)
            e[r] = vu(r, a);
          else
            throw new Error("Missed `structure` field in `" + r + "` node type definition");
        }
    }
    return e;
  }
}, Xe = jo.SyntaxReferenceError, Su = jo.SyntaxMatchError, Je = sn, Ma = Sc, xu = cn, dl = rn, wu = Xo, Cu = Zc, tr = tl.buildMatchGraph, xi = lu.matchAsTree, Bt = uu, wi = gu, ku = bu.getStructureFromConfig, Tu = tr("inherit | initial | unset"), Eu = tr("inherit | initial | unset | <-ms-legacy-expression>");
function qa(t, e, r) {
  var a = {};
  for (var n in t)
    t[n].syntax && (a[n] = r ? t[n].syntax : dl(t[n].syntax, { compact: e }));
  return a;
}
function _u(t, e, r) {
  const a = {};
  for (const [n, i] of Object.entries(t))
    a[n] = {
      prelude: i.prelude && (r ? i.prelude.syntax : dl(i.prelude.syntax, { compact: e })),
      descriptors: i.descriptors && qa(i.descriptors, e, r)
    };
  return a;
}
function Au(t) {
  for (var e = 0; e < t.length; e++)
    if (t[e].value.toLowerCase() === "var(")
      return !0;
  return !1;
}
function oe(t, e, r) {
  return {
    matched: t,
    iterations: r,
    error: e,
    getTrace: Bt.getTrace,
    isType: Bt.isType,
    isProperty: Bt.isProperty,
    isKeyword: Bt.isKeyword
  };
}
function et(t, e, r, a) {
  var n = Cu(r, t.syntax), i;
  return Au(n) ? oe(null, new Error("Matching for a tree with var() is not supported")) : (a && (i = xi(n, t.valueCommonSyntax, t)), (!a || !i.match) && (i = xi(n, e.match, t), !i.match) ? oe(
    null,
    new Su(i.reason, e.syntax, r, i),
    i.iterations
  ) : oe(i.match, null, i.iterations));
}
var pl = function(t, e, r) {
  if (this.valueCommonSyntax = Tu, this.syntax = e, this.generic = !1, this.atrules = {}, this.properties = {}, this.types = {}, this.structure = r || ku(t), t) {
    if (t.types)
      for (var a in t.types)
        this.addType_(a, t.types[a]);
    if (t.generic) {
      this.generic = !0;
      for (var a in Ma)
        this.addType_(a, Ma[a]);
    }
    if (t.atrules)
      for (var a in t.atrules)
        this.addAtrule_(a, t.atrules[a]);
    if (t.properties)
      for (var a in t.properties)
        this.addProperty_(a, t.properties[a]);
  }
};
pl.prototype = {
  structure: {},
  checkStructure: function(t) {
    function e(n, i) {
      a.push({
        node: n,
        message: i
      });
    }
    var r = this.structure, a = [];
    return this.syntax.walk(t, function(n) {
      r.hasOwnProperty(n.type) ? r[n.type].check(n, e) : e(n, "Unknown node type `" + n.type + "`");
    }), a.length ? a : !1;
  },
  createDescriptor: function(t, e, r, a = null) {
    var n = {
      type: e,
      name: r
    }, i = {
      type: e,
      name: r,
      parent: a,
      syntax: null,
      match: null
    };
    return typeof t == "function" ? i.match = tr(t, n) : (typeof t == "string" ? Object.defineProperty(i, "syntax", {
      get: function() {
        return Object.defineProperty(i, "syntax", {
          value: xu(t)
        }), i.syntax;
      }
    }) : i.syntax = t, Object.defineProperty(i, "match", {
      get: function() {
        return Object.defineProperty(i, "match", {
          value: tr(i.syntax, n)
        }), i.match;
      }
    })), i;
  },
  addAtrule_: function(t, e) {
    e && (this.atrules[t] = {
      type: "Atrule",
      name: t,
      prelude: e.prelude ? this.createDescriptor(e.prelude, "AtrulePrelude", t) : null,
      descriptors: e.descriptors ? Object.keys(e.descriptors).reduce((r, a) => (r[a] = this.createDescriptor(e.descriptors[a], "AtruleDescriptor", a, t), r), {}) : null
    });
  },
  addProperty_: function(t, e) {
    e && (this.properties[t] = this.createDescriptor(e, "Property", t));
  },
  addType_: function(t, e) {
    e && (this.types[t] = this.createDescriptor(e, "Type", t), e === Ma["-ms-legacy-expression"] && (this.valueCommonSyntax = Eu));
  },
  checkAtruleName: function(t) {
    if (!this.getAtrule(t))
      return new Xe("Unknown at-rule", "@" + t);
  },
  checkAtrulePrelude: function(t, e) {
    let r = this.checkAtruleName(t);
    if (r)
      return r;
    var a = this.getAtrule(t);
    if (!a.prelude && e)
      return new SyntaxError("At-rule `@" + t + "` should not contain a prelude");
    if (a.prelude && !e)
      return new SyntaxError("At-rule `@" + t + "` should contain a prelude");
  },
  checkAtruleDescriptorName: function(t, e) {
    let r = this.checkAtruleName(t);
    if (r)
      return r;
    var a = this.getAtrule(t), n = Je.keyword(e);
    if (!a.descriptors)
      return new SyntaxError("At-rule `@" + t + "` has no known descriptors");
    if (!a.descriptors[n.name] && !a.descriptors[n.basename])
      return new Xe("Unknown at-rule descriptor", e);
  },
  checkPropertyName: function(t) {
    var e = Je.property(t);
    if (e.custom)
      return new Error("Lexer matching doesn't applicable for custom properties");
    if (!this.getProperty(t))
      return new Xe("Unknown property", t);
  },
  matchAtrulePrelude: function(t, e) {
    var r = this.checkAtrulePrelude(t, e);
    return r ? oe(null, r) : e ? et(this, this.getAtrule(t).prelude, e, !1) : oe(null, null);
  },
  matchAtruleDescriptor: function(t, e, r) {
    var a = this.checkAtruleDescriptorName(t, e);
    if (a)
      return oe(null, a);
    var n = this.getAtrule(t), i = Je.keyword(e);
    return et(this, n.descriptors[i.name] || n.descriptors[i.basename], r, !1);
  },
  matchDeclaration: function(t) {
    return t.type !== "Declaration" ? oe(null, new Error("Not a Declaration node")) : this.matchProperty(t.property, t.value);
  },
  matchProperty: function(t, e) {
    var r = this.checkPropertyName(t);
    return r ? oe(null, r) : et(this, this.getProperty(t), e, !0);
  },
  matchType: function(t, e) {
    var r = this.getType(t);
    return r ? et(this, r, e, !1) : oe(null, new Xe("Unknown type", t));
  },
  match: function(t, e) {
    return typeof t != "string" && (!t || !t.type) ? oe(null, new Xe("Bad syntax")) : ((typeof t == "string" || !t.match) && (t = this.createDescriptor(t, "Type", "anonymous")), et(this, t, e, !1));
  },
  findValueFragments: function(t, e, r, a) {
    return wi.matchFragments(this, e, this.matchProperty(t, e), r, a);
  },
  findDeclarationValueFragments: function(t, e, r) {
    return wi.matchFragments(this, t.value, this.matchDeclaration(t), e, r);
  },
  findAllFragments: function(t, e, r) {
    var a = [];
    return this.syntax.walk(t, {
      visit: "Declaration",
      enter: function(n) {
        a.push.apply(a, this.findDeclarationValueFragments(n, e, r));
      }.bind(this)
    }), a;
  },
  getAtrule: function(t, e = !0) {
    var r = Je.keyword(t), a = r.vendor && e ? this.atrules[r.name] || this.atrules[r.basename] : this.atrules[r.name];
    return a || null;
  },
  getAtrulePrelude: function(t, e = !0) {
    const r = this.getAtrule(t, e);
    return r && r.prelude || null;
  },
  getAtruleDescriptor: function(t, e) {
    return this.atrules.hasOwnProperty(t) && this.atrules.declarators && this.atrules[t].declarators[e] || null;
  },
  getProperty: function(t, e = !0) {
    var r = Je.property(t), a = r.vendor && e ? this.properties[r.name] || this.properties[r.basename] : this.properties[r.name];
    return a || null;
  },
  getType: function(t) {
    return this.types.hasOwnProperty(t) ? this.types[t] : null;
  },
  validate: function() {
    function t(n, i, s, o) {
      if (s.hasOwnProperty(i))
        return s[i];
      s[i] = !1, o.syntax !== null && wu(o.syntax, function(l) {
        if (!(l.type !== "Type" && l.type !== "Property")) {
          var p = l.type === "Type" ? n.types : n.properties, c = l.type === "Type" ? e : r;
          (!p.hasOwnProperty(l.name) || t(n, l.name, c, p[l.name])) && (s[i] = !0);
        }
      }, this);
    }
    var e = {}, r = {};
    for (var a in this.types)
      t(this, a, e, this.types[a]);
    for (var a in this.properties)
      t(this, a, r, this.properties[a]);
    return e = Object.keys(e).filter(function(n) {
      return e[n];
    }), r = Object.keys(r).filter(function(n) {
      return r[n];
    }), e.length || r.length ? {
      types: e,
      properties: r
    } : null;
  },
  dump: function(t, e) {
    return {
      generic: this.generic,
      types: qa(this.types, !e, t),
      properties: qa(this.properties, !e, t),
      atrules: _u(this.atrules, !e, t)
    };
  },
  toString: function() {
    return JSON.stringify(this.dump());
  }
};
var Ou = pl, zu = {
  SyntaxError: No,
  parse: cn,
  generate: rn,
  walk: Xo
}, Ci = Lo, ju = T.isBOM, ki = 10, Lu = 12, Ti = 13;
function Wu(t, e) {
  for (var r = e.length, a = Ci(t.lines, r), n = t.startLine, i = Ci(t.columns, r), s = t.startColumn, o = e.length > 0 ? ju(e.charCodeAt(0)) : 0, l = o; l < r; l++) {
    var p = e.charCodeAt(l);
    a[l] = n, i[l] = s++, (p === ki || p === Ti || p === Lu) && (p === Ti && l + 1 < r && e.charCodeAt(l + 1) === ki && (l++, a[l] = n, i[l] = s), n++, s = 1);
  }
  a[l] = n, i[l] = s, t.lines = a, t.columns = i;
}
var cl = function() {
  this.lines = null, this.columns = null, this.linesAndColumnsComputed = !1;
};
cl.prototype = {
  setSource: function(t, e, r, a) {
    this.source = t, this.startOffset = typeof e > "u" ? 0 : e, this.startLine = typeof r > "u" ? 1 : r, this.startColumn = typeof a > "u" ? 1 : a, this.linesAndColumnsComputed = !1;
  },
  ensureLinesAndColumnsComputed: function() {
    this.linesAndColumnsComputed || (Wu(this, this.source), this.linesAndColumnsComputed = !0);
  },
  getLocation: function(t, e) {
    return this.ensureLinesAndColumnsComputed(), {
      source: e,
      offset: this.startOffset + t,
      line: this.lines[t],
      column: this.columns[t]
    };
  },
  getLocationRange: function(t, e, r) {
    return this.ensureLinesAndColumnsComputed(), {
      source: r,
      start: {
        offset: this.startOffset + t,
        line: this.lines[t],
        column: this.columns[t]
      },
      end: {
        offset: this.startOffset + e,
        line: this.lines[e],
        column: this.columns[e]
      }
    };
  }
};
var Pu = cl, ul = T.TYPE, Iu = ul.WhiteSpace, Bu = ul.Comment, Ru = function(e) {
  var r = this.createList(), a = null, n = {
    recognizer: e,
    space: null,
    ignoreWS: !1,
    ignoreWSAfter: !1
  };
  for (this.scanner.skipSC(); !this.scanner.eof; ) {
    switch (this.scanner.tokenType) {
      case Bu:
        this.scanner.next();
        continue;
      case Iu:
        n.ignoreWS ? this.scanner.next() : n.space = this.WhiteSpace();
        continue;
    }
    if (a = e.getNode.call(this, n), a === void 0)
      break;
    n.space !== null && (r.push(n.space), n.space = null), r.push(a), n.ignoreWSAfter ? (n.ignoreWSAfter = !1, n.ignoreWS = !0) : n.ignoreWS = !1;
  }
  return r;
}, Mu = Pu, qu = fo, Du = dr, Ei = Fe, Nu = T, ml = lr, { findWhiteSpaceStart: $u, cmpStr: Fu } = St, Gu = Ru, _i = function() {
}, xe = ml.TYPE, Vu = ml.NAME, Hu = xe.WhiteSpace, Uu = xe.Comment, Yu = xe.Ident, Ai = xe.Function, Ku = xe.Url, Zu = xe.Hash, Qu = xe.Percentage, Xu = xe.Number, Ju = 35, Oi = 0;
function em(t) {
  return function() {
    return this[t]();
  };
}
function tm(t) {
  var e = {
    context: {},
    scope: {},
    atrule: {},
    pseudo: {}
  };
  if (t.parseContext)
    for (var r in t.parseContext)
      switch (typeof t.parseContext[r]) {
        case "function":
          e.context[r] = t.parseContext[r];
          break;
        case "string":
          e.context[r] = em(t.parseContext[r]);
          break;
      }
  if (t.scope)
    for (var r in t.scope)
      e.scope[r] = t.scope[r];
  if (t.atrule)
    for (var r in t.atrule) {
      var a = t.atrule[r];
      a.parse && (e.atrule[r] = a.parse);
    }
  if (t.pseudo)
    for (var r in t.pseudo) {
      var n = t.pseudo[r];
      n.parse && (e.pseudo[r] = n.parse);
    }
  if (t.node)
    for (var r in t.node)
      e[r] = t.node[r].parse;
  return e;
}
var rm = function(e) {
  var r = {
    scanner: new Du(),
    locationMap: new Mu(),
    filename: "<unknown>",
    needPositions: !1,
    onParseError: _i,
    onParseErrorThrow: !1,
    parseAtrulePrelude: !0,
    parseRulePrelude: !0,
    parseValue: !0,
    parseCustomProperty: !1,
    readSequence: Gu,
    createList: function() {
      return new Ei();
    },
    createSingleNodeList: function(n) {
      return new Ei().appendData(n);
    },
    getFirstListNode: function(n) {
      return n && n.first();
    },
    getLastListNode: function(n) {
      return n.last();
    },
    parseWithFallback: function(n, i) {
      var s = this.scanner.tokenIndex;
      try {
        return n.call(this);
      } catch (l) {
        if (this.onParseErrorThrow)
          throw l;
        var o = i.call(this, s);
        return this.onParseErrorThrow = !0, this.onParseError(l, o), this.onParseErrorThrow = !1, o;
      }
    },
    lookupNonWSType: function(n) {
      do {
        var i = this.scanner.lookupType(n++);
        if (i !== Hu)
          return i;
      } while (i !== Oi);
      return Oi;
    },
    eat: function(n) {
      if (this.scanner.tokenType !== n) {
        var i = this.scanner.tokenStart, s = Vu[n] + " is expected";
        switch (n) {
          case Yu:
            this.scanner.tokenType === Ai || this.scanner.tokenType === Ku ? (i = this.scanner.tokenEnd - 1, s = "Identifier is expected but function found") : s = "Identifier is expected";
            break;
          case Zu:
            this.scanner.isDelim(Ju) && (this.scanner.next(), i++, s = "Name is expected");
            break;
          case Qu:
            this.scanner.tokenType === Xu && (i = this.scanner.tokenEnd, s = "Percent sign is expected");
            break;
          default:
            this.scanner.source.charCodeAt(this.scanner.tokenStart) === n && (i = i + 1);
        }
        this.error(s, i);
      }
      this.scanner.next();
    },
    consume: function(n) {
      var i = this.scanner.getTokenValue();
      return this.eat(n), i;
    },
    consumeFunctionName: function() {
      var n = this.scanner.source.substring(this.scanner.tokenStart, this.scanner.tokenEnd - 1);
      return this.eat(Ai), n;
    },
    getLocation: function(n, i) {
      return this.needPositions ? this.locationMap.getLocationRange(
        n,
        i,
        this.filename
      ) : null;
    },
    getLocationFromList: function(n) {
      if (this.needPositions) {
        var i = this.getFirstListNode(n), s = this.getLastListNode(n);
        return this.locationMap.getLocationRange(
          i !== null ? i.loc.start.offset - this.locationMap.startOffset : this.scanner.tokenStart,
          s !== null ? s.loc.end.offset - this.locationMap.startOffset : this.scanner.tokenStart,
          this.filename
        );
      }
      return null;
    },
    error: function(n, i) {
      var s = typeof i < "u" && i < this.scanner.source.length ? this.locationMap.getLocation(i) : this.scanner.eof ? this.locationMap.getLocation($u(this.scanner.source, this.scanner.source.length - 1)) : this.locationMap.getLocation(this.scanner.tokenStart);
      throw new qu(
        n || "Unexpected input",
        this.scanner.source,
        s.offset,
        s.line,
        s.column
      );
    }
  };
  e = tm(e || {});
  for (var a in e)
    r[a] = e[a];
  return function(n, i) {
    i = i || {};
    var s = i.context || "default", o = i.onComment, l;
    if (Nu(n, r.scanner), r.locationMap.setSource(
      n,
      i.offset,
      i.line,
      i.column
    ), r.filename = i.filename || "<unknown>", r.needPositions = !!i.positions, r.onParseError = typeof i.onParseError == "function" ? i.onParseError : _i, r.onParseErrorThrow = !1, r.parseAtrulePrelude = "parseAtrulePrelude" in i ? !!i.parseAtrulePrelude : !0, r.parseRulePrelude = "parseRulePrelude" in i ? !!i.parseRulePrelude : !0, r.parseValue = "parseValue" in i ? !!i.parseValue : !0, r.parseCustomProperty = "parseCustomProperty" in i ? !!i.parseCustomProperty : !1, !r.context.hasOwnProperty(s))
      throw new Error("Unknown context `" + s + "`");
    return typeof o == "function" && r.scanner.forEachToken((p, c, m) => {
      if (p === Uu) {
        const d = r.getLocation(c, m), u = Fu(n, m - 2, m, "*/") ? n.slice(c + 2, m - 2) : n.slice(c + 2, m);
        o(u, d);
      }
    }), l = r.context[s].call(r, i), r.scanner.eof || r.error(), l;
  };
}, hl = {}, yn = {}, vn = {}, zi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
vn.encode = function(t) {
  if (0 <= t && t < zi.length)
    return zi[t];
  throw new TypeError("Must be between 0 and 63: " + t);
};
vn.decode = function(t) {
  var e = 65, r = 90, a = 97, n = 122, i = 48, s = 57, o = 43, l = 47, p = 26, c = 52;
  return e <= t && t <= r ? t - e : a <= t && t <= n ? t - a + p : i <= t && t <= s ? t - i + c : t == o ? 62 : t == l ? 63 : -1;
};
var gl = vn, bn = 5, fl = 1 << bn, yl = fl - 1, vl = fl;
function am(t) {
  return t < 0 ? (-t << 1) + 1 : (t << 1) + 0;
}
function nm(t) {
  var e = (t & 1) === 1, r = t >> 1;
  return e ? -r : r;
}
yn.encode = function(e) {
  var r = "", a, n = am(e);
  do
    a = n & yl, n >>>= bn, n > 0 && (a |= vl), r += gl.encode(a);
  while (n > 0);
  return r;
};
yn.decode = function(e, r, a) {
  var n = e.length, i = 0, s = 0, o, l;
  do {
    if (r >= n)
      throw new Error("Expected more digits in base 64 VLQ value.");
    if (l = gl.decode(e.charCodeAt(r++)), l === -1)
      throw new Error("Invalid base64 digit: " + e.charAt(r - 1));
    o = !!(l & vl), l &= yl, i = i + (l << s), s += bn;
  } while (o);
  a.value = nm(i), a.rest = r;
};
var gr = {};
(function(t) {
  function e(h, v, x) {
    if (v in h)
      return h[v];
    if (arguments.length === 3)
      return x;
    throw new Error('"' + v + '" is a required argument.');
  }
  t.getArg = e;
  var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, a = /^data:.+\,.+$/;
  function n(h) {
    var v = h.match(r);
    return v ? {
      scheme: v[1],
      auth: v[2],
      host: v[3],
      port: v[4],
      path: v[5]
    } : null;
  }
  t.urlParse = n;
  function i(h) {
    var v = "";
    return h.scheme && (v += h.scheme + ":"), v += "//", h.auth && (v += h.auth + "@"), h.host && (v += h.host), h.port && (v += ":" + h.port), h.path && (v += h.path), v;
  }
  t.urlGenerate = i;
  function s(h) {
    var v = h, x = n(h);
    if (x) {
      if (!x.path)
        return h;
      v = x.path;
    }
    for (var k = t.isAbsolute(v), E = v.split(/\/+/), A, B = 0, P = E.length - 1; P >= 0; P--)
      A = E[P], A === "." ? E.splice(P, 1) : A === ".." ? B++ : B > 0 && (A === "" ? (E.splice(P + 1, B), B = 0) : (E.splice(P, 2), B--));
    return v = E.join("/"), v === "" && (v = k ? "/" : "."), x ? (x.path = v, i(x)) : v;
  }
  t.normalize = s;
  function o(h, v) {
    h === "" && (h = "."), v === "" && (v = ".");
    var x = n(v), k = n(h);
    if (k && (h = k.path || "/"), x && !x.scheme)
      return k && (x.scheme = k.scheme), i(x);
    if (x || v.match(a))
      return v;
    if (k && !k.host && !k.path)
      return k.host = v, i(k);
    var E = v.charAt(0) === "/" ? v : s(h.replace(/\/+$/, "") + "/" + v);
    return k ? (k.path = E, i(k)) : E;
  }
  t.join = o, t.isAbsolute = function(h) {
    return h.charAt(0) === "/" || r.test(h);
  };
  function l(h, v) {
    h === "" && (h = "."), h = h.replace(/\/$/, "");
    for (var x = 0; v.indexOf(h + "/") !== 0; ) {
      var k = h.lastIndexOf("/");
      if (k < 0 || (h = h.slice(0, k), h.match(/^([^\/]+:\/)?\/*$/)))
        return v;
      ++x;
    }
    return Array(x + 1).join("../") + v.substr(h.length + 1);
  }
  t.relative = l;
  var p = function() {
    var h = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in h);
  }();
  function c(h) {
    return h;
  }
  function m(h) {
    return u(h) ? "$" + h : h;
  }
  t.toSetString = p ? c : m;
  function d(h) {
    return u(h) ? h.slice(1) : h;
  }
  t.fromSetString = p ? c : d;
  function u(h) {
    if (!h)
      return !1;
    var v = h.length;
    if (v < 9 || h.charCodeAt(v - 1) !== 95 || h.charCodeAt(v - 2) !== 95 || h.charCodeAt(v - 3) !== 111 || h.charCodeAt(v - 4) !== 116 || h.charCodeAt(v - 5) !== 111 || h.charCodeAt(v - 6) !== 114 || h.charCodeAt(v - 7) !== 112 || h.charCodeAt(v - 8) !== 95 || h.charCodeAt(v - 9) !== 95)
      return !1;
    for (var x = v - 10; x >= 0; x--)
      if (h.charCodeAt(x) !== 36)
        return !1;
    return !0;
  }
  function g(h, v, x) {
    var k = b(h.source, v.source);
    return k !== 0 || (k = h.originalLine - v.originalLine, k !== 0) || (k = h.originalColumn - v.originalColumn, k !== 0 || x) || (k = h.generatedColumn - v.generatedColumn, k !== 0) || (k = h.generatedLine - v.generatedLine, k !== 0) ? k : b(h.name, v.name);
  }
  t.compareByOriginalPositions = g;
  function S(h, v, x) {
    var k = h.generatedLine - v.generatedLine;
    return k !== 0 || (k = h.generatedColumn - v.generatedColumn, k !== 0 || x) || (k = b(h.source, v.source), k !== 0) || (k = h.originalLine - v.originalLine, k !== 0) || (k = h.originalColumn - v.originalColumn, k !== 0) ? k : b(h.name, v.name);
  }
  t.compareByGeneratedPositionsDeflated = S;
  function b(h, v) {
    return h === v ? 0 : h === null ? 1 : v === null ? -1 : h > v ? 1 : -1;
  }
  function f(h, v) {
    var x = h.generatedLine - v.generatedLine;
    return x !== 0 || (x = h.generatedColumn - v.generatedColumn, x !== 0) || (x = b(h.source, v.source), x !== 0) || (x = h.originalLine - v.originalLine, x !== 0) || (x = h.originalColumn - v.originalColumn, x !== 0) ? x : b(h.name, v.name);
  }
  t.compareByGeneratedPositionsInflated = f;
  function y(h) {
    return JSON.parse(h.replace(/^\)]}'[^\n]*\n/, ""));
  }
  t.parseSourceMapInput = y;
  function w(h, v, x) {
    if (v = v || "", h && (h[h.length - 1] !== "/" && v[0] !== "/" && (h += "/"), v = h + v), x) {
      var k = n(x);
      if (!k)
        throw new Error("sourceMapURL could not be parsed");
      if (k.path) {
        var E = k.path.lastIndexOf("/");
        E >= 0 && (k.path = k.path.substring(0, E + 1));
      }
      v = o(i(k), v);
    }
    return s(v);
  }
  t.computeSourceURL = w;
})(gr);
var bl = {}, Sn = gr, xn = Object.prototype.hasOwnProperty, Ee = typeof Map < "u";
function ge() {
  this._array = [], this._set = Ee ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
ge.fromArray = function(e, r) {
  for (var a = new ge(), n = 0, i = e.length; n < i; n++)
    a.add(e[n], r);
  return a;
};
ge.prototype.size = function() {
  return Ee ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
ge.prototype.add = function(e, r) {
  var a = Ee ? e : Sn.toSetString(e), n = Ee ? this.has(e) : xn.call(this._set, a), i = this._array.length;
  (!n || r) && this._array.push(e), n || (Ee ? this._set.set(e, i) : this._set[a] = i);
};
ge.prototype.has = function(e) {
  if (Ee)
    return this._set.has(e);
  var r = Sn.toSetString(e);
  return xn.call(this._set, r);
};
ge.prototype.indexOf = function(e) {
  if (Ee) {
    var r = this._set.get(e);
    if (r >= 0)
      return r;
  } else {
    var a = Sn.toSetString(e);
    if (xn.call(this._set, a))
      return this._set[a];
  }
  throw new Error('"' + e + '" is not in the set.');
};
ge.prototype.at = function(e) {
  if (e >= 0 && e < this._array.length)
    return this._array[e];
  throw new Error("No element indexed by " + e);
};
ge.prototype.toArray = function() {
  return this._array.slice();
};
bl.ArraySet = ge;
var Sl = {}, xl = gr;
function im(t, e) {
  var r = t.generatedLine, a = e.generatedLine, n = t.generatedColumn, i = e.generatedColumn;
  return a > r || a == r && i >= n || xl.compareByGeneratedPositionsInflated(t, e) <= 0;
}
function fr() {
  this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
}
fr.prototype.unsortedForEach = function(e, r) {
  this._array.forEach(e, r);
};
fr.prototype.add = function(e) {
  im(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e));
};
fr.prototype.toArray = function() {
  return this._sorted || (this._array.sort(xl.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
};
Sl.MappingList = fr;
var tt = yn, D = gr, rr = bl.ArraySet, sm = Sl.MappingList;
function re(t) {
  t || (t = {}), this._file = D.getArg(t, "file", null), this._sourceRoot = D.getArg(t, "sourceRoot", null), this._skipValidation = D.getArg(t, "skipValidation", !1), this._sources = new rr(), this._names = new rr(), this._mappings = new sm(), this._sourcesContents = null;
}
re.prototype._version = 3;
re.fromSourceMap = function(e) {
  var r = e.sourceRoot, a = new re({
    file: e.file,
    sourceRoot: r
  });
  return e.eachMapping(function(n) {
    var i = {
      generated: {
        line: n.generatedLine,
        column: n.generatedColumn
      }
    };
    n.source != null && (i.source = n.source, r != null && (i.source = D.relative(r, i.source)), i.original = {
      line: n.originalLine,
      column: n.originalColumn
    }, n.name != null && (i.name = n.name)), a.addMapping(i);
  }), e.sources.forEach(function(n) {
    var i = n;
    r !== null && (i = D.relative(r, n)), a._sources.has(i) || a._sources.add(i);
    var s = e.sourceContentFor(n);
    s != null && a.setSourceContent(n, s);
  }), a;
};
re.prototype.addMapping = function(e) {
  var r = D.getArg(e, "generated"), a = D.getArg(e, "original", null), n = D.getArg(e, "source", null), i = D.getArg(e, "name", null);
  this._skipValidation || this._validateMapping(r, a, n, i), n != null && (n = String(n), this._sources.has(n) || this._sources.add(n)), i != null && (i = String(i), this._names.has(i) || this._names.add(i)), this._mappings.add({
    generatedLine: r.line,
    generatedColumn: r.column,
    originalLine: a != null && a.line,
    originalColumn: a != null && a.column,
    source: n,
    name: i
  });
};
re.prototype.setSourceContent = function(e, r) {
  var a = e;
  this._sourceRoot != null && (a = D.relative(this._sourceRoot, a)), r != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[D.toSetString(a)] = r) : this._sourcesContents && (delete this._sourcesContents[D.toSetString(a)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
};
re.prototype.applySourceMap = function(e, r, a) {
  var n = r;
  if (r == null) {
    if (e.file == null)
      throw new Error(
        `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
      );
    n = e.file;
  }
  var i = this._sourceRoot;
  i != null && (n = D.relative(i, n));
  var s = new rr(), o = new rr();
  this._mappings.unsortedForEach(function(l) {
    if (l.source === n && l.originalLine != null) {
      var p = e.originalPositionFor({
        line: l.originalLine,
        column: l.originalColumn
      });
      p.source != null && (l.source = p.source, a != null && (l.source = D.join(a, l.source)), i != null && (l.source = D.relative(i, l.source)), l.originalLine = p.line, l.originalColumn = p.column, p.name != null && (l.name = p.name));
    }
    var c = l.source;
    c != null && !s.has(c) && s.add(c);
    var m = l.name;
    m != null && !o.has(m) && o.add(m);
  }, this), this._sources = s, this._names = o, e.sources.forEach(function(l) {
    var p = e.sourceContentFor(l);
    p != null && (a != null && (l = D.join(a, l)), i != null && (l = D.relative(i, l)), this.setSourceContent(l, p));
  }, this);
};
re.prototype._validateMapping = function(e, r, a, n) {
  if (r && typeof r.line != "number" && typeof r.column != "number")
    throw new Error(
      "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
    );
  if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0 && !r && !a && !n)) {
    if (e && "line" in e && "column" in e && r && "line" in r && "column" in r && e.line > 0 && e.column >= 0 && r.line > 0 && r.column >= 0 && a)
      return;
    throw new Error("Invalid mapping: " + JSON.stringify({
      generated: e,
      source: a,
      original: r,
      name: n
    }));
  }
};
re.prototype._serializeMappings = function() {
  for (var e = 0, r = 1, a = 0, n = 0, i = 0, s = 0, o = "", l, p, c, m, d = this._mappings.toArray(), u = 0, g = d.length; u < g; u++) {
    if (p = d[u], l = "", p.generatedLine !== r)
      for (e = 0; p.generatedLine !== r; )
        l += ";", r++;
    else if (u > 0) {
      if (!D.compareByGeneratedPositionsInflated(p, d[u - 1]))
        continue;
      l += ",";
    }
    l += tt.encode(p.generatedColumn - e), e = p.generatedColumn, p.source != null && (m = this._sources.indexOf(p.source), l += tt.encode(m - s), s = m, l += tt.encode(p.originalLine - 1 - n), n = p.originalLine - 1, l += tt.encode(p.originalColumn - a), a = p.originalColumn, p.name != null && (c = this._names.indexOf(p.name), l += tt.encode(c - i), i = c)), o += l;
  }
  return o;
};
re.prototype._generateSourcesContent = function(e, r) {
  return e.map(function(a) {
    if (!this._sourcesContents)
      return null;
    r != null && (a = D.relative(r, a));
    var n = D.toSetString(a);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null;
  }, this);
};
re.prototype.toJSON = function() {
  var e = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  return this._file != null && (e.file = this._file), this._sourceRoot != null && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
};
re.prototype.toString = function() {
  return JSON.stringify(this.toJSON());
};
hl.SourceMapGenerator = re;
var om = hl.SourceMapGenerator, ji = {
  Atrule: !0,
  Selector: !0,
  Declaration: !0
}, lm = function(e) {
  var r = new om(), a = 1, n = 0, i = {
    line: 1,
    column: 0
  }, s = {
    line: 0,
    // should be zero to add first mapping
    column: 0
  }, o = !1, l = {
    line: 1,
    column: 0
  }, p = {
    generated: l
  }, c = e.node;
  e.node = function(u) {
    if (u.loc && u.loc.start && ji.hasOwnProperty(u.type)) {
      var g = u.loc.start.line, S = u.loc.start.column - 1;
      (s.line !== g || s.column !== S) && (s.line = g, s.column = S, i.line = a, i.column = n, o && (o = !1, (i.line !== l.line || i.column !== l.column) && r.addMapping(p)), o = !0, r.addMapping({
        source: u.loc.source,
        original: s,
        generated: i
      }));
    }
    c.call(this, u), o && ji.hasOwnProperty(u.type) && (l.line = a, l.column = n);
  };
  var m = e.chunk;
  e.chunk = function(u) {
    for (var g = 0; g < u.length; g++)
      u.charCodeAt(g) === 10 ? (a++, n = 0) : n++;
    m(u);
  };
  var d = e.result;
  return e.result = function() {
    return o && r.addMapping(p), {
      css: d(),
      map: r
    };
  }, e;
}, dm = lm, pm = Object.prototype.hasOwnProperty;
function cm(t, e) {
  var r = t.children, a = null;
  typeof e != "function" ? r.forEach(this.node, this) : r.forEach(function(n) {
    a !== null && e.call(this, a), this.node(n), a = n;
  }, this);
}
var um = function(e) {
  function r(i) {
    if (pm.call(a, i.type))
      a[i.type].call(this, i);
    else
      throw new Error("Unknown node type: " + i.type);
  }
  var a = {};
  if (e.node)
    for (var n in e.node)
      a[n] = e.node[n].generate;
  return function(i, s) {
    var o = "", l = {
      children: cm,
      node: r,
      chunk: function(p) {
        o += p;
      },
      result: function() {
        return o;
      }
    };
    return s && (typeof s.decorator == "function" && (l = s.decorator(l)), s.sourceMap && (l = dm(l))), l.node(i), l.result();
  };
}, Kr = Fe, mm = function(e) {
  return {
    fromPlainObject: function(r) {
      return e(r, {
        enter: function(a) {
          a.children && !(a.children instanceof Kr) && (a.children = new Kr().fromArray(a.children));
        }
      }), r;
    },
    toPlainObject: function(r) {
      return e(r, {
        leave: function(a) {
          a.children && a.children instanceof Kr && (a.children = a.children.toArray());
        }
      }), r;
    }
  };
}, wn = Object.prototype.hasOwnProperty, st = function() {
};
function Li(t) {
  return typeof t == "function" ? t : st;
}
function Wi(t, e) {
  return function(r, a, n) {
    r.type === e && t.call(this, r, a, n);
  };
}
function hm(t, e) {
  var r = e.structure, a = [];
  for (var n in r)
    if (wn.call(r, n) !== !1) {
      var i = r[n], s = {
        name: n,
        type: !1,
        nullable: !1
      };
      Array.isArray(r[n]) || (i = [r[n]]);
      for (var o = 0; o < i.length; o++) {
        var l = i[o];
        l === null ? s.nullable = !0 : typeof l == "string" ? s.type = "node" : Array.isArray(l) && (s.type = "list");
      }
      s.type && a.push(s);
    }
  return a.length ? {
    context: e.walkContext,
    fields: a
  } : null;
}
function gm(t) {
  var e = {};
  for (var r in t.node)
    if (wn.call(t.node, r)) {
      var a = t.node[r];
      if (!a.structure)
        throw new Error("Missed `structure` field in `" + r + "` node type definition");
      e[r] = hm(r, a);
    }
  return e;
}
function Pi(t, e) {
  var r = t.fields.slice(), a = t.context, n = typeof a == "string";
  return e && r.reverse(), function(i, s, o, l) {
    var p;
    n && (p = s[a], s[a] = i);
    for (var c = 0; c < r.length; c++) {
      var m = r[c], d = i[m.name];
      if (!m.nullable || d) {
        if (m.type === "list") {
          var u = e ? d.reduceRight(l, !1) : d.reduce(l, !1);
          if (u)
            return !0;
        } else if (o(d))
          return !0;
      }
    }
    n && (s[a] = p);
  };
}
function Ii(t) {
  return {
    Atrule: {
      StyleSheet: t.StyleSheet,
      Atrule: t.Atrule,
      Rule: t.Rule,
      Block: t.Block
    },
    Rule: {
      StyleSheet: t.StyleSheet,
      Atrule: t.Atrule,
      Rule: t.Rule,
      Block: t.Block
    },
    Declaration: {
      StyleSheet: t.StyleSheet,
      Atrule: t.Atrule,
      Rule: t.Rule,
      Block: t.Block,
      DeclarationList: t.DeclarationList
    }
  };
}
var fm = function(e) {
  var r = gm(e), a = {}, n = {}, i = Symbol("break-walk"), s = Symbol("skip-node");
  for (var o in r)
    wn.call(r, o) && r[o] !== null && (a[o] = Pi(r[o], !1), n[o] = Pi(r[o], !0));
  var l = Ii(a), p = Ii(n), c = function(m, d) {
    function u(w, h, v) {
      var x = S.call(y, w, h, v);
      if (x === i) {
        debugger;
        return !0;
      }
      return x === s ? !1 : !!(f.hasOwnProperty(w.type) && f[w.type](w, y, u, g) || b.call(y, w, h, v) === i);
    }
    var g = (w, h, v, x) => w || u(h, v, x), S = st, b = st, f = a, y = {
      break: i,
      skip: s,
      root: m,
      stylesheet: null,
      atrule: null,
      atrulePrelude: null,
      rule: null,
      selector: null,
      block: null,
      declaration: null,
      function: null
    };
    if (typeof d == "function")
      S = d;
    else if (d && (S = Li(d.enter), b = Li(d.leave), d.reverse && (f = n), d.visit)) {
      if (l.hasOwnProperty(d.visit))
        f = d.reverse ? p[d.visit] : l[d.visit];
      else if (!r.hasOwnProperty(d.visit))
        throw new Error("Bad value `" + d.visit + "` for `visit` option (should be: " + Object.keys(r).join(", ") + ")");
      S = Wi(S, d.visit), b = Wi(b, d.visit);
    }
    if (S === st && b === st)
      throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    u(m);
  };
  return c.break = i, c.skip = s, c.find = function(m, d) {
    var u = null;
    return c(m, function(g, S, b) {
      if (d.call(this, g, S, b))
        return u = g, i;
    }), u;
  }, c.findLast = function(m, d) {
    var u = null;
    return c(m, {
      reverse: !0,
      enter: function(g, S, b) {
        if (d.call(this, g, S, b))
          return u = g, i;
      }
    }), u;
  }, c.findAll = function(m, d) {
    var u = [];
    return c(m, function(g, S, b) {
      d.call(this, g, S, b) && u.push(g);
    }), u;
  }, c;
}, ym = Fe, vm = function t(e) {
  var r = {};
  for (var a in e) {
    var n = e[a];
    n && (Array.isArray(n) || n instanceof ym ? n = n.map(t) : n.constructor === Object && (n = t(n))), r[a] = n;
  }
  return r;
};
const Me = Object.prototype.hasOwnProperty, bm = {
  generic: !0,
  types: Na,
  atrules: {
    prelude: Ri,
    descriptors: Ri
  },
  properties: Na,
  parseContext: Sm,
  scope: wl,
  atrule: ["parse"],
  pseudo: ["parse"],
  node: ["name", "structure", "parse", "generate", "walkContext"]
};
function yr(t) {
  return t && t.constructor === Object;
}
function Da(t) {
  return yr(t) ? Object.assign({}, t) : t;
}
function Sm(t, e) {
  return Object.assign(t, e);
}
function wl(t, e) {
  for (const r in e)
    Me.call(e, r) && (yr(t[r]) ? wl(t[r], Da(e[r])) : t[r] = Da(e[r]));
  return t;
}
function Bi(t, e) {
  return typeof e == "string" && /^\s*\|/.test(e) ? typeof t == "string" ? t + e : e.replace(/^\s*\|\s*/, "") : e || null;
}
function Na(t, e) {
  if (typeof e == "string")
    return Bi(t, e);
  const r = Object.assign({}, t);
  for (let a in e)
    Me.call(e, a) && (r[a] = Bi(Me.call(t, a) ? t[a] : void 0, e[a]));
  return r;
}
function Ri(t, e) {
  const r = Na(t, e);
  return !yr(r) || Object.keys(r).length ? r : null;
}
function ot(t, e, r) {
  for (const a in r)
    if (Me.call(r, a) !== !1) {
      if (r[a] === !0)
        a in e && Me.call(e, a) && (t[a] = Da(e[a]));
      else if (r[a]) {
        if (typeof r[a] == "function") {
          const n = r[a];
          t[a] = n({}, t[a]), t[a] = n(t[a] || {}, e[a]);
        } else if (yr(r[a])) {
          const n = {};
          for (let i in t[a])
            n[i] = ot({}, t[a][i], r[a]);
          for (let i in e[a])
            n[i] = ot(n[i] || {}, e[a][i], r[a]);
          t[a] = n;
        } else if (Array.isArray(r[a])) {
          const n = {}, i = r[a].reduce(function(s, o) {
            return s[o] = !0, s;
          }, {});
          for (const [s, o] of Object.entries(t[a] || {}))
            n[s] = {}, o && ot(n[s], o, i);
          for (const s in e[a])
            Me.call(e[a], s) && (n[s] || (n[s] = {}), e[a] && e[a][s] && ot(n[s], e[a][s], i));
          t[a] = n;
        }
      }
    }
  return t;
}
var xm = (t, e) => ot(t, e, bm), wm = Fe, Cm = fo, km = dr, Zr = Ou, Tm = zu, Em = T, _m = rm, Am = um, Om = mm, zm = fm, jm = vm, Rt = sn, $t = xm;
function $a(t) {
  var e = _m(t), r = zm(t), a = Am(t), n = Om(r), i = {
    List: wm,
    SyntaxError: Cm,
    TokenStream: km,
    Lexer: Zr,
    vendorPrefix: Rt.vendorPrefix,
    keyword: Rt.keyword,
    property: Rt.property,
    isCustomProperty: Rt.isCustomProperty,
    definitionSyntax: Tm,
    lexer: null,
    createLexer: function(s) {
      return new Zr(s, i, i.lexer.structure);
    },
    tokenize: Em,
    parse: e,
    walk: r,
    generate: a,
    find: r.find,
    findLast: r.findLast,
    findAll: r.findAll,
    clone: jm,
    fromPlainObject: n.fromPlainObject,
    toPlainObject: n.toPlainObject,
    createSyntax: function(s) {
      return $a($t({}, s));
    },
    fork: function(s) {
      var o = $t({}, t);
      return $a(
        typeof s == "function" ? s(o, Object.assign) : $t(o, s)
      );
    }
  };
  return i.lexer = new Zr({
    generic: !0,
    types: t.types,
    atrules: t.atrules,
    properties: t.properties,
    node: t.node
  }, i), i;
}
go.create = function(t) {
  return $a($t({}, t));
};
const Lm = {
  "@charset": {
    syntax: '@charset "<charset>";',
    groups: [
      "CSS Charsets"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@charset"
  },
  "@counter-style": {
    syntax: `@counter-style <counter-style-name> {
  [ system: <counter-system>; ] ||
  [ symbols: <counter-symbols>; ] ||
  [ additive-symbols: <additive-symbols>; ] ||
  [ negative: <negative-symbol>; ] ||
  [ prefix: <prefix>; ] ||
  [ suffix: <suffix>; ] ||
  [ range: <range>; ] ||
  [ pad: <padding>; ] ||
  [ speak-as: <speak-as>; ] ||
  [ fallback: <counter-style-name>; ]
}`,
    interfaces: [
      "CSSCounterStyleRule"
    ],
    groups: [
      "CSS Counter Styles"
    ],
    descriptors: {
      "additive-symbols": {
        syntax: "[ <integer> && <symbol> ]#",
        media: "all",
        initial: "n/a (required)",
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      },
      fallback: {
        syntax: "<counter-style-name>",
        media: "all",
        initial: "decimal",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      negative: {
        syntax: "<symbol> <symbol>?",
        media: "all",
        initial: '"-" hyphen-minus',
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      },
      pad: {
        syntax: "<integer> && <symbol>",
        media: "all",
        initial: '0 ""',
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      prefix: {
        syntax: "<symbol>",
        media: "all",
        initial: '""',
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      range: {
        syntax: "[ [ <integer> | infinite ]{2} ]# | auto",
        media: "all",
        initial: "auto",
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      },
      "speak-as": {
        syntax: "auto | bullets | numbers | words | spell-out | <counter-style-name>",
        media: "all",
        initial: "auto",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      suffix: {
        syntax: "<symbol>",
        media: "all",
        initial: '". "',
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      symbols: {
        syntax: "<symbol>+",
        media: "all",
        initial: "n/a (required)",
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      },
      system: {
        syntax: "cyclic | numeric | alphabetic | symbolic | additive | [ fixed <integer>? ] | [ extends <counter-style-name> ]",
        media: "all",
        initial: "symbolic",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      }
    },
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@counter-style"
  },
  "@document": {
    syntax: `@document [ <url> | url-prefix(<string>) | domain(<string>) | media-document(<string>) | regexp(<string>) ]# {
  <group-rule-body>
}`,
    interfaces: [
      "CSSGroupingRule",
      "CSSConditionRule"
    ],
    groups: [
      "CSS Conditional Rules"
    ],
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@document"
  },
  "@font-face": {
    syntax: `@font-face {
  [ font-family: <family-name>; ] ||
  [ src: <src>; ] ||
  [ unicode-range: <unicode-range>; ] ||
  [ font-variant: <font-variant>; ] ||
  [ font-feature-settings: <font-feature-settings>; ] ||
  [ font-variation-settings: <font-variation-settings>; ] ||
  [ font-stretch: <font-stretch>; ] ||
  [ font-weight: <font-weight>; ] ||
  [ font-style: <font-style>; ]
}`,
    interfaces: [
      "CSSFontFaceRule"
    ],
    groups: [
      "CSS Fonts"
    ],
    descriptors: {
      "font-display": {
        syntax: "[ auto | block | swap | fallback | optional ]",
        media: "visual",
        percentages: "no",
        initial: "auto",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "experimental"
      },
      "font-family": {
        syntax: "<family-name>",
        media: "all",
        initial: "n/a (required)",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      "font-feature-settings": {
        syntax: "normal | <feature-tag-value>#",
        media: "all",
        initial: "normal",
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      },
      "font-variation-settings": {
        syntax: "normal | [ <string> <number> ]#",
        media: "all",
        initial: "normal",
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      },
      "font-stretch": {
        syntax: "<font-stretch-absolute>{1,2}",
        media: "all",
        initial: "normal",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      "font-style": {
        syntax: "normal | italic | oblique <angle>{0,2}",
        media: "all",
        initial: "normal",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      "font-weight": {
        syntax: "<font-weight-absolute>{1,2}",
        media: "all",
        initial: "normal",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      "font-variant": {
        syntax: "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic(<feature-value-name>) || historical-forms || styleset(<feature-value-name>#) || character-variant(<feature-value-name>#) || swash(<feature-value-name>) || ornaments(<feature-value-name>) || annotation(<feature-value-name>) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
        media: "all",
        initial: "normal",
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      },
      src: {
        syntax: "[ <url> [ format( <string># ) ]? | local( <family-name> ) ]#",
        media: "all",
        initial: "n/a (required)",
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      },
      "unicode-range": {
        syntax: "<unicode-range>#",
        media: "all",
        initial: "U+0-10FFFF",
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      }
    },
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@font-face"
  },
  "@font-feature-values": {
    syntax: `@font-feature-values <family-name># {
  <feature-value-block-list>
}`,
    interfaces: [
      "CSSFontFeatureValuesRule"
    ],
    groups: [
      "CSS Fonts"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@font-feature-values"
  },
  "@import": {
    syntax: "@import [ <string> | <url> ] [ <media-query-list> ]?;",
    groups: [
      "Media Queries"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@import"
  },
  "@keyframes": {
    syntax: `@keyframes <keyframes-name> {
  <keyframe-block-list>
}`,
    interfaces: [
      "CSSKeyframeRule",
      "CSSKeyframesRule"
    ],
    groups: [
      "CSS Animations"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@keyframes"
  },
  "@media": {
    syntax: `@media <media-query-list> {
  <group-rule-body>
}`,
    interfaces: [
      "CSSGroupingRule",
      "CSSConditionRule",
      "CSSMediaRule",
      "CSSCustomMediaRule"
    ],
    groups: [
      "CSS Conditional Rules",
      "Media Queries"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@media"
  },
  "@namespace": {
    syntax: "@namespace <namespace-prefix>? [ <string> | <url> ];",
    groups: [
      "CSS Namespaces"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@namespace"
  },
  "@page": {
    syntax: `@page <page-selector-list> {
  <page-body>
}`,
    interfaces: [
      "CSSPageRule"
    ],
    groups: [
      "CSS Pages"
    ],
    descriptors: {
      bleed: {
        syntax: "auto | <length>",
        media: [
          "visual",
          "paged"
        ],
        initial: "auto",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      marks: {
        syntax: "none | [ crop || cross ]",
        media: [
          "visual",
          "paged"
        ],
        initial: "none",
        percentages: "no",
        computed: "asSpecified",
        order: "orderOfAppearance",
        status: "standard"
      },
      size: {
        syntax: "<length>{1,2} | auto | [ <page-size> || [ portrait | landscape ] ]",
        media: [
          "visual",
          "paged"
        ],
        initial: "auto",
        percentages: "no",
        computed: "asSpecifiedRelativeToAbsoluteLengths",
        order: "orderOfAppearance",
        status: "standard"
      }
    },
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@page"
  },
  "@property": {
    syntax: `@property <custom-property-name> {
  <declaration-list>
}`,
    interfaces: [
      "CSS",
      "CSSPropertyRule"
    ],
    groups: [
      "CSS Houdini"
    ],
    descriptors: {
      syntax: {
        syntax: "<string>",
        media: "all",
        percentages: "no",
        initial: "n/a (required)",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "experimental"
      },
      inherits: {
        syntax: "true | false",
        media: "all",
        percentages: "no",
        initial: "auto",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "experimental"
      },
      "initial-value": {
        syntax: "<string>",
        media: "all",
        initial: "n/a (required)",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "experimental"
      }
    },
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@property"
  },
  "@supports": {
    syntax: `@supports <supports-condition> {
  <group-rule-body>
}`,
    interfaces: [
      "CSSGroupingRule",
      "CSSConditionRule",
      "CSSSupportsRule"
    ],
    groups: [
      "CSS Conditional Rules"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@supports"
  },
  "@viewport": {
    syntax: `@viewport {
  <group-rule-body>
}`,
    interfaces: [
      "CSSViewportRule"
    ],
    groups: [
      "CSS Device Adaptation"
    ],
    descriptors: {
      height: {
        syntax: "<viewport-length>{1,2}",
        media: [
          "visual",
          "continuous"
        ],
        initial: [
          "min-height",
          "max-height"
        ],
        percentages: [
          "min-height",
          "max-height"
        ],
        computed: [
          "min-height",
          "max-height"
        ],
        order: "orderOfAppearance",
        status: "standard"
      },
      "max-height": {
        syntax: "<viewport-length>",
        media: [
          "visual",
          "continuous"
        ],
        initial: "auto",
        percentages: "referToHeightOfInitialViewport",
        computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
        order: "uniqueOrder",
        status: "standard"
      },
      "max-width": {
        syntax: "<viewport-length>",
        media: [
          "visual",
          "continuous"
        ],
        initial: "auto",
        percentages: "referToWidthOfInitialViewport",
        computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
        order: "uniqueOrder",
        status: "standard"
      },
      "max-zoom": {
        syntax: "auto | <number> | <percentage>",
        media: [
          "visual",
          "continuous"
        ],
        initial: "auto",
        percentages: "the zoom factor itself",
        computed: "autoNonNegativeOrPercentage",
        order: "uniqueOrder",
        status: "standard"
      },
      "min-height": {
        syntax: "<viewport-length>",
        media: [
          "visual",
          "continuous"
        ],
        initial: "auto",
        percentages: "referToHeightOfInitialViewport",
        computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
        order: "uniqueOrder",
        status: "standard"
      },
      "min-width": {
        syntax: "<viewport-length>",
        media: [
          "visual",
          "continuous"
        ],
        initial: "auto",
        percentages: "referToWidthOfInitialViewport",
        computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
        order: "uniqueOrder",
        status: "standard"
      },
      "min-zoom": {
        syntax: "auto | <number> | <percentage>",
        media: [
          "visual",
          "continuous"
        ],
        initial: "auto",
        percentages: "the zoom factor itself",
        computed: "autoNonNegativeOrPercentage",
        order: "uniqueOrder",
        status: "standard"
      },
      orientation: {
        syntax: "auto | portrait | landscape",
        media: [
          "visual",
          "continuous"
        ],
        initial: "auto",
        percentages: "referToSizeOfBoundingBox",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      "user-zoom": {
        syntax: "zoom | fixed",
        media: [
          "visual",
          "continuous"
        ],
        initial: "zoom",
        percentages: "referToSizeOfBoundingBox",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      "viewport-fit": {
        syntax: "auto | contain | cover",
        media: [
          "visual",
          "continuous"
        ],
        initial: "auto",
        percentages: "no",
        computed: "asSpecified",
        order: "uniqueOrder",
        status: "standard"
      },
      width: {
        syntax: "<viewport-length>{1,2}",
        media: [
          "visual",
          "continuous"
        ],
        initial: [
          "min-width",
          "max-width"
        ],
        percentages: [
          "min-width",
          "max-width"
        ],
        computed: [
          "min-width",
          "max-width"
        ],
        order: "orderOfAppearance",
        status: "standard"
      },
      zoom: {
        syntax: "auto | <number> | <percentage>",
        media: [
          "visual",
          "continuous"
        ],
        initial: "auto",
        percentages: "the zoom factor itself",
        computed: "autoNonNegativeOrPercentage",
        order: "uniqueOrder",
        status: "standard"
      }
    },
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/@viewport"
  }
}, Wm = {
  syntax: "initial | inherit | unset | revert",
  media: "noPracticalMedia",
  inherited: !1,
  animationType: "eachOfShorthandPropertiesExceptUnicodeBiDiAndDirection",
  percentages: "no",
  groups: [
    "CSS Miscellaneous"
  ],
  initial: "noPracticalInitialValue",
  appliesto: "allElements",
  computed: "asSpecifiedAppliesToEachProperty",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/all"
}, Pm = {
  syntax: "<single-animation>#",
  media: "visual",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Animations"
  ],
  initial: [
    "animation-name",
    "animation-duration",
    "animation-timing-function",
    "animation-delay",
    "animation-iteration-count",
    "animation-direction",
    "animation-fill-mode",
    "animation-play-state"
  ],
  appliesto: "allElementsAndPseudos",
  computed: [
    "animation-name",
    "animation-duration",
    "animation-timing-function",
    "animation-delay",
    "animation-direction",
    "animation-iteration-count",
    "animation-fill-mode",
    "animation-play-state"
  ],
  order: "orderOfAppearance",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/animation"
}, Im = {
  syntax: "none | auto | textfield | menulist-button | <compat-auto>",
  media: "all",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Basic User Interface"
  ],
  initial: "auto",
  appliesto: "allElements",
  computed: "asSpecified",
  order: "perGrammar",
  status: "experimental",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/appearance"
}, Bm = {
  syntax: "<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards",
  media: "aural",
  inherited: !0,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Speech"
  ],
  initial: "center",
  appliesto: "allElements",
  computed: "normalizedAngle",
  order: "orderOfAppearance",
  status: "obsolete",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/azimuth"
}, Rm = {
  syntax: "[ <bg-layer> , ]* <final-bg-layer>",
  media: "visual",
  inherited: !1,
  animationType: [
    "background-color",
    "background-image",
    "background-clip",
    "background-position",
    "background-size",
    "background-repeat",
    "background-attachment"
  ],
  percentages: [
    "background-position",
    "background-size"
  ],
  groups: [
    "CSS Backgrounds and Borders"
  ],
  initial: [
    "background-image",
    "background-position",
    "background-size",
    "background-repeat",
    "background-origin",
    "background-clip",
    "background-attachment",
    "background-color"
  ],
  appliesto: "allElements",
  computed: [
    "background-image",
    "background-position",
    "background-size",
    "background-repeat",
    "background-origin",
    "background-clip",
    "background-attachment",
    "background-color"
  ],
  order: "orderOfAppearance",
  alsoAppliesTo: [
    "::first-letter",
    "::first-line",
    "::placeholder"
  ],
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background"
}, Mm = {
  syntax: "<line-width> || <line-style> || <color>",
  media: "visual",
  inherited: !1,
  animationType: [
    "border-color",
    "border-style",
    "border-width"
  ],
  percentages: "no",
  groups: [
    "CSS Backgrounds and Borders"
  ],
  initial: [
    "border-width",
    "border-style",
    "border-color"
  ],
  appliesto: "allElements",
  computed: [
    "border-width",
    "border-style",
    "border-color"
  ],
  order: "orderOfAppearance",
  alsoAppliesTo: [
    "::first-letter"
  ],
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border"
}, qm = {
  syntax: "<length> | <percentage> | auto",
  media: "visual",
  inherited: !1,
  animationType: "lpc",
  percentages: "referToContainingBlockHeight",
  groups: [
    "CSS Positioning"
  ],
  initial: "auto",
  appliesto: "positionedElements",
  computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/bottom"
}, Dm = {
  syntax: "none | left | right | both | inline-start | inline-end",
  media: "visual",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Positioning"
  ],
  initial: "none",
  appliesto: "blockLevelElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/clear"
}, Nm = {
  syntax: "<shape> | auto",
  media: "visual",
  inherited: !1,
  animationType: "rectangle",
  percentages: "no",
  groups: [
    "CSS Masking"
  ],
  initial: "auto",
  appliesto: "absolutelyPositionedElements",
  computed: "autoOrRectangle",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/clip"
}, $m = {
  syntax: "<color>",
  media: "visual",
  inherited: !0,
  animationType: "color",
  percentages: "no",
  groups: [
    "CSS Color"
  ],
  initial: "variesFromBrowserToBrowser",
  appliesto: "allElements",
  computed: "translucentValuesRGBAOtherwiseRGB",
  order: "uniqueOrder",
  alsoAppliesTo: [
    "::first-letter",
    "::first-line",
    "::placeholder"
  ],
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/color"
}, Fm = {
  syntax: "<'column-width'> || <'column-count'>",
  media: "visual",
  inherited: !1,
  animationType: [
    "column-width",
    "column-count"
  ],
  percentages: "no",
  groups: [
    "CSS Columns"
  ],
  initial: [
    "column-width",
    "column-count"
  ],
  appliesto: "blockContainersExceptTableWrappers",
  computed: [
    "column-width",
    "column-count"
  ],
  order: "perGrammar",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/columns"
}, Gm = {
  syntax: "none | strict | content | [ size || layout || style || paint ]",
  media: "all",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Containment"
  ],
  initial: "none",
  appliesto: "allElements",
  computed: "asSpecified",
  order: "perGrammar",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/contain"
}, Vm = {
  syntax: "normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?",
  media: "all",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Generated Content"
  ],
  initial: "normal",
  appliesto: "beforeAndAfterPseudos",
  computed: "normalOnElementsForPseudosNoneAbsoluteURIStringOrAsSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/content"
}, Hm = {
  syntax: "[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]",
  media: [
    "visual",
    "interactive"
  ],
  inherited: !0,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Basic User Interface"
  ],
  initial: "auto",
  appliesto: "allElements",
  computed: "asSpecifiedURLsAbsolute",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/cursor"
}, Um = {
  syntax: "ltr | rtl",
  media: "visual",
  inherited: !0,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Writing Modes"
  ],
  initial: "ltr",
  appliesto: "allElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/direction"
}, Ym = {
  syntax: "[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>",
  media: "all",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Display"
  ],
  initial: "inline",
  appliesto: "allElements",
  computed: "asSpecifiedExceptPositionedFloatingAndRootElementsKeywordMaybeDifferent",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/display"
}, Km = {
  syntax: "none | <filter-function-list>",
  media: "visual",
  inherited: !1,
  animationType: "filterList",
  percentages: "no",
  groups: [
    "Filter Effects"
  ],
  initial: "none",
  appliesto: "allElementsSVGContainerElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/filter"
}, Zm = {
  syntax: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
  media: "visual",
  inherited: !1,
  animationType: [
    "flex-grow",
    "flex-shrink",
    "flex-basis"
  ],
  percentages: "no",
  groups: [
    "CSS Flexible Box Layout"
  ],
  initial: [
    "flex-grow",
    "flex-shrink",
    "flex-basis"
  ],
  appliesto: "flexItemsAndInFlowPseudos",
  computed: [
    "flex-grow",
    "flex-shrink",
    "flex-basis"
  ],
  order: "orderOfAppearance",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/flex"
}, Qm = {
  syntax: "left | right | none | inline-start | inline-end",
  media: "visual",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Positioning"
  ],
  initial: "none",
  appliesto: "allElementsNoEffectIfDisplayNone",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/float"
}, Xm = {
  syntax: "[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar",
  media: "visual",
  inherited: !0,
  animationType: [
    "font-style",
    "font-variant",
    "font-weight",
    "font-stretch",
    "font-size",
    "line-height",
    "font-family"
  ],
  percentages: [
    "font-size",
    "line-height"
  ],
  groups: [
    "CSS Fonts"
  ],
  initial: [
    "font-style",
    "font-variant",
    "font-weight",
    "font-stretch",
    "font-size",
    "line-height",
    "font-family"
  ],
  appliesto: "allElements",
  computed: [
    "font-style",
    "font-variant",
    "font-weight",
    "font-stretch",
    "font-size",
    "line-height",
    "font-family"
  ],
  order: "orderOfAppearance",
  alsoAppliesTo: [
    "::first-letter",
    "::first-line",
    "::placeholder"
  ],
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font"
}, Jm = {
  syntax: "<'row-gap'> <'column-gap'>?",
  media: "visual",
  inherited: !1,
  animationType: [
    "row-gap",
    "column-gap"
  ],
  percentages: "no",
  groups: [
    "CSS Box Alignment"
  ],
  initial: [
    "row-gap",
    "column-gap"
  ],
  appliesto: "multiColumnElementsFlexContainersGridContainers",
  computed: [
    "row-gap",
    "column-gap"
  ],
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/gap"
}, eh = {
  syntax: "<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>",
  media: "visual",
  inherited: !1,
  animationType: "discrete",
  percentages: [
    "grid-template-rows",
    "grid-template-columns",
    "grid-auto-rows",
    "grid-auto-columns"
  ],
  groups: [
    "CSS Grid Layout"
  ],
  initial: [
    "grid-template-rows",
    "grid-template-columns",
    "grid-template-areas",
    "grid-auto-rows",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-column-gap",
    "grid-row-gap",
    "column-gap",
    "row-gap"
  ],
  appliesto: "gridContainers",
  computed: [
    "grid-template-rows",
    "grid-template-columns",
    "grid-template-areas",
    "grid-auto-rows",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-column-gap",
    "grid-row-gap",
    "column-gap",
    "row-gap"
  ],
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid"
}, th = {
  syntax: "auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)",
  media: "visual",
  inherited: !1,
  animationType: "lpc",
  percentages: "regardingHeightOfGeneratedBoxContainingBlockPercentagesRelativeToContainingBlock",
  groups: [
    "CSS Box Model"
  ],
  initial: "auto",
  appliesto: "allElementsButNonReplacedAndTableColumns",
  computed: "percentageAutoOrAbsoluteLength",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/height"
}, rh = {
  syntax: "none | manual | auto",
  media: "visual",
  inherited: !0,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Text"
  ],
  initial: "manual",
  appliesto: "allElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/hyphens"
}, ah = {
  syntax: "<'top'>{1,4}",
  media: "visual",
  inherited: !1,
  animationType: "lpc",
  percentages: "logicalHeightOfContainingBlock",
  groups: [
    "CSS Logical Properties"
  ],
  initial: "auto",
  appliesto: "positionedElements",
  computed: "sameAsBoxOffsets",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/inset"
}, nh = {
  syntax: "auto | isolate",
  media: "visual",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "Compositing and Blending"
  ],
  initial: "auto",
  appliesto: "allElementsSVGContainerGraphicsAndGraphicsReferencingElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/isolation"
}, ih = {
  syntax: "<length> | <percentage> | auto",
  media: "visual",
  inherited: !1,
  animationType: "lpc",
  percentages: "referToWidthOfContainingBlock",
  groups: [
    "CSS Positioning"
  ],
  initial: "auto",
  appliesto: "positionedElements",
  computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/left"
}, sh = {
  syntax: "[ <length> | <percentage> | auto ]{1,4}",
  media: "visual",
  inherited: !1,
  animationType: "length",
  percentages: "referToWidthOfContainingBlock",
  groups: [
    "CSS Box Model"
  ],
  initial: [
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-top"
  ],
  appliesto: "allElementsExceptTableDisplayTypes",
  computed: [
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-top"
  ],
  order: "uniqueOrder",
  alsoAppliesTo: [
    "::first-letter",
    "::first-line"
  ],
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin"
}, oh = {
  syntax: "<mask-layer>#",
  media: "visual",
  inherited: !1,
  animationType: [
    "mask-image",
    "mask-mode",
    "mask-repeat",
    "mask-position",
    "mask-clip",
    "mask-origin",
    "mask-size",
    "mask-composite"
  ],
  percentages: [
    "mask-position"
  ],
  groups: [
    "CSS Masking"
  ],
  initial: [
    "mask-image",
    "mask-mode",
    "mask-repeat",
    "mask-position",
    "mask-clip",
    "mask-origin",
    "mask-size",
    "mask-composite"
  ],
  appliesto: "allElementsSVGContainerElements",
  computed: [
    "mask-image",
    "mask-mode",
    "mask-repeat",
    "mask-position",
    "mask-clip",
    "mask-origin",
    "mask-size",
    "mask-composite"
  ],
  order: "perGrammar",
  stacking: !0,
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask"
}, lh = {
  syntax: "[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?",
  media: "visual",
  inherited: !1,
  animationType: [
    "offset-position",
    "offset-path",
    "offset-distance",
    "offset-anchor",
    "offset-rotate"
  ],
  percentages: [
    "offset-position",
    "offset-distance",
    "offset-anchor"
  ],
  groups: [
    "CSS Motion Path"
  ],
  initial: [
    "offset-position",
    "offset-path",
    "offset-distance",
    "offset-anchor",
    "offset-rotate"
  ],
  appliesto: "transformableElements",
  computed: [
    "offset-position",
    "offset-path",
    "offset-distance",
    "offset-anchor",
    "offset-rotate"
  ],
  order: "perGrammar",
  stacking: !0,
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/offset"
}, dh = {
  syntax: "<alpha-value>",
  media: "visual",
  inherited: !1,
  animationType: "number",
  percentages: "no",
  groups: [
    "CSS Color"
  ],
  initial: "1.0",
  appliesto: "allElements",
  computed: "specifiedValueClipped0To1",
  order: "uniqueOrder",
  alsoAppliesTo: [
    "::placeholder"
  ],
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/opacity"
}, ph = {
  syntax: "<integer>",
  media: "visual",
  inherited: !1,
  animationType: "integer",
  percentages: "no",
  groups: [
    "CSS Flexible Box Layout"
  ],
  initial: "0",
  appliesto: "flexItemsGridItemsAbsolutelyPositionedContainerChildren",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/order"
}, ch = {
  syntax: "<integer>",
  media: "visual",
  inherited: !0,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Fragmentation"
  ],
  initial: "2",
  appliesto: "blockContainerElements",
  computed: "asSpecified",
  order: "perGrammar",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/orphans"
}, uh = {
  syntax: "[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]",
  media: [
    "visual",
    "interactive"
  ],
  inherited: !1,
  animationType: [
    "outline-color",
    "outline-width",
    "outline-style"
  ],
  percentages: "no",
  groups: [
    "CSS Basic User Interface"
  ],
  initial: [
    "outline-color",
    "outline-style",
    "outline-width"
  ],
  appliesto: "allElements",
  computed: [
    "outline-color",
    "outline-width",
    "outline-style"
  ],
  order: "orderOfAppearance",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/outline"
}, mh = {
  syntax: "[ visible | hidden | clip | scroll | auto ]{1,2}",
  media: "visual",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Overflow"
  ],
  initial: "visible",
  appliesto: "blockContainersFlexContainersGridContainers",
  computed: [
    "overflow-x",
    "overflow-y"
  ],
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overflow"
}, hh = {
  syntax: "[ <length> | <percentage> ]{1,4}",
  media: "visual",
  inherited: !1,
  animationType: "length",
  percentages: "referToWidthOfContainingBlock",
  groups: [
    "CSS Box Model"
  ],
  initial: [
    "padding-bottom",
    "padding-left",
    "padding-right",
    "padding-top"
  ],
  appliesto: "allElementsExceptInternalTableDisplayTypes",
  computed: [
    "padding-bottom",
    "padding-left",
    "padding-right",
    "padding-top"
  ],
  order: "uniqueOrder",
  alsoAppliesTo: [
    "::first-letter",
    "::first-line"
  ],
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding"
}, gh = {
  syntax: "none | <length>",
  media: "visual",
  inherited: !1,
  animationType: "length",
  percentages: "no",
  groups: [
    "CSS Transforms"
  ],
  initial: "none",
  appliesto: "transformableElements",
  computed: "absoluteLengthOrNone",
  order: "uniqueOrder",
  stacking: !0,
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/perspective"
}, fh = {
  syntax: "static | relative | absolute | sticky | fixed",
  media: "visual",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Positioning"
  ],
  initial: "static",
  appliesto: "allElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  stacking: !0,
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/position"
}, yh = {
  syntax: "none | auto | [ <string> <string> ]+",
  media: "visual",
  inherited: !0,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Generated Content"
  ],
  initial: "dependsOnUserAgent",
  appliesto: "allElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/quotes"
}, vh = {
  syntax: "none | both | horizontal | vertical | block | inline",
  media: "visual",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Basic User Interface"
  ],
  initial: "none",
  appliesto: "elementsWithOverflowNotVisibleAndReplacedElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/resize"
}, bh = {
  syntax: "<length> | <percentage> | auto",
  media: "visual",
  inherited: !1,
  animationType: "lpc",
  percentages: "referToWidthOfContainingBlock",
  groups: [
    "CSS Positioning"
  ],
  initial: "auto",
  appliesto: "positionedElements",
  computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/right"
}, Sh = {
  syntax: "none | <angle> | [ x | y | z | <number>{3} ] && <angle>",
  media: "visual",
  inherited: !1,
  animationType: "transform",
  percentages: "no",
  groups: [
    "CSS Transforms"
  ],
  initial: "none",
  appliesto: "transformableElements",
  computed: "asSpecified",
  order: "perGrammar",
  stacking: !0,
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/rotate"
}, xh = {
  syntax: "none | <number>{1,3}",
  media: "visual",
  inherited: !1,
  animationType: "transform",
  percentages: "no",
  groups: [
    "CSS Transforms"
  ],
  initial: "none",
  appliesto: "transformableElements",
  computed: "asSpecified",
  order: "perGrammar",
  stacking: !0,
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scale"
}, wh = {
  syntax: "<length> | <percentage> | auto",
  media: "visual",
  inherited: !1,
  animationType: "lpc",
  percentages: "referToContainingBlockHeight",
  groups: [
    "CSS Positioning"
  ],
  initial: "auto",
  appliesto: "positionedElements",
  computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/top"
}, Ch = {
  syntax: "none | <transform-list>",
  media: "visual",
  inherited: !1,
  animationType: "transform",
  percentages: "referToSizeOfBoundingBox",
  groups: [
    "CSS Transforms"
  ],
  initial: "none",
  appliesto: "transformableElements",
  computed: "asSpecifiedRelativeToAbsoluteLengths",
  order: "uniqueOrder",
  stacking: !0,
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/transform"
}, kh = {
  syntax: "<single-transition>#",
  media: "interactive",
  inherited: !1,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Transitions"
  ],
  initial: [
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function"
  ],
  appliesto: "allElementsAndPseudos",
  computed: [
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function"
  ],
  order: "orderOfAppearance",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/transition"
}, Th = {
  syntax: "none | <length-percentage> [ <length-percentage> <length>? ]?",
  media: "visual",
  inherited: !1,
  animationType: "transform",
  percentages: "referToSizeOfBoundingBox",
  groups: [
    "CSS Transforms"
  ],
  initial: "none",
  appliesto: "transformableElements",
  computed: "asSpecifiedRelativeToAbsoluteLengths",
  order: "perGrammar",
  stacking: !0,
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/translate"
}, Eh = {
  syntax: "visible | hidden | collapse",
  media: "visual",
  inherited: !0,
  animationType: "visibility",
  percentages: "no",
  groups: [
    "CSS Box Model"
  ],
  initial: "visible",
  appliesto: "allElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/visibility"
}, _h = {
  syntax: "<integer>",
  media: "visual",
  inherited: !0,
  animationType: "discrete",
  percentages: "no",
  groups: [
    "CSS Fragmentation"
  ],
  initial: "2",
  appliesto: "blockContainerElements",
  computed: "asSpecified",
  order: "perGrammar",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/widows"
}, Ah = {
  syntax: "auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)",
  media: "visual",
  inherited: !1,
  animationType: "lpc",
  percentages: "referToWidthOfContainingBlock",
  groups: [
    "CSS Box Model"
  ],
  initial: "auto",
  appliesto: "allElementsButNonReplacedAndTableRows",
  computed: "percentageAutoOrAbsoluteLength",
  order: "lengthOrPercentageBeforeKeywordIfBothPresent",
  status: "standard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/width"
}, Oh = {
  syntax: "normal | reset | <number> | <percentage>",
  media: "visual",
  inherited: !1,
  animationType: "integer",
  percentages: "no",
  groups: [
    "Microsoft Extensions"
  ],
  initial: "normal",
  appliesto: "allElements",
  computed: "asSpecified",
  order: "uniqueOrder",
  status: "nonstandard",
  mdn_url: "https://developer.mozilla.org/docs/Web/CSS/zoom"
}, zh = {
  "--*": {
    syntax: "<declaration-value>",
    media: "all",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Variables"
    ],
    initial: "seeProse",
    appliesto: "allElements",
    computed: "asSpecifiedWithVarsSubstituted",
    order: "perGrammar",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/--*"
  },
  "-ms-accelerator": {
    syntax: "false | true",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "false",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-accelerator"
  },
  "-ms-block-progression": {
    syntax: "tb | rl | bt | lr",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "tb",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-block-progression"
  },
  "-ms-content-zoom-chaining": {
    syntax: "none | chained",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "none",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-content-zoom-chaining"
  },
  "-ms-content-zooming": {
    syntax: "none | zoom",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "zoomForTheTopLevelNoneForTheRest",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-content-zooming"
  },
  "-ms-content-zoom-limit": {
    syntax: "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: [
      "-ms-content-zoom-limit-max",
      "-ms-content-zoom-limit-min"
    ],
    groups: [
      "Microsoft Extensions"
    ],
    initial: [
      "-ms-content-zoom-limit-max",
      "-ms-content-zoom-limit-min"
    ],
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: [
      "-ms-content-zoom-limit-max",
      "-ms-content-zoom-limit-min"
    ],
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-content-zoom-limit"
  },
  "-ms-content-zoom-limit-max": {
    syntax: "<percentage>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "maxZoomFactor",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "400%",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-content-zoom-limit-max"
  },
  "-ms-content-zoom-limit-min": {
    syntax: "<percentage>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "minZoomFactor",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "100%",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-content-zoom-limit-min"
  },
  "-ms-content-zoom-snap": {
    syntax: "<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: [
      "-ms-content-zoom-snap-type",
      "-ms-content-zoom-snap-points"
    ],
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: [
      "-ms-content-zoom-snap-type",
      "-ms-content-zoom-snap-points"
    ],
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-content-zoom-snap"
  },
  "-ms-content-zoom-snap-points": {
    syntax: "snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "snapInterval(0%, 100%)",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-content-zoom-snap-points"
  },
  "-ms-content-zoom-snap-type": {
    syntax: "none | proximity | mandatory",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "none",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-content-zoom-snap-type"
  },
  "-ms-filter": {
    syntax: "<string>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: '""',
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-filter"
  },
  "-ms-flow-from": {
    syntax: "[ none | <custom-ident> ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "none",
    appliesto: "nonReplacedElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-flow-from"
  },
  "-ms-flow-into": {
    syntax: "[ none | <custom-ident> ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "none",
    appliesto: "iframeElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-flow-into"
  },
  "-ms-grid-columns": {
    syntax: "none | <track-list> | <auto-track-list>",
    media: "visual",
    inherited: !1,
    animationType: "simpleListOfLpcDifferenceLpc",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "none",
    appliesto: "gridContainers",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-grid-columns"
  },
  "-ms-grid-rows": {
    syntax: "none | <track-list> | <auto-track-list>",
    media: "visual",
    inherited: !1,
    animationType: "simpleListOfLpcDifferenceLpc",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "none",
    appliesto: "gridContainers",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-grid-rows"
  },
  "-ms-high-contrast-adjust": {
    syntax: "auto | none",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-high-contrast-adjust"
  },
  "-ms-hyphenate-limit-chars": {
    syntax: "auto | <integer>{1,3}",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-hyphenate-limit-chars"
  },
  "-ms-hyphenate-limit-lines": {
    syntax: "no-limit | <integer>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "no-limit",
    appliesto: "blockContainerElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-hyphenate-limit-lines"
  },
  "-ms-hyphenate-limit-zone": {
    syntax: "<percentage> | <length>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "referToLineBoxWidth",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "0",
    appliesto: "blockContainerElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-hyphenate-limit-zone"
  },
  "-ms-ime-align": {
    syntax: "auto | after",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-ime-align"
  },
  "-ms-overflow-style": {
    syntax: "auto | none | scrollbar | -ms-autohiding-scrollbar",
    media: "interactive",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "auto",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-overflow-style"
  },
  "-ms-scrollbar-3dlight-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "dependsOnUserAgent",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-3dlight-color"
  },
  "-ms-scrollbar-arrow-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "ButtonText",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-arrow-color"
  },
  "-ms-scrollbar-base-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "dependsOnUserAgent",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-base-color"
  },
  "-ms-scrollbar-darkshadow-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "ThreeDDarkShadow",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-darkshadow-color"
  },
  "-ms-scrollbar-face-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "ThreeDFace",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-face-color"
  },
  "-ms-scrollbar-highlight-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "ThreeDHighlight",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-highlight-color"
  },
  "-ms-scrollbar-shadow-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "ThreeDDarkShadow",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-shadow-color"
  },
  "-ms-scrollbar-track-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "Scrollbar",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-track-color"
  },
  "-ms-scroll-chaining": {
    syntax: "chained | none",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "chained",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-chaining"
  },
  "-ms-scroll-limit": {
    syntax: "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: [
      "-ms-scroll-limit-x-min",
      "-ms-scroll-limit-y-min",
      "-ms-scroll-limit-x-max",
      "-ms-scroll-limit-y-max"
    ],
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: [
      "-ms-scroll-limit-x-min",
      "-ms-scroll-limit-y-min",
      "-ms-scroll-limit-x-max",
      "-ms-scroll-limit-y-max"
    ],
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-limit"
  },
  "-ms-scroll-limit-x-max": {
    syntax: "auto | <length>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "auto",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-limit-x-max"
  },
  "-ms-scroll-limit-x-min": {
    syntax: "<length>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "0",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-limit-x-min"
  },
  "-ms-scroll-limit-y-max": {
    syntax: "auto | <length>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "auto",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-limit-y-max"
  },
  "-ms-scroll-limit-y-min": {
    syntax: "<length>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "0",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-limit-y-min"
  },
  "-ms-scroll-rails": {
    syntax: "none | railed",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "railed",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-rails"
  },
  "-ms-scroll-snap-points-x": {
    syntax: "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "snapInterval(0px, 100%)",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-snap-points-x"
  },
  "-ms-scroll-snap-points-y": {
    syntax: "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "snapInterval(0px, 100%)",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-snap-points-y"
  },
  "-ms-scroll-snap-type": {
    syntax: "none | proximity | mandatory",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "none",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-snap-type"
  },
  "-ms-scroll-snap-x": {
    syntax: "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: [
      "-ms-scroll-snap-type",
      "-ms-scroll-snap-points-x"
    ],
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: [
      "-ms-scroll-snap-type",
      "-ms-scroll-snap-points-x"
    ],
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-snap-x"
  },
  "-ms-scroll-snap-y": {
    syntax: "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: [
      "-ms-scroll-snap-type",
      "-ms-scroll-snap-points-y"
    ],
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: [
      "-ms-scroll-snap-type",
      "-ms-scroll-snap-points-y"
    ],
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-snap-y"
  },
  "-ms-scroll-translation": {
    syntax: "none | vertical-to-horizontal",
    media: "interactive",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-scroll-translation"
  },
  "-ms-text-autospace": {
    syntax: "none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-text-autospace"
  },
  "-ms-touch-select": {
    syntax: "grippers | none",
    media: "interactive",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "grippers",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-touch-select"
  },
  "-ms-user-select": {
    syntax: "none | element | text",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "text",
    appliesto: "nonReplacedElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-user-select"
  },
  "-ms-wrap-flow": {
    syntax: "auto | both | start | end | maximum | clear",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "auto",
    appliesto: "blockLevelElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-wrap-flow"
  },
  "-ms-wrap-margin": {
    syntax: "<length>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "0",
    appliesto: "exclusionElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-wrap-margin"
  },
  "-ms-wrap-through": {
    syntax: "wrap | none",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Microsoft Extensions"
    ],
    initial: "wrap",
    appliesto: "blockLevelElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-ms-wrap-through"
  },
  "-moz-appearance": {
    syntax: "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions",
      "WebKit Extensions"
    ],
    initial: "noneButOverriddenInUserAgentCSS",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/appearance"
  },
  "-moz-binding": {
    syntax: "<url> | none",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "none",
    appliesto: "allElementsExceptGeneratedContentOrPseudoElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-binding"
  },
  "-moz-border-bottom-colors": {
    syntax: "<color>+ | none",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-border-bottom-colors"
  },
  "-moz-border-left-colors": {
    syntax: "<color>+ | none",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-border-left-colors"
  },
  "-moz-border-right-colors": {
    syntax: "<color>+ | none",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-border-right-colors"
  },
  "-moz-border-top-colors": {
    syntax: "<color>+ | none",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-border-top-colors"
  },
  "-moz-context-properties": {
    syntax: "none | [ fill | fill-opacity | stroke | stroke-opacity ]#",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "none",
    appliesto: "allElementsThatCanReferenceImages",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-context-properties"
  },
  "-moz-float-edge": {
    syntax: "border-box | content-box | margin-box | padding-box",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "content-box",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-float-edge"
  },
  "-moz-force-broken-image-icon": {
    syntax: "<integer [0,1]>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "0",
    appliesto: "images",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-force-broken-image-icon"
  },
  "-moz-image-region": {
    syntax: "<shape> | auto",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "auto",
    appliesto: "xulImageElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-image-region"
  },
  "-moz-orient": {
    syntax: "inline | block | horizontal | vertical",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "inline",
    appliesto: "anyElementEffectOnProgressAndMeter",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-orient"
  },
  "-moz-outline-radius": {
    syntax: "<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?",
    media: "visual",
    inherited: !1,
    animationType: [
      "-moz-outline-radius-topleft",
      "-moz-outline-radius-topright",
      "-moz-outline-radius-bottomright",
      "-moz-outline-radius-bottomleft"
    ],
    percentages: [
      "-moz-outline-radius-topleft",
      "-moz-outline-radius-topright",
      "-moz-outline-radius-bottomright",
      "-moz-outline-radius-bottomleft"
    ],
    groups: [
      "Mozilla Extensions"
    ],
    initial: [
      "-moz-outline-radius-topleft",
      "-moz-outline-radius-topright",
      "-moz-outline-radius-bottomright",
      "-moz-outline-radius-bottomleft"
    ],
    appliesto: "allElements",
    computed: [
      "-moz-outline-radius-topleft",
      "-moz-outline-radius-topright",
      "-moz-outline-radius-bottomright",
      "-moz-outline-radius-bottomleft"
    ],
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-outline-radius"
  },
  "-moz-outline-radius-bottomleft": {
    syntax: "<outline-radius>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-outline-radius-bottomleft"
  },
  "-moz-outline-radius-bottomright": {
    syntax: "<outline-radius>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-outline-radius-bottomright"
  },
  "-moz-outline-radius-topleft": {
    syntax: "<outline-radius>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-outline-radius-topleft"
  },
  "-moz-outline-radius-topright": {
    syntax: "<outline-radius>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-outline-radius-topright"
  },
  "-moz-stack-sizing": {
    syntax: "ignore | stretch-to-fit",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "stretch-to-fit",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-stack-sizing"
  },
  "-moz-text-blink": {
    syntax: "none | blink",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-text-blink"
  },
  "-moz-user-focus": {
    syntax: "ignore | normal | select-after | select-before | select-menu | select-same | select-all | none",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-user-focus"
  },
  "-moz-user-input": {
    syntax: "auto | none | enabled | disabled",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-user-input"
  },
  "-moz-user-modify": {
    syntax: "read-only | read-write | write-only",
    media: "interactive",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "read-only",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-user-modify"
  },
  "-moz-window-dragging": {
    syntax: "drag | no-drag",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "drag",
    appliesto: "allElementsCreatingNativeWindows",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-window-dragging"
  },
  "-moz-window-shadow": {
    syntax: "default | menu | tooltip | sheet | none",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "default",
    appliesto: "allElementsCreatingNativeWindows",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-moz-window-shadow"
  },
  "-webkit-appearance": {
    syntax: "none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "noneButOverriddenInUserAgentCSS",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/appearance"
  },
  "-webkit-border-before": {
    syntax: "<'border-width'> || <'border-style'> || <'color'>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: [
      "-webkit-border-before-width"
    ],
    groups: [
      "WebKit Extensions"
    ],
    initial: [
      "border-width",
      "border-style",
      "color"
    ],
    appliesto: "allElements",
    computed: [
      "border-width",
      "border-style",
      "color"
    ],
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-border-before"
  },
  "-webkit-border-before-color": {
    syntax: "<'color'>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "nonstandard"
  },
  "-webkit-border-before-style": {
    syntax: "<'border-style'>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard"
  },
  "-webkit-border-before-width": {
    syntax: "<'border-width'>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "WebKit Extensions"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthZeroIfBorderStyleNoneOrHidden",
    order: "uniqueOrder",
    status: "nonstandard"
  },
  "-webkit-box-reflect": {
    syntax: "[ above | below | right | left ]? <length>? <image>?",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-box-reflect"
  },
  "-webkit-line-clamp": {
    syntax: "none | <integer>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "WebKit Extensions",
      "CSS Overflow"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp"
  },
  "-webkit-mask": {
    syntax: "[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: [
      "-webkit-mask-image",
      "-webkit-mask-repeat",
      "-webkit-mask-attachment",
      "-webkit-mask-position",
      "-webkit-mask-origin",
      "-webkit-mask-clip"
    ],
    appliesto: "allElements",
    computed: [
      "-webkit-mask-image",
      "-webkit-mask-repeat",
      "-webkit-mask-attachment",
      "-webkit-mask-position",
      "-webkit-mask-origin",
      "-webkit-mask-clip"
    ],
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask"
  },
  "-webkit-mask-attachment": {
    syntax: "<attachment>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "scroll",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-attachment"
  },
  "-webkit-mask-clip": {
    syntax: "[ <box> | border | padding | content | text ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "border",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-clip"
  },
  "-webkit-mask-composite": {
    syntax: "<composite-style>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "source-over",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-composite"
  },
  "-webkit-mask-image": {
    syntax: "<mask-reference>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "absoluteURIOrNone",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-image"
  },
  "-webkit-mask-origin": {
    syntax: "[ <box> | border | padding | content ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "padding",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-origin"
  },
  "-webkit-mask-position": {
    syntax: "<position>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "referToSizeOfElement",
    groups: [
      "WebKit Extensions"
    ],
    initial: "0% 0%",
    appliesto: "allElements",
    computed: "absoluteLengthOrPercentage",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-position"
  },
  "-webkit-mask-position-x": {
    syntax: "[ <length-percentage> | left | center | right ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "referToSizeOfElement",
    groups: [
      "WebKit Extensions"
    ],
    initial: "0%",
    appliesto: "allElements",
    computed: "absoluteLengthOrPercentage",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-position-x"
  },
  "-webkit-mask-position-y": {
    syntax: "[ <length-percentage> | top | center | bottom ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "referToSizeOfElement",
    groups: [
      "WebKit Extensions"
    ],
    initial: "0%",
    appliesto: "allElements",
    computed: "absoluteLengthOrPercentage",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-position-y"
  },
  "-webkit-mask-repeat": {
    syntax: "<repeat-style>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "repeat",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-repeat"
  },
  "-webkit-mask-repeat-x": {
    syntax: "repeat | no-repeat | space | round",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "repeat",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-repeat-x"
  },
  "-webkit-mask-repeat-y": {
    syntax: "repeat | no-repeat | space | round",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "repeat",
    appliesto: "allElements",
    computed: "absoluteLengthOrPercentage",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-repeat-y"
  },
  "-webkit-mask-size": {
    syntax: "<bg-size>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "relativeToBackgroundPositioningArea",
    groups: [
      "WebKit Extensions"
    ],
    initial: "auto auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-size"
  },
  "-webkit-overflow-scrolling": {
    syntax: "auto | touch",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "auto",
    appliesto: "scrollingBoxes",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-overflow-scrolling"
  },
  "-webkit-tap-highlight-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "black",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-tap-highlight-color"
  },
  "-webkit-text-fill-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "color",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color"
  },
  "-webkit-text-stroke": {
    syntax: "<length> || <color>",
    media: "visual",
    inherited: !0,
    animationType: [
      "-webkit-text-stroke-width",
      "-webkit-text-stroke-color"
    ],
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: [
      "-webkit-text-stroke-width",
      "-webkit-text-stroke-color"
    ],
    appliesto: "allElements",
    computed: [
      "-webkit-text-stroke-width",
      "-webkit-text-stroke-color"
    ],
    order: "canonicalOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke"
  },
  "-webkit-text-stroke-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !0,
    animationType: "color",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color"
  },
  "-webkit-text-stroke-width": {
    syntax: "<length>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "absoluteLength",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width"
  },
  "-webkit-touch-callout": {
    syntax: "default | none",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "default",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/-webkit-touch-callout"
  },
  "-webkit-user-modify": {
    syntax: "read-only | read-write | read-write-plaintext-only",
    media: "interactive",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "WebKit Extensions"
    ],
    initial: "read-only",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard"
  },
  "align-content": {
    syntax: "normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Alignment"
    ],
    initial: "normal",
    appliesto: "multilineFlexContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/align-content"
  },
  "align-items": {
    syntax: "normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Alignment"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/align-items"
  },
  "align-self": {
    syntax: "auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Alignment"
    ],
    initial: "auto",
    appliesto: "flexItemsGridItemsAndAbsolutelyPositionedBoxes",
    computed: "autoOnAbsolutelyPositionedElementsValueOfAlignItemsOnParent",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/align-self"
  },
  "align-tracks": {
    syntax: "[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "normal",
    appliesto: "gridContainersWithMasonryLayoutInTheirBlockAxis",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/align-tracks"
  },
  all: Wm,
  animation: Pm,
  "animation-delay": {
    syntax: "<time>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Animations"
    ],
    initial: "0s",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/animation-delay"
  },
  "animation-direction": {
    syntax: "<single-animation-direction>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Animations"
    ],
    initial: "normal",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/animation-direction"
  },
  "animation-duration": {
    syntax: "<time>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Animations"
    ],
    initial: "0s",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/animation-duration"
  },
  "animation-fill-mode": {
    syntax: "<single-animation-fill-mode>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Animations"
    ],
    initial: "none",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode"
  },
  "animation-iteration-count": {
    syntax: "<single-animation-iteration-count>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Animations"
    ],
    initial: "1",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count"
  },
  "animation-name": {
    syntax: "[ none | <keyframes-name> ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Animations"
    ],
    initial: "none",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/animation-name"
  },
  "animation-play-state": {
    syntax: "<single-animation-play-state>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Animations"
    ],
    initial: "running",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/animation-play-state"
  },
  "animation-timing-function": {
    syntax: "<timing-function>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Animations"
    ],
    initial: "ease",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/animation-timing-function"
  },
  appearance: Im,
  "aspect-ratio": {
    syntax: "auto | <ratio>",
    media: "all",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "auto",
    appliesto: "allElementsExceptInlineBoxesAndInternalRubyOrTableBoxes",
    computed: "asSpecified",
    order: "perGrammar",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/aspect-ratio"
  },
  azimuth: Bm,
  "backdrop-filter": {
    syntax: "none | <filter-function-list>",
    media: "visual",
    inherited: !1,
    animationType: "filterList",
    percentages: "no",
    groups: [
      "Filter Effects"
    ],
    initial: "none",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/backdrop-filter"
  },
  "backface-visibility": {
    syntax: "visible | hidden",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Transforms"
    ],
    initial: "visible",
    appliesto: "transformableElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/backface-visibility"
  },
  background: Rm,
  "background-attachment": {
    syntax: "<attachment>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "scroll",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-attachment"
  },
  "background-blend-mode": {
    syntax: "<blend-mode>#",
    media: "none",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Compositing and Blending"
    ],
    initial: "normal",
    appliesto: "allElementsSVGContainerGraphicsAndGraphicsReferencingElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-blend-mode"
  },
  "background-clip": {
    syntax: "<box>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "border-box",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-clip"
  },
  "background-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "transparent",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-color"
  },
  "background-image": {
    syntax: "<bg-image>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecifiedURLsAbsolute",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-image"
  },
  "background-origin": {
    syntax: "<box>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "padding-box",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-origin"
  },
  "background-position": {
    syntax: "<bg-position>#",
    media: "visual",
    inherited: !1,
    animationType: "repeatableListOfSimpleListOfLpc",
    percentages: "referToSizeOfBackgroundPositioningAreaMinusBackgroundImageSize",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "0% 0%",
    appliesto: "allElements",
    computed: "listEachItemTwoKeywordsOriginOffsets",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-position"
  },
  "background-position-x": {
    syntax: "[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "referToWidthOfBackgroundPositioningAreaMinusBackgroundImageHeight",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "left",
    appliesto: "allElements",
    computed: "listEachItemConsistingOfAbsoluteLengthPercentageAndOrigin",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-position-x"
  },
  "background-position-y": {
    syntax: "[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "referToHeightOfBackgroundPositioningAreaMinusBackgroundImageHeight",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "top",
    appliesto: "allElements",
    computed: "listEachItemConsistingOfAbsoluteLengthPercentageAndOrigin",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-position-y"
  },
  "background-repeat": {
    syntax: "<repeat-style>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "repeat",
    appliesto: "allElements",
    computed: "listEachItemHasTwoKeywordsOnePerDimension",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-repeat"
  },
  "background-size": {
    syntax: "<bg-size>#",
    media: "visual",
    inherited: !1,
    animationType: "repeatableListOfSimpleListOfLpc",
    percentages: "relativeToBackgroundPositioningArea",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "auto auto",
    appliesto: "allElements",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/background-size"
  },
  "block-overflow": {
    syntax: "clip | ellipsis | <string>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Overflow"
    ],
    initial: "clip",
    appliesto: "blockContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "experimental"
  },
  "block-size": {
    syntax: "<'width'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "blockSizeOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "auto",
    appliesto: "sameAsWidthAndHeight",
    computed: "sameAsWidthAndHeight",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/block-size"
  },
  border: Mm,
  "border-block": {
    syntax: "<'border-top-width'> || <'border-top-style'> || <'color'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: [
      "border-top-width",
      "border-top-style",
      "border-top-color"
    ],
    appliesto: "allElements",
    computed: [
      "border-top-width",
      "border-top-style",
      "border-top-color"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block"
  },
  "border-block-color": {
    syntax: "<'border-top-color'>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-color"
  },
  "border-block-style": {
    syntax: "<'border-top-style'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-style"
  },
  "border-block-width": {
    syntax: "<'border-top-width'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthZeroIfBorderStyleNoneOrHidden",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-width"
  },
  "border-block-end": {
    syntax: "<'border-top-width'> || <'border-top-style'> || <'color'>",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width"
    ],
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: [
      "border-top-width",
      "border-top-style",
      "border-top-color"
    ],
    appliesto: "allElements",
    computed: [
      "border-top-width",
      "border-top-style",
      "border-top-color"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-end"
  },
  "border-block-end-color": {
    syntax: "<'border-top-color'>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-end-color"
  },
  "border-block-end-style": {
    syntax: "<'border-top-style'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-end-style"
  },
  "border-block-end-width": {
    syntax: "<'border-top-width'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthZeroIfBorderStyleNoneOrHidden",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-end-width"
  },
  "border-block-start": {
    syntax: "<'border-top-width'> || <'border-top-style'> || <'color'>",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width"
    ],
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: [
      "border-width",
      "border-style",
      "color"
    ],
    appliesto: "allElements",
    computed: [
      "border-width",
      "border-style",
      "border-block-start-color"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-start"
  },
  "border-block-start-color": {
    syntax: "<'border-top-color'>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-start-color"
  },
  "border-block-start-style": {
    syntax: "<'border-top-style'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-start-style"
  },
  "border-block-start-width": {
    syntax: "<'border-top-width'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthZeroIfBorderStyleNoneOrHidden",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-block-start-width"
  },
  "border-bottom": {
    syntax: "<line-width> || <line-style> || <color>",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-bottom-color",
      "border-bottom-style",
      "border-bottom-width"
    ],
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: [
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color"
    ],
    appliesto: "allElements",
    computed: [
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color"
    ],
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-bottom"
  },
  "border-bottom-color": {
    syntax: "<'border-top-color'>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-bottom-color"
  },
  "border-bottom-left-radius": {
    syntax: "<length-percentage>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "0",
    appliesto: "allElementsUAsNotRequiredWhenCollapse",
    computed: "twoAbsoluteLengthOrPercentages",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius"
  },
  "border-bottom-right-radius": {
    syntax: "<length-percentage>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "0",
    appliesto: "allElementsUAsNotRequiredWhenCollapse",
    computed: "twoAbsoluteLengthOrPercentages",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius"
  },
  "border-bottom-style": {
    syntax: "<line-style>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-bottom-style"
  },
  "border-bottom-width": {
    syntax: "<line-width>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthOr0IfBorderBottomStyleNoneOrHidden",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-bottom-width"
  },
  "border-collapse": {
    syntax: "collapse | separate",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Table"
    ],
    initial: "separate",
    appliesto: "tableElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-collapse"
  },
  "border-color": {
    syntax: "<color>{1,4}",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-bottom-color",
      "border-left-color",
      "border-right-color",
      "border-top-color"
    ],
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: [
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color"
    ],
    appliesto: "allElements",
    computed: [
      "border-bottom-color",
      "border-left-color",
      "border-right-color",
      "border-top-color"
    ],
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-color"
  },
  "border-end-end-radius": {
    syntax: "<length-percentage>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElementsUAsNotRequiredWhenCollapse",
    computed: "twoAbsoluteLengthOrPercentages",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius"
  },
  "border-end-start-radius": {
    syntax: "<length-percentage>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElementsUAsNotRequiredWhenCollapse",
    computed: "twoAbsoluteLengthOrPercentages",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius"
  },
  "border-image": {
    syntax: "<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: [
      "border-image-slice",
      "border-image-width"
    ],
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: [
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat"
    ],
    appliesto: "allElementsExceptTableElementsWhenCollapse",
    computed: [
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width"
    ],
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-image"
  },
  "border-image-outset": {
    syntax: "[ <length> | <number> ]{1,4}",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "0",
    appliesto: "allElementsExceptTableElementsWhenCollapse",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-image-outset"
  },
  "border-image-repeat": {
    syntax: "[ stretch | repeat | round | space ]{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "stretch",
    appliesto: "allElementsExceptTableElementsWhenCollapse",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-image-repeat"
  },
  "border-image-slice": {
    syntax: "<number-percentage>{1,4} && fill?",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "referToSizeOfBorderImage",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "100%",
    appliesto: "allElementsExceptTableElementsWhenCollapse",
    computed: "oneToFourPercentagesOrAbsoluteLengthsPlusFill",
    order: "percentagesOrLengthsFollowedByFill",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-image-slice"
  },
  "border-image-source": {
    syntax: "none | <image>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "none",
    appliesto: "allElementsExceptTableElementsWhenCollapse",
    computed: "noneOrImageWithAbsoluteURI",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-image-source"
  },
  "border-image-width": {
    syntax: "[ <length-percentage> | <number> | auto ]{1,4}",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "referToWidthOrHeightOfBorderImageArea",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "1",
    appliesto: "allElementsExceptTableElementsWhenCollapse",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-image-width"
  },
  "border-inline": {
    syntax: "<'border-top-width'> || <'border-top-style'> || <'color'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: [
      "border-top-width",
      "border-top-style",
      "border-top-color"
    ],
    appliesto: "allElements",
    computed: [
      "border-top-width",
      "border-top-style",
      "border-top-color"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline"
  },
  "border-inline-end": {
    syntax: "<'border-top-width'> || <'border-top-style'> || <'color'>",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width"
    ],
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: [
      "border-width",
      "border-style",
      "color"
    ],
    appliesto: "allElements",
    computed: [
      "border-width",
      "border-style",
      "border-inline-end-color"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-end"
  },
  "border-inline-color": {
    syntax: "<'border-top-color'>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-color"
  },
  "border-inline-style": {
    syntax: "<'border-top-style'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-style"
  },
  "border-inline-width": {
    syntax: "<'border-top-width'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthZeroIfBorderStyleNoneOrHidden",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-width"
  },
  "border-inline-end-color": {
    syntax: "<'border-top-color'>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color"
  },
  "border-inline-end-style": {
    syntax: "<'border-top-style'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style"
  },
  "border-inline-end-width": {
    syntax: "<'border-top-width'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthZeroIfBorderStyleNoneOrHidden",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width"
  },
  "border-inline-start": {
    syntax: "<'border-top-width'> || <'border-top-style'> || <'color'>",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width"
    ],
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: [
      "border-width",
      "border-style",
      "color"
    ],
    appliesto: "allElements",
    computed: [
      "border-width",
      "border-style",
      "border-inline-start-color"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-start"
  },
  "border-inline-start-color": {
    syntax: "<'border-top-color'>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color"
  },
  "border-inline-start-style": {
    syntax: "<'border-top-style'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style"
  },
  "border-inline-start-width": {
    syntax: "<'border-top-width'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthZeroIfBorderStyleNoneOrHidden",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width"
  },
  "border-left": {
    syntax: "<line-width> || <line-style> || <color>",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-left-color",
      "border-left-style",
      "border-left-width"
    ],
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: [
      "border-left-width",
      "border-left-style",
      "border-left-color"
    ],
    appliesto: "allElements",
    computed: [
      "border-left-width",
      "border-left-style",
      "border-left-color"
    ],
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-left"
  },
  "border-left-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-left-color"
  },
  "border-left-style": {
    syntax: "<line-style>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-left-style"
  },
  "border-left-width": {
    syntax: "<line-width>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthOr0IfBorderLeftStyleNoneOrHidden",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-left-width"
  },
  "border-radius": {
    syntax: "<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius"
    ],
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: [
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius"
    ],
    appliesto: "allElementsUAsNotRequiredWhenCollapse",
    computed: [
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-top-left-radius",
      "border-top-right-radius"
    ],
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-radius"
  },
  "border-right": {
    syntax: "<line-width> || <line-style> || <color>",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-right-color",
      "border-right-style",
      "border-right-width"
    ],
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: [
      "border-right-width",
      "border-right-style",
      "border-right-color"
    ],
    appliesto: "allElements",
    computed: [
      "border-right-width",
      "border-right-style",
      "border-right-color"
    ],
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-right"
  },
  "border-right-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-right-color"
  },
  "border-right-style": {
    syntax: "<line-style>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-right-style"
  },
  "border-right-width": {
    syntax: "<line-width>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthOr0IfBorderRightStyleNoneOrHidden",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-right-width"
  },
  "border-spacing": {
    syntax: "<length> <length>?",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Table"
    ],
    initial: "0",
    appliesto: "tableElements",
    computed: "twoAbsoluteLengths",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-spacing"
  },
  "border-start-end-radius": {
    syntax: "<length-percentage>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElementsUAsNotRequiredWhenCollapse",
    computed: "twoAbsoluteLengthOrPercentages",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius"
  },
  "border-start-start-radius": {
    syntax: "<length-percentage>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElementsUAsNotRequiredWhenCollapse",
    computed: "twoAbsoluteLengthOrPercentages",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius"
  },
  "border-style": {
    syntax: "<line-style>{1,4}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: [
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style"
    ],
    appliesto: "allElements",
    computed: [
      "border-bottom-style",
      "border-left-style",
      "border-right-style",
      "border-top-style"
    ],
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-style"
  },
  "border-top": {
    syntax: "<line-width> || <line-style> || <color>",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-top-color",
      "border-top-style",
      "border-top-width"
    ],
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: [
      "border-top-width",
      "border-top-style",
      "border-top-color"
    ],
    appliesto: "allElements",
    computed: [
      "border-top-width",
      "border-top-style",
      "border-top-color"
    ],
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-top"
  },
  "border-top-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-top-color"
  },
  "border-top-left-radius": {
    syntax: "<length-percentage>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "0",
    appliesto: "allElementsUAsNotRequiredWhenCollapse",
    computed: "twoAbsoluteLengthOrPercentages",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius"
  },
  "border-top-right-radius": {
    syntax: "<length-percentage>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfBorderBox",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "0",
    appliesto: "allElementsUAsNotRequiredWhenCollapse",
    computed: "twoAbsoluteLengthOrPercentages",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius"
  },
  "border-top-style": {
    syntax: "<line-style>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-top-style"
  },
  "border-top-width": {
    syntax: "<line-width>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLengthOr0IfBorderTopStyleNoneOrHidden",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-top-width"
  },
  "border-width": {
    syntax: "<line-width>{1,4}",
    media: "visual",
    inherited: !1,
    animationType: [
      "border-bottom-width",
      "border-left-width",
      "border-right-width",
      "border-top-width"
    ],
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: [
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width"
    ],
    appliesto: "allElements",
    computed: [
      "border-bottom-width",
      "border-left-width",
      "border-right-width",
      "border-top-width"
    ],
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/border-width"
  },
  bottom: qm,
  "box-align": {
    syntax: "start | center | end | baseline | stretch",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions",
      "WebKit Extensions"
    ],
    initial: "stretch",
    appliesto: "elementsWithDisplayBoxOrInlineBox",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-align"
  },
  "box-decoration-break": {
    syntax: "slice | clone",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fragmentation"
    ],
    initial: "slice",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-decoration-break"
  },
  "box-direction": {
    syntax: "normal | reverse | inherit",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions",
      "WebKit Extensions"
    ],
    initial: "normal",
    appliesto: "elementsWithDisplayBoxOrInlineBox",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-direction"
  },
  "box-flex": {
    syntax: "<number>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions",
      "WebKit Extensions"
    ],
    initial: "0",
    appliesto: "directChildrenOfElementsWithDisplayMozBoxMozInlineBox",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-flex"
  },
  "box-flex-group": {
    syntax: "<integer>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions",
      "WebKit Extensions"
    ],
    initial: "1",
    appliesto: "inFlowChildrenOfBoxElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-flex-group"
  },
  "box-lines": {
    syntax: "single | multiple",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions",
      "WebKit Extensions"
    ],
    initial: "single",
    appliesto: "boxElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-lines"
  },
  "box-ordinal-group": {
    syntax: "<integer>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions",
      "WebKit Extensions"
    ],
    initial: "1",
    appliesto: "childrenOfBoxElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group"
  },
  "box-orient": {
    syntax: "horizontal | vertical | inline-axis | block-axis | inherit",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions",
      "WebKit Extensions"
    ],
    initial: "inlineAxisHorizontalInXUL",
    appliesto: "elementsWithDisplayBoxOrInlineBox",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-orient"
  },
  "box-pack": {
    syntax: "start | center | end | justify",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions",
      "WebKit Extensions"
    ],
    initial: "start",
    appliesto: "elementsWithDisplayMozBoxMozInlineBox",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-pack"
  },
  "box-shadow": {
    syntax: "none | <shadow>#",
    media: "visual",
    inherited: !1,
    animationType: "shadowList",
    percentages: "no",
    groups: [
      "CSS Backgrounds and Borders"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "absoluteLengthsSpecifiedColorAsSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-shadow"
  },
  "box-sizing": {
    syntax: "content-box | border-box",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "content-box",
    appliesto: "allElementsAcceptingWidthOrHeight",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/box-sizing"
  },
  "break-after": {
    syntax: "auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fragmentation"
    ],
    initial: "auto",
    appliesto: "blockLevelElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/break-after"
  },
  "break-before": {
    syntax: "auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fragmentation"
    ],
    initial: "auto",
    appliesto: "blockLevelElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/break-before"
  },
  "break-inside": {
    syntax: "auto | avoid | avoid-page | avoid-column | avoid-region",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fragmentation"
    ],
    initial: "auto",
    appliesto: "blockLevelElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/break-inside"
  },
  "caption-side": {
    syntax: "top | bottom | block-start | block-end | inline-start | inline-end",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Table"
    ],
    initial: "top",
    appliesto: "tableCaptionElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/caption-side"
  },
  "caret-color": {
    syntax: "auto | <color>",
    media: "interactive",
    inherited: !0,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asAutoOrColor",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/caret-color"
  },
  clear: Dm,
  clip: Nm,
  "clip-path": {
    syntax: "<clip-source> | [ <basic-shape> || <geometry-box> ] | none",
    media: "visual",
    inherited: !1,
    animationType: "basicShapeOtherwiseNo",
    percentages: "referToReferenceBoxWhenSpecifiedOtherwiseBorderBox",
    groups: [
      "CSS Masking"
    ],
    initial: "none",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecifiedURLsAbsolute",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/clip-path"
  },
  color: $m,
  "color-adjust": {
    syntax: "economy | exact",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Color"
    ],
    initial: "economy",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/color-adjust"
  },
  "column-count": {
    syntax: "<integer> | auto",
    media: "visual",
    inherited: !1,
    animationType: "integer",
    percentages: "no",
    groups: [
      "CSS Columns"
    ],
    initial: "auto",
    appliesto: "blockContainersExceptTableWrappers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-count"
  },
  "column-fill": {
    syntax: "auto | balance | balance-all",
    media: "visualInContinuousMediaNoEffectInOverflowColumns",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Columns"
    ],
    initial: "balance",
    appliesto: "multicolElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-fill"
  },
  "column-gap": {
    syntax: "normal | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Box Alignment"
    ],
    initial: "normal",
    appliesto: "multiColumnElementsFlexContainersGridContainers",
    computed: "asSpecifiedWithLengthsAbsoluteAndNormalComputingToZeroExceptMultiColumn",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-gap"
  },
  "column-rule": {
    syntax: "<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>",
    media: "visual",
    inherited: !1,
    animationType: [
      "column-rule-color",
      "column-rule-style",
      "column-rule-width"
    ],
    percentages: "no",
    groups: [
      "CSS Columns"
    ],
    initial: [
      "column-rule-width",
      "column-rule-style",
      "column-rule-color"
    ],
    appliesto: "multicolElements",
    computed: [
      "column-rule-color",
      "column-rule-style",
      "column-rule-width"
    ],
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-rule"
  },
  "column-rule-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Columns"
    ],
    initial: "currentcolor",
    appliesto: "multicolElements",
    computed: "computedColor",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-rule-color"
  },
  "column-rule-style": {
    syntax: "<'border-style'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Columns"
    ],
    initial: "none",
    appliesto: "multicolElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-rule-style"
  },
  "column-rule-width": {
    syntax: "<'border-width'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Columns"
    ],
    initial: "medium",
    appliesto: "multicolElements",
    computed: "absoluteLength0IfColumnRuleStyleNoneOrHidden",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-rule-width"
  },
  "column-span": {
    syntax: "none | all",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Columns"
    ],
    initial: "none",
    appliesto: "inFlowBlockLevelElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-span"
  },
  "column-width": {
    syntax: "<length> | auto",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Columns"
    ],
    initial: "auto",
    appliesto: "blockContainersExceptTableWrappers",
    computed: "absoluteLengthZeroOrLarger",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-width"
  },
  columns: Fm,
  contain: Gm,
  content: Vm,
  "counter-increment": {
    syntax: "[ <custom-ident> <integer>? ]+ | none",
    media: "all",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Counter Styles"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/counter-increment"
  },
  "counter-reset": {
    syntax: "[ <custom-ident> <integer>? ]+ | none",
    media: "all",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Counter Styles"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/counter-reset"
  },
  "counter-set": {
    syntax: "[ <custom-ident> <integer>? ]+ | none",
    media: "all",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Counter Styles"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/counter-set"
  },
  cursor: Hm,
  direction: Um,
  display: Ym,
  "empty-cells": {
    syntax: "show | hide",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Table"
    ],
    initial: "show",
    appliesto: "tableCellElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/empty-cells"
  },
  filter: Km,
  flex: Zm,
  "flex-basis": {
    syntax: "content | <'width'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToFlexContainersInnerMainSize",
    groups: [
      "CSS Flexible Box Layout"
    ],
    initial: "auto",
    appliesto: "flexItemsAndInFlowPseudos",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "lengthOrPercentageBeforeKeywordIfBothPresent",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/flex-basis"
  },
  "flex-direction": {
    syntax: "row | row-reverse | column | column-reverse",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Flexible Box Layout"
    ],
    initial: "row",
    appliesto: "flexContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/flex-direction"
  },
  "flex-flow": {
    syntax: "<'flex-direction'> || <'flex-wrap'>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Flexible Box Layout"
    ],
    initial: [
      "flex-direction",
      "flex-wrap"
    ],
    appliesto: "flexContainers",
    computed: [
      "flex-direction",
      "flex-wrap"
    ],
    order: "orderOfAppearance",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/flex-flow"
  },
  "flex-grow": {
    syntax: "<number>",
    media: "visual",
    inherited: !1,
    animationType: "number",
    percentages: "no",
    groups: [
      "CSS Flexible Box Layout"
    ],
    initial: "0",
    appliesto: "flexItemsAndInFlowPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/flex-grow"
  },
  "flex-shrink": {
    syntax: "<number>",
    media: "visual",
    inherited: !1,
    animationType: "number",
    percentages: "no",
    groups: [
      "CSS Flexible Box Layout"
    ],
    initial: "1",
    appliesto: "flexItemsAndInFlowPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/flex-shrink"
  },
  "flex-wrap": {
    syntax: "nowrap | wrap | wrap-reverse",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Flexible Box Layout"
    ],
    initial: "nowrap",
    appliesto: "flexContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/flex-wrap"
  },
  float: Qm,
  font: Xm,
  "font-family": {
    syntax: "[ <family-name> | <generic-family> ]#",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "dependsOnUserAgent",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-family"
  },
  "font-feature-settings": {
    syntax: "normal | <feature-tag-value>#",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-feature-settings"
  },
  "font-kerning": {
    syntax: "auto | normal | none",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-kerning"
  },
  "font-language-override": {
    syntax: "normal | <string>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-language-override"
  },
  "font-optical-sizing": {
    syntax: "auto | none",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing"
  },
  "font-variation-settings": {
    syntax: "normal | [ <string> <number> ]#",
    media: "visual",
    inherited: !0,
    animationType: "transform",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-variation-settings"
  },
  "font-size": {
    syntax: "<absolute-size> | <relative-size> | <length-percentage>",
    media: "visual",
    inherited: !0,
    animationType: "length",
    percentages: "referToParentElementsFontSize",
    groups: [
      "CSS Fonts"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-size"
  },
  "font-size-adjust": {
    syntax: "none | <number>",
    media: "visual",
    inherited: !0,
    animationType: "number",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-size-adjust"
  },
  "font-smooth": {
    syntax: "auto | never | always | <absolute-size> | <length>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-smooth"
  },
  "font-stretch": {
    syntax: "<font-stretch-absolute>",
    media: "visual",
    inherited: !0,
    animationType: "fontStretch",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-stretch"
  },
  "font-style": {
    syntax: "normal | italic | oblique <angle>?",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-style"
  },
  "font-synthesis": {
    syntax: "none | [ weight || style ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "weight style",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-synthesis"
  },
  "font-variant": {
    syntax: "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-variant"
  },
  "font-variant-alternates": {
    syntax: "normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates"
  },
  "font-variant-caps": {
    syntax: "normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-variant-caps"
  },
  "font-variant-east-asian": {
    syntax: "normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian"
  },
  "font-variant-ligatures": {
    syntax: "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures"
  },
  "font-variant-numeric": {
    syntax: "normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric"
  },
  "font-variant-position": {
    syntax: "normal | sub | super",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-variant-position"
  },
  "font-weight": {
    syntax: "<font-weight-absolute> | bolder | lighter",
    media: "visual",
    inherited: !0,
    animationType: "fontWeight",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "keywordOrNumericalValueBolderLighterTransformedToRealValue",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/font-weight"
  },
  gap: Jm,
  grid: eh,
  "grid-area": {
    syntax: "<grid-line> [ / <grid-line> ]{0,3}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: [
      "grid-row-start",
      "grid-column-start",
      "grid-row-end",
      "grid-column-end"
    ],
    appliesto: "gridItemsAndBoxesWithinGridContainer",
    computed: [
      "grid-row-start",
      "grid-column-start",
      "grid-row-end",
      "grid-column-end"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-area"
  },
  "grid-auto-columns": {
    syntax: "<track-size>+",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "auto",
    appliesto: "gridContainers",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns"
  },
  "grid-auto-flow": {
    syntax: "[ row | column ] || dense",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "row",
    appliesto: "gridContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow"
  },
  "grid-auto-rows": {
    syntax: "<track-size>+",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "auto",
    appliesto: "gridContainers",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows"
  },
  "grid-column": {
    syntax: "<grid-line> [ / <grid-line> ]?",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: [
      "grid-column-start",
      "grid-column-end"
    ],
    appliesto: "gridItemsAndBoxesWithinGridContainer",
    computed: [
      "grid-column-start",
      "grid-column-end"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-column"
  },
  "grid-column-end": {
    syntax: "<grid-line>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "auto",
    appliesto: "gridItemsAndBoxesWithinGridContainer",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-column-end"
  },
  "grid-column-gap": {
    syntax: "<length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "0",
    appliesto: "gridContainers",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/column-gap"
  },
  "grid-column-start": {
    syntax: "<grid-line>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "auto",
    appliesto: "gridItemsAndBoxesWithinGridContainer",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-column-start"
  },
  "grid-gap": {
    syntax: "<'grid-row-gap'> <'grid-column-gap'>?",
    media: "visual",
    inherited: !1,
    animationType: [
      "grid-row-gap",
      "grid-column-gap"
    ],
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: [
      "grid-row-gap",
      "grid-column-gap"
    ],
    appliesto: "gridContainers",
    computed: [
      "grid-row-gap",
      "grid-column-gap"
    ],
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/gap"
  },
  "grid-row": {
    syntax: "<grid-line> [ / <grid-line> ]?",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: [
      "grid-row-start",
      "grid-row-end"
    ],
    appliesto: "gridItemsAndBoxesWithinGridContainer",
    computed: [
      "grid-row-start",
      "grid-row-end"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-row"
  },
  "grid-row-end": {
    syntax: "<grid-line>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "auto",
    appliesto: "gridItemsAndBoxesWithinGridContainer",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-row-end"
  },
  "grid-row-gap": {
    syntax: "<length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "0",
    appliesto: "gridContainers",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/row-gap"
  },
  "grid-row-start": {
    syntax: "<grid-line>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "auto",
    appliesto: "gridItemsAndBoxesWithinGridContainer",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-row-start"
  },
  "grid-template": {
    syntax: "none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: [
      "grid-template-columns",
      "grid-template-rows"
    ],
    groups: [
      "CSS Grid Layout"
    ],
    initial: [
      "grid-template-columns",
      "grid-template-rows",
      "grid-template-areas"
    ],
    appliesto: "gridContainers",
    computed: [
      "grid-template-columns",
      "grid-template-rows",
      "grid-template-areas"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-template"
  },
  "grid-template-areas": {
    syntax: "none | <string>+",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "none",
    appliesto: "gridContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-template-areas"
  },
  "grid-template-columns": {
    syntax: "none | <track-list> | <auto-track-list> | subgrid <line-name-list>?",
    media: "visual",
    inherited: !1,
    animationType: "simpleListOfLpcDifferenceLpc",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "none",
    appliesto: "gridContainers",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-template-columns"
  },
  "grid-template-rows": {
    syntax: "none | <track-list> | <auto-track-list> | subgrid <line-name-list>?",
    media: "visual",
    inherited: !1,
    animationType: "simpleListOfLpcDifferenceLpc",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "none",
    appliesto: "gridContainers",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/grid-template-rows"
  },
  "hanging-punctuation": {
    syntax: "none | [ first || [ force-end | allow-end ] || last ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation"
  },
  height: th,
  hyphens: rh,
  "image-orientation": {
    syntax: "from-image | <angle> | [ <angle>? flip ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Images"
    ],
    initial: "from-image",
    appliesto: "allElements",
    computed: "angleRoundedToNextQuarter",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/image-orientation"
  },
  "image-rendering": {
    syntax: "auto | crisp-edges | pixelated",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Images"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/image-rendering"
  },
  "image-resolution": {
    syntax: "[ from-image || <resolution> ] && snap?",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Images"
    ],
    initial: "1dppx",
    appliesto: "allElements",
    computed: "asSpecifiedWithExceptionOfResolution",
    order: "uniqueOrder",
    status: "experimental"
  },
  "ime-mode": {
    syntax: "auto | normal | active | inactive | disabled",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "auto",
    appliesto: "textFields",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/ime-mode"
  },
  "initial-letter": {
    syntax: "normal | [ <number> <integer>? ]",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Inline"
    ],
    initial: "normal",
    appliesto: "firstLetterPseudoElementsAndInlineLevelFirstChildren",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/initial-letter"
  },
  "initial-letter-align": {
    syntax: "[ auto | alphabetic | hanging | ideographic ]",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Inline"
    ],
    initial: "auto",
    appliesto: "firstLetterPseudoElementsAndInlineLevelFirstChildren",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/initial-letter-align"
  },
  "inline-size": {
    syntax: "<'width'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "inlineSizeOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "auto",
    appliesto: "sameAsWidthAndHeight",
    computed: "sameAsWidthAndHeight",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/inline-size"
  },
  inset: ah,
  "inset-block": {
    syntax: "<'top'>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "logicalHeightOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "auto",
    appliesto: "positionedElements",
    computed: "sameAsBoxOffsets",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/inset-block"
  },
  "inset-block-end": {
    syntax: "<'top'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "logicalHeightOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "auto",
    appliesto: "positionedElements",
    computed: "sameAsBoxOffsets",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/inset-block-end"
  },
  "inset-block-start": {
    syntax: "<'top'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "logicalHeightOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "auto",
    appliesto: "positionedElements",
    computed: "sameAsBoxOffsets",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/inset-block-start"
  },
  "inset-inline": {
    syntax: "<'top'>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "auto",
    appliesto: "positionedElements",
    computed: "sameAsBoxOffsets",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/inset-inline"
  },
  "inset-inline-end": {
    syntax: "<'top'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "auto",
    appliesto: "positionedElements",
    computed: "sameAsBoxOffsets",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/inset-inline-end"
  },
  "inset-inline-start": {
    syntax: "<'top'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "auto",
    appliesto: "positionedElements",
    computed: "sameAsBoxOffsets",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/inset-inline-start"
  },
  isolation: nh,
  "justify-content": {
    syntax: "normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Alignment"
    ],
    initial: "normal",
    appliesto: "flexContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/justify-content"
  },
  "justify-items": {
    syntax: "normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Alignment"
    ],
    initial: "legacy",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/justify-items"
  },
  "justify-self": {
    syntax: "auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Alignment"
    ],
    initial: "auto",
    appliesto: "blockLevelBoxesAndAbsolutelyPositionedBoxesAndGridItems",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/justify-self"
  },
  "justify-tracks": {
    syntax: "[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "normal",
    appliesto: "gridContainersWithMasonryLayoutInTheirInlineAxis",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/justify-tracks"
  },
  left: ih,
  "letter-spacing": {
    syntax: "normal | <length>",
    media: "visual",
    inherited: !0,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "optimumValueOfAbsoluteLengthOrNormal",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/letter-spacing"
  },
  "line-break": {
    syntax: "auto | loose | normal | strict | anywhere",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/line-break"
  },
  "line-clamp": {
    syntax: "none | <integer>",
    media: "visual",
    inherited: !1,
    animationType: "integer",
    percentages: "no",
    groups: [
      "CSS Overflow"
    ],
    initial: "none",
    appliesto: "blockContainersExceptMultiColumnContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "experimental"
  },
  "line-height": {
    syntax: "normal | <number> | <length> | <percentage>",
    media: "visual",
    inherited: !0,
    animationType: "numberOrLength",
    percentages: "referToElementFontSize",
    groups: [
      "CSS Fonts"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "absoluteLengthOrAsSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/line-height"
  },
  "line-height-step": {
    syntax: "<length>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Fonts"
    ],
    initial: "0",
    appliesto: "blockContainers",
    computed: "absoluteLength",
    order: "perGrammar",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/line-height-step"
  },
  "list-style": {
    syntax: "<'list-style-type'> || <'list-style-position'> || <'list-style-image'>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Lists and Counters"
    ],
    initial: [
      "list-style-type",
      "list-style-position",
      "list-style-image"
    ],
    appliesto: "listItems",
    computed: [
      "list-style-image",
      "list-style-position",
      "list-style-type"
    ],
    order: "orderOfAppearance",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/list-style"
  },
  "list-style-image": {
    syntax: "<url> | none",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Lists and Counters"
    ],
    initial: "none",
    appliesto: "listItems",
    computed: "noneOrImageWithAbsoluteURI",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/list-style-image"
  },
  "list-style-position": {
    syntax: "inside | outside",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Lists and Counters"
    ],
    initial: "outside",
    appliesto: "listItems",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/list-style-position"
  },
  "list-style-type": {
    syntax: "<counter-style> | <string> | none",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Lists and Counters"
    ],
    initial: "disc",
    appliesto: "listItems",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/list-style-type"
  },
  margin: sh,
  "margin-block": {
    syntax: "<'margin-left'>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "dependsOnLayoutModel",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsMargin",
    computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-block"
  },
  "margin-block-end": {
    syntax: "<'margin-left'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "dependsOnLayoutModel",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsMargin",
    computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-block-end"
  },
  "margin-block-start": {
    syntax: "<'margin-left'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "dependsOnLayoutModel",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsMargin",
    computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-block-start"
  },
  "margin-bottom": {
    syntax: "<length> | <percentage> | auto",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "0",
    appliesto: "allElementsExceptTableDisplayTypes",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-bottom"
  },
  "margin-inline": {
    syntax: "<'margin-left'>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "dependsOnLayoutModel",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsMargin",
    computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-inline"
  },
  "margin-inline-end": {
    syntax: "<'margin-left'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "dependsOnLayoutModel",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsMargin",
    computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-inline-end"
  },
  "margin-inline-start": {
    syntax: "<'margin-left'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "dependsOnLayoutModel",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsMargin",
    computed: "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-inline-start"
  },
  "margin-left": {
    syntax: "<length> | <percentage> | auto",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "0",
    appliesto: "allElementsExceptTableDisplayTypes",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-left"
  },
  "margin-right": {
    syntax: "<length> | <percentage> | auto",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "0",
    appliesto: "allElementsExceptTableDisplayTypes",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-right"
  },
  "margin-top": {
    syntax: "<length> | <percentage> | auto",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "0",
    appliesto: "allElementsExceptTableDisplayTypes",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-top"
  },
  "margin-trim": {
    syntax: "none | in-flow | all",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Model"
    ],
    initial: "none",
    appliesto: "blockContainersAndMultiColumnContainers",
    computed: "asSpecified",
    order: "perGrammar",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/margin-trim"
  },
  mask: oh,
  "mask-border": {
    syntax: "<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>",
    media: "visual",
    inherited: !1,
    animationType: [
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width"
    ],
    percentages: [
      "mask-border-slice",
      "mask-border-width"
    ],
    groups: [
      "CSS Masking"
    ],
    initial: [
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width"
    ],
    appliesto: "allElementsSVGContainerElements",
    computed: [
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width"
    ],
    order: "perGrammar",
    stacking: !0,
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-border"
  },
  "mask-border-mode": {
    syntax: "luminance | alpha",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "alpha",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-border-mode"
  },
  "mask-border-outset": {
    syntax: "[ <length> | <number> ]{1,4}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "0",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-border-outset"
  },
  "mask-border-repeat": {
    syntax: "[ stretch | repeat | round | space ]{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "stretch",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat"
  },
  "mask-border-slice": {
    syntax: "<number-percentage>{1,4} fill?",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "referToSizeOfMaskBorderImage",
    groups: [
      "CSS Masking"
    ],
    initial: "0",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-border-slice"
  },
  "mask-border-source": {
    syntax: "none | <image>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "none",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecifiedURLsAbsolute",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-border-source"
  },
  "mask-border-width": {
    syntax: "[ <length-percentage> | <number> | auto ]{1,4}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "relativeToMaskBorderImageArea",
    groups: [
      "CSS Masking"
    ],
    initial: "auto",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-border-width"
  },
  "mask-clip": {
    syntax: "[ <geometry-box> | no-clip ]#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "border-box",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-clip"
  },
  "mask-composite": {
    syntax: "<compositing-operator>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "add",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-composite"
  },
  "mask-image": {
    syntax: "<mask-reference>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "none",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecifiedURLsAbsolute",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-image"
  },
  "mask-mode": {
    syntax: "<masking-mode>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "match-source",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-mode"
  },
  "mask-origin": {
    syntax: "<geometry-box>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "border-box",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-origin"
  },
  "mask-position": {
    syntax: "<position>#",
    media: "visual",
    inherited: !1,
    animationType: "repeatableListOfSimpleListOfLpc",
    percentages: "referToSizeOfMaskPaintingArea",
    groups: [
      "CSS Masking"
    ],
    initial: "center",
    appliesto: "allElementsSVGContainerElements",
    computed: "consistsOfTwoKeywordsForOriginAndOffsets",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-position"
  },
  "mask-repeat": {
    syntax: "<repeat-style>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "no-repeat",
    appliesto: "allElementsSVGContainerElements",
    computed: "consistsOfTwoDimensionKeywords",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-repeat"
  },
  "mask-size": {
    syntax: "<bg-size>#",
    media: "visual",
    inherited: !1,
    animationType: "repeatableListOfSimpleListOfLpc",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "auto",
    appliesto: "allElementsSVGContainerElements",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-size"
  },
  "mask-type": {
    syntax: "luminance | alpha",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Masking"
    ],
    initial: "luminance",
    appliesto: "maskElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mask-type"
  },
  "masonry-auto-flow": {
    syntax: "[ pack | next ] || [ definite-first | ordered ]",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Grid Layout"
    ],
    initial: "pack",
    appliesto: "gridContainersWithMasonryLayout",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/masonry-auto-flow"
  },
  "math-style": {
    syntax: "normal | compact",
    media: "visual",
    inherited: !0,
    animationType: "notAnimatable",
    percentages: "no",
    groups: [
      "MathML"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/math-style"
  },
  "max-block-size": {
    syntax: "<'max-width'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "blockSizeOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsWidthAndHeight",
    computed: "sameAsMaxWidthAndMaxHeight",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/max-block-size"
  },
  "max-height": {
    syntax: "none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>)",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "regardingHeightOfGeneratedBoxContainingBlockPercentagesNone",
    groups: [
      "CSS Box Model"
    ],
    initial: "none",
    appliesto: "allElementsButNonReplacedAndTableColumns",
    computed: "percentageAsSpecifiedAbsoluteLengthOrNone",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/max-height"
  },
  "max-inline-size": {
    syntax: "<'max-width'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "inlineSizeOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsWidthAndHeight",
    computed: "sameAsMaxWidthAndMaxHeight",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/max-inline-size"
  },
  "max-lines": {
    syntax: "none | <integer>",
    media: "visual",
    inherited: !1,
    animationType: "integer",
    percentages: "no",
    groups: [
      "CSS Overflow"
    ],
    initial: "none",
    appliesto: "blockContainersExceptMultiColumnContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "experimental"
  },
  "max-width": {
    syntax: "none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>)",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "none",
    appliesto: "allElementsButNonReplacedAndTableRows",
    computed: "percentageAsSpecifiedAbsoluteLengthOrNone",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/max-width"
  },
  "min-block-size": {
    syntax: "<'min-width'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "blockSizeOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsWidthAndHeight",
    computed: "sameAsMinWidthAndMinHeight",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/min-block-size"
  },
  "min-height": {
    syntax: "auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "regardingHeightOfGeneratedBoxContainingBlockPercentages0",
    groups: [
      "CSS Box Model"
    ],
    initial: "auto",
    appliesto: "allElementsButNonReplacedAndTableColumns",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/min-height"
  },
  "min-inline-size": {
    syntax: "<'min-width'>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "inlineSizeOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "sameAsWidthAndHeight",
    computed: "sameAsMinWidthAndMinHeight",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/min-inline-size"
  },
  "min-width": {
    syntax: "auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "auto",
    appliesto: "allElementsButNonReplacedAndTableRows",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/min-width"
  },
  "mix-blend-mode": {
    syntax: "<blend-mode>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Compositing and Blending"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    stacking: !0,
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode"
  },
  "object-fit": {
    syntax: "fill | contain | cover | none | scale-down",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Images"
    ],
    initial: "fill",
    appliesto: "replacedElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/object-fit"
  },
  "object-position": {
    syntax: "<position>",
    media: "visual",
    inherited: !0,
    animationType: "repeatableListOfSimpleListOfLpc",
    percentages: "referToWidthAndHeightOfElement",
    groups: [
      "CSS Images"
    ],
    initial: "50% 50%",
    appliesto: "replacedElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/object-position"
  },
  offset: lh,
  "offset-anchor": {
    syntax: "auto | <position>",
    media: "visual",
    inherited: !1,
    animationType: "position",
    percentages: "relativeToWidthAndHeight",
    groups: [
      "CSS Motion Path"
    ],
    initial: "auto",
    appliesto: "transformableElements",
    computed: "forLengthAbsoluteValueOtherwisePercentage",
    order: "perGrammar",
    status: "standard"
  },
  "offset-distance": {
    syntax: "<length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToTotalPathLength",
    groups: [
      "CSS Motion Path"
    ],
    initial: "0",
    appliesto: "transformableElements",
    computed: "forLengthAbsoluteValueOtherwisePercentage",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/offset-distance"
  },
  "offset-path": {
    syntax: "none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]",
    media: "visual",
    inherited: !1,
    animationType: "angleOrBasicShapeOrPath",
    percentages: "no",
    groups: [
      "CSS Motion Path"
    ],
    initial: "none",
    appliesto: "transformableElements",
    computed: "asSpecified",
    order: "perGrammar",
    stacking: !0,
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/offset-path"
  },
  "offset-position": {
    syntax: "auto | <position>",
    media: "visual",
    inherited: !1,
    animationType: "position",
    percentages: "referToSizeOfContainingBlock",
    groups: [
      "CSS Motion Path"
    ],
    initial: "auto",
    appliesto: "transformableElements",
    computed: "forLengthAbsoluteValueOtherwisePercentage",
    order: "perGrammar",
    status: "experimental"
  },
  "offset-rotate": {
    syntax: "[ auto | reverse ] || <angle>",
    media: "visual",
    inherited: !1,
    animationType: "angleOrBasicShapeOrPath",
    percentages: "no",
    groups: [
      "CSS Motion Path"
    ],
    initial: "auto",
    appliesto: "transformableElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/offset-rotate"
  },
  opacity: dh,
  order: ph,
  orphans: ch,
  outline: uh,
  "outline-color": {
    syntax: "<color> | invert",
    media: [
      "visual",
      "interactive"
    ],
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "invertOrCurrentColor",
    appliesto: "allElements",
    computed: "invertForTranslucentColorRGBAOtherwiseRGB",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/outline-color"
  },
  "outline-offset": {
    syntax: "<length>",
    media: [
      "visual",
      "interactive"
    ],
    inherited: !1,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/outline-offset"
  },
  "outline-style": {
    syntax: "auto | <'border-style'>",
    media: [
      "visual",
      "interactive"
    ],
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/outline-style"
  },
  "outline-width": {
    syntax: "<line-width>",
    media: [
      "visual",
      "interactive"
    ],
    inherited: !1,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "medium",
    appliesto: "allElements",
    computed: "absoluteLength0ForNone",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/outline-width"
  },
  overflow: mh,
  "overflow-anchor": {
    syntax: "auto | none",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Scroll Anchoring"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard"
  },
  "overflow-block": {
    syntax: "visible | hidden | clip | scroll | auto",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Overflow"
    ],
    initial: "auto",
    appliesto: "blockContainersFlexContainersGridContainers",
    computed: "asSpecifiedButVisibleOrClipReplacedToAutoOrHiddenIfOtherValueDifferent",
    order: "perGrammar",
    status: "standard"
  },
  "overflow-clip-box": {
    syntax: "padding-box | content-box",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Mozilla Extensions"
    ],
    initial: "padding-box",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Mozilla/CSS/overflow-clip-box"
  },
  "overflow-inline": {
    syntax: "visible | hidden | clip | scroll | auto",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Overflow"
    ],
    initial: "auto",
    appliesto: "blockContainersFlexContainersGridContainers",
    computed: "asSpecifiedButVisibleOrClipReplacedToAutoOrHiddenIfOtherValueDifferent",
    order: "perGrammar",
    status: "standard"
  },
  "overflow-wrap": {
    syntax: "normal | break-word | anywhere",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "normal",
    appliesto: "nonReplacedInlineElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overflow-wrap"
  },
  "overflow-x": {
    syntax: "visible | hidden | clip | scroll | auto",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Overflow"
    ],
    initial: "visible",
    appliesto: "blockContainersFlexContainersGridContainers",
    computed: "asSpecifiedButVisibleOrClipReplacedToAutoOrHiddenIfOtherValueDifferent",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overflow-x"
  },
  "overflow-y": {
    syntax: "visible | hidden | clip | scroll | auto",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Overflow"
    ],
    initial: "visible",
    appliesto: "blockContainersFlexContainersGridContainers",
    computed: "asSpecifiedButVisibleOrClipReplacedToAutoOrHiddenIfOtherValueDifferent",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overflow-y"
  },
  "overscroll-behavior": {
    syntax: "[ contain | none | auto ]{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Model"
    ],
    initial: "auto",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior"
  },
  "overscroll-behavior-block": {
    syntax: "contain | none | auto",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Model"
    ],
    initial: "auto",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block"
  },
  "overscroll-behavior-inline": {
    syntax: "contain | none | auto",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Model"
    ],
    initial: "auto",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline"
  },
  "overscroll-behavior-x": {
    syntax: "contain | none | auto",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Model"
    ],
    initial: "auto",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x"
  },
  "overscroll-behavior-y": {
    syntax: "contain | none | auto",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Model"
    ],
    initial: "auto",
    appliesto: "nonReplacedBlockAndInlineBlockElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y"
  },
  padding: hh,
  "padding-block": {
    syntax: "<'padding-left'>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-block"
  },
  "padding-block-end": {
    syntax: "<'padding-left'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-block-end"
  },
  "padding-block-start": {
    syntax: "<'padding-left'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-block-start"
  },
  "padding-bottom": {
    syntax: "<length> | <percentage>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "0",
    appliesto: "allElementsExceptInternalTableDisplayTypes",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-bottom"
  },
  "padding-inline": {
    syntax: "<'padding-left'>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-inline"
  },
  "padding-inline-end": {
    syntax: "<'padding-left'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-inline-end"
  },
  "padding-inline-start": {
    syntax: "<'padding-left'>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "logicalWidthOfContainingBlock",
    groups: [
      "CSS Logical Properties"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-inline-start"
  },
  "padding-left": {
    syntax: "<length> | <percentage>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "0",
    appliesto: "allElementsExceptInternalTableDisplayTypes",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-left"
  },
  "padding-right": {
    syntax: "<length> | <percentage>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "0",
    appliesto: "allElementsExceptInternalTableDisplayTypes",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-right"
  },
  "padding-top": {
    syntax: "<length> | <percentage>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Box Model"
    ],
    initial: "0",
    appliesto: "allElementsExceptInternalTableDisplayTypes",
    computed: "percentageAsSpecifiedOrAbsoluteLength",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/padding-top"
  },
  "page-break-after": {
    syntax: "auto | always | avoid | left | right | recto | verso",
    media: [
      "visual",
      "paged"
    ],
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Pages"
    ],
    initial: "auto",
    appliesto: "blockElementsInNormalFlow",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/page-break-after"
  },
  "page-break-before": {
    syntax: "auto | always | avoid | left | right | recto | verso",
    media: [
      "visual",
      "paged"
    ],
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Pages"
    ],
    initial: "auto",
    appliesto: "blockElementsInNormalFlow",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/page-break-before"
  },
  "page-break-inside": {
    syntax: "auto | avoid",
    media: [
      "visual",
      "paged"
    ],
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Pages"
    ],
    initial: "auto",
    appliesto: "blockElementsInNormalFlow",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/page-break-inside"
  },
  "paint-order": {
    syntax: "normal | [ fill || stroke || markers ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "normal",
    appliesto: "textElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/paint-order"
  },
  perspective: gh,
  "perspective-origin": {
    syntax: "<position>",
    media: "visual",
    inherited: !1,
    animationType: "simpleListOfLpc",
    percentages: "referToSizeOfBoundingBox",
    groups: [
      "CSS Transforms"
    ],
    initial: "50% 50%",
    appliesto: "transformableElements",
    computed: "forLengthAbsoluteValueOtherwisePercentage",
    order: "oneOrTwoValuesLengthAbsoluteKeywordsPercentages",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/perspective-origin"
  },
  "place-content": {
    syntax: "<'align-content'> <'justify-content'>?",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Alignment"
    ],
    initial: "normal",
    appliesto: "multilineFlexContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/place-content"
  },
  "place-items": {
    syntax: "<'align-items'> <'justify-items'>?",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Alignment"
    ],
    initial: [
      "align-items",
      "justify-items"
    ],
    appliesto: "allElements",
    computed: [
      "align-items",
      "justify-items"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/place-items"
  },
  "place-self": {
    syntax: "<'align-self'> <'justify-self'>?",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Box Alignment"
    ],
    initial: [
      "align-self",
      "justify-self"
    ],
    appliesto: "blockLevelBoxesAndAbsolutelyPositionedBoxesAndGridItems",
    computed: [
      "align-self",
      "justify-self"
    ],
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/place-self"
  },
  "pointer-events": {
    syntax: "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Pointer Events"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/pointer-events"
  },
  position: fh,
  quotes: yh,
  resize: vh,
  right: bh,
  rotate: Sh,
  "row-gap": {
    syntax: "normal | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToDimensionOfContentArea",
    groups: [
      "CSS Box Alignment"
    ],
    initial: "normal",
    appliesto: "multiColumnElementsFlexContainersGridContainers",
    computed: "asSpecifiedWithLengthsAbsoluteAndNormalComputingToZeroExceptMultiColumn",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/row-gap"
  },
  "ruby-align": {
    syntax: "start | center | space-between | space-around",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Ruby"
    ],
    initial: "space-around",
    appliesto: "rubyBasesAnnotationsBaseAnnotationContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/ruby-align"
  },
  "ruby-merge": {
    syntax: "separate | collapse | auto",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Ruby"
    ],
    initial: "separate",
    appliesto: "rubyAnnotationsContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "experimental"
  },
  "ruby-position": {
    syntax: "over | under | inter-character",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Ruby"
    ],
    initial: "over",
    appliesto: "rubyAnnotationsContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/ruby-position"
  },
  scale: xh,
  "scrollbar-color": {
    syntax: "auto | dark | light | <color>{2}",
    media: "visual",
    inherited: !0,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Scrollbars"
    ],
    initial: "auto",
    appliesto: "scrollingBoxes",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scrollbar-color"
  },
  "scrollbar-gutter": {
    syntax: "auto | [ stable | always ] && both? && force?",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Overflow"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter"
  },
  "scrollbar-width": {
    syntax: "auto | thin | none",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Scrollbars"
    ],
    initial: "auto",
    appliesto: "scrollingBoxes",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scrollbar-width"
  },
  "scroll-behavior": {
    syntax: "auto | smooth",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSSOM View"
    ],
    initial: "auto",
    appliesto: "scrollingBoxes",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-behavior"
  },
  "scroll-margin": {
    syntax: "<length>{1,4}",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin"
  },
  "scroll-margin-block": {
    syntax: "<length>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block"
  },
  "scroll-margin-block-start": {
    syntax: "<length>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start"
  },
  "scroll-margin-block-end": {
    syntax: "<length>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end"
  },
  "scroll-margin-bottom": {
    syntax: "<length>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom"
  },
  "scroll-margin-inline": {
    syntax: "<length>{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline"
  },
  "scroll-margin-inline-start": {
    syntax: "<length>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start"
  },
  "scroll-margin-inline-end": {
    syntax: "<length>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end"
  },
  "scroll-margin-left": {
    syntax: "<length>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left"
  },
  "scroll-margin-right": {
    syntax: "<length>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right"
  },
  "scroll-margin-top": {
    syntax: "<length>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top"
  },
  "scroll-padding": {
    syntax: "[ auto | <length-percentage> ]{1,4}",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding"
  },
  "scroll-padding-block": {
    syntax: "[ auto | <length-percentage> ]{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block"
  },
  "scroll-padding-block-start": {
    syntax: "auto | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start"
  },
  "scroll-padding-block-end": {
    syntax: "auto | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end"
  },
  "scroll-padding-bottom": {
    syntax: "auto | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom"
  },
  "scroll-padding-inline": {
    syntax: "[ auto | <length-percentage> ]{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline"
  },
  "scroll-padding-inline-start": {
    syntax: "auto | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start"
  },
  "scroll-padding-inline-end": {
    syntax: "auto | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end"
  },
  "scroll-padding-left": {
    syntax: "auto | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left"
  },
  "scroll-padding-right": {
    syntax: "auto | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right"
  },
  "scroll-padding-top": {
    syntax: "auto | <length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "relativeToTheScrollContainersScrollport",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "auto",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top"
  },
  "scroll-snap-align": {
    syntax: "[ none | start | end | center ]{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align"
  },
  "scroll-snap-coordinate": {
    syntax: "none | <position>#",
    media: "interactive",
    inherited: !1,
    animationType: "position",
    percentages: "referToBorderBox",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-coordinate"
  },
  "scroll-snap-destination": {
    syntax: "<position>",
    media: "interactive",
    inherited: !1,
    animationType: "position",
    percentages: "relativeToScrollContainerPaddingBoxAxis",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "0px 0px",
    appliesto: "scrollContainers",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-destination"
  },
  "scroll-snap-points-x": {
    syntax: "none | repeat( <length-percentage> )",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "relativeToScrollContainerPaddingBoxAxis",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "none",
    appliesto: "scrollContainers",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-x"
  },
  "scroll-snap-points-y": {
    syntax: "none | repeat( <length-percentage> )",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "relativeToScrollContainerPaddingBoxAxis",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "none",
    appliesto: "scrollContainers",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-y"
  },
  "scroll-snap-stop": {
    syntax: "normal | always",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop"
  },
  "scroll-snap-type": {
    syntax: "none | [ x | y | block | inline | both ] [ mandatory | proximity ]?",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type"
  },
  "scroll-snap-type-x": {
    syntax: "none | mandatory | proximity",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "none",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-x"
  },
  "scroll-snap-type-y": {
    syntax: "none | mandatory | proximity",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Scroll Snap"
    ],
    initial: "none",
    appliesto: "scrollContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "obsolete",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-y"
  },
  "shape-image-threshold": {
    syntax: "<alpha-value>",
    media: "visual",
    inherited: !1,
    animationType: "number",
    percentages: "no",
    groups: [
      "CSS Shapes"
    ],
    initial: "0.0",
    appliesto: "floats",
    computed: "specifiedValueNumberClipped0To1",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold"
  },
  "shape-margin": {
    syntax: "<length-percentage>",
    media: "visual",
    inherited: !1,
    animationType: "lpc",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Shapes"
    ],
    initial: "0",
    appliesto: "floats",
    computed: "asSpecifiedRelativeToAbsoluteLengths",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/shape-margin"
  },
  "shape-outside": {
    syntax: "none | <shape-box> || <basic-shape> | <image>",
    media: "visual",
    inherited: !1,
    animationType: "basicShapeOtherwiseNo",
    percentages: "no",
    groups: [
      "CSS Shapes"
    ],
    initial: "none",
    appliesto: "floats",
    computed: "asDefinedForBasicShapeWithAbsoluteURIOtherwiseAsSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/shape-outside"
  },
  "tab-size": {
    syntax: "<integer> | <length>",
    media: "visual",
    inherited: !0,
    animationType: "length",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "8",
    appliesto: "blockContainers",
    computed: "specifiedIntegerOrAbsoluteLength",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/tab-size"
  },
  "table-layout": {
    syntax: "auto | fixed",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Table"
    ],
    initial: "auto",
    appliesto: "tableElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/table-layout"
  },
  "text-align": {
    syntax: "start | end | left | right | center | justify | match-parent",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "startOrNamelessValueIfLTRRightIfRTL",
    appliesto: "blockContainers",
    computed: "asSpecifiedExceptMatchParent",
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-align"
  },
  "text-align-last": {
    syntax: "auto | start | end | left | right | center | justify",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "auto",
    appliesto: "blockContainers",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-align-last"
  },
  "text-combine-upright": {
    syntax: "none | all | [ digits <integer>? ]",
    media: "visual",
    inherited: !0,
    animationType: "notAnimatable",
    percentages: "no",
    groups: [
      "CSS Writing Modes"
    ],
    initial: "none",
    appliesto: "nonReplacedInlineElements",
    computed: "keywordPlusIntegerIfDigits",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-combine-upright"
  },
  "text-decoration": {
    syntax: "<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>",
    media: "visual",
    inherited: !1,
    animationType: [
      "text-decoration-color",
      "text-decoration-style",
      "text-decoration-line",
      "text-decoration-thickness"
    ],
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: [
      "text-decoration-color",
      "text-decoration-style",
      "text-decoration-line"
    ],
    appliesto: "allElements",
    computed: [
      "text-decoration-line",
      "text-decoration-style",
      "text-decoration-color",
      "text-decoration-thickness"
    ],
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-decoration"
  },
  "text-decoration-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-decoration-color"
  },
  "text-decoration-line": {
    syntax: "none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-decoration-line"
  },
  "text-decoration-skip": {
    syntax: "none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "objects",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip"
  },
  "text-decoration-skip-ink": {
    syntax: "auto | all | none",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink"
  },
  "text-decoration-style": {
    syntax: "solid | double | dotted | dashed | wavy",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "solid",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-decoration-style"
  },
  "text-decoration-thickness": {
    syntax: "auto | from-font | <length> | <percentage> ",
    media: "visual",
    inherited: !1,
    animationType: "byComputedValueType",
    percentages: "referToElementFontSize",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness"
  },
  "text-emphasis": {
    syntax: "<'text-emphasis-style'> || <'text-emphasis-color'>",
    media: "visual",
    inherited: !1,
    animationType: [
      "text-emphasis-color",
      "text-emphasis-style"
    ],
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: [
      "text-emphasis-style",
      "text-emphasis-color"
    ],
    appliesto: "allElements",
    computed: [
      "text-emphasis-style",
      "text-emphasis-color"
    ],
    order: "orderOfAppearance",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-emphasis"
  },
  "text-emphasis-color": {
    syntax: "<color>",
    media: "visual",
    inherited: !1,
    animationType: "color",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "currentcolor",
    appliesto: "allElements",
    computed: "computedColor",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color"
  },
  "text-emphasis-position": {
    syntax: "[ over | under ] && [ right | left ]",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "over right",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position"
  },
  "text-emphasis-style": {
    syntax: "none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style"
  },
  "text-indent": {
    syntax: "<length-percentage> && hanging? && each-line?",
    media: "visual",
    inherited: !0,
    animationType: "lpc",
    percentages: "referToWidthOfContainingBlock",
    groups: [
      "CSS Text"
    ],
    initial: "0",
    appliesto: "blockContainers",
    computed: "percentageOrAbsoluteLengthPlusKeywords",
    order: "lengthOrPercentageBeforeKeywords",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-indent"
  },
  "text-justify": {
    syntax: "auto | inter-character | inter-word | none",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "auto",
    appliesto: "inlineLevelAndTableCellElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-justify"
  },
  "text-orientation": {
    syntax: "mixed | upright | sideways",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Writing Modes"
    ],
    initial: "mixed",
    appliesto: "allElementsExceptTableRowGroupsRowsColumnGroupsAndColumns",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-orientation"
  },
  "text-overflow": {
    syntax: "[ clip | ellipsis | <string> ]{1,2}",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "clip",
    appliesto: "blockContainerElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-overflow"
  },
  "text-rendering": {
    syntax: "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Miscellaneous"
    ],
    initial: "auto",
    appliesto: "textElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-rendering"
  },
  "text-shadow": {
    syntax: "none | <shadow-t>#",
    media: "visual",
    inherited: !0,
    animationType: "shadowList",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "colorPlusThreeAbsoluteLengths",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-shadow"
  },
  "text-size-adjust": {
    syntax: "none | auto | <percentage>",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "referToSizeOfFont",
    groups: [
      "CSS Text"
    ],
    initial: "autoForSmartphoneBrowsersSupportingInflation",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "experimental",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-size-adjust"
  },
  "text-transform": {
    syntax: "none | capitalize | uppercase | lowercase | full-width | full-size-kana",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "none",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-transform"
  },
  "text-underline-offset": {
    syntax: "auto | <length> | <percentage> ",
    media: "visual",
    inherited: !0,
    animationType: "byComputedValueType",
    percentages: "referToElementFontSize",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-underline-offset"
  },
  "text-underline-position": {
    syntax: "auto | from-font | [ under || [ left | right ] ]",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text Decoration"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "orderOfAppearance",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/text-underline-position"
  },
  top: wh,
  "touch-action": {
    syntax: "auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "Pointer Events"
    ],
    initial: "auto",
    appliesto: "allElementsExceptNonReplacedInlineElementsTableRowsColumnsRowColumnGroups",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/touch-action"
  },
  transform: Ch,
  "transform-box": {
    syntax: "content-box | border-box | fill-box | stroke-box | view-box",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Transforms"
    ],
    initial: "view-box",
    appliesto: "transformableElements",
    computed: "asSpecified",
    order: "perGrammar",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/transform-box"
  },
  "transform-origin": {
    syntax: "[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?",
    media: "visual",
    inherited: !1,
    animationType: "simpleListOfLpc",
    percentages: "referToSizeOfBoundingBox",
    groups: [
      "CSS Transforms"
    ],
    initial: "50% 50% 0",
    appliesto: "transformableElements",
    computed: "forLengthAbsoluteValueOtherwisePercentage",
    order: "oneOrTwoValuesLengthAbsoluteKeywordsPercentages",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/transform-origin"
  },
  "transform-style": {
    syntax: "flat | preserve-3d",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Transforms"
    ],
    initial: "flat",
    appliesto: "transformableElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    stacking: !0,
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/transform-style"
  },
  transition: kh,
  "transition-delay": {
    syntax: "<time>#",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Transitions"
    ],
    initial: "0s",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/transition-delay"
  },
  "transition-duration": {
    syntax: "<time>#",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Transitions"
    ],
    initial: "0s",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/transition-duration"
  },
  "transition-property": {
    syntax: "none | <single-transition-property>#",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Transitions"
    ],
    initial: "all",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/transition-property"
  },
  "transition-timing-function": {
    syntax: "<timing-function>#",
    media: "interactive",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Transitions"
    ],
    initial: "ease",
    appliesto: "allElementsAndPseudos",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/transition-timing-function"
  },
  translate: Th,
  "unicode-bidi": {
    syntax: "normal | embed | isolate | bidi-override | isolate-override | plaintext",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Writing Modes"
    ],
    initial: "normal",
    appliesto: "allElementsSomeValuesNoEffectOnNonInlineElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/unicode-bidi"
  },
  "user-select": {
    syntax: "auto | text | none | contain | all",
    media: "visual",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Basic User Interface"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "nonstandard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/user-select"
  },
  "vertical-align": {
    syntax: "baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>",
    media: "visual",
    inherited: !1,
    animationType: "length",
    percentages: "referToLineHeight",
    groups: [
      "CSS Table"
    ],
    initial: "baseline",
    appliesto: "inlineLevelAndTableCellElements",
    computed: "absoluteLengthOrKeyword",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/vertical-align"
  },
  visibility: Eh,
  "white-space": {
    syntax: "normal | pre | nowrap | pre-wrap | pre-line | break-spaces",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/white-space"
  },
  widows: _h,
  width: Ah,
  "will-change": {
    syntax: "auto | <animateable-feature>#",
    media: "all",
    inherited: !1,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Will Change"
    ],
    initial: "auto",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/will-change"
  },
  "word-break": {
    syntax: "normal | break-all | keep-all | break-word",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/word-break"
  },
  "word-spacing": {
    syntax: "normal | <length-percentage>",
    media: "visual",
    inherited: !0,
    animationType: "length",
    percentages: "referToWidthOfAffectedGlyph",
    groups: [
      "CSS Text"
    ],
    initial: "normal",
    appliesto: "allElements",
    computed: "optimumMinAndMaxValueOfAbsoluteLengthPercentageOrNormal",
    order: "uniqueOrder",
    alsoAppliesTo: [
      "::first-letter",
      "::first-line",
      "::placeholder"
    ],
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/word-spacing"
  },
  "word-wrap": {
    syntax: "normal | break-word",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Text"
    ],
    initial: "normal",
    appliesto: "nonReplacedInlineElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/overflow-wrap"
  },
  "writing-mode": {
    syntax: "horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr",
    media: "visual",
    inherited: !0,
    animationType: "discrete",
    percentages: "no",
    groups: [
      "CSS Writing Modes"
    ],
    initial: "horizontal-tb",
    appliesto: "allElementsExceptTableRowColumnGroupsTableRowsColumns",
    computed: "asSpecified",
    order: "uniqueOrder",
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/writing-mode"
  },
  "z-index": {
    syntax: "auto | <integer>",
    media: "visual",
    inherited: !1,
    animationType: "integer",
    percentages: "no",
    groups: [
      "CSS Positioning"
    ],
    initial: "auto",
    appliesto: "positionedElements",
    computed: "asSpecified",
    order: "uniqueOrder",
    stacking: !0,
    status: "standard",
    mdn_url: "https://developer.mozilla.org/docs/Web/CSS/z-index"
  },
  zoom: Oh
}, jh = {
  syntax: "scroll | fixed | local"
}, Lh = {
  syntax: "border-box | padding-box | content-box"
}, Wh = {
  syntax: "<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>"
}, Ph = {
  syntax: "'>' | '+' | '~' | [ '||' ]"
}, Ih = {
  syntax: "<linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()> | <conic-gradient()>"
}, Bh = {
  syntax: "<number> | <angle>"
}, Rh = {
  syntax: "<url> | <image()> | <image-set()> | <element()> | <paint()> | <cross-fade()> | <gradient>"
}, Mh = {
  syntax: "<an-plus-b> | even | odd"
}, qh = {
  syntax: "[ [ left | center | right ] || [ top | center | bottom ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]? | [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ] ]"
}, Dh = {
  syntax: "open-quote | close-quote | no-open-quote | no-close-quote"
}, Nh = {
  syntax: "inset? && <length>{2,4} && <color>?"
}, $h = {
  syntax: "rect(<top>, <right>, <bottom>, <left>)"
}, Fh = {
  syntax: "closest-side | farthest-side | closest-corner | farthest-corner | <length> | <length-percentage>{2}"
}, Gh = {
  syntax: "<string> | <image> | <custom-ident>"
}, Vh = {
  syntax: "<target-counter()> | <target-counters()> | <target-text()>"
}, Hh = {
  "absolute-size": {
    syntax: "xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large"
  },
  "alpha-value": {
    syntax: "<number> | <percentage>"
  },
  "angle-percentage": {
    syntax: "<angle> | <percentage>"
  },
  "angular-color-hint": {
    syntax: "<angle-percentage>"
  },
  "angular-color-stop": {
    syntax: "<color> && <color-stop-angle>?"
  },
  "angular-color-stop-list": {
    syntax: "[ <angular-color-stop> [, <angular-color-hint>]? ]# , <angular-color-stop>"
  },
  "animateable-feature": {
    syntax: "scroll-position | contents | <custom-ident>"
  },
  attachment: jh,
  "attr()": {
    syntax: "attr( <attr-name> <type-or-unit>? [, <attr-fallback> ]? )"
  },
  "attr-matcher": {
    syntax: "[ '~' | '|' | '^' | '$' | '*' ]? '='"
  },
  "attr-modifier": {
    syntax: "i | s"
  },
  "attribute-selector": {
    syntax: "'[' <wq-name> ']' | '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'"
  },
  "auto-repeat": {
    syntax: "repeat( [ auto-fill | auto-fit ] , [ <line-names>? <fixed-size> ]+ <line-names>? )"
  },
  "auto-track-list": {
    syntax: `[ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>? <auto-repeat>
[ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>?`
  },
  "baseline-position": {
    syntax: "[ first | last ]? baseline"
  },
  "basic-shape": {
    syntax: "<inset()> | <circle()> | <ellipse()> | <polygon()> | <path()>"
  },
  "bg-image": {
    syntax: "none | <image>"
  },
  "bg-layer": {
    syntax: "<bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>"
  },
  "bg-position": {
    syntax: "[ [ left | center | right | top | bottom | <length-percentage> ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ] | [ center | [ left | right ] <length-percentage>? ] && [ center | [ top | bottom ] <length-percentage>? ] ]"
  },
  "bg-size": {
    syntax: "[ <length-percentage> | auto ]{1,2} | cover | contain"
  },
  "blur()": {
    syntax: "blur( <length> )"
  },
  "blend-mode": {
    syntax: "normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity"
  },
  box: Lh,
  "brightness()": {
    syntax: "brightness( <number-percentage> )"
  },
  "calc()": {
    syntax: "calc( <calc-sum> )"
  },
  "calc-sum": {
    syntax: "<calc-product> [ [ '+' | '-' ] <calc-product> ]*"
  },
  "calc-product": {
    syntax: "<calc-value> [ '*' <calc-value> | '/' <number> ]*"
  },
  "calc-value": {
    syntax: "<number> | <dimension> | <percentage> | ( <calc-sum> )"
  },
  "cf-final-image": {
    syntax: "<image> | <color>"
  },
  "cf-mixing-image": {
    syntax: "<percentage>? && <image>"
  },
  "circle()": {
    syntax: "circle( [ <shape-radius> ]? [ at <position> ]? )"
  },
  "clamp()": {
    syntax: "clamp( <calc-sum>#{3} )"
  },
  "class-selector": {
    syntax: "'.' <ident-token>"
  },
  "clip-source": {
    syntax: "<url>"
  },
  color: Wh,
  "color-stop": {
    syntax: "<color-stop-length> | <color-stop-angle>"
  },
  "color-stop-angle": {
    syntax: "<angle-percentage>{1,2}"
  },
  "color-stop-length": {
    syntax: "<length-percentage>{1,2}"
  },
  "color-stop-list": {
    syntax: "[ <linear-color-stop> [, <linear-color-hint>]? ]# , <linear-color-stop>"
  },
  combinator: Ph,
  "common-lig-values": {
    syntax: "[ common-ligatures | no-common-ligatures ]"
  },
  "compat-auto": {
    syntax: "searchfield | textarea | push-button | slider-horizontal | checkbox | radio | square-button | menulist | listbox | meter | progress-bar | button"
  },
  "composite-style": {
    syntax: "clear | copy | source-over | source-in | source-out | source-atop | destination-over | destination-in | destination-out | destination-atop | xor"
  },
  "compositing-operator": {
    syntax: "add | subtract | intersect | exclude"
  },
  "compound-selector": {
    syntax: "[ <type-selector>? <subclass-selector>* [ <pseudo-element-selector> <pseudo-class-selector>* ]* ]!"
  },
  "compound-selector-list": {
    syntax: "<compound-selector>#"
  },
  "complex-selector": {
    syntax: "<compound-selector> [ <combinator>? <compound-selector> ]*"
  },
  "complex-selector-list": {
    syntax: "<complex-selector>#"
  },
  "conic-gradient()": {
    syntax: "conic-gradient( [ from <angle> ]? [ at <position> ]?, <angular-color-stop-list> )"
  },
  "contextual-alt-values": {
    syntax: "[ contextual | no-contextual ]"
  },
  "content-distribution": {
    syntax: "space-between | space-around | space-evenly | stretch"
  },
  "content-list": {
    syntax: "[ <string> | contents | <image> | <quote> | <target> | <leader()> ]+"
  },
  "content-position": {
    syntax: "center | start | end | flex-start | flex-end"
  },
  "content-replacement": {
    syntax: "<image>"
  },
  "contrast()": {
    syntax: "contrast( [ <number-percentage> ] )"
  },
  "counter()": {
    syntax: "counter( <custom-ident>, <counter-style>? )"
  },
  "counter-style": {
    syntax: "<counter-style-name> | symbols()"
  },
  "counter-style-name": {
    syntax: "<custom-ident>"
  },
  "counters()": {
    syntax: "counters( <custom-ident>, <string>, <counter-style>? )"
  },
  "cross-fade()": {
    syntax: "cross-fade( <cf-mixing-image> , <cf-final-image>? )"
  },
  "cubic-bezier-timing-function": {
    syntax: "ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number [0,1]>, <number>, <number [0,1]>, <number>)"
  },
  "deprecated-system-color": {
    syntax: "ActiveBorder | ActiveCaption | AppWorkspace | Background | ButtonFace | ButtonHighlight | ButtonShadow | ButtonText | CaptionText | GrayText | Highlight | HighlightText | InactiveBorder | InactiveCaption | InactiveCaptionText | InfoBackground | InfoText | Menu | MenuText | Scrollbar | ThreeDDarkShadow | ThreeDFace | ThreeDHighlight | ThreeDLightShadow | ThreeDShadow | Window | WindowFrame | WindowText"
  },
  "discretionary-lig-values": {
    syntax: "[ discretionary-ligatures | no-discretionary-ligatures ]"
  },
  "display-box": {
    syntax: "contents | none"
  },
  "display-inside": {
    syntax: "flow | flow-root | table | flex | grid | ruby"
  },
  "display-internal": {
    syntax: "table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container"
  },
  "display-legacy": {
    syntax: "inline-block | inline-list-item | inline-table | inline-flex | inline-grid"
  },
  "display-listitem": {
    syntax: "<display-outside>? && [ flow | flow-root ]? && list-item"
  },
  "display-outside": {
    syntax: "block | inline | run-in"
  },
  "drop-shadow()": {
    syntax: "drop-shadow( <length>{2,3} <color>? )"
  },
  "east-asian-variant-values": {
    syntax: "[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ]"
  },
  "east-asian-width-values": {
    syntax: "[ full-width | proportional-width ]"
  },
  "element()": {
    syntax: "element( <id-selector> )"
  },
  "ellipse()": {
    syntax: "ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )"
  },
  "ending-shape": {
    syntax: "circle | ellipse"
  },
  "env()": {
    syntax: "env( <custom-ident> , <declaration-value>? )"
  },
  "explicit-track-list": {
    syntax: "[ <line-names>? <track-size> ]+ <line-names>?"
  },
  "family-name": {
    syntax: "<string> | <custom-ident>+"
  },
  "feature-tag-value": {
    syntax: "<string> [ <integer> | on | off ]?"
  },
  "feature-type": {
    syntax: "@stylistic | @historical-forms | @styleset | @character-variant | @swash | @ornaments | @annotation"
  },
  "feature-value-block": {
    syntax: "<feature-type> '{' <feature-value-declaration-list> '}'"
  },
  "feature-value-block-list": {
    syntax: "<feature-value-block>+"
  },
  "feature-value-declaration": {
    syntax: "<custom-ident>: <integer>+;"
  },
  "feature-value-declaration-list": {
    syntax: "<feature-value-declaration>"
  },
  "feature-value-name": {
    syntax: "<custom-ident>"
  },
  "fill-rule": {
    syntax: "nonzero | evenodd"
  },
  "filter-function": {
    syntax: "<blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <saturate()> | <sepia()>"
  },
  "filter-function-list": {
    syntax: "[ <filter-function> | <url> ]+"
  },
  "final-bg-layer": {
    syntax: "<'background-color'> || <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>"
  },
  "fit-content()": {
    syntax: "fit-content( [ <length> | <percentage> ] )"
  },
  "fixed-breadth": {
    syntax: "<length-percentage>"
  },
  "fixed-repeat": {
    syntax: "repeat( [ <positive-integer> ] , [ <line-names>? <fixed-size> ]+ <line-names>? )"
  },
  "fixed-size": {
    syntax: "<fixed-breadth> | minmax( <fixed-breadth> , <track-breadth> ) | minmax( <inflexible-breadth> , <fixed-breadth> )"
  },
  "font-stretch-absolute": {
    syntax: "normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded | <percentage>"
  },
  "font-variant-css21": {
    syntax: "[ normal | small-caps ]"
  },
  "font-weight-absolute": {
    syntax: "normal | bold | <number [1,1000]>"
  },
  "frequency-percentage": {
    syntax: "<frequency> | <percentage>"
  },
  "general-enclosed": {
    syntax: "[ <function-token> <any-value> ) ] | ( <ident> <any-value> )"
  },
  "generic-family": {
    syntax: "serif | sans-serif | cursive | fantasy | monospace"
  },
  "generic-name": {
    syntax: "serif | sans-serif | cursive | fantasy | monospace"
  },
  "geometry-box": {
    syntax: "<shape-box> | fill-box | stroke-box | view-box"
  },
  gradient: Ih,
  "grayscale()": {
    syntax: "grayscale( <number-percentage> )"
  },
  "grid-line": {
    syntax: "auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]"
  },
  "historical-lig-values": {
    syntax: "[ historical-ligatures | no-historical-ligatures ]"
  },
  "hsl()": {
    syntax: "hsl( <hue> <percentage> <percentage> [ / <alpha-value> ]? ) | hsl( <hue>, <percentage>, <percentage>, <alpha-value>? )"
  },
  "hsla()": {
    syntax: "hsla( <hue> <percentage> <percentage> [ / <alpha-value> ]? ) | hsla( <hue>, <percentage>, <percentage>, <alpha-value>? )"
  },
  hue: Bh,
  "hue-rotate()": {
    syntax: "hue-rotate( <angle> )"
  },
  "id-selector": {
    syntax: "<hash-token>"
  },
  image: Rh,
  "image()": {
    syntax: "image( <image-tags>? [ <image-src>? , <color>? ]! )"
  },
  "image-set()": {
    syntax: "image-set( <image-set-option># )"
  },
  "image-set-option": {
    syntax: "[ <image> | <string> ] <resolution>"
  },
  "image-src": {
    syntax: "<url> | <string>"
  },
  "image-tags": {
    syntax: "ltr | rtl"
  },
  "inflexible-breadth": {
    syntax: "<length> | <percentage> | min-content | max-content | auto"
  },
  "inset()": {
    syntax: "inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )"
  },
  "invert()": {
    syntax: "invert( <number-percentage> )"
  },
  "keyframes-name": {
    syntax: "<custom-ident> | <string>"
  },
  "keyframe-block": {
    syntax: `<keyframe-selector># {
  <declaration-list>
}`
  },
  "keyframe-block-list": {
    syntax: "<keyframe-block>+"
  },
  "keyframe-selector": {
    syntax: "from | to | <percentage>"
  },
  "leader()": {
    syntax: "leader( <leader-type> )"
  },
  "leader-type": {
    syntax: "dotted | solid | space | <string>"
  },
  "length-percentage": {
    syntax: "<length> | <percentage>"
  },
  "line-names": {
    syntax: "'[' <custom-ident>* ']'"
  },
  "line-name-list": {
    syntax: "[ <line-names> | <name-repeat> ]+"
  },
  "line-style": {
    syntax: "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
  },
  "line-width": {
    syntax: "<length> | thin | medium | thick"
  },
  "linear-color-hint": {
    syntax: "<length-percentage>"
  },
  "linear-color-stop": {
    syntax: "<color> <color-stop-length>?"
  },
  "linear-gradient()": {
    syntax: "linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )"
  },
  "mask-layer": {
    syntax: "<mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || <geometry-box> || [ <geometry-box> | no-clip ] || <compositing-operator> || <masking-mode>"
  },
  "mask-position": {
    syntax: "[ <length-percentage> | left | center | right ] [ <length-percentage> | top | center | bottom ]?"
  },
  "mask-reference": {
    syntax: "none | <image> | <mask-source>"
  },
  "mask-source": {
    syntax: "<url>"
  },
  "masking-mode": {
    syntax: "alpha | luminance | match-source"
  },
  "matrix()": {
    syntax: "matrix( <number>#{6} )"
  },
  "matrix3d()": {
    syntax: "matrix3d( <number>#{16} )"
  },
  "max()": {
    syntax: "max( <calc-sum># )"
  },
  "media-and": {
    syntax: "<media-in-parens> [ and <media-in-parens> ]+"
  },
  "media-condition": {
    syntax: "<media-not> | <media-and> | <media-or> | <media-in-parens>"
  },
  "media-condition-without-or": {
    syntax: "<media-not> | <media-and> | <media-in-parens>"
  },
  "media-feature": {
    syntax: "( [ <mf-plain> | <mf-boolean> | <mf-range> ] )"
  },
  "media-in-parens": {
    syntax: "( <media-condition> ) | <media-feature> | <general-enclosed>"
  },
  "media-not": {
    syntax: "not <media-in-parens>"
  },
  "media-or": {
    syntax: "<media-in-parens> [ or <media-in-parens> ]+"
  },
  "media-query": {
    syntax: "<media-condition> | [ not | only ]? <media-type> [ and <media-condition-without-or> ]?"
  },
  "media-query-list": {
    syntax: "<media-query>#"
  },
  "media-type": {
    syntax: "<ident>"
  },
  "mf-boolean": {
    syntax: "<mf-name>"
  },
  "mf-name": {
    syntax: "<ident>"
  },
  "mf-plain": {
    syntax: "<mf-name> : <mf-value>"
  },
  "mf-range": {
    syntax: `<mf-name> [ '<' | '>' ]? '='? <mf-value>
| <mf-value> [ '<' | '>' ]? '='? <mf-name>
| <mf-value> '<' '='? <mf-name> '<' '='? <mf-value>
| <mf-value> '>' '='? <mf-name> '>' '='? <mf-value>`
  },
  "mf-value": {
    syntax: "<number> | <dimension> | <ident> | <ratio>"
  },
  "min()": {
    syntax: "min( <calc-sum># )"
  },
  "minmax()": {
    syntax: "minmax( [ <length> | <percentage> | min-content | max-content | auto ] , [ <length> | <percentage> | <flex> | min-content | max-content | auto ] )"
  },
  "named-color": {
    syntax: "transparent | aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen"
  },
  "namespace-prefix": {
    syntax: "<ident>"
  },
  "ns-prefix": {
    syntax: "[ <ident-token> | '*' ]? '|'"
  },
  "number-percentage": {
    syntax: "<number> | <percentage>"
  },
  "numeric-figure-values": {
    syntax: "[ lining-nums | oldstyle-nums ]"
  },
  "numeric-fraction-values": {
    syntax: "[ diagonal-fractions | stacked-fractions ]"
  },
  "numeric-spacing-values": {
    syntax: "[ proportional-nums | tabular-nums ]"
  },
  nth: Mh,
  "opacity()": {
    syntax: "opacity( [ <number-percentage> ] )"
  },
  "overflow-position": {
    syntax: "unsafe | safe"
  },
  "outline-radius": {
    syntax: "<length> | <percentage>"
  },
  "page-body": {
    syntax: "<declaration>? [ ; <page-body> ]? | <page-margin-box> <page-body>"
  },
  "page-margin-box": {
    syntax: "<page-margin-box-type> '{' <declaration-list> '}'"
  },
  "page-margin-box-type": {
    syntax: "@top-left-corner | @top-left | @top-center | @top-right | @top-right-corner | @bottom-left-corner | @bottom-left | @bottom-center | @bottom-right | @bottom-right-corner | @left-top | @left-middle | @left-bottom | @right-top | @right-middle | @right-bottom"
  },
  "page-selector-list": {
    syntax: "[ <page-selector># ]?"
  },
  "page-selector": {
    syntax: "<pseudo-page>+ | <ident> <pseudo-page>*"
  },
  "path()": {
    syntax: "path( [ <fill-rule>, ]? <string> )"
  },
  "paint()": {
    syntax: "paint( <ident>, <declaration-value>? )"
  },
  "perspective()": {
    syntax: "perspective( <length> )"
  },
  "polygon()": {
    syntax: "polygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )"
  },
  position: qh,
  "pseudo-class-selector": {
    syntax: "':' <ident-token> | ':' <function-token> <any-value> ')'"
  },
  "pseudo-element-selector": {
    syntax: "':' <pseudo-class-selector>"
  },
  "pseudo-page": {
    syntax: ": [ left | right | first | blank ]"
  },
  quote: Dh,
  "radial-gradient()": {
    syntax: "radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )"
  },
  "relative-selector": {
    syntax: "<combinator>? <complex-selector>"
  },
  "relative-selector-list": {
    syntax: "<relative-selector>#"
  },
  "relative-size": {
    syntax: "larger | smaller"
  },
  "repeat-style": {
    syntax: "repeat-x | repeat-y | [ repeat | space | round | no-repeat ]{1,2}"
  },
  "repeating-linear-gradient()": {
    syntax: "repeating-linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )"
  },
  "repeating-radial-gradient()": {
    syntax: "repeating-radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )"
  },
  "rgb()": {
    syntax: "rgb( <percentage>{3} [ / <alpha-value> ]? ) | rgb( <number>{3} [ / <alpha-value> ]? ) | rgb( <percentage>#{3} , <alpha-value>? ) | rgb( <number>#{3} , <alpha-value>? )"
  },
  "rgba()": {
    syntax: "rgba( <percentage>{3} [ / <alpha-value> ]? ) | rgba( <number>{3} [ / <alpha-value> ]? ) | rgba( <percentage>#{3} , <alpha-value>? ) | rgba( <number>#{3} , <alpha-value>? )"
  },
  "rotate()": {
    syntax: "rotate( [ <angle> | <zero> ] )"
  },
  "rotate3d()": {
    syntax: "rotate3d( <number> , <number> , <number> , [ <angle> | <zero> ] )"
  },
  "rotateX()": {
    syntax: "rotateX( [ <angle> | <zero> ] )"
  },
  "rotateY()": {
    syntax: "rotateY( [ <angle> | <zero> ] )"
  },
  "rotateZ()": {
    syntax: "rotateZ( [ <angle> | <zero> ] )"
  },
  "saturate()": {
    syntax: "saturate( <number-percentage> )"
  },
  "scale()": {
    syntax: "scale( <number> , <number>? )"
  },
  "scale3d()": {
    syntax: "scale3d( <number> , <number> , <number> )"
  },
  "scaleX()": {
    syntax: "scaleX( <number> )"
  },
  "scaleY()": {
    syntax: "scaleY( <number> )"
  },
  "scaleZ()": {
    syntax: "scaleZ( <number> )"
  },
  "self-position": {
    syntax: "center | start | end | self-start | self-end | flex-start | flex-end"
  },
  "shape-radius": {
    syntax: "<length-percentage> | closest-side | farthest-side"
  },
  "skew()": {
    syntax: "skew( [ <angle> | <zero> ] , [ <angle> | <zero> ]? )"
  },
  "skewX()": {
    syntax: "skewX( [ <angle> | <zero> ] )"
  },
  "skewY()": {
    syntax: "skewY( [ <angle> | <zero> ] )"
  },
  "sepia()": {
    syntax: "sepia( <number-percentage> )"
  },
  shadow: Nh,
  "shadow-t": {
    syntax: "[ <length>{2,3} && <color>? ]"
  },
  shape: $h,
  "shape-box": {
    syntax: "<box> | margin-box"
  },
  "side-or-corner": {
    syntax: "[ left | right ] || [ top | bottom ]"
  },
  "single-animation": {
    syntax: "<time> || <timing-function> || <time> || <single-animation-iteration-count> || <single-animation-direction> || <single-animation-fill-mode> || <single-animation-play-state> || [ none | <keyframes-name> ]"
  },
  "single-animation-direction": {
    syntax: "normal | reverse | alternate | alternate-reverse"
  },
  "single-animation-fill-mode": {
    syntax: "none | forwards | backwards | both"
  },
  "single-animation-iteration-count": {
    syntax: "infinite | <number>"
  },
  "single-animation-play-state": {
    syntax: "running | paused"
  },
  "single-transition": {
    syntax: "[ none | <single-transition-property> ] || <time> || <timing-function> || <time>"
  },
  "single-transition-property": {
    syntax: "all | <custom-ident>"
  },
  size: Fh,
  "step-position": {
    syntax: "jump-start | jump-end | jump-none | jump-both | start | end"
  },
  "step-timing-function": {
    syntax: "step-start | step-end | steps(<integer>[, <step-position>]?)"
  },
  "subclass-selector": {
    syntax: "<id-selector> | <class-selector> | <attribute-selector> | <pseudo-class-selector>"
  },
  "supports-condition": {
    syntax: "not <supports-in-parens> | <supports-in-parens> [ and <supports-in-parens> ]* | <supports-in-parens> [ or <supports-in-parens> ]*"
  },
  "supports-in-parens": {
    syntax: "( <supports-condition> ) | <supports-feature> | <general-enclosed>"
  },
  "supports-feature": {
    syntax: "<supports-decl> | <supports-selector-fn>"
  },
  "supports-decl": {
    syntax: "( <declaration> )"
  },
  "supports-selector-fn": {
    syntax: "selector( <complex-selector> )"
  },
  symbol: Gh,
  target: Vh,
  "target-counter()": {
    syntax: "target-counter( [ <string> | <url> ] , <custom-ident> , <counter-style>? )"
  },
  "target-counters()": {
    syntax: "target-counters( [ <string> | <url> ] , <custom-ident> , <string> , <counter-style>? )"
  },
  "target-text()": {
    syntax: "target-text( [ <string> | <url> ] , [ content | before | after | first-letter ]? )"
  },
  "time-percentage": {
    syntax: "<time> | <percentage>"
  },
  "timing-function": {
    syntax: "linear | <cubic-bezier-timing-function> | <step-timing-function>"
  },
  "track-breadth": {
    syntax: "<length-percentage> | <flex> | min-content | max-content | auto"
  },
  "track-list": {
    syntax: "[ <line-names>? [ <track-size> | <track-repeat> ] ]+ <line-names>?"
  },
  "track-repeat": {
    syntax: "repeat( [ <positive-integer> ] , [ <line-names>? <track-size> ]+ <line-names>? )"
  },
  "track-size": {
    syntax: "<track-breadth> | minmax( <inflexible-breadth> , <track-breadth> ) | fit-content( [ <length> | <percentage> ] )"
  },
  "transform-function": {
    syntax: "<matrix()> | <translate()> | <translateX()> | <translateY()> | <scale()> | <scaleX()> | <scaleY()> | <rotate()> | <skew()> | <skewX()> | <skewY()> | <matrix3d()> | <translate3d()> | <translateZ()> | <scale3d()> | <scaleZ()> | <rotate3d()> | <rotateX()> | <rotateY()> | <rotateZ()> | <perspective()>"
  },
  "transform-list": {
    syntax: "<transform-function>+"
  },
  "translate()": {
    syntax: "translate( <length-percentage> , <length-percentage>? )"
  },
  "translate3d()": {
    syntax: "translate3d( <length-percentage> , <length-percentage> , <length> )"
  },
  "translateX()": {
    syntax: "translateX( <length-percentage> )"
  },
  "translateY()": {
    syntax: "translateY( <length-percentage> )"
  },
  "translateZ()": {
    syntax: "translateZ( <length> )"
  },
  "type-or-unit": {
    syntax: "string | color | url | integer | number | length | angle | time | frequency | cap | ch | em | ex | ic | lh | rlh | rem | vb | vi | vw | vh | vmin | vmax | mm | Q | cm | in | pt | pc | px | deg | grad | rad | turn | ms | s | Hz | kHz | %"
  },
  "type-selector": {
    syntax: "<wq-name> | <ns-prefix>? '*'"
  },
  "var()": {
    syntax: "var( <custom-property-name> , <declaration-value>? )"
  },
  "viewport-length": {
    syntax: "auto | <length-percentage>"
  },
  "wq-name": {
    syntax: "<ns-prefix>? <ident-token>"
  }
}, Uh = {
  charset: {
    prelude: "<string>"
  },
  "font-face": {
    descriptors: {
      "unicode-range": {
        comment: "replaces <unicode-range>, an old production name",
        syntax: "<urange>#"
      }
    }
  }
}, Yh = {
  "-moz-background-clip": {
    comment: "deprecated syntax in old Firefox, https://developer.mozilla.org/en/docs/Web/CSS/background-clip",
    syntax: "padding | border"
  },
  "-moz-border-radius-bottomleft": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius",
    syntax: "<'border-bottom-left-radius'>"
  },
  "-moz-border-radius-bottomright": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius",
    syntax: "<'border-bottom-right-radius'>"
  },
  "-moz-border-radius-topleft": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius",
    syntax: "<'border-top-left-radius'>"
  },
  "-moz-border-radius-topright": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius",
    syntax: "<'border-bottom-right-radius'>"
  },
  "-moz-control-character-visibility": {
    comment: "firefox specific keywords, https://bugzilla.mozilla.org/show_bug.cgi?id=947588",
    syntax: "visible | hidden"
  },
  "-moz-osx-font-smoothing": {
    comment: "misssed old syntax https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth",
    syntax: "auto | grayscale"
  },
  "-moz-user-select": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/user-select",
    syntax: "none | text | all | -moz-none"
  },
  "-ms-flex-align": {
    comment: "misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align",
    syntax: "start | end | center | baseline | stretch"
  },
  "-ms-flex-item-align": {
    comment: "misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align",
    syntax: "auto | start | end | center | baseline | stretch"
  },
  "-ms-flex-line-pack": {
    comment: "misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-line-pack",
    syntax: "start | end | center | justify | distribute | stretch"
  },
  "-ms-flex-negative": {
    comment: "misssed old syntax implemented in IE; TODO: find references for comfirmation",
    syntax: "<'flex-shrink'>"
  },
  "-ms-flex-pack": {
    comment: "misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-pack",
    syntax: "start | end | center | justify | distribute"
  },
  "-ms-flex-order": {
    comment: "misssed old syntax implemented in IE; https://msdn.microsoft.com/en-us/library/jj127303(v=vs.85).aspx",
    syntax: "<integer>"
  },
  "-ms-flex-positive": {
    comment: "misssed old syntax implemented in IE; TODO: find references for comfirmation",
    syntax: "<'flex-grow'>"
  },
  "-ms-flex-preferred-size": {
    comment: "misssed old syntax implemented in IE; TODO: find references for comfirmation",
    syntax: "<'flex-basis'>"
  },
  "-ms-interpolation-mode": {
    comment: "https://msdn.microsoft.com/en-us/library/ff521095(v=vs.85).aspx",
    syntax: "nearest-neighbor | bicubic"
  },
  "-ms-grid-column-align": {
    comment: "add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466338.aspx",
    syntax: "start | end | center | stretch"
  },
  "-ms-grid-row-align": {
    comment: "add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466348.aspx",
    syntax: "start | end | center | stretch"
  },
  "-ms-hyphenate-limit-last": {
    comment: "misssed old syntax implemented in IE; https://www.w3.org/TR/css-text-4/#hyphenate-line-limits",
    syntax: "none | always | column | page | spread"
  },
  "-webkit-appearance": {
    comment: "webkit specific keywords",
    references: [
      "http://css-infos.net/property/-webkit-appearance"
    ],
    syntax: "none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button"
  },
  "-webkit-background-clip": {
    comment: "https://developer.mozilla.org/en/docs/Web/CSS/background-clip",
    syntax: "[ <box> | border | padding | content | text ]#"
  },
  "-webkit-column-break-after": {
    comment: "added, http://help.dottoro.com/lcrthhhv.php",
    syntax: "always | auto | avoid"
  },
  "-webkit-column-break-before": {
    comment: "added, http://help.dottoro.com/lcxquvkf.php",
    syntax: "always | auto | avoid"
  },
  "-webkit-column-break-inside": {
    comment: "added, http://help.dottoro.com/lclhnthl.php",
    syntax: "always | auto | avoid"
  },
  "-webkit-font-smoothing": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth",
    syntax: "auto | none | antialiased | subpixel-antialiased"
  },
  "-webkit-mask-box-image": {
    comment: "missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image",
    syntax: "[ <url> | <gradient> | none ] [ <length-percentage>{4} <-webkit-mask-box-repeat>{2} ]?"
  },
  "-webkit-print-color-adjust": {
    comment: "missed",
    references: [
      "https://developer.mozilla.org/en/docs/Web/CSS/-webkit-print-color-adjust"
    ],
    syntax: "economy | exact"
  },
  "-webkit-text-security": {
    comment: "missed; http://help.dottoro.com/lcbkewgt.php",
    syntax: "none | circle | disc | square"
  },
  "-webkit-user-drag": {
    comment: "missed; http://help.dottoro.com/lcbixvwm.php",
    syntax: "none | element | auto"
  },
  "-webkit-user-select": {
    comment: "auto is supported by old webkit, https://developer.mozilla.org/en-US/docs/Web/CSS/user-select",
    syntax: "auto | none | text | all"
  },
  "alignment-baseline": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/text.html#AlignmentBaselineProperty"
    ],
    syntax: "auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical"
  },
  "baseline-shift": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/text.html#BaselineShiftProperty"
    ],
    syntax: "baseline | sub | super | <svg-length>"
  },
  behavior: {
    comment: "added old IE property https://msdn.microsoft.com/en-us/library/ms530723(v=vs.85).aspx",
    syntax: "<url>+"
  },
  "clip-rule": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/masking.html#ClipRuleProperty"
    ],
    syntax: "nonzero | evenodd"
  },
  cue: {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<'cue-before'> <'cue-after'>?"
  },
  "cue-after": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<url> <decibel>? | none"
  },
  "cue-before": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<url> <decibel>? | none"
  },
  cursor: {
    comment: "added legacy keywords: hand, -webkit-grab. -webkit-grabbing, -webkit-zoom-in, -webkit-zoom-out, -moz-grab, -moz-grabbing, -moz-zoom-in, -moz-zoom-out",
    references: [
      "https://www.sitepoint.com/css3-cursor-styles/"
    ],
    syntax: "[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing | hand | -webkit-grab | -webkit-grabbing | -webkit-zoom-in | -webkit-zoom-out | -moz-grab | -moz-grabbing | -moz-zoom-in | -moz-zoom-out ] ]"
  },
  display: {
    comment: "extended with -ms-flexbox",
    syntax: "| <-non-standard-display>"
  },
  position: {
    comment: "extended with -webkit-sticky",
    syntax: "| -webkit-sticky"
  },
  "dominant-baseline": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/text.html#DominantBaselineProperty"
    ],
    syntax: "auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge"
  },
  "image-rendering": {
    comment: "extended with <-non-standard-image-rendering>, added SVG keywords optimizeSpeed and optimizeQuality",
    references: [
      "https://developer.mozilla.org/en/docs/Web/CSS/image-rendering",
      "https://www.w3.org/TR/SVG/painting.html#ImageRenderingProperty"
    ],
    syntax: "| optimizeSpeed | optimizeQuality | <-non-standard-image-rendering>"
  },
  fill: {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#FillProperty"
    ],
    syntax: "<paint>"
  },
  "fill-opacity": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#FillProperty"
    ],
    syntax: "<number-zero-one>"
  },
  "fill-rule": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#FillProperty"
    ],
    syntax: "nonzero | evenodd"
  },
  filter: {
    comment: "extend with IE legacy syntaxes",
    syntax: "| <-ms-filter-function-list>"
  },
  "glyph-orientation-horizontal": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/text.html#GlyphOrientationHorizontalProperty"
    ],
    syntax: "<angle>"
  },
  "glyph-orientation-vertical": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/text.html#GlyphOrientationVerticalProperty"
    ],
    syntax: "<angle>"
  },
  kerning: {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/text.html#KerningProperty"
    ],
    syntax: "auto | <svg-length>"
  },
  "letter-spacing": {
    comment: "fix syntax <length> -> <length-percentage>",
    references: [
      "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing"
    ],
    syntax: "normal | <length-percentage>"
  },
  marker: {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#MarkerProperties"
    ],
    syntax: "none | <url>"
  },
  "marker-end": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#MarkerProperties"
    ],
    syntax: "none | <url>"
  },
  "marker-mid": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#MarkerProperties"
    ],
    syntax: "none | <url>"
  },
  "marker-start": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#MarkerProperties"
    ],
    syntax: "none | <url>"
  },
  "max-width": {
    comment: "fix auto -> none (https://github.com/mdn/data/pull/431); extend by non-standard width keywords https://developer.mozilla.org/en-US/docs/Web/CSS/max-width",
    syntax: "none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>) | <-non-standard-width>"
  },
  width: {
    comment: "per spec fit-content should be a function, however browsers are supporting it as a keyword (https://github.com/csstree/stylelint-validator/issues/29)",
    syntax: "| fit-content | -moz-fit-content | -webkit-fit-content"
  },
  "min-width": {
    comment: "extend by non-standard width keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width",
    syntax: "auto | <length-percentage> | min-content | max-content | fit-content(<length-percentage>) | <-non-standard-width>"
  },
  overflow: {
    comment: "extend by vendor keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
    syntax: "| <-non-standard-overflow>"
  },
  pause: {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<'pause-before'> <'pause-after'>?"
  },
  "pause-after": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<time> | none | x-weak | weak | medium | strong | x-strong"
  },
  "pause-before": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<time> | none | x-weak | weak | medium | strong | x-strong"
  },
  rest: {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<'rest-before'> <'rest-after'>?"
  },
  "rest-after": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<time> | none | x-weak | weak | medium | strong | x-strong"
  },
  "rest-before": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<time> | none | x-weak | weak | medium | strong | x-strong"
  },
  "shape-rendering": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#ShapeRenderingPropert"
    ],
    syntax: "auto | optimizeSpeed | crispEdges | geometricPrecision"
  },
  src: {
    comment: "added @font-face's src property https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src",
    syntax: "[ <url> [ format( <string># ) ]? | local( <family-name> ) ]#"
  },
  speak: {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "auto | none | normal"
  },
  "speak-as": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "normal | spell-out || digits || [ literal-punctuation | no-punctuation ]"
  },
  stroke: {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#StrokeProperties"
    ],
    syntax: "<paint>"
  },
  "stroke-dasharray": {
    comment: "added SVG property; a list of comma and/or white space separated <length>s and <percentage>s",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#StrokeProperties"
    ],
    syntax: "none | [ <svg-length>+ ]#"
  },
  "stroke-dashoffset": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#StrokeProperties"
    ],
    syntax: "<svg-length>"
  },
  "stroke-linecap": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#StrokeProperties"
    ],
    syntax: "butt | round | square"
  },
  "stroke-linejoin": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#StrokeProperties"
    ],
    syntax: "miter | round | bevel"
  },
  "stroke-miterlimit": {
    comment: "added SVG property (<miterlimit> = <number-one-or-greater>) ",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#StrokeProperties"
    ],
    syntax: "<number-one-or-greater>"
  },
  "stroke-opacity": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#StrokeProperties"
    ],
    syntax: "<number-zero-one>"
  },
  "stroke-width": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/painting.html#StrokeProperties"
    ],
    syntax: "<svg-length>"
  },
  "text-anchor": {
    comment: "added SVG property",
    references: [
      "https://www.w3.org/TR/SVG/text.html#TextAlignmentProperties"
    ],
    syntax: "start | middle | end"
  },
  "unicode-bidi": {
    comment: "added prefixed keywords https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi",
    syntax: "| -moz-isolate | -moz-isolate-override | -moz-plaintext | -webkit-isolate | -webkit-isolate-override | -webkit-plaintext"
  },
  "unicode-range": {
    comment: "added missed property https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face/unicode-range",
    syntax: "<urange>#"
  },
  "voice-balance": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<number> | left | center | right | leftwards | rightwards"
  },
  "voice-duration": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "auto | <time>"
  },
  "voice-family": {
    comment: "<name> -> <family-name>, https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "[ [ <family-name> | <generic-voice> ] , ]* [ <family-name> | <generic-voice> ] | preserve"
  },
  "voice-pitch": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]"
  },
  "voice-range": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]"
  },
  "voice-rate": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "[ normal | x-slow | slow | medium | fast | x-fast ] || <percentage>"
  },
  "voice-stress": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "normal | strong | moderate | none | reduced"
  },
  "voice-volume": {
    comment: "https://www.w3.org/TR/css3-speech/#property-index",
    syntax: "silent | [ [ x-soft | soft | medium | loud | x-loud ] || <decibel> ]"
  },
  "writing-mode": {
    comment: "extend with SVG keywords",
    syntax: "| <svg-writing-mode>"
  }
}, Kh = {
  "-legacy-gradient": {
    comment: "added collection of legacy gradient syntaxes",
    syntax: "<-webkit-gradient()> | <-legacy-linear-gradient> | <-legacy-repeating-linear-gradient> | <-legacy-radial-gradient> | <-legacy-repeating-radial-gradient>"
  },
  "-legacy-linear-gradient": {
    comment: "like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient",
    syntax: "-moz-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-linear-gradient( <-legacy-linear-gradient-arguments> )"
  },
  "-legacy-repeating-linear-gradient": {
    comment: "like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient",
    syntax: "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )"
  },
  "-legacy-linear-gradient-arguments": {
    comment: "like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient",
    syntax: "[ <angle> | <side-or-corner> ]? , <color-stop-list>"
  },
  "-legacy-radial-gradient": {
    comment: "deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients",
    syntax: "-moz-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-radial-gradient( <-legacy-radial-gradient-arguments> )"
  },
  "-legacy-repeating-radial-gradient": {
    comment: "deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients",
    syntax: "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )"
  },
  "-legacy-radial-gradient-arguments": {
    comment: "deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients",
    syntax: "[ <position> , ]? [ [ [ <-legacy-radial-gradient-shape> || <-legacy-radial-gradient-size> ] | [ <length> | <percentage> ]{2} ] , ]? <color-stop-list>"
  },
  "-legacy-radial-gradient-size": {
    comment: "before a standard it contains 2 extra keywords (`contain` and `cover`) https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltsize",
    syntax: "closest-side | closest-corner | farthest-side | farthest-corner | contain | cover"
  },
  "-legacy-radial-gradient-shape": {
    comment: "define to double sure it doesn't extends in future https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltshape",
    syntax: "circle | ellipse"
  },
  "-non-standard-font": {
    comment: "non standard fonts",
    references: [
      "https://webkit.org/blog/3709/using-the-system-font-in-web-content/"
    ],
    syntax: "-apple-system-body | -apple-system-headline | -apple-system-subheadline | -apple-system-caption1 | -apple-system-caption2 | -apple-system-footnote | -apple-system-short-body | -apple-system-short-headline | -apple-system-short-subheadline | -apple-system-short-caption1 | -apple-system-short-footnote | -apple-system-tall-body"
  },
  "-non-standard-color": {
    comment: "non standard colors",
    references: [
      "http://cssdot.ru/%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA_CSS/color-i305.html",
      "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Mozilla_Color_Preference_Extensions"
    ],
    syntax: "-moz-ButtonDefault | -moz-ButtonHoverFace | -moz-ButtonHoverText | -moz-CellHighlight | -moz-CellHighlightText | -moz-Combobox | -moz-ComboboxText | -moz-Dialog | -moz-DialogText | -moz-dragtargetzone | -moz-EvenTreeRow | -moz-Field | -moz-FieldText | -moz-html-CellHighlight | -moz-html-CellHighlightText | -moz-mac-accentdarkestshadow | -moz-mac-accentdarkshadow | -moz-mac-accentface | -moz-mac-accentlightesthighlight | -moz-mac-accentlightshadow | -moz-mac-accentregularhighlight | -moz-mac-accentregularshadow | -moz-mac-chrome-active | -moz-mac-chrome-inactive | -moz-mac-focusring | -moz-mac-menuselect | -moz-mac-menushadow | -moz-mac-menutextselect | -moz-MenuHover | -moz-MenuHoverText | -moz-MenuBarText | -moz-MenuBarHoverText | -moz-nativehyperlinktext | -moz-OddTreeRow | -moz-win-communicationstext | -moz-win-mediatext | -moz-activehyperlinktext | -moz-default-background-color | -moz-default-color | -moz-hyperlinktext | -moz-visitedhyperlinktext | -webkit-activelink | -webkit-focus-ring-color | -webkit-link | -webkit-text"
  },
  "-non-standard-image-rendering": {
    comment: "non-standard keywords http://phrogz.net/tmp/canvas_image_zoom.html",
    syntax: "optimize-contrast | -moz-crisp-edges | -o-crisp-edges | -webkit-optimize-contrast"
  },
  "-non-standard-overflow": {
    comment: "non-standard keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
    syntax: "-moz-scrollbars-none | -moz-scrollbars-horizontal | -moz-scrollbars-vertical | -moz-hidden-unscrollable"
  },
  "-non-standard-width": {
    comment: "non-standard keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width",
    syntax: "fill-available | min-intrinsic | intrinsic | -moz-available | -moz-fit-content | -moz-min-content | -moz-max-content | -webkit-min-content | -webkit-max-content"
  },
  "-webkit-gradient()": {
    comment: "first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/ - TODO: simplify when after match algorithm improvement ( [, point, radius | , point] -> [, radius]? , point )",
    syntax: "-webkit-gradient( <-webkit-gradient-type>, <-webkit-gradient-point> [, <-webkit-gradient-point> | , <-webkit-gradient-radius>, <-webkit-gradient-point> ] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )"
  },
  "-webkit-gradient-color-stop": {
    comment: "first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/",
    syntax: "from( <color> ) | color-stop( [ <number-zero-one> | <percentage> ] , <color> ) | to( <color> )"
  },
  "-webkit-gradient-point": {
    comment: "first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/",
    syntax: "[ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]"
  },
  "-webkit-gradient-radius": {
    comment: "first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/",
    syntax: "<length> | <percentage>"
  },
  "-webkit-gradient-type": {
    comment: "first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/",
    syntax: "linear | radial"
  },
  "-webkit-mask-box-repeat": {
    comment: "missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image",
    syntax: "repeat | stretch | round"
  },
  "-webkit-mask-clip-style": {
    comment: "missed; there is no enough information about `-webkit-mask-clip` property, but looks like all those keywords are working",
    syntax: "border | border-box | padding | padding-box | content | content-box | text"
  },
  "-ms-filter-function-list": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter",
    syntax: "<-ms-filter-function>+"
  },
  "-ms-filter-function": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter",
    syntax: "<-ms-filter-function-progid> | <-ms-filter-function-legacy>"
  },
  "-ms-filter-function-progid": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter",
    syntax: "'progid:' [ <ident-token> '.' ]* [ <ident-token> | <function-token> <any-value>? ) ]"
  },
  "-ms-filter-function-legacy": {
    comment: "https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter",
    syntax: "<ident-token> | <function-token> <any-value>? )"
  },
  "-ms-filter": {
    syntax: "<string>"
  },
  age: {
    comment: "https://www.w3.org/TR/css3-speech/#voice-family",
    syntax: "child | young | old"
  },
  "attr-name": {
    syntax: "<wq-name>"
  },
  "attr-fallback": {
    syntax: "<any-value>"
  },
  "border-radius": {
    comment: "missed, https://drafts.csswg.org/css-backgrounds-3/#the-border-radius",
    syntax: "<length-percentage>{1,2}"
  },
  bottom: {
    comment: "missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect",
    syntax: "<length> | auto"
  },
  "content-list": {
    comment: "missed -> https://drafts.csswg.org/css-content/#typedef-content-list (document-url, <target> and leader() is omitted util stabilization)",
    syntax: "[ <string> | contents | <image> | <quote> | <target> | <leader()> | <attr()> | counter( <ident>, <'list-style-type'>? ) ]+"
  },
  "element()": {
    comment: "https://drafts.csswg.org/css-gcpm/#element-syntax & https://drafts.csswg.org/css-images-4/#element-notation",
    syntax: "element( <custom-ident> , [ first | start | last | first-except ]? ) | element( <id-selector> )"
  },
  "generic-voice": {
    comment: "https://www.w3.org/TR/css3-speech/#voice-family",
    syntax: "[ <age>? <gender> <integer>? ]"
  },
  gender: {
    comment: "https://www.w3.org/TR/css3-speech/#voice-family",
    syntax: "male | female | neutral"
  },
  "generic-family": {
    comment: "added -apple-system",
    references: [
      "https://webkit.org/blog/3709/using-the-system-font-in-web-content/"
    ],
    syntax: "| -apple-system"
  },
  gradient: {
    comment: "added legacy syntaxes support",
    syntax: "| <-legacy-gradient>"
  },
  left: {
    comment: "missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect",
    syntax: "<length> | auto"
  },
  "mask-image": {
    comment: "missed; https://drafts.fxtf.org/css-masking-1/#the-mask-image",
    syntax: "<mask-reference>#"
  },
  "name-repeat": {
    comment: "missed, and looks like obsolete, keep it as is since other property syntaxes should be changed too; https://www.w3.org/TR/2015/WD-css-grid-1-20150917/#typedef-name-repeat",
    syntax: "repeat( [ <positive-integer> | auto-fill ], <line-names>+)"
  },
  "named-color": {
    comment: "added non standard color names",
    syntax: "| <-non-standard-color>"
  },
  paint: {
    comment: "used by SVG https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint",
    syntax: "none | <color> | <url> [ none | <color> ]? | context-fill | context-stroke"
  },
  "page-size": {
    comment: "https://www.w3.org/TR/css-page-3/#typedef-page-size-page-size",
    syntax: "A5 | A4 | A3 | B5 | B4 | JIS-B5 | JIS-B4 | letter | legal | ledger"
  },
  ratio: {
    comment: "missed, https://drafts.csswg.org/mediaqueries-4/#typedef-ratio",
    syntax: "<integer> / <integer>"
  },
  right: {
    comment: "missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect",
    syntax: "<length> | auto"
  },
  shape: {
    comment: "missed spaces in function body and add backwards compatible syntax",
    syntax: "rect( <top>, <right>, <bottom>, <left> ) | rect( <top> <right> <bottom> <left> )"
  },
  "svg-length": {
    comment: "All coordinates and lengths in SVG can be specified with or without a unit identifier",
    references: [
      "https://www.w3.org/TR/SVG11/coords.html#Units"
    ],
    syntax: "<percentage> | <length> | <number>"
  },
  "svg-writing-mode": {
    comment: "SVG specific keywords (deprecated for CSS)",
    references: [
      "https://developer.mozilla.org/en/docs/Web/CSS/writing-mode",
      "https://www.w3.org/TR/SVG/text.html#WritingModeProperty"
    ],
    syntax: "lr-tb | rl-tb | tb-rl | lr | rl | tb"
  },
  top: {
    comment: "missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect",
    syntax: "<length> | auto"
  },
  "track-group": {
    comment: "used by old grid-columns and grid-rows syntax v0",
    syntax: "'(' [ <string>* <track-minmax> <string>* ]+ ')' [ '[' <positive-integer> ']' ]? | <track-minmax>"
  },
  "track-list-v0": {
    comment: "used by old grid-columns and grid-rows syntax v0",
    syntax: "[ <string>* <track-group> <string>* ]+ | none"
  },
  "track-minmax": {
    comment: "used by old grid-columns and grid-rows syntax v0",
    syntax: "minmax( <track-breadth> , <track-breadth> ) | auto | <track-breadth> | fit-content"
  },
  x: {
    comment: "missed; not sure we should add it, but no others except `cursor` is using it so it's ok for now; https://drafts.csswg.org/css-ui-3/#cursor",
    syntax: "<number>"
  },
  y: {
    comment: "missed; not sure we should add it, but no others except `cursor` is using so it's ok for now; https://drafts.csswg.org/css-ui-3/#cursor",
    syntax: "<number>"
  },
  declaration: {
    comment: "missed, restored by https://drafts.csswg.org/css-syntax",
    syntax: "<ident-token> : <declaration-value>? [ '!' important ]?"
  },
  "declaration-list": {
    comment: "missed, restored by https://drafts.csswg.org/css-syntax",
    syntax: "[ <declaration>? ';' ]* <declaration>?"
  },
  url: {
    comment: "https://drafts.csswg.org/css-values-4/#urls",
    syntax: "url( <string> <url-modifier>* ) | <url-token>"
  },
  "url-modifier": {
    comment: "https://drafts.csswg.org/css-values-4/#typedef-url-modifier",
    syntax: "<ident> | <function-token> <any-value> )"
  },
  "number-zero-one": {
    syntax: "<number [0,1]>"
  },
  "number-one-or-greater": {
    syntax: "<number [1,∞]>"
  },
  "positive-integer": {
    syntax: "<integer [0,∞]>"
  },
  "-non-standard-display": {
    syntax: "-ms-inline-flexbox | -ms-grid | -ms-inline-grid | -webkit-flex | -webkit-inline-flex | -webkit-box | -webkit-inline-box | -moz-inline-stack | -moz-box | -moz-inline-box"
  }
}, Zh = {
  atrules: Uh,
  properties: Yh,
  syntaxes: Kh
}, Qh = Lm, Xh = zh, Jh = Hh, Qr = Zh, Mi = /^\s*\|\s*/;
function eg(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r in t) {
    const a = t[r];
    let n = null;
    if (a.descriptors) {
      n = /* @__PURE__ */ Object.create(null);
      for (const i in a.descriptors)
        n[i] = a.descriptors[i].syntax;
    }
    e[r.substr(1)] = {
      prelude: a.syntax.trim().match(/^@\S+\s+([^;\{]*)/)[1].trim() || null,
      descriptors: n
    };
  }
  return e;
}
function Fa(t, e) {
  const r = {};
  for (const a in t)
    r[a] = t[a].syntax || t[a];
  for (const a in e)
    a in t ? e[a].syntax ? r[a] = Mi.test(e[a].syntax) ? r[a] + " " + e[a].syntax.trim() : e[a].syntax : delete r[a] : e[a].syntax && (r[a] = e[a].syntax.replace(Mi, ""));
  return r;
}
function qi(t) {
  const e = {};
  for (const r in t)
    e[r] = t[r].syntax;
  return e;
}
function tg(t, e) {
  const r = {};
  for (const a in t) {
    const n = e[a] && e[a].descriptors || null;
    r[a] = {
      prelude: a in e && "prelude" in e[a] ? e[a].prelude : t[a].prelude || null,
      descriptors: t[a].descriptors ? Fa(t[a].descriptors, n || {}) : n && qi(n)
    };
  }
  for (const a in e)
    hasOwnProperty.call(t, a) || (r[a] = {
      prelude: e[a].prelude || null,
      descriptors: e[a].descriptors && qi(e[a].descriptors)
    });
  return r;
}
var rg = {
  types: Fa(Jh, Qr.syntaxes),
  atrules: tg(eg(Qh), Qr.atrules),
  properties: Fa(Xh, Qr.properties)
}, Cl = T.cmpChar, kl = T.isDigit, xt = T.TYPE, Di = xt.WhiteSpace, Ni = xt.Comment, Xr = xt.Ident, ce = xt.Number, ag = xt.Dimension, le = 43, Z = 45, Ft = 110, ke = !0, ng = !1;
function Gt(t, e) {
  var r = this.scanner.tokenStart + t, a = this.scanner.source.charCodeAt(r);
  for ((a === le || a === Z) && (e && this.error("Number sign is not allowed"), r++); r < this.scanner.tokenEnd; r++)
    kl(this.scanner.source.charCodeAt(r)) || this.error("Integer is expected", r);
}
function Ie(t) {
  return Gt.call(this, 0, t);
}
function ye(t, e) {
  if (!Cl(this.scanner.source, this.scanner.tokenStart + t, e)) {
    var r = "";
    switch (e) {
      case Ft:
        r = "N is expected";
        break;
      case Z:
        r = "HyphenMinus is expected";
        break;
    }
    this.error(r, this.scanner.tokenStart + t);
  }
}
function Jr() {
  for (var t = 0, e = 0, r = this.scanner.tokenType; r === Di || r === Ni; )
    r = this.scanner.lookupType(++t);
  if (r !== ce)
    if (this.scanner.isDelim(le, t) || this.scanner.isDelim(Z, t)) {
      e = this.scanner.isDelim(le, t) ? le : Z;
      do
        r = this.scanner.lookupType(++t);
      while (r === Di || r === Ni);
      r !== ce && (this.scanner.skip(t), Ie.call(this, ke));
    } else
      return null;
  return t > 0 && this.scanner.skip(t), e === 0 && (r = this.scanner.source.charCodeAt(this.scanner.tokenStart), r !== le && r !== Z && this.error("Number sign is expected")), Ie.call(this, e !== 0), e === Z ? "-" + this.consume(ce) : this.consume(ce);
}
var ig = {
  name: "AnPlusB",
  structure: {
    a: [String, null],
    b: [String, null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = null, r = null;
    if (this.scanner.tokenType === ce)
      Ie.call(this, ng), r = this.consume(ce);
    else if (this.scanner.tokenType === Xr && Cl(this.scanner.source, this.scanner.tokenStart, Z))
      switch (e = "-1", ye.call(this, 1, Ft), this.scanner.getTokenLength()) {
        case 2:
          this.scanner.next(), r = Jr.call(this);
          break;
        case 3:
          ye.call(this, 2, Z), this.scanner.next(), this.scanner.skipSC(), Ie.call(this, ke), r = "-" + this.consume(ce);
          break;
        default:
          ye.call(this, 2, Z), Gt.call(this, 3, ke), this.scanner.next(), r = this.scanner.substrToCursor(t + 2);
      }
    else if (this.scanner.tokenType === Xr || this.scanner.isDelim(le) && this.scanner.lookupType(1) === Xr) {
      var a = 0;
      switch (e = "1", this.scanner.isDelim(le) && (a = 1, this.scanner.next()), ye.call(this, 0, Ft), this.scanner.getTokenLength()) {
        case 1:
          this.scanner.next(), r = Jr.call(this);
          break;
        case 2:
          ye.call(this, 1, Z), this.scanner.next(), this.scanner.skipSC(), Ie.call(this, ke), r = "-" + this.consume(ce);
          break;
        default:
          ye.call(this, 1, Z), Gt.call(this, 2, ke), this.scanner.next(), r = this.scanner.substrToCursor(t + a + 1);
      }
    } else if (this.scanner.tokenType === ag) {
      for (var n = this.scanner.source.charCodeAt(this.scanner.tokenStart), a = n === le || n === Z, i = this.scanner.tokenStart + a; i < this.scanner.tokenEnd && kl(this.scanner.source.charCodeAt(i)); i++)
        ;
      i === this.scanner.tokenStart + a && this.error("Integer is expected", this.scanner.tokenStart + a), ye.call(this, i - this.scanner.tokenStart, Ft), e = this.scanner.source.substring(t, i), i + 1 === this.scanner.tokenEnd ? (this.scanner.next(), r = Jr.call(this)) : (ye.call(this, i - this.scanner.tokenStart + 1, Z), i + 2 === this.scanner.tokenEnd ? (this.scanner.next(), this.scanner.skipSC(), Ie.call(this, ke), r = "-" + this.consume(ce)) : (Gt.call(this, i - this.scanner.tokenStart + 2, ke), this.scanner.next(), r = this.scanner.substrToCursor(i + 1)));
    } else
      this.error();
    return e !== null && e.charCodeAt(0) === le && (e = e.substr(1)), r !== null && r.charCodeAt(0) === le && (r = r.substr(1)), {
      type: "AnPlusB",
      loc: this.getLocation(t, this.scanner.tokenStart),
      a: e,
      b: r
    };
  },
  generate: function(t) {
    var e = t.a !== null && t.a !== void 0, r = t.b !== null && t.b !== void 0;
    e ? (this.chunk(
      t.a === "+1" ? "+n" : (
        // eslint-disable-line operator-linebreak, indent
        t.a === "1" ? "n" : (
          // eslint-disable-line operator-linebreak, indent
          t.a === "-1" ? "-n" : (
            // eslint-disable-line operator-linebreak, indent
            t.a + "n"
          )
        )
      )
      // eslint-disable-line operator-linebreak, indent
    ), r && (r = String(t.b), r.charAt(0) === "-" || r.charAt(0) === "+" ? (this.chunk(r.charAt(0)), this.chunk(r.substr(1))) : (this.chunk("+"), this.chunk(r)))) : this.chunk(String(t.b));
  }
}, sg = T, vr = sg.TYPE, og = vr.WhiteSpace, Cn = vr.Semicolon, Tl = vr.LeftCurlyBracket, lg = vr.Delim, dg = 33;
function pg() {
  return this.scanner.tokenIndex > 0 && this.scanner.lookupType(-1) === og ? this.scanner.tokenIndex > 1 ? this.scanner.getTokenStart(this.scanner.tokenIndex - 1) : this.scanner.firstCharOffset : this.scanner.tokenStart;
}
function $i() {
  return 0;
}
function cg(t) {
  return t === Tl ? 1 : 0;
}
function ug(t) {
  return t === Tl || t === Cn ? 1 : 0;
}
function mg(t, e, r) {
  return t === lg && e.charCodeAt(r) === dg || t === Cn ? 1 : 0;
}
function hg(t) {
  return t === Cn ? 2 : 0;
}
var _e = {
  name: "Raw",
  structure: {
    value: String
  },
  parse: function(t, e, r) {
    var a = this.scanner.getTokenStart(t), n;
    return this.scanner.skip(
      this.scanner.getRawLength(t, e || $i)
    ), r && this.scanner.tokenStart > a ? n = pg.call(this) : n = this.scanner.tokenStart, {
      type: "Raw",
      loc: this.getLocation(a, n),
      value: this.scanner.source.substring(a, n)
    };
  },
  generate: function(t) {
    this.chunk(t.value);
  },
  mode: {
    default: $i,
    leftCurlyBracket: cg,
    leftCurlyBracketOrSemicolon: ug,
    exclamationMarkOrSemicolon: mg,
    semicolonIncluded: hg
  }
}, br = T.TYPE, gg = _e.mode, El = br.AtKeyword, Fi = br.Semicolon, Ga = br.LeftCurlyBracket, fg = br.RightCurlyBracket;
function Gi(t) {
  return this.Raw(t, gg.leftCurlyBracketOrSemicolon, !0);
}
function yg() {
  for (var t = 1, e; e = this.scanner.lookupType(t); t++) {
    if (e === fg)
      return !0;
    if (e === Ga || e === El)
      return !1;
  }
  return !1;
}
var vg = {
  name: "Atrule",
  structure: {
    name: String,
    prelude: ["AtrulePrelude", "Raw", null],
    block: ["Block", null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e, r, a = null, n = null;
    switch (this.eat(El), e = this.scanner.substrToCursor(t + 1), r = e.toLowerCase(), this.scanner.skipSC(), this.scanner.eof === !1 && this.scanner.tokenType !== Ga && this.scanner.tokenType !== Fi && (this.parseAtrulePrelude ? (a = this.parseWithFallback(this.AtrulePrelude.bind(this, e), Gi), a.type === "AtrulePrelude" && a.children.head === null && (a = null)) : a = Gi.call(this, this.scanner.tokenIndex), this.scanner.skipSC()), this.scanner.tokenType) {
      case Fi:
        this.scanner.next();
        break;
      case Ga:
        this.atrule.hasOwnProperty(r) && typeof this.atrule[r].block == "function" ? n = this.atrule[r].block.call(this) : n = this.Block(yg.call(this));
        break;
    }
    return {
      type: "Atrule",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: e,
      prelude: a,
      block: n
    };
  },
  generate: function(t) {
    this.chunk("@"), this.chunk(t.name), t.prelude !== null && (this.chunk(" "), this.node(t.prelude)), t.block ? this.node(t.block) : this.chunk(";");
  },
  walkContext: "atrule"
}, _l = T.TYPE, bg = _l.Semicolon, Sg = _l.LeftCurlyBracket, xg = {
  name: "AtrulePrelude",
  structure: {
    children: [[]]
  },
  parse: function(t) {
    var e = null;
    return t !== null && (t = t.toLowerCase()), this.scanner.skipSC(), this.atrule.hasOwnProperty(t) && typeof this.atrule[t].prelude == "function" ? e = this.atrule[t].prelude.call(this) : e = this.readSequence(this.scope.AtrulePrelude), this.scanner.skipSC(), this.scanner.eof !== !0 && this.scanner.tokenType !== Sg && this.scanner.tokenType !== bg && this.error("Semicolon or block is expected"), e === null && (e = this.createList()), {
      type: "AtrulePrelude",
      loc: this.getLocationFromList(e),
      children: e
    };
  },
  generate: function(t) {
    this.children(t);
  },
  walkContext: "atrulePrelude"
}, wt = T.TYPE, ht = wt.Ident, wg = wt.String, Cg = wt.Colon, kg = wt.LeftSquareBracket, Vi = wt.RightSquareBracket, Tg = 36, Al = 42, Vt = 61, Eg = 94, Va = 124, _g = 126;
function Ag() {
  this.scanner.eof && this.error("Unexpected end of input");
  var t = this.scanner.tokenStart, e = !1, r = !0;
  return this.scanner.isDelim(Al) ? (e = !0, r = !1, this.scanner.next()) : this.scanner.isDelim(Va) || this.eat(ht), this.scanner.isDelim(Va) ? this.scanner.source.charCodeAt(this.scanner.tokenStart + 1) !== Vt ? (this.scanner.next(), this.eat(ht)) : e && this.error("Identifier is expected", this.scanner.tokenEnd) : e && this.error("Vertical line is expected"), r && this.scanner.tokenType === Cg && (this.scanner.next(), this.eat(ht)), {
    type: "Identifier",
    loc: this.getLocation(t, this.scanner.tokenStart),
    name: this.scanner.substrToCursor(t)
  };
}
function Og() {
  var t = this.scanner.tokenStart, e = this.scanner.source.charCodeAt(t);
  return e !== Vt && // =
  e !== _g && // ~=
  e !== Eg && // ^=
  e !== Tg && // $=
  e !== Al && // *=
  e !== Va && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.scanner.next(), e !== Vt && (this.scanner.isDelim(Vt) || this.error("Equal sign is expected"), this.scanner.next()), this.scanner.substrToCursor(t);
}
var zg = {
  name: "AttributeSelector",
  structure: {
    name: "Identifier",
    matcher: [String, null],
    value: ["String", "Identifier", null],
    flags: [String, null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e, r = null, a = null, n = null;
    return this.eat(kg), this.scanner.skipSC(), e = Ag.call(this), this.scanner.skipSC(), this.scanner.tokenType !== Vi && (this.scanner.tokenType !== ht && (r = Og.call(this), this.scanner.skipSC(), a = this.scanner.tokenType === wg ? this.String() : this.Identifier(), this.scanner.skipSC()), this.scanner.tokenType === ht && (n = this.scanner.getTokenValue(), this.scanner.next(), this.scanner.skipSC())), this.eat(Vi), {
      type: "AttributeSelector",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: e,
      matcher: r,
      value: a,
      flags: n
    };
  },
  generate: function(t) {
    var e = " ";
    this.chunk("["), this.node(t.name), t.matcher !== null && (this.chunk(t.matcher), t.value !== null && (this.node(t.value), t.value.type === "String" && (e = ""))), t.flags !== null && (this.chunk(e), this.chunk(t.flags)), this.chunk("]");
  }
}, Ue = T.TYPE, jg = _e.mode, Lg = Ue.WhiteSpace, Wg = Ue.Comment, Hi = Ue.Semicolon, Pg = Ue.AtKeyword, Ig = Ue.LeftCurlyBracket, Ui = Ue.RightCurlyBracket;
function Ol(t) {
  return this.Raw(t, null, !0);
}
function Bg() {
  return this.parseWithFallback(this.Rule, Ol);
}
function Yi(t) {
  return this.Raw(t, jg.semicolonIncluded, !0);
}
function Rg() {
  if (this.scanner.tokenType === Hi)
    return Yi.call(this, this.scanner.tokenIndex);
  var t = this.parseWithFallback(this.Declaration, Yi);
  return this.scanner.tokenType === Hi && this.scanner.next(), t;
}
var Mg = {
  name: "Block",
  structure: {
    children: [[
      "Atrule",
      "Rule",
      "Declaration"
    ]]
  },
  parse: function(t) {
    var e = t ? Rg : Bg, r = this.scanner.tokenStart, a = this.createList();
    this.eat(Ig);
    e:
      for (; !this.scanner.eof; )
        switch (this.scanner.tokenType) {
          case Ui:
            break e;
          case Lg:
          case Wg:
            this.scanner.next();
            break;
          case Pg:
            a.push(this.parseWithFallback(this.Atrule, Ol));
            break;
          default:
            a.push(e.call(this));
        }
    return this.scanner.eof || this.eat(Ui), {
      type: "Block",
      loc: this.getLocation(r, this.scanner.tokenStart),
      children: a
    };
  },
  generate: function(t) {
    this.chunk("{"), this.children(t, function(e) {
      e.type === "Declaration" && this.chunk(";");
    }), this.chunk("}");
  },
  walkContext: "block"
}, zl = T.TYPE, qg = zl.LeftSquareBracket, Dg = zl.RightSquareBracket, Ng = {
  name: "Brackets",
  structure: {
    children: [[]]
  },
  parse: function(t, e) {
    var r = this.scanner.tokenStart, a = null;
    return this.eat(qg), a = t.call(this, e), this.scanner.eof || this.eat(Dg), {
      type: "Brackets",
      loc: this.getLocation(r, this.scanner.tokenStart),
      children: a
    };
  },
  generate: function(t) {
    this.chunk("["), this.children(t), this.chunk("]");
  }
}, $g = T.TYPE.CDC, Fg = {
  name: "CDC",
  structure: [],
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.eat($g), {
      type: "CDC",
      loc: this.getLocation(t, this.scanner.tokenStart)
    };
  },
  generate: function() {
    this.chunk("-->");
  }
}, Gg = T.TYPE.CDO, Vg = {
  name: "CDO",
  structure: [],
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.eat(Gg), {
      type: "CDO",
      loc: this.getLocation(t, this.scanner.tokenStart)
    };
  },
  generate: function() {
    this.chunk("<!--");
  }
}, Hg = T.TYPE, Ug = Hg.Ident, Yg = 46, Kg = {
  name: "ClassSelector",
  structure: {
    name: String
  },
  parse: function() {
    return this.scanner.isDelim(Yg) || this.error("Full stop is expected"), this.scanner.next(), {
      type: "ClassSelector",
      loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
      name: this.consume(Ug)
    };
  },
  generate: function(t) {
    this.chunk("."), this.chunk(t.name);
  }
}, Zg = T.TYPE, Qg = Zg.Ident, Xg = 43, Ki = 47, Jg = 62, ef = 126, tf = {
  name: "Combinator",
  structure: {
    name: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = this.scanner.source.charCodeAt(this.scanner.tokenStart);
    switch (e) {
      case Jg:
      case Xg:
      case ef:
        this.scanner.next();
        break;
      case Ki:
        this.scanner.next(), (this.scanner.tokenType !== Qg || this.scanner.lookupValue(0, "deep") === !1) && this.error("Identifier `deep` is expected"), this.scanner.next(), this.scanner.isDelim(Ki) || this.error("Solidus is expected"), this.scanner.next();
        break;
      default:
        this.error("Combinator is expected");
    }
    return {
      type: "Combinator",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(t)
    };
  },
  generate: function(t) {
    this.chunk(t.name);
  }
}, rf = T.TYPE, af = rf.Comment, nf = 42, sf = 47, of = {
  name: "Comment",
  structure: {
    value: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = this.scanner.tokenEnd;
    return this.eat(af), e - t + 2 >= 2 && this.scanner.source.charCodeAt(e - 2) === nf && this.scanner.source.charCodeAt(e - 1) === sf && (e -= 2), {
      type: "Comment",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.source.substring(t + 2, e)
    };
  },
  generate: function(t) {
    this.chunk("/*"), this.chunk(t.value), this.chunk("*/");
  }
}, lf = sn.isCustomProperty, Ye = T.TYPE, jl = _e.mode, Ll = Ye.Ident, Zi = Ye.Hash, df = Ye.Colon, Wl = Ye.Semicolon, Pl = Ye.Delim, pf = Ye.WhiteSpace, Il = 33, cf = 35, uf = 36, mf = 38, hf = 42, gf = 43, Qi = 47;
function ff(t) {
  return this.Raw(t, jl.exclamationMarkOrSemicolon, !0);
}
function yf(t) {
  return this.Raw(t, jl.exclamationMarkOrSemicolon, !1);
}
function vf() {
  var t = this.scanner.tokenIndex, e = this.Value();
  return e.type !== "Raw" && this.scanner.eof === !1 && this.scanner.tokenType !== Wl && this.scanner.isDelim(Il) === !1 && this.scanner.isBalanceEdge(t) === !1 && this.error(), e;
}
var bf = {
  name: "Declaration",
  structure: {
    important: [Boolean, String],
    property: String,
    value: ["Value", "Raw"]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = this.scanner.tokenIndex, r = Sf.call(this), a = lf(r), n = a ? this.parseCustomProperty : this.parseValue, i = a ? yf : ff, s = !1, o;
    this.scanner.skipSC(), this.eat(df);
    const l = this.scanner.tokenIndex;
    if (a || this.scanner.skipSC(), n ? o = this.parseWithFallback(vf, i) : o = i.call(this, this.scanner.tokenIndex), a && o.type === "Value" && o.children.isEmpty()) {
      for (let p = l - this.scanner.tokenIndex; p <= 0; p++)
        if (this.scanner.lookupType(p) === pf) {
          o.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
    }
    return this.scanner.isDelim(Il) && (s = xf.call(this), this.scanner.skipSC()), this.scanner.eof === !1 && this.scanner.tokenType !== Wl && this.scanner.isBalanceEdge(e) === !1 && this.error(), {
      type: "Declaration",
      loc: this.getLocation(t, this.scanner.tokenStart),
      important: s,
      property: r,
      value: o
    };
  },
  generate: function(t) {
    this.chunk(t.property), this.chunk(":"), this.node(t.value), t.important && this.chunk(t.important === !0 ? "!important" : "!" + t.important);
  },
  walkContext: "declaration"
};
function Sf() {
  var t = this.scanner.tokenStart;
  if (this.scanner.tokenType === Pl)
    switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
      case hf:
      case uf:
      case gf:
      case cf:
      case mf:
        this.scanner.next();
        break;
      case Qi:
        this.scanner.next(), this.scanner.isDelim(Qi) && this.scanner.next();
        break;
    }
  return this.scanner.tokenType === Zi ? this.eat(Zi) : this.eat(Ll), this.scanner.substrToCursor(t);
}
function xf() {
  this.eat(Pl), this.scanner.skipSC();
  var t = this.consume(Ll);
  return t === "important" ? !0 : t;
}
var kn = T.TYPE, wf = _e.mode, Cf = kn.WhiteSpace, kf = kn.Comment, Tf = kn.Semicolon;
function Ef(t) {
  return this.Raw(t, wf.semicolonIncluded, !0);
}
var _f = {
  name: "DeclarationList",
  structure: {
    children: [[
      "Declaration"
    ]]
  },
  parse: function() {
    for (var t = this.createList(); !this.scanner.eof; )
      switch (this.scanner.tokenType) {
        case Cf:
        case kf:
        case Tf:
          this.scanner.next();
          break;
        default:
          t.push(this.parseWithFallback(this.Declaration, Ef));
      }
    return {
      type: "DeclarationList",
      loc: this.getLocationFromList(t),
      children: t
    };
  },
  generate: function(t) {
    this.children(t, function(e) {
      e.type === "Declaration" && this.chunk(";");
    });
  }
}, Af = St.consumeNumber, Of = T.TYPE, zf = Of.Dimension, jf = {
  name: "Dimension",
  structure: {
    value: String,
    unit: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = Af(this.scanner.source, t);
    return this.eat(zf), {
      type: "Dimension",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.source.substring(t, e),
      unit: this.scanner.source.substring(e, this.scanner.tokenStart)
    };
  },
  generate: function(t) {
    this.chunk(t.value), this.chunk(t.unit);
  }
}, Lf = T.TYPE, Wf = Lf.RightParenthesis, Pf = {
  name: "Function",
  structure: {
    name: String,
    children: [[]]
  },
  parse: function(t, e) {
    var r = this.scanner.tokenStart, a = this.consumeFunctionName(), n = a.toLowerCase(), i;
    return i = e.hasOwnProperty(n) ? e[n].call(this, e) : t.call(this, e), this.scanner.eof || this.eat(Wf), {
      type: "Function",
      loc: this.getLocation(r, this.scanner.tokenStart),
      name: a,
      children: i
    };
  },
  generate: function(t) {
    this.chunk(t.name), this.chunk("("), this.children(t), this.chunk(")");
  },
  walkContext: "function"
}, If = T.TYPE, Bf = If.Hash, Rf = {
  name: "Hash",
  structure: {
    value: String
  },
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.eat(Bf), {
      type: "Hash",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(t + 1)
    };
  },
  generate: function(t) {
    this.chunk("#"), this.chunk(t.value);
  }
}, Mf = T.TYPE, qf = Mf.Ident, Df = {
  name: "Identifier",
  structure: {
    name: String
  },
  parse: function() {
    return {
      type: "Identifier",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      name: this.consume(qf)
    };
  },
  generate: function(t) {
    this.chunk(t.name);
  }
}, Nf = T.TYPE, $f = Nf.Hash, Ff = {
  name: "IdSelector",
  structure: {
    name: String
  },
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.eat($f), {
      type: "IdSelector",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(t + 1)
    };
  },
  generate: function(t) {
    this.chunk("#"), this.chunk(t.name);
  }
}, Ae = T.TYPE, Xi = Ae.Ident, Gf = Ae.Number, Vf = Ae.Dimension, Hf = Ae.LeftParenthesis, Ji = Ae.RightParenthesis, Uf = Ae.Colon, Yf = Ae.Delim, Kf = {
  name: "MediaFeature",
  structure: {
    name: String,
    value: ["Identifier", "Number", "Dimension", "Ratio", null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e, r = null;
    if (this.eat(Hf), this.scanner.skipSC(), e = this.consume(Xi), this.scanner.skipSC(), this.scanner.tokenType !== Ji) {
      switch (this.eat(Uf), this.scanner.skipSC(), this.scanner.tokenType) {
        case Gf:
          this.lookupNonWSType(1) === Yf ? r = this.Ratio() : r = this.Number();
          break;
        case Vf:
          r = this.Dimension();
          break;
        case Xi:
          r = this.Identifier();
          break;
        default:
          this.error("Number, dimension, ratio or identifier is expected");
      }
      this.scanner.skipSC();
    }
    return this.eat(Ji), {
      type: "MediaFeature",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: e,
      value: r
    };
  },
  generate: function(t) {
    this.chunk("("), this.chunk(t.name), t.value !== null && (this.chunk(":"), this.node(t.value)), this.chunk(")");
  }
}, Sr = T.TYPE, Zf = Sr.WhiteSpace, Qf = Sr.Comment, Xf = Sr.Ident, Jf = Sr.LeftParenthesis, ey = {
  name: "MediaQuery",
  structure: {
    children: [[
      "Identifier",
      "MediaFeature",
      "WhiteSpace"
    ]]
  },
  parse: function() {
    this.scanner.skipSC();
    var t = this.createList(), e = null, r = null;
    e:
      for (; !this.scanner.eof; ) {
        switch (this.scanner.tokenType) {
          case Qf:
            this.scanner.next();
            continue;
          case Zf:
            r = this.WhiteSpace();
            continue;
          case Xf:
            e = this.Identifier();
            break;
          case Jf:
            e = this.MediaFeature();
            break;
          default:
            break e;
        }
        r !== null && (t.push(r), r = null), t.push(e);
      }
    return e === null && this.error("Identifier or parenthesis is expected"), {
      type: "MediaQuery",
      loc: this.getLocationFromList(t),
      children: t
    };
  },
  generate: function(t) {
    this.children(t);
  }
}, ty = T.TYPE.Comma, ry = {
  name: "MediaQueryList",
  structure: {
    children: [[
      "MediaQuery"
    ]]
  },
  parse: function(t) {
    var e = this.createList();
    for (this.scanner.skipSC(); !this.scanner.eof && (e.push(this.MediaQuery(t)), this.scanner.tokenType === ty); )
      this.scanner.next();
    return {
      type: "MediaQueryList",
      loc: this.getLocationFromList(e),
      children: e
    };
  },
  generate: function(t) {
    this.children(t, function() {
      this.chunk(",");
    });
  }
}, ay = {
  name: "Nth",
  structure: {
    nth: ["AnPlusB", "Identifier"],
    selector: ["SelectorList", null]
  },
  parse: function(t) {
    this.scanner.skipSC();
    var e = this.scanner.tokenStart, r = e, a = null, n;
    return this.scanner.lookupValue(0, "odd") || this.scanner.lookupValue(0, "even") ? n = this.Identifier() : n = this.AnPlusB(), this.scanner.skipSC(), t && this.scanner.lookupValue(0, "of") ? (this.scanner.next(), a = this.SelectorList(), this.needPositions && (r = this.getLastListNode(a.children).loc.end.offset)) : this.needPositions && (r = n.loc.end.offset), {
      type: "Nth",
      loc: this.getLocation(e, r),
      nth: n,
      selector: a
    };
  },
  generate: function(t) {
    this.node(t.nth), t.selector !== null && (this.chunk(" of "), this.node(t.selector));
  }
}, ny = T.TYPE.Number, iy = {
  name: "Number",
  structure: {
    value: String
  },
  parse: function() {
    return {
      type: "Number",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      value: this.consume(ny)
    };
  },
  generate: function(t) {
    this.chunk(t.value);
  }
}, sy = {
  name: "Operator",
  structure: {
    value: String
  },
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.scanner.next(), {
      type: "Operator",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(t)
    };
  },
  generate: function(t) {
    this.chunk(t.value);
  }
}, Bl = T.TYPE, oy = Bl.LeftParenthesis, ly = Bl.RightParenthesis, dy = {
  name: "Parentheses",
  structure: {
    children: [[]]
  },
  parse: function(t, e) {
    var r = this.scanner.tokenStart, a = null;
    return this.eat(oy), a = t.call(this, e), this.scanner.eof || this.eat(ly), {
      type: "Parentheses",
      loc: this.getLocation(r, this.scanner.tokenStart),
      children: a
    };
  },
  generate: function(t) {
    this.chunk("("), this.children(t), this.chunk(")");
  }
}, py = St.consumeNumber, cy = T.TYPE, uy = cy.Percentage, my = {
  name: "Percentage",
  structure: {
    value: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = py(this.scanner.source, t);
    return this.eat(uy), {
      type: "Percentage",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.source.substring(t, e)
    };
  },
  generate: function(t) {
    this.chunk(t.value), this.chunk("%");
  }
}, xr = T.TYPE, hy = xr.Ident, gy = xr.Function, fy = xr.Colon, yy = xr.RightParenthesis, vy = {
  name: "PseudoClassSelector",
  structure: {
    name: String,
    children: [["Raw"], null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = null, r, a;
    return this.eat(fy), this.scanner.tokenType === gy ? (r = this.consumeFunctionName(), a = r.toLowerCase(), this.pseudo.hasOwnProperty(a) ? (this.scanner.skipSC(), e = this.pseudo[a].call(this), this.scanner.skipSC()) : (e = this.createList(), e.push(
      this.Raw(this.scanner.tokenIndex, null, !1)
    )), this.eat(yy)) : r = this.consume(hy), {
      type: "PseudoClassSelector",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: r,
      children: e
    };
  },
  generate: function(t) {
    this.chunk(":"), this.chunk(t.name), t.children !== null && (this.chunk("("), this.children(t), this.chunk(")"));
  },
  walkContext: "function"
}, wr = T.TYPE, by = wr.Ident, Sy = wr.Function, es = wr.Colon, xy = wr.RightParenthesis, wy = {
  name: "PseudoElementSelector",
  structure: {
    name: String,
    children: [["Raw"], null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = null, r, a;
    return this.eat(es), this.eat(es), this.scanner.tokenType === Sy ? (r = this.consumeFunctionName(), a = r.toLowerCase(), this.pseudo.hasOwnProperty(a) ? (this.scanner.skipSC(), e = this.pseudo[a].call(this), this.scanner.skipSC()) : (e = this.createList(), e.push(
      this.Raw(this.scanner.tokenIndex, null, !1)
    )), this.eat(xy)) : r = this.consume(by), {
      type: "PseudoElementSelector",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: r,
      children: e
    };
  },
  generate: function(t) {
    this.chunk("::"), this.chunk(t.name), t.children !== null && (this.chunk("("), this.children(t), this.chunk(")"));
  },
  walkContext: "function"
}, Cy = T.isDigit, Rl = T.TYPE, ky = Rl.Number, Ty = Rl.Delim, Ey = 47, _y = 46;
function ts() {
  this.scanner.skipWS();
  for (var t = this.consume(ky), e = 0; e < t.length; e++) {
    var r = t.charCodeAt(e);
    !Cy(r) && r !== _y && this.error("Unsigned number is expected", this.scanner.tokenStart - t.length + e);
  }
  return Number(t) === 0 && this.error("Zero number is not allowed", this.scanner.tokenStart - t.length), t;
}
var Ay = {
  name: "Ratio",
  structure: {
    left: String,
    right: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = ts.call(this), r;
    return this.scanner.skipWS(), this.scanner.isDelim(Ey) || this.error("Solidus is expected"), this.eat(Ty), r = ts.call(this), {
      type: "Ratio",
      loc: this.getLocation(t, this.scanner.tokenStart),
      left: e,
      right: r
    };
  },
  generate: function(t) {
    this.chunk(t.left), this.chunk("/"), this.chunk(t.right);
  }
}, Oy = T.TYPE, zy = _e.mode, jy = Oy.LeftCurlyBracket;
function rs(t) {
  return this.Raw(t, zy.leftCurlyBracket, !0);
}
function Ly() {
  var t = this.SelectorList();
  return t.type !== "Raw" && this.scanner.eof === !1 && this.scanner.tokenType !== jy && this.error(), t;
}
var Wy = {
  name: "Rule",
  structure: {
    prelude: ["SelectorList", "Raw"],
    block: ["Block"]
  },
  parse: function() {
    var t = this.scanner.tokenIndex, e = this.scanner.tokenStart, r, a;
    return this.parseRulePrelude ? r = this.parseWithFallback(Ly, rs) : r = rs.call(this, t), a = this.Block(!0), {
      type: "Rule",
      loc: this.getLocation(e, this.scanner.tokenStart),
      prelude: r,
      block: a
    };
  },
  generate: function(t) {
    this.node(t.prelude), this.node(t.block);
  },
  walkContext: "rule"
}, Py = {
  name: "Selector",
  structure: {
    children: [[
      "TypeSelector",
      "IdSelector",
      "ClassSelector",
      "AttributeSelector",
      "PseudoClassSelector",
      "PseudoElementSelector",
      "Combinator",
      "WhiteSpace"
    ]]
  },
  parse: function() {
    var t = this.readSequence(this.scope.Selector);
    return this.getFirstListNode(t) === null && this.error("Selector is expected"), {
      type: "Selector",
      loc: this.getLocationFromList(t),
      children: t
    };
  },
  generate: function(t) {
    this.children(t);
  }
}, Iy = T.TYPE, By = Iy.Comma, Ry = {
  name: "SelectorList",
  structure: {
    children: [[
      "Selector",
      "Raw"
    ]]
  },
  parse: function() {
    for (var t = this.createList(); !this.scanner.eof; ) {
      if (t.push(this.Selector()), this.scanner.tokenType === By) {
        this.scanner.next();
        continue;
      }
      break;
    }
    return {
      type: "SelectorList",
      loc: this.getLocationFromList(t),
      children: t
    };
  },
  generate: function(t) {
    this.children(t, function() {
      this.chunk(",");
    });
  },
  walkContext: "selector"
}, My = T.TYPE.String, qy = {
  name: "String",
  structure: {
    value: String
  },
  parse: function() {
    return {
      type: "String",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      value: this.consume(My)
    };
  },
  generate: function(t) {
    this.chunk(t.value);
  }
}, Ct = T.TYPE, Dy = Ct.WhiteSpace, Ny = Ct.Comment, $y = Ct.AtKeyword, Fy = Ct.CDO, Gy = Ct.CDC, Vy = 33;
function as(t) {
  return this.Raw(t, null, !1);
}
var Hy = {
  name: "StyleSheet",
  structure: {
    children: [[
      "Comment",
      "CDO",
      "CDC",
      "Atrule",
      "Rule",
      "Raw"
    ]]
  },
  parse: function() {
    for (var t = this.scanner.tokenStart, e = this.createList(), r; !this.scanner.eof; ) {
      switch (this.scanner.tokenType) {
        case Dy:
          this.scanner.next();
          continue;
        case Ny:
          if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== Vy) {
            this.scanner.next();
            continue;
          }
          r = this.Comment();
          break;
        case Fy:
          r = this.CDO();
          break;
        case Gy:
          r = this.CDC();
          break;
        case $y:
          r = this.parseWithFallback(this.Atrule, as);
          break;
        default:
          r = this.parseWithFallback(this.Rule, as);
      }
      e.push(r);
    }
    return {
      type: "StyleSheet",
      loc: this.getLocation(t, this.scanner.tokenStart),
      children: e
    };
  },
  generate: function(t) {
    this.children(t);
  },
  walkContext: "stylesheet"
}, Uy = T.TYPE, Yy = Uy.Ident, Ky = 42, ns = 124;
function ea() {
  this.scanner.tokenType !== Yy && this.scanner.isDelim(Ky) === !1 && this.error("Identifier or asterisk is expected"), this.scanner.next();
}
var Zy = {
  name: "TypeSelector",
  structure: {
    name: String
  },
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.scanner.isDelim(ns) ? (this.scanner.next(), ea.call(this)) : (ea.call(this), this.scanner.isDelim(ns) && (this.scanner.next(), ea.call(this))), {
      type: "TypeSelector",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(t)
    };
  },
  generate: function(t) {
    this.chunk(t.name);
  }
}, Qy = T.isHexDigit, is = T.cmpChar, Tn = T.TYPE, Xy = T.NAME, Jy = Tn.Ident, ss = Tn.Number, os = Tn.Dimension, Ht = 43, Ml = 45, Ha = 63, ev = 117;
function lt(t, e) {
  for (var r = this.scanner.tokenStart + t, a = 0; r < this.scanner.tokenEnd; r++) {
    var n = this.scanner.source.charCodeAt(r);
    if (n === Ml && e && a !== 0)
      return lt.call(this, t + a + 1, !1) === 0 && this.error(), -1;
    Qy(n) || this.error(
      e && a !== 0 ? "HyphenMinus" + (a < 6 ? " or hex digit" : "") + " is expected" : a < 6 ? "Hex digit is expected" : "Unexpected input",
      r
    ), ++a > 6 && this.error("Too many hex digits", r);
  }
  return this.scanner.next(), a;
}
function Mt(t) {
  for (var e = 0; this.scanner.isDelim(Ha); )
    ++e > t && this.error("Too many question marks"), this.scanner.next();
}
function ta(t) {
  this.scanner.source.charCodeAt(this.scanner.tokenStart) !== t && this.error(Xy[t] + " is expected");
}
function tv() {
  var t = 0;
  if (this.scanner.isDelim(Ht)) {
    if (this.scanner.next(), this.scanner.tokenType === Jy) {
      t = lt.call(this, 0, !0), t > 0 && Mt.call(this, 6 - t);
      return;
    }
    if (this.scanner.isDelim(Ha)) {
      this.scanner.next(), Mt.call(this, 5);
      return;
    }
    this.error("Hex digit or question mark is expected");
    return;
  }
  if (this.scanner.tokenType === ss) {
    if (ta.call(this, Ht), t = lt.call(this, 1, !0), this.scanner.isDelim(Ha)) {
      Mt.call(this, 6 - t);
      return;
    }
    if (this.scanner.tokenType === os || this.scanner.tokenType === ss) {
      ta.call(this, Ml), lt.call(this, 1, !1);
      return;
    }
    return;
  }
  if (this.scanner.tokenType === os) {
    ta.call(this, Ht), t = lt.call(this, 1, !0), t > 0 && Mt.call(this, 6 - t);
    return;
  }
  this.error();
}
var rv = {
  name: "UnicodeRange",
  structure: {
    value: String
  },
  parse: function() {
    var t = this.scanner.tokenStart;
    return is(this.scanner.source, t, ev) || this.error("U is expected"), is(this.scanner.source, t + 1, Ht) || this.error("Plus sign is expected"), this.scanner.next(), tv.call(this), {
      type: "UnicodeRange",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(t)
    };
  },
  generate: function(t) {
    this.chunk(t.value);
  }
}, ls = T.isWhiteSpace, av = T.cmpStr, En = T.TYPE, ds = En.Function, ps = En.Url, nv = En.RightParenthesis, iv = {
  name: "Url",
  structure: {
    value: ["String", "Raw"]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e;
    switch (this.scanner.tokenType) {
      case ps:
        for (var r = t + 4, a = this.scanner.tokenEnd - 1; r < a && ls(this.scanner.source.charCodeAt(r)); )
          r++;
        for (; r < a && ls(this.scanner.source.charCodeAt(a - 1)); )
          a--;
        e = {
          type: "Raw",
          loc: this.getLocation(r, a),
          value: this.scanner.source.substring(r, a)
        }, this.eat(ps);
        break;
      case ds:
        av(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat(ds), this.scanner.skipSC(), e = this.String(), this.scanner.skipSC(), this.eat(nv);
        break;
      default:
        this.error("Url or Function is expected");
    }
    return {
      type: "Url",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: e
    };
  },
  generate: function(t) {
    this.chunk("url"), this.chunk("("), this.node(t.value), this.chunk(")");
  }
}, sv = {
  name: "Value",
  structure: {
    children: [[]]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = this.readSequence(this.scope.Value);
    return {
      type: "Value",
      loc: this.getLocation(t, this.scanner.tokenStart),
      children: e
    };
  },
  generate: function(t) {
    this.children(t);
  }
}, ov = T.TYPE.WhiteSpace, lv = Object.freeze({
  type: "WhiteSpace",
  loc: null,
  value: " "
}), dv = {
  name: "WhiteSpace",
  structure: {
    value: String
  },
  parse: function() {
    return this.eat(ov), lv;
  },
  generate: function(t) {
    this.chunk(t.value);
  }
}, _n = {
  AnPlusB: ig,
  Atrule: vg,
  AtrulePrelude: xg,
  AttributeSelector: zg,
  Block: Mg,
  Brackets: Ng,
  CDC: Fg,
  CDO: Vg,
  ClassSelector: Kg,
  Combinator: tf,
  Comment: of,
  Declaration: bf,
  DeclarationList: _f,
  Dimension: jf,
  Function: Pf,
  Hash: Rf,
  Identifier: Df,
  IdSelector: Ff,
  MediaFeature: Kf,
  MediaQuery: ey,
  MediaQueryList: ry,
  Nth: ay,
  Number: iy,
  Operator: sy,
  Parentheses: dy,
  Percentage: my,
  PseudoClassSelector: vy,
  PseudoElementSelector: wy,
  Ratio: Ay,
  Raw: _e,
  Rule: Wy,
  Selector: Py,
  SelectorList: Ry,
  String: qy,
  StyleSheet: Hy,
  TypeSelector: Zy,
  UnicodeRange: rv,
  Url: iv,
  Value: sv,
  WhiteSpace: dv
}, ra = rg, pv = {
  generic: !0,
  types: ra.types,
  atrules: ra.atrules,
  properties: ra.properties,
  node: _n
}, cs = T.cmpChar, cv = T.cmpStr, ae = T.TYPE, uv = ae.Ident, mv = ae.String, hv = ae.Number, gv = ae.Function, fv = ae.Url, yv = ae.Hash, vv = ae.Dimension, bv = ae.Percentage, Sv = ae.LeftParenthesis, xv = ae.LeftSquareBracket, wv = ae.Comma, Cv = ae.Delim, kv = 35, Tv = 42, us = 43, Ev = 45, _v = 47, Av = 117, ql = function(e) {
  switch (this.scanner.tokenType) {
    case yv:
      return this.Hash();
    case wv:
      return e.space = null, e.ignoreWSAfter = !0, this.Operator();
    case Sv:
      return this.Parentheses(this.readSequence, e.recognizer);
    case xv:
      return this.Brackets(this.readSequence, e.recognizer);
    case mv:
      return this.String();
    case vv:
      return this.Dimension();
    case bv:
      return this.Percentage();
    case hv:
      return this.Number();
    case gv:
      return cv(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
    case fv:
      return this.Url();
    case uv:
      return cs(this.scanner.source, this.scanner.tokenStart, Av) && cs(this.scanner.source, this.scanner.tokenStart + 1, us) ? this.UnicodeRange() : this.Identifier();
    case Cv:
      var r = this.scanner.source.charCodeAt(this.scanner.tokenStart);
      if (r === _v || r === Tv || r === us || r === Ev)
        return this.Operator();
      r === kv && this.error("Hex or identifier is expected", this.scanner.tokenStart + 1);
      break;
  }
}, Ov = {
  getNode: ql
}, we = T.TYPE, zv = we.Delim, jv = we.Ident, Lv = we.Dimension, Wv = we.Percentage, Pv = we.Number, Iv = we.Hash, ms = we.Colon, Bv = we.LeftSquareBracket, Rv = 35, Mv = 42, qv = 43, Dv = 47, hs = 46, Nv = 62, $v = 124, Fv = 126;
function Gv(t) {
  switch (this.scanner.tokenType) {
    case Bv:
      return this.AttributeSelector();
    case Iv:
      return this.IdSelector();
    case ms:
      return this.scanner.lookupType(1) === ms ? this.PseudoElementSelector() : this.PseudoClassSelector();
    case jv:
      return this.TypeSelector();
    case Pv:
    case Wv:
      return this.Percentage();
    case Lv:
      this.scanner.source.charCodeAt(this.scanner.tokenStart) === hs && this.error("Identifier is expected", this.scanner.tokenStart + 1);
      break;
    case zv:
      var e = this.scanner.source.charCodeAt(this.scanner.tokenStart);
      switch (e) {
        case qv:
        case Nv:
        case Fv:
          return t.space = null, t.ignoreWSAfter = !0, this.Combinator();
        case Dv:
          return this.Combinator();
        case hs:
          return this.ClassSelector();
        case Mv:
        case $v:
          return this.TypeSelector();
        case Rv:
          return this.IdSelector();
      }
      break;
  }
}
var Vv = {
  getNode: Gv
}, Hv = function() {
  return this.createSingleNodeList(
    this.Raw(this.scanner.tokenIndex, null, !1)
  );
}, Dl = T.TYPE, Uv = _e.mode, Yv = Dl.Comma, Kv = Dl.WhiteSpace, Zv = function() {
  var t = this.createList();
  if (this.scanner.skipSC(), t.push(this.Identifier()), this.scanner.skipSC(), this.scanner.tokenType === Yv) {
    t.push(this.Operator());
    const e = this.scanner.tokenIndex, r = this.parseCustomProperty ? this.Value(null) : this.Raw(this.scanner.tokenIndex, Uv.exclamationMarkOrSemicolon, !1);
    if (r.type === "Value" && r.children.isEmpty()) {
      for (let a = e - this.scanner.tokenIndex; a <= 0; a++)
        if (this.scanner.lookupType(a) === Kv) {
          r.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
    }
    t.push(r);
  }
  return t;
}, Qv = {
  getNode: ql,
  expression: Hv,
  var: Zv
}, Xv = {
  AtrulePrelude: Ov,
  Selector: Vv,
  Value: Qv
}, Jv = {
  parse: {
    prelude: null,
    block: function() {
      return this.Block(!0);
    }
  }
}, kt = T.TYPE, eb = kt.String, tb = kt.Ident, rb = kt.Url, ab = kt.Function, nb = kt.LeftParenthesis, ib = {
  parse: {
    prelude: function() {
      var t = this.createList();
      switch (this.scanner.skipSC(), this.scanner.tokenType) {
        case eb:
          t.push(this.String());
          break;
        case rb:
        case ab:
          t.push(this.Url());
          break;
        default:
          this.error("String or url() is expected");
      }
      return (this.lookupNonWSType(0) === tb || this.lookupNonWSType(0) === nb) && (t.push(this.WhiteSpace()), t.push(this.MediaQueryList())), t;
    },
    block: null
  }
}, sb = {
  parse: {
    prelude: function() {
      return this.createSingleNodeList(
        this.MediaQueryList()
      );
    },
    block: function() {
      return this.Block(!1);
    }
  }
}, ob = {
  parse: {
    prelude: function() {
      return this.createSingleNodeList(
        this.SelectorList()
      );
    },
    block: function() {
      return this.Block(!0);
    }
  }
}, Ke = T.TYPE, lb = Ke.WhiteSpace, db = Ke.Comment, Nl = Ke.Ident, pb = Ke.Function, cb = Ke.Colon, ub = Ke.LeftParenthesis;
function mb() {
  return this.createSingleNodeList(
    this.Raw(this.scanner.tokenIndex, null, !1)
  );
}
function hb() {
  return this.scanner.skipSC(), this.scanner.tokenType === Nl && this.lookupNonWSType(1) === cb ? this.createSingleNodeList(
    this.Declaration()
  ) : $l.call(this);
}
function $l() {
  var t = this.createList(), e = null, r;
  this.scanner.skipSC();
  e:
    for (; !this.scanner.eof; ) {
      switch (this.scanner.tokenType) {
        case lb:
          e = this.WhiteSpace();
          continue;
        case db:
          this.scanner.next();
          continue;
        case pb:
          r = this.Function(mb, this.scope.AtrulePrelude);
          break;
        case Nl:
          r = this.Identifier();
          break;
        case ub:
          r = this.Parentheses(hb, this.scope.AtrulePrelude);
          break;
        default:
          break e;
      }
      e !== null && (t.push(e), e = null), t.push(r);
    }
  return t;
}
var gb = {
  parse: {
    prelude: function() {
      var t = $l.call(this);
      return this.getFirstListNode(t) === null && this.error("Condition is expected"), t;
    },
    block: function() {
      return this.Block(!1);
    }
  }
}, fb = {
  "font-face": Jv,
  import: ib,
  media: sb,
  page: ob,
  supports: gb
}, yb = {
  parse: function() {
    return this.createSingleNodeList(
      this.Identifier()
    );
  }
}, vb = {
  parse: function() {
    return this.createSingleNodeList(
      this.SelectorList()
    );
  }
}, bb = {
  parse: function() {
    return this.createSingleNodeList(
      this.Identifier()
    );
  }
}, Fl = {
  parse: function() {
    return this.createSingleNodeList(
      this.SelectorList()
    );
  }
}, Sb = Fl, xb = Fl, wb = !0, Gl = {
  parse: function() {
    return this.createSingleNodeList(
      this.Nth(wb)
    );
  }
}, Cb = Gl, kb = Gl, Tb = !1, Vl = {
  parse: function() {
    return this.createSingleNodeList(
      this.Nth(Tb)
    );
  }
}, Eb = Vl, _b = Vl, Ab = {
  parse: function() {
    return this.createSingleNodeList(
      this.Selector()
    );
  }
}, Ob = {
  dir: yb,
  has: vb,
  lang: bb,
  matches: Sb,
  not: xb,
  "nth-child": Cb,
  "nth-last-child": kb,
  "nth-last-of-type": Eb,
  "nth-of-type": _b,
  slotted: Ab
}, zb = {
  parseContext: {
    default: "StyleSheet",
    stylesheet: "StyleSheet",
    atrule: "Atrule",
    atrulePrelude: function(t) {
      return this.AtrulePrelude(t.atrule ? String(t.atrule) : null);
    },
    mediaQueryList: "MediaQueryList",
    mediaQuery: "MediaQuery",
    rule: "Rule",
    selectorList: "SelectorList",
    selector: "Selector",
    block: function() {
      return this.Block(!0);
    },
    declarationList: "DeclarationList",
    declaration: "Declaration",
    value: "Value"
  },
  scope: Xv,
  atrule: fb,
  pseudo: Ob,
  node: _n
}, jb = {
  node: _n
};
const Lb = "css-tree", Wb = "1.1.3", Pb = "A tool set for CSS: fast detailed parser (CSS → AST), walker (AST traversal), generator (AST → CSS) and lexer (validation and matching) based on specs and browser implementations", Ib = "Roman Dvornov <rdvornov@gmail.com> (https://github.com/lahmatiy)", Bb = "MIT", Rb = "csstree/csstree", Mb = [
  "css",
  "ast",
  "tokenizer",
  "parser",
  "walker",
  "lexer",
  "generator",
  "utils",
  "syntax",
  "validation"
], qb = "lib/index.js", Db = "dist/csstree.min.js", Nb = "dist/csstree.min.js", $b = {
  build: "rollup --config",
  lint: "eslint data lib scripts test && node scripts/review-syntax-patch --lint && node scripts/update-docs --lint",
  "lint-and-test": "npm run lint && npm test",
  "update:docs": "node scripts/update-docs",
  "review:syntax-patch": "node scripts/review-syntax-patch",
  test: "mocha --reporter progress",
  coverage: "nyc npm test",
  travis: "nyc npm run lint-and-test && npm run coveralls",
  coveralls: "nyc report --reporter=text-lcov | coveralls",
  prepublishOnly: "npm run build",
  hydrogen: "node --trace-hydrogen --trace-phase=Z --trace-deopt --code-comments --hydrogen-track-positions --redirect-code-traces --redirect-code-traces-to=code.asm --trace_hydrogen_file=code.cfg --print-opt-code bin/parse --stat -o /dev/null"
}, Fb = {
  "mdn-data": "2.0.14",
  "source-map": "^0.6.1"
}, Gb = {
  "@rollup/plugin-commonjs": "^11.0.2",
  "@rollup/plugin-json": "^4.0.2",
  "@rollup/plugin-node-resolve": "^7.1.1",
  coveralls: "^3.0.9",
  eslint: "^6.8.0",
  "json-to-ast": "^2.1.0",
  mocha: "^6.2.3",
  nyc: "^14.1.1",
  rollup: "^1.32.1",
  "rollup-plugin-terser": "^5.3.0"
}, Vb = {
  node: ">=8.0.0"
}, Hb = [
  "data",
  "dist",
  "lib"
], Ub = {
  name: Lb,
  version: Wb,
  description: Pb,
  author: Ib,
  license: Bb,
  repository: Rb,
  keywords: Mb,
  main: qb,
  unpkg: Db,
  jsdelivr: Nb,
  scripts: $b,
  dependencies: Fb,
  devDependencies: Gb,
  engines: Vb,
  files: Hb
};
function Yb() {
  for (var t = {}, e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    for (var a in r)
      t[a] = r[a];
  }
  return t;
}
Za.exports = go.create(
  Yb(
    pv,
    zb,
    jb
  )
);
Za.exports.version = Ub.version;
var Kb = Za.exports, Zb = Kb;
const C = /* @__PURE__ */ or(Zb);
let Qb = class {
  constructor(e, r) {
    r ? this.hooks = r : (this.hooks = {}, this.hooks.onUrl = new z(this), this.hooks.onAtPage = new z(this), this.hooks.onAtMedia = new z(this), this.hooks.onRule = new z(this), this.hooks.onDeclaration = new z(this), this.hooks.onSelector = new z(this), this.hooks.onPseudoSelector = new z(this), this.hooks.onContent = new z(this), this.hooks.onImport = new z(this), this.hooks.beforeTreeParse = new z(this), this.hooks.beforeTreeWalk = new z(this), this.hooks.afterTreeWalk = new z(this));
    try {
      this.url = new URL(e, window.location.href);
    } catch {
      this.url = new URL(window.location.href);
    }
  }
  // parse
  async parse(e) {
    return this.text = e, await this.hooks.beforeTreeParse.trigger(this.text, this), this.ast = C.parse(this._text), await this.hooks.beforeTreeWalk.trigger(this.ast), this.replaceUrls(this.ast), this.id = ue(), this.replaceIds(this.ast), this.imported = [], this.urls(this.ast), this.rules(this.ast), this.atrules(this.ast), await this.hooks.afterTreeWalk.trigger(this.ast, this), this.ast;
  }
  insertRule(e) {
    let r = this.ast.children.appendData(e);
    return this.declarations(e), r;
  }
  urls(e) {
    C.walk(e, {
      visit: "Url",
      enter: (r, a, n) => {
        this.hooks.onUrl.trigger(r, a, n);
      }
    });
  }
  atrules(e) {
    C.walk(e, {
      visit: "Atrule",
      enter: (r, a, n) => {
        const i = C.keyword(r.name).basename;
        i === "page" && (this.hooks.onAtPage.trigger(r, a, n), this.declarations(r, a, n)), i === "media" && (this.hooks.onAtMedia.trigger(r, a, n), this.declarations(r, a, n)), i === "import" && (this.hooks.onImport.trigger(r, a, n), this.imports(r, a, n));
      }
    });
  }
  rules(e) {
    C.walk(e, {
      visit: "Rule",
      enter: (r, a, n) => {
        this.hooks.onRule.trigger(r, a, n), this.declarations(r, a, n), this.onSelector(r, a, n);
      }
    });
  }
  declarations(e, r, a) {
    C.walk(e, {
      visit: "Declaration",
      enter: (n, i, s) => {
        this.hooks.onDeclaration.trigger(n, i, s, { ruleNode: e, ruleItem: r, rulelist: a }), n.property === "content" && C.walk(n, {
          visit: "Function",
          enter: (o, l, p) => {
            this.hooks.onContent.trigger(o, l, p, { declarationNode: n, dItem: i, dList: s }, { ruleNode: e, ruleItem: r, rulelist: a });
          }
        });
      }
    });
  }
  // add pseudo elements to parser
  onSelector(e, r, a) {
    C.walk(e, {
      visit: "Selector",
      enter: (n, i, s) => {
        this.hooks.onSelector.trigger(n, i, s, { ruleNode: e, ruleItem: r, rulelist: a }), n.children.forEach((o) => {
          o.type === "PseudoElementSelector" && C.walk(o, {
            visit: "PseudoElementSelector",
            enter: (l, p, c) => {
              this.hooks.onPseudoSelector.trigger(l, p, c, { selectNode: n, selectItem: i, selectList: s }, { ruleNode: e, ruleItem: r, rulelist: a });
            }
          });
        });
      }
    });
  }
  replaceUrls(e) {
    C.walk(e, {
      visit: "Url",
      enter: (r, a, n) => {
        let i = r.value.value;
        if (!(r.value.type === "Raw" && i.startsWith("data:") || r.value.type === "String" && (i.startsWith('"data:') || i.startsWith("'data:")))) {
          let s = i.replace(/["']/g, ""), o = new URL(s, this.url);
          r.value.value = o.toString();
        }
      }
    });
  }
  addScope(e, r) {
    C.walk(e, {
      visit: "Selector",
      enter: (a, n, i) => {
        let s = a.children;
        s.prepend(s.createItem({
          type: "WhiteSpace",
          value: " "
        })), s.prepend(s.createItem({
          type: "IdSelector",
          name: r,
          loc: null,
          children: null
        }));
      }
    });
  }
  getNamedPageSelectors(e) {
    let r = {};
    return C.walk(e, {
      visit: "Rule",
      enter: (a, n, i) => {
        C.walk(a, {
          visit: "Declaration",
          enter: (s, o, l) => {
            if (s.property === "page") {
              let p = s.value.children.first(), c = p.name, m = C.generate(a.prelude);
              r[c] = {
                name: c,
                selector: m
              }, s.property = "break-before", p.type = "Identifier", p.name = "always";
            }
          }
        });
      }
    }), r;
  }
  replaceIds(e) {
    C.walk(e, {
      visit: "Rule",
      enter: (r, a, n) => {
        C.walk(r, {
          visit: "IdSelector",
          enter: (i, s, o) => {
            let l = i.name;
            i.flags = null, i.matcher = "=", i.name = { type: "Identifier", loc: null, name: "data-id" }, i.type = "AttributeSelector", i.value = { type: "String", loc: null, value: `"${l}"` };
          }
        });
      }
    });
  }
  imports(e, r, a) {
    let n = [];
    C.walk(e, {
      visit: "MediaQuery",
      enter: (s, o, l) => {
        C.walk(s, {
          visit: "Identifier",
          enter: (p, c, m) => {
            n.push(p.name);
          }
        });
      }
    }), !n.some((s, o) => {
      let l = s;
      return l === "not" ? (l = n[o + 1], !(l === "screen" || l === "speech")) : l === "screen" || l === "speech";
    }) && C.walk(e, {
      visit: "String",
      enter: (s, o, l) => {
        let p = s.value.replace(/["']/g, ""), m = new URL(p, this.url).toString();
        this.imported.push(m), a.remove(r);
      }
    });
  }
  set text(e) {
    this._text = e;
  }
  get text() {
    return this._text;
  }
  // generate string
  toString(e) {
    return C.generate(e || this.ast);
  }
};
const Xb = `
:root {
	--pagedjs-width: 8.5in;
	--pagedjs-height: 11in;
	--pagedjs-width-right: 8.5in;
	--pagedjs-height-right: 11in;
	--pagedjs-width-left: 8.5in;
	--pagedjs-height-left: 11in;
	--pagedjs-pagebox-width: 8.5in;
	--pagedjs-pagebox-height: 11in;
	--pagedjs-footnotes-height: 0mm;
	--pagedjs-margin-top: 1in;
	--pagedjs-margin-right: 1in;
	--pagedjs-margin-bottom: 1in;
	--pagedjs-margin-left: 1in;
	--pagedjs-padding-top: 0mm;
	--pagedjs-padding-right: 0mm;
	--pagedjs-padding-bottom: 0mm;
	--pagedjs-padding-left: 0mm;
	--pagedjs-border-top: 0mm;
	--pagedjs-border-right: 0mm;
	--pagedjs-border-bottom: 0mm;
	--pagedjs-border-left: 0mm;
	--pagedjs-bleed-top: 0mm;
	--pagedjs-bleed-right: 0mm;
	--pagedjs-bleed-bottom: 0mm;
	--pagedjs-bleed-left: 0mm;
	--pagedjs-bleed-right-top: 0mm;
	--pagedjs-bleed-right-right: 0mm;
	--pagedjs-bleed-right-bottom: 0mm;
	--pagedjs-bleed-right-left: 0mm;
	--pagedjs-bleed-left-top: 0mm;
	--pagedjs-bleed-left-right: 0mm;
	--pagedjs-bleed-left-bottom: 0mm;
	--pagedjs-bleed-left-left: 0mm;
	--pagedjs-crop-color: black;
	--pagedjs-crop-shadow: white;
	--pagedjs-crop-offset: 2mm;
	--pagedjs-crop-stroke: 1px;
	--pagedjs-cross-size: 5mm;
	--pagedjs-mark-cross-display: none;
	--pagedjs-mark-crop-display: none;
	--pagedjs-page-count: 0;
	--pagedjs-page-counter-increment: 1;
	--pagedjs-footnotes-count: 0;
	--pagedjs-column-gap-offset: 1000px;
}

@page {
	size: letter;
	margin: 0;
}

.pagedjs_sheet {
	box-sizing: border-box;
	width: var(--pagedjs-width);
	height: var(--pagedjs-height);
	overflow: hidden;
	position: relative;
	display: grid;
	grid-template-columns: [bleed-left] var(--pagedjs-bleed-left) [sheet-center] calc(var(--pagedjs-width) - var(--pagedjs-bleed-left) - var(--pagedjs-bleed-right)) [bleed-right] var(--pagedjs-bleed-right);
	grid-template-rows: [bleed-top] var(--pagedjs-bleed-top) [sheet-middle] calc(var(--pagedjs-height) - var(--pagedjs-bleed-top) - var(--pagedjs-bleed-bottom)) [bleed-bottom] var(--pagedjs-bleed-bottom);
}

.pagedjs_right_page .pagedjs_sheet {
	width: var(--pagedjs-width-right);
	height: var(--pagedjs-height-right);
	grid-template-columns: [bleed-left] var(--pagedjs-bleed-right-left) [sheet-center] calc(var(--pagedjs-width) - var(--pagedjs-bleed-right-left) - var(--pagedjs-bleed-right-right)) [bleed-right] var(--pagedjs-bleed-right-right);
	grid-template-rows: [bleed-top] var(--pagedjs-bleed-right-top) [sheet-middle] calc(var(--pagedjs-height) - var(--pagedjs-bleed-right-top) - var(--pagedjs-bleed-right-bottom)) [bleed-bottom] var(--pagedjs-bleed-right-bottom);
}

.pagedjs_left_page .pagedjs_sheet {
	width: var(--pagedjs-width-left);
	height: var(--pagedjs-height-left);
	grid-template-columns: [bleed-left] var(--pagedjs-bleed-left-left) [sheet-center] calc(var(--pagedjs-width) - var(--pagedjs-bleed-left-left) - var(--pagedjs-bleed-left-right)) [bleed-right] var(--pagedjs-bleed-left-right);
	grid-template-rows: [bleed-top] var(--pagedjs-bleed-left-top) [sheet-middle] calc(var(--pagedjs-height) - var(--pagedjs-bleed-left-top) - var(--pagedjs-bleed-left-bottom)) [bleed-bottom] var(--pagedjs-bleed-left-bottom);
}

.pagedjs_bleed {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;
	overflow: hidden;
}

.pagedjs_bleed-top {
	grid-column: bleed-left / -1;
	grid-row: bleed-top;
	flex-direction: row;
}

.pagedjs_bleed-bottom {
	grid-column: bleed-left / -1;
	grid-row: bleed-bottom;
	flex-direction: row;
}

.pagedjs_bleed-left {
	grid-column: bleed-left;
	grid-row: bleed-top / -1;
	flex-direction: column;
}

.pagedjs_bleed-right {
	grid-column: bleed-right;
	grid-row: bleed-top / -1;
	flex-direction: column;
}

.pagedjs_marks-crop {
	display: var(--pagedjs-mark-crop-display);
	flex-grow: 0;
	flex-shrink: 0;
	z-index: 9999999999;
}

.pagedjs_bleed-top .pagedjs_marks-crop:nth-child(1),
.pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(1) {
	width: calc(var(--pagedjs-bleed-left) - var(--pagedjs-crop-stroke));
	border-right: var(--pagedjs-crop-stroke) solid var(--pagedjs-crop-color);
	box-shadow: 1px 0px 0px 0px var(--pagedjs-crop-shadow);
}

.pagedjs_right_page .pagedjs_bleed-top .pagedjs_marks-crop:nth-child(1),
.pagedjs_right_page .pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(1) {
	width: calc(var(--pagedjs-bleed-right-left) - var(--pagedjs-crop-stroke));
}

.pagedjs_left_page .pagedjs_bleed-top .pagedjs_marks-crop:nth-child(1),
.pagedjs_left_page .pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(1) {
	width: calc(var(--pagedjs-bleed-left-left) - var(--pagedjs-crop-stroke));
}

.pagedjs_bleed-top .pagedjs_marks-crop:nth-child(3),
.pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(3) {
	width: calc(var(--pagedjs-bleed-right) - var(--pagedjs-crop-stroke));
	border-left: var(--pagedjs-crop-stroke) solid var(--pagedjs-crop-color);
	box-shadow: -1px 0px 0px 0px var(--pagedjs-crop-shadow);
}

.pagedjs_right_page .pagedjs_bleed-top .pagedjs_marks-crop:nth-child(3),
.pagedjs_right_page .pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(3) {
	width: calc(var(--pagedjs-bleed-right-right) - var(--pagedjs-crop-stroke));
}

.pagedjs_left_page .pagedjs_bleed-top .pagedjs_marks-crop:nth-child(3),
.pagedjs_left_page .pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(3) {
	width: calc(var(--pagedjs-bleed-left-right) - var(--pagedjs-crop-stroke));
}

.pagedjs_bleed-top .pagedjs_marks-crop {
	align-self: flex-start;
	height: calc(var(--pagedjs-bleed-top) - var(--pagedjs-crop-offset));
}

.pagedjs_right_page .pagedjs_bleed-top .pagedjs_marks-crop {
	height: calc(var(--pagedjs-bleed-right-top) - var(--pagedjs-crop-offset));
}

.pagedjs_left_page .pagedjs_bleed-top .pagedjs_marks-crop {
	height: calc(var(--pagedjs-bleed-left-top) - var(--pagedjs-crop-offset));
}

.pagedjs_bleed-bottom .pagedjs_marks-crop {
	align-self: flex-end;
	height: calc(var(--pagedjs-bleed-bottom) - var(--pagedjs-crop-offset));
}

.pagedjs_right_page .pagedjs_bleed-bottom .pagedjs_marks-crop {
	height: calc(var(--pagedjs-bleed-right-bottom) - var(--pagedjs-crop-offset));
}

.pagedjs_left_page .pagedjs_bleed-bottom .pagedjs_marks-crop {
	height: calc(var(--pagedjs-bleed-left-bottom) - var(--pagedjs-crop-offset));
}

.pagedjs_bleed-left .pagedjs_marks-crop:nth-child(1),
.pagedjs_bleed-right .pagedjs_marks-crop:nth-child(1) {
	height: calc(var(--pagedjs-bleed-top) - var(--pagedjs-crop-stroke));
	border-bottom: var(--pagedjs-crop-stroke) solid var(--pagedjs-crop-color);
	box-shadow: 0px 1px 0px 0px var(--pagedjs-crop-shadow);
}

.pagedjs_right_page .pagedjs_bleed-left .pagedjs_marks-crop:nth-child(1),
.pagedjs_right_page .pagedjs_bleed-right .pagedjs_marks-crop:nth-child(1) {
	height: calc(var(--pagedjs-bleed-right-top) - var(--pagedjs-crop-stroke));
}

.pagedjs_left_page .pagedjs_bleed-left .pagedjs_marks-crop:nth-child(1),
.pagedjs_left_page .pagedjs_bleed-right .pagedjs_marks-crop:nth-child(1) {
	height: calc(var(--pagedjs-bleed-left-top) - var(--pagedjs-crop-stroke));
}

.pagedjs_bleed-left .pagedjs_marks-crop:nth-child(3),
.pagedjs_bleed-right .pagedjs_marks-crop:nth-child(3) {
	height: calc(var(--pagedjs-bleed-bottom) - var(--pagedjs-crop-stroke));
	border-top: var(--pagedjs-crop-stroke) solid var(--pagedjs-crop-color);
	box-shadow: 0px -1px 0px 0px var(--pagedjs-crop-shadow);
}

.pagedjs_right_page .pagedjs_bleed-left .pagedjs_marks-crop:nth-child(3),
.pagedjs_right_page .pagedjs_bleed-right .pagedjs_marks-crop:nth-child(3) {
	height: calc(var(--pagedjs-bleed-right-bottom) - var(--pagedjs-crop-stroke));
}

.pagedjs_left_page .pagedjs_bleed-left .pagedjs_marks-crop:nth-child(3),
.pagedjs_left_page .pagedjs_bleed-right .pagedjs_marks-crop:nth-child(3) {
	height: calc(var(--pagedjs-bleed-left-bottom) - var(--pagedjs-crop-stroke));
}

.pagedjs_bleed-left .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-left) - var(--pagedjs-crop-offset));
	align-self: flex-start;
}

.pagedjs_right_page .pagedjs_bleed-left .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-right-left) - var(--pagedjs-crop-offset));
}

.pagedjs_left_page .pagedjs_bleed-left .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-left-left) - var(--pagedjs-crop-offset));
}

.pagedjs_bleed-right .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-right) - var(--pagedjs-crop-offset));
	align-self: flex-end;
}

.pagedjs_right_page .pagedjs_bleed-right .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-right-right) - var(--pagedjs-crop-offset));
}

.pagedjs_left_page .pagedjs_bleed-right .pagedjs_marks-crop {
	width: calc(var(--pagedjs-bleed-left-right) - var(--pagedjs-crop-offset));
}

.pagedjs_marks-middle {
	display: flex;
	flex-grow: 1;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
}

.pagedjs_marks-cross {
	display: var(--pagedjs-mark-cross-display);
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIzMi41MzdweCIgaGVpZ2h0PSIzMi41MzdweCIgdmlld0JveD0iMC4xMDQgMC4xMDQgMzIuNTM3IDMyLjUzNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwLjEwNCAwLjEwNCAzMi41MzcgMzIuNTM3IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy4zODkzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0yOS45MzEsMTYuMzczYzAsNy40ODktNi4wNjgsMTMuNTYtMTMuNTU4LDEzLjU2Yy03LjQ4MywwLTEzLjU1Ny02LjA3Mi0xMy41NTctMTMuNTZjMC03LjQ4Niw2LjA3NC0xMy41NTQsMTMuNTU3LTEzLjU1NEMyMy44NjIsMi44MTksMjkuOTMxLDguODg3LDI5LjkzMSwxNi4zNzN6Ii8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuMzg5MyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMC4xMDQiIHkxPSIxNi4zNzMiIHgyPSIzMi42NDIiIHkyPSIxNi4zNzMiLz48bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy4zODkzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxNi4zNzMiIHkxPSIwLjEwNCIgeDI9IjE2LjM3MyIgeTI9IjMyLjY0MiIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjM4OTMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI0LjUwOCwxNi4zNzNjMCw0LjQ5Ni0zLjYzOCw4LjEzNS04LjEzNSw4LjEzNWMtNC40OTEsMC04LjEzNS0zLjYzOC04LjEzNS04LjEzNWMwLTQuNDg5LDMuNjQ0LTguMTM1LDguMTM1LTguMTM1QzIwLjg2OSw4LjIzOSwyNC41MDgsMTEuODg0LDI0LjUwOCwxNi4zNzN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNjc3OCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjkuOTMxLDE2LjM3M2MwLDcuNDg5LTYuMDY4LDEzLjU2LTEzLjU1OCwxMy41NmMtNy40ODMsMC0xMy41NTctNi4wNzItMTMuNTU3LTEzLjU2YzAtNy40ODYsNi4wNzQtMTMuNTU0LDEzLjU1Ny0xMy41NTRDMjMuODYyLDIuODE5LDI5LjkzMSw4Ljg4NywyOS45MzEsMTYuMzczeiIvPjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjY3NzgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjAuMTA0IiB5MT0iMTYuMzczIiB4Mj0iMzIuNjQyIiB5Mj0iMTYuMzczIi8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNjc3OCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTYuMzczIiB5MT0iMC4xMDQiIHgyPSIxNi4zNzMiIHkyPSIzMi42NDIiLz48cGF0aCBkPSJNMjQuNTA4LDE2LjM3M2MwLDQuNDk2LTMuNjM4LDguMTM1LTguMTM1LDguMTM1Yy00LjQ5MSwwLTguMTM1LTMuNjM4LTguMTM1LTguMTM1YzAtNC40ODksMy42NDQtOC4xMzUsOC4xMzUtOC4xMzVDMjAuODY5LDguMjM5LDI0LjUwOCwxMS44ODQsMjQuNTA4LDE2LjM3MyIvPjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjY3NzgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjguMjM5IiB5MT0iMTYuMzczIiB4Mj0iMjQuNTA4IiB5Mj0iMTYuMzczIi8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuNjc3OCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTYuMzczIiB5MT0iOC4yMzkiIHgyPSIxNi4zNzMiIHkyPSIyNC41MDgiLz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: var(--pagedjs-cross-size);

  z-index: 2147483647;
	width: var(--pagedjs-cross-size);
	height: var(--pagedjs-cross-size);
}

.pagedjs_pagebox {
	box-sizing: border-box;
	width: var(--pagedjs-pagebox-width);
	height: var(--pagedjs-pagebox-height);
	position: relative;
	display: grid;
	grid-template-columns: [left] var(--pagedjs-margin-left) [center] calc(var(--pagedjs-pagebox-width) - var(--pagedjs-margin-left) - var(--pagedjs-margin-right)) [right] var(--pagedjs-margin-right);
	grid-template-rows: [header] var(--pagedjs-margin-top) [page] calc(var(--pagedjs-pagebox-height) - var(--pagedjs-margin-top) - var(--pagedjs-margin-bottom)) [footer] var(--pagedjs-margin-bottom);
	grid-column: sheet-center;
	grid-row: sheet-middle;
}

.pagedjs_pagebox * {
	box-sizing: border-box;
}

.pagedjs_margin-top {
	width: calc(var(--pagedjs-pagebox-width) - var(--pagedjs-margin-left) - var(--pagedjs-margin-right));
	height: var(--pagedjs-margin-top);
	grid-column: center;
	grid-row: header;
	flex-wrap: nowrap;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
}

.pagedjs_margin-top-left-corner-holder {
	width: var(--pagedjs-margin-left);
	height: var(--pagedjs-margin-top);
	display: flex;
	grid-column: left;
	grid-row: header;
}

.pagedjs_margin-top-right-corner-holder {
	width: var(--pagedjs-margin-right);
	height: var(--pagedjs-margin-top);
	display: flex;
	grid-column: right;
	grid-row: header;
}

.pagedjs_margin-top-left-corner {
	width: var(--pagedjs-margin-left);
}

.pagedjs_margin-top-right-corner {
	width: var(--pagedjs-margin-right);
}

.pagedjs_margin-right {
	height: calc(var(--pagedjs-pagebox-height) - var(--pagedjs-margin-top) - var(--pagedjs-margin-bottom));
	width: var(--pagedjs-margin-right);
	right: 0;
	grid-column: right;
	grid-row: page;
	display: grid;
	grid-template-rows: repeat(3, 33.3333%);
	grid-template-columns: 100%;
}

.pagedjs_margin-bottom {
	width: calc(var(--pagedjs-pagebox-width) - var(--pagedjs-margin-left) - var(--pagedjs-margin-right));
	height: var(--pagedjs-margin-bottom);
	grid-column: center;
	grid-row: footer;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
}

.pagedjs_margin-bottom-left-corner-holder {
	width: var(--pagedjs-margin-left);
	height: var(--pagedjs-margin-bottom);
	display: flex;
	grid-column: left;
	grid-row: footer;
}

.pagedjs_margin-bottom-right-corner-holder {
	width: var(--pagedjs-margin-right);
	height: var(--pagedjs-margin-bottom);
	display: flex;
	grid-column: right;
	grid-row: footer;
}

.pagedjs_margin-bottom-left-corner {
	width: var(--pagedjs-margin-left);
}

.pagedjs_margin-bottom-right-corner {
	width: var(--pagedjs-margin-right);
}



.pagedjs_margin-left {
	height: calc(var(--pagedjs-pagebox-height) - var(--pagedjs-margin-top) - var(--pagedjs-margin-bottom));
	width: var(--pagedjs-margin-left);
	grid-column: left;
	grid-row: page;
	display: grid;
	grid-template-rows: repeat(3, 33.33333%);
	grid-template-columns: 100%;
}

.pagedjs_pages .pagedjs_pagebox .pagedjs_margin:not(.hasContent) {
	visibility: hidden;
}

.pagedjs_pagebox > .pagedjs_area {
	grid-column: center;
	grid-row: page;
	width: 100%;
	height: 100%;
	padding: var(--pagedjs-padding-top) var(--pagedjs-padding-right) var(--pagedjs-padding-bottom) var(--pagedjs-padding-left);
	border-top: var(--pagedjs-border-top);
	border-right: var(--pagedjs-border-right);
	border-bottom: var(--pagedjs-border-bottom);
	border-left: var(--pagedjs-border-left);
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_page_content {
	width: 100%;
	height: calc(100% - var(--pagedjs-footnotes-height));
	position: relative;
	column-fill: auto;
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_page_content > div {
	height: inherit;
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_footnote_area {
	position: relative;
	overflow: hidden;
	height: var(--pagedjs-footnotes-height);
	display: flex;
    justify-content: flex-end;
    flex-flow: column;
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_footnote_area > .pagedjs_footnote_content {
	overflow: hidden;
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_footnote_area > .pagedjs_footnote_inner_content {
	overflow: hidden;
}

.pagedjs_area [data-footnote-call] {
	all: unset;
	counter-increment: footnote;
}

.pagedjs_area [data-split-from] {
	counter-increment: unset;
	counter-reset: unset;
}

[data-footnote-call]::after {
	vertical-align: super;
	font-size: 65%;
	line-height: normal;
	content: counter(footnote);
}

@supports ( font-variant-position: super ) {
	[data-footnote-call]::after {
		vertical-align: baseline;
		font-size: 100%;
		line-height: inherit;
		font-variant-position: super;
	}
}

.pagedjs_footnote_empty {
	display: none;
}

.pagedjs_area [data-split-from] {
	counter-increment: unset;
	counter-reset: unset;
}

[data-footnote-marker] {
	text-indent: 0;
	display: list-item;
	list-style-position: inside;
}

[data-footnote-marker][data-split-from] {
	list-style: none;
}

[data-footnote-marker]:not([data-split-from]) {
	counter-increment: footnote-marker;
}

[data-footnote-marker]::marker {
	content: counter(footnote-marker) ". ";
}

[data-footnote-marker][data-split-from]::marker {
	content: unset;
}

.pagedjs_area .pagedjs_footnote_inner_content [data-note-display="inline"] {
 	display: inline;
}

.pagedjs_page {
	counter-increment: page var(--pagedjs-page-counter-increment);
	width: var(--pagedjs-width);
	height: var(--pagedjs-height);
}

.pagedjs_page.pagedjs_right_page {
	width: var(--pagedjs-width-right);
	height: var(--pagedjs-height-right);
}

.pagedjs_page.pagedjs_left_page {
	width: var(--pagedjs-width-left);
	height: var(--pagedjs-height-left);
}

.pagedjs_pages {
	counter-reset: pages var(--pagedjs-page-count) footnote var(--pagedjs-footnotes-count) footnote-marker var(--pagedjs-footnotes-count);
}

.pagedjs_pagebox .pagedjs_margin-top-left-corner,
.pagedjs_pagebox .pagedjs_margin-top-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-left-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-right-corner,
.pagedjs_pagebox .pagedjs_margin-top-left,
.pagedjs_pagebox .pagedjs_margin-top-right,
.pagedjs_pagebox .pagedjs_margin-bottom-left,
.pagedjs_pagebox .pagedjs_margin-bottom-right,
.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center,
.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center,
.pagedjs_margin-right-middle,
.pagedjs_margin-left-middle  {
	display: flex;
	align-items: center;
}

.pagedjs_margin-right-top,
.pagedjs_margin-left-top  {
	display: flex;
	align-items: flex-top;
}


.pagedjs_margin-right-bottom,
.pagedjs_margin-left-bottom  {
	display: flex;
	align-items: flex-end;
}



/*
.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center {
	height: 100%;
	display: none;
	align-items: center;
	flex: 1 0 33%;
	margin: 0 auto;
}

.pagedjs_pagebox .pagedjs_margin-top-left-corner,
.pagedjs_pagebox .pagedjs_margin-top-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-left-corner {
	display: none;
	align-items: center;
}

.pagedjs_pagebox .pagedjs_margin-left-top,
.pagedjs_pagebox .pagedjs_margin-right-top {
	display: none;
	align-items: flex-start;
}

.pagedjs_pagebox .pagedjs_margin-right-middle,
.pagedjs_pagebox .pagedjs_margin-left-middle {
	display: none;
	align-items: center;
}

.pagedjs_pagebox .pagedjs_margin-left-bottom,
.pagedjs_pagebox .pagedjs_margin-right-bottom {
	display: none;
	align-items: flex-end;
}
*/

.pagedjs_pagebox .pagedjs_margin-top-left,
.pagedjs_pagebox .pagedjs_margin-top-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-left,
.pagedjs_pagebox .pagedjs_margin-bottom-right-corner { text-align: left; }

.pagedjs_pagebox .pagedjs_margin-top-left-corner,
.pagedjs_pagebox .pagedjs_margin-top-right,
.pagedjs_pagebox .pagedjs_margin-bottom-left-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-right { text-align: right; }

.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center,
.pagedjs_pagebox .pagedjs_margin-left-top,
.pagedjs_pagebox .pagedjs_margin-left-middle,
.pagedjs_pagebox .pagedjs_margin-left-bottom,
.pagedjs_pagebox .pagedjs_margin-right-top,
.pagedjs_pagebox .pagedjs_margin-right-middle,
.pagedjs_pagebox .pagedjs_margin-right-bottom { text-align: center; }

.pagedjs_pages .pagedjs_margin .pagedjs_margin-content {
	width: 100%;
}

.pagedjs_pages .pagedjs_margin-left .pagedjs_margin-content::after,
.pagedjs_pages .pagedjs_margin-top .pagedjs_margin-content::after,
.pagedjs_pages .pagedjs_margin-right .pagedjs_margin-content::after,
.pagedjs_pages .pagedjs_margin-bottom .pagedjs_margin-content::after {
	display: block;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-to] {
	margin-bottom: unset;
	padding-bottom: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from] {
	text-indent: unset;
	margin-top: unset;
	padding-top: unset;
	initial-letter: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from] > *::first-letter,
.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from]::first-letter {
	color: unset;
	font-size: unset;
	font-weight: unset;
	font-family: unset;
	color: unset;
	line-height: unset;
	float: unset;
	padding: unset;
	margin: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-to]:not([data-footnote-call]):after,
.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-to]:not([data-footnote-call])::after {
	content: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from]:not([data-footnote-call]):before,
.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div [data-split-from]:not([data-footnote-call])::before {
	content: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_sheet > .pagedjs_pagebox > .pagedjs_area > div li[data-split-from]:first-of-type {
	list-style: none;
}

/*
[data-page]:not([data-split-from]),
[data-break-before="page"]:not([data-split-from]),
[data-break-before="always"]:not([data-split-from]),
[data-break-before="left"]:not([data-split-from]),
[data-break-before="right"]:not([data-split-from]),
[data-break-before="recto"]:not([data-split-from]),
[data-break-before="verso"]:not([data-split-from])
{
	break-before: column;
}

[data-page]:not([data-split-to]),
[data-break-after="page"]:not([data-split-to]),
[data-break-after="always"]:not([data-split-to]),
[data-break-after="left"]:not([data-split-to]),
[data-break-after="right"]:not([data-split-to]),
[data-break-after="recto"]:not([data-split-to]),
[data-break-after="verso"]:not([data-split-to])
{
	break-after: column;
}
*/

.pagedjs_clear-after::after {
	content: none !important;
}

[data-align-last-split-element='justify'] {
	text-align-last: justify;
}


@media print {
	html {
		width: 100%;
		height: 100%;
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}
	body {
		margin: 0;
		padding: 0;
		width: 100% !important;
		height: 100% !important;
		min-width: 100%;
		max-width: 100%;
		min-height: 100%;
		max-height: 100%;
	}
	.pagedjs_pages {
		width: auto;
		display: block !important;
		transform: none !important;
		height: 100% !important;
		min-height: 100%;
		max-height: 100%;
		overflow: visible;
	}
	.pagedjs_page {
		margin: 0;
		padding: 0;
		max-height: 100%;
		min-height: 100%;
		height: 100% !important;
		page-break-after: always;
		break-after: page;
	}
	.pagedjs_sheet {
		margin: 0;
		padding: 0;
		max-height: 100%;
		min-height: 100%;
		height: 100% !important;
	}
}
`;
async function gs(t, e = {}) {
  return new Promise(function(r, a) {
    let n = new XMLHttpRequest();
    n.open(e.method || "get", t, !0);
    for (let i in e.headers)
      n.setRequestHeader(i, e.headers[i]);
    n.withCredentials = e.credentials === "include", n.onload = () => {
      const i = n.status === 0 && t.startsWith("file://") ? 200 : n.status;
      r(new Response(n.responseText, { status: i }));
    }, n.onerror = a, n.send(e.body || null);
  });
}
class Jb {
  constructor(e) {
    this.sheets = [], this.inserted = [], this.hooks = {}, this.hooks.onUrl = new z(this), this.hooks.onAtPage = new z(this), this.hooks.onAtMedia = new z(this), this.hooks.onRule = new z(this), this.hooks.onDeclaration = new z(this), this.hooks.onContent = new z(this), this.hooks.onSelector = new z(this), this.hooks.onPseudoSelector = new z(this), this.hooks.onImport = new z(this), this.hooks.beforeTreeParse = new z(this), this.hooks.beforeTreeWalk = new z(this), this.hooks.afterTreeWalk = new z(this), e !== !1 && this.setup();
  }
  setup() {
    return this.base = this.insert(Xb), this.styleEl = document.createElement("style"), document.head.appendChild(this.styleEl), this.styleSheet = this.styleEl.sheet, this.styleSheet;
  }
  async add() {
    let e = [], r = [];
    for (var a = 0; a < arguments.length; a++) {
      let n;
      if (typeof arguments[a] == "object")
        for (let i in arguments[a]) {
          let s = arguments[a];
          n = new Promise(function(o, l) {
            r.push(i), o(s[i]);
          });
        }
      else
        r.push(arguments[a]), n = gs(arguments[a]).then((i) => i.text());
      e.push(n);
    }
    return await Promise.all(e).then(async (n) => {
      let i = "";
      for (let s = 0; s < n.length; s++)
        i = await this.convertViaSheet(n[s], r[s]), this.insert(i);
      return i;
    });
  }
  async convertViaSheet(e, r) {
    let a = new Qb(r, this.hooks);
    await a.parse(e);
    for (let n of a.imported) {
      let i = await gs(n).then((o) => o.text()), s = await this.convertViaSheet(i, n);
      this.insert(s);
    }
    return this.sheets.push(a), typeof a.width < "u" && (this.width = a.width), typeof a.height < "u" && (this.height = a.height), typeof a.orientation < "u" && (this.orientation = a.orientation), a.toString();
  }
  insert(e) {
    let r = document.querySelector("head"), a = document.createElement("style");
    return a.setAttribute("data-pagedjs-inserted-styles", "true"), a.appendChild(document.createTextNode(e)), r.appendChild(a), this.inserted.push(a), a;
  }
  destroy() {
    this.styleEl.remove(), this.inserted.forEach((e) => {
      e.remove();
    }), this.sheets = [];
  }
}
class N {
  constructor(e, r, a) {
    let n = Object.assign({}, e && e.hooks, r && r.hooks, a && a.hooks);
    this.chunker = e, this.polisher = r, this.caller = a;
    for (let i in n)
      i in this && n[i].register(this[i].bind(this));
  }
}
De(N.prototype);
const fs = {
  A0: {
    width: {
      value: 841,
      unit: "mm"
    },
    height: {
      value: 1189,
      unit: "mm"
    }
  },
  A1: {
    width: {
      value: 594,
      unit: "mm"
    },
    height: {
      value: 841,
      unit: "mm"
    }
  },
  A2: {
    width: {
      value: 420,
      unit: "mm"
    },
    height: {
      value: 594,
      unit: "mm"
    }
  },
  A3: {
    width: {
      value: 297,
      unit: "mm"
    },
    height: {
      value: 420,
      unit: "mm"
    }
  },
  A4: {
    width: {
      value: 210,
      unit: "mm"
    },
    height: {
      value: 297,
      unit: "mm"
    }
  },
  A5: {
    width: {
      value: 148,
      unit: "mm"
    },
    height: {
      value: 210,
      unit: "mm"
    }
  },
  A6: {
    width: {
      value: 105,
      unit: "mm"
    },
    height: {
      value: 148,
      unit: "mm"
    }
  },
  A7: {
    width: {
      value: 74,
      unit: "mm"
    },
    height: {
      value: 105,
      unit: "mm"
    }
  },
  A8: {
    width: {
      value: 52,
      unit: "mm"
    },
    height: {
      value: 74,
      unit: "mm"
    }
  },
  A9: {
    width: {
      value: 37,
      unit: "mm"
    },
    height: {
      value: 52,
      unit: "mm"
    }
  },
  A10: {
    width: {
      value: 26,
      unit: "mm"
    },
    height: {
      value: 37,
      unit: "mm"
    }
  },
  B4: {
    width: {
      value: 250,
      unit: "mm"
    },
    height: {
      value: 353,
      unit: "mm"
    }
  },
  B5: {
    width: {
      value: 176,
      unit: "mm"
    },
    height: {
      value: 250,
      unit: "mm"
    }
  },
  letter: {
    width: {
      value: 8.5,
      unit: "in"
    },
    height: {
      value: 11,
      unit: "in"
    }
  },
  legal: {
    width: {
      value: 8.5,
      unit: "in"
    },
    height: {
      value: 14,
      unit: "in"
    }
  },
  ledger: {
    width: {
      value: 11,
      unit: "in"
    },
    height: {
      value: 17,
      unit: "in"
    }
  }
};
class eS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.pages = {}, this.width = void 0, this.height = void 0, this.orientation = void 0, this.marginalia = {};
  }
  pageModel(e) {
    return {
      selector: e,
      name: void 0,
      psuedo: void 0,
      nth: void 0,
      marginalia: {},
      width: void 0,
      height: void 0,
      orientation: void 0,
      margin: {
        top: {},
        right: {},
        left: {},
        bottom: {}
      },
      padding: {
        top: {},
        right: {},
        left: {},
        bottom: {}
      },
      border: {
        top: {},
        right: {},
        left: {},
        bottom: {}
      },
      backgroundOrigin: void 0,
      block: {},
      marks: void 0,
      notes: void 0,
      added: !1
    };
  }
  // Find and Remove @page rules
  onAtPage(e, r, a) {
    let n, i, s = "", o, l, p, c = !1;
    e.prelude ? (o = this.getTypeSelector(e), l = this.getPsuedoSelector(e), p = this.getNthSelector(e), s = C.generate(e.prelude)) : s = "*", s in this.pages ? (n = this.pages[s], i = this.replaceMarginalia(e), c = !0, n.added = !1) : (n = this.pageModel(s), i = this.replaceMarginalia(e), this.pages[s] = n), n.name = o, n.psuedo = l, n.nth = p, c ? n.marginalia = Object.assign(n.marginalia, i) : n.marginalia = i;
    let m = this.replaceNotes(e);
    n.notes = m;
    let d = this.replaceDeclarations(e);
    if (d.size && (n.size = d.size, n.width = d.size.width, n.height = d.size.height, n.orientation = d.size.orientation, n.format = d.size.format), d.bleed && d.bleed[0] != "auto")
      switch (d.bleed.length) {
        case 4:
          n.bleed = {
            top: d.bleed[0],
            right: d.bleed[1],
            bottom: d.bleed[2],
            left: d.bleed[3]
          };
          break;
        case 3:
          n.bleed = {
            top: d.bleed[0],
            right: d.bleed[1],
            bottom: d.bleed[2],
            left: d.bleed[1]
          };
          break;
        case 2:
          n.bleed = {
            top: d.bleed[0],
            right: d.bleed[1],
            bottom: d.bleed[0],
            left: d.bleed[1]
          };
          break;
        default:
          n.bleed = {
            top: d.bleed[0],
            right: d.bleed[0],
            bottom: d.bleed[0],
            left: d.bleed[0]
          };
      }
    d.marks && ((!d.bleed || d.bleed && d.bleed[0] === "auto") && (n.bleed = {
      top: { value: 6, unit: "mm" },
      right: { value: 6, unit: "mm" },
      bottom: { value: 6, unit: "mm" },
      left: { value: 6, unit: "mm" }
    }), n.marks = d.marks), d.margin && (n.margin = d.margin), d.padding && (n.padding = d.padding), d.border && (n.border = d.border), d.marks && (n.marks = d.marks), c ? n.block.children.appendList(e.block.children) : n.block = e.block, a.remove(r);
  }
  /* Handled in breaks */
  /*
  afterParsed(parsed) {
  	for (let b in this.named) {
  		// Find elements
  		let elements = parsed.querySelectorAll(b);
  		// Add break data
  		for (var i = 0; i < elements.length; i++) {
  			elements[i].setAttribute("data-page", this.named[b]);
  		}
  	}
  }
  */
  afterTreeWalk(e, r) {
    let a = "*" in this.pages && this.pages["*"].added === !1;
    if (this.addPageClasses(this.pages, e, r), a) {
      let n = this.pages["*"].width, i = this.pages["*"].height, s = this.pages["*"].format, o = this.pages["*"].orientation, l = this.pages["*"].bleed, p = this.pages["*"].marks, c, m;
      ":left" in this.pages && (c = this.pages[":left"].bleed), ":right" in this.pages && (m = this.pages[":right"].bleed), n && i && (this.width !== n || this.height !== i) && (this.width = n, this.height = i, this.format = s, this.orientation = o, this.addRootVars(e, n, i, o, l, m, c, p), this.addRootPage(e, this.pages["*"].size, l, m, c), this.emit("size", { width: n, height: i, orientation: o, format: s, bleed: l }), this.emit("atpages", this.pages));
    }
  }
  getTypeSelector(e) {
    let r;
    return C.walk(e, {
      visit: "TypeSelector",
      enter: (a, n, i) => {
        r = a.name;
      }
    }), r;
  }
  getPsuedoSelector(e) {
    let r;
    return C.walk(e, {
      visit: "PseudoClassSelector",
      enter: (a, n, i) => {
        a.name !== "nth" && (r = a.name);
      }
    }), r;
  }
  getNthSelector(e) {
    let r;
    return C.walk(e, {
      visit: "PseudoClassSelector",
      enter: (a, n, i) => {
        a.name === "nth" && a.children && (r = a.children.first().value);
      }
    }), r;
  }
  replaceMarginalia(e) {
    let r = {};
    const a = [
      "top-left-corner",
      "top-left",
      "top",
      "top-center",
      "top-right",
      "top-right-corner",
      "bottom-left-corner",
      "bottom-left",
      "bottom",
      "bottom-center",
      "bottom-right",
      "bottom-right-corner",
      "left-top",
      "left-middle",
      "left",
      "left-bottom",
      "top-right-corner",
      "right-top",
      "right-middle",
      "right",
      "right-bottom",
      "right-right-corner"
    ];
    return C.walk(e.block, {
      visit: "Atrule",
      enter: (n, i, s) => {
        let o = n.name;
        a.includes(o) && (o === "top" && (o = "top-center"), o === "right" && (o = "right-middle"), o === "left" && (o = "left-middle"), o === "bottom" && (o = "bottom-center"), r[o] = n.block, s.remove(i));
      }
    }), r;
  }
  replaceNotes(e) {
    let r = {};
    return C.walk(e.block, {
      visit: "Atrule",
      enter: (a, n, i) => {
        let s = a.name;
        s === "footnote" && (r[s] = a.block, i.remove(n));
      }
    }), r;
  }
  replaceDeclarations(e) {
    let r = {};
    return C.walk(e.block, {
      visit: "Declaration",
      enter: (a, n, i) => {
        let s = C.property(a.property).name;
        if (s === "marks")
          r.marks = [], C.walk(a, {
            visit: "Identifier",
            enter: (o) => {
              r.marks.push(o.name);
            }
          }), i.remove(n);
        else if (s === "margin")
          r.margin = this.getMargins(a), i.remove(n);
        else if (s.indexOf("margin-") === 0) {
          let o = s.substring(7);
          r.margin || (r.margin = {
            top: {},
            right: {},
            left: {},
            bottom: {}
          }), r.margin[o] = a.value.children.first(), i.remove(n);
        } else if (s === "padding")
          r.padding = this.getPaddings(a.value), i.remove(n);
        else if (s.indexOf("padding-") === 0) {
          let o = s.substring(8);
          r.padding || (r.padding = {
            top: {},
            right: {},
            left: {},
            bottom: {}
          }), r.padding[o] = a.value.children.first(), i.remove(n);
        } else if (s === "border")
          r.border || (r.border = {
            top: {},
            right: {},
            left: {},
            bottom: {}
          }), r.border.top = C.generate(a.value), r.border.right = C.generate(a.value), r.border.left = C.generate(a.value), r.border.bottom = C.generate(a.value), i.remove(n);
        else if (s.indexOf("border-") === 0) {
          r.border || (r.border = {
            top: {},
            right: {},
            left: {},
            bottom: {}
          });
          let o = s.substring(7);
          r.border[o] = C.generate(a.value), i.remove(n);
        } else s === "size" ? (r.size = this.getSize(a), i.remove(n)) : s === "bleed" && (r.bleed = [], C.walk(a, {
          enter: (o) => {
            switch (o.type) {
              case "String":
                o.value.indexOf("auto") > -1 && r.bleed.push("auto");
                break;
              case "Dimension":
                r.bleed.push({
                  value: o.value,
                  unit: o.unit
                });
                break;
              case "Number":
                r.bleed.push({
                  value: o.value,
                  unit: "px"
                });
                break;
            }
          }
        }), i.remove(n));
      }
    }), r;
  }
  getSize(e) {
    let r, a, n, i;
    return C.walk(e, {
      visit: "Dimension",
      enter: (s, o, l) => {
        let { value: p, unit: c } = s;
        typeof r > "u" ? r = { value: p, unit: c } : typeof a > "u" && (a = { value: p, unit: c });
      }
    }), C.walk(e, {
      visit: "String",
      enter: (s, o, l) => {
        let p = s.value.replace(/["|']/g, ""), c = fs[p];
        c && (r = c.width, a = c.height);
      }
    }), C.walk(e, {
      visit: "Identifier",
      enter: (s, o, l) => {
        let p = s.name;
        if (p === "landscape" || p === "portrait")
          n = s.name;
        else if (p !== "auto") {
          let c = fs[p];
          c && (r = c.width, a = c.height), i = p;
        }
      }
    }), {
      width: r,
      height: a,
      orientation: n,
      format: i
    };
  }
  getMargins(e) {
    let r = [], a = {
      top: {},
      right: {},
      left: {},
      bottom: {}
    };
    if (C.walk(e, {
      enter: (n) => {
        switch (n.type) {
          case "Dimension":
            r.push(n);
            break;
          case "Number":
            r.push({ value: n.value, unit: "px" });
            break;
        }
      }
    }), r.length === 1)
      for (let n in a)
        a[n] = r[0];
    else r.length === 2 ? (a.top = r[0], a.right = r[1], a.bottom = r[0], a.left = r[1]) : r.length === 3 ? (a.top = r[0], a.right = r[1], a.bottom = r[2], a.left = r[1]) : r.length === 4 && (a.top = r[0], a.right = r[1], a.bottom = r[2], a.left = r[3]);
    return a;
  }
  getPaddings(e) {
    let r = [], a = {
      top: {},
      right: {},
      left: {},
      bottom: {}
    };
    if (C.walk(e, {
      enter: (n) => {
        switch (n.type) {
          case "Dimension":
            r.push(n);
            break;
          case "Number":
            r.push({ value: n.value, unit: "px" });
            break;
        }
      }
    }), r.length === 1)
      for (let n in a)
        a[n] = r[0];
    else r.length === 2 ? (a.top = r[0], a.right = r[1], a.bottom = r[0], a.left = r[1]) : r.length === 3 ? (a.top = r[0], a.right = r[1], a.bottom = r[2], a.left = r[1]) : r.length === 4 && (a.top = r[0], a.right = r[1], a.bottom = r[2], a.left = r[3]);
    return a;
  }
  // get values for the border on the @page to pass them to the element with the .pagedjs_area class
  getBorders(e) {
    let r = {
      top: {},
      right: {},
      left: {},
      bottom: {}
    };
    return e.prop == "border" ? (r.top = C.generate(e.value), r.right = C.generate(e.value), r.bottom = C.generate(e.value), r.left = C.generate(e.value)) : e.prop == "border-top" ? r.top = C.generate(e.value) : e.prop == "border-right" ? r.right = C.generate(e.value) : e.prop == "border-bottom" ? r.bottom = C.generate(e.value) : e.prop == "border-left" && (r.left = C.generate(e.value)), r;
  }
  addPageClasses(e, r, a) {
    if ("*" in e && e["*"].added === !1) {
      let n = this.createPage(e["*"], r.children, a);
      a.insertRule(n), e["*"].added = !0;
    }
    if (":left" in e && e[":left"].added === !1) {
      let n = this.createPage(e[":left"], r.children, a);
      a.insertRule(n), e[":left"].added = !0;
    }
    if (":right" in e && e[":right"].added === !1) {
      let n = this.createPage(e[":right"], r.children, a);
      a.insertRule(n), e[":right"].added = !0;
    }
    if (":first" in e && e[":first"].added === !1) {
      let n = this.createPage(e[":first"], r.children, a);
      a.insertRule(n), e[":first"].added = !0;
    }
    if (":blank" in e && e[":blank"].added === !1) {
      let n = this.createPage(e[":blank"], r.children, a);
      a.insertRule(n), e[":blank"].added = !0;
    }
    for (let n in e)
      if (e[n].nth && e[n].added === !1) {
        let i = this.createPage(e[n], r.children, a);
        a.insertRule(i), e[n].added = !0;
      }
    for (let n in e)
      if (e[n].name && e[n].added === !1) {
        let i = this.createPage(e[n], r.children, a);
        a.insertRule(i), e[n].added = !0;
      }
  }
  createPage(e, r, a) {
    let n = this.selectorsForPage(e), i = e.block.children.copy(), s = {
      type: "Block",
      loc: 0,
      children: i
    }, o = this.createRule(n, s);
    return this.addMarginVars(e.margin, i, i.first()), this.addPaddingVars(e.padding, i, i.first()), this.addBorderVars(e.border, i, i.first()), e.width && this.addDimensions(e.width, e.height, e.orientation, i, i.first()), e.marginalia && (this.addMarginaliaStyles(e, r, o, a), this.addMarginaliaContent(e, r, o, a)), e.notes && this.addNotesStyles(e.notes, e, r, o, a), o;
  }
  addMarginVars(e, r, a) {
    for (let n in e)
      if (typeof e[n].value < "u") {
        let i = e[n].value + (e[n].unit || ""), s = r.createItem({
          type: "Declaration",
          property: "--pagedjs-margin-" + n,
          value: {
            type: "Raw",
            value: i
          }
        });
        r.append(s, a);
      }
  }
  addPaddingVars(e, r, a) {
    for (let n in e)
      if (typeof e[n].value < "u") {
        let i = e[n].value + (e[n].unit || ""), s = r.createItem({
          type: "Declaration",
          property: "--pagedjs-padding-" + n,
          value: {
            type: "Raw",
            value: i
          }
        });
        r.append(s, a);
      }
  }
  addBorderVars(e, r, a) {
    for (const n of Object.keys(e)) {
      const i = e[n];
      if (typeof i == "string") {
        const s = r.createItem({
          type: "Declaration",
          property: "--pagedjs-border-" + n,
          value: {
            type: "Raw",
            value: i
          }
        });
        r.append(s, a);
      }
    }
  }
  addDimensions(e, r, a, n, i) {
    let s, o;
    s = _(e), o = _(r), a && a !== "portrait" && ([s, o] = [o, s]);
    let l = this.createVariable("--pagedjs-pagebox-width", s);
    n.appendData(l);
    let p = this.createVariable("--pagedjs-pagebox-height", o);
    n.appendData(p);
  }
  addMarginaliaStyles(e, r, a, n) {
    for (let i in e.marginalia) {
      let s = C.clone(e.marginalia[i]), o = !1;
      if (s.children.isEmpty())
        continue;
      C.walk(s, {
        visit: "Declaration",
        enter: (m, d, u) => {
          if (m.property === "content" && (m.value.children && m.value.children.first().name === "none" ? o = !1 : o = !0, u.remove(d)), m.property === "vertical-align" && (C.walk(m, {
            visit: "Identifier",
            enter: (g, S, b) => {
              let f = g.name;
              f === "top" ? g.name = "flex-start" : f === "middle" ? g.name = "center" : f === "bottom" && (g.name = "flex-end");
            }
          }), m.property = "align-items"), m.property === "width" && (i === "top-left" || i === "top-center" || i === "top-right" || i === "bottom-left" || i === "bottom-center" || i === "bottom-right")) {
            let g = C.clone(m);
            g.property = "max-width", u.appendData(g);
          }
          if (m.property === "height" && (i === "left-top" || i === "left-middle" || i === "left-bottom" || i === "right-top" || i === "right-middle" || i === "right-bottom")) {
            let g = C.clone(m);
            g.property = "max-height", u.appendData(g);
          }
        }
      });
      let l = this.selectorsForPageMargin(e, i), p = this.createRule(l, s);
      r.appendData(p);
      let c = C.generate({
        type: "Selector",
        children: l
      });
      this.marginalia[c] = {
        page: e,
        selector: c,
        block: e.marginalia[i],
        hasContent: o
      };
    }
  }
  addMarginaliaContent(e, r, a, n) {
    let i;
    for (let s in e.marginalia) {
      let o = C.clone(e.marginalia[s]);
      if (C.walk(o, {
        visit: "Declaration",
        enter: (u, g, S) => {
          u.property !== "content" && S.remove(g), u.value.children && u.value.children.first().name === "none" && (i = !0);
        }
      }), o.children.isEmpty())
        continue;
      let l = this.selectorsForPageMargin(e, s), p;
      l.insertData({
        type: "Combinator",
        name: ">"
      }), l.insertData({
        type: "ClassSelector",
        name: "pagedjs_margin-content"
      }), l.insertData({
        type: "Combinator",
        name: ">"
      }), l.insertData({
        type: "TypeSelector",
        name: "*"
      }), i ? p = this.createDeclaration("display", "none") : p = this.createDeclaration("display", "block");
      let c = this.createRule(l, [p]);
      n.insertRule(c);
      let m = this.selectorsForPageMargin(e, s);
      m.insertData({
        type: "Combinator",
        name: ">"
      }), m.insertData({
        type: "ClassSelector",
        name: "pagedjs_margin-content"
      }), m.insertData({
        type: "PseudoElementSelector",
        name: "after",
        children: null
      });
      let d = this.createRule(m, o);
      n.insertRule(d);
    }
  }
  addRootVars(e, r, a, n, i, s, o, l) {
    let p = [], c = new C.List();
    c.insertData({
      type: "PseudoClassSelector",
      name: "root",
      children: null
    });
    let m, d, u, g, S, b;
    if (!i)
      m = _(r), d = _(a), u = _(r), g = _(a), S = _(r), b = _(a);
    else {
      m = `calc( ${_(r)} + ${_(i.left)} + ${_(i.right)} )`, d = `calc( ${_(a)} + ${_(i.top)} + ${_(i.bottom)} )`, u = `calc( ${_(r)} + ${_(i.left)} + ${_(i.right)} )`, g = `calc( ${_(a)} + ${_(i.top)} + ${_(i.bottom)} )`, S = `calc( ${_(r)} + ${_(i.left)} + ${_(i.right)} )`, b = `calc( ${_(a)} + ${_(i.top)} + ${_(i.bottom)} )`;
      let E = this.createVariable("--pagedjs-bleed-top", _(i.top)), A = this.createVariable("--pagedjs-bleed-right", _(i.right)), B = this.createVariable("--pagedjs-bleed-bottom", _(i.bottom)), P = this.createVariable("--pagedjs-bleed-left", _(i.left)), M = this.createVariable("--pagedjs-bleed-right-top", _(i.top)), W = this.createVariable("--pagedjs-bleed-right-right", _(i.right)), $ = this.createVariable("--pagedjs-bleed-right-bottom", _(i.bottom)), R = this.createVariable("--pagedjs-bleed-right-left", _(i.left)), Q = this.createVariable("--pagedjs-bleed-left-top", _(i.top)), Et = this.createVariable("--pagedjs-bleed-left-right", _(i.right)), zn = this.createVariable("--pagedjs-bleed-left-bottom", _(i.bottom)), jn = this.createVariable("--pagedjs-bleed-left-left", _(i.left));
      s && (M = this.createVariable("--pagedjs-bleed-right-top", _(s.top)), W = this.createVariable("--pagedjs-bleed-right-right", _(s.right)), $ = this.createVariable("--pagedjs-bleed-right-bottom", _(s.bottom)), R = this.createVariable("--pagedjs-bleed-right-left", _(s.left)), u = `calc( ${_(r)} + ${_(s.left)} + ${_(s.right)} )`, g = `calc( ${_(a)} + ${_(s.top)} + ${_(s.bottom)} )`), o && (Q = this.createVariable("--pagedjs-bleed-left-top", _(o.top)), Et = this.createVariable("--pagedjs-bleed-left-right", _(o.right)), zn = this.createVariable("--pagedjs-bleed-left-bottom", _(o.bottom)), jn = this.createVariable("--pagedjs-bleed-left-left", _(o.left)), S = `calc( ${_(r)} + ${_(o.left)} + ${_(o.right)} )`, b = `calc( ${_(a)} + ${_(o.top)} + ${_(o.bottom)} )`);
      let nd = this.createVariable("--pagedjs-width", _(r)), id = this.createVariable("--pagedjs-height", _(a));
      p.push(
        E,
        A,
        B,
        P,
        M,
        W,
        $,
        R,
        Q,
        Et,
        zn,
        jn,
        nd,
        id
      );
    }
    if (l && l.forEach((E) => {
      let A = this.createVariable("--pagedjs-mark-" + E + "-display", "block");
      p.push(A);
    }), n) {
      let E = this.createVariable("--pagedjs-orientation", n);
      p.push(E), n !== "portrait" && ([m, d] = [d, m], [u, g] = [g, u], [S, b] = [b, S]);
    }
    let f = this.createVariable("--pagedjs-width", m), y = this.createVariable("--pagedjs-height", d), w = this.createVariable("--pagedjs-width-right", u), h = this.createVariable("--pagedjs-height-right", g), v = this.createVariable("--pagedjs-width-left", S), x = this.createVariable("--pagedjs-height-left", b);
    p.push(f, y, w, h, v, x);
    let k = this.createRule(c, p);
    e.children.appendData(k);
  }
  addNotesStyles(e, r, a, n, i) {
    for (const s in e) {
      let o = this.selectorsForPage(r);
      o.insertData({
        type: "Combinator",
        name: " "
      }), o.insertData({
        type: "ClassSelector",
        name: "pagedjs_" + s + "_content"
      });
      let l = this.createRule(o, e[s]);
      a.appendData(l);
    }
  }
  /*
  @page {
  	size: var(--pagedjs-width) var(--pagedjs-height);
  	margin: 0;
  	padding: 0;
  }
  */
  addRootPage(e, r, a, n, i) {
    let { width: s, height: o, orientation: l, format: p } = r, c = new C.List(), m = new C.List(), d = new C.List(), u = new C.List(), g = new C.List(), S = new C.List();
    if (a) {
      let f = new C.List(), y = new C.List();
      f.appendData({
        type: "Dimension",
        unit: s.unit,
        value: s.value
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Operator",
        value: "+"
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Dimension",
        unit: a.left.unit,
        value: a.left.value
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Operator",
        value: "+"
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Dimension",
        unit: a.right.unit,
        value: a.right.value
      }), y.appendData({
        type: "Dimension",
        unit: o.unit,
        value: o.value
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Operator",
        value: "+"
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Dimension",
        unit: a.top.unit,
        value: a.top.value
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Operator",
        value: "+"
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Dimension",
        unit: a.bottom.unit,
        value: a.bottom.value
      }), u.appendData({
        type: "Function",
        name: "calc",
        children: f
      }), u.appendData({
        type: "WhiteSpace",
        value: " "
      }), u.appendData({
        type: "Function",
        name: "calc",
        children: y
      });
    } else p ? (u.appendData({
      type: "Identifier",
      name: p
    }), l && (u.appendData({
      type: "WhiteSpace",
      value: " "
    }), u.appendData({
      type: "Identifier",
      name: l
    }))) : (u.appendData({
      type: "Dimension",
      unit: s.unit,
      value: s.value
    }), u.appendData({
      type: "WhiteSpace",
      value: " "
    }), u.appendData({
      type: "Dimension",
      unit: o.unit,
      value: o.value
    }));
    c.appendData({
      type: "Declaration",
      property: "size",
      loc: null,
      value: {
        type: "Value",
        children: u
      }
    }), c.appendData({
      type: "Declaration",
      property: "margin",
      loc: null,
      value: {
        type: "Value",
        children: [{
          type: "Dimension",
          unit: "px",
          value: 0
        }]
      }
    }), c.appendData({
      type: "Declaration",
      property: "padding",
      loc: null,
      value: {
        type: "Value",
        children: [{
          type: "Dimension",
          unit: "px",
          value: 0
        }]
      }
    }), c.appendData({
      type: "Declaration",
      property: "padding",
      loc: null,
      value: {
        type: "Value",
        children: [{
          type: "Dimension",
          unit: "px",
          value: 0
        }]
      }
    });
    let b = e.children.createItem({
      type: "Atrule",
      prelude: null,
      name: "page",
      block: {
        type: "Block",
        loc: null,
        children: c
      }
    });
    if (e.children.append(b), i) {
      let f = new C.List(), y = new C.List();
      f.appendData({
        type: "Dimension",
        unit: s.unit,
        value: s.value
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Operator",
        value: "+"
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Dimension",
        unit: i.left.unit,
        value: i.left.value
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Operator",
        value: "+"
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Dimension",
        unit: i.right.unit,
        value: i.right.value
      }), y.appendData({
        type: "Dimension",
        unit: o.unit,
        value: o.value
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Operator",
        value: "+"
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Dimension",
        unit: i.top.unit,
        value: i.top.value
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Operator",
        value: "+"
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Dimension",
        unit: i.bottom.unit,
        value: i.bottom.value
      }), g.appendData({
        type: "Function",
        name: "calc",
        children: f
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Function",
        name: "calc",
        children: y
      }), m.appendData({
        type: "Declaration",
        property: "size",
        loc: null,
        value: {
          type: "Value",
          children: g
        }
      });
      let w = e.children.createItem({
        type: "Atrule",
        prelude: null,
        name: "page :left",
        block: {
          type: "Block",
          loc: null,
          children: m
        }
      });
      e.children.append(w);
    }
    if (n) {
      let f = new C.List(), y = new C.List();
      f.appendData({
        type: "Dimension",
        unit: s.unit,
        value: s.value
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Operator",
        value: "+"
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Dimension",
        unit: n.left.unit,
        value: n.left.value
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Operator",
        value: "+"
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Dimension",
        unit: n.right.unit,
        value: n.right.value
      }), y.appendData({
        type: "Dimension",
        unit: o.unit,
        value: o.value
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Operator",
        value: "+"
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Dimension",
        unit: n.top.unit,
        value: n.top.value
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Operator",
        value: "+"
      }), y.appendData({
        type: "WhiteSpace",
        value: " "
      }), y.appendData({
        type: "Dimension",
        unit: n.bottom.unit,
        value: n.bottom.value
      }), S.appendData({
        type: "Function",
        name: "calc",
        children: f
      }), S.appendData({
        type: "WhiteSpace",
        value: " "
      }), S.appendData({
        type: "Function",
        name: "calc",
        children: y
      }), d.appendData({
        type: "Declaration",
        property: "size",
        loc: null,
        value: {
          type: "Value",
          children: S
        }
      });
      let w = e.children.createItem({
        type: "Atrule",
        prelude: null,
        name: "page :right",
        block: {
          type: "Block",
          loc: null,
          children: d
        }
      });
      e.children.append(w);
    }
  }
  getNth(e) {
    let r = e.indexOf("n"), a = e.indexOf("+"), n = e.split("n"), i = e.split("+"), s = null, o = null;
    return r > -1 ? (s = n[0], a > -1 && (o = i[1])) : o = e, {
      type: "Nth",
      loc: null,
      selector: null,
      nth: {
        type: "AnPlusB",
        loc: null,
        a: s,
        b: o
      }
    };
  }
  addPageAttributes(e, r, a) {
    let n = [r.dataset.page];
    if (n && n.length)
      for (const i of n)
        i && (e.name = i, e.element.classList.add("pagedjs_named_page"), e.element.classList.add("pagedjs_" + i + "_page"), r.dataset.splitFrom || e.element.classList.add("pagedjs_" + i + "_first_page"));
  }
  getStartElement(e, r) {
    let a = r && r.node;
    if (!e && !r)
      return;
    if (!a)
      return e.children[0];
    if (a.nodeType === 1 && a.parentNode.nodeType === 11 || a.nodeType === 1 && a.dataset.page)
      return a;
    let n = ao(a), i = n.querySelectorAll("[data-page]");
    return i.length ? i[i.length - 1] : n.children[0];
  }
  beforePageLayout(e, r, a, n) {
    let i = this.getStartElement(r, a);
    i && this.addPageAttributes(e, i, n.pages);
  }
  finalizePage(e, r, a, n) {
    for (let i in this.marginalia) {
      let s = this.marginalia[i], o = i.split(" "), l;
      r.element.matches(o[0]) && s.hasContent && (l = r.element.querySelector(o[1]), l.classList.add("hasContent"));
    }
    ["top", "bottom"].forEach((i) => {
      let s = r.element.querySelector(".pagedjs_margin-" + i), o = r.element.querySelector(".pagedjs_margin-" + i + "-center"), l = r.element.querySelector(".pagedjs_margin-" + i + "-left"), p = r.element.querySelector(".pagedjs_margin-" + i + "-right"), c = o.classList.contains("hasContent"), m = l.classList.contains("hasContent"), d = p.classList.contains("hasContent"), u, g, S;
      if (m && (g = window.getComputedStyle(l)["max-width"]), d && (S = window.getComputedStyle(p)["max-width"]), c)
        if (u = window.getComputedStyle(o)["max-width"], u === "none" || u === "auto")
          if (!m && !d)
            s.style["grid-template-columns"] = "0 1fr 0";
          else if (m)
            if (d)
              if (g !== "none" && g !== "auto")
                S !== "none" && S !== "auto" ? s.style["grid-template-columns"] = g + " 1fr " + S : s.style["grid-template-columns"] = g + " 1fr " + g;
              else if (S !== "none" && S !== "auto")
                s.style["grid-template-columns"] = S + " 1fr " + S;
              else {
                s.style["grid-template-columns"] = "auto auto 1fr", l.style["white-space"] = "nowrap", o.style["white-space"] = "nowrap", p.style["white-space"] = "nowrap";
                let b = l.offsetWidth, f = o.offsetWidth, y = p.offsetWidth, w = b + f + y, h = f * 100 / w;
                h > 40 ? s.style["grid-template-columns"] = "minmax(16.66%, 1fr) minmax(33%, " + h + "%) minmax(16.66%, 1fr)" : s.style["grid-template-columns"] = "repeat(3, 1fr)", l.style["white-space"] = "normal", o.style["white-space"] = "normal", p.style["white-space"] = "normal";
              }
            else if (g !== "none" && g !== "auto")
              s.style["grid-template-columns"] = g + " 1fr " + g;
            else {
              s.style["grid-template-columns"] = "auto auto 1fr", l.style["white-space"] = "nowrap", o.style["white-space"] = "nowrap";
              let b = l.offsetWidth, f = o.offsetWidth, y = b + f, w = f * 100 / y;
              s.style["grid-template-columns"] = "minmax(16.66%, 1fr) minmax(33%, " + w + "%) minmax(16.66%, 1fr)", l.style["white-space"] = "normal", o.style["white-space"] = "normal";
            }
          else if (S !== "none" && S !== "auto")
            s.style["grid-template-columns"] = S + " 1fr " + S;
          else {
            s.style["grid-template-columns"] = "auto auto 1fr", p.style["white-space"] = "nowrap", o.style["white-space"] = "nowrap";
            let b = p.offsetWidth, f = o.offsetWidth, y = b + f, w = f * 100 / y;
            s.style["grid-template-columns"] = "minmax(16.66%, 1fr) minmax(33%, " + w + "%) minmax(16.66%, 1fr)", p.style["white-space"] = "normal", o.style["white-space"] = "normal";
          }
        else u !== "none" && u !== "auto" && (m && g !== "none" && g !== "auto" ? s.style["grid-template-columns"] = g + " " + u + " 1fr" : d && S !== "none" && S !== "auto" ? s.style["grid-template-columns"] = "1fr " + u + " " + S : s.style["grid-template-columns"] = "1fr " + u + " 1fr");
      else if (m)
        if (!d)
          s.style["grid-template-columns"] = "1fr 0 0";
        else if (g !== "none" && g !== "auto")
          S !== "none" && S !== "auto" ? s.style["grid-template-columns"] = g + " 1fr " + S : s.style["grid-template-columns"] = g + " 0 1fr";
        else if (S !== "none" && S !== "auto")
          s.style["grid-template-columns"] = "1fr 0 " + S;
        else {
          s.style["grid-template-columns"] = "auto 1fr auto", l.style["white-space"] = "nowrap", p.style["white-space"] = "nowrap";
          let b = l.offsetWidth, f = p.offsetWidth, y = b + f, w = b * 100 / y;
          s.style["grid-template-columns"] = "minmax(16.66%, " + w + "%) 0 1fr", l.style["white-space"] = "normal", p.style["white-space"] = "normal";
        }
      else
        S !== "none" && S !== "auto" ? s.style["grid-template-columns"] = "1fr 0 " + S : s.style["grid-template-columns"] = "0 0 1fr";
    }), ["left", "right"].forEach((i) => {
      let s = r.element.querySelector(".pagedjs_margin-" + i + "-middle.hasContent"), o = r.element.querySelector(".pagedjs_margin-" + i), l = r.element.querySelector(".pagedjs_margin-" + i + "-top"), p = r.element.querySelector(".pagedjs_margin-" + i + "-bottom"), c = l.classList.contains("hasContent"), m = p.classList.contains("hasContent"), d, u, g;
      c && (u = window.getComputedStyle(l)["max-height"]), m && (g = window.getComputedStyle(p)["max-height"]), s ? (d = window.getComputedStyle(s)["max-height"], d === "none" || d === "auto" ? !c && !m ? o.style["grid-template-rows"] = "0 1fr 0" : c ? m ? u !== "none" && u !== "auto" ? g !== "none" && g !== "auto" ? o.style["grid-template-rows"] = u + " calc(100% - " + u + " - " + g + ") " + g : o.style["grid-template-rows"] = u + " calc(100% - " + u + "*2) " + u : g !== "none" && g !== "auto" && (o.style["grid-template-rows"] = g + " calc(100% - " + g + "*2) " + g) : u !== "none" && u !== "auto" && (o.style["grid-template-rows"] = u + " calc(100% - " + u + "*2) " + u) : g !== "none" && g !== "auto" && (o.style["grid-template-rows"] = g + " calc(100% - " + g + "*2) " + g) : c && u !== "none" && u !== "auto" ? o.style["grid-template-rows"] = u + " " + d + " calc(100% - (" + u + " + " + d + "))" : m && g !== "none" && g !== "auto" ? o.style["grid-template-rows"] = "1fr " + d + " " + g : o.style["grid-template-rows"] = "calc((100% - " + d + ")/2) " + d + " calc((100% - " + d + ")/2)") : c ? m ? u !== "none" && u !== "auto" ? g !== "none" && g !== "auto" ? o.style["grid-template-rows"] = u + " 1fr " + g : o.style["grid-template-rows"] = u + " 0 1fr" : g !== "none" && g !== "auto" ? o.style["grid-template-rows"] = "1fr 0 " + g : o.style["grid-template-rows"] = "1fr 0 1fr" : o.style["grid-template-rows"] = "1fr 0 0" : g !== "none" && g !== "auto" ? o.style["grid-template-rows"] = "1fr 0 " + g : o.style["grid-template-rows"] = "0 0 1fr";
    });
  }
  // CSS Tree Helpers
  selectorsForPage(e) {
    let r, a, n = new C.List();
    return n.insertData({
      type: "ClassSelector",
      name: "pagedjs_page"
    }), e.name && (n.insertData({
      type: "ClassSelector",
      name: "pagedjs_named_page"
    }), n.insertData({
      type: "ClassSelector",
      name: "pagedjs_" + e.name + "_page"
    })), e.psuedo && !(e.name && e.psuedo === "first") && n.insertData({
      type: "ClassSelector",
      name: "pagedjs_" + e.psuedo + "_page"
    }), e.name && e.psuedo === "first" && n.insertData({
      type: "ClassSelector",
      name: "pagedjs_" + e.name + "_" + e.psuedo + "_page"
    }), e.nth && (r = new C.List(), a = this.getNth(e.nth), r.insertData(a), n.insertData({
      type: "PseudoClassSelector",
      name: "nth-of-type",
      children: r
    })), n;
  }
  selectorsForPageMargin(e, r) {
    let a = this.selectorsForPage(e);
    return a.insertData({
      type: "Combinator",
      name: " "
    }), a.insertData({
      type: "ClassSelector",
      name: "pagedjs_margin-" + r
    }), a;
  }
  createDeclaration(e, r, a) {
    let n = new C.List();
    return n.insertData({
      type: "Identifier",
      loc: null,
      name: r
    }), {
      type: "Declaration",
      loc: null,
      important: a,
      property: e,
      value: {
        type: "Value",
        loc: null,
        children: n
      }
    };
  }
  createVariable(e, r) {
    return {
      type: "Declaration",
      loc: null,
      property: e,
      value: {
        type: "Raw",
        value: r
      }
    };
  }
  createCalculatedDimension(e, r, a, n = "+") {
    let i = new C.List(), s = new C.List();
    return r.forEach((o, l) => {
      s.appendData({
        type: "Dimension",
        unit: o.unit,
        value: o.value
      }), s.appendData({
        type: "WhiteSpace",
        value: " "
      }), l + 1 < r.length && (s.appendData({
        type: "Operator",
        value: n
      }), s.appendData({
        type: "WhiteSpace",
        value: " "
      }));
    }), i.insertData({
      type: "Function",
      loc: null,
      name: "calc",
      children: s
    }), {
      type: "Declaration",
      loc: null,
      important: a,
      property: e,
      value: {
        type: "Value",
        loc: null,
        children: i
      }
    };
  }
  createDimension(e, r, a) {
    let n = new C.List();
    return n.insertData({
      type: "Dimension",
      loc: null,
      value: r.value,
      unit: r.unit
    }), {
      type: "Declaration",
      loc: null,
      important: a,
      property: e,
      value: {
        type: "Value",
        loc: null,
        children: n
      }
    };
  }
  createBlock(e) {
    let r = new C.List();
    return e.forEach((a) => {
      r.insertData(a);
    }), {
      type: "Block",
      loc: null,
      children: r
    };
  }
  createRule(e, r) {
    let a = new C.List();
    return a.insertData({
      type: "Selector",
      children: e
    }), Array.isArray(r) && (r = this.createBlock(r)), {
      type: "Rule",
      prelude: {
        type: "SelectorList",
        children: a
      },
      block: r
    };
  }
}
class tS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.breaks = {};
  }
  onDeclaration(e, r, a, n) {
    let i = e.property;
    if (i === "page") {
      let o = e.value.children.first().name, l = C.generate(n.ruleNode.prelude), c = {
        property: i,
        value: o,
        selector: l,
        name: o
      };
      l.split(",").forEach((m) => {
        this.breaks[m] ? this.breaks[m].push(c) : this.breaks[m] = [c];
      }), a.remove(r);
    }
    if (i === "break-before" || i === "break-after" || i === "page-break-before" || i === "page-break-after") {
      let o = e.value.children.first().name, l = C.generate(n.ruleNode.prelude);
      i === "page-break-before" ? i = "break-before" : i === "page-break-after" && (i = "break-after");
      let p = {
        property: i,
        value: o,
        selector: l
      };
      l.split(",").forEach((c) => {
        this.breaks[c] ? this.breaks[c].push(p) : this.breaks[c] = [p];
      }), a.remove(r);
    }
  }
  afterParsed(e) {
    this.processBreaks(e, this.breaks);
  }
  processBreaks(e, r) {
    for (let n in r) {
      let i = e.querySelectorAll(n);
      for (var a = 0; a < i.length; a++)
        for (let s of r[n])
          if (s.property === "break-after") {
            let o = Pn(i[a], e);
            i[a].setAttribute("data-break-after", s.value), o && o.setAttribute("data-previous-break-after", s.value);
          } else if (s.property === "break-before") {
            let o = ud(i[a], e);
            if (o) {
              if (s.value === "page" && no(i[a], o))
                continue;
              i[a].setAttribute("data-break-before", s.value), o.setAttribute("data-next-break-before", s.value);
            }
          } else if (s.property === "page") {
            i[a].setAttribute("data-page", s.value);
            let o = Pn(i[a], e);
            o && o.setAttribute("data-after-page", s.value);
          } else
            i[a].setAttribute("data-" + s.property, s.value);
    }
  }
  mergeBreaks(e, r) {
    for (let a in r)
      a in e ? e[a] = e[a].concat(r[a]) : e[a] = r[a];
    return e;
  }
  addBreakAttributes(e, r) {
    let a = e.querySelector("[data-break-before]"), n = e.querySelector("[data-break-after]"), i = e.querySelector("[data-previous-break-after]");
    a && (a.dataset.splitFrom ? (r.splitFrom = a.dataset.splitFrom, e.setAttribute("data-split-from", a.dataset.splitFrom)) : a.dataset.breakBefore && a.dataset.breakBefore !== "avoid" && (r.breakBefore = a.dataset.breakBefore, e.setAttribute("data-break-before", a.dataset.breakBefore))), n && n.dataset && (n.dataset.splitTo ? (r.splitTo = n.dataset.splitTo, e.setAttribute("data-split-to", n.dataset.splitTo)) : n.dataset.breakAfter && n.dataset.breakAfter !== "avoid" && (r.breakAfter = n.dataset.breakAfter, e.setAttribute("data-break-after", n.dataset.breakAfter))), i && i.dataset && i.dataset.previousBreakAfter && i.dataset.previousBreakAfter !== "avoid" && (r.previousBreakAfter = i.dataset.previousBreakAfter);
  }
  afterPageLayout(e, r) {
    this.addBreakAttributes(e, r);
  }
}
class rS extends N {
  constructor(e, r, a) {
    super(e, r, a);
  }
  onAtMedia(e, r, a) {
    let n = this.getMediaName(e), i;
    n.includes("print") ? (i = e.block.children, a.appendList(i), a.remove(r)) : !n.includes("all") && !n.includes("pagedjs-ignore") && a.remove(r);
  }
  getMediaName(e) {
    let r = [];
    if (!(typeof e.prelude > "u" || e.prelude.type !== "AtrulePrelude"))
      return C.walk(e.prelude, {
        visit: "Identifier",
        enter: (a, n, i) => {
          r.push(a.name);
        }
      }), r;
  }
}
class aS extends N {
  constructor(e, r, a) {
    super(e, r, a);
  }
  afterPageLayout(e, r, a, n) {
    let i = Array.from(e.querySelectorAll("[data-split-from]")), s = e.parentNode, o = Array.prototype.indexOf.call(s.children, e), l;
    if (o === 0)
      return;
    l = s.children[o - 1];
    let p;
    i.forEach((c) => {
      let m = c.dataset.ref;
      p = l.querySelector("[data-ref='" + m + "']:not([data-split-to])"), p && (p.dataset.splitTo = m, p.dataset.splitFrom || (p.dataset.splitOriginal = !0));
    }), p && this.handleAlignment(p);
  }
  handleAlignment(e) {
    let r = window.getComputedStyle(e), a = r["text-align"], n = r["text-align-last"];
    e.dataset.lastSplitElement = "true", a === "justify" && n === "auto" ? e.dataset.alignLastSplitElement = "justify" : e.dataset.alignLastSplitElement = n;
  }
}
class nS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.counters = {}, this.resetCountersMap = /* @__PURE__ */ new Map();
  }
  onDeclaration(e, r, a, n) {
    let i = e.property;
    if (i === "counter-increment") {
      this.handleIncrement(e, n);
      let s = !1;
      e.value.children.forEach((o) => {
        o.type && o.type !== "WhiteSpace" && (s = !0);
      }), s || a.remove(r);
    } else if (i === "counter-reset") {
      this.handleReset(e, n);
      let s = !1;
      e.value.children.forEach((o) => {
        o.type && o.type !== "WhiteSpace" && (s = !0);
      }), s || a.remove(r);
    }
  }
  afterParsed(e) {
    this.processCounters(e, this.counters), this.scopeCounters(this.counters);
  }
  addCounter(e) {
    return e in this.counters ? this.counters[e] : (this.counters[e] = {
      name: e,
      increments: {},
      resets: {}
    }, this.counters[e]);
  }
  handleIncrement(e, r) {
    let a = [], n = e.value.children;
    return n.forEach((i, s) => {
      if (i.type && i.type === "Identifier") {
        let o = i.name;
        if (o === "page" || o.indexOf("target-counter-") === 0)
          return;
        let l, p, c;
        s.next && s.next.data.type === "WhiteSpace" && (l = s.next), l && l.next && l.next.data.type === "Number" && (p = l.next, c = parseInt(p.data.value));
        let m = C.generate(r.ruleNode.prelude), d;
        o in this.counters ? d = this.counters[o] : d = this.addCounter(o);
        let u = {
          selector: m,
          number: c || 1
        };
        d.increments[m] = u, a.push(u), n.remove(s), l && n.remove(l), p && n.remove(p);
      }
    }), a;
  }
  handleReset(e, r) {
    let a = e.value.children;
    a.forEach((n, i) => {
      if (n.type && n.type === "Identifier") {
        let s = n.name, o, l, p;
        i.next && i.next.data.type === "WhiteSpace" && (o = i.next), o && o.next && (o.next.data.type === "Number" ? (l = o.next, p = parseInt(l.data.value)) : o.next.data.type === "Function" && o.next.data.name === "var" && (l = o.next, p = o.next.data.children.head.data.name));
        let c, m, d = r.ruleNode.prelude;
        r.ruleNode.type === "Atrule" && r.ruleNode.name === "page" ? m = ".pagedjs_page" : m = C.generate(d || r.ruleNode), s === "footnote" && this.addFootnoteMarkerCounter(e.value.children), s in this.counters ? c = this.counters[s] : c = this.addCounter(s);
        let u = {
          selector: m,
          number: p || 0
        };
        c.resets[m] = u, m !== ".pagedjs_page" && (a.remove(i), o && a.remove(o), l && a.remove(l));
      }
    });
  }
  processCounters(e, r) {
    let a;
    for (let n in r)
      a = this.counters[n], this.processCounterIncrements(e, a), this.processCounterResets(e, a), n !== "page" && this.addCounterValues(e, a);
  }
  scopeCounters(e) {
    let r = [];
    for (let a in e)
      a !== "page" && r.push(`${e[a].name} 0`);
    this.insertRule(`.pagedjs_pages { counter-reset: ${r.join(" ")} page 0 pages var(--pagedjs-page-count) footnote var(--pagedjs-footnotes-count) footnote-marker var(--pagedjs-footnotes-count)}`);
  }
  insertRule(e) {
    this.styleSheet.insertRule(e, this.styleSheet.cssRules.length);
  }
  processCounterIncrements(e, r) {
    let a;
    for (let n in r.increments) {
      a = r.increments[n];
      let i = e.querySelectorAll(a.selector);
      for (let s = 0; s < i.length; s++)
        i[s].setAttribute("data-counter-" + r.name + "-increment", a.number), i[s].getAttribute("data-counter-increment") ? i[s].setAttribute("data-counter-increment", i[s].getAttribute("data-counter-increment") + " " + r.name) : i[s].setAttribute("data-counter-increment", r.name);
    }
  }
  processCounterResets(e, r) {
    let a;
    for (let i in r.resets) {
      a = r.resets[i];
      let s = e.querySelectorAll(a.selector);
      for (var n = 0; n < s.length; n++) {
        let o = a.number;
        typeof o == "string" && o.startsWith("--") && (o = s[n].style.getPropertyValue(o) || 0), s[n].setAttribute("data-counter-" + r.name + "-reset", o), s[n].getAttribute("data-counter-reset") ? s[n].setAttribute("data-counter-reset", s[n].getAttribute("data-counter-reset") + " " + r.name) : s[n].setAttribute("data-counter-reset", r.name);
      }
    }
  }
  addCounterValues(e, r) {
    let a = r.name;
    if (a === "page" || a === "footnote")
      return;
    let n = e.querySelectorAll("[data-counter-" + a + "-reset], [data-counter-" + a + "-increment]"), i = 0, s, o, l, p, c, m, d;
    for (let u = 0; u < n.length; u++)
      s = n[u], m = 0, d = [], s.hasAttribute("data-counter-" + a + "-reset") && (l = s.getAttribute("data-counter-" + a + "-reset"), p = parseInt(l), m = p - i, d.push(`${a} ${m}`), i = p), s.hasAttribute("data-counter-" + a + "-increment") && (o = s.getAttribute("data-counter-" + a + "-increment"), c = parseInt(o), i += c, s.setAttribute("data-counter-" + a + "-value", i), d.push(`${a} ${c}`)), d.length > 0 && this.incrementCounterForElement(s, d);
  }
  addFootnoteMarkerCounter(e) {
    let r = [];
    C.walk(e, {
      visit: "Identifier",
      enter: (a, n, i) => {
        r.push(a.name);
      }
    }), !r.includes("footnote-maker") && (e.insertData({
      type: "WhiteSpace",
      value: " "
    }), e.insertData({
      type: "Identifier",
      name: "footnote-marker"
    }), e.insertData({
      type: "WhiteSpace",
      value: " "
    }), e.insertData({
      type: "Number",
      value: 0
    }));
  }
  incrementCounterForElement(e, r) {
    if (!e || !r || r.length === 0) return;
    const a = e.dataset.ref, n = Array.from(this.styleSheet.cssRules).filter((s) => s.selectorText === `[data-ref="${e.dataset.ref}"]:not([data-split-from])` && s.style[0] === "counter-increment").map((s) => s.style.counterIncrement);
    n.push(this.mergeIncrements(
      r,
      (s, o) => (parseInt(s) || 0) + (parseInt(o) || 0)
    ));
    const i = this.mergeIncrements(n, (s, o) => o);
    this.insertRule(`[data-ref="${a}"]:not([data-split-from]) { counter-increment: ${i} }`);
  }
  /**
   * Merge multiple values of a counter-increment CSS rule, using the specified operator.
   *
   * @param {Array} incrementArray the values to merge, e.g. ['c1 1', 'c1 -7 c2 1']
   * @param {Function} operator the function used to merge counter values (e.g. keep the last value of a counter or sum
   *					the counter values)
   * @return {string} the merged value of the counter-increment CSS rule
   */
  mergeIncrements(e, r) {
    const a = {};
    return e.forEach((n) => {
      let i = n.split(" ");
      for (let s = 0; s < i.length; s += 2)
        a[i[s]] = r(a[i[s]], i[s + 1]);
    }), Object.entries(a).map(([n, i]) => `${n} ${i}`).join(" ");
  }
  afterPageLayout(e, r) {
    let a = [];
    e.querySelectorAll("[data-counter-page-reset]:not([data-split-from])").forEach((s) => {
      const o = s.dataset && s.dataset.ref;
      if (!(o && this.resetCountersMap.has(o))) {
        o && this.resetCountersMap.set(o, "");
        let l = s.dataset.counterPageReset;
        a.push(`page ${l}`);
      }
    }), e.querySelectorAll("[data-counter-footnote-reset]:not([data-split-from])").forEach((s) => {
      let o = s.dataset.counterFootnoteReset;
      a.push(`footnote ${o}`), a.push(`footnote-marker ${o}`);
    }), a.length && this.styleSheet.insertRule(`[data-page-number="${e.dataset.pageNumber}"] { counter-increment: none; counter-reset: ${a.join(" ")} }`, this.styleSheet.cssRules.length);
  }
}
class iS extends N {
  constructor(e, r, a) {
    super(e, r, a);
  }
  afterParsed(e) {
    const r = e.querySelectorAll("ol");
    for (var a of r)
      this.addDataNumbers(a);
  }
  afterPageLayout(e, r, a, n) {
    var i = e.getElementsByTagName("ol");
    for (var s of i)
      s.firstElementChild && (s.start = s.firstElementChild.dataset.itemNum);
  }
  addDataNumbers(e) {
    let r = 1;
    e.hasAttribute("start") && (r = parseInt(e.getAttribute("start"), 10), isNaN(r) && (r = 1));
    let a = e.children;
    for (var n = 0; n < a.length; n++)
      a[n].setAttribute("data-item-num", n + r);
  }
}
class sS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.fixedElementsSelector = [], this.fixedElements = [];
  }
  onDeclaration(e, r, a, n) {
    if (e.property === "position" && e.value.children.first().name === "fixed") {
      let i = C.generate(n.ruleNode.prelude);
      this.fixedElementsSelector.push(i), a.remove(r);
    }
  }
  afterParsed(e) {
    this.fixedElementsSelector.forEach((r) => {
      e.querySelectorAll(`${r}`).forEach((a) => {
        a.style.setProperty("position", "absolute"), this.fixedElements.push(a), a.remove();
      });
    });
  }
  afterPageLayout(e, r, a) {
    this.fixedElements.forEach((n) => {
      const i = n.cloneNode(!0);
      e.querySelector(".pagedjs_pagebox").insertAdjacentElement("afterbegin", i);
    });
  }
}
class oS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.pageCounter = {
      name: "page",
      increments: {},
      resets: {}
    };
  }
  onDeclaration(e, r, a, n) {
    e.property === "counter-increment" && this.handleIncrement(e, n) && a.remove(r);
  }
  afterParsed(e) {
    for (const r in this.pageCounter.increments) {
      const a = this.pageCounter.increments[r];
      this.insertRule(`${a.selector} { --pagedjs-page-counter-increment: ${a.number} }`);
    }
  }
  handleIncrement(e, r) {
    const a = e.value.children.first(), n = e.value.children.getSize() > 1 ? e.value.children.last().value : 1, i = a && a.name;
    if (i && i.indexOf("target-counter-") === 0 || i !== "page" || r.ruleNode.name === "page" && r.ruleNode.type === "Atrule")
      return;
    const s = C.generate(r.ruleNode.prelude);
    return this.pageCounter.increments[s] = {
      selector: s,
      number: n
    };
  }
  insertRule(e) {
    this.styleSheet.insertRule(e, this.styleSheet.cssRules.length);
  }
}
class lS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.selectors = {};
  }
  onRule(e, r, a) {
    let n = C.generate(e.prelude);
    if (n.match(/:(first|last|nth)-of-type/)) {
      let i = C.generate(e.block);
      i = i.replace(/[{}]/g, "");
      let s = "nth-of-type-" + ue();
      n.split(",").forEach((o) => {
        this.selectors[o] ? this.selectors[o][1] = `${this.selectors[o][1]};${i}` : this.selectors[o] = [s, i];
      }), a.remove(r);
    }
  }
  afterParsed(e) {
    this.processSelectors(e, this.selectors);
  }
  processSelectors(e, r) {
    for (let n in r) {
      let i = e.querySelectorAll(n);
      for (var a = 0; a < i.length; a++) {
        let o = i[a].getAttribute("data-nth-of-type");
        o && o != "" ? (o = `${o},${r[n][0]}`, i[a].setAttribute("data-nth-of-type", o)) : i[a].setAttribute("data-nth-of-type", r[n][0]);
      }
      let s = `*[data-nth-of-type*='${r[n][0]}'] { ${r[n][1]}; }`;
      this.styleSheet.insertRule(s, this.styleSheet.cssRules.length);
    }
  }
}
class dS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.selectors = {};
  }
  onRule(e, r, a) {
    let n = C.generate(e.prelude);
    if (n.match(/\+/)) {
      let i = C.generate(e.block);
      i = i.replace(/[{}]/g, "");
      let s = "following-" + ue();
      n.split(",").forEach((o) => {
        this.selectors[o] ? this.selectors[o][1] = `${this.selectors[o][1]};${i}` : this.selectors[o] = [s, i];
      }), a.remove(r);
    }
  }
  afterParsed(e) {
    this.processSelectors(e, this.selectors);
  }
  processSelectors(e, r) {
    for (let n in r) {
      let i = e.querySelectorAll(n);
      for (var a = 0; a < i.length; a++) {
        let o = i[a].getAttribute("data-following");
        o && o != "" ? (o = `${o},${r[n][0]}`, i[a].setAttribute("data-following", o)) : i[a].setAttribute("data-following", r[n][0]);
      }
      let s = `*[data-following*='${r[n][0]}'] { ${r[n][1]}; }`;
      this.styleSheet.insertRule(s, this.styleSheet.cssRules.length);
    }
  }
}
class pS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.footnotes = {}, this.needsLayout = [];
  }
  onDeclaration(e, r, a, n) {
    let i = e.property;
    if (i === "float") {
      let s = e.value.children && e.value.children.first();
      if ((s && s.name) === "footnote") {
        let l = C.generate(n.ruleNode.prelude);
        this.footnotes[l] = {
          selector: l,
          policy: "auto",
          display: "block"
        }, a.remove(r);
      }
    }
    if (i === "footnote-policy") {
      let s = e.value.children && e.value.children.first(), o = s && s.name;
      if (o) {
        let l = C.generate(n.ruleNode.prelude), p = this.footnotes[l];
        p && (p.policy = o);
      }
    }
    if (i === "footnote-display") {
      let s = e.value.children && e.value.children.first(), o = s && s.name, l = C.generate(n.ruleNode.prelude);
      if (o && this.footnotes[l]) {
        let p = this.footnotes[l];
        p && (p.display = o);
      }
    }
  }
  onPseudoSelector(e, r, a, n, i) {
    let s = e.name;
    if (s === "footnote-marker") {
      let o = i.ruleNode.prelude, l = new C.List();
      o.children.first().children.each((p) => {
        p.type !== "PseudoElementSelector" && l.appendData(p);
      }), l.appendData({
        type: "AttributeSelector",
        name: {
          type: "Identifier",
          name: "data-footnote-marker"
        },
        flags: null,
        loc: null,
        matcher: null,
        value: null
      }), l.appendData({
        type: "PseudoElementSelector",
        name: "marker",
        loc: null,
        children: null
      }), o.children.first().children = l;
    }
    if (s === "footnote-call") {
      let o = i.ruleNode.prelude, l = new C.List();
      o.children.first().children.each((p) => {
        p.type !== "PseudoElementSelector" && l.appendData(p);
      }), l.appendData({
        type: "AttributeSelector",
        name: {
          type: "Identifier",
          name: "data-footnote-call"
        },
        flags: null,
        loc: null,
        matcher: null,
        value: null
      }), l.appendData({
        type: "PseudoElementSelector",
        name: "after",
        loc: null,
        children: null
      }), o.children.first().children = l;
    }
  }
  afterParsed(e) {
    this.processFootnotes(e, this.footnotes);
  }
  processFootnotes(e, r) {
    for (let n in r) {
      let i = e.querySelectorAll(n), s, o = r[n];
      for (var a = 0; a < i.length; a++)
        s = i[a], s.setAttribute("data-note", "footnote"), s.setAttribute("data-break-before", "avoid"), s.setAttribute("data-note-policy", o.policy || "auto"), s.setAttribute("data-note-display", o.display || "block"), this.processFootnoteContainer(s);
    }
  }
  processFootnoteContainer(e) {
    let r = e.parentElement, a = r;
    for (; r; ) {
      if (io(r)) {
        a.setAttribute("data-has-notes", "true");
        break;
      }
      a = r, r = r.parentElement, r || a.setAttribute("data-has-notes", "true");
    }
  }
  renderNode(e) {
    if (e.nodeType == 1) {
      let r;
      if (!e.dataset)
        return;
      e.dataset.note === "footnote" ? r = [e] : (e.dataset.hasNotes || e.querySelectorAll("[data-note='footnote']")) && (r = e.querySelectorAll("[data-note='footnote']")), r && r.length && this.findVisibleFootnotes(r, e);
    }
  }
  findVisibleFootnotes(e, r) {
    let a, n, i;
    a = r.closest(".pagedjs_page_content"), n = a.getBoundingClientRect(), i = n.left + n.width;
    for (let s = 0; s < e.length; ++s) {
      let o = e[s];
      o.getBoundingClientRect().left < i && this.moveFootnote(o, r.closest(".pagedjs_area"), !0);
    }
  }
  moveFootnote(e, r, a) {
    let n = r.querySelector(".pagedjs_footnote_area"), i = n.querySelector(".pagedjs_footnote_content"), s = i.querySelector(".pagedjs_footnote_inner_content");
    if (!Y(e))
      return;
    let o;
    if (a && (o = this.createFootnoteCall(e)), e.removeAttribute("data-break-before"), s.querySelector(`[data-ref="${e.dataset.ref}"]`)) {
      e.remove();
      return;
    }
    s.appendChild(e), i.classList.contains("pagedjs_footnote_empty") && i.classList.remove("pagedjs_footnote_empty"), e.dataset.footnoteMarker = e.dataset.ref, e.id = `note-${e.dataset.ref}`;
    let p = i.scrollHeight, m = r.querySelector(".pagedjs_page_content").getBoundingClientRect(), d = m.left + m.width, u = o && o.getBoundingClientRect(), g = n.getBoundingClientRect(), S = this.marginsHeight(i), b = this.paddingHeight(i), f = this.borderHeight(i), y = S + b + f, w = Math.floor(g.top);
    g.height === 0 && (w -= this.marginsHeight(i, !1), w -= this.paddingHeight(i, !1), w -= this.borderHeight(i, !1));
    let h = e.dataset.notePolicy, v = 0, x = 0;
    if (o) {
      let P = o.previousSibling, M = new Range();
      P ? M.setStartBefore(P) : M.setStartBefore(o), M.setEndAfter(o);
      let W = M.getBoundingClientRect();
      if (v = W.bottom, !h || h === "auto")
        x = Math.ceil(W.bottom);
      else if (h === "line")
        x = Math.ceil(W.top);
      else if (h === "block") {
        let $ = o.closest("p").previousElementSibling;
        $ ? x = Math.ceil(
          $.getBoundingClientRect().bottom
        ) : x = Math.ceil(W.bottom);
      }
    }
    let k = p + y - g.height, E = v ? w - v : 0, A = v ? Math.floor(g.top) - x : 0, B = n.querySelector("[data-note='footnote']");
    if (a && u.left > d)
      e.remove();
    else if (!B && a && y > E) {
      r.style.setProperty("--pagedjs-footnotes-height", "0px");
      let P = document.createElement("div");
      P.appendChild(e), this.needsLayout.push(P);
    } else a ? v < g.top - k ? r.style.setProperty(
      "--pagedjs-footnotes-height",
      `${p + S + f}px`
    ) : (r.style.setProperty(
      "--pagedjs-footnotes-height",
      `${g.height + A}px`
    ), s.style.height = g.height + A - y + "px") : r.style.setProperty(
      "--pagedjs-footnotes-height",
      `${p + y}px`
    );
  }
  createFootnoteCall(e) {
    let r = e.parentElement, a = document.createElement("a");
    for (const n of e.classList)
      a.classList.add(`${n}`);
    return a.dataset.footnoteCall = e.dataset.ref, a.dataset.ref = e.dataset.ref, a.dataset.dataCounterFootnoteIncrement = 1, a.href = `#note-${e.dataset.ref}`, r.insertBefore(a, e), a;
  }
  afterPageLayout(e, r, a, n) {
    let i = e.querySelector(".pagedjs_area"), s = r.footnotesArea, o = s.querySelector(".pagedjs_footnote_content"), l = s.querySelector(".pagedjs_footnote_inner_content"), p = o.getBoundingClientRect(), { width: c } = p;
    l.style.columnWidth = Math.round(c) + "px", l.style.columnGap = "calc(var(--pagedjs-margin-right) + var(--pagedjs-margin-left))";
    let d = new Ka(s, void 0, n.settings).findOverflow(l, p);
    if (d) {
      let { startContainer: u, startOffset: g } = d, S;
      if (Y(u)) {
        let x = u.childNodes[g];
        S = Y(x) && x.hasAttribute("data-footnote-marker");
      }
      let b = d.extractContents();
      if (!S) {
        let x = b.firstElementChild;
        x.dataset.splitFrom = x.dataset.ref, this.handleAlignment(l.lastElementChild);
      }
      this.needsLayout.push(b), o.style.removeProperty("height"), l.style.removeProperty("height");
      let f = l.getBoundingClientRect(), { height: y } = f, w = this.marginsHeight(o), h = this.paddingHeight(o), v = this.borderHeight(o);
      if (i.style.setProperty(
        "--pagedjs-footnotes-height",
        `${y + w + v + h}px`
      ), l.childNodes.length === 0 && o.classList.add("pagedjs_footnote_empty"), !a)
        n.clonePage(r);
      else {
        let x, k;
        a.node && typeof a.node.dataset < "u" && typeof a.node.dataset.previousBreakAfter < "u" && (k = a.node.dataset.previousBreakAfter), a.node && typeof a.node.dataset < "u" && typeof a.node.dataset.breakBefore < "u" && (x = a.node.dataset.breakBefore), (x || k) && n.clonePage(r);
      }
    }
    l.style.height = "auto";
  }
  handleAlignment(e) {
    let a = window.getComputedStyle(e)["text-align-last"];
    e.dataset.lastSplitElement = "true", a === "auto" ? e.dataset.alignLastSplitElement = "justify" : e.dataset.alignLastSplitElement = a;
  }
  beforePageLayout(e) {
    for (; this.needsLayout.length; ) {
      let r = this.needsLayout.shift();
      Array.from(r.childNodes).forEach((a) => {
        this.moveFootnote(
          a,
          e.element.querySelector(".pagedjs_area"),
          !1
        );
      });
    }
  }
  afterOverflowRemoved(e, r) {
    let a = r.closest(".pagedjs_area"), n = a.querySelectorAll(".pagedjs_footnote_area [data-note='footnote']");
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      e.querySelector(`[data-footnote-call="${o.dataset.ref}"]`) && o.remove();
    }
    let i = a.querySelector(".pagedjs_footnote_inner_content");
    i && i.childNodes.length === 0 && i.parentElement.classList.add("pagedjs_footnote_empty");
  }
  marginsHeight(e, r = !0) {
    let a = window.getComputedStyle(e), n = parseInt(a.marginTop), i = parseInt(a.marginBottom), s = 0;
    return n && (s += n), i && r && (s += i), s;
  }
  paddingHeight(e, r = !0) {
    let a = window.getComputedStyle(e), n = parseInt(a.paddingTop), i = parseInt(a.paddingBottom), s = 0;
    return n && (s += n), i && r && (s += i), s;
  }
  borderHeight(e, r = !0) {
    let a = window.getComputedStyle(e), n = parseInt(a.borderTop), i = parseInt(a.borderBottom), s = 0;
    return n && (s += n), i && r && (s += i), s;
  }
}
const cS = [
  rS,
  eS,
  tS,
  aS,
  nS,
  iS,
  sS,
  oS,
  lS,
  dS,
  pS
];
class uS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.runningSelectors = {}, this.elements = {};
  }
  onDeclaration(e, r, a, n) {
    if (e.property === "position") {
      let i = C.generate(n.ruleNode.prelude), s = e.value.children.first().name;
      if (s === "running") {
        let o;
        C.walk(e, {
          visit: "Function",
          enter: (l, p, c) => {
            o = l.children.first().name;
          }
        }), this.runningSelectors[o] = {
          identifier: s,
          value: o,
          selector: i
        };
      }
    }
    e.property === "content" && C.walk(e, {
      visit: "Function",
      enter: (i, s, o) => {
        if (i.name.indexOf("element") > -1) {
          let l = C.generate(n.ruleNode.prelude), p = i.name, c = i.children.first().name, m = [c], d = "first";
          l.split(",").forEach((u) => {
            u = u.replace(/::after|::before/, ""), this.elements[u] = {
              func: p,
              args: m,
              value: c,
              style: d,
              selector: u,
              fullSelector: l
            };
          });
        }
      }
    });
  }
  afterParsed(e) {
    for (let r of Object.keys(this.runningSelectors)) {
      let a = this.runningSelectors[r], n = Array.from(e.querySelectorAll(a.selector));
      if (a.identifier === "running")
        for (let i of n)
          i.style.display = "none";
    }
  }
  afterPageLayout(e) {
    for (let r of Object.keys(this.runningSelectors)) {
      let a = this.runningSelectors[r], n = e.querySelector(a.selector);
      n && (a.identifier === "running" ? a.first = n : console.warn(a.value + "needs css replacement"));
    }
    this.orderedSelectors || (this.orderedSelectors = this.orderSelectors(this.elements));
    for (let r of this.orderedSelectors)
      if (r) {
        let a = this.elements[r], n = e.querySelector(r);
        if (n) {
          let i = this.runningSelectors[a.args[0]];
          if (i && i.first) {
            n.innerHTML = "";
            let s = i.first.cloneNode(!0);
            s.style.display = null, n.appendChild(s);
          }
        }
      }
  }
  /**
  * Assign a weight to @page selector classes
  * 1) page
  * 2) left & right
  * 3) blank
  * 4) first & nth
  * 5) named page
  * 6) named left & right
  * 7) named first & nth
  * @param {string} [s] selector string
  * @return {int} weight
  */
  pageWeight(e) {
    let r = 1, a = e.split(" "), n = a.length && a[0].split(".");
    switch (n.shift(), n.length) {
      case 4:
        /^pagedjs_[\w-]+_first_page$/.test(n[3]) ? r = 7 : (n[3] === "pagedjs_left_page" || n[3] === "pagedjs_right_page") && (r = 6);
        break;
      case 3:
        n[1] === "pagedjs_named_page" && (n[2].indexOf(":nth-of-type") > -1 ? r = 7 : r = 5);
        break;
      case 2:
        n[1] === "pagedjs_first_page" ? r = 4 : n[1] === "pagedjs_blank_page" ? r = 3 : (n[1] === "pagedjs_left_page" || n[1] === "pagedjs_right_page") && (r = 2);
        break;
      default:
        n[0].indexOf(":nth-of-type") > -1 ? r = 4 : r = 1;
    }
    return r;
  }
  /**
  * Orders the selectors based on weight
  *
  * Does not try to deduplicate base on specifity of the selector
  * Previous matched selector will just be overwritten
  * @param {obj} [obj] selectors object
  * @return {Array} orderedSelectors
  */
  orderSelectors(e) {
    let r = Object.keys(e), a = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: []
    }, n = [];
    for (let s of r) {
      let o = this.pageWeight(s);
      a[o].unshift(s);
    }
    for (var i = 1; i <= 7; i++)
      n = n.concat(a[i]);
    return n;
  }
  beforeTreeParse(e, r) {
    r.text = e.replace(/element[\s]*\(([^|^#)]*)\)/g, "element-ident($1)");
  }
}
function Be(t, e = `"' `) {
  if (t != null)
    return t.replace(new RegExp(`^[${e}]+`), "").replace(new RegExp(`[${e}]+$`), "").replace(/["']/g, (r) => "\\" + r).replace(/[\n]/g, (r) => "\\00000A");
}
function mS(t) {
  if (t != null)
    return t.replace(new RegExp("::footnote-call", "g"), "").replace(new RegExp("::footnote-marker", "g"), "");
}
class hS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.stringSetSelectors = {}, this.type, this.pageLastString;
  }
  onDeclaration(e, r, a, n) {
    if (e.property === "string-set") {
      let i = C.generate(n.ruleNode.prelude), s = [], o = [], l = [];
      e.value.children.forEach((p) => {
        p.type === "Identifier" && s.push(p.name), p.type === "Function" && (o.push(p.name), p.children.forEach((c) => {
          c.type === "Identifier" && l.push(c.name);
        }));
      }), s.forEach((p, c) => {
        let m = o[c], d = l[c];
        this.stringSetSelectors[p] = {
          identifier: p,
          func: m,
          value: d,
          selector: i
        };
      });
    }
  }
  onContent(e, r, a, n, i) {
    if (e.name === "string") {
      let s = e.children && e.children.first().name;
      this.type = e.children.last().name, e.name = "var", e.children = new C.List(), this.type === "first" || this.type === "last" || this.type === "start" || this.type === "first-except" ? e.children.append(
        e.children.createItem({
          type: "Identifier",
          loc: null,
          name: "--pagedjs-string-" + this.type + "-" + s
        })
      ) : e.children.append(
        e.children.createItem({
          type: "Identifier",
          loc: null,
          name: "--pagedjs-string-first-" + s
        })
      );
    }
  }
  afterPageLayout(e) {
    this.pageLastString === void 0 && (this.pageLastString = {});
    for (let r of Object.keys(this.stringSetSelectors)) {
      let a = this.stringSetSelectors[r], n = a.value, i = a.func, s = e.querySelectorAll(a.selector), o = r in this.pageLastString ? this.pageLastString[r] : "", l, p, c, m;
      if (s.length == 0)
        l = o, p = o, c = o, m = o;
      else {
        s.forEach((S) => {
          i === "content" && (this.pageLastString[r] = s[s.length - 1].textContent), i === "attr" && (this.pageLastString[r] = s[s.length - 1].getAttribute(n) || "");
        }), i === "content" && (l = s[0].textContent), i === "attr" && (l = s[0].getAttribute(n) || ""), i === "content" && (p = s[s.length - 1].textContent), i === "attr" && (p = s[s.length - 1].getAttribute(n) || "");
        let d = s[0].getBoundingClientRect().top, g = s[0].closest(".pagedjs_page_content").getBoundingClientRect().top;
        d == g ? c = l : c = o, m = "";
      }
      e.style.setProperty(`--pagedjs-string-first-${r}`, `"${Be(l)}`), e.style.setProperty(`--pagedjs-string-last-${r}`, `"${Be(p)}`), e.style.setProperty(`--pagedjs-string-start-${r}`, `"${Be(c)}`), e.style.setProperty(`--pagedjs-string-first-except-${r}`, `"${Be(m)}`);
    }
  }
}
class gS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.counterTargets = {};
  }
  onContent(e, r, a, n, i) {
    if (e.name === "target-counter") {
      let s = C.generate(i.ruleNode.prelude), o = e.children.first(), l = o.name, p = C.generate(e), c = [];
      o.children.forEach((S) => {
        S.type === "Identifier" && c.push(S.name);
      });
      let m, d, u;
      e.children.forEach((S) => {
        S.type === "Identifier" && (m ? d || (u = C.clone(S), d = S.name) : m = S.name);
      });
      let g = "target-counter-" + ue();
      s.split(",").forEach((S) => {
        this.counterTargets[S] = {
          func: l,
          args: c,
          value: p,
          counter: m,
          style: d,
          selector: S,
          fullSelector: s,
          variable: g
        };
      }), e.name = "counter", e.children = new C.List(), e.children.appendData({
        type: "Identifier",
        loc: 0,
        name: g
      }), u && (e.children.appendData({ type: "Operator", loc: null, value: "," }), e.children.appendData(u));
    }
  }
  afterPageLayout(e, r, a, n) {
    Object.keys(this.counterTargets).forEach((i) => {
      let s = this.counterTargets[i], o = s.selector.split(/::?/g), l = o[0];
      n.pagesArea.querySelectorAll(l + ":not([data-" + s.variable + "])").forEach((c, m) => {
        if (s.func !== "attr")
          return;
        let d = to(c, s.args), u = n.pagesArea.querySelector(ro(d));
        if (u) {
          let g = ue();
          c.setAttribute("data-" + s.variable, g);
          let S = "";
          if (o.length > 1 && (S += "::" + o[1]), s.counter === "page") {
            let f = n.pagesArea.querySelectorAll(".pagedjs_page"), y = 0;
            for (let w = 0; w < f.length; w++) {
              let h = f[w], v = window.getComputedStyle(h), x = v["counter-reset"].replace("page", "").trim(), k = v["counter-increment"].replace("page", "").trim();
              if (x !== "none" && (y = parseInt(x)), k !== "none" && (y += parseInt(k)), h.contains(u))
                break;
            }
            this.styleSheet.insertRule(`[data-${s.variable}="${g}"]${S} { counter-reset: ${s.variable} ${y}; }`, this.styleSheet.cssRules.length);
          } else {
            let f = u.getAttribute(`data-counter-${s.counter}-value`);
            f && this.styleSheet.insertRule(`[data-${s.variable}="${g}"]${S} { counter-reset: ${s.variable} ${s.variable} ${parseInt(f)}; }`, this.styleSheet.cssRules.length);
          }
          let b = document.querySelector(`[data-${s.variable}="${g}"]`);
          b && (b.style.display = "none", b.clientHeight, b.style.removeProperty("display"));
        }
      });
    });
  }
}
class fS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.textTargets = {}, this.beforeContent = "", this.afterContent = "", this.selector = {};
  }
  onContent(e, r, a, n, i) {
    if (e.name === "target-text") {
      this.selector = C.generate(i.ruleNode.prelude);
      let s = e.children.first(), o = e.children.last(), l = s.name, p = C.generate(e), c = [];
      s.children.forEach((u) => {
        u.type === "Identifier" && c.push(u.name);
      });
      let m;
      o !== s && (m = o.name);
      let d = "--pagedjs-" + ue();
      this.selector.split(",").forEach((u) => {
        this.textTargets[u] = {
          func: l,
          args: c,
          value: p,
          style: m || "content",
          selector: u,
          fullSelector: this.selector,
          variable: d
        };
      }), e.name = "var", e.children = new C.List(), e.children.appendData({
        type: "Identifier",
        loc: 0,
        name: d
      });
    }
  }
  //   parse this on the ONCONTENT : get all before and after and replace the value with a variable
  onPseudoSelector(e, r, a, n, i) {
    i.ruleNode.block.children.forEach((s) => {
      e.name === "before" && s.property === "content" ? s.value.children.forEach((l) => {
        l.type === "String" && (this.beforeContent = l.value);
      }) : e.name === "after" && s.property === "content" && s.value.children.forEach((o) => {
        o.type === "String" && (this.afterContent = o.value);
      });
    });
  }
  afterParsed(e) {
    Object.keys(this.textTargets).forEach((r) => {
      let a = this.textTargets[r], n = a.selector.split("::"), i = n[0], s = e.querySelectorAll(i), o;
      s.forEach((l, p) => {
        let c = to(l, a.args), m = e.querySelector(ro(c));
        if (m)
          if (a.style) {
            this.selector = ue(), l.setAttribute("data-target-text", this.selector);
            let d = "";
            if (n.length > 1 && (d += "::" + n[1]), a.style === "before" || a.style === "after") {
              const u = `${a.style}Content`;
              o = Be(this[u]);
            } else
              o = Be(m.textContent, " ");
            o = a.style === "first-letter" ? o.charAt(0) : o, this.styleSheet.insertRule(`[data-target-text="${this.selector}"]${d} { ${a.variable}: "${o}" }`);
          } else
            console.warn("missed target", c);
      });
    });
  }
}
const yS = [
  uS,
  hS,
  gS,
  fS
];
class vS extends N {
  constructor(e, r, a) {
    super(e, r, a);
  }
  filter(e) {
    so(e, (r) => this.filterEmpty(r), NodeFilter.SHOW_TEXT);
  }
  filterEmpty(e) {
    if (e.textContent.length > 1 && sr(e)) {
      let r = e.parentNode;
      if (Y(r) && r.closest("pre"))
        return NodeFilter.FILTER_REJECT;
      const n = Ea(e), i = _a(e);
      return i === null && n === null ? (e.textContent = " ", NodeFilter.FILTER_REJECT) : i === null || n === null ? NodeFilter.FILTER_ACCEPT : (e.textContent = " ", NodeFilter.FILTER_REJECT);
    } else
      return NodeFilter.FILTER_REJECT;
  }
}
class bS extends N {
  constructor(e, r, a) {
    super(e, r, a);
  }
  filter(e) {
    so(e, null, NodeFilter.SHOW_COMMENT);
  }
}
class SS extends N {
  constructor(e, r, a) {
    super(e, r, a);
  }
  filter(e) {
    e.querySelectorAll("script").forEach((r) => {
      r.remove();
    });
  }
}
var Hl = {};
(function(t) {
  var e = /(\[[^\]]+\])/g, r = /(#[^\s\+>~\.\[:]+)/g, a = /(\.[^\s\+>~\.\[:]+)/g, n = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/g, i = /(:[^\s\+>~\.\[:]+)/g, s = /([^\s\+>~\.\[:]+)/g, o = /:not\(([^\)]*)\)/g, l = /\{[^]*/gm, p = /[\*\s\+>~]/g, c = /[#\.]/g, m = function(b, f, y, w) {
    var h = w.match(b);
    if (h)
      for (var v = 0; v < h.length; v++)
        y[f]++, w = w.replace(h[v], " ");
    return w;
  }, d = function(b) {
    var f = b.indexOf(",");
    f !== -1 && (b = b.substring(0, f));
    var y = {
      a: 0,
      b: 0,
      c: 0
    };
    return b = b.replace(o, " $1 "), b = b.replace(l, " "), b = m(e, "b", y, b), b = m(r, "a", y, b), b = m(a, "b", y, b), b = m(n, "c", y, b), b = m(i, "b", y, b), b = b.replace(p, " "), b = b.replace(c, " "), m(s, "c", y, b), y.a * 100 + y.b * 10 + y.c * 1;
  }, u = {};
  t.calculateSpecificity = function(b) {
    var f = u[b];
    return f === void 0 && (f = d(b), u[b] = f), f;
  };
  var g = {}, S = null;
  t.isSelectorValid = function(b) {
    var f = g[b];
    if (f === void 0) {
      S == null && (S = document.createElement("div"));
      try {
        S.querySelector(b), f = !0;
      } catch {
        f = !1;
      }
      g[b] = f;
    }
    return f;
  }, t.validateSelector = function(b) {
    if (!t.isSelectorValid(b)) {
      var f = new SyntaxError(b + " is not a valid selector");
      throw f.code = "EBADSELECTOR", f;
    }
  };
})(Hl);
class xS extends N {
  constructor(e, r, a) {
    super(e, r, a), this.displayRules = {};
  }
  onDeclaration(e, r, a, n) {
    if (e.property === "display") {
      let i = C.generate(n.ruleNode.prelude), s = e.value.children.first().name;
      i.split(",").forEach((o) => {
        this.displayRules[o] = {
          value: s,
          selector: o,
          specificity: Hl.calculateSpecificity(o),
          important: e.important
        };
      });
    }
  }
  filter(e) {
    let { matches: r, selectors: a } = this.sortDisplayedSelectors(e, this.displayRules);
    for (let i = 0; i < r.length; i++) {
      let s = r[i], o = a[i], l = o[o.length - 1].value;
      this.removable(s) && l === "none" && (s.dataset.undisplayed = "undisplayed");
    }
    let n = e.querySelectorAll("[style]");
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      this.removable(s) && (s.dataset.undisplayed = "undisplayed");
    }
  }
  sorter(e, r) {
    return e.important && !r.important ? 1 : r.important && !e.important ? -1 : e.specificity - r.specificity;
  }
  sortDisplayedSelectors(e, r = []) {
    let a = [], n = [];
    for (let i in r) {
      let s = r[i], o = s.selector, l = [];
      try {
        try {
          l = e.querySelectorAll(o);
        } catch {
          l = e.querySelectorAll(mS(o));
        }
      } catch {
        l = [];
      }
      let p = Array.from(l);
      for (let c of p)
        if (a.includes(c)) {
          let m = a.indexOf(c);
          n[m].push(s), n[m] = n[m].sort(this.sorter);
        } else
          a.push(c), n.push([s]);
    }
    return { matches: a, selectors: n };
  }
  removable(e) {
    return !(e.style && e.style.display !== "" && e.style.display !== "none");
  }
}
const wS = [
  vS,
  bS,
  SS,
  xS
];
var CS = function() {
  var t = Array.from, e, r;
  return typeof t != "function" ? !1 : (e = ["raz", "dwa"], r = t(e), !!(r && r !== e && r[1] === "dwa"));
}, aa, ys;
function kS() {
  return ys || (ys = 1, aa = function() {
    return typeof globalThis != "object" || !globalThis ? !1 : globalThis.Array === Array;
  }), aa;
}
var na, vs;
function TS() {
  if (vs) return na;
  vs = 1;
  var t = function() {
    if (typeof self == "object" && self) return self;
    if (typeof window == "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
  };
  return na = function() {
    if (this) return this;
    try {
      Object.defineProperty(Object.prototype, "__global__", {
        get: function() {
          return this;
        },
        configurable: !0
      });
    } catch {
      return t();
    }
    try {
      return __global__ || t();
    } finally {
      delete Object.prototype.__global__;
    }
  }(), na;
}
var ia, bs;
function Cr() {
  return bs || (bs = 1, ia = kS()() ? globalThis : TS()), ia;
}
var sa, Ss;
function ES() {
  if (Ss) return sa;
  Ss = 1;
  var t = Cr(), e = { object: !0, symbol: !0 };
  return sa = function() {
    var r = t.Symbol, a;
    if (typeof r != "function") return !1;
    a = r("test symbol");
    try {
      String(a);
    } catch {
      return !1;
    }
    return !(!e[typeof r.iterator] || !e[typeof r.toPrimitive] || !e[typeof r.toStringTag]);
  }, sa;
}
var oa, xs;
function _S() {
  return xs || (xs = 1, oa = function(t) {
    return t ? typeof t == "symbol" ? !0 : !t.constructor || t.constructor.name !== "Symbol" ? !1 : t[t.constructor.toStringTag] === "Symbol" : !1;
  }), oa;
}
var la, ws;
function Ul() {
  if (ws) return la;
  ws = 1;
  var t = _S();
  return la = function(e) {
    if (!t(e)) throw new TypeError(e + " is not a symbol");
    return e;
  }, la;
}
var da, Cs;
function AS() {
  if (Cs) return da;
  Cs = 1;
  var t = qe, e = Object.create, r = Object.defineProperty, a = Object.prototype, n = e(null);
  return da = function(i) {
    for (var s = 0, o, l; n[i + (s || "")]; ) ++s;
    return i += s || "", n[i] = !0, o = "@@" + i, r(
      a,
      o,
      t.gs(null, function(p) {
        l || (l = !0, r(this, o, t(p)), l = !1);
      })
    ), o;
  }, da;
}
var pa, ks;
function OS() {
  if (ks) return pa;
  ks = 1;
  var t = qe, e = Cr().Symbol;
  return pa = function(r) {
    return Object.defineProperties(r, {
      // To ensure proper interoperability with other native functions (e.g. Array.from)
      // fallback to eventual native implementation of given symbol
      hasInstance: t(
        "",
        e && e.hasInstance || r("hasInstance")
      ),
      isConcatSpreadable: t(
        "",
        e && e.isConcatSpreadable || r("isConcatSpreadable")
      ),
      iterator: t("", e && e.iterator || r("iterator")),
      match: t("", e && e.match || r("match")),
      replace: t("", e && e.replace || r("replace")),
      search: t("", e && e.search || r("search")),
      species: t("", e && e.species || r("species")),
      split: t("", e && e.split || r("split")),
      toPrimitive: t(
        "",
        e && e.toPrimitive || r("toPrimitive")
      ),
      toStringTag: t(
        "",
        e && e.toStringTag || r("toStringTag")
      ),
      unscopables: t(
        "",
        e && e.unscopables || r("unscopables")
      )
    });
  }, pa;
}
var ca, Ts;
function zS() {
  if (Ts) return ca;
  Ts = 1;
  var t = qe, e = Ul(), r = /* @__PURE__ */ Object.create(null);
  return ca = function(a) {
    return Object.defineProperties(a, {
      for: t(function(n) {
        return r[n] ? r[n] : r[n] = a(String(n));
      }),
      keyFor: t(function(n) {
        var i;
        e(n);
        for (i in r)
          if (r[i] === n) return i;
      })
    });
  }, ca;
}
var ua, Es;
function jS() {
  if (Es) return ua;
  Es = 1;
  var t = qe, e = Ul(), r = Cr().Symbol, a = AS(), n = OS(), i = zS(), s = Object.create, o = Object.defineProperties, l = Object.defineProperty, p, c, m;
  if (typeof r == "function")
    try {
      String(r()), m = !0;
    } catch {
    }
  else
    r = null;
  return c = function(u) {
    if (this instanceof c) throw new TypeError("Symbol is not a constructor");
    return p(u);
  }, ua = p = function d(u) {
    var g;
    if (this instanceof d) throw new TypeError("Symbol is not a constructor");
    return m ? r(u) : (g = s(c.prototype), u = u === void 0 ? "" : String(u), o(g, {
      __description__: t("", u),
      __name__: t("", a(u))
    }));
  }, n(p), i(p), o(c.prototype, {
    constructor: t(p),
    toString: t("", function() {
      return this.__name__;
    })
  }), o(p.prototype, {
    toString: t(function() {
      return "Symbol (" + e(this).__description__ + ")";
    }),
    valueOf: t(function() {
      return e(this);
    })
  }), l(
    p.prototype,
    p.toPrimitive,
    t("", function() {
      var d = e(this);
      return typeof d == "symbol" ? d : d.toString();
    })
  ), l(p.prototype, p.toStringTag, t("c", "Symbol")), l(
    c.prototype,
    p.toStringTag,
    t("c", p.prototype[p.toStringTag])
  ), l(
    c.prototype,
    p.toPrimitive,
    t("c", p.prototype[p.toPrimitive])
  ), ua;
}
var ma, _s;
function LS() {
  return _s || (_s = 1, ma = ES()() ? Cr().Symbol : jS()), ma;
}
var ha, As;
function WS() {
  if (As) return ha;
  As = 1;
  var t = Object.prototype.toString, e = t.call(/* @__PURE__ */ function() {
    return arguments;
  }());
  return ha = function(r) {
    return t.call(r) === e;
  }, ha;
}
var ga, Os;
function PS() {
  if (Os) return ga;
  Os = 1;
  var t = Object.prototype.toString, e = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
  return ga = function(r) {
    return typeof r == "function" && e(t.call(r));
  }, ga;
}
var fa, zs;
function IS() {
  return zs || (zs = 1, fa = function() {
    var t = Math.sign;
    return typeof t != "function" ? !1 : t(10) === 1 && t(-20) === -1;
  }), fa;
}
var ya, js;
function BS() {
  return js || (js = 1, ya = function(t) {
    return t = Number(t), isNaN(t) || t === 0 ? t : t > 0 ? 1 : -1;
  }), ya;
}
var va, Ls;
function RS() {
  return Ls || (Ls = 1, va = IS()() ? Math.sign : BS()), va;
}
var ba, Ws;
function MS() {
  if (Ws) return ba;
  Ws = 1;
  var t = RS(), e = Math.abs, r = Math.floor;
  return ba = function(a) {
    return isNaN(a) ? 0 : (a = Number(a), a === 0 || !isFinite(a) ? a : t(a) * r(e(a)));
  }, ba;
}
var Sa, Ps;
function Yl() {
  if (Ps) return Sa;
  Ps = 1;
  var t = MS(), e = Math.max;
  return Sa = function(r) {
    return e(0, t(r));
  }, Sa;
}
var xa, Is;
function qS() {
  if (Is) return xa;
  Is = 1;
  var t = Object.prototype.toString, e = t.call("");
  return xa = function(r) {
    return typeof r == "string" || r && typeof r == "object" && (r instanceof String || t.call(r) === e) || !1;
  }, xa;
}
var wa, Bs;
function DS() {
  if (Bs) return wa;
  Bs = 1;
  var t = LS().iterator, e = WS(), r = PS(), a = Yl(), n = uo, i = Ya(), s = bt, o = qS(), l = Array.isArray, p = Function.prototype.call, c = { configurable: !0, enumerable: !0, writable: !0, value: null }, m = Object.defineProperty;
  return wa = function(d) {
    var u = arguments[1], g = arguments[2], S, b, f, y, w, h, v, x, k, E;
    if (d = Object(i(d)), s(u) && n(u), !this || this === Array || !r(this)) {
      if (!u) {
        if (e(d))
          return w = d.length, w !== 1 ? Array.apply(null, d) : (y = new Array(1), y[0] = d[0], y);
        if (l(d)) {
          for (y = new Array(w = d.length), b = 0; b < w; ++b) y[b] = d[b];
          return y;
        }
      }
      y = [];
    } else
      S = this;
    if (!l(d)) {
      if ((k = d[t]) !== void 0) {
        for (v = n(k).call(d), S && (y = new S()), x = v.next(), b = 0; !x.done; )
          E = u ? p.call(u, g, x.value, b) : x.value, S ? (c.value = E, m(y, b, c)) : y[b] = E, x = v.next(), ++b;
        w = b;
      } else if (o(d)) {
        for (w = d.length, S && (y = new S()), b = 0, f = 0; b < w; ++b)
          E = d[b], b + 1 < w && (h = E.charCodeAt(0), h >= 55296 && h <= 56319 && (E += d[++b])), E = u ? p.call(u, g, E, f) : E, S ? (c.value = E, m(y, f, c)) : y[f] = E, ++f;
        w = f;
      }
    }
    if (w === void 0)
      for (w = a(d.length), S && (y = new S(w)), b = 0; b < w; ++b)
        E = u ? p.call(u, g, d[b], b) : d[b], S ? (c.value = E, m(y, b, c)) : y[b] = E;
    return S && (c.value = null, y.length = w), y;
  }, wa;
}
var NS = CS() ? Array.from : DS(), $S = function() {
  var t = Number.isNaN;
  return typeof t != "function" ? !1 : !t({}) && t(NaN) && !t(34);
}, Ca, Rs;
function FS() {
  return Rs || (Rs = 1, Ca = function(t) {
    return t !== t;
  }), Ca;
}
var GS = $S() ? Number.isNaN : FS(), Ms = GS, qs = Yl(), VS = Ya(), HS = Array.prototype.indexOf, US = Object.prototype.hasOwnProperty, YS = Math.abs, Ds = Math.floor, KS = function(t) {
  var e, r, a, n;
  if (!Ms(t)) return HS.apply(this, arguments);
  for (r = qs(VS(this).length), a = arguments[1], isNaN(a) ? a = 0 : a >= 0 ? a = Ds(a) : a = qs(this.length) - Ds(YS(a)), e = a; e < r; ++e)
    if (US.call(this, e) && (n = this[e], Ms(n)))
      return e;
  return -1;
}, ZS = KS, QS = Array.prototype.forEach, XS = Array.prototype.splice, JS = function(t) {
  QS.call(
    arguments,
    function(e) {
      var r = ZS.call(this, e);
      r !== -1 && XS.call(this, r, 1);
    },
    this
  );
}, ex = bt, tx = { function: !0, object: !0 }, rx = function(t) {
  return ex(t) && tx[typeof t] || !1;
}, ax = rx, nx = function(t) {
  if (!ax(t)) throw new TypeError(t + " is not an Object");
  return t;
}, ix = NS, sx = JS, Ns = nx, $s = qe, Fs = mo.methods.emit, Gs = Object.defineProperty, ox = Object.prototype.hasOwnProperty, lx = Object.getOwnPropertyDescriptor, dx = function(t, e) {
  var r, a, n, i;
  return Ns(t) && Ns(e), i = arguments[2], i === void 0 && (i = "emit"), a = {
    close: function() {
      sx.call(r, e);
    }
  }, ox.call(t, "__eePipes__") ? ((r = t.__eePipes__).push(e), a) : (Gs(t, "__eePipes__", $s("c", r = [e])), n = lx(t, i), n ? (delete n.get, delete n.set) : n = $s("c", void 0), n.value = function() {
    var s, o, l = ix(r);
    for (Fs.apply(this, arguments), s = 0; o = l[s]; ++s) Fs.apply(o, arguments);
  }, Gs(t, i, n), a);
};
const px = /* @__PURE__ */ or(dx);
let Kl = [...cS, ...yS, ...wS];
class Zl {
  constructor(e, r, a) {
    Kl.forEach((n) => {
      let i = new n(e, r, a);
      px(i, this);
    });
  }
}
De(Zl.prototype);
function Vs() {
  for (var t = 0; t < arguments.length; t++)
    Kl.push(arguments[t]);
}
function cx(t, e, r) {
  return new Zl(t, e, r);
}
class An {
  constructor(e) {
    this.settings = e || {}, this.polisher = new Jb(!1), this.chunker = new ho(void 0, void 0, this.settings), this.hooks = {}, this.hooks.beforePreview = new z(this), this.hooks.afterPreview = new z(this), this.size = {
      width: {
        value: 8.5,
        unit: "in"
      },
      height: {
        value: 11,
        unit: "in"
      },
      format: void 0,
      orientation: void 0
    }, this.chunker.on("page", (r) => {
      this.emit("page", r);
    }), this.chunker.on("rendering", () => {
      this.emit("rendering", this.chunker);
    });
  }
  initializeHandlers() {
    let e = cx(this.chunker, this.polisher, this);
    return e.on("size", (r) => {
      this.size = r, this.emit("size", r);
    }), e.on("atpages", (r) => {
      this.atpages = r, this.emit("atpages", r);
    }), e;
  }
  registerHandlers() {
    return Vs.apply(Vs, arguments);
  }
  getParams(e) {
    let r, a = new URL(window.location), n = new URLSearchParams(a.search);
    for (var i of n.entries())
      i[0] === e && (r = i[1]);
    return r;
  }
  wrapContent() {
    let e = document.querySelector("body"), r;
    return r = e.querySelector(":scope > template[data-ref='pagedjs-content']"), r || (r = document.createElement("template"), r.dataset.ref = "pagedjs-content", r.innerHTML = e.innerHTML, e.innerHTML = "", e.appendChild(r)), r.content;
  }
  removeStyles(e = document) {
    const r = Array.from(e.querySelectorAll("link[rel='stylesheet']:not([data-pagedjs-ignore], [media~='screen'])")), a = Array.from(e.querySelectorAll("style:not([data-pagedjs-inserted-styles], [data-pagedjs-ignore], [media~='screen'])"));
    return [...r, ...a].sort(function(i, s) {
      const o = i.compareDocumentPosition(s);
      return o === Node.DOCUMENT_POSITION_PRECEDING ? 1 : o === Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 0;
    }).map((i) => {
      if (i.nodeName === "STYLE") {
        const s = {};
        return s[window.location.href] = i.textContent, i.remove(), s;
      }
      if (i.nodeName === "LINK")
        return i.remove(), i.href;
      console.warn(`Unable to process: ${i}, ignoring.`);
    });
  }
  async preview(e, r, a) {
    await this.hooks.beforePreview.trigger(e, a), e || (e = this.wrapContent()), r || (r = this.removeStyles()), this.polisher.setup(), this.handlers = this.initializeHandlers(), await this.polisher.add(...r);
    let n = performance.now(), i = await this.chunker.flow(e, a), s = performance.now();
    return i.performance = s - n, i.size = this.size, this.emit("rendered", i), await this.hooks.afterPreview.trigger(i.pages), i;
  }
}
De(An.prototype);
function ux(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ql = ux, mx = typeof Ot == "object" && Ot && Ot.Object === Object && Ot, hx = mx, gx = hx, fx = typeof self == "object" && self && self.Object === Object && self, yx = gx || fx || Function("return this")(), Xl = yx, vx = Xl, bx = function() {
  return vx.Date.now();
}, Sx = bx, xx = /\s/;
function wx(t) {
  for (var e = t.length; e-- && xx.test(t.charAt(e)); )
    ;
  return e;
}
var Cx = wx, kx = Cx, Tx = /^\s+/;
function Ex(t) {
  return t && t.slice(0, kx(t) + 1).replace(Tx, "");
}
var _x = Ex, Ax = Xl, Ox = Ax.Symbol, Jl = Ox, Hs = Jl, ed = Object.prototype, zx = ed.hasOwnProperty, jx = ed.toString, rt = Hs ? Hs.toStringTag : void 0;
function Lx(t) {
  var e = zx.call(t, rt), r = t[rt];
  try {
    t[rt] = void 0;
    var a = !0;
  } catch {
  }
  var n = jx.call(t);
  return a && (e ? t[rt] = r : delete t[rt]), n;
}
var Wx = Lx, Px = Object.prototype, Ix = Px.toString;
function Bx(t) {
  return Ix.call(t);
}
var Rx = Bx, Us = Jl, Mx = Wx, qx = Rx, Dx = "[object Null]", Nx = "[object Undefined]", Ys = Us ? Us.toStringTag : void 0;
function $x(t) {
  return t == null ? t === void 0 ? Nx : Dx : Ys && Ys in Object(t) ? Mx(t) : qx(t);
}
var Fx = $x;
function Gx(t) {
  return t != null && typeof t == "object";
}
var Vx = Gx, Hx = Fx, Ux = Vx, Yx = "[object Symbol]";
function Kx(t) {
  return typeof t == "symbol" || Ux(t) && Hx(t) == Yx;
}
var Zx = Kx, Qx = _x, Ks = Ql, Xx = Zx, Zs = NaN, Jx = /^[-+]0x[0-9a-f]+$/i, ew = /^0b[01]+$/i, tw = /^0o[0-7]+$/i, rw = parseInt;
function aw(t) {
  if (typeof t == "number")
    return t;
  if (Xx(t))
    return Zs;
  if (Ks(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Ks(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Qx(t);
  var r = ew.test(t);
  return r || tw.test(t) ? rw(t.slice(2), r ? 2 : 8) : Jx.test(t) ? Zs : +t;
}
var nw = aw, iw = Ql, ka = Sx, Qs = nw, sw = "Expected a function", ow = Math.max, lw = Math.min;
function dw(t, e, r) {
  var a, n, i, s, o, l, p = 0, c = !1, m = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(sw);
  e = Qs(e) || 0, iw(r) && (c = !!r.leading, m = "maxWait" in r, i = m ? ow(Qs(r.maxWait) || 0, e) : i, d = "trailing" in r ? !!r.trailing : d);
  function u(x) {
    var k = a, E = n;
    return a = n = void 0, p = x, s = t.apply(E, k), s;
  }
  function g(x) {
    return p = x, o = setTimeout(f, e), c ? u(x) : s;
  }
  function S(x) {
    var k = x - l, E = x - p, A = e - k;
    return m ? lw(A, i - E) : A;
  }
  function b(x) {
    var k = x - l, E = x - p;
    return l === void 0 || k >= e || k < 0 || m && E >= i;
  }
  function f() {
    var x = ka();
    if (b(x))
      return y(x);
    o = setTimeout(f, S(x));
  }
  function y(x) {
    return o = void 0, d && a ? u(x) : (a = n = void 0, s);
  }
  function w() {
    o !== void 0 && clearTimeout(o), p = 0, a = l = n = o = void 0;
  }
  function h() {
    return o === void 0 ? s : y(ka());
  }
  function v() {
    var x = ka(), k = b(x);
    if (a = arguments, n = this, l = x, k) {
      if (o === void 0)
        return g(l);
      if (m)
        return clearTimeout(o), o = setTimeout(f, e), u(l);
    }
    return o === void 0 && (o = setTimeout(f, e)), s;
  }
  return v.cancel = w, v.flush = h, v;
}
var pw = dw;
const td = /* @__PURE__ */ or(pw);
let cw = class {
  prepareRendering(e) {
    const { clientHeight: r, clientWidth: a } = e;
    e.innerHTML = "", r && (e.style.minHeight = `${r}px`), a && window !== window.parent && (e.style.minWidth = `${a}px`), document?.querySelectorAll("style[data-pagedjs-inserted-styles]").forEach((n) => n.remove()), this.resetZoom();
  }
  finalizeRendering(e) {
    e && (e.style.minWidth = "auto", e.style.minHeight = "auto"), this.attachEventListeners(), this.applyPagedCSS(), this.restoreZoom();
  }
  attachEventListeners() {
    document?.querySelectorAll("[data-uhuu]").forEach((e) => {
      const r = function() {
        const a = JSON.parse(this.getAttribute("data-uhuu"));
        $uhuu.editDialog(a);
      };
      e.removeEventListener("click", r), e.addEventListener("click", r);
    });
  }
  applyPagedCSS() {
    document?.querySelectorAll(".page-break-after[data-paged-css]").forEach((e) => {
      const r = e.closest("div.pagedjs_sheet"), a = e.getAttribute("data-paged-css");
      r && a && a.split(" ").filter(Boolean).forEach((n) => r.classList.add(n));
    });
  }
  getStyleUrls(e, r) {
    if (e) {
      const a = new Blob([e], { type: "text/css" });
      return [URL.createObjectURL(a)];
    }
    return r ? [r] : [];
  }
  resetZoom() {
    if (typeof document > "u") return;
    const e = document?.body;
    e.style.transform && (this.originalStyles = {
      width: e.style.width,
      height: e.style.height,
      transform: e.style.transform,
      transformOrigin: e.style.transformOrigin || "center center"
    }, e.style.opacity = "0", e.style.width = "100%", e.style.height = "100%", e.style.transform = "");
  }
  restoreZoom() {
    if (typeof document > "u") return;
    const e = document?.body;
    e.style.opacity = "1", this.originalStyles?.transform && (e.style.width = this.originalStyles.width, e.style.height = this.originalStyles.height, e.style.transform = this.originalStyles.transform);
  }
};
class rd {
  static PAGE_SIZES = {
    // A series
    A0: { width: 841, height: 1189 },
    A1: { width: 594, height: 841 },
    A2: { width: 420, height: 594 },
    A3: { width: 297, height: 420 },
    A4: { width: 210, height: 297 },
    A5: { width: 148, height: 210 },
    A6: { width: 105, height: 148 },
    // B series
    B0: { width: 1e3, height: 1414 },
    B1: { width: 707, height: 1e3 },
    B2: { width: 500, height: 707 },
    B3: { width: 353, height: 500 },
    B4: { width: 250, height: 353 },
    B5: { width: 176, height: 250 },
    B6: { width: 125, height: 176 },
    // C series (envelopes)
    C0: { width: 917, height: 1297 },
    C1: { width: 648, height: 917 },
    C2: { width: 458, height: 648 },
    C3: { width: 324, height: 458 },
    C4: { width: 229, height: 324 },
    C5: { width: 162, height: 229 },
    C6: { width: 114, height: 162 },
    // US Sizes
    LETTER: { width: 216, height: 279 },
    LEGAL: { width: 216, height: 356 },
    TABLOID: { width: 279, height: 432 },
    LEDGER: { width: 432, height: 279 }
  };
  /**
   * Get all available page size format names
   * @returns {string[]} Array of page size format names
   */
  static getStandardFormats() {
    return ["Custom", "A3", "A4", "A5", "LETTER", "LEGAL"];
  }
  /**
   * Get dimensions for a specific page size
   * @param {Object} options - Configuration options
   * @param {string} options.format - Page size format (e.g., 'A4', 'LETTER')
   * @param {string} [options.orientation='portrait'] - Page orientation ('portrait' or 'landscape')
   * @returns {{ width: number, height: number } | null} Dimensions in millimeters
   */
  static getDimensions({
    format: e,
    orientation: r = "portrait"
  }) {
    const a = this.PAGE_SIZES[e.toUpperCase()];
    return a ? r === "landscape" ? {
      width: a.height,
      height: a.width
    } : {
      width: a.width,
      height: a.height
    } : null;
  }
  /**
   * Convert millimeters to pixels at a given DPI
   * @param {number} mm - Value in millimeters
   * @param {number} dpi - Dots per inch (default: 72)
   * @returns {number} Value in pixels
   */
  static mmToPx(e, r = 72) {
    return e * r / 25.4;
  }
  /**
   * Get dimensions in pixels for a specific page size
   * @param {Object} options - Configuration options
   * @param {string} options.format - Page size format (e.g., 'A4', 'LETTER')
   * @param {string} [options.orientation='portrait'] - Page orientation ('portrait' or 'landscape')
   * @param {number} [options.dpi=72] - Dots per inch
   * @returns {{ width: number, height: number } | null} Dimensions in pixels
   */
  static getDimensionsInPx({
    format: e,
    orientation: r = "portrait",
    dpi: a = 72
  }) {
    const n = this.getDimensions({
      format: e,
      orientation: r
    });
    return n ? {
      width: this.mmToPx(n.width, a),
      height: this.mmToPx(n.height, a)
    } : null;
  }
  /**
   * Check if a format exists
   * @param {string} format - Page size format to check
   * @returns {boolean} Whether the format exists
   */
  static hasFormat(e) {
    return e.toUpperCase() in this.PAGE_SIZES;
  }
  /**
   * Get all available formats
   * @returns {string[]} Array of available format names
   */
  static getAvailableFormats() {
    return Object.keys(this.PAGE_SIZES);
  }
  static pageParams(e, r) {
    if (typeof document > "u") return;
    const { format: a, orientation: n, width: i, height: s, bleed: o, showBleed: l, compatibility: p, printCssRaw: c, printCssUrl: m, preview: d } = r, u = (!a || a.toLowerCase() === "custom") && i && s && i > 10 && s > 10 && i < 4e3 && s < 4e3 ? { width: i, height: s } : this.getDimensions({ format: a ?? "A4", orientation: n });
    return u && (document.documentElement.style.setProperty("--uhuu-page-width", `${u.width}mm`), document.documentElement.style.setProperty("--uhuu-page-height", `${u.height}mm`)), document.documentElement.style.setProperty("--uhuu-page-bleed", `${Math.min(Math.max(o ?? 0, 0), 400)}mm`), { page: {
      paginationType: e,
      format: a,
      orientation: n,
      bleed: o,
      width: u?.width,
      height: u?.height,
      preview: d,
      showBleed: l,
      compatibility: p,
      printCssRaw: c,
      printCssUrl: m
    } };
  }
}
const Tt = od(null), ad = ({ config: t, children: e }) => /* @__PURE__ */ V(Tt.Provider, { value: t, children: e }), uw = ({ children: t, className: e, setup: r }) => {
  const [a, n] = nr(!1), i = dt(null), s = dt(null), o = dt(new cw()), l = rd.pageParams("dynamic", r);
  let p = l?.page?.printCssRaw;
  if (l?.page?.width && l?.page?.height) {
    const m = /@page\s*{([^}]*)}/, d = p?.match(m), u = `
      size: ${l.page.width}mm ${l.page.height}mm;
      bleed: ${l.page.bleed ?? 0}mm;`;
    if (d) {
      const g = d[1].replace(/\s*(size|bleed)\s*:[^;]*;/g, ""), S = `@page {${u}${g}}`;
      p = p.replace(m, S);
    } else
      p = `@page {${u}}
${p ?? ""}`;
  }
  const c = td(() => {
    if (!i.current || !s.current) {
      console.warn("Container or page content reference is missing.");
      return;
    }
    if (a)
      return;
    n(!0), o.current.prepareRendering(i.current);
    const m = new An(), d = o.current.getStyleUrls(p ?? "", l?.page?.printCssUrl ?? "");
    try {
      m.preview(s.current?.innerHTML ?? "", d, i.current).then(() => {
        n(!1), o.current.finalizeRendering(i.current);
      });
    } catch (u) {
      console.error("Error during Paged.js preview rendering:", u), n(!1);
    }
  }, 500, { leading: !0 });
  return Js(() => {
    c();
  }, [t, r]), /* @__PURE__ */ Ua(ad, { config: l, children: [
    /* @__PURE__ */ V("div", { className: [e ?? "", a ? "rendering" : "rendered", l?.page?.showBleed ? "uhuu-bleed-visible" : "", l?.page?.preview ?? ""].filter(Boolean).join(" "), ref: i }),
    /* @__PURE__ */ V("div", { className: "uhuu-reactive-content", style: { display: "none" }, ref: s, children: t })
  ] });
}, mw = ({ children: t }) => /* @__PURE__ */ V(sd, { children: t });
class ar {
  static handlePageBreakStyles() {
    document?.querySelectorAll(".page-break-after[data-paged-css]").forEach((e) => {
      const r = e.closest("div.uhuu-page-sheet"), a = e.getAttribute("data-paged-css");
      r && a && a.split(" ").filter(Boolean).forEach((i) => r.classList.add(i));
    });
  }
  static handleUhuuDialogs() {
    const e = function() {
      const r = JSON.parse(this.getAttribute("data-uhuu") || "{}");
      $uhuu.editDialog(r);
    };
    document?.querySelectorAll("[data-uhuu]").forEach((r) => {
      r.removeEventListener("click", e), r.addEventListener("click", e);
    });
  }
  static handle() {
    ar.handlePageBreakStyles(), ar.handleUhuuDialogs();
  }
}
class Xs {
  static setupPageStyles(e) {
    if (!e || typeof document > "u") return;
    const r = document.createElement("link");
    return r.rel = "stylesheet", r.href = e, document.head.appendChild(r), r;
  }
  static removePageStyles(e) {
    e && typeof document < "u" && document?.head.removeChild(e);
  }
}
const hw = ({ children: t, className: e, setup: r }) => {
  const a = rd.pageParams("static", r);
  Js(() => {
    a?.page?.compatibility && ar.handle();
    const i = Xs.setupPageStyles(a?.page?.printCssUrl);
    return () => {
      Xs.removePageStyles(i);
    };
  }, [r, a?.page?.compatibility, a?.page?.printCssUrl]);
  const n = [e, a?.page?.preview].filter(Boolean).join(" ");
  return /* @__PURE__ */ V(ad, { config: a, children: /* @__PURE__ */ V("div", { className: n, children: t }) });
}, gw = eo(({
  children: t,
  className: e = "",
  style: r,
  pageNo: a,
  overlay: n,
  showBleed: i
}, s) => {
  const o = ir(Tt), l = i ?? o?.page?.showBleed ?? !1;
  return /* @__PURE__ */ Ua("div", { className: `uhuu-page-sheet ${e}`, style: r, ref: s, children: [
    t,
    n && n({ pageNo: a }),
    l && /* @__PURE__ */ V("div", { className: "uhuu-bleed-area" })
  ] });
}), On = (t, e) => {
  const r = t.dialog;
  return r ? e?.page?.paginationType === "dynamic" ? {
    "data-uhuu": JSON.stringify(r)
  } : {
    onClick: () => window.$uhuu?.editDialog(r),
    "data-uhuu": ""
  } : {};
}, Sw = (t) => {
  const e = ir(Tt), r = t.bleed ?? e?.page?.bleed ?? 0, a = t.pageWidth ?? e?.page?.width ?? 210, n = t.pageHeight ?? e?.page?.height ?? 297, {
    src: i,
    backgroundColor: s,
    width: o,
    height: l,
    left: p = 0,
    right: c = 0,
    top: m = 0,
    bottom: d = 0
  } = t, [u, g] = nr("h-full w-full object-cover object-center"), S = (A) => `${A}mm`, b = () => {
    let A = l;
    return l || (A = n, m || (A += r), d || (A += r), (m || d) && (A -= (m ?? 0) + (d ?? 0))), A;
  }, y = (() => {
    let A = o;
    return o || (A = a, p || (A += r), c || (A += r), (p || c) && (A -= (p ?? 0) + (c ?? 0))), A;
  })(), w = b(), h = (A) => A !== void 0 ? S(A) : void 0, x = ((A) => Object.fromEntries(
    Object.entries(A).filter(([B, P]) => P !== void 0)
  ))({
    backgroundColor: s,
    width: h(y),
    height: h(w),
    left: h(p > 0 ? p + r : p),
    right: h(c > 0 ? c + r : c),
    top: h(m > 0 ? m + r : m),
    bottom: h(d > 0 ? d + r : d)
  }), k = w > 0 ? y / w : y / (n - (m ?? 0) - (d ?? 0)), E = (A) => {
    let P = A.target.naturalWidth / A.target.naturalHeight > k ? "cover-vertical" : "cover-horizontal";
    g(P);
  };
  return /* @__PURE__ */ V("div", { className: "uhuu-image-container", style: x, children: /* @__PURE__ */ V(
    "div",
    {
      className: "uhuu-image-inner",
      ...On(t, e),
      children: /* @__PURE__ */ V(
        "img",
        {
          className: u,
          src: i,
          onLoad: (A) => E(A)
        },
        `${i}-${y}-${w}`
      )
    }
  ) });
};
function xw(t) {
  const e = ir(Tt);
  console.log("config", e);
  const r = t.bleed ?? e?.page?.bleed ?? 0, a = t.pageWidth ?? e?.page?.width ?? 210, n = t.pageHeight ?? e?.page?.height ?? 297, {
    src: i,
    side: s,
    backgroundColor: o,
    width: l,
    height: p,
    left: c = 0,
    right: m = 0,
    top: d = 0,
    bottom: u = 0
  } = t, [g, S] = nr("h-full w-full object-cover object-center"), b = (W) => `${W}mm`, f = () => {
    let W = l;
    return l || (W = 2 * a, c || (W += 2 * r), m || (W += 2 * r), (c || m) && (W -= (c ?? 0) + (m ?? 0))), W;
  }, y = () => {
    let W = p;
    return p || (W = n, d || (W += r), u || (W += r), (d || u) && (W -= (d ?? 0) + (u ?? 0))), W;
  }, w = f(), h = y(), v = (W) => W !== void 0 ? b(W) : void 0, x = (W) => Object.fromEntries(
    Object.entries(W).filter(([$, R]) => R !== void 0)
  ), k = c > 0 ? c : -1 * r, E = -1 * a + k, A = x({
    backgroundColor: o,
    width: v(w),
    height: v(h),
    left: v(k),
    top: v(d > 0 ? d + r : d),
    bottom: v(u > 0 ? u + r : u)
  }), B = x({
    width: v(w),
    height: v(h),
    left: v(E),
    top: v(d > 0 ? d + r : d),
    bottom: v(u > 0 ? u + r : u)
  }), P = h != 0 ? w / h : w / (n - (d ?? 0) - (u ?? 0)), M = (W) => {
    let R = W.target.naturalWidth / W.target.naturalHeight > P ? "cover-vertical" : "cover-horizontal";
    S(R);
  };
  return /* @__PURE__ */ V("div", { className: "uhuu-image-container", style: s == "end" ? B : A, children: /* @__PURE__ */ V("div", { className: "uhuu-image-inner", ...On(t, e), children: /* @__PURE__ */ V(
    "img",
    {
      className: g,
      src: i,
      onLoad: (W) => M(W)
    },
    `${i}-${w}-${h}`
  ) }) });
}
const ww = (t) => {
  const e = ir(Tt);
  return /* @__PURE__ */ V(
    "div",
    {
      className: t.className,
      ...On(t, e),
      children: t.children
    }
  );
}, Cw = eo(({ children: t }, e) => {
  const [r, a] = nr(!1), n = dt(null), i = dt(null);
  if (typeof document > "u")
    return null;
  ld(e, () => ({
    layout: s
  }));
  const s = dd(
    td(() => {
      if (!n.current || !i.current) {
        console.warn("Container or page flow reference is missing.");
        return;
      }
      a(!0);
      const { clientHeight: o, clientWidth: l } = n.current;
      n.current.innerHTML = "", o && (n.current.style.minHeight = `${o}px`), l && window !== window.parent && (n.current.style.minWidth = `${l}px`), document.querySelectorAll("style[data-pagedjs-inserted-styles]").forEach((m) => m.remove());
      let p = "page.css";
      const c = new An();
      try {
        c.preview(i.current.innerHTML, [p], n.current).then(() => {
          a(!1), n.current.style.minWidth = "auto", n.current.style.minHeight = "auto", document.querySelectorAll("[data-uhuu]").forEach((m) => {
            const d = function() {
              const u = JSON.parse(this.getAttribute("data-uhuu"));
              $uhuu.editDialog(u);
            };
            m.removeEventListener("click", d), m.addEventListener("click", d);
          }), document.querySelectorAll(".page-break-after[data-paged-css]").forEach((m) => {
            const d = m.closest("div.pagedjs_sheet"), u = m.getAttribute("data-paged-css");
            d && u && u.split(" ").filter(Boolean).forEach((g) => d.classList.add(g));
          });
        });
      } catch (m) {
        console.error("Error during Paged.js preview rendering:", m), a(!1);
      }
    }, 500),
    []
  );
  return /* @__PURE__ */ Ua("div", { className: r ? "rendering uhuu-page" : "rendered uhuu-page", children: [
    /* @__PURE__ */ V("div", { className: "pagedjs_preview_container", ref: n }),
    /* @__PURE__ */ V("div", { style: { display: "none" }, ref: i, children: t })
  ] });
}), kw = {
  Pagination: uw,
  Sheet: mw
}, Tw = {
  Pagination: hw,
  Sheet: gw
};
export {
  kw as Dynamic,
  ww as Editable,
  Sw as ImageBleed,
  xw as ImageSpread,
  Cw as PagedPreview,
  Tw as Static
};
//# sourceMappingURL=uhuu-components.es.js.map
