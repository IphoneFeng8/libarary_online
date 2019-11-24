
$(function () {

    //获取地址栏参数
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return decodeURI(r[2]);
        return null;
    };
    //
    // var totalRecord, currentPage;
    // //显示第一页
    search_to_page(1);
    detailsBook();
    reserveBook();
    deliveryBook();
    //
    // //显示学生信息
    // function to_page(pageNo) {
    //     $.ajax({
    //         url: "/getBookByOption/" + pageNo,
    //         type: "GET",
    //         success: function (result) {
    //             //1.解析并显示学生信息数据
    //             build_userBook_table(result);
    //             //2.解析并显示分页信息
    //             build_page_info(result);
    //             //3.解析并显示分页条数据
    //             build_page_nav(result);
    //             /*获取 userInfo*/
    //             $.ajax({
    //                 url: "/user/getUserInfo",
    //                 type: "GET",
    //                 success: function (result) {
    //                     var userInfoById = result.data.userInfoById;
    //                     $("#userId").text(userInfoById.userId);
    //                     $("#username").text(userInfoById.nickname);
    //                 }
    //             })
    //         }
    //     })
    // }

    //图书列表展示，包括搜索功能
    function search_to_page() {
        var condition = $.getUrlParam("condition");
        var search = $.getUrlParam("search");
        var pageNo = $.getUrlParam("pageNo");

        //修改搜索条件默认值
        $("option").each(function () {
            if ($(this).attr("value") === condition){
                $("#option").val($(this).val());
            }
        });
        //修改搜索框默认值
        $("#searchingBox").val(search);

        $.ajax({
            type: "GET",
            url: "/library_online/books/user?condition="+condition+"&search="+search+"&pageNo="+pageNo,
            success: function (data) {

                $("#username").text(data.data.nickname);
                build_userBook_table(data);
                build_page_info(data);
                build_page_nav(data);
            }
        })
    }

    //解析并显示图书列表
    function build_userBook_table(result) {
        //清空table表格
        $("#userBook_table tbody").empty();
        var userBookList = result.data.pageInfo.list;
        $.each(userBookList, function (index, item) {
            var img =  $("<img width='45' height='90'>").attr("src","/upload/"+item.book_picture);
            var bookPicture = $("<td></td>").append(img);
            var bookName = $("<td></td>").append(item.book_name);
            var bookIsbn = $("<td></td>").append(item.book_isbn);
            var bookPress = $("<td></td>").append(item.book_press);
            var bookDate = $("<td></td>").append(item.book_date);
            var bookAutor = $("<td></td>").append(item.book_autor);
            var bookLanguage = $("<td></td>").append(item.book_language);
            var bookType = $("<td></td>").append(item.bookType);
            var button = $("<button></button>").addClass("btn btn-primary btn-sm details_btn").append($("<span></span>").addClass("glyphicon glyphicon-eye-open").attr("aria-hidden", true)).append("详情");
            var td_btn = $("<td></td>").append(button);
            $("<tr></tr>").append(bookPicture).append(bookName).append(bookIsbn).append(bookPress).append(bookDate)
                .append(bookAutor).append(bookLanguage).append(bookType).append(td_btn).appendTo("#userBook_table tbody");
        })
    }

    //解析显示分页信息
    function build_page_info(result) {
        $("#page_info_area").empty();
        $("#page_info_area").append("当前" + result.data.pageInfo.pageNum + "页，总共" + result.data.pageInfo.pages +
            "页，总共" + result.data.pageInfo.total + "条记录");
        totalRecord = result.data.pageInfo.total;
        currentPage = result.data.pageInfo.pageNum;
    }

    //解析显示分页导航条
    function build_page_nav(result) {
        var condition = $.getUrlParam("condition");
        var search = $.getUrlParam("search");
        $("#page_nav_area").empty();
        var ul = $("<ul></ul>").addClass("pagination");
        var firstPageLi = $("<li></li>").append($("<a></a>").append("首页").attr("href", "#"));
        var prePageLi = $("<li></li>").append($("<a></a>").append("&laquo;").attr("href", "#"));
        var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;").attr("href", "#"));
        var lastPageLi = $("<li></li>").append($("<a></a>").append("末页").attr("href", "#"));
        //如果没有前一页，前一页和首页就不能点
        if (result.data.pageInfo.hasPreviousPage === false) {
            firstPageLi.addClass("disabled");
            prePageLi.addClass("disabled");
        } else {
            //首页
            firstPageLi.click(function () {
                location.href = "getBookList.html?condition="+condition+"&search="+search+"&pageNo=1";
            });
            prePageLi.click(function () {
                location.href = "getBookList.html?condition="+condition+"&search="+search+"&pageNo="+result.data.pageInfo.pageNum - 1;
            });
        }
        if (result.data.pageInfo.hasNextPage === false) {
            nextPageLi.addClass("disabled");
            lastPageLi.addClass("disabled");
        } else {
            //构建点击事件

            nextPageLi.click(function () {
                location.href = "getBookList.html?condition="+condition+"&search="+search+"&pageNo="+result.data.pageInfo.pageNum + 1;

            });
            lastPageLi.click(function () {
                location.href = "getBookList.html?condition="+condition+"&search="+search+"&pageNo="+result.data.pageInfo.lastPage;

            })
        }
        //添加首页和前一页
        ul.append(firstPageLi).append(prePageLi);
        //遍历添加页码
        $.each(result.data.pageInfo.navigatepageNums, function (index, item) {
            var numLi = $("<li></li>").append($("<a></a>").append(item).attr("href", "#"));
            //如果是当前选中页面，添加active标识
            if (result.data.pageInfo.pageNum === item) {
                numLi.addClass("active");
            }
            //给每个页码添加点击就跳转
            numLi.click(function () {
                location.href = "getBookList.html?condition="+condition+"&search="+search+"&pageNo="+item;
            });
            ul.append(numLi);
        });
        //添加下一页和末页
        ul.append(nextPageLi).append(lastPageLi);
        var navEle = $("<nav></nav>").append(ul);
        navEle.appendTo("#page_nav_area");
    }

    //点击搜索
    $("#searching").on("click",function () {
        location.href = "getBookList.html?condition="+$("#option").val()+"&search="+$("#searchingBox").val()+"&pageNo=1";
    });


    /**
     * 详细界面 模块
     */
    function detailsBook() {
        //为详情按钮绑定弹出modal框事件
        //1.因为在按钮创建之前就绑定了click，所以用普通click方法绑定不上
        $(document).on("click", ".details_btn", function () {
            var bookIsbn = $(this).parents("tr").find("td:eq(2)").text();
            $.ajax({
                url: "/library_online/books/user/bookIsbn/" + bookIsbn,
                type: "GET",
                success: function (result) {
                    $("#userBookDetails_table tbody").empty();
                    var bookList = result.data.list;

                    $("#bookDetailsModal").modal({
                        backdrop: "static"
                    });

                    $.each(bookList, function (index, item) {
                            var bookId = $("<td></td>").append(item.bookId);
                            var libraryName = $("<td></td>").append(item.libraryName);
                            var libraryAdress = $("<td></td>").append(item.libraryAddress);
                            var button1 = $("<button></button>").addClass("btn btn-primary btn-sm reserve_btn").append($("<span></span>").addClass("glyphicon glyphicon-new-window").attr("aria-hidden", true)).append("在线预约");
                            var button2 = $("<button></button>").addClass("btn btn-primary btn-sm delivery_btn").append($("<span></span>").addClass("glyphicon glyphicon-new-window").attr("aria-hidden", true)).append("快递预约");
                            var td_btn = $("<td></td>").append(button1).append(" ").append(button2);
                            $("<tr></tr>").append(bookId).append(libraryName).append(libraryAdress).append(td_btn).appendTo("#userBookDetails_table tbody");
                        }
                    );
                }
            });

        })
    }

    /**
     * 在线预约 模块
     */
    function reserveBook() {
        //为详情按钮绑定弹出modal框事件
        //1.因为在按钮创建之前就绑定了click，所以用普通click方法绑定不上

        $(document).on("click", ".reserve_btn", function () {
            /*获取点击当前行的按钮 的 book_id*/
            var bookId = $(this).parents("tr").find("td:eq(0)").text();
            $.ajax({
                url: "/library_online/books/user/bookId/" + bookId,
                type: "GET",
                success: function (result) {
                    result = result.data.book;
                    $("#bookDetailsModal").modal('hide');
                    $("#bookReserveModal").modal({
                        backdrop: "static"
                    });
                    $("#bookReserveModal form")[0].reset();
                    $("#book_picture_img").attr("src", "/upload/"+result.bookPicture);
                    $("#book_picture_img").attr("width", '45px');
                    $("#book_picture_img").attr("height", '90px');
                    $("#book_id_input").text(result.bookId);
                    $("#book_name_input").text(result.bookName);
                    $("#library_name_input").text(result.libraryName);
                    $("#book_press_input").text(result.bookPress);
                    $("#book_autor_input").text(result.bookAutor);

                    $("#library_id_input").val(result.libraryId);
                }
            });
            //2.为模态框中的确认按钮绑定事件，提交在线预约订单
            $("#book_reserve_btn").click(function () {

                var borrow_time = $("#borrow_time_date").val();

                if (new Date(borrow_time) - new Date() < 0 || new Date(borrow_time) - new Date() > 3*24*60*60*1000){
                    alert("最多只能选择3天后，请重新选择时间");
                } else if (borrow_time === "") {
                    alert("请选择预约时间！")
                }else {
                    $.ajax({
                        url: "/library_online/reserveRecord/user/" + $("#book_id_input").text() + "/" + borrow_time,
                        type: "POST",
                        success: function (result) {
                            alert(result.message);
                            if (result.code === 200) {
                                $("#bookReserveModal").modal('hide');
                            }
                        }
                    })
                }

            })

        })
    }

    /**
     * 快递预约 模块
     */
    function deliveryBook() {
        //为详情按钮绑定弹出modal框事件
        //1.因为在按钮创建之前就绑定了click，所以用普通click方法绑定不上

        $(document).on("click", ".delivery_btn", function () {
            /*获取点击当前行的按钮 的 book_id*/
            var bookId = $(this).parents("tr").find("td:eq(0)").text();
            $.ajax({
                url: "/library_online/deliveryRecord/user/" + bookId,
                type: "GET",
                success: function (result) {
                    $("#bookDetailsModal").modal('hide');
                    $("#bookDeliveryModal").modal({
                        backdrop: "static"
                    });
                    var userInfo = result.data.userInfo;
                    var book = result.data.book;
                    $("#bookDeliveryModal form")[0].reset();
                    $("#bookPicture_img").attr("src", "/upload/"+book.bookPicture);
                    $("#bookPicture_img").attr("width", '45px');
                    $("#bookPicture_img").attr("height", '90px');
                    $("#bookId_input").text(book.bookId);
                    $("#bookName_input").text(book.bookName);
                    $("#libraryName_input").text(book.libraryName);
                    $("#userNickname_input").val(userInfo.nickname);
                    $("#UserPhone_input").val(userInfo.userPhone);
                    $("#UserAddress_input").val(userInfo.userAddress);

                    $("#libraryId_input").val(book.libraryId);
                }
            });
            //2.为模态框中的确认按钮绑定事件，提交在线预约订单
            $("#book_delivery_btn").click(function () {
                $.ajax({
                    url: "/library_online/deliveryRecord/user",
                    data:{
                        bookId:$("#bookId_input").text(),
                        deliveryName:$("#userNickname_input").val(),
                        deliveryPhone:$("#UserPhone_input").val(),
                        deliveryAddress:$("#UserAddress_input").val()
                    },
                    type:"POST",
                    success: function (result) {
                        if (result.code == 200) {
                            $("#bookDeliveryModal").modal('hide');
                        }
                            alert("成功预约!")
                    }
                })
            })
        })
    }
    
});
