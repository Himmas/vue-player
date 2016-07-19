<template>
    <div class="list-box">
        <div class="back"><i></i></div>
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
            height: 0.5rem;
            background: #ff0000;
        }
        .list-items {
            position: absolute;
            top: 0.5rem;
            bottom: 0rem;
            width: 100%;
            background: #fff;
        }
    }
</style>
<script type="text/ecmascript-6">
    import Items from './items'
    export default{
        components: {
            items:Items
        }
    }
</script>
