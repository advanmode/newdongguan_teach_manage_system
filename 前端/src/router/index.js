import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/studentpersoninfo',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/StudentPersonInfo'),
                    meta: { title: '个人管理' }
                },
                {
                    path: '/teacherpersoninfo',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/TeacherPersonInfo'),
                    meta: { title: '个人管理' }
                },
                {
                    path: '/adminlist',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/AdminList'),
                    meta: { title: '次级管理' }
                },
                {
                    path: '/teacherlist',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/TeacherList'),
                    meta: { title: '教师管理' }
                },
                {
                    path: '/planlist',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/PlanList'),
                    meta: { title: '开课计划' }
                },
                {
                    path: '/courseinfo',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/CourseInfo'),
                    meta: { title: '课程信息' }
                },
                {
                    path: '/teachers',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Teaches'),
                    meta: { title: '教师队伍' }
                },
                {
                    path: '/classlist',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/ClassList'),
                    meta: { title: '班级管理' }
                },
                {
                    path: '/studentlist',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/StudentList'),
                    meta: { title: '学生管理' }
                },
                {
                    path: '/scorelist',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/ScoreList'),
                    meta: { title: '成绩管理' }
                },
                {
                    path: '/courselist',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/CourseList'),
                    meta: { title: '课程管理' }
                },
                {
                    path: '/coursearrange',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Jxap'),
                    meta: { title: '教学安排' }
                },
                {
                    path: '/research',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Research'),
                    meta: { title: '教学研究' }
                },
                {
                    path: '/resource',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Resource'),
                    meta: { title: '教学资源' }
                },
                {
                    path: '/effect',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Effect'),
                    meta: { title: '教学效果' }
                },
                {
                    path: '/interact',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Interact'),
                    meta: { title: '教学互动' }
                },
                {
                    path: '/homeinfo',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/HomeInfo'),
                    meta: { title: '主页维护' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/findpassword',
            component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/FindPassword'),
            meta: { title: '找回密码' }
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/page/Front/MainFrame'),
            meta: { title: '框架页面' },
            children: [
                {
                    path: '/jxhd',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/jxhd'),
                    meta: { title: '教学互动' }
                },
                {
                    path: '/jxap',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/jxap'),
                    meta: { title: '教学安排' }
                },
                {
                    path: '/jxyj',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/jxgg'),
                    meta: { title: '教学研究' }
                },
                {
                    path: '/jxxg',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/jxxg'),
                    meta: { title: '教学效果' }
                },
                {
                    path: '/jsdw',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/jsdw'),
                    meta: { title: '教师队伍' }
                },
                {
                    path: '/jxgl',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/jxgl'),
                    meta: { title: '教学管理' }
                },
                {
                    path: '/jxzy',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/jxzy'),
                    meta: { title: '教学资源' }
                },
                {
                    path: '/kcgk',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/jxgk'),
                    meta: { title: '课程概况' }
                },
                {
                    path: '/text',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/Text'),
                    meta: { title: '文章内容' }
                },
                {
                    path: '/home',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Front/Home/index'),
                    meta: { title: '网站首页' }
                },
            ]
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
