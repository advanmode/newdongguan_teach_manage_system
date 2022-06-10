import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
//import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
import Vuex from 'vuex'

Vue.use(Vuex);

// 非生产环境, 适配mockjs模拟数据
if (process.env.NODE_ENV !== 'production') {
    require('./mock/mock.js')
}

var axios = require('axios');
axios.defaults.baseURL = 'http://121.37.239.127:25555/';
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
axios.default.head('Access-Control-Allow-Origin:*');
Vue.prototype.$axios=axios;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    var user = localStorage.getItem("user");
    var usertype = localStorage.getItem("type");
    document.title = `${to.meta.title} | 新东莞培训机构管理系统`;
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
        Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
            confirmButtonText: '确定'
        });
    } else {
        next();
    }
});

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
