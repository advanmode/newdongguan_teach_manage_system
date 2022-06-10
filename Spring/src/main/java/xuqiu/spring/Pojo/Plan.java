package xuqiu.spring.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class Plan {
    private int id;
    private String className;
    private String classNo;
    private String course;
    private String teacher;
    private String teacherNo;
}
