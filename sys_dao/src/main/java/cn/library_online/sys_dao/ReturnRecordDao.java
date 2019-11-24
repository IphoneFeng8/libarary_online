package cn.library_online.sys_dao;

import cn.library_online.sys_pojo.ReturnRecord;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReturnRecordDao {

    /*新增还书表纪录*/
    void saveReturnRecord(ReturnRecord returnRecord);

    /*获取还书表纪录*/
    List<ReturnRecord> getReturnRecord(Integer libraryId,Integer userId);
}
