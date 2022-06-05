<template>
   <div class="todos">
       <a-input placeholder= "请输入任务" class="my_ipt" :value="inputValue" @change="inputChangeValue" />
       <a-button type="primary" @click="addItemToList">添加事项</a-button>
      <!-- <div v-if="list.length>0"> -->
         <!-- <a-list bordered :dataSource="list" class="dt-list"> -->
           <a-list bordered :dataSource="infoList" class="dt-list">
           <!-- <a-list-item slot="renderItem" slot-scope="item"> -->
                  <!--复选框-->
                  <!-- <a-checkbox>{{item.info}}</a-checkbox> -->
                  <!--删除链接-->
                  <!-- <a slot="actions">删除</a>    
            </a-list-item> -->

             <a-list-item v-for="item in infoList" :key="item">
                  <!--复选框-->
                  <a-checkbox :checked="item.done" @change="(e)=>{checkedStatusChange(e,item.id)}">{{item.info}}</a-checkbox>
                  <!--删除链接-->  
                 <a slot:actions @click="removeItemById(item.id)">删除</a>  
            </a-list-item>
            <!-- footerXtt -->
            <div class="footer">
            <!-- <div slot="footer" class="footer">-->
                <!--未完成的任务个数-->
                <span class="sy">{{unDoneLength}}条剩余</span>
                <!--操作按钮-->
                 <a-button-group>
                     <!-- <a-button type="primary" @click="changeList('all')">全部</a-button>
                     <a-button type="default" @click="changeList('undone')">未完成</a-button>
                     <a-button type="default" @click="changeList('done')">已完成</a-button> -->
                     <!-- 三目运算符来切换展示的类型 -->
                    <a-button :type="viewKey==='all'?'primary':'default'" @click="changeList('all')">全部</a-button>
                     <a-button :type="viewKey==='undone'?'primary':'default'" @click="changeList('undone')">未完成</a-button>
                     <a-button :type="viewKey==='done'?'primary':'default'" @click="changeList('done')">已完成</a-button>
                  </a-button-group>
                  <!-- 把已完成的任务清空 -->
                  <a @click="cleanDoneItem">清除已完成</a>
             </div>
         </a-list>
       <!-- </div> -->

    </div>
</template>
<script>
//引入组件
//import 'ant-design-vue/dist/antd.vue'
import {mapState,mapGetters} from 'vuex'

export default {
  name: 'App',
  data(){
      return {
        
      }
  },
  components: {
    
  },
  computed:{
    //...mapState(['list','inputValue','viewKey']),//vuex中state中的list(备注记得加[]号)
    ...mapState(['inputValue','viewKey']),//vuex中state中的list(备注记得加[]号)
    //...mapState(['inputValue'])
    ...mapGetters(['unDoneLength','infoList'])
  },
  watch:{
      // list(newList,oldList){
      //    console.log("旧值",oldList)
      //    console.log("新值",newList)
      // }
  },
  created(){
    //由于先执行的是console.log(this.list)再执行的是 this.$store.dispatch('getList')导致vuex中的list是空 再有值，
    //值发生变化的时候dom未重新渲染
    this.$store.dispatch('getList')
   
  },
  methods:{
    //监听文本框的内容变化
    inputChangeValue(e){
       //console.log(e.target.value)
       this.$store.commit('setInputValue',e.target.value)
       console.log(this.inputValue)
    },
    //向列表中新增item项
    addItemToList(){
       if(this.inputValue.trim().length<=0){
           return this.$message.warning('文本框内容不能为空')
       }else{
          this.$store.commit('addItem')
       }
    },
    //根据id删除item项
    removeItemById(id){
      this.$store.commit('removeItem',id)
    },
    //监听复选框状态的改变
    checkedStatusChange(e,id){
      //通过e.target.checked接收到最新的选中状态
      this.$store.commit('changeItemStatus',id)
    },

     //监听复选框状态的改变-方法2
    //  checkedStatusChange(e,id){
    //    //通过e.target.checked接收到最新的选中状态
    //    const param={
    //      id:id,
    //      status:e.target.checked
    //    }
    //     this.$store.commit('changeItemStatus2',param)
    //  },

    //清除已完成的列表项
    cleanDoneItem(){
        this.$store.commit('cleanDone')
    },

    //切换分类
    changeList(key){
        this.$store.commit('changeViewKey',key)
    }
  }

}
</script>

<style scoped>
/* #app{
  padding: 10px;
} */
.todos{
  padding: 10px;
}
.my_ipt{
  width: 500px;
  margin-right: 10px;
}

.dt_list{
  width: 500px;
  margin-top: 10px;
}

footer{
  display:flex;
  justify-content:space-between;
  align-items:center
}

.sy{
  text-align: center;
  width:100px;
  display:inline-block;
}
.footer a{
  margin-left:110px;
}
</style>
