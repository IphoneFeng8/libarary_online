package cn.library_online.sys_dao;

import cn.library_online.sys_pojo.Book;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;


import java.util.HashMap;
import java.util.List;

@Repository
public interface BookDao {


    /*用户根据条件搜索图书*/
    List<HashMap<String,String>> userGetBooks(@Param("bookName") String bookName,
                                              @Param("libraryName") String libraryName,
                                              @Param("bookIsbn") String bookIsbn,
                                              @Param("bookAutor") String bookAutor,
                                              @Param("bookType") String bookType);

    /*根据isbn查找图书信息*/
    List<HashMap<String,String>> userGetBookInfo(@Param("bookIsbn") String bookIsbn);

    /*根据图书id获得图书信息*/
    Book userGetBookById(Integer bookId);
}
