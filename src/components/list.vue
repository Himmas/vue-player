<template>
    <div class="list-box">
        <div class="back">
            <i class="iconfont icon-back icon-font"></i>
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
        .back {
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
        }
        .list-items {
            position: absolute;
            top: .5rem;
            bottom: 0;
            width: 100%;
            background: #fff;
        }
    }
</style>
<script type="text/ecmascript-6">
    import items from './items'
    export default{
        components: {
            items
        }
    }
</script>
