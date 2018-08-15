<template>
<div>
    
    <div class="single-order-item">
    <v-layout row justify-space-between>
       <v-flex xs4>
        <h4>Name: {{order.name}}</h4>
        <h4>Price: {{ order.totalPrice }} EGP</h4>
        <h4>Quantity : {{order.quantity}}</h4>
       </v-flex>  
       <v-flex xs8 class="text-xs-right">
        <v-spacer> </v-spacer>
        <ul>
             <li>
              <v-btn fab dark small color="primary" @click="removeFoodOrder">
                <v-icon dark>remove</v-icon>
              </v-btn>
            </li>
            <li>
              <v-btn fab dark small color="primary" @click="addFoodOrder">
                <v-icon dark>add</v-icon>
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
    data(){
        return{
            
        }
    },
    props:['order'],
    methods: {
       addFoodOrder(){
           const order = {
               foodId: this.order.id,
               foodName: this.order.name,
               foodPrice: this.order.price
           }

           this.$store.dispatch('add_food_order',order)
       },
       removeFoodOrder(){
            const order = {
               foodId: this.order.id,
               foodName: this.order.name,
               foodPrice: this.order.price
           }

           this.$store.dispatch('remove_food_order',order)          
       }
    }
}
</script>

<style scoped>
.single-order-item{
    padding: 25px;
}

ul{
    list-style: none;
}

li{
    display: inline-block;
}

.layout.row{
    align-items: center;
}

.food-prop-value{
    float: right;
}
</style>
