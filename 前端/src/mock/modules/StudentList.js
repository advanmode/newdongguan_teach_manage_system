import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/StudentListQuery',
		type: 'get',
		data: {
			'msg': '3',
			'code': 200,
			'data': [
				{
					username: '20211111',
					name: '侯爱民',
					sex: '男',
					birthday: '1970-1-1',
					class: '3年B班',
					from: '广东东莞',
					email: '1111@dgut.edu.cn',
					phone: '543435434'
				},
				{
					username: '20211112',
					name: '胡传福',
					sex: '男',
					birthday: '1970-1-1',
					class: '3年B班',
					from: '广东东莞',
					email: '1111@dgut.edu.cn',
					phone: '543435434'
				},
				{
					username: '20211113',
					name: '徐钦桂',
					sex: '男',
					birthday: '1970-1-1',
					class: '3年A班',
					from: '广东东莞',
					email: '1111@dgut.edu.cn',
					phone: '543435434'
				},
			],
		}
	}
}

export function getb() {
	return {
		// isOpen: false,
		url: '/StudentPassword',
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
		url: '/StudentDelete',
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
		url: '/StudentAdd',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}