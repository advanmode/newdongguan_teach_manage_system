package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import xuqiu.spring.Mapper.TextMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Text;
import xuqiu.spring.result.Result;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

/**
 * @author 19wgh
 */
@Controller
public class TextList {

    @Autowired
    private TextMapper textMapper;

    @RequestMapping(value = "/TextQuery",method = RequestMethod.GET)
    @ResponseBody
    public Result TextQuery(HttpSession httpSession) {
        List<Text> textList = textMapper.query();
        return new Result(200,String.valueOf(textList.size()),textList);
    }

    @RequestMapping(value = "/TextListQuery",method = RequestMethod.POST)
    @ResponseBody
    public Result TextListQuery(@RequestBody Text text, HttpSession httpSession) {

        List<Text> textList = textMapper.query();
        List<Text> remove = new ArrayList<>();
        for (Text text1:textList) {
            if (!text.getType().equals(text1.getType())) {
                remove.add(text1);
            }
        }
        textList.removeAll(remove);
        return new Result(200,String.valueOf(textList.size()),textList);
    }

    @RequestMapping(value = "/TextDelete",method = RequestMethod.POST)
    @ResponseBody
    public Result TextDelete(@RequestBody Text text, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        int res = textMapper.delete(text);
        if (res==1) {
            return new Result(200,"删除成功","");
        } else {
            return new Result(400,"删除失败","");
        }
    }

    @RequestMapping(value = "/TextAdd",method = RequestMethod.POST)
    @ResponseBody
    public Result TextAdd(@RequestBody Text text, HttpSession httpSession) {
        if (!(httpSession.getAttribute("user") instanceof Admin)) {
            return new Result(403,"登录过期，请重新登录","");
        }

        SimpleDateFormat slf = new SimpleDateFormat("yyyy-MM-dd");
        text.setDate(slf.format(Calendar.getInstance().getTime()));
        int res = textMapper.insert(text);
        if (res==1) {
            return new Result(200,"添加成功","");
        } else {
            return new Result(400,"添加失败","");
        }
    }



}
