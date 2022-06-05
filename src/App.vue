<template>
   <div class="todos">
       <a-input placeholder= "请输入任务" class="my_ipt" />
       <a-button type="primary">添加事项</a-button>
       
       <a-list bordered :dataSource="list" class="dt_list">
       
           <!-- <a-list-item slot="renderItem" slot-scope="item"> -->
                  <!--复选框-->
                  
                  <!-- <a-checkbox>{{item.info}}</a-checkbox> -->
                  <!--删除链接-->
                  <!-- <a slot="actions">删除</a>    
            </a-list-item> -->

             <a-list-item v-for="item in list" :key="item">
                  <!--复选框-->
                  <a-checkbox>{{item.info}}</a-checkbox>
                  <!--删除链接-->  
                 <a slot:actions>删除</a>  
            </a-list-item>
            <!-- footerXtt -->
            <div class="footer">
            <!-- <div slot="footer" class="footer">-->
                <!--未完成的任务个数-->
                <span class="sy">0条剩余</span>
                <!--操作按钮-->
                 <a-button-group>
                     <a-button type="primary">全部</a-button>
                     <a-button>未完成</a-button>
                     <a-button>已完成</a-button>
                  </a-button-group>
                  
                  <!-- 把已完成的任务清空 -->
                  <a>清除已完成</a>
             </div>
       </a-list>
    </div>
</template>
<script>

//引入组件
//import 'ant-design-vue/dist/antd.vue'
import {mapState} from 'vuex'

export default {
  name: 'App',
  data(){
      return {
          list:[]
      }
  },
  components: {
    
  },
  computed:{
  
    ...mapState(['list'])//vuex中state中的list(备注记得加[]号)
  },
  watch:{
    //  list(newList,oldList){
    //     console.log(newList,oldList)
    //  }
  },
  created(){
    this.$store.dispatch('getList')
    console.log(this.list)
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
