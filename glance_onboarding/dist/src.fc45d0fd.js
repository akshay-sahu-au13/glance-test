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
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
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
},{}],"node_modules/preact/devtools/dist/devtools.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHookName = t;

var _preact = require("preact");

function t(o, e) {
  return _preact.options.__a && _preact.options.__a(e), o;
}

"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.5.12", _preact.options, {
  Fragment: _preact.Fragment,
  Component: _preact.Component
});
},{"preact":"node_modules/preact/dist/preact.module.js"}],"node_modules/preact/debug/dist/debug.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPropWarnings = r;

var _preact = require("preact");

require("preact/devtools");

var o = {};

function r() {
  o = {};
}

function a(n) {
  return n.type === _preact.Fragment ? "Fragment" : "function" == typeof n.type ? n.type.displayName || n.type.name : "string" == typeof n.type ? n.type : "#text";
}

var i = [],
    s = [];

function c() {
  return i.length > 0 ? i[i.length - 1] : null;
}

var l = !1;

function u(n) {
  return "function" == typeof n.type && n.type != _preact.Fragment;
}

function f(n) {
  for (var t = [n], e = n; null != e.__o;) t.push(e.__o), e = e.__o;

  return t.reduce(function (n, t) {
    n += "  in " + a(t);
    var e = t.__source;
    return e ? n += " (at " + e.fileName + ":" + e.lineNumber + ")" : l || (l = !0, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n + "\n";
  }, "");
}

var p = "function" == typeof WeakMap,
    d = _preact.Component.prototype.setState;

_preact.Component.prototype.setState = function (n, t) {
  return null == this.__v ? null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f(c())) : null == this.__P && console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + f(this.__v)), d.call(this, n, t);
};

var h = _preact.Component.prototype.forceUpdate;

function y(n) {
  var t = n.props,
      e = a(n),
      o = "";

  for (var r in t) if (t.hasOwnProperty(r) && "children" !== r) {
    var i = t[r];
    "function" == typeof i && (i = "function " + (i.displayName || i.name) + "() {}"), i = Object(i) !== i || i.toString ? i + "" : Object.prototype.toString.call(i), o += " " + r + "=" + JSON.stringify(i);
  }

  var s = t.children;
  return "<" + e + o + (s && s.length ? ">..</" + e + ">" : " />");
}

