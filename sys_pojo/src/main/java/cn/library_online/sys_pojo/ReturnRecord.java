package cn.library_online.sys_pojo;

import lombok.Data;

import java.sql.Date;

@Data
public class ReturnRecord {

  private Integer returnId;
  private Integer userId;
  private Integer bookId;
  private Double finePaid;
  private Date borrowTime;
  private Date returnTime;

  private Book book;
  private UserInfo userInfo;

  public ReturnRecord() {
  }
}
