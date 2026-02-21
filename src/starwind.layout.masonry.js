// sw-masonry.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwMasonryLayout = createStarwindElement({
  gap: { var: "--sw-masonry-gap", type: "space" },
  columns: { var: "--sw-masonry-columns", type: "number" },
  "column-width": { var: "--sw-masonry-column-width", type: "space" },
});

export function defineSwMasonry() {
  defineElement("sw-masonry", SwMasonryLayout);
}
