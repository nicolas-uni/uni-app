<template>
  <form action="" class="form--contact">
    <div class="input input--text">
      <label for="mail">
        Votre adresse mail
      </label>
      <input type="mail" id="mail" required spellcheck="false">
    </div>
    <div class="input input--text">
      <label for="name">
        Votre nom
      </label>
      <input type="text" id="name" required spellcheck="false">
    </div>
    <div class="input input--textarea">
      <label for="projectDescription">Décrivez nous votre projet en quelque mots.</label>
      <textarea name="" id="projectDescription" rows='1'></textarea>
    </div>
    <div class="container--button--form">
      <button type="submit" value="envoyer" class="button button--CTA button--CTA--icon button--CTA--form">
        <span>Envoyer</span>
        <div>
          <svg viewBox="0 0 24 24">
            <polygon points="11.46 16.89 15.64 9.62 8.7 14.64 1.01 11.08 21.85 1.41 15.95 23.62 11.46 16.89"/>
          </svg>
        </div>
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    name: "contactForm"
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables.scss';

  .container--button--form {
    margin-top: $s-xxl;
    margin-bottom: $s-m;
  }

  .block.block--contact {
    margin-top: $s-xxl*2;
  }

  .contact--infos {
    margin-bottom: $s-l;
    > h1 {
      margin-bottom: $s-s;
    }
  }

  form.form--contact {
    max-width: 450px;
  }

  @include screen-m {
    .container--button--form{
      display:flex;
      justify-content:flex-end;
    }
  }
</style>
