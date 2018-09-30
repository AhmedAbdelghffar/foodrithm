
import request from 'superagent'

const state= {
    foods: []
};


const mutations = {
    'SET_FOODS' (state){
        request.get('https://stock-71167.firebaseio.com/stocks.json')
        .then(response => {
            const result= [];
            for( let i in response.body){
                result.push(response.body[i]);
            }
            state.foods = result;
        });
       
    },
    'ADD_FOODS' (state , food){
        console.log(food);
        request.post('https://stock-71167.firebaseio.com/stocks.json')
        .send({ name : food.name , price: food.price})
        .then(response => {
        });
    }
};


const actions = {
    initFoods: ({commit}) => {
        commit('SET_FOODS');
    },
    addFood({commit},food){
        commit('ADD_FOODS',food);
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