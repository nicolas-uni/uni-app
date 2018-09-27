<template>

  <section>
    <slot></slot>
  </section>
</template>

<script>
  import CtaButton from '../elements/CtaButton.vue'

  export default {
    name: "BlockContact",
    components: {CtaButton}
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  section {
    background: $lightgrey;
    padding: 48px 16px;
    text-align: center;
    .btn {
      margin-top: 24px;
    }
  }

  @include screen-m {

  }

</style>
