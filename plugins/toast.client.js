// // https://github.com/Maronato/vue-toastification/tree/next
// // toast.jsだとサーバー側でも処理が行われ、またサーバー側ではToastはObjectとなり、useの引数として適切でないとwarningが発生する
// // import Toast, { POSITION } from "vue-toastification";
// import Toast, { POSITION } from "~/vue-toastification/src";
// import "vue-toastification/dist/index.css";

// // https://v3.nuxtjs.org/guide/directory-structure/plugins/
// export default defineNuxtPlugin((nuxtApp) => {
//   const options = { position: POSITION.BOTTOM_RIGHT };
//   nuxtApp.vueApp.use(Toast, options);
// });

import { createApp } from "vue";
import toast from "~~/components/toastContainer.vue";

import { EventBus } from "~~/components/toasts/libs/eventBus";

import { initialize } from "~~/components/toasts/index";

export default defineNuxtPlugin((nuxtApp) => {
  // const app = createApp(toast);
  // app.mount(document.createElement("div")); // toast.vueのonMountedを発火させる

  // const app2 = createApp(toast, {
  //   eventBus: new EventBus(),
  // });
  // app2.mount(document.createElement("div"));

  initialize();
});
