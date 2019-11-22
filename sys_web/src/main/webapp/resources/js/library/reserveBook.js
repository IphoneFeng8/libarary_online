$(function () {
    //图书管理员查询预约图书
    $.ajax({
        url: "/bookcontroller/getReserveBook",
        type: "get",
        data: {"lid": 123456},
        dataType: "json",
        success: function (list) {
            // data服务器端响应的json的数据，进行解析
            var table = $(".am-table tbody");

            for (var i in list) {

                var reserveTime = new Date(list[i].reserve_time).toLocaleDateString();
                var reserveTime2 = new Date(list[i].reserve_time + (1000 * 60 * 60 * 24 * 3)).toLocaleDateString();
                table.append("<tr>" +
                    "<td>" + list[i].nickname + "</td>" +
                    "<td style='display: none'>" + list[i].reserve_id + "</td>" +
                    "<td>" + list[i].book_id + "</td>" +
                    "<td>" + list[i].book_isbn + "</td>" +
                    "<td>" + list[i].book_name + "</td>" +
                    "<td>" + reserveTime + "</td>" +
                    "<td>" + reserveTime2 + "</td>" +
                    // "<td>" + new Date(parseInt((list[i].reserveTime).replace("/Date(", "").replace(")/", ""), 10)).format(format)+ "</td>" +
                    "<td>" + '<div class="am-btn-toolbar"><div class="am-btn-group am-btn-group-xs">' +
                    '<button class="am-btn am-btn-default am-btn-xs am-hide-sm-only" onclick=confirmReserve()>' +
                    '<span class="am-icon-check"></span> 已借 </button></div></div>' +
                    "</td>" +
                    +"</tr>");
            }


        }
    });
});