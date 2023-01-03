// const files = require.context('@/assets/post',true,/\.md$/)
const postInfo = {
    categories:[
        'Vue',
        'React',
        '项目总结',
        '自主学习',
        '日常笔记',
        '生活趣事',
        'Vue3'
    ],
    // name为category，取为name是为了方便雷达图
    categoryRadar:[
        { name:'React', max:50 },
        { name:'Vue', max:50 },
        { name:'项目总结', max:50 },
        { name:'日常笔记', max:50 },
        { name:'自主学习', max:50 },
        { name:'生活趣事', max:50 }
    ],
    postDate:['2022'],
    posts:[
        { postName:'9.27笔记生命周期和axios使用(下午课水了一下)', name:'Vue', tags:['Vue','笔记'],date:'2022-09-27 21:52:22' },
        { postName:'9.24-9.25笔记', name:'Vue', tags:['Vue','笔记'],date:'2022-09-25 23:22:22' },
        { postName:'9.28笔记', name:'Vue', tags:['Vue','笔记'],date:'2022-09-28 20:22:22' },
        { postName:'9.26笔记', name:'Vue', tags:['Vue','笔记'],date:'2022-09-26 23:32:22' },
        { postName:'9.29笔记', name:'Vue', tags:['Vue','笔记'],date:'2022-09-29 21:22:22' },
        { postName:'9.30笔记', name:'Vue', tags:['Vue','笔记'],date:'2022-09-30 22:22:22' },
        { postName:'10.1-3笔记', name:'React', tags:['React','笔记'],date:'2022-10-03 21:43:22' },
        { postName:'10.4笔记', name:'React', tags:['React','笔记'],date:'2022-10-04 23:45:22' },
        { postName:'10.5笔记', name:'React', tags:['React','笔记'],date:'2022-10-05 22:33:22' },
        { postName:'10.5(2)', name:'React', tags:['React','笔记'],date:'2022-10-05 23:22:22' },
        { postName:'10.6', name:'React', tags:['React','笔记'],date:'2022-10-06 20:22:22' },
        { postName:'10.7', name:'React', tags:['React','笔记'],date:'2022-10-07 20:22:22' },
        { postName:'10.8-10.9笔记', name:'自主学习', tags:['React','笔记'],date:'2022-10-09 20:22:22' },
        { postName:'10.10redux笔记', name:'React', tags:['Redux','React','笔记'],date:'2022-10-10 20:22:22' },
        { postName:'10.11-10.12又写了一遍网易云音乐案例', name:'自主学习', tags:['vue项目','网易云'],date:'2022-10-12 20:22:22' },
        { postName:'vue解析并渲染markdown文件', name:'自主学习', tags:['vue项目','markdown解析'],date:'2022-11-12 20:22:22' },
        { postName:'hexo博客主题安装与修改', name:'自主学习', tags:['hexo','博客美化'],date:'2022-10-10 20:22:22' },
        { postName:'工作日历组件', name:'自主学习', tags:['常用组件','日历'],date:'2022-11-08 20:22:22' },
        { postName:'关于.postcssrc.js配置文件', name:'项目总结', tags:['postcssrc','文件配置'],date:'2022-11-01 20:22:22' },
        { postName:'关于后端返回大数字的问题', name:'项目总结', tags:['大数字','后端数据'],date:'2022-11-01 20:22:22' },
        { postName:'关于用户token的处理', name:'项目总结', tags:['token','token处理'],date:'2022-10-24 20:22:22' },
        { postName:'后台项目登录模块', name:'项目总结', tags:['后台项目','登录模块'],date:'2022-10-28 20:22:22' },
        { postName:'后台项目路由和页面', name:'项目总结', tags:['后台项目','路由和页面'],date:'2022-10-29 20:22:22' },
        { postName:'后台项目权限设计和管理', name:'项目总结', tags:['后台项目','权限设计'],date:'2022-10-30 20:22:22' },
        { postName:'后台项目员工管理', name:'项目总结', tags:['后台项目','员工管理'],date:'2022-10-31 20:22:22' },
        { postName:'后台项目主页模块', name:'项目总结', tags:['后台项目','主页'],date:'2022-11-01 20:22:22' },
        { postName:'后台项目组织架构', name:'项目总结', tags:['后台项目','组织架构'],date:'2022-11-02 20:22:22' },
        { postName:'雷达图组件', name:'自主学习', tags:['常用组件','雷达图'],date:'2022-11-03 20:22:22' },
        { postName:'人力资源后台管理项目', name:'项目总结', tags:['后台项目'],date:'2022-11-04 20:22:22' },
        { postName:'提交表单的调用函数', name:'自主学习', tags:['表单校验'],date:'2022-11-04 21:22:22' },
        { postName:'项目打包与优化', name:'项目总结', tags:['项目优化'],date:'2022-11-05 21:22:22' },
        { postName:'优化设置Token', name:'项目总结', tags:['token'],date:'2022-11-05 21:22:22' },
        { postName:'在node.js中应用项目并代理跨域', name:'项目总结', tags:['部署项目'],date:'2022-11-05 21:22:22' },
        { postName:'vue3组合式API笔记', name:'Vue3',tags:['Vue3','组合式API','笔记'], date:'2022-11-29 0:30:11'},
        { postName:'form表单和模板引擎', name:'自主学习',tags:['前后端交互','form表单','笔记'], date:'2022-8-29 0:30:11'},
        { postName:'Ajax', name:'自主学习',tags:['前后端交互','Ajax','笔记'], date:'2022-8-30 11:32:11'},
        { postName:'防抖与节流', name:'自主学习',tags:['优化','笔记'], date:'2022-8-30 12:32:11'},
        { postName:'跨域与JSONP', name:'自主学习',tags:['前后端交互','跨域','笔记'], date:'2022-8-29 9:32:11'}

    ]
}
export default postInfo