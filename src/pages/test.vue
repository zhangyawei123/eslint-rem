<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo"  :center="center" :amap-manager="amapManager" :zoom="zoom" class="amap-demo">
    </el-amap>

    <div class="toolbar">
      <button @click="add()">add marker</button>
    </div>
  </div>
</template>

<style>
  .amap-page-container {
    height: 800px;
  }
  .amap-demo {
    height: 300px;
  }
</style>

<script>
  import VueAMap, { AMapManager } from 'vue-amap'
  let amapManager = new VueAMap.AMapManager()
  export default {
    data: function() {
      return {
        zoom: 18,
        center: [121.477742, 31.319617],
        amapManager
      }
    },
    mounted() {
      this.$nextTick(()=> {
        this.add()
      })
    },
    methods: {
      add() {
        let map = amapManager.getMap()
        //构造路线导航类
        var driving = new AMap.Driving({
          map: map,
          isOutline: false,
          showTraffic: false
        })
        // 根据起终点经纬度规划驾车导航路线
        driving.search([121.477742, 31.319617], [121.477721, 31.318645], {
          waypoints: [[121.47842, 31.319617], [121.47942, 31.319617]]
        }, function (status, result) {
          // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
          if (status === 'complete') {
            log.success('绘制驾车路线完成')
          } else {
            log.error('获取驾车数据失败：' + result)
          }
        })
      }
    }
  }
</script>
