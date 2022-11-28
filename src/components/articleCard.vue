<template>
    <!-- 文章卡片 -->
    <div class="card" v-animate="'animateIn'" ref="ar_card" @click="toArticle">
        <!-- <div class="img" :style="setBackground"></div> -->
        <div class="img">
            <!-- v-lazy实现图片懒加载 -->
            <img v-lazy="imgSrc" :alt="this.ar_title" :title="this.ar_title">
            <!-- <img :src="imgSrc" :alt="this.ar_title" :title="this.ar_title"> -->
        </div>
        <div class="text-container">
            <div class="left">
                <div class="title">{{ ar_title }}</div>
                <div class="date"><i class="el-icon-time"></i> {{ date }}</div>
            </div>
            <div class="right">
                <div class="category-name" @click.stop="toCategory" >{{ ar_category }}</div>
            </div>
        </div>
        <hr/>
        <div class="tags" @click.stop="toTags">
            <div class="tags-container" v-for="(item,index) in ar_tags" :key="index" >
                <div class="tags-text">{{ item }}</div>
            </div>
        </div>
    </div>

</template>

<script>
const files = require.context('@/assets/img/post-img')
export default {
    name: 'ArticleCard',
    props:{
        ar_title:{
            type:String,
            default:'让自己成为红警大神'
        },
        date:{
            type:String,
            default:'2022-07-06'
        },
        ar_category:{
            type:String,
            default:'Vue'
        },
        ar_tags:{
            type:Array,
            default:()=>['标签','标签']
        }
    },
    data() {
        return {
            imageSrc:[],
            loadingSrc:require('@/assets/img/th.gif')
            
        };
    },
    computed:{
        setBackground(){
            // ${this.imageSrc[Math.floor(Math.random()*25)]}`)}
            // ${require(`@/assets/img/post-img/8.jpg`)}
            return {backgroundImage:`url(${require(`@/assets/img/post-img/${this.imageSrc[Math.floor(Math.random()*32)]}`)})`}
        },
        imgSrc(){
            return require(`@/assets/img/post-img/${this.imageSrc[Math.floor(Math.random()*32)]}`)
        }
    },
    created(){
        // console.log(files.keys());
        this.imageSrc = files.keys().map(item=>{
            return item.replace('./','')
        })
    },
    mounted() {

    },
    
    
    methods: {
        toArticle(){
            this.$router.push({name:'article',query:{name:`${this.ar_title}`}})
        },
        toCategory(){

        },
        toTags(){

        }
    },
};
</script>

<style lang="less" scoped>
.animateIn{
    animation: fadeIn; 
    animation-duration: 2.5s; 
}
.animateOut{
    animation: fadeOut;
    animation-duration: 2s;
}
.card{
    margin-bottom: 20px;
    padding: 15px;
    width:19vw;
    border-radius:15px;
    box-shadow: 0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%) !important;
    cursor: pointer;
    transition: all 0.5s;
    .img{
        width: 19vw;
        height: 16vh;
        position: relative;
        transition: all 0.5s;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        img{
            width: 100%;
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%,-50%);
            transition: all 0.5s;
        }
    }
    .img img:hover{
        width: 120%;
    }
    .text-container{
        display: flex;
        justify-content: space-between;
        .left{
            .title{
                margin:5px;
                font-size: 1vw;
                font-weight: 600;
            }
            .date{
                font-size: 1vh;
                color: rgb(68, 87, 107);
            }
        }
        .right{
            .category-name{
                margin-top: 3vh;
                border-radius: 5px;
                font-size: 1vw;
                background: rgba(255,255,255,0.2);
            }
            .category-name:hover{
                color: rgb(237, 168, 168);
                text-decoration: underline;
            }
        }
    }
    .tags{
        .tags-container{
            margin-right: 5px;
            display: inline-block;
            background-color: rgb(0, 0, 0);
            text-align: center;
            border: 1px solid rgb(0, 0, 0);
            border-radius: 6px;
            cursor: pointer;
            .tags-text{
                color: #fff;
            }
        }
        .tags-container:hover{
            background-color: #fff;
        }
        .tags-text:hover{
            color: black;
        }
    }
}
.card:hover{
    transform: translateY(-1vh);
}

</style>