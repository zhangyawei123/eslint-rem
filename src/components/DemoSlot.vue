<template>
  <div class="container">
    <p>具名插槽</p>
    <header>
      <p>下面是header内容</p>
      <slot name="header"></slot>
    </header>
    <main>
      <p>下面是main内容</p>
      <slot name="main"></slot>
    </main>
    <footer>
      <p>下面是footer内容</p>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url: 'http://sina.com'
      }
    }
  }
</script>
<style lang="less" scoped>
  .container {
    width: 750px;
    height: 300PX;
    border-bottom: 1px solid #00f;
    background: antiquewhite;
    > p {
      font-size: 12px;
    }
  }
</style>
