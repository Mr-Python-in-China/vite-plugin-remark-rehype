import { defineConfig } from "vite";
import vitePluginMiddleware from "../src";

import remarkA11yEmoji from "@fec/remark-a11y-emoji";

export default defineConfig({
  plugins: [
    vitePluginMiddleware({
      remarkPlugins: [remarkA11yEmoji],
    }),
  ],
});
