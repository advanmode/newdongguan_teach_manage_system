<template>
  <div style="margin-left: 25%;margin-right: 25%;" >
    <h1 style="height: 2.7rem">&nbsp</h1>
    <el-tabs :tab-position="tabPosition" :stretch="true">
      <el-tab-pane label="课程课件">
        <el-table :data="tableData.a" style="width: 100%" v-loading="loading">
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
      <el-tab-pane label="教学录像">
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
      <el-tab-pane label="习题库">
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
      <el-tab-pane label="案例库">
        <el-table :data="tableData.d" style="width: 100%" v-loading="loading">
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
      <el-tab-pane label="实验任务">
        <el-table :data="tableData.e" style="width: 100%" v-loading="loading">
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
      <el-tab-pane label="技术文档范本">
        <el-table :data="tableData.f" style="width: 100%" v-loading="loading">
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
import MainFrame from "@/components/page/Front/MainFrame";
//import getFileUrl from "@/assets/entry.js" // 引入entry.js文件中getFileUrl方法

export default {
  data() {
    return {
      tabPosition: "left",
      tableData: {
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:''
      },
      loading: true,
      pagetotal: 0,
    };
  },
  watch: {
    "$route" : {
      handler(to,from){
        const that = this;
        if (to.path==="/jxzy") {
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
      //getFileUrl(row.text) // 调用getFileUrl方法，预览文件
      window.open(row.text);
    },

    // 获取 easy-mock 的模拟数据
    getData() {
      this.loading = true;
      this.$axios.post('/TextListQuery',{
        type: '课程课件',
      }).then(res1=>{
        if (res1.data.code===200) {
          this.tableData.a=res1.data.data;
          var j = parseInt(res1.data.msg);
          this.pagetotal=j;
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

      this.$axios.post('/TextListQuery',{
        type: '教学录像',
      }).then(res1=>{
        if (res1.data.code===200) {
          this.tableData.b=res1.data.data;
          var j = parseInt(res1.data.msg);
          this.pagetotal=j;
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

      this.$axios.post('/TextListQuery',{
        type: '习题库',
      }).then(res1=>{
        if (res1.data.code===200) {
          this.tableData.c=res1.data.data;
          var j = parseInt(res1.data.msg);
          this.pagetotal=j;
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

      this.$axios.post('/TextListQuery',{
        type: '案例库',
      }).then(res1=>{
        if (res1.data.code===200) {
          this.tableData.d=res1.data.data;
          var j = parseInt(res1.data.msg);
          this.pagetotal=j;
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

      this.$axios.post('/TextListQuery',{
        type: '实验任务',
      }).then(res1=>{
        if (res1.data.code===200) {
          this.tableData.e=res1.data.data;
          var j = parseInt(res1.data.msg);
          this.pagetotal=j;
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

      this.$axios.post('/TextListQuery',{
        type: '技术文档范本',
      }).then(res1=>{
        if (res1.data.code===200) {
          this.tableData.f=res1.data.data;
          var j = parseInt(res1.data.msg);
          this.pagetotal=j;
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