<template>
  <div>
    <button type="button" class="btn" @click="sub">-</button>
   <span class="number-box">{{quantity}}</span>
  <button type="button" class="btn" @click="add">+</button>
  </div>
</template>
<script>
import bus from '@/components/EventBus/EventBus.js'
export default {
  name: 'MyCount',
  props: {
    quantity: {
      default: 1,
      type: Number
    },
    // 把数量传递到app.vue，需要通知app组件更新哪个商品的数量
    id: {
      require: true,
      type: Number
    }
  },
  methods: {
    add () {
      const obj = { id: this.id, val: this.quantity + 1 }
      bus.$emit('share', obj)
    },
    sub () {
      if (this.quantity - 1 === 0) return
      const obj = { id: this.id, val: this.quantity - 1 }
      bus.$emit('share', obj)
    }
  }

}
</script>
<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}
.btn{
width: 30px;
}
</style>
