<script>
import axios from 'axios'
import { store } from '../../store';
export default {
  data() {
    return {
      store,
      pokemonRegion: [
        {
          id: '1',
          name: "Kanto",
          className: 'first-gen',
          startAPINum: '0',
          stopAPINum: '151' ,
          namePathImg: "Kanto.png"
        },
        {
          id: '2',
          name: "Johto",
          className: 'second-gen',
          startAPINum: '151',
          stopAPINum: '100' ,
          namePathImg: "Johto.webp"

        },
        {
          id: '3',
          name: "Hoenn",
          className: 'third-gen',
          startAPINum: '251',
          stopAPINum: '135' ,
          namePathImg: "Hoenn.webp"
        },
        {
          id: '4',
          name: "Sinnoh",
          className: 'fourth-gen',
          startAPINum: '386',
          stopAPINum: '107' ,
          namePathImg: "Sinnoh.png"
        },
        {
          id: '5',
          name: "Unima",
          className: 'fifth-gen',
          startAPINum: '493',
          stopAPINum: '156' ,
          namePathImg: "Unima.png"
        },
        {
          id: '6',
          name: "Kalos",
          className: 'sixth-gen',
          startAPINum: '649',
          stopAPINum: '72' ,
          namePathImg: "Kalos.webp"
        },
        {
          id: '7',
          name: "Alola",
          className: 'seventh-gen',
          startAPINum: '721',
          stopAPINum: '88' ,
          namePathImg: "Alola.png"
        },
        {
          id: '8',
          name: "Galar",
          className: 'eighth-gen',
          startAPINum: '809',
          stopAPINum: '96' ,
          namePathImg: "Galar.webp"
        },
        {
          id: '9',
          name: "Paldea",
          className: 'ninth-gen',
          startAPINum: '905',
          stopAPINum: '120' ,
          namePathImg: "Paldea.png"
        },
      ],
    };
  },
  methods: {
    apiPokemon(start, end) {
      this.store.pokemonArray = []
      axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${end}&offset=${start}`).then((resp) => {
        this.store.pokemonArray = resp.data.results
        console.log(this.store.pokemonArray);
      })
    },
    changeBg(gen) {
      const our_body = document.querySelector("body");
      our_body.classList.remove('bg-body','first-gen','second-gen','third-gen','fourth-gen','fifth-gen','sixth-gen','seventh-gen','eighth-gen','ninth-gen');
      our_body.classList.add(gen);
    }
  }
};
</script>

<template>
  <div class="bottoni-gen-div">
        <button type="button" @click="changeBg(region.className), apiPokemon(region.startAPINum, region.stopAPINum)" class="button-gen" v-for="region in pokemonRegion" :class="region.className"  :id="region.id ">
          {{ region.name }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
  /* class for the button container */
.bottoni-gen-div{
  padding-top: 1rem;
  padding-right: 1rem;
}
/* class for each button of the various gen */
.button-gen{
  padding: 10px 20px;
  border-radius: 10px;
  margin: 0 3px;
}

</style>
