//Actions--异步操作
//actions里专门用于处理异步操作；
//如果要通过异步操作来变更数据，必须通过action,而不能使用mutation,
//但action还是通过触发mutation的方式来间接变更数据

import axios from 'axios'

export default {
    getList(context) {
        axios.get('/list.json').then(res => {
            context.commit('initList', res)
        })
    }
}