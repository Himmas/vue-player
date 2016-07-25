<template>
    <div>
        click: {{count}}times
        <button @click='increment'>+</button>
        <button @click='decrement'>-</button>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import {increment,decrement} from '../vuex/actions'
    export default{
        vuex : {
            getters: {
                count: state => state.count
            },
            actions : {
                increment,
                decrement
            }
        }
    }
</script>
