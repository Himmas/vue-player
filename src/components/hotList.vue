<template>
    <div class="hotList">
        <banner></banner>
        <div class="shop">
            <div class="block fl">
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
            <div class="block fr">
                <div class="iconborder">
                    <i class="iconfont icon-myPlayList"></i>
                </div>
                <p>我的歌单</p>
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
            line-height:.6rem;
            color:#ee5648;
        }
        .fr{
            float:right;
        }
        .fl{
            float:left;
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
