package cn.library_online.sys_pojo;


import lombok.Data;

import java.sql.Date;

@Data
public class ReserveRecord {

  private Integer reserveId;
  private Integer borrowId;
  private Date reserveTime;
  private Date borrowTime;
  private Integer reserveStatus;


  private Book book;
  private UserInfo userInfo;

  public ReserveRecord() {
  }
}
