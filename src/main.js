import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全量导入 Vant 组件库
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css' // 导入 Vant 样式表

// 导入 amfe-flexible
import 'amfe-flexible'

// 导入 dayjs 的核心模块
import dayjs from 'dayjs'
// 导入计算相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime'
// 导入中文语言包
import zh from 'dayjs/locale/zh-cn'

// 配置“计算相对时间”的插件
dayjs.extend(relativeTime)
// 配置中文语言包
dayjs.locale(zh)

// 定义格式化时间的全局过滤器
Vue.filter('dateFormat', dt => {
  // 调用 dayjs() 得到的是当前的时间
  // .to() 方法的返回值，是计算出来的“相对时间”
  return dayjs().to(dt)
})

Vue.config.productionTip = false
Vue.use(Vant) // 注册使用

Vue.use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
