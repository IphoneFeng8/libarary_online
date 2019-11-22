$(function () {
    // //图书馆登录加载所有图书
    // $.ajax({
    //     url:"/bookcontroller/libraryGetList",
    //     type:"GET",
    //     success:function (list) {
    //         //alert(list);
    //         // data服务器端响应的json的数据，进行解析
    //         var rows="";
    //         var table=$("#bookTable");
    //         //table.empty();
    //         for(var i in list){
    //             //alert(list[i].id);
    //             table.append("<tr>" +
    //                 "<td>"+'<input type="checkbox" class="tpl-table-fz-check">'+"</td>"+
    //                 "<td>"+list[i].bookId+"</td>"+
    //                 "<td>"+list[i].bookName+"</td>"+
    //                 "<td>"+list[i].bookAutor+"</td>"+
    //                 "<td>"+list[i].bookType+"</td>"+
    //                 "<td>"+list[i].bookPrice+"</td>"+
    //                 "<td>"+list[i].bookPress+"</td>"+
    //                 "<td>"+list[i].bookLanguage+"</td>"+
    //                 "<td>"+list[i].borrowedCount+"</td>"+
    //                 "<td>"+list[i].bookStatus+"</td>"+
    //                 "<td>"+'<div class="am-btn-toolbar"><div class="am-btn-group am-btn-group-xs"><button class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-pencil-square-o"></span><a href="add-book.html">编辑</a></button><button class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span>详情 </button> <button book-id='+list[i].bookId+' type="button" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only del"> <span class="am-icon-trash-o"></span>删除 </button> </div> </div>'+
    //             "</td>"+
    //                 +"</tr>");
    //
    //         }
    //     }
    // });

    // //事件委托
    // $("#bookTable").click(function (e) {
    //     //alert("sss")
    //     //console.log(e.target.className);
    //     //console.log(e.target.className.indexOf("del"));
    //     if(e.target.className.indexOf("del") !== -1){
    //         // console.log(e.target);
    //         var ele = $(e.target);
    //         var bookId = e.target.attributes["book-id"].nodeValue;
    //         $.ajax({
    //             url:"/bookcontroller/deleteBook",
    //             type:"get",
    //             data:{"bookId":bookId},
    //             dataType:"json",
    //             success:function (result) {
    //                 if(result===1){
    //                     ele.parents("tr").remove();
    //                 }else{
    //                     alert(222);
    //                 }
    //             }
    //         });
    //     }
    // })


});

//图书馆查看该馆类别图书
function getTypeList() {
    var type=$("#typeSelect").val();
    $.ajax({
        url:"/bookcontroller/getTypeList",
        type:"get",
        data:{"type":type,},
        dataType:"json",
        success:function (list) {
            //alert(list);
            // data服务器端响应的json的数据，进行解析
            var tbody=$("#bookTable").find('tbody');
            tbody.empty();
            for(var i in list){
                //alert(list[i].id);
                tbody.append("<tr>" +
                    "<td>"+'<input type="checkbox" class="tpl-table-fz-check">'+"</td>"+
                    "<td>"+list[i].bookId+"</td>"+
                    "<td>"+list[i].bookName+"</td>"+
                    "<td>"+list[i].bookAutor+"</td>"+
                    "<td>"+list[i].bookType+"</td>"+
                    "<td>"+list[i].bookPrice+"</td>"+
                    "<td>"+list[i].bookPress+"</td>"+
                    "<td>"+list[i].bookLanguage+"</td>"+
                    "<td>"+list[i].borrowedCount+"</td>"+
                    "<td>"+list[i].bookStatus+"</td>"+
                    "<td>"+'<div class="am-btn-toolbar"><div class="am-btn-group am-btn-group-xs"><button class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-pencil-square-o"></span><a href="add-book.html">编辑</a></button><button class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span>详情 </button> <button book-id='+list[i].bookId+' type="button" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only del"> <span class="am-icon-trash-o"></span>删除 </button> </div> </div>'+
                    "</td>"+
                    +"</tr>");
            }
        }
    });
}
