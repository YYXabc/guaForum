# 瓜论坛
###技术栈
- html5,css3,JavaScript  
- vue.js  
- bootstrap  
- webpack  
- php  
- mysql  
***
###js/
- vueIndex.js:  
主页板块组件和页脚组件  
- vueLogin.js:  
登录和注册组件
- vueNavigationBar.js  
所有页面头部组件
- vueSpainLaLiga.js组件  
所有板块帖子的组件
- vueReply  
回复贴的组件  
###项目简介
实现了登录/注册/回帖/发帖等基本功能。
其中注册是利用AJAX像register.php发送请求。
版块界面中是根据回帖时间进排序,每次只显示10个主题帖,并在载入时利用AJAX像getPageNumber.php发送共有多少页的请求，
并利用返回数据对板块进行跳转页面按钮的调整。并在总页数大于5时生成一个输入页数进行跳转的功能。
在发帖完成时同时生成本地的一个回复页面的html文件

