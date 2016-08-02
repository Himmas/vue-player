<template>
    <div class="minibar">
        <img src="http://p3.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg">
        <div class="artist">
            <p class="song">{{ songInfo.name}}</p>
            <p class="singer">{{ songInfo.artists[0].name }}</p>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .minibar{
        overflow:hidden;
        padding:.05rem;
        img{
            height:.56rem;
            width:.56rem;
            float:left;
        }
        .artist{
            position:absolute;
            left:.66rem;
            right:1.4rem;
            padding:.06rem;
            overflow:hidden;
            .song{
                line-height:0.26rem;
                font-size:.2rem;
                color:#646464;
            }
            .singer{
                line-height:0.18rem;
                color:#929292;
            }
            p{
                white-space:nowrap;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import {getSongInfo} from '../vuex/getters'
    export default{
        vuex : {
            getters : {
                getSongInfo
            }
        },
        computed : {
            songInfo(){
                return this.getSongInfo
            }
        }
    }
</script>
