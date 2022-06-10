package xuqiu.spring.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class Teachers {
    private String name;
    private String sex;
    private String birthday;
    private String type;
    private String profess;
    private String degree;
    private String group;
    private String work;
    private String photo;
}
