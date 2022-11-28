<template>
    <!-- 文章详情页 -->
    <div>
        <el-card style="background:rgba(255, 255, 255, 0.5);width:100%" >
            <div class="markdown-body">
                <ar_markdown v-if="showArticle">
                    <template v-slot:footer>
                        <div>test</div>
                        <button>footer</button>
                    </template>
                </ar_markdown>
            </div>
        </el-card>
        <!-- <el-card>
            <ar_markdown>
                <template v-slot:footer>
                    <div>test</div>
                    <button>footer</button>
                </template>
            </ar_markdown>
        </el-card> -->
    </div>
</template>

<script>
// import asyncLoadComp from '@/components/asyncLoadComp.vue';
import Vue from 'vue'
export default {
    name: 'ArticleDetail',
    data() {
        return {
            src:this.$route.query.name,
            showArticle:false
        };
    },
    created(){
        this.showArticle = false
        Vue.component('ar_markdown',res=>require([`@/assets/post/${this.src}.md`],res));
        this.showArticle = true
    },
    mounted() {
        
    },
    beforeDestroy(){
        
    },
    methods: {
        fn(){
                this.showArticle = false
                this.src = this.$route.query.name
                Vue.component('ar_markdown',res=>require([`@/assets/post/${this.src}.md`],res));
                this.showArticle = true
        }
    },
    watch: {
        '$route':'fn'
    },
};
</script>

<style lang="scss" scoped>

</style>