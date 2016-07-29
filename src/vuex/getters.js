/**
 * Created by kylin on 16/7/25.
 */

//获取当前播放歌曲ID
export function getNowSongId (state) {
    return state.songId
}
//获取当前歌曲播放状态
export function getSongStatus (state) {
    return state.songStatus
}
//获取搜索结果
export function getSearchData(state) {
    return state.searchData
}
//获取当前audio
export function getAudio(state) {
    return state.audio
}
//获取当前播放时间
export function getCurrentTime(state) {
    return state.songStatus.currentTime
}
export function getDuration(state) {
    return state.songStatus.duration
}