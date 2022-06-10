package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Teacher;

import java.util.List;

@Mapper
@Repository
public interface TeacherMapper {

    int insert(Teacher teacher);

    int delete(Teacher teacher);

    List<Teacher> query();

    int edit(Teacher teacher);

}
