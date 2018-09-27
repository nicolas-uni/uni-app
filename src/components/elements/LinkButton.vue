<template>
  <a class="link" :href="href"><slot></slot></a>
</template>

<script>
  export default {
    name: "LinkButton",
    props: ['href']
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  .link {
    color: $main-color;
    text-transform: uppercase;
    &:after {
      content: "";
      width: 5px;
      height: 10px;
      margin-top: 6px;
      margin-left: $s-s;
      transition: $main-transition;
      position: absolute;
      background: url('../../assets/images/icons/i-arrow-right.png') 100% no-repeat;
    }

    // Hover

    &:hover {
      &:after {
        margin-left: $s-s * 1.5;
      }
    }
  }

  .link--center {
    display: block;
    text-align: center;
  }

  @include screen-m {
    .link{
      &:after{
        width: 6px;
        height: 12px;
        margin-top: 5px;
      }
    }
  }

</style>
