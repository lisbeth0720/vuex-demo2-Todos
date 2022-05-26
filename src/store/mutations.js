//Mutations-同步操作立即执行
//Mutations 用于变更state中的数据-

//vuex中推荐在Mutitions中修改state中的数据，不推荐在组件中直接通过this.$store来修改

//1.只能通过mutations变更state中的数据，不可以直接操作state中的数据

//2.虽然通过mutations来操作更改state中的数据步骤稍微繁琐些，
//但是可以集中监控所有数据的变化（可以知道哪个组件更改了state中的数据

//3.注意mutations里不能写异步的操作(setTimeout是异步的)

export default {
    initList(state, data) {
        state.list = data;
        console.log(state.list)
    }
}