<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 教学互动
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
            >上传QQ群二维码
            </el-button>
            <el-button
                type="primary"
                icon="el-icon-lx-tag"
                class="handle-add mr10"
                @click="open2"
            >上传微信群二维码
            </el-button>
          </div>
            <el-table
                    :data="tableData"
                    class="table"
                    header-cell-class-name="table-header"
                    style="width: 100%"
                    v-loading="loading"
            >
                <el-table-column  width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="编号"  align="center"></el-table-column>
                <el-table-column prop="title" label="标题"  align="center"></el-table-column>
                <el-table-column prop="text" label="内容"  align="center"></el-table-column>
                <el-table-column prop="sender" label="发送者"  align="center"></el-table-column>
                <el-table-column prop="time" label="时间"  align="center" v-if="showTeacher"></el-table-column>

                <el-table-column label="操作" width="180" align="center" v-if="!showTeacher">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                icon="el-icon-delete"
                                class="red"
                                @click="handleDelete(scope.row)"
                        >删除</el-button>
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
          :file-list="files"
          :auto-upload="true"
          :on-success="onChangeQuill"
          :on-error="onError"
          :limit="1"
          :multiple="false"
          v-show="false">
      </el-upload>

    </div>
</template>

<script>
    export default {
        name: 'interact',
        data() {
            return {
                tableData: [],
                editVisible: false,
                pageindex: 1,
                pagesize: 20,
                pagetotal: 0,
                loading: true,
                files: [],
              photoUrl: ''
            };
        },

        watch: {
            "$route" : {
                handler(to,from){
                    const that = this;
                    if (to.path==="/interact") {
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

          open1() {
            this.photoUrl='/ImageUpload1'
            this.files = [];
            document.querySelector(".avatar-uploader input").click();
          },

          open2() {
            this.photoUrl='/ImageUpload2'
            this.files = [];
            document.querySelector(".avatar-uploader input").click();
          },

          onError(err, file, fileList){
            alert("上传错误" + err);
          },

          onChangeQuill(response, file, fileList) {
            this.$message.success('上传成功');
          },

            // 获取 easy-mock 的模拟数据
            getData() {
              this.loading = true;
              this.$axios.post('/MessageListQuery',{
                pageindex: this.pageindex,
                pagesize: this.pagesize,
              }).then(res1=>{
                if (res1.data.code===200) {
                  this.tableData=res1.data.data;
                  var j = parseInt(res1.data.msg);
                  this.pagetotal=j;
                  //this.$message.success('查询成功');
                  this.loading = false;
                } else if (res1.data.code===400) {
                  this.$message.error('查询失败:' + res1.data.message);
                } else if (res1.data.code===403) {
                  this.$message.error('查询失败:' + res1.data.message);
                  this.loading=false;
                  this.$router.push({path: '/login'});
                } else if (res1.data.code===500) {
                  alert("请截图以下信息报给维护员: 出错位置：msgList.getData 出错详情: " + res1.data.message);
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
                        this.$axios.post('/MessageListDelete',{
                            id: row.id
                        }).then(res6=>{
                            if (res6.data.code===200) {
                                this.getData();
                                this.$message.success('删除成功');
                                this.loading = false;
                            } else if (res6.data.code===400) {
                                this.$message.error('失败:' + res6.data.msg);
                            } else if (res6.data.code===403) {
                                this.$message.error('失败:' + res6.data.msg);
                                this.loading=false;
                                this.$router.push({path: '/login'});
                            } else if (res6.data.code===500) {
                                alert("请截图以下信息报给维护员: 出错位置：interact.handledelete 出错详情: " + res6.data.msg);
                            }
                            this.loading=false;
                        }).catch(res7=>{
                            this.$message.error(res7.message);
                        });
                    })
                    .catch(() => {});
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
        width: 150px;
    }

    .handle-input {
        width: 120px;
        display: inline-block;
    }
    .table {
        width: 100%;
        font-size: 14px;
    }

    @media screen and (max-width: 500px){

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
