<template>
    <div class="play_box"
         @mousemove = "dragDur"
         @mouseup = "dragEnd"
         @touchmove = "dragDur"
         @touchend = "dragEnd"
            >
        <audio id="audio"
               @loadedmetadata = "getDuration"
               @progress = "getBufferedTime"
               @timeupdate = "getCurrentTime"
               @ended = "stop"
               @canplay = "canplay"
               src="http://7xs1hq.com1.z0.glb.clouddn.com/audio.mp3">
            您的浏览器不支持 audio 标签。
        </audio>
        <div class="music_box">
            <div class="play_btn" :class="{on:isPlay}" @click="play"></div>
            <div class="play_info_box">
                <label class="play_name">{{name}}</label>
                <label class="play_info_playTiem"><span>{{currentTime | formatTime 'notHasHour'}}</span><span>/</span><span>{{duration | formatTime 'notHasHour'}}</span></label>
                <div class="play_time_bar"
                     @click = "changePlayTime"
                        >
                    <div class="play_bar play_duration_bar" id="play_bar"></div>
                    <div class="play_bar play_buffer_bar" :style="{'width':bufferedTime/duration*100+'%'}"></div>
                    <div class="play_bar play_cur_bar" :style="{'width':currentTime/duration*100+'%'}"></div>
                    <div class="play_circle_btn"
                         @mousedown = "dragStart"
                         @touchstart = "dragStart"
                         :style="{'left':currentTime/duration*100+'%'}">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                name:'音频哦',
                isPlay:false,
                isTimeShow:true,//是否显示时长
                isDrag:false,
                audio:null,
                duration:0,
                currentTime:0,
                bufferedTime:0,
                playBarPosLeft:0,
                barWidth:0,
                btnWidth:15//按钮直径
            }
        },
        methods:{
            play(){
                this.isPlay = !this.isPlay;
                if(this.isPlay){
                    this.audio.play();
                }
                else{
                    this.audio.pause();
                }
            },
            stop(){
                if(this.isPlay){
                    this.isPlay = false;
                }
            },
            changePlayTime(event){
                let e = event || window.event;
                let timeWidth = e.clientX - this.playBarPosLeft;
                this.currentTime = timeWidth/this.barWidth*this.duration;
                this.audio.currentTime = this.currentTime;
            },
            canplay(){
                setInterval(this.getBufferedTime.bind(this), 5000);
            },
            getCurrentTime(){
                this.currentTime = this.audio.currentTime;
            },
            getBufferedTime(){
                if(this.duration<=0) return;
                let bufStartTime = this.audio.buffered.start(0);
                let bufEndTime = this.audio.buffered.end(0);
                this.bufferedTime = bufEndTime - bufStartTime;
            },
            getDuration(){
                this.duration = this.audio.duration;
            },
            dragStart(event){
                this.isDrag = true;
                if(this.isPlay){
                    this.isPlay = false;
                    this.audio.pause();
                }
            },
            dragDur(event){
                if(this.isDrag == false) return;
                let e = event || window.event;
                if (e.type === 'touchmove'){
//                    手机端触屏事件
                    if(e.targetTouches[0].clientX >= this.playBarPosLeft && e.targetTouches[0].clientX <= this.playBarPosLeft+this.barWidth){
                        let timeWidth = e.targetTouches[0].clientX - this.playBarPosLeft;
                        this.currentTime = timeWidth/this.barWidth*this.duration;
                    }
                    else {
                        this.dragEnd();
                    }
                }
                else if(e.clientX >= this.playBarPosLeft && e.clientX <= this.playBarPosLeft+this.barWidth){
                    let timeWidth = e.clientX - this.playBarPosLeft;
                    this.currentTime = timeWidth/this.barWidth*this.duration;
                }
                else{
                    this.dragEnd();
                }
            },
            dragEnd(event){
                if(this.isDrag){
                    this.isDrag = false;
                    this.isPlay = true;
                    this.audio.play();
                    this.audio.currentTime = this.currentTime;
                }
            }
        },
        ready(){

            this.audio = document.getElementById("audio");
            this.playBarPosLeft = document.getElementById("play_bar").getBoundingClientRect().left;
            //todo:resize窗口时距离窗口左边的值
            this.barWidth = document.getElementById("play_bar").offsetWidth;
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    @-webkit-keyframes circle{
        0%{ transform:rotate(0deg); }
        100%{ transform:rotate(360deg); }
    }
    .play_time_bar{
        position: relative;
        margin-top: 13px;
        width: 330px;
        height: 20px;
    }
    .play_bar{
        height: 5px;
        top: 0;bottom: 0;
        position: absolute;
        margin: auto;
        border-radius: 5px;
    }
    .play_duration_bar{
        width: 100%;
        border: 1px solid #e9e7e8;
        z-index: 1;
    }
    .play_buffer_bar{
        background-color: #e9e7e8;
        z-index: 2;
        cursor: pointer;
    }
    .play_cur_bar{
        background-color: #ee5245;
        border: 1px solid #ee5245;
        z-index: 3;
        cursor: pointer;
    }
    .play_circle_btn{
        width: 14px;
        height: 14px;
        top: 0;bottom: 0;
        position: absolute;
        margin: auto;
        border-radius: 50%;
        background-color: #fff;
        z-index: 4;
        border: 1px solid #ffe6e4;
        cursor: pointer;
        margin-left: -7px;
    }
    .music_box{
        width: 400px;
        height: 200px;
    }
    .play_box{
        position: absolute;
        width: 400px;
        height: 400px;
        top: 0;left: 0;right: 0;bottom: 0;
        margin: auto;
    }
    .play_btn{
        float: left;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        background-image: url(http://7xs1hq.com1.z0.glb.clouddn.com/play.gif);
        background-size: contain;
        background-repeat: no-repeat;
    }
    .play_info_box{
        margin-left: 70px;
    }
    .play_info_box label{
        font-size: 12px;
    }
    .play_info_playTiem{
        float: right;
    }
    .on{
        background-image: url(http://7xs1hq.com1.z0.glb.clouddn.com/stop.gif);
        -webkit-animation:circle 10s infinite linear;
        animation:circle 10s infinite linear;
    }
</style>
