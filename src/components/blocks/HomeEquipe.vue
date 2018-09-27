<template>
  <section>
    <div class="large-container">
      <div class="row">
        <div class="col-l-4">
          <div class="carousel">
            <img src="../../assets/images/home/cftc-bg.png"/>
          </div>
        </div>
        <div class="col-l-2">
          <div class="content-project">
            <block-cta>
              <div class="presentation">
                <subtitle>Le Studio</subtitle>
                <h2>Une équipe à taille humaine</h2>
                <p>
                  Pas d’intermédiaire !
                  Un membre de notre équipe prend en charge votre développement digital. Il vous connais et s’occupe du suivi de vos projets.
                </p>
              </div>
              <div class="more">
                <link-button href="#">Découvrir l'équipe</link-button>
              </div>
            </block-cta>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import LinkButton from '../elements/linkButton.vue'
  import Subtitle from '../elements/Subtitle.vue'
  import BlockCta from '../blocks/BlockCta.vue'

  export default {
    name: "HomeEquipe",
    components: {LinkButton, Subtitle, BlockCta}
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  section {

    .carousel {
      height: 224px;
      width: 100%;
      background: $grey;
      position: relative;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    .content-project {
      .presentation {
        h2 {
          margin-top: 32px;
        }
      }

      .more {
        display: flex;
        justify-content: flex-end;
        margin-right: 13px;
      }
    }

  }

  @keyframes stroke {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes next-opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @include screen-xl {

    section {
      .row {
        flex-direction: row-reverse;
      }
      .carousel {
        height: 100%;

      }
    }
  }




</style>
