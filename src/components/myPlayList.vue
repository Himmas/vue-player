<template>
    <div class="playlist-bd">
        <div class="my-lists">
            <label>我创建的歌单</label>
        </div>
        <div class="store-lists">
            收藏的歌单
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .playlist-bd{
        position: relative;
        top:.5rem;
    }
</style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                myLists:[],
                storeLists:[]
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
