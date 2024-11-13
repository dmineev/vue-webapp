import { createApp } from "vue";

// import "./assets/styles/vars.css";
// import "./styles/base.css";

import "./assets/styles/base.css";
import "./assets/styles/custom.css";
import App from "./App.vue";
import { router } from "./router";
import { loadIcons } from "@/utils/icons";
import { initAppearance } from "@/composables/useAppConfig";

const app = createApp(App);
app.use(router);
loadIcons();
initAppearance();

await Promise.all([router.isReady()]);

app.mount("#app");