/**
 * Created by lijie on 16/7/25.
 */

//设置播放状态
export const setPlayStatusPlay = ({dispatch,state}) => {
    dispatch('SETPLAYSTATUSPLAY')

}
export const setPlayStatusPause = ({dispatch,state}) => {
    dispatch('SETPLAYSTATUSPAUSE')
}
//更新搜索数据
export const setSearchData = ({dispatch,state},data) => {
    dispatch('SETSEARCHDATA',data)
}
//设置当前播放歌曲
export const setSongId = ({dispatch,state},id) => {
    dispatch('SETSONGID',id)
}
