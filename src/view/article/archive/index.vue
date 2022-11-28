<template>
    <div>
        <el-card style="background:rgba(255, 255, 255, 0.5);width:100%" >
            <h1>历史博文</h1>
            <el-card style="background:rgba(255, 255, 255, 0);border:0;box-shadow:none" class="date-card" v-for="(date,index) in postDate" :key="index" >
                <div class="title"><h2>{{date}}</h2></div>
                <el-card style="background:rgba(255, 255, 255, 0.5);width:100%">
                    <ul style="display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;width: 100%;padding:10px">
                        <li class="post-list" v-for="(item,index) in postList" :key="index">
                            <div class="post-name" @click="toArticle(item.postName)">{{item.postName}}</div>
                            <div class="post-date"><i class="el-icon-time"></i> {{item.date}}</div>
                        </li>
                    </ul>
                </el-card>
            </el-card>
        </el-card>
    </div>
</template>

<script>
import postInfo from '@/assets/post/postInfo';
export default {
    name: 'archive-blog',
    components:{
    },
    data() {
        return {
            postList:[],
            postDate:[]
        };
    },
    created(){
        this.postList = postInfo.posts
        this.postDate = postInfo.postDate
    },
    mounted() {
        
    },

    methods: {
        toArticle(name){
            this.$router.push({name:'article',query:{name:`${name}`}})
        }
    },
};
</script>

<style lang="less" scoped>
.date-card{
    margin: 20px;
    width:45vw;
}
.title{
    font-size: larger;

}
.post-list{
    margin: 30px;
}
.post-name{
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
}
.post-name:hover{
    color: rgb(251, 138, 138);
    text-decoration: underline;
}
.post-date{
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
}
</style>