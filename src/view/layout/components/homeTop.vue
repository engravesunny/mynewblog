<template>
    <div class="home-top-container">
        <div class="title-box">
            <div class="title" >
                <p class="title_text">致敬还在写博客的我们</p>
                <el-button @click="scroll" class="explore">
                    EXPLORE
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyblogHomeTop',

    data() {
        return {

        };
    },

    mounted() {
        
    },

    methods: {
        scroll(){
            let position = window.scrollY
            let windowHeight = window.innerHeight
                let timer = setInterval(() => {
                    window.scrollTo(0,position+10)
                    position = position + (windowHeight+60-position)/50
                    document.onmousewheel = (e) => {
                        if (e.wheelDelta) {  
                            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                                clearInterval(timer)
                            }
                            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                                clearInterval(timer)
                            }
                        }
                    }
                    if(position>windowHeight+50){
                        clearInterval(timer)
                    }
                }, 5);
        }
    },
};
</script>

<style lang="less" scoped>
.home-top-container{
    padding: 52px 0 0 0;
    height: 100vh;
    background-image: url('@/assets/img/3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    .title-box{
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 400px;
        background-color: #fff;
        background: rgba(0,0,0,0);
        transform: translate(-50%,-60%);
        .title{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 50px;
            font-weight: 200;
            color: rgb(255, 255, 255);
            .title_text{
                display: inline-block;
                animation: fadeIn; 
                animation-duration: 2s;
            }
            .title_text:hover{
                animation: fadeOut;
                animation-duration: 2s;
            }
            .explore{
                margin: 40px 0 0 0;
                width: 200px;
                height: 60px;
                background: rgba(0,0,0,0);
                border: 2px solid rgb(245, 105, 105);
                color: rgb(245, 105, 105);
                font-size: 20px;
                font-style: none;
                font-weight: 80;
                transition: all 0.5s;
            }
            .explore:hover{
                background-color: rgb(209, 146, 146);
                border: 1px solid rgb(149, 139, 139);
                color: #fff;
            }
        }
        
    }
}
</style>