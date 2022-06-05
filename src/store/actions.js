//Actions--异步操作
//actions里专门用于处理异步操作；
//如果要通过异步操作来变更数据，必须通过action,而不能使用mutation,
//但action还是通过触发mutation的方式来间接变更数据

import axios from 'axios'
//import { request } from "../network/request.js";

export default {
    getList(context) {
        axios.get('/list.json').then(res => {
            //注意：请求到的res不是需要的数据，res.data才是list.json里的数据
            context.commit('initList', res.data)
        })

        // return request({
        //     url: 'list.json'
        // }).then(res => {
        //     console.log(res)
        //     context.commit('initList', res)
        // })
    }
}
