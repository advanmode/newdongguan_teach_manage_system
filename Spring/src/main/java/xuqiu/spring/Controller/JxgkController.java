package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import xuqiu.spring.Mapper.ContentMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Content;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;

@RestController
public class JxgkController {

    @Autowired
    ContentMapper contentMapper;

    @PostMapping("/JxgkUpdate")
    public Result jxgkUpdate(@RequestBody Content content, HttpSession httpSession){
        Admin user = (Admin)httpSession.getAttribute("user");
        if(user==null)return new Result(400,"未登录，无法操作","");
        String usertype = user.getUsertype();
        int success = contentMapper.updateContent(content);
        if(success>0){
            return new Result(200,"更新成功","");
        } else {
            return new Result(400,"更新失败","");
        }
    }


    @GetMapping("/JxgkQuery")
    public Result jxgkQuery(){
        return new Result(200,"success",contentMapper.queryContent());
    }
}
