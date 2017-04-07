<template>
  <index-bar @click="chooseIndex" :list="cities" :search="search">
    <div slot="header" class="region-header">
      <search-input v-model="search" placeholder="输入城市名或拼音查询"></search-input>
      <div class="cur-region">当前：{{city}}</div>
    </div>
    <div class="m-hot-city">
      <h1 class="city-title">热门城市</h1>
      <ul class="city-group">
        <li class="city-item"
            v-for="item in hotCities"
            v-touch:tap="{item:item,handler:chooseHotCity}">
          {{item}}
        </li>
      </ul>
    </div>
  </index-bar>
</template>
<script>
  import indexBar from '../../src/index.vue'
  import searchInput from './search-input'
  export default{
    data () {
      return {
        city: '',
        search: ''
      }
    },
    props: ['hotCities', 'cities'],
    components: {
      indexBar,
      searchInput
    },
    methods: {
      chooseIndex (name) {
        this.city = name
      },

      chooseHotCity ({item}) {
        this.city = item
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .region-header {
    .cur-region {
      padding-left .8rem
      height 2.2rem
      line-height 2.2rem
      font-size: .8rem;
      color: #353535;
      border-top 1px solid #e5e5e5
    }
  }

  .m-hot-city {
    padding 1.3rem .8rem;
    .city-title {
      font-size: .8rem;
      color: #353535;
      margin-bottom .2rem
    }
    .city-group {
      overflow: hidden;
      margin-left -.4rem
      .city-item {
        float left
        width 5.45rem
        height 1.6rem
        line-height 1.6rem
        text-align center
        background-color: #ffffff;
        border-radius 0.2rem
        font-size: .7rem;
        color: #656565;
        margin-left: 0.4rem;
        margin-top: 0.4rem;
      }
    }
  }
</style>