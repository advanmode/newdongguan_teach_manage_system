<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 学生管理
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
        >新增学生
        </el-button>
        <el-button
            type="warning"
            icon="el-icon-upload"
            class="handle-add mr10"
            @click="open2"
        >导入名单
        </el-button>
        <el-select v-model="query.class" placeholder="班级" class="handle-select mr10">
          <el-option
              v-for="item in classes"
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

        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
                type="text"
                icon="el-icon-edit"
                @click="handleEdit(scope.row)"
            >重置密码
            </el-button>
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
        title="新增学生"
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
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.sex"></el-input>
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
  name: 'studentlist',
  data() {
    return {
      otableData: [],
      classes: [],
      editVisible: false,
      pageindex: 1,
      pagesize: 20,
      pagetotal: 0,
      query: {
        class: ''
      },
      photoUrl: 'http://xxx/api/TableUpload', // 上传地址
      form: {
        username: '',
        name: '',
        sex: '',
        class: '',
      },
      loading: true
    };
  },

  watch: {
    "$route": {
      handler(to, from) {
        const that = this;
        if (to.path === "/studentlist") {
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
        alert("请截图以下信息报给维护员: 出错位置：studentList.upload 出错详情: " + response.data.message);
      } else if (response.data.code===403) {
        this.$message.error("登录过期，请重新登录");
      }

    },

    // 获取 easy-mock 的模拟数据
    getData() {
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
          alert("请截图以下信息报给维护员: 出错位置：studentList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });
    },

    handleEdit(row) {
      // 二次确认删除
      this.$confirm('确定要重置密码吗？新的密码为123456', '提示', {
        type: 'warning'
      })
      .then(() => {
        this.loading = true;
        this.$axios.post('/StudentPassword', {
          username: row.username
        }).then(res6 => {
          if (res6.data.code === 200) {
            this.getData();
            this.$message.success('重置成功');
            this.loading = false;
          } else if (res6.data.code === 400) {
            this.$message.error('失败:' + res6.data.msg);
          } else if (res6.data.code === 403) {
            this.$message.error('失败:' + res6.data.msg);
            this.loading = false;
            this.$router.push({path: '/login'});
          } else if (res6.data.code === 500) {
            alert("请截图以下信息报给维护员: 出错位置：studentList.handleedit 出错详情: " + res6.data.msg);
          }
          this.loading = false;
        }).catch(res7 => {
          this.$message.error(res7.message);
        });
      })
      .catch(() => {
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
        this.$axios.post('/StudentDelete', {
          username: row.username
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
            alert("请截图以下信息报给维护员: 出错位置：studentList.handledelete 出错详情: " + res6.data.msg);
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
      this.$axios.post('/StudentAdd', {
        name: this.form.name,
        username: this.form.username,
        password: "e10adc3949ba59abbe56e057f20f883e",
        hasClass: this.form.class
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
          alert("请截图以下信息报给维护员: 出错位置：studentList.saveEdit 出错详情: " + res4.data.msg);
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
