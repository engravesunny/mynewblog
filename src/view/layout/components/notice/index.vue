<template>
    <div style="width:100%" >
        <div class="title">
            <!-- <el-image :src="require('@/assets/img/.png')" ></el-image> -->
            公告
        </div>
        <notice-item v-for="(item,index) in noticeList" :key="index" >{{ item }}</notice-item>
    </div>
</template>

<script>
import noticeItem from '@/view/layout/components/notice/components/noticeItem'
import { login } from '@/api/login'
export default {
    name: 'MyNotice',
    components:{
        noticeItem
    },
    data() {
        return {
            noticeList: ['这是一段公告']
        };
    },

    mounted() {
        
    },

    methods: {
        async login(){
            await login({
                username:this.text,
                password:this.password
            })
        }
    },
};
</script>

<style lang="less" scoped>
.title{
    font-size: 20px;
    font-weight: 900;
}
</style>