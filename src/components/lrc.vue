<template>
    <div class="lrc-box" id="lrcBox">
        <p v-for="item in songLrc" :class="{'on':$index == getNowIndex(getCurrentTime)}">{{item.word ||
            "&nbsp;"}}</p>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .lrc-box {
        position: absolute;
        width: 100%;
        top: 45%;
        text-align: center;
        overflow: auto;
        padding-top: .2rem;
        transition: .3s;
        p {
            line-height: .4rem;
            color: #888;
        }
        p.on {
            color: #333;
            font-size: .16rem;
        }
    }
</style>
<script type="text/ecmascript-6">
    import {getNowSongId, getCurrentTime ,getSongInfo} from '../vuex/getters'
    import {timeToSecond} from '../libs/utils'

    export default{
        data(){
            return {
                songLrc: [],
                nowIndex: 0
            }
        },
        watch: {
            nowIndex(val, oldVal) {
                if(val == -1)
                    document.getElementById("lrcBox").style['transform'] = 'translateY(0)'
                document.getElementById("lrcBox").style['transform'] = `translateY(-${val * 0.4}rem)`
            },
            getSongInfo:{
                handler:function () {
                    this.getSongLrc()
                },
                deep:true
            }
        },
        vuex: {
            getters: {
                getNowSongId, getCurrentTime,getSongInfo
            }
        },
        created(){
            this.getSongLrc()
        },
        methods: {
            getSongLrc(){
                this.$http.get(window.HOST + '/lrc?id=' + this.getNowSongId).then((response) => {
                    var lrcInfo = JSON.parse(response.data)
                    this.makeLrcArr(lrcInfo)
                }, (response) => {
                    // error callback
                });
            },
            makeLrcArr(lrcInfo){
                var lrcStr = lrcInfo.lrc.lyric
                var lrcArr = lrcStr.split('\n')
                var resArr = []
                lrcArr.forEach((o)=> {
                    var timeArr = o.replace(/(\[.*\])(.*)/g, '$1').match(/(\[\d{2}:\d{2}\.\d{2}\])/g) || o.replace(/(\[.*\])(.*)/g, '$1')//时间
                    if (timeArr && timeArr instanceof Array) {
                        timeArr.forEach((m)=> {
                            var lrcObj = {
                                word: o.replace(/(\[.*\])(.*)/g, '$2'),//歌词,
                                time: timeToSecond(m.replace(/\[(.*)\]/g, '$1'))
                            }
                            if (resArr.length > 0 && resArr[resArr.length - 1].time > lrcObj.time) {
                                for (let i = resArr.length - 1; i > 0; i--) {
                                    if (lrcObj.time > resArr[i].time) {
                                        resArr.splice(i + 1, 0, lrcObj)
                                        break;
                                    }
                                }
                            } else resArr.push(lrcObj)
                        })
                    } else if(typeof timeArr =='string'){
                        resArr.push({
                            word: o.replace(/(\[.*\])(.*)/g, '$2'),//歌词,
                            time: timeToSecond(o.replace(/\[(.*)\](.*)/g, '$1'))
                        })
                    }
                })
                this.$set('songLrc', resArr)
            },
            getNowIndex(currentTime){
                for (let i = 0; i < this.songLrc.length; i++) {
                    if (this.songLrc[i].time >= currentTime || this.songLrc[i].time === '') {
                        this.nowIndex = i - 1
                        return this.nowIndex
                    }
                }
                this.nowIndex = this.songLrc.length - 1
                return this.nowIndex
            }
        }
    }
</script>