<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :auto-upload="false"
      :show-file-list="false"
      action=""
      :on-change="handleChange">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <Cropper
    ref="cropper"
    @cropped="getCropperImg"
    :unCropperImg="unCropperImg">
    </Cropper>
  </div>
</template>

<script>
import Cropper  from '../components/Cropper' 
  export default {
    data() {
      return {
        unCropperImg: '',
        imageUrl: ''
      }
    },
    methods: {
      handleChange(file) {
        this.$refs.cropper.dialogVisible = true
        this.unCropperImg = URL.createObjectURL(file.raw)
      },
      getCropperImg(data, formData) {
        this.imageUrl = data
        console.log(formData.get('icon'))
      }
    },
    components: {
      Cropper
    }
  }
</script>

<style lang="less">
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
