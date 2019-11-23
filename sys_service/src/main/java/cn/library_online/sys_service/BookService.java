package cn.library_online.sys_service;



import cn.library_online.sys_pojo.Book;

import java.util.HashMap;
import java.util.List;

public interface BookService {

    /*用户根据条件搜索图书*/
    List<HashMap<String, String>> userGetBooks(String condition,String search);

    /*根据isbn查找图书信息*/
    List<HashMap<String,String>> userGetBookInfo(String bookIsbn);

    /*根据图书id获得图书信息*/
    Book userGetBookById(Integer bookId);
}
