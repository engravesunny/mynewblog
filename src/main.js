import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/theme-chalk/index.css'
import './style/index.css'
import 'element-ui/lib/'
// 引入字体图标
import './assets/icon/iconfont.css'
// 引入字体
import '@/assets/text/text.css'
import 'github-markdown-css'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
