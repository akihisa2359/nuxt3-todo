<template>
  <div v-if="isVisible" id="toast" style="background: green">success</div>
</template>

<script setup>
const isVisible = useToast("isToastVisible");
</script>

<style scoped lang="scss">
#toast {
  position: fixed;
  bottom: 30px;
  right: 10px;
  color: white;
  padding: 10px 40px;
  border-radius: 10%;
  animation: show 1s;
}
@keyframes show {
  0% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
