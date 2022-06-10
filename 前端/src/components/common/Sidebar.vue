<template>
  <div class="sidebar">
    <el-menu
        class="sidebar-el-menu"
        :default-active="onRoutes"
        :collapse="collapse"
        background-color="#454545"
        text-color="#bfcbd9"
        active-text-color="#ffcc33"
        unique-opened
        router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index" class="img">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
                  class="img"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                    v-for="(threeItem,i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                    class="img"
                >{{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
                  class="img"
              >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index" class="img">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus';

export default {
  data() {
    return {
      collapse: false,
      items3: [
        {
          icon: 'el-icon-lx-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '2',
          title: '内容维护',
          subs: [
            {
              index: 'homeinfo',
              title: '主页维护',
            },
            {
              index: 'courseinfo',
              title: '课程信息',
            },
            {
              index: 'teachers',
              title: '教师队伍',
            },
            {
              index: 'coursearrange',
              title: '教学安排',
            },
            {
              index: 'research',
              title: '教学研究',
            },
            {
              index: 'resource',
              title: '教学资源',
            },
            {
              index: 'effect',
              title: '教学效果',
            },
            {
              index: 'interact',
              title: '教学互动',
            },
          ]
        },
        {
          icon: 'el-icon-user',
          index: '3',
          title: '账号维护',
          subs: [
            {
              index: 'adminlist',
              title: '次级管理',
            },
            {
              index: 'teacherlist',
              title: '教师管理',
            },
            {
              index: 'studentlist',
              title: '学生管理',
            }
          ]
        },
        {
          index: 'courselist',
          icon: 'el-icon-menu',
          title: '课程管理',
        },
        {
          index: 'planlist',
          icon: 'el-icon-reading',
          title: '开课计划',
        },
        {
          index: 'classlist',
          icon: 'el-icon-data-board',
          title: '班级管理',
        },
        {
          index: 'scorelist',
          icon: 'el-icon-document-checked',
          title: '成绩管理',
        },
        {
          index: 'teacherpersoninfo',
          icon: 'el-icon-notebook-2',
          title: '个人管理',
        },
      ],

      items1: [
        {
          icon: 'el-icon-lx-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '2',
          title: '内容维护',
          subs: [
            {
              index: 'homeinfo',
              title: '主页维护',
            },
            {
              index: 'courseinfo',
              title: '课程信息',
            },
            {
              index: 'teachers',
              title: '教师队伍',
            },
            {
              index: 'courseinfo',
              title: '教学安排',
            },
            {
              index: 'research',
              title: '教学研究',
            },
            {
              index: 'resource',
              title: '教学资源',
            },
            {
              index: 'effect',
              title: '教学效果',
            },
            {
              index: 'interact',
              title: '教学互动',
            },
          ]
        },
        {
          icon: 'el-icon-user',
          index: '3',
          title: '账号维护',
          subs: [
            {
              index: 'teacherlist',
              title: '教师管理',
            },
            {
              index: 'studentlist',
              title: '学生管理',
            }
          ]
        },
        {
          index: 'courselist',
          icon: 'el-icon-menu',
          title: '课程管理',
        },
        {
          index: 'planlist',
          icon: 'el-icon-reading',
          title: '开课计划',
        },
        {
          index: 'classlist',
          icon: 'el-icon-data-board',
          title: '班级管理',
        },
        {
          index: 'scorelist',
          icon: 'el-icon-document-checked',
          title: '成绩管理',
        },
        {
          index: 'teacherpersoninfo',
          icon: 'el-icon-notebook-2',
          title: '个人管理',
        },
      ],


      items2: [
        {
          icon: 'el-icon-lx-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-user',
          index: '3',
          title: '账号维护',
          subs: [
            {
              index: 'studentlist',
              title: '学生管理',
            }
          ]
        },
        {
          index: 'courselist',
          icon: 'el-icon-menu',
          title: '课程管理',
        },
        {
          index: 'classlist',
          icon: 'el-icon-data-board',
          title: '班级管理',
        },
        {
          index: 'scorelist',
          icon: 'el-icon-document-checked',
          title: '成绩管理',
        },
        {
          index: 'teacherpersoninfo',
          icon: 'el-icon-notebook-2',
          title: '个人管理',
        },
      ],

      items: [
        {
          icon: 'el-icon-lx-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          index: 'scorelist',
          icon: 'el-icon-document-checked',
          title: '成绩管理',
        },
        {
          index: 'studentpersoninfo',
          icon: 'el-icon-notebook-2',
          title: '个人管理',
        },
      ],

    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    console.log("开始");
    var usertype = localStorage.getItem("type");

    if (usertype === "超级管理员") {
      this.items = this.items3;
    } else if (usertype === "教师") {
      this.items = this.items2;
    } else if (usertype === "二级管理员") {
      this.items = this.items1;
    }

    bus.$on('collapse', msg => {
      this.collapse = msg;
      bus.$emit('collapse-content', msg);
    });
    bus.$on('type2', msg => {
      var usertype = localStorage.getItem("type");

      if (usertype === "超级管理员") {
        this.items = this.items3;
      } else if (usertype === "教师") {
        this.items = this.items2;
      } else if (usertype === "二级管理员") {
        this.items = this.items1;
      }
    });

  },

  watch: {},

};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

/*.img {*/
/*  background-color:transparent;*/
/*}*/

/*.imgbg {*/
/*  background-image: url(../../assets/head.jpg);*/
/*}*/

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar > ul {
  height: 100%;
}
</style>
