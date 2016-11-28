#vue-m-index
 <h5>基于vue的字母索引组件</h5>
##Install
npm install vue-m-index
##Use
```js
new Vue({
    el: '.container',
    data: {
        list: ['北京','上海'],
        search: ''
    },
    components: {
        'index-bar': require('vue-m-index')
    },
    methods: {
        choose(index){
            console.log('chooseIndex', index);
        }
    }
});

```

//在模版中
~~~html
<index-bar @click="choose" :list="list" :search="search">
    <div slot="header" class="region-header">
          <input class="search-input" type="text"
                 placeholder="输入城市名或拼音查询" v-model.trim="search">
      </div>
    </div>
    <div class="m-hot-city">
      <h1 class="city-title">热门城市</h1>
    </div>
  </index-bar>
~~~