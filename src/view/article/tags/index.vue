<template>
        <el-card style="background:rgba(255, 255, 255, 0.5);" >
            <!-- 文章分类 -->
            <el-card style="border-radius:25px;background:rgba(255, 255, 255, 0.8)">
                <div class="title"> <h1>Post Tags</h1> </div>
                        <div class="tags-container">
                            <div v-for="(item,index) in tagsList" :key="index" style="text-align:center">
                                <div @click="toTags(item)" class="tags-card" :style="{backgroundColor:`${color[Math.floor(Math.random()*7)]}`}" >
                                    {{ item }} {{tagsNumList.filter(tag=>tag===item).length}}
                                </div>
                            </div>
                        </div>
            </el-card>
            
            <el-card v-if="showTagsList" style="border-radius:25px;background:rgba(255, 255, 255, 0.8);margin-top:20px">
                <div class="tags_box">
                    <div class="tags_item" v-for="(item,index) in tagsList" :key="index" @click="toTags(item)">
                        <div class="tags_text" :style="{fontSize:`${(1+tagsNumList.filter(tag=>tag===item).length/5)*20}px`,color:`${textColor[Math.floor(Math.random()*7)]}`}">
                            {{item}}
                            <div class="num">
                                {{tagsNumList.filter(tag=>tag===item).length}}
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card v-else style="border-radius:25px;margin-top:20px;background:rgba(255, 255, 255, 0.9)">
                <el-button type="text" class="back" @click="back"><span style="font-size:20px;color:cadetblue;"><i class="el-icon-back"></i>返回</span></el-button>
                <tags-item :post-info="postInfo" :tag-name="tagName"></tags-item>
            </el-card>
        </el-card>
</template>

<script>
import PubSub from 'pubsub-js'
import postInfo from '@/assets/post/postInfo';
import tagsItem from './components/tagsItem.vue';
export default {
    name: 'tags-blog',
    components:{
        tagsItem
    },
    data() {
        return {
            postInfo:null,
            tagsList:[],
            tagsNumList:[],
            color:['rgb(249, 235, 234)','rgb(245, 238, 248)','rgb(213, 245, 227)','rgb(232, 248, 245)','rgb(254, 249, 231)','rgb(248, 249, 249)','rgb(130, 224, 170)'],
            textColor:['rgb(133, 200, 234)','rgb(195, 132, 224)','rgb(37, 93, 168)','rgb(0, 70, 132)','rgb(244, 192, 161)','rgb(164, 85, 68)','rgb(212, 242, 104)','rgb(219, 160, 50)'],
            tagName:'',
            showTagsList:true
        };
    },
    created(){
        this.postInfo = postInfo
        postInfo.posts.forEach(item=>{
            item.tags.forEach(tag=>{
                if(this.tagsList.indexOf(tag)==-1){
                    // console.log(this.tagsList.indexOf(tag));
                    this.tagsList.push(tag)
                }
                this.tagsNumList.push(tag)
                
                this.tagsList.sort(()=>{
                    return Math.random() - 0.5;
                })
            })
        })
        // console.log(this.tagsList);
    },
    mounted() {
        PubSub.subscribe('toTags',(a,item)=>{
            this.toTags(item)
        })
    },

    methods: {
        toTags(item){
            this.tagName = item
            this.showTagsList = true
            this.$nextTick(() => {
                // dom元素更新后执行
                this.showTagsList = false
            })
        },
        back(){
            this.showTagsList = true
        }
    },
};
</script>

<style lang="less" scoped>
.back{
    width: 5vw;
}
.tags_box{
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
}
.tags_item{
    margin: 10px;
}
.tags_text{
    position: relative;
    cursor: pointer;
}
.num{
    font-size: 18px;
    position: absolute;
    top: -5px;
    right: -10px;
    
}
.tags_text:hover{
    color: rgb(237, 168, 168)!important;
    text-decoration: underline;
}
.title{
    text-align: center;
}
.tags-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}
.tags-card{
    width:6vw;
    height: 5vh;
    border-radius: 15px;
    cursor: pointer;
    margin: 8px;
    box-shadow: 0 3px 5px rgb(0 0 0 / 12%);
    line-height: 5vh;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    transition: all 0.5s;
} 
.tags-card:hover{
    color: #fff;
    font-weight: 800;
    background-color: rgb(44, 173, 69) !important;
}
</style>