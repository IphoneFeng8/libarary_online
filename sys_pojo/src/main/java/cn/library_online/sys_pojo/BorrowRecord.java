package cn.library_online.sys_pojo;

import lombok.Data;

import java.sql.Date;

@Data
public class BorrowRecord {

  private Integer borrowId;
  private Integer userId;
  private Integer bookId;
  private Date borrowTime;
  private Integer borrowStatus;

  //根据书id查找的书信息
  private Book book;
  //根据用户id 查找的用户信息
  private UserInfo userInfo;

  public BorrowRecord() {
  }

}
