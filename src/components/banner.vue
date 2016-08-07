<template>
    <div class="banner">
        <div class="banner-box">
            <div class="banner-img"
                 v-for="img in imgs"
                 :style="{ transform:'translateX('+$index+'00%)' }"
            >
                <img :src = "img.src">
            </div>
        </div>
        <div class="control-box">
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .banner{
        .banner-box{
            position:absolute;
            transform:translateX(100%);
            width:100%;
            .banner-img{
                position:absolute;
                width:100%;
                img{
                    width:100%;
                }
            }
        }

    }
</style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                imgs:[
                    {
                        src:'http://p4.music.126.net/ZWitDwDDHNPOMSLadDgEYg==/3420580711233111.jpg'
                    },{
                        src:'http://p4.music.126.net/95zK2FJUocfIcG5BYEgMiQ==/3300733911198758.jpg'
                    },{
                        src:'http://p3.music.126.net/80905--U1SEboXSL6UgArA==/1421668548695431.jpg'
                    },{
                        src:'http://p4.music.126.net/s86fIMEuVlQa1Iw5o2Jb8w==/3416182637824600.jpg'
                    },{
                        src:'http://p4.music.126.net/Ygu7fqFUDvhvs1LQxYfSfA==/3416182637824593.jpg'
                    },{
                        src:'http://p4.music.126.net/4cp7AOk5WgbV3tNr_rgxdg==/2946691205461038.jpg'
                    }
                ]
            }
        },
        components:{
        }
    }
</script>
