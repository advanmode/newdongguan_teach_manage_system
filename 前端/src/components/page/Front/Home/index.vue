<template>
  <div>
    <Carousel></Carousel>
    <div class="carousel-bar-wrapper">
      <div class="mx-auto pos">
        <div class="carousel-bar-container">
    <span v-for="item in carouselItems" :key="item.title">
      <a @click="open1(item)">{{ item.title }}</a>
    </span>
        </div>
      </div>
    </div>

    <div style="width: 60% !important;margin-left: 20%;margin-right: 20%;height: 600px !important;">
      <div class="introduction-img-container">
        <el-row>
          <el-col :span="8"><img class="shadow" :src="imgpath"/></el-col>
          <el-col :span="16">
            <h1>{{title}}</h1>
            <p>{{text}}</p>
          </el-col>
        </el-row>
      </div>
    </div>


  </div>
</template>

<script>
import Carousel from "./Carousel";
import CarouselBar from "./CarouselBar";
export default {
  components: {
    Carousel,
    CarouselBar,
  },
  data() {
    return {
      texts: {
        fzr: '1',
        kcjj: '2',
        kcts: '3',
        kcdt: '4',
        jxtd: '5'
      },
      text: '',
      title: '课程负责人',
      imgpath: '/img/fzr.jpg',
      imgs: [
        '/img/fzr.jpg',
        '/img/kcjj.jpg',
        '/img/kcts.jpg',
        '/img/kcdt.jpg',
        '/img/jxtd.jpg',
      ],
      carouselItems: [
        {
          title: "课程负责人",
          id: 0,
        },
        {
          title: "课程简介",
          id: 1,
        },
        {
          title: "课程特色",
          id: 2,
        },
        {
          title: "课程动态",
          id: 3,
        },
        {
          title: "教学团队",
          id: 4,
        },
      ],
    };
  },

  methods: {
    open1(item) {
      this.title=item.title;
      if (item.id===0) {
        this.text=this.texts.fzr;
      } else if (item.id===0) {
        this.text=this.texts.kcjj;
      } else if (item.id===1) {
        this.text=this.texts.kcjj;
      } else if (item.id===2) {
        this.text=this.texts.kcts;
      } else if (item.id===3) {
        this.text=this.texts.kcdt;
      } else if (item.id===4) {
        this.text=this.texts.jxtd;
      }
      this.imgpath=this.imgs[item.id];
    }
  },

  async created() {
    this.$axios.get('/HomeQuery').then(res1=>{
      if (res1.data.code===200) {
        this.texts.fzr = res1.data.data.fzr;
        this.texts.kcjj = res1.data.data.kcjj;
        this.texts.kcts = res1.data.data.kcts;
        this.texts.kcdt = res1.data.data.kcdt;
        this.texts.jxtd = res1.data.data.jxtd;

        this.text=this.texts.fzr;
        this.loading = false;
      } else if (res1.data.code===400) {
        this.$message.error('查询失败:' + res1.data.msg);
      } else if (res1.data.code===403) {
        this.$message.error('查询失败:' + res1.data.msg);
        this.loading=false;
        this.$router.push({path: '/login'});
      } else if (res1.data.code===500) {
        alert("请截图以下信息报给维护员: 出错位置：Home.getdata 出错详情: " + res1.data.msg);
      }
      this.loading=false;
    }).catch(res2=>{
      this.$message.error(res2.message);
    });
  },
};
</script>

<style lang="less" scoped>
.carousel-bar-wrapper {
  position: relative !important;
  z-index: 100 !important;
  .pos {
    transform: translateY(-27%) !important;
  }
}
.introduction-img-container {
  width: 100%;
  height: 100%;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  position: relative !important;
  background-image: url(../../../../assets/xs/yx.png);
  img {
    margin-top: 30px;
    margin-left: 10px;
    &.shadow {
      box-shadow: 0 0 27px rgba(1, 2, 3, 0.5) !important;
    }
  }
}
.introduction-bg-container {
  width: 100% !important;
  height: 550px !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.teacher-wrapper {
  margin: 50px 0 !important;
}

.carousel-bar-container {
  width: 900px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 16px 0;
  height: 60px;
  border: 1px solid #efeff7;
  box-sizing: content-box;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 6px 0 rgba(76,111,186,10%);
  span {
    width: 20%;
    height: 100%;
    border-right:1px solid #e3e3e9;
    line-height: 60px;
    &:last-child {
      border-right:none;
    }
    a {

      font-size: 1.3rem;
      text-decoration: none;
    }
  }

}

</style>