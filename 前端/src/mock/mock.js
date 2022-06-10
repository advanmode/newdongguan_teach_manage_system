import Mock from 'mockjs'
import * as login from './modules/login.js'
import * as t1 from './modules/teacherPersonInfo'
import * as t2 from './modules/studentPersonInfo'
import * as t3 from './modules/AdminList'
import * as t4 from './modules/TeacherList'
import * as t5 from './modules/PlanList'
import * as t6 from './modules/Teachers'
import * as t7 from './modules/ClassList'
import * as t8 from './modules/StudentList'
import * as t9 from './modules/ScoreList'
import * as t10 from './modules/CourseList'
import * as t11 from './modules/FindPassword'
import * as t12 from './modules/MsgList'
import * as t13 from './modules/jxgg'
import * as t14 from './modules/jstd'
import * as t15 from './modules/jxdg'
import * as t16 from './modules/Home'
import * as t17 from './modules/jxgk'
import * as t18 from './modules/TextList'

// 可以通过 isOpen 参数设置是否拦截整个模块的 mock 功能
fnCreate(login, false)
fnCreate(t1, false)
fnCreate(t2, false)
fnCreate(t3, false)
fnCreate(t4, false)
fnCreate(t5, false)
fnCreate(t6, false)
fnCreate(t7, false)
fnCreate(t8, false)
fnCreate(t9, false)
fnCreate(t10, false)
fnCreate(t11, false)
fnCreate(t12, false)
fnCreate(t13, false)
fnCreate(t14, false)
fnCreate(t15, false)
fnCreate(t16, false)
fnCreate(t17, false)
fnCreate(t18, false)

/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate(mod, isOpen = true) {
	if (isOpen) {
		for (var key in mod) {
			((res) => {
				if (res.isOpen !== false) {
					Mock.mock(new RegExp(res.url), res.type, (opts) => {
						opts['data'] = opts.body ? JSON.parse(opts.body) : null
						delete opts.body
						console.log('\n')
						console.log('%cmock拦截, 请求: ', 'color:blue', opts)
						console.log('%cmock拦截, 响应: ', 'color:blue', res.data)
						return res.data
					})
				}
			})(mod[key]() || {})
		}
	}
}