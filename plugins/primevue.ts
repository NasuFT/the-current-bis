import { defineNuxtPlugin } from "nuxt/app";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";
import Image from "primevue/image";
import Listbox from "primevue/listbox";
import Skeleton from "primevue/skeleton";
import Textarea from "primevue/textarea";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("Image", Image);
  nuxtApp.vueApp.component("Listbox", Listbox);
  nuxtApp.vueApp.component("Textarea", Textarea);
  nuxtApp.vueApp.component("Skeleton", Skeleton);
  nuxtApp.vueApp.component("Accordion", Accordion);
  nuxtApp.vueApp.component("AccordionTab", AccordionTab);
});
