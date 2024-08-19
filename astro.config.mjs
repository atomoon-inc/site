import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [react(), tailwind({ nesting: true })],
});
