<template>
    <div class="items">
        <ul>
            <li v-for="item in items" >
                <div class="item" :class="isPlay">
                    <img :src="item.url">
                    <span>
                        <p class="song">{{ item.name}}</p>
                        <p class="singer">{{ item.singer }}</p>
                    </span>
                    <div class="ibtn" @click="play">
                        <i class="iconfont icon-play-line icon-size"></i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
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
        span{
            float:left;
            margin-left:.1rem;
            padding:.08rem;
            .song{
                line-height:0.26rem;
                font-size:.2rem;
                color:#646464;
            }
            .singer{
                line-height:0.18rem;
                color:#929292;
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
    export default{
        data(){
            return {
                isPlay : {
                    'play': false
                }
            }
        },
        methods : {
            play(){
                console.log("this is playing")
            }
        },
        vuex : {
            getters : {
                getSearchData
            }
        },
        computed : {
            items(){
                console.log("computed items")
                console.log(this.getSearchData)
                console.log(this.getSearchData.songs)

                return this.getSearchData.songs
            }
        }
    }
</script>
