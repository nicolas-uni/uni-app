<template>
  <div class="container">
    <underline-title>{{ title }}</underline-title>
    <p><slot></slot></p>
  </div>

</template>

<script>
  import UnderlineTitle from '../../components/elements/UnderlineTitle.vue'

  export default {
    name: "Capacity",
    components: {UnderlineTitle},
    props: ['title']
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  .container{
    padding: 21px 16px 28px 16px;
    p{
      margin-top: 24px;
    }
  }
  @include screen-m {

  }

</style>
