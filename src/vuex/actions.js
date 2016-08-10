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
//设置当前歌曲信息
export const setSongInfo = ({dispatch,state},songInfo) => {
    dispatch('SETSONGINFO',songInfo)
}

export const setListOpen = ({dispatch,state}) => {
    dispatch('SETLISTOPEN')
}

export const setListClose = ({dispatch,state}) => {
    dispatch('SETLISTCLOSE')
}

export const setPlayList = ({dispatch,state},list) => {
    dispatch('SETPLAYLIST',list)
}

//播放列表单首删除
export const deleteSong = ({dispatch,state},index) => {
    dispatch('DELETESONG',index)
}
//添加到播放列表
export const addSong = ({dispatch,state},item,isTurn=false) => {
    dispatch('ADDESONG',item,isTurn)
}
//播放列表清空
export const listEmpty = ({dispatch,state}) => {
    dispatch('LISTEMPTY')
}

export const turnTo = ({dispatch,state},index) => {
    dispatch('TURNTO',index)
}

