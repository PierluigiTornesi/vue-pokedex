<script>

export default {
  data() {
    return {
    }
  },
  props:{
    pokemonTypes: Array,
  },
  methods:{
    getTypeImg(nameType){
        return new URL(`../../assets/img/${nameType}.webp`, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-evenly">
    <img  v-for="typePokemon in pokemonTypes" :src="getTypeImg(typePokemon.type.name)" alt="">
  </div>
</template>

<style lang="scss">
    img{
        margin: 1px;
    }
</style>