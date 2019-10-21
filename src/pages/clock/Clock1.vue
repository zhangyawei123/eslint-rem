<template>
  <div>
    <audio controls ref="demo" @ended="repeat" v-show="false">
      <source src="../../assets/horse.ogg" type="audio/ogg">
    </audio>
    <el-select v-model="hour" :disabled="disabledSelect">
      <el-option value="0">0</el-option>
      <el-option value="1">1</el-option>
      <el-option value="2">2</el-option>
      <el-option value="3">3</el-option>
    </el-select> ：
    <el-input-number v-model="munites" :disabled="disabledSelect" controls-position="right" :min="1" :max="59"></el-input-number>
    <el-button @click="play">开始</el-button>
    <el-button @click="reset">重置</el-button>
    <div class="num">{{showTime}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabledSelect: false,
        hour: 0,
        munites: 1,
        milli: '',
        showTime: '00:00:00',
        timer: null
      }
    },
    mounted() {
    },
    methods: {
      formatTime(num) {
        if(parseInt(num) < 10) return '0' + num
        return num
      },
      play() {
        this.disabledSelect = true
        this.milli = this.hour*60*60 + this.munites*60
        this.countDown()
      },
      countDown() {
        this.milli--
        let hour = this.formatTime(Math.floor(this.milli / 3600))
        let minute = this.formatTime(Math.floor((this.milli % 3600) / 60))
        let second = this.formatTime(this.milli % 60)
        this.showTime = hour + ':' + minute + ':' + second
        if(this.milli < 1) {
          clearTimeout(this.timer)
          this.$refs.demo.play()
          return
        }
        this.timer = setTimeout(()=> {
          this.countDown()
        }, 1000)
      },
      reset() {
        this.disabledSelect = false
        this.showTime = '00:00:00'
        clearTimeout(this.timer)
        this.$refs.demo.load()
      },
      repeat() {
        this.$refs.demo.play()
      }
    }
  }
</script>

<style lang="less" scoped>
  .num {
    margin-top: 30px;
    text-align: center;
    font-size: 40px;
    color:#8a2be2;
  }
</style>
