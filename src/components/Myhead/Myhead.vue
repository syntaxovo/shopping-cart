<template>
  <div>{{title}}

  </div>
</template>
<script>
export default {
  name: 'MyHead',
  props: {
    title: {
      default: '',
      type: String
    }
  }
}

</script>
<style lang="less" scoped>
 div{
  font-size: 12px;
  height: 45px;
  width: 100%;
  background-color: #1d7bff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 999;

 }
</style>
