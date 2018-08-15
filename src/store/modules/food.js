import foods from '../../data/foods'

const state= {
    foods: []
};


const mutations = {
    'SET_FOODS' (state , foods){
        state.foods = foods;
    }
};


const actions = {
    initFoods: ({commit}) => {
        commit('SET_FOODS' , foods);
    } 
};


const getters = {
    foods: state => {
        return state.foods;
    }
};


export default {
    state,
    mutations,
    actions,
    getters
}