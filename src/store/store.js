import Vue from 'vue';
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import food from './modules/food'
import order from './modules/order'

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: 'aklorithm',
    storage: localStorage
  })

export default new Vuex.Store({
    modules:{
        food,
        order
    },
    plugins: [vuexPersist.plugin]
})