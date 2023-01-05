<template>
  <div>
    <div v-for="(t, i) in toast.toasts" :key="i">
      <div
        ref="root"
        :class="{ show: isVisible, hide: !isVisible }"
        id="toast"
        style="background: green"
        @click="toast.removeToast(i)"
      >
        success
      </div>
    </div>
  </div>
</template>

<script setup>
const root = ref(null);
const isVisible = useToast("isToastVisible");

const toast = useToast();

onMounted(() => {
  console.log("toast mounted");
  console.log(root.value);
  document.body.append(root.value);
});
</script>

<style scoped lang="scss">
#toast {
  position: fixed;
  bottom: 30px;
  right: 10px;
  color: white;
  padding: 10px 40px;
  border-radius: 10%;
  &.show {
    animation: fadeIn 1s;
  }
  &.hide {
    animation: fadeOut 1s;
  }
}
@keyframes fadeIn {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fadeOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200px);
  }
}
</style>
