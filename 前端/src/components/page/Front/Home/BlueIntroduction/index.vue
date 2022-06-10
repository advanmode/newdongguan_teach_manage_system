<template>
  <div class="wrapper">
    <div class="show-wrapper text-center mx-auto">
      <h2>{{ title }}</h2>
      <div class="w-full d-flex align-items-center">
        <div class="w-50 introduction">
          <h3>{{ subTitle }}</h3>
          <p>{{ introduction }}</p>
          <a v-on:click="open1()">{{buttonTitle}}</a>
        </div>
        <div class="w-50 over-view-container">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import bg from "@/assets/xs/yx.png";
export default {
  props: {
    title: String,
    subTitle: String,
    introduction: String,
    buttonTitle : {
      type : String,
      default : "去看课程简介"
    },
    url : String
  },
  data() {
    return {
      // bg
    };
  },
  methods: {
    open1() {
      this.$router.push(this.url);
    },
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  padding-top: 27px;
  background-color: rgba(20,114,255,.04);
  .show-wrapper {
    width: 1200px;
    h2 {
      height: 52px;
      font-size: 44px;
      color: #333;
      font-weight: 600;
      line-height: 52px;
    }
    .introduction {
      padding-left: 27px;
      box-sizing: border-box;
      text-align: left;
      h3 {
        padding: 0 27px;
        margin-top: 27px;
        margin-bottom: 12px;
        color: #333;
        font-weight: 600;
        height: 52px;
        font-size: 32px;
        line-height: 52px;
        white-space: nowrap;
      }
      p {
        padding: 0 27px;
        font-size: 16px;
        line-height: 27px;
        color: #333;
        line-height: 1.5;
      }
      a {
        display: inline-block;
        margin-top: 40px;
        padding: 0 20px;
        height: 52px;
        text-align: center;
        background: linear-gradient(223deg, #2dabff 0, #1472ff 100%);
        border-radius: 26px;
        border: none;
        outline: 0;
        font-size: 20px;
        line-height: 52px;
        color: #fff;
        margin-left: 27px;
      }
    }
  }
}
</style>