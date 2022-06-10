<template>
    <div class="login-wrap">
        <el-card class="ms-login">
            <div class="ms-title">新东莞培训机构教学管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="账号">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="密码"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
              <el-link type="primary" @click="tiaozhuan()">忘记密码</el-link>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>

            </el-form>
        </el-card>
    </div>
</template>

<script>
    import bus from '../common/bus';
    import md5 from 'js-md5';
export default {
    data: function() {
        return {
            param: {
                username: "",
                password: ""
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        };
    },
    methods: {
        tiaozhuan() {
            this.$router.push("/findpassword");
        },

        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    this.$axios.post('/login',{
                        username: this.param.username,
                        password: md5(this.param.password)
                    }).then(res1=>{
                        if (res1.data.code===200) {
                            this.$message.success('登录成功');
                            localStorage.setItem("user",res1.data.data.username);
                            localStorage.setItem("name",res1.data.data.name);
                            localStorage.setItem('type', res1.data.data.usertype);
                            this.$router.push("/dashboard");
                            bus.$emit('type2', res1.data.data.type);
                        }else {
                            this.$message.error('登录失败，账号或密码错误');
                        }
                    }).catch(res2=>{
                        this.$message.error(res2.message);
                    });

                } else {
                    this.$message.error('请输入账号和密码');
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/bg.jpg);
    background-repeat: no-repeat; /*设置图片不重复*/
    background-size: cover
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #000000;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.8);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}

@media screen and (max-width: 500px) {
    .el-message {
        min-width: 300px !important;
    }
}
</style>