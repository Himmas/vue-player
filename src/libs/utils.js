/**
 * Created by kylin on 16/7/17.
 */
'use strict'

/**
 * 对象深拷贝
 * @param {Object} obj 被拷贝的对象
 * @param {String} filterKey 过滤的键
 * @return {Object} newObj 新对象
 */

export const clone = function(obj, filterKey){
    if(typeof(obj) != 'object' || obj == null) return obj
    let newObj = {}
    for(let i in obj){
        if(!filterKey || filterKey!=i)
            newObj[i] = clone(obj[i],filterKey)
    }
    return newObj
}

/**
 * 03:11.34=>191.34
 * @param {string} time 时间
 * @return {string}
 */

export const timeToSecond = function(time){
    if (!time)
        return 0
    var timeArr = time.split(':')
    return parseInt(timeArr[0])*60+parseFloat(timeArr[1])
}