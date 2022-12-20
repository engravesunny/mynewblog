<template>
    <div class="layout-container">
        <!-- 首页顶部效果 -->
        <home-top v-if="$route.path === '/home'" ></home-top>
        <!-- 站位 -->
        <div v-if="!($route.path === '/home')" style="height:80px"></div>
        <!-- 顶部导航栏 -->
        <el-menu v-if="showTopMenu" :router="true" class="nav-container" mode="horizontal" text-color="#2c3e50" :style="{opacity:topOpacity}">
            <el-row type="flex" justify="space-between" style="z-index:9999" >
                <el-row type="flex" justify="start" align="middle">
                    <el-col style="width:60px" >
                        <el-image :src="logoSrc" fit="contain" style="display:block;width:50px;height:50px" ></el-image>
                    </el-col>
                    <el-col style="width:300px" >
                        <span style="font-weight:800;font-size:larger;cursor:pointer" @click="$router.push('/home')" >刻猫猫的笔记本</span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="end"> 
                    <el-menu-item style="width:90px" index="home">首页</el-menu-item>
                    <el-submenu style="width:90px" index="2">
                        <template slot="title">文章</template>
                        <el-menu-item index="tags">标签</el-menu-item>
                        <el-menu-item index="category">分类</el-menu-item>
                        <el-menu-item index="archive">归档</el-menu-item>
                    </el-submenu>
                    <el-submenu style="width:90px" index="3">
                        <template slot="title">导航</template>
                        <el-menu-item index="common_web">常用网站</el-menu-item>
                        <el-menu-item index="person_web">个人导航</el-menu-item>
                    </el-submenu>
                    <el-submenu style="width:90px" index="4">
                        <template slot="title">媒体</template>
                        <el-menu-item index="photo">相册</el-menu-item>
                        <el-menu-item index="video">视频</el-menu-item>
                        <el-menu-item index="anime">追番</el-menu-item>
                    </el-submenu>
                    <el-submenu style="width:100px" index="5" :popper-append-to-body="true">
                        <template slot="title">实验室</template>
                        <el-menu-item index="5-1">时间</el-menu-item>
                        <el-menu-item index="5-2">新年倒计时</el-menu-item>
                        <el-menu-item index="5-3">国庆头像生成</el-menu-item>
                    </el-submenu>
                    <el-submenu style="width:90px" index="6">
                        <template slot="title">关于</template>
                        <el-menu-item index="me">关于我</el-menu-item>
                        <el-menu-item index="comment">留言</el-menu-item>
                        <el-menu-item index="friend">友链</el-menu-item>
                    </el-submenu>
                    <!-- 搜索框 -->
                    <el-row type="flex" justify="center" align="middle">
                        <el-col style="width:100%;height:50%" >
                            <el-button 
                            v-if="!isSearch" 
                            icon="el-icon-search" 
                            @click="isSearch=true" 
                            style="background:rgba(255,255,255,0.5);border-radius:15px;height:25px;padding-top:6px;"
                            ></el-button>
                            <input v-else 
                            class="inputBox" 
                            type="text" 
                            placeholder="搜索" 
                            v-model="searchText"
                            @blur="isSearch=false"
                            />
                        </el-col>
                    </el-row>
                    <el-menu-item style="width:90px" index="login">登录</el-menu-item>
                </el-row>
            </el-row>
        </el-menu>

        
        <!-- 子路由出口 -->
        <el-row type="flex" justify="center" style="width:75%;margin:20px auto 0">
            <div style="flex:1;width:70%">
                <router-view></router-view>
            </div>
            <el-col v-if="isFixed&&showRightSidebar||$route.path!=='/home'" :span="6" style="width:25%">
            <!-- <el-col v-if="true" :span="6" style="width:16vw"> -->
                <el-card class="placeOrder">
                    <el-card style="width:96%;height:620px;margin-left:30px;box-shadow:none;border:0;border-radius:30px;overflow-y:auto;background:rgba(255,255, 255, 0)" body-style="padding:0">
                        <el-row style="width:100%"></el-row>
                    </el-card>
                </el-card>
            </el-col>

            <!-- 右侧导航栏 -->
            <right-sidebar :isFixed="isFixed" v-if="showRightSidebar&&$route.path!=='/home'"></right-sidebar>

        </el-row>

        <!-- 回到顶部按钮 -->
        <to-top v-if="showToTop" class="to-top"></to-top>

        <!-- 页面底部 -->
        <blog-footer></blog-footer>
    </div>
</template>

<script>
import homeTop from '@/view/layout/components/homeTop'
import RightSidebar from '@/view/layout/components/RightSidebar'
import blogFooter from '@/view/layout/components/footer'
import toTop from '@/view/layout/components/toTop'
export default {
    name: 'blog-layout',
    components:{
        RightSidebar,
        homeTop,
        blogFooter,
        toTop
    },
    data() {
        return {
            isSearch: false,
            searchText: '',
            logoSrc:require('@/assets/img/logo.png'),
            topOpacity:1,
            showRightSidebar:window.innerWidth>1132,
            showToTop:false,
            isFixed:false,
            isPlaceOrder:true,
            showTopMenu:true
        };
    },
    mounted(){
        window.addEventListener('scroll',this.scroll)
        window.addEventListener('resize',() => {
            if(window.innerWidth<1132){
                this.showRightSidebar = false
            } else {
                this.showRightSidebar = true
            }
        })
        window.addEventListener('scroll',this.toTopShow)
    },
    beforeDestroy(){
        window.removeEventListener('scroll')
        window.removeEventListener('resize')
    },
    methods:{
        scroll(){
            this.topOpacity = 76/window.scrollY
            if(this.topOpacity<=0.15){
                this.topOpacity = 0
                this.showTopMenu = false
            } else {
                this.showTopMenu = true
            }
        },
        toTopShow(){
            let windowHeight = window.innerHeight
            if(window.scrollY>windowHeight*2){
                this.showToTop = true
            } else {
                this.showToTop = false
            }
        }
    },
    computed:{
        card_opacity(){
            if(this.$route.path === '/home') {
                return 0.5
            } else {
                return 0
            }
        },
        right_border(){
            if(this.$route.path === '/home') {
                return 1
            } else {
                return 0
            }
        },
        right_boxShadow(){
            if(this.$route.path === '/home') {
                return ''
            } else {
                return 'none'
            }
        }
    }
};
</script>

<style lang="less" scoped>
.placeOrder{
    width:17.5vw;
    height:620px;
    margin-left:30px;
    box-shadow:none;
    border:0;
    border-radius:30px;
    overflow:hidden;
    background:rgba(255,255, 255, 0);
    transition: none;
}
.nav-container{
    position:fixed;
    top:0;
    width:100vw;
    border:0;
    background:rgba(255,255, 255, 0.2);
    margin:0;
    z-index:999;
}
.test {
    font-weight: 900;
}
.layout-container{
    padding: 0;
    margin: 0;
    background-image: url('@/assets/img/2.jpg');
    background-attachment:fixed;
    background-size: cover;
    background-repeat: no-repeat;
}
.inputBox{
    padding-left: 15px;
    width: 120px;
    height: 25px;
    border: 0;
    background:rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    outline-color: #5780aa96;
    color: #2c3e50;
    font-size: 16px;
    transition: all 0.5;
}
.to-top{
    position: fixed;
    bottom: 0px;
    right: 0px;
}
.right-sidebar-container{
    width: 100vw;
    border-radius: 25px;
}

</style>