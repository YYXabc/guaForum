let navBar = new Vue({
    el:"#app",
    data: {

    },
    components: {
        'my-navigation-bar': {
            template:'' +
            '        <nav class="navbar navbar-default" role="navigation" id="my-navigation-bar">\n' +
            '            <div class="container-fluid">\n' +
            '                <div class="navbar-header">\n' +
            '                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">\n' +
            '                        <span class="icon-bar"></span>\n' +
            '                        <span class="icon-bar"></span>\n' +
            '                        <span class="icon-bar"></span>\n' +
            '                    </button>\n' +
            '                    <a class="navbar-brand" :href="url.homepage" id="navigation-title">瓜皮论坛</a>\n' +
            '                </div>\n' +
            '                <div class="collapse navbar-collapse" id="example-navbar-collapse">\n' +
            '                    <ul class="nav navbar-nav">\n' +
            '                        <li><a :href="url.login" class="navigation-login">登录/注册</a></li>\n' +
            '                        <li><a :href="url.github" target="_blank">GitHub</a></li>\n' +
            '                        <li class="dropdown">\n' +
            '                            <a href="" class="dropdown-toggle" data-toggle="dropdown">论坛分区<b class="caret"></b></a>\n' +
            '                            <ul class="dropdown-menu">\n' +
            '                                <li v-for="(item, index) in areaName">' +
            '                                   <a :href="plateUrl[index]">{{item}}</a>' +
            '                                </li>\n'+
            '                            </ul>\n' +
            '                        </li>' +
            '                    </ul>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </nav>',
            data: function () {
                return {
                    url: {
                        homepage:'http://localhost/forum1/',
                        login:'http://localhost/forum1/webView/user-login.html',
                        github:'https://github.com/YYXabc/',
                        quit:"http://localhost/forum1/quit.php"
                    },
                    plateUrl:['http://localhost/forum1/webView/page/spain-la-liga.html','http://localhost/forum1/webView/page/england-league.html'
                        ,'http://localhost/forum1/webView/page/germany-bundesliga.html','http://localhost/forum1/webView/page/italia-serie.html'
                        ,'http://localhost/forum1/webView/page/inter-football.html','http://localhost/forum1/webView/page/chinese-football.html'
                        ,'http://localhost/forum1/webView/page/chinese-basketball.html','http://localhost/forum1/webView/page/usa-narrow-band.html'
                        ,'http://localhost/forum1/webView/page/leisure-time.html','http://localhost/forum1/webView/page/electronic-sports.html'
                        ,'http://localhost/forum1/webView/page/movie-television.html','http://localhost/forum1/webView/page/reprint-news.html'],
                    areaName:['西甲专区','英超专区','德甲专区','意甲专区','国际足球','中国足球','中国篮球','NBA区','茶余饭后','游戏电竞','影视区','搬运区']
                }
            },
            mounted:function () {
                let isLoginState = function (session) {
                    if (session !== "") {
                        $(".navigation-login").text(session);
                        $(".navigation-login").attr("href","#")
                        $(".nav.navbar-nav").append("" +
                            "<li><a href='http://localhost/forum1/webView/quit.php'>" +
                            "   <span class='glyphicon glyphicon-off' id='off-button'></span>" +
                            "</a></li>"
                        )
                    }
                }

                let request = new XMLHttpRequest();
                let url = "http://localhost/forum1/phpServer/getLoginSeesion.php";
                request.open("GET",url);
                request.send();
                request.onreadystatechange = function () {
                    if (request.readyState == 4) {
                        if (request.status == 200 || request.status == 304) {
                            isLoginState(request.responseText);
                        }
                    }
                }

            },
        }
    }
});