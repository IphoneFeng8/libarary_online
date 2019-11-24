package cn.library_online.sys_dao;

import cn.library_online.sys_pojo.BorrowRecord;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BorrowRecordDao {

    /*新建借书表*/
    void saveBorrowRecord(BorrowRecord borrowRecord);

    /*修改借书表状态*/
    void setBorrowStatus(BorrowRecord borrowRecord);

    /*查找借书表记录*/
    List<BorrowRecord> getBorrowRecord(@Param("keyword") String keyword,
                                       @Param("userId") Integer userId,
                                       @Param("libraryId") Integer libraryId);
}