_preact.Component.prototype.forceUpdate = function (n) {
  return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f(c())) : null == this.__P && console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + f(this.__v)), h.call(this, n);
}, function () {
  !function () {
    var t = _preact.options.__b,
        e = _preact.options.diffed,
        o = _preact.options.__,
        r = _preact.options.vnode,
        a = _preact.options.__r;
    _preact.options.diffed = function (n) {
      u(n) && s.pop(), i.pop(), e && e(n);
    }, _preact.options.__b = function (n) {
      u(n) && i.push(n), t && t(n);
    }, _preact.options.__ = function (n, t) {
      s = [], o && o(n, t);
    }, _preact.options.vnode = function (n) {
      n.__o = s.length > 0 ? s[s.length - 1] : null, r && r(n);
    }, _preact.options.__r = function (n) {
      u(n) && s.push(n), a && a(n);
    };
  }();
  var t = !1,
      e = _preact.options.__b,
      r = _preact.options.diffed,
      c = _preact.options.vnode,
      l = _preact.options.__e,
      d = _preact.options.__,
      h = _preact.options.__h,
      m = p ? {
    useEffect: new WeakMap(),
    useLayoutEffect: new WeakMap(),
    lazyPropTypes: new WeakMap()
  } : null,
      v = [];
  _preact.options.__e = function (n, t, e) {
    if (t && t.__c && "function" == typeof n.then) {
      var o = n;
      n = new Error("Missing Suspense. The throwing component was: " + a(t));

      for (var r = t; r; r = r.__) if (r.__c && r.__c.__c) {
        n = o;
        break;
      }

      if (n instanceof Error) throw n;
    }

    try {
      l(n, t, e), "function" != typeof n.then && setTimeout(function () {
        throw n;
      });
    } catch (n) {
      throw n;
    }
  }, _preact.options.__ = function (n, t) {
    if (!t) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
    var e;

    switch (t.nodeType) {
      case 1:
      case 11:
      case 9:
        e = !0;
        break;

      default:
        e = !1;
    }

    if (!e) {
      var o = a(n);
      throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + t + " instead: render(<" + o + " />, " + t + ");");
    }

    d && d(n, t);
  }, _preact.options.__b = function (n) {
    var r = n.type,
        i = function n(t) {
      return t ? "function" == typeof t.type ? n(t.__) : t : {};
    }(n.__);

    if (t = !0, void 0 === r) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + y(n) + "\n\n" + f(n));

    if (null != r && "object" == typeof r) {
      if (void 0 !== r.__k && void 0 !== r.__e) throw new Error("Invalid type passed to createElement(): " + r + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a(n) + " = " + y(r) + ";\n  let vnode = <My" + a(n) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f(n));
      throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r) ? "array" : r));
    }

    if ("thead" !== r && "tfoot" !== r && "tbody" !== r || "table" === i.type ? "tr" === r && "thead" !== i.type && "tfoot" !== i.type && "tbody" !== i.type && "table" !== i.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y(n) + "\n\n" + f(n)) : "td" === r && "tr" !== i.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y(n) + "\n\n" + f(n)) : "th" === r && "tr" !== i.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + y(n) + "\n\n" + f(n)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y(n) + "\n\n" + f(n)), void 0 !== n.ref && "function" != typeof n.ref && "object" != typeof n.ref && !("$$typeof" in n)) throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got [' + typeof n.ref + "] instead\n" + y(n) + "\n\n" + f(n));
    if ("string" == typeof n.type) for (var s in n.props) if ("o" === s[0] && "n" === s[1] && "function" != typeof n.props[s] && null != n.props[s]) throw new Error("Component's \"" + s + '" property should be a function, but got [' + typeof n.props[s] + "] instead\n" + y(n) + "\n\n" + f(n));

    if ("function" == typeof n.type && n.type.propTypes) {
      if ("Lazy" === n.type.displayName && m && !m.lazyPropTypes.has(n.type)) {
        var c = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";

        try {
          var l = n.type();
          m.lazyPropTypes.set(n.type, !0), console.warn(c + "Component wrapped in lazy() is " + a(l));
        } catch (n) {
          console.warn(c + "We will log the wrapped component's name once it is loaded.");
        }
      }

      var u = n.props;
      n.type.__f && delete (u = function (n, t) {
        for (var e in t) n[e] = t[e];

        return n;
      }({}, u)).ref, function (n, t, e, r, a) {
        Object.keys(n).forEach(function (e) {
          var i;

          try {
            i = n[e](t, e, r, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (n) {
            i = n;
          }

          !i || i.message in o || (o[i.message] = !0, console.error("Failed prop type: " + i.message + (a && "\n" + a() || "")));
        });
      }(n.type.propTypes, u, 0, a(n), function () {
        return f(n);
      });
    }

    e && e(n);
  }, _preact.options.__h = function (n, e, o) {
    if (!n || !t) throw new Error("Hook can only be invoked from render methods.");
    h && h(n, e, o);
  };

  var b = function (n, t) {
    return {
      get: function () {
        var e = "get" + n + t;
        v && v.indexOf(e) < 0 && (v.push(e), console.warn("getting vnode." + n + " is deprecated, " + t));
      },
      set: function () {
        var e = "set" + n + t;
        v && v.indexOf(e) < 0 && (v.push(e), console.warn("setting vnode." + n + " is not allowed, " + t));
      }
    };
  },
      w = {
    nodeName: b("nodeName", "use vnode.type"),
    attributes: b("attributes", "use vnode.props"),
    children: b("children", "use vnode.props.children")
  },
      g = Object.create({}, w);

  _preact.options.vnode = function (n) {
    var t = n.props;

    if (null !== n.type && null != t && ("__source" in t || "__self" in t)) {
      var e = n.props = {};

      for (var o in t) {
        var r = t[o];
        "__source" === o ? n.__source = r : "__self" === o ? n.__self = r : e[o] = r;
      }
    }

    n.__proto__ = g, c && c(n);
  }, _preact.options.diffed = function (n) {
    if (n.__k && n.__k.forEach(function (t) {
      if (t && void 0 === t.type) {
        delete t.__, delete t.__b;
        var e = Object.keys(t).join(",");
        throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + e + "}.\n\n" + f(n));
      }
    }), t = !1, r && r(n), null != n.__k) for (var e = [], o = 0; o < n.__k.length; o++) {
      var a = n.__k[o];

      if (a && null != a.key) {
        var i = a.key;

        if (-1 !== e.indexOf(i)) {
          console.error('Following component has two or more children with the same key attribute: "' + i + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + y(n) + "\n\n" + f(n));
          break;
        }

        e.push(i);
      }
    }
  };
}();
},{"preact":"node_modules/preact/dist/preact.module.js","preact/devtools":"node_modules/preact/devtools/dist/devtools.module.js"}],"node_modules/goober/dist/goober.esm.js":[function(require,module,exports) {
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
},{}],"node_modules/preact-router/dist/preact-router.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUrl = getCurrentUrl;
exports.route = route;
exports.exec = exec;
exports.default = exports.Link = exports.Route = exports.Router = exports.subscribers = void 0;

