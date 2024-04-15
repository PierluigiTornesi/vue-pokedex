<script>
import axios from "axios";
import TypePokemon from "./partials/TypePokemon.vue";
import InfoBtn from "./partials/InfoBtn.vue";

export default {
  data() {
    return {
      myPokemon: "",
      imgNum: "",
      myPokemonTypes: [],
      myBgColor: "",
    };
  },
  props: {
    pokemon: Object,
  },
  mounted() {
    axios.get(this.pokemon.url).then((resp) => {
      this.myPokemon = resp.data;
      //console.log(this.myPokemon);
      this.myPokemonTypes = this.myPokemon.types;
      //console.log(this.myPokemonTypes);
      (this.myBgColor = this.myPokemonTypes[0].type.name),
        //console.log(this.myBgColor);
        (this.imgNum = this.myPokemon.id.toString().padStart(3, "0"));
    });
  },
  methods: {},
  components: { TypePokemon, InfoBtn},
};
</script>

<template>
  <div class="pokemon" :class="myBgColor">
    <div class="image-container">
      <img
        :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgNum}.png`"
        alt=""
      />
    </div>
    <div class="poke-info">
      <span class="poke-id">#{{ imgNum }}</span>
      <h3 class="poke-name">{{ myPokemon.name }}</h3>
      <div class="d-flex justify-content-evenly info">
        <span class="poke-height">
          <i class="fa-solid fa-ruler-vertical"></i>
          {{ myPokemon.height / 10 }} m
        </span>
        <span class="poke-weight">
          <i class="fa-solid fa-weight-hanging"></i>
          {{ myPokemon.weight / 10 }} Kg
        </span>
      </div>
      <div class="poke-type">
        <TypePokemon :pokemonTypes="myPokemonTypes" />
      </div>
      <InfoBtn :pokemon="pokemon"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.pokemon {
  margin: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  color: #fefefe;
  border-radius: 10px;

  &:hover {
    .image-container img {
      opacity: 1;
      transform: scale(1.15);
    }
  }
}

.image-container {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  img {
    width: 170px;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
}

.poke-name {
  letter-spacing: 2px;
  margin: 15px 0 10px;
  text-transform: capitalize;
}

.poke-info {
  margin-top: 10px;
}

.poke-id {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3rem;
  padding: 5px 10px;
  font-size: 1rem;
}
.poke-name {
  letter-spacing: 2px;
  margin: 15px 0 10px;
  text-transform: capitalize;
}
.info span {
  padding: 10px 10px;
}

//class for the background color for every type of pokemon
//class for the grass type
.grass {
  background-color: $grass;
}
//class for the fire type
.fire {
  background-color: $fire;
}
//class for the water type
.water {
  background-color: $water;
}
//class for the bug type
.bug {
  background-color: $bug;
}
//class for the normal type
.normal {
  background-color: $normal;
}
//class for the flying type
.flying {
  background-color: $flying;
}
//class for the poison type
.poison {
  background-color: $poison;
}
//class for the electric type
.electric {
  background-color: $electric;
}
//class for the ground type
.ground {
  background-color: $ground;
}
//class for the fairy type
.fairy {
  background-color: $fairy;
}
//class for the psychic type
.psychic {
  background-color: $psychic;
}
//class for the fighting type
.fighting {
  background-color: $fighting;
}
//class for the rock type
.rock {
  background-color: $rock;
}
//class for the dragon type
.dragon {
  background-color: $dragon;
}

.ice {
  background-color: $ice;
}

.steel {
  background-color: $steel;
}

.ghost {
  background-color: $ghost;
}

.dark {
  background-color: $dark;
}
</style>
