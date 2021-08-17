// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"u8ui":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = N;
exports.hydrate = O;
exports.h = exports.createElement = a;
exports.Fragment = y;
exports.createRef = h;
exports.Component = p;
exports.cloneElement = S;
exports.createContext = q;
exports.toChildArray = w;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    r,
    o = {},
    f = [],
    e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = l;
exports.options = n;

function c(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function s(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function a(n, l, u) {
  var i,
      t,
      r,
      o = arguments,
      f = {};

  for (r in l) "key" == r ? i = l[r] : "ref" == r ? t = l[r] : f[r] = l[r];

  if (arguments.length > 3) for (u = [u], r = 3; r < arguments.length; r++) u.push(o[r]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (r in n.defaultProps) void 0 === f[r] && (f[r] = n.defaultProps[r]);
  return v(n, f, i, t, null);
}

function v(l, u, i, t, r) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++n.__v : r
  };
  return null != n.vnode && n.vnode(o), o;
}

function h() {
  return {
    current: null
  };
}

function y(n) {
  return n.children;
}

function p(n, l) {
  this.props = n, this.context = l;
}

function d(n, l) {
  if (null == l) return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? d(n) : null;
}

function _(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return _(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
}

function m() {
  for (var n; m.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, r, o;
    n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = c({}, t)).__v = t.__v + 1, T(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? d(t) : r, t.__h), j(u, t), t.__e != r && _(t)));
  });
}

function b(n, l, u, i, t, r, e, c, s, a) {
  var h,
      p,
      _,
      k,
      m,
      b,
      w,
      A = i && i.__k || f,
      P = A.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(y, {
    children: k
  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (_ = A[h]) || _ && k.key == _.key && k.type === _.type) A[h] = void 0;else for (p = 0; p < P; p++) {
      if ((_ = A[p]) && k.key == _.key && k.type === _.type) {
        A[p] = void 0;
        break;
      }

      _ = null;
    }
    T(n, k, _ = _ || o, t, r, e, c, s, a), m = k.__e, (p = k.ref) && _.ref != p && (w || (w = []), _.ref && w.push(_.ref, null, k), w.push(p, k.__c || m, k)), null != m ? (null == b && (b = m), "function" == typeof k.type && null != k.__k && k.__k === _.__k ? k.__d = s = g(k, s, n) : s = x(n, k, _, A, m, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && _.__e == s && s.parentNode != n && (s = d(_));
  }

  for (u.__e = b, h = P; h--;) null != A[h] && ("function" == typeof u.type && null != A[h].__e && A[h].__e == u.__d && (u.__d = d(i, h + 1)), L(A[h], A[h]));

  if (w) for (h = 0; h < w.length; h++) I(w[h], w[++h], w[++h]);
}

function g(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? g(t, l, u) : x(u, t, t, n.__k, t.__e, l));

  return l;
}

function w(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    w(n, l);
  }) : l.push(n)), l;
}

function x(n, l, u, i, t, r) {
  var o, f, e;
  if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
    for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, r), o = r;
  }
  return void 0 !== o ? o : t.nextSibling;
}

function A(n, l, u, i, t) {
  var r;

  for (r in u) "children" === r || "key" === r || r in l || C(n, r, null, u[r], i);

  for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || C(n, r, l[r], u[r], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || e.test(l) ? u : u + "px";
}

function C(n, l, u, i, t) {
  var r;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? H : $, r) : n.removeEventListener(l, r ? H : $, r);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}

function $(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}

function H(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}

function T(l, u, i, t, r, o, f, e, s) {
  var a,
      v,
      h,
      d,
      _,
      k,
      m,
      g,
      w,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (s = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, w = (a = P.contextType) && t[a.__c], x = a ? w ? w.props.value : a.__ : t, i.__c ? m = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new p(g, x), v.constructor = P, v.render = M), w && w.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = c({}, v.__s)), c(v.__s, P.getDerivedStateFromProps(g, v.__s))), d = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== d && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(d, _, k);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = c(c({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(d, _)), A = null != a && a.type === y && null == a.key ? a.props.children : a, b(l, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, s), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), m && (v.__E = v.__ = null), v.__e = !1;
    } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = z(i.__e, u, i, t, r, o, f, s);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, (s || null != o) && (u.__e = e, u.__h = !!s, o[o.indexOf(e)] = null), n.__e(l, u, i);
  }
}

function j(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function z(n, l, u, i, t, r, e, c) {
  var a,
      v,
      h,
      y,
      p = u.props,
      d = l.props,
      _ = l.type,
      k = 0;
  if ("svg" === _ && (t = !0), null != r) for (; k < r.length; k++) if ((a = r[k]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
    n = a, r[k] = null;
    break;
  }

  if (null == n) {
    if (null === _) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, d.is && d), r = null, c = !1;
  }

  if (null === _) p === d || c && n.data === d || (n.data = d);else {
    if (r = r && f.slice.call(n.childNodes), v = (p = u.props || o).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != r) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }

    if (A(n, d, p, t, c), h) l.__k = [];else if (k = l.props.children, b(n, Array.isArray(k) ? k : [k], l, u, i, t && "foreignObject" !== _, r, e, n.firstChild, c), null != r) for (k = r.length; k--;) null != r[k] && s(r[k]);
    c || ("value" in d && void 0 !== (k = d.value) && (k !== n.value || "progress" === _ && !k) && C(n, "value", k, p.value, !1), "checked" in d && void 0 !== (k = d.checked) && k !== n.checked && C(n, "checked", k, p.checked, !1));
  }
  return n;
}

