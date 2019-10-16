<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      list: [],
      ddd: []
    }
  },
  mounted() {
    this.$http('./data.json').then(res=> console.log(res.data))
    // fetch('./data.json').then(res=> console.log(JSON.stringify(res.body)))
  }
}
</script>
<style lang="less">

</style>

