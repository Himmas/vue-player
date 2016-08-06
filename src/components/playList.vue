<template>
    <div class="playlist-head-bg">
        <div class="head-bg-under"></div>
        <div class="head-bg" :style="{'background-image':'url('+playlistInfo.coverImgUrl+'?param=80y80)'}"></div>
        <div class="playlist-head">
            <i class="iconfont icon-back" v-link="{path:'/'}"></i>
            <span>歌单</span>
        </div>
    </div>
    <div class="playlist-body">
        <div class="playlist-head">
            <i class="iconfont icon-back" v-link="{path:'/'}"></i>
            <span>歌单</span>
        </div>
        <div class="list-head">
            <div class="bg-img" :style="{'background-image':'url('+playlistInfo.coverImgUrl+'?param=80y80)'}"></div>
            <div class="bg-cov"></div>
            <div class="info-box">
                <div class="img-box">
                    <img class="info-img" :src="playlistInfo.coverImgUrl+'?param=130y130'" v-if="playlistInfo.coverImgUrl">
                    <div class="banner"><i class="iconfont icon-listen"></i>{{playlistInfo.playCount}}</div>
                </div>
                <div class="info">
                    <span class="title">{{playlistInfo.name}}</span>
                    <div class="author-box" v-if="playlistInfo.creator">
                        <img class="avatar" :src="playlistInfo.creator.avatarUrl+'?param=30y30'"></img>
                        <span class="creator-name">{{playlistInfo.creator.nickname}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-body">
            <div class="list-body-head">
                <i class="iconfont icon-play-line left-btn"></i>
                <div class="playlist-title">播放全部<span class="total">(共{{playlistInfo.tracks.length}}首)</span></div>
            </div>
            <div class="playlist">
                <div class="playlist-item" v-for="item in playlistInfo.tracks" @click="play(item.id)">
                    <i class="iconfont icon-trumpet left-btn" v-if="getNowSongId == item.id"></i>
                    <div class="playlist-num" v-if="getNowSongId != item.id">{{$index+1}}</div>
                    <div class="info-box">
                        <p class="title">{{item.name}}<span v-if="item.alias.length">({{item.alias}})</span></p>
                        <p class="info">
                            <span class="artist" v-for="art in item.artists">{{art.name}}</span>
                            <span>-</span>
                            <span class="album">{{item.album.name}}</span>
                        </p>
                    </div>
                    <i class="iconfont icon-plus right-btn"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .playlist-head-bg{
        position: fixed;
        width: 100%;
        height: .5rem;
        overflow: hidden;
        color: #fff;
        z-index: 1;
        .head-bg{
            position: absolute;
            background-size: cover;
            background-position: center;
            -webkit-filter: blur(20px);
            transform: scale(1.5);
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .head-bg-under{
            position: absolute;
            background: #000;
            width: 100%;
            height: 100%;
        }
    }
    .playlist-head{
        position: fixed;
        width: 100%;
        height: .5rem;
        overflow: hidden;
        color: #fff;
        z-index: 1;
        i{
            position: relative;
            font-size: .3rem;
            line-height: .5rem;
        }
        .icon-back{
            color: #fff;
            margin-left: .1rem;
        }
        span{
            position: relative;
            line-height: .5rem;
            font-size: .2rem;
            margin-left: .15rem;
        }
    }
    .playlist-body{
        .playlist-head{
            position: absolute;
            z-index:3;
        }
        .list-head{
            position: relative;
            width: 100%;
            height: 2.5rem;
            overflow: hidden;
            z-index:2;
            .info-box{
                position: relative;
                top: .5rem;
                .img-box{
                    position: absolute;
                    left: .2rem;
                    top: .2rem;
                    width: 1.3rem;
                    height: 1.3rem;
                    .info-img{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                    }
                    .banner{
                        position: absolute;
                        width: 100%;
                        height: .2rem;
                        color: #fff;
                        text-align: right;
                        font-size: .12rem;
                        line-height: .2rem;
                        padding: 0 .1rem;
                        box-sizing: border-box;
                        font-weight: 100;
                        background:-webkit-gradient(linear, 100% 0%, 30% 0%,from(rgba(0, 0, 0, 0.5)), to(transparent));/*谷歌*/
                        i{
                            font-weight: 100;
                            font-size: .12rem;
                            line-height: .2rem;
                            margin-right: .05rem;
                        }
                    }
                }
                .info{
                    position: absolute;
                    left: 1.7rem;
                    right:.2rem;
                    top: .2rem;
                    color: #fff;
                    .title{
                        font-size: .18rem;
                        line-height: .3rem;
                    }
                    .author-box{
                        position: relative;
                        margin-top: .3rem;
                        font-weight: 100;
                        .avatar{
                            width: .3rem;
                            height: .3rem;
                            border-radius: 50%;
                            background-size: 100%;
                            display: inline-block;
                            vertical-align: middle;
                        }
                        .creator-name{
                            position: absolute;
                            line-height: .3rem;
                            display: inline-block;
                            height: .3rem;
                            top: 0;
                            left: .4rem;
                        }
                    }
                }
            }
            .bg-img {
                position: absolute;
                width: 100%;
                height: 100%;
                border: none;
                background-size: cover;
                background-position: center;
                -webkit-filter: blur(20px);
                transform: scale(1.5);
            }
            .bg-cov {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.25);
            }
        }
        .list-body{
            position: relative;
            .list-body-head{
                height: .5rem;
                border-bottom: 1px solid #eee;
                overflow: hidden;
                position: relative;
                display: flex;
                i.left-btn{
                    width: .5rem;
                    height: .5rem;
                    line-height: .5rem;
                    position: relative;
                    top: 0;
                    text-align: center;
                    color: #ee5648;
                }
                .playlist-title{
                    flex: 1;
                    line-height: .5rem;
                    font-size: .16rem;
                    .total{
                        color: #888;
                        font-size: .14rem;
                        padding: 0 2px;
                        font-weight: 200;
                    }
                }
            }
            .playlist{
                position: relative;
                .playlist-item{
                    height: .5rem;
                    width: 100%;
                    position: relative;
                    display: flex;
                    i.left-btn{
                        width: .5rem;
                        height: .5rem;
                        line-height: .5rem;
                        position: relative;
                        top: 0;
                        text-align: center;
                        color: #ee5648;
                    }
                    .playlist-num{
                        width: .5rem;
                        height: .5rem;
                        line-height: .5rem;
                        position: relative;
                        top: 0;
                        text-align: center;
                        color: #888;
                    }
                    .info-box{
                        flex: 1;
                        font-size: .16rem;
                        border-bottom: 1px solid #eee;
                        padding: .05rem;
                        box-sizing: border-box;
                        overflow: hidden;
                        p.title{
                            line-height: .25rem;
                            white-space: nowrap;
                            span{
                                color: #888;
                                padding:0 5px;
                                font-weight: 200;
                            }
                        }
                        p.info{
                            line-height: .15rem;
                            font-size: .12rem;
                            color: #888;
                            font-weight: 200;
                            white-space: nowrap;
                            .artist:first-child:after{
                                content: '/';
                            }
                            .artist:first-child:after{
                                content: '';
                            }
                        }
                    }
                    i.right-btn{
                        width: .5rem;
                        height: .5rem;
                        line-height: .5rem;
                        position: relative;
                        top: 0;
                        font-size: .2rem;
                        text-align: center;
                        color: #999;
                        box-sizing: border-box;
                        border-bottom: 1px solid #eee;
                    }
                }
            }

        }
    }
</style>
<script type="text/ecmascript-6">
    import {setSongId} from '../vuex/actions'
    import {getNowSongId} from '../vuex/getters'
    export default{
        data(){
            return{
                playlistInfo:{},
                id:436803847
//                id:69188576
            }
        },
        vuex : {
            getters : {
                getNowSongId
            },
            actions: {
                setSongId
            }
        },
        ready(){
            this.getPlayList()
        },
        methods:{
            getPlayList(){
                this.$http.get(`${window.HOST}/playlist?id=${this.id}`).then((response) => {
                    this.$set('playlistInfo', JSON.parse(response.data).result)
                }, (response) => {
                    // error callback
                })
            },
            play(id){
                this.setSongId(id)
            }
        }
    }
</script>