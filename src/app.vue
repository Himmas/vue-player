<template>
    <div>
        <router-view></router-view>
        <audio id="audio"
               :src = "songInfo.mp3Url"
               @timeupdate = "setCurrent"
               @ended = "stop"
               @loadedmetadata = "setDuration"
               :autoplay = "isAutoPlay"
               @canplay = "setCanPlay"
        >
            您的浏览器不支持 audio 标签。
        </audio>
    </div>
    <list v-if="getListStatus"></list>
</template>
<script type="text/ecmascript-6">
    import list from './components/list'
    import store from './vuex/store'
    import {getNowSongId,getListStatus} from './vuex/getters'
    import {setAudio,setCurrentTime,setDuration,setPlayStatusStop,setPlayStatusPause,setPlayStatusPlay,setSongInfo} from './vuex/actions'

    export default{
        store:store,
        components:{
            list
        },
        data(){
            return{
                songInfo:{},
                isAutoPlay:false
            }
        },
        methods:{
            getSongInfo(){
                this.$http.get(window.HOST+'/song?id='+this.getNowSongId).then((response) => {
                    let _result = JSON.parse(response.data).songs[0];
                    console.log(JSON.parse(response.data))
                    this.$set('songInfo', _result)
                    let tempSongInfo = {
                        name: _result.name,
                        artists:[{
                            name:_result.artists[0].name
                        }],
                        album:{
                            picUrl:_result.album.picUrl
                        }
                    };
                    this.setSongInfo(tempSongInfo)
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
            },
            setCanPlay(){
                if(this.isAutoPlay)
                    this.setPlayStatusPlay()
            }
        },
        watch:{
            getNowSongId(){
                this.setPlayStatusStop()
                this.getSongInfo()
                if(this.songInfo.mp3Url)
                    this.isAutoPlay = true
            },
            isAutoPlay(auto){
                if(auto)
                    this.setPlayStatusPlay()
            }
        },
        vuex:{
            getters:{
                getNowSongId,getListStatus
            },
            actions:{
                setAudio,setCurrentTime,setDuration,setPlayStatusStop,setPlayStatusPlay,setPlayStatusPause,setSongInfo
            }
        },
        ready(){
            this.setAudio(document.getElementById("audio"))
            this.getSongInfo()
        }
    }
</script>