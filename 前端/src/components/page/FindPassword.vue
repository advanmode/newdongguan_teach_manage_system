<template>
  <div class="login-wrap">
    <el-card class="ms-login">
      <div class="ms-title">找回密码</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="80px" class="ms-content">
        <el-form-item prop="username" label="账号">
          <el-input v-model="param.username" placeholder="输入要找回的账号"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="验证码">
          <el-input
              placeholder="输入邮箱收到的验证码"
              v-model="param.yanzheng"
              @keyup.enter.native="submitForm()"
          >
            <el-button slot="prepend" type="primary" @click="send()">发送验证码</el-button>
          </el-input>

        </el-form-item>
        <el-form-item prop="password" label="新的密码">
          <el-input v-model="param.password" placeholder="输入新的密码"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">确认修改密码</el-button>
        </div>

      </el-form>
    </el-card>
  </div>
</template>

<script>
import bus from '../common/bus';
import md5 from 'js-md5';

export default {
  data: function () {
    return {
      param: {
        username: "",
        password: "",
        yanzheng: ""
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        yanzheng: [{required: true, message: '请输入验证码', trigger: 'blur'}],
        password: [{required: true, message: '请输入新的密码', trigger: 'blur'}],
      },
    };
  },
  methods: {
    send() {
      if (this.param.username==="") {
        this.$message.error('请输入用户名');
        return;
      }
      this.$axios.post('/FindPasswordSendEmail', {
        username: this.param.username,
      }).then(res1 => {
        if (res1.data.code === 200) {
          this.$message.success('发送验证码成功');
        } else {
          this.$message.error('发送验证码失败' + res1.data.message);
        }
      }).catch(res2 => {
        this.$message.error(res2.message);
      });

    },

    submitForm() {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$axios.post('/FindPassword', {
            username: this.param.username,
            password: md5(this.param.password),
            yanzheng: this.param.yanzheng
          }).then(res1 => {
            if (res1.data.code === 200) {
              this.$message.success('修改密码成功');
              this.$router.push("/login");
            } else {
              this.$message.error('修改密码失败' + res1.data.message);
            }
          }).catch(res2 => {
            this.$message.error(res2.message);
          });

        } else {
          this.$message.error('请输入账号和验证码和新的密码');
          return false;
        }
      });
    },
  }
  ,
}
;
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
  width: 450px;
  margin: -190px 0 0 -235px;
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