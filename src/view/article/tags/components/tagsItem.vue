<template>
    <div class="card-container">
        <!-- 要传入ar_title date ar_category ar_tags -->
            <article-card 
                v-for="(item,index) in tagsList" 
                :key="index"
                :ar_title="item.postName"
                :date="item.date"
                :ar_category="item.name"
                :ar_tags="item.tags"
            />
    </div>
</template>

<script>
import articleCard from '@/components/articleCard'
export default {
    name: 'TagsItem',
    props:{
        postInfo:{
            type:Object,
            required:true
        },
        tagName:{
            type:String,
            required:true
        }
    },
    components:{
        articleCard
    },
    data() {
        return {

        };
    },
    created(){
        // this.categoryList = this.postInfo.posts
        console.log(this.postInfo);
        console.log(this.tagName);
        console.log('种类',this.tagsList);
    },
    computed:{
        tagsList(){
            return this.postInfo.posts.filter(item=>item.tags.some(tag=>tag==this.tagName))
        }
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.card-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}
</style>