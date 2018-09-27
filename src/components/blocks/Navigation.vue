<template>
  <div>
    <div class="bgGrey"></div>
    <div class="mainNav">
      <div class="mainNav__decoration">
        <div>
          <svg viewBox="0 0 64 125">
            <path d="M0,87.82c14.53,0,26.36-12.31,26.36-27.44V0H63.49V58.91C63.49,95.35,35,125,0,125Z"/>
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 64 125">
            <rect x="12.71" y="0.61" width="38.58" height="123.78"/>
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 114.97 107.76">
            <polygon
              points="81.24 1.23 81.24 52.9 27.31 1.23 0.66 1.23 0.89 107.76 33.98 107.76 33.72 57.91 87.62 107.76 114.31 107.76 114.31 1.23 81.24 1.23"/>
          </svg>
        </div>
      </div>
      <div class="mainNav__bg">
        <div></div>
        <div></div>
      </div>
      <div class="mainNav__lastProject">
        <div>
          <h3 class="titleNav">Dernier Projet</h3>
          <div>
            <h2>CFTC Postes et Télécoms, nouveau départ pour les adhérents</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat assumenda rem fugit id eum iure, esse
              unde
              molestiae a quis sed qui dolores soluta tempora impedit nulla nam optio. Natus.</p>
            <a href="" class="links">Découvrir le projet</a>
          </div>
        </div>
      </div>
      <div class="mainNav__navigation">
        <div>
          <h3 class="titleNav">Navigation</h3>
          <nav>
            <ul>
              <li><a href="/index.php" class="active">Accueil</a></li>
              <li>
                <a href="/services.php">Services</a>
                <ul>
                  <li><a href="/services/site-vitrine.php">Sites vitrine</a></li>
                  <li><a href="services/site-e-commerce">Sites e-commerce</a></li>
                  <li><a href="services/site-sur-mesures">Sites sur mesures</a></li>
                </ul>
              </li>
              <li><a href="#">Projets</a></li>
              <li><a href="#">L'équipe</a></li>
              <li><a href="/contact.html">Contact</a></li>
            </ul>
          </nav>
          <div class="navSocialNetworks">
            <a href="/facebook">facebook</a>
            <a href="/facebook">linked'in</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  .mainNav {
    clip-path: circle(0% at calc(100% - 28px) 28px);
    transition: clip-path .6s ease-in-out, opacity .2s ease-in .3s;
    opacity: 0;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    visibility: hidden;
    display: flex;

    .titleNav {
      color: $grey;
      opacity: 0.3;
      margin-bottom: $s-xxl;
    }
    &__decoration {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      height: 100%;
      width: 100%;
      > div:nth-child(1) {
        display: none;
      }
      > div:nth-child(2) {
        display: none;
      }
      > div:nth-child(3) {
        right: 0;
        position: absolute;
        svg {
          polygon {
            fill: $lightgrey;
          }
          height: 8vh;
        }
        bottom: 20vh;
      }
    }
    &__bg {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      width: 100%;
      > div {
        height: 100%;
      }
      > div:first-child {
        width: 0;
        display: none;
      }
      > div:last-child {
        width: 100%;
        background: $white;
        padding-left: $s-m;
        padding-top: 15vh;
      }
    }
    &__lastProject {
      display: none;
    }
    &__navigation {
      position: relative;
      z-index: 3;
      height: 100%;
      width: 100%;
      padding-left: $s-m;
      padding-top: 15vh;
      .navSocialNetworks {
        bottom: $s-m;
        right: $s-m;
        position: absolute;
      }
      nav > ul {
        padding-left: 0;
        > li {
          margin: $s-s*1.5 0;
          > a {
            &.active {
              color: $main-color;
              position: relative;
              margin-left: 40px;
              &:before {
                content: "";
                margin-left: -40px;
                position: absolute;
                background: $main-color;
                height: 3px;
                top: 50%;
                width: 32px;
              }
            }
          }
          > ul {
            margin-top: $s-s;

          }
        }
      }
    }
  }

  // mainNav ouverte
  .mainNav {
    &.open {
      clip-path: circle(150% at calc(100% - 28px) 28px);
      opacity: 1;
      transition: clip-path ease-in-out .6s, opacity .1s ease-in;
    }
  }

  .bgGrey {
    visibility: hidden;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: $black;
    opacity: 0;
    transition: opacity .3s ease-in-out .4s;
    z-index: 3;
    &.open {
      clip-path: circle(150% at calc(100% - 72px) 54px);
      transition: opacity .3s ease-in-out;
      opacity: .7;
    }
  }

  @include screen-m {
    .mainNav {
      clip-path: circle(0% at calc(100% - 72px) 54px);
      transition: clip-path .6s ease-in-out, opacity .2s ease-in .6s;
      &__decoration {
        > div:nth-child(1) {
          display: block;
          svg {
            height: 35vh;
            path {
              fill: $white;
              opacity: .6;
            }
          }
        }
        > div:nth-child(2) {
          display: block;
          position: absolute;
          bottom: -5vh;
          left: 20vw;
          svg {
            height: 20vh;
            rect {
              fill: $white;
              opacity: .6;
            }
          }
        }
      }
      &__bg {
        display: flex;
        > div:first-child {
          display: block;
          padding-top: 25vh;
          height: 100%;
          width: calc(100% / 2);
          padding: 25vh $s-xxl 0 $s-xxl;
          background: $lightgrey;
        }
        > div:last-child {
          width: calc(100% / 2);
          padding-left: $s-xxl;
        }
      }
      &__navigation {
        padding-left: $s-l;
        padding-top: 25vh;
      }
      &__lastProject {
        position: relative;
        z-index: 3;
        padding-top: 25vh;
        height: 100%;
        width: calc(100% / 2);
        padding: 25vh $s-xxl 0 $s-xxl;
        display: flex;
        justify-content: center;
        > div {
          max-width: 600px;
        }
      }
      &__navigation {
        width: calc(100% / 2);
        padding-left: $s-xxl;
        > div {
          margin-left: 10%;
        }
      }
    }

    // mainNav ouverte
    .mainNav {
      &.open {
        clip-path: circle(200% at calc(100% - 72px) 54px);

        opacity: 1;
        transition: clip-path ease-in-out .6s, opacity .1s ease-in;
      }
    }

  }

  @include screen-l {
    .mainNav {
      &__bg {
        > div:first-child {
          width: calc(100% / 3 * 2);
        }
        > div:last-child {
          width: calc(100% / 3);
        }
      }
      &__lastProject {
        width: calc(100% / 3 * 2);
      }
      &__navigation {
        width: calc(100% / 3);
      }
    }
  }

  @include screen-s {
    .mainNav__navigation {
      padding-left: 48px;
    }
  }

</style>
