<template>
  <div ref="root" id="toast-container">
    <TransitionGroup name="toasts" mode="in-out">
      <div
        v-for="t in toasts"
        :key="t.id"
        :class="{ show: isVisible, hide: !isVisible }"
        class="toast"
        style="background: green"
        @click="onClick(t.id)"
      >
        {{ t.content }}
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
  console.log(i);
  toast.removeToast(i);
};

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
  transition: all 0.2s linear;
}
.toasts {
  &-enter-active {
    animation: fadeIn 1s;
  }
  &-leave-active {
    animation: fadeOut 1s;
  }
  &-move {
    // transition-timing-function: ease-in-out;
    // transition-property: all;
    // transition-duration: 400ms;
  }
}
.toasts-move {
  // transition: all 0.5s ease;
  // transition: transform 0.8s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}
@keyframes fadeOut {
  40% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(1000px, 0, 0);
  }
}
</style>
