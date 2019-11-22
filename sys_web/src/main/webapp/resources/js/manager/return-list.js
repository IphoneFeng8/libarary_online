$(function () {

    //获取地址栏参数
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return unescape(r[2]);
        return null;
    };

    to_page(1);

    function to_page(pageNo) {
        var keyword = $.trim($("#search-box").val());
        var urlParam = $.getUrlParam("userId");
        var url = "";
        if (urlParam !== null){
            url = "/return/"+urlParam
        } else {
            url = "/admin/booksRRecord?pageNo=" + pageNo + "&keyword=" + keyword
        }
        $.ajax({
            type: "GET",
            url: url,
            success: function (data) {

                var pageInfo = data.data.pageInfo;

                //循环遍历打印借书列表
                $("#return-list").empty();
                $.each(pageInfo.list, function (index, item) {

                    //获取借书日期和当前日期，格式为毫秒数，然后换算成天数
                    var borrow_time = item.borrowTime;
                    var return_time = item.returnTime;
                    var borrow_days = parseInt((return_time - borrow_time) / (1000 * 60 * 60 * 24));

                    $("#return-list").append("<tr class=\"gradeX\">\n" +
                        "                                        <td class=\"am-text-middle\">" + item.returnId + "</td>\n" +
                        "                                        <td class=\"am-text-middle\">" + item.userId + "</td>\n" +
                        "                                        <td class=\"am-text-middle\">" + item.userInfo.nickname + "</td>\n" +
                        "                                        <td class=\"am-text-middle\">" + item.book.bookName + "</td>\n" +
                        "                                        <td class=\"am-text-middle\">" + item.book.bookAutor + "</td>\n" +
                        "                                        <td class=\"am-text-middle\">" + item.book.bookPress + "</td>\n" +
                        "                                        <td class=\"am-text-middle\">" + item.book.libraryName + "</td>\n" +
                        "                                        <td class=\"am-text-middle\">" + borrow_days + "</td>\n" +
                        "                                        <td class=\"am-text-middle\">" + item.finePaid + "</td>\n" +
                        "                                    </tr>");
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
        var prePageLi = $("<li></li>").append($("<a></a>").append("&laquo;").attr("href", "#").addClass("prev"));
        //下一页
        var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;").attr("href", "#").addClass("next"));
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
            var numLi = $("<li></li>").append($("<a></a>").append(item).attr("href", "#"));
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

    $("#search").on("click",function () {
        to_page(1);
    })
})