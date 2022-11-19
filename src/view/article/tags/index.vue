<template>
    <div>
        <el-card style="background:rgba(255, 255, 255, 0.5);" >
            <div class="markdown-body">
                <blog-tags>
                    <template v-slot:footer>
                        <div>test</div>
                        <button>footer</button>
                    </template>
                </blog-tags>
            </div>
        </el-card>
    </div>
</template>

<script>
import blogTags from '@/assets/post/关于用户token的处理.md'
export default {
    name: 'tags-blog',
    components:{
        blogTags
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