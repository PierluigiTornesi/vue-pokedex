<script>
import AppMainHeader from './components/AppMainHeader.vue';

export default {
  data() {
    return {
      
    }
  },
  components: {AppMainHeader}
}
</script>

<template>
  <AppMainHeader></AppMainHeader>
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@import "@fortawesome/fontawesome-free/css/all.css";

</style>
