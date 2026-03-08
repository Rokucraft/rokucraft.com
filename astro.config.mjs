import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  site: "https://www.rokucraft.com",

  vite: {
    plugins: [tailwindcss()],
  },
});
