package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Teacher;
import xuqiu.spring.Pojo.Teachers;

import java.util.List;

@Mapper
@Repository
public interface TeachersMapper {

    int insert(Teachers teachers);

    int delete(Teachers teachers);

    List<Teachers> query();

    int edit(Teachers teachers);

}
