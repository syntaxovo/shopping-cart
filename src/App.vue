<template>
<div class="app-container">
  <MyHead :title="msg"></MyHead>
  <MyGoods v-for="item in list"
:key="item.id"
:id="item.id"
:title="item.goods_name"
:pho="item.goods_img"
:prices="item.goods_price"
:num="item.goods_count"
:status="item.goods_state"
@newstatue="tostatue"
  ></MyGoods>
  <MyFoot :isfull=" allnewstatue"  :totals="getnum" :allprice="getCount" @fullis="isfullstatue"></MyFoot>

</div>
</template>

<script>
import MyHead from './components/Myhead/Myhead.vue'
import MyFoot from './components/MyFoot/MyFoot.vue'
import MyGoods from '@/components/MyGoods/MyGoods.vue'
import bus from '@/components/EventBus/EventBus.js'
// 基于axios 请求商品列表数据
import axios from 'axios'
export default {
  name: 'App',
  created () {
    this.initcarlist()

    bus.$on('share', (val) => {
      // eslint-disable-next-line array-callback-return
      this.list.some(item => {
        if (item.id === val.id) {
          item.goods_count = val.val
          return true
        }
      })
    })
  },
  data () {
    return {
      // 用于存储购物车信息的数组
      list: [],
      msg: '购物车案例'
    }
  },
  methods: {
    async initcarlist () {
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      // 只要是请求回来的数据在也买你渲染期间要使用，都需要转存到data中
      console.log(res)
      if (res.status === 200) {
        this.list = res.list
      }
    },
    isfullstatue (val) {
      console.log(val)

      // eslint-disable-next-line no-return-assign
      this.list.forEach(item => item.goods_state = val)
    },
    // 接受GOOds传来改变后的状态。进行渲染
    tostatue (e) {
      console.log(e)
      console.log('接受到了新状态')
      // eslint-disable-next-line array-callback-return
      this.list.some(item => {
        if (item.id === e.id) {
          item.goods_state = e.val
          return true
        }
      })
    }
  },
  computed: {
    // 使用计算属性动态计算全选的的状态
    allnewstatue () {
      return this.list.every(item => item.goods_state)
    },
    // 使用计算属性动态计算选中商品的总价格
    getCount () {
      return this.list.filter(item => item.goods_state)
        .reduce((totals, item) => {
          // eslint-disable-next-line no-return-assign
          return totals += item.goods_count * item.goods_price
        }, 0)
    },
    // 使用计算属性动态计算选中商品的总计
    getnum () {
      return this.list.filter(item => item.goods_state)
        .reduce((Num, item) => {
          // eslint-disable-next-line no-return-assign
          return Num += item.goods_count
        }, 0)
    }
  },
  components: {
    MyHead,
    MyGoods,
    MyFoot
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container{
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
