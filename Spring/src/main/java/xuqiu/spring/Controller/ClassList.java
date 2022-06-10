package xuqiu.spring.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import xuqiu.spring.Mapper.ClassMapper;
import xuqiu.spring.Mapper.ClassMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Class;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class ClassList {

    @Autowired
    private ClassMapper classMapper;

    @RequestMapping(value = "/ClassListQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result ClassListQuery(HttpSession httpSession) {
        List<Class> classList = classMapper.query();
        return new Result(200,String.valueOf(classList.size()),classList);
    }

    @RequestMapping(value = "/ClassDelete",method = RequestMethod.POST)
    @ResponseBody
    public Result ClassListDelete(@RequestBody Class cla, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = classMapper.delete(cla);
        if (res==1) {
            return new Result(200,"删除成功","");
        } else {
            return new Result(400,"删除失败","");
        }
    }

    @RequestMapping(value = "/ClassAdd",method = RequestMethod.POST)
    @ResponseBody
    public Result ClassAdd(@RequestBody Class cla, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = classMapper.insert(cla);
        if (res==1) {
            return new Result(200,"添加成功","");
        } else {
            return new Result(400,"添加失败","");
        }
    }


}
