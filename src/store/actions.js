//Actions--异步操作
//actions里专门用于处理异步操作；
//如果要通过异步操作来变更数据，必须通过action,而不能使用mutation,
//但action还是通过触发mutation的方式来间接变更数据
export default {
    //1秒后数量+1
    addAsync(context) {
        setTimeout(() => {
            //在这里不能直接执行state.count+1,
            //需要通过context.commit触发一个mutation，在mutation里执行+1
            context.commit('add')
        }, 1000)
    },
    //触发action异步任务时候携带参数:
    //1秒后数量+step (step是参数)
    addNAsync(context, step) {
        console.log(context)
        setTimeout(() => {
            context.commit('addN', step)
        }, 1000)
    },

    //1秒后数量-1
    subAsync(context) {
        setTimeout(() => {
            //在这里不能直接执行state.count+1,
            //需要通过context.commit触发一个mutation，在mutation里执行+1
            context.commit('sub')
        }, 1000)
    },
    //触发action异步任务时候携带参数:
    //1秒后数量-step (step是参数)
    subNAsync(context, step) {
        setTimeout(() => {
            context.commit('subN', step)
        }, 1000)
    }
}