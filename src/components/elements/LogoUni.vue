<template>
  <a class="logoUni" :href="href">
    <div class="logoUni__logo">
      <svg viewBox="0 0 36 30">
        <circle cx="32.5" cy="3.5" r="3.5"></circle>
        <path d="M29.8581081,9 L29.8581081,18.6686217 L19.8851351,9 L14.9594595,9 L14.9594595,19.1612903 C14.9594595,21.686217 13.0135135,23.7800587 10.5810811,23.7800587 C8.14864865,23.7800587 6.2027027,21.686217 6.2027027,19.1612903 L6.2027027,9 L0,9 L0,18.914956 C0,25.0117302 4.74324324,30 10.5202703,30 C16.6621622,30 20.9189189,24.6422287 21.0405405,19.5923754 L31.0743243,28.9530792 L36,28.9530792 L36,9 L29.8581081,9 Z" id="Shape"></path>
      </svg>
    </div>
    <div class="logoUni__title animated--slow fadeInLeft">
      <p>
        <slot></slot>
      </p>
    </div>
  </a>
</template>

<script>
    export default {
        props: ['href']
    }
</script>

<style scoped lang="scss">
    @import '../../assets/components/variables';

    .logoUni{
      height: 32px;
      display:inline-flex;
      align-items:center;
      &:hover{
        text-decoration:none;
      }
      svg{
        height: 32px;
        width: 32px;
      }
      circle{
        fill: $main-color;
      }
      path{
        fill: $white;
        mix-blend-mode: difference;
      }

      // Logo
      &__logo{
        margin-right:$s-m;
      }

      // Title

      &__title{
        >p{
          margin-bottom:0;
          margin-top:$s-xs;
          user-select: none;
          transform:translateX(0);
          opacity:1;
          transition:$main-transition;
        }
      }

    }


  @include screen-m {
    .logoUni{
      height: 48px;
      svg{
        height: 48px;
        width: 48px;
      }

    }
  }

</style>
