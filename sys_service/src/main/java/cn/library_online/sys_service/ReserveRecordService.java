package cn.library_online.sys_service;

import cn.library_online.sys_pojo.BorrowRecord;
import cn.library_online.sys_pojo.ReserveRecord;


public interface ReserveRecordService {

    /*用户预约时创建预约纪录以及借书纪录*/
    Integer saveReserveRecord(BorrowRecord borrowRecord, ReserveRecord reserveRecord);

}
