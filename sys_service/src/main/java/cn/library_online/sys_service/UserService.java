package cn.library_online.sys_service;

import cn.library_online.sys_pojo.User;
import cn.library_online.sys_pojo.UserInfo;

import java.util.List;

public interface UserService {

    /*登录*/
    List<User> login(String username);

    /*验证电话信息是否已存在*/
    Integer verifyPhone(String userPhone);

    /*验证身份证信息是否已存在*/
    Integer verifyIdCard(String userIdCard);

    /*注册*/
    void register(User user, UserInfo userInfo);

    /*通过id获得学生信息*/
    UserInfo getUserInfoById(Integer userId);
}
