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
import 'highlight.js/styles/github.css'
import VueLazyload from 'vue-lazyload'

import 'animate.css'

Vue.use(VueLazyload)
const loadimage = require('@/assets/img/th.gif')


Vue.directive('animate', {
  inserted: function (el, binding) {
    // 聚焦元素
    binding.addClass = () => {
      const { top } = el.getBoundingClientRect()
      const h = document.documentElement.clientHeight || document.body.clientHeight
      if (top < h) {
        if(el.className.indexOf(binding.value) == -1 ){
          // 初次还未绑定过，则新增类名(注意：下面单引号中间是一个空格！！！)
          el.className = binding.value+' '+el.className
        }
        if (binding.addClass) {
          window.removeEventListener('scroll', binding.addClass)
        }
      }
    }
    window.addEventListener('scroll', binding.addClass,true)
    binding.addClass()
  },
  unbind: function (el, binding) {
    if (binding.addClass) {
      window.removeEventListener('scroll', binding.addClass)
    }
  }
})

Vue.use(VueLazyload, {
  preLoad: 0,
  error: loadimage,
  loading: '/src/assets/img/avatar.jpg',
  attempt: 1
})
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
const vue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default vue