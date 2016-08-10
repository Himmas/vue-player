<template>
    <div class="list-bg"
         @click="setListClose"
         @touchmove="stopDefault"
    >
        <div class="list-out-box" @click.stop="">
            <div class="list-head">
                <span class="left">收藏首页</span>
                <span class="center">播放列表(共{{getPlayList.length}}首)</span>
                <span class="right" @click="listEmpty()">清空</span>
            </div>
            <div class="list-body"
                 @touchmove.stop="scroll">
                <div class="list-item"
                     @click.stop="setSongInfo(item)"
                     :class="{on:item.id == getNowSongId}"
                     v-for="item in getPlayList">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">{{item.name}}</span>
                        <span>-</span>
                        <span class="artists">
                            <span v-for="i in item.artists">{{i.name}}</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete" @click="deleteSong($index)"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .list-bg{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 20;
        .list-out-box{
            position: fixed;
            bottom: 0;
            top: auto;
            max-height: 4.6rem;
            background: #f8f8f8;
            width: 100%;
            .list-head{
                height: .6rem;
                box-sizing: border-box;
                width: 100%;
                border-bottom: 1px solid #eee;
                line-height: .6rem;
                display: flex;
                .left,.right{
                    color: #888;
                    display: inline-block;
                    width: .8rem;
                    height: 100%;
                    text-align: center;
                }
                .center{
                    flex: 1;
                    color: #333;
                    text-align: center;
                    font-size: .16rem;
                }
            }
            .list-body{
                max-height: 4rem;
                overflow: auto;
                margin-left: .1rem;
                .list-item{
                    position: relative;
                    height: .5rem;
                    border-bottom: 1px solid #eee;
                    line-height: .5rem;
                    display: flex;
                    .icon-trumpet{
                        color: #ee5648;
                        width: .35rem;
                        display: none;
                    }
                    .song{
                        font-size: .16rem;
                        line-height: .5rem;
                        top: 0;
                        flex: 1;
                        .artists{
                            font-size: .12rem;
                            font-weight: 200;
                            color: #888;
                            span:first-child:before{
                                content: '';
                            }
                            span:before{
                                content: '/';
                            }
                        }
                    }
                    .icon-delete{
                        color: #888;
                        padding: 0 .1rem;
                        font-size: .18rem;
                    }
                }
                .list-item.on{
                    .icon-trumpet{
                        display: inline-block;
                    }
                    .song{
                        color: #ee5648;
                        .artists{
                            color: #ee5648;
                        }
                    }
                }
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import {getPlayList,getNowSongId} from '../vuex/getters'
    import {setListClose,setSongInfo,deleteSong,listEmpty} from '../vuex/actions'
    export default {
        vuex:{
            actions:{
                setListClose,setSongInfo,deleteSong,listEmpty
            },
            getters:{
                getPlayList,getNowSongId
            }
        },
        methods:{
            stopDefault(event){
                event = event || window.event
                event.preventDefault()
            },
            scroll(event){
                event = event || window.event
                event.stopPropagation()
//                event.preventDefault()
            }
        }
    }
</script>
