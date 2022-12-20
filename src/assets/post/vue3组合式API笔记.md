# Vue3组合式API笔记

> 于2022-11-29 00:10 在做了各项vue2项目以及用博客框架和不用框架分别搭建了博客之后，决定开始学习Vue3

## 组合式API

最先开始，介绍一下Vue3的优点吧

- 最火框架，它是国内最火的前端框架之一，官方文档 (opens new window)中文文档(opens new window)
- 性能提升，运行速度事vue2.x的1.5倍左右
- 体积更小，按需编译体积比vue2.x要更小
- 类型推断，更好的支持Ts（typescript）这个也是趋势
- 高级给予，暴露了更底层的API和提供更先进的内置组件
- ★组合API (composition api) ，能够更好的组织逻辑，封装逻辑，复用逻辑

而最开始vue3中最令我感觉到不同的是组合式API以及按需引入

什么是组合API写法：**`Compositon API`**

- 咱们在vue3.0项目中将会使用 组合API 写法
  - 代码风格：一个功能逻辑的代码组织在一起（包含数据，函数...）
- 优点：功能逻辑复杂繁多情况下，各个功能逻辑代码组织再一起，便于阅读和维护
- 缺点：需要有良好的代码组织能力和拆分逻辑能力，PS：大家没问题。
- 补充：为了能让大家较好的过渡到vue3.0的版本来，也支持vue2.x选项API写法

```vue
<template>
  <div class="container">
    <div>鼠标位置：</div>
    <div>X轴：{{x}}</div>
    <div>Y轴：{{y}}</div>
    <hr>
    <div>{{count}} <button @click="add()">自增</button></div>  
  </div>
</template>
<script>
import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue'
export default {
  name: 'App',
  setup () {
    // 鼠标移动逻辑
    const mouse = reactive({
      x: 0,
      y: 0
    })
    const move = e => {
      mouse.x = e.pageX
      mouse.y = e.pageY
    }
    onMounted(()=>{
      document.addEventListener('mousemove',move)
    })
    onUnmounted(()=>{
      document.removeEventListener('mousemove',move)
    })

    // 累加逻辑
    const count = ref(0)
    const add = () => {
      count.value ++ 
    }

    // 返回数据
    return {
      ...toRefs(mouse),
      count,
      add
    }
  }
}
</script>
```

### 组合式API——setup函数

- `setup`函数式`vue3`中一个新的组件选项，也是组件中使用组合式API的起点
- 作为一个生命周期`setup`函数在`vue2`中的`beforeCreate`钩子之前执行
- 在`setup`函数中`this`还不是组件实例，此时的`this`是undefined
- 在模板中使用的数据，函数，需要在setup函数中返回

### 组合式API——生命周期

回顾vue2.x生命周期钩子函数：

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

认识vue3.0生命周期钩子函数:

- setup 创建实例前
- onBeforeMount 挂载DOM前
- onMounted 挂载DOM后
- onBeforeUpdate 更新组件前
- onUpdated 更新组件后
- onBeforeUnmount 卸载销毁前
- onUnmounted 卸载销毁后

> 组合API的生命周期钩子有7个，可以多次使用同一个钩子，执行顺序和书写顺序相同。

### 组合式API——reactive函数

- reactive是一个函数，它可以定义一个复杂数据类型，成为响应式数据。

> 通常是用来定义响应式对象数据

### 组合式API——toRef函数

- toRef可以将reactive中的**响应式对象**的**某个属性**转换为**响应式数据**，并且**值是关联的**

> toRef转换响应式数据包装成对象，value存放值的位置

### 组合式API——toRefs函数

- toRefs是函数，转换响应式对象中所有属性为单独响应式数据，对象成为普通对象，并且值是关联的

### 代码

```vue
// setup函数
<template>
  <div class="container">
    <h1 @click="say()">{{msg}}</h1>
  </div>
</template>
<script>
export default {
  setup () {
    console.log('setup执行了')
    console.log(this)
    // 定义数据和函数
    const msg = 'hi vue3'
    const say = () => {
      console.log(msg)
    }

    return { msg , say}
  },
  beforeCreate() {
    console.log('beforeCreate执行了')
    console.log(this)
  }
}
</script>
```

