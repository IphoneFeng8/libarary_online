$(function () {
    to_page(1);

//跳转页面
    function to_page(pageNo) {
        $.ajax({
            type: "GET",
            url: "/user/getBorrowRecord",
            data:{"pageNo":pageNo},
            dataType:"json",
            success: function (data) {

                var pageInfo = data.data.pageInfo;

                //循环遍历打印借书列表
                $("#borrow-list").empty();
                $.each(pageInfo.list, function (index, item) {
                    var borrowStatus = "";
                    if (item.borrowStatus === 0){
                        borrowStatus = "已归还";
                    } else {
                        borrowStatus = "在借";
                    }

                    $("#borrow-list").append("<tr >" +
                        "                          <td >" + item.borrowId + "</td>" +
                        "                          <td >" + item.book.bookName + "</td>" +
                        "                          <td >" + item.book.libraryName + "</td>" +
                        "                          <td >" + item.borrowTime + "</td>" +
                        "                          <td >" + borrowStatus + "</td>" +
                        "                       </tr>");
                });

                //分页导航条
                nav_bar(pageInfo);
            }
        })
    }

    //分页导航条
    function nav_bar(pageInfo) {
        var nav = $("#nav-bar");
        nav.empty();
        //上一页
        var prePageLi = $("<li></li>").append(" <a href=\"#\" aria-label=\"Previous\">\n" +
            "                                    <span aria-hidden=\"true\">&laquo;</span>\n" +
            "                                </a>");
        //下一页

        var nextPageLi = $("<li></li>").append("<a href=\"#\" aria-label=\"Next\">\n" +
            "                                    <span aria-hidden=\"true\">&raquo;</span>\n" +
            "                                </a>");
        //如果当前页没有上一页，则上一页不能点
        if (pageInfo.hasPreviousPage === false) {
            prePageLi.addClass("am-disabled");
        } else {
            prePageLi.click(function () {
                to_page(pageInfo.pageNum - 1);
            });
        }
        //如果没有下一页
        if (pageInfo.hasNextPage === false) {
            nextPageLi.addClass("am-disabled");
        } else {
            nextPageLi.click(function () {
                to_page(pageInfo.pageNum + 1);
            });
        }
        //添加首页
        nav.append(prePageLi);
        //遍历添加页码
        $.each(pageInfo.navigatepageNums, function (index, item) {
            var numLi = $("<li></li>").append("<a href=\"#\">"+(index+1)+"</a>");
            //如果是当前选中页面，添加active标识
            if (pageInfo.pageNum === item) {
                numLi.addClass("am-active");
            }
            //给每个页码添加点击就跳转
            numLi.click(function () {
                to_page(item);
            });
            nav.append(numLi);
        });
        //添加下一页
        nav.append(nextPageLi);

    }
});

