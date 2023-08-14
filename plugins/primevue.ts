import { defineNuxtPlugin } from "nuxt/app";
import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";
import Image from "primevue/image";
import Listbox from "primevue/listbox";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("Image", Image);
  nuxtApp.vueApp.component("Listbox", Listbox);
});
