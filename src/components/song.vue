<template>
    <div class="song-box">
        <div class="song-bg"></div>
        <div class="song-head"></div>
        <div class="container-box" @click="changeShow">
            <div v-show="!showLrc">
                <slide></slide>
                <div class="song-info-box">
                    <h1>{{getSongInfo.name}}</h1>
                    <p>
                        <span v-for="artist in getSongInfo.artists">{{artist.name}}</span>
                    </p>
                </div>
            </div>
            <lrc v-show="showLrc"></lrc>
        </div>
        <div class="player-box">
            <player></player>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .song-box{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        .song-bg{
            position: absolute;
            width: 100%;
            height: 2.3rem;
        }
        .song-head{
            position: absolute;
            width: 100%;
            height: .5rem;
        }
        .container-box{
            position: absolute;
            top: .5rem;
            bottom: 1.5rem;
            width: 100%;
            overflow: hidden;
        }
        .player-box{
            position: absolute;
            bottom: 0;
            height: 1.5rem;
            top: auto;
            width: 100%;
        }
        .song-info-box{
            text-align: center;
            h1{
                margin-top: .2rem;
                line-height: .6rem;
                font-size: .25rem;
                font-weight: bold;
            }
            p{
                line-height: .3rem;
                color: #888;
                font-size: .18rem;
                span:before{
                    content: '/';
                }
                span:first-child:before{
                    content: '';
                }
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import slide from './slide'
    import player from './player'
    import lrc from './lrc'
    import {getSongInfo} from '../vuex/getters'
    export default{
        data(){
            return{
                showLrc:false
            }
        },
        components:{
            slide,player,lrc
        },
        vuex:{
            getters:{
                getSongInfo
            }
        },
        methods:{
            changeShow(){
                this.showLrc = !this.showLrc
            }
        }
    }
</script>
