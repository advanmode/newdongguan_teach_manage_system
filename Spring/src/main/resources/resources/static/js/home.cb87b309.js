(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{3647:function(e,t,i){"use strict";var n=i("c57e"),s=i.n(n);s.a},"4c45":function(e,t,i){e.exports=i.p+"static/img/head.3b597f64.png"},"4fec":function(e,t,i){"use strict";var n=i("b593"),s=i.n(n);s.a},"5ebe":function(e,t,i){},"7ed4":function(e,t,i){"use strict";var n=i("2b0e"),s=new n["default"];t["a"]=s},"82f9":function(e,t,i){},"8e33":function(e,t,i){"use strict";var n=i("82f9"),s=i.n(n);s.a},b593:function(e,t,i){},bfe9:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("v-head"),i("v-sidebar"),i("div",{staticClass:"content-box",class:{"content-collapse":e.collapse}},[i("v-tags"),i("div",{staticClass:"content"},[i("transition",{attrs:{name:"move",mode:"out-in"}},[i("keep-alive",{attrs:{include:e.tagsList}},[i("router-view")],1)],1),i("el-backtop",{attrs:{target:".content"}})],1)],1)],1)},s=[],l=(i("7f7f"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"collapse-btn",on:{click:e.collapseChage}},[e.collapse?i("i",{staticClass:"el-icon-s-unfold"}):i("i",{staticClass:"el-icon-s-fold"})]),e._m(0),i("div",{staticClass:"header-right"},[i("div",{staticClass:"header-user-con"},[i("div",{staticClass:"btn-fullscreen",on:{click:e.handleFullScreen}},[i("el-tooltip",{attrs:{effect:"dark",content:e.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[i("i",{staticClass:"el-icon-rank"})])],1),e._m(1)])])])}),o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo"},[i("p",[e._v("新东莞培训机构教学管理系统")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:i("4c45")}})])}],c=(i("a481"),i("7ed4")),a={data:function(){return{collapse:!1,fullscreen:!1,name:"",message:2}},created:function(){this.convert()},methods:{handleCommand:function(e){var t=this;"loginout"===e&&(localStorage.removeItem("user"),localStorage.removeItem("type"),localStorage.removeItem("name"),this.$axios.get("/logout-s").then((function(e){200===e.data.code?(t.$message.success("登出成功"),t.$router.replace("/login")):500===e.data.code?alert("请截图以下信息报给维护员: 出错位置：dasboard.convert 出错详情: "+e.data.message):403===e.data.code&&(t.$message.error("登录过期，请重新登录"),t.$router.push("/login"))})).catch((function(e){t.$message.error(e.message)}))),"person"===e&&this.$router.push("/personinfo"),"free"===e&&this.$router.push("/personfree")},convert:function(){},collapseChage:function(){this.collapse=!this.collapse,c["a"].$emit("collapse",this.collapse)},handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},r=a,u=(i("4fec"),i("2877")),d=Object(u["a"])(r,l,o,!1,null,"2befde1a",null),m=d.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar"},[i("div",{staticStyle:{height:"10px","background-color":"#e9ecf3"}},[e._v(" ")]),i("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":e.onRoutes,collapse:e.collapse,"background-color":"#ffffff","text-color":"#9999a6","active-text-color":"#000000","unique-opened":"",router:""}},[e._l(e.items,(function(t){return[t.subs?[i("el-submenu",{key:t.index,attrs:{index:t.index}},[i("template",{slot:"title"},[i("i",{class:t.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])]),e._l(t.subs,(function(t){return[t.subs?i("el-submenu",{key:t.index,attrs:{index:t.index}},[i("template",{slot:"title"},[e._v(e._s(t.title))]),e._l(t.subs,(function(t,n){return i("el-menu-item",{key:n,attrs:{index:t.index}},[e._v(e._s(t.title)+"\n              ")])}))],2):i("el-menu-item",{key:t.index,attrs:{index:t.index}},[e._v(e._s(t.title)+"\n            ")])]}))],2)]:[i("el-menu-item",{key:t.index,attrs:{index:t.index}},[i("i",{class:t.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]]}))],2)],1)},f=[],x={data:function(){return{collapse:!1,items3:[{icon:"el-icon-lx-home",index:"dashboard",title:"系统首页"},{icon:"el-icon-lx-cascades",index:"2",title:"内容维护",subs:[{index:"courseinfo",title:"课程信息"},{index:"teachers",title:"教师队伍"},{index:"coursearrange",title:"教学安排"},{index:"research",title:"教学研究"},{index:"resource",title:"教学资源"},{index:"effect",title:"教学效果"},{index:"interact",title:"教学互动"}]},{icon:"el-icon-user",index:"3",title:"账号维护",subs:[{index:"adminlist",title:"次级管理"},{index:"teacherlist",title:"教师管理"},{index:"studentlist",title:"学生管理"}]},{index:"courselist",icon:"el-icon-menu",title:"课程管理"},{index:"planlist",icon:"el-icon-reading",title:"开课计划"},{index:"classlist",icon:"el-icon-data-board",title:"班级管理"},{index:"scorelist",icon:"el-icon-document-checked",title:"成绩管理"},{index:"teacherpersoninfo",icon:"el-icon-notebook-2",title:"个人管理"}],items1:[{icon:"el-icon-lx-home",index:"dashboard",title:"系统首页"},{icon:"el-icon-lx-cascades",index:"2",title:"内容维护",subs:[{index:"courseinfo",title:"课程信息"},{index:"teachers",title:"教师队伍"},{index:"courseinfo",title:"教学安排"},{index:"research",title:"教学研究"},{index:"resource",title:"教学资源"},{index:"effect",title:"教学效果"},{index:"interact",title:"教学互动"}]},{icon:"el-icon-user",index:"3",title:"账号维护",subs:[{index:"teacherlist",title:"教师管理"},{index:"studentlist",title:"学生管理"}]},{index:"courselist",icon:"el-icon-menu",title:"课程管理"},{index:"planlist",icon:"el-icon-reading",title:"开课计划"},{index:"classlist",icon:"el-icon-data-board",title:"班级管理"},{index:"scorelist",icon:"el-icon-document-checked",title:"成绩管理"},{index:"teacherpersoninfo",icon:"el-icon-notebook-2",title:"个人管理"}],items2:[{icon:"el-icon-lx-home",index:"dashboard",title:"系统首页"},{icon:"el-icon-user",index:"3",title:"账号维护",subs:[{index:"studentlist",title:"学生管理"}]},{index:"courselist",icon:"el-icon-menu",title:"课程管理"},{index:"classlist",icon:"el-icon-data-board",title:"班级管理"},{index:"scorelist",icon:"el-icon-document-checked",title:"成绩管理"},{index:"teacherpersoninfo",icon:"el-icon-notebook-2",title:"个人管理"}],items:[{icon:"el-icon-lx-home",index:"dashboard",title:"系统首页"},{index:"scorelist",icon:"el-icon-document-checked",title:"成绩管理"},{index:"studentpersoninfo",icon:"el-icon-notebook-2",title:"个人管理"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var e=this;console.log("开始");var t=localStorage.getItem("type");"超级管理员"===t?this.items=this.items3:"教师"===t?this.items=this.items2:"二级管理员"===t&&(this.items=this.items1),c["a"].$on("collapse",(function(t){e.collapse=t,c["a"].$emit("collapse-content",t)})),c["a"].$on("type2",(function(t){var i=localStorage.getItem("type");"超级管理员"===i?e.items=e.items3:"教师"===i?e.items=e.items2:"二级管理员"===i&&(e.items=e.items1)}))},watch:{}},p=x,g=(i("3647"),Object(u["a"])(p,h,f,!1,null,"65ad8996",null)),v=g.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div")},_=[],$={data:function(){return{tagsList:[]}},methods:{isActive:function(e){return e===this.$route.fullPath},closeTags:function(e){var t=this.tagsList.splice(e,1)[0],i=this.tagsList[e]?this.tagsList[e]:this.tagsList[e-1];i?t.path===this.$route.fullPath&&this.$router.push(i.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var e=this,t=this.tagsList.filter((function(t){return t.path===e.$route.fullPath}));this.tagsList=t},setTags:function(e){var t=this.tagsList.some((function(t){return t.path===e.fullPath}));t||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:e.meta.title,path:e.fullPath,name:e.matched[1].components.default.name})),c["a"].$emit("tags",this.tagsList)},handleTags:function(e){"other"===e?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(e,t){this.setTags(e)}},created:function(){var e=this;this.setTags(this.$route),c["a"].$on("close_current_tags",(function(){for(var t=0,i=e.tagsList.length;t<i;t++){var n=e.tagsList[t];if(n.path===e.$route.fullPath){t<i-1?e.$router.push(e.tagsList[t+1].path):t>0?e.$router.push(e.tagsList[t-1].path):e.$router.push("/"),e.tagsList.splice(t,1);break}}}))}},k=$,C=(i("c5f3"),Object(u["a"])(k,b,_,!1,null,null,null)),L=C.exports,y={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:m,vSidebar:v,vTags:L},created:function(){var e=this;c["a"].$on("collapse-content",(function(t){e.collapse=t})),c["a"].$on("tags",(function(t){for(var i=[],n=0,s=t.length;n<s;n++)t[n].name&&i.push(t[n].name);e.tagsList=i}))}},w=y,F=Object(u["a"])(w,n,s,!1,null,null,null);t["default"]=F.exports},c57e:function(e,t,i){},c5f3:function(e,t,i){"use strict";var n=i("5ebe"),s=i.n(n);s.a},ebcd:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{align:"center"}},[i("el-menu",{staticClass:"nav-wrapper",attrs:{mode:"horizontal"}},[i("el-row",{staticClass:"hidden-xs-only"},[i("el-col",{staticStyle:{"margin-left":"15%"},attrs:{span:8}},[i("h1",{staticClass:"logo"},[e._v("\n          新东莞培训机构\n        ")])]),i("el-col",{attrs:{md:9,sm:9}},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.open1}},[e._v("登录")])],1)],1)],1),i("el-menu",{staticClass:"navbar-container",attrs:{mode:"horizontal","background-color":"#2c323b","text-color":"#fff",align:"center",router:"true","active-text-color":"#ffd04b"}},[i("el-menu-item",{staticStyle:{"margin-left":"25%"},attrs:{index:"/home"}},[e._v("首页")]),i("el-menu-item",{attrs:{index:"/kcgk"}},[e._v("课程概况")]),i("el-menu-item",{attrs:{index:"/jsdw"}},[e._v("教师队伍")]),i("el-menu-item",{attrs:{index:"/jxap"}},[e._v("教学安排")]),i("el-menu-item",{attrs:{index:"/jxyj"}},[e._v("教学研究")]),i("el-menu-item",{attrs:{index:"/jxzy"}},[e._v("教学资源")]),i("el-menu-item",{attrs:{index:"/jxgl"}},[e._v("教学管理")]),i("el-menu-item",{attrs:{index:"/jxxg"}},[e._v("教学效果")]),i("el-menu-item",{attrs:{index:"/jxhd"}},[e._v("教学互动")])],1),i("router-view")],1)},s=[],l={name:"MainFrame",data:function(){return{}},methods:{open1:function(){console.log(document.body.clientHeight),console.log(document.body.scrollHeight),console.log(document.body.scrollTop),this.$router.push("/login")}}},o=l,c=(i("8e33"),i("2877")),a=Object(c["a"])(o,n,s,!1,null,"71ff4638",null);t["default"]=a.exports}}]);