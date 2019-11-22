package cn.library_online.sys_service.impl;

import cn.library_online.sys_dao.UserDao;
import cn.library_online.sys_service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public Integer login(String username, String userPwd) {
        return userDao.login(username, userPwd);
    }
}
