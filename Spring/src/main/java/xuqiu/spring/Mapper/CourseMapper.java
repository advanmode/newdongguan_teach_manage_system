package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Course;

import java.util.List;
/**
 * @author 19wgh
 */
@Mapper
@Repository
public interface CourseMapper {

    int insert(Course course);

    int delete(Course course);

    List<Course> query();

    int edit(Course course);

}