function I(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function L(l, u, i) {
  var t, r, o;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || I(t, null, u)), i || "function" == typeof l.type || (i = null != (r = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (o = 0; o < t.length; o++) t[o] && L(t[o], u, i);
  null != r && s(r);
}

function M(n, l, u) {
  return this.constructor(n, u);
}

function N(l, u, i) {
  var t, r, e;
  n.__ && n.__(l, u), r = (t = "function" == typeof i) ? null : i && i.__k || u.__k, e = [], T(u, l = (!t && i || u).__k = a(y, null, [l]), r || o, o, void 0 !== u.ownerSVGElement, !t && i ? [i] : r ? null : u.firstChild ? f.slice.call(u.childNodes) : null, e, !t && i ? i : r ? r.__e : u.firstChild, t), j(e, l);
}

function O(n, l) {
  N(n, l, O);
}

function S(n, l, u) {
  var i,
      t,
      r,
      o = arguments,
      f = c({}, n.props);

  for (r in l) "key" == r ? i = l[r] : "ref" == r ? t = l[r] : f[r] = l[r];

  if (arguments.length > 3) for (u = [u], r = 3; r < arguments.length; r++) u.push(o[r]);
  return null != u && (f.children = u), v(n.type, f, i || n.key, t || n.ref, null);
}

function q(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  },
  __v: 0
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, p.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), "function" == typeof n && (n = n(c({}, u), this.props)), n && c(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, p.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, p.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = 0;
},{}],"IJ9I":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putInt = putInt;
exports.getInt = getInt;
exports.putLong = putLong;
exports.getLong = getLong;
exports.putFloat = putFloat;
exports.getFloat = getFloat;
exports.putString = putString;
exports.getString = getString;
exports.putBoolean = putBoolean;
exports.getBoolean = getBoolean;
exports.remove = remove;
exports.containsKey = containsKey;
exports.clearPreferences = clearPreferences;
exports.getCategorySubscriptions = exports.updateCategorySubscriptions = exports.isCategorySubscribed = exports.getAllCategories = exports.getAllLanguages = exports.unsubscribeLanguage = exports.subscribeLanguage = exports.isLanguageSubscribed = exports.getAllSubscribedLanguages = exports.hideNativeUiElementsOfGlance = exports.glanceMoveToPrev = exports.glanceMoveToNext = exports.glanceUnhold = exports.glanceHold = exports.isGlanceHighlights = exports.sendCustomAnalytics = exports.launchApp = exports.launchAppAfterUnlock = exports.launchIntent = exports.launchIntentAfterUnlock = exports.isKeyguardLocked = exports.checkGlanceInterface = void 0;

/* eslint-disable no-undef */
// PreferencesStore
function putInt(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putInt(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

function getInt(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getInt(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

function putLong(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putLong(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

function getLong(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getLong(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

function putFloat(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putFloat(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

function getFloat(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getFloat(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

function putString(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putString(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

function getString(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getString(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

function putBoolean(key, value) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.putBoolean(key, value);
    } catch (err) {
      console.log(err);
    }
  }
}

function getBoolean(key, defaultValue) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.getBoolean(key, defaultValue);
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }
}

function remove(key) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.remove(key);
    } catch (err) {
      console.log(err);
    }
  }
}

function containsKey(key) {
  if (typeof PreferencesStore != 'undefined') {
    try {
      return PreferencesStore.containsKey(key);
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

function clearPreferences() {
  if (typeof PreferencesStore != 'undefined') {
    try {
      PreferencesStore.clear();
    } catch (err) {
      console.log(err);
    }
  }
}

var checkGlanceInterface = typeof GlanceAndroidInterface != 'undefined' || typeof AndroidUtils != 'undefined';
exports.checkGlanceInterface = checkGlanceInterface;

var isKeyguardLocked = function isKeyguardLocked() {
  if (typeof AndroidUtils != 'undefined') {
    return AndroidUtils.isKeyguardLocked()();
  }
}; // --------- For Xiaomi -------


exports.isKeyguardLocked = isKeyguardLocked;

var launchIntentAfterUnlock = function launchIntentAfterUnlock(intentAction, intentData) {
  if (typeof GlanceAndroidInterface != 'undefined') {
    GlanceAndroidInterface.launchIntentAfterUnlock(intentAction, intentData);
  }
};

exports.launchIntentAfterUnlock = launchIntentAfterUnlock;

var launchIntent = function launchIntent(intentAction, intentData) {
  if (typeof GlanceAndroidInterface != 'undefined') {
    GlanceAndroidInterface.launchIntent(intentAction, intentData);
  }
}; // --------- For Samsung -------


exports.launchIntent = launchIntent;

var launchAppAfterUnlock = function launchAppAfterUnlock(appPackageName, deepLinkUrl) {
  if (typeof GlanceAndroidInterface != 'undefined') {
    GlanceAndroidInterface.launchAppAfterUnlock(appPackageName, deepLinkUrl);
  }
};

exports.launchAppAfterUnlock = launchAppAfterUnlock;

var launchApp = function launchApp(appPackageName, deepLinkUrl) {
  if (typeof GlanceAndroidInterface != 'undefined') {
    GlanceAndroidInterface.launchApp(appPackageName, deepLinkUrl);
  }
};

exports.launchApp = launchApp;

var sendCustomAnalytics = function sendCustomAnalytics(_ref) {
  var extras = _ref.extras,
      eventType = _ref.eventType;
  console.log('eventType:', eventType, ' extras:', extras);

  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface.sendCustomAnalyticsEvent(eventType, JSON.stringify(extras));
  }
};

exports.sendCustomAnalytics = sendCustomAnalytics;

var isGlanceHighlights = function isGlanceHighlights() {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface === null || GlanceAndroidInterface === void 0 ? void 0 : GlanceAndroidInterface.isHighlights();
  }
};

exports.isGlanceHighlights = isGlanceHighlights;

var glanceHold = function glanceHold() {
  console.log('glanceHold');

  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface === null || GlanceAndroidInterface === void 0 ? void 0 : GlanceAndroidInterface.holdGlance();
  }
};

exports.glanceHold = glanceHold;

var glanceUnhold = function glanceUnhold() {
  console.log('glanceUnhold');

  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface === null || GlanceAndroidInterface === void 0 ? void 0 : GlanceAndroidInterface.unHoldGlance();
  }
};

exports.glanceUnhold = glanceUnhold;

var glanceMoveToNext = function glanceMoveToNext() {
  console.log('Moved to Next Glance');

  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface === null || GlanceAndroidInterface === void 0 ? void 0 : GlanceAndroidInterface.moveToNextGlance();
  }
};

exports.glanceMoveToNext = glanceMoveToNext;

var glanceMoveToPrev = function glanceMoveToPrev() {
  console.log('glanceMoveToPrev');

  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface === null || GlanceAndroidInterface === void 0 ? void 0 : GlanceAndroidInterface.moveToPrevGlance();
  }
};

exports.glanceMoveToPrev = glanceMoveToPrev;

var hideNativeUiElementsOfGlance = function hideNativeUiElementsOfGlance(elements) {
  // Hides the given native element
  // console.log('Called Function to hide native elements!');
  if (typeof GlanceAndroidInterface !== 'undefined') {
    elements.map(function (element) {
      GlanceAndroidInterface === null || GlanceAndroidInterface === void 0 ? void 0 : GlanceAndroidInterface.hideNativeUiElement(element);
    });
  }
}; //-----------------------------------Language sdk js bridges----------------------------------------//


exports.hideNativeUiElementsOfGlance = hideNativeUiElementsOfGlance;

var getAllSubscribedLanguages = function getAllSubscribedLanguages() {
  // console.log('getAllSubscribedLanguages');
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.getAllSubscribedLanguages();
  } else {
    return ['en']; // comment this line later
  } //This returns List<String> as json string where String is languageId

};

exports.getAllSubscribedLanguages = getAllSubscribedLanguages;

var isLanguageSubscribed = function isLanguageSubscribed(languageId) {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.isLanguageSubscribed(languageId);
  } else {
    return true; // comment this line later
  } // return type true and false
  //Method will tell if languageId id is subscribed (true) or not (false).

};

exports.isLanguageSubscribed = isLanguageSubscribed;

var subscribeLanguage = function subscribeLanguage(languageId) {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface.subscribeLanguage(languageId);
  } else {
    console.log('Language Subscribed!: ', languageId);
  } //Input is languageId to subscribe

};

exports.subscribeLanguage = subscribeLanguage;

var unsubscribeLanguage = function unsubscribeLanguage(languageId) {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface.unsubscribeLanguage(languageId);
  } else {
    console.log('Language Unsubscribed: ', languageId);
  } //Input is languageId to unsubscribe

};

exports.unsubscribeLanguage = unsubscribeLanguage;

var getAllLanguages = function getAllLanguages() {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.getAllLanguages();
  } else {
    return '[{"displayName":"tamil","id":"ta","isSubscriptionModifiable":false},{"displayName":"kannada","id":"kn","isSubscriptionModifiable":true},{"displayName":"bangla","id":"bn","isSubscriptionModifiable":true},{"displayName":"telugu","id":"te","isSubscriptionModifiable":false},{"displayName":"hindi","id":"hi","isSubscriptionModifiable":false},{"displayName":"marathi","id":"mr","isSubscriptionModifiable":true},{"displayName":"english","id":"en","isSubscriptionModifiable":false}]';
  } // It returns serialized (json) map of list<GlanceLanguage>
  // [{'displayName':'English','id':'en','isSubscriptionModifiable':false}]

}; // -------------------------------------- Categories SDK JS Bridge ------------------------------------//


