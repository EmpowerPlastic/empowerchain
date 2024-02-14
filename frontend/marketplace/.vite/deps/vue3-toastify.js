import {
  Fragment,
  cloneVNode,
  computed,
  createApp,
  createVNode,
  defineComponent,
  h,
  isVNode,
  mergeProps,
  nextTick,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRaw,
  watchEffect
} from "./chunk-6KIS374E.js";
import "./chunk-I7XXR53E.js";

// node_modules/vue3-toastify/dist/index.mjs
var k = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
};
var M = {
  LIGHT: "light",
  DARK: "dark",
  COLORED: "colored",
  AUTO: "auto"
};
var g = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
};
var Ie = {
  BOUNCE: "bounce",
  SLIDE: "slide",
  FLIP: "flip",
  ZOOM: "zoom",
  NONE: "none"
};
var fe = {
  dangerouslyHTMLString: false,
  multiple: true,
  position: k.TOP_RIGHT,
  autoClose: 5e3,
  transition: "bounce",
  hideProgressBar: false,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  className: "",
  bodyClassName: "",
  style: {},
  progressClassName: "",
  progressStyle: {},
  role: "alert",
  theme: "light"
};
var pe = {
  rtl: false,
  newestOnTop: false,
  toastClassName: ""
};
var me = {
  ...fe,
  ...pe
};
({
  ...fe,
  type: g.DEFAULT
});
var r = ((e) => (e[e.COLLAPSE_DURATION = 300] = "COLLAPSE_DURATION", e[e.DEBOUNCE_DURATION = 50] = "DEBOUNCE_DURATION", e.CSS_NAMESPACE = "Toastify", e))(r || {});
var J = ((e) => (e.ENTRANCE_ANIMATION_END = "d", e))(J || {});
var he = {
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: true
};
var Oe = {
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: true
};
var be = {
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
};
var Pe = {
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
};
var re = "Toastify--animate Toastify__none-enter";
function ge(e, t = false) {
  var a;
  let n = he;
  if (!e || typeof e == "string")
    switch (e) {
      case "flip":
        n = Pe;
        break;
      case "zoom":
        n = be;
        break;
      case "slide":
        n = Oe;
        break;
    }
  else
    n = e;
  if (t)
    n.enter = re;
  else if (n.enter === re) {
    const o = (a = n.exit.split("__")[1]) == null ? void 0 : a.split("-")[0];
    n.enter = "Toastify--animate Toastify__".concat(o, "-enter");
  }
  return n;
}
function Le(e) {
  return e.containerId || String(e.position);
}
var K = "will-unmount";
function $e(e = k.TOP_RIGHT) {
  return !!document.querySelector(".".concat(r.CSS_NAMESPACE, "__toast-container--").concat(e));
}
function Be(e = k.TOP_RIGHT) {
  return "".concat(r.CSS_NAMESPACE, "__toast-container--").concat(e);
}
function qe(e, t, n = false) {
  const a = [
    "".concat(r.CSS_NAMESPACE, "__toast-container"),
    "".concat(r.CSS_NAMESPACE, "__toast-container--").concat(e),
    n ? "".concat(r.CSS_NAMESPACE, "__toast-container--rtl") : null
  ].filter(Boolean).join(" ");
  return q(t) ? t({
    position: e,
    rtl: n,
    defaultClassName: a
  }) : "".concat(a, " ").concat(t || "");
}
function Me(e) {
  var E;
  const { position: t, containerClassName: n, rtl: a = false, style: o = {} } = e, s = r.CSS_NAMESPACE, d = Be(t), T = document.querySelector(".".concat(s)), u = document.querySelector(".".concat(d)), N = !!u && !((E = u.className) != null && E.includes(K)), m = T || document.createElement("div"), S = document.createElement("div");
  S.className = qe(
    t,
    n,
    a
  ), S.dataset.testid = "".concat(r.CSS_NAMESPACE, "__toast-container--").concat(t), S.id = Le(e);
  for (const v in o)
    if (Object.prototype.hasOwnProperty.call(o, v)) {
      const I = o[v];
      S.style[v] = I;
    }
  return T || (m.className = r.CSS_NAMESPACE, document.body.appendChild(m)), N || m.appendChild(S), S;
}
function ee(e) {
  var a, o, s;
  const t = typeof e == "string" ? e : ((a = e.currentTarget) == null ? void 0 : a.id) || ((o = e.target) == null ? void 0 : o.id), n = document.getElementById(t);
  n && n.removeEventListener("animationend", ee, false);
  try {
    D[t].unmount(), (s = document.getElementById(t)) == null || s.remove(), delete D[t], delete c[t];
  } catch {
  }
}
var D = reactive({});
function we(e, t) {
  const n = document.getElementById(String(t));
  n && (D[n.id] = e);
}
function te(e, t = true) {
  const n = String(e);
  if (!D[n])
    return;
  const a = document.getElementById(n);
  a && a.classList.add(K), t ? (Re(e), a && a.addEventListener("animationend", ee, false)) : ee(n), _.items = _.items.filter((o) => o.containerId !== e);
}
function Fe(e) {
  for (const t in D)
    te(t, e);
  _.items = [];
}
function Ce(e, t) {
  const n = document.getElementById(e.toastId);
  if (n) {
    let a = e;
    a = {
      ...a,
      ...ge(a.transition)
    };
    const o = a.appendPosition ? "".concat(a.exit, "--").concat(a.position) : a.exit;
    n.className += " ".concat(o), t && t(n);
  }
}
function Re(e) {
  for (const t in c)
    if (t === e)
      for (const n of c[t] || [])
        Ce(n);
}
function Ue(e) {
  const n = w().find((a) => a.toastId === e);
  return n == null ? void 0 : n.containerId;
}
function se(e) {
  return document.getElementById(e);
}
function xe(e) {
  const t = se(e.containerId);
  return t && t.classList.contains(K);
}
function ie(e) {
  var n;
  const t = isVNode(e.content) ? toRaw(e.content.props) : null;
  return t != null ? t : toRaw((n = e.data) != null ? n : {});
}
function De(e) {
  return e ? _.items.filter((n) => n.containerId === e).length > 0 : _.items.length > 0;
}
function ke() {
  if (_.items.length > 0) {
    const e = _.items.shift();
    j(e == null ? void 0 : e.toastContent, e == null ? void 0 : e.toastProps);
  }
}
var c = reactive({});
var _ = reactive({
  items: []
});
function w() {
  const e = toRaw(c);
  return Object.values(e).reduce((t, n) => [...t, ...n], []);
}
function He(e) {
  return w().find((n) => n.toastId === e);
}
function j(e, t = {}) {
  if (xe(t)) {
    const n = se(t.containerId);
    n && n.addEventListener("animationend", ne.bind(null, e, t), false);
  } else
    ne(e, t);
}
function ne(e, t = {}) {
  const n = se(t.containerId);
  n && n.removeEventListener("animationend", ne.bind(null, e, t), false);
  const a = c[t.containerId] || [], o = a.length > 0;
  if (!o && !$e(t.position)) {
    const s = Me(t), d = createApp(it, t);
    d.mount(s), we(d, s.id);
  }
  o && !t.updateId && (t.position = a[0].position), nextTick(() => {
    t.updateId ? C.update(t) : C.add(e, t);
  });
}
var C = {
  /**
   * add a toast
   * @param _ ..
   * @param opts toast props
   */
  add(e, t) {
    const { containerId: n = "" } = t;
    n && (c[n] = c[n] || [], c[n].find((a) => a.toastId === t.toastId) || setTimeout(() => {
      var a, o;
      t.newestOnTop ? (a = c[n]) == null || a.unshift(t) : (o = c[n]) == null || o.push(t), t.onOpen && t.onOpen(ie(t));
    }, t.delay || 0));
  },
  /**
   * remove a toast
   * @param id toastId
   */
  remove(e) {
    if (e) {
      const t = Ue(e);
      if (t) {
        const n = c[t];
        let a = n.find((o) => o.toastId === e);
        c[t] = n.filter((o) => o.toastId !== e), !c[t].length && !De(t) && te(t, false), ke(), nextTick(() => {
          a != null && a.onClose && (a.onClose(ie(a)), a = void 0);
        });
      }
    }
  },
  /**
   * update the toast
   * @param opts toast props
   */
  update(e = {}) {
    const { containerId: t = "" } = e;
    if (t && e.updateId) {
      c[t] = c[t] || [];
      const n = c[t].find((s) => s.toastId === e.toastId), a = (n == null ? void 0 : n.position) !== e.position || (n == null ? void 0 : n.transition) !== e.transition, o = { ...e, disabledEnterTransition: !a, updateId: void 0 };
      C.dismissForce(e == null ? void 0 : e.toastId), setTimeout(() => {
        i(o.content, o);
      }, e.delay || 0);
    }
  },
  /**
   * clear all toasts in container.
   * @param containerId container id
   */
  clear(e, t = true) {
    e ? te(e, t) : Fe(t);
  },
  dismissCallback(e) {
    var a;
    const t = (a = e.currentTarget) == null ? void 0 : a.id, n = document.getElementById(t);
    n && (n.removeEventListener("animationend", C.dismissCallback, false), setTimeout(() => {
      C.remove(t);
    }));
  },
  dismiss(e) {
    if (e) {
      const t = w();
      for (const n of t)
        if (n.toastId === e) {
          Ce(n, (a) => {
            a.addEventListener("animationend", C.dismissCallback, false);
          });
          break;
        }
    }
  },
  dismissForce(e) {
    if (e) {
      const t = w();
      for (const n of t)
        if (n.toastId === e) {
          const a = document.getElementById(e);
          a && (a.remove(), a.removeEventListener("animationend", C.dismissCallback, false), C.remove(e));
          break;
        }
    }
  }
};
var Ee = reactive({});
var Q = reactive({});
function ye() {
  return Math.random().toString(36).substring(2, 9);
}
function ze(e) {
  return typeof e == "number" && !isNaN(e);
}
function ae(e) {
  return typeof e == "string";
}
function q(e) {
  return typeof e == "function";
}
function Y(...e) {
  return mergeProps(...e);
}
function G(e) {
  return typeof e == "object" && (!!(e != null && e.render) || !!(e != null && e.setup) || typeof (e == null ? void 0 : e.type) == "object");
}
function je(e = {}) {
  Ee["".concat(r.CSS_NAMESPACE, "-default-options")] = e;
}
function Ge() {
  return Ee["".concat(r.CSS_NAMESPACE, "-default-options")] || me;
}
function Ve() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
var V = ((e) => (e[e.Enter = 0] = "Enter", e[e.Exit = 1] = "Exit", e))(V || {});
var Te = {
  containerId: {
    type: [String, Number],
    required: false,
    default: ""
  },
  clearOnUrlChange: {
    type: Boolean,
    required: false,
    default: true
  },
  disabledEnterTransition: {
    type: Boolean,
    required: false,
    default: false
  },
  dangerouslyHTMLString: {
    type: Boolean,
    required: false,
    default: false
  },
  multiple: {
    type: Boolean,
    required: false,
    default: true
  },
  limit: {
    type: Number,
    required: false,
    default: void 0
  },
  position: {
    type: String,
    required: false,
    default: k.TOP_LEFT
  },
  bodyClassName: {
    type: String,
    required: false,
    default: ""
  },
  autoClose: {
    type: [Number, Boolean],
    required: false,
    default: false
  },
  closeButton: {
    type: [Boolean, Function, Object],
    required: false,
    default: void 0
  },
  transition: {
    type: [String, Object],
    required: false,
    default: "bounce"
  },
  hideProgressBar: {
    type: Boolean,
    required: false,
    default: false
  },
  pauseOnHover: {
    type: Boolean,
    required: false,
    default: true
  },
  pauseOnFocusLoss: {
    type: Boolean,
    required: false,
    default: true
  },
  closeOnClick: {
    type: Boolean,
    required: false,
    default: true
  },
  progress: {
    type: Number,
    required: false,
    default: void 0
  },
  progressClassName: {
    type: String,
    required: false,
    default: ""
  },
  toastStyle: {
    type: Object,
    required: false,
    default() {
      return {};
    }
  },
  progressStyle: {
    type: Object,
    required: false,
    default() {
      return {};
    }
  },
  role: {
    type: String,
    required: false,
    default: "alert"
  },
  theme: {
    type: String,
    required: false,
    default: M.AUTO
  },
  content: {
    type: [String, Object, Function],
    required: false,
    default: ""
  },
  toastId: {
    type: [String, Number],
    required: false,
    default: ""
  },
  data: {
    type: [Object, String],
    required: false,
    default() {
      return {};
    }
  },
  type: {
    type: String,
    required: false,
    default: g.DEFAULT
  },
  icon: {
    type: [Boolean, String, Number, Object, Function],
    required: false,
    default: void 0
  },
  delay: {
    type: Number,
    required: false,
    default: void 0
  },
  onOpen: {
    type: Function,
    required: false,
    default: void 0
  },
  onClose: {
    type: Function,
    required: false,
    default: void 0
  },
  onClick: {
    type: Function,
    required: false,
    default: void 0
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: void 0
  },
  rtl: {
    type: Boolean,
    required: false,
    default: false
  },
  toastClassName: {
    type: String,
    required: false,
    default: ""
  },
  updateId: {
    type: [String, Number],
    required: false,
    default: ""
  }
};
var Qe = {
  autoClose: {
    type: [Number, Boolean],
    required: true
  },
  isRunning: {
    type: Boolean,
    required: false,
    default: void 0
  },
  type: {
    type: String,
    required: false,
    default: g.DEFAULT
  },
  theme: {
    type: String,
    required: false,
    default: M.AUTO
  },
  hide: {
    type: Boolean,
    required: false,
    default: void 0
  },
  className: {
    type: [String, Function],
    required: false,
    default: ""
  },
  controlledProgress: {
    type: Boolean,
    required: false,
    default: void 0
  },
  rtl: {
    type: Boolean,
    required: false,
    default: void 0
  },
  isIn: {
    type: Boolean,
    required: false,
    default: void 0
  },
  progress: {
    type: Number,
    required: false,
    default: void 0
  },
  closeToast: {
    type: Function,
    required: false,
    default: void 0
  }
};
var We = defineComponent({
  name: "ProgressBar",
  props: Qe,
  // @ts-ignore
  setup(e, {
    attrs: t
  }) {
    const n = ref(), a = computed(() => e.hide ? "true" : "false"), o = computed(() => ({
      ...t.style || {},
      animationDuration: "".concat(e.autoClose === true ? 5e3 : e.autoClose, "ms"),
      animationPlayState: e.isRunning ? "running" : "paused",
      opacity: e.hide || e.autoClose === false ? 0 : 1,
      transform: e.controlledProgress ? "scaleX(".concat(e.progress, ")") : "none"
    })), s = computed(() => ["".concat(r.CSS_NAMESPACE, "__progress-bar"), e.controlledProgress ? "".concat(r.CSS_NAMESPACE, "__progress-bar--controlled") : "".concat(r.CSS_NAMESPACE, "__progress-bar--animated"), "".concat(r.CSS_NAMESPACE, "__progress-bar-theme--").concat(e.theme), "".concat(r.CSS_NAMESPACE, "__progress-bar--").concat(e.type), e.rtl ? "".concat(r.CSS_NAMESPACE, "__progress-bar--rtl") : null].filter(Boolean).join(" ")), d = computed(() => "".concat(s.value, " ").concat((t == null ? void 0 : t.class) || "")), T = () => {
      n.value && (n.value.onanimationend = null, n.value.ontransitionend = null);
    }, u = () => {
      e.isIn && e.closeToast && e.autoClose !== false && (e.closeToast(), T());
    }, N = computed(() => e.controlledProgress ? null : u), m = computed(() => e.controlledProgress ? u : null);
    return watchEffect(() => {
      n.value && (T(), n.value.onanimationend = N.value, n.value.ontransitionend = m.value);
    }), () => createVNode("div", {
      ref: n,
      role: "progressbar",
      "aria-hidden": a.value,
      "aria-label": "notification timer",
      class: d.value,
      style: o.value
    }, null);
  }
});
var Ke = defineComponent({
  name: "CloseButton",
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      required: false,
      default: M.AUTO
    },
    type: {
      type: String,
      required: false,
      default: M.LIGHT
    },
    ariaLabel: {
      type: String,
      required: false,
      default: "close"
    },
    closeToast: {
      type: Function,
      required: false,
      default: void 0
    }
  },
  setup(e) {
    return () => createVNode("button", {
      class: "".concat(r.CSS_NAMESPACE, "__close-button ").concat(r.CSS_NAMESPACE, "__close-button--").concat(e.theme),
      type: "button",
      onClick: (t) => {
        t.stopPropagation(), e.closeToast && e.closeToast(t);
      },
      "aria-label": e.ariaLabel
    }, [createVNode("svg", {
      "aria-hidden": "true",
      viewBox: "0 0 14 16"
    }, [createVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    }, null)])]);
  }
});
var Z = ({
  theme: e,
  type: t,
  path: n,
  ...a
}) => createVNode("svg", mergeProps({
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: e === "colored" ? "currentColor" : "var(--toastify-icon-color-".concat(t, ")")
}, a), [createVNode("path", {
  d: n
}, null)]);
function Ye(e) {
  return createVNode(Z, mergeProps(e, {
    path: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }), null);
}
function Ze(e) {
  return createVNode(Z, mergeProps(e, {
    path: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }), null);
}
function Xe(e) {
  return createVNode(Z, mergeProps(e, {
    path: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }), null);
}
function Je(e) {
  return createVNode(Z, mergeProps(e, {
    path: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }), null);
}
function et() {
  return createVNode("div", {
    class: "".concat(r.CSS_NAMESPACE, "__spinner")
  }, null);
}
var oe = {
  info: Ze,
  warning: Ye,
  success: Xe,
  error: Je,
  spinner: et
};
var tt = (e) => e in oe;
function nt({
  theme: e,
  type: t,
  isLoading: n,
  icon: a
}) {
  let o;
  const s = {
    theme: e,
    type: t
  };
  return n ? o = oe.spinner() : a === false ? o = void 0 : G(a) ? o = toRaw(a) : q(a) ? o = a(s) : isVNode(a) ? o = cloneVNode(a, s) : ae(a) || ze(a) ? o = a : tt(t) && (o = oe[t](s)), o;
}
var at = () => {
};
function ot(e, t, n = r.COLLAPSE_DURATION) {
  const { scrollHeight: a, style: o } = e, s = n;
  requestAnimationFrame(() => {
    o.minHeight = "initial", o.height = a + "px", o.transition = "all ".concat(s, "ms"), requestAnimationFrame(() => {
      o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, s);
    });
  });
}
function st(e) {
  const t = ref(false), n = ref(false), a = ref(false), o = ref(V.Enter), s = reactive({
    ...e,
    appendPosition: e.appendPosition || false,
    collapse: typeof e.collapse > "u" ? true : e.collapse,
    collapseDuration: e.collapseDuration || r.COLLAPSE_DURATION
  }), d = s.done || at, T = computed(() => s.appendPosition ? "".concat(s.enter, "--").concat(s.position) : s.enter), u = computed(() => s.appendPosition ? "".concat(s.exit, "--").concat(s.position) : s.exit), N = computed(() => e.pauseOnHover ? {
    onMouseenter: h2,
    onMouseleave: p
  } : {});
  function m() {
    const y = T.value.split(" ");
    E().addEventListener(
      J.ENTRANCE_ANIMATION_END,
      p,
      { once: true }
    );
    const O = ($) => {
      const U = E();
      $.target === U && (U.dispatchEvent(new Event(J.ENTRANCE_ANIMATION_END)), U.removeEventListener("animationend", O), U.removeEventListener("animationcancel", O), o.value === V.Enter && $.type !== "animationcancel" && U.classList.remove(...y));
    }, b = () => {
      const $ = E();
      $.classList.add(...y), $.addEventListener("animationend", O), $.addEventListener("animationcancel", O);
    };
    e.pauseOnFocusLoss && v(), b();
  }
  function S() {
    if (!E())
      return;
    const y = () => {
      const b = E();
      b.removeEventListener("animationend", y), s.collapse ? ot(b, d, s.collapseDuration) : d();
    }, O = () => {
      const b = E();
      o.value = V.Exit, b && (b.className += " ".concat(u.value), b.addEventListener("animationend", y));
    };
    n.value || (a.value ? y() : setTimeout(O));
  }
  function E() {
    return e.toastRef.value;
  }
  function v() {
    document.hasFocus() || h2(), window.addEventListener("focus", p), window.addEventListener("blur", h2);
  }
  function I() {
    window.removeEventListener("focus", p), window.removeEventListener("blur", h2);
  }
  function p() {
    (!e.loading.value || e.isLoading === void 0) && (t.value = true);
  }
  function h2() {
    t.value = false;
  }
  function R(y) {
    y && (y.stopPropagation(), y.preventDefault()), n.value = false;
  }
  return watchEffect(S), watchEffect(() => {
    const y = w();
    n.value = y.findIndex((O) => O.toastId === s.toastId) > -1;
  }), watchEffect(() => {
    e.isLoading !== void 0 && (e.loading.value ? h2() : p());
  }), onMounted(m), onUnmounted(() => {
    e.pauseOnFocusLoss && I();
  }), {
    isIn: n,
    isRunning: t,
    hideToast: R,
    eventHandlers: N
  };
}
var rt = defineComponent({
  name: "ToastItem",
  inheritAttrs: false,
  props: Te,
  // @ts-ignore
  setup(e) {
    const t = ref(), n = computed(() => !!e.isLoading), a = computed(() => e.progress !== void 0 && e.progress !== null), o = computed(() => nt(e)), s = computed(() => ["".concat(r.CSS_NAMESPACE, "__toast"), "".concat(r.CSS_NAMESPACE, "__toast-theme--").concat(e.theme), "".concat(r.CSS_NAMESPACE, "__toast--").concat(e.type), e.rtl ? "".concat(r.CSS_NAMESPACE, "__toast--rtl") : void 0, e.toastClassName || ""].filter(Boolean).join(" ")), {
      isRunning: d,
      isIn: T,
      hideToast: u,
      eventHandlers: N
    } = st({
      toastRef: t,
      loading: n,
      done: () => {
        C.remove(e.toastId);
      },
      ...ge(e.transition, e.disabledEnterTransition),
      ...e
    });
    return () => createVNode("div", mergeProps({
      id: e.toastId,
      class: s.value,
      style: e.toastStyle || {},
      ref: t,
      "data-testid": "toast-item-".concat(e.toastId),
      onClick: (m) => {
        e.closeOnClick && u(), e.onClick && e.onClick(m);
      }
    }, N.value), [createVNode("div", {
      role: e.role,
      "data-testid": "toast-body",
      class: "".concat(r.CSS_NAMESPACE, "__toast-body ").concat(e.bodyClassName || "")
    }, [o.value != null && createVNode("div", {
      "data-testid": "toast-icon-".concat(e.type),
      class: ["".concat(r.CSS_NAMESPACE, "__toast-icon"), e.isLoading ? "" : "".concat(r.CSS_NAMESPACE, "--animate-icon ").concat(r.CSS_NAMESPACE, "__zoom-enter")].join(" ")
    }, [G(o.value) ? h(toRaw(o.value), {
      theme: e.theme,
      type: e.type
    }) : q(o.value) ? o.value({
      theme: e.theme,
      type: e.type
    }) : o.value]), createVNode("div", {
      "data-testid": "toast-content"
    }, [G(e.content) ? h(toRaw(e.content), {
      toastProps: toRaw(e),
      closeToast: u,
      data: e.data
    }) : q(e.content) ? e.content({
      toastProps: toRaw(e),
      closeToast: u,
      data: e.data
    }) : e.dangerouslyHTMLString ? h("div", {
      innerHTML: e.content
    }) : e.content])]), (e.closeButton === void 0 || e.closeButton === true) && createVNode(Ke, {
      theme: e.theme,
      closeToast: (m) => {
        m.stopPropagation(), m.preventDefault(), u();
      }
    }, null), G(e.closeButton) ? h(toRaw(e.closeButton), {
      closeToast: u,
      type: e.type,
      theme: e.theme
    }) : q(e.closeButton) ? e.closeButton({
      closeToast: u,
      type: e.type,
      theme: e.theme
    }) : null, createVNode(We, {
      className: e.progressClassName,
      style: e.progressStyle,
      rtl: e.rtl,
      theme: e.theme,
      isIn: T.value,
      type: e.type,
      hide: e.hideProgressBar,
      isRunning: d.value,
      autoClose: e.autoClose,
      controlledProgress: a.value,
      progress: e.progress,
      closeToast: e.isLoading ? void 0 : u
    }, null)]);
  }
});
var x = 0;
function Se() {
  typeof window > "u" || (x && window.cancelAnimationFrame(x), x = window.requestAnimationFrame(Se), Q.lastUrl !== window.location.href && (Q.lastUrl = window.location.href, C.clear()));
}
var it = defineComponent({
  name: "ToastifyContainer",
  inheritAttrs: false,
  props: Te,
  // @ts-ignore
  setup(e) {
    const t = computed(() => e.containerId), n = computed(() => c[t.value] || []), a = computed(() => n.value.filter((o) => o.position === e.position));
    return onMounted(() => {
      typeof window < "u" && e.clearOnUrlChange && window.requestAnimationFrame(Se);
    }), onUnmounted(() => {
      typeof window < "u" && x && (window.cancelAnimationFrame(x), Q.lastUrl = "");
    }), () => createVNode(Fragment, null, [a.value.map((o) => {
      const {
        toastId: s = ""
      } = o;
      return createVNode(rt, mergeProps({
        key: s
      }, o), null);
    })]);
  }
});
var X = false;
function ve() {
  const e = [];
  return w().forEach((n) => {
    const a = document.getElementById(n.containerId);
    a && !a.classList.contains(K) && e.push(n);
  }), e;
}
function lt(e) {
  const t = ve().length, n = e != null ? e : 0;
  return n > 0 && t + _.items.length >= n;
}
function dt(e) {
  lt(e.limit) && !e.updateId && _.items.push({
    toastId: e.toastId,
    containerId: e.containerId,
    toastContent: e.content,
    toastProps: e
  });
}
function L(e, t, n = {}) {
  if (X)
    return;
  n = Y(Ge(), {
    type: t
  }, toRaw(n)), (!n.toastId || typeof n.toastId != "string" && typeof n.toastId != "number") && (n.toastId = ye()), n = {
    ...n,
    content: e,
    containerId: n.containerId || String(n.position)
  };
  const a = Number(n == null ? void 0 : n.progress);
  return a < 0 && (n.progress = 0), a > 1 && (n.progress = 1), n.theme === "auto" && (n.theme = Ve()), dt(n), Q.lastUrl = window.location.href, n.multiple ? _.items.length ? n.updateId && j(e, n) : j(e, n) : (X = true, i.clearAll(void 0, false), setTimeout(() => {
    j(e, n);
  }, 0), setTimeout(() => {
    X = false;
  }, 390)), n.toastId;
}
var i = (e, t) => L(e, g.DEFAULT, t);
i.info = (e, t) => L(e, g.DEFAULT, {
  ...t,
  type: g.INFO
});
i.error = (e, t) => L(e, g.DEFAULT, {
  ...t,
  type: g.ERROR
});
i.warning = (e, t) => L(e, g.DEFAULT, {
  ...t,
  type: g.WARNING
});
i.warn = i.warning;
i.success = (e, t) => L(e, g.DEFAULT, {
  ...t,
  type: g.SUCCESS
});
i.loading = (e, t) => L(e, g.DEFAULT, Y(t, {
  isLoading: true,
  autoClose: false,
  closeOnClick: false,
  closeButton: false,
  draggable: false
}));
i.dark = (e, t) => L(e, g.DEFAULT, Y(t, {
  theme: M.DARK
}));
i.remove = (e) => {
  e ? C.dismiss(e) : C.clear();
};
i.clearAll = (e, t) => {
  C.clear(e, t);
};
i.isActive = (e) => {
  let t = false;
  return t = ve().findIndex((a) => a.toastId === e) > -1, t;
};
i.update = (e, t = {}) => {
  setTimeout(() => {
    const n = He(e);
    if (n) {
      const a = toRaw(n), {
        content: o
      } = a, s = {
        ...a,
        ...t,
        toastId: t.toastId || e,
        updateId: ye()
      }, d = s.render || o;
      delete s.render, L(d, s.type, s);
    }
  }, 0);
};
i.done = (e) => {
  i.update(e, {
    isLoading: false,
    progress: 1
  });
};
i.promise = ut;
function ut(e, {
  pending: t,
  error: n,
  success: a
}, o) {
  var m, S, E;
  let s;
  const d = {
    ...o || {},
    autoClose: false
  };
  t && (s = ae(t) ? i.loading(t, d) : i.loading(t.render, {
    ...d,
    ...t
  }));
  const T = {
    autoClose: (m = o == null ? void 0 : o.autoClose) != null ? m : true,
    closeOnClick: (S = o == null ? void 0 : o.closeOnClick) != null ? S : true,
    closeButton: (E = o == null ? void 0 : o.autoClose) != null ? E : null,
    isLoading: void 0,
    draggable: null,
    delay: 100
  }, u = (v, I, p) => {
    if (I == null) {
      i.remove(s);
      return;
    }
    const h2 = {
      type: v,
      ...T,
      ...o,
      data: p
    }, R = ae(I) ? {
      render: I
    } : I;
    return s ? i.update(s, {
      ...h2,
      ...R,
      isLoading: false
    }) : i(R.render, {
      ...h2,
      ...R,
      isLoading: false
    }), p;
  }, N = q(e) ? e() : e;
  return N.then((v) => {
    u("success", a, v);
  }).catch((v) => {
    u("error", n, v);
  }), N;
}
i.POSITION = k;
i.THEME = M;
i.TYPE = g;
i.TRANSITIONS = Ie;
var ct = {
  install(e, t = {}) {
    ft(t);
  }
};
typeof window < "u" && (window.Vue3Toastify = ct);
function ft(e = {}) {
  const t = Y(me, e);
  je(t);
}
export {
  V as AnimationStep,
  he as Bounce,
  Pe as Flip,
  Oe as Slide,
  C as ToastActions,
  it as ToastifyContainer,
  be as Zoom,
  Ce as addExitAnimateToNode,
  ke as appendFromQueue,
  we as cacheRenderInstance,
  Fe as clearContainers,
  D as containerInstances,
  ct as default,
  j as doAppend,
  w as getAllToast,
  He as getToast,
  Q as globalCache,
  Ee as globalOptions,
  _ as queue,
  te as removeContainer,
  i as toast,
  c as toastContainers,
  ft as updateGlobalOptions,
  st as useCssTransition
};
//# sourceMappingURL=vue3-toastify.js.map
