const state = {
    order: []
}

const mutations = {
   'ADD_FOOD_ORDER' (state , {foodId , foodName , foodPrice}){
       const index = state.order.findIndex( element => element.id == foodId);
       if (index != -1){
           state.order[index].quantity++;
           state.order[index].totalPrice += foodPrice;
       }else{
           state.order.push({
               id: foodId ,
               name: foodName,
               quantity: 1,
               price: foodPrice,
               totalPrice: foodPrice 
           })
       }
   }
}



const actions = {
    add_food_order({commit} , newOrder){
        commit('ADD_FOOD_ORDER' , newOrder);
    }
}


const getters = {
    order(state){
        return state.order;
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}