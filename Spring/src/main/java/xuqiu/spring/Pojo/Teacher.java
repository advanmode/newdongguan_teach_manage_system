package xuqiu.spring.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class Teacher {
    private String username;
    private String name;
    private String sex;
    private String birthday;
    private String type;
    private String profess;
    private String degree;
    private String usertype;
    private String email;
    private String phone;
    private String password;
    private String comeFrom;
}
