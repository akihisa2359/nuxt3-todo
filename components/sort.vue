<template>
  <div ref="panel" id="panel">
    <!-- <div class="indicator"> -->
    <div class="up" :style="style"></div>
    <div class="down"></div>
  </div>
  <!-- </div> -->
  <!-- {{ height }} -->
  <!-- {{ panel?.style?.width }} -->
  {{ style }}
</template>

<script setup>
import { integer } from "@vee-validate/rules";

const panel = ref(null);
const style = computed(() => {
  const hoge = {
    height: panel.value?.offsetHeight / 2,
    border: "5px solid transparent",
  };
  return hoge;
  // return panel.value?.offsetHeight / 2;
});
</script>

<style lang="scss" scoped>
#panel {
  position: relative;
}
.up {
  position: absolute;
  // border: 5px solid transparent;
  border-bottom-color: #aaa;
  bottom: 0;
}
.down {
  position: absolute;
  // border: 5px solid transparent;
  border-top-color: #555;
  top: 0px;
}
</style>
