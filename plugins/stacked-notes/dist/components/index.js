import { h } from "preact"

// ── Styles ──────────────────────────────────────────────────────────────
// Andy Matuschak style: notes open as fixed-width columns in a horizontal
// row. As newer notes push in from the right, older notes on the left
// collapse into thin vertical "spine" strips (rotated title) that stack up
// like a deck. Click a spine to scroll it back open.
const css = `
:root {
  --sn-col-width: 625px;
  --sn-spine: 40px;
}

#stacked-notes-container { display: none; }

#stacked-notes-container.active {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow-x: auto;
  overflow-y: hidden;
  background: var(--light);
  scroll-behavior: smooth;
  scrollbar-width: thin;
}

/* While stacked mode is active: hide both sidebars, use the full viewport,
   and stop the page behind from scrolling. */
body.stacked-notes-active .left.sidebar,
body.stacked-notes-active .right.sidebar { display: none !important; }
body.stacked-notes-active .page { max-width: none !important; }
body.stacked-notes-active { overflow: hidden; }

/* ── A single note column ── */
.stacked-column {
  position: sticky;
  flex: 0 0 var(--sn-col-width);
  width: var(--sn-col-width);
  max-width: 92vw;
  height: 100%;
  background: var(--light);
  /* a soft shadow on the left edge so the collapsing deck reads as layers */
  box-shadow: -8px 0 24px -12px rgba(0, 0, 0, 0.28);
}

/* The vertical spine: the only part visible once a column is covered. */
.stacked-spine {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--sn-spine);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  border-right: 1px solid var(--lightgray);
  background: var(--light);
  cursor: pointer;
  z-index: 1;
}
.stacked-spine:hover { background: var(--lightgray); }
.stacked-spine-title {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(100% - 2rem);
  font-family: var(--headerFont);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--darkgray);
}

/* The real page content. Offset by the spine width so the spine to its left
   stays visible when the next column slides over this one. */
.stacked-inner {
  position: absolute;
  inset: 0 0 0 var(--sn-spine);
  display: flex;
  flex-direction: column;
  background: var(--light);
  border-right: 1px solid var(--lightgray);
}

/* The active (uncovered) column hides its own spine and uses full width. */
.stacked-column.is-open .stacked-spine { display: none; }
.stacked-column.is-open .stacked-inner { left: 0; }

.stacked-column-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex: 0 0 auto;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--lightgray);
  background: var(--light);
}
.stacked-column-title {
  font-family: var(--headerFont);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--darkgray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.stacked-column-close {
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  color: var(--gray);
  padding: 0 6px;
  border-radius: 4px;
  flex: 0 0 auto;
}
.stacked-column-close:hover { color: var(--dark); background: var(--lightgray); }

.stacked-column-body {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0.5rem 1.75rem 3rem;
  scrollbar-width: thin;
}

.stacked-column.loading .stacked-column-body::after {
  content: "Loading\\2026";
  display: block;
  color: var(--gray);
  padding: 1rem 0;
}
.stacked-column.error .stacked-column-bar { color: var(--secondary); }

/* Let cloned note content fill the column instead of the site's narrow width */
.stacked-column article,
.stacked-column .page-header,
.stacked-note-content { max-width: 100% !important; width: 100% !important; }
.stacked-note-content > h1.article-title:first-child { margin-top: 0.25rem; }
.stacked-empty { color: var(--gray); }

/* The link in a note that spawned the currently-open next column. */
.stacked-column a.internal.stacked-active-link {
  background: var(--highlight);
  border-radius: 4px;
  box-shadow: 0 0 0 3px var(--highlight);
  font-weight: 600;
}

/* ── Scroll buttons (for users without a trackpad) ── */
/* Sit just below the column title bar (~36px tall) so they never cover the
   tab title text. */
.stacked-nav-btn {
  position: fixed;
  top: 46px;
  z-index: 60;
  width: 36px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 10px;
  color: var(--darkgray);
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.14);
  opacity: 0.92;
  transition: opacity 0.15s ease, background 0.15s ease;
}
.stacked-nav-btn:hover { opacity: 1; background: var(--lightgray); }
.stacked-nav-btn.left { left: 10px; }
.stacked-nav-btn.right { right: 10px; }
.stacked-nav-btn[hidden] { display: none; }

/* ── First-run hint toast ── */
.stacked-hint {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 70;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.5rem 0.6rem 0.5rem 1rem;
  background: var(--darkgray);
  color: var(--light);
  border-radius: 999px;
  font-size: 0.8rem;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.28);
  opacity: 1;
  transition: opacity 0.4s ease;
}
.stacked-hint.fade { opacity: 0; }
.stacked-hint kbd {
  font-family: var(--codeFont, monospace);
  background: rgba(255, 255, 255, 0.16);
  border-radius: 4px;
  padding: 1px 6px;
  font-size: 0.74rem;
}
.stacked-hint-close {
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.65;
  font-size: 1.1rem;
  line-height: 1;
  padding: 0 4px;
}
.stacked-hint-close:hover { opacity: 1; }
`

