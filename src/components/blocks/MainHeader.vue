<template>
  <header>
    <div class="header">
      <logo-uni href="">Studio Web</logo-uni>
      <div class="menu">
        <div class="menu__links">
          <router-link :to="{name:'Equipe'}">Equipe</router-link>
          <router-link :to="{name:'Projets'}">Projets</router-link>
          <router-link :to="{name:'Contact'}">Contact</router-link>
        </div>
        <div class="burgerMenu" @click="switchMainNav()">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import LogoUni from '../elements/LogoUni.vue'

  export default {
    name: "MainHeader",
    components: {LogoUni},
    methods: {
      switchMainNav() {
        let header = document.querySelector(".header");
        let mainNav = document.querySelector(".mainNav");
        let bg = document.querySelector('.bgGrey');
        if (mainNav.classList.contains('open')) {
          window.setTimeout(function () {
            document.querySelector(".mainNav").style.visibility = "hidden";
          }, 600)
          window.setTimeout(function () {
            document.querySelector(".bgGrey").style.visibility = "hidden";
          }, 600)
        }
        else {
          mainNav.style.visibility = "visible";
          bg.style.visibility = "visible";
        }

        mainNav.classList.toggle("open");
        bg.classList.toggle("open");

        header.classList.toggle("header--navOpen");

      }
    }

  }
</script>

<style lang="scss">
  @import '../../assets/components/variables';

  .header{
    padding:$s-s*1.5;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    width: 100%;
    align-items:center;
    justify-content:space-between;
    z-index:5;
    background: rgba(248, 248, 248, 0.95);

    &--navOpen{
      background:transparent;
      >.logoUni{
        opacity:1 !important;
        h2{
          transform:translateX(0px) !important;
          opacity:1 !important;
        }
      }
      .menu{
        .burgerMenu{
          opacity:1;
          >div{
            background: $black;
            mix-blend-mode: difference;
          }
          >div:nth-child(1){
            transform:rotate(45deg) translate3d(0px, 4px,0px);
          }
          >div:nth-child(2){
            width:80%;
            transform:rotate(-45deg) translate3d(1px, -4px,0px);
          }
          >span{
            display:block;
          }
        }
      }
    }
  }

  .burgerMenu{
    height: $s-xl;
    width: $s-xl;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    justify-content:center;
    >div{
      mix-blend-mode: difference;
      height:3px;
      background: $black;
      transition:$quick-transition;
    }
    >div:nth-child(1){
      margin-bottom: $s-xs;
      width: 80%;
    }
    >div:nth-child(2){
      width: 50%;
    }
    >span{
      color:$white;
      display:none;
      user-select: none;
    }
    &:hover{
      >div{
        background: $main-color;
      }
    }

    // Lorsqu'on survole le burger, fait bouger les partie de celui-ci
    // À devv
  }

  .menu{
    display: flex;
    align-items:center;
    &__links{
      display:none;
    }
  }

  @include screen-xl {
    .header{
      padding:$s-xl $s-xxl $s-m $s-xxl;
    }
  }

  @include screen-s {
    .header{
      padding:$s-l $s-l $s-s $s-l;
    }
  }

  @include screen-m {
    .header{
      padding:$s-xl $s-l $s-m $s-l;
      background: transparent;

      &--navOpen{
        .menu{
          .burgerMenu{
            >div:nth-child(1){
              transform:rotate(45deg) translate3d(0px, 6px,0px);
            }
            >div:nth-child(2){
              transform:rotate(-45deg) translate3d(1px, -7px,0px);
            }
          }
          a{
            opacity:0;
            visibility:hidden;
            user-select: none;
          }
          a:nth-child(1){
            transform:translateX(20px);
          }
          a:nth-child(2){
            transform:translateX(20px);
          }
          a:nth-child(3){
            transform:translateX(20px);
          }
        }
      }

      &--hidden{
        >.logoUni{
          opacity:.8;
          ellipse{
            fill:$black;
          }
          &:hover{
            opacity:1;
            ellipse{
              fill:$main-color;
            }
          }
          h2{
            transform:translateX(-20px);
            opacity:0;
          }
        }
        .menu{
          .burgerMenu{
            opacity:.8;
            &:hover{
              opacity:1;
            }
          }
          a{
            opacity:0;
            visibility:hidden;
            user-select: none;
          }
          a:nth-child(1){
            transform:translateX(20px);
          }
          a:nth-child(2){
            transform:translateX(20px);
          }
          a:nth-child(3){
            transform:translateX(20px);
          }
        }
      }

    }
    .burgerMenu{
      height: $s-xxl;
      width: $s-xxl;
      >div{
        height: 4px;
      }
      >div:nth-child(1){
        margin-bottom: $s-xs*1.5;
      }
    }
  }


  @include screen-l {
    .menu{
      &__links{
        display:inherit;
        a{
          margin: 0 12px;
        }
      }

    }
    .burgerMenu{
      cursor: pointer;
      margin-left: 72px;
    }
  }

</style>
