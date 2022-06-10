<template>
    <div >
      <el-card class="">

        <el-row :gutter="20" style="margin-top:10px;" v-loading="loading">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <H1>&nbsp&nbsp</H1>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-avatar :size="size" ></el-avatar>
              <el-divider style="color: #8c939d"></el-divider>
              <el-form label-width="80px" v-model="dataForm" size="small" label-position="right" >
                <p style="padding-top: 10px">姓名</p>
                <el-input style="width: 300px"  v-model="dataForm.name"></el-input>
                <p style="padding-top: 10px">性别</p>
                <el-input style="width: 300px"  v-model="dataForm.sex"></el-input>
                <p style="padding-top: 10px">出生日期</p>
                <el-date-picker
                    v-model="dataForm.birthday"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
                <p style="padding-top: 10px">籍贯</p>
                <el-input style="width: 300px"  v-model="dataForm.from"></el-input>
                <p style="padding-top: 10px">邮箱</p>
                <el-input style="width: 300px"  v-model="dataForm.email"></el-input>
                <p style="padding-top: 10px">手机号码</p>
                <el-input style="width: 300px"  v-model="dataForm.phone"></el-input>
                <p style="padding-top: 10px">新的密码</p>
                <el-input style="width: 300px" maxlength="16" v-model="dataForm.password"></el-input>
              </el-form>
              <div slot="footer" class="dialog-footer" style="padding-top: 20px" >
                <el-button size="mini" @click="sendData" type="primary" >提交</el-button>
                <el-button size="mini" @click="back" type="warning" >关闭</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <p> </p>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
</template>
<script>
    import md5 from 'js-md5';
    export default {
        name: "PersonInfo",
        data(){
            return{
              dataForm:{
                name:'',
                sex: '',
                birthday: '',
                from: '',
                email: '',
                phone: '',
                password: '',
              },
                loading: false,
            }
        },

        watch: {
            "$route" : {
                handler(to,from){
                    const that = this;
                    if (to.path==="/studentpersoninfo") {
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
            getData(){
                this.loading=true;
                this.dataForm.username=localStorage.getItem("user");
                this.$axios.get("/studentPersonQuery").then(res1=>{
                    if (res1.data.code===200){
                      this.dataForm.name=res1.data.data.name;
                      this.dataForm.sex=res1.data.data.sex;
                      this.dataForm.birthday=res1.data.data.birthday;
                      this.dataForm.from=res1.data.data.from;
                      this.dataForm.email=res1.data.data.email;
                      this.dataForm.phone=res1.data.data.phone;
                    } else if (res1.data.code===400) {
                        this.$message.error('查询失败:' + res1.data.msg);
                    } else if (res1.data.code===403) {
                        this.$message.error('查询失败:' + res1.data.msg);
                        this.loading=false;
                        this.$router.push({path: '/login'});
                    } else if (res1.data.code===500) {
                        alert("请截图以下信息报给维护员: 出错位置：studentPersonInfo.getdata 出错详情: " + res1.data.msg);
                    }
                    this.loading=false;
                }).catch(res2=>{
                    this.$message.error(res2.message);
                })
            },
            sendData(){
                this.loading=true;
                this.$axios.post('/studentPersonUpdate',{
                  name: this.dataForm.name,
                  sex: this.dataForm.sex,
                  birthday: this.dataForm.birthday,
                  from: this.dataForm.from,
                  email: this.dataForm.email,
                  phone: this.dataForm.phone,
                  password: md5(this.dataForm.password),
                }).then(res3=>{
                    if (res3.data.code===200){
                        this.getData();
                        this.$message.success('修改成功');
                    } else if (res3.data.code===400) {
                        this.$message.error('查询失败:' + res3.data.msg);
                    } else if (res3.data.code===403) {
                        this.$message.error('查询失败:' + res3.data.msg);
                        this.loading=false;
                        this.$router.push({path: '/login'});
                    } else if (res3.data.code===500) {
                        alert("请截图以下信息报给维护员: 出错位置：studentPersonInfo.sendData 出错详情: " + res3.data.msg);
                    }
                    this.loading=false;
                }).catch(res4=>{
                    this.$message.error(res4.message);
                })
            },

            back(){
                this.$router.go(-1);
            }
        },
    }
</script>

<style  scoped>

    .dialog-footer{
        padding-top:10px ;
        padding-left: 10%;
    }


    .user-avator img {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

</style>