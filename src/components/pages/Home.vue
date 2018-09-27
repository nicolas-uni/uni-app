<template>
  <div>
    <home-section></home-section>
    <home-project></home-project>
    <!--White correspond à la couleur tu texte-->
    <quote white="true">
      <h2>Il n'y a pas de petit projet.</h2>
      <p>Peu importe la taille de votre entreprise, nos solutions s’adaptent à vos objectifs.</p>
    </quote>

    <quote class="savoir-faire">
      <p>Savoir faire</p>
      <h2>Nos compétences, au service de vos objectifs.</h2>
    </quote>

    <div class="container">
      <div class="row">
        <div class="col-l-2">
          <capacity title="Stratégie">La CFTC voulait dynamiser sa relation avec ses adhérents.
            En recréant une interface en ligne dédiée, nous avons créer un nouvel espace de partage
            avec les adhérents.
          </capacity>
        </div>
        <div class="col-l-2">
          <capacity title="Design">La CFTC voulait dynamiser sa relation avec ses adhérents.
            En recréant une interface en ligne dédiée, nous avons créer un nouvel espace de partage
            avec les adhérents.
          </capacity>
        </div>
        <div class="col-l-2">
          <capacity title="Développement">La CFTC voulait dynamiser sa relation avec ses adhérents.
            En recréant une interface en ligne dédiée, nous avons créer un nouvel espace de partage
            avec les adhérents.
          </capacity>
        </div>
      </div>


    </div>

    <div class="testimonial-container">
      <quote white="true">
        <p style="opacity: 0.6; text-transform: uppercase;">Partenaires</p>
        <h2>Nos relations sont basées sur la confiance.</h2>
      </quote>
      <video-testimonial></video-testimonial>
      <quote white="true">
        <p>
          « Travailler avec le Studio UNI nous a permis de développer notre business
          plus facilement. »
        </p>
        <img src="src/assets/images/logos-partenaires/opla.png" style="margin-top: 39px;"/>
      </quote>
    </div>

    <home-equipe></home-equipe>


    <block-contact>
      <div class="container">
        <h2>Parlez nous de votre futur projet</h2>
        <p>Nous vous répondons dans les 48h.</p>
        <cta-button class="btn" white="true" icon="true" href="#">
          <span>contactez-nous</span>
          <div>
            <svg viewBox="0 0 24 24">
              <polygon points="11.46 16.89 15.64 9.62 8.7 14.64 1.01 11.08 21.85 1.41 15.95 23.62 11.46 16.89"/>
            </svg>
          </div>
        </cta-button>
      </div>
    </block-contact>


  </div>
</template>

<script>


  import HomeSection from '../blocks/HomeSection.vue'
  import HomeProject from '../blocks/HomeProject.vue'
  import HomeEquipe from '../blocks/HomeEquipe.vue'
  import Quote from '../blocks/Quote.vue'
  import Capacity from '../blocks/Capacity.vue'
  import VideoTestimonial from '../blocks/VideoTestimonial.vue'
  import BlockCta from '../blocks/BlockCta.vue'
  import LinkButton from '../elements/linkButton.vue'
  import Subtitle from '../elements/Subtitle.vue'
  import BlockContact from '../blocks/BlockContact.vue'
  import CtaButton from '../elements/CtaButton.vue'


  export default {
    name: 'Home',
    components: {
      HomeSection,
      HomeProject,
      Quote,
      Capacity,
      VideoTestimonial,
      BlockCta,
      LinkButton,
      Subtitle,
      BlockContact,
      CtaButton,
      HomeEquipe
    }

  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables.scss';

  @include screen-xl {

    .row{}
  }

</style>
