import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(axios, VueAxios)
new Vue({
    render: h => h(App),
}).$mount('#app')
