<template>
   <div>
    <v-layout row  justify-space-around>  
     <v-flex xs3> 
       <foods> </foods>
     </v-flex>  
    <v-flex xs8> 
       <orders> </orders>
     </v-flex> 
    </v-layout>
    </div>
</template>

<script>
import foods from './addOrder/foods'
import orders from './addOrder/orders'
export default {
    components:{
        foods,
        orders
    }
}
</script>

