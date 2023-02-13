<template>
  <div ref="panel" id="panel">
    <!-- <div class="indicator"> -->
    <div class="up" :style="style"></div>
    <div class="down" :style="style"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: "small" | "medium" | "large",
    default: "medium",
  },
});

const panel = ref(null);
const px = computed(() => {
  switch (props.value.size) {
    case "small":
      return 5;
    case "medium":
      return 8;
    case "large":
      return 11;
  }
});
const style = computed(() => {
  return {
    height: panel.value?.offsetHeight / 2 + "px",
    border: `${px}px solid transparent`,
  };
});
</script>

<style lang="scss" scoped>
#panel {
  position: relative;
}
.up {
  position: absolute;
  // border: 5px solid transparent;
  border-bottom-color: #aaa !important;
  bottom: 50%;
  margin-bottom: 2px;
}
.down {
  position: absolute;
  // border: 5px solid transparent;
  border-top-color: #555 !important;
  top: 50%;
  margin-top: 2px;
}
</style>
