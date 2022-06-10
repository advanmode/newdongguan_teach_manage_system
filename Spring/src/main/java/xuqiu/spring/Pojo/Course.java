package xuqiu.spring.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;


/**
 * @author 19wgh
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class Course {
    private int id;
    private String name;
    private String score;
    private String hour;
    private String leadername;
    private String leadereducation;
    private String leaderdegree;
}