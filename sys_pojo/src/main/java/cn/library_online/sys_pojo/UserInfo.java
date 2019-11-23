package cn.library_online.sys_pojo;

import lombok.Data;

@Data
public class UserInfo {

    private Integer userId;
    private String nickname;
    private String userSex;
    private String userAddress;
    private String userPhone;
    private String userAge;
    private String userEmail;
    private String userIdCard;
    private String borrow_count;

    public UserInfo() {
    }

}
