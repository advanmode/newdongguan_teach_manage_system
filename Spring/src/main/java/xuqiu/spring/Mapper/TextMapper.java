package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Text;

import java.util.List;
/**
 * @author 19wgh
 */
@Mapper
@Repository
public interface TextMapper {

    int insert(Text text);

    int delete(Text text);

    List<Text> query();

    int edit(Text text);

}