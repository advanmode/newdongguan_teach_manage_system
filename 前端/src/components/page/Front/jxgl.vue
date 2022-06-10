<template>
  <div style="margin-left: 25%;margin-right: 25%;" >
    <h1 style="height: 2.7rem">&nbsp</h1>
    <el-tabs :tab-position="tabPosition" :stretch="true">
      <el-tab-pane label="开课计划">
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
      <el-tab-pane label="上课班级">
        <el-table
            :data="tableData3"
            class="table"
            header-cell-class-name="table-header"
            style="width: 100%"
            v-loading="loading"
        >
          <el-table-column  width="55" align="center"></el-table-column>
          <el-table-column prop="id" label="班级编号"  align="center"></el-table-column>
          <el-table-column prop="name" label="班级名称"  align="center"></el-table-column>
          <el-table-column prop="grade" label="年级"  align="center"></el-table-column>
          <el-table-column prop="profess" label="专业"  align="center"></el-table-column>
          <el-table-column prop="no" label="班号"  align="center"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="班级花名册">
        <div class="container">
          <div class="handle-box">
            <el-select v-model="query.class" placeholder="班级" class="handle-select mr10">
              <el-option
                  v-for="item in tableData3"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
              </el-option>
            </el-select>
          </div>
          <el-table
              :data="tableData"
              class="table"
              header-cell-class-name="table-header"
              style="width: 100%"
              v-loading="loading"
          >
            <el-table-column width="55" align="center"></el-table-column>
            <el-table-column prop="username" label="学号" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" align="center"></el-table-column>
            <el-table-column prop="sex" label="性别" align="center"></el-table-column>
            <el-table-column prop="hasClass" label="所属班级" align="center"></el-table-column>
            <el-table-column prop="birthday" label="出生日期" align="center"></el-table-column>
            <el-table-column prop="from" label="籍贯" align="center"></el-table-column>
            <el-table-column prop="email" align="center" label="电子邮箱">
            </el-table-column>
            <el-table-column prop="phone" label="手机" align="center">
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
                background
                layout="total, prev, pager, next"
                :current-page="pageindex"
                :page-size="pagesize"
                :total="pagetotal"
                @current-change="handlePageChange"
            ></el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="班级成绩单">
        <div class="container">
          <div class="handle-box">
            <el-select v-model="query.class" placeholder="班级" class="handle-select mr10">
              <el-option
                  v-for="item in tableData3"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
              </el-option>
            </el-select>
            <el-select v-model="query.course" placeholder="课程" class="handle-select mr10">
              <el-option
                  v-for="item in courses"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
              </el-option>
            </el-select>
          </div>
          <el-table
              :data="tableData4"
              class="table"
              header-cell-class-name="table-header"
              style="width: 100%"
              v-loading="loading"
          >
            <el-table-column width="55" align="center"></el-table-column>
            <el-table-column prop="year" label="学年度" align="center"></el-table-column>
            <el-table-column prop="hasClass" label="所属班级" align="center"></el-table-column>
            <el-table-column prop="course" label="课程名称" align="center"></el-table-column>
            <el-table-column prop="teacher" label="教师姓名" align="center"></el-table-column>
            <el-table-column prop="username" label="学号" align="center"></el-table-column>
            <el-table-column prop="normalscore" label="平时成绩" align="center"></el-table-column>
            <el-table-column prop="midscore" label="期中成绩" align="center"></el-table-column>
            <el-table-column prop="finalscore" label="期末成绩" align="center"></el-table-column>
            <el-table-column prop="bigworkscore" label="大作业成绩" align="center"></el-table-column>
            <el-table-column prop="totalscore" label="总评成绩" align="center"></el-table-column>

            <el-table-column label="操作" width="220" align="center">
              <template slot-scope="scope">
                <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="open3(scope.row)"
                >查看作业案例</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
                background
                layout="total, prev, pager, next"
                :current-page="pageindex"
                :page-size="pagesize"
                :total="pagetotal"
                @current-change="handlePageChange"
            ></el-pagination>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left",
      tableData2: [],
      tableData3: [],
      tableData6: [],
      otableData: [],
      courses: [],
      query: {
        class: '',
        course: '',
      },
      loading: true,
      pagetotal: 0,
      pageindex: 1,
      pagesize: 20,
    };
  },
  watch: {
    "$route" : {
      handler(to,from){
        const that = this;
        if (to.path==="/jxgl") {
          that.getData();
        }
      },
      deep: true
    }
  },

  computed:{
    tableData:function(){
      var search=this.query.class.toString().toLowerCase();

      if(search){
        return  this.otableData.filter(function(dataNews){
          return Object.keys(dataNews).some(function(key){
            return String(dataNews[key]).toLowerCase().includes(search);
          })
        })
      }
      return this.otableData;
    },

    tableData5:function(){
      var search=this.query.class.toString().toLowerCase();

      if(search){
        return  this.tableData6.filter(function(dataNews){
          return Object.keys(dataNews).some(function(key){
            return String(dataNews[key]).toLowerCase().includes(search);
          })
        })
      }
      return this.otableData;
    },

    tableData4:function(){
      var search=this.query.course.toString().toLowerCase();

      if(search){
        return  this.tableData5.filter(function(dataNews){
          return Object.keys(dataNews).some(function(key){
            return String(dataNews[key]).toLowerCase().includes(search);
          })
        })
      }
      return this.otableData;
    }
  },

  created(){
    this.getData();
  },

  methods: {

    open(row) {
      console.log(row);
      this.$router.push({
        path: '/jxgl',
        query: {
          text: row.text,
          title: row.title,
        }
      });
    },

    // 获取 easy-mock 的模拟数据
    getData() {
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

      this.loading = true;
      this.$axios.get('/ClassListQuery').then(res1=>{
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
          alert("请截图以下信息报给维护员: 出错位置：classList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });

      this.loading = true;
      this.$axios.get('/CourseListQuery').then(res1=>{
        if (res1.data.code===200) {
          this.courses=res1.data.data;
          this.loading = false;
        } else if (res1.data.code===400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code===403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：scoreList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });

      this.loading = true;
      this.$axios.get('/StudentListQuery').then(res1 => {
        if (res1.data.code === 200) {
          this.otableData = res1.data.data;
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
          alert("请截图以下信息报给维护员: 出错位置：studentList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading = false;
      }).catch(res2 => {
        this.$message.error(res2.message);
      });

      this.loading = true;
      this.$axios.get('/ScoreListQuery').then(res1 => {
        if (res1.data.code === 200) {
          this.tableData6 = res1.data.data;
          this.loading = false;
        } else if (res1.data.code === 400) {
          this.$message.error('查询失败:' + res1.data.msg);
        } else if (res1.data.code === 403) {
          this.$message.error('查询失败:' + res1.data.msg);
          this.loading = false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code === 500) {
          alert("请截图以下信息报给维护员: 出错位置：scoreList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading = false;
      }).catch(res2 => {
        this.$message.error(res2.message);
      });

    },

    // 分页导航
    handlePageChange(val) {
      this.$set(this.query, 'pageindex', val);
      this.getData();
    },

  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 143px;
  margin-bottom: 10px;
}

.handle-add {
  width: 100px;
}

.handle-input {
  width: 120px;
  display: inline-block;
}

.table {
  width: 100%;
  font-size: 14px;
}

@media screen and (max-width: 500px) {

  .table {
    width: 500px !important;
    font-size: 3px !important;
  }

  .container {
    width: 500px !important;
  }

  .el-table-column {
    width: 10px !important;
    font-size: 3px !important;
  }
}

.w {
  width: 1000px;
  font-size: 18px;
  margin-top: 2.7rem !important;
}

.red {
  color: #ff0000;
}

.mr10 {
  margin-right: 10px;
}

.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 7px;
}

</style>