exports.getAllLanguages = getAllLanguages;

var getAllCategories = function getAllCategories() {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.getAllCategories();
  } //This returns List<GlanceCategories> as json string where GlanceCategory has {id, displayName, isSubscriptionModifiable}

};

exports.getAllCategories = getAllCategories;

var isCategorySubscribed = function isCategorySubscribed(categoryId) {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.isCategorySubscribed(categoryId); // return type true and false
  } //Method will tell if category id is subscribed (true) or not (false).

};

exports.isCategorySubscribed = isCategorySubscribed;

var updateCategorySubscriptions = function updateCategorySubscriptions(serializedCategorySubscriptionMap) {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    GlanceAndroidInterface.updateCategorySubscriptions(serializedCategorySubscriptionMap);
  } else {
    catgData = JSON.parse(serializedCategorySubscriptionMap);
    console.log('Category List Updated!!');
  } //Input is serialized (json) map of categoryIds to subscription state (true/false)

};

exports.updateCategorySubscriptions = updateCategorySubscriptions;

var getCategorySubscriptions = function getCategorySubscriptions() {
  if (typeof GlanceAndroidInterface !== 'undefined') {
    return GlanceAndroidInterface.getCategorySubscriptions();
  } else {
    return JSON.stringify(catgData);
  }
}; // It returns serialized (json) map of active categoryIds and their subscription state(boolean) .
// Example : "{\"#daily_digest\":true,\"#entertainment\":false, \"#travel\":true}";


exports.getCategorySubscriptions = getCategorySubscriptions;
},{}],"qsmZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = l;
exports.useReducer = p;
exports.useEffect = y;
exports.useLayoutEffect = h;
exports.useRef = s;
exports.useImperativeHandle = _;
exports.useMemo = d;
exports.useCallback = A;
exports.useContext = F;
exports.useDebugValue = T;
exports.useErrorBoundary = q;

var _preact = require("preact");

var t,
    u,
    r,
    o = 0,
    i = [],
    c = _preact.options.__b,
    f = _preact.options.__r,
    e = _preact.options.diffed,
    a = _preact.options.__c,
    v = _preact.options.unmount;

function m(t, r) {
  _preact.options.__h && _preact.options.__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function l(n) {
  return o = 1, p(w, n);
}

function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}

function y(r, o) {
  var i = m(t++, 3);
  !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function h(r, o) {
  var i = m(t++, 4);
  !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}

function s(n) {
  return o = 5, d(function () {
    return {
      current: n
    };
  }, []);
}

function _(n, t, u) {
  o = 6, h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function d(n, u) {
  var r = m(t++, 7);
  return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}

function A(n, t) {
  return o = 8, d(function () {
    return n;
  }, t);
}

function F(n) {
  var r = u.context[n.__c],
      o = m(t++, 9);
  return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function T(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function q(n) {
  var r = m(t++, 10),
      o = l();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function x() {
  i.forEach(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
    } catch (u) {
      t.__H.__h = [], _preact.options.__e(u, t.__v);
    }
  }), i = [];
}

_preact.options.__b = function (n) {
  u = null, c && c(n);
}, _preact.options.__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, _preact.options.diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    b && (t = requestAnimationFrame(u));
  })(x)), u = void 0;
}, _preact.options.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], _preact.options.__e(r, t.__v);
    }
  }), a && a(t, u);
}, _preact.options.unmount = function (t) {
  v && v(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    _preact.options.__e(t, u.__v);
  }
};
var b = "function" == typeof requestAnimationFrame;

