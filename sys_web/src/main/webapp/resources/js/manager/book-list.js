$(function () {

    to_page(1);

    function to_page(pageNo) {
        var keyword = $.trim($("#search-box").val());
        var typename = $(".am-selected-status").text();
        $.ajax({
            type: "GET",
            url: "/admin/booksList?pageNo=" + pageNo + "&keyword=" + keyword + "&typename=" + typename,
            success: function (data) {

                //循环遍历打印分类信息
                if ($.trim($("#type-box").html()) === "") {
                    $("#type-box").append("<option value=\"option0\">所有类别</option>");
                    $.each(data.data.typeList, function (index, item) {
                        $("#type-box").append("<option value=\"option" + index + "\">" + item.type + "</option>");
                    });
                }

                var pageInfo = data.data.pageInfo;

                //循环遍历打印图书列表
                $("#books-list").empty();
                $.each(pageInfo.list, function (index, item) {
                    var stock = item.stock
                    if (!stock) {
                        stock = 0;
                    }
                    $("#books-list").append("<tr class=\"gradeX\">\n" +
                        "                                                <td>\n" +
                        "                                                    <img src=\'/upload/" + item.bookPic + "' class=\"tpl-table-line-img\" alt=\"\">\n" +
                        "                                                </td>\n" +
                        "                                                <td class=\"am-text-middle\">" + item.bookName + "</td>\n" +
                        "                                                <td class=\"am-text-middle\">" + item.bookIsbn + "</td>\n" +
                        "                                                <td class=\"am-text-middle\">" + item.bookType + "</td>\n" +
                        "                                                <td class=\"am-text-middle\">" + item.bookAutor + "</td>\n" +
                        "                                                <td class=\"am-text-middle\">" + item.bookPress + "</td>\n" +
                        "                                                <td class=\"am-text-middle\">" + item.borrowCount + "</td>\n" +
                        "                                                <td class=\"am-text-middle\">" + stock + "</td>\n" +
                        "                                                <td class=\"am-text-middle\">" + item.totalCount + "</td>\n" +
                        "                                                <td class=\"am-text-middle\">\n" +
                        "                                                    <div class=\"tpl-table-black-operation\">\n" +
                        "                                                        <a href=\"javascript:;\">\n" +
                        "                                                            <i class=\"am-icon-search\"></i> 详情\n" +
                        "                                                        </a>\n" +
                        "                                                    </div>\n" +
                        "                                                </td>\n" +
                        "                                            </tr>"
                    )
                    ;
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

    $("#search").on("click", function () {
        to_page(1);
    })


})



