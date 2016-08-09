<template>
    <div class="hotList">
        <banner></banner>
        <div class="shop">
            <div class="block fl ml">
                <div class="iconborder">
                    <i class="iconfont icon-fm"></i>
                </div>
                <p>私人FM</p>
            </div>
            <div class="block">
                <div class="iconborder">
                    <i class="iconfont icon-5"></i>
                </div>
                <p>每日推荐</p>
            </div>
            <div class="block fr mr">
                <div class="iconborder">
                    <i class="iconfont icon-myPlayList"></i>
                </div>
                <p>我的歌单</p>
            </div>
        </div>
        <div class="hot">
            <div class="column">
                <i class="iconfont icon-hot"></i>
                <h1>热门歌单</h1>
                <div class="more">
                    更多
                </div>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .hotList{
        position:relative;
        top:.5rem;
    }
    .shop{
        position:relative;
        height:.6rem;
        text-align: center;
        margin-top: .1rem;
        margin-bottom: .3rem;
        .block{
            display: inline-block;
        }
        .iconborder{
            width:.6rem;
            height:.6rem;
            border:2px solid #ee5648;
            border-radius: 50%;
        }
        .iconfont{
            line-height:.56rem;
            color:#ee5648;
        }
        .fr{
            float:right;
        }
        .mr{
            margin-right:.4rem;
        }
        .fl{
            float:left;
        }
        .ml{
            margin-left:.4rem;
        }
    }
    .hot{
        border-top:1px solid #eee;
        padding:.06rem;
        .column{
            position:relative;
            height:.4rem;
            .iconfont{
                color:#ee5648;
            }
            h1{
                display:inline-block;
            }
            .more{
                color:#888;
                display:inline-block;
                float:right;
                line-height:.4rem;
            }
        }
    }

</style>
<script type="text/ecmascript-6">
    import banner from './banner'
    export default{
        components:{
            banner
        }
    }
</script>
