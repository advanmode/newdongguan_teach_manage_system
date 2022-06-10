package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import xuqiu.spring.Mapper.MessageMapper;
import xuqiu.spring.Mapper.StudentMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Message;
import xuqiu.spring.Pojo.Page;
import xuqiu.spring.Pojo.Student;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;
import java.util.Calendar;
import java.util.List;
@Controller
public class MessageList {
    @Autowired
    private MessageMapper messageMapper;

    @RequestMapping(value = "/MessageListQuery",method = RequestMethod.POST)
    @ResponseBody
    public Result StudentQuery(@RequestBody Page page, HttpSession httpSession) {
        List<Message> studentList= messageMapper.query();
        return new Result(200,String.valueOf(studentList.size()),studentList);
    }

    @RequestMapping(value = "/MessageListDelete",method = RequestMethod.POST)
    @ResponseBody
    public Result StudentDelete(@RequestBody Message message, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = messageMapper.delete(message);
        if (res==1) {
            return new Result(200,"删除成功","");
        } else {
            return new Result(400,"删除失败","");
        }
    }

    @RequestMapping(value = "/MessageListSend",method = RequestMethod.POST)
    @ResponseBody
    public Result StudentAdd(@RequestBody Message message, HttpSession httpSession) {

        message.setTime(Calendar.getInstance().getTime());
        int res = messageMapper.insert(message);
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

