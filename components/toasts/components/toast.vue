<template>
  <div
    class="toast"
    :class="toast.type"
    @mouseenter="animationPlayState = 'paused'"
    @mouseleave="animationPlayState = 'running'"
    @click="removeToast"
  >
    <div style="display: flex">
      <span class="material-symbols-outlined mr-m"> info </span
      >{{ toast.content }}
    </div>
    <div
      :style="{ animationPlayState }"
      class="progress-bar"
      @animationend="removeToast"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { Prop, PropType } from "vue";
import { Toast } from "../types";

const props = defineProps({
  // id: {
  //   type: Object as PropType<number | string>,
  // },
  toast: {
    type: Object as PropType<Toast>,
    required: true,
  },
});

const emits = defineEmits(["remove"]);

// const props = withDefaults(defineProps<hoge>(), {
//   toast: () => {},
// });

const animationPlayState = ref("running");

const toastHandler = useToast();

const removeToast = (i) => {
  emits("remove");
  // console.log(i);
  // toastHandler.remove(i);
};
</script>

<style scoped lang="scss">
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
  position: relative;

  &.success {
    background: #4caf50;
  }
  &.error {
    background: #ff5252;
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
  animation: scale-x-frames 10s linear 1 forwards;
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
