import Vue from 'vue'
import Player from './components/player.vue'
import VueRouter from 'vue-router'
import filters from './filters'

require('./assets/css/m-reset')

//注册filters
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter)

var router = new VueRouter()

var App = Vue.extend({})

router.map({
    '/': {
        component: Player
    }
})

router.start(App, '#app')
