import Mock from 'mockjs'

// 登录
export function getToken() {
	return {
		// isOpen: false,
		url: '/FindPasswordSendEmail',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': "",
		}
	}
}

export function getb() {
	return {
		// isOpen: false,
		url: '/FindPassword',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': "",
		}
	}
}
