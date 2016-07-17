import Vue from 'vue'
import Song from './components/song'
import List from './components/list'
import VueRouter from 'vue-router'
import filters from './filters'

require('./assets/css/m-reset')
require('./assets/css/global')

//注册filters
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter)

var router = new VueRouter()

var App = Vue.extend({})

router.map({
    '/': {
        component: Song
    },
    '/list': {
        component: List
    }
})

router.start(App, '#app')
