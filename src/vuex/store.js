/**
 * Created by lijie on 16/7/25.
 */
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count : 0
}

// 定义所需的 mutations
const mutations = {
    INCREMENT(state){
        state.count++
    },
    DECREMENT(state){
        state.count--
    }
}

// 创建 store 实例
export default new Vuex.store({
    state,
    mutations
})