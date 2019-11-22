$(function () {
    var totalRecord,currentPage;
    topage(1);
    dele();
    editbook();
    showDetail();

    function topage(pageNo){
        $.ajax({
            url:"../../../books/getList",
            type:"GET",
            data:{"libraryId":123456,
                   "pageNo":pageNo
                    },
            dataType:"json",
            success:function (list) {
                //1.解析并显示学生信息数据
                build_book_table(list);
                //2.解析并显示分页条数据
                build_page_nav(list);
                //alert("aaa");

            }
        })
    }
    function build_book_table(list) {
        var row="";
        $("#booktable tbody").empty();
        var list1 = list.data.pageInfo.list;

        $.each(list1,function (index,item) {
            var type =null;
            var status=null;
            if (Number(item.bookType) == 1) {
                type = "少儿";
            } else if (Number(item.bookType) == 2) {
                type = "文学小说";
            } else if (Number(item.bookType) == 3) {
                type = "经济管理";
            } else if (Number(item.bookType) == 4) {
                type = "学习考试";
            } else if (Number(item.bookType) == 5) {
                type = "人文社科";
            } else if (Number(item.bookType) == 6) {
                type = "科技";
            } else if (Number(item.bookType) == 7) {
                type = "生活";
            } else if (Number(item.bookType) == 8) {
                type = "法律";
            };
            if (Number(item.bookStatus)==0) {
                status="空闲";
            }else if(Number(item.bookStatus)==1){
                status="预约中";
            }else if (Number(item.bookStatus)==2){
                status="待邮寄";
            } else{
                status="已借未归还";
            }
                $("#booktable tbody").append(
                    "<tr>"+
                    "<td>"+"<input type='checkbox' class='tpl-table-fz-check' id='bookId'>"+"</td>"+
                    "<td>"+item.bookId+"</td>"+
                    "<td>"+item.bookIsbn+"</td>"+
                    "<td>"+item.bookName+"</td>"+
                    "<td>"+type+"</td>"+
                    "<td>"+item.bookLanguage+"</td>"+
                    "<td>"+item.bookPress+"</td>"+
                    "<td>"+item.bookPrice+"</td>"+
                    "<td>"+item.borrowedCount+"</td>"+
                    "<td>"+status+"</td>"+

                    "<td>"+"<button type='button' class='am-icon-beer detailBtn' data-toggle='modal'  data-target='#BookModal'>详情</button> "+"</td>"+
                    "<td>"+"<button type='button' class='am-icon-pencil-square editbtn' >编辑 </button> "+"</td>"+
                    "<td>"+"<button type='button' class='am-icon-trash-o delebtn'  '>删除</button> "+"</td>"+
                    +"</tr>");

        });

    }
    function build_page_nav(list) {
        var list1 = list.data.pageInfo.list;
        $("#page_nav_area").empty();
        var ul = $("<ul></ul>").addClass("pagination");
        var firstPageLi = $("<li></li>").append($("<a></a>").append("首页").attr("href", "#"));
        var prePageLi = $("<li></li>").append($("<a></a>").append("&laquo;").attr("href", "#"));
        var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;").attr("href", "#"));
        var lastPageLi = $("<li></li>").append($("<a></a>").append("末页").attr("href", "#"));
        if (list.data.pageInfo.hasPreviousPage == false) {
            firstPageLi.addClass("disabled");
            prePageLi.addClass("disabled");
        } else {
            firstPageLi.click(function () {
                topage(1);
            });
            prePageLi.click(function () {
                topage(list.data.pageInfo.pageNum - 1);
            });
        }
        if (list.data.pageInfo.hasNextPage == false) {
            nextPageLi.addClass("disabled");
            lastPageLi.addClass("disabled");
        } else {

            nextPageLi.click(function () {
                topage(list.data.pageInfo.pageNum + 1);
            });
            lastPageLi.click(function () {
                topage(list.data.pageInfo.lastPage);
            })
        }
        ul.append(firstPageLi).append(prePageLi);

        $.each(list.data.pageInfo.navigatepageNums, function (index, item) {
            var numLi = $("<li></li>").append($("<a></a>").append(item).attr("href", "#"));
            if (list.data.pageInfo.pageNum === item) {
                numLi.addClass("active");
            }
            numLi.click(function () {
                topage(item);
            });
            ul.append(numLi);
        });
        ul.append(nextPageLi).append(lastPageLi);
        var navEle = $("<nav></nav>").append(ul);
        navEle.appendTo("#page_nav_area");


    }
    function dele() {
        $(document).on("click",".delebtn",function () {
            var name=$(this).parents("tr").find("td:eq(3)").text();
            var id=$(this).parents("tr").find("td:eq(1)").text();
            if(confirm("确认删除【"+name+"】吗？")){
                $.ajax({
                    url:"../../../books/deleteBook",
                    type:"POST",
                    data:{"bookId":id},
                    dataType:"text",
                    success:function (result) {
                        alert("删除成功");
                        topage(1);
                    }
                })
            }
        })
    }

    function editbook() {
        $(document).on("click", ".editbtn", function () {
            $("#UpdateBookModal form")[0].reset();
            $("#bookName").next("span").text("");

            var bookId = $(this).parents("tr").find("td:eq(1)").text();
            $("#Book_update_btn").attr("name", bookId);
            var bookName = $(this).parents("tr").find("td:eq(3)").text();
            var bookLanguage = $(this).parents("tr").find("td:eq(5)").text();
            var bookPress = $(this).parents("tr").find("td:eq(6)").text();
            var bookPrice = $(this).parents("tr").find("td:eq(7)").text();
            var borrowedCount = $(this).parents("tr").find("td:eq(8)").text();
            $("#bookName").val(bookName);
            $("#bookLanguage").val(bookLanguage);
            $("#bookPress").val(bookPress);
            $("#bookPrice").val(bookPrice);
            $("#borrowedCount").val(borrowedCount);
            $("#UpdateBookModal").modal({
                backdrop: "static"
            })
        });
        $("#Book_update_btn").click(function () {
            var bookName = $("#bookName").val();
            var bookPrice = $("#bookPrice").val();
            var bookPress = $("#bookPress").val();
            var bookLanguage = $("#bookLanguage").val();
            var borrowedCount = $("#borrowedCount").val();
            $.ajax({
                url: "../../../books/updateBook",
                type: "POST",
                data: {
                    "bookId": $("#Book_update_btn").attr("name"),
                    "bookName": bookName,
                    "bookPress": bookPress,
                    "bookPrice": bookPrice,
                    "borrowedCount": borrowedCount,
                    "bookLanguage": bookLanguage,
                },
                dataType: "text",
                success: function (result) {
                    $("#UpdateBookModal").modal('hide')
                    alert("修改成功");
                    topage(1);
                }
            })
        })
    }


    function showDetail() {
        $(document).on("click",".detailBtn",function () {
            var id=$(this).parents("tr").find("td:eq(1)").text();
            $.ajax({
                url:"../../../books/getBooksById",
                type:"GET",
                data:{
                    "bookId":id,
                    "libraryId":123456
                },
                dataType:"json",
                success:function (list) {
                    var aboutBook = $("#aboutBook tbody");
                    aboutBook.empty();
                    $("#BookModal").modal({
                        dackdrop:"static"
                    });

                    var type=null;
                    var status=null;
                    if (Number(list[0].bookType)==1){
                        type="少儿";
                    } else if (Number(list[0].bookType)==2){
                        type="文学小说";
                    } else if (Number(list.bookType)==3){
                        type="经济管理";
                    }else if (Number(list[0].bookType)==4){
                        type="学习考试";
                    }else if (Number(list[0].bookType)==5){
                        type="人文社科";
                    }else if (Number(list[0].bookType)==6){
                        type="科技";
                    }else if (Number(list[0].bookType)==7){
                        type="生活";
                    }else if (Number(list[0].bookType)==8){
                        type="法律";
                    }
                    if (Number(list[0].bookStatus)==0) {
                        status="空闲";
                    }else if(Number(list[0].bookStatus)==1){
                        status="预约中";
                    }else if (Number(list[0].bookStatus)==2){
                        status="待邮寄";
                    } else{
                        status="已借未归还";
                    }

                    aboutBook.append(
                        "<tr>"+
                        "<td class=' col-lg-3'>书籍编号</td>"+"<td>"+list[0].bookId+"</td>"+
                        "</tr>"+
                            "<tr>"+
                        "<td class=' col-lg-3'>书籍名字</td>"+"<td>"+list[0].bookName+"</td>" +
                        "</tr>"+
                            "<tr>"+
                        "<td class=' col-lg-3'>出版号</td>"+"<td>"+list[0].bookIsbn+"</td>"+
                        "</tr>"+
                            "<tr>"
                        +"<td class=' col-lg-3'>作者</td>"+"<td>"+list[0].bookAutor+"</td>"+
                        "</tr>"+
                            "<tr>"+"<td class=' col-lg-3'>类型</td>"+"<td>"+type+"</tr>"+
                            "<tr>"+"<td class=' col-lg-3'>出版商</td>"+"<td>"+list[0].bookPress+"</td>"+"</tr>"+
                            "<tr>"+"<td class=' col-lg-3'>书籍页数</td>"+"<td>"+list[0].bookPage+"</td>"+"</tr>"+
                            /*"<tr>"+"<td>书籍封面图</td>"+"<td>"+list[0].bookPicture+"</td>"+"</tr>"+*/
                            "<tr>"+"<td class=' col-lg-3'>书籍封面图</td>"+"<td>"+"<img src= '/upload/"+list[0].bookPicture+"' alt='...' class='img-rounded'>"+"</td>"+"</tr>"+
                            "<tr>"+"<td class=' col-lg-3'>书籍原价</td>"+"<td>"+list[0].bookPrice+"</td>"+"</tr>"+
                            "<tr>"+"<td class=' col-lg-3'>语种</td>"+"<td>"+list[0].bookLanguage+"</td>"+"</tr>"+
                            "<tr>"+"<td class=' col-lg-3'>出版日期</td>"+"<td>"+list[0].bookDate+"</td>"+"</tr>"+
                            "<tr>"+"<td class=' col-lg-3'>书籍状态</td>"+"<td>"+status+"</td>"+"</tr>"+
                            "<tr>"+"<td class=' col-lg-3'>已借出次数</td>"+"<td>"+list[0].borrowedCount+"</td>"+"</tr>"

                    )
                }

            })
        })
    }
});





