<template>
    <div class="playlist-bd">
        <div class="my-lists">
            <div class="lists-title">
                <i class="iconfont" :class="myTag?'icon-bottom':'icon-right'"></i>
                <label>我创建的歌单</label>
                <i class="iconfont icon-vertical" ></i>
            </div>
            <ul class="my-items">
                <li v-for="list in myLists"
                    v-link="{ name: 'playList', params: { id: list.id }}"
                >
                    <img :src="list.coverImgUrl+'?param=60y60'">
                    <div class="list-detail">
                        <p class="name">{{ list.name}}</p>
                        <p class="from">{{ list.trackCount}}{{ list.creator.nickname }}</p>
                    </div>
                    <div class="vbtn">
                        <i class="iconfont icon-vertical" ></i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="store-lists">
            <div class="lists-title">
                <i class="iconfont" :class="myTag?'icon-bottom':'icon-right'"></i>
                <label>收藏的歌单</label>
                <i class="iconfont icon-vertical" ></i>
            </div>
            <ul class="store-items">
                <li v-for="list in storeLists"
                    v-link="{ name: 'playList', params: { id: list.id }}"
                >
                    <img :src="list.coverImgUrl+'?param=60y60'">
                    <div class="list-detail">
                        <p class="name">{{ list.name}}</p>
                        <p class="from">{{ list.trackCount}}{{ list.creator.nickname }}</p>
                    </div>
                    <div class="vbtn">
                        <i class="iconfont icon-vertical" ></i>
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
                    //flex: 0 0 .6rem;
                }
                .list-detail{
                    margin-left: .1rem;
                    flex: 1;
                    .name{
                        font-size: 16px;
                    }
                    .from{
                        font-size: 14px;
                        color: #939393;
                    }
                    p{
                        white-space:nowrap;
                    }
                }
                .vbtn{
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
            }
        },
        ready(){
            this.getUserPlayLists()
        }
    }
</script>
