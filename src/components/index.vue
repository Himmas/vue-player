<template>
    <router-view></router-view>
    <miniplayer></miniplayer>
</template>
<style>

</style>
<script type="text/ecmascript-6">
    import miniplayer from './miniplayer'
    export default{
        components: {
            miniplayer
        }
    }
</script>