package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import xuqiu.spring.Mapper.HomeInfopMapper;
import xuqiu.spring.Pojo.HomeInfo;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.List;

@Controller
public class HomeList {
    @Autowired
    private HomeInfopMapper homeInfopMapper;

    @RequestMapping(value = "/HomeQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result homeQuery(HttpSession httpSession) {
        List<HomeInfo> homeInfoList = homeInfopMapper.query();
        return new Result(200,String.valueOf(homeInfoList.size()), homeInfoList.get(0));
    }

    @RequestMapping(value = "/HomeEdit",method = RequestMethod.POST)
    @ResponseBody
    public Result homeEdit(@RequestBody HomeInfo homeInfo, HttpSession httpSession) {
        int res = homeInfopMapper.edit(homeInfo);
        if (res==1) {
            return new Result(200,"修改成功","");
        } else {
            return new Result(400,"修改失败","");
        }
    }

    @RequestMapping(value = "/fzrUpload",method = RequestMethod.POST)
    @ResponseBody
    public Result fzrImageUpload(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "fzr.jpg";
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

    @RequestMapping(value = "/kcjjUpload",method = RequestMethod.POST)
    @ResponseBody
    public Result kcjjImageUpload(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "kcjj.jpg";
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

    @RequestMapping(value = "/kctsUpload",method = RequestMethod.POST)
    @ResponseBody
    public Result kctsImageUpload(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "kcts.jpg";
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

    @RequestMapping(value = "/kcdtUpload",method = RequestMethod.POST)
    @ResponseBody
    public Result kcdtImageUpload(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "kcdt.jpg";
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

    @RequestMapping(value = "/jxtdUpload",method = RequestMethod.POST)
    @ResponseBody
    public Result jxtdImageUpload(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "jxtd.jpg";
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

    @RequestMapping(value = "/lun1Upload",method = RequestMethod.POST)
    @ResponseBody
    public Result lun1ImageUpload(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "lun1.jpg";
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

    @RequestMapping(value = "/lun2Upload",method = RequestMethod.POST)
    @ResponseBody
    public Result lun2ImageUpload(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "lun2.jpg";
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

    @RequestMapping(value = "/lun3Upload",method = RequestMethod.POST)
    @ResponseBody
    public Result lun3ImageUpload(MultipartFile file, HttpServletRequest request) throws Exception {

        String s = "E:/visual studio/项目储存/需求分析/Spring/img/";
        //3.给文件重新设置一个名字
        //后缀

        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        if (!"jpg".toUpperCase().contains(suffix.toUpperCase())) {
            return new Result(400,"只支持jpg图片格式","");
        }

        String newFileName= "lun3.jpg";
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

