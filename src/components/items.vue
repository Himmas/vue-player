<template>
    <ul class="items">
        <li v-for="item in searchItems" class="item" :class="isPlay">
            <img :src="item.album.picUrl">
            <div class="artist">
                <p class="song">{{ item.name}}</p>
                <p class="singer">{{ item.artists[0].name }}</p>
            </div>
            <div class="ibtn" @click="play(item.id)">
                <i class="iconfont icon-play-line icon-size"></i>
            </div>
        </li>
    </ul>
</template>
<style rel="stylesheet/less" lang="less">
    .item{
        position: relative;
        border-bottom:1px #e8e4e4 solid;
        width: 100%;
        padding:.1rem;
        overflow:hidden;
        img{
            height: .56rem;
            width: .56rem;
            border:.02rem #f7fafc solid;
            border-radius:50%;
            float:left;
        }
        .artist{
            position:absolute;
            left:.66rem;
            right:.4rem;
            padding:.08rem;
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
        .ibtn{
            float:right;
            .icon-size{
                line-height:.6rem;
                font-size:.22rem;
                color: #ececec;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import {getSearchData} from '../vuex/getters'
    import {setSongId} from '../vuex/actions'
    export default{
        data(){
            return {
                isPlay : {
                    'play': false
                }
            }
        },
        methods : {
            play(id){
                this.setSongId(id)
                router.go({path:'/'})
            }
        },
        vuex : {
            getters : {
                getSearchData
            },
            actions: {
                setSongId
            }
        },
        computed : {
            searchItems(){
                return this.getSearchData.result.songs
            }
        }
    }
</script>
