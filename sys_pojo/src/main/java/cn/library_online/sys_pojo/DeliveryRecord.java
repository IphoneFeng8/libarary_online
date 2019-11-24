package cn.library_online.sys_pojo;

import lombok.Data;

import java.sql.Date;

@Data
public class DeliveryRecord {

  private Integer deliveryId;
  private Integer borrowId;
  private String deliveryName;
  private String deliveryPhone;
  private String deliveryAddress;
  private Date deliveryTime;
  private Date reserveTime;
  private Integer deliveryStatus;

  private UserInfo userInfo;
  private Book book;

  public DeliveryRecord() {
  }
}
