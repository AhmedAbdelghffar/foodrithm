<template>
<div>
    <v-card>
    <div class="order-form">
        <v-text-field label="Enter Your Name" v-model="userName"  solo></v-text-field>   
        <v-layout row  justify-space-around>
            <v-flex xs6>    
                <h3>Order Price: {{orderPrice}} EGP </h3>
            </v-flex> 
            <v-flex class="text-xs-right">
                <v-btn 
                    dark large 
                    @click="addUserOrder"
                    :disabled="orderPrice == 0 || userName.length  <= 0" 
                    color="primary">
                    Order Now
                </v-btn>
            </v-flex>
        </v-layout>    
    </div>
    <v-divider> </v-divider>    
    <apporder v-for="(order,index) in orders" :key='index' :order="order" > </apporder> 
    </v-card>
</div>
</template>

<script>
import apporder from './order'
export default {
    data() {
        return{
            userName: ''
        }
    },
    components: {
        apporder
    },
    computed : {
        orders(){
            return this.$store.getters.order;
        },
        orderPrice(){
            return this.$store.getters.orderPrice;
        }
    },    

    methods: {    
        addUserOrder(){
            const orders = {
                order : this.orders ,
                userName : this.userName,
                orderPrice : this.orderPrice
            }
            this.$store.dispatch('add_user_order' , orders).then(() =>{
                this.$store.dispatch('updateTotal')
            });
            this.userName = '';
            this.$store.dispatch('empty_order');
        }
    }
}
</script>

<style scoped>
.order-form{
    padding: 25px;
}

.row{
    align-items: center;
}

</style>


