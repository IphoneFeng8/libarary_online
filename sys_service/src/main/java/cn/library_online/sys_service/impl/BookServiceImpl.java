package cn.library_online.sys_service.impl;

import cn.library_online.sys_dao.BookDao;
import cn.library_online.sys_pojo.Book;
import cn.library_online.sys_service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class BookServiceImpl implements BookService {


    @Autowired
    private BookDao bookDao;

    /**
     *  用户根据条件搜索图书
     */
    @Override
    public List<HashMap<String, String>> userGetBooks(String condition,String search) {


        switch (condition){
            case "book_name":
                return bookDao.userGetBooks(search,null,null,null,null);
            case "library_name":
                return bookDao.userGetBooks(null,search,null,null,null);
            case "book_isbn":
                return bookDao.userGetBooks(null,null,search,null,null);
            case "book_autor":
                return bookDao.userGetBooks(null,null,null,search,null);
            case "book_type":
                return bookDao.userGetBooks(null,null,null,null,search);
        }
        return null;
    }

    /**
     * 用户根据isbn查找图书信息
     */
    @Override
    public List<HashMap<String, String>> userGetBookInfo(String bookIsbn) {
        return bookDao.userGetBookInfo(bookIsbn);
    }

    /**
     * 用户根据图书id查看图书信息
     */
    @Override
    public Book userGetBookById(Integer bookId) {
        return bookDao.userGetBookById(bookId);
    }
}
