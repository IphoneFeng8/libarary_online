package cn.library_online.controller;

import cn.library_online.sys_common.beans.Msg;
import cn.library_online.sys_pojo.BorrowRecord;
import cn.library_online.sys_pojo.ReserveRecord;
import cn.library_online.sys_service.ReserveRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@RestController
@RequestMapping("/reserveRecord")
public class ReserveRecordController {

    @Autowired
    private ReserveRecordService reserveRecordService;

    /**
     * 保存在线预约表
     */
    @PostMapping("/user/{bookId}/{borrowTime}")
    public Msg saveReserve(@PathVariable("bookId") Integer bookId, @PathVariable("borrowTime") Date borrowTime, HttpServletRequest request){

        //获取在session中保存的用户id
        Integer userId = (Integer)request.getSession().getAttribute("userId");
        //获取当前的时间
        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date(System.currentTimeMillis());
        Date newDay = Date.valueOf(formatter.format(date));

        //创建新的借书表保存数据
        BorrowRecord borrowRecord = new BorrowRecord();
        borrowRecord.setBookId(bookId);
        borrowRecord.setBorrowTime(borrowTime);
        borrowRecord.setUserId(userId);

        //创建新的预约表，保存数据
        ReserveRecord reserveRecord = new ReserveRecord();
        reserveRecord.setReserveTime(newDay);
        reserveRecord.setBorrowTime(borrowTime);

        //获取返回的状态码，判断是否成功并返回前端
        Integer result = reserveRecordService.saveReserveRecord(borrowRecord, reserveRecord);

        if (result == 400){
            return Msg.error("预约失败！请重新尝试");
        } else {
            return Msg.success("预约成功！");
        }
    }
}
