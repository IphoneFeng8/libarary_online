# libarary_online
终极版 v0.0.1


项目

一、需求分析

1.1 业务需求

	本网站是一个网上借书平台，因此在设计角度上要考虑核心用户的功能设计，首先先实现核心的功能，再考虑一般的功能需求。

	对于普通用户，最重要的事借书功能的实现，除此之外还需要搜索书、还书、充钱借书等功能也是必须的。

	对于图书馆管理员，最重要的是管理图书的功能，此外则需要查看借书和还书的列表清单以及图书损坏对借书人的罚款操作。



1.2 功能需求

1.2.1 用户端功能

- 登录注册
- 修改用户资料
- 搜索所需图书
- 借书（自提或者快递）
- 查看借（还）书清单
- 管理余额（充值、退款）

1.2.2 图书馆管理员功能

- 登录注册
- 修改资料
- 增加图书
- 删除图书
- 修改图书信息
- 查看清单
- 财务管理
- 发送消息给用户

1.2.3 平台管理员功能

- 登录
- 图书馆管理（审核、删除）
- 用户管理（黑名单、退款）
- 查看清单



1.3 需求描述术语表

1.3.1 用户基本信息表(user)

   编号 	数据项 	 数据项别名  	 数据类型  	 长度 	 备注 
   1  	用户id	user_id 	  int  	 8  	 主键 
   2  	用户名 	username	varchar	 11 	用户电话
   3  	 密码 	user_pwd	varchar	 18 	    



1.3.2 用户详细信息表(user_info)

   编号 	 数据项 	   数据项别名    	 数据类型  	 长度 	 备注 
   1  	用户id 	  user_id   	  int  	 8  	 主键 
   2  	 姓名  	  nickname  	varchar	 20 	    
   3  	 性别  	  user_sex  	varchar	 4  	    
   4  	 地址  	user_address	varchar	100 	    
   5  	 手机  	 user_phone 	varchar	 11 	 唯一 
   6  	邮箱地址 	 user_email 	varchar	 30 	    
   7  	身份证号码	user_id_card	varchar	 20 	 唯一 
   8  	用户年龄 	  user_age  	  int  	 4  	    
   9  	共借书数量	borrow_count	  int  	 8  	默认0 

规定 : 手机，身份证都是唯一信息，注册时需要验证。注意手机为登录用户名，当用户修改手机时需要将用户表中的登录用户名改为修改后的手机。



1.3.3用户管理表(user_manage)

   编号 	数据项 	   数据项别名    	 数据类型 	 长度 	 备注 
   1  	用户id	  user_id   	 int  	 8  	 主键 
   2  	用户余额	user_balance	double	 18 	默认0 
   3  	 状态 	user_status 	 int  	 1  	默认1 

规定 : user_status状态码应统一规范为：

1 :  用户创建后的默认值，即活跃的正常用户

0 : 用户因违规操作被拉黑

2 : 申请退款



1.3.4 图书馆账号信息表(library)

   编号 	数据项 	   数据项别名   	 数据类型  	 长度 	 备注 
   1  	用户id	library_id 	  int  	 8  	 主键 
   2  	用户密码	library_pwd	varchar	 18 	    



1.3.5 图书馆信息表(library_info)

   编号 	 数据项 	     数据项别名     	 数据类型  	 长度 	 备注 
   1  	用户id 	  library_id   	  int  	 8  	 主键 
   2  	图书馆名 	 library_name  	varchar	 32 	    
   3  	 地址  	library_address	varchar	100 	    
   4  	负责人姓名	librarian_name 	varchar	 16 	    
   5  	负责人性别	 librarian_sex 	varchar	 4  	    
   6  	负责人手机	librarian_phone	varchar	 11 	    
   7  	负责人邮箱	librarian_email	varchar	 40 	    
   8  	审核状态 	   auditing    	  int  	 1  	默认0 
   9  	共收罚款 	  total_paid   	double 	 16 	    

规定 : auditing应统一规范为

0 :  用户创建后的默认值，待审核的意思

1 : 审核通过，以后为正常用户

