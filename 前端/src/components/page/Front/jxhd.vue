<template>
  <div align="center" style="height: auto;overflow: auto">
    <div class="mcontianer" >
      <el-card class="mcard" v-for="(item,i) in msgs">
        <h2 align="left" style="color: #34495E">{{ item.title }}</h2>
        <p style="color: #909090" align="left" class="mfont">{{ item.text }}</p>
        <p>&nbsp</p>
        <p style="font-size: 15px;color: #909090" align="left" class="mfont">留言者: {{ item.sender }}&nbsp&nbsp&nbsp时间: {{item.time}}</p>
      </el-card>

      <div class="pagination">
        <el-pagination
            background
            layout="total, prev, pager, next"
            :current-page="pageindex"
            :page-size="pagesize"
            :total="pagetotal"
            @current-change="handlePageChange"
        ></el-pagination>

        <el-card style="margin-top: 20px;width: 100%;">
          <el-form :model="form">
            <el-form-item ><el-input placeholder="标题" v-model="form.title"></el-input></el-form-item>
            <el-form-item ><el-input type="textarea" :rows="3" placeholder="正文" v-model="form.text"></el-input></el-form-item>
            <el-button @click="sendData" type="primary" >发送留言</el-button>
          </el-form>
        </el-card>
      </div>
    </div >

    <el-card style="position: absolute;top: 40%;left: 20px;">
      <el-avatar shape="square" :size="150" :src="imgsrc1"></el-avatar>
      <p align="center">QQ群</p>
    </el-card>
    <el-card style="position: absolute;top: 70%;left: 20px;">
      <el-avatar shape="square" :size="150" :src="imgsrc2"></el-avatar>
      <p align="center">微信群</p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "jxhd",
  data: function() {
    return {
      msgs: [],
      loading: true,
      pageindex: 1,
      pagesize: 20,
      pagetotal: 0,
      imgsrc1: '/img/QQerweima.jpg',
      imgsrc2: '/img/WeiXinerweima.jpg',
      form: {
        title: '',
        text: '',
      }
    };
  },

  watch: {
    "$route" : {
      handler(to,from){
        const that = this;
        if (to.path==="/jxhd") {
          that.getData();
        }
      },
      deep: true
    },

    "msgs" : {

    }
  },

  created(){
    this.getData();
  },

  methods: {
    getData() {
      //this.imgsrc= "/img/WeiXinerweima.jpg";
      this.loading = true;
      this.$axios.post('/MessageListQuery',{
        pageindex: this.pageindex,
        pagesize: this.pagesize,
      }).then(res1=>{
        if (res1.data.code===200) {
          this.msgs=res1.data.data;
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

    handlePageChange(val) {
      this.$set(this.query, 'pageindex', val);
      this.getData();
    },

    sendData() {
      this.loading = true;
      this.$axios.post('/MessageListSend',{
        title: this.form.title,
        text: this.form.text
      }).then(res1=>{
        if (res1.data.code===200) {
          this.getData();
          this.$message.success('发送成功');
          this.loading = false;
        } else if (res1.data.code===400) {
          this.$message.error('查询失败:' + res1.data.message);
        } else if (res1.data.code===403) {
          this.$message.error('查询失败:' + res1.data.message);
          this.loading=false;
          this.$router.push({path: '/login'});
        } else if (res1.data.code===500) {
          alert("请截图以下信息报给维护员: 出错位置：msgList.snedData 出错详情: " + res1.data.message);
        }
        this.loading=false;
      }).catch(res2=>{
        this.$message.error(res2.message);
      });
    }
  },
}
</script>

<style scoped>
.nav-wrapper {
  width: 100%;
  background-color: #fff;
  height: 78px;
  border-bottom: 0 ;
}

.mcard {
  margin-top: 20px;
  width: 100%;
  height: auto;
}

.mcontianer {
  margin-top: 20px;
  width: 50%;
  height: auto;
}

.navbar-container {
  width: 100%;
  height: 55px;
  background-color: #2c323b;
}

.mfont {
  font-size: 15px;
}

</style>