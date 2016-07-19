<template>
    <div>
        <div class="play-bar-box">
            <div class="now-time">03:23</div>
            <div class="play-bar">
                <div class="bar-box">
                    <div class="now-bar"></div>
                </div>
                <div class="btn-circle"></div>
            </div>
            <div class="all-time">04:10</div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .play-bar-box{
        width: 100%;
        /*height: 20px;*/
        display: flex;
        /*background: #00d4b4;*/
        align-items: center;
        .play-bar{
            position: relative;
            width: 70%;
            height: 10px;
            .bar-box{
                position: absolute;
                width: 100%;
                height: 100%;
                background: #eeeeee;
                border-radius: 5px;
                overflow: hidden;
                .now-bar{
                    position: absolute;
                    width: 50%;
                    height: 100%;
                    background: #ee5648;
                }
            }
            .btn-circle{
                position: absolute;
                top:-5px;
                border-radius: 50%;
                left:49%;
                width: 20px;
                height: 20px;
                background: #fff;
                border: 1px solid #faf5ed;
            }
        }
        .now-time,.all-time{
            flex: 1;
            text-align: center;
        }
    }
</style>
<script type="text/ecmascript-6">
</script>