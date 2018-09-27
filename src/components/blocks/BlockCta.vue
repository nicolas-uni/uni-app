<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
  import LinkButton from '../elements/LinkButton.vue'
  import Subtitle from '../elements/Subtitle.vue'

  export default {
    name: "BlockCta",
    components: {LinkButton, Subtitle}
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  section {
    background: $white;
    padding: 47px 16px 33px 16px;

    .presentation {
      h2 {
        margin-top: 32px;
      }
    }

    .more {
      display: flex;
      justify-content: flex-end;
      margin-right: 13px;
    }
  }

  @include screen-xl {
    section {
      padding: 72px 40px 0 40px;
    }
  }

</style>
