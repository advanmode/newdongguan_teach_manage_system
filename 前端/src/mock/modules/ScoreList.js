import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/ScoreListQuery',
		type: 'get',
		data: {
			'msg': '3',
			'code': 200,
			'data': [
				{
					id: 1,
					year: '2021',
					class: '3年A班',
					course: '需求分析',
					teacher: '侯爱民',
					username: '20211111',
					name: '胡传福',
					normalscore: '60',
					midscore: '80',
					finalscore: '90',
					bigworkscore: '80',
					totalscore: '80'
				},
				{
					id: 2,
					year: '2021',
					class: '3年A班',
					course: '需求分析',
					teacher: '侯爱民',
					username: '20211112',
					name: '张福勇',
					normalscore: '70',
					midscore: '80',
					finalscore: '90',
					bigworkscore: '80',
					totalscore: '85'
				},
				{
					id: 2,
					year: '2021',
					class: '3年A班',
					course: '需求分析',
					teacher: '侯爱民',
					username: '20211113',
					name: '徐钦桂',
					normalscore: '80',
					midscore: '80',
					finalscore: '90',
					bigworkscore: '80',
					totalscore: '90'
				},
			],
		}
	}
}

export function getc() {
	return {
		// isOpen: false,
		url: '/ScoreDelete',
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
		url: '/ScoreAdd',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}