package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Student;


@Mapper
@Repository
public interface studentPersonMapper {

   Student query(Student student);

    int edit(Student student);

}
