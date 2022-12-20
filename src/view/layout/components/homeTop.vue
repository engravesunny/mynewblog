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
        <div ref="word" style="display:none">
            每日一言:&nbsp; {{word}}
        </div>
        <div ref="text" class="text">
            每日一言:&nbsp; {{text}}
        </div>
    </div>
</template>

<script>
import getWord from '@/api/randomWord';
export default {
    name: 'MyblogHomeTop',

    data() {
        return {
            word:'',
            text:''
        };
    },
    created(){
        this.getWord()
    },
    async mounted() {
        await this.getWord()
        console.log(this.word,this.text);
        let i = 0
        const timer = setInterval(() => {
            i++;
            this.text = this.word.slice(0,i)
            if(this.text === this.word){
                clearInterval(timer)
            }
        }, 200);
    },

    methods: {
        async getWord(){
            const res = await getWord()
            this.word = res.data
        },
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
    .text{
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%);
        font-size: 2vh;
        font-weight: 800;
        color: rgb(249, 237, 237);
        font-family: "仓耳渔阳体 W03";
    }
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
            font-size: 60px;
            font-weight: 200;
            color: rgb(255, 255, 255);
            .title_text{
                display: inline-block;
                animation: fadeIn; 
                animation-duration: 2s;
                font-family: "仓耳渔阳体 W03";
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