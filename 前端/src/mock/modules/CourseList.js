import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/CourseListQuery',
		type: 'get',
		data: {
			'msg': '3',
			'code': 200,
			'data': [
				{
					id: 1,
					name: '需求分析',
					score: '10',
					hour: '50',
					leadername: '侯爱民',
					leadereducation: '本科',
					leaderdegree: '本科'
				},
				{
					id: 2,
					name: '微信小程序',
					score: '10',
					hour: '50',
					leadername: '张福勇',
					leadereducation: '本科',
					leaderdegree: '本科'
				},
				{
					id: 3,
					name: 'JavaEE',
					score: '10',
					hour: '50',
					leadername: '胡传福',
					leadereducation: '本科',
					leaderdegree: '本科'
				},
			],
		}
	}
}

export function getc() {
	return {
		// isOpen: false,
		url: '/CourseDelete',
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
		url: '/CourseAdd',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}