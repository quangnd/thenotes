import { h } from "preact"

// ── Styles ──────────────────────────────────────────────────────────────
const css = `
/* Toolbar button — sized to match the other toolbar icons (darkmode etc.) */
.sidebar-toggle-btn {
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  width: 20px;
  height: 32px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--darkgray);
}
.sidebar-toggle-btn:hover { color: var(--secondary); }
.sidebar-toggle-icon { width: 20px; height: 20px; display: block; }

/* Reveal tab — only shown when the sidebar is collapsed */
#left-sidebar-reveal {
  display: none;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 90;
  width: 22px;
  height: 60px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-left: none;
  border-radius: 0 8px 8px 0;
  color: var(--darkgray);
  cursor: pointer;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  opacity: 0.6;
  transition: opacity 0.15s ease, background 0.15s ease;
}
#left-sidebar-reveal:hover { opacity: 1; background: var(--lightgray); }
#left-sidebar-reveal .lsr-icon { font-size: 1.2rem; line-height: 1; }

html.left-sidebar-hidden #left-sidebar-reveal { display: flex; }

/* Hide the left sidebar when collapsed */
html.left-sidebar-hidden .left.sidebar { display: none !important; }

/* Tablet (800–1200px): grid is [320 left | auto center]; collapse to one column */
@media all and (min-width: 800px) and (max-width: 1200px) {
  html.left-sidebar-hidden #quartz-body {
    grid-template-columns: auto !important;
    grid-template-areas:
      "grid-header"
      "grid-center"
      "grid-sidebar-right"
      "grid-footer" !important;
  }
}

/* Desktop (≥1200px): grid is [320 left | auto center | 320 right]; drop left track */
@media all and (min-width: 1200px) {
  html.left-sidebar-hidden #quartz-body {
    grid-template-columns: auto 320px !important;
    grid-template-areas:
      "grid-header grid-sidebar-right"
      "grid-center grid-sidebar-right"
      "grid-footer grid-sidebar-right" !important;
  }
}

/* Mobile has its own menu; no toggle, never collapse */
@media all and (max-width: 800px) {
  #left-sidebar-reveal { display: none !important; }
  html.left-sidebar-hidden .left.sidebar { display: revert !important; }
}
`

// ── Early script (before paint): apply persisted state to avoid a flash ──
function sidebarToggleEarly() {
  try {
    if (localStorage.getItem("left-sidebar-hidden") === "1") {
      document.documentElement.classList.add("left-sidebar-hidden")
    }
  } catch (e) {}
}
const beforeScript = "(" + sidebarToggleEarly.toString() + ")();"

// ── Browser runtime ─────────────────────────────────────────────────────
function sidebarToggleRuntime() {
  var KEY = "left-sidebar-hidden"
  var CLS = "left-sidebar-hidden"

  function isHidden() {
    try {
      return localStorage.getItem(KEY) === "1"
    } catch (e) {
      return false
    }
  }

  function ensureReveal() {
    var r = document.getElementById("left-sidebar-reveal")
    if (r) return r
    r = document.createElement("button")
    r.id = "left-sidebar-reveal"
    r.type = "button"
    r.setAttribute("aria-label", "Show sidebar")
    r.title = "Show sidebar"
    r.innerHTML = '<span class="lsr-icon">›</span>'
    document.body.appendChild(r)
    return r
  }

  function apply() {
    document.documentElement.classList.toggle(CLS, isHidden())
    ensureReveal()
  }

  function toggle() {
    var hidden = !isHidden()
    try {
      localStorage.setItem(KEY, hidden ? "1" : "0")
    } catch (e) {}
    apply()
  }

  function onClick(e) {
    var t = e.target
    if (!t || !t.closest) return
    if (t.closest(".sidebar-toggle-btn") || t.closest("#left-sidebar-reveal")) {
      e.preventDefault()
      toggle()
    }
  }

  if (!window.__sidebarToggleBound) {
    document.addEventListener("click", onClick)
    document.addEventListener("nav", apply)
    window.__sidebarToggleBound = true
  }
  apply()
}

const script = "(" + sidebarToggleRuntime.toString() + ")();"

// ── Quartz component (toolbar icon button) ───────────────────────────────
const SidebarToggle = () => {
  const Component = (props) => {
    const cls = [props && props.displayClass, "sidebar-toggle-btn"].filter(Boolean).join(" ")
    return h(
      "button",
      { class: cls, type: "button", "aria-label": "Hide sidebar", title: "Hide sidebar" },
      h(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "20",
          height: "20",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "sidebar-toggle-icon",
        },
        h("rect", { x: "3", y: "4", width: "18", height: "16", rx: "2" }),
        h("line", { x1: "9", y1: "4", x2: "9", y2: "20" }),
        h("path", { d: "M15 9l-3 3 3 3" }),
      ),
    )
  }
  Component.beforeDOMLoaded = beforeScript
  Component.afterDOMLoaded = script
  Component.css = css
  return Component
}

export { SidebarToggle }
