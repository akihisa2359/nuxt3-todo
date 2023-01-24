<template>
  <div>
    <button type="button" @click="addToast">add toast</button>
    <!-- <button type="button" @click="addSuccessToast">add success toast</button>
    <button type="button" @click="addErrorToast">add error toast</button> -->
  </div>
</template>

<script setup>
import { useToast2 } from "~~/components/toasts/index";

const toast = useToast2();
const addToast = () => {
  console.log("toast");
  console.log(toast);
  toast.add("hogeに成功しました");
};

// const addSuccessToast = () => {
//   toast.success("hoge success");
// };
// const addErrorToast = () => {
//   toast.error("hogeに失敗しました");
// };
</script>
