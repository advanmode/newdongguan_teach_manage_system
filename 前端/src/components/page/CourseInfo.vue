<template>
  <div >
    <el-card >
      <el-form v-model="contenta">
        <el-form-item label="课程简介">
          <quill-editor ref="myTextEditor" v-model="contenta.a" :options="editorOption"></quill-editor>
        </el-form-item>
        <el-form-item label="课程特色">
          <quill-editor ref="myTextEditor" v-model="contenta.b" :options="editorOption"></quill-editor>
        </el-form-item>
        <el-form-item label="教材参考资料">
          <quill-editor ref="myTextEditor" v-model="contenta.c" :options="editorOption"></quill-editor>
        </el-form-item>
        <el-form-item label="历史沿革">
          <quill-editor ref="myTextEditor" v-model="contenta.d" :options="editorOption"></quill-editor>
        </el-form-item>
        <el-button @click="sendData" type="primary" >提交</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import md5 from "js-md5";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';

export default {
  name: 'courseinfo',
  data() {
    return {
      contenta: {
        a: '',
        b: '',
        c: '',
        d: '',
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
        if (to.path==="/courseinfo") {
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

    // 获取 easy-mock 的模拟数据
    getData() {
      this.loading=true;
      this.$axios.get('/JxgkQuery').then(res3=>{
        if (res3.data.code===200){
          this.contenta = res3.data.data;
        } else if (res3.data.code===400) {
          this.$message.error('查询失败:' + res3.data.msg);
        } else if (res3.data.code===403) {
          this.$message.error('查询失败:' + res3.data.msg);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res3.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：teacherpersoninfo.sendData 出错详情: " + res3.data.msg);
        }
        this.loading=false;
      }).catch(res4=>{
        this.$message.error(res4.message);
      })
    },

    sendData(){
      this.loading=true;
      console.log(this.contenta);
      console.log(this.contenta.a);
      this.$axios.post('/JxgkUpdate',{
        a: this.contenta.a,
        b: this.contenta.b,
        c: this.contenta.c,
        d: this.contenta.d,
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
          alert("请截图以下信息报给维护员: 出错位置：courseinfo.sendData 出错详情: " + res3.data.msg);
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