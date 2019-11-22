$(function () {
    // 图书管理员查询快递表
    $.ajax({
        url: "/bookcontroller/getDeliveryBook",
        type: "get",
        data: {"lid": 123456},
        dataType: "json",
        success: function (list) {
            // console.log(list);
            // data服务器端响应的json的数据，进行解析
            var table = $(".am-table tbody");
            //table.empty();
            for (var i in list) {
                table.append("<tr>" +
                    "<td>" + '<input type="checkbox" class="tpl-table-fz-check">' + "</td>" +
                    "<td style='display: none'>" + list[i].deliveryId + "</td>" +
                    "<td>" + list[i].userInfo.nickname + "</td>" +
                    "<td>" + list[i].book.bookId + "</td>" +
                    "<td>" + list[i].book.bookName + "</td>" +
                    "<td>" + list[i].deliveryName + "</td>" +
                    "<td>" + list[i].deliveryPhone + "</td>" +
                    "<td>" + list[i].deliveryAddress + "</td>" +
                    "<td>" + list[i].deliveryStatus + "</td>" +
                    "<td>" + '<div class="am-btn-toolbar"><div class="am-btn-group am-btn-group-xs">' +
                    '<button class="am-btn am-btn-default am-btn-xs am-hide-sm-only" onclick=confirmDelivery()><span class="am-icon-send-o"></span> 已发</div> </div>' +
                    "</td>" +
                    +"</tr>");

            }
        }
    });
});