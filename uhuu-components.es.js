import Uo, { forwardRef as Sp, useState as xp, useRef as wi, useImperativeHandle as wp, useCallback as Cp } from "react";
var Xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ar(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var an = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function kp() {
  if (Ci) return ft;
  Ci = 1;
  var t = Uo, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, l, p) {
    var u, c = {}, d = null, m = null;
    p !== void 0 && (d = "" + p), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (u in l) a.call(l, u) && !i.hasOwnProperty(u) && (c[u] = l[u]);
    if (o && o.defaultProps) for (u in l = o.defaultProps, l) c[u] === void 0 && (c[u] = l[u]);
    return { $$typeof: e, type: o, key: d, ref: m, props: c, _owner: n.current };
  }
  return ft.Fragment = r, ft.jsx = s, ft.jsxs = s, ft;
}
var yt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ki;
function Tp() {
  return ki || (ki = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Uo, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), f = Symbol.iterator, x = "@@iterator";
    function b(h) {
      if (h === null || typeof h != "object")
        return null;
      var T = f && h[f] || h[x];
      return typeof T == "function" ? T : null;
    }
    var g = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(h) {
      {
        for (var T = arguments.length, _ = new Array(T > 1 ? T - 1 : 0), L = 1; L < T; L++)
          _[L - 1] = arguments[L];
        k("error", h, _);
      }
    }
    function k(h, T, _) {
      {
        var L = g.ReactDebugCurrentFrame, D = L.getStackAddendum();
        D !== "" && (T += "%s", _ = _.concat([D]));
        var q = _.map(function(B) {
          return String(B);
        });
        q.unshift("Warning: " + T), Function.prototype.apply.call(console[h], console, q);
      }
    }
    var y = !1, S = !1, w = !1, E = !1, z = !1, M;
    M = Symbol.for("react.module.reference");
    function V(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === a || h === i || z || h === n || h === p || h === u || E || h === m || y || S || w || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === c || h.$$typeof === s || h.$$typeof === o || h.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === M || h.getModuleId !== void 0));
    }
    function $(h, T, _) {
      var L = h.displayName;
      if (L)
        return L;
      var D = T.displayName || T.name || "";
      return D !== "" ? _ + "(" + D + ")" : _;
    }
    function H(h) {
      return h.displayName || "Context";
    }
    function F(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case p:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case o:
            var T = h;
            return H(T) + ".Consumer";
          case s:
            var _ = h;
            return H(_._context) + ".Provider";
          case l:
            return $(h, h.render, "ForwardRef");
          case c:
            var L = h.displayName || null;
            return L !== null ? L : F(h.type) || "Memo";
          case d: {
            var D = h, q = D._payload, B = D._init;
            try {
              return F(B(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, G = 0, te, Re, ct, mt, Ut, Ht, si;
    function oi() {
    }
    oi.__reactDisabledLog = !0;
    function Hd() {
      {
        if (G === 0) {
          te = console.log, Re = console.info, ct = console.warn, mt = console.error, Ut = console.group, Ht = console.groupCollapsed, si = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: oi,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        G++;
      }
    }
    function Yd() {
      {
        if (G--, G === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, h, {
              value: te
            }),
            info: U({}, h, {
              value: Re
            }),
            warn: U({}, h, {
              value: ct
            }),
            error: U({}, h, {
              value: mt
            }),
            group: U({}, h, {
              value: Ut
            }),
            groupCollapsed: U({}, h, {
              value: Ht
            }),
            groupEnd: U({}, h, {
              value: si
            })
          });
        }
        G < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Hr = g.ReactCurrentDispatcher, Yr;
    function Yt(h, T, _) {
      {
        if (Yr === void 0)
          try {
            throw Error();
          } catch (D) {
            var L = D.stack.trim().match(/\n( *(at )?)/);
            Yr = L && L[1] || "";
          }
        return `
` + Yr + h;
      }
    }
    var Kr = !1, Kt;
    {
      var Kd = typeof WeakMap == "function" ? WeakMap : Map;
      Kt = new Kd();
    }
    function li(h, T) {
      if (!h || Kr)
        return "";
      {
        var _ = Kt.get(h);
        if (_ !== void 0)
          return _;
      }
      var L;
      Kr = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = Hr.current, Hr.current = null, Hd();
      try {
        if (T) {
          var B = function() {
            throw Error();
          };
          if (Object.defineProperty(B.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(B, []);
            } catch (ne) {
              L = ne;
            }
            Reflect.construct(h, [], B);
          } else {
            try {
              B.call();
            } catch (ne) {
              L = ne;
            }
            h.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            L = ne;
          }
          h();
        }
      } catch (ne) {
        if (ne && L && typeof ne.stack == "string") {
          for (var I = ne.stack.split(`
`), re = L.stack.split(`
`), Y = I.length - 1, Q = re.length - 1; Y >= 1 && Q >= 0 && I[Y] !== re[Q]; )
            Q--;
          for (; Y >= 1 && Q >= 0; Y--, Q--)
            if (I[Y] !== re[Q]) {
              if (Y !== 1 || Q !== 1)
                do
                  if (Y--, Q--, Q < 0 || I[Y] !== re[Q]) {
                    var de = `
` + I[Y].replace(" at new ", " at ");
                    return h.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", h.displayName)), typeof h == "function" && Kt.set(h, de), de;
                  }
                while (Y >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        Kr = !1, Hr.current = q, Yd(), Error.prepareStackTrace = D;
      }
      var Ge = h ? h.displayName || h.name : "", Ie = Ge ? Yt(Ge) : "";
      return typeof h == "function" && Kt.set(h, Ie), Ie;
    }
    function Qd(h, T, _) {
      return li(h, !1);
    }
    function Zd(h) {
      var T = h.prototype;
      return !!(T && T.isReactComponent);
    }
    function Qt(h, T, _) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return li(h, Zd(h));
      if (typeof h == "string")
        return Yt(h);
      switch (h) {
        case p:
          return Yt("Suspense");
        case u:
          return Yt("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            return Qd(h.render);
          case c:
            return Qt(h.type, T, _);
          case d: {
            var L = h, D = L._payload, q = L._init;
            try {
              return Qt(q(D), T, _);
            } catch {
            }
          }
        }
      return "";
    }
    var ht = Object.prototype.hasOwnProperty, di = {}, pi = g.ReactDebugCurrentFrame;
    function Zt(h) {
      if (h) {
        var T = h._owner, _ = Qt(h.type, h._source, T ? T.type : null);
        pi.setExtraStackFrame(_);
      } else
        pi.setExtraStackFrame(null);
    }
    function Xd(h, T, _, L, D) {
      {
        var q = Function.call.bind(ht);
        for (var B in h)
          if (q(h, B)) {
            var I = void 0;
            try {
              if (typeof h[B] != "function") {
                var re = Error((L || "React class") + ": " + _ + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              I = h[B](T, B, L, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              I = Y;
            }
            I && !(I instanceof Error) && (Zt(D), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", _, B, typeof I), Zt(null)), I instanceof Error && !(I.message in di) && (di[I.message] = !0, Zt(D), v("Failed %s type: %s", _, I.message), Zt(null));
          }
      }
    }
    var Jd = Array.isArray;
    function Qr(h) {
      return Jd(h);
    }
    function ep(h) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, _ = T && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return _;
      }
    }
    function tp(h) {
      try {
        return ui(h), !1;
      } catch {
        return !0;
      }
    }
    function ui(h) {
      return "" + h;
    }
    function ci(h) {
      if (tp(h))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ep(h)), ui(h);
    }
    var gt = g.ReactCurrentOwner, rp = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mi, hi, Zr;
    Zr = {};
    function ap(h) {
      if (ht.call(h, "ref")) {
        var T = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function np(h) {
      if (ht.call(h, "key")) {
        var T = Object.getOwnPropertyDescriptor(h, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function ip(h, T) {
      if (typeof h.ref == "string" && gt.current && T && gt.current.stateNode !== T) {
        var _ = F(gt.current.type);
        Zr[_] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(gt.current.type), h.ref), Zr[_] = !0);
      }
    }
    function sp(h, T) {
      {
        var _ = function() {
          mi || (mi = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        _.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function op(h, T) {
      {
        var _ = function() {
          hi || (hi = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        _.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var lp = function(h, T, _, L, D, q, B) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: h,
        key: T,
        ref: _,
        props: B,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function dp(h, T, _, L, D) {
      {
        var q, B = {}, I = null, re = null;
        _ !== void 0 && (ci(_), I = "" + _), np(T) && (ci(T.key), I = "" + T.key), ap(T) && (re = T.ref, ip(T, D));
        for (q in T)
          ht.call(T, q) && !rp.hasOwnProperty(q) && (B[q] = T[q]);
        if (h && h.defaultProps) {
          var Y = h.defaultProps;
          for (q in Y)
            B[q] === void 0 && (B[q] = Y[q]);
        }
        if (I || re) {
          var Q = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          I && sp(B, Q), re && op(B, Q);
        }
        return lp(h, I, re, D, L, gt.current, B);
      }
    }
    var Xr = g.ReactCurrentOwner, gi = g.ReactDebugCurrentFrame;
    function Fe(h) {
      if (h) {
        var T = h._owner, _ = Qt(h.type, h._source, T ? T.type : null);
        gi.setExtraStackFrame(_);
      } else
        gi.setExtraStackFrame(null);
    }
    var Jr;
    Jr = !1;
    function ea(h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }
    function fi() {
      {
        if (Xr.current) {
          var h = F(Xr.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function pp(h) {
      return "";
    }
    var yi = {};
    function up(h) {
      {
        var T = fi();
        if (!T) {
          var _ = typeof h == "string" ? h : h.displayName || h.name;
          _ && (T = `

Check the top-level render call using <` + _ + ">.");
        }
        return T;
      }
    }
    function vi(h, T) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var _ = up(T);
        if (yi[_])
          return;
        yi[_] = !0;
        var L = "";
        h && h._owner && h._owner !== Xr.current && (L = " It was passed a child from " + F(h._owner.type) + "."), Fe(h), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, L), Fe(null);
      }
    }
    function bi(h, T) {
      {
        if (typeof h != "object")
          return;
        if (Qr(h))
          for (var _ = 0; _ < h.length; _++) {
            var L = h[_];
            ea(L) && vi(L, T);
          }
        else if (ea(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var D = b(h);
          if (typeof D == "function" && D !== h.entries)
            for (var q = D.call(h), B; !(B = q.next()).done; )
              ea(B.value) && vi(B.value, T);
        }
      }
    }
    function cp(h) {
      {
        var T = h.type;
        if (T == null || typeof T == "string")
          return;
        var _;
        if (typeof T == "function")
          _ = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === c))
          _ = T.propTypes;
        else
          return;
        if (_) {
          var L = F(T);
          Xd(_, h.props, "prop", L, h);
        } else if (T.PropTypes !== void 0 && !Jr) {
          Jr = !0;
          var D = F(T);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mp(h) {
      {
        for (var T = Object.keys(h.props), _ = 0; _ < T.length; _++) {
          var L = T[_];
          if (L !== "children" && L !== "key") {
            Fe(h), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Fe(null);
            break;
          }
        }
        h.ref !== null && (Fe(h), v("Invalid attribute `ref` supplied to `React.Fragment`."), Fe(null));
      }
    }
    var Si = {};
    function xi(h, T, _, L, D, q) {
      {
        var B = V(h);
        if (!B) {
          var I = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = pp();
          re ? I += re : I += fi();
          var Y;
          h === null ? Y = "null" : Qr(h) ? Y = "array" : h !== void 0 && h.$$typeof === e ? (Y = "<" + (F(h.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof h, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, I);
        }
        var Q = dp(h, T, _, D, q);
        if (Q == null)
          return Q;
        if (B) {
          var de = T.children;
          if (de !== void 0)
            if (L)
              if (Qr(de)) {
                for (var Ge = 0; Ge < de.length; Ge++)
                  bi(de[Ge], h);
                Object.freeze && Object.freeze(de);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bi(de, h);
        }
        if (ht.call(T, "key")) {
          var Ie = F(h), ne = Object.keys(T).filter(function(bp) {
            return bp !== "key";
          }), ta = ne.length > 0 ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Si[Ie + ta]) {
            var vp = ne.length > 0 ? "{" + ne.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ta, Ie, vp, Ie), Si[Ie + ta] = !0;
          }
        }
        return h === a ? mp(Q) : cp(Q), Q;
      }
    }
    function hp(h, T, _) {
      return xi(h, T, _, !0);
    }
    function gp(h, T, _) {
      return xi(h, T, _, !1);
    }
    var fp = gp, yp = hp;
    yt.Fragment = a, yt.jsx = fp, yt.jsxs = yp;
  }()), yt;
}
process.env.NODE_ENV === "production" ? an.exports = kp() : an.exports = Tp();
var pr = an.exports;
const AC = ({ label: t, onClick: e }) => /* @__PURE__ */ pr.jsx("button", { onClick: e, style: { padding: "10px 20px", fontSize: "16px" }, children: t });
function ra(t) {
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
function Ep(t) {
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
function ke() {
  var t = (/* @__PURE__ */ new Date()).getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (t += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    var r = (t + Math.random() * 16) % 16 | 0;
    return t = Math.floor(t / 16), (e === "x" ? r : r & 3 | 8).toString(16);
  });
}
function Ho(t, e) {
  for (var r = 0; r < e.length; r++)
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}
function Yo(t) {
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
function aa() {
  this.resolve = null, this.reject = null, this.id = ke(), this.promise = new Promise((t, e) => {
    this.resolve = t, this.reject = e;
  }), Object.freeze(this);
}
const _p = typeof window < "u" && ("requestIdleCallback" in window ? window.requestIdleCallback : window.requestAnimationFrame);
function A(t) {
  return t.value + (t.unit || "");
}
function se(t) {
  return t && t.nodeType === 1;
}
function je(t) {
  return t && t.nodeType === 3;
}
function* Jt(t, e) {
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
function De(t, e) {
  if (e && t === e)
    return;
  let r = on(t);
  if (r)
    return r;
  if (t.parentNode)
    for (; t = t.parentNode; ) {
      if (e && t === e)
        return;
      if (r = on(t), r)
        return r;
    }
}
function br(t, e) {
  if (e && t === e)
    return;
  let r = sn(t);
  if (r)
    return r;
  if (t.parentNode)
    for (; t = t.parentNode; ) {
      if (e && t === e)
        return;
      if (r = sn(t), r)
        return r;
    }
}
function Ti(t, e) {
  let r = De(t, e);
  for (; r && r.nodeType !== 1; )
    r = De(r, e);
  return r;
}
function Ei(t, e) {
  let r = br(t, e);
  for (; r && r.nodeType !== 1; )
    r = br(r, e);
  return r;
}
function _i(t, e) {
  let r = Ti(t, e);
  for (; r && r.dataset.undisplayed; )
    r = Ti(r, e);
  return r;
}
function Op(t, e) {
  let r = Ei(t, e);
  for (; r && r.dataset.undisplayed; )
    r = Ei(r, e);
  return r;
}
function Ko(t) {
  let e, r, a = [], n = [], i = document.createDocumentFragment();
  if (t.nodeName === "TR") {
    let l = t.previousElementSibling, p = 1;
    for (; l; ) {
      if (l.childElementCount > t.childElementCount) {
        const u = Array.from(t.children);
        for (; t.firstChild; )
          t.firstChild.remove();
        let c = 0;
        for (let d = 0; d < l.children.length; d++) {
          let m = l.children[d];
          if (m.rowSpan && m.rowSpan > p) {
            const f = m.cloneNode(!0);
            f.rowSpan = m.rowSpan - p, t.appendChild(f);
          } else {
            const f = u[c++];
            f && t.appendChild(f);
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
        let u = l.cloneNode(!1);
        e.parentElement.insertBefore(u, p), p = u;
      }
    }
  }
  return n = void 0, i;
}
function na(t) {
  return typeof t < "u" && typeof t.dataset < "u" && typeof t.dataset.breakBefore < "u" && (t.dataset.breakBefore === "always" || t.dataset.breakBefore === "page" || t.dataset.breakBefore === "left" || t.dataset.breakBefore === "right" || t.dataset.breakBefore === "recto" || t.dataset.breakBefore === "verso");
}
function Ap(t) {
  return typeof t < "u" && typeof t.dataset < "u" && typeof t.dataset.previousBreakAfter < "u" && (t.dataset.previousBreakAfter === "always" || t.dataset.previousBreakAfter === "page" || t.dataset.previousBreakAfter === "left" || t.dataset.previousBreakAfter === "right" || t.dataset.previousBreakAfter === "recto" || t.dataset.previousBreakAfter === "verso");
}
function Qo(t, e) {
  if (typeof t > "u" || !e || zr(t) || t.dataset && t.dataset.undisplayed)
    return !1;
  let r = e.dataset ? e.dataset.page : void 0;
  if (typeof r > "u") {
    const n = Ai(e);
    n && (r = n.dataset.page);
  }
  let a = t.dataset ? t.dataset.page : void 0;
  if (typeof a > "u") {
    const n = Ai(t, e);
    n && (a = n.dataset.page);
  }
  return a !== r;
}
function* zp(t) {
  let e = t.nodeValue, r = e.length, a = 0, n, i;
  const s = t.parentElement && t.parentElement.nodeName === "PRE";
  for (; a < r; )
    n = e[a], /^[\S\u202F\u00A0]$/.test(n) || s ? i || (i = document.createRange(), i.setStart(t, a)) : i && (i.setEnd(t, a), yield i, i = void 0), a += 1;
  i && (i.setEnd(t, a), yield i);
}
function* jp(t) {
  let e = t.startContainer, r = e.length, a = t.startOffset, n;
  for (; a < r; )
    n = document.createRange(), n.setStart(e, a), n.setEnd(e, a + 1), yield n, a += 1;
}
function Zo(t) {
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
function Wp(t, e = !1) {
  return t.cloneNode(e);
}
function J(t, e, r) {
  const a = t.getAttribute("data-ref");
  return Lp(a, e, r);
}
function Lp(t, e, r) {
  return !r && e.indexOfRefs && e.indexOfRefs[t] ? e.indexOfRefs[t] : e.querySelector(`[data-ref='${t}']`);
}
function nn(t) {
  return !!(je(t) || se(t) && t.dataset.ref);
}
function er(t) {
  for (; !nn(t) && (t.previousSibling ? t = t.previousSibling : t = t.parentNode, !!t); )
    ;
  return t;
}
function Pp(t) {
  let e = t.parentNode;
  return e ? Array.prototype.indexOf.call(e.childNodes, t) : 0;
}
function ia(t, e) {
  return t.childNodes[e];
}
function Rp(t) {
  return se(t) ? !0 : !!(je(t) && t.textContent.trim().length);
}
function Oi(t, e) {
  if (!je(t))
    return -1;
  let r = t.textContent, a, n = -1;
  for (var i = 0; i < e.childNodes.length; i++)
    if (a = e.childNodes[i], a.nodeType === 3 && e.childNodes[i].textContent.includes(r)) {
      n = i;
      break;
    }
  return n;
}
function zr(t) {
  return t.nodeType === 8 || // A comment node
  t.nodeType === 3 && Ip(t);
}
function Ip(t) {
  return !/[^\t\n\r ]/.test(t.textContent);
}
function sn(t) {
  for (; t = t.previousSibling; )
    if (!zr(t)) return t;
  return null;
}
function Ai(t, e) {
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
function Bp(t) {
  for (; t = t.parentNode; )
    if (t && t.dataset && t.dataset.breakInside === "avoid")
      return t;
  return null;
}
function sa(t, e, r) {
  if (!(r && t === r) && t.parentNode)
    for (; t = t.parentNode; ) {
      if (r && t === r)
        return;
      if (t.nodeName === e)
        return t;
    }
}
function on(t) {
  for (; t = t.nextSibling; )
    if (!zr(t)) return t;
  return null;
}
function Xo(t, e, r) {
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
class vt {
  constructor(e, r) {
    this.node = e, this.offset = r;
  }
  equals(e) {
    return !(!e || this.node && e.node && this.node !== e.node || this.offset && e.offset && this.offset !== e.offset);
  }
  toJSON(e) {
    let r, a = 0;
    return this.node ? (se(this.node) && this.node.dataset.ref ? r = this.node.dataset.ref : e && (r = this.node.parentElement.dataset.ref), this.node.parentElement && (a = Array.from(this.node.parentElement.childNodes).indexOf(this.node)), JSON.stringify({
      node: r,
      index: a,
      offset: this.offset
    })) : {};
  }
}
class bt {
  constructor(e, r) {
    this.breakToken = e, this.error = r;
  }
}
class ur extends Error {
  constructor(e, r) {
    super(e), this.items = r;
  }
}
var ln = { exports: {} }, Jo = { exports: {} }, Mp = void 0, el = function(t) {
  return t !== Mp && t !== null;
}, Dp = el, qp = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, Np = function(t) {
  return Dp(t) ? hasOwnProperty.call(qp, typeof t) : !1;
}, $p = Np, Fp = function(t) {
  if (!$p(t)) return !1;
  try {
    return t.constructor ? t.constructor.prototype === t : !1;
  } catch {
    return !1;
  }
}, Gp = Fp, Vp = function(t) {
  if (typeof t != "function" || !hasOwnProperty.call(t, "length")) return !1;
  try {
    if (typeof t.length != "number" || typeof t.call != "function" || typeof t.apply != "function") return !1;
  } catch {
    return !1;
  }
  return !Gp(t);
}, Up = Vp, Hp = /^\s*class[\s{/}]/, Yp = Function.prototype.toString, Kp = function(t) {
  return !(!Up(t) || Hp.test(Yp.call(t)));
}, Qp = function() {
  var t = Object.assign, e;
  return typeof t != "function" ? !1 : (e = { foo: "raz" }, t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
}, oa, zi;
function Zp() {
  return zi || (zi = 1, oa = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), oa;
}
var Xp = function() {
}, Jp = Xp(), qt = function(t) {
  return t !== Jp && t !== null;
}, la, ji;
function eu() {
  if (ji) return la;
  ji = 1;
  var t = qt, e = Object.keys;
  return la = function(r) {
    return e(t(r) ? Object(r) : r);
  }, la;
}
var da, Wi;
function tu() {
  return Wi || (Wi = 1, da = Zp()() ? Object.keys : eu()), da;
}
var pa, Li;
function _n() {
  if (Li) return pa;
  Li = 1;
  var t = qt;
  return pa = function(e) {
    if (!t(e)) throw new TypeError("Cannot use null or undefined");
    return e;
  }, pa;
}
var ua, Pi;
function ru() {
  if (Pi) return ua;
  Pi = 1;
  var t = tu(), e = _n(), r = Math.max;
  return ua = function(a, n) {
    var i, s, o = r(arguments.length, 2), l;
    for (a = Object(e(a)), l = function(p) {
      try {
        a[p] = n[p];
      } catch (u) {
        i || (i = u);
      }
    }, s = 1; s < o; ++s)
      n = arguments[s], t(n).forEach(l);
    if (i !== void 0) throw i;
    return a;
  }, ua;
}
var au = Qp() ? Object.assign : ru(), nu = qt, iu = Array.prototype.forEach, su = Object.create, ou = function(t, e) {
  var r;
  for (r in t) e[r] = t[r];
}, lu = function(t) {
  var e = su(null);
  return iu.call(arguments, function(r) {
    nu(r) && ou(Object(r), e);
  }), e;
}, ca = "razdwatrzy", du = function() {
  return typeof ca.contains != "function" ? !1 : ca.contains("dwa") === !0 && ca.contains("foo") === !1;
}, ma, Ri;
function pu() {
  if (Ri) return ma;
  Ri = 1;
  var t = String.prototype.indexOf;
  return ma = function(e) {
    return t.call(this, e, arguments[1]) > -1;
  }, ma;
}
var uu = du() ? String.prototype.contains : pu(), cr = el, Ii = Kp, tl = au, rl = lu, jt = uu, cu = Jo.exports = function(t, e) {
  var r, a, n, i, s;
  return arguments.length < 2 || typeof t != "string" ? (i = e, e = t, t = null) : i = arguments[2], cr(t) ? (r = jt.call(t, "c"), a = jt.call(t, "e"), n = jt.call(t, "w")) : (r = n = !0, a = !1), s = { value: e, configurable: r, enumerable: a, writable: n }, i ? tl(rl(i), s) : s;
};
cu.gs = function(t, e, r) {
  var a, n, i, s;
  return typeof t != "string" ? (i = r, r = e, e = t, t = null) : i = arguments[3], cr(e) ? Ii(e) ? cr(r) ? Ii(r) || (i = r, r = void 0) : r = void 0 : (i = e, e = r = void 0) : e = void 0, cr(t) ? (a = jt.call(t, "c"), n = jt.call(t, "e")) : (a = !0, n = !1), s = { get: e, set: r, configurable: a, enumerable: n }, i ? tl(rl(i), s) : s;
};
var tt = Jo.exports, al = function(t) {
  if (typeof t != "function") throw new TypeError(t + " is not a function");
  return t;
};
(function(t, e) {
  var r = tt, a = al, n = Function.prototype.apply, i = Function.prototype.call, s = Object.create, o = Object.defineProperty, l = Object.defineProperties, p = Object.prototype.hasOwnProperty, u = { configurable: !0, enumerable: !1, writable: !0 }, c, d, m, f, x, b, g;
  c = function(v, k) {
    var y;
    return a(k), p.call(this, "__ee__") ? y = this.__ee__ : (y = u.value = s(null), o(this, "__ee__", u), u.value = null), y[v] ? typeof y[v] == "object" ? y[v].push(k) : y[v] = [y[v], k] : y[v] = k, this;
  }, d = function(v, k) {
    var y, S;
    return a(k), S = this, c.call(this, v, y = function() {
      m.call(S, v, y), n.call(k, this, arguments);
    }), y.__eeOnceListener__ = k, this;
  }, m = function(v, k) {
    var y, S, w, E;
    if (a(k), !p.call(this, "__ee__")) return this;
    if (y = this.__ee__, !y[v]) return this;
    if (S = y[v], typeof S == "object")
      for (E = 0; w = S[E]; ++E)
        (w === k || w.__eeOnceListener__ === k) && (S.length === 2 ? y[v] = S[E ? 0 : 1] : S.splice(E, 1));
    else
      (S === k || S.__eeOnceListener__ === k) && delete y[v];
    return this;
  }, f = function(v) {
    var k, y, S, w, E;
    if (p.call(this, "__ee__") && (w = this.__ee__[v], !!w))
      if (typeof w == "object") {
        for (y = arguments.length, E = new Array(y - 1), k = 1; k < y; ++k) E[k - 1] = arguments[k];
        for (w = w.slice(), k = 0; S = w[k]; ++k)
          n.call(S, this, E);
      } else
        switch (arguments.length) {
          case 1:
            i.call(w, this);
            break;
          case 2:
            i.call(w, this, arguments[1]);
            break;
          case 3:
            i.call(w, this, arguments[1], arguments[2]);
            break;
          default:
            for (y = arguments.length, E = new Array(y - 1), k = 1; k < y; ++k)
              E[k - 1] = arguments[k];
            n.call(w, this, E);
        }
  }, x = {
    on: c,
    once: d,
    off: m,
    emit: f
  }, b = {
    on: r(c),
    once: r(d),
    off: r(m),
    emit: r(f)
  }, g = l({}, b), t.exports = e = function(v) {
    return v == null ? s(g) : l(Object(v), b);
  }, e.methods = x;
})(ln, ln.exports);
var nl = ln.exports;
const rt = /* @__PURE__ */ Ar(nl);
class W {
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
const mu = 1500;
class On {
  constructor(e, r, a) {
    this.element = e, this.bounds = this.element.getBoundingClientRect(), this.parentBounds = this.element.offsetParent.getBoundingClientRect();
    let n = parseFloat(window.getComputedStyle(this.element).columnGap);
    if (n) {
      let i = this.bounds.left - this.parentBounds.left;
      this.gap = n - i;
    } else
      this.gap = 0;
    r ? this.hooks = r : (this.hooks = {}, this.hooks.onPageLayout = new W(), this.hooks.layout = new W(), this.hooks.renderNode = new W(), this.hooks.layoutNode = new W(), this.hooks.beforeOverflow = new W(), this.hooks.onOverflow = new W(), this.hooks.afterOverflowRemoved = new W(), this.hooks.onBreakToken = new W(), this.hooks.beforeRenderResult = new W()), this.settings = a || {}, this.maxChars = this.settings.maxChars || mu, this.forceRenderBreak = !1;
  }
  async renderTo(e, r, a, n = this.bounds) {
    let i = this.getStart(r, a), s = Jt(i, r), o, l, p, u, c = !1, d, m = 0, f = a || new vt(i);
    for (this.hooks && this.hooks.onPageLayout.trigger(e, f, this); !p && !d; ) {
      if (u = s.next(), l = o, o = u.value, p = u.done, !o) {
        this.hooks && this.hooks.layout.trigger(e, this);
        let g = e.querySelectorAll("img");
        return g.length && await this.waitForImages(g), d = this.findBreakToken(e, r, n, f), d && d.equals(f) ? (console.warn("Unable to layout item: ", l), this.hooks && this.hooks.beforeRenderResult.trigger(void 0, e, this), new bt(void 0, new ur("Unable to layout item", [l]))) : (this.rebuildTableFromBreakToken(d, e), this.hooks && this.hooks.beforeRenderResult.trigger(d, e, this), new bt(d));
      }
      if (this.hooks && this.hooks.layoutNode.trigger(o), c && this.shouldBreak(o, i)) {
        this.hooks && this.hooks.layout.trigger(e, this);
        let g = e.querySelectorAll("img");
        if (g.length && await this.waitForImages(g), d = this.findBreakToken(e, r, n, f), d ? this.rebuildTableFromBreakToken(d, e) : d = this.breakAt(o), d && d.equals(f)) {
          console.warn("Unable to layout item: ", o);
          let v = d.node && De(d.node);
          if (v)
            d = new vt(v);
          else
            return new bt(void 0, new ur("Unable to layout item", [o]));
        }
        m = 0;
        break;
      }
      if (o.dataset && o.dataset.page) {
        let g = o.dataset.page, v = this.element.closest(".pagedjs_page");
        v.classList.add("pagedjs_named_page"), v.classList.add("pagedjs_" + g + "_page"), o.dataset.splitFrom || v.classList.add("pagedjs_" + g + "_first_page");
      }
      let x = Zo(o), b = this.append(o, e, a, x);
      if (m += b.textContent.length, c || (c = Rp(o)), x || (s = Jt(De(o, r), r)), this.forceRenderBreak) {
        this.hooks && this.hooks.layout.trigger(e, this), d = this.findBreakToken(e, r, n, f), d ? this.rebuildTableFromBreakToken(d, e) : d = this.breakAt(o), m = 0, this.forceRenderBreak = !1;
        break;
      }
      if (m >= this.maxChars) {
        this.hooks && this.hooks.layout.trigger(e, this);
        let g = e.querySelectorAll("img");
        if (g.length && await this.waitForImages(g), d = this.findBreakToken(e, r, n, f), d && (m = 0, this.rebuildTableFromBreakToken(d, e)), d && d.equals(f)) {
          console.warn("Unable to layout item: ", o);
          let v = d.node && De(d.node);
          if (v)
            d = new vt(v);
          else
            return this.hooks && this.hooks.beforeRenderResult.trigger(void 0, e, this), new bt(void 0, new ur("Unable to layout item", [o]));
        }
      }
    }
    return this.hooks && this.hooks.beforeRenderResult.trigger(d, e, this), new bt(d);
  }
  breakAt(e, r = 0) {
    let a = new vt(
      e,
      r
    );
    return this.hooks.onBreakToken.triggerSync(a, void 0, e, this).forEach((i) => {
      typeof i < "u" && (a = i);
    }), a;
  }
  shouldBreak(e, r) {
    let a = br(e, r), n = e.parentNode, i = na(e) && n && !a && na(n), s;
    return i && (s = e.dataset.breakBefore === n.dataset.breakBefore), !s && na(e) || Ap(e) || Qo(e, a);
  }
  forceBreak() {
    this.forceRenderBreak = !0;
  }
  getStart(e, r) {
    let a, n = r && r.node;
    return n ? a = n : a = e.firstChild, a;
  }
  append(e, r, a, n = !0, i = !0) {
    let s = Wp(e, !n);
    if (e.parentNode && se(e.parentNode)) {
      let l = J(e.parentNode, r);
      if (l)
        l.appendChild(s);
      else if (i) {
        let p = Ko(e);
        l = J(e.parentNode, p), l ? (a && je(a.node) && a.offset > 0 && (s.textContent = s.textContent.substring(a.offset)), l.appendChild(s)) : r.appendChild(s), r.appendChild(p);
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
    let a = e.node, n = se(a) ? a.closest("td") : a.parentElement.closest("td");
    if (n) {
      if (!J(n, r, !0))
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
    let n = e.startContainer, i = e.startOffset, s, o, l, p, u;
    if (se(n))
      if (u = ia(n, i), se(u))
        if (o = J(u, r), o)
          s = J(o, a), i = 0;
        else {
          let c = er(u);
          if (se(c) || (c = c.parentElement), o = J(c, r), !u.nextSibling) {
            const d = J(o, a), f = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT).lastChild();
            if (!J(f, r))
              return;
          }
          s = J(o, a).nextSibling, i = 0;
        }
      else
        o = J(n, r), o || (o = J(er(n), r)), l = J(o, a), p = Oi(u, l), p === 0 ? (s = l, i = 0) : (s = ia(l, p), i = 0);
    else {
      if (o = J(n.parentNode, r), o || (o = J(er(n.parentNode), r)), l = J(o, a), p = Oi(n, l), p === -1)
        return;
      s = ia(l, p), i += s.textContent.indexOf(n.textContent);
    }
    if (s)
      return new vt(
        s,
        i
      );
  }
  findBreakToken(e, r, a = this.bounds, n, i = !0) {
    let s = this.findOverflow(e, a), o, l;
    if (this.hooks.onOverflow.triggerSync(s, e, a, this).forEach((u) => {
      typeof u < "u" && (s = u);
    }), s) {
      if (o = this.createBreakToken(s, e, r), this.hooks.onBreakToken.triggerSync(o, s, e, this).forEach((c) => {
        typeof c < "u" && (o = c);
      }), o && o.equals(n))
        return o;
      if (o && o.node && o.offset && o.node.textContent ? l = o.node.textContent.charAt(o.offset) : l = void 0, o && o.node && i) {
        let c = this.removeOverflow(s, l);
        this.hooks && this.hooks.afterOverflowRemoved.trigger(c, e, this);
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
    let n = Math.floor(r.left), i = Math.round(r.right + a), s = Math.round(r.top), o = Math.round(r.bottom), l, p = Jt(e.firstChild, e), u, c, d, m, f, x, b, g;
    for (; !c; )
      if (u = p.next(), c = u.done, d = u.value, f = !1, x = !1, b = void 0, g = void 0, d) {
        let k = ra(d), y = Math.round(k.left), S = Math.floor(k.right), w = Math.round(k.top), E = Math.floor(k.bottom);
        if (!l && (y >= i || w >= o)) {
          let z = !1;
          const M = sa(d, "TD", e);
          if (M && window.getComputedStyle(M)["break-inside"] === "avoid")
            b = M.parentElement;
          else if (se(d)) {
            let $ = window.getComputedStyle(d);
            z = $.getPropertyValue("float") !== "none", f = $.getPropertyValue("break-inside") === "avoid", x = d.dataset.breakBefore === "avoid" || d.dataset.previousBreakAfter === "avoid", b = x && br(d, e), g = d.tagName === "BR" || d.tagName === "WBR";
          }
          let V;
          if (d.nodeName === "TR" ? V = d : V = sa(d, "TR", e), V) {
            let $ = V.parentElement;
            ["TBODY", "THEAD"].includes($.nodeName) && window.getComputedStyle($).getPropertyValue("break-inside") === "avoid" && (b = $);
            const H = sa(V, "TABLE", e), F = H.querySelector("[colspan]");
            if (H && F) {
              let U = 0;
              for (const G of Array.from(H.rows[0].cells))
                U += parseInt(G.getAttribute("colspan") || "1");
              if (V.cells.length !== U) {
                let G = V.previousElementSibling, te;
                for (; G !== null; ) {
                  te = 0;
                  for (const Re of Array.from(G.cells))
                    te += parseInt(Re.getAttribute("colspan") || "1");
                  if (te === U)
                    break;
                  G = G.previousElementSibling;
                }
                te === U && (b = G);
              }
            }
          }
          if (b) {
            l = document.createRange(), l.selectNode(b);
            break;
          }
          if (!g && !z && se(d)) {
            l = document.createRange(), l.selectNode(d);
            break;
          }
          if (je(d) && d.textContent.trim().length) {
            l = document.createRange(), l.selectNode(d);
            break;
          }
        }
        if (!l && je(d) && d.textContent.trim().length && !Bp(d.parentNode)) {
          let z = Ep(d), M;
          y = 0, w = 0;
          for (var v = 0; v != z.length; v++)
            M = z[v], M.width > 0 && (!y || M.left > y) && (y = M.left), M.height > 0 && (!w || M.top > w) && (w = M.top);
          if (y >= i || w >= o) {
            l = document.createRange(), m = this.textBreak(d, n, i, s, o), m ? l.setStart(d, m) : l = void 0;
            break;
          }
        }
        (f || S <= i && E <= o) && (u = De(d, e), u && (p = Jt(u, e)));
      }
    if (l)
      return l.setEndAfter(e.lastChild), l;
  }
  findEndToken(e, r) {
    if (e.childNodes.length === 0)
      return;
    let a = e.lastChild, n;
    for (; a && a.lastChild; )
      if (!nn(a))
        a = a.previousSibling;
      else if (nn(a.lastChild))
        a = a.lastChild;
      else {
        a = er(a.lastChild);
        break;
      }
    je(a) && (a.parentNode.dataset.ref ? (n = Pp(a), a = a.parentNode) : a = a.previousSibling);
    let i = J(a, r);
    n && (i = i.childNodes[n]);
    let s = De(i);
    return this.breakAt(s);
  }
  textBreak(e, r, a, n, i) {
    let s = zp(e), o = 0, l = 0, p = 0, u = 0, c, d, m, f, x;
    for (; !m && (d = s.next(), c = d.value, m = d.done, !!c); ) {
      if (f = ra(c), o = Math.floor(f.left), l = Math.floor(f.right), p = Math.floor(f.top), u = Math.floor(f.bottom), o >= a || p >= i) {
        x = c.startOffset;
        break;
      }
      if (l > a || u > i) {
        let b = jp(c), g, v, k;
        for (; !k && (v = b.next(), g = v.value, k = v.done, !!g); )
          if (f = ra(g), o = Math.floor(f.left), p = Math.floor(f.top), o >= a || p >= i) {
            x = g.startOffset, m = !0;
            break;
          }
      }
    }
    return x;
  }
  removeOverflow(e, r) {
    let { startContainer: a } = e, n = e.extractContents();
    return this.hyphenateAtBreak(a, r), n;
  }
  hyphenateAtBreak(e, r) {
    if (je(e)) {
      let a = e.textContent, n = a[a.length - 1];
      (r && /^\w|\u00AD$/.test(n) && /^\w|\u00AD$/.test(r) || !r && /^\w|\u00AD$/.test(n)) && (e.parentNode.classList.add("pagedjs_hyphen"), e.textContent += this.settings.hyphenGlyph || "‑");
    }
  }
  equalTokens(e, r) {
    return !(!e || !r || e.node && r.node && e.node !== r.node || e.offset && r.offset && e.offset !== r.offset);
  }
}
rt(On.prototype);
class dn {
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
    !n.maxChars && a && (n.maxChars = a), this.layoutMethod = new On(this.area, this.hooks, n);
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
    return typeof ResizeObserver < "u" ? this.addResizeObserver(e) : (this._checkOverflowAfterResize = this.checkOverflowAfterResize.bind(this, e), this.element.addEventListener("overflow", this._checkOverflowAfterResize, !1), this.element.addEventListener("underflow", this._checkOverflowAfterResize, !1)), this._onScroll = (function() {
      this.listening && (this.element.scrollLeft = 0);
    }).bind(this), this.element.addEventListener("scroll", this._onScroll), this.listening = !0, !0;
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
rt(dn.prototype);
class hu {
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
        let n = ke();
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
class gu {
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
    return typeof n == "function" ? (e = new aa(), r = e.promise, a = {
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
        return a = r.apply(this.context, e.args), a && typeof a.then == "function" ? a.then((function() {
          e.deferred.resolve.apply(this.context, arguments);
        }).bind(this), (function() {
          e.deferred.reject.apply(this.context, arguments);
        }).bind(this)) : (e.deferred.resolve.apply(this.context, a), e.promise);
      if (e.promise)
        return e.promise;
    } else
      return e = new aa(), e.deferred.resolve(), e.promise;
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
    return this.running || (this.running = !0, this.defered = new aa()), this.tick.call(window, () => {
      this._q.length ? this.dequeue().then((function() {
        this.run();
      }).bind(this)) : (this.defered.resolve(), this.running = void 0);
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
      return this.running = this.dequeue().then((function() {
        return this.running = void 0, this.flush();
      }).bind(this)), this.running;
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
const fu = `
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
class il {
  constructor(e, r, a) {
    this.settings = a || {}, this.hooks = {}, this.hooks.beforeParsed = new W(this), this.hooks.filter = new W(this), this.hooks.afterParsed = new W(this), this.hooks.beforePageLayout = new W(this), this.hooks.onPageLayout = new W(this), this.hooks.layout = new W(this), this.hooks.renderNode = new W(this), this.hooks.layoutNode = new W(this), this.hooks.onOverflow = new W(this), this.hooks.afterOverflowRemoved = new W(this), this.hooks.onBreakToken = new W(), this.hooks.beforeRenderResult = new W(this), this.hooks.afterPageLayout = new W(this), this.hooks.finalizePage = new W(this), this.hooks.afterRendered = new W(this), this.pages = [], this.total = 0, this.q = new gu(this), this.stopped = !1, this.rendered = !1, this.content = e, this.charsPerBreak = [], this.maxChars, e && this.flow(e, r);
  }
  setup(e) {
    this.pagesArea = document.createElement("div"), this.pagesArea.classList.add("pagedjs_pages"), e ? e.appendChild(this.pagesArea) : document.querySelector("body").appendChild(this.pagesArea), this.pageTemplate = document.createElement("template"), this.pageTemplate.innerHTML = fu;
  }
  async flow(e, r) {
    let a;
    await this.hooks.beforeParsed.trigger(e, this), a = new hu(e), this.hooks.filter.triggerSync(a), this.source = a, this.breakToken = void 0, this.pagesArea && this.pageTemplate ? (this.q.clear(), this.removePages()) : this.setup(r), this.emit("rendering", a), await this.hooks.afterParsed.trigger(a, this), await this.loadFonts();
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
      _p(async () => {
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
          let o = new ur("Layout repeated", [a.node]);
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
    let r = this.pages[this.pages.length - 1], a = new dn(this.pagesArea, this.pageTemplate, e, this.hooks, this.settings);
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
    let r = this.pages[this.pages.length - 1], a = new dn(this.pagesArea, this.pageTemplate, !1, this.hooks);
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
rt(il.prototype);
var An = { exports: {} }, sl = {};
function Oe(t) {
  return {
    prev: null,
    next: null,
    data: t
  };
}
function at(t, e, r) {
  var a;
  return Qe !== null ? (a = Qe, Qe = Qe.cursor, a.prev = e, a.next = r, a.cursor = t.cursor) : a = {
    prev: e,
    next: r,
    cursor: t.cursor
  }, t.cursor = a, a;
}
function nt(t) {
  var e = t.cursor;
  t.cursor = e.cursor, e.prev = null, e.next = null, e.cursor = Qe, Qe = e;
}
var Qe = null, P = function() {
  this.cursor = null, this.head = null, this.tail = null;
};
P.createItem = Oe;
P.prototype.createItem = Oe;
P.prototype.updateCursors = function(t, e, r, a) {
  for (var n = this.cursor; n !== null; )
    n.prev === t && (n.prev = e), n.next === r && (n.next = a), n = n.cursor;
};
P.prototype.getSize = function() {
  for (var t = 0, e = this.head; e; )
    t++, e = e.next;
  return t;
};
P.prototype.fromArray = function(t) {
  var e = null;
  this.head = null;
  for (var r = 0; r < t.length; r++) {
    var a = Oe(t[r]);
    e !== null ? e.next = a : this.head = a, a.prev = e, e = a;
  }
  return this.tail = e, this;
};
P.prototype.toArray = function() {
  for (var t = this.head, e = []; t; )
    e.push(t.data), t = t.next;
  return e;
};
P.prototype.toJSON = P.prototype.toArray;
P.prototype.isEmpty = function() {
  return this.head === null;
};
P.prototype.first = function() {
  return this.head && this.head.data;
};
P.prototype.last = function() {
  return this.tail && this.tail.data;
};
P.prototype.each = function(t, e) {
  var r;
  e === void 0 && (e = this);
  for (var a = at(this, null, this.head); a.next !== null; )
    r = a.next, a.next = r.next, t.call(e, r.data, r, this);
  nt(this);
};
P.prototype.forEach = P.prototype.each;
P.prototype.eachRight = function(t, e) {
  var r;
  e === void 0 && (e = this);
  for (var a = at(this, this.tail, null); a.prev !== null; )
    r = a.prev, a.prev = r.prev, t.call(e, r.data, r, this);
  nt(this);
};
P.prototype.forEachRight = P.prototype.eachRight;
P.prototype.reduce = function(t, e, r) {
  var a;
  r === void 0 && (r = this);
  for (var n = at(this, null, this.head), i = e; n.next !== null; )
    a = n.next, n.next = a.next, i = t.call(r, i, a.data, a, this);
  return nt(this), i;
};
P.prototype.reduceRight = function(t, e, r) {
  var a;
  r === void 0 && (r = this);
  for (var n = at(this, this.tail, null), i = e; n.prev !== null; )
    a = n.prev, n.prev = a.prev, i = t.call(r, i, a.data, a, this);
  return nt(this), i;
};
P.prototype.nextUntil = function(t, e, r) {
  if (t !== null) {
    var a;
    r === void 0 && (r = this);
    for (var n = at(this, null, t); n.next !== null && (a = n.next, n.next = a.next, !e.call(r, a.data, a, this)); )
      ;
    nt(this);
  }
};
P.prototype.prevUntil = function(t, e, r) {
  if (t !== null) {
    var a;
    r === void 0 && (r = this);
    for (var n = at(this, t, null); n.prev !== null && (a = n.prev, n.prev = a.prev, !e.call(r, a.data, a, this)); )
      ;
    nt(this);
  }
};
P.prototype.some = function(t, e) {
  var r = this.head;
  for (e === void 0 && (e = this); r !== null; ) {
    if (t.call(e, r.data, r, this))
      return !0;
    r = r.next;
  }
  return !1;
};
P.prototype.map = function(t, e) {
  var r = new P(), a = this.head;
  for (e === void 0 && (e = this); a !== null; )
    r.appendData(t.call(e, a.data, a, this)), a = a.next;
  return r;
};
P.prototype.filter = function(t, e) {
  var r = new P(), a = this.head;
  for (e === void 0 && (e = this); a !== null; )
    t.call(e, a.data, a, this) && r.appendData(a.data), a = a.next;
  return r;
};
P.prototype.clear = function() {
  this.head = null, this.tail = null;
};
P.prototype.copy = function() {
  for (var t = new P(), e = this.head; e !== null; )
    t.insert(Oe(e.data)), e = e.next;
  return t;
};
P.prototype.prepend = function(t) {
  return this.updateCursors(null, t, this.head, t), this.head !== null ? (this.head.prev = t, t.next = this.head) : this.tail = t, this.head = t, this;
};
P.prototype.prependData = function(t) {
  return this.prepend(Oe(t));
};
P.prototype.append = function(t) {
  return this.insert(t);
};
P.prototype.appendData = function(t) {
  return this.insert(Oe(t));
};
P.prototype.insert = function(t, e) {
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
P.prototype.insertData = function(t, e) {
  return this.insert(Oe(t), e);
};
P.prototype.remove = function(t) {
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
P.prototype.push = function(t) {
  this.insert(Oe(t));
};
P.prototype.pop = function() {
  if (this.tail !== null)
    return this.remove(this.tail);
};
P.prototype.unshift = function(t) {
  this.prepend(Oe(t));
};
P.prototype.shift = function() {
  if (this.head !== null)
    return this.remove(this.head);
};
P.prototype.prependList = function(t) {
  return this.insertList(t, this.head);
};
P.prototype.appendList = function(t) {
  return this.insertList(t);
};
P.prototype.insertList = function(t, e) {
  return t.head === null ? this : (e != null ? (this.updateCursors(e.prev, t.tail, e, t.head), e.prev !== null ? (e.prev.next = t.head, t.head.prev = e.prev) : this.head = t.head, e.prev = t.tail, t.tail.next = e) : (this.updateCursors(this.tail, t.tail, null, t.head), this.tail !== null ? (this.tail.next = t.head, t.head.prev = this.tail) : this.head = t.head, this.tail = t.tail), t.head = null, t.tail = null, this);
};
P.prototype.replace = function(t, e) {
  "head" in e ? this.insertList(e, t) : this.insert(e, t), this.remove(t);
};
var it = P, zn = function(e, r) {
  var a = Object.create(SyntaxError.prototype), n = new Error();
  return a.name = e, a.message = r, Object.defineProperty(a, "stack", {
    get: function() {
      return (n.stack || "").replace(/^(.+\n){1,3}/, e + ": " + r + `
`);
    }
  }), a;
}, yu = zn, ha = 100, Bi = 60, Mi = "    ";
function Di(t, e) {
  function r(c, d) {
    return a.slice(c, d).map(function(m, f) {
      for (var x = String(c + f + 1); x.length < l; )
        x = " " + x;
      return x + " |" + m;
    }).join(`
`);
  }
  var a = t.source.split(/\r\n?|\n|\f/), n = t.line, i = t.column, s = Math.max(1, n - e) - 1, o = Math.min(n + e, a.length + 1), l = Math.max(4, String(o).length) + 1, p = 0;
  i += (Mi.length - 1) * (a[n - 1].substr(0, i - 1).match(/\t/g) || []).length, i > ha && (p = i - Bi + 3, i = Bi - 2);
  for (var u = s; u <= o; u++)
    u >= 0 && u < a.length && (a[u] = a[u].replace(/\t/g, Mi), a[u] = (p > 0 && a[u].length > p ? "…" : "") + a[u].substr(p, ha - 2) + (a[u].length > p + ha - 1 ? "…" : ""));
  return [
    r(s, n),
    new Array(i + l + 2).join("-") + "^",
    r(n, o)
  ].filter(Boolean).join(`
`);
}
var vu = function(t, e, r, a, n) {
  var i = yu("SyntaxError", t);
  return i.source = e, i.offset = r, i.line = a, i.column = n, i.sourceFragment = function(s) {
    return Di(i, isNaN(s) ? 0 : s);
  }, Object.defineProperty(i, "formattedMessage", {
    get: function() {
      return "Parse error: " + i.message + `
` + Di(i, 2);
    }
  }), i.parseError = {
    offset: r,
    line: a,
    column: n
  }, i;
}, ol = vu, pn = {
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
}, bu = Object.keys(pn).reduce(function(t, e) {
  return t[pn[e]] = e, t;
}, {}), jr = {
  TYPE: pn,
  NAME: bu
}, Su = 0;
function We(t) {
  return t >= 48 && t <= 57;
}
function xu(t) {
  return We(t) || // 0 .. 9
  t >= 65 && t <= 70 || // A .. F
  t >= 97 && t <= 102;
}
function ll(t) {
  return t >= 65 && t <= 90;
}
function dl(t) {
  return t >= 97 && t <= 122;
}
function pl(t) {
  return ll(t) || dl(t);
}
function ul(t) {
  return t >= 128;
}
function It(t) {
  return pl(t) || ul(t) || t === 95;
}
function wu(t) {
  return It(t) || We(t) || t === 45;
}
function cl(t) {
  return t >= 0 && t <= 8 || t === 11 || t >= 14 && t <= 31 || t === 127;
}
function jn(t) {
  return t === 10 || t === 13 || t === 12;
}
function ml(t) {
  return jn(t) || t === 32 || t === 9;
}
function un(t, e) {
  return !(t !== 92 || jn(e) || e === Su);
}
function Cu(t, e, r) {
  return t === 45 ? It(e) || e === 45 || un(e, r) : It(t) ? !0 : t === 92 ? un(t, e) : !1;
}
function ku(t, e, r) {
  return t === 43 || t === 45 ? We(e) ? 2 : e === 46 && We(r) ? 3 : 0 : t === 46 ? We(e) ? 2 : 0 : We(t) ? 1 : 0;
}
function Tu(t) {
  return t === 65279 || t === 65534 ? 1 : 0;
}
var Be = new Array(128);
me.Eof = 128;
me.WhiteSpace = 130;
me.Digit = 131;
me.NameStart = 132;
me.NonPrintable = 133;
for (var pe = 0; pe < Be.length; pe++)
  switch (!0) {
    case ml(pe):
      Be[pe] = me.WhiteSpace;
      break;
    case We(pe):
      Be[pe] = me.Digit;
      break;
    case It(pe):
      Be[pe] = me.NameStart;
      break;
    case cl(pe):
      Be[pe] = me.NonPrintable;
      break;
    default:
      Be[pe] = pe || me.Eof;
  }
function me(t) {
  return t < 128 ? Be[t] : me.NameStart;
}
var hl = {
  isDigit: We,
  isHexDigit: xu,
  isUppercaseLetter: ll,
  isLowercaseLetter: dl,
  isLetter: pl,
  isNonAscii: ul,
  isNameStart: It,
  isName: wu,
  isNonPrintable: cl,
  isNewline: jn,
  isWhiteSpace: ml,
  isValidEscape: un,
  isIdentifierStart: Cu,
  isNumberStart: ku,
  isBOM: Tu,
  charCodeCategory: me
}, st = hl, mr = st.isDigit, qi = st.isHexDigit, gl = st.isUppercaseLetter, Eu = st.isName, Wn = st.isWhiteSpace, fl = st.isValidEscape;
function Je(t, e) {
  return e < t.length ? t.charCodeAt(e) : 0;
}
function yl(t, e, r) {
  return r === 13 && Je(t, e + 1) === 10 ? 2 : 1;
}
function vl(t, e, r) {
  var a = t.charCodeAt(e);
  return gl(a) && (a = a | 32), a === r;
}
function _u(t, e, r, a) {
  if (r - e !== a.length || e < 0 || r > t.length)
    return !1;
  for (var n = e; n < r; n++) {
    var i = t.charCodeAt(n), s = a.charCodeAt(n - e);
    if (gl(i) && (i = i | 32), i !== s)
      return !1;
  }
  return !0;
}
function Ou(t, e) {
  for (; e >= 0 && Wn(t.charCodeAt(e)); e--)
    ;
  return e + 1;
}
function Au(t, e) {
  for (; e < t.length && Wn(t.charCodeAt(e)); e++)
    ;
  return e;
}
function ga(t, e) {
  for (; e < t.length && mr(t.charCodeAt(e)); e++)
    ;
  return e;
}
function Ln(t, e) {
  if (e += 2, qi(Je(t, e - 1))) {
    for (var r = Math.min(t.length, e + 5); e < r && qi(Je(t, e)); e++)
      ;
    var a = Je(t, e);
    Wn(a) && (e += yl(t, e, a));
  }
  return e;
}
function zu(t, e) {
  for (; e < t.length; e++) {
    var r = t.charCodeAt(e);
    if (!Eu(r)) {
      if (fl(r, Je(t, e + 1))) {
        e = Ln(t, e) - 1;
        continue;
      }
      break;
    }
  }
  return e;
}
function ju(t, e) {
  var r = t.charCodeAt(e);
  if ((r === 43 || r === 45) && (r = t.charCodeAt(e += 1)), mr(r) && (e = ga(t, e + 1), r = t.charCodeAt(e)), r === 46 && mr(t.charCodeAt(e + 1)) && (r = t.charCodeAt(e += 2), e = ga(t, e)), vl(
    t,
    e,
    101
    /* e */
  )) {
    var a = 0;
    r = t.charCodeAt(e + 1), (r === 45 || r === 43) && (a = 1, r = t.charCodeAt(e + 2)), mr(r) && (e = ga(t, e + 1 + a + 1));
  }
  return e;
}
function Wu(t, e) {
  for (; e < t.length; e++) {
    var r = t.charCodeAt(e);
    if (r === 41) {
      e++;
      break;
    }
    fl(r, Je(t, e + 1)) && (e = Ln(t, e));
  }
  return e;
}
var Nt = {
  consumeEscaped: Ln,
  consumeName: zu,
  consumeNumber: ju,
  consumeBadUrlRemnants: Wu,
  cmpChar: vl,
  cmpStr: _u,
  getNewlineLength: yl,
  findWhiteSpaceStart: Ou,
  findWhiteSpaceEnd: Au
}, bl = jr, Bt = bl.TYPE, Lu = bl.NAME, Pu = Nt, Ru = Pu.cmpStr, Ni = Bt.EOF, $i = Bt.WhiteSpace, Iu = Bt.Comment, fe = 16777215, Ve = 24, Sl = function() {
  this.offsetAndType = null, this.balance = null, this.reset();
};
Sl.prototype = {
  reset: function() {
    this.eof = !1, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
  },
  lookupType: function(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t] >> Ve : Ni;
  },
  lookupOffset: function(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t - 1] & fe : this.source.length;
  },
  lookupValue: function(t, e) {
    return t += this.tokenIndex, t < this.tokenCount ? Ru(
      this.source,
      this.offsetAndType[t - 1] & fe,
      this.offsetAndType[t] & fe,
      e
    ) : !1;
  },
  getTokenStart: function(t) {
    return t === this.tokenIndex ? this.tokenStart : t > 0 ? t < this.tokenCount ? this.offsetAndType[t - 1] & fe : this.offsetAndType[this.tokenCount] & fe : this.firstCharOffset;
  },
  // TODO: -> skipUntilBalanced
  getRawLength: function(t, e) {
    var r = t, a, n = this.offsetAndType[Math.max(r - 1, 0)] & fe, i;
    e:
      for (; r < this.tokenCount; r++) {
        if (a = this.balance[r], a < t)
          break e;
        switch (i = this.offsetAndType[r] >> Ve, e(i, this.source, n)) {
          case 1:
            break e;
          case 2:
            r++;
            break e;
          default:
            this.balance[a] === r && (r = a), n = this.offsetAndType[r] & fe;
        }
      }
    return r - this.tokenIndex;
  },
  isBalanceEdge: function(t) {
    return this.balance[this.tokenIndex] < t;
  },
  isDelim: function(t, e) {
    return e ? this.lookupType(e) === Bt.Delim && this.source.charCodeAt(this.lookupOffset(e)) === t : this.tokenType === Bt.Delim && this.source.charCodeAt(this.tokenStart) === t;
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
    for (var t = this.tokenIndex, e = 0; t < this.tokenCount && this.offsetAndType[t] >> Ve === $i; t++, e++)
      ;
    e > 0 && this.skip(e);
  },
  skipSC: function() {
    for (; this.tokenType === $i || this.tokenType === Iu; )
      this.next();
  },
  skip: function(t) {
    var e = this.tokenIndex + t;
    e < this.tokenCount ? (this.tokenIndex = e, this.tokenStart = this.offsetAndType[e - 1] & fe, e = this.offsetAndType[e], this.tokenType = e >> Ve, this.tokenEnd = e & fe) : (this.tokenIndex = this.tokenCount, this.next());
  },
  next: function() {
    var t = this.tokenIndex + 1;
    t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = this.tokenEnd, t = this.offsetAndType[t], this.tokenType = t >> Ve, this.tokenEnd = t & fe) : (this.tokenIndex = this.tokenCount, this.eof = !0, this.tokenType = Ni, this.tokenStart = this.tokenEnd = this.source.length);
  },
  forEachToken(t) {
    for (var e = 0, r = this.firstCharOffset; e < this.tokenCount; e++) {
      var a = r, n = this.offsetAndType[e], i = n & fe, s = n >> Ve;
      r = i, t(s, a, i, e);
    }
  },
  dump() {
    var t = new Array(this.tokenCount);
    return this.forEachToken((e, r, a, n) => {
      t[n] = {
        idx: n,
        type: Lu[e],
        chunk: this.source.substring(r, a),
        balance: this.balance[n]
      };
    }), t;
  }
};
var Wr = Sl;
function Bu(t) {
  return t;
}
function Mu(t) {
  return t.min === 0 && t.max === 0 ? "*" : t.min === 0 && t.max === 1 ? "?" : t.min === 1 && t.max === 0 ? t.comma ? "#" : "+" : t.min === 1 && t.max === 1 ? "" : (t.comma ? "#" : "") + (t.min === t.max ? "{" + t.min + "}" : "{" + t.min + "," + (t.max !== 0 ? t.max : "") + "}");
}
function Du(t) {
  switch (t.type) {
    case "Range":
      return " [" + (t.min === null ? "-∞" : t.min) + "," + (t.max === null ? "∞" : t.max) + "]";
    default:
      throw new Error("Unknown node type `" + t.type + "`");
  }
}
function qu(t, e, r, a) {
  var n = t.combinator === " " || a ? t.combinator : " " + t.combinator + " ", i = t.terms.map(function(s) {
    return Pn(s, e, r, a);
  }).join(n);
  return (t.explicit || r) && (i = (a || i[0] === "," ? "[" : "[ ") + i + (a ? "]" : " ]")), i;
}
function Pn(t, e, r, a) {
  var n;
  switch (t.type) {
    case "Group":
      n = qu(t, e, r, a) + (t.disallowEmpty ? "!" : "");
      break;
    case "Multiplier":
      return Pn(t.term, e, r, a) + e(Mu(t), t);
    case "Type":
      n = "<" + t.name + (t.opts ? e(Du(t.opts), t.opts) : "") + ">";
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
var Rn = function(t, e) {
  var r = Bu, a = !1, n = !1;
  return typeof e == "function" ? r = e : e && (a = !!e.forceBraces, n = !!e.compact, typeof e.decorate == "function" && (r = e.decorate)), Pn(t, r, a, n);
};
const xl = zn, Nu = Rn, Fi = { offset: 0, line: 1, column: 1 };
function $u(t, e) {
  const r = t.tokens, a = t.longestMatch, n = a < r.length && r[a].node || null, i = n !== e ? n : null;
  let s = 0, o = 0, l = 0, p = "", u, c;
  for (let d = 0; d < r.length; d++) {
    const m = r[d].value;
    d === a && (o = m.length, s = p.length), i !== null && r[d].node === i && (d <= a ? l++ : l = 0), p += m;
  }
  return a === r.length || l > 1 ? (u = tr(i || e, "end") || Tt(Fi, p), c = Tt(u)) : (u = tr(i, "start") || Tt(tr(e, "start") || Fi, p.slice(0, s)), c = tr(i, "end") || Tt(u, p.substr(s, o))), {
    css: p,
    mismatchOffset: s,
    mismatchLength: o,
    start: u,
    end: c
  };
}
function tr(t, e) {
  const r = t && t.loc && t.loc[e];
  return r ? "line" in r ? Tt(r) : r : null;
}
function Tt({ offset: t, line: e, column: r }, a) {
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
const Fu = function(t, e) {
  const r = xl(
    "SyntaxReferenceError",
    t + (e ? " `" + e + "`" : "")
  );
  return r.reference = e, r;
}, Gu = function(t, e, r, a) {
  const n = xl("SyntaxMatchError", t), {
    css: i,
    mismatchOffset: s,
    mismatchLength: o,
    start: l,
    end: p
  } = $u(a, r);
  return n.rawMessage = t, n.syntax = e ? Nu(e) : "<generic>", n.css = i, n.mismatchOffset = s, n.mismatchLength = o, n.message = t + `
  syntax: ` + n.syntax + `
   value: ` + (i || "<empty string>") + `
  --------` + new Array(n.mismatchOffset + 1).join("-") + "^", Object.assign(n, l), n.loc = {
    source: r && r.loc && r.loc.source || "<unknown>",
    start: l,
    end: p
  }, n;
};
var wl = {
  SyntaxReferenceError: Fu,
  SyntaxMatchError: Gu
}, Sr = Object.prototype.hasOwnProperty, Ue = /* @__PURE__ */ Object.create(null), He = /* @__PURE__ */ Object.create(null), xr = 45;
function In(t, e) {
  return e = e || 0, t.length - e >= 2 && t.charCodeAt(e) === xr && t.charCodeAt(e + 1) === xr;
}
function Bn(t, e) {
  if (e = e || 0, t.length - e >= 3 && t.charCodeAt(e) === xr && t.charCodeAt(e + 1) !== xr) {
    var r = t.indexOf("-", e + 2);
    if (r !== -1)
      return t.substring(e, r + 1);
  }
  return "";
}
function Vu(t) {
  if (Sr.call(Ue, t))
    return Ue[t];
  var e = t.toLowerCase();
  if (Sr.call(Ue, e))
    return Ue[t] = Ue[e];
  var r = In(e, 0), a = r ? "" : Bn(e, 0);
  return Ue[t] = Object.freeze({
    basename: e.substr(a.length),
    name: e,
    vendor: a,
    prefix: a,
    custom: r
  });
}
function Uu(t) {
  if (Sr.call(He, t))
    return He[t];
  var e = t, r = t[0];
  r === "/" ? r = t[1] === "/" ? "//" : "/" : r !== "_" && r !== "*" && r !== "$" && r !== "#" && r !== "+" && r !== "&" && (r = "");
  var a = In(e, r.length);
  if (!a && (e = e.toLowerCase(), Sr.call(He, e)))
    return He[t] = He[e];
  var n = a ? "" : Bn(e, r.length), i = e.substr(0, r.length + n.length);
  return He[t] = Object.freeze({
    basename: e.substr(i.length),
    name: e.substr(r.length),
    hack: r,
    vendor: n,
    prefix: i,
    custom: a
  });
}
var Mn = {
  keyword: Vu,
  property: Uu,
  isCustomProperty: In,
  vendorPrefix: Bn
}, Hu = 16 * 1024, Yu = typeof Uint32Array < "u" ? Uint32Array : Array, Cl = function(e, r) {
  return e === null || e.length < r ? new Yu(Math.max(r + 1024, Hu)) : e;
}, Ku = Wr, Gi = Cl, cn = jr, R = cn.TYPE, Te = hl, Vi = Te.isNewline, Qu = Te.isName, rr = Te.isValidEscape, fa = Te.isNumberStart, ya = Te.isIdentifierStart, ue = Te.charCodeCategory, Zu = Te.isBOM, Ee = Nt, Xu = Ee.cmpStr, Ui = Ee.getNewlineLength, ar = Ee.findWhiteSpaceEnd, Hi = Ee.consumeEscaped, nr = Ee.consumeName, Ju = Ee.consumeNumber, va = Ee.consumeBadUrlRemnants, Yi = 16777215, Ye = 24;
function Lr(t, e) {
  function r(v) {
    return v < o ? t.charCodeAt(v) : 0;
  }
  function a() {
    if (d = Ju(t, d), ya(r(d), r(d + 1), r(d + 2))) {
      g = R.Dimension, d = nr(t, d);
      return;
    }
    if (r(d) === 37) {
      g = R.Percentage, d++;
      return;
    }
    g = R.Number;
  }
  function n() {
    const v = d;
    if (d = nr(t, d), Xu(t, v, d, "url") && r(d) === 40) {
      if (d = ar(t, d + 1), r(d) === 34 || r(d) === 39) {
        g = R.Function, d = v + 4;
        return;
      }
      s();
      return;
    }
    if (r(d) === 40) {
      g = R.Function, d++;
      return;
    }
    g = R.Ident;
  }
  function i(v) {
    for (v || (v = r(d++)), g = R.String; d < t.length; d++) {
      var k = t.charCodeAt(d);
      switch (ue(k)) {
        case v:
          d++;
          return;
        case ue.Eof:
          return;
        case ue.WhiteSpace:
          if (Vi(k)) {
            d += Ui(t, d, k), g = R.BadString;
            return;
          }
          break;
        case 92:
          if (d === t.length - 1)
            break;
          var y = r(d + 1);
          Vi(y) ? d += Ui(t, d + 1, y) : rr(k, y) && (d = Hi(t, d) - 1);
          break;
      }
    }
  }
  function s() {
    for (g = R.Url, d = ar(t, d); d < t.length; d++) {
      var v = t.charCodeAt(d);
      switch (ue(v)) {
        case 41:
          d++;
          return;
        case ue.Eof:
          return;
        case ue.WhiteSpace:
          if (d = ar(t, d), r(d) === 41 || d >= t.length) {
            d < t.length && d++;
            return;
          }
          d = va(t, d), g = R.BadUrl;
          return;
        case 34:
        case 39:
        case 40:
        case ue.NonPrintable:
          d = va(t, d), g = R.BadUrl;
          return;
        case 92:
          if (rr(v, r(d + 1))) {
            d = Hi(t, d) - 1;
            break;
          }
          d = va(t, d), g = R.BadUrl;
          return;
      }
    }
  }
  e || (e = new Ku()), t = String(t || "");
  for (var o = t.length, l = Gi(e.offsetAndType, o + 1), p = Gi(e.balance, o + 1), u = 0, c = Zu(r(0)), d = c, m = 0, f = 0, x = 0; d < o; ) {
    var b = t.charCodeAt(d), g = 0;
    switch (p[u] = o, ue(b)) {
      case ue.WhiteSpace:
        g = R.WhiteSpace, d = ar(t, d + 1);
        break;
      case 34:
        i();
        break;
      case 35:
        Qu(r(d + 1)) || rr(r(d + 1), r(d + 2)) ? (g = R.Hash, d = nr(t, d + 1)) : (g = R.Delim, d++);
        break;
      case 39:
        i();
        break;
      case 40:
        g = R.LeftParenthesis, d++;
        break;
      case 41:
        g = R.RightParenthesis, d++;
        break;
      case 43:
        fa(b, r(d + 1), r(d + 2)) ? a() : (g = R.Delim, d++);
        break;
      case 44:
        g = R.Comma, d++;
        break;
      case 45:
        fa(b, r(d + 1), r(d + 2)) ? a() : r(d + 1) === 45 && r(d + 2) === 62 ? (g = R.CDC, d = d + 3) : ya(b, r(d + 1), r(d + 2)) ? n() : (g = R.Delim, d++);
        break;
      case 46:
        fa(b, r(d + 1), r(d + 2)) ? a() : (g = R.Delim, d++);
        break;
      case 47:
        r(d + 1) === 42 ? (g = R.Comment, d = t.indexOf("*/", d + 2) + 2, d === 1 && (d = t.length)) : (g = R.Delim, d++);
        break;
      case 58:
        g = R.Colon, d++;
        break;
      case 59:
        g = R.Semicolon, d++;
        break;
      case 60:
        r(d + 1) === 33 && r(d + 2) === 45 && r(d + 3) === 45 ? (g = R.CDO, d = d + 4) : (g = R.Delim, d++);
        break;
      case 64:
        ya(r(d + 1), r(d + 2), r(d + 3)) ? (g = R.AtKeyword, d = nr(t, d + 1)) : (g = R.Delim, d++);
        break;
      case 91:
        g = R.LeftSquareBracket, d++;
        break;
      case 92:
        rr(b, r(d + 1)) ? n() : (g = R.Delim, d++);
        break;
      case 93:
        g = R.RightSquareBracket, d++;
        break;
      case 123:
        g = R.LeftCurlyBracket, d++;
        break;
      case 125:
        g = R.RightCurlyBracket, d++;
        break;
      case ue.Digit:
        a();
        break;
      case ue.NameStart:
        n();
        break;
      case ue.Eof:
        break;
      default:
        g = R.Delim, d++;
    }
    switch (g) {
      case m:
        for (x = f & Yi, f = p[x], m = f >> Ye, p[u] = x, p[x++] = u; x < u; x++)
          p[x] === o && (p[x] = u);
        break;
      case R.LeftParenthesis:
      case R.Function:
        p[u] = f, m = R.RightParenthesis, f = m << Ye | u;
        break;
      case R.LeftSquareBracket:
        p[u] = f, m = R.RightSquareBracket, f = m << Ye | u;
        break;
      case R.LeftCurlyBracket:
        p[u] = f, m = R.RightCurlyBracket, f = m << Ye | u;
        break;
    }
    l[u++] = g << Ye | d;
  }
  for (l[u] = R.EOF << Ye | d, p[u] = o, p[o] = o; f !== 0; )
    x = f & Yi, f = p[x], p[x] = o;
  return e.source = t, e.firstCharOffset = c, e.offsetAndType = l, e.tokenCount = u, e.balance = p, e.reset(), e.next(), e;
}
Object.keys(cn).forEach(function(t) {
  Lr[t] = cn[t];
});
Object.keys(Te).forEach(function(t) {
  Lr[t] = Te[t];
});
Object.keys(Ee).forEach(function(t) {
  Lr[t] = Ee[t];
});
var O = Lr, kl = O.isDigit, ba = O.cmpChar, ot = O.TYPE, ec = ot.Delim, tc = ot.WhiteSpace, rc = ot.Comment, ir = ot.Ident, mn = ot.Number, ac = ot.Dimension, Mt = 43, ve = 45, Sa = 110, Ke = !0, nc = !1;
function hn(t, e) {
  return t !== null && t.type === ec && t.value.charCodeAt(0) === e;
}
function Wt(t, e, r) {
  for (; t !== null && (t.type === tc || t.type === rc); )
    t = r(++e);
  return e;
}
function ze(t, e, r, a) {
  if (!t)
    return 0;
  var n = t.value.charCodeAt(e);
  if (n === Mt || n === ve) {
    if (r)
      return 0;
    e++;
  }
  for (; e < t.value.length; e++)
    if (!kl(t.value.charCodeAt(e)))
      return 0;
  return a + 1;
}
function xa(t, e, r) {
  var a = !1, n = Wt(t, e, r);
  if (t = r(n), t === null)
    return e;
  if (t.type !== mn)
    if (hn(t, Mt) || hn(t, ve)) {
      if (a = !0, n = Wt(r(++n), n, r), t = r(n), t === null && t.type !== mn)
        return 0;
    } else
      return e;
  if (!a) {
    var i = t.value.charCodeAt(0);
    if (i !== Mt && i !== ve)
      return 0;
  }
  return ze(t, a ? 0 : 1, a, n);
}
var ic = function(e, r) {
  var a = 0;
  if (!e)
    return 0;
  if (e.type === mn)
    return ze(e, 0, nc, a);
  if (e.type === ir && e.value.charCodeAt(0) === ve) {
    if (!ba(e.value, 1, Sa))
      return 0;
    switch (e.value.length) {
      case 2:
        return xa(r(++a), a, r);
      case 3:
        return e.value.charCodeAt(2) !== ve ? 0 : (a = Wt(r(++a), a, r), e = r(a), ze(e, 0, Ke, a));
      default:
        return e.value.charCodeAt(2) !== ve ? 0 : ze(e, 3, Ke, a);
    }
  } else if (e.type === ir || hn(e, Mt) && r(a + 1).type === ir) {
    if (e.type !== ir && (e = r(++a)), e === null || !ba(e.value, 0, Sa))
      return 0;
    switch (e.value.length) {
      case 1:
        return xa(r(++a), a, r);
      case 2:
        return e.value.charCodeAt(1) !== ve ? 0 : (a = Wt(r(++a), a, r), e = r(a), ze(e, 0, Ke, a));
      default:
        return e.value.charCodeAt(1) !== ve ? 0 : ze(e, 2, Ke, a);
    }
  } else if (e.type === ac) {
    for (var n = e.value.charCodeAt(0), i = n === Mt || n === ve ? 1 : 0, s = i; s < e.value.length && kl(e.value.charCodeAt(s)); s++)
      ;
    return s === i || !ba(e.value, s, Sa) ? 0 : s + 1 === e.value.length ? xa(r(++a), a, r) : e.value.charCodeAt(s + 1) !== ve ? 0 : s + 2 === e.value.length ? (a = Wt(r(++a), a, r), e = r(a), ze(e, 0, Ke, a)) : ze(e, s + 2, Ke, a);
  }
  return 0;
}, sc = O.isHexDigit, oc = O.cmpChar, Pr = O.TYPE, Ki = Pr.Ident, lc = Pr.Delim, Qi = Pr.Number, Zi = Pr.Dimension, wa = 43, Tl = 45, El = 63, dc = 117;
function gn(t, e) {
  return t !== null && t.type === lc && t.value.charCodeAt(0) === e;
}
function Ca(t, e) {
  return t.value.charCodeAt(0) === e;
}
function Et(t, e, r) {
  for (var a = e, n = 0; a < t.value.length; a++) {
    var i = t.value.charCodeAt(a);
    if (i === Tl && r && n !== 0)
      return Et(t, e + n + 1, !1) > 0 ? 6 : 0;
    if (!sc(i) || ++n > 6)
      return 0;
  }
  return n;
}
function sr(t, e, r) {
  if (!t)
    return 0;
  for (; gn(r(e), El); ) {
    if (++t > 6)
      return 0;
    e++;
  }
  return e;
}
var pc = function(e, r) {
  var a = 0;
  if (e === null || e.type !== Ki || !oc(e.value, 0, dc) || (e = r(++a), e === null))
    return 0;
  if (gn(e, wa))
    return e = r(++a), e === null ? 0 : e.type === Ki ? sr(Et(e, 0, !0), ++a, r) : gn(e, El) ? sr(1, ++a, r) : 0;
  if (e.type === Qi) {
    if (!Ca(e, wa))
      return 0;
    var n = Et(e, 1, !0);
    return n === 0 ? 0 : (e = r(++a), e === null ? a : e.type === Zi || e.type === Qi ? !Ca(e, Tl) || !Et(e, 1, !1) ? 0 : a + 1 : sr(n, a, r));
  }
  return e.type === Zi && Ca(e, wa) ? sr(Et(e, 1, !0), ++a, r) : 0;
}, lt = O, uc = lt.isIdentifierStart, cc = lt.isHexDigit, _l = lt.isDigit, mc = lt.cmpStr, Ol = lt.consumeNumber, j = lt.TYPE, hc = ic, gc = pc, fc = ["unset", "initial", "inherit"], yc = ["calc(", "-moz-calc(", "-webkit-calc("], vc = {
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
}, bc = {
  deg: !0,
  grad: !0,
  rad: !0,
  turn: !0
}, Sc = {
  s: !0,
  ms: !0
}, xc = {
  hz: !0,
  khz: !0
}, wc = {
  dpi: !0,
  dpcm: !0,
  dppx: !0,
  x: !0
  // https://github.com/w3c/csswg-drafts/issues/461
}, Cc = {
  fr: !0
}, kc = {
  db: !0
}, Tc = {
  st: !0
};
function Lt(t, e) {
  return e < t.length ? t.charCodeAt(e) : 0;
}
function Dn(t, e) {
  return mc(t, 0, t.length, e);
}
function Al(t, e) {
  for (var r = 0; r < e.length; r++)
    if (Dn(t, e[r]))
      return !0;
  return !1;
}
function zl(t, e) {
  return e !== t.length - 2 ? !1 : t.charCodeAt(e) === 92 && // U+005C REVERSE SOLIDUS (\)
  _l(t.charCodeAt(e + 1));
}
function Rr(t, e, r) {
  if (t && t.type === "Range") {
    var a = Number(
      r !== void 0 && r !== e.length ? e.substr(0, r) : e
    );
    if (isNaN(a) || t.min !== null && a < t.min || t.max !== null && a > t.max)
      return !0;
  }
  return !1;
}
function jl(t, e) {
  var r = t.index, a = 0;
  do
    if (a++, t.balance <= r)
      break;
  while (t = e(a));
  return a;
}
function ce(t) {
  return function(e, r, a) {
    return e === null ? 0 : e.type === j.Function && Al(e.value, yc) ? jl(e, r) : t(e, r, a);
  };
}
function N(t) {
  return function(e) {
    return e === null || e.type !== t ? 0 : 1;
  };
}
function Ec(t) {
  return t = t + "(", function(e, r) {
    return e !== null && Dn(e.value, t) ? jl(e, r) : 0;
  };
}
function _c(t) {
  if (t === null || t.type !== j.Ident)
    return 0;
  var e = t.value.toLowerCase();
  return Al(e, fc) || Dn(e, "default") ? 0 : 1;
}
function Oc(t) {
  return t === null || t.type !== j.Ident || Lt(t.value, 0) !== 45 || Lt(t.value, 1) !== 45 ? 0 : 1;
}
function Ac(t) {
  if (t === null || t.type !== j.Hash)
    return 0;
  var e = t.value.length;
  if (e !== 4 && e !== 5 && e !== 7 && e !== 9)
    return 0;
  for (var r = 1; r < e; r++)
    if (!cc(t.value.charCodeAt(r)))
      return 0;
  return 1;
}
function zc(t) {
  return t === null || t.type !== j.Hash || !uc(Lt(t.value, 1), Lt(t.value, 2), Lt(t.value, 3)) ? 0 : 1;
}
function jc(t, e) {
  if (!t)
    return 0;
  var r = 0, a = 0, n = t.index;
  e:
    do {
      switch (t.type) {
        case j.BadString:
        case j.BadUrl:
          break e;
        case j.RightCurlyBracket:
        case j.RightParenthesis:
        case j.RightSquareBracket:
          if (t.balance > t.index || t.balance < n)
            break e;
          a--;
          break;
        case j.Semicolon:
          if (a === 0)
            break e;
          break;
        case j.Delim:
          if (t.value === "!" && a === 0)
            break e;
          break;
        case j.Function:
        case j.LeftParenthesis:
        case j.LeftSquareBracket:
        case j.LeftCurlyBracket:
          a++;
          break;
      }
      if (r++, t.balance <= n)
        break;
    } while (t = e(r));
  return r;
}
function Wc(t, e) {
  if (!t)
    return 0;
  var r = t.index, a = 0;
  e:
    do {
      switch (t.type) {
        case j.BadString:
        case j.BadUrl:
          break e;
        case j.RightCurlyBracket:
        case j.RightParenthesis:
        case j.RightSquareBracket:
          if (t.balance > t.index || t.balance < r)
            break e;
          break;
      }
      if (a++, t.balance <= r)
        break;
    } while (t = e(a));
  return a;
}
function xe(t) {
  return function(e, r, a) {
    if (e === null || e.type !== j.Dimension)
      return 0;
    var n = Ol(e.value, 0);
    if (t !== null) {
      var i = e.value.indexOf("\\", n), s = i === -1 || !zl(e.value, i) ? e.value.substr(n) : e.value.substring(n, i);
      if (t.hasOwnProperty(s.toLowerCase()) === !1)
        return 0;
    }
    return Rr(a, e.value, n) ? 0 : 1;
  };
}
function Lc(t, e, r) {
  return t === null || t.type !== j.Percentage || Rr(r, t.value, t.value.length - 1) ? 0 : 1;
}
function Xi(t) {
  return typeof t != "function" && (t = function() {
    return 0;
  }), function(e, r, a) {
    return e !== null && e.type === j.Number && Number(e.value) === 0 ? 1 : t(e, r, a);
  };
}
function Pc(t, e, r) {
  if (t === null)
    return 0;
  var a = Ol(t.value, 0), n = a === t.value.length;
  return !n && !zl(t.value, a) || Rr(r, t.value, a) ? 0 : 1;
}
function Rc(t, e, r) {
  if (t === null || t.type !== j.Number)
    return 0;
  for (var a = t.value.charCodeAt(0) === 43 || // U+002B PLUS SIGN (+)
  t.value.charCodeAt(0) === 45 ? 1 : 0; a < t.value.length; a++)
    if (!_l(t.value.charCodeAt(a)))
      return 0;
  return Rr(r, t.value, a) ? 0 : 1;
}
var Ic = {
  // token types
  "ident-token": N(j.Ident),
  "function-token": N(j.Function),
  "at-keyword-token": N(j.AtKeyword),
  "hash-token": N(j.Hash),
  "string-token": N(j.String),
  "bad-string-token": N(j.BadString),
  "url-token": N(j.Url),
  "bad-url-token": N(j.BadUrl),
  "delim-token": N(j.Delim),
  "number-token": N(j.Number),
  "percentage-token": N(j.Percentage),
  "dimension-token": N(j.Dimension),
  "whitespace-token": N(j.WhiteSpace),
  "CDO-token": N(j.CDO),
  "CDC-token": N(j.CDC),
  "colon-token": N(j.Colon),
  "semicolon-token": N(j.Semicolon),
  "comma-token": N(j.Comma),
  "[-token": N(j.LeftSquareBracket),
  "]-token": N(j.RightSquareBracket),
  "(-token": N(j.LeftParenthesis),
  ")-token": N(j.RightParenthesis),
  "{-token": N(j.LeftCurlyBracket),
  "}-token": N(j.RightCurlyBracket),
  // token type aliases
  string: N(j.String),
  ident: N(j.Ident),
  // complex types
  "custom-ident": _c,
  "custom-property-name": Oc,
  "hex-color": Ac,
  "id-selector": zc,
  // element( <id-selector> )
  "an-plus-b": hc,
  urange: gc,
  "declaration-value": jc,
  "any-value": Wc,
  // dimensions
  dimension: ce(xe(null)),
  angle: ce(xe(bc)),
  decibel: ce(xe(kc)),
  frequency: ce(xe(xc)),
  flex: ce(xe(Cc)),
  length: ce(Xi(xe(vc))),
  resolution: ce(xe(wc)),
  semitones: ce(xe(Tc)),
  time: ce(xe(Sc)),
  // percentage
  percentage: ce(Lc),
  // numeric
  zero: Xi(),
  number: ce(Pc),
  integer: ce(Rc),
  // old IE stuff
  "-ms-legacy-expression": Ec("expression")
}, Bc = zn, Wl = function(e, r, a) {
  var n = Bc("SyntaxError", e);
  return n.input = r, n.offset = a, n.rawMessage = e, n.message = n.rawMessage + `
  ` + n.input + `
--` + new Array((n.offset || n.input.length) + 1).join("-") + "^", n;
}, Mc = Wl, Dc = 9, qc = 10, Nc = 12, $c = 13, Fc = 32, Ll = function(t) {
  this.str = t, this.pos = 0;
};
Ll.prototype = {
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
      if (e !== $c && e !== qc && e !== Nc && e !== Fc && e !== Dc)
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
    throw new Mc(t, this.str, this.pos);
  }
};
var Gc = Ll, Vc = Gc, Uc = 9, Hc = 10, Yc = 12, Kc = 13, Qc = 32, Pl = 33, Rl = 35, Ji = 38, wr = 39, Il = 40, Zc = 41, Bl = 42, Ml = 43, qn = 44, es = 45, Nn = 60, Dl = 62, ql = 63, Xc = 64, Ir = 91, $n = 93, Cr = 123, ts = 124, rs = 125, as = 8734, fn = Jc(function(t) {
  return /[a-zA-Z0-9\-]/.test(t);
}), ns = {
  " ": 1,
  "&&": 2,
  "||": 3,
  "|": 4
};
function Jc(t) {
  for (var e = typeof Uint32Array == "function" ? new Uint32Array(128) : new Array(128), r = 0; r < 128; r++)
    e[r] = t(String.fromCharCode(r)) ? 1 : 0;
  return e;
}
function kr(t) {
  return t.substringToPos(
    t.findWsEnd(t.pos)
  );
}
function Br(t) {
  for (var e = t.pos; e < t.str.length; e++) {
    var r = t.str.charCodeAt(e);
    if (r >= 128 || fn[r] === 0)
      break;
  }
  return t.pos === e && t.error("Expect a keyword"), t.substringToPos(e);
}
function Tr(t) {
  for (var e = t.pos; e < t.str.length; e++) {
    var r = t.str.charCodeAt(e);
    if (r < 48 || r > 57)
      break;
  }
  return t.pos === e && t.error("Expect a number"), t.substringToPos(e);
}
function em(t) {
  var e = t.str.indexOf("'", t.pos + 1);
  return e === -1 && (t.pos = t.str.length, t.error("Expect an apostrophe")), t.substringToPos(e + 1);
}
function is(t) {
  var e = null, r = null;
  return t.eat(Cr), e = Tr(t), t.charCode() === qn ? (t.pos++, t.charCode() !== rs && (r = Tr(t))) : r = e, t.eat(rs), {
    min: Number(e),
    max: r ? Number(r) : 0
  };
}
function tm(t) {
  var e = null, r = !1;
  switch (t.charCode()) {
    case Bl:
      t.pos++, e = {
        min: 0,
        max: 0
      };
      break;
    case Ml:
      t.pos++, e = {
        min: 1,
        max: 0
      };
      break;
    case ql:
      t.pos++, e = {
        min: 0,
        max: 1
      };
      break;
    case Rl:
      t.pos++, r = !0, t.charCode() === Cr ? e = is(t) : e = {
        min: 1,
        max: 0
      };
      break;
    case Cr:
      e = is(t);
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
function Dt(t, e) {
  var r = tm(t);
  return r !== null ? (r.term = e, r) : e;
}
function ka(t) {
  var e = t.peek();
  return e === "" ? null : {
    type: "Token",
    value: e
  };
}
function rm(t) {
  var e;
  return t.eat(Nn), t.eat(wr), e = Br(t), t.eat(wr), t.eat(Dl), Dt(t, {
    type: "Property",
    name: e
  });
}
function am(t) {
  var e = null, r = null, a = 1;
  return t.eat(Ir), t.charCode() === es && (t.peek(), a = -1), a == -1 && t.charCode() === as ? t.peek() : e = a * Number(Tr(t)), kr(t), t.eat(qn), kr(t), t.charCode() === as ? t.peek() : (a = 1, t.charCode() === es && (t.peek(), a = -1), r = a * Number(Tr(t))), t.eat($n), e === null && r === null ? null : {
    type: "Range",
    min: e,
    max: r
  };
}
function nm(t) {
  var e, r = null;
  return t.eat(Nn), e = Br(t), t.charCode() === Il && t.nextCharCode() === Zc && (t.pos += 2, e += "()"), t.charCodeAt(t.findWsEnd(t.pos)) === Ir && (kr(t), r = am(t)), t.eat(Dl), Dt(t, {
    type: "Type",
    name: e,
    opts: r
  });
}
function im(t) {
  var e;
  return e = Br(t), t.charCode() === Il ? (t.pos++, {
    type: "Function",
    name: e
  }) : Dt(t, {
    type: "Keyword",
    name: e
  });
}
function sm(t, e) {
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
    return ns[o] - ns[l];
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
function Nl(t) {
  for (var e = [], r = {}, a, n = null, i = t.pos; a = lm(t); )
    a.type !== "Spaces" && (a.type === "Combinator" ? ((n === null || n.type === "Combinator") && (t.pos = i, t.error("Unexpected combinator")), r[a.value] = !0) : n !== null && n.type !== "Combinator" && (r[" "] = !0, e.push({
      type: "Combinator",
      value: " "
    })), e.push(a), n = a, i = t.pos);
  return n !== null && n.type === "Combinator" && (t.pos -= i, t.error("Unexpected combinator")), {
    type: "Group",
    terms: e,
    combinator: sm(e, r) || " ",
    disallowEmpty: !1,
    explicit: !1
  };
}
function om(t) {
  var e;
  return t.eat(Ir), e = Nl(t), t.eat($n), e.explicit = !0, t.charCode() === Pl && (t.pos++, e.disallowEmpty = !0), e;
}
function lm(t) {
  var e = t.charCode();
  if (e < 128 && fn[e] === 1)
    return im(t);
  switch (e) {
    case $n:
      break;
    case Ir:
      return Dt(t, om(t));
    case Nn:
      return t.nextCharCode() === wr ? rm(t) : nm(t);
    case ts:
      return {
        type: "Combinator",
        value: t.substringToPos(
          t.nextCharCode() === ts ? t.pos + 2 : t.pos + 1
        )
      };
    case Ji:
      return t.pos++, t.eat(Ji), {
        type: "Combinator",
        value: "&&"
      };
    case qn:
      return t.pos++, {
        type: "Comma"
      };
    case wr:
      return Dt(t, {
        type: "String",
        value: em(t)
      });
    case Qc:
    case Uc:
    case Hc:
    case Kc:
    case Yc:
      return {
        type: "Spaces",
        value: kr(t)
      };
    case Xc:
      return e = t.nextCharCode(), e < 128 && fn[e] === 1 ? (t.pos++, {
        type: "AtKeyword",
        name: Br(t)
      }) : ka(t);
    case Bl:
    case Ml:
    case ql:
    case Rl:
    case Pl:
      break;
    case Cr:
      if (e = t.nextCharCode(), e < 48 || e > 57)
        return ka(t);
      break;
    default:
      return ka(t);
  }
}
function $l(t) {
  var e = new Vc(t), r = Nl(e);
  return e.pos !== t.length && e.error("Unexpected input"), r.terms.length === 1 && r.terms[0].type === "Group" && (r = r.terms[0]), r;
}
$l("[a&&<b>#|<'c'>*||e() f{2} /,(% g#{1,2} h{2,})]!");
var Fn = $l, _t = function() {
};
function ss(t) {
  return typeof t == "function" ? t : _t;
}
var Fl = function(t, e, r) {
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
  var n = _t, i = _t;
  if (typeof e == "function" ? n = e : e && (n = ss(e.enter), i = ss(e.leave)), n === _t && i === _t)
    throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  a(t);
}, dm = O, pm = Wr, we = new pm(), um = {
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
        return Gl(n, a);
      }
    };
  }
};
function Gl(t, e) {
  var r = [], a = 0, n = 0, i = e ? e[n].node : null;
  for (dm(t, we); !we.eof; ) {
    if (e)
      for (; n < e.length && a + e[n].len <= we.tokenStart; )
        a += e[n++].len, i = e[n].node;
    r.push({
      type: we.tokenType,
      value: we.getTokenValue(),
      index: we.tokenIndex,
      // TODO: remove it, temporary solution
      balance: we.balance[we.tokenIndex],
      // TODO: remove it, temporary solution
      node: i
    }), we.next();
  }
  return r;
}
var cm = function(t, e) {
  return typeof t == "string" ? Gl(t, null) : e.generate(t, um);
}, mm = Fn, K = { type: "Match" }, ae = { type: "Mismatch" }, Gn = { type: "DisallowEmpty" }, hm = 40, gm = 41;
function ee(t, e, r) {
  return e === K && r === ae || t === K && e === K && r === K ? t : (t.type === "If" && t.else === ae && e === K && (e = t.then, t = t.match), {
    type: "If",
    match: t,
    then: e,
    else: r
  });
}
function Vl(t) {
  return t.length > 2 && t.charCodeAt(t.length - 2) === hm && t.charCodeAt(t.length - 1) === gm;
}
function os(t) {
  return t.type === "Keyword" || t.type === "AtKeyword" || t.type === "Function" || t.type === "Type" && Vl(t.name);
}
function yn(t, e, r) {
  switch (t) {
    case " ":
      for (var l = K, a = e.length - 1; a >= 0; a--) {
        var n = e[a];
        l = ee(
          n,
          l,
          ae
        );
      }
      return l;
    case "|":
      for (var l = ae, i = null, a = e.length - 1; a >= 0; a--) {
        var n = e[a];
        if (os(n) && (i === null && a > 0 && os(e[a - 1]) && (i = /* @__PURE__ */ Object.create(null), l = ee(
          {
            type: "Enum",
            map: i
          },
          K,
          l
        )), i !== null)) {
          var s = (Vl(n.name) ? n.name.slice(0, -1) : n.name).toLowerCase();
          if (!(s in i)) {
            i[s] = n;
            continue;
          }
        }
        i = null, l = ee(
          n,
          K,
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
      for (var l = ae, a = e.length - 1; a >= 0; a--) {
        var n = e[a], o;
        e.length > 1 ? o = yn(
          t,
          e.filter(function(c) {
            return c !== n;
          }),
          !1
        ) : o = K, l = ee(
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
      for (var l = r ? K : ae, a = e.length - 1; a >= 0; a--) {
        var n = e[a], o;
        e.length > 1 ? o = yn(
          t,
          e.filter(function(d) {
            return d !== n;
          }),
          !0
        ) : o = K, l = ee(
          n,
          o,
          l
        );
      }
      return l;
  }
}
function fm(t) {
  var e = K, r = Vn(t.term);
  if (t.max === 0)
    r = ee(
      r,
      Gn,
      ae
    ), e = ee(
      r,
      null,
      // will be a loop
      ae
    ), e.then = ee(
      K,
      K,
      e
      // make a loop
    ), t.comma && (e.then.else = ee(
      { type: "Comma", syntax: t },
      e,
      ae
    ));
  else
    for (var a = t.min || 1; a <= t.max; a++)
      t.comma && e !== K && (e = ee(
        { type: "Comma", syntax: t },
        e,
        ae
      )), e = ee(
        r,
        ee(
          K,
          K,
          e
        ),
        ae
      );
  if (t.min === 0)
    e = ee(
      K,
      K,
      e
    );
  else
    for (var a = 0; a < t.min - 1; a++)
      t.comma && e !== K && (e = ee(
        { type: "Comma", syntax: t },
        e,
        ae
      )), e = ee(
        r,
        e,
        ae
      );
  return e;
}
function Vn(t) {
  if (typeof t == "function")
    return {
      type: "Generic",
      fn: t
    };
  switch (t.type) {
    case "Group":
      var e = yn(
        t.combinator,
        t.terms.map(Vn),
        !1
      );
      return t.disallowEmpty && (e = ee(
        e,
        Gn,
        ae
      )), e;
    case "Multiplier":
      return fm(t);
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
var Ul = {
  MATCH: K,
  MISMATCH: ae,
  DISALLOW_EMPTY: Gn,
  buildMatchGraph: function(t, e) {
    return typeof t == "string" && (t = mm(t)), {
      type: "MatchGraph",
      match: Vn(t),
      syntax: e || null,
      source: t
    };
  }
}, ls = Object.prototype.hasOwnProperty, Un = Ul, ye = Un.MATCH, ie = Un.MISMATCH, ym = Un.DISALLOW_EMPTY, oe = jr.TYPE, Hl = 0, vm = 1, Er = 2, Hn = 3, ds = "Match", bm = "Mismatch", Sm = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)", ps = 15e3, Yl = 0;
function Kl(t) {
  for (var e = null, r = null, a = t; a !== null; )
    r = a.prev, a.prev = e, e = a, a = r;
  return e;
}
function Ta(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++) {
    var a = t.charCodeAt(r), n = e.charCodeAt(r);
    if (a >= 65 && a <= 90 && (a = a | 32), a !== n)
      return !1;
  }
  return !0;
}
function xm(t) {
  return t.type !== oe.Delim ? !1 : t.value !== "?";
}
function us(t) {
  return t === null ? !0 : t.type === oe.Comma || t.type === oe.Function || t.type === oe.LeftParenthesis || t.type === oe.LeftSquareBracket || t.type === oe.LeftCurlyBracket || xm(t);
}
function cs(t) {
  return t === null ? !0 : t.type === oe.RightParenthesis || t.type === oe.RightSquareBracket || t.type === oe.RightCurlyBracket || t.type === oe.Delim;
}
function Ql(t, e, r) {
  function a() {
    do
      v++, g = v < t.length ? t[v] : null;
    while (g !== null && (g.type === oe.WhiteSpace || g.type === oe.Comment));
  }
  function n(G) {
    var te = v + G;
    return te < t.length ? t[te] : null;
  }
  function i(G, te) {
    return {
      nextState: G,
      matchStack: y,
      syntaxStack: c,
      thenStack: d,
      tokenIndex: v,
      prev: te
    };
  }
  function s(G) {
    d = {
      nextState: G,
      matchStack: y,
      syntaxStack: c,
      prev: d
    };
  }
  function o(G) {
    m = i(G, m);
  }
  function l() {
    y = {
      type: vm,
      syntax: e.syntax,
      token: g,
      prev: y
    }, a(), f = null, v > k && (k = v);
  }
  function p() {
    c = {
      syntax: e.syntax,
      opts: e.syntax.opts || c !== null && c.opts || null,
      prev: c
    }, y = {
      type: Er,
      syntax: e.syntax,
      token: y.token,
      prev: y
    };
  }
  function u() {
    y.type === Er ? y = y.prev : y = {
      type: Hn,
      syntax: c.syntax,
      token: y.token,
      prev: y
    }, c = c.prev;
  }
  var c = null, d = null, m = null, f = null, x = 0, b = null, g = null, v = -1, k = 0, y = {
    type: Hl,
    syntax: null,
    token: null,
    prev: null
  };
  for (a(); b === null && ++x < ps; )
    switch (e.type) {
      case "Match":
        if (d === null) {
          if (g !== null && (v !== t.length - 1 || g.value !== "\\0" && g.value !== "\\9")) {
            e = ie;
            break;
          }
          b = ds;
          break;
        }
        if (e = d.nextState, e === ym)
          if (d.matchStack === y) {
            e = ie;
            break;
          } else
            e = ye;
        for (; d.syntaxStack !== c; )
          u();
        d = d.prev;
        break;
      case "Mismatch":
        if (f !== null && f !== !1)
          (m === null || v > m.tokenIndex) && (m = f, f = !1);
        else if (m === null) {
          b = bm;
          break;
        }
        e = m.nextState, d = m.thenStack, c = m.syntaxStack, y = m.matchStack, v = m.tokenIndex, g = v < t.length ? t[v] : null, m = m.prev;
        break;
      case "MatchGraph":
        e = e.match;
        break;
      case "If":
        e.else !== ie && o(e.else), e.then !== ye && s(e.then), e = e.match;
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
        var S = e.syntax.terms;
        if (e.index === S.length) {
          if (e.mask === 0 || e.syntax.all) {
            e = ie;
            break;
          }
          e = ye;
          break;
        }
        if (e.mask === (1 << S.length) - 1) {
          e = ye;
          break;
        }
        for (; e.index < S.length; e.index++) {
          var w = 1 << e.index;
          if (!(e.mask & w)) {
            o(e), s({
              type: "AddMatchOnce",
              syntax: e.syntax,
              mask: e.mask | w
            }), e = S[e.index++];
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
        if (g !== null) {
          var H = g.value.toLowerCase();
          if (H.indexOf("\\") !== -1 && (H = H.replace(/\\[09].*$/, "")), ls.call(e.map, H)) {
            e = e.map[H];
            break;
          }
        }
        e = ie;
        break;
      case "Generic":
        var E = c !== null ? c.opts : null, z = v + Math.floor(e.fn(g, n, E));
        if (!isNaN(z) && z > v) {
          for (; v < z; )
            l();
          e = ye;
        } else
          e = ie;
        break;
      case "Type":
      case "Property":
        var M = e.type === "Type" ? "types" : "properties", V = ls.call(r, M) ? r[M][e.name] : null;
        if (!V || !V.match)
          throw new Error(
            "Bad syntax reference: " + (e.type === "Type" ? "<" + e.name + ">" : "<'" + e.name + "'>")
          );
        if (f !== !1 && g !== null && e.type === "Type") {
          var $ = (
            // https://drafts.csswg.org/css-values-4/#custom-idents
            // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
            // can only claim the keyword if no other unfulfilled production can claim it.
            e.name === "custom-ident" && g.type === oe.Ident || // https://drafts.csswg.org/css-values-4/#lengths
            // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
            // it must parse as a <number>
            e.name === "length" && g.value === "0"
          );
          if ($) {
            f === null && (f = i(e, m)), e = ie;
            break;
          }
        }
        p(), e = V.match;
        break;
      case "Keyword":
        var H = e.name;
        if (g !== null) {
          var F = g.value;
          if (F.indexOf("\\") !== -1 && (F = F.replace(/\\[09].*$/, "")), Ta(F, H)) {
            l(), e = ye;
            break;
          }
        }
        e = ie;
        break;
      case "AtKeyword":
      case "Function":
        if (g !== null && Ta(g.value, e.name)) {
          l(), e = ye;
          break;
        }
        e = ie;
        break;
      case "Token":
        if (g !== null && g.value === e.value) {
          l(), e = ye;
          break;
        }
        e = ie;
        break;
      case "Comma":
        g !== null && g.type === oe.Comma ? us(y.token) ? e = ie : (l(), e = cs(g) ? ie : ye) : e = us(y.token) || cs(g) ? ye : ie;
        break;
      case "String":
        for (var U = "", z = v; z < t.length && U.length < e.value.length; z++)
          U += t[z].value;
        if (Ta(U, e.value)) {
          for (; v < z; )
            l();
          e = ye;
        } else
          e = ie;
        break;
      default:
        throw new Error("Unknown node type: " + e.type);
    }
  switch (Yl += x, b) {
    case null:
      console.warn("[csstree-match] BREAK after " + ps + " iterations"), b = Sm, y = null;
      break;
    case ds:
      for (; c !== null; )
        u();
      break;
    default:
      y = null;
  }
  return {
    tokens: t,
    reason: b,
    iterations: x,
    match: y,
    longestMatch: k
  };
}
function wm(t, e, r) {
  var a = Ql(t, e, r || {});
  if (a.match !== null) {
    var n = Kl(a.match).prev;
    for (a.match = []; n !== null; ) {
      switch (n.type) {
        case Hl:
          break;
        case Er:
        case Hn:
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
function Cm(t, e, r) {
  var a = Ql(t, e, r || {});
  if (a.match === null)
    return a;
  var n = a.match, i = a.match = {
    syntax: e.syntax || null,
    match: []
  }, s = [i];
  for (n = Kl(n).prev; n !== null; ) {
    switch (n.type) {
      case Er:
        i.match.push(i = {
          syntax: n.syntax,
          match: []
        }), s.push(i);
        break;
      case Hn:
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
var km = {
  matchAsList: wm,
  matchAsTree: Cm,
  getTotalIterationCount: function() {
    return Yl;
  }
};
function Zl(t) {
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
function Yn(t, e, r) {
  var a = Zl.call(t, e);
  return a === null ? !1 : a.some(r);
}
function Tm(t, e) {
  return Yn(this, t, function(r) {
    return r.type === "Type" && r.name === e;
  });
}
function Em(t, e) {
  return Yn(this, t, function(r) {
    return r.type === "Property" && r.name === e;
  });
}
function _m(t) {
  return Yn(this, t, function(e) {
    return e.type === "Keyword";
  });
}
var Om = {
  getTrace: Zl,
  isType: Tm,
  isProperty: Em,
  isKeyword: _m
}, Am = it;
function Xl(t) {
  return "node" in t ? t.node : Xl(t.match[0]);
}
function Jl(t) {
  return "node" in t ? t.node : Jl(t.match[t.match.length - 1]);
}
function zm(t, e, r, a, n) {
  function i(o) {
    if (o.syntax !== null && o.syntax.type === a && o.syntax.name === n) {
      var l = Xl(o), p = Jl(o);
      t.syntax.walk(e, function(u, c, d) {
        if (u === l) {
          var m = new Am();
          do {
            if (m.appendData(c.data), c.data === p)
              break;
            c = c.next;
          } while (c !== null);
          s.push({
            parent: d,
            nodes: m
          });
        }
      });
    }
    Array.isArray(o.match) && o.match.forEach(i);
  }
  var s = [];
  return r.matched !== null && i(r.matched), s;
}
var jm = {
  matchFragments: zm
}, Wm = it, Pt = Object.prototype.hasOwnProperty;
function Ea(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && t >= 0;
}
function ms(t) {
  return !!t && Ea(t.offset) && Ea(t.line) && Ea(t.column);
}
function Lm(t, e) {
  return function(a, n) {
    if (!a || a.constructor !== Object)
      return n(a, "Type of node should be an Object");
    for (var i in a) {
      var s = !0;
      if (Pt.call(a, i) !== !1) {
        if (i === "type")
          a.type !== t && n(a, "Wrong node type `" + a.type + "`, expected `" + t + "`");
        else if (i === "loc") {
          if (a.loc === null)
            continue;
          if (a.loc && a.loc.constructor === Object)
            if (typeof a.loc.source != "string")
              i += ".source";
            else if (!ms(a.loc.start))
              i += ".start";
            else if (!ms(a.loc.end))
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
                typeof l == "string" ? s = a[i] && a[i].type === l : Array.isArray(l) && (s = a[i] instanceof Wm);
            }
          }
        else
          n(a, "Unknown field `" + i + "` for " + t + " node type");
        s || n(a, "Bad value for `" + t + "." + i + "`");
      }
    }
    for (var i in e)
      Pt.call(e, i) && Pt.call(a, i) === !1 && n(a, "Field `" + t + "." + i + "` is missed");
  };
}
function Pm(t, e) {
  var r = e.structure, a = {
    type: String,
    loc: !0
  }, n = {
    type: '"' + t + '"'
  };
  for (var i in r)
    if (Pt.call(r, i) !== !1) {
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
    check: Lm(t, a)
  };
}
var Rm = {
  getStructureFromConfig: function(t) {
    var e = {};
    if (t.node) {
      for (var r in t.node)
        if (Pt.call(t.node, r)) {
          var a = t.node[r];
          if (a.structure)
            e[r] = Pm(r, a);
          else
            throw new Error("Missed `structure` field in `" + r + "` node type definition");
        }
    }
    return e;
  }
}, St = wl.SyntaxReferenceError, Im = wl.SyntaxMatchError, xt = Mn, vn = Ic, Bm = Fn, ed = Rn, Mm = Fl, Dm = cm, _r = Ul.buildMatchGraph, hs = km.matchAsTree, or = Om, gs = jm, qm = Rm.getStructureFromConfig, Nm = _r("inherit | initial | unset"), $m = _r("inherit | initial | unset | <-ms-legacy-expression>");
function bn(t, e, r) {
  var a = {};
  for (var n in t)
    t[n].syntax && (a[n] = r ? t[n].syntax : ed(t[n].syntax, { compact: e }));
  return a;
}
function Fm(t, e, r) {
  const a = {};
  for (const [n, i] of Object.entries(t))
    a[n] = {
      prelude: i.prelude && (r ? i.prelude.syntax : ed(i.prelude.syntax, { compact: e })),
      descriptors: i.descriptors && bn(i.descriptors, e, r)
    };
  return a;
}
function Gm(t) {
  for (var e = 0; e < t.length; e++)
    if (t[e].value.toLowerCase() === "var(")
      return !0;
  return !1;
}
function be(t, e, r) {
  return {
    matched: t,
    iterations: r,
    error: e,
    getTrace: or.getTrace,
    isType: or.isType,
    isProperty: or.isProperty,
    isKeyword: or.isKeyword
  };
}
function wt(t, e, r, a) {
  var n = Dm(r, t.syntax), i;
  return Gm(n) ? be(null, new Error("Matching for a tree with var() is not supported")) : (a && (i = hs(n, t.valueCommonSyntax, t)), (!a || !i.match) && (i = hs(n, e.match, t), !i.match) ? be(
    null,
    new Im(i.reason, e.syntax, r, i),
    i.iterations
  ) : be(i.match, null, i.iterations));
}
var td = function(t, e, r) {
  if (this.valueCommonSyntax = Nm, this.syntax = e, this.generic = !1, this.atrules = {}, this.properties = {}, this.types = {}, this.structure = r || qm(t), t) {
    if (t.types)
      for (var a in t.types)
        this.addType_(a, t.types[a]);
    if (t.generic) {
      this.generic = !0;
      for (var a in vn)
        this.addType_(a, vn[a]);
    }
    if (t.atrules)
      for (var a in t.atrules)
        this.addAtrule_(a, t.atrules[a]);
    if (t.properties)
      for (var a in t.properties)
        this.addProperty_(a, t.properties[a]);
  }
};
td.prototype = {
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
    return typeof t == "function" ? i.match = _r(t, n) : (typeof t == "string" ? Object.defineProperty(i, "syntax", {
      get: function() {
        return Object.defineProperty(i, "syntax", {
          value: Bm(t)
        }), i.syntax;
      }
    }) : i.syntax = t, Object.defineProperty(i, "match", {
      get: function() {
        return Object.defineProperty(i, "match", {
          value: _r(i.syntax, n)
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
    e && (this.types[t] = this.createDescriptor(e, "Type", t), e === vn["-ms-legacy-expression"] && (this.valueCommonSyntax = $m));
  },
  checkAtruleName: function(t) {
    if (!this.getAtrule(t))
      return new St("Unknown at-rule", "@" + t);
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
    var a = this.getAtrule(t), n = xt.keyword(e);
    if (!a.descriptors)
      return new SyntaxError("At-rule `@" + t + "` has no known descriptors");
    if (!a.descriptors[n.name] && !a.descriptors[n.basename])
      return new St("Unknown at-rule descriptor", e);
  },
  checkPropertyName: function(t) {
    var e = xt.property(t);
    if (e.custom)
      return new Error("Lexer matching doesn't applicable for custom properties");
    if (!this.getProperty(t))
      return new St("Unknown property", t);
  },
  matchAtrulePrelude: function(t, e) {
    var r = this.checkAtrulePrelude(t, e);
    return r ? be(null, r) : e ? wt(this, this.getAtrule(t).prelude, e, !1) : be(null, null);
  },
  matchAtruleDescriptor: function(t, e, r) {
    var a = this.checkAtruleDescriptorName(t, e);
    if (a)
      return be(null, a);
    var n = this.getAtrule(t), i = xt.keyword(e);
    return wt(this, n.descriptors[i.name] || n.descriptors[i.basename], r, !1);
  },
  matchDeclaration: function(t) {
    return t.type !== "Declaration" ? be(null, new Error("Not a Declaration node")) : this.matchProperty(t.property, t.value);
  },
  matchProperty: function(t, e) {
    var r = this.checkPropertyName(t);
    return r ? be(null, r) : wt(this, this.getProperty(t), e, !0);
  },
  matchType: function(t, e) {
    var r = this.getType(t);
    return r ? wt(this, r, e, !1) : be(null, new St("Unknown type", t));
  },
  match: function(t, e) {
    return typeof t != "string" && (!t || !t.type) ? be(null, new St("Bad syntax")) : ((typeof t == "string" || !t.match) && (t = this.createDescriptor(t, "Type", "anonymous")), wt(this, t, e, !1));
  },
  findValueFragments: function(t, e, r, a) {
    return gs.matchFragments(this, e, this.matchProperty(t, e), r, a);
  },
  findDeclarationValueFragments: function(t, e, r) {
    return gs.matchFragments(this, t.value, this.matchDeclaration(t), e, r);
  },
  findAllFragments: function(t, e, r) {
    var a = [];
    return this.syntax.walk(t, {
      visit: "Declaration",
      enter: (function(n) {
        a.push.apply(a, this.findDeclarationValueFragments(n, e, r));
      }).bind(this)
    }), a;
  },
  getAtrule: function(t, e = !0) {
    var r = xt.keyword(t), a = r.vendor && e ? this.atrules[r.name] || this.atrules[r.basename] : this.atrules[r.name];
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
    var r = xt.property(t), a = r.vendor && e ? this.properties[r.name] || this.properties[r.basename] : this.properties[r.name];
    return a || null;
  },
  getType: function(t) {
    return this.types.hasOwnProperty(t) ? this.types[t] : null;
  },
  validate: function() {
    function t(n, i, s, o) {
      if (s.hasOwnProperty(i))
        return s[i];
      s[i] = !1, o.syntax !== null && Mm(o.syntax, function(l) {
        if (!(l.type !== "Type" && l.type !== "Property")) {
          var p = l.type === "Type" ? n.types : n.properties, u = l.type === "Type" ? e : r;
          (!p.hasOwnProperty(l.name) || t(n, l.name, u, p[l.name])) && (s[i] = !0);
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
      types: bn(this.types, !e, t),
      properties: bn(this.properties, !e, t),
      atrules: Fm(this.atrules, !e, t)
    };
  },
  toString: function() {
    return JSON.stringify(this.dump());
  }
};
var Vm = td, Um = {
  SyntaxError: Wl,
  parse: Fn,
  generate: Rn,
  walk: Fl
}, fs = Cl, Hm = O.isBOM, ys = 10, Ym = 12, vs = 13;
function Km(t, e) {
  for (var r = e.length, a = fs(t.lines, r), n = t.startLine, i = fs(t.columns, r), s = t.startColumn, o = e.length > 0 ? Hm(e.charCodeAt(0)) : 0, l = o; l < r; l++) {
    var p = e.charCodeAt(l);
    a[l] = n, i[l] = s++, (p === ys || p === vs || p === Ym) && (p === vs && l + 1 < r && e.charCodeAt(l + 1) === ys && (l++, a[l] = n, i[l] = s), n++, s = 1);
  }
  a[l] = n, i[l] = s, t.lines = a, t.columns = i;
}
var rd = function() {
  this.lines = null, this.columns = null, this.linesAndColumnsComputed = !1;
};
rd.prototype = {
  setSource: function(t, e, r, a) {
    this.source = t, this.startOffset = typeof e > "u" ? 0 : e, this.startLine = typeof r > "u" ? 1 : r, this.startColumn = typeof a > "u" ? 1 : a, this.linesAndColumnsComputed = !1;
  },
  ensureLinesAndColumnsComputed: function() {
    this.linesAndColumnsComputed || (Km(this, this.source), this.linesAndColumnsComputed = !0);
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
var Qm = rd, ad = O.TYPE, Zm = ad.WhiteSpace, Xm = ad.Comment, Jm = function(e) {
  var r = this.createList(), a = null, n = {
    recognizer: e,
    space: null,
    ignoreWS: !1,
    ignoreWSAfter: !1
  };
  for (this.scanner.skipSC(); !this.scanner.eof; ) {
    switch (this.scanner.tokenType) {
      case Xm:
        this.scanner.next();
        continue;
      case Zm:
        n.ignoreWS ? this.scanner.next() : n.space = this.WhiteSpace();
        continue;
    }
    if (a = e.getNode.call(this, n), a === void 0)
      break;
    n.space !== null && (r.push(n.space), n.space = null), r.push(a), n.ignoreWSAfter ? (n.ignoreWSAfter = !1, n.ignoreWS = !0) : n.ignoreWS = !1;
  }
  return r;
}, eh = Qm, th = ol, rh = Wr, bs = it, ah = O, nd = jr, { findWhiteSpaceStart: nh, cmpStr: ih } = Nt, sh = Jm, Ss = function() {
}, Le = nd.TYPE, oh = nd.NAME, lh = Le.WhiteSpace, dh = Le.Comment, ph = Le.Ident, xs = Le.Function, uh = Le.Url, ch = Le.Hash, mh = Le.Percentage, hh = Le.Number, gh = 35, ws = 0;
function fh(t) {
  return function() {
    return this[t]();
  };
}
function yh(t) {
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
          e.context[r] = fh(t.parseContext[r]);
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
var vh = function(e) {
  var r = {
    scanner: new rh(),
    locationMap: new eh(),
    filename: "<unknown>",
    needPositions: !1,
    onParseError: Ss,
    onParseErrorThrow: !1,
    parseAtrulePrelude: !0,
    parseRulePrelude: !0,
    parseValue: !0,
    parseCustomProperty: !1,
    readSequence: sh,
    createList: function() {
      return new bs();
    },
    createSingleNodeList: function(n) {
      return new bs().appendData(n);
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
        if (i !== lh)
          return i;
      } while (i !== ws);
      return ws;
    },
    eat: function(n) {
      if (this.scanner.tokenType !== n) {
        var i = this.scanner.tokenStart, s = oh[n] + " is expected";
        switch (n) {
          case ph:
            this.scanner.tokenType === xs || this.scanner.tokenType === uh ? (i = this.scanner.tokenEnd - 1, s = "Identifier is expected but function found") : s = "Identifier is expected";
            break;
          case ch:
            this.scanner.isDelim(gh) && (this.scanner.next(), i++, s = "Name is expected");
            break;
          case mh:
            this.scanner.tokenType === hh && (i = this.scanner.tokenEnd, s = "Percent sign is expected");
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
      return this.eat(xs), n;
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
      var s = typeof i < "u" && i < this.scanner.source.length ? this.locationMap.getLocation(i) : this.scanner.eof ? this.locationMap.getLocation(nh(this.scanner.source, this.scanner.source.length - 1)) : this.locationMap.getLocation(this.scanner.tokenStart);
      throw new th(
        n || "Unexpected input",
        this.scanner.source,
        s.offset,
        s.line,
        s.column
      );
    }
  };
  e = yh(e || {});
  for (var a in e)
    r[a] = e[a];
  return function(n, i) {
    i = i || {};
    var s = i.context || "default", o = i.onComment, l;
    if (ah(n, r.scanner), r.locationMap.setSource(
      n,
      i.offset,
      i.line,
      i.column
    ), r.filename = i.filename || "<unknown>", r.needPositions = !!i.positions, r.onParseError = typeof i.onParseError == "function" ? i.onParseError : Ss, r.onParseErrorThrow = !1, r.parseAtrulePrelude = "parseAtrulePrelude" in i ? !!i.parseAtrulePrelude : !0, r.parseRulePrelude = "parseRulePrelude" in i ? !!i.parseRulePrelude : !0, r.parseValue = "parseValue" in i ? !!i.parseValue : !0, r.parseCustomProperty = "parseCustomProperty" in i ? !!i.parseCustomProperty : !1, !r.context.hasOwnProperty(s))
      throw new Error("Unknown context `" + s + "`");
    return typeof o == "function" && r.scanner.forEachToken((p, u, c) => {
      if (p === dh) {
        const d = r.getLocation(u, c), m = ih(n, c - 2, c, "*/") ? n.slice(u + 2, c - 2) : n.slice(u + 2, c);
        o(m, d);
      }
    }), l = r.context[s].call(r, i), r.scanner.eof || r.error(), l;
  };
}, id = {}, Kn = {}, Qn = {}, Cs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
Qn.encode = function(t) {
  if (0 <= t && t < Cs.length)
    return Cs[t];
  throw new TypeError("Must be between 0 and 63: " + t);
};
Qn.decode = function(t) {
  var e = 65, r = 90, a = 97, n = 122, i = 48, s = 57, o = 43, l = 47, p = 26, u = 52;
  return e <= t && t <= r ? t - e : a <= t && t <= n ? t - a + p : i <= t && t <= s ? t - i + u : t == o ? 62 : t == l ? 63 : -1;
};
var sd = Qn, Zn = 5, od = 1 << Zn, ld = od - 1, dd = od;
function bh(t) {
  return t < 0 ? (-t << 1) + 1 : (t << 1) + 0;
}
function Sh(t) {
  var e = (t & 1) === 1, r = t >> 1;
  return e ? -r : r;
}
Kn.encode = function(e) {
  var r = "", a, n = bh(e);
  do
    a = n & ld, n >>>= Zn, n > 0 && (a |= dd), r += sd.encode(a);
  while (n > 0);
  return r;
};
Kn.decode = function(e, r, a) {
  var n = e.length, i = 0, s = 0, o, l;
  do {
    if (r >= n)
      throw new Error("Expected more digits in base 64 VLQ value.");
    if (l = sd.decode(e.charCodeAt(r++)), l === -1)
      throw new Error("Invalid base64 digit: " + e.charAt(r - 1));
    o = !!(l & dd), l &= ld, i = i + (l << s), s += Zn;
  } while (o);
  a.value = Sh(i), a.rest = r;
};
var Mr = {};
(function(t) {
  function e(y, S, w) {
    if (S in y)
      return y[S];
    if (arguments.length === 3)
      return w;
    throw new Error('"' + S + '" is a required argument.');
  }
  t.getArg = e;
  var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, a = /^data:.+\,.+$/;
  function n(y) {
    var S = y.match(r);
    return S ? {
      scheme: S[1],
      auth: S[2],
      host: S[3],
      port: S[4],
      path: S[5]
    } : null;
  }
  t.urlParse = n;
  function i(y) {
    var S = "";
    return y.scheme && (S += y.scheme + ":"), S += "//", y.auth && (S += y.auth + "@"), y.host && (S += y.host), y.port && (S += ":" + y.port), y.path && (S += y.path), S;
  }
  t.urlGenerate = i;
  function s(y) {
    var S = y, w = n(y);
    if (w) {
      if (!w.path)
        return y;
      S = w.path;
    }
    for (var E = t.isAbsolute(S), z = S.split(/\/+/), M, V = 0, $ = z.length - 1; $ >= 0; $--)
      M = z[$], M === "." ? z.splice($, 1) : M === ".." ? V++ : V > 0 && (M === "" ? (z.splice($ + 1, V), V = 0) : (z.splice($, 2), V--));
    return S = z.join("/"), S === "" && (S = E ? "/" : "."), w ? (w.path = S, i(w)) : S;
  }
  t.normalize = s;
  function o(y, S) {
    y === "" && (y = "."), S === "" && (S = ".");
    var w = n(S), E = n(y);
    if (E && (y = E.path || "/"), w && !w.scheme)
      return E && (w.scheme = E.scheme), i(w);
    if (w || S.match(a))
      return S;
    if (E && !E.host && !E.path)
      return E.host = S, i(E);
    var z = S.charAt(0) === "/" ? S : s(y.replace(/\/+$/, "") + "/" + S);
    return E ? (E.path = z, i(E)) : z;
  }
  t.join = o, t.isAbsolute = function(y) {
    return y.charAt(0) === "/" || r.test(y);
  };
  function l(y, S) {
    y === "" && (y = "."), y = y.replace(/\/$/, "");
    for (var w = 0; S.indexOf(y + "/") !== 0; ) {
      var E = y.lastIndexOf("/");
      if (E < 0 || (y = y.slice(0, E), y.match(/^([^\/]+:\/)?\/*$/)))
        return S;
      ++w;
    }
    return Array(w + 1).join("../") + S.substr(y.length + 1);
  }
  t.relative = l;
  var p = function() {
    var y = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in y);
  }();
  function u(y) {
    return y;
  }
  function c(y) {
    return m(y) ? "$" + y : y;
  }
  t.toSetString = p ? u : c;
  function d(y) {
    return m(y) ? y.slice(1) : y;
  }
  t.fromSetString = p ? u : d;
  function m(y) {
    if (!y)
      return !1;
    var S = y.length;
    if (S < 9 || y.charCodeAt(S - 1) !== 95 || y.charCodeAt(S - 2) !== 95 || y.charCodeAt(S - 3) !== 111 || y.charCodeAt(S - 4) !== 116 || y.charCodeAt(S - 5) !== 111 || y.charCodeAt(S - 6) !== 114 || y.charCodeAt(S - 7) !== 112 || y.charCodeAt(S - 8) !== 95 || y.charCodeAt(S - 9) !== 95)
      return !1;
    for (var w = S - 10; w >= 0; w--)
      if (y.charCodeAt(w) !== 36)
        return !1;
    return !0;
  }
  function f(y, S, w) {
    var E = b(y.source, S.source);
    return E !== 0 || (E = y.originalLine - S.originalLine, E !== 0) || (E = y.originalColumn - S.originalColumn, E !== 0 || w) || (E = y.generatedColumn - S.generatedColumn, E !== 0) || (E = y.generatedLine - S.generatedLine, E !== 0) ? E : b(y.name, S.name);
  }
  t.compareByOriginalPositions = f;
  function x(y, S, w) {
    var E = y.generatedLine - S.generatedLine;
    return E !== 0 || (E = y.generatedColumn - S.generatedColumn, E !== 0 || w) || (E = b(y.source, S.source), E !== 0) || (E = y.originalLine - S.originalLine, E !== 0) || (E = y.originalColumn - S.originalColumn, E !== 0) ? E : b(y.name, S.name);
  }
  t.compareByGeneratedPositionsDeflated = x;
  function b(y, S) {
    return y === S ? 0 : y === null ? 1 : S === null ? -1 : y > S ? 1 : -1;
  }
  function g(y, S) {
    var w = y.generatedLine - S.generatedLine;
    return w !== 0 || (w = y.generatedColumn - S.generatedColumn, w !== 0) || (w = b(y.source, S.source), w !== 0) || (w = y.originalLine - S.originalLine, w !== 0) || (w = y.originalColumn - S.originalColumn, w !== 0) ? w : b(y.name, S.name);
  }
  t.compareByGeneratedPositionsInflated = g;
  function v(y) {
    return JSON.parse(y.replace(/^\)]}'[^\n]*\n/, ""));
  }
  t.parseSourceMapInput = v;
  function k(y, S, w) {
    if (S = S || "", y && (y[y.length - 1] !== "/" && S[0] !== "/" && (y += "/"), S = y + S), w) {
      var E = n(w);
      if (!E)
        throw new Error("sourceMapURL could not be parsed");
      if (E.path) {
        var z = E.path.lastIndexOf("/");
        z >= 0 && (E.path = E.path.substring(0, z + 1));
      }
      S = o(i(E), S);
    }
    return s(S);
  }
  t.computeSourceURL = k;
})(Mr);
var pd = {}, Xn = Mr, Jn = Object.prototype.hasOwnProperty, qe = typeof Map < "u";
function _e() {
  this._array = [], this._set = qe ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
_e.fromArray = function(e, r) {
  for (var a = new _e(), n = 0, i = e.length; n < i; n++)
    a.add(e[n], r);
  return a;
};
_e.prototype.size = function() {
  return qe ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
_e.prototype.add = function(e, r) {
  var a = qe ? e : Xn.toSetString(e), n = qe ? this.has(e) : Jn.call(this._set, a), i = this._array.length;
  (!n || r) && this._array.push(e), n || (qe ? this._set.set(e, i) : this._set[a] = i);
};
_e.prototype.has = function(e) {
  if (qe)
    return this._set.has(e);
  var r = Xn.toSetString(e);
  return Jn.call(this._set, r);
};
_e.prototype.indexOf = function(e) {
  if (qe) {
    var r = this._set.get(e);
    if (r >= 0)
      return r;
  } else {
    var a = Xn.toSetString(e);
    if (Jn.call(this._set, a))
      return this._set[a];
  }
  throw new Error('"' + e + '" is not in the set.');
};
_e.prototype.at = function(e) {
  if (e >= 0 && e < this._array.length)
    return this._array[e];
  throw new Error("No element indexed by " + e);
};
_e.prototype.toArray = function() {
  return this._array.slice();
};
pd.ArraySet = _e;
var ud = {}, cd = Mr;
function xh(t, e) {
  var r = t.generatedLine, a = e.generatedLine, n = t.generatedColumn, i = e.generatedColumn;
  return a > r || a == r && i >= n || cd.compareByGeneratedPositionsInflated(t, e) <= 0;
}
function Dr() {
  this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
}
Dr.prototype.unsortedForEach = function(e, r) {
  this._array.forEach(e, r);
};
Dr.prototype.add = function(e) {
  xh(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e));
};
Dr.prototype.toArray = function() {
  return this._sorted || (this._array.sort(cd.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
};
ud.MappingList = Dr;
var Ct = Kn, Z = Mr, Or = pd.ArraySet, wh = ud.MappingList;
function he(t) {
  t || (t = {}), this._file = Z.getArg(t, "file", null), this._sourceRoot = Z.getArg(t, "sourceRoot", null), this._skipValidation = Z.getArg(t, "skipValidation", !1), this._sources = new Or(), this._names = new Or(), this._mappings = new wh(), this._sourcesContents = null;
}
he.prototype._version = 3;
he.fromSourceMap = function(e) {
  var r = e.sourceRoot, a = new he({
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
    n.source != null && (i.source = n.source, r != null && (i.source = Z.relative(r, i.source)), i.original = {
      line: n.originalLine,
      column: n.originalColumn
    }, n.name != null && (i.name = n.name)), a.addMapping(i);
  }), e.sources.forEach(function(n) {
    var i = n;
    r !== null && (i = Z.relative(r, n)), a._sources.has(i) || a._sources.add(i);
    var s = e.sourceContentFor(n);
    s != null && a.setSourceContent(n, s);
  }), a;
};
he.prototype.addMapping = function(e) {
  var r = Z.getArg(e, "generated"), a = Z.getArg(e, "original", null), n = Z.getArg(e, "source", null), i = Z.getArg(e, "name", null);
  this._skipValidation || this._validateMapping(r, a, n, i), n != null && (n = String(n), this._sources.has(n) || this._sources.add(n)), i != null && (i = String(i), this._names.has(i) || this._names.add(i)), this._mappings.add({
    generatedLine: r.line,
    generatedColumn: r.column,
    originalLine: a != null && a.line,
    originalColumn: a != null && a.column,
    source: n,
    name: i
  });
};
he.prototype.setSourceContent = function(e, r) {
  var a = e;
  this._sourceRoot != null && (a = Z.relative(this._sourceRoot, a)), r != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[Z.toSetString(a)] = r) : this._sourcesContents && (delete this._sourcesContents[Z.toSetString(a)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
};
he.prototype.applySourceMap = function(e, r, a) {
  var n = r;
  if (r == null) {
    if (e.file == null)
      throw new Error(
        `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
      );
    n = e.file;
  }
  var i = this._sourceRoot;
  i != null && (n = Z.relative(i, n));
  var s = new Or(), o = new Or();
  this._mappings.unsortedForEach(function(l) {
    if (l.source === n && l.originalLine != null) {
      var p = e.originalPositionFor({
        line: l.originalLine,
        column: l.originalColumn
      });
      p.source != null && (l.source = p.source, a != null && (l.source = Z.join(a, l.source)), i != null && (l.source = Z.relative(i, l.source)), l.originalLine = p.line, l.originalColumn = p.column, p.name != null && (l.name = p.name));
    }
    var u = l.source;
    u != null && !s.has(u) && s.add(u);
    var c = l.name;
    c != null && !o.has(c) && o.add(c);
  }, this), this._sources = s, this._names = o, e.sources.forEach(function(l) {
    var p = e.sourceContentFor(l);
    p != null && (a != null && (l = Z.join(a, l)), i != null && (l = Z.relative(i, l)), this.setSourceContent(l, p));
  }, this);
};
he.prototype._validateMapping = function(e, r, a, n) {
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
he.prototype._serializeMappings = function() {
  for (var e = 0, r = 1, a = 0, n = 0, i = 0, s = 0, o = "", l, p, u, c, d = this._mappings.toArray(), m = 0, f = d.length; m < f; m++) {
    if (p = d[m], l = "", p.generatedLine !== r)
      for (e = 0; p.generatedLine !== r; )
        l += ";", r++;
    else if (m > 0) {
      if (!Z.compareByGeneratedPositionsInflated(p, d[m - 1]))
        continue;
      l += ",";
    }
    l += Ct.encode(p.generatedColumn - e), e = p.generatedColumn, p.source != null && (c = this._sources.indexOf(p.source), l += Ct.encode(c - s), s = c, l += Ct.encode(p.originalLine - 1 - n), n = p.originalLine - 1, l += Ct.encode(p.originalColumn - a), a = p.originalColumn, p.name != null && (u = this._names.indexOf(p.name), l += Ct.encode(u - i), i = u)), o += l;
  }
  return o;
};
he.prototype._generateSourcesContent = function(e, r) {
  return e.map(function(a) {
    if (!this._sourcesContents)
      return null;
    r != null && (a = Z.relative(r, a));
    var n = Z.toSetString(a);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null;
  }, this);
};
he.prototype.toJSON = function() {
  var e = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  return this._file != null && (e.file = this._file), this._sourceRoot != null && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
};
he.prototype.toString = function() {
  return JSON.stringify(this.toJSON());
};
id.SourceMapGenerator = he;
var Ch = id.SourceMapGenerator, ks = {
  Atrule: !0,
  Selector: !0,
  Declaration: !0
}, kh = function(e) {
  var r = new Ch(), a = 1, n = 0, i = {
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
  }, u = e.node;
  e.node = function(m) {
    if (m.loc && m.loc.start && ks.hasOwnProperty(m.type)) {
      var f = m.loc.start.line, x = m.loc.start.column - 1;
      (s.line !== f || s.column !== x) && (s.line = f, s.column = x, i.line = a, i.column = n, o && (o = !1, (i.line !== l.line || i.column !== l.column) && r.addMapping(p)), o = !0, r.addMapping({
        source: m.loc.source,
        original: s,
        generated: i
      }));
    }
    u.call(this, m), o && ks.hasOwnProperty(m.type) && (l.line = a, l.column = n);
  };
  var c = e.chunk;
  e.chunk = function(m) {
    for (var f = 0; f < m.length; f++)
      m.charCodeAt(f) === 10 ? (a++, n = 0) : n++;
    c(m);
  };
  var d = e.result;
  return e.result = function() {
    return o && r.addMapping(p), {
      css: d(),
      map: r
    };
  }, e;
}, Th = kh, Eh = Object.prototype.hasOwnProperty;
function _h(t, e) {
  var r = t.children, a = null;
  typeof e != "function" ? r.forEach(this.node, this) : r.forEach(function(n) {
    a !== null && e.call(this, a), this.node(n), a = n;
  }, this);
}
var Oh = function(e) {
  function r(i) {
    if (Eh.call(a, i.type))
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
      children: _h,
      node: r,
      chunk: function(p) {
        o += p;
      },
      result: function() {
        return o;
      }
    };
    return s && (typeof s.decorator == "function" && (l = s.decorator(l)), s.sourceMap && (l = Th(l))), l.node(i), l.result();
  };
}, _a = it, Ah = function(e) {
  return {
    fromPlainObject: function(r) {
      return e(r, {
        enter: function(a) {
          a.children && !(a.children instanceof _a) && (a.children = new _a().fromArray(a.children));
        }
      }), r;
    },
    toPlainObject: function(r) {
      return e(r, {
        leave: function(a) {
          a.children && a.children instanceof _a && (a.children = a.children.toArray());
        }
      }), r;
    }
  };
}, ei = Object.prototype.hasOwnProperty, Ot = function() {
};
function Ts(t) {
  return typeof t == "function" ? t : Ot;
}
function Es(t, e) {
  return function(r, a, n) {
    r.type === e && t.call(this, r, a, n);
  };
}
function zh(t, e) {
  var r = e.structure, a = [];
  for (var n in r)
    if (ei.call(r, n) !== !1) {
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
function jh(t) {
  var e = {};
  for (var r in t.node)
    if (ei.call(t.node, r)) {
      var a = t.node[r];
      if (!a.structure)
        throw new Error("Missed `structure` field in `" + r + "` node type definition");
      e[r] = zh(r, a);
    }
  return e;
}
function _s(t, e) {
  var r = t.fields.slice(), a = t.context, n = typeof a == "string";
  return e && r.reverse(), function(i, s, o, l) {
    var p;
    n && (p = s[a], s[a] = i);
    for (var u = 0; u < r.length; u++) {
      var c = r[u], d = i[c.name];
      if (!c.nullable || d) {
        if (c.type === "list") {
          var m = e ? d.reduceRight(l, !1) : d.reduce(l, !1);
          if (m)
            return !0;
        } else if (o(d))
          return !0;
      }
    }
    n && (s[a] = p);
  };
}
function Os(t) {
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
var Wh = function(e) {
  var r = jh(e), a = {}, n = {}, i = Symbol("break-walk"), s = Symbol("skip-node");
  for (var o in r)
    ei.call(r, o) && r[o] !== null && (a[o] = _s(r[o], !1), n[o] = _s(r[o], !0));
  var l = Os(a), p = Os(n), u = function(c, d) {
    function m(k, y, S) {
      var w = x.call(v, k, y, S);
      if (w === i) {
        debugger;
        return !0;
      }
      return w === s ? !1 : !!(g.hasOwnProperty(k.type) && g[k.type](k, v, m, f) || b.call(v, k, y, S) === i);
    }
    var f = (k, y, S, w) => k || m(y, S, w), x = Ot, b = Ot, g = a, v = {
      break: i,
      skip: s,
      root: c,
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
      x = d;
    else if (d && (x = Ts(d.enter), b = Ts(d.leave), d.reverse && (g = n), d.visit)) {
      if (l.hasOwnProperty(d.visit))
        g = d.reverse ? p[d.visit] : l[d.visit];
      else if (!r.hasOwnProperty(d.visit))
        throw new Error("Bad value `" + d.visit + "` for `visit` option (should be: " + Object.keys(r).join(", ") + ")");
      x = Es(x, d.visit), b = Es(b, d.visit);
    }
    if (x === Ot && b === Ot)
      throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    m(c);
  };
  return u.break = i, u.skip = s, u.find = function(c, d) {
    var m = null;
    return u(c, function(f, x, b) {
      if (d.call(this, f, x, b))
        return m = f, i;
    }), m;
  }, u.findLast = function(c, d) {
    var m = null;
    return u(c, {
      reverse: !0,
      enter: function(f, x, b) {
        if (d.call(this, f, x, b))
          return m = f, i;
      }
    }), m;
  }, u.findAll = function(c, d) {
    var m = [];
    return u(c, function(f, x, b) {
      d.call(this, f, x, b) && m.push(f);
    }), m;
  }, u;
}, Lh = it, Ph = function t(e) {
  var r = {};
  for (var a in e) {
    var n = e[a];
    n && (Array.isArray(n) || n instanceof Lh ? n = n.map(t) : n.constructor === Object && (n = t(n))), r[a] = n;
  }
  return r;
};
const et = Object.prototype.hasOwnProperty, Rh = {
  generic: !0,
  types: xn,
  atrules: {
    prelude: zs,
    descriptors: zs
  },
  properties: xn,
  parseContext: Ih,
  scope: md,
  atrule: ["parse"],
  pseudo: ["parse"],
  node: ["name", "structure", "parse", "generate", "walkContext"]
};
function qr(t) {
  return t && t.constructor === Object;
}
function Sn(t) {
  return qr(t) ? Object.assign({}, t) : t;
}
function Ih(t, e) {
  return Object.assign(t, e);
}
function md(t, e) {
  for (const r in e)
    et.call(e, r) && (qr(t[r]) ? md(t[r], Sn(e[r])) : t[r] = Sn(e[r]));
  return t;
}
function As(t, e) {
  return typeof e == "string" && /^\s*\|/.test(e) ? typeof t == "string" ? t + e : e.replace(/^\s*\|\s*/, "") : e || null;
}
function xn(t, e) {
  if (typeof e == "string")
    return As(t, e);
  const r = Object.assign({}, t);
  for (let a in e)
    et.call(e, a) && (r[a] = As(et.call(t, a) ? t[a] : void 0, e[a]));
  return r;
}
function zs(t, e) {
  const r = xn(t, e);
  return !qr(r) || Object.keys(r).length ? r : null;
}
function At(t, e, r) {
  for (const a in r)
    if (et.call(r, a) !== !1) {
      if (r[a] === !0)
        a in e && et.call(e, a) && (t[a] = Sn(e[a]));
      else if (r[a]) {
        if (typeof r[a] == "function") {
          const n = r[a];
          t[a] = n({}, t[a]), t[a] = n(t[a] || {}, e[a]);
        } else if (qr(r[a])) {
          const n = {};
          for (let i in t[a])
            n[i] = At({}, t[a][i], r[a]);
          for (let i in e[a])
            n[i] = At(n[i] || {}, e[a][i], r[a]);
          t[a] = n;
        } else if (Array.isArray(r[a])) {
          const n = {}, i = r[a].reduce(function(s, o) {
            return s[o] = !0, s;
          }, {});
          for (const [s, o] of Object.entries(t[a] || {}))
            n[s] = {}, o && At(n[s], o, i);
          for (const s in e[a])
            et.call(e[a], s) && (n[s] || (n[s] = {}), e[a] && e[a][s] && At(n[s], e[a][s], i));
          t[a] = n;
        }
      }
    }
  return t;
}
var Bh = (t, e) => At(t, e, Rh), Mh = it, Dh = ol, qh = Wr, Oa = Vm, Nh = Um, $h = O, Fh = vh, Gh = Oh, Vh = Ah, Uh = Wh, Hh = Ph, lr = Mn, hr = Bh;
function wn(t) {
  var e = Fh(t), r = Uh(t), a = Gh(t), n = Vh(r), i = {
    List: Mh,
    SyntaxError: Dh,
    TokenStream: qh,
    Lexer: Oa,
    vendorPrefix: lr.vendorPrefix,
    keyword: lr.keyword,
    property: lr.property,
    isCustomProperty: lr.isCustomProperty,
    definitionSyntax: Nh,
    lexer: null,
    createLexer: function(s) {
      return new Oa(s, i, i.lexer.structure);
    },
    tokenize: $h,
    parse: e,
    walk: r,
    generate: a,
    find: r.find,
    findLast: r.findLast,
    findAll: r.findAll,
    clone: Hh,
    fromPlainObject: n.fromPlainObject,
    toPlainObject: n.toPlainObject,
    createSyntax: function(s) {
      return wn(hr({}, s));
    },
    fork: function(s) {
      var o = hr({}, t);
      return wn(
        typeof s == "function" ? s(o, Object.assign) : hr(o, s)
      );
    }
  };
  return i.lexer = new Oa({
    generic: !0,
    types: t.types,
    atrules: t.atrules,
    properties: t.properties,
    node: t.node
  }, i), i;
}
sl.create = function(t) {
  return wn(hr({}, t));
};
const Yh = {
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
}, Kh = {
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
}, Qh = {
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
}, Zh = {
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
}, Xh = {
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
}, Jh = {
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
}, eg = {
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
}, tg = {
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
}, rg = {
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
}, ag = {
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
}, ng = {
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
}, ig = {
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
}, sg = {
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
}, og = {
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
}, lg = {
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
}, dg = {
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
}, pg = {
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
}, ug = {
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
}, cg = {
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
}, mg = {
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
}, hg = {
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
}, gg = {
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
}, fg = {
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
}, yg = {
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
}, vg = {
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
}, bg = {
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
}, Sg = {
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
}, xg = {
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
}, wg = {
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
}, Cg = {
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
}, kg = {
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
}, Tg = {
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
}, Eg = {
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
}, _g = {
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
}, Og = {
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
}, Ag = {
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
}, zg = {
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
}, jg = {
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
}, Wg = {
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
}, Lg = {
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
}, Pg = {
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
}, Rg = {
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
}, Ig = {
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
}, Bg = {
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
}, Mg = {
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
}, Dg = {
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
}, qg = {
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
}, Ng = {
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
}, $g = {
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
}, Fg = {
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
}, Gg = {
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
}, Vg = {
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
}, Ug = {
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
  all: Kh,
  animation: Qh,
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
  appearance: Zh,
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
  azimuth: Xh,
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
  background: Jh,
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
  border: eg,
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
  bottom: tg,
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
  clear: rg,
  clip: ag,
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
  color: ng,
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
  columns: ig,
  contain: sg,
  content: og,
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
  cursor: lg,
  direction: dg,
  display: pg,
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
  filter: ug,
  flex: cg,
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
  float: mg,
  font: hg,
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
  gap: gg,
  grid: fg,
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
  height: yg,
  hyphens: vg,
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
  inset: bg,
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
  isolation: Sg,
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
  left: xg,
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
  margin: wg,
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
  mask: Cg,
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
  offset: kg,
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
  opacity: Tg,
  order: Eg,
  orphans: _g,
  outline: Og,
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
  overflow: Ag,
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
  padding: zg,
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
  perspective: jg,
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
  position: Wg,
  quotes: Lg,
  resize: Pg,
  right: Rg,
  rotate: Ig,
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
  scale: Bg,
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
  top: Mg,
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
  transform: Dg,
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
  transition: qg,
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
  translate: Ng,
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
  visibility: $g,
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
  widows: Fg,
  width: Gg,
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
  zoom: Vg
}, Hg = {
  syntax: "scroll | fixed | local"
}, Yg = {
  syntax: "border-box | padding-box | content-box"
}, Kg = {
  syntax: "<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>"
}, Qg = {
  syntax: "'>' | '+' | '~' | [ '||' ]"
}, Zg = {
  syntax: "<linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()> | <conic-gradient()>"
}, Xg = {
  syntax: "<number> | <angle>"
}, Jg = {
  syntax: "<url> | <image()> | <image-set()> | <element()> | <paint()> | <cross-fade()> | <gradient>"
}, ef = {
  syntax: "<an-plus-b> | even | odd"
}, tf = {
  syntax: "[ [ left | center | right ] || [ top | center | bottom ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]? | [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ] ]"
}, rf = {
  syntax: "open-quote | close-quote | no-open-quote | no-close-quote"
}, af = {
  syntax: "inset? && <length>{2,4} && <color>?"
}, nf = {
  syntax: "rect(<top>, <right>, <bottom>, <left>)"
}, sf = {
  syntax: "closest-side | farthest-side | closest-corner | farthest-corner | <length> | <length-percentage>{2}"
}, of = {
  syntax: "<string> | <image> | <custom-ident>"
}, lf = {
  syntax: "<target-counter()> | <target-counters()> | <target-text()>"
}, df = {
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
  attachment: Hg,
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
  box: Yg,
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
  color: Kg,
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
  combinator: Qg,
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
  gradient: Zg,
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
  hue: Xg,
  "hue-rotate()": {
    syntax: "hue-rotate( <angle> )"
  },
  "id-selector": {
    syntax: "<hash-token>"
  },
  image: Jg,
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
  nth: ef,
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
  position: tf,
  "pseudo-class-selector": {
    syntax: "':' <ident-token> | ':' <function-token> <any-value> ')'"
  },
  "pseudo-element-selector": {
    syntax: "':' <pseudo-class-selector>"
  },
  "pseudo-page": {
    syntax: ": [ left | right | first | blank ]"
  },
  quote: rf,
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
  shadow: af,
  "shadow-t": {
    syntax: "[ <length>{2,3} && <color>? ]"
  },
  shape: nf,
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
  size: sf,
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
  symbol: of,
  target: lf,
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
}, pf = {
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
}, uf = {
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
}, cf = {
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
}, mf = {
  atrules: pf,
  properties: uf,
  syntaxes: cf
}, hf = Yh, gf = Ug, ff = df, Aa = mf, js = /^\s*\|\s*/;
function yf(t) {
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
function Cn(t, e) {
  const r = {};
  for (const a in t)
    r[a] = t[a].syntax || t[a];
  for (const a in e)
    a in t ? e[a].syntax ? r[a] = js.test(e[a].syntax) ? r[a] + " " + e[a].syntax.trim() : e[a].syntax : delete r[a] : e[a].syntax && (r[a] = e[a].syntax.replace(js, ""));
  return r;
}
function Ws(t) {
  const e = {};
  for (const r in t)
    e[r] = t[r].syntax;
  return e;
}
function vf(t, e) {
  const r = {};
  for (const a in t) {
    const n = e[a] && e[a].descriptors || null;
    r[a] = {
      prelude: a in e && "prelude" in e[a] ? e[a].prelude : t[a].prelude || null,
      descriptors: t[a].descriptors ? Cn(t[a].descriptors, n || {}) : n && Ws(n)
    };
  }
  for (const a in e)
    hasOwnProperty.call(t, a) || (r[a] = {
      prelude: e[a].prelude || null,
      descriptors: e[a].descriptors && Ws(e[a].descriptors)
    });
  return r;
}
var bf = {
  types: Cn(ff, Aa.syntaxes),
  atrules: vf(yf(hf), Aa.atrules),
  properties: Cn(gf, Aa.properties)
}, hd = O.cmpChar, gd = O.isDigit, $t = O.TYPE, Ls = $t.WhiteSpace, Ps = $t.Comment, za = $t.Ident, Ce = $t.Number, Sf = $t.Dimension, Se = 43, le = 45, gr = 110, Me = !0, xf = !1;
function fr(t, e) {
  var r = this.scanner.tokenStart + t, a = this.scanner.source.charCodeAt(r);
  for ((a === Se || a === le) && (e && this.error("Number sign is not allowed"), r++); r < this.scanner.tokenEnd; r++)
    gd(this.scanner.source.charCodeAt(r)) || this.error("Integer is expected", r);
}
function Ze(t) {
  return fr.call(this, 0, t);
}
function Ae(t, e) {
  if (!hd(this.scanner.source, this.scanner.tokenStart + t, e)) {
    var r = "";
    switch (e) {
      case gr:
        r = "N is expected";
        break;
      case le:
        r = "HyphenMinus is expected";
        break;
    }
    this.error(r, this.scanner.tokenStart + t);
  }
}
function ja() {
  for (var t = 0, e = 0, r = this.scanner.tokenType; r === Ls || r === Ps; )
    r = this.scanner.lookupType(++t);
  if (r !== Ce)
    if (this.scanner.isDelim(Se, t) || this.scanner.isDelim(le, t)) {
      e = this.scanner.isDelim(Se, t) ? Se : le;
      do
        r = this.scanner.lookupType(++t);
      while (r === Ls || r === Ps);
      r !== Ce && (this.scanner.skip(t), Ze.call(this, Me));
    } else
      return null;
  return t > 0 && this.scanner.skip(t), e === 0 && (r = this.scanner.source.charCodeAt(this.scanner.tokenStart), r !== Se && r !== le && this.error("Number sign is expected")), Ze.call(this, e !== 0), e === le ? "-" + this.consume(Ce) : this.consume(Ce);
}
var wf = {
  name: "AnPlusB",
  structure: {
    a: [String, null],
    b: [String, null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = null, r = null;
    if (this.scanner.tokenType === Ce)
      Ze.call(this, xf), r = this.consume(Ce);
    else if (this.scanner.tokenType === za && hd(this.scanner.source, this.scanner.tokenStart, le))
      switch (e = "-1", Ae.call(this, 1, gr), this.scanner.getTokenLength()) {
        case 2:
          this.scanner.next(), r = ja.call(this);
          break;
        case 3:
          Ae.call(this, 2, le), this.scanner.next(), this.scanner.skipSC(), Ze.call(this, Me), r = "-" + this.consume(Ce);
          break;
        default:
          Ae.call(this, 2, le), fr.call(this, 3, Me), this.scanner.next(), r = this.scanner.substrToCursor(t + 2);
      }
    else if (this.scanner.tokenType === za || this.scanner.isDelim(Se) && this.scanner.lookupType(1) === za) {
      var a = 0;
      switch (e = "1", this.scanner.isDelim(Se) && (a = 1, this.scanner.next()), Ae.call(this, 0, gr), this.scanner.getTokenLength()) {
        case 1:
          this.scanner.next(), r = ja.call(this);
          break;
        case 2:
          Ae.call(this, 1, le), this.scanner.next(), this.scanner.skipSC(), Ze.call(this, Me), r = "-" + this.consume(Ce);
          break;
        default:
          Ae.call(this, 1, le), fr.call(this, 2, Me), this.scanner.next(), r = this.scanner.substrToCursor(t + a + 1);
      }
    } else if (this.scanner.tokenType === Sf) {
      for (var n = this.scanner.source.charCodeAt(this.scanner.tokenStart), a = n === Se || n === le, i = this.scanner.tokenStart + a; i < this.scanner.tokenEnd && gd(this.scanner.source.charCodeAt(i)); i++)
        ;
      i === this.scanner.tokenStart + a && this.error("Integer is expected", this.scanner.tokenStart + a), Ae.call(this, i - this.scanner.tokenStart, gr), e = this.scanner.source.substring(t, i), i + 1 === this.scanner.tokenEnd ? (this.scanner.next(), r = ja.call(this)) : (Ae.call(this, i - this.scanner.tokenStart + 1, le), i + 2 === this.scanner.tokenEnd ? (this.scanner.next(), this.scanner.skipSC(), Ze.call(this, Me), r = "-" + this.consume(Ce)) : (fr.call(this, i - this.scanner.tokenStart + 2, Me), this.scanner.next(), r = this.scanner.substrToCursor(i + 1)));
    } else
      this.error();
    return e !== null && e.charCodeAt(0) === Se && (e = e.substr(1)), r !== null && r.charCodeAt(0) === Se && (r = r.substr(1)), {
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
}, Cf = O, Nr = Cf.TYPE, kf = Nr.WhiteSpace, ti = Nr.Semicolon, fd = Nr.LeftCurlyBracket, Tf = Nr.Delim, Ef = 33;
function _f() {
  return this.scanner.tokenIndex > 0 && this.scanner.lookupType(-1) === kf ? this.scanner.tokenIndex > 1 ? this.scanner.getTokenStart(this.scanner.tokenIndex - 1) : this.scanner.firstCharOffset : this.scanner.tokenStart;
}
function Rs() {
  return 0;
}
function Of(t) {
  return t === fd ? 1 : 0;
}
function Af(t) {
  return t === fd || t === ti ? 1 : 0;
}
function zf(t, e, r) {
  return t === Tf && e.charCodeAt(r) === Ef || t === ti ? 1 : 0;
}
function jf(t) {
  return t === ti ? 2 : 0;
}
var Ne = {
  name: "Raw",
  structure: {
    value: String
  },
  parse: function(t, e, r) {
    var a = this.scanner.getTokenStart(t), n;
    return this.scanner.skip(
      this.scanner.getRawLength(t, e || Rs)
    ), r && this.scanner.tokenStart > a ? n = _f.call(this) : n = this.scanner.tokenStart, {
      type: "Raw",
      loc: this.getLocation(a, n),
      value: this.scanner.source.substring(a, n)
    };
  },
  generate: function(t) {
    this.chunk(t.value);
  },
  mode: {
    default: Rs,
    leftCurlyBracket: Of,
    leftCurlyBracketOrSemicolon: Af,
    exclamationMarkOrSemicolon: zf,
    semicolonIncluded: jf
  }
}, $r = O.TYPE, Wf = Ne.mode, yd = $r.AtKeyword, Is = $r.Semicolon, kn = $r.LeftCurlyBracket, Lf = $r.RightCurlyBracket;
function Bs(t) {
  return this.Raw(t, Wf.leftCurlyBracketOrSemicolon, !0);
}
function Pf() {
  for (var t = 1, e; e = this.scanner.lookupType(t); t++) {
    if (e === Lf)
      return !0;
    if (e === kn || e === yd)
      return !1;
  }
  return !1;
}
var Rf = {
  name: "Atrule",
  structure: {
    name: String,
    prelude: ["AtrulePrelude", "Raw", null],
    block: ["Block", null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e, r, a = null, n = null;
    switch (this.eat(yd), e = this.scanner.substrToCursor(t + 1), r = e.toLowerCase(), this.scanner.skipSC(), this.scanner.eof === !1 && this.scanner.tokenType !== kn && this.scanner.tokenType !== Is && (this.parseAtrulePrelude ? (a = this.parseWithFallback(this.AtrulePrelude.bind(this, e), Bs), a.type === "AtrulePrelude" && a.children.head === null && (a = null)) : a = Bs.call(this, this.scanner.tokenIndex), this.scanner.skipSC()), this.scanner.tokenType) {
      case Is:
        this.scanner.next();
        break;
      case kn:
        this.atrule.hasOwnProperty(r) && typeof this.atrule[r].block == "function" ? n = this.atrule[r].block.call(this) : n = this.Block(Pf.call(this));
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
}, vd = O.TYPE, If = vd.Semicolon, Bf = vd.LeftCurlyBracket, Mf = {
  name: "AtrulePrelude",
  structure: {
    children: [[]]
  },
  parse: function(t) {
    var e = null;
    return t !== null && (t = t.toLowerCase()), this.scanner.skipSC(), this.atrule.hasOwnProperty(t) && typeof this.atrule[t].prelude == "function" ? e = this.atrule[t].prelude.call(this) : e = this.readSequence(this.scope.AtrulePrelude), this.scanner.skipSC(), this.scanner.eof !== !0 && this.scanner.tokenType !== Bf && this.scanner.tokenType !== If && this.error("Semicolon or block is expected"), e === null && (e = this.createList()), {
      type: "AtrulePrelude",
      loc: this.getLocationFromList(e),
      children: e
    };
  },
  generate: function(t) {
    this.children(t);
  },
  walkContext: "atrulePrelude"
}, Ft = O.TYPE, Rt = Ft.Ident, Df = Ft.String, qf = Ft.Colon, Nf = Ft.LeftSquareBracket, Ms = Ft.RightSquareBracket, $f = 36, bd = 42, yr = 61, Ff = 94, Tn = 124, Gf = 126;
function Vf() {
  this.scanner.eof && this.error("Unexpected end of input");
  var t = this.scanner.tokenStart, e = !1, r = !0;
  return this.scanner.isDelim(bd) ? (e = !0, r = !1, this.scanner.next()) : this.scanner.isDelim(Tn) || this.eat(Rt), this.scanner.isDelim(Tn) ? this.scanner.source.charCodeAt(this.scanner.tokenStart + 1) !== yr ? (this.scanner.next(), this.eat(Rt)) : e && this.error("Identifier is expected", this.scanner.tokenEnd) : e && this.error("Vertical line is expected"), r && this.scanner.tokenType === qf && (this.scanner.next(), this.eat(Rt)), {
    type: "Identifier",
    loc: this.getLocation(t, this.scanner.tokenStart),
    name: this.scanner.substrToCursor(t)
  };
}
function Uf() {
  var t = this.scanner.tokenStart, e = this.scanner.source.charCodeAt(t);
  return e !== yr && // =
  e !== Gf && // ~=
  e !== Ff && // ^=
  e !== $f && // $=
  e !== bd && // *=
  e !== Tn && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.scanner.next(), e !== yr && (this.scanner.isDelim(yr) || this.error("Equal sign is expected"), this.scanner.next()), this.scanner.substrToCursor(t);
}
var Hf = {
  name: "AttributeSelector",
  structure: {
    name: "Identifier",
    matcher: [String, null],
    value: ["String", "Identifier", null],
    flags: [String, null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e, r = null, a = null, n = null;
    return this.eat(Nf), this.scanner.skipSC(), e = Vf.call(this), this.scanner.skipSC(), this.scanner.tokenType !== Ms && (this.scanner.tokenType !== Rt && (r = Uf.call(this), this.scanner.skipSC(), a = this.scanner.tokenType === Df ? this.String() : this.Identifier(), this.scanner.skipSC()), this.scanner.tokenType === Rt && (n = this.scanner.getTokenValue(), this.scanner.next(), this.scanner.skipSC())), this.eat(Ms), {
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
}, dt = O.TYPE, Yf = Ne.mode, Kf = dt.WhiteSpace, Qf = dt.Comment, Ds = dt.Semicolon, Zf = dt.AtKeyword, Xf = dt.LeftCurlyBracket, qs = dt.RightCurlyBracket;
function Sd(t) {
  return this.Raw(t, null, !0);
}
function Jf() {
  return this.parseWithFallback(this.Rule, Sd);
}
function Ns(t) {
  return this.Raw(t, Yf.semicolonIncluded, !0);
}
function ey() {
  if (this.scanner.tokenType === Ds)
    return Ns.call(this, this.scanner.tokenIndex);
  var t = this.parseWithFallback(this.Declaration, Ns);
  return this.scanner.tokenType === Ds && this.scanner.next(), t;
}
var ty = {
  name: "Block",
  structure: {
    children: [[
      "Atrule",
      "Rule",
      "Declaration"
    ]]
  },
  parse: function(t) {
    var e = t ? ey : Jf, r = this.scanner.tokenStart, a = this.createList();
    this.eat(Xf);
    e:
      for (; !this.scanner.eof; )
        switch (this.scanner.tokenType) {
          case qs:
            break e;
          case Kf:
          case Qf:
            this.scanner.next();
            break;
          case Zf:
            a.push(this.parseWithFallback(this.Atrule, Sd));
            break;
          default:
            a.push(e.call(this));
        }
    return this.scanner.eof || this.eat(qs), {
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
}, xd = O.TYPE, ry = xd.LeftSquareBracket, ay = xd.RightSquareBracket, ny = {
  name: "Brackets",
  structure: {
    children: [[]]
  },
  parse: function(t, e) {
    var r = this.scanner.tokenStart, a = null;
    return this.eat(ry), a = t.call(this, e), this.scanner.eof || this.eat(ay), {
      type: "Brackets",
      loc: this.getLocation(r, this.scanner.tokenStart),
      children: a
    };
  },
  generate: function(t) {
    this.chunk("["), this.children(t), this.chunk("]");
  }
}, iy = O.TYPE.CDC, sy = {
  name: "CDC",
  structure: [],
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.eat(iy), {
      type: "CDC",
      loc: this.getLocation(t, this.scanner.tokenStart)
    };
  },
  generate: function() {
    this.chunk("-->");
  }
}, oy = O.TYPE.CDO, ly = {
  name: "CDO",
  structure: [],
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.eat(oy), {
      type: "CDO",
      loc: this.getLocation(t, this.scanner.tokenStart)
    };
  },
  generate: function() {
    this.chunk("<!--");
  }
}, dy = O.TYPE, py = dy.Ident, uy = 46, cy = {
  name: "ClassSelector",
  structure: {
    name: String
  },
  parse: function() {
    return this.scanner.isDelim(uy) || this.error("Full stop is expected"), this.scanner.next(), {
      type: "ClassSelector",
      loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
      name: this.consume(py)
    };
  },
  generate: function(t) {
    this.chunk("."), this.chunk(t.name);
  }
}, my = O.TYPE, hy = my.Ident, gy = 43, $s = 47, fy = 62, yy = 126, vy = {
  name: "Combinator",
  structure: {
    name: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = this.scanner.source.charCodeAt(this.scanner.tokenStart);
    switch (e) {
      case fy:
      case gy:
      case yy:
        this.scanner.next();
        break;
      case $s:
        this.scanner.next(), (this.scanner.tokenType !== hy || this.scanner.lookupValue(0, "deep") === !1) && this.error("Identifier `deep` is expected"), this.scanner.next(), this.scanner.isDelim($s) || this.error("Solidus is expected"), this.scanner.next();
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
}, by = O.TYPE, Sy = by.Comment, xy = 42, wy = 47, Cy = {
  name: "Comment",
  structure: {
    value: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = this.scanner.tokenEnd;
    return this.eat(Sy), e - t + 2 >= 2 && this.scanner.source.charCodeAt(e - 2) === xy && this.scanner.source.charCodeAt(e - 1) === wy && (e -= 2), {
      type: "Comment",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.source.substring(t + 2, e)
    };
  },
  generate: function(t) {
    this.chunk("/*"), this.chunk(t.value), this.chunk("*/");
  }
}, ky = Mn.isCustomProperty, pt = O.TYPE, wd = Ne.mode, Cd = pt.Ident, Fs = pt.Hash, Ty = pt.Colon, kd = pt.Semicolon, Td = pt.Delim, Ey = pt.WhiteSpace, Ed = 33, _y = 35, Oy = 36, Ay = 38, zy = 42, jy = 43, Gs = 47;
function Wy(t) {
  return this.Raw(t, wd.exclamationMarkOrSemicolon, !0);
}
function Ly(t) {
  return this.Raw(t, wd.exclamationMarkOrSemicolon, !1);
}
function Py() {
  var t = this.scanner.tokenIndex, e = this.Value();
  return e.type !== "Raw" && this.scanner.eof === !1 && this.scanner.tokenType !== kd && this.scanner.isDelim(Ed) === !1 && this.scanner.isBalanceEdge(t) === !1 && this.error(), e;
}
var Ry = {
  name: "Declaration",
  structure: {
    important: [Boolean, String],
    property: String,
    value: ["Value", "Raw"]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = this.scanner.tokenIndex, r = Iy.call(this), a = ky(r), n = a ? this.parseCustomProperty : this.parseValue, i = a ? Ly : Wy, s = !1, o;
    this.scanner.skipSC(), this.eat(Ty);
    const l = this.scanner.tokenIndex;
    if (a || this.scanner.skipSC(), n ? o = this.parseWithFallback(Py, i) : o = i.call(this, this.scanner.tokenIndex), a && o.type === "Value" && o.children.isEmpty()) {
      for (let p = l - this.scanner.tokenIndex; p <= 0; p++)
        if (this.scanner.lookupType(p) === Ey) {
          o.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
    }
    return this.scanner.isDelim(Ed) && (s = By.call(this), this.scanner.skipSC()), this.scanner.eof === !1 && this.scanner.tokenType !== kd && this.scanner.isBalanceEdge(e) === !1 && this.error(), {
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
function Iy() {
  var t = this.scanner.tokenStart;
  if (this.scanner.tokenType === Td)
    switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
      case zy:
      case Oy:
      case jy:
      case _y:
      case Ay:
        this.scanner.next();
        break;
      case Gs:
        this.scanner.next(), this.scanner.isDelim(Gs) && this.scanner.next();
        break;
    }
  return this.scanner.tokenType === Fs ? this.eat(Fs) : this.eat(Cd), this.scanner.substrToCursor(t);
}
function By() {
  this.eat(Td), this.scanner.skipSC();
  var t = this.consume(Cd);
  return t === "important" ? !0 : t;
}
var ri = O.TYPE, My = Ne.mode, Dy = ri.WhiteSpace, qy = ri.Comment, Ny = ri.Semicolon;
function $y(t) {
  return this.Raw(t, My.semicolonIncluded, !0);
}
var Fy = {
  name: "DeclarationList",
  structure: {
    children: [[
      "Declaration"
    ]]
  },
  parse: function() {
    for (var t = this.createList(); !this.scanner.eof; )
      switch (this.scanner.tokenType) {
        case Dy:
        case qy:
        case Ny:
          this.scanner.next();
          break;
        default:
          t.push(this.parseWithFallback(this.Declaration, $y));
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
}, Gy = Nt.consumeNumber, Vy = O.TYPE, Uy = Vy.Dimension, Hy = {
  name: "Dimension",
  structure: {
    value: String,
    unit: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = Gy(this.scanner.source, t);
    return this.eat(Uy), {
      type: "Dimension",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.source.substring(t, e),
      unit: this.scanner.source.substring(e, this.scanner.tokenStart)
    };
  },
  generate: function(t) {
    this.chunk(t.value), this.chunk(t.unit);
  }
}, Yy = O.TYPE, Ky = Yy.RightParenthesis, Qy = {
  name: "Function",
  structure: {
    name: String,
    children: [[]]
  },
  parse: function(t, e) {
    var r = this.scanner.tokenStart, a = this.consumeFunctionName(), n = a.toLowerCase(), i;
    return i = e.hasOwnProperty(n) ? e[n].call(this, e) : t.call(this, e), this.scanner.eof || this.eat(Ky), {
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
}, Zy = O.TYPE, Xy = Zy.Hash, Jy = {
  name: "Hash",
  structure: {
    value: String
  },
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.eat(Xy), {
      type: "Hash",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(t + 1)
    };
  },
  generate: function(t) {
    this.chunk("#"), this.chunk(t.value);
  }
}, ev = O.TYPE, tv = ev.Ident, rv = {
  name: "Identifier",
  structure: {
    name: String
  },
  parse: function() {
    return {
      type: "Identifier",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      name: this.consume(tv)
    };
  },
  generate: function(t) {
    this.chunk(t.name);
  }
}, av = O.TYPE, nv = av.Hash, iv = {
  name: "IdSelector",
  structure: {
    name: String
  },
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.eat(nv), {
      type: "IdSelector",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(t + 1)
    };
  },
  generate: function(t) {
    this.chunk("#"), this.chunk(t.name);
  }
}, $e = O.TYPE, Vs = $e.Ident, sv = $e.Number, ov = $e.Dimension, lv = $e.LeftParenthesis, Us = $e.RightParenthesis, dv = $e.Colon, pv = $e.Delim, uv = {
  name: "MediaFeature",
  structure: {
    name: String,
    value: ["Identifier", "Number", "Dimension", "Ratio", null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e, r = null;
    if (this.eat(lv), this.scanner.skipSC(), e = this.consume(Vs), this.scanner.skipSC(), this.scanner.tokenType !== Us) {
      switch (this.eat(dv), this.scanner.skipSC(), this.scanner.tokenType) {
        case sv:
          this.lookupNonWSType(1) === pv ? r = this.Ratio() : r = this.Number();
          break;
        case ov:
          r = this.Dimension();
          break;
        case Vs:
          r = this.Identifier();
          break;
        default:
          this.error("Number, dimension, ratio or identifier is expected");
      }
      this.scanner.skipSC();
    }
    return this.eat(Us), {
      type: "MediaFeature",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: e,
      value: r
    };
  },
  generate: function(t) {
    this.chunk("("), this.chunk(t.name), t.value !== null && (this.chunk(":"), this.node(t.value)), this.chunk(")");
  }
}, Fr = O.TYPE, cv = Fr.WhiteSpace, mv = Fr.Comment, hv = Fr.Ident, gv = Fr.LeftParenthesis, fv = {
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
          case mv:
            this.scanner.next();
            continue;
          case cv:
            r = this.WhiteSpace();
            continue;
          case hv:
            e = this.Identifier();
            break;
          case gv:
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
}, yv = O.TYPE.Comma, vv = {
  name: "MediaQueryList",
  structure: {
    children: [[
      "MediaQuery"
    ]]
  },
  parse: function(t) {
    var e = this.createList();
    for (this.scanner.skipSC(); !this.scanner.eof && (e.push(this.MediaQuery(t)), this.scanner.tokenType === yv); )
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
}, bv = {
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
}, Sv = O.TYPE.Number, xv = {
  name: "Number",
  structure: {
    value: String
  },
  parse: function() {
    return {
      type: "Number",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      value: this.consume(Sv)
    };
  },
  generate: function(t) {
    this.chunk(t.value);
  }
}, wv = {
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
}, _d = O.TYPE, Cv = _d.LeftParenthesis, kv = _d.RightParenthesis, Tv = {
  name: "Parentheses",
  structure: {
    children: [[]]
  },
  parse: function(t, e) {
    var r = this.scanner.tokenStart, a = null;
    return this.eat(Cv), a = t.call(this, e), this.scanner.eof || this.eat(kv), {
      type: "Parentheses",
      loc: this.getLocation(r, this.scanner.tokenStart),
      children: a
    };
  },
  generate: function(t) {
    this.chunk("("), this.children(t), this.chunk(")");
  }
}, Ev = Nt.consumeNumber, _v = O.TYPE, Ov = _v.Percentage, Av = {
  name: "Percentage",
  structure: {
    value: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = Ev(this.scanner.source, t);
    return this.eat(Ov), {
      type: "Percentage",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.source.substring(t, e)
    };
  },
  generate: function(t) {
    this.chunk(t.value), this.chunk("%");
  }
}, Gr = O.TYPE, zv = Gr.Ident, jv = Gr.Function, Wv = Gr.Colon, Lv = Gr.RightParenthesis, Pv = {
  name: "PseudoClassSelector",
  structure: {
    name: String,
    children: [["Raw"], null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = null, r, a;
    return this.eat(Wv), this.scanner.tokenType === jv ? (r = this.consumeFunctionName(), a = r.toLowerCase(), this.pseudo.hasOwnProperty(a) ? (this.scanner.skipSC(), e = this.pseudo[a].call(this), this.scanner.skipSC()) : (e = this.createList(), e.push(
      this.Raw(this.scanner.tokenIndex, null, !1)
    )), this.eat(Lv)) : r = this.consume(zv), {
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
}, Vr = O.TYPE, Rv = Vr.Ident, Iv = Vr.Function, Hs = Vr.Colon, Bv = Vr.RightParenthesis, Mv = {
  name: "PseudoElementSelector",
  structure: {
    name: String,
    children: [["Raw"], null]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = null, r, a;
    return this.eat(Hs), this.eat(Hs), this.scanner.tokenType === Iv ? (r = this.consumeFunctionName(), a = r.toLowerCase(), this.pseudo.hasOwnProperty(a) ? (this.scanner.skipSC(), e = this.pseudo[a].call(this), this.scanner.skipSC()) : (e = this.createList(), e.push(
      this.Raw(this.scanner.tokenIndex, null, !1)
    )), this.eat(Bv)) : r = this.consume(Rv), {
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
}, Dv = O.isDigit, Od = O.TYPE, qv = Od.Number, Nv = Od.Delim, $v = 47, Fv = 46;
function Ys() {
  this.scanner.skipWS();
  for (var t = this.consume(qv), e = 0; e < t.length; e++) {
    var r = t.charCodeAt(e);
    !Dv(r) && r !== Fv && this.error("Unsigned number is expected", this.scanner.tokenStart - t.length + e);
  }
  return Number(t) === 0 && this.error("Zero number is not allowed", this.scanner.tokenStart - t.length), t;
}
var Gv = {
  name: "Ratio",
  structure: {
    left: String,
    right: String
  },
  parse: function() {
    var t = this.scanner.tokenStart, e = Ys.call(this), r;
    return this.scanner.skipWS(), this.scanner.isDelim($v) || this.error("Solidus is expected"), this.eat(Nv), r = Ys.call(this), {
      type: "Ratio",
      loc: this.getLocation(t, this.scanner.tokenStart),
      left: e,
      right: r
    };
  },
  generate: function(t) {
    this.chunk(t.left), this.chunk("/"), this.chunk(t.right);
  }
}, Vv = O.TYPE, Uv = Ne.mode, Hv = Vv.LeftCurlyBracket;
function Ks(t) {
  return this.Raw(t, Uv.leftCurlyBracket, !0);
}
function Yv() {
  var t = this.SelectorList();
  return t.type !== "Raw" && this.scanner.eof === !1 && this.scanner.tokenType !== Hv && this.error(), t;
}
var Kv = {
  name: "Rule",
  structure: {
    prelude: ["SelectorList", "Raw"],
    block: ["Block"]
  },
  parse: function() {
    var t = this.scanner.tokenIndex, e = this.scanner.tokenStart, r, a;
    return this.parseRulePrelude ? r = this.parseWithFallback(Yv, Ks) : r = Ks.call(this, t), a = this.Block(!0), {
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
}, Qv = {
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
}, Zv = O.TYPE, Xv = Zv.Comma, Jv = {
  name: "SelectorList",
  structure: {
    children: [[
      "Selector",
      "Raw"
    ]]
  },
  parse: function() {
    for (var t = this.createList(); !this.scanner.eof; ) {
      if (t.push(this.Selector()), this.scanner.tokenType === Xv) {
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
}, eb = O.TYPE.String, tb = {
  name: "String",
  structure: {
    value: String
  },
  parse: function() {
    return {
      type: "String",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      value: this.consume(eb)
    };
  },
  generate: function(t) {
    this.chunk(t.value);
  }
}, Gt = O.TYPE, rb = Gt.WhiteSpace, ab = Gt.Comment, nb = Gt.AtKeyword, ib = Gt.CDO, sb = Gt.CDC, ob = 33;
function Qs(t) {
  return this.Raw(t, null, !1);
}
var lb = {
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
        case rb:
          this.scanner.next();
          continue;
        case ab:
          if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== ob) {
            this.scanner.next();
            continue;
          }
          r = this.Comment();
          break;
        case ib:
          r = this.CDO();
          break;
        case sb:
          r = this.CDC();
          break;
        case nb:
          r = this.parseWithFallback(this.Atrule, Qs);
          break;
        default:
          r = this.parseWithFallback(this.Rule, Qs);
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
}, db = O.TYPE, pb = db.Ident, ub = 42, Zs = 124;
function Wa() {
  this.scanner.tokenType !== pb && this.scanner.isDelim(ub) === !1 && this.error("Identifier or asterisk is expected"), this.scanner.next();
}
var cb = {
  name: "TypeSelector",
  structure: {
    name: String
  },
  parse: function() {
    var t = this.scanner.tokenStart;
    return this.scanner.isDelim(Zs) ? (this.scanner.next(), Wa.call(this)) : (Wa.call(this), this.scanner.isDelim(Zs) && (this.scanner.next(), Wa.call(this))), {
      type: "TypeSelector",
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(t)
    };
  },
  generate: function(t) {
    this.chunk(t.name);
  }
}, mb = O.isHexDigit, Xs = O.cmpChar, ai = O.TYPE, hb = O.NAME, gb = ai.Ident, Js = ai.Number, eo = ai.Dimension, vr = 43, Ad = 45, En = 63, fb = 117;
function zt(t, e) {
  for (var r = this.scanner.tokenStart + t, a = 0; r < this.scanner.tokenEnd; r++) {
    var n = this.scanner.source.charCodeAt(r);
    if (n === Ad && e && a !== 0)
      return zt.call(this, t + a + 1, !1) === 0 && this.error(), -1;
    mb(n) || this.error(
      e && a !== 0 ? "HyphenMinus" + (a < 6 ? " or hex digit" : "") + " is expected" : a < 6 ? "Hex digit is expected" : "Unexpected input",
      r
    ), ++a > 6 && this.error("Too many hex digits", r);
  }
  return this.scanner.next(), a;
}
function dr(t) {
  for (var e = 0; this.scanner.isDelim(En); )
    ++e > t && this.error("Too many question marks"), this.scanner.next();
}
function La(t) {
  this.scanner.source.charCodeAt(this.scanner.tokenStart) !== t && this.error(hb[t] + " is expected");
}
function yb() {
  var t = 0;
  if (this.scanner.isDelim(vr)) {
    if (this.scanner.next(), this.scanner.tokenType === gb) {
      t = zt.call(this, 0, !0), t > 0 && dr.call(this, 6 - t);
      return;
    }
    if (this.scanner.isDelim(En)) {
      this.scanner.next(), dr.call(this, 5);
      return;
    }
    this.error("Hex digit or question mark is expected");
    return;
  }
  if (this.scanner.tokenType === Js) {
    if (La.call(this, vr), t = zt.call(this, 1, !0), this.scanner.isDelim(En)) {
      dr.call(this, 6 - t);
      return;
    }
    if (this.scanner.tokenType === eo || this.scanner.tokenType === Js) {
      La.call(this, Ad), zt.call(this, 1, !1);
      return;
    }
    return;
  }
  if (this.scanner.tokenType === eo) {
    La.call(this, vr), t = zt.call(this, 1, !0), t > 0 && dr.call(this, 6 - t);
    return;
  }
  this.error();
}
var vb = {
  name: "UnicodeRange",
  structure: {
    value: String
  },
  parse: function() {
    var t = this.scanner.tokenStart;
    return Xs(this.scanner.source, t, fb) || this.error("U is expected"), Xs(this.scanner.source, t + 1, vr) || this.error("Plus sign is expected"), this.scanner.next(), yb.call(this), {
      type: "UnicodeRange",
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(t)
    };
  },
  generate: function(t) {
    this.chunk(t.value);
  }
}, to = O.isWhiteSpace, bb = O.cmpStr, ni = O.TYPE, ro = ni.Function, ao = ni.Url, Sb = ni.RightParenthesis, xb = {
  name: "Url",
  structure: {
    value: ["String", "Raw"]
  },
  parse: function() {
    var t = this.scanner.tokenStart, e;
    switch (this.scanner.tokenType) {
      case ao:
        for (var r = t + 4, a = this.scanner.tokenEnd - 1; r < a && to(this.scanner.source.charCodeAt(r)); )
          r++;
        for (; r < a && to(this.scanner.source.charCodeAt(a - 1)); )
          a--;
        e = {
          type: "Raw",
          loc: this.getLocation(r, a),
          value: this.scanner.source.substring(r, a)
        }, this.eat(ao);
        break;
      case ro:
        bb(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat(ro), this.scanner.skipSC(), e = this.String(), this.scanner.skipSC(), this.eat(Sb);
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
}, wb = {
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
}, Cb = O.TYPE.WhiteSpace, kb = Object.freeze({
  type: "WhiteSpace",
  loc: null,
  value: " "
}), Tb = {
  name: "WhiteSpace",
  structure: {
    value: String
  },
  parse: function() {
    return this.eat(Cb), kb;
  },
  generate: function(t) {
    this.chunk(t.value);
  }
}, ii = {
  AnPlusB: wf,
  Atrule: Rf,
  AtrulePrelude: Mf,
  AttributeSelector: Hf,
  Block: ty,
  Brackets: ny,
  CDC: sy,
  CDO: ly,
  ClassSelector: cy,
  Combinator: vy,
  Comment: Cy,
  Declaration: Ry,
  DeclarationList: Fy,
  Dimension: Hy,
  Function: Qy,
  Hash: Jy,
  Identifier: rv,
  IdSelector: iv,
  MediaFeature: uv,
  MediaQuery: fv,
  MediaQueryList: vv,
  Nth: bv,
  Number: xv,
  Operator: wv,
  Parentheses: Tv,
  Percentage: Av,
  PseudoClassSelector: Pv,
  PseudoElementSelector: Mv,
  Ratio: Gv,
  Raw: Ne,
  Rule: Kv,
  Selector: Qv,
  SelectorList: Jv,
  String: tb,
  StyleSheet: lb,
  TypeSelector: cb,
  UnicodeRange: vb,
  Url: xb,
  Value: wb,
  WhiteSpace: Tb
}, Pa = bf, Eb = {
  generic: !0,
  types: Pa.types,
  atrules: Pa.atrules,
  properties: Pa.properties,
  node: ii
}, no = O.cmpChar, _b = O.cmpStr, ge = O.TYPE, Ob = ge.Ident, Ab = ge.String, zb = ge.Number, jb = ge.Function, Wb = ge.Url, Lb = ge.Hash, Pb = ge.Dimension, Rb = ge.Percentage, Ib = ge.LeftParenthesis, Bb = ge.LeftSquareBracket, Mb = ge.Comma, Db = ge.Delim, qb = 35, Nb = 42, io = 43, $b = 45, Fb = 47, Gb = 117, zd = function(e) {
  switch (this.scanner.tokenType) {
    case Lb:
      return this.Hash();
    case Mb:
      return e.space = null, e.ignoreWSAfter = !0, this.Operator();
    case Ib:
      return this.Parentheses(this.readSequence, e.recognizer);
    case Bb:
      return this.Brackets(this.readSequence, e.recognizer);
    case Ab:
      return this.String();
    case Pb:
      return this.Dimension();
    case Rb:
      return this.Percentage();
    case zb:
      return this.Number();
    case jb:
      return _b(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
    case Wb:
      return this.Url();
    case Ob:
      return no(this.scanner.source, this.scanner.tokenStart, Gb) && no(this.scanner.source, this.scanner.tokenStart + 1, io) ? this.UnicodeRange() : this.Identifier();
    case Db:
      var r = this.scanner.source.charCodeAt(this.scanner.tokenStart);
      if (r === Fb || r === Nb || r === io || r === $b)
        return this.Operator();
      r === qb && this.error("Hex or identifier is expected", this.scanner.tokenStart + 1);
      break;
  }
}, Vb = {
  getNode: zd
}, Pe = O.TYPE, Ub = Pe.Delim, Hb = Pe.Ident, Yb = Pe.Dimension, Kb = Pe.Percentage, Qb = Pe.Number, Zb = Pe.Hash, so = Pe.Colon, Xb = Pe.LeftSquareBracket, Jb = 35, eS = 42, tS = 43, rS = 47, oo = 46, aS = 62, nS = 124, iS = 126;
function sS(t) {
  switch (this.scanner.tokenType) {
    case Xb:
      return this.AttributeSelector();
    case Zb:
      return this.IdSelector();
    case so:
      return this.scanner.lookupType(1) === so ? this.PseudoElementSelector() : this.PseudoClassSelector();
    case Hb:
      return this.TypeSelector();
    case Qb:
    case Kb:
      return this.Percentage();
    case Yb:
      this.scanner.source.charCodeAt(this.scanner.tokenStart) === oo && this.error("Identifier is expected", this.scanner.tokenStart + 1);
      break;
    case Ub:
      var e = this.scanner.source.charCodeAt(this.scanner.tokenStart);
      switch (e) {
        case tS:
        case aS:
        case iS:
          return t.space = null, t.ignoreWSAfter = !0, this.Combinator();
        case rS:
          return this.Combinator();
        case oo:
          return this.ClassSelector();
        case eS:
        case nS:
          return this.TypeSelector();
        case Jb:
          return this.IdSelector();
      }
      break;
  }
}
var oS = {
  getNode: sS
}, lS = function() {
  return this.createSingleNodeList(
    this.Raw(this.scanner.tokenIndex, null, !1)
  );
}, jd = O.TYPE, dS = Ne.mode, pS = jd.Comma, uS = jd.WhiteSpace, cS = function() {
  var t = this.createList();
  if (this.scanner.skipSC(), t.push(this.Identifier()), this.scanner.skipSC(), this.scanner.tokenType === pS) {
    t.push(this.Operator());
    const e = this.scanner.tokenIndex, r = this.parseCustomProperty ? this.Value(null) : this.Raw(this.scanner.tokenIndex, dS.exclamationMarkOrSemicolon, !1);
    if (r.type === "Value" && r.children.isEmpty()) {
      for (let a = e - this.scanner.tokenIndex; a <= 0; a++)
        if (this.scanner.lookupType(a) === uS) {
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
}, mS = {
  getNode: zd,
  expression: lS,
  var: cS
}, hS = {
  AtrulePrelude: Vb,
  Selector: oS,
  Value: mS
}, gS = {
  parse: {
    prelude: null,
    block: function() {
      return this.Block(!0);
    }
  }
}, Vt = O.TYPE, fS = Vt.String, yS = Vt.Ident, vS = Vt.Url, bS = Vt.Function, SS = Vt.LeftParenthesis, xS = {
  parse: {
    prelude: function() {
      var t = this.createList();
      switch (this.scanner.skipSC(), this.scanner.tokenType) {
        case fS:
          t.push(this.String());
          break;
        case vS:
        case bS:
          t.push(this.Url());
          break;
        default:
          this.error("String or url() is expected");
      }
      return (this.lookupNonWSType(0) === yS || this.lookupNonWSType(0) === SS) && (t.push(this.WhiteSpace()), t.push(this.MediaQueryList())), t;
    },
    block: null
  }
}, wS = {
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
}, CS = {
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
}, ut = O.TYPE, kS = ut.WhiteSpace, TS = ut.Comment, Wd = ut.Ident, ES = ut.Function, _S = ut.Colon, OS = ut.LeftParenthesis;
function AS() {
  return this.createSingleNodeList(
    this.Raw(this.scanner.tokenIndex, null, !1)
  );
}
function zS() {
  return this.scanner.skipSC(), this.scanner.tokenType === Wd && this.lookupNonWSType(1) === _S ? this.createSingleNodeList(
    this.Declaration()
  ) : Ld.call(this);
}
function Ld() {
  var t = this.createList(), e = null, r;
  this.scanner.skipSC();
  e:
    for (; !this.scanner.eof; ) {
      switch (this.scanner.tokenType) {
        case kS:
          e = this.WhiteSpace();
          continue;
        case TS:
          this.scanner.next();
          continue;
        case ES:
          r = this.Function(AS, this.scope.AtrulePrelude);
          break;
        case Wd:
          r = this.Identifier();
          break;
        case OS:
          r = this.Parentheses(zS, this.scope.AtrulePrelude);
          break;
        default:
          break e;
      }
      e !== null && (t.push(e), e = null), t.push(r);
    }
  return t;
}
var jS = {
  parse: {
    prelude: function() {
      var t = Ld.call(this);
      return this.getFirstListNode(t) === null && this.error("Condition is expected"), t;
    },
    block: function() {
      return this.Block(!1);
    }
  }
}, WS = {
  "font-face": gS,
  import: xS,
  media: wS,
  page: CS,
  supports: jS
}, LS = {
  parse: function() {
    return this.createSingleNodeList(
      this.Identifier()
    );
  }
}, PS = {
  parse: function() {
    return this.createSingleNodeList(
      this.SelectorList()
    );
  }
}, RS = {
  parse: function() {
    return this.createSingleNodeList(
      this.Identifier()
    );
  }
}, Pd = {
  parse: function() {
    return this.createSingleNodeList(
      this.SelectorList()
    );
  }
}, IS = Pd, BS = Pd, MS = !0, Rd = {
  parse: function() {
    return this.createSingleNodeList(
      this.Nth(MS)
    );
  }
}, DS = Rd, qS = Rd, NS = !1, Id = {
  parse: function() {
    return this.createSingleNodeList(
      this.Nth(NS)
    );
  }
}, $S = Id, FS = Id, GS = {
  parse: function() {
    return this.createSingleNodeList(
      this.Selector()
    );
  }
}, VS = {
  dir: LS,
  has: PS,
  lang: RS,
  matches: IS,
  not: BS,
  "nth-child": DS,
  "nth-last-child": qS,
  "nth-last-of-type": $S,
  "nth-of-type": FS,
  slotted: GS
}, US = {
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
  scope: hS,
  atrule: WS,
  pseudo: VS,
  node: ii
}, HS = {
  node: ii
};
const YS = "css-tree", KS = "1.1.3", QS = "A tool set for CSS: fast detailed parser (CSS → AST), walker (AST traversal), generator (AST → CSS) and lexer (validation and matching) based on specs and browser implementations", ZS = "Roman Dvornov <rdvornov@gmail.com> (https://github.com/lahmatiy)", XS = "MIT", JS = "csstree/csstree", ex = [
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
], tx = "lib/index.js", rx = "dist/csstree.min.js", ax = "dist/csstree.min.js", nx = {
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
}, ix = {
  "mdn-data": "2.0.14",
  "source-map": "^0.6.1"
}, sx = {
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
}, ox = {
  node: ">=8.0.0"
}, lx = [
  "data",
  "dist",
  "lib"
], dx = {
  name: YS,
  version: KS,
  description: QS,
  author: ZS,
  license: XS,
  repository: JS,
  keywords: ex,
  main: tx,
  unpkg: rx,
  jsdelivr: ax,
  scripts: nx,
  dependencies: ix,
  devDependencies: sx,
  engines: ox,
  files: lx
};
function px() {
  for (var t = {}, e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    for (var a in r)
      t[a] = r[a];
  }
  return t;
}
An.exports = sl.create(
  px(
    Eb,
    US,
    HS
  )
);
An.exports.version = dx.version;
var ux = An.exports, cx = ux;
const C = /* @__PURE__ */ Ar(cx);
class mx {
  constructor(e, r) {
    r ? this.hooks = r : (this.hooks = {}, this.hooks.onUrl = new W(this), this.hooks.onAtPage = new W(this), this.hooks.onAtMedia = new W(this), this.hooks.onRule = new W(this), this.hooks.onDeclaration = new W(this), this.hooks.onSelector = new W(this), this.hooks.onPseudoSelector = new W(this), this.hooks.onContent = new W(this), this.hooks.onImport = new W(this), this.hooks.beforeTreeParse = new W(this), this.hooks.beforeTreeWalk = new W(this), this.hooks.afterTreeWalk = new W(this));
    try {
      this.url = new URL(e, window.location.href);
    } catch {
      this.url = new URL(window.location.href);
    }
  }
  // parse
  async parse(e) {
    return this.text = e, await this.hooks.beforeTreeParse.trigger(this.text, this), this.ast = C.parse(this._text), await this.hooks.beforeTreeWalk.trigger(this.ast), this.replaceUrls(this.ast), this.id = ke(), this.replaceIds(this.ast), this.imported = [], this.urls(this.ast), this.rules(this.ast), this.atrules(this.ast), await this.hooks.afterTreeWalk.trigger(this.ast, this), this.ast;
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
            enter: (l, p, u) => {
              this.hooks.onPseudoSelector.trigger(l, p, u, { selectNode: n, selectItem: i, selectList: s }, { ruleNode: e, ruleItem: r, rulelist: a });
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
              let p = s.value.children.first(), u = p.name, c = C.generate(a.prelude);
              r[u] = {
                name: u,
                selector: c
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
          enter: (p, u, c) => {
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
        let p = s.value.replace(/["']/g, ""), c = new URL(p, this.url).toString();
        this.imported.push(c), a.remove(r);
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
}
const hx = `
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
async function lo(t, e = {}) {
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
class gx {
  constructor(e) {
    this.sheets = [], this.inserted = [], this.hooks = {}, this.hooks.onUrl = new W(this), this.hooks.onAtPage = new W(this), this.hooks.onAtMedia = new W(this), this.hooks.onRule = new W(this), this.hooks.onDeclaration = new W(this), this.hooks.onContent = new W(this), this.hooks.onSelector = new W(this), this.hooks.onPseudoSelector = new W(this), this.hooks.onImport = new W(this), this.hooks.beforeTreeParse = new W(this), this.hooks.beforeTreeWalk = new W(this), this.hooks.afterTreeWalk = new W(this), e !== !1 && this.setup();
  }
  setup() {
    return this.base = this.insert(hx), this.styleEl = document.createElement("style"), document.head.appendChild(this.styleEl), this.styleSheet = this.styleEl.sheet, this.styleSheet;
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
        r.push(arguments[a]), n = lo(arguments[a]).then((i) => i.text());
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
    let a = new mx(r, this.hooks);
    await a.parse(e);
    for (let n of a.imported) {
      let i = await lo(n).then((o) => o.text()), s = await this.convertViaSheet(i, n);
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
class X {
  constructor(e, r, a) {
    let n = Object.assign({}, e && e.hooks, r && r.hooks, a && a.hooks);
    this.chunker = e, this.polisher = r, this.caller = a;
    for (let i in n)
      i in this && n[i].register(this[i].bind(this));
  }
}
rt(X.prototype);
const po = {
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
class fx extends X {
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
    let n, i, s = "", o, l, p, u = !1;
    e.prelude ? (o = this.getTypeSelector(e), l = this.getPsuedoSelector(e), p = this.getNthSelector(e), s = C.generate(e.prelude)) : s = "*", s in this.pages ? (n = this.pages[s], i = this.replaceMarginalia(e), u = !0, n.added = !1) : (n = this.pageModel(s), i = this.replaceMarginalia(e), this.pages[s] = n), n.name = o, n.psuedo = l, n.nth = p, u ? n.marginalia = Object.assign(n.marginalia, i) : n.marginalia = i;
    let c = this.replaceNotes(e);
    n.notes = c;
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
    }), n.marks = d.marks), d.margin && (n.margin = d.margin), d.padding && (n.padding = d.padding), d.border && (n.border = d.border), d.marks && (n.marks = d.marks), u ? n.block.children.appendList(e.block.children) : n.block = e.block, a.remove(r);
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
      let n = this.pages["*"].width, i = this.pages["*"].height, s = this.pages["*"].format, o = this.pages["*"].orientation, l = this.pages["*"].bleed, p = this.pages["*"].marks, u, c;
      ":left" in this.pages && (u = this.pages[":left"].bleed), ":right" in this.pages && (c = this.pages[":right"].bleed), n && i && (this.width !== n || this.height !== i) && (this.width = n, this.height = i, this.format = s, this.orientation = o, this.addRootVars(e, n, i, o, l, c, u, p), this.addRootPage(e, this.pages["*"].size, l, c, u), this.emit("size", { width: n, height: i, orientation: o, format: s, bleed: l }), this.emit("atpages", this.pages));
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
        let { value: p, unit: u } = s;
        typeof r > "u" ? r = { value: p, unit: u } : typeof a > "u" && (a = { value: p, unit: u });
      }
    }), C.walk(e, {
      visit: "String",
      enter: (s, o, l) => {
        let p = s.value.replace(/["|']/g, ""), u = po[p];
        u && (r = u.width, a = u.height);
      }
    }), C.walk(e, {
      visit: "Identifier",
      enter: (s, o, l) => {
        let p = s.name;
        if (p === "landscape" || p === "portrait")
          n = s.name;
        else if (p !== "auto") {
          let u = po[p];
          u && (r = u.width, a = u.height), i = p;
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
    s = A(e), o = A(r), a && a !== "portrait" && ([s, o] = [o, s]);
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
        enter: (c, d, m) => {
          if (c.property === "content" && (c.value.children && c.value.children.first().name === "none" ? o = !1 : o = !0, m.remove(d)), c.property === "vertical-align" && (C.walk(c, {
            visit: "Identifier",
            enter: (f, x, b) => {
              let g = f.name;
              g === "top" ? f.name = "flex-start" : g === "middle" ? f.name = "center" : g === "bottom" && (f.name = "flex-end");
            }
          }), c.property = "align-items"), c.property === "width" && (i === "top-left" || i === "top-center" || i === "top-right" || i === "bottom-left" || i === "bottom-center" || i === "bottom-right")) {
            let f = C.clone(c);
            f.property = "max-width", m.appendData(f);
          }
          if (c.property === "height" && (i === "left-top" || i === "left-middle" || i === "left-bottom" || i === "right-top" || i === "right-middle" || i === "right-bottom")) {
            let f = C.clone(c);
            f.property = "max-height", m.appendData(f);
          }
        }
      });
      let l = this.selectorsForPageMargin(e, i), p = this.createRule(l, s);
      r.appendData(p);
      let u = C.generate({
        type: "Selector",
        children: l
      });
      this.marginalia[u] = {
        page: e,
        selector: u,
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
        enter: (m, f, x) => {
          m.property !== "content" && x.remove(f), m.value.children && m.value.children.first().name === "none" && (i = !0);
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
      let u = this.createRule(l, [p]);
      n.insertRule(u);
      let c = this.selectorsForPageMargin(e, s);
      c.insertData({
        type: "Combinator",
        name: ">"
      }), c.insertData({
        type: "ClassSelector",
        name: "pagedjs_margin-content"
      }), c.insertData({
        type: "PseudoElementSelector",
        name: "after",
        children: null
      });
      let d = this.createRule(c, o);
      n.insertRule(d);
    }
  }
  addRootVars(e, r, a, n, i, s, o, l) {
    let p = [], u = new C.List();
    u.insertData({
      type: "PseudoClassSelector",
      name: "root",
      children: null
    });
    let c, d, m, f, x, b;
    if (!i)
      c = A(r), d = A(a), m = A(r), f = A(a), x = A(r), b = A(a);
    else {
      c = `calc( ${A(r)} + ${A(i.left)} + ${A(i.right)} )`, d = `calc( ${A(a)} + ${A(i.top)} + ${A(i.bottom)} )`, m = `calc( ${A(r)} + ${A(i.left)} + ${A(i.right)} )`, f = `calc( ${A(a)} + ${A(i.top)} + ${A(i.bottom)} )`, x = `calc( ${A(r)} + ${A(i.left)} + ${A(i.right)} )`, b = `calc( ${A(a)} + ${A(i.top)} + ${A(i.bottom)} )`;
      let z = this.createVariable("--pagedjs-bleed-top", A(i.top)), M = this.createVariable("--pagedjs-bleed-right", A(i.right)), V = this.createVariable("--pagedjs-bleed-bottom", A(i.bottom)), $ = this.createVariable("--pagedjs-bleed-left", A(i.left)), H = this.createVariable("--pagedjs-bleed-right-top", A(i.top)), F = this.createVariable("--pagedjs-bleed-right-right", A(i.right)), U = this.createVariable("--pagedjs-bleed-right-bottom", A(i.bottom)), G = this.createVariable("--pagedjs-bleed-right-left", A(i.left)), te = this.createVariable("--pagedjs-bleed-left-top", A(i.top)), Re = this.createVariable("--pagedjs-bleed-left-right", A(i.right)), ct = this.createVariable("--pagedjs-bleed-left-bottom", A(i.bottom)), mt = this.createVariable("--pagedjs-bleed-left-left", A(i.left));
      s && (H = this.createVariable("--pagedjs-bleed-right-top", A(s.top)), F = this.createVariable("--pagedjs-bleed-right-right", A(s.right)), U = this.createVariable("--pagedjs-bleed-right-bottom", A(s.bottom)), G = this.createVariable("--pagedjs-bleed-right-left", A(s.left)), m = `calc( ${A(r)} + ${A(s.left)} + ${A(s.right)} )`, f = `calc( ${A(a)} + ${A(s.top)} + ${A(s.bottom)} )`), o && (te = this.createVariable("--pagedjs-bleed-left-top", A(o.top)), Re = this.createVariable("--pagedjs-bleed-left-right", A(o.right)), ct = this.createVariable("--pagedjs-bleed-left-bottom", A(o.bottom)), mt = this.createVariable("--pagedjs-bleed-left-left", A(o.left)), x = `calc( ${A(r)} + ${A(o.left)} + ${A(o.right)} )`, b = `calc( ${A(a)} + ${A(o.top)} + ${A(o.bottom)} )`);
      let Ut = this.createVariable("--pagedjs-width", A(r)), Ht = this.createVariable("--pagedjs-height", A(a));
      p.push(
        z,
        M,
        V,
        $,
        H,
        F,
        U,
        G,
        te,
        Re,
        ct,
        mt,
        Ut,
        Ht
      );
    }
    if (l && l.forEach((z) => {
      let M = this.createVariable("--pagedjs-mark-" + z + "-display", "block");
      p.push(M);
    }), n) {
      let z = this.createVariable("--pagedjs-orientation", n);
      p.push(z), n !== "portrait" && ([c, d] = [d, c], [m, f] = [f, m], [x, b] = [b, x]);
    }
    let g = this.createVariable("--pagedjs-width", c), v = this.createVariable("--pagedjs-height", d), k = this.createVariable("--pagedjs-width-right", m), y = this.createVariable("--pagedjs-height-right", f), S = this.createVariable("--pagedjs-width-left", x), w = this.createVariable("--pagedjs-height-left", b);
    p.push(g, v, k, y, S, w);
    let E = this.createRule(u, p);
    e.children.appendData(E);
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
    let { width: s, height: o, orientation: l, format: p } = r, u = new C.List(), c = new C.List(), d = new C.List(), m = new C.List(), f = new C.List(), x = new C.List();
    if (a) {
      let g = new C.List(), v = new C.List();
      g.appendData({
        type: "Dimension",
        unit: s.unit,
        value: s.value
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Operator",
        value: "+"
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Dimension",
        unit: a.left.unit,
        value: a.left.value
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Operator",
        value: "+"
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Dimension",
        unit: a.right.unit,
        value: a.right.value
      }), v.appendData({
        type: "Dimension",
        unit: o.unit,
        value: o.value
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Operator",
        value: "+"
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Dimension",
        unit: a.top.unit,
        value: a.top.value
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Operator",
        value: "+"
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Dimension",
        unit: a.bottom.unit,
        value: a.bottom.value
      }), m.appendData({
        type: "Function",
        name: "calc",
        children: g
      }), m.appendData({
        type: "WhiteSpace",
        value: " "
      }), m.appendData({
        type: "Function",
        name: "calc",
        children: v
      });
    } else p ? (m.appendData({
      type: "Identifier",
      name: p
    }), l && (m.appendData({
      type: "WhiteSpace",
      value: " "
    }), m.appendData({
      type: "Identifier",
      name: l
    }))) : (m.appendData({
      type: "Dimension",
      unit: s.unit,
      value: s.value
    }), m.appendData({
      type: "WhiteSpace",
      value: " "
    }), m.appendData({
      type: "Dimension",
      unit: o.unit,
      value: o.value
    }));
    u.appendData({
      type: "Declaration",
      property: "size",
      loc: null,
      value: {
        type: "Value",
        children: m
      }
    }), u.appendData({
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
    }), u.appendData({
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
    }), u.appendData({
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
        children: u
      }
    });
    if (e.children.append(b), i) {
      let g = new C.List(), v = new C.List();
      g.appendData({
        type: "Dimension",
        unit: s.unit,
        value: s.value
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Operator",
        value: "+"
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Dimension",
        unit: i.left.unit,
        value: i.left.value
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Operator",
        value: "+"
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Dimension",
        unit: i.right.unit,
        value: i.right.value
      }), v.appendData({
        type: "Dimension",
        unit: o.unit,
        value: o.value
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Operator",
        value: "+"
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Dimension",
        unit: i.top.unit,
        value: i.top.value
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Operator",
        value: "+"
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Dimension",
        unit: i.bottom.unit,
        value: i.bottom.value
      }), f.appendData({
        type: "Function",
        name: "calc",
        children: g
      }), f.appendData({
        type: "WhiteSpace",
        value: " "
      }), f.appendData({
        type: "Function",
        name: "calc",
        children: v
      }), c.appendData({
        type: "Declaration",
        property: "size",
        loc: null,
        value: {
          type: "Value",
          children: f
        }
      });
      let k = e.children.createItem({
        type: "Atrule",
        prelude: null,
        name: "page :left",
        block: {
          type: "Block",
          loc: null,
          children: c
        }
      });
      e.children.append(k);
    }
    if (n) {
      let g = new C.List(), v = new C.List();
      g.appendData({
        type: "Dimension",
        unit: s.unit,
        value: s.value
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Operator",
        value: "+"
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Dimension",
        unit: n.left.unit,
        value: n.left.value
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Operator",
        value: "+"
      }), g.appendData({
        type: "WhiteSpace",
        value: " "
      }), g.appendData({
        type: "Dimension",
        unit: n.right.unit,
        value: n.right.value
      }), v.appendData({
        type: "Dimension",
        unit: o.unit,
        value: o.value
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Operator",
        value: "+"
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Dimension",
        unit: n.top.unit,
        value: n.top.value
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Operator",
        value: "+"
      }), v.appendData({
        type: "WhiteSpace",
        value: " "
      }), v.appendData({
        type: "Dimension",
        unit: n.bottom.unit,
        value: n.bottom.value
      }), x.appendData({
        type: "Function",
        name: "calc",
        children: g
      }), x.appendData({
        type: "WhiteSpace",
        value: " "
      }), x.appendData({
        type: "Function",
        name: "calc",
        children: v
      }), d.appendData({
        type: "Declaration",
        property: "size",
        loc: null,
        value: {
          type: "Value",
          children: x
        }
      });
      let k = e.children.createItem({
        type: "Atrule",
        prelude: null,
        name: "page :right",
        block: {
          type: "Block",
          loc: null,
          children: d
        }
      });
      e.children.append(k);
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
    let n = Ko(a), i = n.querySelectorAll("[data-page]");
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
      let s = r.element.querySelector(".pagedjs_margin-" + i), o = r.element.querySelector(".pagedjs_margin-" + i + "-center"), l = r.element.querySelector(".pagedjs_margin-" + i + "-left"), p = r.element.querySelector(".pagedjs_margin-" + i + "-right"), u = o.classList.contains("hasContent"), c = l.classList.contains("hasContent"), d = p.classList.contains("hasContent"), m, f, x;
      if (c && (f = window.getComputedStyle(l)["max-width"]), d && (x = window.getComputedStyle(p)["max-width"]), u)
        if (m = window.getComputedStyle(o)["max-width"], m === "none" || m === "auto")
          if (!c && !d)
            s.style["grid-template-columns"] = "0 1fr 0";
          else if (c)
            if (d)
              if (f !== "none" && f !== "auto")
                x !== "none" && x !== "auto" ? s.style["grid-template-columns"] = f + " 1fr " + x : s.style["grid-template-columns"] = f + " 1fr " + f;
              else if (x !== "none" && x !== "auto")
                s.style["grid-template-columns"] = x + " 1fr " + x;
              else {
                s.style["grid-template-columns"] = "auto auto 1fr", l.style["white-space"] = "nowrap", o.style["white-space"] = "nowrap", p.style["white-space"] = "nowrap";
                let b = l.offsetWidth, g = o.offsetWidth, v = p.offsetWidth, k = b + g + v, y = g * 100 / k;
                y > 40 ? s.style["grid-template-columns"] = "minmax(16.66%, 1fr) minmax(33%, " + y + "%) minmax(16.66%, 1fr)" : s.style["grid-template-columns"] = "repeat(3, 1fr)", l.style["white-space"] = "normal", o.style["white-space"] = "normal", p.style["white-space"] = "normal";
              }
            else if (f !== "none" && f !== "auto")
              s.style["grid-template-columns"] = f + " 1fr " + f;
            else {
              s.style["grid-template-columns"] = "auto auto 1fr", l.style["white-space"] = "nowrap", o.style["white-space"] = "nowrap";
              let b = l.offsetWidth, g = o.offsetWidth, v = b + g, k = g * 100 / v;
              s.style["grid-template-columns"] = "minmax(16.66%, 1fr) minmax(33%, " + k + "%) minmax(16.66%, 1fr)", l.style["white-space"] = "normal", o.style["white-space"] = "normal";
            }
          else if (x !== "none" && x !== "auto")
            s.style["grid-template-columns"] = x + " 1fr " + x;
          else {
            s.style["grid-template-columns"] = "auto auto 1fr", p.style["white-space"] = "nowrap", o.style["white-space"] = "nowrap";
            let b = p.offsetWidth, g = o.offsetWidth, v = b + g, k = g * 100 / v;
            s.style["grid-template-columns"] = "minmax(16.66%, 1fr) minmax(33%, " + k + "%) minmax(16.66%, 1fr)", p.style["white-space"] = "normal", o.style["white-space"] = "normal";
          }
        else m !== "none" && m !== "auto" && (c && f !== "none" && f !== "auto" ? s.style["grid-template-columns"] = f + " " + m + " 1fr" : d && x !== "none" && x !== "auto" ? s.style["grid-template-columns"] = "1fr " + m + " " + x : s.style["grid-template-columns"] = "1fr " + m + " 1fr");
      else if (c)
        if (!d)
          s.style["grid-template-columns"] = "1fr 0 0";
        else if (f !== "none" && f !== "auto")
          x !== "none" && x !== "auto" ? s.style["grid-template-columns"] = f + " 1fr " + x : s.style["grid-template-columns"] = f + " 0 1fr";
        else if (x !== "none" && x !== "auto")
          s.style["grid-template-columns"] = "1fr 0 " + x;
        else {
          s.style["grid-template-columns"] = "auto 1fr auto", l.style["white-space"] = "nowrap", p.style["white-space"] = "nowrap";
          let b = l.offsetWidth, g = p.offsetWidth, v = b + g, k = b * 100 / v;
          s.style["grid-template-columns"] = "minmax(16.66%, " + k + "%) 0 1fr", l.style["white-space"] = "normal", p.style["white-space"] = "normal";
        }
      else
        x !== "none" && x !== "auto" ? s.style["grid-template-columns"] = "1fr 0 " + x : s.style["grid-template-columns"] = "0 0 1fr";
    }), ["left", "right"].forEach((i) => {
      let s = r.element.querySelector(".pagedjs_margin-" + i + "-middle.hasContent"), o = r.element.querySelector(".pagedjs_margin-" + i), l = r.element.querySelector(".pagedjs_margin-" + i + "-top"), p = r.element.querySelector(".pagedjs_margin-" + i + "-bottom"), u = l.classList.contains("hasContent"), c = p.classList.contains("hasContent"), d, m, f;
      u && (m = window.getComputedStyle(l)["max-height"]), c && (f = window.getComputedStyle(p)["max-height"]), s ? (d = window.getComputedStyle(s)["max-height"], d === "none" || d === "auto" ? !u && !c ? o.style["grid-template-rows"] = "0 1fr 0" : u ? c ? m !== "none" && m !== "auto" ? f !== "none" && f !== "auto" ? o.style["grid-template-rows"] = m + " calc(100% - " + m + " - " + f + ") " + f : o.style["grid-template-rows"] = m + " calc(100% - " + m + "*2) " + m : f !== "none" && f !== "auto" && (o.style["grid-template-rows"] = f + " calc(100% - " + f + "*2) " + f) : m !== "none" && m !== "auto" && (o.style["grid-template-rows"] = m + " calc(100% - " + m + "*2) " + m) : f !== "none" && f !== "auto" && (o.style["grid-template-rows"] = f + " calc(100% - " + f + "*2) " + f) : u && m !== "none" && m !== "auto" ? o.style["grid-template-rows"] = m + " " + d + " calc(100% - (" + m + " + " + d + "))" : c && f !== "none" && f !== "auto" ? o.style["grid-template-rows"] = "1fr " + d + " " + f : o.style["grid-template-rows"] = "calc((100% - " + d + ")/2) " + d + " calc((100% - " + d + ")/2)") : u ? c ? m !== "none" && m !== "auto" ? f !== "none" && f !== "auto" ? o.style["grid-template-rows"] = m + " 1fr " + f : o.style["grid-template-rows"] = m + " 0 1fr" : f !== "none" && f !== "auto" ? o.style["grid-template-rows"] = "1fr 0 " + f : o.style["grid-template-rows"] = "1fr 0 1fr" : o.style["grid-template-rows"] = "1fr 0 0" : f !== "none" && f !== "auto" ? o.style["grid-template-rows"] = "1fr 0 " + f : o.style["grid-template-rows"] = "0 0 1fr";
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
class yx extends X {
  constructor(e, r, a) {
    super(e, r, a), this.breaks = {};
  }
  onDeclaration(e, r, a, n) {
    let i = e.property;
    if (i === "page") {
      let o = e.value.children.first().name, l = C.generate(n.ruleNode.prelude), u = {
        property: i,
        value: o,
        selector: l,
        name: o
      };
      l.split(",").forEach((c) => {
        this.breaks[c] ? this.breaks[c].push(u) : this.breaks[c] = [u];
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
      l.split(",").forEach((u) => {
        this.breaks[u] ? this.breaks[u].push(p) : this.breaks[u] = [p];
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
            let o = _i(i[a], e);
            i[a].setAttribute("data-break-after", s.value), o && o.setAttribute("data-previous-break-after", s.value);
          } else if (s.property === "break-before") {
            let o = Op(i[a], e);
            if (o) {
              if (s.value === "page" && Qo(i[a], o))
                continue;
              i[a].setAttribute("data-break-before", s.value), o.setAttribute("data-next-break-before", s.value);
            }
          } else if (s.property === "page") {
            i[a].setAttribute("data-page", s.value);
            let o = _i(i[a], e);
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
class vx extends X {
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
class bx extends X {
  constructor(e, r, a) {
    super(e, r, a);
  }
  afterPageLayout(e, r, a, n) {
    let i = Array.from(e.querySelectorAll("[data-split-from]")), s = e.parentNode, o = Array.prototype.indexOf.call(s.children, e), l;
    if (o === 0)
      return;
    l = s.children[o - 1];
    let p;
    i.forEach((u) => {
      let c = u.dataset.ref;
      p = l.querySelector("[data-ref='" + c + "']:not([data-split-to])"), p && (p.dataset.splitTo = c, p.dataset.splitFrom || (p.dataset.splitOriginal = !0));
    }), p && this.handleAlignment(p);
  }
  handleAlignment(e) {
    let r = window.getComputedStyle(e), a = r["text-align"], n = r["text-align-last"];
    e.dataset.lastSplitElement = "true", a === "justify" && n === "auto" ? e.dataset.alignLastSplitElement = "justify" : e.dataset.alignLastSplitElement = n;
  }
}
class Sx extends X {
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
        let l, p, u;
        s.next && s.next.data.type === "WhiteSpace" && (l = s.next), l && l.next && l.next.data.type === "Number" && (p = l.next, u = parseInt(p.data.value));
        let c = C.generate(r.ruleNode.prelude), d;
        o in this.counters ? d = this.counters[o] : d = this.addCounter(o);
        let m = {
          selector: c,
          number: u || 1
        };
        d.increments[c] = m, a.push(m), n.remove(s), l && n.remove(l), p && n.remove(p);
      }
    }), a;
  }
  handleReset(e, r) {
    let a = e.value.children;
    a.forEach((n, i) => {
      if (n.type && n.type === "Identifier") {
        let s = n.name, o, l, p;
        i.next && i.next.data.type === "WhiteSpace" && (o = i.next), o && o.next && (o.next.data.type === "Number" ? (l = o.next, p = parseInt(l.data.value)) : o.next.data.type === "Function" && o.next.data.name === "var" && (l = o.next, p = o.next.data.children.head.data.name));
        let u, c, d = r.ruleNode.prelude;
        r.ruleNode.type === "Atrule" && r.ruleNode.name === "page" ? c = ".pagedjs_page" : c = C.generate(d || r.ruleNode), s === "footnote" && this.addFootnoteMarkerCounter(e.value.children), s in this.counters ? u = this.counters[s] : u = this.addCounter(s);
        let m = {
          selector: c,
          number: p || 0
        };
        u.resets[c] = m, c !== ".pagedjs_page" && (a.remove(i), o && a.remove(o), l && a.remove(l));
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
    let n = e.querySelectorAll("[data-counter-" + a + "-reset], [data-counter-" + a + "-increment]"), i = 0, s, o, l, p, u, c, d;
    for (let m = 0; m < n.length; m++)
      s = n[m], c = 0, d = [], s.hasAttribute("data-counter-" + a + "-reset") && (l = s.getAttribute("data-counter-" + a + "-reset"), p = parseInt(l), c = p - i, d.push(`${a} ${c}`), i = p), s.hasAttribute("data-counter-" + a + "-increment") && (o = s.getAttribute("data-counter-" + a + "-increment"), u = parseInt(o), i += u, s.setAttribute("data-counter-" + a + "-value", i), d.push(`${a} ${u}`)), d.length > 0 && this.incrementCounterForElement(s, d);
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
class xx extends X {
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
class wx extends X {
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
class Cx extends X {
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
class kx extends X {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.selectors = {};
  }
  onRule(e, r, a) {
    let n = C.generate(e.prelude);
    if (n.match(/:(first|last|nth)-of-type/)) {
      let i = C.generate(e.block);
      i = i.replace(/[{}]/g, "");
      let s = "nth-of-type-" + ke();
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
class Tx extends X {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.selectors = {};
  }
  onRule(e, r, a) {
    let n = C.generate(e.prelude);
    if (n.match(/\+/)) {
      let i = C.generate(e.block);
      i = i.replace(/[{}]/g, "");
      let s = "following-" + ke();
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
class Ex extends X {
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
      if (Zo(r)) {
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
    if (!se(e))
      return;
    let o;
    if (a && (o = this.createFootnoteCall(e)), e.removeAttribute("data-break-before"), s.querySelector(`[data-ref="${e.dataset.ref}"]`)) {
      e.remove();
      return;
    }
    s.appendChild(e), i.classList.contains("pagedjs_footnote_empty") && i.classList.remove("pagedjs_footnote_empty"), e.dataset.footnoteMarker = e.dataset.ref, e.id = `note-${e.dataset.ref}`;
    let p = i.scrollHeight, c = r.querySelector(".pagedjs_page_content").getBoundingClientRect(), d = c.left + c.width, m = o && o.getBoundingClientRect(), f = n.getBoundingClientRect(), x = this.marginsHeight(i), b = this.paddingHeight(i), g = this.borderHeight(i), v = x + b + g, k = Math.floor(f.top);
    f.height === 0 && (k -= this.marginsHeight(i, !1), k -= this.paddingHeight(i, !1), k -= this.borderHeight(i, !1));
    let y = e.dataset.notePolicy, S = 0, w = 0;
    if (o) {
      let $ = o.previousSibling, H = new Range();
      $ ? H.setStartBefore($) : H.setStartBefore(o), H.setEndAfter(o);
      let F = H.getBoundingClientRect();
      if (S = F.bottom, !y || y === "auto")
        w = Math.ceil(F.bottom);
      else if (y === "line")
        w = Math.ceil(F.top);
      else if (y === "block") {
        let U = o.closest("p").previousElementSibling;
        U ? w = Math.ceil(
          U.getBoundingClientRect().bottom
        ) : w = Math.ceil(F.bottom);
      }
    }
    let E = p + v - f.height, z = S ? k - S : 0, M = S ? Math.floor(f.top) - w : 0, V = n.querySelector("[data-note='footnote']");
    if (a && m.left > d)
      e.remove();
    else if (!V && a && v > z) {
      r.style.setProperty("--pagedjs-footnotes-height", "0px");
      let $ = document.createElement("div");
      $.appendChild(e), this.needsLayout.push($);
    } else a ? S < f.top - E ? r.style.setProperty(
      "--pagedjs-footnotes-height",
      `${p + x + g}px`
    ) : (r.style.setProperty(
      "--pagedjs-footnotes-height",
      `${f.height + M}px`
    ), s.style.height = f.height + M - v + "px") : r.style.setProperty(
      "--pagedjs-footnotes-height",
      `${p + v}px`
    );
  }
  createFootnoteCall(e) {
    let r = e.parentElement, a = document.createElement("a");
    for (const n of e.classList)
      a.classList.add(`${n}`);
    return a.dataset.footnoteCall = e.dataset.ref, a.dataset.ref = e.dataset.ref, a.dataset.dataCounterFootnoteIncrement = 1, a.href = `#note-${e.dataset.ref}`, r.insertBefore(a, e), a;
  }
  afterPageLayout(e, r, a, n) {
    let i = e.querySelector(".pagedjs_area"), s = r.footnotesArea, o = s.querySelector(".pagedjs_footnote_content"), l = s.querySelector(".pagedjs_footnote_inner_content"), p = o.getBoundingClientRect(), { width: u } = p;
    l.style.columnWidth = Math.round(u) + "px", l.style.columnGap = "calc(var(--pagedjs-margin-right) + var(--pagedjs-margin-left))";
    let d = new On(s, void 0, n.settings).findOverflow(l, p);
    if (d) {
      let { startContainer: m, startOffset: f } = d, x;
      if (se(m)) {
        let w = m.childNodes[f];
        x = se(w) && w.hasAttribute("data-footnote-marker");
      }
      let b = d.extractContents();
      if (!x) {
        let w = b.firstElementChild;
        w.dataset.splitFrom = w.dataset.ref, this.handleAlignment(l.lastElementChild);
      }
      this.needsLayout.push(b), o.style.removeProperty("height"), l.style.removeProperty("height");
      let g = l.getBoundingClientRect(), { height: v } = g, k = this.marginsHeight(o), y = this.paddingHeight(o), S = this.borderHeight(o);
      if (i.style.setProperty(
        "--pagedjs-footnotes-height",
        `${v + k + S + y}px`
      ), l.childNodes.length === 0 && o.classList.add("pagedjs_footnote_empty"), !a)
        n.clonePage(r);
      else {
        let w, E;
        a.node && typeof a.node.dataset < "u" && typeof a.node.dataset.previousBreakAfter < "u" && (E = a.node.dataset.previousBreakAfter), a.node && typeof a.node.dataset < "u" && typeof a.node.dataset.breakBefore < "u" && (w = a.node.dataset.breakBefore), (w || E) && n.clonePage(r);
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
const _x = [
  vx,
  fx,
  yx,
  bx,
  Sx,
  xx,
  wx,
  Cx,
  kx,
  Tx,
  Ex
];
class Ox extends X {
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
          enter: (l, p, u) => {
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
          let l = C.generate(n.ruleNode.prelude), p = i.name, u = i.children.first().name, c = [u], d = "first";
          l.split(",").forEach((m) => {
            m = m.replace(/::after|::before/, ""), this.elements[m] = {
              func: p,
              args: c,
              value: u,
              style: d,
              selector: m,
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
function Xe(t, e = `"' `) {
  if (t != null)
    return t.replace(new RegExp(`^[${e}]+`), "").replace(new RegExp(`[${e}]+$`), "").replace(/["']/g, (r) => "\\" + r).replace(/[\n]/g, (r) => "\\00000A");
}
function Ax(t) {
  if (t != null)
    return t.replace(new RegExp("::footnote-call", "g"), "").replace(new RegExp("::footnote-marker", "g"), "");
}
class zx extends X {
  constructor(e, r, a) {
    super(e, r, a), this.stringSetSelectors = {}, this.type, this.pageLastString;
  }
  onDeclaration(e, r, a, n) {
    if (e.property === "string-set") {
      let i = C.generate(n.ruleNode.prelude), s = [], o = [], l = [];
      e.value.children.forEach((p) => {
        p.type === "Identifier" && s.push(p.name), p.type === "Function" && (o.push(p.name), p.children.forEach((u) => {
          u.type === "Identifier" && l.push(u.name);
        }));
      }), s.forEach((p, u) => {
        let c = o[u], d = l[u];
        this.stringSetSelectors[p] = {
          identifier: p,
          func: c,
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
      let a = this.stringSetSelectors[r], n = a.value, i = a.func, s = e.querySelectorAll(a.selector), o = r in this.pageLastString ? this.pageLastString[r] : "", l, p, u, c;
      if (s.length == 0)
        l = o, p = o, u = o, c = o;
      else {
        s.forEach((x) => {
          i === "content" && (this.pageLastString[r] = s[s.length - 1].textContent), i === "attr" && (this.pageLastString[r] = s[s.length - 1].getAttribute(n) || "");
        }), i === "content" && (l = s[0].textContent), i === "attr" && (l = s[0].getAttribute(n) || ""), i === "content" && (p = s[s.length - 1].textContent), i === "attr" && (p = s[s.length - 1].getAttribute(n) || "");
        let d = s[0].getBoundingClientRect().top, f = s[0].closest(".pagedjs_page_content").getBoundingClientRect().top;
        d == f ? u = l : u = o, c = "";
      }
      e.style.setProperty(`--pagedjs-string-first-${r}`, `"${Xe(l)}`), e.style.setProperty(`--pagedjs-string-last-${r}`, `"${Xe(p)}`), e.style.setProperty(`--pagedjs-string-start-${r}`, `"${Xe(u)}`), e.style.setProperty(`--pagedjs-string-first-except-${r}`, `"${Xe(c)}`);
    }
  }
}
class jx extends X {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.counterTargets = {};
  }
  onContent(e, r, a, n, i) {
    if (e.name === "target-counter") {
      let s = C.generate(i.ruleNode.prelude), o = e.children.first(), l = o.name, p = C.generate(e), u = [];
      o.children.forEach((x) => {
        x.type === "Identifier" && u.push(x.name);
      });
      let c, d, m;
      e.children.forEach((x) => {
        x.type === "Identifier" && (c ? d || (m = C.clone(x), d = x.name) : c = x.name);
      });
      let f = "target-counter-" + ke();
      s.split(",").forEach((x) => {
        this.counterTargets[x] = {
          func: l,
          args: u,
          value: p,
          counter: c,
          style: d,
          selector: x,
          fullSelector: s,
          variable: f
        };
      }), e.name = "counter", e.children = new C.List(), e.children.appendData({
        type: "Identifier",
        loc: 0,
        name: f
      }), m && (e.children.appendData({ type: "Operator", loc: null, value: "," }), e.children.appendData(m));
    }
  }
  afterPageLayout(e, r, a, n) {
    Object.keys(this.counterTargets).forEach((i) => {
      let s = this.counterTargets[i], o = s.selector.split(/::?/g), l = o[0];
      n.pagesArea.querySelectorAll(l + ":not([data-" + s.variable + "])").forEach((u, c) => {
        if (s.func !== "attr")
          return;
        let d = Ho(u, s.args), m = n.pagesArea.querySelector(Yo(d));
        if (m) {
          let f = ke();
          u.setAttribute("data-" + s.variable, f);
          let x = "";
          if (o.length > 1 && (x += "::" + o[1]), s.counter === "page") {
            let g = n.pagesArea.querySelectorAll(".pagedjs_page"), v = 0;
            for (let k = 0; k < g.length; k++) {
              let y = g[k], S = window.getComputedStyle(y), w = S["counter-reset"].replace("page", "").trim(), E = S["counter-increment"].replace("page", "").trim();
              if (w !== "none" && (v = parseInt(w)), E !== "none" && (v += parseInt(E)), y.contains(m))
                break;
            }
            this.styleSheet.insertRule(`[data-${s.variable}="${f}"]${x} { counter-reset: ${s.variable} ${v}; }`, this.styleSheet.cssRules.length);
          } else {
            let g = m.getAttribute(`data-counter-${s.counter}-value`);
            g && this.styleSheet.insertRule(`[data-${s.variable}="${f}"]${x} { counter-reset: ${s.variable} ${s.variable} ${parseInt(g)}; }`, this.styleSheet.cssRules.length);
          }
          let b = document.querySelector(`[data-${s.variable}="${f}"]`);
          b && (b.style.display = "none", b.clientHeight, b.style.removeProperty("display"));
        }
      });
    });
  }
}
class Wx extends X {
  constructor(e, r, a) {
    super(e, r, a), this.styleSheet = r.styleSheet, this.textTargets = {}, this.beforeContent = "", this.afterContent = "", this.selector = {};
  }
  onContent(e, r, a, n, i) {
    if (e.name === "target-text") {
      this.selector = C.generate(i.ruleNode.prelude);
      let s = e.children.first(), o = e.children.last(), l = s.name, p = C.generate(e), u = [];
      s.children.forEach((m) => {
        m.type === "Identifier" && u.push(m.name);
      });
      let c;
      o !== s && (c = o.name);
      let d = "--pagedjs-" + ke();
      this.selector.split(",").forEach((m) => {
        this.textTargets[m] = {
          func: l,
          args: u,
          value: p,
          style: c || "content",
          selector: m,
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
        let u = Ho(l, a.args), c = e.querySelector(Yo(u));
        if (c)
          if (a.style) {
            this.selector = ke(), l.setAttribute("data-target-text", this.selector);
            let d = "";
            if (n.length > 1 && (d += "::" + n[1]), a.style === "before" || a.style === "after") {
              const m = `${a.style}Content`;
              o = Xe(this[m]);
            } else
              o = Xe(c.textContent, " ");
            o = a.style === "first-letter" ? o.charAt(0) : o, this.styleSheet.insertRule(`[data-target-text="${this.selector}"]${d} { ${a.variable}: "${o}" }`);
          } else
            console.warn("missed target", u);
      });
    });
  }
}
const Lx = [
  Ox,
  zx,
  jx,
  Wx
];
class Px extends X {
  constructor(e, r, a) {
    super(e, r, a);
  }
  filter(e) {
    Xo(e, (r) => this.filterEmpty(r), NodeFilter.SHOW_TEXT);
  }
  filterEmpty(e) {
    if (e.textContent.length > 1 && zr(e)) {
      let r = e.parentNode;
      if (se(r) && r.closest("pre"))
        return NodeFilter.FILTER_REJECT;
      const n = sn(e), i = on(e);
      return i === null && n === null ? (e.textContent = " ", NodeFilter.FILTER_REJECT) : i === null || n === null ? NodeFilter.FILTER_ACCEPT : (e.textContent = " ", NodeFilter.FILTER_REJECT);
    } else
      return NodeFilter.FILTER_REJECT;
  }
}
class Rx extends X {
  constructor(e, r, a) {
    super(e, r, a);
  }
  filter(e) {
    Xo(e, null, NodeFilter.SHOW_COMMENT);
  }
}
class Ix extends X {
  constructor(e, r, a) {
    super(e, r, a);
  }
  filter(e) {
    e.querySelectorAll("script").forEach((r) => {
      r.remove();
    });
  }
}
var Bd = {};
(function(t) {
  var e = /(\[[^\]]+\])/g, r = /(#[^\s\+>~\.\[:]+)/g, a = /(\.[^\s\+>~\.\[:]+)/g, n = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/g, i = /(:[^\s\+>~\.\[:]+)/g, s = /([^\s\+>~\.\[:]+)/g, o = /:not\(([^\)]*)\)/g, l = /\{[^]*/gm, p = /[\*\s\+>~]/g, u = /[#\.]/g, c = function(b, g, v, k) {
    var y = k.match(b);
    if (y)
      for (var S = 0; S < y.length; S++)
        v[g]++, k = k.replace(y[S], " ");
    return k;
  }, d = function(b) {
    var g = b.indexOf(",");
    g !== -1 && (b = b.substring(0, g));
    var v = {
      a: 0,
      b: 0,
      c: 0
    };
    return b = b.replace(o, " $1 "), b = b.replace(l, " "), b = c(e, "b", v, b), b = c(r, "a", v, b), b = c(a, "b", v, b), b = c(n, "c", v, b), b = c(i, "b", v, b), b = b.replace(p, " "), b = b.replace(u, " "), c(s, "c", v, b), v.a * 100 + v.b * 10 + v.c * 1;
  }, m = {};
  t.calculateSpecificity = function(b) {
    var g = m[b];
    return g === void 0 && (g = d(b), m[b] = g), g;
  };
  var f = {}, x = null;
  t.isSelectorValid = function(b) {
    var g = f[b];
    if (g === void 0) {
      x == null && (x = document.createElement("div"));
      try {
        x.querySelector(b), g = !0;
      } catch {
        g = !1;
      }
      f[b] = g;
    }
    return g;
  }, t.validateSelector = function(b) {
    if (!t.isSelectorValid(b)) {
      var g = new SyntaxError(b + " is not a valid selector");
      throw g.code = "EBADSELECTOR", g;
    }
  };
})(Bd);
class Bx extends X {
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
          specificity: Bd.calculateSpecificity(o),
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
          l = e.querySelectorAll(Ax(o));
        }
      } catch {
        l = [];
      }
      let p = Array.from(l);
      for (let u of p)
        if (a.includes(u)) {
          let c = a.indexOf(u);
          n[c].push(s), n[c] = n[c].sort(this.sorter);
        } else
          a.push(u), n.push([s]);
    }
    return { matches: a, selectors: n };
  }
  removable(e) {
    return !(e.style && e.style.display !== "" && e.style.display !== "none");
  }
}
const Mx = [
  Px,
  Rx,
  Ix,
  Bx
];
var Dx = function() {
  var t = Array.from, e, r;
  return typeof t != "function" ? !1 : (e = ["raz", "dwa"], r = t(e), !!(r && r !== e && r[1] === "dwa"));
}, Ra, uo;
function qx() {
  return uo || (uo = 1, Ra = function() {
    return typeof globalThis != "object" || !globalThis ? !1 : globalThis.Array === Array;
  }), Ra;
}
var Ia, co;
function Nx() {
  if (co) return Ia;
  co = 1;
  var t = function() {
    if (typeof self == "object" && self) return self;
    if (typeof window == "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
  };
  return Ia = function() {
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
  }(), Ia;
}
var Ba, mo;
function Ur() {
  return mo || (mo = 1, Ba = qx()() ? globalThis : Nx()), Ba;
}
var Ma, ho;
function $x() {
  if (ho) return Ma;
  ho = 1;
  var t = Ur(), e = { object: !0, symbol: !0 };
  return Ma = function() {
    var r = t.Symbol, a;
    if (typeof r != "function") return !1;
    a = r("test symbol");
    try {
      String(a);
    } catch {
      return !1;
    }
    return !(!e[typeof r.iterator] || !e[typeof r.toPrimitive] || !e[typeof r.toStringTag]);
  }, Ma;
}
var Da, go;
function Fx() {
  return go || (go = 1, Da = function(t) {
    return t ? typeof t == "symbol" ? !0 : !t.constructor || t.constructor.name !== "Symbol" ? !1 : t[t.constructor.toStringTag] === "Symbol" : !1;
  }), Da;
}
var qa, fo;
function Md() {
  if (fo) return qa;
  fo = 1;
  var t = Fx();
  return qa = function(e) {
    if (!t(e)) throw new TypeError(e + " is not a symbol");
    return e;
  }, qa;
}
var Na, yo;
function Gx() {
  if (yo) return Na;
  yo = 1;
  var t = tt, e = Object.create, r = Object.defineProperty, a = Object.prototype, n = e(null);
  return Na = function(i) {
    for (var s = 0, o, l; n[i + (s || "")]; ) ++s;
    return i += s || "", n[i] = !0, o = "@@" + i, r(
      a,
      o,
      t.gs(null, function(p) {
        l || (l = !0, r(this, o, t(p)), l = !1);
      })
    ), o;
  }, Na;
}
var $a, vo;
function Vx() {
  if (vo) return $a;
  vo = 1;
  var t = tt, e = Ur().Symbol;
  return $a = function(r) {
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
  }, $a;
}
var Fa, bo;
function Ux() {
  if (bo) return Fa;
  bo = 1;
  var t = tt, e = Md(), r = /* @__PURE__ */ Object.create(null);
  return Fa = function(a) {
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
  }, Fa;
}
var Ga, So;
function Hx() {
  if (So) return Ga;
  So = 1;
  var t = tt, e = Md(), r = Ur().Symbol, a = Gx(), n = Vx(), i = Ux(), s = Object.create, o = Object.defineProperties, l = Object.defineProperty, p, u, c;
  if (typeof r == "function")
    try {
      String(r()), c = !0;
    } catch {
    }
  else
    r = null;
  return u = function(m) {
    if (this instanceof u) throw new TypeError("Symbol is not a constructor");
    return p(m);
  }, Ga = p = function d(m) {
    var f;
    if (this instanceof d) throw new TypeError("Symbol is not a constructor");
    return c ? r(m) : (f = s(u.prototype), m = m === void 0 ? "" : String(m), o(f, {
      __description__: t("", m),
      __name__: t("", a(m))
    }));
  }, n(p), i(p), o(u.prototype, {
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
    u.prototype,
    p.toStringTag,
    t("c", p.prototype[p.toStringTag])
  ), l(
    u.prototype,
    p.toPrimitive,
    t("c", p.prototype[p.toPrimitive])
  ), Ga;
}
var Va, xo;
function Yx() {
  return xo || (xo = 1, Va = $x()() ? Ur().Symbol : Hx()), Va;
}
var Ua, wo;
function Kx() {
  if (wo) return Ua;
  wo = 1;
  var t = Object.prototype.toString, e = t.call(/* @__PURE__ */ function() {
    return arguments;
  }());
  return Ua = function(r) {
    return t.call(r) === e;
  }, Ua;
}
var Ha, Co;
function Qx() {
  if (Co) return Ha;
  Co = 1;
  var t = Object.prototype.toString, e = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
  return Ha = function(r) {
    return typeof r == "function" && e(t.call(r));
  }, Ha;
}
var Ya, ko;
function Zx() {
  return ko || (ko = 1, Ya = function() {
    var t = Math.sign;
    return typeof t != "function" ? !1 : t(10) === 1 && t(-20) === -1;
  }), Ya;
}
var Ka, To;
function Xx() {
  return To || (To = 1, Ka = function(t) {
    return t = Number(t), isNaN(t) || t === 0 ? t : t > 0 ? 1 : -1;
  }), Ka;
}
var Qa, Eo;
function Jx() {
  return Eo || (Eo = 1, Qa = Zx()() ? Math.sign : Xx()), Qa;
}
var Za, _o;
function ew() {
  if (_o) return Za;
  _o = 1;
  var t = Jx(), e = Math.abs, r = Math.floor;
  return Za = function(a) {
    return isNaN(a) ? 0 : (a = Number(a), a === 0 || !isFinite(a) ? a : t(a) * r(e(a)));
  }, Za;
}
var Xa, Oo;
function Dd() {
  if (Oo) return Xa;
  Oo = 1;
  var t = ew(), e = Math.max;
  return Xa = function(r) {
    return e(0, t(r));
  }, Xa;
}
var Ja, Ao;
function tw() {
  if (Ao) return Ja;
  Ao = 1;
  var t = Object.prototype.toString, e = t.call("");
  return Ja = function(r) {
    return typeof r == "string" || r && typeof r == "object" && (r instanceof String || t.call(r) === e) || !1;
  }, Ja;
}
var en, zo;
function rw() {
  if (zo) return en;
  zo = 1;
  var t = Yx().iterator, e = Kx(), r = Qx(), a = Dd(), n = al, i = _n(), s = qt, o = tw(), l = Array.isArray, p = Function.prototype.call, u = { configurable: !0, enumerable: !0, writable: !0, value: null }, c = Object.defineProperty;
  return en = function(d) {
    var m = arguments[1], f = arguments[2], x, b, g, v, k, y, S, w, E, z;
    if (d = Object(i(d)), s(m) && n(m), !this || this === Array || !r(this)) {
      if (!m) {
        if (e(d))
          return k = d.length, k !== 1 ? Array.apply(null, d) : (v = new Array(1), v[0] = d[0], v);
        if (l(d)) {
          for (v = new Array(k = d.length), b = 0; b < k; ++b) v[b] = d[b];
          return v;
        }
      }
      v = [];
    } else
      x = this;
    if (!l(d)) {
      if ((E = d[t]) !== void 0) {
        for (S = n(E).call(d), x && (v = new x()), w = S.next(), b = 0; !w.done; )
          z = m ? p.call(m, f, w.value, b) : w.value, x ? (u.value = z, c(v, b, u)) : v[b] = z, w = S.next(), ++b;
        k = b;
      } else if (o(d)) {
        for (k = d.length, x && (v = new x()), b = 0, g = 0; b < k; ++b)
          z = d[b], b + 1 < k && (y = z.charCodeAt(0), y >= 55296 && y <= 56319 && (z += d[++b])), z = m ? p.call(m, f, z, g) : z, x ? (u.value = z, c(v, g, u)) : v[g] = z, ++g;
        k = g;
      }
    }
    if (k === void 0)
      for (k = a(d.length), x && (v = new x(k)), b = 0; b < k; ++b)
        z = m ? p.call(m, f, d[b], b) : d[b], x ? (u.value = z, c(v, b, u)) : v[b] = z;
    return x && (u.value = null, v.length = k), v;
  }, en;
}
var aw = Dx() ? Array.from : rw(), nw = function() {
  var t = Number.isNaN;
  return typeof t != "function" ? !1 : !t({}) && t(NaN) && !t(34);
}, tn, jo;
function iw() {
  return jo || (jo = 1, tn = function(t) {
    return t !== t;
  }), tn;
}
var sw = nw() ? Number.isNaN : iw(), Wo = sw, Lo = Dd(), ow = _n(), lw = Array.prototype.indexOf, dw = Object.prototype.hasOwnProperty, pw = Math.abs, Po = Math.floor, uw = function(t) {
  var e, r, a, n;
  if (!Wo(t)) return lw.apply(this, arguments);
  for (r = Lo(ow(this).length), a = arguments[1], isNaN(a) ? a = 0 : a >= 0 ? a = Po(a) : a = Lo(this.length) - Po(pw(a)), e = a; e < r; ++e)
    if (dw.call(this, e) && (n = this[e], Wo(n)))
      return e;
  return -1;
}, cw = uw, mw = Array.prototype.forEach, hw = Array.prototype.splice, gw = function(t) {
  mw.call(
    arguments,
    function(e) {
      var r = cw.call(this, e);
      r !== -1 && hw.call(this, r, 1);
    },
    this
  );
}, fw = qt, yw = { function: !0, object: !0 }, vw = function(t) {
  return fw(t) && yw[typeof t] || !1;
}, bw = vw, Sw = function(t) {
  if (!bw(t)) throw new TypeError(t + " is not an Object");
  return t;
}, xw = aw, ww = gw, Ro = Sw, Io = tt, Bo = nl.methods.emit, Mo = Object.defineProperty, Cw = Object.prototype.hasOwnProperty, kw = Object.getOwnPropertyDescriptor, Tw = function(t, e) {
  var r, a, n, i;
  return Ro(t) && Ro(e), i = arguments[2], i === void 0 && (i = "emit"), a = {
    close: function() {
      ww.call(r, e);
    }
  }, Cw.call(t, "__eePipes__") ? ((r = t.__eePipes__).push(e), a) : (Mo(t, "__eePipes__", Io("c", r = [e])), n = kw(t, i), n ? (delete n.get, delete n.set) : n = Io("c", void 0), n.value = function() {
    var s, o, l = xw(r);
    for (Bo.apply(this, arguments), s = 0; o = l[s]; ++s) Bo.apply(o, arguments);
  }, Mo(t, i, n), a);
};
const Ew = /* @__PURE__ */ Ar(Tw);
let qd = [..._x, ...Lx, ...Mx];
class Nd {
  constructor(e, r, a) {
    qd.forEach((n) => {
      let i = new n(e, r, a);
      Ew(i, this);
    });
  }
}
rt(Nd.prototype);
function Do() {
  for (var t = 0; t < arguments.length; t++)
    qd.push(arguments[t]);
}
function _w(t, e, r) {
  return new Nd(t, e, r);
}
class $d {
  constructor(e) {
    this.settings = e || {}, this.polisher = new gx(!1), this.chunker = new il(void 0, void 0, this.settings), this.hooks = {}, this.hooks.beforePreview = new W(this), this.hooks.afterPreview = new W(this), this.size = {
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
    let e = _w(this.chunker, this.polisher, this);
    return e.on("size", (r) => {
      this.size = r, this.emit("size", r);
    }), e.on("atpages", (r) => {
      this.atpages = r, this.emit("atpages", r);
    }), e;
  }
  registerHandlers() {
    return Do.apply(Do, arguments);
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
rt($d.prototype);
function Ow(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Fd = Ow, Aw = typeof Xt == "object" && Xt && Xt.Object === Object && Xt, zw = Aw, jw = zw, Ww = typeof self == "object" && self && self.Object === Object && self, Lw = jw || Ww || Function("return this")(), Gd = Lw, Pw = Gd, Rw = function() {
  return Pw.Date.now();
}, Iw = Rw, Bw = /\s/;
function Mw(t) {
  for (var e = t.length; e-- && Bw.test(t.charAt(e)); )
    ;
  return e;
}
var Dw = Mw, qw = Dw, Nw = /^\s+/;
function $w(t) {
  return t && t.slice(0, qw(t) + 1).replace(Nw, "");
}
var Fw = $w, Gw = Gd, Vw = Gw.Symbol, Vd = Vw, qo = Vd, Ud = Object.prototype, Uw = Ud.hasOwnProperty, Hw = Ud.toString, kt = qo ? qo.toStringTag : void 0;
function Yw(t) {
  var e = Uw.call(t, kt), r = t[kt];
  try {
    t[kt] = void 0;
    var a = !0;
  } catch {
  }
  var n = Hw.call(t);
  return a && (e ? t[kt] = r : delete t[kt]), n;
}
var Kw = Yw, Qw = Object.prototype, Zw = Qw.toString;
function Xw(t) {
  return Zw.call(t);
}
var Jw = Xw, No = Vd, eC = Kw, tC = Jw, rC = "[object Null]", aC = "[object Undefined]", $o = No ? No.toStringTag : void 0;
function nC(t) {
  return t == null ? t === void 0 ? aC : rC : $o && $o in Object(t) ? eC(t) : tC(t);
}
var iC = nC;
function sC(t) {
  return t != null && typeof t == "object";
}
var oC = sC, lC = iC, dC = oC, pC = "[object Symbol]";
function uC(t) {
  return typeof t == "symbol" || dC(t) && lC(t) == pC;
}
var cC = uC, mC = Fw, Fo = Fd, hC = cC, Go = NaN, gC = /^[-+]0x[0-9a-f]+$/i, fC = /^0b[01]+$/i, yC = /^0o[0-7]+$/i, vC = parseInt;
function bC(t) {
  if (typeof t == "number")
    return t;
  if (hC(t))
    return Go;
  if (Fo(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Fo(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = mC(t);
  var r = fC.test(t);
  return r || yC.test(t) ? vC(t.slice(2), r ? 2 : 8) : gC.test(t) ? Go : +t;
}
var SC = bC, xC = Fd, rn = Iw, Vo = SC, wC = "Expected a function", CC = Math.max, kC = Math.min;
function TC(t, e, r) {
  var a, n, i, s, o, l, p = 0, u = !1, c = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(wC);
  e = Vo(e) || 0, xC(r) && (u = !!r.leading, c = "maxWait" in r, i = c ? CC(Vo(r.maxWait) || 0, e) : i, d = "trailing" in r ? !!r.trailing : d);
  function m(w) {
    var E = a, z = n;
    return a = n = void 0, p = w, s = t.apply(z, E), s;
  }
  function f(w) {
    return p = w, o = setTimeout(g, e), u ? m(w) : s;
  }
  function x(w) {
    var E = w - l, z = w - p, M = e - E;
    return c ? kC(M, i - z) : M;
  }
  function b(w) {
    var E = w - l, z = w - p;
    return l === void 0 || E >= e || E < 0 || c && z >= i;
  }
  function g() {
    var w = rn();
    if (b(w))
      return v(w);
    o = setTimeout(g, x(w));
  }
  function v(w) {
    return o = void 0, d && a ? m(w) : (a = n = void 0, s);
  }
  function k() {
    o !== void 0 && clearTimeout(o), p = 0, a = l = n = o = void 0;
  }
  function y() {
    return o === void 0 ? s : v(rn());
  }
  function S() {
    var w = rn(), E = b(w);
    if (a = arguments, n = this, l = w, E) {
      if (o === void 0)
        return f(l);
      if (c)
        return clearTimeout(o), o = setTimeout(g, e), m(l);
    }
    return o === void 0 && (o = setTimeout(g, e)), s;
  }
  return S.cancel = k, S.flush = y, S;
}
var EC = TC;
const _C = /* @__PURE__ */ Ar(EC), zC = Sp(({ children: t }, e) => {
  const [r, a] = xp(!1), n = wi(null), i = wi(null);
  wp(e, () => ({
    layout: s
  }));
  const s = Cp(
    _C(() => {
      if (!n.current || !i.current) {
        console.warn("Container or page flow reference is missing.");
        return;
      }
      a(!0);
      const { clientHeight: o, clientWidth: l } = n.current;
      n.current.innerHTML = "", o && (n.current.style.minHeight = `${o}px`), l && window !== window.parent && (n.current.style.minWidth = `${l}px`), document.querySelectorAll("style[data-pagedjs-inserted-styles]").forEach((c) => c.remove());
      let p = "page.css";
      const u = new $d();
      try {
        u.preview(i.current.innerHTML, [p], n.current).then(() => {
          a(!1), n.current.style.minWidth = "auto", n.current.style.minHeight = "auto", document.querySelectorAll("[data-uhuu]").forEach((c) => {
            const d = function() {
              const m = JSON.parse(this.getAttribute("data-uhuu"));
              $uhuu.editDialog(m);
            };
            c.removeEventListener("click", d), c.addEventListener("click", d);
          }), document.querySelectorAll(".page-break-after[data-paged-css]").forEach((c) => {
            const d = c.closest("div.pagedjs_sheet"), m = c.getAttribute("data-paged-css");
            d && m && m.split(" ").filter(Boolean).forEach((f) => d.classList.add(f));
          });
        });
      } catch (c) {
        console.error("Error during Paged.js preview rendering:", c), a(!1);
      }
    }, 500),
    []
  );
  return /* @__PURE__ */ pr.jsxs("div", { className: r ? "rendering uhuu-page" : "rendered uhuu-page", children: [
    /* @__PURE__ */ pr.jsx("div", { className: "pagedjs_preview_container", ref: n }),
    /* @__PURE__ */ pr.jsx("div", { style: { display: "none" }, ref: i, children: t })
  ] });
});
export {
  AC as Button,
  zC as PagedPreview
};
