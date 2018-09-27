<template>

</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  .burgerMenu {
    height: $s-xl;
    width: $s-xl;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    > div {
      height: 3px;
      background: $black;
      transition: $quick-transition;
    }
    > div:nth-child(1) {
      margin-bottom: $s-xs;
      width: 80%;
    }
    > div:nth-child(2) {
      width: 50%;
    }
    > span {
      color: $white;
      display: none;
      user-select: none;
    }
    &:hover {
      > div {
        background: $main-color;
      }
    }

    @include screen-m {
      .burgerMenu {
        height: $s-xxl;
        width: $s-xxl;
        > div {
          height: 4px;
        }
        > div:nth-child(1) {
          margin-bottom: $s-xs*1.5;
        }
      }
    }

    // Lorsqu'on survole le burger, fait bouger les partie de celui-ci
    // À devv
  }
</style>
