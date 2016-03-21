"use strict"

/**格式化时间(以秒为单位转换成时:分:秒格式)
 *  @param {string} time 需要格式化的时间
 *  @param {string} type 格式化类型 hasHour(有小时位)
 *                                 notHasHour(没有小时位)
 */
exports.formatTime = (time,type='hasHour') => {
    let hour = '00';
    let minute = '00';
    let second = '00';
    let resultTime = '';
    if(time && type == 'hasHour'){
        let this_hour = parseInt(time/3600);
        let this_minute = parseInt((time - this_hour*3600)/60);
        let this_second = parseInt(time-this_hour*3600-this_minute*60);
        hour = this_hour<10?`0${this_hour}`:`${this_hour}`;
        minute = this_minute<10?`0${this_minute}`:`${this_minute}`;
        second = this_second<10?`0${this_second}`:`${this_second}`;
    }
    else if(time && type != 'hasHour'){
        let this_minute = parseInt(time/60);
        let this_second = parseInt(time-this_minute*60);
        minute = this_minute<10?`0${this_minute}`:`${this_minute}`;
        second = this_second<10?`0${this_second}`:`${this_second}`;
    }
    resultTime = (type =='hasHour')?(`${hour}:${minute}:${second}`):(`${minute}:${second}`);
    return resultTime;
}
