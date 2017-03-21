/**
 * Created by lijie on 16/7/25.
 */
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
    songStatus:{
        status:0,//0停止 1播放 2暂停
        currentTime:0,
        duration:0
    },
    audio:null,
    searchData:{
        result:{
            songs:[]
        }
    },
    songInfo: {
        "starred": false,
        "popularity": 100,
        "starredNum": 0,
        "playedNum": 0,
        "dayPlays": 0,
        "hearTime": 0,
        "mp3Url": "http://m2.music.126.net/yyZvZaGIUeEm2rzJSIRFyg==/3246857840315426.mp3",
        "rtUrls": [],
        "alias": [],
        "audition": null,
        "no": 7,
        "hMusic": {
            "bitrate": 320000,
            "sr": 44100,
            "dfsId": 3246857840315424,
            "playTime": 251533,
            "volumeDelta": -0.000265076,
            "name": null,
            "id": 116793637,
            "size": 10064500,
            "extension": "mp3"
        },
        "mMusic": {
            "bitrate": 160000,
            "sr": 44100,
            "dfsId": 3246857840315425,
            "playTime": 251533,
            "volumeDelta": -0.000265076,
            "name": null,
            "id": 116793638,
            "size": 5032272,
            "extension": "mp3"
        },
        "lMusic": {
            "bitrate": 96000,
            "sr": 44100,
            "dfsId": 3246857840315426,
            "playTime": 251533,
            "volumeDelta": -0.000265076,
            "name": null,
            "id": 116793639,
            "size": 3019381,
            "extension": "mp3"
        },
        "copyrightId": 1008,
        "artists": [
            {
                "img1v1Id": 0,
                "alias": [],
                "picId": 0,
                "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                "musicSize": 0,
                "albumSize": 0,
                "img1v1Url": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                "trans": "",
                "briefDesc": "",
                "name": "张靓颖",
                "id": 10561
            }
        ],
        "album": {
            "songs": [],
            "paid": false,
            "onSale": false,
            "alias": [],
            "copyrightId": 1008,
            "artists": [
                {
                    "img1v1Id": 0,
                    "alias": [],
                    "picId": 0,
                    "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "musicSize": 0,
                    "albumSize": 0,
                    "img1v1Url": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "trans": "",
                    "briefDesc": "",
                    "name": "张靓颖",
                    "id": 10561
                }
            ],
            "artist": {
                "img1v1Id": 0,
                "alias": [],
                "picId": 0,
                "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                "musicSize": 0,
                "albumSize": 0,
                "img1v1Url": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                "trans": "",
                "briefDesc": "",
                "name": "",
                "id": 0
            },
            "picId": 63771674428031,
            "picUrl": "http://p4.music.126.net/H4OQhykaN5jmIao40mTXiA==/63771674428031.jpg",
            "commentThreadId": "R_AL_3_32381",
            "publishTime": 1159632000000,
            "company": "华谊兄弟",
            "briefDesc": "",
            "status": 3,
            "description": "",
            "subType": null,
            "tags": "",
            "blurPicUrl": "http://p4.music.126.net/H4OQhykaN5jmIao40mTXiA==/63771674428031.jpg",
            "pic": 63771674428031,
            "companyId": 0,
            "name": "The One",
            "id": 32381,
            "type": "专辑",
            "size": 10
        },
        "commentThreadId": "R_SO_4_327233",
        "mvid": 0,
        "ftype": 0,
        "rtype": 0,
        "rurl": null,
        "copyFrom": "",
        "score": 100,
        "fee": 8,
        "position": 7,
        "duration": 251533,
        "ringtone": "",
        "disc": "",
        "status": 1,
        "crbt": null,
        "rtUrl": null,
        "bMusic": {
            "bitrate": 96000,
            "sr": 44100,
            "dfsId": 3246857840315426,
            "playTime": 251533,
            "volumeDelta": -0.000265076,
            "name": null,
            "id": 116793639,
            "size": 3019381,
            "extension": "mp3"
        },
        "name": "想你,零点零一分",
        "id": 327233
    },
    listStatus:false,
    nowIndex:0,//当前播放歌曲在列表中的索引
    playList:[ {
        "starred": false,
        "popularity": 100,
        "starredNum": 0,
        "playedNum": 0,
        "dayPlays": 0,
        "hearTime": 0,
        "mp3Url": "http://m2.music.126.net/yyZvZaGIUeEm2rzJSIRFyg==/3246857840315426.mp3",
        "rtUrls": [],
        "alias": [],
        "audition": null,
        "no": 7,
        "hMusic": {
            "bitrate": 320000,
            "sr": 44100,
            "dfsId": 3246857840315424,
            "playTime": 251533,
            "volumeDelta": -0.000265076,
            "name": null,
            "id": 116793637,
            "size": 10064500,
            "extension": "mp3"
        },
        "mMusic": {
            "bitrate": 160000,
            "sr": 44100,
            "dfsId": 3246857840315425,
            "playTime": 251533,
            "volumeDelta": -0.000265076,
            "name": null,
            "id": 116793638,
            "size": 5032272,
            "extension": "mp3"
        },
        "lMusic": {
            "bitrate": 96000,
            "sr": 44100,
            "dfsId": 3246857840315426,
            "playTime": 251533,
            "volumeDelta": -0.000265076,
            "name": null,
            "id": 116793639,
            "size": 3019381,
            "extension": "mp3"
        },
        "copyrightId": 1008,
        "artists": [
            {
                "img1v1Id": 0,
                "alias": [],
                "picId": 0,
                "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                "musicSize": 0,
                "albumSize": 0,
                "img1v1Url": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                "trans": "",
                "briefDesc": "",
                "name": "张靓颖",
                "id": 10561
            }
        ],
        "album": {
            "songs": [],
            "paid": false,
            "onSale": false,
            "alias": [],
            "copyrightId": 1008,
            "artists": [
                {
                    "img1v1Id": 0,
                    "alias": [],
                    "picId": 0,
                    "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "musicSize": 0,
                    "albumSize": 0,
                    "img1v1Url": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "trans": "",
                    "briefDesc": "",
                    "name": "张靓颖",
                    "id": 10561
                }
            ],
            "artist": {
                "img1v1Id": 0,
                "alias": [],
                "picId": 0,
                "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                "musicSize": 0,
                "albumSize": 0,
                "img1v1Url": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                "trans": "",
                "briefDesc": "",
                "name": "",
                "id": 0
            },
            "picId": 63771674428031,
            "picUrl": "http://p4.music.126.net/H4OQhykaN5jmIao40mTXiA==/63771674428031.jpg",
            "commentThreadId": "R_AL_3_32381",
            "publishTime": 1159632000000,
            "company": "华谊兄弟",
            "briefDesc": "",
            "status": 3,
            "description": "",
            "subType": null,
            "tags": "",
            "blurPicUrl": "http://p4.music.126.net/H4OQhykaN5jmIao40mTXiA==/63771674428031.jpg",
            "pic": 63771674428031,
            "companyId": 0,
            "name": "The One",
            "id": 32381,
            "type": "专辑",
            "size": 10
        },
        "commentThreadId": "R_SO_4_327233",
        "mvid": 0,
        "ftype": 0,
        "rtype": 0,
        "rurl": null,
        "copyFrom": "",
        "score": 100,
        "fee": 8,
        "position": 7,
        "duration": 251533,
        "ringtone": "",
        "disc": "",
        "status": 1,
        "crbt": null,
        "rtUrl": null,
        "bMusic": {
            "bitrate": 96000,
            "sr": 44100,
            "dfsId": 3246857840315426,
            "playTime": 251533,
            "volumeDelta": -0.000265076,
            "name": null,
            "id": 116793639,
            "size": 3019381,
            "extension": "mp3"
        },
        "name": "想你,零点零一分",
        "id": 327233
    }]
}

