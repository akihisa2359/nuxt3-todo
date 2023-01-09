<template>
  <div>
    {{ counter }}
    <button type="button" @click="counter++">++</button>
    <button type="button" @click="counter--">--</button>
    <NuxtLink to="/test2">to test2</NuxtLink>
    <!-- <button type="button" @click="isToastVisible = !isToastVisible">
      toast
    </button> -->
    <button type="button" @click="showToast">show toast</button>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const counter = useCounter("counter");
// const isToastVisible = useToast("isToastVisible");
const showToast = () => {
  const toast = useToast();
  toast.success("hoge");
};
</script>
