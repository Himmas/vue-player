<template>
   <div class="head">
      <i class="iconfont icon-menu"></i>
      <i class="iconfont icon-music"
         v-link="{path:'../'}"
      ></i>
      <i class="iconfont icon-music-note"
         v-link="{path:'/myPlayList'}"
      ></i>
      <i class="iconfont icon-search"
         v-link="{path:'/search'}"
      ></i>
   </div>
   <router-view></router-view>
</template>
<style rel="stylesheet/less" lang="less">
   .head{
      position: fixed;
      top:0;
      height:.5rem;
      width:100%;
      z-index:10;
      background: #ee5648;
      text-align: center;
      .iconfont{
         color:#fff;
         line-height:.5rem;
      }
      .icon-music{
         margin-right: .2rem;
      }
      .icon-menu{
         float:left;
         margin-left: .15rem;
      }
      .icon-search{
         float: right;
         margin-right: .15rem;
      }
   }
</style>
<script type="text/ecmascript-6">
   export default{
      data(){
         return{
            msg:'hello vue'
         }
      },
      components:{
      }
   }
</script>
