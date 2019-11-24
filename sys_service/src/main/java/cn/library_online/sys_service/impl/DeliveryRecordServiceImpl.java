package cn.library_online.sys_service.impl;

import cn.library_online.sys_dao.BookDao;
import cn.library_online.sys_dao.BorrowRecordDao;
import cn.library_online.sys_dao.DeliveryRecordDao;
import cn.library_online.sys_dao.UserDao;
import cn.library_online.sys_pojo.Book;
import cn.library_online.sys_pojo.BorrowRecord;
import cn.library_online.sys_pojo.DeliveryRecord;
import cn.library_online.sys_pojo.UserInfo;
import cn.library_online.sys_service.DeliveryRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DeliveryRecordServiceImpl implements DeliveryRecordService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private BookDao bookDao;

    @Autowired
    private DeliveryRecordDao deliveryRecordDao;

    @Autowired
    private BorrowRecordDao borrowRecordDao;


    /**
     * 获取用户和图书信息，用以快递单上的初始值
     * 1.根据用户id获取用户信息
     * 2.根据图书id获取图书信息
     */
    @Override
    public Map getUserInfoAndBook(Integer userId, Integer bookId) {
        Map<String,Object> map = new HashMap<>();

        UserInfo userInfo = userDao.getUserInfoById(userId);
        Book book = bookDao.userGetBookById(bookId);

        map.put("userInfo",userInfo);
        map.put("book",book);

        return map;
    }

    /**
     * 新增一条快递表信息
     *
     * 1.创建借书表纪录，并返回借书表id
     * 2.创建快递表表纪录
     * 3.将该书的状态改为被预约
     * 4.添加事务增强，要么一起失败，要么一起成功
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer saveDeliveryRecord(BorrowRecord borrowRecord, DeliveryRecord deliveryRecord) {

        try{
            //快递借书，所以借书表状态应为3
            borrowRecord.setBorrowStatus(3);
            borrowRecordDao.saveBorrowRecord(borrowRecord);

            //获取刚刚添加的借书表id，创建新的预约表
            deliveryRecord.setBorrowId(borrowRecord.getBorrowId());
            deliveryRecordDao.saveDeliveryRecord(deliveryRecord);

            //将书的状态改为被快递预约的3
            Book book = new Book();
            book.setBookId(borrowRecord.getBookId());
            book.setBookStatus(3);
            bookDao.setBookInfo(book);

        } catch (Exception e){
            return 400;
        }

        return 200;
    }

    /**
     * 图书馆发出快递
     * 1.快递表状态改为 2（已发）
     * 2.图书表状态改为 4（快递已发）
     * 3.添加事务增强，要么一起失败，要么一起成功
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void sendDelivery(DeliveryRecord deliveryRecord,Integer bookId) {

        deliveryRecord.setDeliveryStatus(2);
        deliveryRecordDao.setDeliveryRecord(deliveryRecord);

        Book book = new Book();
        book.setBookId(bookId);
        book.setBookStatus(4);
        bookDao.setBookInfo(book);

    }

    /**
     * 图书馆获取快递表信息
     */
    @Override
    public List<DeliveryRecord> getDeliveryRecord(Integer libraryId) {
        return deliveryRecordDao.getDeliveryRecord(libraryId);
    }


}
