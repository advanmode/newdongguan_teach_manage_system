package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import xuqiu.spring.Mapper.*;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Student;
import xuqiu.spring.Pojo.Teacher;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class TeacherPerson {
    @Autowired
    private teacherPersonMapper teacherPersonMapper;

    @Autowired
    private AdminMapper adminMapper;

    @Autowired
    private TeacherMapper teacherMapper;

    @Autowired
    private StudentMapper studentMapper;

    @RequestMapping(value = "/teacherPersonQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result studentPersonQuery(HttpSession httpSession){
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        Admin admin = (Admin) httpSession.getAttribute("user");
        if ("超级管理员".equals(admin.getUsertype())) {
            List<Admin> adminList = adminMapper.query();
            for (Admin admin1:adminList) {
                if (admin1.getUsername().equals(admin.getUsername())) {
                    admin1.setPassword("");
                    return new Result(200,"",admin1);
                }
            }
        } else if ("二级管理员".equals(admin.getUsertype())) {
            List<Admin> adminList = adminMapper.query();
            for (Admin admin1:adminList) {
                if (admin1.getUsername().equals(admin.getUsername())) {
                    admin1.setPassword("");
                    return new Result(200,"",admin1);
                }
            }
        } else if ("教师".equals(admin.getUsertype())) {
            List<Teacher> teachers = teacherMapper.query();
            for (Teacher teacher:teachers) {
                if (teacher.getUsername().equals(admin.getUsername())) {
                    teacher.setPassword("");
                    return new Result(200,"",teacher);
                }
            }
        } else if ("学生".equals(admin.getUsertype())) {
            List<Student> teachers = studentMapper.query();
            for (Student teacher:teachers) {
                if (teacher.getUsername().equals(admin.getUsername())) {
                    teacher.setPassword("");
                    return new Result(200,"",teacher);
                }
            }
        }

        return new Result(400,"找不到该用户","");
    }


    @RequestMapping(value = "/teacherPersonUpdate",method = RequestMethod.POST)
    @ResponseBody
    public Result teacherPersonUpdate(@RequestBody Teacher teacher, HttpSession httpSession){
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        Admin admin = (Admin) httpSession.getAttribute("user");
        if ("超级管理员".equals(admin.getUsertype())) {
            List<Admin> adminList = adminMapper.query();
            for (Admin admin1:adminList) {
                if (admin1.getUsername().equals(admin.getUsername())) {
                    admin1.setName(teacher.getName());
                    admin1.setSex(teacher.getSex());
                    admin1.setBirthday(teacher.getBirthday());
                    admin1.setEmail(teacher.getEmail());
                    admin1.setPhone(teacher.getPhone());
                    if (!"".equals(teacher.getPassword())) {
                        admin1.setPassword(teacher.getPassword());
                    }
                    adminMapper.edit(admin1);
                    return new Result(200,"","");
                }
            }
        } else if ("二级管理员".equals(admin.getUsertype())) {
            List<Admin> adminList = adminMapper.query();
            for (Admin admin1:adminList) {
                if (admin1.getUsername().equals(admin.getUsername())) {
                    admin1.setName(teacher.getName());
                    admin1.setSex(teacher.getSex());
                    admin1.setBirthday(teacher.getBirthday());
                    admin1.setEmail(teacher.getEmail());
                    admin1.setPhone(teacher.getPhone());
                    if (!"".equals(teacher.getPassword())) {
                        admin1.setPassword(teacher.getPassword());
                    }
                    adminMapper.edit(admin1);
                    return new Result(200,"","");
                }
            }
        } else if ("教师".equals(admin.getUsertype())) {
            List<Teacher> teachers = teacherMapper.query();
            for (Teacher teacher1:teachers) {
                if (teacher1.getUsername().equals(admin.getUsername())) {
                    teacher1.setName(teacher.getName());
                    teacher1.setSex(teacher.getSex());
                    teacher1.setBirthday(teacher.getBirthday());
                    teacher1.setEmail(teacher.getEmail());
                    teacher1.setPhone(teacher.getPhone());
                    if (!"".equals(teacher.getPassword())) {
                        teacher1.setPassword(teacher.getPassword());
                    }
                    teacherMapper.edit(teacher1);
                    return new Result(200,"","");
                }
            }
        } else if ("学生".equals(admin.getUsertype())) {
            List<Student> teachers = studentMapper.query();
            for (Student teacher1:teachers) {
                if (teacher1.getUsername().equals(admin.getUsername())) {
                    teacher1.setName(teacher.getName());
                    teacher1.setSex(teacher.getSex());
                    teacher1.setBirthday(teacher.getBirthday());
                    teacher1.setEmail(teacher.getEmail());
                    teacher1.setPhone(teacher.getPhone());
                    if (!"".equals(teacher.getPassword())) {
                        teacher1.setPassword(teacher.getPassword());
                    }
                    studentMapper.edit(teacher1);
                    return new Result(200,"","");
                }
            }
        }

        return new Result(400,"找不到该用户","");

    }
}
