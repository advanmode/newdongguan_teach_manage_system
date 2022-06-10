<template>
  <div class="wrapper">
    <div class="left">
      <img class="w-100" :src="url" alt="" />
    </div>
    <div class="right">
        <div :style="{
            height : h
        }" class="course-item" :class="{
            active : index === i
        }" v-for="(item,i) in courseItems" :key="i" @mouseover="handleOver(item,i)">
            {{item.courseTime | parseTime}} : {{item.courseTeacher}}的{{item.courseName}}将开课
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courseItems: Array,
  },
  data() {
      return {
          index : 0
      }
  },
  computed : {
      url () {
          return this.courseItems[this.index].url;
      },
      h() {
          if(this.courseItems.length > 0) {
              return 100 / this.courseItems.length + '%';
          } else {
              return "20%"
          }
      }
  },
  methods: {
      handleOver (item,i) {
          this.index = i;
      }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 1000px;
  background: #F9F8F9;
  height: 300px;
  display: flex;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  .left {
    width: 520px;
    height: 300px;
    img {
      display: block;
      height: 100%;
    }
  }
  .right {
      flex : 1 1 0;
      .course-item {
          display: flex;
          align-items: center;
          justify-content: center;
          color : #1a1a1a;
          cursor: pointer;
          transition: .5s;
          &:hover,&.active {
              background-color: rgba(255,255,255,.8);
              color : #409EFF;
          }
      }
  }
}
</style>