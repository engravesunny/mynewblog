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
