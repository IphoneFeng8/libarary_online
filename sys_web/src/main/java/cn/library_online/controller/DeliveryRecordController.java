package cn.library_online.controller;

import cn.library_online.sys_common.beans.Msg;
import cn.library_online.sys_pojo.BorrowRecord;
import cn.library_online.sys_pojo.DeliveryRecord;
import cn.library_online.sys_service.DeliveryRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Map;

@RestController
@RequestMapping("/deliveryRecord")
public class DeliveryRecordController {

    @Autowired
    private DeliveryRecordService deliveryRecordService;

    /**
     * 获取用户和图书信息，用以快递单上的初始值
     */
    @GetMapping("/user/{bookId}")
    public Msg getUserInfoAndBook(@PathVariable("bookId") Integer bookId, HttpServletRequest request) {

        Integer userId = (Integer) request.getSession().getAttribute("userId");
        Map map = deliveryRecordService.getUserInfoAndBook(userId, bookId);

        return Msg.success().add("userInfo", map.get("userInfo")).add("book", map.get("book"));
    }

    /**
     * 保存快递表
     */
    @PostMapping("/user")
    public Msg saveDeliveryRecord(DeliveryRecord deliveryRecord, Integer bookId, HttpServletRequest request) {

        //获取在session中保存的用户id
        Integer userId = (Integer) request.getSession().getAttribute("userId");
        //获取当前的时间
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date(System.currentTimeMillis());
        Date newDay = Date.valueOf(formatter.format(date));


        //创建新的借书表保存数据
        BorrowRecord borrowRecord = new BorrowRecord();
        borrowRecord.setBookId(bookId);
        borrowRecord.setUserId(userId);
        borrowRecord.setBorrowTime(newDay);

        //新的快递表，保存数据
        deliveryRecord.setReserveTime(newDay);

        //获取返回的状态码，判断是否成功并返回前端
        Integer result = deliveryRecordService.saveDeliveryRecord(borrowRecord, deliveryRecord);

        if (result == 400) {
            return Msg.error("预约失败！请重新尝试");
        } else {
            return Msg.success("预约成功！");
        }
    }

}
