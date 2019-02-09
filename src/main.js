import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
