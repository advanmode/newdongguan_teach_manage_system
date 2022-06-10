import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/TeachersQuery',
		type: 'get',
		data: {
			'msg': '3',
			'code': 200,
			'data': [
				{
					name: '侯爱民',
					sex: '男',
					birthday: '1970-1-1',
					type: '副教授',
					profess: '软件工程',
					degree: '本科',
					group: '需求分析团队',
					work: '教学',
					photo: 'http://www.itcast.cn/images/teacher/2020112014114200.jpg'
				},
				{
					name: '胡传福',
					sex: '男',
					birthday: '1970-1-1',
					type: '副教授',
					profess: '软件工程',
					degree: '本科',
					group: '需求分析团队',
					email: '1221@dgut.edu.cn',
					phone: '57651654657',
					work: '教学',
					photo: 'http://www.itcast.cn/images/teacher/2020112014114200.jpg'
				},
				{
					name: '张福勇',
					sex: '男',
					birthday: '1970-1-1',
					type: '副教授',
					profess: '软件工程',
					degree: '本科',
					group: '需求分析团队',
					email: '3333@dgut.edu.cn',
					phone: '111113786',
					work: '教学',
					photo: 'http://www.itcast.cn/images/teacher/2020112014114200.jpg'
				},
			],
		}
	}
}

export function getc() {
	return {
		// isOpen: false,
		url: '/TeachersDelete',
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
		url: '/TeachersAdd',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}