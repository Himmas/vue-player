<template>
    <div class="playlist-bd">
        <div class="my-lists">
            <div class="lists-title">
                <i class="iconfont" :class="myTag?'icon-bottom':'icon-right'"></i>
                <label>我创建的歌单</label>
                <i class="iconfont icon-vertical" ></i>
            </div>
            <ul class="my-items">
                <li v-for="list in myLists"></li>
            </ul>
        </div>
        <div class="store-lists">
            <div class="lists-title">
                <i class="iconfont" :class="myTag?'icon-bottom':'icon-right'"></i>
                <label>收藏的歌单</label>
                <i class="iconfont icon-vertical" ></i>
            </div>
            <ul class="store-items">
                <li v-for="list in storeLists"></li>
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
