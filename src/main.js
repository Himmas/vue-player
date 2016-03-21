import Vue from 'vue'
import App from './App.vue'
import filters from './filters'

//注册filters
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

new Vue({
  el: 'body',
  components: {App
  }
})
