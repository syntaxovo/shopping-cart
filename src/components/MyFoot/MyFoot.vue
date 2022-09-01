<template>
<div class="foot-container">
    <!-- 左侧的全选按钮 -->
<div class="control">
  <input type="checkbox" name="control-input" id="ischeck" :checked="isfull" @change="allisfull">
 <label for="ischeck">全选</label>
</div>
<!--中间的合并 -->
<div>
<span>合计：</span>
<span class="total-piece">￥{{ allprice.toFixed(2)}}</span>
</div>
<!-- 结算按钮 -->
 <button type="button" class="btn-setten">结算（{{ totals}}）</button>
</div>

</template>

<script>
export default {
  name: 'MyFoot',
  props: {
    totals: {
      default: 0,
      type: Number
    },
    // 选择状态
    isfull: {
      default: true,
      type: Boolean
    },
    // 选中商品的总价格
    allprice: {
      default: 0,
      type: Number
    }

  },
  methods: {
    // 监听全选状态的变化，向父组件传递数据
    allisfull (e) {
      this.$emit('fullis', e.target.checked)
    }
  }
}
</script>

<style lang="less" scoped>
.foot-container{
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-top: 1px solid #efefef;
  font-size: 12px;
}
  .control{
    display: flex;
    align-content: center;
  }

  .total-piece{
    margin-right: 10px;
  }
  .btn-setten{
    margin-right: 15px;
    font-size: 14px;
    color: red;
    border-radius: 25px;
  }

</style>>
