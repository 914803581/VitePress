import {
  n
} from "./chunk-XN6EJXMO.js";
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  watch
} from "./chunk-KNEM4EPR.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/@fuxishi/vitepress-theme/dist/chunk/FxCodeBlockFold-DGFv2bTG.js
import { useRoute as o } from "vitepress";
var s = "fx-code-folded";
var c = "fx-code-fold-overlay";
var l = "div[class*='language-']";
var u = defineComponent({
  props: { lines: {
    type: Number,
    default: 10
  } },
  setup(t) {
    function u2() {
      let n2 = t.lines ?? 10;
      document.querySelectorAll(l).forEach((t2) => {
        if (t2.classList.contains(c) || t2.classList.contains("vp-code-group")) return;
        let r = t2.querySelector("pre.shiki code");
        if (!r) return;
        if (r.querySelectorAll(".line").length <= n2) {
          t2.classList.add("fx-code-no-fold");
          return;
        }
        if (t2.querySelector(`.${c}`)) return;
        t2.classList.add(s), t2.classList.add("fx-code-foldable");
        let i = document.createElement("div");
        i.className = c;
        let a = document.createElement("span");
        a.className = "fx-code-fold-label", a.innerHTML = `展开${n("fold")}`, i.appendChild(a), i.addEventListener("click", () => {
          let n3 = t2.classList.toggle(s);
          i.classList.toggle("fx-code-fold-expanded", !n3), a.innerHTML = n3 ? `展开${n("fold")}` : `收起${n("unfold")}`;
        }), t2.appendChild(i);
      });
    }
    let d = null;
    function f() {
      d?.disconnect();
      let e = document.querySelector(".vp-doc");
      e && (d = new MutationObserver(() => {
        requestAnimationFrame(u2);
      }), d.observe(e, {
        childList: true,
        subtree: true
      }));
    }
    onMounted(() => {
      u2(), f();
    });
    let p = o();
    return watch(() => p.path, () => {
      nextTick(() => {
        u2(), f();
      });
    }), onBeforeUnmount(() => {
      d?.disconnect();
    }), () => null;
  }
});
export {
  u as default
};
//# sourceMappingURL=FxCodeBlockFold-DGFv2bTG-XIFQNZV5.js.map
