<template>
  <div>
    {{ counter }}
    <button type="button" @click="counter++">++</button>
    <button type="button" @click="counter--">--</button>
    <NuxtLink to="/test2">to test2</NuxtLink>
    <button type="button" @click="isToastVisible = !isToastVisible">
      toast
    </button>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
toast("hoge");
const counter = useCounter("counter");
const isToastVisible = useToast("isToastVisible");
</script>
