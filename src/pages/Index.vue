<template>
  <div>
    <p>{{$store.state.name}}</p>
    <DemoSlot>
      <template slot="header">
        <h1>{{time}}</h1>
      </template>
    </DemoSlot>
    <input v-focus v-model="copyTxt">
    <el-button v-copy="copyTxt">复制</el-button>
    <el-button @click="startHH">noprogress start</el-button>
    <el-button @click="endHH">noprogress end</el-button>
    <el-button @click="animaclass=!animaclass">animate</el-button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated rotateInDownRight"
      leave-active-class="animated hinge">
      <div v-show="animaclass" class="inner">这是animate.css实现的css3动画</div>
    </transition>
    <div class="box" ref="box">
      <div class="demos" ref="list">
        <div v-for="n in listNum" class="item" :key="n">{{n}} lebfakfbjasn db </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'dayjs/locale/zh-cn' // 按需加载
  import NProgress from 'nprogress'
  import myMixin from '../mixins/test'
  import DemoSlot from '../components/DemoSlot'
  export default {
    data() {
      return {
        listNum: 9,
        animaclass: false,
        url: 'http://www.baidu.com',
        copyTxt: '',
        time: ''
      }
    },
    mixins: [myMixin],
    components: { DemoSlot },
    directives: {
      focus: {
        inserted(el) {
          el.focus()
        }
      }
    },
    mounted() {
      this.animateScroll()


      function sleep(second, param) {
          setTimeout(() => {
            console.log('sss')
          }, second)
      }

      async function test(){
        await sleep(2000)
        console.log('oo')
      }
      test()
    },
    methods: {
      animateScroll() {
        let elem = this.$refs.list
        let boxHeight = this.$refs.box.offsetHeight || this.$refs.box.clientHeight
        let listHeight = elem.offsetHeight || elem.clientHeight
        let MarginTop = 0
        let transformHeight = (listHeight / this.listNum) * 3
        console.log(listHeight)
        setInterval(() => {
          if(Math.abs(MarginTop) + boxHeight < (listHeight)) {
            MarginTop -= transformHeight
          }else {
            MarginTop = 0
          }
          elem.style.marginTop = MarginTop + 'px'
        }, 1000)
      },
      // 冒泡
      bubbleSort(arr) {
        let len = arr.length
        for (let i = 0; i< len; i++) {
          for(let j=0; j< len-1; j++) {
            if (arr[j] < arr[j+1]) {
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
          }
        }
        return arr
      },
      moveRepeat(arr) {
        let newArr = []
        for(let i=0; i<arr.length; i++) {
          if(newArr.indexOf(arr[i]) < 0) {
            newArr.push(arr[i])
          }
        }
        return newArr
      },
      getUrlParams(url) {
        let result = {}
        let paramsStr = url.split('?')[1]
        let paramsList = paramsStr.split('&')
        for(let i=0;i<paramsList.length;i++) {
          if(paramsList[i].split('=').length === 2) {
            result[paramsList[i].split('=')[0]] = paramsList[i].split('=')[1]
          }else {
            result[paramsList[i].split('=')[0]] = undefined
          }
        }
        return result
      },
      startHH() {
        NProgress.start()
      },
      endHH() {
        NProgress.done()
      }
    }
  }
</script>

<style lang="scss">
  .box {
    height: 3.1rem;
    width: 400px;
    border: 1px solid #f00;
    background: blueviolet;
    overflow: hidden;
    .demos {
      width: 100%;
      background: #409EFF;
      transition: all .5s;
      .item {
        height: 1rem;
        background: #00ff00;
        &:nth-child(odd) {
          background: aqua;
        }
      }
    }
  }

  .inner {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 200px;
    background-color: #0f0;
    color: #ffff;
  }
</style>
