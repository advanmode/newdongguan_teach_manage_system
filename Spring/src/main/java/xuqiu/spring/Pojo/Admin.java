package xuqiu.spring.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * @author 150149
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class Admin {

    private String username;
    private String password;
    private String name;
    private String sex;
    private String birthday;
    private String usertype;
    private String email;
    private String phone;
    private String yanzheng;

}
