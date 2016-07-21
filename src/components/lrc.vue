<template>
   <div class="lrc-box">
       <p>作曲 : 吉田潔</p>
       <p>作词 : 梁旋</p>
       <p>日月星辰悄悄</p>
       <p>升了又落</p>
       <p class="on">我却不知白天黑夜的存在</p>
       <p>世界消失</p>
       <p>有你在 我心里</p>
       <p>真美好</p>
       <p>有一天 想成为 你骄傲</p>
       <p>日月星辰悄悄</p>
       <p>升了又落</p>
       <p>我却不知白天黑夜的存在</p>
       <p>世界消失</p>
       <p>有你在 我心里</p>
       <p>真美好</p>
       <p>有一天 想成为 你的骄傲</p>
       <p>今夕何夕 见此良人</p>
       <p>如月之恒为你守望</p>
       <p>每次日落日升</p>
       <p>我一生都在</p>
       <p>用歌声寻觅你</p>
       <p>为你享受着生命的悲喜</p>
       <p>请跟我乘风而去</p>
       <p>我一生都在用歌声寻觅你</p>
       <p>为你享受着生命的悲喜</p>
       <p>请跟我乘风而去</p>
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
                songLrc:{}
            }
        },
        created(){
            this.$http.get(window.HOST+'/lrc?id='+this.songId).then((response) => {
                console.log(response.data);
                this.$set('songLrc', JSON.parse(response.data.lrc.lyric))
            }, (response) => {
                // error callback
            });
        }
    }
</script>