import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
// 导入vant 所有组件
import 'vant/lib/index.css'
// 挂载到vue实例对象上
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
