import Vue from 'vue'
import Song from './components/song'
import Search from './components/search'
import PlayList from './components/playList'
import Index from './components/index'
import Home from './components/home'
import HotList from './components/hotList'
import UserInfo from './components/userInfo'
import MyPlayList from './components/myPlayList'
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
    '/song': {
        component: Song
    },
    '/': {
        component: Index,
        subRoutes: {
            '/': {
                component: Home,
                subRoutes: {
                    '/':{
                        component: HotList
                    },
                    '/userInfo':{
                        component: UserInfo
                    },
                    '/myPlayList':{
                        component: MyPlayList
                    }
                }
            },
            '/search': {
                component: Search
            },
            '/playList/:id': {
                component: PlayList,
                name: 'playList'
            }
        }
    }
})

window.router = router

router.start(App, '#app')
