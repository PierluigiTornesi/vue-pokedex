<script>
import {store} from '../../store'

export default {
  data() {
    return {
      store,
      pokemonSearch: '',
    }
  },
  methods:{
    searchPokemon(){
      let search = this.pokemonSearch.toLocaleLowerCase();
      const pokemonNames = document.querySelectorAll(".poke-name")
      pokemonNames.forEach((pokemon) => {
        pokemon.parentElement.parentElement.style.display = 'block'

        if (!pokemon.innerHTML.toLowerCase().includes(search)) {
          pokemon.parentElement.parentElement.style.display = 'none'
        }
      })
    },
    deleteSearch(){
      this.pokemonSearch = '';
      this.searchPokemon();
    }
  },
}
</script>

<template>
  <div class="search active container d-flex justify-content-evenly">
    <div class="position-relative">
      <input type="search" id="search" class="searchInput" v-model="pokemonSearch" @keyup="searchPokemon()">
      <span class="myX"  @click="deleteSearch()"> <i class="fa-solid fa-xmark"></i></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchInput {
  font-family: inherit;
  border: none;
  font-size: 16px;
  padding: 1rem;
  height: 10px;
  border-radius: 10px;
  transition: width 0.3s ease;
  outline: none;
  width: 200px;
  background-color: #fff;
}


.myX{
  position: absolute;
  z-index: 999;
  top: 10%;
  left: 90%;
  cursor: pointer;
}
</style>
