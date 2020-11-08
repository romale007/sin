<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'; 


export default {

  components: {
    Navbar
  }
}

</script>

<style lang="sass">
  @import "~bootstrap/scss/bootstrap"

  a:hover 
    text-decoration: none !important
    color: #fff !important
  

</style>