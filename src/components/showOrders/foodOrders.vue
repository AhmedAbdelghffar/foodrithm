<template>
<div>
    
    <div class="single-order-item">
    <v-layout row >
       <v-flex xs1>
        <h4>{{order.name}}</h4>
       </v-flex>  
       <v-flex xs1 >
            <h4>{{ order.totalPrice }} EGP</h4>
       </v-flex> 
       <v-flex xs1 >
           <h4>{{order.quantity}}</h4>
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
