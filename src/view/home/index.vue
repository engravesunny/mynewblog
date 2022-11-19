<template>
    <div>
        <el-card style="background:rgba(255, 255, 255, 0.5);" >
            <div class="markdown-body">
                <markdown-post>
                    <template v-slot:footer>
                        <div>test</div>
                        <button>footer</button>
                    </template>
                </markdown-post>
            </div>
        </el-card>
    </div>
</template>

<script>
import markdownPost from '@/assets/post/9.26笔记.md'
export default {
    name: 'blog-home',
    components:{
        markdownPost
    },
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

<style lang="scss" scoped>

</style>