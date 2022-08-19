import { defineComponent as L, computed as u, resolveComponent as y, resolveDirective as A, openBlock as o, createElementBlock as s, Fragment as f, withDirectives as O, createBlock as b, mergeProps as $, withCtx as h, renderList as j, unref as l, renderSlot as C, createVNode as v, normalizeStyle as q, isRef as x, createCommentVNode as D } from "vue";
const U = /* @__PURE__ */ L({
  props: {
    options: {
      type: Array,
      require: !0
    },
    data: {
      type: Array,
      require: !0
    },
    elementLoadingText: {
      type: String
    },
    pagination: {
      type: Boolean,
      default: !1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: [10, 20, 30, 40, 50]
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number
    },
    paginationFlexType: {
      type: String,
      default: "left"
    }
  },
  emits: ["sizeChange", "currentChange"],
  setup(e, { emit: p }) {
    const a = e;
    let d = u(
      () => a.options.filter((n) => !n.action)
    ), r = u(() => a.options.find((n) => n.action)), S = u(() => a.data && !a.data.length), _ = (n) => {
      p("sizeChange", n);
    }, w = (n) => {
      p("currentChange", n);
    }, k = u(() => a.paginationFlexType === "left" ? "flex-start" : a.paginationFlexType === "center" ? "center" : "flex-end");
    return (n, g) => {
      const c = y("el-table-column"), P = y("el-table"), T = y("el-pagination"), F = A("loading");
      return o(), s(f, null, [
        O((o(), b(P, $(n.$attrs, {
          data: e.data,
          "element-loading-text": e.elementLoadingText
        }), {
          default: h(() => {
            var i, m, z;
            return [
              (o(!0), s(f, null, j(l(d), (t, N) => (o(), s(f, { key: N }, [
                t.slot ? (o(), b(c, {
                  key: 1,
                  label: t.label,
                  prop: t.prop,
                  align: t.align,
                  width: t.width
                }, {
                  default: h((B) => [
                    C(n.$slots, t.slot, { scope: B }, void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["label", "prop", "align", "width"])) : (o(), b(c, {
                  key: 0,
                  label: t.label,
                  prop: t.prop,
                  align: t.align,
                  width: t.width
                }, null, 8, ["label", "prop", "align", "width"]))
              ], 64))), 128)),
              v(c, {
                label: (i = l(r)) == null ? void 0 : i.label,
                align: (m = l(r)) == null ? void 0 : m.align,
                width: (z = l(r)) == null ? void 0 : z.width
              }, {
                default: h((t) => [
                  C(n.$slots, "action", { scope: t }, void 0, !0)
                ]),
                _: 3
              }, 8, ["label", "align", "width"])
            ];
          }),
          _: 3
        }, 16, ["data", "element-loading-text"])), [
          [F, l(S)]
        ]),
        e.pagination ? (o(), s("div", {
          key: 0,
          class: "pagination",
          style: q({ justifyContent: l(k) })
        }, [
          v(T, {
            currentPage: e.currentPage,
            "onUpdate:currentPage": g[0] || (g[0] = (i) => x(currentPage) ? currentPage.value = i : null),
            "page-size": e.pageSize,
            "onUpdate:page-size": g[1] || (g[1] = (i) => x(pageSize) ? pageSize.value = i : null),
            "page-sizes": e.pageSizes,
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total,
            onSizeChange: l(_),
            onCurrentChange: l(w)
          }, null, 8, ["currentPage", "page-size", "page-sizes", "total", "onSizeChange", "onCurrentChange"])
        ], 4)) : D("", !0)
      ], 64);
    };
  }
});
const V = (e, p) => {
  const a = e.__vccOpts || e;
  for (const [d, r] of p)
    a[d] = r;
  return a;
}, E = /* @__PURE__ */ V(U, [["__scopeId", "data-v-81b82625"]]), J = {
  install(e) {
    e.component("rc-table", E);
  }
};
export {
  J as default
};
