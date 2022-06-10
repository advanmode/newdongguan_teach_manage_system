package xuqiu.spring.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xuqiu.spring.Pojo.Admin;

import java.util.List;

@Mapper
@Repository
public interface AdminMapper {

    int insert(Admin admin);

    int delete(Admin admin);

    List<Admin> query();

    int edit(Admin admin);

    Admin queryTheUser(String username);

}
