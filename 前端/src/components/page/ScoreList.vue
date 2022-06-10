<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 成绩管理
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-button
            type="primary"
            icon="el-icon-lx-tag"
            class="handle-add mr10"
            @click="open1"
        >新增成绩
        </el-button>
        <el-button
            type="warning"
            icon="el-icon-upload"
            class="handle-add mr10"
            @click="open2"
        >导入成绩
        </el-button>
        <el-select v-model="query.class" placeholder="班级" class="handle-select mr10">
          <el-option
              v-for="item in classes"
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
          :data="tableData"
          class="table"
          header-cell-class-name="table-header"
          style="width: 100%"
          v-loading="loading"
      >
        <el-table-column width="55" align="center"></el-table-column>
        <el-table-column prop="year" label="学年度" align="center"></el-table-column>
        <el-table-column prop="claz" label="所属班级" align="center"></el-table-column>
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
            >上传作业案例</el-button>
            <el-button
                type="text"
                icon="el-icon-delete"
                class="red"
                @click="handleDelete(scope.row)"
            >删除
            </el-button>
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

    <el-upload
        ref="quillUploader"
        class="avatar-uploader"
        :action="photoUrl"
        :show-file-list="false"
        :auto-upload="true"
        :on-success="onChangeQuill"
        :on-error="onError"
        :limit="1"
        :multiple="true"
        v-show="false">
    </el-upload>

    <!-- 编辑弹出框 -->
    <el-dialog
        title="新增成绩"
        :visible.sync="editVisible"
        width="30%"
        close-on-click-modal="false"
        close-on-press-escape="false"
        show-close="false"
    >
      <el-form ref="form" :model="form" label-width="70px">
        <el-divider></el-divider>
        <el-form-item label="学号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="学年度">
          <el-input v-model="form.year"></el-input>
        </el-form-item>
        <el-form-item label="教师姓名">
          <el-input v-model="form.teacher"></el-input>
        </el-form-item>
        <el-form-item label="所属班级">
          <el-select v-model="form.class" placeholder="班级" class="handle-select mr10">
            <el-option
                v-for="item in classes"
                :key="item.name"
                :label="item.name"
                :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属课程">
          <el-select v-model="form.course" placeholder="课程" class="handle-select mr10">
            <el-option
                v-for="item in courses"
                :key="item.name"
                :label="item.name"
                :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="平时成绩">
          <el-input v-model="form.normalscore"></el-input>
        </el-form-item>
        <el-form-item label="期中成绩">
          <el-input v-model="form.midscore"></el-input>
        </el-form-item>
        <el-form-item label="期末成绩">
          <el-input v-model="form.finalscore"></el-input>
        </el-form-item>
        <el-form-item label="大作业成绩">
          <el-input v-model="form.bigworkscore"></el-input>
        </el-form-item>
        <el-form-item label="总评成绩">
          <el-input v-model="form.totalscore"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'scorelist',
  data() {
    return {
      otableData: [],
      classes: [],
      courses: [],
      scores: [],
      editVisible: false,
      pageindex: 1,
      pagesize: 20,
      pagetotal: 0,
      query: {
        class: '',
        course: ''
      },
      photoUrl: 'http://xxx/api/TableUpload', // 上传地址
      form: {
        username: '',
        year: '',
        teacher: '',
        class: '',
        course: '',
        normalscore: '',
        midscore: '',
        finalscore: '',
        bigworkscore: '',
        totalscore: '',
      },
      loading: true
    };
  },

  watch: {
    "$route": {
      handler(to, from) {
        const that = this;
        if (to.path === "/scorelist") {
          that.getData();
        }
      },
      deep: true
    }
  },

  computed:{
    tableData2:function(){
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

    tableData:function(){
      var search=this.query.course.toString().toLowerCase();

      if(search){
        return  this.tableData2.filter(function(dataNews){
          return Object.keys(dataNews).some(function(key){
            return String(dataNews[key]).toLowerCase().includes(search);
          })
        })
      }
      return this.otableData;
    }
  },

  created() {
    this.getData();
  },

  methods: {

    open1() {
      this.$set(this.form, "username", "");
      this.$set(this.form, "name", "");
      this.$set(this.form, "sex", "");
      this.$set(this.form, "class", "");
      this.editVisible = true;
    },

    open2() {
      this.photoUrl='http://xxx/api/TableUpload'
      document.querySelector(".avatar-uploader input").click();
    },

    open3() {
      this.photoUrl='http://xxx/api/HomeWorkUpload'
      document.querySelector(".avatar-uploader input").click();
    },

    onError(err, file, fileList){
      alert("上传错误" + err);
    },

    onChangeQuill(response, file, fileList) {
      if (response.data.code===200){
        this.$message.success('上传成功');
        this.getData();
      } else if (response.data.code===400) {
        this.$message.error('上传失败,' + response.data.message);
      } else if (response.data.code===500) {
        alert("请截图以下信息报给维护员: 出错位置：scoreList.upload 出错详情: " + response.data.message);
      } else if (response.data.code===403) {
        this.$message.error("登录过期，请重新登录");
      }

    },

    // 获取 easy-mock 的模拟数据
    getData() {
      this.loading = true;
      this.$axios.get('/ScoreListQuery').then(res1 => {
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
          alert("请截图以下信息报给维护员: 出错位置：scoreList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading = false;
      }).catch(res2 => {
        this.$message.error(res2.message);
      });

      this.loading = true;
      this.$axios.get('/ClassListQuery').then(res1=>{
        if (res1.data.code===200) {
          this.classes=res1.data.data;
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
    },

    // 删除操作
    handleDelete(row) {
      // 二次确认删除
      this.$confirm('确定要删除吗？', '提示', {
        type: 'warning'
      })
      .then(() => {
        this.loading = true;
        this.$axios.post('/ScoreDelete', {
          id: row.id
        }).then(res6 => {
          if (res6.data.code === 200) {
            this.getData();
            this.$message.success('删除成功');
            this.loading = false;
          } else if (res6.data.code === 400) {
            this.$message.error('失败:' + res6.data.msg);
          } else if (res6.data.code === 403) {
            this.$message.error('失败:' + res6.data.msg);
            this.loading = false;
            this.$router.push({path: '/login'});
          } else if (res6.data.code === 500) {
            alert("请截图以下信息报给维护员: 出错位置：scoreList.handledelete 出错详情: " + res6.data.msg);
          }
          this.loading = false;
        }).catch(res7 => {
          this.$message.error(res7.message);
        });
      })
      .catch(() => {
      });
    },
    // 保存编辑
    saveEdit() {
      this.editVisible = false;
      this.loading = true;
      this.$axios.post('/ScoreAdd', {
        username: this.form.username,
        year: this.form.year,
        teacher: this.form.teacher,
        claz: this.form.class,
        course: this.form.course,
        normalscore: this.form.normalscore,
        midscore: this.form.midscore,
        finalscore: this.form.finalscore,
        bigworkscore: this.form.bigworkscore,
        totalscore: this.form.totalscore,
      }).then(res4 => {
        if (res4.data.code === 200) {
          this.getData();
          this.$message.success('成功');
        } else if (res4.data.code === 400) {
          this.$message.error('失败:' + res4.data.msg);
        } else if (res4.data.code === 403) {
          this.$message.error('失败:' + res4.data.msg);
          this.loading = false;
          this.$router.push({path: '/login'});
        } else if (res4.data.code === 500) {
          alert("请截图以下信息报给维护员: 出错位置：scoreList.saveEdit 出错详情: " + res4.data.msg);
        }
        this.loading = false;
      }).catch(res5 => {
        this.$message.error(res5.message);
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
