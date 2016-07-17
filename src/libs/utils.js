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