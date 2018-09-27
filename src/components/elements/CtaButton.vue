<template>
  <button :href="href" class="button button--CTA" :class="{'button--CTA--icon': icon, 'button--CTA--white': white}"><slot></slot></button>
</template>

<script>
  export default {
    name: "CtaButton",
    props: {
      white: false,
      icon: false,
      href: ''
    }

  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  .button.button--CTA {
    text-transform: uppercase;
    background: $black;
    color: $white;
    border-radius: 100px;
    padding: 10px $s-l;
    //Hover

    &:hover {
      opacity: 0.8;
    }
  }

  .button.button--CTA--white {
    background: $white;
    span {
      color: $black !important;
    }
  }

  .button.button--CTA--icon {
    display: inline-flex;
    padding: 7px $s-s 6px $s-l;
    align-items: center;
    > span {
      margin-right: $s-s*1.5;
      transition: $main-transition;
      color: $white;
    }
    > div {
      height: 28px;
      width: 28px;
      background: $main-color;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      > svg {
        height: 20px;
        width: 20px;
        polygon, circle, path {
          fill: $white;
        }
      }
    }

    //Hover

    &:hover {
      > span {
        margin-right: $s-m*1.5;
      }
    }
  }

  // Button for forms

  .button.button--CTA--form {
    width: 100%;
    justify-content: center;
    background: $main-color;
    > div {
      background: transparent;
    }
  }

  // Pour les liens

  a.button.button--CTA {
    color: $white;

  }

  @include screen-s {
    .button.button--CTA--form {
      width: auto;
      justify-content: flex-start;
      background: $black;
      > div {
        background: $main-color;
      }
    }
  }


</style>
