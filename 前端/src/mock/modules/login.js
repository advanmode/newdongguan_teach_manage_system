import Mock from 'mockjs'

// 登录
export function getToken() {
	return {
		// isOpen: false,
		url: '/login',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': {
				'username': '1995011',
				'name': '侯爱民',
				'type': '超级管理员'
			},
		}
	}
}

