package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import xuqiu.spring.Mapper.JxdgMapper;

import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Jxdg;
import xuqiu.spring.result.Result;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class JxdgList {
    @Autowired
    private JxdgMapper jxdgMapper;

    @RequestMapping(value = "/JxdgListQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result JxdgListQuery(HttpSession httpSession){
        List<Jxdg> jxdgList = jxdgMapper.query();
        return new Result(200,String.valueOf(jxdgList.size()),jxdgList);
    }

    @RequestMapping(value = "/JxdgDelete",method = RequestMethod.POST)
    @ResponseBody
    public Result JxdgDelete(@RequestBody Jxdg jxdg,HttpSession httpSession){
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = jxdgMapper.delete(jxdg);
        if (res==1) {
            return new Result(200,"删除成功","");
        } else {
            return new Result(400,"删除失败","");
        }
    }

    @RequestMapping(value = "/JxdgAdd",method = RequestMethod.POST)
    @ResponseBody
    public Result JxdgAdd(@RequestBody Jxdg jxdg,HttpSession httpSession){
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = jxdgMapper.insert(jxdg);
        if (res==1) {
            return new Result(200,"成功","");
        } else {
            return new Result(400,"失败","");
        }
    }


}

