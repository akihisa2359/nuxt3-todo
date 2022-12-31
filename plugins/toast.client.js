// https://github.com/Maronato/vue-toastification/tree/next
import Toast, { POSITION } from "vue-toastification";

// https://v3.nuxtjs.org/guide/directory-structure/plugins/
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast);
});
