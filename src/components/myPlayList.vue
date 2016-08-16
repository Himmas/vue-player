<template>
    <div class="playlist-bd">
        <div class="my-lists"
             @click="changeStatus(1)"
        >
            <div class="lists-title">
                <i class="iconfont" :class="myTag?'icon-bottom':'icon-right'"></i>
                <label>我创建的歌单</label>
                <i class="iconfont icon-vertical" ></i>
            </div>
            <ul class="my-items"
                :style="myTag?'display: block;':'display:none'"
            >
                <li v-for="list in myLists"
                    v-link="{ name: 'playList', params: { id: list.id }}"
                >
                    <img :src="list.coverImgUrl+'?param=60y60'">
                    <div class="lbd">
                        <div class="list-detail">
                            <p class="name">{{ list.name}}</p>
                            <p class="from">{{ list.trackCount}} by {{ list.creator.nickname }}</p>
                        </div>
                        <div class="vbtn">
                            <i class="iconfont icon-vertical" ></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="store-lists"
             @click="changeStatus(2)"
        >
            <div class="lists-title">
                <i class="iconfont" :class="storeTag?'icon-bottom':'icon-right'"></i>
                <label>收藏的歌单</label>
                <i class="iconfont icon-vertical" ></i>
            </div>
            <ul class="store-items"
                :style="storeTag?'display: block;':'display:none'"
            >
                <li v-for="list in storeLists"
                    v-link="{ name: 'playList', params: { id: list.id }}"
                >
                    <img :src="list.coverImgUrl+'?param=60y60'">
                    <div class="lbd">
                        <div class="list-detail">
                            <p class="name">{{ list.name}}</p>
                            <p class="from">{{ list.trackCount}} by {{ list.creator.nickname }}</p>
                        </div>
                        <div class="vbtn">
                            <i class="iconfont icon-vertical" ></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .playlist-bd{
        position: relative;
        top:.5rem;
        margin-bottom:.8rem;
        .lists-title{
            position: relative;
            height: .4rem;
            background-color: #eee;
            color: #6D6D6D;
            padding-left:.1rem;
            padding-right:.1rem;
            i{
                line-height: .4rem;
            }
            label{
                position: absolute;
                height:100%;
                line-height: .4rem;
            }
            .icon-vertical{
                float: right;
            }
        }
        .store-lists{
            border-top: 1px solid #fff;
        }
        ul{
            display:none;
            transition : .3s;
            li{
                width: 100%;
                overflow: hidden;
                height: .7rem;
                display:flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                padding: .1rem;
                img{
                    height: .6rem;
                    width: .6rem;
                    margin-right: .1rem;
                }
                .lbd{
                    display: flex;
                    height:.7rem;
                    flex:1;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid #eee;
                    overflow: hidden;
                    .list-detail{
                        flex: 1;
                        overflow:hidden;
                        .name{
                            font-size: 16px;
                        }
                        .from{
                            font-size: 14px;
                            color: #888;
                        }
                        p{
                            white-space:nowrap;
                        }
                    }
                    .vbtn{
                        color: #888;
                    }
                }
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                myLists:[],
                storeLists:[],
                myTag:false,
                storeTag:false
            }
        },
        methods:{
            getUserPlayLists(){
                this.$http.get(window.HOST+'/userPlaylists?id=312224813').then((response)=>{
                    let _myPlayLists = JSON.parse(response.data).playlist
                    _myPlayLists.forEach((v) =>{
                        if(v.userId == 312224813){
                            this.myLists.push(v)
                        }else{
                            this.storeLists.push(v)
                        }
                    })
                }),(response) => {
                    // error callback
                }
            },
            changeStatus(tag){
                /*let e = event || window.event
                let _className = e.currentTarget.className*/
                if(tag == '1'){
                    if(this.myTag){
                        this.myTag = false
                    }else
                        this.myTag = true
                }else if(tag == '2'){
                    if(this.storeTag){
                        this.storeTag = false
                    }else
                        this.storeTag = true
                }
            }
        },
        ready(){
            this.getUserPlayLists()
        }
    }
</script>