```vue
// reactive函数
<template>
  <div class="container">
    <div>{{obj.name}}</div>
    <div>{{obj.age}}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup () {
    // 普通数据
    // const obj = {
    //   name: 'ls',
    //   age: 18
    // }
    const obj = reactive({
      name: 'ls',
      age: 18
    })

    // 修改名字
    const updateName = () => {
      console.log('updateName')
      obj.name = 'zs'
    }

    return { obj ,updateName}
  }
}
</script>
```

```vue
// toRef函数
<template>
  <div class="container">
    {{name}} <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive, toRef } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 响应式数据对象
    const obj = reactive({
      name: 'ls',
      age: 10
    })
    console.log(obj)
    // 2. 模板中只需要使用name数据
    // 注意：从响应式数据对象中解构出的属性数据，不再是响应式数据
    // let { name } = obj 不能直接解构，出来的是一个普通数据
    const name = toRef(obj, 'name')
    // console.log(name)
    const updateName = () => {
      console.log('updateName')
      // toRef转换响应式数据包装成对象，value存放值的位置
      name.value = 'zs'
    }

    return {name, updateName}
  }
}
</script>
<style scoped lang="less"></style>
```

```vue
// toRefs函数
<template>
  <div class="container">
    <div>{{name}}</div>
    <div>{{age}}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 响应式数据对象
    const obj = reactive({
      name: 'ls',
      age: 10
    })
    console.log(obj)
    // 2. 解构或者展开响应式数据对象
    // const {name,age} = obj
    // console.log(name,age)
    // const obj2 = {...obj}
    // console.log(obj2)
    // 以上方式导致数据就不是响应式数据了
    const obj3 = toRefs(obj)
    console.log(obj3)

    const updateName = () => {
      // obj3.name.value = 'zs'
      obj.name = 'zs'
    }

    return {...obj3, updateName}
  }
}
</script>
<style scoped lang="less"></style>

```

### 组合式API-ref函数

定义响应式数据：

- ref函数，常用于简单数据类型定义为响应式数据
  - 在修改值获取值的时候，需要.value
  - 在模板中使用ref申明的响应式数据，可以省略.value

```vue
<template>
  <div class="container">
    <div>{{name}}</div>
    <div>{{age}}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. name数据
    const name = ref('ls')
    console.log(name)
    const updateName = () => {
      name.value = 'zs'
    }
    // 2. age数据
    const age = ref(10)

    // ref常用定义简单数据类型的响应式数据
    // 其实也可以定义复杂数据类型的响应式数据
    // 对于数据未之的情况下 ref 是最适用的
    // const data = ref(null)
    // setTimeout(()=>{
    //   data.value = res.data
    // },1000)

    return {name, age, updateName}
  }
}
</script>

```

### 组合式API-computed函数

定义计算属性：

- computed函数，是用来定义计算属性的，计算属性不能修改。

```vue
<template>
  <div class="container">
    <div>今年：{{age}}岁</div>
    <div>后年：{{newAge}}岁</div>
    <!-- 使用v-model绑定计算属性 -->
    <input type="text" v-model="newAge">
  </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到一个新的数据。
    const age = ref(16)
    // 得到后年的年龄
    // const newAge = computed(()=>{
    //   // 该函数的返回值就是计算属性的值
    //   return age.value + 2
    // })

    // 计算属性高级用法，传人对象
    const newAge = computed({
      // get函数，获取计算属性的值
      get(){
        return age.value + 2
      },
      // set函数，当你给计算属性设置值的时候触发
      set (value) {
        age.value = value - 2
      }
    })


    return {age, newAge}
  }
}
</script>
```

总结：计算属性两种用法

- 给computed传入函数，返回值就是计算属性的值
- 给computed传入对象，get获取计算属性的值，set监听计算属性改变。

### 组合式API-watch函数

监听ref定义的响应式数据

监听多个响应式数据数据

监听reactive定义的响应式数据

监听reactive定义的响应式数据，某一个属性

深度监听

默认执行

