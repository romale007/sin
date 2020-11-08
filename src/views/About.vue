<template>
  <div class="home">
    <div class="about-bckg"></div>
    <!-- <h1 class="js-splitme">Sanya</h1> -->
  </div>
</template>

<style lang="sass" scoped>
.about-bckg
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-image: url("/img/QPzuZ3n6dEU.jpg")
  background-repeat: no-repeat
  background-size: cover
  z-index: 0
  opacity: 0.7
</style>

<script>
import Navbar from '@/components/navbar.vue'; 
import Splitter from 'split-html-to-chars';
// iterating each replaced element
import { TimelineMax, TweenMax} from 'gsap';
import { gsap, CSSPlugin } from 'gsap/all'
gsap.registerPlugin(CSSPlugin)

export default {

  components: {
    Navbar
  },
    mounted () {
    let els = document.querySelectorAll(".js-splitme");
    [].forEach.call(els, function(el) {
    // outerHTML, thats *important*, no direct text nodes should be in parsed HTML
    el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
    });

    let tl = new TimelineMax();
    tl.fromTo('.about-bckg', 0.8, {scale: 1},{scale: 1.2})
    //tl.staggerFromTo(".letter", .04, {opacity:0}, {opacity:1}, 0.04);
    // tl.fromTo('.navbar', 0.1, {y: -100},{y: 0})

  }
}

</script>
