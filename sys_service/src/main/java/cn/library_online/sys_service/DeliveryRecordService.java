package cn.library_online.sys_service;

import cn.library_online.sys_pojo.BorrowRecord;
import cn.library_online.sys_pojo.DeliveryRecord;

import java.util.List;
import java.util.Map;

public interface DeliveryRecordService {

    /*获取用户和图书信息，用以快递单上的初始值*/
    Map getUserInfoAndBook(Integer userId,Integer bookId);

    /*用户借书时新建快递表*/
    Integer saveDeliveryRecord(BorrowRecord borrowRecord, DeliveryRecord deliveryRecord);

    /*图书馆发出快递*/
    void sendDelivery(DeliveryRecord deliveryRecord,Integer bookId);

    /*图书馆获取快递表信息*/
    List<DeliveryRecord> getDeliveryRecord(Integer libraryId);
}
