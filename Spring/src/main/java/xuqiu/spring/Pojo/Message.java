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
public class Message {
    private String id;
    private String title;
    private String text;
    private String sender;
    private Date time;
}
