<template>
    <div>
        <el-button type="primary" class="btn" @click="toTop" ><i class="el-icon-top"></i></el-button>
    </div>
</template>

<script>
export default {
    name: 'ToTop',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        toTop(){
            console.log(1);
            let position = window.scrollY
            // let windowHeight = window.innerHeight
                let timer = setInterval(() => {
                    window.scrollTo(0,position-10)
                    position = position - position/50
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
                    if(position<10){
                        clearInterval(timer)
                    }
                }, 5);
        }
    },
};
</script>

<style lang="less" scoped>
.btn{
    width: 50px;
    height: 50px;
    border-top-left-radius: 100%;
    background-color: rgb(252, 121, 121);
    border: 0;
}
</style>