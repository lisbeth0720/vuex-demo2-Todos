//Mutations-同步操作立即执行
//Mutations 用于变更state中的数据-

//vuex中推荐在Mutitions中修改state中的数据，不推荐在组件中直接通过this.$store来修改

//1.只能通过mutations变更state中的数据，不可以直接操作state中的数据

//2.虽然通过mutations来操作更改state中的数据步骤稍微繁琐些，
//但是可以集中监控所有数据的变化（可以知道哪个组件更改了state中的数据

//3.注意mutations里不能写异步的操作(setTimeout是异步的)

export default {
    //初始化列表项
    initList(state, data) {
        state.list = data;
    },
    //设置输入框内容
    setInputValue(state, val) {
        state.inputValue = val;
    },
    //添加列表项
    addItem(state) {
        const obj = {
            id: state.nextId,
            info: state.inputValue.trim(),
            done: false
        };
        state.list.push(obj);
        //console.log(state.list);
        state.nextId++;
    },
    //删除列表项
    removeItem(state, id) {
        //两步
        //1.根据id查找对应项的索引-
        //查找到的索引 如果当前id==传入的就把索引返回
        const i = state.list.findIndex(x => x.id === id);
        //2.根据索引删除对应项
        if (i != -1) {
            state.list.splice(i, 1) //从查找到的索引开始删除1项
        }
    },
    // //更改列表中项的选中状态
    changeItemStatus(state, id) {
        const i = state.list.findIndex(x => x.id === id);
        //2.根据索引更改对应项的复选框选中状态
        if (i != -1) {
            state.list[i].done = !state.list[i].done;
        }
    },

    //更改列表中项的选中状态-方法2
    // changeItemStatus2(state, param) {
    //     const i = state.list.findIndex(x => x.id === param.id);
    //     //2.根据索引更改对应项的复选框选中状态
    //     if (i != -1) {
    //         state.list[i].done = param.status;
    //     }
    // },

    //清除已完成的任务项
    cleanDone(state) {
        state.list = state.list.filter(x => x.done === false)
    },

    //更改任务展示的类型
    changeViewKey(state, key) {
        state.viewKey = key;
    }
}
