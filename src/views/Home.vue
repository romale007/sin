<template>
  <div class="home">
    <div class="bckg"></div>
    <h1>Welcome to SinitsynLoft</h1>
  </div>
</template>

<script lang="ts">


export default {

}
</script>
<style lang="sass">
    
  .home 
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
    min-height: 667px
    position: relative
    background: rgba(0, 0, 0, 0.782)
    opacity: 1


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
   
</style>
