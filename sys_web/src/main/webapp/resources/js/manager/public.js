$(function () {
    //判断管理员是否已登录
    // var cookie = $.cookie('manager');
    // if (cookie === undefined) {
    //     alert("你尚未登录，请先登录");
    //     location.href = "login.html";
    // }

    //登出
    $("#logout").on("click", function () {
        $.ajax({
            url: "/admin/logout",
            type: "GET",
            success: function (data) {
                if (data.code === 200) {
                    alert("成功登出");
                    location.href = "login.html";
                }
            }
        })
    })

    getMessageCount();

    //获取消息条数
    function getMessageCount() {
        $.ajax({
            url: "/admin/messageCount",
            type: "GET",
            success: function (data) {
                var checkCount = data.data.map.checkCount;
                var refundCount = data.data.map.refundCount;

                $("#check-count").text("有" + checkCount + "个图书馆信息等待审核");
                $("#refund-count").text("有" + refundCount + "个人申请退款");
                $("#total-count").text(checkCount + refundCount);
            }
        })
    }
})