import Vue from 'vue'
import App from './App.vue'
import money from 'v-money'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(money, {precision: 4})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
