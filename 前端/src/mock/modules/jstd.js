import Mock from 'mockjs'

// 登录
export function geta() {
	return {
		// isOpen: false,
		url: '/JxtdQuery',
		type: 'get',
		data: {
			'msg': '1',
			'code': 200,
			'data': {
				fuzeren: '<table width="650" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
					'                <tbody><tr>\n' +
					'                  <td height="60" align="center" class="title"><font color="#B70F0E">课程负责人</font></td>\n' +
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
					'                  <td class="gray14">\n' +
					'<div align="center">\n' +
					'  <center>\n' +
					'  <table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
					'    <tbody><tr>\n' +
					'      <td width="100%">\n' +
					'        <p align="center"><img border="0" src="kcfzr1.JPG" width="213" height="299"></p></td>\n' +
					'    </tr>\n' +
					'  </tbody></table>\n' +
					'  </center>\n' +
					'</div>\n' +
					'<p><b>个人简介</b><br>\n' +
					'&nbsp;&nbsp;&nbsp; 蔡丽质，女，1961年10月出生。副教授，中共党员，文学学士，山西省语言学会会员，国家级普通话测试员。1983年毕业于山西师范学院中文系，1986年——1987年在暨南大学文学院中文系现代汉语助教进修班学习硕士研究生主要课程，先后在运城教育学院中文系、运城高专中文系和运城学院中文系工作,曾任全国高等师范院校现代汉语教学研究会理事，现任运城学院中文系教学副主任。主要从事现代汉语、语言漫谈等课程的教学工作。曾先后荣获山西省高校工委、山西省教育厅普通高校师德师风建设先进个人，运城学院师德师风建设模范，论文《论邓小平文选的语体风格》获山西省语言学会第一届优秀论文评选一等奖，《论民族特征对语言民族风格的影响》获全国首届教学与管理优秀论文二等奖。<br>\n' +
					'<b>教学情况</b><br>\n' +
					'讲授课程：<br>\n' +
					'&nbsp;&nbsp;&nbsp; （1）现代汉语  专业基础课<br> \n' +
					'&nbsp;&nbsp;&nbsp; 05-06学年第一、二学期 中文系0501/02班   周学时4/3  学生150人<br> \n' +
					'&nbsp;&nbsp;&nbsp; 06-07学年第一、二学期 中文系0601/02班   周学时4/2  学生106人<br> \n' +
					'&nbsp;&nbsp;&nbsp; 07-08学年第一、二学期 中文系0701/02班   周学时3/3  学生140人<br> \n' +
					'&nbsp;&nbsp;&nbsp; 08-09学年第一、二学期 中文系0801/02班   周学时3/2  学生110人<br> \n' +
					'&nbsp;&nbsp;&nbsp; 09-10学年第一学期 中文系0901/02/03/04班   周学时3/2  学生280人<br> \n' +
					'&nbsp;&nbsp;&nbsp; （2）语言漫谈  跨专业选修课课&nbsp;<br>\n' +
					'&nbsp;&nbsp;&nbsp; 05-06学年第一、二学期 全院各系   周学时4/4  学生200人<br> \n' +
					'&nbsp;&nbsp;&nbsp; 06-07学年第一、二学期 全院各系   周学时4/4  学生200人<br> \n' +
					'&nbsp;&nbsp;&nbsp; 07-08学年第一、二学期 全院各系   周学时4/4  学生200人<br> \n' +
					'&nbsp;&nbsp;&nbsp; 08-09学年第一、二学期 全院各系   周学时4/4  学生200人<br> \n' +
					'实践教学：<br> \n' +
					'&nbsp;&nbsp;&nbsp; （1）毕业论文    5届 25人<br> \n' +
					'&nbsp;&nbsp;&nbsp; （2）教育实习    5届 40人<br> \n' +
					'&nbsp;&nbsp;&nbsp; （3）普通话测试  5届 500人<br> \n' +
					'教育教学奖励：<br> \n' +
					'&nbsp;&nbsp;&nbsp; （1）运城学院师德师风建设模范   2002年12月<br> \n' +
					'&nbsp;&nbsp;&nbsp; （2）山西省普通高校师德师风建设先进个人   2003年4月<br> \n' +
					'<b>科研情况</b><br> \n' +
					'&nbsp;&nbsp;&nbsp; 2007年7月参加“首届汉语语汇学学术研讨会”，递交并宣读会议论文《山西临猗方言谚语例释》；2008年7月参加“第三届晋方言国际学术研讨会”，递交并宣读会议论文《山西临猗方言谚语文化信息解读》。<br>\n' +
					'&nbsp;&nbsp;&nbsp; 先后发表论文十篇，主编出版《现代汉语教程》一部，已申报山西省教育厅课题一项。<br>\n' +
					'学术研究奖励：<br>\n' +
					'&nbsp;&nbsp;&nbsp; （1）论文《论邓小平文选的语体风格》，山西省语言学会第一届优秀论文评选一等奖，2000年<br>\n' +
					'&nbsp;&nbsp;&nbsp; （2）论文《论民族特征对语言民族风格的影响》，全国首届教学与管理优秀论文二等奖，1999年</p>\n' +
					'<div align="center">\n' +
					'  <center>\n' +
					'  <table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
					'    <tbody><tr>\n' +
					'      <td width="50%" align="center" height="220"><img border="0" src="kcfzr2.JPG" width="300" height="199"></td>\n' +
					'      <td width="50%" align="center" height="220"><img border="0" src="kcfzr3.JPG" width="300" height="206"></td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="50%" align="center" height="240"><img border="0" src="kcfzr4.JPG" width="300" height="217"></td>\n' +
					'      <td width="50%" align="center" height="240"><img border="0" src="kcfzr5.JPG" width="300" height="209"></td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="50%" align="center" height="240"><img border="0" src="kcfzr6.JPG" width="300" height="206"></td>\n' +
					'      <td width="50%" align="center" height="240"><img border="0" src="kcfzr7.JPG" width="300" height="211"></td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="50%" align="center" height="200"><img border="0" src="kcfzr8.JPG" width="300" height="153"></td>\n' +
					'      <td width="50%" align="center" height="200"><img border="0" src="kcfzr9.JPG" width="300" height="162"></td>\n' +
					'    </tr>\n' +
					'  </tbody></table>\n' +
					'  </center>\n' +
					'</div>\n' +
					'                </td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td>&nbsp;</td>\n' +
					'                </tr>\n' +
					'              </tbody></table>',
				jxtd: '<table width="650" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
					'                <tbody><tr>\n' +
					'                  <td height="60" align="center" class="title"><font color="#B70F0E">人员构成</font></td>\n' +
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
					'                  <td class="gray14">\n' +
					'                  <table cellspacing="0" cellpadding="0" width="100%" border="0">\n' +
					'    <tbody><tr>\n' +
					'      <td width="100%" align="center" height="420"><img border="0" src="rygc.jpg" width="500"></td>\n' +
					'    </tr>\n' +
					'                    <tr>\n' +
					'                      <td class="title3" valign="center" align="middle" height="180">\n' +
					'                        <table class="title3" bordercolor="#FCFCE4" height="83" cellspacing="1" cellpadding="4" width="644" align="center" bgcolor="#524736" border="0">\n' +
					'                          <tbody>\n' +
					'                            <tr>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="33">姓名</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="33"> 性别\n' +
					'                              </td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="33"> 出生年月\n' +
					'                              </td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="33"> 职称</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="33"> 学历</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="33"> 学科专业</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="33"> 教学分工</td>\n' +
					'                            </tr>\n' +
					'                            <tr>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33">蔡丽质</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 女</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 1961.10</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 副教授</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 学士</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 语言学</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 主讲</td>\n' +
					'                            </tr>\n' +
					'                            <tr>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30">晁爱叶</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 女</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30">1965.4</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 讲师</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 学士</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 修辞学</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 主讲</td>\n' +
					'                            </tr>\n' +
					'                            <tr>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33">周国祥</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 男</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 1979.9</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 讲师</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 硕士</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 语言学</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33">主讲、网维</td>\n' +
					'                            </tr>\n' +
					'                            <tr>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30">李仙娟</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 女</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 1979.10</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 讲师</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 硕士</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30"> 方言学</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#E4DBBE" height="30">主讲、答疑</td>\n' +
					'                            </tr>\n' +
					'                            <tr>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33">贺振江</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 男</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 1960.3</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 讲师</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 学士</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33"> 汉语史</td>\n' +
					'                              <td nowrap="" align="center" bgcolor="#FCFCE4" height="33">主讲、答疑</td>\n' +
					'                            </tr>\n' +
					'                          </tbody>\n' +
					'                        </table>\n' +
					'                      </td>\n' +
					'                    </tr>\n' +
					'                  </tbody></table><br>\n' +
					'&nbsp;&nbsp;&nbsp; 现代汉语课程组有专职教师5人，课程组成员分别侧重于应用语言学、汉语修辞学、汉语方言学和汉语发展史的教学和研究，涵盖了本课程各主要领域，形成合理互补的知识结构。<br>\n' +
					'                  &nbsp;&nbsp;&nbsp; 课程组成员有硕士2人、学士3人；副教授1人、讲师4人；50岁以上1人，50岁——40岁2人，40岁——30岁2人；课程组成员分别毕业于山西大学、西北大学、山西师范大学和渤海大学；课程组成员中，理论课教师4人，理论课教师亦同时兼任专业实习、见习的教学；课程组成员多年从事现代汉语教学和研究工作，教学经验丰富，具有较强的分析问题和解决问题能力。总之，无论学历结构、职称结构、年龄结构、学缘结构还是在师资配备，授课经验、教研水平上，已形成梯队，具有一定的优势。现代汉语课程组是一支结构合理，年富力强，经验丰富，锐意进取的教学队伍。\n' +
					'                </td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td height="10"></td>\n' +
					'                </tr>\n' +
					'                <tr>\n' +
					'                  <td>&nbsp;</td>\n' +
					'                </tr>\n' +
					'              </tbody></table>',
				jspy: '<table width="650" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
					'                <tbody><tr>\n' +
					'                  <td height="60" align="center" class="title"><font color="#B70F0E">师资培养</font></td>\n' +
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
					'                  <td class="gray14">\n' +
					'<p>&nbsp;&nbsp;&nbsp; 走出去。现代汉语课程组鼓励课程组成员进行长期进修或者短期培训。近年来，课程组成员1人赴山西大学研究生院长期进修（为期1年）；4人10次参加国家及省级语言学研讨会，聆听国家语言学领域知名学者的现场报告，开阔视野，融入学界，提高了科研能力。<br>\n' +
					'&nbsp;&nbsp;&nbsp; 请进来。现代汉语课程组积极配合本系进行学术活动，先后邀请暨南大学文学院中文系教授、原中国修辞学会副会长兼秘书长黎运汉先生，山西大学语言学研究生导师温锁林博士，山西省现代汉语省级精品课程负责人、忻州师院中文系姚勤志教授到我系讲学，并与课程组成员座谈，对现代汉语课程建设及学术研究提出建议；交流教学科研经验，促进了教师从专科层次到本科水平的转变。<br>\n' +
					'&nbsp;&nbsp;&nbsp; 老带新。课程组坚持由教学经验丰富、责任心强、知识面宽、教学功底扎实的老教师对青年教师进行一帮一，在教学中，对他们严格要求，使青年教师很快通过了教学关，周国祥老师在全院青年教师赛讲中荣获二等奖，李仙娟老师教师教学评估成绩连年攀升，2007年被评为函授教育教学工作优秀教师。<br>\n' +
					'&nbsp;&nbsp;&nbsp; 新促老。青年教师知识新思维活且受过系统学术研究训练学术成果显著，课程组坚持定期开展学术研讨，以新促老，形成浓厚学术氛围，贺振江老师近两年在国内公开发行刊物上发表的学术论文4篇，其中《河津方言“圪”音词的词汇意义》在第三届晋方言国际学术会议上宣读，引起较大反响。<br>\n' +
					'&nbsp;&nbsp;&nbsp; 此外，课程组还合理利用建设经费为成员购买学界权威论著。有著名语言学家温端政、侯精一主编的《山西方言调查研究报告》；有山西大学方言学博士生导师乔全生主编的《洪洞方言研究》，乔全生主编的《山西方言重点研究丛书》，《山西方言重点研究丛书》（第二辑），《山西方言重点研究书》（第三辑）；有国家社科院方言研究所编写的《汉语方言调查字表》。支持课程组成员进行学术研究，三年来在国内外核心期刊上发表论文14篇，申报完成科研课题2项。</p>\n' +
					'<div align="center">\n' +
					'  <center>\n' +
					'  <table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
					'    <tbody><tr>\n' +
					'      <td width="100%" align="center"><img border="0" src="szpy1.jpg" width="500" height="375"></td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="100%" height="75" align="center">2009年10月20日，暨南大学文学院中文系教授、研究生导师、原中国修辞学会副会长兼秘书长黎运汉先生，应邀做主题为《语用与文化》的讲座。讲座结束后，黎教授又与课程组教师进行座谈，就学科前沿、课程建设、教材建设等教学科研中的相关问题提出了许多建设性的意见。</td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="100%" align="center"><img border="0" src="szpy2.jpg" width="500" height="349"></td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="100%" height="40" align="center">2007年8月，课程组成员蔡丽质、贺振江赴太原，参加由山西大学主办的“第三届晋方言国际学术研讨会”。</td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="100%" align="center"><img border="0" src="szpy3.jpg" width="500" height="266"></td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="100%" height="50" align="center">2009年8月，课程组成员晁爱叶、周国祥赴连云港，参加由教育部语言文字应用研究所主办的“第六届全国语言文字应用学术研讨会”。</td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="100%" align="center"><img border="0" src="szpy4.jpg" width="500" height="349"></td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="100%" height="50" align="center">2007年7月，课程组成员蔡丽质、周国祥、贺振江赴太原，参加由山西省社会科学院语言研究所主办的“首届汉语语汇学术研讨会”。</td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="100%" align="center"><img border="0" src="szpy5.jpg" width="500" height="349"></td>\n' +
					'    </tr>\n' +
					'    <tr>\n' +
					'      <td width="100%" height="50" align="center">课程组成员参加各种学术会议的会议证</td>\n' +
					'    </tr>\n' +
					'  </tbody></table>\n' +
					'  </center>\n' +
					'</div><p></p></td>\n' +
					'                </tr>\n' +
					'              </tbody></table>'
			}
		}
	}
}

