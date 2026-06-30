import {
  defineComponent,
  onBeforeUnmount,
  onMounted
} from "./chunk-KNEM4EPR.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/@fuxishi/vitepress-theme/dist/chunk/FxHomeFeatureBefore-BHzR4SeT.js
var r = defineComponent({ setup() {
  let e = [
    "#f00",
    "#0f0",
    "#f0f",
    "#0ff",
    "#FE7300",
    "#008EFF",
    "#8B5CF6",
    "#10B981"
  ], r2 = 0;
  function i(e2) {
    cancelAnimationFrame(r2), r2 = requestAnimationFrame(() => {
      let t = e2.target.closest(".VPFeature");
      if (!t) return;
      let n = t.getBoundingClientRect();
      t.style.setProperty("--x", e2.clientX - n.left + "px"), t.style.setProperty("--y", e2.clientY - n.top + "px");
    });
  }
  function a() {
    document.querySelectorAll(".VPHomeFeatures .VPFeature").forEach((t, n) => {
      t.style.setProperty("--color", e[n % e.length]);
    });
  }
  let o = null;
  return onMounted(() => {
    document.addEventListener("mousemove", i);
    let e2 = document.querySelector(".VPHomeFeatures");
    e2 && (o = new MutationObserver(a), o.observe(e2, {
      childList: true,
      subtree: true
    })), a();
  }), onBeforeUnmount(() => {
    cancelAnimationFrame(r2), document.removeEventListener("mousemove", i), o?.disconnect();
  }), () => null;
} });
export {
  r as default
};
//# sourceMappingURL=FxHomeFeatureBefore-BHzR4SeT-Z5B5POXP.js.map
