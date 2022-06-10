package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Plan;
import xuqiu.spring.Pojo.Score;

import java.util.List;

@Mapper
@Repository
public interface ScoreMapper {
    int insert(Score score);

    int delete(Score score);

    List<Score> query();

//    int edit(Course course);
}
