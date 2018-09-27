<template>
  <section :class="{white: white}">
    <div class="quote" v-if="white">
      <div class="container">
        <white>
          <slot></slot>
        </white>
      </div>

    </div>
    <div class="quote" v-else>
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  import White from '../elements/White.vue'

  export default {
    name: "Quote",
    components: {White},
    props: {
      white: false
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  section {
    padding: 80px 16px;
    text-align: center;

    &.white {
      background: $black;
    }
  }

  @include screen-xl {
    h2{
      margin-left: 304px;
      margin-right: 304px;
    }
  }

</style>
