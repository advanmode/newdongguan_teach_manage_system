import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/PlanListQuery',
		type: 'get',
		data: {
			'msg': '2',
			'code': 200,
			'data': [
				{
					id: '1',
					name: '需求分析',
					score: '10',
					hour: '10',
					classname: '3年E班',
					grade: '3年级',
					teacher: '侯爱民',
				},
				{
					id: '2',
					name: '微信小程序开发',
					score: '10',
					hour: '10',
					classname: '3年E班',
					grade: '3年级',
					teacher: '胡传福',
				},
			],
		}
	}
}

export function getb() {
	return {
		// isOpen: false,
		url: '/PlanDelete',
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
		url: '/PlanAdd',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}
