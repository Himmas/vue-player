/**
 * Created by lijie on 16/7/25.
 */
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
    // songId : "420513838",
    songId: "25714355",
    songStatus:{
        isPlay:false
    },
    searchData:''
}

// 定义所需的 mutations
const mutations = {
    SETPLAYSTATUSPLAY(state){
        state.songStatus.isPlay = true
    },
    SETPLAYSTATUSPAUSE(state){
        state.songStatus.isPlay = false
    },
    SETSEARCHDATA(state,data){
        state.searchData = data
    }
}

// 创建 store 实例
export default new Vuex.Store({
    state,
    mutations
})