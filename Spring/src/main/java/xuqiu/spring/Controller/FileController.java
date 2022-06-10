package xuqiu.spring.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.HtmlUtils;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.Calendar;
import java.util.Objects;

@Controller
public class FileController {

    @RequestMapping(value = "/FileUpload",method = RequestMethod.POST)
    @ResponseBody
    public Result documentUpload(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀
        int random=(int)(Math.random()*100000000+1);

        String newFileName= Integer.toString(random)  + "-" + file.getOriginalFilename();
        //4.创建这个新文件
        File newFile = new File(s + newFileName);

        try {
            file.transferTo(newFile);
            //协议 :// ip地址 ：端口号 / 文件目录(/images/2020/03/15/xxx.jpg)
            return new Result(200,"上传成功",newFileName);
        } catch (IOException en) {
            return new Result(500,en.toString(),"");
        }
    }

    @RequestMapping(value = "/ImageUpload1",method = RequestMethod.POST)
    @ResponseBody
    public Result imageUpload1(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "QQerweima.jpg" ;
        //4.创建这个新文件
        File newFile = new File(s + newFileName);

        try {
            file.transferTo(newFile);
            //协议 :// ip地址 ：端口号 / 文件目录(/images/2020/03/15/xxx.jpg)
            return new Result(200,"上传成功",newFileName);
        } catch (IOException en) {
            return new Result(500,en.toString(),"");
        }
    }

    @RequestMapping(value = "/ImageUpload2",method = RequestMethod.POST)
    @ResponseBody
    public Result imageUpload2(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "WeiXinerweima.jpg";
        //4.创建这个新文件
        File newFile = new File(s + newFileName);

        try {
            file.transferTo(newFile);
            //协议 :// ip地址 ：端口号 / 文件目录(/images/2020/03/15/xxx.jpg)
            return new Result(200,"上传成功",newFileName);
        } catch (IOException en) {
            return new Result(500,en.toString(),"");
        }
    }

}
