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
//获取当前歌曲总时长
export function getDuration(state) {
    return state.songStatus.duration
}
//获取当前歌曲基本信息
export function getSongInfo(state) {
    return state.songInfo;
}
//获取播放列表状态
export function getListStatus(state) {
    return state.listStatus;
}
