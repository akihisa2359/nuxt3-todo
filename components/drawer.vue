<template>
  <div>
    <span class="material-symbols-outlined" @click="onClick"> menu </span>

    <div
      v-if="isDrawerVisible"
      id="drawer-wrapper"
      @click.self="isDrawerVisible = false"
    >
      <div id="drawer-container">
        <h2>hoge</h2>
        <h2>fuga</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const isDrawerVisible = ref(false);
const onClick = () => {
  isDrawerVisible.value = true;
};
</script>

<style scoped lang="scss">
#drawer-wrapper {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
}
#drawer-container {
  height: 100vh;
  max-width: 300px;
  background: white;
  animation: slide 0.5s;
}

@keyframes slide {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0);
  }
}
</style>
