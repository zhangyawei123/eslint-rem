<template>
    <el-dialog :visible.sync="dialogVisible">
      <div class="cropper">
        <VueCropper
          ref="cropper"
          @cropMoving="showPreview"
          :autoCrop="true"
          :centerBox="option.centerBox"
          :img="unCropperImg"
          :fixed="option.fixed"
          :fixedNumber="option.fixedNumber"
          :outputSize="option.size"
          :outputType="option.outputType">
        </VueCropper>
      </div>
      <div class="preview">
          <img :src="previewUrl" alt="">
        </div>
        <el-button @click="confirmPreview">cropper</el-button>
    </el-dialog>
</template>
<script>
import { VueCropper }  from 'vue-cropper' 
  export default {
    props: {
      // 默认图片
      unCropperImg: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        dialogVisible: false,
        option: {
          fixed: true,
          fixedNumber: [1, 1],
          centerBox: true
        },
        previewUrl: ''
      }
    },
    methods: {
      confirmPreview() {
        this.$refs.cropper.getCropData((data) => {
          this.imageUrl = data
          // console.log('压缩前的图片大小：' + data.length)
          let img = new Image(),
            _this = this
          img.src = data
          img.onload = function() {
            let _data = _this.compress(img)
            let fileObj = _this.dataURLtoFile(_data, 'meinv')
            let formData = new FormData()
            formData.append('icon', fileObj)
            _this.$emit('cropped', data, formData)
            _this.dialogVisible = false
          }
        })
      },
      showPreview() {
        this.$refs.cropper.getCropData((data) => {
          this.previewUrl = data
        })
      },
      compress(img) {
        let canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            // initSize = img.src.length,
            width = img.width,
            height = img.height
        canvas.height = height
        canvas.width = width
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0, width, height)
        let cdata = canvas.toDataURL('image/jpeg', 0.8)
        return cdata
      },
      dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
        while(n--){
            u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], filename, {type:mime})
      }
    },
    components: {
      VueCropper
    }
  }
</script>
<style lang="less">
    .cropper {
      margin: 0 auto;
      width: 300px;
      height: 300px;
      display: block;
      background: #8c939d;
    }
    .preview {
      width: 150px;
      height: 150px;
      margin: 20px auto;
      background: #f7f7f7;
      >img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
</style>
