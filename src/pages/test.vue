<template>
<div class="wrap">
  <div class="container">
    <div class="cell">
      <div class="inner">
        <img src="@/assets/img/heihei3.jpeg" alt="">
      </div>
      <p>ssksksdud</p>
    </div>
    <div class="cell">
      <div class="inner">
        <img src="@/assets/img/heihei3.jpeg" alt="">
      </div>
      <p>ssksksdud</p>
    </div>
    <div class="cell">
      <div class="inner">
        <img src="@/assets/img/heihei3.jpeg" alt="">
      </div>
      <p>ssksksdud</p>
    </div>
    <div class="cell">
      <div class="inner">
        <img src="@/assets/img/heihei3.jpeg" alt="">
      </div>
      <p>ssksksdud</p>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
    }
  }
  
  
}
</script>
<style lang="less">
.wrap {
  margin: 50px auto;
  width: 70%;
  overflow: hidden;
}
  .container {
    position: relative;
    margin-left: -10px;
    margin-right: -10px;
    background: aqua;
    bottom: -20px;
    overflow: hidden;
  }
  .cell {
    margin-bottom: 20px;
    float: left;
    width: 33.33%;
    padding: 0 10px;
    box-sizing: border-box;
    text-align: center;
    
  }
  .cell p {
      line-height: 30px;
      background: #fff;
    }
  .inner img {
      display: block;
      width: 100%;
  }
  @media only screen and(max-width: 800px) {
    .container {
      background: #f00;
    }
    .cell {
      width: 50%;
    }
  }
</style>

