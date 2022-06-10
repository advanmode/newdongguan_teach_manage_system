import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/studentPersonQuery',
		type: 'get',
		data: {
			'msg': 'success',
			'code': 200,
			'data': {
				name: '侯爱民',
				sex: '男',
				birthday: '1970-1-1',
				from: '广东东莞',
				email: 'houaimin@dgut.edu.cn',
				phone: '11111111111',
				password: '',
			},
		}
	}
}

export function getb() {
	return {
		// isOpen: false,
		url: '/studentPersonUpdate',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}