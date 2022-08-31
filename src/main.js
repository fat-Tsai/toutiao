import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全量导入 Vant 组件库
import Vant from 'vant'
import 'vant/lib/index.css' // 导入 Vant 样式表
// 导入 amfe-flexible
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.use(Vant) // 注册使用 Vant

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
