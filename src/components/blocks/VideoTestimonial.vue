<template>
  <section>
    <div class="video-container">
      <div class="gradient"></div>
      <div class="player">
        <div class="arrow"></div>
      </div>
      <div class="temoin">
        <span>Mathieu Offhart</span>
        <span>Fondateur d'Opla</span>
      </div>
      <div class="video">
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "VideoTestimonial"
  }
</script>

<style scoped lang="scss">
  @import '../../assets/components/variables';

  section {
    height: 223px;
    position: relative;
    background: $black;
    .video-container{
      height: 100%;

      .video {
        height: 100%;
        background: url('../../assets/images/home/crew.png');
      }
      .gradient {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(86, 86, 86, 0) 0%, #1E1E1E 100%);
      }
      .player {
        margin: 0 auto;
        position: absolute;
        height: 50px;
        width: 50px;
        left: calc(50% - 25px);
        top: calc(50% - 25px);
        background-color: #FF6720;
        box-shadow: 0 2px 10px 0 rgba(54, 54, 54, 0.5);
        border-radius: 50%;
        .arrow {
          display: block;
          margin: 17px auto 0 auto;
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 8px solid $white;
        }

      }
      .temoin {
        position: absolute;
        left: 16px;
        bottom: 16px;
        span {
          text-transform: uppercase;
          font-size: 12px;
          line-height: 14px;
          display: block;
          &:first-child {
            color: $white;
            line-height: 14px;
          }
          &:last-child {
            color: $main-color;
            line-height: 14px;
          }
        }
      }
    }

  }

  @include screen-xl {
    section {
      height: 450px;
      .video-container{
        margin: 0 216px;

        .temoin{
          left: calc(16px + 216px);
        }
      }
    }

  }
</style>
