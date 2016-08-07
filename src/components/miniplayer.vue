<template>
    <div class="minibar">
        <img :src="songInfo.album.picUrl+'?param=60y60'" v-link="{path:'/song'}">
        <div class="artist">
            <p class="song">{{ songInfo.name}}</p>
            <p class="singer">{{ songInfo.artists[0].name }}</p>
        </div>
        <div class="miniplayer">
            <i class="iconfont icon-list"></i>
            <i class="iconfont" :class="{'icon-play-line':getSongStatus.status!=1,'icon-pause-line':getSongStatus.status==1}"
                @click="play"
            ></i>
            <i class="iconfont icon-next-line"></i>
        </div>
    </div>
    <div class="playline">
        <div class="now-line" :style="{'width':getCurrentTime/getDuration*100+'%'}"></div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .minibar{
        position: fixed;
        bottom: 0;
        background-color: rgba(255,255,255,0.8);
        width: 100%;
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
        .miniplayer{
            position:absolute;
            padding:.06rem;
            right:0;
            top:0;
            bottom:0;
            i{
                float:left;
                line-height: .54rem;
                color:#ee5648;
                margin-right:.1rem;
            }
            .icon-play-line{
                font-size: .34rem;
            }
            .icon-pause-line{
                font-size: .34rem;
            }
        }
    }
    .playline{
        position:fixed;
        bottom:0;
        height: 3px;
        background-color:#eee;
        width:100%;
        .now-line{
            height:100%;
            background-color:#ee5648;
        }
    }
</style>
<script type="text/ecmascript-6">
    import {getSongInfo,getSongStatus,getAudio,getCurrentTime,getDuration} from '../vuex/getters'
    import {setPlayStatusPlay,setPlayStatusPause} from '../vuex/actions'
    export default{
        vuex : {
            getters : {
                getSongInfo,getSongStatus,getAudio,getCurrentTime,getDuration
            },
            actions : {
                setPlayStatusPlay,setPlayStatusPause
            }
        },
        methods : {
            play(){
                if(this.getSongStatus.status == 1){
                    this.getAudio.pause()
                    this.setPlayStatusPause()
                }
                else{
                    this.getAudio.play()
                    this.setPlayStatusPlay()
                }
            }
        },
        computed : {
            songInfo(){
                return this.getSongInfo
            }
        }
    }
</script>
