<template>
  <div ref="root" id="toast-container">
    <TransitionGroup name="toasts">
      <Toast v-for="t in toasts" :key="t.id" :toast="t" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { EventBus, EventBusInterface } from "../libs/eventBus";
import { ToastOptionsAndRequiredContent } from "../types";

const root = ref(null);
const toasts: {
  [toastId: number | string]: ToastOptionsAndRequiredContent;
} = {}; // refにする

const props = defineProps({
  eventBus: {
    required: true,
    type: Object as PropType<EventBusInterface>,
    default: () => new EventBus(),
  },
});

const setToast = (props: ToastOptionsAndRequiredContent) => {
  toasts["hoge"] = props;
};

onMounted(() => {
  console.log("toast mounted");
  console.log(root.value);
  document.body.appendChild(root.value);
});
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
