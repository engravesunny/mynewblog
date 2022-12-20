<template>
    <div>
        <el-card style="background:rgba(255, 255, 255, 0.5);width:100%;z-index:0" >
            <!-- 文章分类 -->
            <el-card style="border-radius:25px;background:rgba(255, 255, 255, 0.8)">
                <div class="title"> <h1>Post Categories</h1> </div>
                        <div class="category-container">
                            <div v-for="(item,index) in category" :key="index" style="text-align:center">
                                <div @click="toCategory(item)" class="category-card" :style="{backgroundColor:`${color[Math.floor(Math.random()*7)]}`}" >
                                    {{ item }} 
                                </div>
                            </div>
                        </div>
            </el-card>

            <!-- 雷达图 -->
            <el-card v-if="!showCategoryList" style="border-radius:25px;margin-top:20px;background:rgba(255, 255, 255, 0.9)">
                <radar-blog :posts="postInfo.posts" :post-info="postInfo.categoryRadar" ></radar-blog>
            </el-card>
            <el-card v-else  style="border-radius:25px;margin-top:20px;background:rgba(255, 255, 255, 0.9)">
                <el-button type="text" class="back" @click="back"><span style="font-size:20px;color:cadetblue;"><i class="el-icon-back"></i>返回</span></el-button>
                <category-item :post-info="postInfo" :category-name="categoryName"></category-item>
            </el-card>
        </el-card>
    </div>
</template>

<script>
import postInfo from '@/assets/post/postInfo'
import PubSub from 'pubsub-js'
import radarBlog from '@/components/radarBlog'
import categoryItem from './components/categoryItem.vue';
export default {
    name: 'category-blog',
    components: {
        radarBlog,
        categoryItem
    },
    data() {
        return {
            postInfo:null,
            category:[],
            color:['rgb(249, 235, 234)','rgb(245, 238, 248)','rgb(213, 245, 227)','rgb(232, 248, 245)','rgb(254, 249, 231)','rgb(248, 249, 249)','rgb(130, 224, 170)'],
            categoryName:'',
            showCategoryList:false
        };
    },
    created(){
        this.category = postInfo.categories
        this.postInfo = postInfo
    },
    mounted() {
        console.log(postInfo.categories);
        PubSub.subscribe('toCategory',(a,item)=>{
            this.toCategory(item)
        })
    },

    methods: {
        toCategory(item){
            this.categoryName = item
            this.showCategoryList = false
            this.$nextTick(() => {
                // dom元素更新后执行
                this.showCategoryList = true
            })
        },
        back(){
            this.showCategoryList = false
        }
    },
};
</script>

<style lang="less" scoped>
.back{
    width: 5vw;
}
.title{
    text-align: center;
}
.category-container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 40vw;
}
.category-card{
    width:6vw;
    height: 5vh;
    border-radius: 15px;
    cursor: pointer;
    margin: 5px;
    box-shadow: 0 3px 5px rgb(0 0 0 / 12%);
    line-height: 5vh;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    transition: all 0.5s;
}
.category-card:hover{
    color: #fff;
    font-weight: 800;
    background-color: rgb(44, 173, 69) !important;
}
</style>