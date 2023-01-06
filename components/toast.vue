<template>
  <div ref="root" id="toast-container">
    <TransitionGroup name="toasts" move-class="toasts-move">
      <div
        v-for="(t, i) in toasts"
        :key="i"
        :class="{ show: isVisible, hide: !isVisible }"
        class="toast"
        style="background: green"
        @click="onClick(i)"
      >
        success
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
const root = ref(null);
const isVisible = useToast("isToastVisible");

const toast = useToast();
const toasts = toast.toasts;

onMounted(() => {
  console.log("toast mounted");
  console.log(root.value);
  document.body.appendChild(root.value);
});

const onClick = (i) => {
  toast.removeToast(i);
};
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
.toast {
  // bottom: 30px;
  // right: 10px;
  display: flex;
  max-width: 600px;
  min-width: 300px;
  color: white;
  padding: 10px 40px;
  border-radius: 8px;
  margin-left: auto;
  margin-bottom: 10px;
  padding: 22px 24px;
  // transform: translateY(-300px);
  transition: all 0.6s ease;
  // transition: all 1.5s linear;
  &.show {
    // animation: fadeIn 1s;
  }
  &.hide {
    // animation: fadeOut 1s;
  }
  &:nth-of-type(2n + 1) {
    font-size: 10px;
  }
}
.toasts-move {
  // transition: all 0.5s ease;
  // transition: transform 0.8s ease;
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
