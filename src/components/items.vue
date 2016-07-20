<template>
    <div class="items">
        <ul>
            <li v-for="item in items" >
                <div class="item" :class="isPlay">
                    <img src="{{ item.url }}">
                    <span><p>{{ item.name}}</p><p>{{ item.singer }}</p></span>
                    <div class="ibtn" @click="play">
                        <i class="iconfont icon-play"></i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<link href="../assets/css/icon.less" type="text/css" />
<style rel="stylesheet/less" lang="less">
    .item{
        position: relative;
        //height: .8rem;
        border-bottom:.001rem #e8e4e4 solid;
        width: 100%;
        img{
            position: relative;
            left:.1rem;
            top:.1rem;
            bottom: .1rem;
            height: .56rem;
            width: .56rem;
            border:.02rem #f7fafc solid;
            border-radius:50%;
        }
        span{
            position:relative;
            left:0.3rem;
            display: inline-block;
            height: .56rem;
        }
        .ibtn{
            position: absolute;
            right: 0.1rem;
            top: .3rem;
        }
    }
</style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                items : [
                    {
                        url:'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
                        name:'bang bang bang',
                        singer:'bigBang'
                    },
                    {
                        url:'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
                        name:'if youo',
                        singer:'bigBang'
                    }
                ],
                isPlay : {
                    'play': false
                }
            }
        },
        methods : {
            play(){
                console.log("this is playing")
            }
        }
    }
</script>
