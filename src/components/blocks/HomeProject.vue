<template>
  <section>
    <div class="large-container">
      <div class="row">
        <div class="col-l-4">
          <div class="carousel">
            <img src="../../assets/images/home/cftc-bg.png"/>
            <div class="next-project">
              <svg class="arrow" width="10px" height="17px" viewBox="0 0 10 17">
                <g id="S" fill="none" fill-rule="evenodd">
                  <g id="Mobile" transform="translate(-338.000000, -648.000000)">
                    <g id="homeProject-section" transform="translate(0.000000, 544.000000)">
                      <rect id="container" x="0" y="4" width="375" height="525"></rect>
                      <g id="carousel">
                        <g id="btn/arrow/right/withTiming" transform="translate(325.000000, 96.000000)">
                          <g id="next-project-button">
                            <g id="icon/arrow/right" transform="translate(14.000000, 9.000000)" stroke="#1E1E1E"
                               stroke-width="2">
                              <polyline id="Path-5" points="0 0 7 7.5 0 15"></polyline>
                            </g>
                            <path d="M15,0 C25.4786903,0 32,7.33768189 32,16" id="Path-6"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg class="border-s" height="32" width="32">
                <circle cx="16" cy="16" fill="transparent" r="15" stroke="black" stroke-width="2px"></circle>
              </svg>
              <svg class="border-xl" height="48" width="48">
                <circle cx="24" cy="24" fill="transparent" r="23" stroke="black" stroke-width="2px"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div class="col-l-2">
          <div class="content-project">
            <block-cta>
              <div class="presentation">
                <subtitle>Projets</subtitle>
                <h2>Projet CFTC: Renouer le dialogue avec les adhérents</h2>
                <p>
                  La CFTC voulait dynamiser sa relation avec ses adhérents.<br>
                  En recréant une interface en ligne dédiée, nous avons créer un nouvel espace de partage avec les
                  adhérents.
                </p>
              </div>
              <div class="more">
                <link-button href="#">voir le projet</link-button>
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
    name: "HomeProject",
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

      .next-project {
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: calc(50% - 16px);
        width: 32px;
        height: 32px;
        background: $white;
        border-radius: 50%;

        .arrow {
          display: block;
          margin: 7px auto;
        }
        .border-s, .border-xl {
          position: absolute;
          top: 0;
          left: 0;
          circle {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: stroke 5s linear infinite, next-opacity 5s linear infinite;
          }
        }

        .border-xl {
          display: none;
        }

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

        .next-project {
          width: 48px;
          height: 48px;
          top: calc(50% - 24px);

          .arrow {
            margin: 16px auto;
          }

          .border-xl {
            display: inline;
            height: 48px;
            width: 48px;
            circle {
              stroke-dasharray: 150;
              stroke-dashoffset: 150;
            }
          }

          .border-s {
            display: none;
          }
        }
      }
    }
  }




</style>
