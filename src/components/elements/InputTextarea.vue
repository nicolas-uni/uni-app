<template>

</template>

<script>
    export default {
        name: "InputTextarea"
    }
</script>

<style scoped lang="scss">
    @import '../../assets/components/variables';
    .input.input--textarea{
      >label{
        position:relative;
        transform:translateY($s-xl*1.2);
        transition:$quick-transition;
        &.label--up{
          transform:translateY($s-m);
          color:$grey;
          font-size: $font-size-xxs;
          line-height:$line-height-xxs;
          font-weight:100;
        }
      }
      >textarea{
        box-sizing:content-box;
        margin-top:$s-m;
        height:$line-height-xs;
        resize:none;
        resize:none;
        padding-bottom:4px;

      }
    }

  @include screen-m {
    .input.input--textarea{
      >label{
        &.label--up{
          font-size: $font-size-xs;
          line-height:$line-height-xs;
          font-weight:100;
        }
      }
    }
  }

</style>
