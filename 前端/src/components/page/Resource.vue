<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 教学资源
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
        >新增资源
        </el-button>
        <el-select v-model="form.type" placeholder="请选择" class="handle-select mr10">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              class="handle-select mr10"
              :value="item.value">
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
        <el-table-column prop="title" label="标题" align="center"></el-table-column>
        <el-table-column prop="type" label="分类" align="center"></el-table-column>
        <el-table-column prop="date" label="日期" align="center"></el-table-column>

        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
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

      <el-dialog
          title="新增资源"
          :visible.sync="editVisible"
          width="30%"
          close-on-click-modal="false"
          close-on-press-escape="false"
          show-close="false"
      >
        <el-form ref="form" :model="form" label-width="70px">
          <el-divider></el-divider>
          <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="form.type" placeholder="请选择">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="正文">
            <el-upload
                class="upload-demo"
                drag
                width="100%"
                :file-list="files"
                :auto-upload="true"
                :on-success="onChangeQuill"
                :on-error="onError"
                :limit=1
                action="/FileUpload"
                multiple
                align="center"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传大小为150M以内的文件</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
      </el-dialog>


    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import {quillEditor} from 'vue-quill-editor';

export default {
  name: 'teacherlist',
  data() {
    return {
      otableData: [],
      files: [],
      editVisible: false,
      pageindex: 1,
      pagesize: 20,
      pagetotal: 0,
      form: {
        title: '',
        date: '',
        text: '',
        type: '课程课件',
      },
      options: [{
        value: '课程课件',
        label: '课程课件'
      }, {
        value: '教学录像',
        label: '教学录像'
      }, {
        value: '习题库',
        label: '习题库'
      }, {
        value: '案例库',
        label: '案例库'
      }, {
        value: '实验任务',
        label: '实验任务'
      }, {
        value: '技术文档范本',
        label: '技术文档范本'
      }],
      loading: true
    };
  },

  computed:{

    tableData:function(){
      var search=this.form.type.toString().toLowerCase();

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

  components: {
    quillEditor
  },

  watch: {
    "$route": {
      handler(to, from) {
        const that = this;
        if (to.path === "/classlist") {
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
    onError(err, file, fileList){
      alert("上传错误" + err);
    },

    onChangeQuill(response, file, fileList) {
      this.$message.success('上传成功');
      this.form.text = 'http://121.37.239.127:25555/img/' + response.data;
    },

    open1() {
      this.files = [];
      this.$set(this.form, "title", "");
      this.$set(this.form, "date", "");
      this.$set(this.form, "cotent", "");
      this.editVisible = true;
    },

    // 获取 easy-mock 的模拟数据
    getData() {
      this.loading = true;
      this.$axios.get('/TextQuery').then(res1 => {
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
          alert("请截图以下信息报给维护员: 出错位置：textList.getdata 出错详情: " + res1.data.msg);
        }
        this.loading = false;
      }).catch(res2 => {
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
        this.$axios.post('/TextDelete', {
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
            alert("请截图以下信息报给维护员: 出错位置：textList.handledelete 出错详情: " + res6.data.msg);
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
      this.$axios.post('/TextAdd', {
        title: this.form.title,
        date: this.form.date,
        text: this.form.text,
        type: this.form.type,
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
          alert("请截图以下信息报给维护员: 出错位置：textList.saveEdit 出错详情: " + res4.data.msg);
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
  width: 150px;
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
