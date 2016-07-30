/**
 * Created by lijie on 16/7/25.
 */
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
    songId : "186001",
    // songId: "25714355",
    songStatus:{
        isPlay:false,
        currentTime:0,
        duration:0
    },
    audio:null,
    searchData:{
        result:{
            songs:[]
        }
    }
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
    },
    SETSONGID(state,id){
        state.songId = id
    },
    SETAUDIO(state,element){
        state.audio = element
    },
    SETCURRENTTIME(state){
        state.songStatus.currentTime = state.audio.currentTime
    },
    SETDURATION(state){
        state.songStatus.duration = state.audio.duration
    }
}

// 创建 store 实例
export default new Vuex.Store({
    state,
    mutations
})