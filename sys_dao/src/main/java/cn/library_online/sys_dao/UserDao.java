package cn.library_online.sys_dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao {

    /*登录*/
    Integer login(@Param("username") String username, @Param("userPwd") String userPwd);
}
