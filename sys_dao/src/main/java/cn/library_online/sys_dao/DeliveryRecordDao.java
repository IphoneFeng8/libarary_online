package cn.library_online.sys_dao;

import cn.library_online.sys_pojo.DeliveryRecord;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeliveryRecordDao {

    /*新增快递预约表*/
    void saveDeliveryRecord(DeliveryRecord deliveryRecord);

    /*获取快递表信息*/
    List<DeliveryRecord> getDeliveryRecord(Integer libraryId);

    /*修改快递表状态*/
    void setDeliveryRecord(DeliveryRecord deliveryRecord);
}
