<template>
    <div class="list-box">
        <div class="header" >
            <i class="iconfont icon-back icon-ml" v-link="{path:'/'}"></i>
            <div class="search" :class="{'border':isShow}">
                <input :class="[isShow ?'show-input':'do-search']"
                       placeholder="搜索音乐、歌手、歌词"
                       v-model="searchStr"
                       @keyup.enter="onEnter"
                       autofocus>
            </div>
            <i class="iconfont icon-search icon-fr" @click="searchClick"></i>
        </div>
        <items class="list-items"
             @touchstart="touchstart"
             @touchend="touchend"
             @mousedown="mousedown"
             @mousemove="mousemove"
             @mouseup="mouseup"
        >
        </items>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .list-box {
        position: absolute;
        width: 100%;
        height: 100%;
        .header {
            position: fixed;
            width: 100%;
            height: .5rem;
            background: #ee5648;
            .iconfont{
                color:#fff;
                line-height: .5rem;
            }
            .icon-ml{
                margin-left:.1rem;
            }
            .icon-fr{
                position: absolute;
                right:.15rem;
                color:#fff;
            }
            .search{
                float:right;
                width:80%;
                line-height: .4rem;
                margin:.045rem .2rem .045rem 0;
                font-size: .17rem;
                input{
                    width:90%
                }
                ::-webkit-input-placeholder {
                    color: #fff
                }
                .do-search{
                    text-indent:.1rem;
                    display:none;
                    background-color:transparent;
                    color:#fff;
                }
                .show-input{
                    display:inline;
                    text-indent:.1rem;
                    border-radius: 1px;
                    background-color:transparent;
                    color:#fff;
                }
            }
            .border{
                border-bottom: 1px #fff solid;
            }
        }
        .list-items {
            position: absolute;
            top: .5rem;
            bottom: 0;
            width: 100%;
            background: #fff;
            overflow:auto;
            margin-bottom: .65rem;
        }
    }
</style>
<script type="text/ecmascript-6">
    import items from './items'
    import {getSearchData} from '../vuex/getters'
    import {setSearchData} from '../vuex/actions'
    export default{
        data(){
            return {
                isShow : false,
                searchStr: '',
                pagination: {
                    _startY:'',
                    _scrollHeight:'',
                    _offsetHeight:'',
                    _offset: 0
                }
            }
        },
        components: {
            items
        },
        vuex: {
            getters : {
                getSearchData
            },
            actions : {
                setSearchData
            }
        },
        methods: {
            searchClick(){
                console.log('search')
                if(this.isShow){
                    if(this.searchStr!=""){
                        this.pagination._offset = 0
                        this.setSearchData([])
                        this.search()
                    }
                }else{
                    this.isShow = true
                }
            },
            search(){
                this.$http.get(window.HOST+'/search?name='+this.searchStr+'&limit=10&offset='+this.pagination._offset).then((response) => {
                    console.log(JSON.parse(response.data))
                    let _searchData = this.getSearchData
                    let searchSongs = JSON.parse(response.data).result.songs
                    let concatSongs = this.getSearchData.result.songs.concat(searchSongs)
                    _searchData.result.songs = concatSongs
                    this.setSearchData(concatSongs)
                }, (response) => {
                    // error callback
                });
            },
            touchstart(event){
                let e = event || window.event
                this.pagination._startY = e.touches[0].clientY
                this.pagination._scrollHeight = e.currentTarget.scrollHeight
                this.pagination._offsetHeight = e.currentTarget.offsetHeight
            },
            touchend(event){
                let e = event || window.events
                let sHeight = e.currentTarget.scrollTop
                let thisHeight = sHeight + this.pagination._offsetHeight
                let realHeight = this.pagination._scrollHeight
                let startY = this.pagination._startY
                let endY = e.changedTouches[0].clientY
                if(thisHeight >= realHeight && startY > endY){
                    this.pagination._offset +=10
                    this.search()
                }
            },
            mousedown(){
            },
            mousemove(){
            },
            mouseup(){
            },
            onEnter(){
                this.searchClick()
            }
        },
        ready(){
            this.searchClick()
        }
    }
</script>
