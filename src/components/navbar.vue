<template>

<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link class="navbar-brand" to="/">Main</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/loft">Мебель в стиле лофт<span class="sr-only">Home</span></router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" to="/plywood">Мебель из фанеры</router-link> -->
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
    </ul>
  </div>
</nav>

<!-- <div class="container">
  <div class="row">
    <div class="col-sm">
      Одна из трёх колонок
    </div>
    <div class="col-sm">
      Одна из трёх колонок
    </div>
    <div class="col-sm">
      Одна из трёх колонок
    </div>
  </div> -->
</div>

</div>

</template>

<style scoped lang="sass">
.navbar 
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 99
</style>
