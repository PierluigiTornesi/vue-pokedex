<script>
import axios from 'axios';


export default {
  data() {
    return {
      pokemon: '',
      imgNum: '',
    }
  },
  methods: {
    firstUppercase (string){
      return string[0].toUpperCase() + string.slice(1)
    }
  },
  mounted() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.slug}`).then((resp) => {
      this.pokemon = resp.data
      console.log(this.pokemon);
      this.imgNum = this.pokemon.id.toString().padStart(3, "0");
    })
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ firstUppercase(this.$route.params.slug) }}</h1>
    <div class="row">
      <div class="col-6">
        <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgNum}.png`" alt="">
        <div>
          <p>Tipo</p>
          <p>Debolezze</p>
        </div>
      </div>
      <div class="col-6"> 
        <p>descrizione</p>
        <div class="base-info">
          <p>Altezza</p>
          <p>Peso</p>
          <p>Sesso</p>
          <p>Categoria</p>
          <p>Abilità</p>
        </div>
        <div class="stats">
          <p>grafico stats</p>
        </div>
      </div>
      <div class="col-12">
        <p>Evoluzioni</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>