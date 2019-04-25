<template>
  <div class="hello">
    <div class="demo"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo {
  width: 750px;
  height: 200px;
  background: #0f0;
}
</style>
