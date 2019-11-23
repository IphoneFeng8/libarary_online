package cn.library_online.controller;

import cn.library_online.sys_common.beans.Msg;
import cn.library_online.sys_pojo.Book;
import cn.library_online.sys_service.BookService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;

@RequestMapping("/books")
@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    /**
     * 根据查询条件获取所有图书信息
     */
    @GetMapping("/user")
    public Msg userGetBooks(String condition, String search, Integer pageNo,HttpServletRequest request){

        PageHelper.startPage(pageNo, 5);
        List<HashMap<String, String>> list = bookService.userGetBooks(condition, "%"+search+"%");
        PageInfo pageInfo = new PageInfo(list, 5);
        return Msg.success().add("pageInfo",pageInfo).add("nickname", request.getSession().getAttribute("nickname"));
    }

    /**
     * 根据isbn获取图书信息
     */
    @GetMapping("/user/bookIsbn/{bookIsbn}")
    public Msg userGetBookInfo(@PathVariable String bookIsbn){

        List<HashMap<String, String>> list = bookService.userGetBookInfo(bookIsbn);
        return Msg.success().add("list",list);
    }

    /**
     * 根据isbn获取图书信息
     */
    @GetMapping("/user/bookId/{bookId}")
    public Msg userGetBookById(@PathVariable Integer bookId){

        Book book = bookService.userGetBookById(bookId);
        return Msg.success().add("book",book);
    }

}
