import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
import modules from './modules.js'

const state = {
    //所有的任务列表
    list: [],

    inputValue: '健身',

    //下一个id
    nextId: 5,
    //展示的分类-默认展示的是所有的
    viewKey: 'all'
};

import { createStore } from 'vuex'

export default createStore({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    modules: modules
})
