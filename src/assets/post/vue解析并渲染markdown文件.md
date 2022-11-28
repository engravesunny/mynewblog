# vue中解析并渲染markdown文件

1.`package.json`文件中添加以下依赖，然后重新运行npm install

```js
"vue-template-compiler": "2.6.10",
"github-markdown-css": "^4.0.0",
"highlight.js": "^10.5.0",
"html-loader": "^1.3.2",
"markdown-it": "^12.0.4",
"markdown-it-container": "^3.0.0",
"markdown-loader": "^6.0.0",
"vue-loader": "^15.9.6",
"vue-markdown-loader": "^2.4.1"
```

2.`vue.config.js`中添加以下配置:

```js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
        .loader('vue-loader')
        .end()
      .use('vue-markdown-loader')
        .loader('vue-markdown-loader/lib/markdown-compiler')
        .options({
          wrapper: 'article',
          wrapperName: '123',
          raw: true,
          preventExtract: true,
          use: [
            [require('markdown-it-container'), 'tip'],
            [require('markdown-it-container'), 'warning'],
            [require('markdown-it-container'), 'danger'],
            [require('markdown-it-container'), 'details'],
          ],
        })
        // .end()
  }
}
```

3.`main.js`中添加:

```js
import 'github-markdown-css'
```

4.`App.vue`中引入.md文件

```html
<div id="app">
    <div class="markdown-body">
        <markdown-test>
            <template v-slot:footer>
                <div>test</div>
                <button>footer</button>
            </template>
        </markdown-test>
    </div>
</div>
```

```js
<script>
import markdownTest from './components/markdownTest.md'

export default {
  name: 'App',
  components: {
    markdownTest
  }
}
</script>
```

5.markdownTest.md文件的编写：

```markdown
#### 按钮状态

1. 普通状态
2. hover 鼠标悬停状态
3. active 点击状态
4. focus 获取焦点状态
5. 忙碌/等待状态
6. 禁用状态

​```scss
button {  
    background: orange;
    &:hover {
        
    }
    &:active {
        
    }
    &:focus {
        
    }
    &.busy {
        
    }
    &:disabled {
        
    }
}
​```

<slot name="footer"></slot>

::: warning
注意：
:::

::: danger
警告：
:::

::: tip
提示：这是一段提示
:::

```md
{{ 1 + 1 }}
```

>vue.config.js中配置markdown-it-container是为了渲染引用块的样式和vuepress中的类似，.md文件中支持插槽的写法，还能引入全局组件。
