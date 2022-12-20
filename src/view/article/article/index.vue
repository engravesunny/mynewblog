<template>
    <!-- 文章详情页 -->
    <div>
        <el-card style="background:rgba(255, 255, 255, 0.5);width:100%;border-radius:25px;border:0;box-shadow:none" body-style="padding:10px;" >
            <!-- 顶部 -->
            <el-card style="width:100%;border-radius:25px">
                <div class="top">
                    <div class="name">
                        {{ targetArticle.postName }}
                    </div>
                    <div class="nextRow">
                        <div class="time">
                            <i class="el-icon-time"></i>{{ targetArticle.date }}
                        </div>
                        <div class="tags" v-for="(tag,index) in targetArticle.tags" :key="index">
                            <span @click="toTags(tag)">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </el-card>
            <!-- 正文 -->
            <el-card style="width:100%;border-radius:25px;margin:10px 0px">
                <div class="markdown-body" v-if="showArticle">
                    <ar_markdown></ar_markdown>
                </div>
                <div v-else v-loading="!showArticle"
                style="width:100%;height:100vh"
                ></div>
            </el-card>
            <!-- 底部 -->
            <div class="footer">
                <div class="footer_card">
                    <article-card
                        :ar_title="beforeArticle.postName"
                        :date="beforeArticle.date"
                        :ar_category="beforeArticle.name"
                        :ar_tags="beforeArticle.tags"
                    ></article-card>
                    <span class="footer_text">上一篇</span>
                </div>
                <div class="footer_card">
                    <article-card
                        :ar_title="afterArticle.postName"
                        :date="afterArticle.date"
                        :ar_category="afterArticle.name"
                        :ar_tags="afterArticle.tags"
                    ></article-card>
                    <span class="footer_text">下一篇</span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
// import asyncLoadComp from '@/components/asyncLoadComp.vue';
import articleCard from '@/components/articleCard.vue';
import PubSub from 'pubsub-js';
import postInfo from '@/assets/post/postInfo';
import Vue from 'vue'
export default {
    name: 'ArticleDetail',
    components:{
        articleCard
    },
    data() {
        return {
            src:this.$route.query.name,
            showArticle:false,
            postList:[],
            targetArticle:null,
            afterArticle:null,
            beforeArticle:null
        };
    },
    created(){
        this.showArticle = false
        Vue.component('ar_markdown',res=>require([`@/assets/post/${this.src}.md`],res));
        this.showArticle = true
    },
    mounted() {
        let ind = -1
        this.postList = postInfo.posts
        if(this.postList.length) {
            this.targetArticle = this.postList.filter((item,index)=>{
                if(item.postName===this.$route.query.name){
                    ind = index
                }
                return item.postName===this.$route.query.name
            })[0]
        }
        if(ind - 1 < 0) {
            this.beforeArticle = this.postList[this.postList.length-1]
            this.afterArticle = this.postList[ind+1]
        } else if(ind+1>(this.postList.length-1)) {
            this.beforeArticle = this.postList[ind - 1]
            this.afterArticle = this.postList[0]
        } else {
            this.afterArticle = this.postList[ind+1]
            this.beforeArticle = this.postList[ind-1]
        }

    },
    beforeDestroy(){
        
    },
    methods: {
        fn(){
                this.showArticle = false
                this.src = this.$route.query.name
                this.targetArticle = this.postList.filter(item=>item.postName===this.$route.query.name)[0] 
                Vue.component('ar_markdown',res=>require([`@/assets/post/${this.src}.md`],res));
                this.showArticle = true
                this.$router.go(0)
        },
        toTags(item){
            this.$router.push('/tags')
            item
            PubSub.publish('toTags',item)
        }
    },
    watch: {
        '$route':'fn'
    },
};
</script>

<style lang="less" scoped>
.top{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    .name{
        margin: 5px 0;
        font-size: 20px;
        font-weight: 900;
    }
    .nextRow{
        margin: 5px 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items:center;
        .time{
            flex: 1;
            color: rgb(81, 93, 94);
        }
        .tags{
            max-width: 150px;
            span{
                margin: 0 3px;
                padding: 5px 10px;
                background: black;
                color: #fff;
                border-radius:10px;
                cursor: pointer;
                transition: all 0.5s;
            }
            span:hover{
                background: rgba(85, 85, 85, 0.5);
            }
        }
    }
}
.footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    .footer_card{
        padding:10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 49%;
        background:rgba(255, 255, 255, 0.8);
        border-radius:20px;
        .footer_text{
            background: rgba(0, 0, 0, 0.8);
            width: 100px;
            height: 40px;
            color: #fff;
            text-align: center;
            line-height: 40px;
            border-radius: 20px;
        }
    }
}
</style>