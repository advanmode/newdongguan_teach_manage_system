<template>
  <div class="carousel-bar-container">
    <span v-for="item in carouselItems" :key="item.title">
      <a :href="item.url">{{ item.title }}</a>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          title: "课程负责人",
          url: "#course-person",
        },
        {
          title: "课程简介",
          url: "#course-introduction",
        },
        {
          title: "课程特色",
          url: "#characteristic",
        },
        {
          title: "课程动态",
          url: "#dynamic",
        },
        {
          title: "教学团队",
          url: "#characteristic",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.carousel-bar-container {
  width: 900px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 16px 0;
  height: 60px;
  border: 1px solid #efeff7;
  box-sizing: content-box;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 6px 0 rgba(76,111,186,10%);
  span {
    width: 20%;
    height: 100%;
    border-right:1px solid #e3e3e9;
    line-height: 60px;
    &:last-child {
        border-right:none;
    }
    a {
        
        font-size: 1.3rem;
        text-decoration: none;
    }
  }
  
}
</style>