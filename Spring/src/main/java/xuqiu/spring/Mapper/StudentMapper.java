package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Admin;
import xuqiu.spring.Pojo.Student;

import java.util.List;

@Mapper
@Repository
public interface StudentMapper {

    int insert(Student student);

    int delete(Student student);

    List<Student> query();

    int edit(Student student);

}
