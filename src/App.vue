<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import { TimelineMax, TweenMax} from 'gsap';
import Navbar from '@/components/navbar.vue'; 
import { gsap, CSSPlugin } from 'gsap/all'
gsap.registerPlugin(CSSPlugin)

export default {
  mounted(){

  let App = document.querySelector('.bckg');
  let tl = new TimelineMax();
    
  tl.fromTo(App, 1, {x:-1000},{x:0})
  },
  components: {
    Navbar
  }
}

</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
</style>