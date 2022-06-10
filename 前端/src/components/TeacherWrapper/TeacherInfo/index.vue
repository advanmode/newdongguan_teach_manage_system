<template>
  <div class="teacher-info-wrapper">
    <div class="left">
      <img :src="item.src" alt="" />
    </div>
    <div class="right">
      <div>
        <p>{{ item.name }}</p>
        <p>{{ item.position }}</p>
        <span class="introduction">{{ item.introduction }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="less" scoped>
.teacher-info-wrapper {
  padding: 10px;
  box-sizing: border-box;
  border-top-left-radius: 100px 80px;
  border-bottom-right-radius: 100px 80px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  margin: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  .left {
    flex: 1 1 0;
  }
  .right {
    width: 65%;
    display: flex;
    align-items: center;
    p {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 0;
      &:last-of-type {
        margin-bottom: 10px;
      }
    }
  }
  img {
    width: 80%;
    display: block;
    border-top-left-radius: 100px 80px;
  }
}
</style>