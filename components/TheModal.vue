<template>
  <div class="modal-wapper" @click.self="close">
    <div class="modal">
      <slot>
        <label>hoge</label>
        <input />
      </slot>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["close"]);

const close = () => {
  console.log("in modal close");
  emits("close");
};
</script>

<style scoped lang="scss">
.modal-wapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
}

.modal {
  min-height: 350px;
  min-width: 100px;
  background-color: white;
  margin: auto;
  border-radius: 10px;
}
</style>
