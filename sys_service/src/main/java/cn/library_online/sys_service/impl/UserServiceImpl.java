package cn.library_online.sys_service.impl;

import cn.library_online.sys_dao.UserDao;
import cn.library_online.sys_pojo.User;
import cn.library_online.sys_pojo.UserInfo;
import cn.library_online.sys_service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    /**
     * 登录
     */
    @Override
    public List<User> login(String username) {
        return userDao.login(username);
    }

    /**
     * 验证该手机号是否已被注册
     */
    @Override
    public Integer verifyPhone(String userPhone) {
        return userDao.verifyPhone(userPhone);
    }

    /**
     * 验证该身份证信息是否已被注册
     */
    @Override
    public Integer verifyIdCard(String userIdCard) {
        return userDao.verifyIdCard(userIdCard);
    }

    /**
     * 注册保存账号信息
     * （需要添加事务增强，出错时数据回滚）
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void register(User user, UserInfo userInfo) {
        //保存用户账号信息表
        userDao.saveUser(user);
        //保存用户详细信息表
        userDao.saveUserInfo(userInfo);
        //保存用户管理表
        userDao.saveUserManage(user.getUserId());
    }

    /**
     * 通过id获得学生信息
     */
    @Override
    public UserInfo getUserInfoById(Integer userId) {
        return userDao.getUserInfoById(userId);
    }


}
