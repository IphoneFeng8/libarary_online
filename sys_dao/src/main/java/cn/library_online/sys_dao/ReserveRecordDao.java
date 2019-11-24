package cn.library_online.sys_dao;

import cn.library_online.sys_pojo.ReserveRecord;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ReserveRecordDao {

    /*用户预约时创建预约纪录*/
    void saveReserveRecord(ReserveRecord reserveRecord);

    /*修改预约状态*/
    void setReserveRecord(ReserveRecord reserveRecord);

    /*查找预约信息*/
    List<ReserveRecord> getReserveRecord(Integer libraryId,Integer userId);

}
