<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 教师队伍
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="container">

          <el-form v-model="form">
            <el-form-item label="课程负责人">
              <quill-editor ref="myTextEditor" v-model="content.a" :options="editorOption"></quill-editor>
            </el-form-item>
            <el-form-item label="课程教学团队">
              <quill-editor ref="myTextEditor" v-model="content.b" :options="editorOption"></quill-editor>
            </el-form-item>
            <el-form-item label="青年教师培养">
              <quill-editor ref="myTextEditor" v-model="content.c" :options="editorOption"></quill-editor>
            </el-form-item>
          </el-form>

            <div class="handle-box">
              <el-button
                  type="primary"
                  icon="el-icon-lx-tag"
                  class="handle-add mr10"
                  @click="open2"
              >保存</el-button>
                <el-button
                        type="primary"
                        icon="el-icon-lx-tag"
                        class="handle-add mr10"
                        @click="open1"
                >新增教师</el-button>
            </div>
            <el-table
                    :data="tableData"
                    class="table"
                    header-cell-class-name="table-header"
                    style="width: 100%"
                    v-loading="loading"
            >
                <el-table-column  width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名"  align="center"></el-table-column>
                <el-table-column prop="group" label="所在团队"  align="center"></el-table-column>
                <el-table-column prop="work" align="center" label="承担的工作"></el-table-column>
                <el-table-column prop="photo" align="center" label="图片">
                  <template slot-scope="scope">
                    <el-avatar shape="square" :size="50" :src="scope.row.photo"></el-avatar>
                  </template>
                </el-table-column>

                <el-table-column label="操作" width="180" align="center">
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

        <!-- 编辑弹出框 -->
        <el-dialog
                title="新增教师"
                :visible.sync="editVisible"
                width="30%"
                close-on-click-modal="false"
                close-on-press-escape="false"
                show-close="false"
        >
            <el-form ref="form" :model="form" label-width="70px">
                <el-divider></el-divider>
                <el-form-item label="姓名"><el-input v-model="form.name"></el-input></el-form-item>
                <el-form-item label="所在团队"><el-input v-model="form.group"></el-input></el-form-item>
                <el-form-item label="承担工作"><el-input v-model="form.work"></el-input></el-form-item>
                <el-form-item label="图片地址"><el-input v-model="form.photo"></el-input></el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
    export default {
        name: 'teachers',
        data() {
            return {
                tableData: [],
                editVisible: false,
                pageindex: 1,
                pagesize: 20,
                pagetotal: 0,
              content: {
                a: '',
                b: '',
                c: '',
                d: '',
              },
                form: {
                    name: '',
                    group: '',
                    work: '',
                    photo: ''
                },
                loading: true
            };
        },

      components: {
        quillEditor
      },

        watch: {
            "$route" : {
                handler(to,from){
                    const that = this;
                    if (to.path==="/teachers") {
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
                this.$set(this.form, "name", "");
                this.$set(this.form, "group", "");
                this.$set(this.form, "work", "");
                this.$set(this.form, "photo", "");
                this.editVisible=true;
            },

          open2() {
            this.$axios.post('/JxtdEdit',{
              fuzeren: this.content.a,
              jxtd: this.content.b,
              jspy: this.content.c
            }).then(res6=>{
              if (res6.data.code===200) {
                this.getData();
                this.$message.success('保存成功');
                this.loading = false;
              } else if (res6.data.code===400) {
                this.$message.error('失败:' + res6.data.msg);
              } else if (res6.data.code===403) {
                this.$message.error('失败:' + res6.data.msg);
                this.loading=false;
                this.$router.push({path: '/login'});
              } else if (res6.data.code===500) {
                alert("请截图以下信息报给维护员: 出错位置：teachers.handledelete 出错详情: " + res6.data.msg);
              }
              this.loading=false;
            }).catch(res7=>{
              this.$message.error(res7.message);
            });
          },

            // 获取 easy-mock 的模拟数据
            getData() {
                this.loading = true;
                this.$axios.get('/TeachersQuery').then(res1=>{
                    if (res1.data.code===200) {
                        this.tableData=res1.data.data;
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
                        alert("请截图以下信息报给维护员: 出错位置：teachers.getdata 出错详情: " + res1.data.msg);
                    }
                    this.loading=false;
                }).catch(res2=>{
                    this.$message.error(res2.message);
                });

              this.loading = true;
              this.$axios.get('/JxtdQuery').then(res1 => {
                if (res1.data.code === 200) {
                  this.content.a = res1.data.data.fuzeren;
                  this.content.b = res1.data.data.jxtd;
                  this.content.c = res1.data.data.jspy;
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

            // 删除操作
            handleDelete(row) {
                // 二次确认删除
                this.$confirm('确定要删除吗？', '提示', {
                    type: 'warning'
                })
                    .then(() => {
                        this.loading = true;
                        this.$axios.post('/TeachersDelete',{
                            name: row.name
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
                                alert("请截图以下信息报给维护员: 出错位置：teachers.handledelete 出错详情: " + res6.data.msg);
                            }
                            this.loading=false;
                        }).catch(res7=>{
                            this.$message.error(res7.message);
                        });
                    })
                    .catch(() => {});
            },
            // 保存编辑
            saveEdit() {
                this.editVisible = false;
                this.loading=true;
                this.$axios.post('/TeachersAdd',{
                    name: this.form.name,
                    group: this.form.group,
                    work: this.form.work,
                    photo: this.form.photo
                }).then(res4=>{
                    if (res4.data.code===200) {
                        this.getData();
                        this.$message.success('成功');
                    } else if (res4.data.code===400) {
                        this.$message.error('失败:' + res4.data.msg);
                    } else if (res4.data.code===403) {
                        this.$message.error('失败:' + res4.data.msg);
                        this.loading=false;
                        this.$router.push({path: '/login'});
                    } else if (res4.data.code===500) {
                        alert("请截图以下信息报给维护员: 出错位置：teachers.saveEdit 出错详情: " + res4.data.msg);
                    }
                    this.loading=false;
                }).catch(res5=>{
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
