<template>
  <footer>
    <div class="container">
      <nav>
        <a href="#">Accueil</a>
        <a href="#">Projets</a>
        <a href="#">Equipe</a>
        <a href="#">Contact</a>
      </nav>
      <div class="mentions">
        <div>
          <a href="#">Mentions légales</a>
        </div>
        <div>
          <a href="#">Charte d'utilisation des Cookies</a>
        </div>
      </div>
    </div>
    <div class="credits">
      <div>
        <svg width="36px" height="30px" viewBox="0 0 36 30">
          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="S/header/black" transform="translate(-18.000000, -16.000000)" fill="#1E1E1E" fill-rule="nonzero">
              <g id="header">
                <g id="uniTitle" transform="translate(18.000000, 16.000000)">
                  <g id="UNI-logo">
                    <circle id="Oval" cx="32.5" cy="3.5" r="3.5"></circle>
                    <path
                      d="M29.8581081,9 L29.8581081,18.6686217 L19.8851351,9 L14.9594595,9 L14.9594595,19.1612903 C14.9594595,21.686217 13.0135135,23.7800587 10.5810811,23.7800587 C8.14864865,23.7800587 6.2027027,21.686217 6.2027027,19.1612903 L6.2027027,9 L0,9 L0,18.914956 C0,25.0117302 4.74324324,30 10.5202703,30 C16.6621622,30 20.9189189,24.6422287 21.0405405,19.5923754 L31.0743243,28.9530792 L36,28.9530792 L36,9 L29.8581081,9 Z"
                      id="Shape"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="uni">
        <p>© 2018 - <a href="#">studio UNI</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "MainFooter"
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  footer {
    background: $white;
    padding: 24px 16px 32px 16px;
    nav {
      display: flex;
      justify-content: center;
      a {
        margin: 0 6px;
      }
    }
    .mentions{
      margin-top: 24px;
      div{
        margin: 0 auto;
        text-align: center;
        &:first-child{
          margin-bottom: 12px;
        }
      }
    }
    .credits{
      margin-top: 72px;

      div{
        margin: 0 auto;
        text-align: center;
        &:first-child{
          margin-bottom: 12px;
          svg{
            circle, path{
              fill: $grey;
            }
          }
        }
      }
    }
  }
  .uni{
    p{
      color: #383838;
      font-size: 12px;
    }
    a{
      color: #383838;
      font-size: 12px;
    }
  }

  @include screen-xl {
    .container{
      display: flex;
      justify-content: space-between;
      margin-top: 16px;

      nav {
        a{
          margin: 0 16px;
        }
      }

      .mentions {
        margin-top: 0;
        display: flex;

        div{
          margin: 0 16px;
        }
      }
    }
  }

</style>
