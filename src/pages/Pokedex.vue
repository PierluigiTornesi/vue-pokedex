<script>
import AppHeader from '../components/AppHeader.vue';
import Card from '../components/Card.vue'
import { store } from '../store';

export default {
  data() {
    return {
      store
    }
  },
  components: {Card,AppHeader}
}
</script>

<template>
  <AppHeader />
  <div class="container mt-3">
    <div class="d-flex flex-wrap justify-content-center" >
      <div class="d-flex flex-wrap justify-content-center" v-for="pokemon in store.pokemonArray">
        <Card :pokemon="pokemon"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>