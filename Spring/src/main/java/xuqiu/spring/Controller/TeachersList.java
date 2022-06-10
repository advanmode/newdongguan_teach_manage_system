package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import xuqiu.spring.Mapper.TeachersMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Teacher;
import xuqiu.spring.Pojo.Teachers;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class TeachersList {
    @Autowired
    private TeachersMapper teachersMapper;

    @RequestMapping(value = "/TeachersQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result StudentQuery(HttpSession httpSession) {
        List<Teachers> teacherList= teachersMapper.query();
        return new Result(200,String.valueOf(teacherList.size()),teacherList);
    }

    @RequestMapping(value = "/TeachersDelete",method = RequestMethod.POST)
    @ResponseBody
    public Result StudentDelete(@RequestBody Teachers teachers, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = teachersMapper.delete(teachers);
        if (res==1) {
            return new Result(200,"删除成功","");
        } else {
            return new Result(400,"删除失败","");
        }
    }

    @RequestMapping(value = "/TeachersAdd",method = RequestMethod.POST)
    @ResponseBody
    public Result TeacherAdd(@RequestBody Teachers teachers, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = teachersMapper.insert(teachers);
        if (res==1) {
            return new Result(200,"添加成功","");
        } else {
            return new Result(400,"添加失败","");
        }
    }

//    @RequestMapping(value = "/TeacherPassword",method = RequestMethod.POST)
//    @ResponseBody
//    public Result StudentPassword(@RequestBody Teacher teacher, HttpSession httpSession) {
//        List<Teacher> teacherList = teacherMapper.query();
//        Teacher teacher2=null;
//        for (Teacher teacher1: teacherList) {
//            if (teacher1.getUsername().equals(teacher.getUsername())) {
//                teacher2=teacher1;
//                break;
//            }
//        }
//        if (teacher2==null) {
//            return new Result(400,"该用户不存在","");
//        }
//        teacher2.setPassword(teacher.getPassword());//重置的密码为传入的student的password
//        int res = teacherMapper.edit(teacher2);
//        if (res==1) {
//            return new Result(200,"编辑成功","");
//        } else {
//            return new Result(400,"编辑失败","");
//        }
//    }
}
