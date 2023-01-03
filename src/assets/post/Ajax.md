# Ajax

## 1.XMLHttpRequest的基本使用

### 1.1什么是XMLHttpRequest

XMLHttpRequest（简称xhr）是浏览器提供的JavaScript对象，通过它，可以**请求服务器上的数据资源**

### 1.2使用xhr发起GET请求

步骤:

1. 创建xhr函数
2. 调用xhr.open()函数
3. 调用xhr.send()函数
4. 监听xhr.onreadystatechange 事件

```js
// 1.创建xhr对象
const xhr = new XMLHttpRequest()
// 2.调用open函数 指定请求方式与URL地址
xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks')
// 3.调用send函数 发起Ajax请求
xhr.send()
// 4.监听onreadystatechange事件
xhr.onreadystatechange = function() {
    // 4.1 监听 xhr 对象的请求状态 readyState；与服务器的响应状态status
    if(xhr.readyState === 4 && xhr.status === 200) {
        // 4.2打印服务器响应回来的数据
        console.log(xhr.responseText)
    }
}
```

### 1.3了解xhr对象的readyState属性

> XMLHttpRequest对象的readyState属性，用来表示当前Ajax请求所处的状态。每个Ajax请求必然处于以下状态中的一个：

|值|状态|描述|
|-----|-----|------|
|0|UNSET|XMLHttpRequest对象已被创建，但尚未调用open方法|
|1|OPENED|open()方法已经被调用|
|2|HEADERS_RECEIVED|send()方法已经被调用。响应头也已经被接受|
|3|LOADING|数据接收中，此时response属性中已经包含部分数据|
|4|DONE|Ajax请求完成，这意味着数据传输已经彻底完成或失败|

### 1.4使用xhr发起带参数的GET请求

> 使用xhr对象发起带参数的GET请求，只需要在调用xhr.open期间，为URL地址指定参数即可：

```js
xhr.open('GET','http:/www.liulongbin.top:3006/api/getbooks?id=1')
```

> 这种在URL地址后面拼接的参数叫做**查询字符串**

### 1.5查询字符串

#### 1.什么是查询字符串

> 定义： 查询字符串（URL参数）是指在URL末尾加上用于向服务器发送信息的字符串（变量）。
&nbsp;
> 格式：将英文的 ? 放在URL 的末尾，然后再加上 参数＝值 ，想加上多个参数的话，使用 & 符号进行分隔。以这个形式，可以将想要发送给服务器的数据添加到 URL 中。

```js
// 不带参数的 URL 地址
http://www.liulongbin.top:3006/api/getbooks
// 带一个参数的 URL 地址
http://www.liulongbin.top:3006/api/getbooks?id=1
// 带两个参数的 URL 地址
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记
```

### 1.6URL编码与解码

#### 1.什么事是URL编码

> URL地址中，只允许出现与英文有关的字母，符号，数字，因此，在URL地址中不允许出现中文字符。如果URL中需要中文字符，则需要对中文字符进行**编码（转义）**。
> URL编码的原则：使用安全的字符（没有特殊用途或者特殊意义的可打印字符）去表示那些不安全的字符。
> URL编码原则的通俗理解：使用**英文字符**去表示**非英文字符**。

```js
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记
// 经过 URL 编码之后，URL地址变成了如下格式：
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=%E8%A5%BF%E6%B8%B8%E8%AE%B0
```

#### 2.如何对URL进行编码与解码

浏览器提供了URL编码与解码的API，分别是：

- encodeURL() 编码的函数
- decodeURL() 解码的函数

```js
encodeURL('黑马程序员')
// 输出字符串 %E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98
decodeURL('%E9%BB%91%E9%A9%AC')
// 输出字符串 黑马
```

#### 3.URL编码注意事项

由于浏览器会自动对URL地址进行编码操作，因此，大多数情况下，程序员不需要关心URL地址的编码与解码操作。

### 1.7使用xhr发起POST请求

步骤：

1. 创建xhr对象
2. 调用xhr.open()函数
3. 设置 Content-Type 属性（固定写法）
4. 调用xhr.send() 函数，同时指定要发送的数据
5. 监听xhr.onreadystatechange事件

