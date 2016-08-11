<template>
myplaylist
</template>
<style rel="stylesheet/less" lang="less">

</style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods:{
            getUserPlayLists(){
                this.$http.get(window.HOST+'/userPlaylists?id=312224813').then((response)=>{
                    console.log(JSON.parse(response.data))
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
