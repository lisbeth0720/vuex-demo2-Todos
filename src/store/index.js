import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
import modules from './modules.js'

const state = {
    count: 0
};

import { createStore } from 'vuex'

export default createStore({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    modules: modules
})