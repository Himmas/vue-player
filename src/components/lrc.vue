<template>
   <div class="lrc-box" id="lrcBox">
       <p v-for="item in songLrc" :class="{'on':$index == getNowIndex(getCurrentTime)}">{{item.word || "&nbsp;"}}</p>
   </div>
</template>
<style rel="stylesheet/less" lang="less">
    .lrc-box{
        position: absolute;
        width: 100%;
        top: 45%;
        text-align: center;
        overflow: auto;
        padding-top: .2rem;
        transition: .3s;
        p{
            line-height: .4rem;
            color: #888;
        }
        p.on{
            color: #333;
            font-size: .16rem;
        }
    }
</style>
<script type="text/ecmascript-6">
    import {getNowSongId,getCurrentTime} from '../vuex/getters'
    import {timeToSecond} from '../libs/utils'

    export default{
        data(){
            return{
                songLrc:[],
                nowIndex:0
            }
        },
        watch:{
            nowIndex(val, oldVal) {
                document.getElementById("lrcBox").style['transform'] = `translateY(-${val*0.4}rem)`
            }
        },
        vuex:{
            getters:{
                getNowSongId,getCurrentTime
            }
        },
        created(){
            this.$http.get(window.HOST+'/lrc?id='+this.getNowSongId).then((response) => {
                var lrcInfo = JSON.parse(response.data)
                var lrcStr = lrcInfo.lrc.lyric
                var lrcArr = lrcStr.split('\n')
                lrcArr.forEach((o,i)=>{
                    lrcArr[i] = {
                        word: o.replace(/\[(.*)\](.*)/g,'$2'),//歌词
                        time: o.replace(/\[(.*)\](.*)/g,'$1')//时间
                    }
                    console.log(lrcArr[i]);
                })
                this.$set('songLrc', lrcArr)
            }, (response) => {
                // error callback
            });
        },
        methods:{
            isThisWord(index,currentTime){
                var thisTime = this.songLrc[index].time
                if(index+1<this.songLrc.length){
                    var nextTime = this.songLrc[index+1].time
                    return timeToSecond(thisTime)<currentTime && timeToSecond(nextTime)>=currentTime;
                }else
                    return timeToSecond(thisTime)<currentTime
            },
            getNowIndex(currentTime){
                for(let i = 0;i<this.songLrc.length;i++){
                    if(timeToSecond(this.songLrc[i].time)>currentTime || this.songLrc[i].time == '')
                    {
                        this.nowIndex = i-1
                        return this.nowIndex
                    }
                }
                this.nowIndex = this.songLrc.length-1
                return this.nowIndex
            }
        }
    }
</script>