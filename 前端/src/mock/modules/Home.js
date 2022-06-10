import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/HomeQuery',
		type: 'get',
		data: {
			'msg': '3',
			'code': 200,
			'data': {
				b: [
					{
						"url": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091110%2Ftnpgys5mdmvtnpgys5mdmv.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640940627&t=9a8a291b75a6851c3527cdda6d5c6ac5",
						"courseName": "微信小程序",
						"courseTeacher": "王老师",
						"courseTime": 1638289528227
					},
					{
						"url": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091110%2Ftnpgys5mdmvtnpgys5mdmv.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640940627&t=9a8a291b75a6851c3527cdda6d5c6ac5",
						"courseName": "微信小程序",
						"courseTeacher": "王老师",
						"courseTime": 1638289528227
					},
					{
						"url": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091110%2Ftnpgys5mdmvtnpgys5mdmv.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640940627&t=9a8a291b75a6851c3527cdda6d5c6ac5",
						"courseName": "微信小程序",
						"courseTeacher": "王老师",
						"courseTime": 1638289528227
					},
					{
						"url": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091110%2Ftnpgys5mdmvtnpgys5mdmv.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640940627&t=9a8a291b75a6851c3527cdda6d5c6ac5",
						"courseName": "微信小程序",
						"courseTeacher": "王老师",
						"courseTime": 1638289528227
					},
					{
						"url": "https://img0.baidu.com/it/u=2681756149,2584874549&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
						"courseName": "微信小程序",
						"courseTeacher": "王老师",
						"courseTime": 1638289528227
					},
					{
						"url": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091110%2Ftnpgys5mdmvtnpgys5mdmv.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640940627&t=9a8a291b75a6851c3527cdda6d5c6ac5",
						"courseName": "微信小程序",
						"courseTeacher": "王老师",
						"courseTime": 1638289528227
					},
					{
						"url": "https://img0.baidu.com/it/u=2681756149,2584874549&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
						"courseName": "微信小程序",
						"courseTeacher": "王老师",
						"courseTime": 1638289528227
					}
				],
				a: [
					{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					},{
						"src" : "http://www.itcast.cn/images/teacher/2020112014114200.jpg",
						"introduction" : "曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容是第一位，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。",
						"name" : "刘老师",
						"position" :"课程研究员"
					},
					{
						"src" : "http://www.itcast.cn/images/teacher/2020462610465300.jpg",
						"introduction" : "微软AI课程导师，曾访学德国汉诺威大学（德国工业大学TU9），阿根廷国家科学技术委员会； 曾任职于世界500强公司霍尼韦尔及大疆创新研发部； 曾于江南大学，南京信息工程大学等“211”及“双一流”高校讲授人",
						"name" : "赵老师",
						"position" : "课程研究员"
					}
				]
			}
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