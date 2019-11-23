package cn.library_online.sys_pojo;

import lombok.Data;

@Data
public class UserManage {

    private Integer userId;
    private Double userBalance;
    private Integer userStatus;

    public UserManage() {
    }

}
