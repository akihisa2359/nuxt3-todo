<template>
  <div id="menu" class="container">
    <a class="item">
      <!-- <div> -->
      <span class="material-symbols-outlined icon"> login </span>
      <!-- </div> -->
      login
    </a>
  </div>
</template>

<style lang="scss">
#menu {
  display: flex;
  .item {
    display: block;
    margin-left: auto;
    &:hover {
      cursor: pointer;
    }

    .icon {
      display: block;
    }
  }
}
</style>
