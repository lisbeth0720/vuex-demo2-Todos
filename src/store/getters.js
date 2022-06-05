//Getter
//Getter主要是对store中的数据进行加工处理，从而形成新的数据
//Getter不会更改store中state中的原数据，只是对于原数据进行处理形成新的数据
//特点
//1.Getter可以对store中的已有的数据加工处理之后形成新的数据，类似于于计算属性
//2.store中的数据发生变化，Getter包装后的数据也会跟着变化
export default {
    //统计未完成的任务的条数
    unDoneLength(state) {
        return state.list.filter(x => x.done === false).length
    },

    //展示对应的分类下的项
    infoList(state) {
        if (state.viekKey == 'all') { //展示所有
            return state.list;
        } else if (state.viewKey == 'undone') {
            return state.list.filter(x => !x.done);
        } else if (state.viewKey == 'done') {
            return state.list.filter(x => x.done);
        }
        return state.list;
    }
}
