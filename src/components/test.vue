<template>
    <button v-link="{name:'test',params:{id:101}}">点我</button>
    <button v-link="{name:'test',params:{id:10}}">点我</button>
    {{$route.params.id}}
</template>
<style>
    
</style>
<script type="text/ecmascript-6">
    export default{
        watch: {
            $route:{
                handler:function(val, oldVal){
                    this.ready()
                },
                deep:true
            }
        },
        created(){
            console.log("created");
        },
        ready(){
            console.log("ready");
        }
    }
</script>