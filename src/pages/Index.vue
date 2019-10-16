<template>
  <div>
    <h1>hello wolrd</h1>
    <p>下面演示lodash</p>
    <p>{{$store.state.name}}</p>
    <DemoSlot>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
    </DemoSlot>
    <input v-focus v-model="copyTxt">
    <el-button v-copy="copyTxt">复制</el-button>
    <el-button @click="startHH">noprogress start</el-button>
    <el-button @click="endHH">noprogress end</el-button>
  </div>
</template>

<script>
  import NProgress from 'nprogress'
  import myMixin from '../mixins/test'
  import DemoSlot from '../components/DemoSlot'
  export default {
    data() {
      return {
        url: 'http://www.baidu.com',
        copyTxt: ''
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
    },
    methods: {
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

</style>
