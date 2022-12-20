<template>
    <!-- 右侧展示区 -->
    <!-- :class="{'right-sidebar':$route.path==='/home'&&!isFixed,'right-sidebar-fixed':$route.path!=='/home'||isFixed}" -->
    <el-col :class="{'is-fixed':$route.path!=='/home'||isFixed}">
        <el-card class="right-sidebar"  body-style="padding:0">
            <el-card style="width:96%;height:60vh;margin-left:30px;box-shadow:none;border:0;border-radius:30px;overflow-y:auto;background:rgba(255,255, 255, 0)" body-style="padding:0">
                <!-- 第一栏博客信息 -->
                <el-card style="width:99%;border-radius:30px;margin-bottom:15px">
                    <el-row type="flex" justify="center" align="center" >
                        <el-image class="avatar" :src="imgSrc" fit="cover" style="margin-bottom:5px;width:100px;height:100px;border-radius:50%"></el-image>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="8" style="width:100%">
                            <div style="width:100%;text-align:center" >文章</div>
                        </el-col>
                        <el-col :span="8" style="width:100%">
                            <div style="width:100%;text-align:center;border-left:1px solid black;border-right:1px solid black" >标签</div>
                        </el-col>
                        <el-col :span="8" style="width:100%">
                            <div style="width:100%;text-align:center" >类别</div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="8" style="width:100%">
                            <div style="width:100%;text-align:center" >{{posts.length}}</div>
                        </el-col>
                        <el-col :span="8" style="width:100%">
                            <div style="width:100%;text-align:center;border-left:1px solid black;border-right:1px solid black" >{{tags.length}}</div>
                        </el-col>
                        <el-col :span="8" style="width:100%">
                            <div style="width:100%;text-align:center" >{{categories.length}}</div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-button @click="logWindow" type="primary" style="width:90%;margin-top:5px;font-size:100%;font-weight:900" round >Github</el-button>
                    </el-row>
                </el-card>
    
                <!-- 第二栏链接 -->
                <el-card class="link" style="width:99%;border-radius:30px;margin-bottom:15px">
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
                </el-card>
    
                <!-- 第三栏友链
                <el-card style="width:99%;border-radius:30px;margin-bottom:15px">
                    <el-row type="flex" justify="center">
                        <el-col :span="8"  style="width:100%">
                            <a :href="friendLink1" target="_blank" style="width:100%;text-align:center">
                                <el-image 
                                    :src="friendImg1"
                                    fit="cover" 
                                    style="margin-bottom:5px;width:65px;height:65px;border-radius:50%"
                                ></el-image>
                            </a>
                        </el-col>
                        <el-col :span="8"  style="width:100%">
                            <a :href="friendLink2" target="_blank" style="width:100%;text-align:center">
                                <el-image 
                                    :src="friendImg2"
                                    fit="cover" 
                                    style="margin-bottom:5px;width:65px;height:65px;border-radius:50%"
                                ></el-image>
                            </a>
                        </el-col>
                        <el-col :span="8"  style="width:100%">
                            <a :href="friendLink3" target="_blank" style="width:100%;text-align:center">
                                <el-image 
                                    :src="friendImg3"
                                    fit="cover" 
                                    style="margin-bottom:5px;width:65px;height:65px;border-radius:50%"
                                ></el-image>
                            </a>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="8"  style="width:100%">
                            <div class="friendNameContainer">
                                <div class="friendName">BlogWe</div>
                            </div>
                        </el-col>
                        <el-col :span="8"  style="width:100%">
                            <div class="friendNameContainer">
                                <div class="friendName">月子喵的窝</div>
                            </div>
                        </el-col>
                        <el-col :span="8"  style="width:100%">
                            <div class="friendNameContainer">
                                <div class="friendName">皮皮凛の小窝</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-card> -->
    
                <!-- 第四栏文章目录&最新文章 -->
                <el-card style="width:99%;border-radius:30px;margin-bottom:15px">


                    <!-- 切换按钮 -->
                    <el-row type="flex" justify="center">
                        <el-col :span="12">
                            <div style="width:100%;text-align:center" >
                                <el-button type="text" :class="{active: active }" @click="active=false">推荐文章</el-button>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div style="width:100%;text-align:center" >
                                <el-button type="text" :class="{active: !active }" @click="active=true">最新文章</el-button>
                            </div>
                        </el-col>
                    </el-row>

                    <!-- 文章目录 -->
                    <article-list v-if="!active"></article-list>

                    <!-- 最新文章 -->
                    <latest-article v-else></latest-article>
                </el-card>

                <!-- 第五栏公告 -->
                <el-card style="width:99%;border-radius:30px;margin-bottom:15px" body-style="padding-left:8px">
                    <my-notice></my-notice>
                </el-card>

            </el-card>
        </el-card>
    </el-col>
        
</template>

<script>
import articleList from '@/view/layout/components/articleList'
import latestArticle from '@/view/layout/components/latestArticle'
import myNotice from '@/view/layout/components/notice'
import postInfo from '@/assets/post/postInfo';
export default {
    name: 'RightSidebar',
    components: {
        articleList,
        latestArticle,
        myNotice
    },
    props:{
        isFixed:{
            type: Boolean,
            default: false
        }
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
            posts:[],
            tags:[],
            categories:[]
        };
    },
    created(){
        this.posts = postInfo.posts
        postInfo.posts.map(post=>{
            post.tags.map(tag=>{
                if(this.tags.every(item=>item!==tag)) {
                    this.tags.push(tag)
                }
            })
        })
        this.categories = postInfo.categories
    },
    mounted() {
        
    },

    methods: {
        logWindow(){
            window.location.href="https://github.com/Engravesunny"
        }
    },
};
</script>

<style lang="less" scoped>
.avatar:hover{
    animation:bounce;
    animation-duration: 1s;
}
.basePosition{
    width:100%;
    height:620px;
}
.is-fixed{
    position: fixed;
    top: 100px;
    right:17.4%;
    width:16.2%;
}
.right-sidebar{
    width:100%;
    height:60vh;
    margin-left:30px;
    box-shadow:none;
    border:0;
    border-radius:30px;
    overflow:hidden;
    background:rgba(255,255, 255, 0);
    transition: none;
    
}
.right-sidebar-fixed{
    position: fixed;
    top: 100px;
    right: 11.2%;
    width:16vw;
    height:620px;
    margin-left:30px;
    box-shadow:none;
    border:0;
    border-radius:30px;
    overflow:hidden;
    background:rgba(255,255, 255, 0);
    transition: none;
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
.friendNameContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    .friendName{
        text-align: center;
        width:90%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
}
.active{
    color: black;
}
</style>