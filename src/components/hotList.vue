<template>
    <div class="hotList">
        <banner></banner>
        <div class="shop">
            <div class="block fl ml">
                <div class="iconborder">
                    <i class="iconfont icon-fm"></i>
                </div>
                <p>私人FM</p>
            </div>
            <div class="block">
                <div class="iconborder">
                    <i class="iconfont icon-5"></i>
                </div>
                <p>每日推荐</p>
            </div>
            <div class="block fr mr"
                 v-link="{path : '/myPlayList'}"
            >
                <div class="iconborder">
                    <i class="iconfont icon-myPlayList"></i>
                </div>
                <p>我的歌单</p>
            </div>
        </div>
        <div class="hot">
            <div class="column">
                <i class="iconfont icon-hot"></i>
                <h1>热门歌单</h1>
            </div>
            <div class="toplists">
                <div class="list-item"
                     v-for="list in hotPlayLists"
                >
                    <img class="cover-img"
                         :src="list.coverImgUrl+'?param=180y180'"
                         v-link="{ name: 'playList', params: { id: list.id }}"
                    >
                    <div class="play-count">
                        <i class="iconfont icon-listen">{{ list.playCount <10000 ? list.playCount : Math.floor(list.playCount/10000) + '万'}}</i>
                    </div>
                    <label>{{ list.name}}</label>
                </div>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .hotList{
        position:relative;
        top:.5rem;
    }
    .shop{
        position:relative;
        height:.6rem;
        text-align: center;
        margin-top: .1rem;
        margin-bottom: .3rem;
        .block{
            display: inline-block;
        }
        .iconborder{
            width:.6rem;
            height:.6rem;
            border:2px solid #ee5648;
            border-radius: 50%;
        }
        .iconfont{
            line-height:.56rem;
            color:#ee5648;
        }
        .fr{
            float:right;
        }
        .mr{
            margin-right:.4rem;
        }
        .fl{
            float:left;
        }
        .ml{
            margin-left:.4rem;
        }
    }
    .hot{
        border-top:1px solid #eee;
        padding:.06rem;
        margin-bottom: .6rem;
        .column{
            position:relative;
            height:.4rem;
            .iconfont{
                color:#ee5648;
            }
            h1{
                display:inline-block;
            }
            .more{
                color:#888;
                display:inline-block;
                float:right;
                line-height:.4rem;
            }
        }
        .toplists{
            display: flex;
            flex-flow: row wrap;
            align-content: space-between;
            justify-content: space-between;
            width:100%;
            .list-item{
                position:relative;
                flex : 0 0 32.5%;
                .cover-img{
                    width:100%;
                    height:100%;
                }
                .play-count{
                    position: absolute;
                    top:0;
                    right:0;
                    i{
                        color: #fff;
                        font-size:14px;
                    }
                }
                label{
                    font-size:14px;
                }
            }
        }
    }

</style>
<script type="text/ecmascript-6">
    import banner from './banner'
    export default{
        data(){
            return {
                hotPlayLists : ''
            }
        },
        components:{
            banner
        },
        methods:{
            getHotList(){
                this.$http.get(window.HOST+'/topPlaylists?limit=6').then((response)=>{
                    let _hotPlayLists = JSON.parse(response.data).playlists
                    console.log(JSON.parse(response.data).playlists)
                    this.hotPlayLists = _hotPlayLists
                }),(response) => {
                    // error callback
                }
            }
        },
        ready(){
            this.getHotList()
        }
    }
</script>
