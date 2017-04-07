# vue-m-index
 <h5>基于vue的字母索引组件</h5>

## Install
npm install vue-m-index

## Use
```js
import indexBar from 'vue-m-index'
export default {
    components: {
        indexBar
    }
}
````

~~~html
<index-bar
  @click="choose"
  :list="list"
  :search="search">
    <div slot="header" class="region-header">
          <input class="search-input" type="text"
                 placeholder="输入城市名或拼音查询" v-model.trim="search">
    </div>
    <div class="m-hot-city">
      <h1 class="city-title">热门城市</h1>
    </div>
</index-bar>
~~~

## Props
```
1. list 展示的数据列表
    type: Array
    required: true
    eg: ['北京','上海']

2. search 搜索的内容
    type: String

3. click 用户选中的项的通知函数事件
    eg: @click="choose"
```
