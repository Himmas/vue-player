/**
 * Created by lijie on 16/7/25.
 */
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
    // songId : "186001",
    songId: "25714355",
    songStatus:{
        status:0,//0停止 1播放 2暂停
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
        state.songStatus.status = 1
    },
    SETPLAYSTATUSPAUSE(state){
        state.songStatus.status = 2
    },
    SETPLAYSTATUSSTOP(state){
        state.songStatus.status = 0
    },
    SETSEARCHDATA(state,songs){
        state.searchData.result.songs = songs
    },
    SETSONGID(state,id){
        state.songId = id
    },
    SETAUDIO(state,element){
        state.audio = element
    },
    SETCURRENTTIME(state,time){
        if(time && state.songStatus.duration>0) state.audio.currentTime = time
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