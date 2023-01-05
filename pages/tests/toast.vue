<template>
  <div>
    <button type="button" @click="addToast">add toast</button>
  </div>
</template>

<script setup>
const toast = useToast();
const addToast = () => {
  toast.addToast("hoge");
  console.log(toast.toasts.value);
};
</script>
