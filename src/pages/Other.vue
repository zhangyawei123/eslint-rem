<template>
  <div>
    <div class="parent">
      <div class="child">好得好得快好得快好得快好得快好得快好得快好得快好得快快</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Other.vue',
  mounted() {
    this.getdata()
  },
  methods: {
    getdata() {
      console.log('dasdsad')
    }
  }
}
</script>

<style scoped>
.parent{
    display: table-cell;
    width: 200px;
    height: 200px;
    margin: 100px auto;
    border: 1px solid #00f;
    text-align: center;
    vertical-align: middle;
}
.child{
    display: inline-block;
}
</style>
