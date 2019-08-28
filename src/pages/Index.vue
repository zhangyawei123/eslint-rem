<template>
  <div>
    <h1>hello wolrd</h1>
    <p>下面演示lodash</p>
    <p>{{$store.state.name}}</p>
    <div id="videopanel" style="display: none">
      <video loop controls id="testmp4" height="400" width="230" >   
        <source src="../assets/test.mp4" type="video/mp4"> 
      </video>
    </div>
    <canvas id="icanvas" width="230" height="400">
      you cant see me~
    </canvas>
    <canvas id="icanvasimg" width="230" height="400">
      you cant see me~
    </canvas>
    <el-button @click="showList">click</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: []
      }
    },
    mounted() {
    },
    methods: {
      showList() {
        console.log('d')
      }
    }
  }
</script>

<style lang="less">
</style>
