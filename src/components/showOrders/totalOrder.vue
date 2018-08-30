<template>
    <div>
        <br>
        <v-card>
             <h3>Total Order Price: {{ totalOrderPrice }} EGP</h3>
        </v-card>     
    </div>
</template>

<script>
export default {
    computed:{
        totalOrderPrice(){
            return this.$store.getters.totalOrdersPrice;
        }
    }
}
</script>

<style scoped>
  .v-card{
      padding: 25px;
  }
</style>