var _preact = require("preact");

var EMPTY$1 = {};

function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
      c = url.match(reg),
      matches = {},
      ret;

  if (c && c[1]) {
    var p = c[1].split('&');

    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }

  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);

  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
          flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
          plus = ~flags.indexOf('+'),
          star = ~flags.indexOf('*'),
          val = url[i$1] || '';

      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }

      matches[param] = decodeURIComponent(val);

      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }

  if (opts.default !== true && ret === false) {
    return false;
  }

  return matches;
}

function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
} // filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.


function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}

function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}

var customHistory = null;
var ROUTERS = [];
var subscribers = [];
exports.subscribers = subscribers;
var EMPTY = {};

function setUrl(url, type) {
  if (type === void 0) type = 'push';

  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}

function getCurrentUrl() {
  var url;

  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }

  return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
  if (replace === void 0) replace = false;

  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  } // only push URL into history if we can handle it


  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }

  return routeTo(url);
}
/** Check if the given URL can be handled by any router instances. */


function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }

  return false;
}
/** Tell all router instances to handle the given URL.  */


function routeTo(url) {
  var didRoute = false;

  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }

  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }

  return didRoute;
}

function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }

  var href = node.getAttribute('href'),
      target = node.getAttribute('target'); // ignore links with targets and non-path URLs

  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  } // attempt to route, if no match simply cede control to browser


  return route(href);
}

function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}

function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }

    if (e.stopPropagation) {
      e.stopPropagation();
    }

    e.preventDefault();
  }

  return false;
}

function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  var t = e.target;

  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      } // if link is handled by the router, prevent browser defaults


      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }

  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }

    addEventListener('click', delegateLinkHandler);
  }

  eventListenersInitialized = true;
}

var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);

    if (props.history) {
      customHistory = props.history;
    }

    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }

  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;

  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }

    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };
  /** Check if the given URL can be matched against any children */


  Router.prototype.canRoute = function canRoute(url) {
    var children = (0, _preact.toChildArray)(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };
  /** Re-render children with a new URL to match against. */


  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url); // trigger a manual re-route if we're not in the middle of an update:

    if (!this.updating) {
      this.forceUpdate();
    }

    return didRoute;
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };

  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;

    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }

    this.updating = false;
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }

    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };

  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };

  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };

  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);

      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return (0, _preact.cloneElement)(vnode, newProps);
        }

        return vnode;
      }
    }).filter(Boolean);
  };

  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren((0, _preact.toChildArray)(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;

    if (url !== previous) {
      this.previousUrl = url;

      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }

    return current;
  };

  return Router;
}(_preact.Component);

exports.Router = Router;

var Link = function (props) {
  return (0, _preact.createElement)('a', assign({
    onClick: handleLinkClick
  }, props));
};

