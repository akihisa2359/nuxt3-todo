<template>
  <div
    ref="panel"
    id="panel"
    :style="{ width: px * 2 + 'px' }"
    @click="changeSort"
  >
    <div class="up" :style="upStyle"></div>
    <div class="down" :style="downStyle"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: "small" | "medium" | "large";
}
const props = withDefaults(defineProps<Props>(), {
  size: "medium",
});
const emit = defineEmits(["sortChanged"]);

const panel = ref(null);
const currentSortType = ref("none");
const px = computed(() => {
  switch (props.size) {
    case "small":
      return 5;
    case "medium":
      return 8;
    case "large":
      return 11;
  }
});

const upStyle = computed(() => {
  return {
    height: panel.value?.offsetHeight / 2 + "px",
    border: `${px.value}px solid transparent`,
    borderBottomColor: currentSortType.value === "asc" ? "#555" : "#aaa",
  };
});
const downStyle = computed(() => {
  return {
    height: panel.value?.offsetHeight / 2 + "px",
    border: `${px.value}px solid transparent`,
    borderTopColor: currentSortType.value === "desc" ? "#555" : "#aaa",
  };
});

const changeSort = () => {
  switch (currentSortType.value) {
    case "desc":
      currentSortType.value = "asc";
      break;
    case "asc":
      currentSortType.value = "none";
      break;
    case "none":
      currentSortType.value = "desc";
      break;
  }
  emit("sortChanged", currentSortType.value);
};
</script>

<style lang="scss" scoped>
#panel {
  position: relative;
  cursor: pointer;
}
.up {
  position: absolute;
  bottom: 50%;
  margin-bottom: 2px;
}

.down {
  position: absolute;
  top: 50%;
  margin-top: 2px;
}
</style>
