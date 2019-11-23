package cn.library_online.sys_dao;

import cn.library_online.sys_pojo.User;
import cn.library_online.sys_pojo.UserInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {

    /*登录*/
    List<User> login(@Param("username") String username);

    /*验证电话信息是否已存在*/
    Integer verifyPhone(@Param("userPhone") String userPhone);
    Integer verifyIdCard(@Param("userIdCard") String userIdCard);

    /*注册保存账号信息*/
    void saveUser(User user);
    void saveUserInfo(UserInfo userInfo);
    void saveUserManage(Integer userId);

    /*通过id获得学生信息*/
    UserInfo getUserInfoById(Integer userId);

}
