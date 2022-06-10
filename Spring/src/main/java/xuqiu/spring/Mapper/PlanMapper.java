package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Message;
import xuqiu.spring.Pojo.Plan;

import java.util.List;

@Mapper
@Repository
public interface PlanMapper {
    int insert(Plan plan);

    int delete(Plan plan);

    List<Plan> query();

//    int edit(Course course);
}