// 定义所需的 mutations
const mutations = {
    SETPLAYSTATUSPLAY(state){
        state.songStatus.status = 1
        state.audio.play()
    },
    SETPLAYSTATUSPAUSE(state){
        state.songStatus.status = 2
        state.audio.pause()
    },
    SETPLAYSTATUSSTOP(state){
        state.songStatus.status = 0
        state.audio.pause()
        state.audio.currentTime = 0
    },
    SETSEARCHDATA(state,songs){
        state.searchData.result.songs = songs
    },
    SETAUDIO(state,element){
        state.audio = element
    },
    SETCURRENTTIME(state,time){
        if((time && state.songStatus.duration>0) || time == 0) state.audio.currentTime = time
        state.songStatus.currentTime = state.audio.currentTime
    },
    SETDURATION(state){
        state.songStatus.duration = state.audio.duration
    },
    SETSONGINFO(state,songInfo){
        state.songInfo = songInfo
    },
    SETLISTOPEN(state){
        state.listStatus = true
    },
    SETLISTCLOSE(state){
        state.listStatus = false
    },
    SETPLAYLIST(state,obj){
        state.playList = obj
    },
    DELETESONG(state,index){
        state.playList.splice(index,1)
    },
    ADDESONG(state,item,isTurn){
        let isExist = false
        state.playList.forEach((o,i)=>{
            if(o.id==item.id){
                isExist = true
                if(isTurn)
                    state.nowIndex = i
            }
        })
        if(!isExist){
            state.playList.push(item)
            if(isTurn)
                state.nowIndex++
        }

    },
    LISTEMPTY(state){
        state.playList = []
    },
    TURNTO(state,index){
        if(index<0) index = state.playList.length-1
        else if(index==state.playList.length) index=0
        state.songInfo = state.playList[index]
        state.nowIndex = index
    }
}

// 创建 store 实例
export default new Vuex.Store({
    state,
    mutations
})