<template>
    <div>
        <br>
        <v-card>
             <h3>Total Order Price: {{ total }} EGP</h3>
        </v-card>     
    </div>
</template>

<script>
export default {
    data () {
        return {
            total: 0,
        }
    },
    beforeMount() {
        this.total = this.$store.getters.totalOrdersPrice;
    },
    computed:{
        totalState(){
            return this.$store.getters.totalOrdersPrice;
        },
    },
    watch: {
        totalState(state) {
            this.total = state
        }
    }
}
</script>

<style scoped>
  .v-card{
      padding: 25px;
  }
</style>
