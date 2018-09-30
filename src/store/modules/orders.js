import request from 'superagent'

const state = {
    orders:[],
    total:0
}

const mutations = {
    'ADD_USER_ORDER' (state , { order , userName , orderPrice}){
        state.orders.push({
            userName : userName,
            order: order,
            orderPrice: orderPrice
        })

        request.post('https://stock-71167.firebaseio.com/orders.json')
        .send({ userName : userName , order: order, orderPrice: orderPrice})
        .then(response => {
        });
    },
    'UPDATE_TOTAL' (state){
        request.get('https://stock-71167.firebaseio.com/orders.json')
        .then(response => {
            var result=0;
            for( let i in response.body){
                result += response.body[i].orderPrice;
            }
            state.total = result;
            
        });
    }

}


const actions = {
    add_user_order({commit},order ){
        commit('ADD_USER_ORDER',order)
    },
    updateTotal({commit}){
        commit('UPDATE_TOTAL');
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
        request.get('https://stock-71167.firebaseio.com/orders.json')
        .then(response => {
            var result=0;
            for( let i in response.body){
                result += response.body[i].orderPrice;
            }
            state.total = result;
        });
        return state.total;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}