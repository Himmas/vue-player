<template>
    <div class="list-box">
        <div class="head" >
            <i class="iconfont icon-back icon-font" v-link="{path:'/'}"></i>
            <div class="search" :class="{'border':isShow}">
                <input :class="[isShow ?'show-input':'do-search']" placeholder="搜索音乐、歌手、歌词" v-model="searchStr">
                <i class="iconfont icon-search icon-fr" @click="searchClick"></i>
            </div>
        </div>
        <div class="list-items">
            <items></items>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .list-box {
        position: absolute;
        width: 100%;
        height: 100%;
        .head {
            position: absolute;
            width: 100%;
            height: .5rem;
            background: #fff;
            .icon-font{
                font-size:.3rem;
                color:#ee5648;
                margin-left:.1rem;
                line-height: .5rem;
            }
            .search{
                float:right;
                width:80%;
                line-height: .4rem;
                margin:.045rem .2rem .045rem 0rem;
                font-size: .17rem;
                .icon-fr{
                    font-size:.2rem;
                    float:right;
                    color:#ee5648;
                    margin-right:.1rem;
                }
                .do-search{
                    text-indent:.1rem;
                    display:none;
                }
            }
            .border{
                border-bottom: 1px #ee5648 solid;
            }
            .show-input{
                display:inline;
                text-indent:.1rem;
            }
        }
        .list-items {
            position: absolute;
            top: .5rem;
            bottom: 0;
            width: 100%;
            background: #fff;
            overflow:auto;
        }
    }
</style>
<script type="text/ecmascript-6">
    import items from './items'
    import {setSearchData} from '../vuex/actions'
    export default{
        data(){
            return {
                isShow : false,
                searchStr: ''
            }
        },
        components: {
            items
        },
        vuex: {
            actions : {
                setSearchData
            }
        },
        methods: {
            searchClick(){
                if(this.isShow){
                    if(this.searchStr!=""){
                        this.search()
                    }
                }else{
                    this.isShow = true
                }
            },
            search(){
                console.log(this.searchStr);
                this.$http.get(window.HOST+'/search?name='+this.searchStr+'&limit=10').then((response) => {
                    console.log(JSON.parse(response.data))
                    this.setSearchData(JSON.parse(response.data))
                }, (response) => {
                    // error callback
                });
            }
        }
    }
</script>