```vue
<template>
  <div class="container">
    <div>
      <p>count的值：{{count}}</p>
      <button @click="add">改数据</button>
    </div>
    <hr>
    <div>
      <p>{{obj.name}}</p>
      <p>{{obj.age}}</p>
      <p>{{obj.brand.name}}</p>
      <button @click="updateName">改名字</button>
      <button @click="updateBrandName">改品牌名字</button>
    </div>
  </div>
</template>
<script>
import { reactive, ref, watch } from 'vue'
export default {
  name: 'App',
  setup () {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    // 当你需要监听数据的变化就可以使用watch
    // 1. 监听一个ref数据
    // 1.1 第一个参数  需要监听的目标
    // 1.2 第二个参数  改变后触发的函数
    // watch(count, (newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // })


    const obj = reactive({
      name: 'ls',
      age: 10,
      brand: {
        id: 1,
        name: '宝马'
      }
    })
    const updateName = () => {
      obj.name = 'zs'
    }
    const updateBrandName = () => {
      obj.brand.name = '奔驰'
    }
    // 2. 监听一个reactive数据
    watch(obj, ()=>{
      console.log('数据改变了')
    })

    watch(()=>obj.brand, ()=>{
      console.log('brand数据改变了')
    },{
      // 5. 需要深度监听
      deep: true,
      // 6. 想默认触发
      immediate: true
    })

    // 3. 监听多个数据的变化
    // watch([count, obj], ()=>{
    //   console.log('监听多个数据改变了')
    // }) 


    // 4. 此时监听对象中某一个属性的变化 例如：obj.name 
    // 需要写成函数返回该属性的方式才能监听到
    // watch(()=>obj.name,()=>{
    //   console.log('监听obj.name改变了')
    // })

    return {count, add, obj, updateName, updateBrandName}
  }
}
</script>
```

### 组合式API-ref属性

获取DOM或者组件实例可以使用ref属性，写法和vue2.0需要区分开

获取单个DOM或者组件

```vue
<template>
  <div class="container">
    <!-- vue2.0 获取单个元素 -->
    <!-- 1. 通过ref属性绑定该元素 -->
    <!-- 2. 通过this.$refs.box获取元素 -->
    <!-- <div ref="box">我是box</div> -->
    <!-- vue2.0 获取v-for遍历的多个元素 -->
    <!-- 1. 通过ref属性绑定被遍历元素 -->
    <!-- 2. 通过this.$refs.li 获取所有遍历元素  -->
    <!-- <ul>
      <li v-for="i in 4" :key="i" ref="li">{{i}}</li>
    </ul> -->

    <!-- 单个元素 -->
    <div ref="dom">我是box</div>
    <!-- 被遍历的元素 -->
    <ul>
      <li v-for="i in 4" :key="i" :ref="setDom">第{{i}}LI</li>
    </ul>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 获取单个元素
    // 1.1 先定义一个空的响应式数据ref定义的
    // 1.2 setup中返回该数据，你想获取那个dom元素，在该元素上使用ref属性绑定该数据即可。
    const dom = ref(null)
    onMounted(()=>{
       console.log(dom.value)
    })
  }
}
</script>
<style scoped lang="less"></style>
```

获取v-for遍历的DOM或者组件

```vue
  // 2. 获取v-for遍历的元素
  // 2.1 定义一个空数组，接收所有的LI
  // 2.2 定义一个函数，往空数组push DOM
  const domList = []
  const setDom = (el) => {
    domList.push(el)
  }
  onMounted(()=>{
    console.log(domList)
  })
  return {dom, setDom}
```

```vue
  // ref获取v-for遍历的DOM元素，需要在组件更新的时候重置接受dom元素的数组。
  onBeforeUpdate(()=>{
    list = []
  })
```

### 组合式API-父子通讯

父传子：

```vue
<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr>
    <Son :money="money" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  // 父组件的数据传递给子组件
  setup () {
    const money = ref(100)
    return { money }
  }
}
</script>
```

```vue
<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{money}}</p>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'Son',
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    // 获取父组件数据money
    console.log(props.money)
  }
}
</script>
```

子传父：

```vue
<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr>
    <Son :money="money" @change-money="updateMoney" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  // 父组件的数据传递给子组件
  setup () {
    const money = ref(100)
    const updateMoney = (newMoney) => {
      money.value = newMoney
    }
    return { money , updateMoney}
  }
}
</script>

```

```vue
<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{money}}</p>
+    <button @click="changeMoney">花50元</button>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'Son',
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  // props 父组件数据
  // emit 触发自定义事件的函数
  setup (props, {emit}) {
    // 获取父组件数据money
    console.log(props.money)
    // 向父组件传值
    const changeMoney = () => {
      // 消费50元
      // 通知父组件，money需要变成50
      emit('change-money', 50)
    }
    return {changeMoney}
  }
}
</script>
```

**扩展：**

