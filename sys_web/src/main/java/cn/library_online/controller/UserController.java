package cn.library_online.controller;

import cn.library_online.sys_common.beans.Msg;
import cn.library_online.sys_service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{username}/{password}")
    public Msg Login(@PathVariable("username") String username,
                     @PathVariable("password") String password){

        Integer login = userService.login(username, password);

        if (login == 1){
            return Msg.success();
        } else {
            return Msg.error("登录失败！");
        }

    }

}
