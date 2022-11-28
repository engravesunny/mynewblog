<template>
    <div style="
    width:100%;
    word-wrap:break-word;
    word-break:break-all; 
    ">
    <ol>
        <li @click="toArticle(item.postName)" class="list_item" v-for="(item,index) in articleList" :key="index" >
            <notice-item>
                {{item.postName}}
            </notice-item>
        </li>
    </ol>
    </div>
</template>

<script>
import postInfo from '@/assets/post/postInfo';
import noticeItem from './notice/components/noticeItem.vue';
export default {
    name: 'LatestArticle',
    components:{
        noticeItem
    },
    data() {
        return {
            articleList:[]
        };
    },
    created(){
        const length = postInfo.posts.length
        for(let i = 0;i<9;i++){
            this.articleList.push(postInfo.posts[length-i-1])
        }
        console.log(this.articleList);
    },
    mounted() {
        
    },

    methods: {
        toArticle(item){
            this.$router.push({name:'article',query:{name:`${item}`}})
        }
    },
};
</script>
