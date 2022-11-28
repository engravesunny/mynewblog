# 在nodejs环境中应用并代理跨域

## 使用koa框架部署项目

>到现在为止，已经完成了一个前端工程师的开发流程，按照常规的做法，此时，运维会将我代码部署到阿里云的ngix服务上，对于前端而言，可以将其部署到本机的nodejs环境中

部署 自动化部署 /手动部署

第一步，建立web服务文件夹  **`hrServer`**

```bash
mkdir hrServer
```

第二步，在该文件夹下，初始化npm

```bash
npm init -y
```

第三步，安装服务端框架koa(也可以采用express或者egg)

```bash
npm i koa koa-static
```

第四步，拷贝上小节打包的`dist`目录到**`hrServer/public`**下

第五步，在根目录下创建`app.js`，代码如下

```js
const Koa  = require('koa')
const serve = require('koa-static');

const app = new Koa();
app.use(serve(__dirname + "/public")); //将public下的代码静态化
app.listen(3333, () => {
     console.log('人资项目启动')
})
```

> 此时，我们可以访问，<http://localhost:3333>

## 解决history页面访问问题

此时存在两个问题，

1.**当我们刷新页面，发现404**

> 这是因为我们采用了history的模式，地址的变化会引起服务器的刷新，我们只需要在app.js对所有的地址进行一下处理即可

安装 koa中间件

```bash
npm i koa2-connect-history-api-fallback
```

**注册中间件**.

```js
const Koa  = require('koa')
const serve = require('koa-static');
const  { historyApiFallback } = require('koa2-connect-history-api-fallback');
const path = require('path')
const app = new Koa();
// 这句话 的意思是除接口之外所有的请求都发送给了 index.html
app.use(historyApiFallback({ 
     whiteList: ['/prod-api']
 }));  // 这里的whiteList是 白名单的意思
app.use(serve(__dirname + "/public")); //将public下的代码静态化

app.listen(3333, () => {
     console.log('人资项目启动')
})
```

## 解决生产环境跨域问题

1.当点击登录时，发现接口404

> vue-cli的代理只存在于开发期，当我们上线到node环境或者ngix环境时，需要我们再次在环境中代理

在nodejs中代理

安装跨域代理中间件

```js
npm i koa2-proxy-middleware
```

配置跨越代理

```js
const proxy = require('koa2-proxy-middleware')

app.use(proxy({
  targets: {
    // (.*) means anything
    '/prod-api/(.*)': {
        target: 'http://ihrm-java.itheima.net/api', //后端服务器地址
        changeOrigin: true,
        pathRewrite: {
            '/prod-api': ""
        }
    }
  }
}))
```

此时，项目就可以跨域访问了！

>**到现在为止，在十几天的时间里，完成了一个较为复杂的中台项目的解剖和开发，任何一个复杂的项目都是各种各样的功能通过合理的设计和布局组装而成的，所以未来我们要掌握的能力就是不论项目的难度和复杂度，都要学会技术的解耦和设计，这样我们的开发能力就会变得越来越强**
