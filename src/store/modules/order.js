const state = {
    order: [],
    orderPrice: 0
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
       state.orderPrice += foodPrice;
   },
   'REMOVE_FOOD_ORDER' (state , {foodId , foodName , foodPrice}){
    const index = state.order.findIndex( element => element.id == foodId);
    if (state.order[index].quantity > 1){
        state.order[index].quantity--;
        state.order[index].totalPrice -= foodPrice;
    }else{
        state.order.splice(index,1);
    }
    state.orderPrice -= foodPrice;
    },
    'EMPTY_ORDER' (state){
        state.order = [];
        state.orderPrice = 0;
    }
}



const actions = {
    add_food_order({commit} , newOrder){
        commit('ADD_FOOD_ORDER' , newOrder);
    },
    remove_food_order({commit} , newOrder){
        commit('REMOVE_FOOD_ORDER' , newOrder);
    },
    empty_order ({commit}){
        commit('EMPTY_ORDER');
    }
}


const getters = {
    order(state){
        return state.order;
    },
    orderPrice(state){
        return state.orderPrice;
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}