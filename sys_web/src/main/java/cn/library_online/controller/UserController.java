package cn.library_online.controller;

import cn.library_online.sys_common.beans.Msg;
import cn.library_online.sys_pojo.User;
import cn.library_online.sys_pojo.UserInfo;
import cn.library_online.sys_service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 登录
     */
    @GetMapping("/{username}/{password}")
    public Msg Login(@PathVariable("username") String username,
                     @PathVariable("password") String password,
                     HttpServletRequest request){

        List<User> users = userService.login(username);

        if (users.size() == 1){
            if (password.equals(users.get(0).getUserPwd())){
                UserInfo userInfo = userService.getUserInfoById(users.get(0).getUserId());
                request.getSession().setAttribute("nickname", userInfo.getNickname());
                request.getSession().setAttribute("userId", userInfo.getUserId());
                return Msg.success();
            } else {
                return Msg.error("账号不存在！");
            }
        } else if (users.size() > 1){
            return Msg.error("发生未知错误！");
        } else {
            return Msg.error("密码错误！");
        }

    }


    /**
     * 验证该手机号是否已被注册
     */
    @GetMapping("/verifyPhone")
    public Msg verifyPhone(String userPhone) {
        Integer count = userService.verifyPhone(userPhone);

        if (count == 0){
            return Msg.success();
        } else {
            return Msg.error();
        }
    }

    /**
     * 验证该手机号是否已被注册
     */
    @GetMapping("/verifyIdCard")
    public Msg verifyIdCard(String userIdCard) {
        Integer count = userService.verifyIdCard(userIdCard);

        if (count == 0){
            return Msg.success();
        } else {
            return Msg.error();
        }
    }

    /**
     * 注册
     */
    @PostMapping("/register")
    public Msg register(UserInfo userInfo,String userPwd){
        User user = new User();
        user.setUsername(userInfo.getUserPhone());
        user.setUserPwd(userPwd);

        userService.register(user,userInfo);

        return Msg.success();
    }
}
