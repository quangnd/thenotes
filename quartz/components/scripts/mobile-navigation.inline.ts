// Enhance the existing Quartz Search/Explorer; leave their desktop handlers and search engine intact.
const mobile = window.matchMedia("(max-width: 800px)")
let disposeNavigation = () => {}
let focusArticle = false

function setupMobileNavigation() {
  disposeNavigation()
  const sidebar = document.querySelector<HTMLElement>(".sidebar.left")
  const explorer = sidebar?.querySelector<HTMLElement>(".explorer")
  const menu = explorer?.querySelector<HTMLButtonElement>(".mobile-explorer")
  const menuContent = explorer?.querySelector<HTMLElement>(".explorer-content")
  const search = sidebar?.querySelector<HTMLElement>(".search-container")
  const trigger = sidebar?.querySelector<HTMLButtonElement>(".search-button")
  const input = search?.querySelector<HTMLInputElement>(".search-bar")
  const space = search?.querySelector<HTMLElement>(".search-space")
  if (!sidebar || !explorer || !menu || !menuContent || !search || !trigger || !input || !space)
    return

  const events = new AbortController()
  let active: "menu" | "search" | undefined
  let restoreInert = () => {}
  let ready = false
  let failed = false
  let desktopCollapsed = explorer.classList.contains("collapsed")
  const theme = sidebar.querySelector<HTMLButtonElement>(".darkmode")
  const themeLabel = theme?.getAttribute("aria-label") ?? "Chế độ tối"
  function labelTheme() {
    theme?.setAttribute(
      "aria-label",
      mobile.matches
        ? document.documentElement.getAttribute("saved-theme") === "dark"
          ? "Chuyển sang chế độ sáng"
          : "Chuyển sang chế độ tối"
        : themeLabel,
    )
  }
  const themeObserver = new MutationObserver(labelTheme)
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["saved-theme"],
  })
  labelTheme()

  function fitKeyboard() {
    const viewport = window.visualViewport
    search!.style.setProperty("--mobile-search-height", `${viewport?.height ?? innerHeight}px`)
    search!.style.setProperty("--mobile-search-top", `${viewport?.offsetTop ?? 0}px`)
  }
  window.visualViewport?.addEventListener("resize", fitKeyboard, { signal: events.signal })
  window.visualViewport?.addEventListener("scroll", fitKeyboard, { signal: events.signal })
  fitKeyboard()

  const close = document.createElement("button")
  close.className = "mobile-search-close"
  close.type = "button"
  close.textContent = "Đóng"
  close.setAttribute("aria-label", "Đóng tìm kiếm")
  const status = document.createElement("p")
  status.className = "mobile-search-status"
  status.setAttribute("role", "status")
  const retry = document.createElement("button")
  retry.className = "mobile-search-retry"
  retry.type = "button"
  retry.textContent = "Tải lại trang"
  retry.hidden = true
  space.prepend(close)
  input.after(status, retry)

  function setStatus() {
    const results = search!.querySelector(".results-container")
    // The existing plugin creates this region after its index is ready.
    if (results && !ready) {
      ready = true
      if (input!.value) input!.dispatchEvent(new Event("input"))
    }
    if (results && mobile.matches) {
      results.setAttribute("role", "region")
      results.setAttribute("aria-label", "Kết quả tìm kiếm")
    }
    const count = results?.querySelectorAll("a.result-card:not(.no-match)").length ?? 0
    const message = failed
      ? "Không tải được tìm kiếm. Hãy tải lại trang để thử lại."
      : !ready
        ? "Đang tải tìm kiếm…"
        : !input!.value.trim()
          ? "Nhập từ khóa để tìm trong các ghi chú."
          : results?.querySelector(".no-match")
            ? `Không có kết quả cho “${input!.value}”. Hãy thử từ khóa khác.`
            : count
              ? `${count} kết quả.`
              : "Đang tìm…"
    if (status.textContent !== message) status.textContent = message
    retry.hidden = !failed
  }

  function release() {
    restoreInert()
    restoreInert = () => {}
    document.documentElement.classList.remove("mobile-nav-open", "mobile-no-scroll")
    sidebar!.removeAttribute("role")
    sidebar!.removeAttribute("aria-modal")
    sidebar!.removeAttribute("aria-label")
    search!.removeAttribute("aria-modal")
  }

  function dismiss(restoreFocus = true) {
    const previous = active
    active = undefined
    search!.classList.remove("active")
    trigger!.setAttribute("aria-expanded", "false")
    explorer!.classList.add("collapsed")
    menu!.setAttribute("aria-expanded", "false")
    menu!.setAttribute("aria-label", "Mở menu")
    menuContent!.setAttribute("aria-expanded", "false")
    sidebar!.style.zIndex = ""
    release()
    if (restoreFocus && previous) (previous === "search" ? trigger : menu)!.focus()
  }

  function activate(kind: "menu" | "search") {
    if (!mobile.matches || active === kind) return
    dismiss(false)
    active = kind
    const dialog = kind === "search" ? search! : sidebar!
    dialog.setAttribute("role", "dialog")
    dialog.setAttribute("aria-modal", "true")
    dialog.setAttribute("aria-label", kind === "search" ? "Tìm kiếm ghi chú" : "Điều hướng ghi chú")
    // Make every branch outside the dialog inert, preserving existing inert states.
    const changed: HTMLElement[] = []
    for (let node: HTMLElement | null = dialog; node?.parentElement; node = node.parentElement) {
      for (const sibling of Array.from(node.parentElement.children)) {
        if (sibling !== node && sibling instanceof HTMLElement && !sibling.inert) {
          sibling.inert = true
          changed.push(sibling)
        }
      }
      if (node.parentElement === document.body) break
    }
    restoreInert = () => changed.forEach((element) => (element.inert = false))
    document.documentElement.classList.add("mobile-nav-open")
    sidebar!.style.zIndex = "9999"
    if (kind === "menu") {
      explorer!.classList.remove("collapsed")
      menu!.setAttribute("aria-expanded", "true")
      menu!.setAttribute("aria-label", "Đóng menu")
      menuContent!.setAttribute("aria-expanded", "true")
      menu!.focus()
    } else {
      search!.classList.add("active")
      trigger!.setAttribute("aria-expanded", "true")
      setStatus()
      input!.focus()
    }
  }

  const observer = new MutationObserver(() => {
    if (!mobile.matches) return
    setStatus()
    // Synchronize keyboard shortcuts and the plugin's result-selection dismissal.
    if (search.classList.contains("active")) activate("search")
    else if (active === "search") dismiss(!focusArticle)
  })
  observer.observe(search, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  })

  document.addEventListener(
    "click",
    (event) => {
      if (!mobile.matches || !(event.target instanceof Element)) return
      if (event.target.closest(".mobile-explorer") === menu) {
        event.preventDefault()
        event.stopImmediatePropagation()
        active === "menu" ? dismiss() : activate("menu")
      } else if (event.target.closest(".search-button") === trigger) {
        activate("search")
      } else if (
        (active || event.target.closest(".page-title a")) &&
        event.target.closest("a[href]") &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.shiftKey &&
        !event.altKey
      ) {
        focusArticle = true
        dismiss(false)
      }
    },
    { capture: true, signal: events.signal },
  )

  document.addEventListener(
    "keydown",
    (event) => {
      if (!mobile.matches || !active) return
      if (event.key === "Escape") {
        event.preventDefault()
        event.stopImmediatePropagation()
        dismiss()
      } else if (
        event.key === "Enter" &&
        event.target === input &&
        !event.isComposing &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        !search.querySelector<HTMLElement>(".tag-suggestions")?.getClientRects().length
      ) {
        // Click while attached: Quartz's input handler otherwise removes the result
        // before clicking it, bypassing document/window SPA listeners and heading focus.
        const selected = search.querySelector<HTMLAnchorElement>("a.result-card.focus")
        if (selected) {
          event.preventDefault()
          event.stopImmediatePropagation()
          selected.click()
        }
      } else if (event.key === "Tab") {
        // Quartz uses Tab for result highlighting. Modal Tab must reach Close and links.
        event.preventDefault()
        event.stopImmediatePropagation()
        const dialog = active === "search" ? search : sidebar
        const targets = Array.from(
          dialog.querySelectorAll<HTMLElement>("a[href], button, input, [tabindex='0']"),
        ).filter(
          (element) =>
            element.getClientRects().length > 0 &&
            !element.closest("[inert]") &&
            !element.matches(":disabled"),
        )
        const index = targets.indexOf(document.activeElement as HTMLElement)
        targets[(index + (event.shiftKey ? -1 : 1) + targets.length) % targets.length]?.focus()
      }
    },
    { capture: true, signal: events.signal },
  )

  close.addEventListener("click", () => dismiss(), { signal: events.signal })
  search.addEventListener(
    "click",
    (event) => {
      if (mobile.matches && event.target === search) dismiss()
    },
    { signal: events.signal },
  )
  retry.addEventListener("click", () => location.reload(), { signal: events.signal })
  input.addEventListener("input", setStatus, { signal: events.signal })
  window.addEventListener("popstate", () => dismiss(false), { signal: events.signal })
  document.addEventListener("prenav", () => dismiss(false), { signal: events.signal })
  mobile.addEventListener(
    "change",
    () => {
      labelTheme()
      if (mobile.matches) desktopCollapsed = explorer.classList.contains("collapsed")
      dismiss(false)
      if (!mobile.matches) {
        explorer.classList.toggle("collapsed", desktopCollapsed)
        search.querySelector(".results-container")?.setAttribute("role", "listbox")
      }
    },
    { signal: events.signal },
  )

  // fetchData is Quartz's shared content-index promise, not another search index.
  const sharedIndex = typeof fetchData !== "undefined" ? fetchData : undefined
  void sharedIndex?.catch(() => {
    failed = true
    setStatus()
  })

  if (mobile.matches) dismiss(false)
  if (focusArticle) {
    const heading = document.querySelector<HTMLElement>("h1")
    heading?.setAttribute("tabindex", "-1")
    heading?.focus({ preventScroll: true })
    focusArticle = false
  }
  disposeNavigation = () => {
    if (active) dismiss(false)
    events.abort()
    observer.disconnect()
    themeObserver.disconnect()
    theme?.setAttribute("aria-label", themeLabel)
    close.remove()
    status.remove()
    retry.remove()
  }
}

document.addEventListener("nav", setupMobileNavigation)
document.addEventListener("render", setupMobileNavigation)
