package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import xuqiu.spring.Mapper.CourseMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Course;
import xuqiu.spring.result.Result;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * @author 19wgh
 */
@Controller
public class CourseList {

    @Autowired
    private CourseMapper courseMapper;

    @RequestMapping(value = "/CourseListQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result CourseListQuery(HttpSession httpSession) {
        List<Course> courseList = courseMapper.query();
        return new Result(200,String.valueOf(courseList.size()),courseList);
    }

    @RequestMapping(value = "/CourseDelete",method = RequestMethod.POST)
    @ResponseBody
    public Result CourseDelete(@RequestBody Course course, HttpSession httpSession) {

        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = courseMapper.delete(course);
        if (res==1) {
            return new Result(200,"删除成功","");
        } else {
            return new Result(400,"删除失败","");
        }
    }

    @RequestMapping(value = "/CourseAdd",method = RequestMethod.POST)
    @ResponseBody
    public Result CourseAdd(@RequestBody Course course, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = courseMapper.insert(course);
        if (res==1) {
            return new Result(200,"添加成功","");
        } else {
            return new Result(400,"添加失败","");
        }
    }
}
