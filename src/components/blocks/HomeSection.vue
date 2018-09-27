<template>
  <section>
    <div class="decoration">
      <div>
        <svg viewBox="0 0 64 125">
          <path d="M0,87.82c14.53,0,26.36-12.31,26.36-27.44V0H63.49V58.91C63.49,95.35,35,125,0,125Z"></path>
        </svg>
      </div>
      <div>
        <svg viewBox="0 0 114.97 107.76">
          <polygon
            points="81.24 1.23 81.24 52.9 27.31 1.23 0.66 1.23 0.89 107.76 33.98 107.76 33.72 57.91 87.62 107.76 114.31 107.76 114.31 1.23 81.24 1.23"></polygon>
        </svg>
      </div>
      <div>
        <svg viewBox="0 0 64 125">000000-
          <rect x="12.71" y="0.61" width="38.58" height="123.78"></rect>
        </svg>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-l-6">
          <div class="home-content">
            <h1>Nous accompagnons les professionnels dans leur développement en ligne.</h1>
            <p>Nous créons des sites internets qui répondent à vos besoins: Vendre un produit, un service, gérer votre
              image</p>
          </div>
        </div>
      </div>
    </div>

  </section>


</template>

<script>
  export default {
    name: "HomeSection"
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  section {
    padding-bottom: 176px;
    background: #D9E4E4;

    .decoration {
      display:none;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      > div:nth-child(1){
        position: absolute;
        display:block;
        right: 0;
        svg {
          height: 35vh;
          path {
            fill: $white;
          }
        }
      }

      > div:nth-child(2) {
        display: block;
        bottom: -5vh;
        left: 20vw;
        svg {
          height: 20vh;
          polygon {
            fill: $white;
          }
        }
      }

      > div:nth-child(3) {
        right: 0;
        svg {
          rect {
            fill: $white;
          }
          height: 8vh;
        }
        bottom: 20vh;
      }
    }

    .home-content {
      margin-top: 112px;
      text-align: center;
      z-index: 2;
      p{
        margin: 0;
      }
    }
  }

  @include screen-xl {

    section{
      padding: 152px;

      .home-content{

        p{
          padding-left: 152px;
          padding-right: 152px;
        }
      }
    }
  }

</style>
