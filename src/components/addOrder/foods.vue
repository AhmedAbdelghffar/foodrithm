<template>
<div>
    <v-card>
    <appFood v-for="(food,index) in foods" :key='index' :food="food" > </appFood> 
    </v-card>
</div>
</template>

<script>
import appFood from './food'
export default {
    data() {
        return{
         
        }
    },
    components: {
        appFood
    },
    computed : {
        foods(){
            return this.$store.getters.foods;
        }
    }
}
</script>