```js
// 1.创建xhr对象
const xhr = new XMLHttpRequest()
// 2.调用 open()
xhr.open('POST','http://www.liulongbin.top:3006/api/addbook')
// 3.设置 Content-Type 属性（固定写法）
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
// 4.调用send() 同时将数据以查询字符串的形式，提交给服务器
xhr.send('bookname=水浒传&author=施耐庵&publisher=天津图书出版社')
// 5.监听onreadystatechange 事件
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
    }
}
```

## 2.数据交换格式

### 2.1什么是数据交换格式

数据交换格式就是服务器端与客户端之间进行数据传输与交换的格式。

前端领域，经常提及的两种数据交换格式分别是XML和JSON。

### 2.2XML

#### 1.什么是XML

XML的英文全称是E**X**tensible **M**arkup **L**anguage, 即可扩展标记语言。因此XML和HTML类似，也是一种标记语言。

#### 2.XML和HTML的区别

XML和HTML虽然都是标记语言，但是，他们两者之间没有任何关系。

- HTML被设计用来描述网页上的内容，是网页内容的媒体。
- XML被设计用来传输和存储数据，是数据的载体。

#### 3.XML的缺点

1. XML格式臃肿，和数据无关的代码多，体积大，传输效率低
2. 在JavaScript中解析XML比较麻烦

### 2.3JSON

#### 1.什么是JSON

概念：JSON的英文全称是JavaScript Object Notation，即“JavaScript 对象表示发”。简单地讲，**JSON就是JavaScript对象和数组的字符串表示法**，他使用文本表示一个JS对象或数组的信息，因此，**JSON的本质是字符串**。

作用：JSON 是一种轻量级的文本数据交换格式，在作用上类似于 XML，专门用于存储和传输数据，但是 **JSON 比 XML 更小、更快、更易解析**。

现状：JSON 是在 2001 年开始被推广和使用的数据格式，到现今为止，JSON 已经成为了主流的数据交换格式。

#### 2.JSON的两种结构

JSON包含对象和数组两种结构，通过这两种结构相互嵌套，可以表示更复杂的数据结构。

- 对象结构：对象结构在 JSON 中表示为 { } 括起来的内容。数据结构为 { key: value, key: value, … } 的键值对结构。其中，key 必须是使用英文的双引号包裹的字符串，value 的数据类型可以是数字、字符串、布尔值、null、数组、对象6种类型。
- 数组结构：数组结构在 JSON 中表示为 [ ] 括起来的内容。数据结构为 [ "java", "javascript", 30, true … ] 。数组中数据的类型可以是数字、字符串、布尔值、null、数组、对象6种类型。

#### 3.JSON语法注意事项

1. 属性名必须使用双引号包裹
2. 字符串类型的值必须使用双引号包裹
3. JSON中不允许使用单引号表示字符串
4. JSON中不能写注释
5. JSON的最外层必须是对象或数组格式
6. 不能使用undefined或函数作为JSON的值

JSON的作用：在计算机与网络之间传输和存储数据

JSON的本质：用字符串来表示JavaScript对象数据或数组数据

#### 4.JSON和JS对象的互转

要实现从 JSON 字符串转换为 JS 对象，使用 JSON.parse() 方法：

```js
var obj = JSON.parse('{"a": "Hello", "b": "World"}')
//结果是 {a: 'Hello', b: 'World'}
```

要实现从 JS 对象转换为 JSON 字符串，使用 JSON.stringify() 方法：

```js
var json = JSON.stringify({a: 'Hello', b: 'World'})
//结果是 '{"a": "Hello", "b": "World"}'
```

#### 5.序列化和反序列化

- 把数据对象转换为字符串的过程，叫做序列化，例如：调用 JSON.stringify() 函数的操作，叫做 JSON 序列化。
- 把字符串转换为数据对象的过程，叫做反序列化，例如：调用 JSON.parse() 函数的操作，叫做 JSON 反序列化。

&nbsp;

## 3.封装Ajax函数

### 3.1.要实现的效果

```html
<!-- 1. 导入自定义的ajax函数库 -->
<script src="./itheima.js"></script>

<script>
    // 2. 调用自定义的 itheima 函数，发起 Ajax 数据请求
    itheima({
        method: '请求类型',
        url: '请求地址',
        data: { /* 请求参数对象 */ },
        success: function(res) { // 成功的回调函数
            console.log(res)     // 打印数据
        }
    })
</script>
```

### 3.2.定义options参数

