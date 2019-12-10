import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('./assets/css/reset.css')
import './assets/css/index.less'

console.log('begin')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log('end')
