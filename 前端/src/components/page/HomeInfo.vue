<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 主页维护
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
        >上传负责人图片
        </el-button>
        <el-button
            type="primary"
            icon="el-icon-lx-tag"
            class="handle-add mr10"
            @click="open2"
        >上传课程简介图片
        </el-button>
        <el-button
            type="primary"
            icon="el-icon-lx-tag"
            class="handle-add mr10"
            @click="open3"
        >上传课程特色图片
        </el-button>
        <el-button
            type="primary"
            icon="el-icon-lx-tag"
            class="handle-add mr10"
            @click="open4"
        >上传课程动态图片
        </el-button>
        <el-button
            type="primary"
            icon="el-icon-lx-tag"
            class="handle-add mr10"
            @click="open5"
        >上传课程团队图片
        </el-button>

        <el-button
            type="primary"
            icon="el-icon-lx-tag"
            class="handle-add mr10"
            @click="open6"
        >上传轮播图1
        </el-button>

        <el-button
            type="primary"
            icon="el-icon-lx-tag"
            class="handle-add mr10"
            @click="open7"
        >上传轮播图2
        </el-button>

        <el-button
            type="primary"
            icon="el-icon-lx-tag"
            class="handle-add mr10"
            @click="open8"
        >上传轮播图3
        </el-button>
      </div>
    </div>

    <el-card >
      <el-form v-model="form">
        <el-form-item label="负责人">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.fzr"></el-input>
        </el-form-item>
        <el-form-item label="课程简介">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.kcjj"></el-input>
        </el-form-item>
        <el-form-item label="课程特色">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.kcts"></el-input>
        </el-form-item>
        <el-form-item label="课程动态">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.kcdt"></el-input>
        </el-form-item>
        <el-form-item label="课程团队">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.kctd"></el-input>
        </el-form-item>
        <el-button @click="sendData" type="primary" >提交</el-button>
      </el-form>
    </el-card>

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
  name: 'homeinfo',
  data() {
    return {
      photoUrl: '',
      files: [],
      tableData: [],
      form: {
        fzr: '',
        kcjj: '',
        kcts: '',
        kcdt: '',
        jxtd: '',
      },
      loading: true
    };
  },

  watch: {
    "$route" : {
      handler(to,from){
        const that = this;
        if (to.path==="/homeinfo") {
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
    onError(err, file, fileList){
      alert("上传错误" + err);
    },

    onChangeQuill(response, file, fileList) {
      this.$message.success('上传成功');
    },

    open1() {
      this.photoUrl='/fzrUpload'
      this.files = [];
      document.querySelector(".avatar-uploader input").click();
    },

    open2() {
      this.photoUrl='/kcjjUpload'
      this.files = [];
      document.querySelector(".avatar-uploader input").click();
    },

    open3() {
      this.photoUrl='/kctsUpload'
      this.files = [];
      document.querySelector(".avatar-uploader input").click();
    },

    open4() {
      this.photoUrl='/kcdtUpload'
      this.files = [];
      document.querySelector(".avatar-uploader input").click();
    },

    open5() {
      this.photoUrl='/jxtdUpload'
      this.files = [];
      document.querySelector(".avatar-uploader input").click();
    },

    open6() {
      this.photoUrl='/lun1Upload'
      this.files = [];
      document.querySelector(".avatar-uploader input").click();
    },

    open7() {
      this.photoUrl='/lun2Upload'
      this.files = [];
      document.querySelector(".avatar-uploader input").click();
    },

    open8() {
      this.photoUrl='/lun3Upload'
      this.files = [];
      document.querySelector(".avatar-uploader input").click();
    },

    // 获取 easy-mock 的模拟数据
    getData() {
      this.loading=true;
      this.$axios.get('/HomeQuery').then(res3=>{
        if (res3.data.code===200){
          this.form.fzr = res3.data.data.fzr;
          this.form.kcjj = res3.data.data.kcjj;
          this.form.kcdt = res3.data.data.kcdt;
          this.form.kcts = res3.data.data.kcts;
          this.form.jxtd = res3.data.data.jxtd;
        } else if (res3.data.code===400) {
          this.$message.error('查询失败:' + res3.data.msg);
        } else if (res3.data.code===403) {
          this.$message.error('查询失败:' + res3.data.msg);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res3.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：HomeInfo.sendData 出错详情: " + res3.data.msg);
        }
        this.loading=false;
      }).catch(res4=>{
        this.$message.error(res4.message);
      })
    },

    sendData(){
      this.loading=true;
      this.$axios.post('/HomeEdit',{
        fzr: this.form.fzr,
        kcjj: this.form.kcjj,
        kcts: this.form.kcts,
        kcdt: this.form.kcdt,
        jxtd: this.form.jxtd
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
          alert("请截图以下信息报给维护员: 出错位置：HomeEdit.sendData 出错详情: " + res3.data.msg);
        }
        this.loading=false;
      }).catch(res4=>{
        this.$message.error(res4.message);
      })
    },

  }
};
</script>

<style scoped>
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