2 : 图书馆因违规操作被拉黑（待定）



1.3.6 图书信息表(book)

   编号 	  数据项   	    数据项别名     	 数据类型  	 长度 	 备注 
   1  	  图书id  	   book_id    	  int  	 8  	 主键 
   2  	 所在馆id  	  library_id  	  int  	 8  	 外码 
   3  	  出版社   	  book_press  	varchar	 50 	    
   4  	  出版时间  	  book_date   	 date  	    	    
   5  	ISBN(书号)	  book_isbn   	  int  	 16 	    
   6  	   页数   	  book_page   	varchar	 4  	    
   7  	   语言   	book_language 	varchar	 16 	    
   8  	   类型   	  book_type   	  int  	 4  	    
   9  	   原价   	  book_price  	double 	 18 	 10 
   10 	   状态   	 book_status  	  int  	 1  	    
   11 	  被借次数  	borrowed_count	  int  	 8  	    
   12 	   作者   	  book_autor  	varchar	 30 	    
   13 	  图书馆名  	 library_name 	varchar	 32 	    

规定 : book_status应统一规范为

0 :  图书创建后的默认值，可以正常被借（这个记住不要搞错）

1 : 图书被预约了

2 : 图书被预约借走

3 : 图书被快递借走



1.3.7 图书分类表(books_sort)

   编号 	数据项 	   数据项别名   	 数据类型  	 长度 	 备注 
   1  	表id 	  sort_id  	  int  	 4  	 主键 
   2  	 类型 	   sort    	varchar	 16 	    
   3  	 数量 	books_count	  int  	 8  	    



1.3.8 借书记录表(borrow_record)

   编号 	 数据项  	    数据项别名    	数据类型	 长度 	 备注 
   1  	 表id  	  borrow_id  	int 	 8  	 主键 
   2  	借书用户id	   user_id   	int 	 8  	 外码 
   3  	 图书id 	   book_id   	int 	 8  	 外码 
   4  	 借书日期 	 borrow_time 	date	    	    
   5  	  状态  	borrow_status	int 	 1  	    

规定 : borrow_status应统一规范为

0 :  已经将图书归还了

1 : 预约了书

2 : 预约的方式借书 

3 : 快递的方式借书（未发）

4 : 快递的方式借书（已发）



1.3.9 借书预约表(reserve_record)

   编号 	 数据项  	    数据项别名     	数据类型	 长度 	 备注 
   1  	 表id  	  reserve_id  	int 	 8  	 主键 
   2  	借书表id 	  borrow_id   	int 	 8  	 外码 
   3  	 预约时间 	 reserve_time 	date	    	    
   4  	预约取书时间	 borrow_time  	date	    	    
   5  	 预约状态 	reserve_status	int 	 1  	    

规定 : reserve_status应统一规范为

0 :  借书过程结束

1 : 表创建以后的默认值，成功预约图书



1.3.10 借书快递表(delivery_record)

   编号 	 数据项  	     数据项别名      	 数据类型  	 长度 	 备注 
   1  	 表id  	  delivery_id   	  int  	 8  	 主键 
   2  	借书表id 	   borrow_id    	  int  	 8  	 外码 
   3  	快递联系人 	 delivery_name  	varchar	 16 	    
   4  	快递联系号码	 delivery_phone 	varchar	 11 	    
   5  	 快递地址 	delivery_address	varchar	100 	    
   6  	  状态  	delivery_status 	  int  	 1  	默认1 
   7  	 快递日期 	 delivery_time  	 date  	    	    
   8  	 预约日期 	  reserve_time  	 date  	    	    

规定 : delivery_status应统一规范为

0 : 借书过程结束 

1 : 表创建以后的默认值，预约快递服务，但是未发快递，用来提醒图书馆发快递

2 : 图书馆已发快递