itheima() 函数是我们自定义的 Ajax 函数，它接收一个配置对象作为参数，配置对象中可以配置如下属性：

- method   请求的类型
- url      请求的 URL 地址
- data     请求携带的数据
- success  请求成功之后的回调函数

### 3.3 处理data参数

需要把 data 对象，转化成查询字符串的格式，从而提交给服务器，因此提前定义 resolveData 函数如下：

```js
/**
 * 处理 data 参数
 * @param {data} 需要发送到服务器的数据
 * @returns {string} 返回拼接好的查询字符串 name=zs&age=10
 */
function resolveData(data) {
  var arr = []
  for (var k in data) {
    arr.push(k + '=' + data[k])
  }
  return arr.join('&')
}
```

### 3.4 定义itheima函数

在 itheima() 函数中，需要创建 xhr 对象，并监听 onreadystatechange 事件：

```js
function itheima(options) {
  var xhr = new XMLHttpRequest()
  // 拼接查询字符串
  var qs = resolveData(options.data)

  // 监听请求状态改变的事件
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText)
      options.success(result)
    }
  }
}
```

### 3.5 判断请求的类型

不同的请求类型，对应 xhr 对象的不同操作，因此需要对请求类型进行 if … else … 的判断：

```js
if (options.method.toUpperCase() === 'GET') {
    // 发起 GET 请求
    xhr.open(options.method, options.url + '?' + qs)
    xhr.send()
  } else if (options.method.toUpperCase() === 'POST') {
    // 发起 POST 请求
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(qs)
  }
```

## 4.XMLHttpRequest Level2的新特性

### 4.1 认识XMLHttpRequest Level2

1.旧版XMLHttpRequest的缺点

- 只支持文本数据的传输，无法用来读取和上传文件
- 传送和接收数据时，没有进度信息，只能提示有没有完成

2.XMLHttpRequest Level2的新功能

- 可以设置 HTTP 请求的时限
- 可以使用 FormData 对象管理表单数据
- 可以上传文件
- 可以获得数据传输的进度信息

### 4.2 设置HTTP请求时限

有时，Ajax 操作很耗时，而且无法预知要花多少时间。如果网速很慢，用户可能要等很久。新版本的 XMLHttpRequest 对象，增加了 timeout 属性，可以设置 HTTP 请求的时限：

```js
 xhr.timeout = 3000
```

上面的语句，将最长等待时间设为 3000 毫秒。过了这个时限，就自动停止HTTP请求。与之配套的还有一个 timeout 事件，用来指定回调函数：

```js
xhr.ontimeout = function(event){
     alert('请求超时！')
}
```

### 4.3 FormData对象管理表单数据

Ajax 操作往往用来提交表单数据。为了方便表单处理，HTML5 新增了一个 FormData 对象，可以模拟表单操作：

```js
// 1. 新建 FormData 对象
      var fd = new FormData()
      // 2. 为 FormData 添加表单项
      fd.append('uname', 'zs')
      fd.append('upwd', '123456')
      // 3. 创建 XHR 对象
      var xhr = new XMLHttpRequest()
      // 4. 指定请求类型与URL地址
      xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
      // 5. 直接提交 FormData 对象，这与提交网页表单的效果，完全一样
      xhr.send(fd)
```

FormData对象也可以用来获取网页表单的值，示例代码如下：

```js
// 获取表单元素
 var form = document.querySelector('#form1')
 // 监听表单元素的 submit 事件
 form.addEventListener('submit', function(e) {
    e.preventDefault()
     // 根据 form 表单创建 FormData 对象，会自动将表单数据填充到 FormData 对象中
     var fd = new FormData(form)
     var xhr = new XMLHttpRequest()
     xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
     xhr.send(fd)
     xhr.onreadystatechange = function() {}
})
```

### 4.4 上传文件

新版 XMLHttpRequest 对象，不仅可以发送文本信息，还可以上传文件。

&nbsp;

实现步骤：

- 定义 UI 结构
- 验证是否选择了文件
- 向 FormData 中追加文件
- 使用 xhr 发起上传文件的请求
- 监听 onreadystatechange 事件

1.定义UI结构

```html
<!-- 1. 文件选择框 -->
    <input type="file" id="file1" />
    <!-- 2. 上传按钮 -->
    <button id="btnUpload">上传文件</button>
    <br />
    <!-- 3. 显示上传到服务器上的图片 -->
    <img src="" alt="" id="img" width="800" />
```

