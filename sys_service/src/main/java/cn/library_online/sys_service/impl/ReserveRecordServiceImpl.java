package cn.library_online.sys_service.impl;

import cn.library_online.sys_dao.BookDao;
import cn.library_online.sys_dao.BorrowRecordDao;
import cn.library_online.sys_pojo.Book;
import cn.library_online.sys_pojo.BorrowRecord;
import cn.library_online.sys_pojo.ReserveRecord;
import cn.library_online.sys_dao.ReserveRecordDao;
import cn.library_online.sys_service.ReserveRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Service
public class ReserveRecordServiceImpl implements ReserveRecordService {

    @Autowired
    private ReserveRecordDao reserveRecordDao;

    @Autowired
    private BorrowRecordDao borrowRecordDao;

    @Autowired
    private BookDao bookDao;

    /**
     * 用户预约时创建预约纪录以及借书纪录
     *
     * 1.创建借书表纪录，并返回借书表id
     * 2.创建借书预约表纪录
     * 3.将该书的状态改为被预约
     * 4.添加事务增强，要么一起失败，要么一起成功
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer saveReserveRecord(BorrowRecord borrowRecord, ReserveRecord reserveRecord) {

       try{
           //预约借书，所以借书表状态应为1
           borrowRecord.setBorrowStatus(1);
           borrowRecordDao.saveBorrowRecord(borrowRecord);

           //获取刚刚添加的借书表id，创建新的预约表
           reserveRecord.setBorrowId(borrowRecord.getBorrowId());
           reserveRecordDao.saveReserveRecord(reserveRecord);

           //将书的状态改为被预约的1
           Book book = new Book();
           book.setBookId(borrowRecord.getBookId());
           book.setBookStatus(1);
           bookDao.setBookInfo(book);

       } catch (Exception e){
           return 400;
       }

       return 200;
    }


    /**
     *
     */
}
