import {
  n
} from "./chunk-XN6EJXMO.js";
import {
  ElSlider
} from "./chunk-X7N7CVG6.js";
import "./chunk-LW3HCOH6.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  nextTick,
  normalizeClass,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  vShow,
  watchEffect,
  withDirectives
} from "./chunk-KNEM4EPR.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/@fuxishi/vitepress-theme/dist/chunk/FxMusicBall-B2TF7Q7J.js
import { useData as y, withBase as b } from "vitepress";
var S = [
  "src",
  "autoplay",
  "loop"
];
var C = ["src", "autoplay"];
var w = { class: "fx-music-ball__inner" };
var T = { class: "fx-play-pause" };
var E = ["innerHTML"];
var D = ["innerHTML"];
var O = { class: "fx-time" };
var k = { class: "fx-duration" };
var te = { class: "fx-volume" };
var ne = ["innerHTML"];
var re = ["innerHTML"];
var ie = ["innerHTML"];
var ae = {
  id: "fx-progress-gradient",
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "100%"
};
var oe = ["stop-color"];
var se = ["stop-color"];
var ce = ["stroke-dasharray"];
var le = {
  key: 2,
  class: "fx-orbit-ring"
};
var ue = {
  key: 3,
  class: "fx-music-list"
};
var de = ["onClick"];
var fe = ["d"];
var A = defineComponent({
  __name: "FxMusicBall",
  setup(s) {
    let A2 = [
      "M123.252 73.826h111.169v790.935h-111.169z",
      "M346.361 465.952h111.169v395.467h-111.169z",
      "M569.466 229.325h111.169v636.444h-111.169z",
      "M792.574 391.584h111.169v475.788h-111.169z"
    ], { site: j } = y(), M = j.value.themeConfig.musicBall, N = ref(null), P = ref(0), F = ref(0), I = ref(0), L = ref(false), R = ref(50), z = ref(false), B = ref(0), V = ref(!!M.autoplay), H = ref(false), U = 2 * Math.PI * 22, W = ref("#bd34fe"), G = ref("#41d1ff");
    function K() {
      let e = getComputedStyle(document.documentElement), t = e.getPropertyValue("--fx-beam-c1").trim(), n2 = e.getPropertyValue("--fx-beam-c2").trim();
      t && (W.value = `rgb(${t})`), n2 && (G.value = `rgb(${n2})`);
    }
    let q = null;
    onMounted(() => {
      K(), q = new MutationObserver((e) => {
        for (let t of e) if (t.attributeName === "style") {
          K();
          break;
        }
      }), q.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["style"]
      });
    }), onBeforeUnmount(() => {
      q?.disconnect();
    });
    let pe = computed(() => {
      let e = U - X.value / 100 * U;
      return `${U - e} ${e}`;
    }), J = computed(() => M.src || M.list?.length === 1), me = computed(() => b(M.src || M.list?.[0]?.src || "")), Y = computed(() => (M.list || []).map((e) => ({
      ...e,
      src: b(e.src)
    }))), X = computed({
      get() {
        return I.value / P.value * 100 || 0;
      },
      set(e) {
        F.value = P.value * e / 100, !L.value && N.value && (N.value.currentTime = F.value);
      }
    }), he = computed(() => $(P.value)), Z = computed(() => $(I.value));
    watchEffect(() => {
      N.value && (z.value = false, N.value.volume = R.value / 100);
    }), watchEffect(() => {
      N.value && (N.value.muted = z.value);
    });
    let Q = {};
    onMounted(() => {
      let e = N.value;
      if (!e) return;
      let t = {
        play: () => {
          L.value = true;
        },
        pause: () => {
          L.value = false;
        },
        timeupdate: () => {
          P.value = e.duration, I.value = e.currentTime;
        },
        canplay: () => {
          P.value = e.duration;
        },
        ended: () => {
          if (B.value + 1 > Y.value.length - 1) {
            if (!M.loop) {
              L.value = false;
              return;
            }
            B.value = 0;
          } else B.value++;
          nextTick(() => e.play());
        }
      };
      for (let [n2, r] of Object.entries(t)) e.addEventListener(n2, r);
      Q = t;
    }), onBeforeUnmount(() => {
      let e = N.value;
      if (e) {
        for (let [t, n2] of Object.entries(Q)) e.removeEventListener(t, n2);
        Q = {};
      }
    });
    let ge = () => {
      L.value = !L.value, L.value ? N.value?.play() : N.value?.pause(), !J.value && !V.value && (V.value = true);
    }, _e = () => {
      N.value && (N.value.currentTime = F.value);
    }, ve = (e) => {
      V.value = true, B.value = e;
    }, ye = () => {
      H.value = false;
    };
    function $(e) {
      return e = Math.max(0, Number(e) || 0), `${Math.floor(e % 3600 / 60)}:${Math.floor(e % 60).toString().padStart(2, "0")}`;
    }
    return (n2, s2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["fx-music-ball", {
        active: H.value,
        "is-playing": L.value
      }]),
      onMouseleave: ye
    }, [
      J.value ? (openBlock(), createElementBlock("audio", {
        key: 0,
        class: "audio",
        src: me.value,
        autoplay: unref(M).autoplay,
        loop: unref(M).loop,
        style: { display: "none" },
        ref_key: "audioRef",
        ref: N
      }, null, 8, S)) : (openBlock(), createElementBlock("audio", {
        key: 1,
        class: "audio",
        src: Y.value[B.value]?.src,
        autoplay: V.value,
        style: { display: "none" },
        ref_key: "audioRef",
        ref: N
      }, null, 8, C)),
      createBaseVNode("div", w, [
        createBaseVNode("div", T, [withDirectives(createBaseVNode("span", { innerHTML: unref(n)("music-ball/playfill", 20) }, null, 8, E), [[vShow, !L.value]]), withDirectives(createBaseVNode("span", { innerHTML: unref(n)("music-ball/pause", 26) }, null, 8, D), [[vShow, L.value]])]),
        createBaseVNode("div", O, toDisplayString(Z.value) + " / " + toDisplayString(he.value), 1),
        createBaseVNode("div", k, [createVNode(unref(ElSlider), {
          style: { width: "100%" },
          "show-tooltip": false,
          modelValue: X.value,
          "onUpdate:modelValue": s2[0] ||= (e) => X.value = e,
          onChange: _e
        }, null, 8, ["modelValue"])]),
        createBaseVNode("div", te, [
          createVNode(unref(ElSlider), {
            style: { width: "100%" },
            "show-tooltip": false,
            modelValue: R.value,
            "onUpdate:modelValue": s2[1] ||= (e) => R.value = e
          }, null, 8, ["modelValue"]),
          withDirectives(createBaseVNode("span", {
            class: "fx-icon-volume",
            onClick: s2[2] ||= (e) => z.value = !z.value,
            innerHTML: unref(n)("music-ball/volume_off", 20)
          }, null, 8, ne), [[vShow, z.value]]),
          withDirectives(createBaseVNode("span", {
            class: "fx-icon-volume",
            onClick: s2[3] ||= (e) => z.value = !z.value,
            innerHTML: unref(n)("music-ball/volume_up", 20)
          }, null, 8, re), [[vShow, !z.value]])
        ]),
        J.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fx-music-list-button",
          onClick: s2[4] ||= (e) => H.value = !H.value
        }, [createBaseVNode("span", { innerHTML: unref(n)("music-ball/music_list", 20) }, null, 8, ie)]))
      ]),
      (openBlock(), createElementBlock("svg", {
        class: "fx-progress-ring",
        width: "50",
        height: "50",
        viewBox: "0 0 50 50",
        onClick: ge
      }, [
        createBaseVNode("defs", null, [createBaseVNode("linearGradient", ae, [createBaseVNode("stop", {
          offset: "0%",
          "stop-color": W.value
        }, null, 8, oe), createBaseVNode("stop", {
          offset: "100%",
          "stop-color": G.value
        }, null, 8, se)])]),
        s2[5] ||= createBaseVNode("circle", {
          class: "fx-progress-track",
          cx: "25",
          cy: "25",
          r: "22",
          fill: "none",
          "stroke-width": "2.5"
        }, null, -1),
        createBaseVNode("circle", {
          class: "fx-progress-bar",
          cx: "25",
          cy: "25",
          r: "22",
          fill: "none",
          stroke: "url(#fx-progress-gradient)",
          "stroke-width": "2.5",
          "stroke-linecap": "round",
          "stroke-dasharray": pe.value
        }, null, 8, ce)
      ])),
      L.value ? (openBlock(), createElementBlock("div", le)) : createCommentVNode("", true),
      H.value ? (openBlock(), createElementBlock("div", ue, [(openBlock(true), createElementBlock(Fragment, null, renderList(Y.value, (e, n3) => (openBlock(), createElementBlock("div", {
        class: normalizeClass(["fx-music-list-item", B.value === n3 ? "active" : ""]),
        key: n3,
        onClick: (e2) => ve(n3)
      }, [B.value === n3 ? (openBlock(), createElementBlock("svg", {
        key: 0,
        class: normalizeClass(["image-live", { playing: L.value }]),
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg"
      }, [(openBlock(), createElementBlock(Fragment, null, renderList(A2, (e2, t) => createBaseVNode("path", {
        key: t,
        d: e2,
        class: normalizeClass(["bar", `bar-${t + 1}`])
      }, null, 10, fe)), 64))], 2)) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(e.name), 1)], 10, de))), 128)), s2[6] ||= createBaseVNode("div", { class: "fx-music-list-sep" }, null, -1)])) : createCommentVNode("", true)
    ], 34));
  }
});
export {
  A as default
};
//# sourceMappingURL=FxMusicBall-B2TF7Q7J-T43KOJKB.js.map
