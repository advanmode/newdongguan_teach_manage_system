import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/TeacherListQuery',
		type: 'get',
		data: {
			'msg': '3',
			'code': 200,
			'data': [
				{
					username: '1995010',
					name: '侯爱民',
					sex: '男',
					birthday: '1970-1-1',
					type: '副教授',
					profess: '软件工程',
					degree: '本科',
					usertype: '教师',
					email: '1111@dgut.edu.cn',
					phone: '543435434'
				},
				{
					username: '1995011',
					name: '胡传福',
					sex: '男',
					birthday: '1970-1-1',
					profess: '软件工程',
					degree: '本科',
					type: '副教授',
					usertype: '教师',
					email: '1221@dgut.edu.cn',
					phone: '57651654657'
				},
				{
					username: '1995012',
					name: '张福勇',
					sex: '男',
					birthday: '1970-1-1',
					profess: '软件工程',
					degree: '本科',
					type: '副教授',
					usertype: '教师',
					email: '3333@dgut.edu.cn',
					phone: '111113786'
				},
			],
		}
	}
}

export function getb() {
	return {
		// isOpen: false,
		url: '/TeacherPassword',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}

export function getc() {
	return {
		// isOpen: false,
		url: '/TeacherDelete',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}

export function getd() {
	return {
		// isOpen: false,
		url: '/TeacherAdd',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}