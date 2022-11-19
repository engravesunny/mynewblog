<template>
    <div class="footer">
        <el-row class="iconContainer" type="flex" justify="center" >
            <el-col class="iconLeft" >致敬还在写博客的我们</el-col>
            <el-col class="iconRight">
                <el-row type="flex" justify="space-between" style="width:100%;padding-left:70px" >
                    <el-col :span="5">KECAT.COM</el-col>
                    <el-col :span="8">keqing-hutao@outlook.com</el-col>
                    <el-col :span="8">QQ群:XXXXXXXX</el-col>
                </el-row>
            </el-col>
        </el-row>
        <div class="footerContainer">
            <span>Powered by <a href="">Vue</a>&<a>Element-UI</a></span>
            <a href="https://beian.miit.gov.cn/" >苏ICP备xxxxxxxx号-x</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogFooter',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.footer{
    margin-top: 20px;
    width: 100%;
    height: 30vh;
    .iconContainer{
        width:100%;
        height: 70%;
        background: rgba(0, 0, 0, 0.5);
        .iconLeft{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30%;
            border-right: 1px solid rgba(255, 255, 255, 0.5);
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            font-family: "仓耳渔阳体 W03";
            font-size: 25px;
            color: #fff;
        }
        .iconRight{
            display: flex;
            flex: 1;
            justify-content: space-around;
            align-items: center;
            font-family: "仓耳渔阳体 W03";
            font-size: 16px;
            color: #fff;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        }
    }
    .footerContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:100%;
        height: 30%;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        a{
            text-decoration: none;
            color: #fff;
            cursor: pointer;
        }
        a:hover{
            color: antiquewhite;
        }
    }
}
</style>