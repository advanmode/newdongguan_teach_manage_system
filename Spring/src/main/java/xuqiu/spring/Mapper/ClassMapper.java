package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Class;

import java.util.List;

@Mapper
@Repository
public interface ClassMapper {

    int insert(Class cla);

    int delete(Class cla);

    List<Class> query();

    int edit(Class cla);
}
