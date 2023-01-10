<template>
  <div ref="root" id="toast-container">
    <TransitionGroup name="toasts">
      <Toast v-for="t in toasts" :key="t.id" :toast="t" />
    </TransitionGroup>
  </div>
</template>

<script setup>
const root = ref(null);

const toast = useToast();
const toasts = toast.toasts;

onMounted(() => {
  console.log("toast mounted");
  console.log(root.value);
  document.body.appendChild(root.value);
});

watch(
  () => toasts.value.length,
  (newLength, oldLength) => {
    if (oldLength < newLength) {
      // hoge
    }
  }
);
</script>

<style scoped lang="scss">
#toast-container {
  position: fixed;
  bottom: 1em;
  width: 600px;
  right: 1em;
  display: flex;
  flex-direction: column;
}
</style>
