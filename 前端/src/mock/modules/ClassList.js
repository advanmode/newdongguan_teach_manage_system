import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/ClassListQuery',
		type: 'get',
		data: {
			'msg': '3',
			'code': 200,
			'data': [
				{
					id: 1,
					name: '3年A班',
					grade: '3年级',
					profess: '软件工程',
					course: '需求分析',
					no: 'A',
				},
				{
					id: 2,
					name: '3年E班',
					grade: '3年级',
					profess: '暗杀',
					course: '需求分析',
					no: 'E',
				},
				{
					id: 3,
					name: '3年B班',
					grade: '3年级',
					profess: '大数据',
					course: '需求分析',
					no: 'B',
				},
			],
		}
	}
}

export function getc() {
	return {
		// isOpen: false,
		url: '/ClassDelete',
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
		url: '/ClassAdd',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}