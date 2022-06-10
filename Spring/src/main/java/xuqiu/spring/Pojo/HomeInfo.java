package xuqiu.spring.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;



@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class HomeInfo {
    private String fzr;
    private String kcjj;
    private String kcts;
    private String kcdt;
    private String jxtd;
}
