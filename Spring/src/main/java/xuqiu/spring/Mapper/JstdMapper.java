package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Jstd;
import xuqiu.spring.Pojo.Jxdg;

import java.util.List;

@Mapper
@Repository
public interface JstdMapper {

//    int insert(Jstd jstd);

//    int delete(Jstd jstd);

    List<Jstd> query();

    int edit(Jstd jstd);

}
