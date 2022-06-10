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
public class Text {
    private int id;
    private String title;
    private String date;
    private String type;
    private String text;
}