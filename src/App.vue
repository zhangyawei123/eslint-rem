<template>
  <div id="app">
    <div>
      <router-link to="/">index</router-link>
      <router-link to="/other">other</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