// ── Browser runtime ─────────────────────────────────────────────────────
// Written as a real function and serialized with .toString() so it can be
// injected verbatim into a <script> tag (no build step / no escaping pain).
function stackedNotesRuntime() {
  var CONTAINER_ID = "stacked-notes-container"
  var ACTIVE_CLASS = "stacked-notes-active"
  var columns = []
  var active = false
  var reqSeq = 0

  function getContainer() {
    return document.getElementById(CONTAINER_ID)
  }

  function cfg(c) {
    return {
      mobileBreakpoint: parseInt((c && c.dataset.mobileBreakpoint) || "800", 10),
      maxColumns: parseInt((c && c.dataset.maxColumns) || "8", 10),
      spine: parseInt((c && c.dataset.spine) || "40", 10),
    }
  }

  function isInternalLink(a) {
    if (!a || !a.classList || !a.classList.contains("internal")) return false
    var href = a.getAttribute("href")
    if (!href) return false
    if (href.charAt(0) === "#") return false
    if (/^[a-z]+:/i.test(href)) return false
    return true
  }

  function absolutize(root, baseUrl) {
    var links = root.querySelectorAll("a[href]")
    for (var i = 0; i < links.length; i++) {
      var raw = links[i].getAttribute("href")
      if (!raw || raw.charAt(0) === "#" || /^[a-z]+:/i.test(raw)) continue
      try {
        var u = new URL(raw, baseUrl)
        links[i].setAttribute("href", u.pathname + u.search + u.hash)
      } catch (e) {}
    }
    var imgs = root.querySelectorAll("img[src]")
    for (var j = 0; j < imgs.length; j++) {
      var src = imgs[j].getAttribute("src")
      if (!src || /^[a-z]+:/i.test(src) || src.indexOf("data:") === 0) continue
      try {
        imgs[j].setAttribute("src", new URL(src, baseUrl).href)
      } catch (e) {}
    }
  }

  function extractContent(centerEl, baseUrl) {
    var wrap = document.createElement("div")
    wrap.className = "stacked-note-content"
    var kids = Array.prototype.slice.call(centerEl.children)
    for (var i = 0; i < kids.length; i++) {
      var child = kids[i]
      if (child.id === CONTAINER_ID) continue
      if (child.classList && child.classList.contains("page-footer")) continue
      wrap.appendChild(child.cloneNode(true))
    }
    var nested = wrap.querySelector("#" + CONTAINER_ID)
    if (nested) nested.remove()
    absolutize(wrap, baseUrl)
    return wrap
  }

  // ── Active-link highlighting ──
  // Mark the link in a column that spawned the column to its right, so the
  // reader can see the path they followed (Andy highlights this too).
  function clearActiveLinks(col) {
    if (!col) return
    var ls = col.querySelectorAll("a.stacked-active-link")
    for (var i = 0; i < ls.length; i++) ls[i].classList.remove("stacked-active-link")
  }

  function setActiveAnchor(col, a) {
    clearActiveLinks(col)
    if (a) a.classList.add("stacked-active-link")
  }

  // For the first click (from the original .center page), we only know the
  // href, so match it against the cloned links in column 0.
  function setActiveByHref(col, href) {
    clearActiveLinks(col)
    var target
    try {
      target = new URL(href, window.location.href).pathname
    } catch (e) {
      return
    }
    var ls = col.querySelectorAll("a.internal[href]")
    for (var i = 0; i < ls.length; i++) {
      var h = ls[i].getAttribute("href")
      if (!h) continue
      try {
        if (new URL(h, window.location.href).pathname === target) {
          ls[i].classList.add("stacked-active-link")
          break
        }
      } catch (e) {}
    }
  }

  function clearActiveLinkAt(c, index) {
    if (index < 0) return
    var col = c.querySelector('.stacked-column[data-index="' + index + '"]')
    clearActiveLinks(col)
  }

  function titleOf(scope) {
    var h1 =
      scope.querySelector("h1.article-title") ||
      scope.querySelector("article h1") ||
      scope.querySelector("h1")
    if (h1 && h1.textContent) return h1.textContent.trim()
    var t = scope.querySelector("title")
    if (t && t.textContent) return t.textContent.trim()
    return "Untitled"
  }

  // Re-number columns and set their sticky left offset so each one stacks a
  // spine-width further along — this is what makes the left deck pile up as
  // you move forward (authentic Andy behaviour: only the left collapses; newer
  // notes simply sit off-screen to the right until you scroll to them).
  function reindex(c) {
    var spine = cfg(c).spine
    var cols = c.querySelectorAll(".stacked-column")
    for (var i = 0; i < cols.length; i++) {
      cols[i].dataset.index = String(i)
      cols[i].style.left = i * spine + "px"
    }
  }

  // A column is "open" (full width, no spine) when the next column isn't
  // sliding over it. Detected from live geometry so it stays correct during
  // scrolling and regardless of exact widths.
  function updateOpenState(c) {
    var cols = c.querySelectorAll(".stacked-column")
    var n = cols.length
    if (!n) return
    var colW = cols[0].getBoundingClientRect().width
    for (var i = 0; i < n; i++) {
      var rect = cols[i].getBoundingClientRect()
      var open = true
      if (i < n - 1) {
        var nextRect = cols[i + 1].getBoundingClientRect()
        // covered once the next column has slid to within < full width
        if (nextRect.left - rect.left < colW - 4) open = false
      }
      cols[i].classList.toggle("is-open", open)
    }
  }

  function scrollToEnd(c) {
    try {
      c.scrollTo({ left: c.scrollWidth, behavior: "smooth" })
    } catch (e) {
      c.scrollLeft = c.scrollWidth
    }
    window.setTimeout(function () {
      updateNav(c)
      updateOpenState(c)
    }, 380)
  }

  // Scroll a given column open (used when a collapsed spine is clicked).
  function scrollColumnIntoView(c, index) {
    var spine = cfg(c).spine
    var cols = c.querySelectorAll(".stacked-column")
    if (!cols.length) return
    var colW = cols[0].getBoundingClientRect().width
    var target = index * (colW - spine)
    try {
      c.scrollTo({ left: target, behavior: "smooth" })
    } catch (e) {
      c.scrollLeft = target
    }
    window.setTimeout(function () {
      updateNav(c)
      updateOpenState(c)
    }, 380)
  }

  function scrollByColumn(c, dir) {
    var col = c.querySelector(".stacked-column")
    var step = col ? col.getBoundingClientRect().width : c.clientWidth * 0.8
    try {
      c.scrollBy({ left: dir * step, behavior: "smooth" })
    } catch (e) {
      c.scrollLeft += dir * step
    }
  }

  function updateNav(c) {
    var left = c.querySelector(".stacked-nav-btn.left")
    var right = c.querySelector(".stacked-nav-btn.right")
    if (!left || !right) return
    var maxScroll = c.scrollWidth - c.clientWidth
    left.hidden = c.scrollLeft <= 4
    right.hidden = c.scrollLeft >= maxScroll - 4
  }

  function makeColumn(index, title, contentNode) {
    var col = document.createElement("section")
    // Start open: a freshly made column is always the new right-most one, so
    // it should never paint as a collapsed spine before updateOpenState runs.
    col.className = "stacked-column is-open"
    col.dataset.index = String(index)

    // Spine (visible when this column is collapsed under a newer one).
    var spine = document.createElement("button")
    spine.className = "stacked-spine"
    spine.setAttribute("aria-label", "Open note: " + title)
    spine.title = title
    var spineTitle = document.createElement("span")
    spineTitle.className = "stacked-spine-title"
    spineTitle.textContent = title
    spine.appendChild(spineTitle)
    spine.addEventListener("click", function (e) {
      e.stopPropagation()
      scrollColumnIntoView(getContainer(), parseInt(col.dataset.index, 10))
    })

    var inner = document.createElement("div")
    inner.className = "stacked-inner"

    var bar = document.createElement("div")
    bar.className = "stacked-column-bar"

    var tt = document.createElement("span")
    tt.className = "stacked-column-title"
    tt.textContent = title

    var close = document.createElement("button")
    close.className = "stacked-column-close"
    close.setAttribute("aria-label", "Close note")
    close.title = "Close note (Esc closes the last one)"
    close.innerHTML = "&times;"
    close.addEventListener("click", function (e) {
      e.stopPropagation()
      closeFrom(parseInt(col.dataset.index, 10))
    })

    bar.appendChild(tt)
    bar.appendChild(close)

    var body = document.createElement("div")
    body.className = "stacked-column-body"
    if (contentNode) body.appendChild(contentNode)

    inner.appendChild(bar)
    inner.appendChild(body)

    col.appendChild(spine)
    col.appendChild(inner)
    return col
  }

  function makeNavButtons(c) {
    var navL = document.createElement("button")
    navL.className = "stacked-nav-btn left"
    navL.setAttribute("aria-label", "Scroll to previous note")
    navL.title = "Previous note"
    navL.innerHTML = "&#8249;"
    navL.hidden = true
    navL.addEventListener("click", function () {
      scrollByColumn(c, -1)
    })

    var navR = document.createElement("button")
    navR.className = "stacked-nav-btn right"
    navR.setAttribute("aria-label", "Scroll to next note")
    navR.title = "Next note"
    navR.innerHTML = "&#8250;"
    navR.hidden = true
    navR.addEventListener("click", function () {
      scrollByColumn(c, 1)
    })

    c.appendChild(navL)
    c.appendChild(navR)
  }

  function dismissHint(hint) {
    if (!hint || !hint.parentNode) return
    hint.classList.add("fade")
    try {
      sessionStorage.setItem("stacked-notes-hint", "seen")
    } catch (e) {}
    window.setTimeout(function () {
      if (hint.parentNode) hint.remove()
    }, 450)
  }

  function showHintOnce(c) {
    try {
      if (sessionStorage.getItem("stacked-notes-hint") === "seen") return
    } catch (e) {}
    var hint = document.createElement("div")
    hint.className = "stacked-hint"
    var msg = document.createElement("span")
    msg.innerHTML =
      "<kbd>Esc</kbd> back &middot; click a <strong>spine</strong> to reopen &middot; <kbd>&times;</kbd> close"
    var x = document.createElement("button")
    x.className = "stacked-hint-close"
    x.setAttribute("aria-label", "Dismiss hint")
    x.innerHTML = "&times;"
    x.addEventListener("click", function () {
      dismissHint(hint)
    })
    hint.appendChild(msg)
    hint.appendChild(x)
    c.appendChild(hint)
    window.setTimeout(function () {
      dismissHint(hint)
    }, 6000)
  }

  function deactivate() {
    var c = getContainer()
    active = false
    columns = []
    if (c) {
      c.innerHTML = ""
      c.classList.remove("active")
    }
    document.body.classList.remove(ACTIVE_CLASS)
  }

  function activate() {
    var c = getContainer()
    if (!c) return false
    if (window.innerWidth < cfg(c).mobileBreakpoint) return false
    var center = document.querySelector(".center")
    if (!center) return false
    var title = titleOf(document)
    var content = extractContent(center, window.location.href)
    columns = [{ slug: window.location.pathname, title: title }]
    c.innerHTML = ""
    c.appendChild(makeColumn(0, title, content))
    makeNavButtons(c)
    showHintOnce(c)
    c.classList.add("active")
    document.body.classList.add(ACTIVE_CLASS)
    active = true
    reindex(c)
    if (!c.dataset.scrollBound) {
      c.addEventListener("scroll", function () {
        updateNav(c)
        updateOpenState(c)
      })
      c.dataset.scrollBound = "1"
    }
    updateOpenState(c)
    return true
  }

  function closeFrom(index) {
    var c = getContainer()
    if (!c) return
    if (index <= 0) {
      deactivate()
      return
    }
    columns = columns.slice(0, index)
    var cols = Array.prototype.slice.call(c.querySelectorAll(".stacked-column"))
    for (var i = 0; i < cols.length; i++) {
      if (parseInt(cols[i].dataset.index, 10) >= index) cols[i].remove()
    }
    if (columns.length <= 1) {
      deactivate()
      return
    }
    // The note that pointed at the now-removed column has no open child.
    clearActiveLinkAt(c, index - 1)
    reindex(c)
    scrollToEnd(c)
    updateNav(c)
  }

  function enforceMax(c) {
    var max = cfg(c).maxColumns
    while (columns.length > max) {
      columns.shift()
      var first = c.querySelector(".stacked-column")
      if (first) first.remove()
    }
    reindex(c)
  }

  // Replace any columns to the right of `afterIndex` with `col`, in one go.
  function swapInColumn(c, afterIndex, col, slug, title) {
    var idx = afterIndex + 1
    columns = columns.slice(0, idx)
    var existing = Array.prototype.slice.call(c.querySelectorAll(".stacked-column"))
    for (var i = 0; i < existing.length; i++) {
      if (parseInt(existing[i].dataset.index, 10) > afterIndex) existing[i].remove()
    }
    columns.push({ slug: slug, title: title })
    insertColumn(c, col)
    enforceMax(c)
    // Settle open/collapsed state synchronously before the scroll animation so
    // the new column never flashes as a spine.
    updateOpenState(c)
    scrollToEnd(c)
  }

  function addColumn(href, afterIndex) {
    var c = getContainer()
    if (!c) return
    var url
    try {
      url = new URL(href, window.location.href)
    } catch (e) {
      return
    }

    // Fetch first and keep the current columns on screen until the content is
    // ready, then swap atomically. This avoids a placeholder column flashing
    // in and out on fast loads. The sequence guard drops stale responses when
    // links are clicked in quick succession.
    var myReq = ++reqSeq

    fetch(url.href)
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status)
        return res.text()
      })
      .then(function (html) {
        if (myReq !== reqSeq) return
        var doc = new DOMParser().parseFromString(html, "text/html")
        var center = doc.querySelector(".center")
        var title = titleOf(doc)
        var content = center ? extractContent(center, url.href) : null
        var col = makeColumn(afterIndex + 1, title, content)
        if (!content) {
          var p = document.createElement("p")
          p.className = "stacked-empty"
          p.textContent = "Could not load this note."
          col.querySelector(".stacked-column-body").appendChild(p)
        }
        swapInColumn(c, afterIndex, col, url.pathname, title)
      })
      .catch(function () {
        if (myReq !== reqSeq) return
        var col = makeColumn(afterIndex + 1, "Failed to load", null)
        col.classList.add("error")
        var p = document.createElement("p")
        p.className = "stacked-empty"
        p.textContent = "Could not load this note."
        col.querySelector(".stacked-column-body").appendChild(p)
        swapInColumn(c, afterIndex, col, url.pathname, "Failed to load")
      })
  }

  // Insert a column before the nav buttons so they stay last in the DOM.
  function insertColumn(c, col) {
    var firstNav = c.querySelector(".stacked-nav-btn")
    if (firstNav) c.insertBefore(col, firstNav)
    else c.appendChild(col)
  }

  function onClick(e) {
    if (e.defaultPrevented) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (e.button && e.button !== 0) return
    var a = e.target && e.target.closest ? e.target.closest("a") : null
    if (!isInternalLink(a)) return
    var c = getContainer()
    if (!c) return
    if (window.innerWidth < cfg(c).mobileBreakpoint) return

    var href = a.getAttribute("href")
    var col = a.closest(".stacked-column")
    if (col) {
      e.preventDefault()
      e.stopPropagation()
      setActiveAnchor(col, a)
      addColumn(href, parseInt(col.dataset.index, 10))
      return
    }
    if (!active && a.closest(".center")) {
      e.preventDefault()
      e.stopPropagation()
      if (activate()) {
        addColumn(href, 0)
        var col0 = c.querySelector('.stacked-column[data-index="0"]')
        if (col0) setActiveByHref(col0, href)
      }
    }
  }

  function onKey(e) {
    if (!active) return
    if (e.key !== "Escape") return
    var c = getContainer()
    if (!c) return
    var cols = c.querySelectorAll(".stacked-column")
    if (cols.length === 0) return
    e.preventDefault()
    // Back: drop the right-most column (returns to the previous note).
    closeFrom(cols.length - 1)
  }

  function onNav() {
    deactivate()
  }

  function onResize() {
    var c = getContainer()
    if (active && c) {
      updateNav(c)
      updateOpenState(c)
    }
  }

  if (!window.__stackedNotesBound) {
    document.addEventListener("click", onClick, true)
    document.addEventListener("keydown", onKey)
    document.addEventListener("nav", onNav)
    window.addEventListener("resize", onResize)
    window.__stackedNotesBound = true
  }
}

const script = "(" + stackedNotesRuntime.toString() + ")();"

// ── Quartz component ────────────────────────────────────────────────────
const StackedNotes = (opts) => {
  const o = opts ?? {}
  const Component = () =>
    h("div", {
      id: "stacked-notes-container",
      "data-mobile-breakpoint": o.mobileBreakpoint ?? 800,
      "data-max-columns": o.maxColumns ?? 8,
      "data-spine": o.spineWidth ?? 40,
    })
  Component.css = css
  Component.afterDOMLoaded = script
  return Component
}

export { StackedNotes }