function g(n) {
  var t = u;
  "function" == typeof n.__c && n.__c(), u = t;
}

function j(n) {
  var t = u;
  n.__c = n.__(), u = t;
}

function k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}

function w(n, t) {
  return "function" == typeof t ? t(n) : t;
}
},{"preact":"u8ui"}],"Sr9V":[function(require,module,exports) {
module.exports = "./checked.b3147cfc.svg";
},{}],"T5Pl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  black: '#000',
  white: '#fff',
  white30: 'rgba(255, 255, 255, 0.3)',
  black80: 'rgba(0, 0, 0, 0.8)',
  black_2: '#0D0D0D',
  black_3: '#484848',
  pink: '#ff1493',
  lightPink: '#FE3460',
  darkGrey: '#3E3C3B',
  black1: '#080808',
  black2: '#0B0B0B',
  black3: '#0E0E0E',
  black4: '#111111',
  black5: '#141414',
  black6: '#1C1C1C'
};
exports.default = _default;
},{}],"e3HD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = p;
exports.setup = h;
exports.styled = m;
exports.keyframes = exports.glob = exports.extractCss = void 0;

let e = {
  data: ""
},
    t = t => {
  if ("undefined" != typeof window) {
    let e = t ? t.querySelector("#_goober") : window._goober;
    return e || (e = (t || document.head).appendChild(document.createElement("style")), e.innerHTML = " ", e.id = "_goober"), e.firstChild;
  }

  return t || e;
},
    r = e => {
  let r = t(e),
      l = r.data;
  return r.data = "", l;
},
    l = /(?:([A-Z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,
    a = /\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,
    n = (e, t) => {
  let r,
      l = "",
      a = "",
      o = "";

  for (let c in e) {
    let s = e[c];
    "object" == typeof s ? (r = t ? t.replace(/([^,])+/g, e => c.replace(/([^,])+/g, t => /&/g.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : c, a += "@" == c[0] ? "f" == c[1] ? n(s, c) : c + "{" + n(s, "k" == c[1] ? "" : t) + "}" : n(s, r)) : "@" == c[0] && "i" == c[1] ? l = c + " " + s + ";" : o += n.p ? n.p(c.replace(/[A-Z]/g, "-$&").toLowerCase(), s) : c.replace(/[A-Z]/g, "-$&").toLowerCase() + ":" + s + ";";
  }

  return o[0] ? (r = t ? t + "{" + o + "}" : o, l + r + a) : l + a;
},
    o = {},
    c = e => {
  let t = "";

  for (let r in e) t += r + ("object" == typeof e[r] ? c(e[r]) : e[r]);

  return t;
},
    s = (e, t, r, s, i) => {
  let p = "object" == typeof e ? c(e) : e,
      u = o[p] || (o[p] = "go" + p.split("").reduce((e, t) => 101 * e + t.charCodeAt(0) >>> 0, 11));

  if (!o[u]) {
    let t = "object" == typeof e ? e : (e => {
      let t,
          r = [{}];

      for (; t = l.exec(e.replace(a, ""));) t[4] && r.shift(), t[3] ? r.unshift(r[0][t[3]] = r[0][t[3]] || {}) : t[4] || (r[0][t[1]] = t[2]);

      return r[0];
    })(e);
    o[u] = n(i ? {
      ["@keyframes " + u]: t
    } : t, r ? "" : "." + u);
  }

  return ((e, t, r) => {
    -1 == t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e);
  })(o[u], t, s), u;
},
    i = (e, t, r) => e.reduce((e, l, a) => {
  let o = t[a];

  if (o && o.call) {
    let e = o(r),
        t = e && e.props && e.props.className || /^go/.test(e) && e;
    o = t ? "." + t : e && "object" == typeof e ? e.props ? "" : n(e, "") : e;
  }

  return e + l + (null == o ? "" : o);
}, "");

exports.extractCss = r;

function p(e) {
  let r = this || {},
      l = e.call ? e(r.p) : e;
  return s(l.unshift ? l.raw ? i(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t) => t ? Object.assign(e, t.call ? t(r.p) : t) : e, {}) : l, t(r.target), r.g, r.o, r.k);
}

let u,
    d,
    f,
    g = p.bind({
  g: 1
}),
    b = p.bind({
  k: 1
});
exports.keyframes = b;
exports.glob = g;

function h(e, t, r, l) {
  n.p = t, u = e, d = r, f = l;
}

function m(e, t) {
  let r = this || {};
  return function () {
    let l = arguments;

    function a(n, o) {
      let c = Object.assign({}, n),
          s = c.className || a.className;
      r.p = Object.assign({
        theme: d && d()
      }, c), r.o = / *go\d+/g.test(s), c.className = p.apply(r, l) + (s ? " " + s : ""), t && (c.ref = o);
      let i = c.as || e;
      return f && i[0] && f(c), u(i, c);
    }

    return t ? t(a) : a;
  };
}
},{}],"pJEU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _checked = _interopRequireDefault(require("../assets/languageFiles/checked.svg"));

var _colors = _interopRequireDefault(require("../styles/colors"));

var _goober = require("goober");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var circle = (0, _goober.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 14.5%;\n    width: 14.5%;\n    border-radius: 50%;\n    background-color: ", ";\n    position: absolute;\n    top: 14.5%;\n    right: 14.5%;\n"])), _colors.default.black_3);
var check_mark = (0, _goober.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    height:100%;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n"])));

var CheckedCircle = function CheckedCircle() {
  return (0, _preact.h)("div", {
    className: circle
  }, (0, _preact.h)("div", {
    className: check_mark
  }, " ", (0, _preact.h)("img", {
    src: _checked.default,
    alt: "check mark"
  }), " "));
};

var _default = CheckedCircle;
exports.default = _default;
},{"preact":"u8ui","../assets/languageFiles/checked.svg":"Sr9V","../styles/colors":"T5Pl","goober":"e3HD"}],"BkzD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  fontTiny: '10px',
  fontSmall: '12px',
  fontBase: '14px',
  fontMedium: '16px',
  fontLarge: '18px',
  fontDisplay: '28px',
  fontGenericSize1: '23px',
  fontWtLight: '300',
  fontWtNormal: '400',
  fontWtMedium: '500',
  fontWtSemiBold: '600',
  fontWtBold: '700',
  fontWtExtraBold: '800',
  fontWtBlack: '900',
  primaryFontFamily: 'Roboto,Helvetica, Arial, sans-serif;'
};
exports.default = _default;
},{}],"MaFL":[function(require,module,exports) {
module.exports = "./bangla.1f074e10.png";
},{}],"VG3x":[function(require,module,exports) {
module.exports = "./english.9d6741ec.png";
},{}],"yfOj":[function(require,module,exports) {
module.exports = "./hindi.61fca2bd.png";
},{}],"AhzT":[function(require,module,exports) {
module.exports = "./kannada.948527ae.png";
},{}],"k4KV":[function(require,module,exports) {
module.exports = "./marathi.6cd96707.png";
},{}],"wSDf":[function(require,module,exports) {
module.exports = "./tamil.fba5d679.png";
},{}],"POB9":[function(require,module,exports) {
module.exports = "./telugu.d29fa03e.png";
},{}],"t1H5":[function(require,module,exports) {
module.exports = "./bangla.d2e2485f.mp4";
},{}],"iSTh":[function(require,module,exports) {
module.exports = "./default.ad198ed9.mp4";
},{}],"hU9C":[function(require,module,exports) {
module.exports = "./Hindi.976b79a5.mp4";
},{}],"A9ak":[function(require,module,exports) {
module.exports = "./kannada.07cf72c4.mp4";
},{}],"CJeM":[function(require,module,exports) {
module.exports = "./marathi.b0cac2bb.mp4";
},{}],"XynP":[function(require,module,exports) {
module.exports = "./tamil.8ac1ef3d.mp4";
},{}],"KgSk":[function(require,module,exports) {
module.exports = "./telugu.a0abd6cb.mp4";
},{}],"ZChm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.languageDataForImageAndVideo = void 0;

