import foods from '../../data/foods'
import request from 'superagent'

const state= {
    foods: []
};


const mutations = {
    'SET_FOODS' (state , foods){
        request.get('https://stock-71167.firebaseio.com/stocks.json')
        .then(response => {
            const result= [];
            for( let i in response.body){
                result.push(response.body[i]);
            }
            state.foods = result;
        });
       
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