<template>
  <div class="subtitle">
    <hr>
    <span><slot></slot></span>
  </div>
</template>

<script>
    export default {
        name: "Subtitle"
    }
</script>

<style scoped lang="scss">
    @import '../../assets/components/variables';


    .subtitle {
      display: flex;
      hr {
        width: 64px;
        height: 1px;
        border: 1px solid $main-color;
        margin: 8px 0 0;
      }
      span {
        text-transform: uppercase;
        color: $main-color;
        margin-left: 20px;
      }
    }

    @include screen-xl {
      .subtitle{
        hr{
          width: 90px;
        }
      }
    }

</style>
