<template>
  <div
    class="toast"
    @mouseenter="animationPlayState = 'paused'"
    @mouseleave="animationPlayState = 'running'"
  >
    <div
      :class="{ show: isVisible, hide: !isVisible }"
      @click="onClick(toast.id)"
    >
      {{ toast.content }}
    </div>
    <div
      :style="{ animationPlayState }"
      class="progress-bar"
      @animationend="onClick(toast.id)"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  toast: { default: () => {} },
});

const isVisible = useToast("isToastVisible");
const animationPlayState = ref("running");

const toastHandler = useToast();

const onClick = (i) => {
  console.log(i);
  toastHandler.removeToast(i);
};
</script>

<style scoped lang="scss">
.toast {
  // bottom: 30px;
  // right: 10px;
  display: flex;
  max-width: 600px;
  min-width: 300px;
  background: #4caf50;
  color: white;
  padding: 10px 40px;
  border-radius: 8px;
  margin-left: auto;
  margin-bottom: 10px;
  padding: 22px 24px;
  position: relative;
}
.toasts {
  &-enter-active {
    animation: fadeIn 1s;
  }
  &-leave-active {
    animation: fadeOut 1s;
  }
  &-move {
    transition: transform 1s ease;
  }
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba($color: #fff, $alpha: 0.8);
  position: absolute;
  bottom: 0;
  left: 0;
  transform-origin: left;
  animation: scale-x-frames 30s linear 1 forwards;
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

@keyframes scale-x-frames {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}
</style>
