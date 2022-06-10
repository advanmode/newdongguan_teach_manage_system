package xuqiu.spring.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import xuqiu.spring.Mapper.AdminMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * @author 150149
 */
@Controller
public class AdminList {

    @Autowired
    private AdminMapper adminMapper;

    @RequestMapping(value = "/AdminListQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result AdminListQuery(HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        List<Admin> adminList = adminMapper.query();
        for (Admin admin: adminList) {
            if ("超级管理员".equals(admin.getUsertype())) {
                adminList.remove(admin);
                break;
            }
        }
        return new Result(200,String.valueOf(adminList.size()),adminList);
    }

    @RequestMapping(value = "/adminDelete",method = RequestMethod.POST)
    @ResponseBody
    public Result AdminListDelete(@RequestBody Admin admin, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = adminMapper.delete(admin);
        if (res==1) {
            return new Result(200,"删除成功","");
        } else {
            return new Result(400,"删除失败","");
        }
    }

    @RequestMapping(value = "/adminAdd",method = RequestMethod.POST)
    @ResponseBody
    public Result AdminAdd(@RequestBody Admin admin, HttpSession httpSession) {

        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        admin.setUsertype("二级管理员");
        int res = adminMapper.insert(admin);
        if (res==1) {
            return new Result(200,"添加成功","");
        } else {
            return new Result(400,"添加失败","");
        }
    }

    @RequestMapping(value = "/adminPassword",method = RequestMethod.POST)
    @ResponseBody
    public Result AdminPassword(@RequestBody Admin admin, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        List<Admin> adminList = adminMapper.query();
        Admin admin2=null;
        for (Admin admin1: adminList) {
            if (admin1.getUsername().equals(admin.getUsername())) {
                admin2=admin1;
                break;
            }
        }
        if (admin2==null) {
            return new Result(400,"该用户不存在","");
        }
        admin2.setPassword("e10adc3949ba59abbe56e057f20f883e");
        int res = adminMapper.edit(admin2);
        if (res==1) {
            return new Result(200,"编辑成功","");
        } else {
            return new Result(400,"编辑失败","");
        }
    }
}