var _bangla = _interopRequireDefault(require("../assets/languageFiles/bangla.png"));

var _english = _interopRequireDefault(require("../assets/languageFiles/english.png"));

var _hindi = _interopRequireDefault(require("../assets/languageFiles/hindi.png"));

var _kannada = _interopRequireDefault(require("../assets/languageFiles/kannada.png"));

var _marathi = _interopRequireDefault(require("../assets/languageFiles/marathi.png"));

var _tamil = _interopRequireDefault(require("../assets/languageFiles/tamil.png"));

var _telugu = _interopRequireDefault(require("../assets/languageFiles/telugu.png"));

var _bangla2 = _interopRequireDefault(require("../assets/languageFiles/videos/bangla.mp4"));

var _default = _interopRequireDefault(require("../assets/languageFiles/videos/default.mp4"));

var _Hindi = _interopRequireDefault(require("../assets/languageFiles/videos/Hindi.mp4"));

var _kannada2 = _interopRequireDefault(require("../assets/languageFiles/videos/kannada.mp4"));

var _marathi2 = _interopRequireDefault(require("../assets/languageFiles/videos/marathi.mp4"));

var _tamil2 = _interopRequireDefault(require("../assets/languageFiles/videos/tamil.mp4"));

var _telugu2 = _interopRequireDefault(require("../assets/languageFiles/videos/telugu.mp4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var languageDataForImageAndVideo = {
  en: {
    imgUrl: _english.default,
    videoUrl: _default.default
  },
  hi: {
    imgUrl: _hindi.default,
    videoUrl: _Hindi.default
  },
  bn: {
    imgUrl: _bangla.default,
    videoUrl: _bangla2.default
  },
  kn: {
    imgUrl: _kannada.default,
    videoUrl: _kannada2.default
  },
  ta: {
    imgUrl: _tamil.default,
    videoUrl: _tamil2.default
  },
  te: {
    imgUrl: _telugu.default,
    videoUrl: _telugu2.default
  },
  mr: {
    imgUrl: _marathi.default,
    videoUrl: _marathi2.default
  }
};
exports.languageDataForImageAndVideo = languageDataForImageAndVideo;
},{"../assets/languageFiles/bangla.png":"MaFL","../assets/languageFiles/english.png":"VG3x","../assets/languageFiles/hindi.png":"yfOj","../assets/languageFiles/kannada.png":"AhzT","../assets/languageFiles/marathi.png":"k4KV","../assets/languageFiles/tamil.png":"wSDf","../assets/languageFiles/telugu.png":"POB9","../assets/languageFiles/videos/bangla.mp4":"t1H5","../assets/languageFiles/videos/default.mp4":"iSTh","../assets/languageFiles/videos/Hindi.mp4":"hU9C","../assets/languageFiles/videos/kannada.mp4":"A9ak","../assets/languageFiles/videos/marathi.mp4":"CJeM","../assets/languageFiles/videos/tamil.mp4":"XynP","../assets/languageFiles/videos/telugu.mp4":"KgSk"}],"lw3V":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _checked_circle = _interopRequireDefault(require("./checked_circle"));

var _colors = _interopRequireDefault(require("../styles/colors"));

var _goober = require("goober");

var _font = _interopRequireDefault(require("../styles/font"));

var _constants = require("../scripts/constants");

