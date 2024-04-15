<script>
export default{
  data(){
    return{
        links: [
            {
                name: 'pokedex',
                title: 'Pokedex'
            },
            {
                name: 'favourites',
                title: 'Favourites'
            },
            {
                name: 'about',
                title: 'About'
            }
        ]
    }
  },
}
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="home-text ">
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home {
    background-image: url('../assets/img/pokedex.jpg');
    height: calc(100vh - 50px);
  }
</style>
