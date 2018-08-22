<template>
    <div class="not-found-box">
        <p class="text">404</p>
        <p class="text">页面不存在</p>
    </div>
</template>

<script>
export default {
  name: 'page404'
}
</script>
<style lang="less" scoped>
  .not-found-box {
    background-color: #fafafa;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000;
    // background
    .text {
      font-size: 42px;
      line-height: 70px;
    }
  }
</style>
