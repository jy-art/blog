import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'assets/css/style.css'
import './plugins/element.js'
Vue.config.productionTip = false
import axios from 'axios'


Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.prototype.$http = axios.create({

  baseURL: 'http://localhost:3000/web/api/'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
