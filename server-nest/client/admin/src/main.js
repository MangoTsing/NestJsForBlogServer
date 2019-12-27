import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import mavonEditor from 'mavon-editor'  
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor) // 使用markdown
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
