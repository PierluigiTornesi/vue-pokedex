<script>
import RegionButton from "./partials/RegionButton.vue";
import SearchBar from "./partials/SearchBar.vue";

export default {
  data() {
    return {
    };
  },
  components: { RegionButton, SearchBar },
  methods:{
  }
};
</script>

<template>
    <div>
      <div>
      <img
        class="logo"
        src="../assets/img/Pokédex_Rotom.png"
        alt="simbolo pokemon pokedex"
      />
      <h3>Gotta Catch 'Em All</h3>
    </div>
      <h1>Pokedex guide</h1>
      <p class="fs-5">
        Click a pokemon region to see every pokemon from it and search the name
        of the pokemon you want!
      </p>
      <SearchBar />
    </div>
  <RegionButton class="mt-2" />
</template>

<style lang="scss" scoped>
h1 {
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-shadow: 4px 3px 6px rgba(0, 0, 0, 1);
}

h3{
  letter-spacing: 3px;
  text-transform: uppercase;
}

.logo {
  height: 200px;
  width: 300px;
}

.containerRegionMap{
  img{
    aspect-ratio: 1;
    height: 250px;
    width: 400px;
  }
}

</style>
