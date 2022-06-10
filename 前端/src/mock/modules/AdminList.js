import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/AdminListQuery',
		type: 'get',
		data: {
			'msg': '3',
			'code': 200,
			'data': [
				{
					username: '1995010',
					name: '侯爱民',
					usertype: '二级管理员',
					email: '1111@dgut.edu.cn',
					phone: '543435434'
				},
				{
					username: '1995011',
					name: '胡传福',
					usertype: '二级管理员',
					email: '1221@dgut.edu.cn',
					phone: '57651654657'
				},
				{
					username: '1995012',
					name: '张福勇',
					usertype: '二级管理员',
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
		url: '/adminPassword',
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
		url: '/adminDelete',
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
		url: '/adminAdd',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}