2.验证是否选择了文件

```js
// 1. 获取上传文件的按钮
 var btnUpload = document.querySelector('#btnUpload')
 // 2. 为按钮添加 click 事件监听
 btnUpload.addEventListener('click', function() {
     // 3. 获取到选择的文件列表
     var files = document.querySelector('#file1').files
     if (files.length <= 0) {
         return alert('请选择要上传的文件！')
     }
     // ...后续业务逻辑
 })
```

3.向FormData中追加文件

```js
 // 1. 创建 FormData 对象
 var fd = new FormData()
 // 2. 向 FormData 中追加文件
 fd.append('avatar', files[0])
```

4.使用 xhr 发起上传文件的请求

```js
 // 1. 创建 xhr 对象
 var xhr = new XMLHttpRequest()
 // 2. 调用 open 函数，指定请求类型与URL地址。其中，请求类型必须为 POST
 xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
 // 3. 发起请求
 xhr.send(fd)
```

5.监听onreadystatechange事件

```js
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText)
    if (data.status === 200) { // 上传文件成功
      // 将服务器返回的图片地址，设置为 <img> 标签的 src 属性
      document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + data.url
    } else { // 上传文件失败
      console.log(data.message)
    }
  }
}
```

### 4.5 显示文件上传进度

新版本的 XMLHttpRequest 对象中，可以通过监听 xhr.upload.onprogress 事件，来获取到文件的上传进度。语法格式如下：

```js
// 创建 XHR 对象
 var xhr = new XMLHttpRequest()
 // 监听 xhr.upload 的 onprogress 事件
 xhr.upload.onprogress = function(e) {
    // e.lengthComputable 是一个布尔值，表示当前上传的资源是否具有可计算的长度
    if (e.lengthComputable) {
        // e.loaded 已传输的字节
        // e.total  需传输的总字节
        var percentComplete = Math.ceil((e.loaded / e.total) * 100)
    }
}
```

## 5.axios

### 5.1 什么是axios

axios是专注于网络数据请求的库

相比于XMLHttpRequest，axios更加简洁易用

相比于jQuery，axios更轻量化，专注于网络数据请求

### 5.2 axios发起GET请求

axios 发起 get 请求的语法：

```js
 axios.get('url', { params: { /*参数*/ } }).then(callback)
```

具体的请求示例如下：

```js
 // 请求的 URL 地址
 var url = 'http://www.liulongbin.top:3006/api/get'
 // 请求的参数对象
 var paramsObj = { name: 'zs', age: 20 }
 // 调用 axios.get() 发起 GET 请求
axios.get(url, { params: paramsObj }).then(res=>{
    const result = res.data
    console.log(result)
})
```

### 5.3 axios发起POST请求

axios 发起 post 请求的语法：

```js
axios.post('url', { /*参数*/ }).then(callback)
```

具体的请求示例如下：

```js
// 请求的 URL 地址
 var url = 'http://www.liulongbin.top:3006/api/post'
 // 要提交到服务器的数据
 var dataObj = { location: '北京', address: '顺义' }
 // 调用 axios.post() 发起 POST 请求
 axios.post(url, dataObj).then(res => {
     // res.data 是服务器返回的数据
     var result = res.data
     console.log(result)
 })
```

### 6.4 直接使用axios发起请求

axios 也提供了类似于 jQuery 中 $.ajax() 的函数，语法如下：

```js
 axios({
     method: '请求类型',
     url: '请求的URL地址',
     data: { /* POST数据 */ },
     params: { /* GET参数 */ }
 }) .then(callback)
```

直接使用axios发起GET请求

```js
axios({
     method: 'GET',
     url: 'http://www.liulongbin.top:3006/api/get',
     params: { // GET 参数要通过 params 属性提供
         name: 'zs',
         age: 20
     }
 }).then(function(res) {
     console.log(res.data)
 })
```

直接使用axios发起POST请求

```js
axios({
     method: 'POST',
     url: 'http://www.liulongbin.top:3006/api/post',
     data: { // POST 数据要通过 data 属性提供
         bookname: '程序员的自我修养',
         price: 666
     }
 }).then(function(res) {
     console.log(res.data)
 })
```