var _glanceJsBridge = require("../scripts/glanceJsBridge");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LanguageOverlay = (0, _goober.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: absolute;\n        top: 50%;\n        left:0;\n        height: 50vh;\n        width: 100vw;\n        display: flex;\n        /* background-color: ", "; */\n        /* background: linear-gradient(to bottom, #0000002d, #000000); */\n        z-index: 2;\n        display:flex;\n        flex-direction:column;\n        scroll-behavior: smooth;\n    "])), _colors.default.black);
var chooseLang = (0, _goober.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    /* margin: 2vh auto 0 auto;\n    text-align: center; */\n    margin: 0vh auto 0 auto;\n    text-align: center;\n    width: 100%;\n    background: linear-gradient(to bottom, #11101126, #111011cf,#111011ef, #111011,#121112);\n"])));
var chooseLang__Title = (0, _goober.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    line-height: 24px;\n    letter-spacing: 0.3px;\n    color: ", ";\n"])), _font.default.fontLarge, _colors.default.white);
var chooseLang__Text = (0, _goober.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: block;\n    font-size: ", ";\n    font-weight: ", ";\n    color: rgba(255, 255, 255, 0.4);\n"])), _font.default.fontBase, _font.default.fontWtLight);
var languageTilesContainer = (0, _goober.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    \n    padding: 0 5vw 50px 5vw;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    background-color: #121112;\n    overflow-y: scroll;\n    box-sizing: border-box;\n    &::-webkit-scrollbar {\n            display: none;\n        }\n    @media (min-width: 450px) {\n        justify-content: space-between; // for bigger screens i.e ipads, kindle, surface\n    }\n"])));
var languageTile = (0, _goober.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    /* background-color: ", "; */\n    display: flex;\n    justify-content:center;\n    position: relative;\n    & .notSelected {\n        width: 17vh;\n        margin: 10px 5px;\n    };\n"])), _colors.default.black);
var languageTileSelected = (0, _goober.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 17vh;\n    margin: 10px 5px;\n    background-color: #181919;\n    box-shadow: 0 0 0 1px ", ";\n    border-radius: 20px;\n"])), _colors.default.white30);

var LanguagesOverlay = function LanguagesOverlay(_ref) {
  var selectLanguages = _ref.selectLanguages,
      subscribedLanguages = _ref.subscribedLanguages,
      allLanguagesData = _ref.allLanguagesData;
  var langOverlay = (0, _hooks.useRef)(null);

  var handleScrollAnalytics = function handleScrollAnalytics() {
    var _a;

    console.log("User Scrolled!");
    var eventType = "language_webpeek";
    var extras = {
      action: 'scroll',
      user_scrolled: true
    };
    (_a = langOverlay.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', handleScrollAnalytics);
    (0, _glanceJsBridge.sendCustomAnalytics)({
      extras: extras,
      eventType: eventType
    });
  };

  (0, _hooks.useEffect)(function () {
    var _a;

    (_a = langOverlay.current) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', handleScrollAnalytics);
  }, []);
  console.log('subscribedLanguages:', subscribedLanguages);
  return (0, _preact.h)("div", {
    className: LanguageOverlay
  }, (0, _preact.h)("div", {
    className: chooseLang
  }, (0, _preact.h)("p", {
    className: chooseLang__Title
  }, "Choose Languages ", (0, _preact.h)("span", {
    className: chooseLang__Text
  }, "to see content of your choice"))), (0, _preact.h)("div", {
    className: languageTilesContainer,
    ref: langOverlay
  }, allLanguagesData.map(function (item, index) {
    return (0, _preact.h)("div", {
      className: languageTile,
      key: index
    }, subscribedLanguages.includes(item.id) && (0, _preact.h)(_checked_circle.default, null), (0, _preact.h)("img", {
      src: _constants.languageDataForImageAndVideo[item.id].imgUrl,
      alt: item.id,
      onClick: function onClick() {
        return selectLanguages(item.id);
      },
      className: subscribedLanguages.includes(item.id) ? languageTileSelected : "notSelected"
    }));
  }), (0, _preact.h)("div", {
    className: languageTile
  }, (0, _preact.h)("div", {
    className: "notSelected",
    "data-desc": "placeholder"
  }))));
};

var _default = LanguagesOverlay;
exports.default = _default;
},{"preact":"u8ui","preact/hooks":"qsmZ","./checked_circle":"pJEU","../styles/colors":"T5Pl","goober":"e3HD","../styles/font":"BkzD","../scripts/constants":"ZChm","../scripts/glanceJsBridge":"IJ9I"}],"FOYD":[function(require,module,exports) {
module.exports = "./arrow.18ef66ae.webp";
},{}],"Qy9f":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _colors = _interopRequireDefault(require("../styles/colors"));

var _goober = require("goober");

var _arrow = _interopRequireDefault(require("../assets/arrow.webp"));

var _hooks = require("preact/hooks");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NextButton = function NextButton(_ref) {
  var clickedOnNext = _ref.clickedOnNext,
      lang = _ref.lang,
      setLang = _ref.setLang;
  var NextBtn = (0, _goober.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 5px 16px;\n    width: max-content;\n    height: 30px;\n    font-size: 16px;\n    background-color: #d42257;\n    color: ", ";\n    text-decoration: none;\n    border-radius: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), inset 0px -1px 2px #d1406b,\n      inset 0px 1px 2px #d1406b;\n    display: flex;\n    justify-content: space-between;\n    transition: all 0.3s ease;\n\n    & span {\n      text-transform: capitalize;\n    }\n  "])), _colors.default.white);
  (0, _hooks.useEffect)(function () {
    if (lang !== '') {
      setTimeout(function () {
        setLang('');
      }, 2500);
    }
  }, [lang]);
  return (0, _preact.h)("div", {
    onClick: clickedOnNext,
    className: NextBtn
  }, lang ? (0, _preact.h)("div", null, "\uD83D\uDC4F You are subscribed to ", (0, _preact.h)("span", null, lang)) : (0, _preact.h)("div", null, ' ', "Next ", (0, _preact.h)("img", {
    src: _arrow.default,
    alt: "right arrow",
    height: "14"
  }), ' '));
};

var _default = NextButton;
exports.default = _default;
},{"preact":"u8ui","../styles/colors":"T5Pl","goober":"e3HD","../assets/arrow.webp":"FOYD","preact/hooks":"qsmZ"}],"DVtc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _goober = require("goober");

var _glanceJsBridge = require("../scripts/glanceJsBridge");

var _hooks = require("preact/hooks");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VerticalVideo = (0, _goober.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    object-fit: fill;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0px;\n"])));

var VideoSource = function VideoSource(_ref) {
  var video_url = _ref.video_url,
      pause = _ref.pause;
  var videoRef = (0, _hooks.useRef)(null);

  function onBlur() {
    console.log("VIDEO_OUT_OF_FOCUS!!!");
    videoRef.current.pause();
  }

  function onFocus() {
    console.log("VIDEO_ON_FOCUS!!!");
    videoRef.current.play();
    setInterval(function () {
      (0, _glanceJsBridge.hideNativeUiElementsOfGlance)(['meatballsIcon', 'likeContainer']);
    }, 100);
  }

  var isGlanceSDK = typeof window.GlanceAndroidInterface !== 'undefined';

  if (isGlanceSDK) {
    window.onFocus = onFocus;
    window.outOfFocus = onBlur;
  } else {
    window.onfocus = onFocus;
    window.onblur = onBlur;
  }

  return (0, _preact.h)("div", null, (0, _preact.h)("video", {
    // width="320"
    // height="340"
    // loop
    playsInline: true,
    autoPlay: true,
    // muted
    // controls
    className: VerticalVideo,
    src: video_url,
    ref: videoRef
  }, "Your browser does not support the video tag."));
};

var _default = VideoSource;
exports.default = _default;
},{"preact":"u8ui","goober":"e3HD","../scripts/glanceJsBridge":"IJ9I","preact/hooks":"qsmZ"}],"j77K":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _glanceJsBridge = require("../scripts/glanceJsBridge");

var _hooks = require("preact/hooks");

var _lang_overlay = _interopRequireDefault(require("./lang_overlay"));

var _nextButton = _interopRequireDefault(require("./nextButton"));

var _videoContainer = _interopRequireDefault(require("./videoContainer"));

var _colors = _interopRequireDefault(require("../styles/colors"));

var _goober = require("goober");

var _default2 = _interopRequireDefault(require("../assets/languageFiles/videos/default.mp4"));

var _constants = require("../scripts/constants");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// eslint-disable-next-line prettier/prettier
// import { route } from 'preact-router';
var Container = (0, _goober.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: transparent;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), _colors.default.white); // const Container1 = css`
//   background: transparent;
//   color: ${colors.white};
//   display: flex;
//   height: 200vh;
//   /* align-items: center;
//   justify-content: center;   */
//   overflow-y: scroll;
//     `;

var disclaimer = (0, _goober.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    transform: rotate(-90deg);\n    width: max-content;\n    height: fit-content;\n    bottom: 20vh;\n    left: 8%;\n    color: rgba(255, 255, 255, 0.4);\n    z-index: 7;\n    font-size: 1.5vh;\n    font-family: sans-serif;\n    /* letter-spacing: 0.5px; */\n    font-weight: 300;\n    transform-origin: bottom left 50px;\n"])));

var SelectLanguages = function SelectLanguages() {
  var _useState = (0, _hooks.useState)(Date.now()),
      _useState2 = _slicedToArray(_useState, 2),
      startTime = _useState2[0],
      setStartTime = _useState2[1];

  var _useState3 = (0, _hooks.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      lang = _useState4[0],
      setLang = _useState4[1];

  var _useState5 = (0, _hooks.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      subscribedLanguages = _useState6[0],
      setSubscribedLanguages = _useState6[1];

  var _useState7 = (0, _hooks.useState)("".concat(_default2.default)),
      _useState8 = _slicedToArray(_useState7, 2),
      videoUrl = _useState8[0],
      setVideoUrl = _useState8[1];

  var _useState9 = (0, _hooks.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      pause = _useState10[0],
      setPause = _useState10[1];

  var _useState11 = (0, _hooks.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      allLanguagesData = _useState12[0],
      setAllLanguagesData = _useState12[1];

  var webpeekLoadedAnalytics = function webpeekLoadedAnalytics() {
    var eventType = 'language_webpeek';
    var extras = {
      action: 'webpeek_loaded'
    };
    console.log('Webpeek Loaded!');
    (0, _glanceJsBridge.sendCustomAnalytics)({
      extras: extras,
      eventType: eventType
    });
  };

  var clickedOnNextAnalytics = function clickedOnNextAnalytics() {
    var eventType = 'language_webpeek';
    var extras = {
      action: 'clicked_on_next'
    };
    console.log('Clicked on Next!');
    (0, _glanceJsBridge.sendCustomAnalytics)({
      extras: extras,
      eventType: eventType
    });
  };

  var totalTimeSpentOnWebpeekAnalytics = function totalTimeSpentOnWebpeekAnalytics(time) {
    var eventType = 'language_webpeek';
    var extras = {
      action: 'time_spent_on_webpeek',
      time_spent: "".concat(time, " ms")
    };
    (0, _glanceJsBridge.sendCustomAnalytics)({
      extras: extras,
      eventType: eventType
    });
  };

  (0, _hooks.useEffect)(function () {
    var subscribedLanguages = (0, _glanceJsBridge.getAllSubscribedLanguages)();
    console.log('Lang_Webpeek: ', subscribedLanguages);
    setSubscribedLanguages(subscribedLanguages);
    webpeekLoadedAnalytics();
    var LanguageData = JSON.parse((0, _glanceJsBridge.getAllLanguages)()); // [{id:'abc', name:'ABC'}] => {abc:{id: 'abc', name: "ABC"}}

    setAllLanguagesData(LanguageData);
  }, []); //TODO - Need to add dependency array for glancejsbridge Availability

  (0, _hooks.useEffect)(function () {
    (0, _glanceJsBridge.hideNativeUiElementsOfGlance)(['meatballsIcon', 'likeContainer']); // to hide the native elements
  }, []);

  var LanguageSubscribedAnalytics = function LanguageSubscribedAnalytics(languageId) {
    var eventType = 'language_webpeek';
    var extras = {
      action: 'language_subscribed',
      languageId: languageId
    };
    (0, _glanceJsBridge.sendCustomAnalytics)({
      extras: extras,
      eventType: eventType
    });
  };

  var LanguageUnubscribedAnalytics = function LanguageUnubscribedAnalytics(languageId) {
    var eventType = 'language_webpeek';
    var extras = {
      action: 'language_unsubscribed',
      languageId: languageId
    };
    (0, _glanceJsBridge.sendCustomAnalytics)({
      extras: extras,
      eventType: eventType
    });
  };

  var selectLanguages = function selectLanguages(langId) {
    var isModifiable = allLanguagesData.filter(function (item) {
      return langId === item.id;
    })[0].isSubscriptionModifiable; // const test =

    console.log('allLanguagesData', allLanguagesData);
    console.log('isModifiable: ', isModifiable);
    if (!isModifiable) return;

    if (subscribedLanguages.includes(langId)) {
      (0, _glanceJsBridge.unsubscribeLanguage)(langId); // Unubscribing a language

      LanguageUnubscribedAnalytics(langId); //Analytics for unsubscribed language
      // const idx = subscribedLanguages.indexOf(langId);
      // const copiedArray = subscribedLanguages.slice();
      // copiedArray.splice(idx, 1);
    } else {
      (0, _glanceJsBridge.subscribeLanguage)(langId); // SDK js - Subscribing to a new language

      LanguageSubscribedAnalytics(langId); //Analytics for newly subscribed language

      var _videoUrl = _constants.languageDataForImageAndVideo[langId].videoUrl;
      setVideoUrl(_videoUrl); // setSubscribedLanguages(selectedLanguages => ([...selectedLanguages, langId]));

      var Lang = allLanguagesData.filter(function (item) {
        return item.id === langId;
      });
      setLang(Lang[0].displayName);
    }

    var updatedLanguageList = (0, _glanceJsBridge.getAllSubscribedLanguages)(); // need to make a fn for the same

    console.log('Updated Language list after unsubscription: ', updatedLanguageList);
    setSubscribedLanguages(updatedLanguageList);
  };

  var clickedOnNext = function clickedOnNext() {
    var endTime = Date.now();
    var totalTimeSpent = endTime - startTime;
    console.log('totalTimeSpent: ', totalTimeSpent, 'ms'); // remove the console later

    totalTimeSpentOnWebpeekAnalytics(totalTimeSpent); //Analytics for total time spent on page

    setPause(true);
    clickedOnNextAnalytics(); //Analytics for clicked on next btn

    (0, _glanceJsBridge.glanceMoveToNext)(); // SDK js function to kove to next glance
  };

  return (0, _preact.h)("div", {
    className: Container
  }, (0, _preact.h)("div", {
    className: disclaimer
  }, (0, _preact.h)("p", null, "Altered video. For Entertainment purposes only. No association with depicted personalities")), (0, _preact.h)(_videoContainer.default, {
    video_url: videoUrl,
    pause: pause
  }), (0, _preact.h)(_lang_overlay.default, {
    selectLanguages: selectLanguages,
    subscribedLanguages: subscribedLanguages,
    allLanguagesData: allLanguagesData
  }), (0, _preact.h)(_nextButton.default, {
    clickedOnNext: clickedOnNext,
    lang: lang,
    setLang: setLang
  }));
};

var _default = SelectLanguages;
exports.default = _default;
},{"preact":"u8ui","../scripts/glanceJsBridge":"IJ9I","preact/hooks":"qsmZ","./lang_overlay":"lw3V","./nextButton":"Qy9f","./videoContainer":"DVtc","../styles/colors":"T5Pl","goober":"e3HD","../assets/languageFiles/videos/default.mp4":"iSTh","../scripts/constants":"ZChm"}],"pcvB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _language_input_main = _interopRequireDefault(require("./components/language_input_main"));

var _glanceJsBridge = require("./scripts/glanceJsBridge");

var _hooks = require("preact/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  (0, _hooks.useEffect)(function () {
    var eventType = 'language_webpeek';
    var extras = {
      action: 'webpeek_network_mode',
      networkType: window.navigator.onLine ? 'online' : 'offline'
    };
    (0, _glanceJsBridge.sendCustomAnalytics)({
      eventType: eventType,
      extras: extras
    });
  }, []);
  return (0, _preact.h)(_language_input_main.default, null);
};

var _default = App;
exports.default = _default;
},{"preact":"u8ui","./components/language_input_main":"j77K","./scripts/glanceJsBridge":"IJ9I","preact/hooks":"qsmZ"}],"FhGL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _font = _interopRequireDefault(require("./font"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\nbody {\n  margin: 0;\n}\nmain {\n  display: block;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\na {\n  background-color: transparent;\n}\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\nimg {\n  border-style: none;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\nprogress {\n  vertical-align: baseline;\n}\ntextarea {\n  overflow: auto;\n}\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\ndetails {\n  display: block;\n}\nsummary {\n  display: list-item;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none;\n}\n\nhtml, body {\n    font-family: ".concat(_font.default.primaryFontFamily, ";\n    box-sizing: border-box;\n}\nhtml, body, #root {\n    height: 100%;\n    box-sizing: border-box;\n}\n\n");

exports.default = _default;
},{"./font":"BkzD"}],"OGgv":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _app = _interopRequireDefault(require("./app"));

var _goober = require("goober");

var _globals = _interopRequireDefault(require("./styles/globals"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Must be the first import
if ("production" === 'development') {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  require('preact/debug');
}

var loadApp = function loadApp() {
  var element = document.getElementById('root');
  (0, _goober.glob)(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), _globals.default);
  (0, _preact.render)((0, _preact.h)(_app.default, null), element);
};

document.addEventListener('DOMContentLoaded', function () {
  loadApp();
});
},{"preact":"u8ui","./app":"pcvB","goober":"e3HD","./styles/globals":"FhGL"}]},{},["OGgv"], null)