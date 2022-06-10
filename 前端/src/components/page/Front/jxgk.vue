<template>
  <div style="margin-left: 25%;margin-right: 25%;" >
    <h1 style="height: 2.7rem">&nbsp</h1>
    <el-tabs :tab-position="tabPosition" :stretch="true">
      <el-tab-pane label="课程简介">
        <h1>课程简介</h1>
        <p>&nbsp</p>
        <div v-html="content.a"></div>
      </el-tab-pane>
      <el-tab-pane label="课程特色">
        <h1>课程特色</h1>
        <p>&nbsp</p>
        <div v-html="content.b"></div>
      </el-tab-pane>
      <el-tab-pane label="教材参考资料">
        <h1>教材参考资料</h1>
        <p>&nbsp</p>
        <div v-html="content.c"></div>
      </el-tab-pane>
      <el-tab-pane label="历史沿革">
        <h1>历史沿革</h1>
        <p>&nbsp</p>
        <div v-html="content.d"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MainFrame from "@/components/page/Front/MainFrame";
export default {
  components: {MainFrame},
  data() {
    return {
      tabPosition: "left",
      content: '',
      loading: true,
    };
  },
  watch: {
    "$route" : {
      handler(to,from){
        const that = this;
        if (to.path==="/jxyj") {
          that.getData();
        }
      },
      deep: true
    }
  },

  created(){
    this.getData();
  },

  methods: {

    open(row) {
      console.log(row);
      this.$router.push({
        path: '/jxgk',
        query: {
          text: row.text,
          title: row.title,
        }
      });
    },

    // 获取 easy-mock 的模拟数据
    getData() {
      this.loading = true;
      this.$axios.get('/JxgkQuery').then(res1=>{
        if (res1.data.code===200) {
          this.content=res1.data.data;
          this.loading = false;
        } else if (res1.data.code===400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code===403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：jxggList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });
    },

  }
};
</script>

<style scoped>
.w {
  width: 1000px;
  font-size: 18px;
  margin-top: 2.7rem !important;
}
</style>