<script>
import axios from 'axios';
import TypePokemon from '../components/partials/TypePokemon.vue';
import Card from '../components/Card.vue';
import { store } from '../store';

export default {
  data() {
    return {
      pokemon: {},
      imgNum: '',
      pokemonDetails: [],
      pokemonEvolution: [],
      loading: false,
      store,
      pokemonSpecies: '',
      pokemonSecond: '',
      pokemonThird: '',
      imgNum2: '',
      imgNum3: '',
    }
  },
  components: { TypePokemon, Card },
  methods: {
    firstUppercase(string) {
      return string[0].toUpperCase() + string.slice(1)
    },
  },
  mounted() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.slug}`).then((resp) => {
      this.pokemon = resp.data
      console.log(this.pokemon);
      this.imgNum = this.pokemon.id.toString().padStart(3, "0");
    }).finally(() => {
      this.loading = true
    }),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.$route.params.slug}`).then((resp) => {
        this.pokemonDetails = resp.data
        console.log(this.pokemonDetails);
        axios.get(this.pokemonDetails.evolution_chain.url).then((resp) => {

          //verifico se abbia una catena evolutiva
          if (resp.data.chain.evolves_to.length !== 0) {
            this.pokemonEvolution = resp.data.chain.evolves_to

            //verifico se abbia una prima evoluzione
            if (this.pokemonEvolution[0].species.name.length !== 0) {
              this.pokemonSecond = this.pokemonEvolution[0].species.name
              this.imgNum2 = (this.pokemon.id + 1).toString().padStart(3, "0");
            }

            //verifico se abbia una seconda evoluzione
            if (this.pokemonEvolution[0].evolves_to.length !== 0) {
              this.pokemonThird = this.pokemonEvolution[0].evolves_to[0].species.name
              this.imgNum3 = (this.pokemon.id + 2).toString().padStart(3, "0");
            }
          }

          //mi salvo lo starter della sua specie
          this.pokemonSpecies = resp.data.chain.species.name
          console.log(this.pokemonEvolution, 'tutte le evoluzioni');
          console.log(this.pokemonSpecies, 'il pokemon starter della specie');
          console.log(this.pokemonSecond, 'il pokemon dopo lo starter');
          console.log(this.pokemonThird, 'il pokemon dopo il secondo');

        })
      }).finally(() => {
        this.loading = true
      })
  }
}
</script>

<template>
  <div class="container">
    <div v-if="loading">
      <h1>{{ firstUppercase(this.$route.params.slug) }}</h1>
      <div class="row">
        <div class="col-6">
          <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgNum}.png`" alt="">
          <div>
            <TypePokemon :pokemonTypes="pokemon.types" />
          </div>
        </div>
        <div class="col-6">
          <p>{{ pokemonDetails.flavor_text_entries[70].flavor_text }}</p>
          <div class="base-info">
            <p>{{ pokemon.height / 10 }} m</p>
            <p>{{ pokemon.weight / 10 }} kg</p>
            <p>{{ pokemonDetails.genera[6].genus }}</p>
            <p v-for="ability in pokemon.abilities">{{ ability.ability.name }}</p>
          </div>
          <div class="stats">
            <p v-for="stat in pokemon.stats">{{ stat.stat.name }} {{ stat.base_stat }} </p>
          </div>
        </div>
        <div class="col-12" v-if="pokemonEvolution.length === 0">
          <h2>Il pokemon non ha evoluzioni</h2>
        </div>
        <div class="col-12 d-flex" v-else>
          <div class="col-3">
            <img class="w-50" :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgNum}.png`" alt="" />
            <p>{{ pokemonSpecies ? pokemonSpecies : '' }}</p>
          </div>
          <div class="col-3">
            <img class="w-50" :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgNum2}.png`" alt="" />
            <p>{{ pokemonSecond ? pokemonSecond : '' }}</p>
          </div>
          <div class="col-3">
            <img class="w-50" :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgNum3}.png`" alt="" />
            <p>{{ pokemonThird ? pokemonThird : '' }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else="loading">
      Loading...
    </div>
  </div>
</template>

<style lang="scss"></style>