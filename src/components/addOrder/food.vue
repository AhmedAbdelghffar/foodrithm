<template>
<div>
    
    <div class="single-food-item">
    <v-layout row justify-space-between>
       <v-flex xs-4>
        <h3>{{food.name}}</h3>
        <h4>{{ food.price }} EGP</h4>
       </v-flex>  
       <v-flex xs-4 class="text-xs-right">
        <v-spacer> </v-spacer>
        <ul>
           
            <li>
              <v-btn  dark color="primary" @click="addFoodOrder">
                Add
              </v-btn>
            </li>

        </ul>    
       </v-flex>   
    </v-layout>    
    </div>    
    <v-divider> </v-divider>
</div>
    
</template>

<script>
export default {
    props:['food'],
    methods: {
       addFoodOrder(){
           const order = {
               foodId: this.food.id,
               foodName: this.food.name,
               foodPrice: this.food.price
           }

           this.$store.dispatch('add_food_order',order)
       }
    }
}
</script>

<style scoped>
.single-food-item{
    padding: 25px;
}

ul{
    list-style: none;
}

li{
    display: inline-block;
}
</style>
