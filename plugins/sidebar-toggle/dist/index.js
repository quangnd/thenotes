export { SidebarToggle } from "./components/index.js"

export const manifest = {
  name: "sidebar-toggle",
  displayName: "Sidebar Toggle",
  description: "Let visitors collapse the left sidebar to widen the reading area.",
  version: "0.1.0",
  category: "component",
  quartzVersion: ">=5.0.0",
  components: {
    SidebarToggle: {
      displayName: "Sidebar Toggle",
      defaultPosition: "left",
      defaultPriority: 35,
    },
  },
}
