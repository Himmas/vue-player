<template>
    <div class="slide-box">
        <div class="slide-item">
            <img :src="getSongInfo.album.picUrl">
            <div class="cover"></div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .slide-box {
        color: #fff;
        margin-top: .5rem;
        .slide-item{
            text-align: center;
            width: 80%;
            left: 10%;
            position: relative;
            font-size: 0;
            border-radius: 5px;
            overflow: hidden;
            background: #ff5c4e;
            img{
                width: 100%;
                opacity: 1;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import {getSongInfo} from '../vuex/getters'
    export default{
        vuex:{
            getters:{
                getSongInfo
            }
        }
    }
</script>