import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ryzeangler.github.io",
  integrations: [sitemap()],
});
