import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/teacherPersonQuery',
		type: 'get',
		data: {
			'msg': 'success',
			'code': 200,
			'data': {
				name: '侯爱民',
				sex: '男',
				birthday: '1970-1-1',
				type: '副教授',
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
		url: '/teacherPersonUpdate',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}