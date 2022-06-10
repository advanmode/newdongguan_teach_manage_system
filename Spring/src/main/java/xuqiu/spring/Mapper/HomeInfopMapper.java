package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Course;
import xuqiu.spring.Pojo.HomeInfo;

import java.util.List;


@Mapper
@Repository
public interface HomeInfopMapper {

    List<HomeInfo> query();

    int edit(HomeInfo homeInfo);

}
