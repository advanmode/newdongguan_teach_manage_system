package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import xuqiu.spring.Mapper.JstdMapper;
import xuqiu.spring.Mapper.JxdgMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Jstd;
import xuqiu.spring.Pojo.Jxdg;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class JstdList {
    @Autowired
    private JstdMapper jstdMapper;

    @RequestMapping(value = "/JxtdQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result JxtdQuery(HttpSession httpSession){
        List<Jstd> jstdList = jstdMapper.query();
        return new Result(200,String.valueOf(jstdList.size()),jstdList.get(0));
    }

    @RequestMapping(value = "/JxtdEdit",method = RequestMethod.POST)
    @ResponseBody
    public Result JxtdEdit(@RequestBody Jstd jstd, HttpSession httpSession){
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = jstdMapper.edit(jstd);
        if (res==1) {
            return new Result(200,"","");
        } else {
            return new Result(400,"更新失败","");
        }
    }


}

