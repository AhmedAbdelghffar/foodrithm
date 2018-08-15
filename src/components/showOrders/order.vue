<template>
<div>

    <v-card>
    
         
    <v-expansion-panel focusable >
    <v-expansion-panel-content>

        <div slot="header">
         <div class="single-order-item">
            <v-layout row justify-space-between>
            <v-flex xs4>
                <h3>{{order.userName}}</h3>
            </v-flex>  
            <v-flex xs8 class="text-xs-right">
                <h3>{{order.orderPrice}} EGP</h3>
            </v-flex>   
            </v-layout>    
         </div> 
        </div>

        <foodOrders v-for="(order,index) in order.order" :key='index' :order="order" > </foodOrders> 

    </v-expansion-panel-content>
    </v-expansion-panel>   

    
    
    
 

    
    </v-card>

</div>
    
</template>

<script>
import foodOrders from './foodOrders'
export default {
    data(){
        return{
            
        }
    },
    props:['order'],
    methods: {
     
    },
    components: {
        foodOrders
    }
    
}
</script>

<style scoped>
.single-order-item{
    padding-right: 25px;
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

.v-card{
    margin-top: 15px;
}
</style>
