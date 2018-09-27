<template>
  <a :href="href" class="button">
    <slot></slot>
  </a>

</template>

<script>
  export default {
    props: {
      href: {required: true, type: String}
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  .button {
    padding: $s-s $s-l;
    margin-top: $s-s;
    display: inline-block;
    font-family: $main-font-family;
    font-size: $font-size-xs;
    line-height: $line-height-xs;
    font-weight: 400;
    cursor: pointer;
    transition: $quick-transition;
  }

  a.button {
    color: $black;
    &:hover {
      text-decoration: none;
    }
  }

  @include screen-m {
    .button {
      font-size: $font-size-s;
      line-height: $line-height-s;
    }
  }
</style>
