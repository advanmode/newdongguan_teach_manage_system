package xuqiu.spring.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class Student {
   private String  username;
    private String name;
    private String sex;
    private String birthday;
    private String hasClass;
    private String comeFrom;
    private String email;
    private String phone;
    private String password;
}
