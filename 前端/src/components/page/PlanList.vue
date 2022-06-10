<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 开课计划
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
                >新增计划</el-button>
            </div>
            <el-table
                    :data="tableData"
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
                title="新增计划"
                :visible.sync="editVisible"
                width="30%"
                close-on-click-modal="false"
                close-on-press-escape="false"
                show-close="false"
        >
            <el-form ref="form" :model="form" label-width="70px">
                <el-divider></el-divider>
                <el-form-item label="课程">
                  <el-select v-model="form.course" placeholder="请选择">
                    <el-option
                        v-for="item in courses"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                  </el-select>
                </el-form-item>
              <el-form-item label="班级编号"><el-input v-model="form.classNo"></el-input></el-form-item>
              <el-form-item label="班级名称"><el-input v-model="form.class"></el-input></el-form-item>
              <el-form-item label="教师账号"><el-input v-model="form.teacherNo"></el-input></el-form-item>
              <el-form-item label="教师姓名"><el-input v-model="form.teacher"></el-input></el-form-item>
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
        name: 'planlist',
        data() {
            return {
                tableData: [],
                courses: [],
                teachers: [],
                classes: [],
                editVisible: false,
                pageindex: 1,
                pagesize: 20,
                pagetotal: 0,
                form: {
                    course: '',
                    class: '',
                    classNo: '',
                    teacher: '',
                    teacherNo: ''
                },
                loading: true
            };
        },

        watch: {
            "$route" : {
                handler(to,from){
                    const that = this;
                    if (to.path==="/planlist") {
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
                this.$set(this.form, "username", "");
                this.$set(this.form, "name", "");
                this.editVisible=true;
            },

            // 获取 easy-mock 的模拟数据
            getData() {
                this.loading = true;
                this.$axios.get('/PlanListQuery').then(res1=>{
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
                        alert("请截图以下信息报给维护员: 出错位置：planList.getdata 出错详情: " + res1.data.msg);
                    }
                    this.loading=false;
                }).catch(res2=>{
                    this.$message.error(res2.message);
                });

              this.loading = true;
              this.$axios.get('/TeacherListQuery').then(res1=>{
                if (res1.data.code===200) {
                  this.teachers=res1.data.data;
                  this.loading = false;
                } else if (res1.data.code===400) {
                  this.$message.error('查询失败:' + res1.data.msg);
                } else if (res1.data.code===403) {
                  this.$message.error('查询失败:' + res1.data.msg);
                  this.loading=false;
                  this.$router.push({path: '/login'});
                } else if (res1.data.code===500) {
                  alert("请截图以下信息报给维护员: 出错位置：planList.getdata 出错详情: " + res1.data.msg);
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
                  alert("请截图以下信息报给维护员: 出错位置：planList.getdata 出错详情: " + res1.data.msg);
                }
                this.loading=false;
              }).catch(res2=>{
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
                  alert("请截图以下信息报给维护员: 出错位置：planList.getdata 出错详情: " + res1.data.msg);
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
                        this.$axios.post('/PlanDelete',{
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
                                alert("请截图以下信息报给维护员: 出错位置：planList.handledelete 出错详情: " + res6.data.msg);
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
                this.$axios.post('/PlanAdd',{
                  course: this.form.course,
                  className: this.form.class,
                  classNo: this.form.classNo,
                  teacher: this.form.teacher,
                  teacherNo: this.form.teacherNo
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
                        alert("请截图以下信息报给维护员: 出错位置：planList.saveEdit 出错详情: " + res4.data.msg);
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
