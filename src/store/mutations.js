//Mutations-同步操作立即执行
//Mutations 用于变更state中的数据-

//vuex中推荐在Mutitions中修改state中的数据，不推荐在组件中直接通过this.$store来修改

//1.只能通过mutations变更state中的数据，不可以直接操作state中的数据

//2.虽然通过mutations来操作更改state中的数据步骤稍微繁琐些，
//但是可以集中监控所有数据的变化（可以知道哪个组件更改了state中的数据

//3.注意mutations里不能写异步的操作(setTimeOut是异步的)

export default {
    //+1的函数
    add(state) {
        //变更状态
        state.count++
            //不要再muctions里执行异步操作，注意mutations里不能写异步的操作(setTimeOut是异步的)
            // setTimeout(()=>{
            //     state.count++
            // },1000)
    },
    //mutations传递参数
    //+step的函数
    addN(state, step) {
        //变更状态
        state.count += step
    },

    //-1的函数
    sub(state) {
        state.count--
    },
    //mutations传递参数
    //-step的函数
    subN(state, step) {
        //变更状态
        state.count -= step
    },
}