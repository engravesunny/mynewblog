<template>
    <div class="notice-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'NoticeItem',

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
.notice-item{
    width: 100%;
    padding: 5px;
    font-size: 16px;
    border-radius: 20px;
    color: rgb(223, 129, 144);
    cursor: pointer;
}
.notice-item:hover{
    background-color: rgb(226, 228, 243);
    color: #FFF;
}
</style>