// @ts-check
import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  // Add these two lines; replace `moroz` with your username
  site: isProd ? "https://moroz.github.io" : undefined,
  // Replace `megane` with the name of your project
  base: isProd ? "megane" : undefined,
});
