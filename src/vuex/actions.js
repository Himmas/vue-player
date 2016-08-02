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
export const setPlayStatusStop = ({dispatch,state}) => {
    dispatch('SETPLAYSTATUSSTOP')
}

//更新搜索数据
export const setSearchData = ({dispatch,state},songs) => {
    dispatch('SETSEARCHDATA',songs)
}
//设置当前播放歌曲
export const setSongId = ({dispatch,state},id) => {
    dispatch('SETSONGID',id)
}
//设置当前audio对象
export const setAudio = ({dispatch,state},element) => {
    dispatch('SETAUDIO',element)
}

export const setCurrentTime = ({dispatch,state},time) => {
    if(time || time === 0)
        dispatch('SETCURRENTTIME',time)
    else
        dispatch('SETCURRENTTIME')
}
export const setDuration = ({dispatch,state}) => {
    dispatch('SETDURATION')
}

export const setSongInfo = ({dispatch,state},songInfo) => {
    dispatch('SETSONGINFO',songInfo)
}