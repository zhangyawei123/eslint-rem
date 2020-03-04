<template>
  <div class="container">
    <v-distpicker></v-distpicker>
    <div class="demo" id="demo" @click="guide">

    </div>
  </div>
</template>
<script>
  import VDistpicker from 'v-distpicker'
  import Driver from 'driver.js'
  import 'driver.js/dist/driver.min.css'
  export default {
    components: { VDistpicker },
    data() {
      return {
        driver: null
      }
    },
    mounted() {
      this.driver = new Driver()
    },
    methods: {
      guide() {
        this.driver.highlight({
          element: '#demo',
          popover: {
            title: 'Title for the Popover',
            description: 'Description for it',
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .container {
    height: 50px;
    .demo {
      height: 300px;
      width: 200px;
      background: blueviolet;
    }
  }
</style>
