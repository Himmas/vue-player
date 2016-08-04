<template>
    <div class="playlist-head-bg">
        <div class="head-bg" :style="{'background-image':'url('+playlistInfo.coverImgUrl+'?param=80y80)'}"></div>
    </div>
    <div class="playlist-head">
        <i class="iconfont icon-back" v-link="{path:'/'}"></i>
        <span>歌单</span>
    </div>
    <div class="playlist-body">
        <div class="list-head">
            <div class="bg-img" :style="{'background-image':'url('+playlistInfo.coverImgUrl+'?param=80y80)'}"></div>
            <div class="bg-cov"></div>
            <div class="info-box">
                <img class="info-img" :src="playlistInfo.coverImgUrl+'?param=130y130'" v-if="playlistInfo.coverImgUrl">
                <div class="info">
                    <span class="title">{{playlistInfo.name}}</span>
                    <div class="author-box">
                        <img class="avatar" :src="playlistInfo.creator.avatarUrl+'?param=30y30'"></img>
                        <span class="creator-name">{{playlistInfo.creator.nickname}} ></span>
                    </div>
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
        z-index: -2;
    }
    .playlist-head{
        position: fixed;
        width: 100%;
        height: .5rem;
        overflow: hidden;
        color: #fff;
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
        position: absolute;
        top: 0;left: 0;right: 0;bottom: 0;
        .list-head{
            position: relative;
            width: 100%;
            height: 2.5rem;
            overflow: hidden;
            .info-box{
                position: relative;
                top: .5rem;
                .info-img{
                    position: absolute;
                    left: .2rem;
                    top: .2rem;
                    width: 1.3rem;
                    height: 1.3rem;
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
                        margin-top: .3rem;
                        .avatar{
                            width: .3rem;
                            height: .3rem;
                            border-radius: 50%;
                            background-size: 100%;
                            display: inline-block;
                            vertical-align: middle;
                        }
                        .creator-name{
                            position: relative;
                            line-height: .3rem;
                            display: inline-block;
                            height: .3rem;
                            top: 0;
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
                z-index: -2;
                -webkit-filter: blur(20px);
                transform: scale(1.5);
            }
            .bg-cov {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: -1;
                background-color: rgba(0, 0, 0, 0.25);
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                playlistInfo:{}
            }
        },
        ready(){
            this.getPlayList()
        },
        methods:{
            getPlayList(){
                this.$http.get(`${window.HOST}/playlist?id=69188576`).then((response) => {
                    this.$set('playlistInfo', JSON.parse(response.data).result)
                    console.log(1);
                }, (response) => {
                    // error callback
                });
            }
        }
    }
</script>