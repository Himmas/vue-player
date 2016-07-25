<template>
    <div class="list-box">
        <div class="back" >
            <i class="iconfont icon-back icon-font" v-link="{path:'/'}"></i>
            <div class="search">
                <input class="do-search" placeholder="搜索音乐、歌手、歌词">
                <i class="iconfont icon-search icon-fr" @click="search"></i>
            </div>
        </div>
        <div class="list-items">
            <items></items>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .list-box {
        position: absolute;
        width: 100%;
        height: 100%;
        .back {
            position: absolute;
            width: 100%;
            height: .5rem;
            background: #fff;
            .icon-font{
                font-size:.3rem;
                color:#ee5648;
                margin-left:.1rem;
                line-height: .5rem;
            }
            .search{
                float:right;
                border-bottom: 1px #ee5648 solid;
                width:80%;
                line-height: .4rem;
                margin:.045rem .2rem .045rem 0rem;
                font-size: .17rem;
                .icon-fr{
                    font-size:.2rem;
                    float:right;
                    color:#ee5648;
                    margin-right:.1rem;
                }
                .do-search{
                    text-indent:.1rem;
                }
            }
        }
        .list-items {
            position: absolute;
            top: .5rem;
            bottom: 0;
            width: 100%;
            background: #fff;
        }
    }
</style>
<script type="text/ecmascript-6">
    import items from './items'
    export default{
        components: {
            items
        },
        methods: {
            search:()=>{
                console.log("search")
            }
        }
    }
</script>
