package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import xuqiu.spring.Mapper.studentPersonMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Student;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;

@Controller
public class studentPerson {
    @Autowired
    private studentPersonMapper studentPersonMapper;

    @RequestMapping(value = "/studentPersonQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result studentPersonQuery(HttpSession httpSession){
        Admin student = (Admin) httpSession.getAttribute("user");
        if(student!=null){
            Student student1 = new Student();
            student1.setUsername(student.getUsername());
            student1=studentPersonMapper.query(student1);
            return new Result(200,"",student1);
        }
         return new Result(403,"登录过期","");
    }


    @RequestMapping(value = "/studentPersonUpdate",method = RequestMethod.POST)
    @ResponseBody
    public Result studentPersonUpdate(@RequestBody Student student,HttpSession httpSession){
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

            Admin student1= (Admin) httpSession.getAttribute("user");
          student.setUsername(student1.getUsername());

          if ("".equals(student.getPassword())) {
              student.setPassword(student1.getPassword());
          }

        int res = studentPersonMapper.edit(student);
        if (res==1) {
            return new Result(200,"修改成功","");
        } else {
            return new Result(400,"修改失败","");
        }

    }
}