1.3.11 还书记录表(return_record)

   编号 	 数据项  	   数据项别名   	 数据类型 	 长度 	 备注 
   1  	 表id  	 return_id 	 int  	 8  	 主键 
   2  	借书用户id	  user_id  	 int  	 8  	 外码 
   3  	 图书id 	  book_id  	 int  	 8  	 外码 
   4  	 已交罚款 	 fine_paid 	double	 16 	    
   5  	 借书日期 	borrow_time	 date 	    	    
   6  	 还书日期 	return_time	 date 	    	    



1.3.12 消息管理表(message)

   编号 	 数据项 	     数据项别名     	 数据类型  	 长度 	 备注 
   1  	 表id 	  message_id   	  int  	 8  	 主键 
   2  	用户id 	    user_id    	  int  	 8  	 外码 
   3  	图书馆id	  library_id   	  int  	 8  	 外码 
   4  	消息内容 	message_context	varchar	255 	    
   5  	 状态  	message_status 	  int  	 1  	默认1 
   6  	发送时间 	 message_time  	 date  	    	    

规定 : message_status应统一规范为

0 : 已读状态 

1 : 表创建以后的默认值，消息已发送，但是未读状态



1.3.13 平台管理员表(admin)

   编号 	 数据项 	  数据项别名  	 数据类型  	 长度 	 备注 
   1  	管理员id	admin_id 	varchar	 8  	 主键 
   2  	管理员密码	admin_pwd	varchar	 18 	    



1.3.14 罚金表（paid_record）

   编号 	 数据项 	  数据项别名  	 数据类型 	 长度 	 备注 
   1  	 表id 	 paid_id 	 int  	 8  	 主键 
   2  	还书表id	return_id	 int  	 8  	 外码 
   3  	罚金金额 	  paid   	double	 16 	    



二、概要设计

2.1 开发环境

    开发   	                   版本                   
   开发环境  	                windows                 
   开发工具  	IntelliJ IDEA 2019.1.3 (Ultimate Edition)
   开发框架  	     ssm（Spring+SpringMVC+Mybatis）      
  Spring 	             5.1.9.RELEASE              
  Mybatis	                 3.4.5                  
   Mysql 	                 5.1.6                  
   JAVA  	              jdk1.8.0_181              
    前端   	    html+css+js  (jQuery+Bootstrap)     
    浏览器  	               Chrome浏览器                
    风格   	               RESTFul风格                



2.2 系统架构设计

	本网站系统采用了ssm框架，该框架采用了MVC设计模式，MVC是一种适用于Web程序，将应用程序的逻辑层和表现层进行分离的方法，提供了一种敏捷开发的手段。

模型（M）：模型的定义由Model类（即为POJO类）来完成。
控制器（C）：控制器中存放的是后台代码，用以对前端页面传来的数据进行处理以及判断，判断后对数据库进行不同的操作获得数据，并将数据结果返回前端页面。
视图（V）：由jsp页面组成，可以根据功能地不同来划分为多个文件夹，每个文件夹的名字分别对应一个控制器。





三、详细设计

3.1 类设计

3.1.1 用户类图

和用户进行交互的类，以及他们之间的关系如图（图中的某些属性字段没有改，懒得改了）：





3.1.2 图书馆管理员类图

和图书馆进行交互的类，以及他们之间的关系如图（图中的某些属性字段没有改，懒得改了）：







3.2 系统流程

3.2.1 用户流程图





3.2.2 图书馆管理员流程图







3.3 系统界面设计

3.3.1 用户页面

1. 登录
2. 注册
3. 首页
4. 书的详情页面（可以用模态框来写）
5. 确认借书填写资料页面
6. 个人中心首页
7. 修改资料页面
8. 借书、还书列表页
9. 管理余额页
10. 消息页面



3.3.2 图书馆管理员页面

1. 登录
2. 注册
3. 图书列表页面
4. 图书详情页面（模态框）
5. 添加图书页面（修改页面）
6. 修改图书馆资料页面
7. 借阅管理页面（查看借书以及还书页面）
8. 财务管理页面



3.3.3 平台管理员页面

1. 登录
2. 首页
3. 消息页面
4. 图书列表
5. 借阅管理页面（查看借书以及还书页面）
6. 用户列表
7. 图书馆列表