//
// function getBooksType() {
//     var val = $("#booksType").val();
//     $.ajax({
//         url:"../../../books/getBooksType",
//         type:"GET",
//         data:{"libraryId":111111,"typeId":val},
//         dataType:"text",
//         success:function (list) {
//             //alert(list);
//             var row="";
//             $("#booktable").empty();
//             var booktable = $("#booktable");
//             var type=null;
//             var status=null;
//
//             for (var i in list){
//
//                 if (Number(list[i].bookType) == 1) {
//                     type = "少儿";
//                 } else if (Number(list[i].bookType) == 2) {
//                     type = "文学小说";
//                 } else if (Number(list[i].bookType) == 3) {
//                     type = "经济管理";
//                 } else if (Number(list[i].bookType) == 4) {
//                     type = "学习考试";
//                 } else if (Number(list[i].bookType) == 5) {
//                     type = "人文社科";
//                 } else if (Number(list[i].bookType) == 6) {
//                     type = "科技";
//                 } else if (Number(list[i].bookType) == 7) {
//                     type = "生活";
//                 } else if (Number(list[i].bookType) == 8) {
//                     type = "法律";
//                 }
//
//                 if (Number(list[i].bookStatus)==0) {
//                     status="空闲";
//                 }else if(Number(list[i].bookStatus)==1){
//                     status="预约中";
//                 }else if (Number(list[i].bookStatus)==2){
//                     status="待邮寄";
//                 } else{
//                     status="已借未归还";
//                 }
//                 booktable.append(
//                     "<tr> " +
//                     "<th class='table-check'>"+"<input type='checkbox'' class='tpl-table-fz-check'>"+"</th>"+
//                     "<th class='book-isbn'>书号</th>"+
//                     "<th class='book-name'>书名</th>"+
//                     "<th class='book-type'>类别</th>"+
//                     "<th class='book-status'>状态</th>"+
//                     "<th class='borrowed-count'>次数</th>"+
//                     "<th class='table-set'>操作</th>"+
//                     "</tr>"+
//                     "<tr>"+
//                     "<td>"+"<input type='checkbox' class='tpl-table-fz-check'>"+"</td>"+
//                     "<td>"+list[i].bookId+"</td>"+
//                     "<td>"+list[i].bookName+"</td>"+
//                     "<td>"+type+"</td>"+
//                     "<td>"+list[i].borrowedCount+"</td>"+
//                     "<td>"+status+"</td>"+
//                     "<td>"+"<button type='button' class='am-icon-beer'>详情</button> "+"</td>"+
//                     "<td>"+"<button type='button' class='am-icon-pencil-square'>编辑</button> "+"</td>"+
//                     "<td>"+"<button type='button' class='am-icon-trash-o'>删除</button> "+"</td>"+
//                     +"</tr>");
//             }
//         }
//     })
// }
function getBooksById() {
    var val = $("#getBooksById").val();
    $.ajax({
        url:"../../../books/getBooksById",
        type:"GET",
        data:{"libraryId":111111,"bookId":val},
        dataType:"json",
        success:function (list) {
            //alert(list);
            var row="";
            $("#booktable").empty();
            var booktable = $("#booktable");
            for (var i in list){
                booktable.append(
                    "<tr>"+
                    "<td>"+"<input type='checkbox' class='tpl-table-fz-check'>"+"</td>"+
                    "<td>"+list[i].bookId+"</td>"+
                    "<td>"+list[i].bookName+"</td>"+
                    "<td>"+list[i].bookType+"</td>"+
                    "<td>"+list[i].borrowedCount+"</td>"+
                    "<td>"+list[i].bookStatus+"</td>"+
                    "<td>"+"<button type='button' class='am-icon-beer'>详情</button> "+"</td>"+
                    "<td>"+"<button type='button' class='am-icon-pencil-square' onclick='editbook()'>编辑</button> "+"</td>"+
                    "<td>"+"<button type='button' class='am-icon-trash-o'>删除</button> "+"</td>"+
                    +"</tr>");
            }
        }
    })
}

function addNewBookbtn() {
    location.href="/resources/pages/library/add-book.html"
}


