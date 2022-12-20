<template>
    <div>
        <el-card style="background:rgba(255, 255, 255, 0.5);width:100%" >
            <el-card style="width:96%;margin-left:30px;box-shadow:none;border:0;border-radius:30px;background:rgba(255,255, 255, 0)" body-style="padding:0">
                <!-- 第一栏博客信息 -->
                <el-card style="background:rgba(255, 255, 255, 0.5);width:99%;border-radius:30px;margin-bottom:15px">
                    <el-row>
                        <el-col :span="6" style="border-right:2px solid rgba(0, 0, 0, 0.4)">
                            <el-row type="flex" justify="center" align="center" >
                                <el-image class="avatar" :src="imgSrc" fit="cover" style="margin-bottom:5px;width:100px;height:100px;border-radius:50%"></el-image>
                            </el-row>
                            <el-row type="flex" justify="center">
                                <el-col :span="8" style="width:100%">
                                    <div style="width:100%;text-align:center;cursor:pointer" >文章</div>
                                </el-col>
                                <el-col :span="8" style="width:100%">
                                    <div @click="$router.push('/tags')" style="cursor:pointer;width:100%;text-align:center;border-left:1px solid black;border-right:1px solid black" >标签</div>
                                </el-col>
                                <el-col :span="8" style="width:100%">
                                    <div @click="$router.push('/category')" style="width:100%;text-align:center;cursor:pointer" >类别</div>
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center">
                                <el-col :span="8" style="width:100%">
                                    <div style="cursor:pointer;width:100%;text-align:center" >{{articleNumber}}</div>
                                </el-col>
                                <el-col :span="8" style="width:100%">
                                    <div @click="$router.push('/tags')" style="cursor:pointer;width:100%;text-align:center;border-left:1px solid black;border-right:1px solid black" >{{tagsNumber}}</div>
                                </el-col>
                                <el-col :span="8" style="width:100%">
                                    <div @click="$router.push('/category')" style="cursor:pointer;width:100%;text-align:center" >{{categoryNumber}}</div>
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center">
                                <el-button type="primary" style="width:90%;margin-top:5px;font-size:100%;font-weight:900" round >Github</el-button>
                            </el-row>
                        </el-col>
                        <el-col :span="18">
                            <p class="home_text">很多人曾问我，搭建这么一个博客有何作用？只是为了在像宇宙般浩瀚的互联网上留下一点属于自己的足迹？确实，我是抱着这么一种心态来搭建这个博客的，也许不会有多少人进入到这个博客，也许这个博客不会传播多少有用的知识，但是我还是想在这片浩瀚之地，划出属于自己的一块乌托邦之地。写完一篇文章，部署后再自己反复观看，我觉得这是一种很愉悦的事情。在不知不觉中，你就会写下很多篇博文，可能只是记录生活，亦或者是教程，但这些都是美好的回忆，在五年十年后，再回过头来看这些自己曾经留下的足迹，这也是一件美好的事情。希望屏幕前的你，能从这个地方，收获到什么吧！</p>
                        </el-col>
                    </el-row>
                </el-card>

                <!-- 第二栏链接 -->
                <el-card class="link" style="background:rgba(255, 255, 255, 0.5);width:99%;border-radius:30px;margin-bottom:15px">
                    <el-row>
                        <el-col :span="18">
                            <el-row>
                                <el-col :span="16">
                                    <img style="display:block;width:25vw;border-radius:15px" v-lazy="home_img1" alt="瑟瑟发抖">
                                </el-col>
                                <el-col :span="8">
                                    <img style="display:block;width:14vw;border-radius:15px" v-lazy="home_img2" alt="瑟瑟发抖">
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="6">
                            <el-row type="flex" justify="center" >
                                <el-col :span="8" style="width:100%">
                                    <el-row type="flex" justify="center" >
                                        <a :href="qqHref" target="_blank"><i class="icon1 iconfont icon-QQ"></i></a>
                                    </el-row>
                                </el-col>
                                <el-col :span="8" style="width:100%">
                                    <el-row type="flex" justify="center" >
                                        <a :href="wechatHref" target="_blank"><i class="icon2 iconfont icon-wechat-fill"></i></a>
                                    </el-row>
                                </el-col>
                                <el-col :span="8" style="width:100%">
                                    <el-row type="flex" justify="center" >
                                        <a :href="githubHref" target="_blank"><i class="icon3 iconfont icon-github-fill"></i></a>
                                    </el-row>
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center" >
                                <el-col :span="8" style="width:100%">
                                    <el-row type="flex" justify="center" >
                                        <a :href="bilibiliHref" target="_blank"><i class="icon4 iconfont icon-bilibili"></i></a>
                                    </el-row>
                                </el-col>
                                <el-col :span="8" style="width:100%">
                                    <el-row type="flex" justify="center" >
                                        <a :href="neteaseHref" target="_blank"><i class="icon5 iconfont icon-netease-cloud-music-line"></i></a>
                                    </el-row>
                                </el-col>
                                <el-col :span="8" style="width:100%">
                                    <el-row type="flex" justify="center" >
                                        <a :href="emailHref" target="_blank"><i class="icon6 iconfont icon-youxiang"></i></a>
                                    </el-row>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col>
                                    <p class="home_text">
                                        我轻度社恐（正在努力克服）,但或许我们有些共同的兴趣,或许我们可以成为志同道合的朋友
                                    </p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-card>

                <!-- 第三栏文章分类&文章标签 -->
                <el-card style="background:rgba(255, 255, 255, 0.5);width:99%;border-radius:30px;margin-bottom:15px">
                    <!-- 顶部按钮 -->
                    <el-card style="background:rgba(255, 255, 255, 0.5);width:99%;border-radius:30px;margin-bottom:15px">
                        <el-row type="flex" justify="center">
                            <el-col :span="12"  style="border-right:3px solid rgba(0, 0, 0, 0.3)">
                                <el-row type="flex" justify="center">
                                    <el-button @click="showCategory=true" type="text" class="home_btn">文章分类</el-button>
                                </el-row>
                            </el-col>
                            <el-col :span="12">
                                <el-row type="flex" justify="center">
                                    <el-button @click="showCategory=false" type="text" class="home_btn">文章标签</el-button>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-card>
                    <!-- 分类页 -->
                    <el-card v-if="showCategory" style="background:rgba(255, 255, 255, 0.5);width:99%;border-radius:30px;margin-bottom:15px">
                        <div class="category-container">
                            <div v-for="(item,index) in category" :key="index" style="text-align:center">
                                <div @click="toCategory(item)" class="category-card" :style="{backgroundColor:`${color[Math.floor(Math.random()*7)]}`}" >
                                    {{ item }} 
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <!-- 标签页 -->
                    <el-card v-else style="background:rgba(255, 255, 255, 0.5);width:99%;border-radius:30px;margin-bottom:15px">
                        <div class="tags_box">
                            <div class="tags_item" v-for="(item,index) in tagsList" :key="index">
                                <div class="tags_text" @click="toTags(item)"  :style="{fontSize:`${(1+tagsNumList.filter(tag=>tag===item).length/5)*20}px`,color:`${textColor[Math.floor(Math.random()*7)]}`}">
                                    {{item}}
                                    <div class="num">
                                        {{tagsNumList.filter(tag=>tag===item).length}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-card>

                <!-- 第四栏最新文章 -->
                <el-card style="background:rgba(255, 255, 255, 0.5);width:99%;border-radius:30px;margin-bottom:15px">
                    <div class="article_list">
                        <div class="list_title">最新文章</div>
                        <div class="list">
                            <article-card 
                                v-for="(item,index) in articleList" 
                                :key="index" 
                                :date="item.date"
                                :ar_title="item.postName"
                                :ar_category="item.name"
                                :ar_tags="item.tags"
                            ></article-card>
                        </div>
                    </div>
                </el-card>
            </el-card>
        </el-card>
    </div>
</template>

<script>
import postInfo from '@/assets/post/postInfo';
import articleCard from '@/components/articleCard'
import PubSub from 'pubsub-js';
export default {
    name: 'blog-home',
    components: {
        // articleList,
        // latestArticle,
        // myNotice
        articleCard
    },
    data() {
        return {
            imgSrc:require('@/assets/img/avatar.jpg'),
            bilibiliHref: 'https://space.bilibili.com/244375982?spm_id_from=333.1007.0.0',
            githubHref: 'https://github.com/Engravesunny',
            qqHref:'https://user.qzone.qq.com/3170557037/main',
            wechatHref: 'https://weixin.qq.com/',
            emailHref: 'https://hutao-keqing@outlook.com',
            neteaseHref: 'https://music.163.com/#/user/home?id=427854158',
            friendLink1: 'https://blogwe.com/',
            friendLink2: 'https://haozi.moe/',
            friendLink3: 'https://owomoe.net/',
            friendImg1: require('@/assets/img/07.png'),
            friendImg2: require('@/assets/img/08.png'),
            friendImg3: require('@/assets/img/11.png'),
            active: true,
            tagsNumber:0,
            categoryNumber:0,
            articleNumber:0,
            home_img1:require('@/assets/img/home_img1.gif'),
            home_img2:require('@/assets/img/home_img2.gif'),
            color:['rgb(249, 235, 234)','rgb(245, 238, 248)','rgb(213, 245, 227)','rgb(232, 248, 245)','rgb(254, 249, 231)','rgb(248, 249, 249)','rgb(130, 224, 170)'],
            textColor:['rgb(133, 200, 234)','rgb(195, 132, 224)','rgb(37, 93, 168)','rgb(0, 70, 132)','rgb(244, 192, 161)','rgb(164, 85, 68)','rgb(212, 242, 104)','rgb(219, 160, 50)'],
            category:[],
            tagsList:[],
            tagsNumList:[],
            showCategory:true,
            articleList:[]
        };
    },
    created(){
        let length = postInfo.posts.length
        for(let i = 0;i < 9;i++){
            this.articleList.push(postInfo.posts[length-i-1])
        }
        console.log(this.articleList);
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
        this.category=postInfo.categories
        let arr = []
        postInfo.posts.forEach(post => {
            post.tags.forEach(tag=>{
                if(arr.every(item=>item!==tag)){
                    arr.push(tag)
                }
            })
        });
        // console.log('标签',arr);
        this.tagsNumber = arr.length
        arr = []
        arr = postInfo.categories
        // console.log('分类',arr);
        this.categoryNumber = arr.length
        arr = postInfo.posts
        this.articleNumber = arr.length
        // console.log(this.tagsNumber,this.categoryNumber,this.articleNumber);
    }, 
    mounted() {
        // console.log(this);
        // console.log(this.$refs.component);
    },

    methods: {
        toCategory(item){
            this.$router.push('/category')
            PubSub.publish('toCategory',item)
        },
        toTags(item){
            this.$router.push('/tags')
            PubSub.publish('toTags',item)
        }
    },

};
</script>

<style lang="less" scoped>
.list_title{
    padding: 0 20px 30px 0;
    letter-spacing: 2px;
    font-family: "仓耳渔阳体 W03";
    font-weight: 800;
    text-align: center;
    font-size: 4vh;
    color: rgba(0, 0, 0, 0.7);
}
.list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.tags_box{
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
    transition: all 0.5s;
}
.tags_item{
    margin: 10px;
    transition: all 0.5s;
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
.home_text{
    padding: 0 20px;
    letter-spacing: 2px;
    font-family: "仓耳渔阳体 W03";
    font-weight: 800;
    text-align: center;
    font-size: 2vh;
    color: rgba(0, 0, 0, 0.7);
}
.home_btn{
    font-size: 24px;
    font-family: "仓耳渔阳体 W03";
    color: rgba(0, 0, 0, 0.7);
    font-weight: 800;
}

.avatar:hover{
    animation:bounce;
    animation-duration: 1s;
}
.icon1{
    font-size: 40px;
    color: rgb(76, 175, 233);
}
.icon2{
    font-size: 40px;
    color: rgb(76, 191, 0);
}
.icon3{
    font-size: 40px;
    color: black;
}
.icon4{
    font-size: 35px;
    color: rgb(241, 71, 103);
}
.icon5{
    font-size: 40px;
    color:rgb(231, 45, 44);
}
.icon6{
    font-size: 40px;
    color: black;
}
.link a{
    margin: 10px auto;
    padding: 5px;
    text-decoration: none;
    text-align: center;
    border-radius: 15px;
    width: 40px;
    height: 40px;
    background-color:rgb(182, 217, 245);
}
</style>