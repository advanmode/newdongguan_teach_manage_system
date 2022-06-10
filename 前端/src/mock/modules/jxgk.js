import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/JxgkQuery',
		type: 'get',
		data: {
			'msg': '1',
			'code': 200,
			'data': {
				a: '<table width="650" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
					'                <tbody><tr>\n' +
					'                  <td height="60" align="center" class="title"><font color="#B70F0E">教学内容</font></td>\n' +
					'                </tr>\n' +
					'              <tr>\n' +
					'              <td lign="center">\n' +
					'                <table width="100%" border="0" cellspacing="0" cellpadding="0">\n' +
					'                  <tbody><tr>\n' +
					'                    <td><hr></td>\n' +
					'                  </tr>\n' +
					'                </tbody></table>\n' +
					'              </td>\n' +
					'              </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td class="gray14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>一、课程性质与任务</b><br>\n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 现代汉语是高等学校中文系必修的基础课程，它以语言学理论为指导，以国家语言文字工作的方针、政策为准绳，讲授系统的现代汉语知识，并培养学生运用这些知识的能力。但是，它既不同于以讲授基本理论为主的语言学概论课，也不同于以训练语言的综合运用能力为主的写作课。<br> \n' +
					'    本课程的内容是描写性的，一般不作历史的叙述，例如词义的演变、语音语法的古今比较等等，都不属于本课程的范围。当然，这并不等于割断现代和历史的联系，为了深刻说明现代汉语的体系，不能没有历史观点，比如，如果不从历史发展上看，便难以说明普通话中吸收文言成分的事实，也难以区别语法的一般格式和古代遗留的格式。&nbsp;<br> \n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 语言是工具，提高使用这一工具的能力，可以通过不同的途径（如阅读、写作、理论学习等）。本课程通过系统知识的讲授，培养学生观察和分析现代汉语的能力，借以帮助正确使用祖国语言。同时，大学中文系开设现代汉语的目的，不仅在于帮助学生掌握这一工具，而且为学生将来学习高年级专题课程以及从事汉语教学和研究打好基础。&nbsp;<br> \n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>二、课程内容与要求</b>&nbsp;<br>\n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 第一章绪论【教学目标】掌握现代汉语的基本结构，并且对现代汉语的概貌有全面的了解。【重点和难点】重点：掌握现代汉语的含义和特点，理解现代汉语的形成和发展，了解现代汉语方言的地域分布和人口分布。难点：现代汉语方言的地域分布，各方言内部的主要差异。&nbsp;<br> \n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 第二章语音【教学目标】掌握现代汉语语音的基本知识，能够辨别各种元音、辅音，初步具备语音教学与语音分析的能力。【重点和难点】重点：语音的三大属性、音位。难点：音位。&nbsp;<br> \n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 第三章文字【教学目标】掌握现代汉字的性质、特点、功能以及汉字整理与简化的理论与方法，掌握汉字标准化及有关文件，提高正确使用规范汉字的水平和辨析纠正不规范用字的能力。【重点和难点】重点：现行汉字的结构和形体，汉字简化的理论与方法，汉字标准化及有关文件，汉字的信息处理。难点：汉字标准化的权威文件，汉字的信息处理。&nbsp;<br> \n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 第四章词汇【教学目标】掌握现代汉语词汇的基本知识和理论，并能将其应用于对现代汉语汉语具体词汇现象的分析和解释之中。【重点和难点】重点：现代汉语词的构成，义项和义素，语义场，现代汉语词汇的构成，词汇的规范化。 难点：义素分析法，语义场。&nbsp;<br> \n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 第五章语法【教学目标】使学生系统全面地掌握现代汉语语法知识，并具备对语言现象敏锐的观察力，从而提高其分析语言和运用语言能力。【重点和难点】 重点：词类辨析，复杂短语的层次分析，多义短语分析，单句的静态分析，复句与单句的甄别，多重复句分析，句群与复句的区分，句群分析，病句修改。难点词类辨析，复杂短语的层次分析，单句的静态分析，复句与单句的甄别，多重复句分析。&nbsp;<br> \n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>三、有关教学环节的要求</b>&nbsp;<br>\n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 本课程在学生已零散掌握现代汉语语音、文字、词汇、语法的基础上，系统传授现代汉语知识，培养学生运用这些知识的能力。教学时传统授课与多媒体相结合并注意突出地域特色。本课程建议使用闭卷考核方法，成绩评定综合考虑：试卷成绩70%，作业20%，考勤10%。</td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td>&nbsp;</td>\n' +
					'                </tr>\n' +
					'              </tbody></table>',
				b: '<table width="650" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
					'                <tbody><tr>\n' +
					'                  <td height="60" align="center" class="title"><font color="#B70F0E">课程特色</font></td>\n' +
					'                </tr>\n' +
					'              <tr>\n' +
					'              <td lign="center">\n' +
					'                <table width="100%" border="0" cellspacing="0" cellpadding="0">\n' +
					'                  <tbody><tr>\n' +
					'                    <td><hr></td>\n' +
					'                  </tr>\n' +
					'                </tbody></table>\n' +
					'              </td>\n' +
					'              </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td class="gray14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 将现代汉语教学与教师口语以及普通话水平测试相结合，努力构建完整的体现区域特色的教学体系，加强方言与普通话在语音、词汇、语法方面的对比教学，做到有的放矢，稳步提高。&nbsp;<br>\n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 重视课程建设与社会实践以及学生实际的紧密结合，体现实践环节，学以致用，达到学科发展目标。在教学方法、方式上大胆创新，根据教学内容将传统教学模式、多媒体教学模式、社会调查与实践的模式等相结合，达到较为突出的教学效果。</td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td>&nbsp;</td>\n' +
					'                </tr>\n' +
					'              </tbody></table>',
				c: '<table width="650" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
					'                <tbody><tr>\n' +
					'                  <td height="60" align="center" class="title"><font color="#B70F0E">教学条件</font></td>\n' +
					'                </tr>\n' +
					'              <tr>\n' +
					'              <td lign="center">\n' +
					'                <table width="100%" border="0" cellspacing="0" cellpadding="0">\n' +
					'                  <tbody><tr>\n' +
					'                    <td><hr></td>\n' +
					'                  </tr>\n' +
					'                </tbody></table>\n' +
					'              </td>\n' +
					'              </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td class="gray14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 教材选择：本课程一直以在国内影响很大的邢福义和黄伯荣、廖序东主编的《现代汉语》为教材，特别是后者，从最初的增订版到现在的增订四版，不断更新教材，以适应教学的发展。<br>\n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 实践教学：组织学生进行社会用语、校园用语调查，家乡地名与文化调查，方言语音、词汇、语法现象调查等活动。&nbsp;<br>\n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 网络应用：学校的网络建设已经基本健全，学生可以自由在网上进行搜索，自学和问答。</td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td>&nbsp;</td>\n' +
					'                </tr>\n' +
					'              </tbody></table>',
				d: '<table width="650" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
					'                <tbody><tr>\n' +
					'                  <td height="60" align="center" class="title"><font color="#B70F0E">教学条件</font></td>\n' +
					'                </tr>\n' +
					'              <tr>\n' +
					'              <td lign="center">\n' +
					'                <table width="100%" border="0" cellspacing="0" cellpadding="0">\n' +
					'                  <tbody><tr>\n' +
					'                    <td><hr></td>\n' +
					'                  </tr>\n' +
					'                </tbody></table>\n' +
					'              </td>\n' +
					'              </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td class="gray14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 教材选择：本课程一直以在国内影响很大的邢福义和黄伯荣、廖序东主编的《现代汉语》为教材，特别是后者，从最初的增订版到现在的增订四版，不断更新教材，以适应教学的发展。<br>\n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 实践教学：组织学生进行社会用语、校园用语调查，家乡地名与文化调查，方言语音、词汇、语法现象调查等活动。&nbsp;<br>\n' +
					'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 网络应用：学校的网络建设已经基本健全，学生可以自由在网上进行搜索，自学和问答。</td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td>&nbsp;</td>\n' +
					'                </tr>\n' +
					'              </tbody></table>'
			}
		}
	}
}

export function getb() {
	return {
		// isOpen: false,
		url: '/JxgkUpdate',
		type: 'post',
		data: {
			'msg': '1',
			'code': 200,
			'data': ''
		}
	}
}