import {
  ElTooltip
} from "./chunk-X7N7CVG6.js";
import "./chunk-LW3HCOH6.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createVNode,
  defineComponent,
  h,
  nextTick,
  normalizeClass,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  useSlots,
  vShow,
  withCtx,
  withDirectives
} from "./chunk-KNEM4EPR.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/@fuxishi/vitepress-theme/dist/index.js
import e from "vitepress/theme";
import { defineClientComponent as D, useData as O } from "vitepress";
var A = defineComponent({ setup(t, { slots: n }) {
  let r = n, { Layout: i } = e, { site: a, isDark: o } = O(), s = a.value.themeConfig;
  provide("toggle-appearance", async ({ clientX: e2, clientY: t2 }) => {
    if (!("startViewTransition" in document)) {
      o.value = !o.value;
      return;
    }
    let n2 = [`circle(0px at ${e2}px ${t2}px)`, `circle(${Math.hypot(Math.max(e2, innerWidth - e2), Math.max(t2, innerHeight - t2))}px at ${e2}px ${t2}px)`];
    await document.startViewTransition(async () => {
      o.value = !o.value, await nextTick();
    }).ready, document.documentElement.animate({ clipPath: o.value ? [...n2].reverse() : n2 }, {
      duration: 400,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: `::view-transition-${o.value ? "old" : "new"}(root)`
    });
  });
  let c = s.musicBall?.enable && (s.musicBall?.src || s.musicBall?.list?.length > 0), l = ref(), f = ref(""), h2 = ref(false), v, y = s.codeBlockFold !== false, b = typeof s.codeBlockFold == "object" ? s.codeBlockFold.lines : void 0;
  onMounted(() => {
    s.smoothScroll && document.documentElement.classList.add("fx-smooth-scroll"), y && document.documentElement.classList.add("fx-code-fold-enabled");
    let e2 = () => {
      let e3 = document.querySelector(".VPNavBarTitle .title span");
      e3 && (l.value = e3, f.value = e3.textContent || "", h2.value = e3.scrollWidth > e3.clientWidth);
    }, t2 = document.querySelector(".VPNavBarTitle .title");
    t2 && (v = new ResizeObserver(e2), v.observe(t2)), e2();
  }), onUnmounted(() => v?.disconnect());
  let x = D(() => import("./FxMusicBall-B2TF7Q7J-T43KOJKB.js"), [{ style: { display: s.musicBall && s.musicBall.visible ? "" : "none" } }]), S = D(() => import("./FxHomeFeatureBefore-BHzR4SeT-Z5B5POXP.js")), C = D(() => import("./FxConfetti-C8bEZxL7-R7XF64SN.js"), [{ confetti: s.confetti }]), w = D(() => import("./FxHeroImageBg-BWDDLukW-3X2MF2D7.js"), [{ heroImageColor: s.heroImageColor }]), T = D(() => import("./FxCodeBlockFold-DGFv2bTG-XIFQNZV5.js"), [{ lines: b }]);
  return () => [
    y && h("style", `:root{--fx-code-fold-lines:${b || 10}}`),
    s.heroImageColor && h("style", ":root{--vp-home-hero-image-background-image:none;--vp-home-hero-name-color:transparent;--vp-home-hero-name-background:none}"),
    h(i, null, {
      ...n,
      "home-features-before": () => [h(S), r["home-features-before"]?.()]
    }),
    c && h(x),
    s.confetti && h(C),
    s.heroImageColor && h(w),
    y && h(T),
    l.value && h(ElTooltip, {
      content: f.value,
      virtualTriggering: true,
      virtualRef: l.value,
      disabled: !h2.value,
      placement: "bottom"
    })
  ];
} });
var j = { class: "fx-preview-group" };
var M = { class: "fx-preview-group__toolbar" };
var N = { class: "fx-preview-group__tabs" };
var P = ["onClick"];
var F = ["title"];
var I = { class: "fx-preview-group__content" };
var L = defineComponent({
  __name: "PreviewGroup",
  props: { files: { default: () => [] } },
  setup(e2) {
    let i = e2, s = useSlots(), c = ref(false), l = ref(i.files[0] || ""), u = computed(() => i.files.map((e3) => ({
      label: e3,
      render: s[e3]
    }))), d = (e3) => {
      l.value = e3, c.value = true;
    };
    return (e3, n) => (openBlock(), createElementBlock("div", j, [createBaseVNode("div", M, [createBaseVNode("div", N, [(openBlock(true), createElementBlock(Fragment, null, renderList(u.value, (e4) => (openBlock(), createElementBlock("button", {
      key: e4.label,
      type: "button",
      class: normalizeClass(["fx-preview-group__tab", { "is-active": l.value === e4.label }]),
      onClick: (t) => d(e4.label)
    }, toDisplayString(e4.label), 11, P))), 128))]), createBaseVNode("button", {
      type: "button",
      class: normalizeClass(["fx-preview-group__toggle", { "is-expanded": c.value }]),
      title: c.value ? "收起源码" : "查看源码",
      onClick: n[0] ||= (e4) => c.value = !c.value
    }, [...n[1] ||= [createBaseVNode("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      "aria-hidden": "true"
    }, [createBaseVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m6 9 6 6 6-6"
    })], -1)]], 10, F)]), withDirectives(createBaseVNode("div", I, [(openBlock(true), createElementBlock(Fragment, null, renderList(u.value, (e4) => withDirectives((openBlock(), createElementBlock("div", {
      key: e4.label,
      class: "fx-preview-group__panel"
    }, [(openBlock(), createBlock(resolveDynamicComponent(e4.render)))])), [[vShow, l.value === e4.label]])), 128))], 512), [[vShow, c.value]])]));
  }
});
var R = { class: "fx-demo-preview" };
var z = { class: "fx-demo-preview__runner not-prose" };
var B = defineComponent({
  __name: "DemoPreview",
  props: { files: { default: "" } },
  setup(e2) {
    let t = e2, l = computed(() => {
      try {
        return JSON.parse(decodeURIComponent(t.files || ""));
      } catch {
        return [];
      }
    });
    return (e3, t2) => {
      let n = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("div", R, [createBaseVNode("div", z, [createVNode(n, null, {
        fallback: withCtx(() => [...t2[0] ||= [createBaseVNode("div", { class: "fx-demo-preview__loading" }, "加载预览中…", -1)]]),
        default: withCtx(() => [renderSlot(e3.$slots, "default")]),
        _: 3
      })]), l.value.length ? (openBlock(), createBlock(L, {
        key: 0,
        files: l.value
      }, createSlots({ _: 2 }, [renderList(l.value, (t3) => ({
        name: t3,
        fn: withCtx(() => [renderSlot(e3.$slots, t3)])
      }))]), 1032, ["files"])) : createCommentVNode("", true)]);
    };
  }
});
var V = {
  extends: e,
  Layout: A,
  enhanceApp({ app: e2 }) {
    e2.component("DemoPreview", B);
  }
};
export {
  V as default
};
//# sourceMappingURL=@fuxishi_vitepress-theme.js.map
