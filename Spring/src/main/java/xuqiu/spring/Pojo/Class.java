package xuqiu.spring.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class Class {

    private int id;
    private String name;
    private String grade;
    private String profess;
    private String course;
    private String no;

}
