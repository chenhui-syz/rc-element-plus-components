import { defineComponent as g, ref as p, watch as d, resolveComponent as m, openBlock as y, createElementBlock as h, normalizeClass as V, createVNode as u, mergeProps as B, unref as f, isRef as C, withCtx as t, renderSlot as a } from "vue";
const k = /* @__PURE__ */ g({
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      require: !0
    },
    isScroll: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible"],
  setup(l, { emit: c }) {
    const i = l;
    let r = p(null), o = p(i.visible);
    return d(
      () => i.visible,
      (e) => {
        o.value = e;
      }
    ), d(
      () => o.value,
      (e) => {
        c("update:visible", e);
      }
    ), (e, s) => {
      const v = m("m-form"), b = m("el-dialog");
      return y(), h("div", {
        class: V({ "rc-choose-icon-dialog-body-height": l.isScroll })
      }, [
        u(b, B({
          modelValue: f(o),
          "onUpdate:modelValue": s[0] || (s[0] = (n) => C(o) ? o.value = n : o = n)
        }, e.$attrs), {
          default: t(() => [
            u(v, {
              "label-width": "100px",
              options: l.options,
              ref_key: "form",
              ref: r
            }, {
              uploadArea: t(() => [
                a(e.$slots, "uploadArea")
              ]),
              uploadTip: t(() => [
                a(e.$slots, "uploadTip")
              ]),
              _: 3
            }, 8, ["options"])
          ]),
          footer: t(() => [
            a(e.$slots, "footer", { form: f(r) })
          ]),
          _: 3
        }, 16, ["modelValue"])
      ], 2);
    };
  }
}), A = {
  install(l) {
    l.component("rc-modal-form", k);
  }
};
export {
  A as default
};
