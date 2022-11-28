<template>
    <!-- 雷达图  图表必须给高和宽度-->
    <div ref="myDiv" class="radar-echart" />
</template>
<script>
// 完成加载过程
// var echarts = require('echarts')
var echarts = require('echarts/lib/echarts') // 引入echarts主模块
require('echarts/lib/chart/radar') // 引入雷达图
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import { LegendComponent } from 'echarts/components';
echarts.use([LegendComponent]);

export default {
    // 页面渲染完毕事件
    props:{
        postInfo:{
            type:Array,
            default:() => []
        },
        posts:{
            type:Array,
            default:()=>[]
        }
    },
    mounted() {
        const that = this
        const myChart = echarts.init(this.$refs.myDiv) // 得到图表实例
        myChart.setOption({
            title: {
                text: '文章分类'
            },
            tooltip: {},
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                // 每个区域的最高值
                indicator: [
                    ...that.postInfo
                ]
            },
            series: [{
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: [
                            this.posts.filter(item=>item.name==='React').length, 
                            this.posts.filter(item=>item.name==='Vue').length, 
                            this.posts.filter(item=>item.name==='项目总结').length, 
                            this.posts.filter(item=>item.name==='日常笔记').length, 
                            this.posts.filter(item=>item.name==='自主学习').length, 
                            this.posts.filter(item=>item.name==='生活趣事').length, 
                            
                        ],
                        name: '文章分类'
                    }
                ]
            }]
        })
    }
}
</script>

<style>
.radar-echart {
    width: 43vw;
    height: 50vh;
}
</style>