<template>
  <div class="wrapper">
    <div class="show-wrapper text-center mx-auto">
      <h2>{{ title }}</h2>
      <div class="w-full d-flex align-items-center">
        <div class="w-50 over-view-container">
          <slot>&nbsp</slot>
        </div>
        <div class="w-50 introduction">
          <h3>{{ subTitle }}</h3>
          <p>{{ introduction }}</p>
          <a v-on:click="open1()">{{buttonTitle}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    introduction: String,
    buttonTitle : {
      type : String,
      default : "去看教程"
    },
    url : String
  },
  data() {
    return {
    };
  },

  methods: {
    open1() {
      this.$router.push(this.url);
    },
  }
};
</script>

<style lang="less" scoped >
.wrapper {
  padding-top: 27px !important;
  .show-wrapper {
    width: 1200px !important;
    h2 {
      height: 52px !important;
      font-size: 44px !important;
      color: #333 !important;
      font-weight: 600 !important;
      line-height: 52px !important;
    }
    .introduction {
      padding-left: 27px !important;
      box-sizing: border-box !important;
      text-align: left !important;
      h3 {
        padding: 0 27px !important;
        margin-bottom: 12px !important;
        color: #333 !important;
        font-weight: 600 !important;
        height: 52px !important;
        font-size: 32px !important;
        line-height: 52px !important;
        white-space: nowrap !important;
      }
      p {
        padding: 0 27px !important;
        font-size: 16px !important;
        line-height: 27px !important;
        color: #333 !important;
        line-height: 1.5 !important;
      }
      a {
        display: inline-block !important;
        margin-top: 40px !important;
        padding: 0 20px !important;
        height: 52px !important;
        text-align: center !important;
        background: linear-gradient(223deg, #2dabff 0, #1472ff 100%) !important;
        border-radius: 26px !important;
        border: none !important;
        outline: 0 !important;
        font-size: 20px !important;
        line-height: 52px !important;
        color: #fff !important;
        margin-left: 27px !important;
      }
    }
  }
}
</style>