<template>
    <div class="login-container">
        <el-card style="width:55vw;height:60vh">
            <div style="float:left">
                <p style="font-size:40px;font-family:'仓耳渔阳体 W03';font-weight:900">万分抱歉！！！</p>
                <p style="font-size:40px;font-family:'仓耳渔阳体 W03';font-weight:900">这个模块还在开发ing</p>
            </div>
            <img src="@/assets/img/QQ图片20221128210011.gif" style="float:left;width:25vw" alt=""/>
        </el-card>
        <el-card v-if="isLogin" class="login-box">
            <div class="title">
                <span>登录</span>
            </div>
            <el-form ref="loginForm" :model="loginForm"  style="width:30vw" label-width="120px" >
                <el-form-item label="用户名/邮箱：" prop="username">
                    <el-input style="width:50%" v-model="loginForm.username" ></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password" >
                    <el-input style="width:50%" v-model="loginForm.password"></el-input>
                </el-form-item>
            </el-form>
            <el-row type="flex" justify="center" align="center" >
                <el-col :span="8">
                    <el-button @click="signIn" >登录</el-button>
                    <el-button @click="signUp">注册</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card v-else class="signup-box">
            <!-- <div style="width:100%;height:100%" > -->
                <div class="title">
                    <span>注册</span>
                </div>
                <el-form ref="loginForm" :model="loginForm" style="width:30vw" label-width="140px" >
                    <el-form-item label="用户名：" prop="username">
                        <el-input style="width:50%" v-model="signForm.username" ></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱：" prop="email">
                        <el-input style="width:50%" v-model="signForm.email" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password" >
                        <el-input style="width:50%" v-model="signForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="再次确认密码：" prop="repeatPassword" >
                        <el-input style="width:50%" v-model="signForm.repeatPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码：" prop="code" >
                        <el-input style="width:50%" v-model="signForm.code"></el-input>
                        <el-button @click="sendCode" >发送验证码</el-button>
                    </el-form-item>
                </el-form>
                <el-row type="flex" justify="center" align="center" >
                    <el-col :span="8">
                        <el-button @click="signIn" >登录</el-button>
                        <el-button @click="signUp">注册</el-button>
                    </el-col>
                </el-row>
            <!-- </div> -->
        </el-card>
    </div>
</template>

<script>
// import { register,sendCode,Pin,login } from '@/api/login';
// 
export default {
    name: 'LoginBlog',

    data() {
        return {
            isLogin: true,
            loginForm:{
                username:'',
                password: ''
            },
            signForm:{
                username: '',
                password: '',
                repeatPassword: '',
                email:'',
                code:''
            },
            loginRules:{
                username:[
                    { required: true, message: '请输入用户名/邮箱', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },
            signRules:{
                username:[
                    { required: true, message: '请输入用户名/邮箱', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                email:[
                    { required: true, message: '请输入用户名/邮箱', trigger: 'blur' }
                ],
                repeatPassword:[
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
            }
        };
    },

    mounted() {
        
    },

    methods: {
        async signIn(){
            // if(this.isLogin === true) {
            //     const data = await login(this.loginForm)
            //     console.log(data);
            // } else {
            //     this.isLogin = true
            // }
        },
        signUp(){
            // if(this.isLogin === false) {
            //     this.$refs.loginForm.validate(async isOK => {
            //         if(isOK) {
            //             const data = await register(this.signForm)
            //             if(data.code) {
            //                 this.$message.success('注册成功')
            //                 this.isLogin = true
            //             } else {
            //                 this.$message.warning(data.message)
            //             }
            //         }
            //     })
            // } else {
            //     this.isLogin = false
            // }
        },
        async sendCode(){
            // await sendCode({email:this.signForm.email})
        },
        async pin(){
            // await Pin()
        }
    },
};
</script>
<style lang="less" scoped>
.login-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/img/3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    .login-box{
        width:33vw;
        height: 36vh;
        background:rgba(255,255, 255, 0.5);
        border: 0ch;
        border-radius: 25px;
        transition: all 0.5;
        .title{
            font-size: 33px;
            font-weight: 100;
            color: #fff;
            transition: all 0.5;
        }
    }

    .signup-box{
        width:37vw;
        height: 60vh;
        background:rgba(255,255, 255, 0.5);

        border: 0ch;
        border-radius: 25px;
        transition: all 0.5;
        .title{
            font-size: 33px;
            font-weight: 100;
            color: #fff;
            transition: all 0.5;
        }
    }
}


</style>