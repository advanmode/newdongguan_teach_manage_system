<template>
  <div class="w-100 footer-wrapper">
    <div class="index-footer mx-auto">
      <div class="content-container clearfix hidden-xs d-flex justify-content-between">
        <div class="pull-left copy-right-text ">
          <span>友情链接：</span>
          <a
            class="cert-link"
            href="http://mooc.people.cn/publicCourse/index.html"
            target="_blank"
            >人民公开课</a
          >
          &nbsp;&nbsp;
          <a class="cert-link" href="http://jsfz.ulearning.cn/" target="_blank"
            >教师发展中心</a
          >
          &nbsp;&nbsp;
          <a class="cert-link" href="https://www.leiketang.cn/" target="_blank"
            >雷课堂</a
          >
          &nbsp;&nbsp;
          <br />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer-wrapper {
  background-color: #444;
}
.index-footer {
  width: 1140px;
  position: relative;
  padding: 0 20px;
  font-size: 14px;
  line-height: 1.9;
  display: flex;
  color: #cbcbd1;
  white-space: nowrap;
  min-width: 1140px;
  

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }

  .copy-right-text {
    margin-top: 46px;
    margin-bottom: 46px;
    margin-right: 200px;
    width: 66%;
  }

  .umooc-logo {
    text-align: right;
    margin-top: 80px;

    &.asia-logo {
      margin-top: 32px;
    }
  }

  .logo {
    margin-top: 2px;
  }

  .cert-link {
    margin-right: 10px;
    color: #cbcbd1;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
}


</style>