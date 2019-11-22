$(function () {
    $.ajax({
        url:"/books/getReturnList",
        type:"GET",
        data:{"libraryId":123456,"pageNo":1},
        dataType:"json",
        success:function (list) {
            //alert("aaa");
            var row="";
            var table = $("#ReturnBookTable");
            for (var i in list){

                var date1 = new Date(list[i].borrow_time);
                var date2 = new Date(list[i].return_time);
                var str1 = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate();
                var str2 = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate();
                table.append(
                    "<tr>"+
                    "<td>"+list[i].nickname+"</td>"+
                    "<td>"+list[i].book_id+"</td>"+
                    "<td>"+list[i].book_isbn+"</td>"+
                    "<td>"+list[i].book_name+"</td>"+
                    "<td>"+list[i].book_type+"</td>"+
                    "<td>"+str1+"</td>"+
                    "<td>"+str2+"</td>"+
                    "</tr>"

                );
            }
        }
    })
})