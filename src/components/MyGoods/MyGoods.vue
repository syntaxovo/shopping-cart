<template>
<div class="goods-container">
  <!-- 左侧图片 -->
  <div class="thumb">
    <div class="checkbox">
      <!-- 复选框 -->
      <input type="checkbox" class="ck" :id="'cd' +id" :checked="status" @change="statuschange">
      <label class="ck-label" :for=" 'cd' +id ">
        <!-- 商品的缩放图 -->
        <img :src="pho" alt="">
      </label>
    </div>
  </div>
  <!-- 右侧信息区域 -->
<div class="goods-info">
<!-- 商品标题 -->
<h6 class="goods-titles">{{title}}</h6>
<div class="goods-bottom">
  <!-- 底部区域 -->
  <!-- 价格 -->
  <span class="goods-prices">￥{{prices}}</span>
<!-- 数量 -->
<Count :quantity="num" :id="id"></Count>
</div>
</div>
</div>

</template>
<script>
import Count from '../Count/Count.vue'
import bus from '@/components/EventBus/EventBus.js'
export default {
  props: {
    title: {
      default: '',
      type: String
    },
    prices: {
      default: 0,
      type: Number
    },
    // 要渲染的商品图片
    pho: {
      default: '',
      type: String
    },
    num: {
      default: 1,
      type: Number
    },
    // 要渲染的商品id
    // 将来子组件商品状态的变换需要通过子传父形式通通知父组件根据id来修改
    id: {
      require: true,
      type: Number
    },
    status: {
      default: true,
      type: Boolean
    }
  },
  components: { Count },
  methods: {
    sendCount () {
      bus.$emit('count', this.num)
    },
    statuschange (e) {
      // 事件对象中target属性的check用于复选框的状态
      const newstatue = e.target.checked
      // 触发函数后将新状态发送给父组件
      this.$emit('newstatue', { id: this.id, val: newstatue })
    }
  }
}
</script>
<style lang="less" scoped>
   .goods-container:first-child{
     margin-top: 45px;
   }
  .goods-container {
    border-top: 1px solid #efefef;
    padding: 10px;
    display: flex;
    .checkbox{
      display: flex;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        margin: 0 10px;
      }
    }
    .goods-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      .goods-titles {
        margin: 0;
        font-weight: bold;
        font-size: 12px;
      }
      .goods-bottom {
        display: flex;
        justify-content: space-between;
        .goods-prices {
          font-weight: bold;
          color: red;
          font-size: 13px;
        }
      }
    }
  }
</style>
