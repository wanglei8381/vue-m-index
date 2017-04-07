require('./style.css')
var Vue = require('vue')
Vue.use(require('vue-m-touch'))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: function () {
    return {
      cities: ['北京市', '广东省', '山东省', '江苏省', '河南省', '上海市', '河北省', '浙江省', '香港特别行政区', '陕西省', '湖南省', '重庆市', '福建省', '天津市', '云南省', '四川省', '广西壮族自治区', '安徽省', '海南省', '江西省', '湖北省', '山西省', '辽宁省', '台湾省', '黑龙江', '内蒙古自治区', '澳门特别行政区', '贵州省', '甘肃省', '青海省', '新疆维吾尔自治区', '西藏区', '吉林省', '宁夏回族自治区'],
      hotCities: ['北京', '上海']
    }
  },
  template: '<region :cities="cities" :hotCities="hotCities" />',
  components: {
    'region': require('./region.vue')
  }
})
