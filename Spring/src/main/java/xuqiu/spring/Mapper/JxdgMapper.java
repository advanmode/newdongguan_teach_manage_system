package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Jxdg;

import java.util.List;

@Mapper
@Repository
public interface JxdgMapper {

    int insert(Jxdg jxdg);

    int delete(Jxdg jxdg);

    List<Jxdg> query();

    //int edit(Jxdg jxdg);

}