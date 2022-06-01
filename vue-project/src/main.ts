import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// import Home from './views/HomeView.vue'
// Vue.component('default-layout', Home) 
export const bus = new Vue()
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
