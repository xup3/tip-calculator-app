import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

const i18n = createI18n({
  // something vue-i18n options here ...
});

const app = createApp(App);

app.use(createPinia());
app.use(i18n);

app.mount("#app");
