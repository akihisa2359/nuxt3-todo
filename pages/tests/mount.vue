<template>
  <div>
    <div ref="templateRef"></div>
    <h1>mount test</h1>
    <button type="button" @click="showToast">show toast</button>
  </div>
</template>

<script setup>
import toast from "~~/components/toastContainer.vue";
import { createApp } from "vue";
import { useToast } from "~/vue-toastification/src";

const templateRef = ref(null);

onMounted(() => {
  const app = createApp(toast);
  app.mount(templateRef.value);
});
//
// const toastInjectionKey = Symbol("VueToastification");
// console.log(toastInjectionKey);
// const tst = inject(toastInjectionKey, undefined);
const showToast = () => {
  useToast().success("hoge");
  // console.log(tst);
  // tst.success("hoge");
};
</script>
