import Vue from 'vue'
import Song from './components/song'
import List from './components/list'
import VueRouter from 'vue-router'
import filters from './filters'
import VueResource from 'vue-resource'
import App from './app'

var hostSetting = require('../hostSetting')
require('./assets/css/m-reset')
require('./assets/css/global')
require('./assets/css/icon')

//注册filters
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter)
Vue.use(VueResource)

window.HOST = hostSetting.protocol+hostSetting.host+':'+hostSetting.port

var router = new VueRouter()

router.map({
    '/': {
        component: Song
    },
    '/list': {
        component: List
    }
})

window.router = router

router.start(App, '#app')
