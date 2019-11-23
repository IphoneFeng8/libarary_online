package cn.library_online.sys_pojo;

import lombok.Data;

import java.sql.Date;

@Data
public class Book {

    private Integer bookId;
    private Integer libraryId;
    private String libraryName;
    private String bookName;
    private String bookPicture;
    private String bookIsbn;
    private String bookPress;
    private Date bookDate;
    private String bookPage;
    private String bookAutor;
    private String bookLanguage;
    private Integer bookType;
    private Double bookPrice;
    private Integer bookStatus;
    private Integer borrowedCount;

    public Book() {
    }
}
