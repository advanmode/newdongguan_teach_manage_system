package xuqiu.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import xuqiu.spring.Mapper.AdminMapper;
import xuqiu.spring.Mapper.StudentMapper;
import xuqiu.spring.Mapper.TeacherMapper;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Student;
import xuqiu.spring.Pojo.Teacher;
import xuqiu.spring.result.Result;

import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.*;

@RestController
public class LoginController {

    @Autowired
    AdminMapper adminMapper;

    @Autowired
    TeacherMapper teacherMapper;

    @Autowired
    StudentMapper studentMapper;

    @PostMapping("/login")
    @ResponseBody
    public Result userLogin(@RequestBody Admin admin,HttpSession httpSession){
        Admin user = adminMapper.queryTheUser(admin.getUsername());
        List<Teacher> teachers = teacherMapper.query();
        List<Student> studentList = studentMapper.query();
        List<Admin> adminList = new ArrayList<>();
        for (Teacher teacher:teachers) {
            Admin admin1 = new Admin();
            admin1.setUsername(teacher.getUsername());
            admin1.setPassword(teacher.getPassword());
            admin1.setUsertype("教师");
            adminList.add(admin1);
        }
        for (Student student:studentList) {
            Admin admin1 = new Admin();
            admin1.setUsername(student.getUsername());
            admin1.setPassword(student.getPassword());
            admin1.setUsertype("学生");
            adminList.add(admin1);
        }
        adminList.add(user);
        for (Admin admin1:adminList) {
            if (admin1==null) {
                continue;
            }
            if (admin1.getUsername().equals(admin.getUsername())) {
                if (admin1.getPassword().equals(admin.getPassword())) {
                    httpSession.setAttribute("user",admin1);
                    httpSession.setMaxInactiveInterval(3600*24*7);
                    admin1.setPassword(null);
                    return new Result(200,"success",admin1);
                } else {
                    return new Result(400,"","");
                }
            }
        }
        return new Result(400,"success",user);
    }

    private static Map<String,String> yanzheng = new HashMap<>();

    @PostMapping("/FindPassword")
    @ResponseBody
    public Result findPassword(@RequestBody Admin admin,HttpSession httpSession) {
        if (!yanzheng.containsKey(admin.getUsername())) {
            return new Result(400,"还未发送验证码","");
        }
        
        String yanzhengma = yanzheng.get(admin.getUsername());
        if (admin.getYanzheng().equals(yanzhengma)) {
            yanzheng.remove(admin.getUsername());
            Admin user = adminMapper.queryTheUser(admin.getUsername());
            List<Teacher> teachers = teacherMapper.query();
            List<Student> studentList = studentMapper.query();
            List<Admin> adminList = new ArrayList<>();
            if (user!=null) {
                user.setPassword(admin.getPassword());
                adminMapper.edit(user);
                return new Result(200,"修改成功","");
            }
            for (Teacher teacher:teachers) {
                if (teacher.getUsername().equals(admin.getUsername())) {
                    teacher.setPassword(admin.getPassword());
                    teacherMapper.edit(teacher);
                    return new Result(200,"修改成功","");
                }
            }
            for (Student student:studentList) {
                if (student.getUsername().equals(admin.getUsername())) {
                    student.setPassword(admin.getPassword());
                    studentMapper.edit(student);
                    return new Result(200,"修改成功","");
                }
            }
            return new Result(400,"用户未找到","");
        } else {
            return new Result(400,"验证码错误","");
        }
    }

    @PostMapping("/FindPasswordSendEmail")
    @ResponseBody
    public Result findPasswordSendEmail(@RequestBody Admin admin,HttpSession httpSession) {
        Admin user = adminMapper.queryTheUser(admin.getUsername());
        List<Teacher> teachers = teacherMapper.query();
        List<Student> studentList = studentMapper.query();
        List<Admin> adminList = new ArrayList<>();
        for (Teacher teacher:teachers) {
            Admin admin1 = new Admin();
            admin1.setUsername(teacher.getUsername());
            admin1.setPassword(teacher.getPassword());
            admin1.setUsertype("教师");
            adminList.add(admin1);
        }
        for (Student student:studentList) {
            Admin admin1 = new Admin();
            admin1.setUsername(student.getUsername());
            admin1.setPassword(student.getPassword());
            admin1.setUsertype("学生");
            adminList.add(admin1);
        }
        adminList.add(user);
        for (Admin admin1:adminList) {
            if (admin1==null) {
                continue;
            }
            if (admin1.getUsername().equals(admin.getUsername())) {
                Random random = new Random(System.currentTimeMillis());
                int num = random.nextInt(10000) + 1000;
                yanzheng.put(admin.getUsername(),String.valueOf(num));

                sendEmail(admin1.getEmail(),String.valueOf(num));
                return new Result(200,"已发送验证码","");
            }
        }

        return new Result(400,"用户名不存在","");
    }

    private static void sendEmail(String email,String yanzheng) {
        try {
            StringBuffer sb = new StringBuffer();
            String info = URLEncoder.encode("新东莞账号验证码","UTF-8");
            String info2 = URLEncoder.encode("验证码为【"+ yanzheng +"】","UTF-8");
            URL url = new URL("http://api.wer.plus/api/qqmail" + "?me=1802796278@qq.com&key=agoarqnhyhmscigh&to=" + email + "&title=" +  info + "&text=" + info2);
            BufferedReader reader=null;
            HttpURLConnection urlConnection = (HttpURLConnection)url.openConnection();
            urlConnection.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3775.400 QQBrowser/10.6.4208.400"); //防止报403错误。
            //获取服务器响应代码
            int responsecode=urlConnection.getResponseCode();
            if(responsecode==200){
                //得到输入流，即获得了网页的内容
                reader=new BufferedReader(new InputStreamReader(urlConnection.getInputStream(),"utf-8"));
                String line="";
                while((line=reader.readLine())!=null){
                    sb.append(line);
                }
            }
            urlConnection.disconnect();
        }catch (Exception e) {
            e.printStackTrace();
        }
    }
}
