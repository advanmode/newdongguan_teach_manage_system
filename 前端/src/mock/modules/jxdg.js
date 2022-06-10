import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/JxdgListQuery',
		type: 'get',
		data: {
			'msg': '1',
			'code': 200,
			'data': [
				{
					id: 1,
					title: '离散数学',
					year: '2021',
					link: 'https://ar.css.dgut.edu.cn/out/compile?id=epGALOydq1BQK6JerbzPjmo0n3vX9N8x'
				},
				{
					id: 2,
					title: '程序设计基础',
					year: '2021',
					link: 'https://ar.css.dgut.edu.cn/out/compile?id=m9LlZ380JvaVqzxJkORwMbNKGAyPjd7x'
				}
			]
		}
	}
}

export function getb() {
	return {
		// isOpen: false,
		url: '/JxdgDelete',
		type: 'post',
		data: {
			'msg': '1',
			'code': 200,
			'data': ''
		}
	}
}
