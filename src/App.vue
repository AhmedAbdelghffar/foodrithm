<template>
  <v-app>
    <appHeader></appHeader>
    <main>
      <v-container>
       <transition name="page" mode="out-in">
       <router-view> </router-view>
       </transition>
      </v-container> 
    </main>
  </v-app>
</template>

<script>
import appHeader from './components/header'

export default {
  name: 'App',
  components: {
    appHeader
  },
  data () {
    return {
     
    }
  },
  created(){
    this.$store.dispatch('initFoods');
  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}

body{
  background: #F5F5F5;
}

</style>
