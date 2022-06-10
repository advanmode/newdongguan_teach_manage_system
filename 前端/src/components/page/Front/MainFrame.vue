<template>
  <div align="center" class="back">
    <div style="background-color: #1a1a1a !important;">
      <el-menu class="nav-wrapper" mode="horizontal">
        <el-col :span="8" style="margin-left: 15%">
          <h1 class="logo">
            新东莞培训机构
          </h1>
        </el-col>
        <el-col :md="9" :sm="9">
          <el-button type="primary" size="medium"  @click="open1">登录</el-button>
        </el-col>
      </el-menu>

      <el-menu
          class="navbar-container"
          mode="horizontal"
          background-color="#161616"
          text-color="#fff"
          align="center"
          router=true
          active-text-color="#ffd04b">
        <el-menu-item index="/home" style="margin-left: 25%">首页</el-menu-item>
        <el-menu-item index="/kcgk" >课程概况</el-menu-item>
        <el-menu-item index="/jsdw">教师队伍</el-menu-item>
        <el-menu-item index="/jxap">教学安排</el-menu-item>
        <el-menu-item index="/jxyj">教学研究</el-menu-item>
        <el-menu-item index="/jxzy">教学资源</el-menu-item>
        <el-menu-item index="/jxgl">教学管理</el-menu-item>
        <el-menu-item index="/jxxg">教学效果</el-menu-item>
        <el-menu-item index="/jxhd">教学互动</el-menu-item>
      </el-menu >
    </div>
    <router-view style="min-height: 100%;" class="tran"></router-view>

    <!-- 底部 -->
    <div class="button">
      <div class="links">
        <div>东莞理工学院</div>
        <div>东莞理工学院-网络空间安全学院</div>
      </div>
      <p>版权所有： 东莞理工学院 - 网络空间安全学院</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFrame",
  data() {
    return {

    };
  },
  methods: {
    open1(){
      this.$router.push('/login');
    },
  },
}
</script>

<style scoped >

.logo {
  margin: 16.5px 0;
  color: #ffffff;
}

button {
  margin-top: 18px;
}

.navbar-container {
  width: 100%;
  border-bottom: 0 !important;
  background-color: #2c323b;
  height: 60px;
}

.nav-wrapper {
  width: 100%;
  background-color: #fff;
  height: 78px;
  background-image: url(../../../assets/head.jpg);
  background-repeat: no-repeat; /*设置图片不重复*/
  background-size:cover;
  border-bottom: 0 !important;
}

.back {
  background-image: url(../../../assets/mooc_hd.png);
  background-repeat: no-repeat; /*设置图片不重复*/
  background-size:cover;
  position: relative;
  width: 100%;
  height: 100%;
}

.content-box1 {
  position: absolute;
}


.content1 {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}


.button .links{
  margin: auto;
  background-color: #444;
  height: 50px;
  width: 100%;
  position: relative;
  padding: 0 20px;
  line-height: 1.5;
  color: #ffffff;
  text-decoration: none;
}

.tran {
  background-color: #ffffff;
}

.button{
  text-align: center;
  color: #fff;
  width: 100%;
  position: relative;
  margin-top: -100px; /*等于footer的高度*/
  height: 100px;
  clear:both;
  background-color: #444;
}

</style>