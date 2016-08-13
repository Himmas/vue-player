<template>
    <div class="playlist-bd">
        <div class="my-lists">
            我创建的歌单
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
                    let _myLists = []
                    let _storeLists = []
                    _myPlayLists.forEach(function(v){
                        if(v.userId == 312224813){
                            _myLists.push(v)
                        }else{
                            _storeLists.push(v)
                        }
                    })
                    this.myLists = _myLists
                    this.storeLists = _storeLists
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
