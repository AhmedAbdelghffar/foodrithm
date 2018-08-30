import request from 'superagent'

const state = {
    orders:[],
    totalOrdersPrice:0
}

const mutations = {
    'ADD_USER_ORDER' (state , { order , userName , orderPrice}){
        state.orders.push({
            userName : userName,
            order: order,
            orderPrice: orderPrice
        })

        request.get('https://stock-71167.firebaseio.com/totalPrice.json')
        .then(response => {
            const result= [];
            for( let i in response.body){
                result.push(response.body[i]);
            }
            console.log(result[0]);
            state.totalOrdersPrice = result[0];
            
        });
        
        state.totalOrdersPrice += orderPrice;

        request.put('https://stock-71167.firebaseio.com/totalPrice.json')
        .send({ totalPrice : state.totalOrdersPrice })
        .then(response => {
        });

        request.post('https://stock-71167.firebaseio.com/orders.json')
        .send({ userName : userName , order: order, orderPrice: orderPrice})
        .then(response => {
        });
    
    }

}


const actions = {
    add_user_order({commit},order ){
        commit('ADD_USER_ORDER',order)
    }
}


const getters = {
    orders(state){
        request.get('https://stock-71167.firebaseio.com/orders.json')
        .then(response => {
            const result= [];
            for( let i in response.body){
                result.push(response.body[i]);
            }
            state.orders = result;
        });
        return state.orders;
    },
    totalOrdersPrice(state){
        request.get('https://stock-71167.firebaseio.com/totalPrice.json')
        .then(response => {
            const result= [];
            for( let i in response.body){
                result.push(response.body[i]);
            }
            console.log(result[0]);
            state.totalOrdersPrice = result[0];
            
        });
        return state.totalOrdersPrice;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}