<template>
    <div id="items">
        <ul>
            <li v-for="item in items">
                <img src="{{ item.url }}">
                <span>{{ item.name}}</span>
                <button @click="play"></button>
            </li>
        </ul>
    </div>
</template>
<style>

</style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        },
        components: {}
    }
</script>
