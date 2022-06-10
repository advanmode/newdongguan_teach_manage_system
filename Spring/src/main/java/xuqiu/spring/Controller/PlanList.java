package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import xuqiu.spring.Mapper.MessageMapper;
import xuqiu.spring.Mapper.PlanMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Message;
import xuqiu.spring.Pojo.Plan;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class PlanList {
    @Autowired
    private PlanMapper planMapper;

    @RequestMapping(value = "/PlanListQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result StudentQuery(HttpSession httpSession) {
        List<Plan> studentList= planMapper.query();
        return new Result(200,String.valueOf(studentList.size()),studentList);
    }

    @RequestMapping(value = "/PlanDelete",method = RequestMethod.POST)
    @ResponseBody
    public Result StudentDelete(@RequestBody Plan plan, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = planMapper.delete(plan);
        if (res==1) {
            return new Result(200,"删除成功","");
        } else {
            return new Result(400,"删除失败","");
        }
    }

    @RequestMapping(value = "/PlanAdd",method = RequestMethod.POST)
    @ResponseBody
    public Result StudentAdd(@RequestBody Plan plan, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = planMapper.insert(plan);
        if (res==1) {
            return new Result(200,"添加成功","");
        } else {
            return new Result(400,"添加失败","");
        }
    }

//    @RequestMapping(value = "/StudentPassword",method = RequestMethod.POST)
//    @ResponseBody
//    public Result StudentPassword(@RequestBody Student student, HttpSession httpSession) {
//        List<Student> studentList = studentMapper.query();
//        Student student2=null;
//        for (Student student1: studentList) {
//            if (student1.getUsername().equals(student.getUsername())) {
//                student2=student1;
//                break;
//            }
//        }
//        if (student2==null) {
//            return new Result(400,"该用户不存在","");
//        }
//        student2.setPassword(student.getPassword());//重置的密码为传入的student的password
//        int res = studentMapper.edit(student2);
//        if (res==1) {
//            return new Result(200,"编辑成功","");
//        } else {
//            return new Result(400,"编辑失败","");
//        }
//    }
}

