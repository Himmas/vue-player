<template>
    <div @mousemove = "dragDur"
         @mouseup = "dragEnd"
         @touchmove = "dragDur"
         @touchend = "dragEnd"
    >
        <div class="play-bar-box">
            <div class="now-time">{{getCurrentTime | formatTime 'notHasHour'}}</div>
            <div class="play-bar"
                 id="play_bar"
                 @click = "changePlayTime">
                <div class="bar-box">
                    <div class="now-bar" :style="{'width':getCurrentTime/getDuration*100+'%'}"></div>
                </div>
                <div class="btn-circle"
                     @mousedown = "dragStart"
                     @touchstart = "dragStart"
                     :style="{'left':getCurrentTime/getDuration*100+'%'}"
                ></div>
            </div>
            <div class="all-time">{{getDuration | formatTime 'notHasHour'}}</div>
        </div>
        <div class="btn-box">
            <div class="btn-item random-btn">
                <i class="iconfont icon-random"></i>
            </div>
            <div class="btn-item prev-btn">
                <i class="iconfont icon-prev" @click="turnTo(getNowIndex-1)"></i>
            </div>
            <div class="play-btn" @click="play">
                <i class="iconfont" :class="{'icon-pause':getSongStatus.status==1,'icon-play':getSongStatus.status!=1}"></i>
            </div>
            <div class="btn-item next-btn" @click="turnTo(getNowIndex+1)">
                <i class="iconfont icon-next"></i>
            </div>
            <div class="btn-item loop-btn">
                <i class="iconfont icon-loop"></i>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .play-bar-box{
        position: absolute;
        width: 100%;
        height: 30px;
        top:5px;
        display: flex;
        /*background: #00d4b4;*/
        align-items: center;
        .play-bar{
            position: relative;
            width: 70%;
            height: 6px;
            .bar-box{
                position: absolute;
                width: 100%;
                height: 100%;
                background: #eeeeee;
                border-radius: 5px;
                overflow: hidden;
                .now-bar{
                    position: absolute;
                    /*width: 50%;*/
                    height: 100%;
                    background: #ee5648;
                }
            }
            .btn-circle{
                position: absolute;
                top:-5px;
                border-radius: 50%;
                /*left:0%;*/
                width: 16px;
                transform: translateX(-8px);
                height: 16px;
                background: #fff;
                border: 1px solid #faf5ed;
            }
        }
        .now-time,.all-time{
            flex: 1;
            text-align: center;
            color: #7f7f7f;
        }
    }
    .btn-box{
        position: absolute;
        top: 35px;
        width: 100%;
        bottom: 0;
        display: flex;
        align-items: center;
        .btn-item{
            flex: 1;
            color: #f3a99f;
            i{
                font-size: .25rem;
            }
        }
        .btn-item:hover{
            color: #ee5648;
        }
        .play-btn{
            color: #ee5648;
            width: 1.2rem;
            text-align: center;
            i{
                font-size: .7rem;
                position: relative;
                transition-duration: 1s;
            }
            .icon-pause{
                top: -.065rem;
            }
        }
        .random-btn,.loop-btn{
            text-align: center;
        }
        .prev-btn{
            text-align: right;
        }
        .next-btn{
            text-align: left;
        }
    }
</style>
<script type="text/ecmascript-6">
    import {getSongStatus,getAudio,getCurrentTime,getDuration,getNowIndex} from '../vuex/getters'
    import {setPlayStatusPlay,setPlayStatusPause,setCurrentTime,turnTo} from '../vuex/actions'
    export default{
        data(){
            return{
                isDrag:false

            }
        },
        ready(){
            this.playBarPosLeft = document.getElementById("play_bar").getBoundingClientRect().left;
            //todo:resize窗口时距离窗口左边的值
            this.barWidth = document.getElementById("play_bar").offsetWidth;
        },
        vuex:{
            getters:{
                getSongStatus,getAudio,getCurrentTime,getDuration,getNowIndex
            },
            actions:{
                setPlayStatusPlay,setPlayStatusPause,setCurrentTime,turnTo
            }
        },
        methods:{
            play(){
                if(this.getSongStatus.status == 1){
                    this.getAudio.pause()
                    this.setPlayStatusPause()
                }
                else{
                    this.getAudio.play()
                    this.setPlayStatusPlay()
                }
            },
            dragStart(){
                this.isDrag = true;
                if(this.getSongStatus.status == 1)
                    this.setPlayStatusPause()
            },
            dragDur(event){
                if(this.isDrag == false) return
                let e = event || window.event
                if (e.type === 'touchmove'){
//                    手机端触屏事件
                    if(e.targetTouches[0].clientX >= this.playBarPosLeft && e.targetTouches[0].clientX <= this.playBarPosLeft+this.barWidth){
                        let timeWidth = e.targetTouches[0].clientX - this.playBarPosLeft
                        console.log(e.targetTouches[0].clientX)
                        this.setCurrentTime(timeWidth/this.barWidth*this.getDuration)
                    }
                    else {
                        this.dragEnd();
                    }
                }
                else if(e.clientX >= this.playBarPosLeft && e.clientX <= this.playBarPosLeft+this.barWidth){
                    let timeWidth = e.clientX - this.playBarPosLeft
                    this.setCurrentTime(timeWidth/this.barWidth*this.getDuration)
                }
                else{
                    this.dragEnd();
                }
            },
            dragEnd(event){
                if(this.isDrag){
                    this.isDrag = false;
                    this.setPlayStatusPlay()
                }
            },
            changePlayTime(event){
                let e = event || window.event
                let timeWidth = e.clientX - this.playBarPosLeft
                this.setCurrentTime(timeWidth/this.barWidth*this.getDuration)
            }
        }
    }
</script>