<template>
  <div>
    login panel
    <el-button @click="logins">登陆</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    logins() {
      this.$store.dispatch('user/login', { token: 'dadiqgi21ibdi32bdi2ib3di42id'})
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
        })
        .catch(() => {
          console.log('error')
        })
    }
  }
}
</script>