exports.Link = Link;

var Route = function (props) {
  return (0, _preact.createElement)(props.component, props);
};

exports.Route = Route;
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;
var _default = Router;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/styles/colors.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  black: '#000',
  white: '#fff',
  black80: 'rgba(0, 0, 0, 0.8)'
};
exports.default = _default;
},{}],"src/styles/font.ts":[function(require,module,exports) {
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
},{}],"src/assets/img1.jpg":[function(require,module,exports) {
module.exports = "/img1.114da24e.jpg";
},{}],"src/assets/glance-logo.svg":[function(require,module,exports) {
module.exports = "/glance-logo.b5fbdd63.svg";
},{}],"src/components/glance_block.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _goober = require("goober");

var _glanceLogo = _interopRequireDefault(require("../assets/glance-logo.svg"));

var _font = _interopRequireDefault(require("../styles/font"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlanceBLock = (0, _goober.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 10px 16px;\n    position: absolute;\n    left: 0;\n    bottom: 8%;\n    width: 85%;\n    height: 61px;\n    backdrop-filter: blur(10px);\n    border-radius: 0 16px 16px 0;\n    background: rgba(163, 160, 159, 0.5);\n    display: flex;\n    justify-content:space-between;\n    align-items: center;\n    z-index: 5;\n"])));
var leftContent = (0, _goober.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    flex-basis: 60%;\n    height:100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"])));
var text = (0, _goober.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n    line-height:18px;\n    letter-spacing: 0.3px;\n"])), _font.default.fontBase, _font.default.fontWtLight);
var callToAction = (0, _goober.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding:  8px;\n    flex-basis: 30%;\n    font-size: ", ";\n    font-weight: ", ";\n    border-radius: 8px;\n    background-color: rgba(26, 25, 25, 0.4);\n    text-align: center;\n    max-width: 150px;\n    text-decoration: none;\n    & .know_more {\n        text-decoration: none;\n        color: #fff;\n    }\n    &:active {\n        transform: translateY(1px);\n        box-shadow: 1px 1px 5px rgba(163, 163, 163, 0.521), -1px -1px 5px rgba(163, 163, 163, 0.521);\n    }\n"])), _font.default.fontBase, _font.default.fontWtNormal);
var glanceLogo = (0, _goober.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    /* filter: drop-shadow(0px 0px 0px #ffffff); */\n"])));

var Glance_block = function Glance_block() {
  return (0, _preact.h)("div", {
    className: GlanceBLock
  }, (0, _preact.h)("div", {
    className: leftContent
  }, (0, _preact.h)("div", {
    className: text
  }, "What new things do you want to discover daily?"), (0, _preact.h)("div", {
    className: glanceLogo
  }, (0, _preact.h)("img", {
    src: _glanceLogo.default,
    alt: "glance logo",
    height: "15"
  }))), (0, _preact.h)("div", {
    className: callToAction
  }, (0, _preact.h)("a", {
    className: "know_more",
    href: "#"
  }, "KNOW MORE")));
};

var _default = Glance_block;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","goober":"node_modules/goober/dist/goober.esm.js","../assets/glance-logo.svg":"src/assets/glance-logo.svg","../styles/font":"src/styles/font.ts"}],"src/components/onboarding_screen_1.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _goober = require("goober");

var _preact = require("preact");

var _colors = _interopRequireDefault(require("../styles/colors"));

var _font = _interopRequireDefault(require("../styles/font"));

var _img = _interopRequireDefault(require("../assets/img1.jpg"));

var _glance_block = _interopRequireDefault(require("./glance_block"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _goober.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: ", ";\n"])), _colors.default.black, _img.default, _colors.default.white, _font.default.fontLarge);
var overlayTop = (0, _goober.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    top:0;\n    left:0;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n    opacity: 0.4;\n    z-index: 3;\n    height: 240px;\n    width:100%;\n"])));
var overlayBottom = (0, _goober.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: absolute;\n    bottom:0;\n    left:0;\n    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n    opacity: 0.4;\n    z-index: 3;\n    height: 240px;\n    width:100%;\n"])));

var App = function App() {
  return (0, _preact.h)("div", {
    className: Container
  }, (0, _preact.h)("div", {
    className: overlayTop
  }), (0, _preact.h)(_glance_block.default, null), (0, _preact.h)("div", {
    className: overlayBottom
  }));
};

var _default = App;
exports.default = _default;
},{"goober":"node_modules/goober/dist/goober.esm.js","preact":"node_modules/preact/dist/preact.module.js","../styles/colors":"src/styles/colors.ts","../styles/font":"src/styles/font.ts","../assets/img1.jpg":"src/assets/img1.jpg","./glance_block":"src/components/glance_block.tsx"}],"src/assets/Arnold.gif":[function(require,module,exports) {
module.exports = "/Arnold.75a79501.gif";
},{}],"src/assets/right_arrow_white.png":[function(require,module,exports) {
module.exports = "/right_arrow_white.31c8faeb.png";
},{}],"src/assets/glance_logo_pink.svg":[function(require,module,exports) {
module.exports = "/glance_logo_pink.b27d2ba4.svg";
},{}],"src/assets/languageOptions/hindi.webp":[function(require,module,exports) {
module.exports = "/hindi.50439d2d.webp";
},{}],"src/assets/languageOptions/tamil.webp":[function(require,module,exports) {
module.exports = "/tamil.50ec8bbb.webp";
},{}],"src/assets/languageOptions/bangla.webp":[function(require,module,exports) {
module.exports = "/bangla.9b81b81a.webp";
},{}],"src/assets/languageOptions/english_on.webp":[function(require,module,exports) {
module.exports = "/english_on.383ed020.webp";
},{}],"src/assets/languageOptions/kannada.webp":[function(require,module,exports) {
module.exports = "/kannada.3e8a39f5.webp";
},{}],"src/assets/languageOptions/marathi.webp":[function(require,module,exports) {
module.exports = "/marathi.ccd0323a.webp";
},{}],"src/assets/languageOptions/telugu.webp":[function(require,module,exports) {
module.exports = "/telugu.2436b766.webp";
},{}],"src/languages/Languages.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hindi = _interopRequireDefault(require("../assets/languageOptions/hindi.webp"));

var _tamil = _interopRequireDefault(require("../assets/languageOptions/tamil.webp"));

var _bangla = _interopRequireDefault(require("../assets/languageOptions/bangla.webp"));

var _english_on = _interopRequireDefault(require("../assets/languageOptions/english_on.webp"));

var _kannada = _interopRequireDefault(require("../assets/languageOptions/kannada.webp"));

var _marathi = _interopRequireDefault(require("../assets/languageOptions/marathi.webp"));

var _telugu = _interopRequireDefault(require("../assets/languageOptions/telugu.webp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LanguageData = [{
  name: 'tamil',
  url: _tamil.default
}, {
  name: 'Kannada',
  url: _kannada.default
}, {
  name: 'Bangla',
  url: _bangla.default
}, {
  name: 'Telugu',
  url: _telugu.default
}, {
  name: 'Hindi',
  url: _hindi.default
}, {
  name: 'marathi',
  url: _marathi.default
}, {
  name: 'English',
  url: _english_on.default
}];
var _default = LanguageData;
exports.default = _default;
},{"../assets/languageOptions/hindi.webp":"src/assets/languageOptions/hindi.webp","../assets/languageOptions/tamil.webp":"src/assets/languageOptions/tamil.webp","../assets/languageOptions/bangla.webp":"src/assets/languageOptions/bangla.webp","../assets/languageOptions/english_on.webp":"src/assets/languageOptions/english_on.webp","../assets/languageOptions/kannada.webp":"src/assets/languageOptions/kannada.webp","../assets/languageOptions/marathi.webp":"src/assets/languageOptions/marathi.webp","../assets/languageOptions/telugu.webp":"src/assets/languageOptions/telugu.webp"}],"src/components/lang_overlay.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _goober = require("goober");

var _Languages = _interopRequireDefault(require("../languages/Languages"));

var _colors = _interopRequireDefault(require("../styles/colors"));

var _font = _interopRequireDefault(require("../styles/font"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LanguagesOverlay = function LanguagesOverlay() {
  console.log(_Languages.default);
  var LanguageOverlay = (0, _goober.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: absolute;\n        top: 50%;\n        left:0;\n        height: 50vh;\n        width: 100vw;\n        display: flex;\n        background-color: ", ";\n        z-index: 2;\n        display:flex;\n        flex-direction:column;\n    "])), _colors.default.black); //     const NextBtn: string = css`
  //         padding: 8px 18px;
  //         width: 65px;
  //         height: 35px;
  //         background-color: ${colors.black80};
  //         color: ${colors.white};
  //         border-radius: 40px;
  //         position: absolute;
  //         top:50%;
  //         left: 50%;
  //         transform: translate(-50%, -50%);
  //         z-index: 3;
  //         display: flex;
  //         justify-content:center;
  //         align-items: center;
  //         /* box-shadow: 0px 2px 4px rgba(43, 42, 42, 0.3); */
  //         box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), inset 0px -1px 4px rgba(255, 255, 255, 0.205), inset 0px 2px 2px rgba(255, 255, 255, 0.253);
  //         /* backdrop-filter: blur(0px); */
  //         display: flex;
  //         justify-content: space-between;
  // `

  var chooseLang = (0, _goober.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        margin: 2vh auto 0 auto;\n        text-align: center;\n    "])));
  var chooseLang__Title = (0, _goober.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        font-size: 18px;\n        line-height: 24px;\n        letter-spacing: 0.3px;\n    "])));
  var chooseLang__Text = (0, _goober.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        display: block;\n        font-size: 14px;\n        font-weight: ", ";\n        color: rgba(255, 255, 255, 0.4);\n    "])), _font.default.fontWtLight);
  var languageTilesContainer = (0, _goober.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        max-height: 75%;\n        width: 100%;\n        display: flex;\n        flex-wrap: wrap;\n        overflow-y: scroll;\n        &::-webkit-scrollbar {\n                display: none;\n            }\n\n    "])));
  var languageTile = (0, _goober.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        width: 50%;\n        height: 50%;\n        background-color: ", ";\n        display: flex;\n        justify-content:center;\n        align-items: center;\n\n    "])), _colors.default.black);
  return (0, _preact.h)("div", {
    className: LanguageOverlay
  }, (0, _preact.h)("div", {
    className: chooseLang
  }, (0, _preact.h)("p", {
    className: chooseLang__Title
  }, "Choose Languages ", (0, _preact.h)("span", {
    className: chooseLang__Text
  }, "to see content of your choice"))), (0, _preact.h)("div", {
    className: languageTilesContainer
  }, _Languages.default.map(function (item, id) {
    return (0, _preact.h)("div", {
      className: languageTile,
      key: id
    }, (0, _preact.h)("img", {
      src: item.url,
      alt: item.name,
      height: "125"
    }));
  })));
};

var _default = LanguagesOverlay;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","goober":"node_modules/goober/dist/goober.esm.js","../languages/Languages":"src/languages/Languages.tsx","../styles/colors":"src/styles/colors.ts","../styles/font":"src/styles/font.ts"}],"src/components/language_input.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _goober = require("goober");

var _colors = _interopRequireDefault(require("../styles/colors"));

var _font = _interopRequireDefault(require("../styles/font"));

var _Arnold = _interopRequireDefault(require("../assets/Arnold.gif"));

var _right_arrow_white = _interopRequireDefault(require("../assets/right_arrow_white.png"));

var _glance_logo_pink = _interopRequireDefault(require("../assets/glance_logo_pink.svg"));

var _lang_overlay = _interopRequireDefault(require("./lang_overlay"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectLanguages = function SelectLanguages() {
  var Container = (0, _goober.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["       \n        background-image: url(", ");\n        background-size: cover;\n        background-position: top;\n        background-repeat: no-repeat;\n        height: 65%;\n        color: ", ";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: ", ";\n        "])), _Arnold.default, _colors.default.white, _font.default.fontLarge);
  var NextBtn = (0, _goober.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        padding: 8px 18px;\n        width: 65px;\n        height: 35px;\n        background-color: ", ";\n        color: ", ";\n        border-radius: 40px;\n        position: absolute;\n        top:50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 3;\n        display: flex;\n        justify-content:center;\n        align-items: center;\n        /* box-shadow: 0px 2px 4px rgba(43, 42, 42, 0.3); */\n        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), inset 0px -1px 4px rgba(255, 255, 255, 0.205), inset 0px 2px 2px rgba(255, 255, 255, 0.253);\n        /* backdrop-filter: blur(0px); */\n        display: flex;\n        justify-content: space-between;\n    "])), _colors.default.black80, _colors.default.white);
  var glanceLogoTop = (0, _goober.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        position: absolute;\n        top: 4.75vh;\n        left: 3.5vw;\n    "])));
  return (0, _preact.h)("div", {
    className: Container
  }, (0, _preact.h)("div", {
    className: glanceLogoTop
  }, " ", (0, _preact.h)("img", {
    src: _glance_logo_pink.default,
    alt: "glance logo pink"
  }), " "), (0, _preact.h)(_lang_overlay.default, null), (0, _preact.h)("div", {
    className: NextBtn
  }, (0, _preact.h)("span", null, "Next"), " ", (0, _preact.h)("img", {
    src: _right_arrow_white.default,
    alt: "right arrow",
    height: "14"
  })));
};

var _default = SelectLanguages;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","goober":"node_modules/goober/dist/goober.esm.js","../styles/colors":"src/styles/colors.ts","../styles/font":"src/styles/font.ts","../assets/Arnold.gif":"src/assets/Arnold.gif","../assets/right_arrow_white.png":"src/assets/right_arrow_white.png","../assets/glance_logo_pink.svg":"src/assets/glance_logo_pink.svg","./lang_overlay":"src/components/lang_overlay.tsx"}],"src/app.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _preactRouter = _interopRequireDefault(require("preact-router"));

var _onboarding_screen_ = _interopRequireDefault(require("./components/onboarding_screen_1"));

var _language_input = _interopRequireDefault(require("./components/language_input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return (0, _preact.h)(_preactRouter.default, null, (0, _preact.h)(_onboarding_screen_.default, {
    path: "/"
  }), (0, _preact.h)(_language_input.default, {
    path: "/lang"
  }));
};

var _default = App;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","preact-router":"node_modules/preact-router/dist/preact-router.es.js","./components/onboarding_screen_1":"src/components/onboarding_screen_1.tsx","./components/language_input":"src/components/language_input.tsx"}],"src/styles/globals.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _font = _interopRequireDefault(require("./font"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\nbody {\n  margin: 0;\n}\nmain {\n  display: block;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\na {\n  background-color: transparent;\n}\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\nimg {\n  border-style: none;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\nprogress {\n  vertical-align: baseline;\n}\ntextarea {\n  overflow: auto;\n}\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\ndetails {\n  display: block;\n}\nsummary {\n  display: list-item;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none;\n}\n\nhtml, body {\n    font-family: ".concat(_font.default.primaryFontFamily, ";\n    box-sizing: border-box;\n}\nhtml, body, #root {\n    height: 100%;\n    box-sizing: border-box;\n}\n\n");

exports.default = _default;
},{"./font":"src/styles/font.ts"}],"src/index.tsx":[function(require,module,exports) {
"use strict";

var _goober = require("goober");

var _preact = require("preact");

var _app = _interopRequireDefault(require("./app"));

var _globals = _interopRequireDefault(require("./styles/globals"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Must be the first import
if ("development" === 'development') {
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
},{"preact/debug":"node_modules/preact/debug/dist/debug.module.js","goober":"node_modules/goober/dist/goober.esm.js","preact":"node_modules/preact/dist/preact.module.js","./app":"src/app.tsx","./styles/globals":"src/styles/globals.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54999" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.tsx"], null)
//# sourceMappingURL=/src.fc45d0fd.js.map