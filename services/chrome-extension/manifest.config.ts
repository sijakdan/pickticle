import { defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  chrome_url_overrides: {
    newtab: "index.html",
  },
  content_scripts: [
    {
      // @ts-expect-error: crx가 TSX를 JS로 변환함
      js: ["./src/main.tsx"],
      matches: ["https://*/*"],
    },
  ],
});
