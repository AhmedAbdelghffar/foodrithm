<template>
    <div>
       <usersOrders></usersOrders> 
        <totalOrder></totalOrder> 
    </div>
</template>

<script>
import usersOrders from './showOrders/orders'
import totalOrder from './showOrders/totalOrder'
export default {
    components : {
       usersOrders,
       totalOrder
    }
    
}
</script>
