<template>
  <div style="margin-left: 25%;margin-right: 25%;" >
    <h1 style="height: 2.7rem">&nbsp</h1>
    <el-tabs :tab-position="tabPosition" :stretch="true">
      <el-tab-pane label="课程负责人">
        <h1>课程负责人</h1>
        <div v-html="fuzeren"></div>
      </el-tab-pane>
      <el-tab-pane label="课程教学团队">
        <h1>教学团队</h1>
        <div v-html="jxtd"></div>
      </el-tab-pane>
      <el-tab-pane label="主讲教师">
        <el-card style="margin-top: 20px" v-for="(item,i) in teachers">
          <el-row>
            <el-col :span="4">
              <div class="block"><el-avatar :size="100" :src="item.photo"></el-avatar></div>
            </el-col>
            <el-col :span="16" style="text-align:left;">
              <p style="" class="showp"><span class="showspan">{{ item.name }}</span>{{ item.profess }}</p>
              <p>&nbsp</p>
              <ol class="showol">{{ item.birthday }}&nbsp&nbsp{{item.degree}}&nbsp&nbsp{{item.group}}</ol>
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="青年教师培养">
        <h1>青年教师培养</h1>
        <div v-html="jspy"></div>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>

export default {
  name: 'jsdw',
  data() {
    return {
      tabPosition: "left",
      teachers: [],
      fuzeren: '',
      jxtd: '',
      jspy: '',
      loading: true,
      pagetotal: 0,
    };
  },
  watch: {
    "$route": {
      handler(to, from) {
        const that = this;
        if (to.path === "/jsdw") {
          that.getData();
        }
      },
      deep: true
    }
  },

  created() {
    this.getData();
  },

  methods: {

    // 获取 easy-mock 的模拟数据
    getData() {
      this.loading = true;
      this.$axios.get('/TeachersQuery').then(res1 => {
        if (res1.data.code === 200) {
          this.teachers = res1.data.data;
          var j = parseInt(res1.data.msg);
          this.pagetotal = j;
          this.loading = false;
        } else if (res1.data.code === 400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code === 403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading = false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code === 500) {
          alert("请截图以下信息报给维护员: 出错位置：jsdw.getdata 出错详情: " + res1.data.msg);
        }
        this.loading = false;
      }).catch(res2 => {
        this.$message.error(res2.message);
      });

      this.loading = true;
      this.$axios.get('/JxtdQuery').then(res1 => {
        if (res1.data.code === 200) {
          this.fuzeren = res1.data.data.fuzeren;
          this.jxtd = res1.data.data.jxtd;
          this.jspy = res1.data.data.jspy;
          this.loading = false;
        } else if (res1.data.code === 400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code === 403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading = false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code === 500) {
          alert("请截图以下信息报给维护员: 出错位置：jsdw.getdata 出错详情: " + res1.data.msg);
        }
        this.loading = false;
      }).catch(res2 => {
        this.$message.error(res2.message);
      });
    },

  }
}
</script>

<style scoped>
.showp {
  height: 57px;
  font-size: 18px;
  color: #969696;
  border-bottom: 1px dashed #d9d9d9;
}

.showspan {
  width: 188px;
  height: 33px;
  font-size: 24px;
  color: #444444;
  padding: 0px 70px 0px 0px;
}

</style>