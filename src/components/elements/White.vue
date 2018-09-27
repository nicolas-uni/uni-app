<template>
    <div>
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Black"
    }
</script>

<style scoped lang="scss">
    @import '../../assets/components/variables';
    div{
      color: $white;
      p{
        color: $lightwhite;
      }
    }
    @include screen-m {

    }

</style>
