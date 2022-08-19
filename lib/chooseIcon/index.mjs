import { getCurrentScope as F3, onScopeDispose as b3, ref as k, unref as v, watch as y, defineComponent as l, openBlock as c, createElementBlock as f, createElementVNode as g, warn as D3, getCurrentInstance as f3, inject as q3, computed as x, provide as P3, mergeProps as T3, renderSlot as F, normalizeClass as C, createVNode as e, Transition as z3, withCtx as V, withDirectives as x3, toDisplayString as W, vShow as C3, onMounted as R3, resolveComponent as A, createBlock as i, normalizeStyle as O3, createCommentVNode as D, resolveDynamicComponent as H3, Fragment as E, withModifiers as E3, isVNode as L, render as p3, isRef as I3, renderList as N3 } from "vue";
const $3 = (t) => t.replace(/(A-Z)G/, "-$1").toLocaleLowerCase();
function U3(t) {
  for (var o = -1, n = t == null ? 0 : t.length, s = {}; ++o < n; ) {
    var r = t[o];
    s[r[0]] = r[1];
  }
  return s;
}
function M3(t) {
  return F3() ? (b3(t), !0) : !1;
}
const T = typeof window < "u", q = (t) => typeof t == "number", G3 = (t) => typeof t == "string", O = () => {
};
function j3(t, o, n = {}) {
  const {
    immediate: s = !0
  } = n, r = k(!1);
  let a = null;
  function $() {
    a && (clearTimeout(a), a = null);
  }
  function h() {
    r.value = !1, $();
  }
  function d(...m) {
    $(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, t(...m);
    }, v(o));
  }
  return s && (r.value = !0, T && d()), M3(h), {
    isPending: r,
    start: d,
    stop: h
  };
}
function W3(t) {
  var o;
  const n = v(t);
  return (o = n == null ? void 0 : n.$el) != null ? o : n;
}
const K3 = T ? window : void 0;
function Z3(...t) {
  let o, n, s, r;
  if (G3(t[0]) ? ([n, s, r] = t, o = K3) : [o, n, s, r] = t, !o)
    return O;
  let a = O;
  const $ = y(() => W3(o), (d) => {
    a(), d && (d.addEventListener(n, s, r), a = () => {
      d.removeEventListener(n, s, r), a = O;
    });
  }, { immediate: !0, flush: "post" }), h = () => {
    $(), a();
  };
  return M3(h), h;
}
const I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, N = "__vueuse_ssr_handlers__";
I[N] = I[N] || {};
I[N];
var h3, _3;
T && (window == null ? void 0 : window.navigator) && ((h3 = window == null ? void 0 : window.navigator) == null ? void 0 : h3.platform) && /iP(ad|hone|od)/.test((_3 = window == null ? void 0 : window.navigator) == null ? void 0 : _3.platform);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const J3 = Object.prototype.hasOwnProperty, d3 = (t, o) => J3.call(t, o), Q3 = (t) => typeof t == "function", S = (t) => typeof t == "string", U = (t) => t !== null && typeof t == "object", X3 = (t) => t === void 0, u3 = (t) => typeof Element > "u" ? !1 : t instanceof Element, v3 = (t) => Object.keys(t);
class Y3 extends Error {
  constructor(o) {
    super(o), this.name = "ElementPlusError";
  }
}
function K(t, o) {
  if (process.env.NODE_ENV !== "production") {
    const n = S(t) ? new Y3(`[${t}] ${o}`) : t;
    console.warn(n);
  }
}
const tt = "utils/dom/style";
function et(t, o = "px") {
  if (!t)
    return "";
  if (S(t))
    return t;
  if (q(t))
    return `${t}${o}`;
  K(tt, "binding value must be a string or number");
}
var b = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [s, r] of o)
    n[s] = r;
  return n;
};
const ot = l({
  name: "CircleCloseFilled"
}), nt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, st = /* @__PURE__ */ g("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), rt = [
  st
];
function at(t, o, n, s, r, a) {
  return c(), f("svg", nt, rt);
}
var V3 = /* @__PURE__ */ b(ot, [["render", at]]);
const ct = l({
  name: "Close"
}), lt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, it = /* @__PURE__ */ g("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), pt = [
  it
];
function $t(t, o, n, s, r, a) {
  return c(), f("svg", lt, pt);
}
var ht = /* @__PURE__ */ b(ct, [["render", $t]]);
const _t = l({
  name: "InfoFilled"
}), dt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ut = /* @__PURE__ */ g("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), vt = [
  ut
];
function mt(t, o, n, s, r, a) {
  return c(), f("svg", dt, vt);
}
var k3 = /* @__PURE__ */ b(_t, [["render", mt]]);
const wt = l({
  name: "SuccessFilled"
}), gt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ft = /* @__PURE__ */ g("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), zt = [
  ft
];
function xt(t, o, n, s, r, a) {
  return c(), f("svg", gt, zt);
}
var B3 = /* @__PURE__ */ b(wt, [["render", xt]]);
const Ct = l({
  name: "WarningFilled"
}), Ht = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mt = /* @__PURE__ */ g("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), Vt = [
  Mt
];
function kt(t, o, n, s, r, a) {
  return c(), f("svg", Ht, Vt);
}
var L3 = /* @__PURE__ */ b(Ct, [["render", kt]]);
const G = Symbol(), m3 = "__elPropsReservedKey";
function Bt(t, o) {
  if (!U(t) || !!t[m3])
    return t;
  const { values: n, required: s, default: r, type: a, validator: $ } = t, h = n || $ ? (m) => {
    let u = !1, p = [];
    if (n && (p = Array.from(n), d3(t, "default") && p.push(r), u || (u = p.includes(m))), $ && (u || (u = $(m))), !u && p.length > 0) {
      const _ = [...new Set(p)].map((z) => JSON.stringify(z)).join(", ");
      D3(`Invalid prop: validation failed${o ? ` for prop "${o}"` : ""}. Expected one of [${_}], got value ${JSON.stringify(m)}.`);
    }
    return u;
  } : void 0, d = {
    type: U(a) && Object.getOwnPropertySymbols(a).includes(G) ? a[G] : a,
    required: !!s,
    validator: h,
    [m3]: !0
  };
  return d3(t, "default") && (d.default = r), d;
}
const R = (t) => U3(Object.entries(t).map(([o, n]) => [
  o,
  Bt(n, o)
])), H = (t) => ({ [G]: t }), Lt = H([
  String,
  Object,
  Function
]), At = {
  Close: ht,
  SuccessFilled: B3,
  InfoFilled: k3,
  WarningFilled: L3,
  CircleCloseFilled: V3
}, w3 = {
  success: B3,
  warning: L3,
  error: V3,
  info: k3
}, A3 = (t, o) => {
  if (t.install = (n) => {
    for (const s of [t, ...Object.values(o != null ? o : {})])
      n.component(s.name, s);
  }, o)
    for (const [n, s] of Object.entries(o))
      t[n] = s;
  return t;
}, yt = (t, o) => (t.install = (n) => {
  t._context = n._context, n.config.globalProperties[o] = t;
}, t), St = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Ft = ["", "default", "small", "large"], y3 = Symbol(), P = k();
function Z(t, o = void 0) {
  const n = f3() ? q3(y3, P) : P;
  return t ? x(() => {
    var s, r;
    return (r = (s = n.value) == null ? void 0 : s[t]) != null ? r : o;
  }) : n;
}
const bt = (t, o, n = !1) => {
  var s;
  const r = !!f3(), a = r ? Z() : void 0, $ = (s = o == null ? void 0 : o.provide) != null ? s : r ? P3 : void 0;
  if (!$) {
    K("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const h = x(() => {
    const d = v(t);
    return a != null && a.value ? Dt(a.value, d) : d;
  });
  return $(y3, h), (n || !P.value) && (P.value = h.value), h;
}, Dt = (t, o) => {
  var n;
  const s = [.../* @__PURE__ */ new Set([...v3(t), ...v3(o)])], r = {};
  for (const a of s)
    r[a] = (n = o[a]) != null ? n : t[a];
  return r;
}, qt = "el", Pt = "is-", M = (t, o, n, s, r) => {
  let a = `${t}-${o}`;
  return n && (a += `-${n}`), s && (a += `__${s}`), r && (a += `--${r}`), a;
}, J = (t) => {
  const o = Z("namespace"), n = x(() => o.value || qt);
  return {
    namespace: n,
    b: (p = "") => M(v(n), t, p, "", ""),
    e: (p) => p ? M(v(n), t, "", p, "") : "",
    m: (p) => p ? M(v(n), t, "", "", p) : "",
    be: (p, _) => p && _ ? M(v(n), t, p, _, "") : "",
    em: (p, _) => p && _ ? M(v(n), t, "", p, _) : "",
    bm: (p, _) => p && _ ? M(v(n), t, p, "", _) : "",
    bem: (p, _, z) => p && _ && z ? M(v(n), t, p, _, z) : "",
    is: (p, ..._) => {
      const z = _.length >= 1 ? _[0] : !0;
      return p && z ? `${Pt}${p}` : "";
    }
  };
}, g3 = k(0), Tt = () => {
  const t = Z("zIndex", 2e3), o = x(() => t.value + g3.value);
  return {
    initialZIndex: t,
    currentZIndex: o,
    nextZIndex: () => (g3.value++, o.value)
  };
};
var Q = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [s, r] of o)
    n[s] = r;
  return n;
};
const Rt = R({
  size: {
    type: H([Number, String])
  },
  color: {
    type: String
  }
}), Ot = {
  name: "ElIcon",
  inheritAttrs: !1
}, Et = /* @__PURE__ */ l({
  ...Ot,
  props: Rt,
  setup(t) {
    const o = t, n = J("icon"), s = x(() => !o.size && !o.color ? {} : {
      fontSize: X3(o.size) ? void 0 : et(o.size),
      "--color": o.color
    });
    return (r, a) => (c(), f("i", T3({
      class: v(n).b(),
      style: v(s)
    }, r.$attrs), [
      F(r.$slots, "default")
    ], 16));
  }
});
var It = /* @__PURE__ */ Q(Et, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Nt = A3(It), Ut = R({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), Gt = ["textContent"], jt = {
  name: "ElBadge"
}, Wt = /* @__PURE__ */ l({
  ...jt,
  props: Ut,
  setup(t, { expose: o }) {
    const n = t, s = J("badge"), r = x(() => n.isDot ? "" : q(n.value) && q(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return o({
      content: r
    }), (a, $) => (c(), f("div", {
      class: C(v(s).b())
    }, [
      F(a.$slots, "default"),
      e(z3, {
        name: `${v(s).namespace.value}-zoom-in-center`
      }, {
        default: V(() => [
          x3(g("sup", {
            class: C([
              v(s).e("content"),
              v(s).em("content", a.type),
              v(s).is("fixed", !!a.$slots.default),
              v(s).is("dot", a.isDot)
            ]),
            textContent: W(v(r))
          }, null, 10, Gt), [
            [C3, !a.hidden && (v(r) || v(r) === "0" || a.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var Kt = /* @__PURE__ */ Q(Wt, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const Zt = A3(Kt), j = {}, Jt = R({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: H(Object)
  },
  size: {
    type: String,
    values: Ft,
    default: ""
  },
  button: {
    type: H(Object)
  },
  experimentalFeatures: {
    type: H(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: H(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
l({
  name: "ElConfigProvider",
  props: Jt,
  setup(t, { slots: o }) {
    y(() => t.message, (s) => {
      Object.assign(j, s != null ? s : {});
    }, { immediate: !0, deep: !0 });
    const n = bt(t);
    return () => F(o, "default", { config: n == null ? void 0 : n.value });
  }
});
const S3 = ["success", "info", "warning", "error"], Qt = R({
  customClass: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: !1
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: !1
  },
  duration: {
    type: Number,
    default: 3e3
  },
  icon: {
    type: Lt,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: H([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  onClose: {
    type: H(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    values: S3,
    default: "info"
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  },
  grouping: {
    type: Boolean,
    default: !1
  },
  repeatNum: {
    type: Number,
    default: 1
  }
}), Xt = {
  destroy: () => !0
}, Yt = l({
  name: "ElMessage",
  components: {
    ElBadge: Zt,
    ElIcon: Nt,
    ...At
  },
  props: Qt,
  emits: Xt,
  setup(t) {
    const o = J("message"), n = k(!1), s = k(t.type ? t.type === "error" ? "danger" : t.type : "info");
    let r;
    const a = x(() => {
      const _ = t.type;
      return { [o.bm("icon", _)]: _ && w3[_] };
    }), $ = x(() => t.icon || w3[t.type] || ""), h = x(() => ({
      top: `${t.offset}px`,
      zIndex: t.zIndex
    }));
    function d() {
      t.duration > 0 && ({ stop: r } = j3(() => {
        n.value && u();
      }, t.duration));
    }
    function m() {
      r == null || r();
    }
    function u() {
      n.value = !1;
    }
    function p({ code: _ }) {
      _ === St.esc ? n.value && u() : d();
    }
    return R3(() => {
      d(), n.value = !0;
    }), y(() => t.repeatNum, () => {
      m(), d();
    }), Z3(document, "keydown", p), {
      ns: o,
      typeClass: a,
      iconComponent: $,
      customStyle: h,
      visible: n,
      badgeType: s,
      close: u,
      clearTimer: m,
      startTimer: d
    };
  }
}), t8 = ["id"], e8 = ["innerHTML"];
function o8(t, o, n, s, r, a) {
  const $ = A("el-badge"), h = A("el-icon"), d = A("close");
  return c(), i(z3, {
    name: t.ns.b("fade"),
    onBeforeLeave: t.onClose,
    onAfterLeave: o[2] || (o[2] = (m) => t.$emit("destroy"))
  }, {
    default: V(() => [
      x3(g("div", {
        id: t.id,
        class: C([
          t.ns.b(),
          { [t.ns.m(t.type)]: t.type && !t.icon },
          t.ns.is("center", t.center),
          t.ns.is("closable", t.showClose),
          t.customClass
        ]),
        style: O3(t.customStyle),
        role: "alert",
        onMouseenter: o[0] || (o[0] = (...m) => t.clearTimer && t.clearTimer(...m)),
        onMouseleave: o[1] || (o[1] = (...m) => t.startTimer && t.startTimer(...m))
      }, [
        t.repeatNum > 1 ? (c(), i($, {
          key: 0,
          value: t.repeatNum,
          type: t.badgeType,
          class: C(t.ns.e("badge"))
        }, null, 8, ["value", "type", "class"])) : D("v-if", !0),
        t.iconComponent ? (c(), i(h, {
          key: 1,
          class: C([t.ns.e("icon"), t.typeClass])
        }, {
          default: V(() => [
            (c(), i(H3(t.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : D("v-if", !0),
        F(t.$slots, "default", {}, () => [
          t.dangerouslyUseHTMLString ? (c(), f(E, { key: 1 }, [
            D(" Caution here, message could've been compromised, never use user's input as message "),
            g("p", {
              class: C(t.ns.e("content")),
              innerHTML: t.message
            }, null, 10, e8)
          ], 2112)) : (c(), f("p", {
            key: 0,
            class: C(t.ns.e("content"))
          }, W(t.message), 3))
        ]),
        t.showClose ? (c(), i(h, {
          key: 2,
          class: C(t.ns.e("closeBtn")),
          onClick: E3(t.close, ["stop"])
        }, {
          default: V(() => [
            e(d)
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : D("v-if", !0)
      ], 46, t8), [
        [C3, t.visible]
      ])
    ]),
    _: 3
  }, 8, ["name", "onBeforeLeave"]);
}
var n8 = /* @__PURE__ */ Q(Yt, [["render", o8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
const w = [];
let s8 = 1;
const B = function(t = {}, o) {
  if (!T)
    return { close: () => {
    } };
  if (q(j.max) && w.length >= j.max)
    return { close: () => {
    } };
  if (!L(t) && U(t) && t.grouping && !L(t.message) && w.length) {
    const p = w.find((_) => {
      var z, l3, i3;
      return `${(l3 = (z = _.vm.props) == null ? void 0 : z.message) != null ? l3 : ""}` == `${(i3 = t.message) != null ? i3 : ""}`;
    });
    if (p)
      return p.vm.component.props.repeatNum += 1, p.vm.component.props.type = (t == null ? void 0 : t.type) || "info", {
        close: () => u.component.proxy.visible = !1
      };
  }
  (S(t) || L(t)) && (t = { message: t });
  let n = t.offset || 20;
  w.forEach(({ vm: p }) => {
    var _;
    n += (((_ = p.el) == null ? void 0 : _.offsetHeight) || 0) + 16;
  }), n += 16;
  const { nextZIndex: s } = Tt(), r = `message_${s8++}`, a = t.onClose, $ = {
    zIndex: s(),
    ...t,
    offset: n,
    id: r,
    onClose: () => {
      r8(r, a);
    }
  };
  let h = document.body;
  u3(t.appendTo) ? h = t.appendTo : S(t.appendTo) && (h = document.querySelector(t.appendTo)), u3(h) || (K("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), h = document.body);
  const d = document.createElement("div");
  d.className = `container_${r}`;
  const m = $.message, u = e(n8, $, Q3(m) ? { default: m } : L(m) ? { default: () => m } : null);
  return u.appContext = o || B._context, u.props.onDestroy = () => {
    p3(null, d);
  }, p3(u, d), w.push({ vm: u }), h.appendChild(d.firstElementChild), {
    close: () => u.component.proxy.visible = !1
  };
};
S3.forEach((t) => {
  B[t] = (o = {}, n) => ((S(o) || L(o)) && (o = {
    message: o
  }), B({
    ...o,
    type: t
  }, n));
});
function r8(t, o) {
  const n = w.findIndex(({ vm: $ }) => t === $.component.props.id);
  if (n === -1)
    return;
  const { vm: s } = w[n];
  if (!s)
    return;
  o == null || o(s);
  const r = s.el.offsetHeight;
  w.splice(n, 1);
  const a = w.length;
  if (!(a < 1))
    for (let $ = n; $ < a; $++) {
      const h = Number.parseInt(w[$].vm.el.style.top, 10) - r - 16;
      w[$].vm.component.props.offset = h;
    }
}
function a8() {
  var t;
  for (let o = w.length - 1; o >= 0; o--) {
    const n = w[o].vm.component;
    (t = n == null ? void 0 : n.proxy) == null || t.close();
  }
}
B.closeAll = a8;
B._context = null;
const c8 = yt(B, "$message"), l8 = (t) => {
  let o = document.createElement("input");
  o.value = t, document.body.appendChild(o), o.select(), document.execCommand("Copy"), document.body.removeChild(o), c8.success("\u590D\u5236\u6210\u529F");
};
var X = l({
  name: "Aim"
});
const i8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, p8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), $8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
}, null, -1);
function h8(t, o, n, s, r, a) {
  return c(), i("svg", i8, [
    p8,
    $8
  ]);
}
X.render = h8;
X.__file = "packages/components/Aim.vue";
const _8 = X;
var Y = l({
  name: "AddLocation"
});
const d8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, u8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), v8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), m8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
}, null, -1);
function w8(t, o, n, s, r, a) {
  return c(), i("svg", d8, [
    u8,
    v8,
    m8
  ]);
}
Y.render = w8;
Y.__file = "packages/components/AddLocation.vue";
const g8 = Y;
var t2 = l({
  name: "Apple"
});
const f8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, z8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1);
function x8(t, o, n, s, r, a) {
  return c(), i("svg", f8, [
    z8
  ]);
}
t2.render = x8;
t2.__file = "packages/components/Apple.vue";
const C8 = t2;
var e2 = l({
  name: "AlarmClock"
});
const H8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), V8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
}, null, -1);
function k8(t, o, n, s, r, a) {
  return c(), i("svg", H8, [
    M8,
    V8
  ]);
}
e2.render = k8;
e2.__file = "packages/components/AlarmClock.vue";
const B8 = e2;
var o2 = l({
  name: "ArrowDown"
});
const L8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, A8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1);
function y8(t, o, n, s, r, a) {
  return c(), i("svg", L8, [
    A8
  ]);
}
o2.render = y8;
o2.__file = "packages/components/ArrowDown.vue";
const S8 = o2;
var n2 = l({
  name: "ArrowDownBold"
});
const F8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, b8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1);
function D8(t, o, n, s, r, a) {
  return c(), i("svg", F8, [
    b8
  ]);
}
n2.render = D8;
n2.__file = "packages/components/ArrowDownBold.vue";
const q8 = n2;
var s2 = l({
  name: "ArrowLeft"
});
const P8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, T8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
function R8(t, o, n, s, r, a) {
  return c(), i("svg", P8, [
    T8
  ]);
}
s2.render = R8;
s2.__file = "packages/components/ArrowLeft.vue";
const O8 = s2;
var r2 = l({
  name: "ArrowLeftBold"
});
const E8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, I8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
}, null, -1);
function N8(t, o, n, s, r, a) {
  return c(), i("svg", E8, [
    I8
  ]);
}
r2.render = N8;
r2.__file = "packages/components/ArrowLeftBold.vue";
const U8 = r2;
var a2 = l({
  name: "ArrowRightBold"
});
const G8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, j8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1);
function W8(t, o, n, s, r, a) {
  return c(), i("svg", G8, [
    j8
  ]);
}
a2.render = W8;
a2.__file = "packages/components/ArrowRightBold.vue";
const K8 = a2;
var c2 = l({
  name: "ArrowUp"
});
const Z8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, J8 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1);
function Q8(t, o, n, s, r, a) {
  return c(), i("svg", Z8, [
    J8
  ]);
}
c2.render = Q8;
c2.__file = "packages/components/ArrowUp.vue";
const X8 = c2;
var l2 = l({
  name: "Back"
});
const Y8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, te = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1), ee = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1);
function oe(t, o, n, s, r, a) {
  return c(), i("svg", Y8, [
    te,
    ee
  ]);
}
l2.render = oe;
l2.__file = "packages/components/Back.vue";
const ne = l2;
var i2 = l({
  name: "Bell"
});
const se = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, re = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1), ae = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1), ce = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1);
function le(t, o, n, s, r, a) {
  return c(), i("svg", se, [
    re,
    ae,
    ce
  ]);
}
i2.render = le;
i2.__file = "packages/components/Bell.vue";
const ie = i2;
var p2 = l({
  name: "Baseball"
});
const pe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $e = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1), he = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
}, null, -1);
function _e(t, o, n, s, r, a) {
  return c(), i("svg", pe, [
    $e,
    he
  ]);
}
p2.render = _e;
p2.__file = "packages/components/Baseball.vue";
const de = p2;
var $2 = l({
  name: "Bicycle"
});
const ue = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ve = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1), me = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), we = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1), ge = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"
}, null, -1), fe = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"
}, null, -1);
function ze(t, o, n, s, r, a) {
  return c(), i("svg", ue, [
    ve,
    me,
    we,
    ge,
    fe
  ]);
}
$2.render = ze;
$2.__file = "packages/components/Bicycle.vue";
const xe = $2;
var h2 = l({
  name: "BellFilled"
});
const Ce = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, He = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
}, null, -1);
function Me(t, o, n, s, r, a) {
  return c(), i("svg", Ce, [
    He
  ]);
}
h2.render = Me;
h2.__file = "packages/components/BellFilled.vue";
const Ve = h2;
var _2 = l({
  name: "Basketball"
});
const ke = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Be = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
}, null, -1);
function Le(t, o, n, s, r, a) {
  return c(), i("svg", ke, [
    Be
  ]);
}
_2.render = Le;
_2.__file = "packages/components/Basketball.vue";
const Ae = _2;
var d2 = l({
  name: "Bottom"
});
const ye = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Se = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
}, null, -1);
function Fe(t, o, n, s, r, a) {
  return c(), i("svg", ye, [
    Se
  ]);
}
d2.render = Fe;
d2.__file = "packages/components/Bottom.vue";
const be = d2;
var u2 = l({
  name: "Box"
});
const De = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qe = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1), Pe = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1), Te = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
}, null, -1);
function Re(t, o, n, s, r, a) {
  return c(), i("svg", De, [
    qe,
    Pe,
    Te
  ]);
}
u2.render = Re;
u2.__file = "packages/components/Box.vue";
const Oe = u2;
var v2 = l({
  name: "Briefcase"
});
const Ee = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ie = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
}, null, -1);
function Ne(t, o, n, s, r, a) {
  return c(), i("svg", Ee, [
    Ie
  ]);
}
v2.render = Ne;
v2.__file = "packages/components/Briefcase.vue";
const Ue = v2;
var m2 = l({
  name: "BrushFilled"
});
const Ge = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, je = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
}, null, -1);
function We(t, o, n, s, r, a) {
  return c(), i("svg", Ge, [
    je
  ]);
}
m2.render = We;
m2.__file = "packages/components/BrushFilled.vue";
const Ke = m2;
var w2 = l({
  name: "Bowl"
});
const Ze = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Je = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
}, null, -1);
function Qe(t, o, n, s, r, a) {
  return c(), i("svg", Ze, [
    Je
  ]);
}
w2.render = Qe;
w2.__file = "packages/components/Bowl.vue";
const Xe = w2;
var g2 = l({
  name: "Avatar"
});
const Ye = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, to = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
}, null, -1);
function eo(t, o, n, s, r, a) {
  return c(), i("svg", Ye, [
    to
  ]);
}
g2.render = eo;
g2.__file = "packages/components/Avatar.vue";
const oo = g2;
var f2 = l({
  name: "Brush"
});
const no = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, so = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
}, null, -1);
function ro(t, o, n, s, r, a) {
  return c(), i("svg", no, [
    so
  ]);
}
f2.render = ro;
f2.__file = "packages/components/Brush.vue";
const ao = f2;
var z2 = l({
  name: "Burger"
});
const co = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lo = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
}, null, -1);
function io(t, o, n, s, r, a) {
  return c(), i("svg", co, [
    lo
  ]);
}
z2.render = io;
z2.__file = "packages/components/Burger.vue";
const po = z2;
var x2 = l({
  name: "Camera"
});
const $o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ho = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1);
function _o(t, o, n, s, r, a) {
  return c(), i("svg", $o, [
    ho
  ]);
}
x2.render = _o;
x2.__file = "packages/components/Camera.vue";
const uo = x2;
var C2 = l({
  name: "BottomLeft"
});
const vo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mo = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1), wo = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
}, null, -1);
function go(t, o, n, s, r, a) {
  return c(), i("svg", vo, [
    mo,
    wo
  ]);
}
C2.render = go;
C2.__file = "packages/components/BottomLeft.vue";
const fo = C2;
var H2 = l({
  name: "Calendar"
});
const zo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xo = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1);
function Co(t, o, n, s, r, a) {
  return c(), i("svg", zo, [
    xo
  ]);
}
H2.render = Co;
H2.__file = "packages/components/Calendar.vue";
const Ho = H2;
var M2 = l({
  name: "CaretBottom"
});
const Mo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vo = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m192 384 320 384 320-384z"
}, null, -1);
function ko(t, o, n, s, r, a) {
  return c(), i("svg", Mo, [
    Vo
  ]);
}
M2.render = ko;
M2.__file = "packages/components/CaretBottom.vue";
const Bo = M2;
var V2 = l({
  name: "CaretLeft"
});
const Lo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ao = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1);
function yo(t, o, n, s, r, a) {
  return c(), i("svg", Lo, [
    Ao
  ]);
}
V2.render = yo;
V2.__file = "packages/components/CaretLeft.vue";
const So = V2;
var k2 = l({
  name: "CaretRight"
});
const Fo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bo = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1);
function Do(t, o, n, s, r, a) {
  return c(), i("svg", Fo, [
    bo
  ]);
}
k2.render = Do;
k2.__file = "packages/components/CaretRight.vue";
const qo = k2;
var B2 = l({
  name: "CaretTop"
});
const Po = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, To = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 320 192 704h639.936z"
}, null, -1);
function Ro(t, o, n, s, r, a) {
  return c(), i("svg", Po, [
    To
  ]);
}
B2.render = Ro;
B2.__file = "packages/components/CaretTop.vue";
const Oo = B2;
var L2 = l({
  name: "ChatDotSquare"
});
const Eo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Io = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), No = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1);
function Uo(t, o, n, s, r, a) {
  return c(), i("svg", Eo, [
    Io,
    No
  ]);
}
L2.render = Uo;
L2.__file = "packages/components/ChatDotSquare.vue";
const Go = L2;
var A2 = l({
  name: "Cellphone"
});
const jo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Wo = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1);
function Ko(t, o, n, s, r, a) {
  return c(), i("svg", jo, [
    Wo
  ]);
}
A2.render = Ko;
A2.__file = "packages/components/Cellphone.vue";
const Zo = A2;
var y2 = l({
  name: "ChatDotRound"
});
const Jo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qo = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), Xo = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1);
function Yo(t, o, n, s, r, a) {
  return c(), i("svg", Jo, [
    Qo,
    Xo
  ]);
}
y2.render = Yo;
y2.__file = "packages/components/ChatDotRound.vue";
const tn = y2;
var S2 = l({
  name: "ChatLineSquare"
});
const en = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, on = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), nn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1);
function sn(t, o, n, s, r, a) {
  return c(), i("svg", en, [
    on,
    nn
  ]);
}
S2.render = sn;
S2.__file = "packages/components/ChatLineSquare.vue";
const rn = S2;
var F2 = l({
  name: "ChatLineRound"
});
const an = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, cn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), ln = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1);
function pn(t, o, n, s, r, a) {
  return c(), i("svg", an, [
    cn,
    ln
  ]);
}
F2.render = pn;
F2.__file = "packages/components/ChatLineRound.vue";
const $n = F2;
var b2 = l({
  name: "ChatRound"
});
const hn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _n = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1);
function dn(t, o, n, s, r, a) {
  return c(), i("svg", hn, [
    _n
  ]);
}
b2.render = dn;
b2.__file = "packages/components/ChatRound.vue";
const un = b2;
var D2 = l({
  name: "Check"
});
const vn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1);
function wn(t, o, n, s, r, a) {
  return c(), i("svg", vn, [
    mn
  ]);
}
D2.render = wn;
D2.__file = "packages/components/Check.vue";
const gn = D2;
var q2 = l({
  name: "ChatSquare"
});
const fn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, zn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
function xn(t, o, n, s, r, a) {
  return c(), i("svg", fn, [
    zn
  ]);
}
q2.render = xn;
q2.__file = "packages/components/ChatSquare.vue";
const Cn = q2;
var P2 = l({
  name: "Cherry"
});
const Hn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Mn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
}, null, -1);
function Vn(t, o, n, s, r, a) {
  return c(), i("svg", Hn, [
    Mn
  ]);
}
P2.render = Vn;
P2.__file = "packages/components/Cherry.vue";
const kn = P2;
var T2 = l({
  name: "Chicken"
});
const Bn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ln = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
}, null, -1);
function An(t, o, n, s, r, a) {
  return c(), i("svg", Bn, [
    Ln
  ]);
}
T2.render = An;
T2.__file = "packages/components/Chicken.vue";
const yn = T2;
var R2 = l({
  name: "CircleCheckFilled"
});
const Sn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
function bn(t, o, n, s, r, a) {
  return c(), i("svg", Sn, [
    Fn
  ]);
}
R2.render = bn;
R2.__file = "packages/components/CircleCheckFilled.vue";
const Dn = R2;
var O2 = l({
  name: "CircleCheck"
});
const qn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Tn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1);
function Rn(t, o, n, s, r, a) {
  return c(), i("svg", qn, [
    Pn,
    Tn
  ]);
}
O2.render = Rn;
O2.__file = "packages/components/CircleCheck.vue";
const On = O2;
var E2 = l({
  name: "Checked"
});
const En = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, In = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
}, null, -1);
function Nn(t, o, n, s, r, a) {
  return c(), i("svg", En, [
    In
  ]);
}
E2.render = Nn;
E2.__file = "packages/components/Checked.vue";
const Un = E2;
var I2 = l({
  name: "CircleCloseFilled"
});
const Gn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1);
function Wn(t, o, n, s, r, a) {
  return c(), i("svg", Gn, [
    jn
  ]);
}
I2.render = Wn;
I2.__file = "packages/components/CircleCloseFilled.vue";
const Kn = I2;
var N2 = l({
  name: "CircleClose"
});
const Zn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Qn = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function Xn(t, o, n, s, r, a) {
  return c(), i("svg", Zn, [
    Jn,
    Qn
  ]);
}
N2.render = Xn;
N2.__file = "packages/components/CircleClose.vue";
const Yn = N2;
var U2 = l({
  name: "ArrowRight"
});
const ts = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, es = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
function os(t, o, n, s, r, a) {
  return c(), i("svg", ts, [
    es
  ]);
}
U2.render = os;
U2.__file = "packages/components/ArrowRight.vue";
const ns = U2;
var G2 = l({
  name: "CirclePlus"
});
const ss = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rs = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), as = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1), cs = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function ls(t, o, n, s, r, a) {
  return c(), i("svg", ss, [
    rs,
    as,
    cs
  ]);
}
G2.render = ls;
G2.__file = "packages/components/CirclePlus.vue";
const is = G2;
var j2 = l({
  name: "Clock"
});
const ps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $s = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), hs = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), _s = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1);
function ds(t, o, n, s, r, a) {
  return c(), i("svg", ps, [
    $s,
    hs,
    _s
  ]);
}
j2.render = ds;
j2.__file = "packages/components/Clock.vue";
const us = j2;
var W2 = l({
  name: "CloseBold"
});
const vs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ms = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
}, null, -1);
function ws(t, o, n, s, r, a) {
  return c(), i("svg", vs, [
    ms
  ]);
}
W2.render = ws;
W2.__file = "packages/components/CloseBold.vue";
const gs = W2;
var K2 = l({
  name: "Close"
});
const fs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, zs = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1);
function xs(t, o, n, s, r, a) {
  return c(), i("svg", fs, [
    zs
  ]);
}
K2.render = xs;
K2.__file = "packages/components/Close.vue";
const Cs = K2;
var Z2 = l({
  name: "Cloudy"
});
const Hs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ms = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1);
function Vs(t, o, n, s, r, a) {
  return c(), i("svg", Hs, [
    Ms
  ]);
}
Z2.render = Vs;
Z2.__file = "packages/components/Cloudy.vue";
const ks = Z2;
var J2 = l({
  name: "CirclePlusFilled"
});
const Bs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ls = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
}, null, -1);
function As(t, o, n, s, r, a) {
  return c(), i("svg", Bs, [
    Ls
  ]);
}
J2.render = As;
J2.__file = "packages/components/CirclePlusFilled.vue";
const ys = J2;
var Q2 = l({
  name: "CoffeeCup"
});
const Ss = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fs = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
}, null, -1);
function bs(t, o, n, s, r, a) {
  return c(), i("svg", Ss, [
    Fs
  ]);
}
Q2.render = bs;
Q2.__file = "packages/components/CoffeeCup.vue";
const Ds = Q2;
var X2 = l({
  name: "ColdDrink"
});
const qs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ps = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
}, null, -1);
function Ts(t, o, n, s, r, a) {
  return c(), i("svg", qs, [
    Ps
  ]);
}
X2.render = Ts;
X2.__file = "packages/components/ColdDrink.vue";
const Rs = X2;
var Y2 = l({
  name: "Coin"
});
const Os = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Es = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), Is = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), Ns = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
}, null, -1);
function Us(t, o, n, s, r, a) {
  return c(), i("svg", Os, [
    Es,
    Is,
    Ns
  ]);
}
Y2.render = Us;
Y2.__file = "packages/components/Coin.vue";
const Gs = Y2;
var t0 = l({
  name: "ArrowUpBold"
});
const js = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ws = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1);
function Ks(t, o, n, s, r, a) {
  return c(), i("svg", js, [
    Ws
  ]);
}
t0.render = Ks;
t0.__file = "packages/components/ArrowUpBold.vue";
const Zs = t0;
var e0 = l({
  name: "CollectionTag"
});
const Js = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qs = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
}, null, -1);
function Xs(t, o, n, s, r, a) {
  return c(), i("svg", Js, [
    Qs
  ]);
}
e0.render = Xs;
e0.__file = "packages/components/CollectionTag.vue";
const Ys = e0;
var o0 = l({
  name: "BottomRight"
});
const tr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, er = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1), or = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
}, null, -1);
function nr(t, o, n, s, r, a) {
  return c(), i("svg", tr, [
    er,
    or
  ]);
}
o0.render = nr;
o0.__file = "packages/components/BottomRight.vue";
const sr = o0;
var n0 = l({
  name: "Coffee"
});
const rr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ar = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
}, null, -1);
function cr(t, o, n, s, r, a) {
  return c(), i("svg", rr, [
    ar
  ]);
}
n0.render = cr;
n0.__file = "packages/components/Coffee.vue";
const lr = n0;
var s0 = l({
  name: "CameraFilled"
});
const ir = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
function $r(t, o, n, s, r, a) {
  return c(), i("svg", ir, [
    pr
  ]);
}
s0.render = $r;
s0.__file = "packages/components/CameraFilled.vue";
const hr = s0;
var r0 = l({
  name: "Collection"
});
const _r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1), ur = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
}, null, -1);
function vr(t, o, n, s, r, a) {
  return c(), i("svg", _r, [
    dr,
    ur
  ]);
}
r0.render = vr;
r0.__file = "packages/components/Collection.vue";
const mr = r0;
var a0 = l({
  name: "Cpu"
});
const wr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1), fr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
}, null, -1);
function zr(t, o, n, s, r, a) {
  return c(), i("svg", wr, [
    gr,
    fr
  ]);
}
a0.render = zr;
a0.__file = "packages/components/Cpu.vue";
const xr = a0;
var c0 = l({
  name: "Crop"
});
const Cr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1), Mr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
}, null, -1);
function Vr(t, o, n, s, r, a) {
  return c(), i("svg", Cr, [
    Hr,
    Mr
  ]);
}
c0.render = Vr;
c0.__file = "packages/components/Crop.vue";
const kr = c0;
var l0 = l({
  name: "Coordinate"
});
const Br = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Lr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1), Ar = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
function yr(t, o, n, s, r, a) {
  return c(), i("svg", Br, [
    Lr,
    Ar
  ]);
}
l0.render = yr;
l0.__file = "packages/components/Coordinate.vue";
const Sr = l0;
var i0 = l({
  name: "DArrowLeft"
});
const Fr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, br = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1);
function Dr(t, o, n, s, r, a) {
  return c(), i("svg", Fr, [
    br
  ]);
}
i0.render = Dr;
i0.__file = "packages/components/DArrowLeft.vue";
const qr = i0;
var p0 = l({
  name: "Compass"
});
const Pr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Rr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
}, null, -1);
function Or(t, o, n, s, r, a) {
  return c(), i("svg", Pr, [
    Tr,
    Rr
  ]);
}
p0.render = Or;
p0.__file = "packages/components/Compass.vue";
const Er = p0;
var $0 = l({
  name: "Connection"
});
const Ir = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Nr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1), Ur = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
}, null, -1);
function Gr(t, o, n, s, r, a) {
  return c(), i("svg", Ir, [
    Nr,
    Ur
  ]);
}
$0.render = Gr;
$0.__file = "packages/components/Connection.vue";
const jr = $0;
var h0 = l({
  name: "CreditCard"
});
const Wr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Kr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1), Zr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
}, null, -1);
function Jr(t, o, n, s, r, a) {
  return c(), i("svg", Wr, [
    Kr,
    Zr
  ]);
}
h0.render = Jr;
h0.__file = "packages/components/CreditCard.vue";
const Qr = h0;
var _0 = l({
  name: "DataBoard"
});
const Xr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Yr = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1), ta = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1), ea = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
}, null, -1);
function oa(t, o, n, s, r, a) {
  return c(), i("svg", Xr, [
    Yr,
    ta,
    ea
  ]);
}
_0.render = oa;
_0.__file = "packages/components/DataBoard.vue";
const na = _0;
var d0 = l({
  name: "DArrowRight"
});
const sa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ra = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1);
function aa(t, o, n, s, r, a) {
  return c(), i("svg", sa, [
    ra
  ]);
}
d0.render = aa;
d0.__file = "packages/components/DArrowRight.vue";
const ca = d0;
var u0 = l({
  name: "Dessert"
});
const la = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ia = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
}, null, -1);
function pa(t, o, n, s, r, a) {
  return c(), i("svg", la, [
    ia
  ]);
}
u0.render = pa;
u0.__file = "packages/components/Dessert.vue";
const $a = u0;
var v0 = l({
  name: "DeleteLocation"
});
const ha = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _a = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), da = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), ua = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1);
function va(t, o, n, s, r, a) {
  return c(), i("svg", ha, [
    _a,
    da,
    ua
  ]);
}
v0.render = va;
v0.__file = "packages/components/DeleteLocation.vue";
const ma = v0;
var m0 = l({
  name: "DCaret"
});
const wa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ga = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
}, null, -1);
function fa(t, o, n, s, r, a) {
  return c(), i("svg", wa, [
    ga
  ]);
}
m0.render = fa;
m0.__file = "packages/components/DCaret.vue";
const za = m0;
var w0 = l({
  name: "Delete"
});
const xa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ca = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1);
function Ha(t, o, n, s, r, a) {
  return c(), i("svg", xa, [
    Ca
  ]);
}
w0.render = Ha;
w0.__file = "packages/components/Delete.vue";
const Ma = w0;
var g0 = l({
  name: "Dish"
});
const Va = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ka = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
}, null, -1);
function Ba(t, o, n, s, r, a) {
  return c(), i("svg", Va, [
    ka
  ]);
}
g0.render = Ba;
g0.__file = "packages/components/Dish.vue";
const La = g0;
var f0 = l({
  name: "DishDot"
});
const Aa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ya = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
}, null, -1);
function Sa(t, o, n, s, r, a) {
  return c(), i("svg", Aa, [
    ya
  ]);
}
f0.render = Sa;
f0.__file = "packages/components/DishDot.vue";
const Fa = f0;
var z0 = l({
  name: "DocumentCopy"
});
const ba = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Da = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
}, null, -1);
function qa(t, o, n, s, r, a) {
  return c(), i("svg", ba, [
    Da
  ]);
}
z0.render = qa;
z0.__file = "packages/components/DocumentCopy.vue";
const Pa = z0;
var x0 = l({
  name: "Discount"
});
const Ta = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ra = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), Oa = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
function Ea(t, o, n, s, r, a) {
  return c(), i("svg", Ta, [
    Ra,
    Oa
  ]);
}
x0.render = Ea;
x0.__file = "packages/components/Discount.vue";
const Ia = x0;
var C0 = l({
  name: "DocumentChecked"
});
const Na = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ua = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
}, null, -1);
function Ga(t, o, n, s, r, a) {
  return c(), i("svg", Na, [
    Ua
  ]);
}
C0.render = Ga;
C0.__file = "packages/components/DocumentChecked.vue";
const ja = C0;
var H0 = l({
  name: "DocumentAdd"
});
const Wa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ka = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1);
function Za(t, o, n, s, r, a) {
  return c(), i("svg", Wa, [
    Ka
  ]);
}
H0.render = Za;
H0.__file = "packages/components/DocumentAdd.vue";
const Ja = H0;
var M0 = l({
  name: "DocumentRemove"
});
const Qa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xa = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
}, null, -1);
function Ya(t, o, n, s, r, a) {
  return c(), i("svg", Qa, [
    Xa
  ]);
}
M0.render = Ya;
M0.__file = "packages/components/DocumentRemove.vue";
const tc = M0;
var V0 = l({
  name: "DataAnalysis"
});
const ec = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
}, null, -1);
function nc(t, o, n, s, r, a) {
  return c(), i("svg", ec, [
    oc
  ]);
}
V0.render = nc;
V0.__file = "packages/components/DataAnalysis.vue";
const sc = V0;
var k0 = l({
  name: "DeleteFilled"
});
const rc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ac = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
}, null, -1);
function cc(t, o, n, s, r, a) {
  return c(), i("svg", rc, [
    ac
  ]);
}
k0.render = cc;
k0.__file = "packages/components/DeleteFilled.vue";
const lc = k0;
var B0 = l({
  name: "Download"
});
const ic = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1);
function $c(t, o, n, s, r, a) {
  return c(), i("svg", ic, [
    pc
  ]);
}
B0.render = $c;
B0.__file = "packages/components/Download.vue";
const hc = B0;
var L0 = l({
  name: "Drizzling"
});
const _c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
}, null, -1);
function uc(t, o, n, s, r, a) {
  return c(), i("svg", _c, [
    dc
  ]);
}
L0.render = uc;
L0.__file = "packages/components/Drizzling.vue";
const vc = L0;
var A0 = l({
  name: "Eleme"
});
const mc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
}, null, -1);
function gc(t, o, n, s, r, a) {
  return c(), i("svg", mc, [
    wc
  ]);
}
A0.render = gc;
A0.__file = "packages/components/Eleme.vue";
const fc = A0;
var y0 = l({
  name: "ElemeFilled"
});
const zc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
}, null, -1);
function Cc(t, o, n, s, r, a) {
  return c(), i("svg", zc, [
    xc
  ]);
}
y0.render = Cc;
y0.__file = "packages/components/ElemeFilled.vue";
const Hc = y0;
var S0 = l({
  name: "Edit"
});
const Mc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1), kc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1);
function Bc(t, o, n, s, r, a) {
  return c(), i("svg", Mc, [
    Vc,
    kc
  ]);
}
S0.render = Bc;
S0.__file = "packages/components/Edit.vue";
const Lc = S0;
var F0 = l({
  name: "Failed"
});
const Ac = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
}, null, -1);
function Sc(t, o, n, s, r, a) {
  return c(), i("svg", Ac, [
    yc
  ]);
}
F0.render = Sc;
F0.__file = "packages/components/Failed.vue";
const Fc = F0;
var b0 = l({
  name: "Expand"
});
const bc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Dc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1);
function qc(t, o, n, s, r, a) {
  return c(), i("svg", bc, [
    Dc
  ]);
}
b0.render = qc;
b0.__file = "packages/components/Expand.vue";
const Pc = b0;
var D0 = l({
  name: "Female"
});
const Tc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), Oc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1), Ec = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1);
function Ic(t, o, n, s, r, a) {
  return c(), i("svg", Tc, [
    Rc,
    Oc,
    Ec
  ]);
}
D0.render = Ic;
D0.__file = "packages/components/Female.vue";
const Nc = D0;
var q0 = l({
  name: "Document"
});
const Uc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1);
function jc(t, o, n, s, r, a) {
  return c(), i("svg", Uc, [
    Gc
  ]);
}
q0.render = jc;
q0.__file = "packages/components/Document.vue";
const Wc = q0;
var P0 = l({
  name: "Film"
});
const Kc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), Jc = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
}, null, -1);
function Qc(t, o, n, s, r, a) {
  return c(), i("svg", Kc, [
    Zc,
    Jc
  ]);
}
P0.render = Qc;
P0.__file = "packages/components/Film.vue";
const Xc = P0;
var T0 = l({
  name: "Finished"
});
const Yc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, t5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
}, null, -1);
function e5(t, o, n, s, r, a) {
  return c(), i("svg", Yc, [
    t5
  ]);
}
T0.render = e5;
T0.__file = "packages/components/Finished.vue";
const o5 = T0;
var R0 = l({
  name: "DataLine"
});
const n5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, s5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
}, null, -1);
function r5(t, o, n, s, r, a) {
  return c(), i("svg", n5, [
    s5
  ]);
}
R0.render = r5;
R0.__file = "packages/components/DataLine.vue";
const a5 = R0;
var O0 = l({
  name: "Filter"
});
const c5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, l5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1);
function i5(t, o, n, s, r, a) {
  return c(), i("svg", c5, [
    l5
  ]);
}
O0.render = i5;
O0.__file = "packages/components/Filter.vue";
const p5 = O0;
var E0 = l({
  name: "Flag"
});
const $5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, h5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
}, null, -1);
function _5(t, o, n, s, r, a) {
  return c(), i("svg", $5, [
    h5
  ]);
}
E0.render = _5;
E0.__file = "packages/components/Flag.vue";
const d5 = E0;
var I0 = l({
  name: "FolderChecked"
});
const u5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, v5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
}, null, -1);
function m5(t, o, n, s, r, a) {
  return c(), i("svg", u5, [
    v5
  ]);
}
I0.render = m5;
I0.__file = "packages/components/FolderChecked.vue";
const w5 = I0;
var N0 = l({
  name: "FirstAidKit"
});
const g5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, f5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), z5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
function x5(t, o, n, s, r, a) {
  return c(), i("svg", g5, [
    f5,
    z5
  ]);
}
N0.render = x5;
N0.__file = "packages/components/FirstAidKit.vue";
const C5 = N0;
var U0 = l({
  name: "FolderAdd"
});
const H5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
}, null, -1);
function V5(t, o, n, s, r, a) {
  return c(), i("svg", H5, [
    M5
  ]);
}
U0.render = V5;
U0.__file = "packages/components/FolderAdd.vue";
const k5 = U0;
var G0 = l({
  name: "Fold"
});
const B5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, L5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
}, null, -1);
function A5(t, o, n, s, r, a) {
  return c(), i("svg", B5, [
    L5
  ]);
}
G0.render = A5;
G0.__file = "packages/components/Fold.vue";
const y5 = G0;
var j0 = l({
  name: "FolderDelete"
});
const S5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, F5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
}, null, -1);
function b5(t, o, n, s, r, a) {
  return c(), i("svg", S5, [
    F5
  ]);
}
j0.render = b5;
j0.__file = "packages/components/FolderDelete.vue";
const D5 = j0;
var W0 = l({
  name: "DocumentDelete"
});
const q5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, P5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
}, null, -1);
function T5(t, o, n, s, r, a) {
  return c(), i("svg", q5, [
    P5
  ]);
}
W0.render = T5;
W0.__file = "packages/components/DocumentDelete.vue";
const R5 = W0;
var K0 = l({
  name: "Folder"
});
const O5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, E5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
}, null, -1);
function I5(t, o, n, s, r, a) {
  return c(), i("svg", O5, [
    E5
  ]);
}
K0.render = I5;
K0.__file = "packages/components/Folder.vue";
const N5 = K0;
var Z0 = l({
  name: "Food"
});
const U5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, G5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
}, null, -1);
function j5(t, o, n, s, r, a) {
  return c(), i("svg", U5, [
    G5
  ]);
}
Z0.render = j5;
Z0.__file = "packages/components/Food.vue";
const W5 = Z0;
var J0 = l({
  name: "FolderOpened"
});
const K5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Z5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
}, null, -1);
function J5(t, o, n, s, r, a) {
  return c(), i("svg", K5, [
    Z5
  ]);
}
J0.render = J5;
J0.__file = "packages/components/FolderOpened.vue";
const Q5 = J0;
var Q0 = l({
  name: "Football"
});
const X5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Y5 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1), tl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
}, null, -1);
function el(t, o, n, s, r, a) {
  return c(), i("svg", X5, [
    Y5,
    tl
  ]);
}
Q0.render = el;
Q0.__file = "packages/components/Football.vue";
const ol = Q0;
var X0 = l({
  name: "FolderRemove"
});
const nl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
}, null, -1);
function rl(t, o, n, s, r, a) {
  return c(), i("svg", nl, [
    sl
  ]);
}
X0.render = rl;
X0.__file = "packages/components/FolderRemove.vue";
const al = X0;
var Y0 = l({
  name: "Fries"
});
const cl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ll = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
}, null, -1);
function il(t, o, n, s, r, a) {
  return c(), i("svg", cl, [
    ll
  ]);
}
Y0.render = il;
Y0.__file = "packages/components/Fries.vue";
const pl = Y0;
var t1 = l({
  name: "FullScreen"
});
const $l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1);
function _l(t, o, n, s, r, a) {
  return c(), i("svg", $l, [
    hl
  ]);
}
t1.render = _l;
t1.__file = "packages/components/FullScreen.vue";
const dl = t1;
var e1 = l({
  name: "ForkSpoon"
});
const ul = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1);
function ml(t, o, n, s, r, a) {
  return c(), i("svg", ul, [
    vl
  ]);
}
e1.render = ml;
e1.__file = "packages/components/ForkSpoon.vue";
const wl = e1;
var o1 = l({
  name: "Goblet"
});
const gl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
}, null, -1);
function zl(t, o, n, s, r, a) {
  return c(), i("svg", gl, [
    fl
  ]);
}
o1.render = zl;
o1.__file = "packages/components/Goblet.vue";
const xl = o1;
var n1 = l({
  name: "GobletFull"
});
const Cl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
}, null, -1);
function Ml(t, o, n, s, r, a) {
  return c(), i("svg", Cl, [
    Hl
  ]);
}
n1.render = Ml;
n1.__file = "packages/components/GobletFull.vue";
const Vl = n1;
var s1 = l({
  name: "Goods"
});
const kl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
}, null, -1);
function Ll(t, o, n, s, r, a) {
  return c(), i("svg", kl, [
    Bl
  ]);
}
s1.render = Ll;
s1.__file = "packages/components/Goods.vue";
const Al = s1;
var r1 = l({
  name: "GobletSquareFull"
});
const yl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
}, null, -1);
function Fl(t, o, n, s, r, a) {
  return c(), i("svg", yl, [
    Sl
  ]);
}
r1.render = Fl;
r1.__file = "packages/components/GobletSquareFull.vue";
const bl = r1;
var a1 = l({
  name: "GoodsFilled"
});
const Dl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ql = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
}, null, -1);
function Pl(t, o, n, s, r, a) {
  return c(), i("svg", Dl, [
    ql
  ]);
}
a1.render = Pl;
a1.__file = "packages/components/GoodsFilled.vue";
const Tl = a1;
var c1 = l({
  name: "Grid"
});
const Rl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ol = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
}, null, -1);
function El(t, o, n, s, r, a) {
  return c(), i("svg", Rl, [
    Ol
  ]);
}
c1.render = El;
c1.__file = "packages/components/Grid.vue";
const Il = c1;
var l1 = l({
  name: "Grape"
});
const Nl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ul = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1);
function Gl(t, o, n, s, r, a) {
  return c(), i("svg", Nl, [
    Ul
  ]);
}
l1.render = Gl;
l1.__file = "packages/components/Grape.vue";
const jl = l1;
var i1 = l({
  name: "GobletSquare"
});
const Wl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Kl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
}, null, -1);
function Zl(t, o, n, s, r, a) {
  return c(), i("svg", Wl, [
    Kl
  ]);
}
i1.render = Zl;
i1.__file = "packages/components/GobletSquare.vue";
const Jl = i1;
var p1 = l({
  name: "Headset"
});
const Ql = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xl = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
}, null, -1);
function Yl(t, o, n, s, r, a) {
  return c(), i("svg", Ql, [
    Xl
  ]);
}
p1.render = Yl;
p1.__file = "packages/components/Headset.vue";
const ti = p1;
var $1 = l({
  name: "Comment"
});
const ei = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oi = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
}, null, -1);
function ni(t, o, n, s, r, a) {
  return c(), i("svg", ei, [
    oi
  ]);
}
$1.render = ni;
$1.__file = "packages/components/Comment.vue";
const si = $1;
var h1 = l({
  name: "HelpFilled"
});
const ri = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ai = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
}, null, -1);
function ci(t, o, n, s, r, a) {
  return c(), i("svg", ri, [
    ai
  ]);
}
h1.render = ci;
h1.__file = "packages/components/HelpFilled.vue";
const li = h1;
var _1 = l({
  name: "Histogram"
});
const ii = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pi = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
}, null, -1);
function $i(t, o, n, s, r, a) {
  return c(), i("svg", ii, [
    pi
  ]);
}
_1.render = $i;
_1.__file = "packages/components/Histogram.vue";
const hi = _1;
var d1 = l({
  name: "HomeFilled"
});
const _i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, di = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1);
function ui(t, o, n, s, r, a) {
  return c(), i("svg", _i, [
    di
  ]);
}
d1.render = ui;
d1.__file = "packages/components/HomeFilled.vue";
const vi = d1;
var u1 = l({
  name: "Help"
});
const mi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wi = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function gi(t, o, n, s, r, a) {
  return c(), i("svg", mi, [
    wi
  ]);
}
u1.render = gi;
u1.__file = "packages/components/Help.vue";
const fi = u1;
var v1 = l({
  name: "House"
});
const zi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xi = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
}, null, -1);
function Ci(t, o, n, s, r, a) {
  return c(), i("svg", zi, [
    xi
  ]);
}
v1.render = Ci;
v1.__file = "packages/components/House.vue";
const Hi = v1;
var m1 = l({
  name: "IceCreamRound"
});
const Mi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vi = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
}, null, -1);
function ki(t, o, n, s, r, a) {
  return c(), i("svg", Mi, [
    Vi
  ]);
}
m1.render = ki;
m1.__file = "packages/components/IceCreamRound.vue";
const Bi = m1;
var w1 = l({
  name: "HotWater"
});
const Li = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ai = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
}, null, -1);
function yi(t, o, n, s, r, a) {
  return c(), i("svg", Li, [
    Ai
  ]);
}
w1.render = yi;
w1.__file = "packages/components/HotWater.vue";
const Si = w1;
var g1 = l({
  name: "IceCream"
});
const Fi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bi = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
}, null, -1);
function Di(t, o, n, s, r, a) {
  return c(), i("svg", Fi, [
    bi
  ]);
}
g1.render = Di;
g1.__file = "packages/components/IceCream.vue";
const qi = g1;
var f1 = l({
  name: "Files"
});
const Pi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ti = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
}, null, -1);
function Ri(t, o, n, s, r, a) {
  return c(), i("svg", Pi, [
    Ti
  ]);
}
f1.render = Ri;
f1.__file = "packages/components/Files.vue";
const Oi = f1;
var z1 = l({
  name: "IceCreamSquare"
});
const Ei = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ii = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1);
function Ni(t, o, n, s, r, a) {
  return c(), i("svg", Ei, [
    Ii
  ]);
}
z1.render = Ni;
z1.__file = "packages/components/IceCreamSquare.vue";
const Ui = z1;
var x1 = l({
  name: "Key"
});
const Gi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ji = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
}, null, -1);
function Wi(t, o, n, s, r, a) {
  return c(), i("svg", Gi, [
    ji
  ]);
}
x1.render = Wi;
x1.__file = "packages/components/Key.vue";
const Ki = x1;
var C1 = l({
  name: "IceTea"
});
const Zi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ji = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
}, null, -1);
function Qi(t, o, n, s, r, a) {
  return c(), i("svg", Zi, [
    Ji
  ]);
}
C1.render = Qi;
C1.__file = "packages/components/IceTea.vue";
const Xi = C1;
var H1 = l({
  name: "KnifeFork"
});
const Yi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, t9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1);
function e9(t, o, n, s, r, a) {
  return c(), i("svg", Yi, [
    t9
  ]);
}
H1.render = e9;
H1.__file = "packages/components/KnifeFork.vue";
const o9 = H1;
var M1 = l({
  name: "Iphone"
});
const n9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, s9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
}, null, -1);
function r9(t, o, n, s, r, a) {
  return c(), i("svg", n9, [
    s9
  ]);
}
M1.render = r9;
M1.__file = "packages/components/Iphone.vue";
const a9 = M1;
var V1 = l({
  name: "InfoFilled"
});
const c9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, l9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1);
function i9(t, o, n, s, r, a) {
  return c(), i("svg", c9, [
    l9
  ]);
}
V1.render = i9;
V1.__file = "packages/components/InfoFilled.vue";
const p9 = V1;
var k1 = l({
  name: "Link"
});
const $9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, h9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
}, null, -1);
function _9(t, o, n, s, r, a) {
  return c(), i("svg", $9, [
    h9
  ]);
}
k1.render = _9;
k1.__file = "packages/components/Link.vue";
const d9 = k1;
var B1 = l({
  name: "IceDrink"
});
const u9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, v9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
}, null, -1);
function m9(t, o, n, s, r, a) {
  return c(), i("svg", u9, [
    v9
  ]);
}
B1.render = m9;
B1.__file = "packages/components/IceDrink.vue";
const w9 = B1;
var L1 = l({
  name: "Lightning"
});
const g9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, f9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1), z9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
}, null, -1);
function x9(t, o, n, s, r, a) {
  return c(), i("svg", g9, [
    f9,
    z9
  ]);
}
L1.render = x9;
L1.__file = "packages/components/Lightning.vue";
const C9 = L1;
var A1 = l({
  name: "Loading"
});
const H9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1);
function V9(t, o, n, s, r, a) {
  return c(), i("svg", H9, [
    M9
  ]);
}
A1.render = V9;
A1.__file = "packages/components/Loading.vue";
const k9 = A1;
var y1 = l({
  name: "Lollipop"
});
const B9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, L9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
}, null, -1);
function A9(t, o, n, s, r, a) {
  return c(), i("svg", B9, [
    L9
  ]);
}
y1.render = A9;
y1.__file = "packages/components/Lollipop.vue";
const y9 = y1;
var S1 = l({
  name: "LocationInformation"
});
const S9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, F9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), b9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), D9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1);
function q9(t, o, n, s, r, a) {
  return c(), i("svg", S9, [
    F9,
    b9,
    D9
  ]);
}
S1.render = q9;
S1.__file = "packages/components/LocationInformation.vue";
const P9 = S1;
var F1 = l({
  name: "Lock"
});
const T9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, R9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), O9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
}, null, -1);
function E9(t, o, n, s, r, a) {
  return c(), i("svg", T9, [
    R9,
    O9
  ]);
}
F1.render = E9;
F1.__file = "packages/components/Lock.vue";
const I9 = F1;
var b1 = l({
  name: "LocationFilled"
});
const N9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, U9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
}, null, -1);
function G9(t, o, n, s, r, a) {
  return c(), i("svg", N9, [
    U9
  ]);
}
b1.render = G9;
b1.__file = "packages/components/LocationFilled.vue";
const j9 = b1;
var D1 = l({
  name: "Magnet"
});
const W9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, K9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
}, null, -1);
function Z9(t, o, n, s, r, a) {
  return c(), i("svg", W9, [
    K9
  ]);
}
D1.render = Z9;
D1.__file = "packages/components/Magnet.vue";
const J9 = D1;
var q1 = l({
  name: "Male"
});
const Q9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, X9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1), Y9 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1), tp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
}, null, -1);
function ep(t, o, n, s, r, a) {
  return c(), i("svg", Q9, [
    X9,
    Y9,
    tp
  ]);
}
q1.render = ep;
q1.__file = "packages/components/Male.vue";
const op = q1;
var P1 = l({
  name: "Location"
});
const np = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), rp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1);
function ap(t, o, n, s, r, a) {
  return c(), i("svg", np, [
    sp,
    rp
  ]);
}
P1.render = ap;
P1.__file = "packages/components/Location.vue";
const cp = P1;
var T1 = l({
  name: "Menu"
});
const lp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ip = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
}, null, -1);
function pp(t, o, n, s, r, a) {
  return c(), i("svg", lp, [
    ip
  ]);
}
T1.render = pp;
T1.__file = "packages/components/Menu.vue";
const $p = T1;
var R1 = l({
  name: "MagicStick"
});
const hp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _p = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1);
function dp(t, o, n, s, r, a) {
  return c(), i("svg", hp, [
    _p
  ]);
}
R1.render = dp;
R1.__file = "packages/components/MagicStick.vue";
const up = R1;
var O1 = l({
  name: "MessageBox"
});
const vp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
}, null, -1);
function wp(t, o, n, s, r, a) {
  return c(), i("svg", vp, [
    mp
  ]);
}
O1.render = wp;
O1.__file = "packages/components/MessageBox.vue";
const gp = O1;
var E1 = l({
  name: "MapLocation"
});
const fp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, zp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), xp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
}, null, -1);
function Cp(t, o, n, s, r, a) {
  return c(), i("svg", fp, [
    zp,
    xp
  ]);
}
E1.render = Cp;
E1.__file = "packages/components/MapLocation.vue";
const Hp = E1;
var I1 = l({
  name: "Mic"
});
const Mp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
}, null, -1);
function kp(t, o, n, s, r, a) {
  return c(), i("svg", Mp, [
    Vp
  ]);
}
I1.render = kp;
I1.__file = "packages/components/Mic.vue";
const Bp = I1;
var N1 = l({
  name: "Message"
});
const Lp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ap = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1), yp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1);
function Sp(t, o, n, s, r, a) {
  return c(), i("svg", Lp, [
    Ap,
    yp
  ]);
}
N1.render = Sp;
N1.__file = "packages/components/Message.vue";
const Fp = N1;
var U1 = l({
  name: "Medal"
});
const bp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Dp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), qp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
}, null, -1);
function Pp(t, o, n, s, r, a) {
  return c(), i("svg", bp, [
    Dp,
    qp
  ]);
}
U1.render = Pp;
U1.__file = "packages/components/Medal.vue";
const Tp = U1;
var G1 = l({
  name: "MilkTea"
});
const Rp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Op = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1);
function Ep(t, o, n, s, r, a) {
  return c(), i("svg", Rp, [
    Op
  ]);
}
G1.render = Ep;
G1.__file = "packages/components/MilkTea.vue";
const Ip = G1;
var j1 = l({
  name: "Microphone"
});
const Np = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Up = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
}, null, -1);
function Gp(t, o, n, s, r, a) {
  return c(), i("svg", Np, [
    Up
  ]);
}
j1.render = Gp;
j1.__file = "packages/components/Microphone.vue";
const jp = j1;
var W1 = l({
  name: "Minus"
});
const Wp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Kp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1);
function Zp(t, o, n, s, r, a) {
  return c(), i("svg", Wp, [
    Kp
  ]);
}
W1.render = Zp;
W1.__file = "packages/components/Minus.vue";
const Jp = W1;
var K1 = l({
  name: "Money"
});
const Qp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1), Yp = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1), t7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1);
function e7(t, o, n, s, r, a) {
  return c(), i("svg", Qp, [
    Xp,
    Yp,
    t7
  ]);
}
K1.render = e7;
K1.__file = "packages/components/Money.vue";
const o7 = K1;
var Z1 = l({
  name: "MoonNight"
});
const n7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, s7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1), r7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
}, null, -1);
function a7(t, o, n, s, r, a) {
  return c(), i("svg", n7, [
    s7,
    r7
  ]);
}
Z1.render = a7;
Z1.__file = "packages/components/MoonNight.vue";
const c7 = Z1;
var J1 = l({
  name: "Monitor"
});
const l7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, i7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
}, null, -1);
function p7(t, o, n, s, r, a) {
  return c(), i("svg", l7, [
    i7
  ]);
}
J1.render = p7;
J1.__file = "packages/components/Monitor.vue";
const $7 = J1;
var Q1 = l({
  name: "Moon"
});
const h7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1);
function d7(t, o, n, s, r, a) {
  return c(), i("svg", h7, [
    _7
  ]);
}
Q1.render = d7;
Q1.__file = "packages/components/Moon.vue";
const u7 = Q1;
var X1 = l({
  name: "More"
});
const v7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, m7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1);
function w7(t, o, n, s, r, a) {
  return c(), i("svg", v7, [
    m7
  ]);
}
X1.render = w7;
X1.__file = "packages/components/More.vue";
const g7 = X1;
var Y1 = l({
  name: "MostlyCloudy"
});
const f7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, z7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
}, null, -1);
function x7(t, o, n, s, r, a) {
  return c(), i("svg", f7, [
    z7
  ]);
}
Y1.render = x7;
Y1.__file = "packages/components/MostlyCloudy.vue";
const C7 = Y1;
var t4 = l({
  name: "MoreFilled"
});
const H7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1);
function V7(t, o, n, s, r, a) {
  return c(), i("svg", H7, [
    M7
  ]);
}
t4.render = V7;
t4.__file = "packages/components/MoreFilled.vue";
const k7 = t4;
var e4 = l({
  name: "Mouse"
});
const B7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, L7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1), A7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
}, null, -1);
function y7(t, o, n, s, r, a) {
  return c(), i("svg", B7, [
    L7,
    A7
  ]);
}
e4.render = y7;
e4.__file = "packages/components/Mouse.vue";
const S7 = e4;
var o4 = l({
  name: "Mug"
});
const F7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, b7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
}, null, -1);
function D7(t, o, n, s, r, a) {
  return c(), i("svg", F7, [
    b7
  ]);
}
o4.render = D7;
o4.__file = "packages/components/Mug.vue";
const q7 = o4;
var n4 = l({
  name: "Mute"
});
const P7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, T7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1), R7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1);
function O7(t, o, n, s, r, a) {
  return c(), i("svg", P7, [
    T7,
    R7
  ]);
}
n4.render = O7;
n4.__file = "packages/components/Mute.vue";
const E7 = n4;
var s4 = l({
  name: "NoSmoking"
});
const I7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, N7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1);
function U7(t, o, n, s, r, a) {
  return c(), i("svg", I7, [
    N7
  ]);
}
s4.render = U7;
s4.__file = "packages/components/NoSmoking.vue";
const G7 = s4;
var r4 = l({
  name: "MuteNotification"
});
const j7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, W7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1), K7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1);
function Z7(t, o, n, s, r, a) {
  return c(), i("svg", j7, [
    W7,
    K7
  ]);
}
r4.render = Z7;
r4.__file = "packages/components/MuteNotification.vue";
const J7 = r4;
var a4 = l({
  name: "Notification"
});
const Q7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, X7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1), Y7 = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
function t$(t, o, n, s, r, a) {
  return c(), i("svg", Q7, [
    X7,
    Y7
  ]);
}
a4.render = t$;
a4.__file = "packages/components/Notification.vue";
const e$ = a4;
var c4 = l({
  name: "Notebook"
});
const o$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, n$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), s$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1);
function r$(t, o, n, s, r, a) {
  return c(), i("svg", o$, [
    n$,
    s$
  ]);
}
c4.render = r$;
c4.__file = "packages/components/Notebook.vue";
const a$ = c4;
var l4 = l({
  name: "Odometer"
});
const c$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, l$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), i$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1), p$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
}, null, -1);
function $$(t, o, n, s, r, a) {
  return c(), i("svg", c$, [
    l$,
    i$,
    p$
  ]);
}
l4.render = $$;
l4.__file = "packages/components/Odometer.vue";
const h$ = l4;
var i4 = l({
  name: "OfficeBuilding"
});
const _$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, d$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), u$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1), v$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
}, null, -1);
function m$(t, o, n, s, r, a) {
  return c(), i("svg", _$, [
    d$,
    u$,
    v$
  ]);
}
i4.render = m$;
i4.__file = "packages/components/OfficeBuilding.vue";
const w$ = i4;
var p4 = l({
  name: "Operation"
});
const g$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, f$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1);
function z$(t, o, n, s, r, a) {
  return c(), i("svg", g$, [
    f$
  ]);
}
p4.render = z$;
p4.__file = "packages/components/Operation.vue";
const x$ = p4;
var $4 = l({
  name: "Opportunity"
});
const C$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, H$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
}, null, -1);
function M$(t, o, n, s, r, a) {
  return c(), i("svg", C$, [
    H$
  ]);
}
$4.render = M$;
$4.__file = "packages/components/Opportunity.vue";
const V$ = $4;
var h4 = l({
  name: "Orange"
});
const k$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, B$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
}, null, -1);
function L$(t, o, n, s, r, a) {
  return c(), i("svg", k$, [
    B$
  ]);
}
h4.render = L$;
h4.__file = "packages/components/Orange.vue";
const A$ = h4;
var _4 = l({
  name: "Open"
});
const y$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, S$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), F$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1);
function b$(t, o, n, s, r, a) {
  return c(), i("svg", y$, [
    S$,
    F$
  ]);
}
_4.render = b$;
_4.__file = "packages/components/Open.vue";
const D$ = _4;
var d4 = l({
  name: "Paperclip"
});
const q$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, P$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1);
function T$(t, o, n, s, r, a) {
  return c(), i("svg", q$, [
    P$
  ]);
}
d4.render = T$;
d4.__file = "packages/components/Paperclip.vue";
const R$ = d4;
var u4 = l({
  name: "Pear"
});
const O$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, E$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
}, null, -1);
function I$(t, o, n, s, r, a) {
  return c(), i("svg", O$, [
    E$
  ]);
}
u4.render = I$;
u4.__file = "packages/components/Pear.vue";
const N$ = u4;
var v4 = l({
  name: "PartlyCloudy"
});
const U$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, G$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), j$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
}, null, -1);
function W$(t, o, n, s, r, a) {
  return c(), i("svg", U$, [
    G$,
    j$
  ]);
}
v4.render = W$;
v4.__file = "packages/components/PartlyCloudy.vue";
const K$ = v4;
var m4 = l({
  name: "Phone"
});
const Z$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, J$ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
}, null, -1);
function Q$(t, o, n, s, r, a) {
  return c(), i("svg", Z$, [
    J$
  ]);
}
m4.render = Q$;
m4.__file = "packages/components/Phone.vue";
const X$ = m4;
var w4 = l({
  name: "PictureFilled"
});
const Y$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, th = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
}, null, -1);
function eh(t, o, n, s, r, a) {
  return c(), i("svg", Y$, [
    th
  ]);
}
w4.render = eh;
w4.__file = "packages/components/PictureFilled.vue";
const oh = w4;
var g4 = l({
  name: "PhoneFilled"
});
const nh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
}, null, -1);
function rh(t, o, n, s, r, a) {
  return c(), i("svg", nh, [
    sh
  ]);
}
g4.render = rh;
g4.__file = "packages/components/PhoneFilled.vue";
const ah = g4;
var f4 = l({
  name: "PictureRounded"
});
const ch = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1), ih = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
}, null, -1);
function ph(t, o, n, s, r, a) {
  return c(), i("svg", ch, [
    lh,
    ih
  ]);
}
f4.render = ph;
f4.__file = "packages/components/PictureRounded.vue";
const $h = f4;
var z4 = l({
  name: "Guide"
});
const hh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _h = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1), dh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
}, null, -1);
function uh(t, o, n, s, r, a) {
  return c(), i("svg", hh, [
    _h,
    dh
  ]);
}
z4.render = uh;
z4.__file = "packages/components/Guide.vue";
const vh = z4;
var x4 = l({
  name: "Place"
});
const mh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), gh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1), fh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
}, null, -1);
function zh(t, o, n, s, r, a) {
  return c(), i("svg", mh, [
    wh,
    gh,
    fh
  ]);
}
x4.render = zh;
x4.__file = "packages/components/Place.vue";
const xh = x4;
var C4 = l({
  name: "Platform"
});
const Ch = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
}, null, -1);
function Mh(t, o, n, s, r, a) {
  return c(), i("svg", Ch, [
    Hh
  ]);
}
C4.render = Mh;
C4.__file = "packages/components/Platform.vue";
const Vh = C4;
var H4 = l({
  name: "PieChart"
});
const kh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1), Lh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
}, null, -1);
function Ah(t, o, n, s, r, a) {
  return c(), i("svg", kh, [
    Bh,
    Lh
  ]);
}
H4.render = Ah;
H4.__file = "packages/components/PieChart.vue";
const yh = H4;
var M4 = l({
  name: "Pointer"
});
const Sh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
}, null, -1);
function bh(t, o, n, s, r, a) {
  return c(), i("svg", Sh, [
    Fh
  ]);
}
M4.render = bh;
M4.__file = "packages/components/Pointer.vue";
const Dh = M4;
var V4 = l({
  name: "Plus"
});
const qh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ph = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1);
function Th(t, o, n, s, r, a) {
  return c(), i("svg", qh, [
    Ph
  ]);
}
V4.render = Th;
V4.__file = "packages/components/Plus.vue";
const Rh = V4;
var k4 = l({
  name: "Position"
});
const Oh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Eh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
}, null, -1);
function Ih(t, o, n, s, r, a) {
  return c(), i("svg", Oh, [
    Eh
  ]);
}
k4.render = Ih;
k4.__file = "packages/components/Position.vue";
const Nh = k4;
var B4 = l({
  name: "Postcard"
});
const Uh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1), jh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
function Wh(t, o, n, s, r, a) {
  return c(), i("svg", Uh, [
    Gh,
    jh
  ]);
}
B4.render = Wh;
B4.__file = "packages/components/Postcard.vue";
const Kh = B4;
var L4 = l({
  name: "Present"
});
const Zh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1), Qh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), Xh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Yh = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
function t_(t, o, n, s, r, a) {
  return c(), i("svg", Zh, [
    Jh,
    Qh,
    Xh,
    Yh
  ]);
}
L4.render = t_;
L4.__file = "packages/components/Present.vue";
const e_ = L4;
var A4 = l({
  name: "PriceTag"
});
const o_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, n_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), s_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
function r_(t, o, n, s, r, a) {
  return c(), i("svg", o_, [
    n_,
    s_
  ]);
}
A4.render = r_;
A4.__file = "packages/components/PriceTag.vue";
const a_ = A4;
var y4 = l({
  name: "Promotion"
});
const c_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, l_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
}, null, -1);
function i_(t, o, n, s, r, a) {
  return c(), i("svg", c_, [
    l_
  ]);
}
y4.render = i_;
y4.__file = "packages/components/Promotion.vue";
const p_ = y4;
var S4 = l({
  name: "Pouring"
});
const $_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, h_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
}, null, -1);
function __(t, o, n, s, r, a) {
  return c(), i("svg", $_, [
    h_
  ]);
}
S4.render = __;
S4.__file = "packages/components/Pouring.vue";
const d_ = S4;
var F4 = l({
  name: "ReadingLamp"
});
const u_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, v_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1), m_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
}, null, -1);
function w_(t, o, n, s, r, a) {
  return c(), i("svg", u_, [
    v_,
    m_
  ]);
}
F4.render = w_;
F4.__file = "packages/components/ReadingLamp.vue";
const g_ = F4;
var b4 = l({
  name: "QuestionFilled"
});
const f_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, z_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
}, null, -1);
function x_(t, o, n, s, r, a) {
  return c(), i("svg", f_, [
    z_
  ]);
}
b4.render = x_;
b4.__file = "packages/components/QuestionFilled.vue";
const C_ = b4;
var D4 = l({
  name: "Printer"
});
const H_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
}, null, -1);
function V_(t, o, n, s, r, a) {
  return c(), i("svg", H_, [
    M_
  ]);
}
D4.render = V_;
D4.__file = "packages/components/Printer.vue";
const k_ = D4;
var q4 = l({
  name: "Picture"
});
const B_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, L_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), A_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1);
function y_(t, o, n, s, r, a) {
  return c(), i("svg", B_, [
    L_,
    A_
  ]);
}
q4.render = y_;
q4.__file = "packages/components/Picture.vue";
const S_ = q4;
var P4 = l({
  name: "RefreshRight"
});
const F_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, b_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1);
function D_(t, o, n, s, r, a) {
  return c(), i("svg", F_, [
    b_
  ]);
}
P4.render = D_;
P4.__file = "packages/components/RefreshRight.vue";
const q_ = P4;
var T4 = l({
  name: "Reading"
});
const P_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, T_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1), R_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 192h64v704h-64z"
}, null, -1);
function O_(t, o, n, s, r, a) {
  return c(), i("svg", P_, [
    T_,
    R_
  ]);
}
T4.render = O_;
T4.__file = "packages/components/Reading.vue";
const E_ = T4;
var R4 = l({
  name: "RefreshLeft"
});
const I_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, N_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1);
function U_(t, o, n, s, r, a) {
  return c(), i("svg", I_, [
    N_
  ]);
}
R4.render = U_;
R4.__file = "packages/components/RefreshLeft.vue";
const G_ = R4;
var O4 = l({
  name: "Refresh"
});
const j_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, W_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1);
function K_(t, o, n, s, r, a) {
  return c(), i("svg", j_, [
    W_
  ]);
}
O4.render = K_;
O4.__file = "packages/components/Refresh.vue";
const Z_ = O4;
var E4 = l({
  name: "Refrigerator"
});
const J_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Q_ = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
}, null, -1);
function X_(t, o, n, s, r, a) {
  return c(), i("svg", J_, [
    Q_
  ]);
}
E4.render = X_;
E4.__file = "packages/components/Refrigerator.vue";
const Y_ = E4;
var I4 = l({
  name: "RemoveFilled"
});
const td = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ed = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
}, null, -1);
function od(t, o, n, s, r, a) {
  return c(), i("svg", td, [
    ed
  ]);
}
I4.render = od;
I4.__file = "packages/components/RemoveFilled.vue";
const nd = I4;
var N4 = l({
  name: "Right"
});
const sd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
}, null, -1);
function ad(t, o, n, s, r, a) {
  return c(), i("svg", sd, [
    rd
  ]);
}
N4.render = ad;
N4.__file = "packages/components/Right.vue";
const cd = N4;
var U4 = l({
  name: "ScaleToOriginal"
});
const ld = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, id = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1);
function pd(t, o, n, s, r, a) {
  return c(), i("svg", ld, [
    id
  ]);
}
U4.render = pd;
U4.__file = "packages/components/ScaleToOriginal.vue";
const $d = U4;
var G4 = l({
  name: "School"
});
const hd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _d = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), dd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1), ud = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
}, null, -1);
function vd(t, o, n, s, r, a) {
  return c(), i("svg", hd, [
    _d,
    dd,
    ud
  ]);
}
G4.render = vd;
G4.__file = "packages/components/School.vue";
const md = G4;
var j4 = l({
  name: "Remove"
});
const wd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), fd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function zd(t, o, n, s, r, a) {
  return c(), i("svg", wd, [
    gd,
    fd
  ]);
}
j4.render = zd;
j4.__file = "packages/components/Remove.vue";
const xd = j4;
var W4 = l({
  name: "Scissor"
});
const Cd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
}, null, -1);
function Md(t, o, n, s, r, a) {
  return c(), i("svg", Cd, [
    Hd
  ]);
}
W4.render = Md;
W4.__file = "packages/components/Scissor.vue";
const Vd = W4;
var K4 = l({
  name: "Select"
});
const kd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
}, null, -1);
function Ld(t, o, n, s, r, a) {
  return c(), i("svg", kd, [
    Bd
  ]);
}
K4.render = Ld;
K4.__file = "packages/components/Select.vue";
const Ad = K4;
var Z4 = l({
  name: "Management"
});
const yd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
}, null, -1);
function Fd(t, o, n, s, r, a) {
  return c(), i("svg", yd, [
    Sd
  ]);
}
Z4.render = Fd;
Z4.__file = "packages/components/Management.vue";
const bd = Z4;
var J4 = l({
  name: "Search"
});
const Dd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1);
function Pd(t, o, n, s, r, a) {
  return c(), i("svg", Dd, [
    qd
  ]);
}
J4.render = Pd;
J4.__file = "packages/components/Search.vue";
const Td = J4;
var Q4 = l({
  name: "Sell"
});
const Rd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Od = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
}, null, -1);
function Ed(t, o, n, s, r, a) {
  return c(), i("svg", Rd, [
    Od
  ]);
}
Q4.render = Ed;
Q4.__file = "packages/components/Sell.vue";
const Id = Q4;
var X4 = l({
  name: "SemiSelect"
});
const Nd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ud = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
}, null, -1);
function Gd(t, o, n, s, r, a) {
  return c(), i("svg", Nd, [
    Ud
  ]);
}
X4.render = Gd;
X4.__file = "packages/components/SemiSelect.vue";
const jd = X4;
var Y4 = l({
  name: "Share"
});
const Wd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Kd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
}, null, -1);
function Zd(t, o, n, s, r, a) {
  return c(), i("svg", Wd, [
    Kd
  ]);
}
Y4.render = Zd;
Y4.__file = "packages/components/Share.vue";
const Jd = Y4;
var t6 = l({
  name: "Setting"
});
const Qd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xd = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1);
function Yd(t, o, n, s, r, a) {
  return c(), i("svg", Qd, [
    Xd
  ]);
}
t6.render = Yd;
t6.__file = "packages/components/Setting.vue";
const tu = t6;
var e6 = l({
  name: "Service"
});
const eu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ou = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
}, null, -1);
function nu(t, o, n, s, r, a) {
  return c(), i("svg", eu, [
    ou
  ]);
}
e6.render = nu;
e6.__file = "packages/components/Service.vue";
const su = e6;
var o6 = l({
  name: "Ship"
});
const ru = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, au = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
}, null, -1);
function cu(t, o, n, s, r, a) {
  return c(), i("svg", ru, [
    au
  ]);
}
o6.render = cu;
o6.__file = "packages/components/Ship.vue";
const lu = o6;
var n6 = l({
  name: "SetUp"
});
const iu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1), $u = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), hu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), _u = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
function du(t, o, n, s, r, a) {
  return c(), i("svg", iu, [
    pu,
    $u,
    hu,
    _u
  ]);
}
n6.render = du;
n6.__file = "packages/components/SetUp.vue";
const uu = n6;
var s6 = l({
  name: "ShoppingBag"
});
const vu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1), wu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 704h640v64H192z"
}, null, -1);
function gu(t, o, n, s, r, a) {
  return c(), i("svg", vu, [
    mu,
    wu
  ]);
}
s6.render = gu;
s6.__file = "packages/components/ShoppingBag.vue";
const fu = s6;
var r6 = l({
  name: "Shop"
});
const zu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
}, null, -1);
function Cu(t, o, n, s, r, a) {
  return c(), i("svg", zu, [
    xu
  ]);
}
r6.render = Cu;
r6.__file = "packages/components/Shop.vue";
const Hu = r6;
var a6 = l({
  name: "ShoppingCart"
});
const Mu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1);
function ku(t, o, n, s, r, a) {
  return c(), i("svg", Mu, [
    Vu
  ]);
}
a6.render = ku;
a6.__file = "packages/components/ShoppingCart.vue";
const Bu = a6;
var c6 = l({
  name: "ShoppingCartFull"
});
const Lu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Au = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), yu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
}, null, -1);
function Su(t, o, n, s, r, a) {
  return c(), i("svg", Lu, [
    Au,
    yu
  ]);
}
c6.render = Su;
c6.__file = "packages/components/ShoppingCartFull.vue";
const Fu = c6;
var l6 = l({
  name: "Soccer"
});
const bu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Du = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
}, null, -1);
function qu(t, o, n, s, r, a) {
  return c(), i("svg", bu, [
    Du
  ]);
}
l6.render = qu;
l6.__file = "packages/components/Soccer.vue";
const Pu = l6;
var i6 = l({
  name: "SoldOut"
});
const Tu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ru = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
}, null, -1);
function Ou(t, o, n, s, r, a) {
  return c(), i("svg", Tu, [
    Ru
  ]);
}
i6.render = Ou;
i6.__file = "packages/components/SoldOut.vue";
const Eu = i6;
var p6 = l({
  name: "Smoking"
});
const Iu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Nu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1), Uu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1);
function Gu(t, o, n, s, r, a) {
  return c(), i("svg", Iu, [
    Nu,
    Uu
  ]);
}
p6.render = Gu;
p6.__file = "packages/components/Smoking.vue";
const ju = p6;
var $6 = l({
  name: "SortDown"
});
const Wu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ku = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
}, null, -1);
function Zu(t, o, n, s, r, a) {
  return c(), i("svg", Wu, [
    Ku
  ]);
}
$6.render = Zu;
$6.__file = "packages/components/SortDown.vue";
const Ju = $6;
var h6 = l({
  name: "Sort"
});
const Qu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xu = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
}, null, -1);
function Yu(t, o, n, s, r, a) {
  return c(), i("svg", Qu, [
    Xu
  ]);
}
h6.render = Yu;
h6.__file = "packages/components/Sort.vue";
const tv = h6;
var _6 = l({
  name: "SortUp"
});
const ev = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ov = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
}, null, -1);
function nv(t, o, n, s, r, a) {
  return c(), i("svg", ev, [
    ov
  ]);
}
_6.render = nv;
_6.__file = "packages/components/SortUp.vue";
const sv = _6;
var d6 = l({
  name: "Star"
});
const rv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, av = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1);
function cv(t, o, n, s, r, a) {
  return c(), i("svg", rv, [
    av
  ]);
}
d6.render = cv;
d6.__file = "packages/components/Star.vue";
const lv = d6;
var u6 = l({
  name: "Stamp"
});
const iv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
}, null, -1);
function $v(t, o, n, s, r, a) {
  return c(), i("svg", iv, [
    pv
  ]);
}
u6.render = $v;
u6.__file = "packages/components/Stamp.vue";
const hv = u6;
var v6 = l({
  name: "StarFilled"
});
const _v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1);
function uv(t, o, n, s, r, a) {
  return c(), i("svg", _v, [
    dv
  ]);
}
v6.render = uv;
v6.__file = "packages/components/StarFilled.vue";
const vv = v6;
var m6 = l({
  name: "Stopwatch"
});
const mv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), gv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
}, null, -1);
function fv(t, o, n, s, r, a) {
  return c(), i("svg", mv, [
    wv,
    gv
  ]);
}
m6.render = fv;
m6.__file = "packages/components/Stopwatch.vue";
const zv = m6;
var w6 = l({
  name: "SuccessFilled"
});
const xv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
function Hv(t, o, n, s, r, a) {
  return c(), i("svg", xv, [
    Cv
  ]);
}
w6.render = Hv;
w6.__file = "packages/components/SuccessFilled.vue";
const Mv = w6;
var g6 = l({
  name: "Suitcase"
});
const Vv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), Bv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
}, null, -1);
function Lv(t, o, n, s, r, a) {
  return c(), i("svg", Vv, [
    kv,
    Bv
  ]);
}
g6.render = Lv;
g6.__file = "packages/components/Suitcase.vue";
const Av = g6;
var f6 = l({
  name: "Sugar"
});
const yv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
}, null, -1);
function Fv(t, o, n, s, r, a) {
  return c(), i("svg", yv, [
    Sv
  ]);
}
f6.render = Fv;
f6.__file = "packages/components/Sugar.vue";
const bv = f6;
var z6 = l({
  name: "Sunny"
});
const Dv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1);
function Pv(t, o, n, s, r, a) {
  return c(), i("svg", Dv, [
    qv
  ]);
}
z6.render = Pv;
z6.__file = "packages/components/Sunny.vue";
const Tv = z6;
var x6 = l({
  name: "Sunrise"
});
const Rv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ov = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
}, null, -1);
function Ev(t, o, n, s, r, a) {
  return c(), i("svg", Rv, [
    Ov
  ]);
}
x6.render = Ev;
x6.__file = "packages/components/Sunrise.vue";
const Iv = x6;
var C6 = l({
  name: "Switch"
});
const Nv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Uv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1);
function Gv(t, o, n, s, r, a) {
  return c(), i("svg", Nv, [
    Uv
  ]);
}
C6.render = Gv;
C6.__file = "packages/components/Switch.vue";
const jv = C6;
var H6 = l({
  name: "Ticket"
});
const Wv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Kv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
}, null, -1);
function Zv(t, o, n, s, r, a) {
  return c(), i("svg", Wv, [
    Kv
  ]);
}
H6.render = Zv;
H6.__file = "packages/components/Ticket.vue";
const Jv = H6;
var M6 = l({
  name: "Sunset"
});
const Qv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xv = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
function Yv(t, o, n, s, r, a) {
  return c(), i("svg", Qv, [
    Xv
  ]);
}
M6.render = Yv;
M6.__file = "packages/components/Sunset.vue";
const tm = M6;
var V6 = l({
  name: "Tickets"
});
const em = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, om = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1);
function nm(t, o, n, s, r, a) {
  return c(), i("svg", em, [
    om
  ]);
}
V6.render = nm;
V6.__file = "packages/components/Tickets.vue";
const sm = V6;
var k6 = l({
  name: "SwitchButton"
});
const rm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, am = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1), cm = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1);
function lm(t, o, n, s, r, a) {
  return c(), i("svg", rm, [
    am,
    cm
  ]);
}
k6.render = lm;
k6.__file = "packages/components/SwitchButton.vue";
const im = k6;
var B6 = l({
  name: "TakeawayBox"
});
const pm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $m = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
}, null, -1);
function hm(t, o, n, s, r, a) {
  return c(), i("svg", pm, [
    $m
  ]);
}
B6.render = hm;
B6.__file = "packages/components/TakeawayBox.vue";
const _m = B6;
var L6 = l({
  name: "ToiletPaper"
});
const dm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, um = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1), vm = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
}, null, -1);
function mm(t, o, n, s, r, a) {
  return c(), i("svg", dm, [
    um,
    vm
  ]);
}
L6.render = mm;
L6.__file = "packages/components/ToiletPaper.vue";
const wm = L6;
var A6 = l({
  name: "Timer"
});
const gm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fm = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), zm = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1), xm = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1);
function Cm(t, o, n, s, r, a) {
  return c(), i("svg", gm, [
    fm,
    zm,
    xm
  ]);
}
A6.render = Cm;
A6.__file = "packages/components/Timer.vue";
const Hm = A6;
var y6 = l({
  name: "Tools"
});
const Mm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vm = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
}, null, -1);
function km(t, o, n, s, r, a) {
  return c(), i("svg", Mm, [
    Vm
  ]);
}
y6.render = km;
y6.__file = "packages/components/Tools.vue";
const Bm = y6;
var S6 = l({
  name: "TopLeft"
});
const Lm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Am = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1), ym = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
}, null, -1);
function Sm(t, o, n, s, r, a) {
  return c(), i("svg", Lm, [
    Am,
    ym
  ]);
}
S6.render = Sm;
S6.__file = "packages/components/TopLeft.vue";
const Fm = S6;
var F6 = l({
  name: "Top"
});
const bm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Dm = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
}, null, -1);
function qm(t, o, n, s, r, a) {
  return c(), i("svg", bm, [
    Dm
  ]);
}
F6.render = qm;
F6.__file = "packages/components/Top.vue";
const Pm = F6;
var b6 = l({
  name: "TopRight"
});
const Tm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rm = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1), Om = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
}, null, -1);
function Em(t, o, n, s, r, a) {
  return c(), i("svg", Tm, [
    Rm,
    Om
  ]);
}
b6.render = Em;
b6.__file = "packages/components/TopRight.vue";
const Im = b6;
var D6 = l({
  name: "TrendCharts"
});
const Nm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Um = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
}, null, -1);
function Gm(t, o, n, s, r, a) {
  return c(), i("svg", Nm, [
    Um
  ]);
}
D6.render = Gm;
D6.__file = "packages/components/TrendCharts.vue";
const jm = D6;
var q6 = l({
  name: "TurnOff"
});
const Wm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Km = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), Zm = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1);
function Jm(t, o, n, s, r, a) {
  return c(), i("svg", Wm, [
    Km,
    Zm
  ]);
}
q6.render = Jm;
q6.__file = "packages/components/TurnOff.vue";
const Qm = q6;
var P6 = l({
  name: "Unlock"
});
const Xm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ym = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), tw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
}, null, -1);
function ew(t, o, n, s, r, a) {
  return c(), i("svg", Xm, [
    Ym,
    tw
  ]);
}
P6.render = ew;
P6.__file = "packages/components/Unlock.vue";
const ow = P6;
var T6 = l({
  name: "Trophy"
});
const nw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
}, null, -1);
function rw(t, o, n, s, r, a) {
  return c(), i("svg", nw, [
    sw
  ]);
}
T6.render = rw;
T6.__file = "packages/components/Trophy.vue";
const aw = T6;
var R6 = l({
  name: "Umbrella"
});
const cw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
}, null, -1);
function iw(t, o, n, s, r, a) {
  return c(), i("svg", cw, [
    lw
  ]);
}
R6.render = iw;
R6.__file = "packages/components/Umbrella.vue";
const pw = R6;
var O6 = l({
  name: "UploadFilled"
});
const $w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
}, null, -1);
function _w(t, o, n, s, r, a) {
  return c(), i("svg", $w, [
    hw
  ]);
}
O6.render = _w;
O6.__file = "packages/components/UploadFilled.vue";
const dw = O6;
var E6 = l({
  name: "UserFilled"
});
const uw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
}, null, -1);
function mw(t, o, n, s, r, a) {
  return c(), i("svg", uw, [
    vw
  ]);
}
E6.render = mw;
E6.__file = "packages/components/UserFilled.vue";
const ww = E6;
var I6 = l({
  name: "Upload"
});
const gw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
}, null, -1);
function zw(t, o, n, s, r, a) {
  return c(), i("svg", gw, [
    fw
  ]);
}
I6.render = zw;
I6.__file = "packages/components/Upload.vue";
const xw = I6;
var N6 = l({
  name: "User"
});
const Cw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1);
function Mw(t, o, n, s, r, a) {
  return c(), i("svg", Cw, [
    Hw
  ]);
}
N6.render = Mw;
N6.__file = "packages/components/User.vue";
const Vw = N6;
var U6 = l({
  name: "Van"
});
const kw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
}, null, -1);
function Lw(t, o, n, s, r, a) {
  return c(), i("svg", kw, [
    Bw
  ]);
}
U6.render = Lw;
U6.__file = "packages/components/Van.vue";
const Aw = U6;
var G6 = l({
  name: "CopyDocument"
});
const yw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1), Fw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
}, null, -1);
function bw(t, o, n, s, r, a) {
  return c(), i("svg", yw, [
    Sw,
    Fw
  ]);
}
G6.render = bw;
G6.__file = "packages/components/CopyDocument.vue";
const Dw = G6;
var j6 = l({
  name: "VideoPause"
});
const qw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
}, null, -1);
function Tw(t, o, n, s, r, a) {
  return c(), i("svg", qw, [
    Pw
  ]);
}
j6.render = Tw;
j6.__file = "packages/components/VideoPause.vue";
const Rw = j6;
var W6 = l({
  name: "VideoCameraFilled"
});
const Ow = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ew = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
}, null, -1);
function Iw(t, o, n, s, r, a) {
  return c(), i("svg", Ow, [
    Ew
  ]);
}
W6.render = Iw;
W6.__file = "packages/components/VideoCameraFilled.vue";
const Nw = W6;
var K6 = l({
  name: "View"
});
const Uw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1);
function jw(t, o, n, s, r, a) {
  return c(), i("svg", Uw, [
    Gw
  ]);
}
K6.render = jw;
K6.__file = "packages/components/View.vue";
const Ww = K6;
var Z6 = l({
  name: "Wallet"
});
const Kw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1), Jw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1), Qw = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1);
function Xw(t, o, n, s, r, a) {
  return c(), i("svg", Kw, [
    Zw,
    Jw,
    Qw
  ]);
}
Z6.render = Xw;
Z6.__file = "packages/components/Wallet.vue";
const Yw = Z6;
var J6 = l({
  name: "WarningFilled"
});
const tg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, eg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1);
function og(t, o, n, s, r, a) {
  return c(), i("svg", tg, [
    eg
  ]);
}
J6.render = og;
J6.__file = "packages/components/WarningFilled.vue";
const ng = J6;
var Q6 = l({
  name: "Watch"
});
const sg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), ag = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1), cg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
}, null, -1);
function lg(t, o, n, s, r, a) {
  return c(), i("svg", sg, [
    rg,
    ag,
    cg
  ]);
}
Q6.render = lg;
Q6.__file = "packages/components/Watch.vue";
const ig = Q6;
var X6 = l({
  name: "VideoPlay"
});
const pg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $g = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
}, null, -1);
function hg(t, o, n, s, r, a) {
  return c(), i("svg", pg, [
    $g
  ]);
}
X6.render = hg;
X6.__file = "packages/components/VideoPlay.vue";
const _g = X6;
var Y6 = l({
  name: "Watermelon"
});
const dg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ug = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
}, null, -1);
function vg(t, o, n, s, r, a) {
  return c(), i("svg", dg, [
    ug
  ]);
}
Y6.render = vg;
Y6.__file = "packages/components/Watermelon.vue";
const mg = Y6;
var t3 = l({
  name: "VideoCamera"
});
const wg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
}, null, -1);
function fg(t, o, n, s, r, a) {
  return c(), i("svg", wg, [
    gg
  ]);
}
t3.render = fg;
t3.__file = "packages/components/VideoCamera.vue";
const zg = t3;
var e3 = l({
  name: "WalletFilled"
});
const xg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
}, null, -1);
function Hg(t, o, n, s, r, a) {
  return c(), i("svg", xg, [
    Cg
  ]);
}
e3.render = Hg;
e3.__file = "packages/components/WalletFilled.vue";
const Mg = e3;
var o3 = l({
  name: "Warning"
});
const Vg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1);
function Bg(t, o, n, s, r, a) {
  return c(), i("svg", Vg, [
    kg
  ]);
}
o3.render = Bg;
o3.__file = "packages/components/Warning.vue";
const Lg = o3;
var n3 = l({
  name: "List"
});
const Ag = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
}, null, -1);
function Sg(t, o, n, s, r, a) {
  return c(), i("svg", Ag, [
    yg
  ]);
}
n3.render = Sg;
n3.__file = "packages/components/List.vue";
const Fg = n3;
var s3 = l({
  name: "ZoomIn"
});
const bg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Dg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1);
function qg(t, o, n, s, r, a) {
  return c(), i("svg", bg, [
    Dg
  ]);
}
s3.render = qg;
s3.__file = "packages/components/ZoomIn.vue";
const Pg = s3;
var r3 = l({
  name: "ZoomOut"
});
const Tg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
function Og(t, o, n, s, r, a) {
  return c(), i("svg", Tg, [
    Rg
  ]);
}
r3.render = Og;
r3.__file = "packages/components/ZoomOut.vue";
const Eg = r3;
var a3 = l({
  name: "Rank"
});
const Ig = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ng = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
}, null, -1);
function Ug(t, o, n, s, r, a) {
  return c(), i("svg", Ig, [
    Ng
  ]);
}
a3.render = Ug;
a3.__file = "packages/components/Rank.vue";
const Gg = a3;
var c3 = l({
  name: "WindPower"
});
const jg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Wg = /* @__PURE__ */ e("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1);
function Kg(t, o, n, s, r, a) {
  return c(), i("svg", jg, [
    Wg
  ]);
}
c3.render = Kg;
c3.__file = "packages/components/WindPower.vue";
const Zg = c3, Jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Aim: _8,
  AddLocation: g8,
  Apple: C8,
  AlarmClock: B8,
  ArrowDown: S8,
  ArrowDownBold: q8,
  ArrowLeft: O8,
  ArrowLeftBold: U8,
  ArrowRightBold: K8,
  ArrowUp: X8,
  Back: ne,
  Bell: ie,
  Baseball: de,
  Bicycle: xe,
  BellFilled: Ve,
  Basketball: Ae,
  Bottom: be,
  Box: Oe,
  Briefcase: Ue,
  BrushFilled: Ke,
  Bowl: Xe,
  Avatar: oo,
  Brush: ao,
  Burger: po,
  Camera: uo,
  BottomLeft: fo,
  Calendar: Ho,
  CaretBottom: Bo,
  CaretLeft: So,
  CaretRight: qo,
  CaretTop: Oo,
  ChatDotSquare: Go,
  Cellphone: Zo,
  ChatDotRound: tn,
  ChatLineSquare: rn,
  ChatLineRound: $n,
  ChatRound: un,
  Check: gn,
  ChatSquare: Cn,
  Cherry: kn,
  Chicken: yn,
  CircleCheckFilled: Dn,
  CircleCheck: On,
  Checked: Un,
  CircleCloseFilled: Kn,
  CircleClose: Yn,
  ArrowRight: ns,
  CirclePlus: is,
  Clock: us,
  CloseBold: gs,
  Close: Cs,
  Cloudy: ks,
  CirclePlusFilled: ys,
  CoffeeCup: Ds,
  ColdDrink: Rs,
  Coin: Gs,
  ArrowUpBold: Zs,
  CollectionTag: Ys,
  BottomRight: sr,
  Coffee: lr,
  CameraFilled: hr,
  Collection: mr,
  Cpu: xr,
  Crop: kr,
  Coordinate: Sr,
  DArrowLeft: qr,
  Compass: Er,
  Connection: jr,
  CreditCard: Qr,
  DataBoard: na,
  DArrowRight: ca,
  Dessert: $a,
  DeleteLocation: ma,
  DCaret: za,
  Delete: Ma,
  Dish: La,
  DishDot: Fa,
  DocumentCopy: Pa,
  Discount: Ia,
  DocumentChecked: ja,
  DocumentAdd: Ja,
  DocumentRemove: tc,
  DataAnalysis: sc,
  DeleteFilled: lc,
  Download: hc,
  Drizzling: vc,
  Eleme: fc,
  ElemeFilled: Hc,
  Edit: Lc,
  Failed: Fc,
  Expand: Pc,
  Female: Nc,
  Document: Wc,
  Film: Xc,
  Finished: o5,
  DataLine: a5,
  Filter: p5,
  Flag: d5,
  FolderChecked: w5,
  FirstAidKit: C5,
  FolderAdd: k5,
  Fold: y5,
  FolderDelete: D5,
  DocumentDelete: R5,
  Folder: N5,
  Food: W5,
  FolderOpened: Q5,
  Football: ol,
  FolderRemove: al,
  Fries: pl,
  FullScreen: dl,
  ForkSpoon: wl,
  Goblet: xl,
  GobletFull: Vl,
  Goods: Al,
  GobletSquareFull: bl,
  GoodsFilled: Tl,
  Grid: Il,
  Grape: jl,
  GobletSquare: Jl,
  Headset: ti,
  Comment: si,
  HelpFilled: li,
  Histogram: hi,
  HomeFilled: vi,
  Help: fi,
  House: Hi,
  IceCreamRound: Bi,
  HotWater: Si,
  IceCream: qi,
  Files: Oi,
  IceCreamSquare: Ui,
  Key: Ki,
  IceTea: Xi,
  KnifeFork: o9,
  Iphone: a9,
  InfoFilled: p9,
  Link: d9,
  IceDrink: w9,
  Lightning: C9,
  Loading: k9,
  Lollipop: y9,
  LocationInformation: P9,
  Lock: I9,
  LocationFilled: j9,
  Magnet: J9,
  Male: op,
  Location: cp,
  Menu: $p,
  MagicStick: up,
  MessageBox: gp,
  MapLocation: Hp,
  Mic: Bp,
  Message: Fp,
  Medal: Tp,
  MilkTea: Ip,
  Microphone: jp,
  Minus: Jp,
  Money: o7,
  MoonNight: c7,
  Monitor: $7,
  Moon: u7,
  More: g7,
  MostlyCloudy: C7,
  MoreFilled: k7,
  Mouse: S7,
  Mug: q7,
  Mute: E7,
  NoSmoking: G7,
  MuteNotification: J7,
  Notification: e$,
  Notebook: a$,
  Odometer: h$,
  OfficeBuilding: w$,
  Operation: x$,
  Opportunity: V$,
  Orange: A$,
  Open: D$,
  Paperclip: R$,
  Pear: N$,
  PartlyCloudy: K$,
  Phone: X$,
  PictureFilled: oh,
  PhoneFilled: ah,
  PictureRounded: $h,
  Guide: vh,
  Place: xh,
  Platform: Vh,
  PieChart: yh,
  Pointer: Dh,
  Plus: Rh,
  Position: Nh,
  Postcard: Kh,
  Present: e_,
  PriceTag: a_,
  Promotion: p_,
  Pouring: d_,
  ReadingLamp: g_,
  QuestionFilled: C_,
  Printer: k_,
  Picture: S_,
  RefreshRight: q_,
  Reading: E_,
  RefreshLeft: G_,
  Refresh: Z_,
  Refrigerator: Y_,
  RemoveFilled: nd,
  Right: cd,
  ScaleToOriginal: $d,
  School: md,
  Remove: xd,
  Scissor: Vd,
  Select: Ad,
  Management: bd,
  Search: Td,
  Sell: Id,
  SemiSelect: jd,
  Share: Jd,
  Setting: tu,
  Service: su,
  Ship: lu,
  SetUp: uu,
  ShoppingBag: fu,
  Shop: Hu,
  ShoppingCart: Bu,
  ShoppingCartFull: Fu,
  Soccer: Pu,
  SoldOut: Eu,
  Smoking: ju,
  SortDown: Ju,
  Sort: tv,
  SortUp: sv,
  Star: lv,
  Stamp: hv,
  StarFilled: vv,
  Stopwatch: zv,
  SuccessFilled: Mv,
  Suitcase: Av,
  Sugar: bv,
  Sunny: Tv,
  Sunrise: Iv,
  Switch: jv,
  Ticket: Jv,
  Sunset: tm,
  Tickets: sm,
  SwitchButton: im,
  TakeawayBox: _m,
  ToiletPaper: wm,
  Timer: Hm,
  Tools: Bm,
  TopLeft: Fm,
  Top: Pm,
  TopRight: Im,
  TrendCharts: jm,
  TurnOff: Qm,
  Unlock: ow,
  Trophy: aw,
  Umbrella: pw,
  UploadFilled: dw,
  UserFilled: ww,
  Upload: xw,
  User: Vw,
  Van: Aw,
  CopyDocument: Dw,
  VideoPause: Rw,
  VideoCameraFilled: Nw,
  View: Ww,
  Wallet: Yw,
  WarningFilled: ng,
  Watch: ig,
  VideoPlay: _g,
  Watermelon: mg,
  VideoCamera: zg,
  WalletFilled: Mg,
  Warning: Lg,
  List: Fg,
  ZoomIn: Pg,
  ZoomOut: Eg,
  Rank: Gg,
  WindPower: Zg
}, Symbol.toStringTag, { value: "Module" })), Qg = { class: "rc-choose-icon-dialog-body-height" }, Xg = { class: "container" }, Yg = ["onClick"], tf = { class: "text" }, ef = /* @__PURE__ */ l({
  props: {
    title: null,
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(t, { emit: o }) {
    const n = t;
    let s = k(n.visible);
    const r = () => {
      o("update:visible", !n.visible);
    }, a = ($) => {
      let h = `<el-icon-${$3($)}/>`;
      l8(h), s.value = !1;
    };
    return y(
      () => n.visible,
      ($) => {
        s.value = $;
      }
    ), y(
      () => s.value,
      ($) => {
        o("update:visible", $);
      }
    ), ($, h) => {
      const d = A("el-button"), m = A("el-dialog");
      return c(), f(E, null, [
        e(d, {
          onClick: r,
          type: "primary"
        }, {
          default: V(() => [
            F($.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }),
        g("div", Qg, [
          e(m, {
            title: t.title,
            modelValue: v(s),
            "onUpdate:modelValue": h[0] || (h[0] = (u) => I3(s) ? s.value = u : s = u)
          }, {
            default: V(() => [
              g("div", Xg, [
                (c(!0), f(E, null, N3(Object.keys(v(Jg)), (u, p) => (c(), f("div", {
                  class: "item",
                  key: p,
                  onClick: (_) => a(u)
                }, [
                  g("div", null, [
                    (c(), i(H3(`el-icon-${v($3)(u)}`)))
                  ]),
                  g("div", tf, W(u), 1)
                ], 8, Yg))), 128))
              ])
            ]),
            _: 1
          }, 8, ["title", "modelValue"])
        ])
      ], 64);
    };
  }
});
const of = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [s, r] of o)
    n[s] = r;
  return n;
}, nf = /* @__PURE__ */ of(ef, [["__scopeId", "data-v-c6ab2b18"]]), rf = {
  install(t) {
    t.component("rc-choose-icon", nf);
  }
};
export {
  rf as default
};
