<template>
    <div class="banner">
        <div class="banner-box"
             :style="{ transform:'translateX(-'+n+'%)',transition:speed}">
            <div class="banner-img"
                 v-for="img in imgs"
                 :style="{ transform:'translateX('+$index+'00%)' }"
                 @touchstart="tstart"
                 @touchmove="tmove"
                 @touchend="tend"
            >
                <img :src = "img.src">
            </div>
        </div>
        <div class="control-box">
            <ul class="circle">
                <li v-for="img in imgs"
                    :class="[$index==index ? 'on':'']">
                </li>
            </ul>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .banner{
        position:relative;
        width:100%;
        height:2rem;
        .banner-box{
            position:relative;
            width:100%;
            height: 100%;
            .banner-img{
                position:absolute;
                height:100%;
                width:100%;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        .control-box{
            position:absolute;
            z-index: 1;
            width:100%;
            height:20px;
            bottom:0;
            .circle{
                width:100%;
                display: inline-block;
                text-align:center;
                position: relative;
                li{
                    position:relative;
                    display:inline-block;
                    height:10px;
                    width:10px;
                    background: #cccccc;
                    border-radius: 50%;
                    line-height: 20px;
                    margin-left:2px;
                }
                li.on{
                    background-color: #bc0001;
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
                ],
                n:0,
                drag:{
                    _n:'',
                    _startX:'',
                    _scorllWidth:'',
                    _status:false,
                    _length:0
                },
                index:0,
                speed:'.3s'
            }
        },
        methods:{
            tstart(event){
                let e = event || window.event
                this.drag._n = this.n
                this.drag._startX = e.touches[0].clientX
                this.drag._scorllWidth = e.currentTarget.scrollWidth
                this.drag._status = true
                this.drag._length = this.imgs.length
                this.speed = '0s'
            },
            tmove(event){
                let e = event || window.event
                let nowX = e.touches[0].clientX
                let moveX = nowX - this.drag._startX
                let percent = ( moveX / this.drag._scorllWidth )*100;
                if(this.n == 0 && moveX > 0 ){
                    this.n = (this.drag._length-1) *100 - percent
                }else if (this.n == (this.drag._length-1) *100 && moveX < 0){
                    this.n = 0 - percent
                }else{
                    this.n = this.drag._n - percent
                }
                e.preventDefault()
                //console.log(this.n)
            },
            tend(event){
                this.n = this.drag._n;
                let e = event || window.event
                let endX = e.changedTouches[0].clientX
                let dragDistance = endX-this.drag._startX;
                if(dragDistance && dragDistance > this.drag._scorllWidth/2){
                    this.turnPrev()
                }else{
                    if(Math.abs(dragDistance) > this.drag._scorllWidth/2){
                        this.turnNext()
                    }
                }
                this.drag._status = false
                this.speed = '.3s'
            },
            turnPrev(){
                if(this.n == 0 ){
                    this.n += (this.imgs.length-1) *100
                    this.setStyle()
                }else{
                    this.n -= 100;
                    this.setStyle()
                }
            },
            turnNext(){
                if(this.n == (this.imgs.length-1) *100 ){
                    this.n = 0 ;
                    this.setStyle()
                }else{
                    this.n += 100;
                    this.setStyle()
                }
            },
            setStyle(){
                let index = this.n/100
                this.index = index;
            },
            autoTurn(){
                if(!this.drag._status){
                    this.turnNext()
                }
            }
        },
        ready(){
            setInterval(this.autoTurn,4000)
        }
    }
</script>
