<template>
   <div>
    <v-layout row  justify-space-around>  
     <v-flex xs4> 
       <foods> </foods>
     </v-flex>  
    <v-flex xs4> 
       <order> </order>
     </v-flex> 
    </v-layout>
    </div>
</template>

<script>
import foods from './addOrder/foods'
import order from './addOrder/order'
export default {
    components:{
        foods,
        order
    }
}
</script>

