<script>
export default {
    data() {
        return {
            links: [
                {
                    name: 'home',
                    title: 'Home'
                },
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
    <header>
        <nav>
            <ul class="d-flex justify-content-around align-items-center">
                <li v-for="link in links" :key="link.title">
                    <h2>
                        <router-link :to="{ name: link.name }" class="nav-link">{{ link.title }}</router-link>
                    </h2>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    header {
        height: 50px;
        background-color: transparent;
    }
    ul {
        list-style-type: none;
    }
</style>