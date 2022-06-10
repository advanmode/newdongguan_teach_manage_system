package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import xuqiu.spring.Pojo.Content;

@Mapper
public interface ContentMapper {
    int updateContent(Content content);
    Content queryContent();
}
