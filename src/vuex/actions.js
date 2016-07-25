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