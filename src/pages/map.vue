<template>
  <div class="amap-page-container">
    <h1>地图标点，导航划线，圈选</h1>
    <el-amap ref="map" vid="amapDemo" :center="center" :zoom="zoom" :events="events" class="amap-demo">
      <el-amap-marker
        v-for="(marker, index) in markers"
        :key="index"
        zIndex="101"
        :position="marker.position"
        vid="alarmMarker"
      >
        <div class="point-container">
        </div>
      </el-amap-marker>
    </el-amap>

    <div class="toolbar">
      <button @click="drawRoute">画导航路线</button>
      <button @click="drawCircle">圈选</button>
      <button @click="clearMap">清除圈选</button>
    </div>
  </div>
</template>

<style>
  h1 {
    font-size: 32px;
    text-align: center;
  }
  .amap-page-container{
    height: 800px;
  }
  .point-container {
    height: 40px;
    width: 40px;
    background: #f00;
  }
</style>

<script>
  import AMap from 'AMap'
  export default {
    data: function() {
      return {
        map: '',
        zoom: 18,
        center: [121.477742, 31.319617],
        markers: [
          {
            position: [121.477742, 31.319617],
            msg: 'hello'
          },
          {
            position: [121.478742, 31.319617],
            msg: 'world'
          }
        ],
        events: {
          init: (o) => {
            this.map = this.$refs.map.$$getInstance()
            console.log(o.getCenter())
            console.log(this.$refs.map.$$getInstance())
          },
          'moveend': () => {
          },
          'zoomchange': () => {
          },
          'click': () => {
          }
        },
        mouseTool: ''
      }
    },

    methods: {
      clearMap() {
        this.mouseTool.close(true)
      },
      drawCircle() {
        this.mouseTool = new AMap.MouseTool(this.map)
        this.mouseTool.circle({
          strokeColor: "#FF33FF",
          strokeOpacity: 1,
          strokeWeight: 6,
          strokeOpacity: 0.2,
          fillColor: '#1791fc',
          fillOpacity: 0.4,
          strokeStyle: 'solid',
          // 线样式还支持 'dashed'
          // strokeDasharray: [30,10],
        })
        this.mouseTool.on('draw', (event)=> {
          // event.obj 为绘制出来的覆盖物对象
          let newArr = []
          this.markers.forEach(item=> {
            if(event.obj.contains(item.position)) {
              newArr.push(item)
            }
          })
          console.log(newArr)
        })
      },
      drawRoute () { // 巡逻路线
        // 构造路线导航类
        var driving = new AMap.Driving({
          map: this.map,
          isOutline: false,
          showTraffic: false
        })
        // 根据起终点经纬度规划驾车导航路线
        driving.search([121.477742, 31.319617], [121.477721, 31.318645], {
          waypoints: [[121.47842, 31.319617], [121.47942, 31.319617]]
        })
      },
    }
  };
</script>
