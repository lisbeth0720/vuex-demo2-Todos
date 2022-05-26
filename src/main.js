import { createApp } from 'vue'
import App from './App.vue'
import Store from './store/index.js'

//1.导入ant-design-vue组件库
import Antd from 'ant-design-vue'
//2.导入组件库的样式表
import 'ant-design-vue/dist/antd.css'

createApp(App).use(Antd).use(Store).mount('#app')