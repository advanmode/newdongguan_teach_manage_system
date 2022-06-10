package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Student;
import xuqiu.spring.Pojo.Teacher;


@Mapper
@Repository
public interface teacherPersonMapper {

   Teacher query(Teacher teacher);

    int edit(Teacher teacher);

}
