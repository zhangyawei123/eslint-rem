<template>
  <div>
    <div class="demo"></div>
    <p>this is other page</p>
  </div>
</template>

<script>
  export default {
    name: 'Other.vue',
    mounted () {
      this.getdata()
    },
    methods: {
      getdata () {
        console.log('dasdsad')
      }
    }
  }
</script>

<style scoped>
  .demo {
    width: 7.5rem;
    height: 2rem;
    background: #0ff;
  }
  p {
    color: #00f;
    background: #ccc;
  }
</style>
