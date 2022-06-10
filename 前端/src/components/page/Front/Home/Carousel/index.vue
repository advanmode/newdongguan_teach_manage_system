<template>
  <el-carousel :interval="5000" height="395px" arrow="hover">
    <el-carousel-item v-for="item in imgItems" :key="item">
      <div
          class="carousel-img"
          :style="{
            background: `url(${item}) no-repeat center top`,
          }"
      ></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imgItems: [
        '/img/lun1.jpg',
        '/img/lun2.jpg',
        '/img/lun3.jpg',
      ],
    };
  },

};
</script>

<style lang="less" scoped>
.carousel-img {
  width: 100vw;
  height: 395px;
  background-size: cover;
}
/deep/ .el-carousel__indicators {
  bottom: 28px;
}
</style>