import Vue from 'vue'
import Audio from './App.vue'
import VueRouter from 'vue-router'
import filters from './filters'

//注册filters
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter)

var router = new VueRouter()

var App = Vue.extend({})

router.map({
    '/': {
        component: Audio
    }
})

router.start(App, '#app')
