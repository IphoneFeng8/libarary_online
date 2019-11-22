$(function () {
    $.ajax({
        type:"GET",
        url:"/admin/message",
        success:function (data) {
            $("#refund-box").empty();
            //退款的页面和操作
            $.each(data.data.refundList,function (index,item) {
                $("#refund-box").append("<tr class=\"gradeX\">\n" +
                    "                                            <td>"+item.id+"</td>\n" +
                    "                                            <td>"+item.name+"</td>\n" +
                    "                                            <td>"+item.phone+"</td>\n" +
                    "                                            <td>"+item.alipay+"</td>\n" +
                    "                                            <td>"+item.balance+"</td>\n" +
                    "                                            <td>\n" +
                    "                                                <div class=\"tpl-table-black-operation\">\n" +
                    "                                                    <a href=\"javascript:;\" class='pass'>\n" +
                    "                                                        <i class=\"am-icon-pencil\"></i> 通过\n" +
                    "                                                    </a>\n" +
                    "                                                </div>\n" +
                    "                                            </td>\n" +
                    "                                        </tr>")
            });
            $(".pass").on("click",function () {
                var tr = $(this).parents(".gradeX");
                var userId = tr.children(":first").text();
                $.ajax({
                    url:"/admin/refund/"+userId,
                    type: "PUT",
                    success:function (data) {
                        alert("退款成功！");
                        tr.remove();
                    }
                })
            })

            //图书馆审核列表
            $.each(data.data.checkList,function (index,item) {
                $("#check-list").append("<tr class=\"gradeX\" id='"+item.library_id+"'>\n" +
                    "                                            <td>"+item.library_name+"</td>\n" +
                    "                                            <td>"+item.librarian_name+"</td>\n" +
                    "                                            <td>"+item.librarian_phone+"</td>\n" +
                    "                                            <td>\n" +
                    "                                                <div class=\"tpl-table-black-operation\">\n" +
                    "                                                    <a href=\"javascript:;\" class=\"tpl-table-black-operation-del check\">\n" +
                    "                                                        <i class=\"am-icon-check\"></i> 通过\n" +
                    "                                                    </a>\n" +
                    "                                                </div>\n" +
                    "                                            </td>\n" +
                    "                                        </tr>")
            });
            $(".check").on("click",function () {
                var tr = $(this).parents(".gradeX");
                var libraryId = tr.attr("id");
                $.ajax({
                    url:"/admin/check/"+libraryId,
                    type: "PUT",
                    success:function (data) {
                        alert("审核通过！");
                        tr.remove();
                    }
                })
            })
        }
    })
})