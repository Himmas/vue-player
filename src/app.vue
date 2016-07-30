<template>
    <div>
        <router-view></router-view>
        <audio id="audio"
               :src = "songInfo.mp3Url"
               @timeupdate = "setCurrent"
               @ended = "stop"
               @loadedmetadata = "setDuration"
               :autoplay = "isAutoPlay"
        >
            您的浏览器不支持 audio 标签。
        </audio>
    </div>
</template>
<script type="text/ecmascript-6">
    import store from './vuex/store'
    import {getNowSongId} from './vuex/getters'
    import {setAudio,setCurrentTime,setDuration,setPlayStatusStop,setPlayStatusPlay} from './vuex/actions'

    export default{
        store:store,
        data(){
            return{
                songInfo:{},
                isAutoPlay:false
            }
        },
        methods:{
            getSongInfo(){
                this.$http.get(window.HOST+'/song?id='+this.getNowSongId).then((response) => {
                    this.$set('songInfo', JSON.parse(response.data).songs[0])
                }, (response) => {
                    // error callback
                });
            },
            stop(){
                this.setPlayStatusStop()
                this.setCurrentTime(0)
            },
            setCurrent(){
                this.setCurrentTime()
            }
        },
        watch:{
            getNowSongId(){
                this.setCurrentTime(0)
                this.setPlayStatusStop()
                this.getSongInfo()
                this.isAutoPlay = true
            },
            isAutoPlay(auto){
                if(auto)
                    this.setPlayStatusPlay()
            }
        },
        vuex:{
            getters:{
                getNowSongId
            },
            actions:{
                setAudio,setCurrentTime,setDuration,setPlayStatusStop,setPlayStatusPlay
            }
        },
        ready(){
            this.setAudio(document.getElementById("audio"))
            this.getSongInfo()
        }
    }
</script>