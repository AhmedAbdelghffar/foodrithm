const state = {
    orders:[]
}

const mutations = {
    'ADD_USER_ORDER' (state , { order , userName , orderPrice}){
        state.orders.push({
            userName : userName,
            order: order,
            orderPrice: orderPrice
        })
    }

}


const actions = {
    add_user_order({commit},order ){
        commit('ADD_USER_ORDER',order)
    }
}


const getters = {
    orders(state){
        return state.orders;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}