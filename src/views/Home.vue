<template>
  <div class="home">
    <div class="bckg"></div>
    <h1 class="js-splitme">Welcome to SinitsynLoft</h1>
    <router-link to="/order" class="main-btn">Оставить заявку</router-link>
  </div>
</template>

<script lang="ts">
import Splitter from 'split-html-to-chars';
// iterating each replaced element
import { TimelineMax, TweenMax} from 'gsap';
import { gsap, CSSPlugin } from 'gsap/all'
gsap.registerPlugin(CSSPlugin)


export default {
  mounted () {
    let els = document.querySelectorAll(".js-splitme");
    [].forEach.call(els, function(el) {
    // outerHTML, thats *important*, no direct text nodes should be in parsed HTML
    el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
    });

    let tl = new TimelineMax();
    
    tl.fromTo('.bckg', 0.8, {scale: 1},{scale: 1.2})
    tl.staggerFromTo(".letter", .05, {opacity:0}, {opacity:1}, 0.05);
    tl.fromTo('.main-btn', 0.1, {y: 1000},{y: 0})
    tl.fromTo('.navbar', 0.1, {y: -100},{y: 0})

  }
}
</script>
<style lang="sass">
    
  .home 
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column 
    height: 100vh
    min-height: 667px
    position: relative
    background: rgba(0, 0, 0, 0.782)
    opacity: 1
    overflow: hidden


    .bckg
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-image: url("/img/transformer_table1.jpg")
      background-repeat: no-repeat
      background-size: cover
      z-index: 0
      opacity: 0.7
      //filter: saturate(90%)
      
  h1
    color: #fff
    padding-left: 20px
    font-size: 70px 
   
  .main-btn
    background: #b55941
    color: #ffffff
    padding: 30px
    border-radius: 60px
    font-size: 40px
    margin: 100px 0 0 0
    z-index: 1
    opacity: 0.7
    transition: 0.5s 


  .main-btn:hover
    opacity: 1

</style>
