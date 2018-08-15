<template>
<div>
    
    <apporder v-for="(order,index) in orders" :key='index' :order="order" > </apporder> 
    
</div>
</template>

<script>
import apporder from './order'
export default {
    data() {
        return{
         
        }
    },
    components: {
        apporder
    },
    computed : {
        orders(){
            return this.$store.getters.orders;
        }
    }
}
</script>

