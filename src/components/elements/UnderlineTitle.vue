<template>
  <div>
    <h3><slot></slot></h3>
    <hr>
  </div>
</template>

<script>
  export default {
    name: "UnderlineTitle"
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  h3{
    margin-bottom: 8px;
  }
  hr{
    border: 1px solid $main-color;
  }
  @include screen-m {

  }

</style>
