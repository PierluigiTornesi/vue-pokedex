<script>
export default {
    data() {
        return {

        }
    },
    props: {
        pokemon: Object,
    },
}
</script>

<template>
    <div>
        <router-link :to="{ name: 'info', params: { slug: pokemon.name } }">Info</router-link>
    </div>
</template>

<style lang="scss" scoped>

</style>