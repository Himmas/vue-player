<template>
    <div class="list-bg">
        <div class="list-box">
            <div class="list-head">
                <span class="left">收藏首页</span>
                <span class="center">播放列表(共29首)</span>
                <span class="right">清空</span>
            </div>
            <div class="list-body">
                <div class="list-item on">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">HEAVEN</span>
                        <span>-</span>
                        <span class="artists">
                            <span>Troye Sivan</span>
                            <span>Betty Who</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete"></i>
                </div>
                <div class="list-item">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">HEAVEN</span>
                        <span>-</span>
                        <span class="artists">
                            <span>Troye Sivan</span>
                            <span>Betty Who</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete"></i>
                </div>
                <div class="list-item">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">HEAVEN</span>
                        <span>-</span>
                        <span class="artists">
                            <span>Troye Sivan</span>
                            <span>Betty Who</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete"></i>
                </div>
                <div class="list-item">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">HEAVEN</span>
                        <span>-</span>
                        <span class="artists">
                            <span>Troye Sivan</span>
                            <span>Betty Who</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete"></i>
                </div>
                <div class="list-item">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">HEAVEN</span>
                        <span>-</span>
                        <span class="artists">
                            <span>Troye Sivan</span>
                            <span>Betty Who</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete"></i>
                </div>
                <div class="list-item">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">HEAVEN</span>
                        <span>-</span>
                        <span class="artists">
                            <span>Troye Sivan</span>
                            <span>Betty Who</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete"></i>
                </div>
                <div class="list-item">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">HEAVEN</span>
                        <span>-</span>
                        <span class="artists">
                            <span>Troye Sivan</span>
                            <span>Betty Who</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete"></i>
                </div>
                <div class="list-item">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">HEAVEN</span>
                        <span>-</span>
                        <span class="artists">
                            <span>Troye Sivan</span>
                            <span>Betty Who</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete"></i>
                </div>
                <div class="list-item">
                    <i class="iconfont icon-trumpet"></i>
                    <span class="song">
                        <span class="name">HEAVEN</span>
                        <span>-</span>
                        <span class="artists">
                            <span>Troye Sivan</span>
                            <span>Betty Who</span>
                        </span>
                    </span>
                    <i class="iconfont icon-delete"></i>
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
        .list-box{
            position: fixed;
            bottom: 0;
            top: auto;
            max-height: 4.6rem;
            background: #f8f8f8;
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
    export default {

    }
</script>
