$(function () {
    topage();
    send();
    returnBook();
    function topage() {
        $.ajax({
            url: "/books/getBorrowList",
            type: "GET",
            data: {"libraryId": 123456},
            dataType: "json",
            success: function (list) {
                //alert("aaa");
                var row = "";
                var table = $(".am-table tbody");
                table.empty();
                for (var i in list) {
                    var date = new Date(list[i].borrow_time);
                    var str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
                    var status=null;
                    if (Number(list[i].borrow_status)===0) {
                        status="已归还";
                    }else {
                        status="已借未归还";
                    }
                    /*alert(Number(list[i].borrow_status));*/
                    table.append(
                        "<tr>" +
                        "<td>" + list[i].borrow_id + "</td>" +
                        "<td>" + list[i].user_id + "</td>" +
                        "<td>" + list[i].book_id + "</td>" +
                        "<td>" + list[i].book_name + "</td>" +
                        "<td>" + str + "</td>" +
                        "<td>" + status + "</td>" +
                        "<td>" +
                        "<div class='am-btn-group am-btn-group-xs'><button class='am-btn am-btn-default am-btn-xs am-text-secondary messageSendBtn' type='button'    data-toggle='modal' data-target='#SendmyModal'><span class='am-icon-pencil-square-o'></span>发送提醒</button>" +
                        "<button class='am-btn am-btn-default am-btn-xs am-hide-sm-only returnBtn' type='button'><span class='am-icon-check' ></span> 确认还书</button></div></div></td></tr>"
                    );
                }
            }
        });
    }


    function send() {
        $(document).on("click",".messageSendBtn",function () {
            var id=$(this).parents("tr").find("td:eq(1)").text();
            /*var id= $(this).parent().parent().children("td").eq(1).text();*/
            $("#sendBtn").attr("name",id);
            $("#SendmyModal").modal({
                backdrop:"static"
            });
        });
        $("#sendBtn").click(function () {
            var val = $("#messageContext").val();
            alert(val);
            alert($("#sendBtn").attr("name"));
            $.ajax({
                url:"/books/sendMessage",
                data:{
                    "userId":$("#sendBtn").attr("name"),
                    "libraryId":123456,
                    "messageContext":val

                },
                dataType:"text",
                success:function (result) {
                    $("#SendmyModal").modal('hide');
                    alert("发送成功！")
                }

            })
        })
    }

    function returnBook() {
        $(document).on("click",".returnBtn",function () {
            var borrowId=$(this).parents("tr").find("td:eq(0)").text();
            var userId=$(this).parents("tr").find("td:eq(1)").text();
            var Name=$(this).parents("tr").find("td:eq(3)").text();
            if (confirm("用户"+userId+"确认归还【"+Name+"】吗？")) {
                $.ajax({
                    url:"/books/returnBook",
                    data:{
                        "borrowId":borrowId
                    },
                    dataType:"text",
                    type:"POST",
                    success:function (result) {
                        alert("还书成功");

                        topage();
                    }
                })
            }

        })
    }
})
    







