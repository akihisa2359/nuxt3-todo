<template>
  <div class="header">
    <div class="header__wrapper">
      <a class="item">
        <span class="material-symbols-outlined icon"> login </span>
        login
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  background: white;
  &__wrapper {
    display: flex;
    padding: 0 64px;
    margin: auto;
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
}
</style>
