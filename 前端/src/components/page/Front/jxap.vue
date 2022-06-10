<template>
  <div style="margin-left: 25%;margin-right: 25%;">
    <h1 style="height: 2.7rem">&nbsp</h1>
    <el-tabs :tab-position="tabPosition" :stretch="true">
      <el-tab-pane label="教学大纲">
        <el-table :data="tableData3" style="width: 100%;" v-loading="loading">
          <el-table-column prop="title" label="学科" width="300" align="center"></el-table-column>
          <el-table-column prop="year" label="学年度" width="180" align="center"></el-table-column>
          <el-table-column label="操作" width="180" align="center" >
            <template slot-scope="scope">
              <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="open(scope.row)"
              >查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="教学日历">
        <el-calendar v-model="value"></el-calendar>
      </el-tab-pane>
      <el-tab-pane label="教学内容">
        <el-table :data="tableData.a" style="width: 100%;" v-loading="loading">
          <el-table-column prop="title" label="标题" width="300" align="center"></el-table-column>
          <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
          <el-table-column label="操作" width="180" align="center" >
            <template slot-scope="scope">
              <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="open(scope.row)"
              >查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="授课计划">
        <el-table
            :data="tableData2"
            class="table"
            header-cell-class-name="table-header"
            style="width: 100%"
            v-loading="loading"
        >
          <el-table-column  width="55" align="center"></el-table-column>
          <el-table-column prop="id" label="计划编号"  align="center"></el-table-column>
          <el-table-column prop="course" label="课程名称"  align="center"></el-table-column>
          <el-table-column prop="className" label="班级名称"  align="center"></el-table-column>
          <el-table-column prop="teacher" label="任课教师"  align="center"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="教学重难点">
        <el-table :data="tableData.b" style="width: 100%" v-loading="loading">
          <el-table-column prop="title" label="标题" width="300" align="center"></el-table-column>
          <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
          <el-table-column label="操作" width="180" align="center" >
            <template slot-scope="scope">
              <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="open(scope.row)"
              >查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="教学方法与手段">
        <el-table :data="tableData.c" style="width: 100%" v-loading="loading">
          <el-table-column prop="title" label="标题" width="300" align="center"></el-table-column>
          <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
          <el-table-column label="操作" width="180" align="center" >
            <template slot-scope="scope">
              <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="open(scope.row)"
              >查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "jxhd",
  data: function() {
    return {
      msgs: [],
      tableData2: [],
      tableData3: [],
      tableData: {
        a: '',
        b: '',
        c: '',
      },
      tabPosition: "left",
      value: new Date(),
      loading: true,
      pageindex: 1,
      pagesize: 20,
      pagetotal: 0,
      imgsrc: '',
      form: {
        title: '',
        text: '',
      }
    };
  },

  watch: {
    "$route" : {
      handler(to,from){
        const that = this;
        if (to.path==="/jxap") {
          that.getData();
        }
      },
      deep: true
    },

    "msgs" : {

    }
  },

  created(){
    this.getData();
  },

  methods: {
    open(row) {
      window.location.href=row.link;
    },

    getData() {
      this.loading = true;
      this.$axios.post('/TextListQuery',{
        type: '教学内容',
      }).then(res1=>{
        if (res1.data.code===200) {
          this.tableData.a=res1.data.data;
          this.loading = false;
        } else if (res1.data.code===400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code===403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：jxapList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });

      this.$axios.post('/TextListQuery',{
        type: '教学重难点',
      }).then(res1=>{
        if (res1.data.code===200) {
          this.tableData.b=res1.data.data;
          this.loading = false;
        } else if (res1.data.code===400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code===403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：jxapList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });

      this.$axios.post('/TextListQuery',{
        type: '教学方法与手段',
      }).then(res1=>{
        if (res1.data.code===200) {
          this.tableData.c=res1.data.data;
          this.loading = false;
        } else if (res1.data.code===400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code===403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：jxapList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });

      this.loading = true;
      this.$axios.get('/JxdgListQuery').then(res1=>{
        if (res1.data.code===200) {
          this.tableData3=res1.data.data;
          this.loading = false;
        } else if (res1.data.code===400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code===403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：jxapList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });

      this.loading = true;
      this.$axios.get('/PlanListQuery').then(res1=>{
        if (res1.data.code===200) {
          this.tableData2=res1.data.data;
          this.loading = false;
        } else if (res1.data.code===400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code===403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：jxap.getdata 出错详情: " + res1.data.msg);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });
    },


  },
}
</script>

<style scoped>
.nav-wrapper {
  width: 100%;
  background-color: #fff;
  height: 78px;
}

.mcard {
  margin-top: 20px;
  width: 100%;
  height: auto;
}

.mcontianer {
  margin-top: 20px;
  width: 50%;
  height: auto;
}

.navbar-container {
  width: 100%;
  height: 55px;
  background-color: #2c323b;
}

.mfont {
  font-size: 15px;
}

.w {
  width: 1000px;
  font-size: 18px;
  margin-top: 2.7rem !important;
}

</style>