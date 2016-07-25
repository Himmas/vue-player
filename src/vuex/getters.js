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