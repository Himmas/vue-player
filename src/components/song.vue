<template>
    <div class="song-box">
        <div class="song-bg"></div>
        <div class="song-head"></div>
        <div class="container-box"></div>
        <div class="player-box"></div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .song-box{
        position: absolute;
        width: 100%;
        height: 100%;
        .song-bg{
            position: absolute;
            width: 100%;
            height: 2.3rem;
        }
        .song-head{
            position: absolute;
            width: 100%;
            height: .5rem;
        }
        .container-box{
            position: absolute;
            top: .5rem;
            bottom: 1.5rem;
            width: 100%;
            background: #2C2C2C;
        }
        .player-box{
            position: absolute;
            bottom: 0;
            height: 1.5rem;
            top: auto;
            width: 100%;
            background: #00d4b4;
        }
    }
</style>
<script type="text/ecmascript-6">

</script>