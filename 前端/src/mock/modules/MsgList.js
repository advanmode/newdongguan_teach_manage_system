import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/MessageListQuery',
		type: 'post',
		data: {
			'msg': '3',
			'code': 200,
			'data': [
				{
					id: 1,
					title: 'CSS学习笔记',
					text: '什么是CSS,CSS怎么用（快速入门）,CSS选择器（重点）,美化网页（文字，阴影，超链接，列表）,盒子模型,浮动,定位,网页动画（特效）',
					sender: '胡传福',
					time: '2021-12-2'
				},
				{
					id: 2,
					title: 'Apache httpd 从入门到掌握',
					text: 'Apache 是一款历史悠久的web服务器，遵循的同样是HTTP协议，默认端口号为80',
					sender: '侯爱民',
					time: '2021-12-3'
				},
				{
					id: 3,
					title: '电脑怎么开机，求解答',
					text: '如题',
					sender: '电脑小白',
					time: '2021-12-3'
				},
			],
		}
	}
}

export function getb() {
	return {
		// isOpen: false,
		url: '/MessageListSend',
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
		url: '/MessageListDelete',
		type: 'post',
		data: {
			'msg': 'success',
			'code': 200,
			'data': '',
		}
	}
}