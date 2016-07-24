<template>
   <div class="lrc-box">
       <p v-for="item in songLrc">{{item.word}}</p>
   </div>
</template>
<style rel="stylesheet/less" lang="less">
    .lrc-box{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        text-align: center;
        overflow: auto;
        padding-top: .2rem;
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
    export default{
        props:['songId'],
        data(){
            return{
                songLrc:[]
            }
        },
        created(){
            this.$http.get(window.HOST+'/lrc?id='+this.songId).then((response) => {
                var lrcInfo = JSON.parse(response.data)
                var lrcStr = lrcInfo.lrc.lyric
                var lrcArr = lrcStr.split('\n')
                lrcArr.forEach((o,i)=>{
                    lrcArr[i] = {
                        word: o.replace(/\[(.+)\](.+)/g,'$2'),//歌词
                        time: o.replace(/\[(.+)\](.+)/g,'$1')//时间
                    }
                })
                this.$set('songLrc', lrcArr)
            }, (response) => {
                // error callback
            });
        }
    }
</script>