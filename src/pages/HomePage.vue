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
  <div class="container">
    <ul>
      <li v-for="link in links" :key="link.title">
          <h2>
            <router-link :to="{name: link.name}" class="nav-link">{{ link.title }}</router-link>
          </h2>
      </li>
    </ul>
  </div>
  
</template>

<style scoped lang="scss">

ul{
  list-style-type: none;
}
</style>
