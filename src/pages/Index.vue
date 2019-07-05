<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div ref="div" id="div">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
// 节流函数
import { throttle } from '../util'
  export default {
    data() {
      return {
        ruleForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    mounted() {
      this.submitForm = throttle(this.submitForm, 1000)
      const div = document.getElementById('div')
      let fragmet = document.createDocumentFragment()
      while (div.firstChild) {
        fragmet.appendChild(div.firstChild)
      }
      console.log(Array.prototype.slice.call(fragmet.childNodes))
      Array.prototype.slice.call(fragmet.childNodes).forEach(node=> {
        if (node.nodeType === 1) {
          node.textContent = '改过的字'
        }
      })
      div.appendChild(fragmet)
    },
    methods: {
      getData() {
        this.$http('/playlist/hot').then(res=> {
          console.log(res.data)
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped>
  .demo {
    width: 7.5rem;
    height: 3rem;
    background: rgb(119, 15, 145);
  }
  p {
    font-size: .24rem;
    color: #00f;
    background: #ddd;
  }
</style>
