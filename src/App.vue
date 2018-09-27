<template>
  <div id="app">
    <!--HEADER-->
    <main-header></main-header>
    <!--NAVIATION-->
    <navigation></navigation>

    <router-view></router-view>

    <!--FOOTER-->
    <main-footer></main-footer>

    <!--
        <cta-button :white="true" :icon="true"  href="www.google.fr">le contenu</cta-button>
    -->
  </div>
</template>

<script>
  import MainHeader from './components/blocks/MainHeader.vue'
  import Navigation from './components/blocks/Navigation.vue'
  import MainFooter from './components/blocks/MainFooter.vue'

  export default {
    name: 'app',
    components: {MainHeader, Navigation, MainFooter}
  }
</script>

<style lang="scss">

  @import './assets/components/variables';
  @import './assets/components/reset';
  @import './assets/style';

  .savoir-faire {
    p {
      text-transform: uppercase;
      color: $black;
    }
  }

  .image {
    height: 222px;
    background: $grey;
  }

</style>
