package xuqiu.spring.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class Score {
    private int id;
    private String year;
    private String claz;
    private String course;
    private String teacher;
    private String username;
    private String name;
    private String normalscore;
    private String midscore;
    private String finalscore;
    private String bigworkscore;
    private String totalscore;
}
