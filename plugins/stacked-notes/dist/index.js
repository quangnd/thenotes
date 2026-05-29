export { StackedNotes } from "./components/index.js"

export const manifest = {
  name: "stacked-notes",
  displayName: "Stacked Notes",
  description: "Open internal links as horizontally stacked, side-by-side note columns.",
  version: "0.1.0",
  category: "component",
  quartzVersion: ">=5.0.0",
  components: {
    StackedNotes: {
      displayName: "Stacked Notes",
      defaultPosition: "afterBody",
      defaultPriority: 50,
    },
  },
}
