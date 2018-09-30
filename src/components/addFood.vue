<template>
    <div>
        <div class="foodOrder">
            <v-container grid-list-xl text-xs-center>
                <v-layout row wrap>
                    <v-flex xs10 offset-xs1>
                        <v-text-field label="Enter Food Name" v-model="name"  solo></v-text-field>   
                        <v-text-field type= "number" label="Enter Food Price (EGP)" v-model="price"  solo></v-text-field>   
                        <v-btn 
                        color="primary"
                        dark large 
                        @click="addFood"
                        >
                         Add
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>    
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            price: 0
        }
    },
    methods: {
        addFood(){
            const food = {
                name : this.name,
                price: this.price
            }
            console.log(food);
            this.$store.dispatch('addFood',food);
        }
    }
    
}
</script>