- **在vue2.x的时候 .sync 除去v-model实现双向数据绑定的另一种方式**

```vue
<!-- <Son :money='money' @update:money="fn"  /> -->
<Son :money.sync='money'  />
```

- **在vue3.0的时候，使用 v-model:money="money" 即可**

```vue
  <!-- <Son :money="money" @update:money="updateMoney" /> -->
  <Son v-model:money="money" />
```

**总结：**

- 父传子：在`setup`种使用`props`数据`setup(props){ // props就是父组件数据 }`
- 子传父：触发自定义事件的时候`emit`来自 `setup(props,{emit}){ // emit 就是触发事件函数 }`
- 在vue3.0中` v-model `和` .sync `已经合并成` v-model `指令

### 组合式API-依赖注入

使用场景：有一个父组件，里头有子组件，有孙组件，有很多后代组件，共享父组件数据。

```vue
<template>
  <div class="container">
    <h1>父组件 {{money}} <button @click="money=1000">发钱</button></h1>
    <hr>
    <Son />
  </div>
</template>
<script>
import { provide, ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  setup () {
    const money = ref(100)
    const changeMoney = (saleMoney) => {
      console.log('changeMoney',saleMoney)
      money.value = money.value - saleMoney
    }
    // 将数据提供给后代组件 provide
    provide('money', money)
    // 将函数提供给后代组件 provide
    provide('changeMoney', changeMoney)

    return { money }
  }
}
</script>
<style scoped lang="less"></style>

```

```vue
<template>
  <div class="container">
    <h2>子组件 {{money}}</h2>
    <hr>
    <GrandSon />
  </div>
</template>
<script>
import { inject } from 'vue'
import GrandSon from './GrandSon.vue'
export default {
  name: 'Son',
  components: {
    GrandSon
  },
  setup () {
    // 接收祖先组件提供的数据
    const money = inject('money')
    return { money }
  }
}
</script>
<style scoped lang="less"></style>
```

```vue
<template>
  <div class="container">
    <h3>孙组件 {{money}} <button @click="fn">消费20</button></h3>
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'GrandSon',
  setup () {
    const money = inject('money')
    // 孙组件，消费50，通知父组件App.vue组件，进行修改
    // 不能自己修改数据，遵循单选数据流原则，大白话：数据谁定义谁修改
    const changeMoney = inject('changeMoney')
    const fn = () => {
      changeMoney(20)
    }
    return {money, fn}
  }
}
</script>
<style scoped lang="less"></style>
```

总结：

- provide函数提供数据和函数给后代组件使用
- inject函数给当前组件注入provide提供的数据和函数

## v-model语法糖

在vue2.0中v-mode语法糖简写的代码 `<Son :value="msg" @input="msg=$event" />`

在vue3.0中v-model语法糖有所调整：`<Son :modelValue="msg" @update:modelValue="msg=$event" />`

```vue
<template>
  <div class="container">
    <!-- 如果你想获取原生事件事件对象 -->
    <!-- 如果绑定事函数 fn fn(e){ // e 就是事件对象 } -->
    <!-- 如果绑定的是js表达式  此时提供一个默认的变量 $event -->
    <h1 @click="$event.target.style.color='red'">父组件 {{count}}</h1>
    <hr>
    <!-- 如果你想获取自定义事件  -->
    <!-- 如果绑定事函数 fn fn(data){ // data 触发自定义事件的传参 } -->
    <!-- 如果绑定的是js表达式  此时 $event代表触发自定义事件的传参 -->
    <!-- <Son :modelValue="count" @update:modelValue="count=$event" /> -->
    <Son v-model="count" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  setup () {
    const count = ref(10)
    return { count }
  }
}
</script>
```

```vue
<template>
  <div class="container">
    <h2>子组件 {{modelValue}} <button @click="fn">改变数据</button></h2>
  </div>
</template>
<script>
export default {
  name: 'Son',
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup (props, {emit}) {
    const fn = () => {
      // 改变数据
      emit('update:modelValue', 100)
    }
    return { fn }
  }
}
</script>
```

总结： vue3.0封装组件支持v-model的时候，父传子`:modelValue` 子传父 `@update:modelValue`

补充： vue2.0的 `xxx.sync` 语法糖解析 父传子 `:xxx` 子传父 `@update:xxx` 在vue3.0 使用 `v-model:xxx` 代替。
