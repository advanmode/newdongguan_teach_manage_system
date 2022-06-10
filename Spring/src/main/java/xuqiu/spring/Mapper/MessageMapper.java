package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Course;
import xuqiu.spring.Pojo.Message;

import java.util.List;

@Mapper
@Repository
public interface MessageMapper {
    int insert(Message message);

    int delete(Message message);

    List<Message> query();

//    int edit(Course course);
}
