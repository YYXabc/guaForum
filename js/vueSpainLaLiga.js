let vueSpainLaLiga = new Vue({
    el:"#app",
    data: {
        message:"xx"
    },
    components: {
        'side-navigation-bar':{
            template: ''+
            '<div class="side-navigation-bar">\n' +
            '    <div class="bar-title">所有版块</div>\n' +
            '    <a v-for="(item, index) in url" :href="item">{{name[index]}}</a>' +
            '</div>',
            data: function () {
                return {
                    url:['spain-la-liga.html','england-league.html','germany-bundesliga.html','italia-serie.html'
                        ,'inter-football.html','chinese-football.html','chinese-basketball.html','usa-narrow-band.html'
                        ,'leisure-time.html','electronic-sports.html','movie-television.html','reprint-news.html'],
                    name:['西甲专区','英超专区','德甲专区','意甲专区','国际足球','中国足球','中国篮球','NBA区','茶余饭后','游戏电竞','影视区','搬运区']
                }
            }
        },
        'subject-theme': {
            template:''+
            '<div class="subject-theme">' +
            '    <div class="them-title">主题</div>' +
            '    <div class="them-name">作者</div>' +
            '    <div class="them-time">最后回复</div>' +
            '</div>',
        },
        'my-spain-la-liga': {
            template: '' +
            '    <div class="container">\n' +
            '        <div class="col-lg-12">\n' +
            '            <div class="body">' +
            '                <slot name="side-navigation-bar"></slot>' +
            '                <div class="subject">\n' +
            '                    <div class="subject-top">\n' +
            '                        <div class="subject-top-title"></div>\n' +
            '                        <div class="subject-introduce"></div>' +
            '                        <slot name="subject-theme"></slot>' +
            '                    </div>' +
            '                </div>' +
            '            </div>\n' +
            '        </div>' +
            '        <div class="col-lg-12" id="bottom-navigation-bar"><div class="bottom-navigation-bar"></div></div>' +
            '        <div class="col-lg-12">' +
            '           <div class="release-page">' +
            '               <input id="release-page-title" type="text" placeholder="标题">' +
            '               <textarea id="release-page-text" rows="12"></textarea>' +
            '               <button @click="submit">发布</button>' +
            '           </div>' +
            '        </div>' +
            '    </div>',
            data: function () {
                return {
                    sessionName:"",
                    test:"ddd"
                }
            },

            created: function () {
                let Urlname = this.getUrlName();
                let currentPageNumber = this.getPage();
                let viewTitleSon = function (title,notes,bm) {
                    let titleDiv = $(".subject-top-title");
                    let introduceDiv = $(".subject-introduce");
                    titleDiv.append(`<h3>${title}</h3>`);
                    introduceDiv.append(`<span>版块介绍：</span><span>${notes}</span><br>
                                        <span>版主：<span>${bm}</span></span>`);
                };
                let viewTitle = function () {
                    let urlName = Urlname;
                    if (urlName === "spain-la-liga") {
                        viewTitleSon("西甲专区","欢迎来到西甲专区,西甲球迷的家","C.Yang")
                        document.title = "西甲专区";
                    }
                    else if (urlName === "england-league") {
                        viewTitleSon("英超专区","欢迎来到英超专区,英超球迷的家","C.Yang")
                        document.title = "英超专区";
                    }
                    else if (urlName === "germany-bundesliga") {
                        viewTitleSon("德甲专区","欢迎来到德甲专区,德甲球迷的家","C.Yang")
                        document.title = "";
                    }
                    else if (urlName === "italia-serie") {
                        viewTitleSon("意甲专区","欢迎来到意甲专区,意甲球迷的家","C.Yang")
                        document.title = "德甲专区";
                    }
                    else if (urlName === "inter-football") {
                        viewTitleSon("国际足球话题讨论区","欢迎来到国际足球专区","C.Yang")
                        document.title = "国际足球话题讨论区";
                    }
                    else if (urlName === "chinese-football") {
                        viewTitleSon("中国足球话题讨论区","欢迎来到中国足球专区,国足,中超球迷的家","C.Yang")
                        document.title = "中国足球话题讨论区";
                    }
                    else if (urlName === "chinese-basketball") {
                        viewTitleSon("中国篮球话题讨论区","欢迎来中国篮球话题讨论专区,CBA,篮球迷的家","C.Yang")
                        document.title = "中国篮球话题讨论区";
                    }
                    else if (urlName === "usa-narrow-band") {
                        viewTitleSon("NBA专区","欢迎来到NBA专区,NBA球迷的家","C.Yang")
                        document.title = "NBA专区";
                    }else if (urlName === "leisure-time") {
                        viewTitleSon("茶余饭后","欢迎来到茶余饭后休闲专区","C.Yang")
                        document.title = "茶余饭后";
                    }
                    else if (urlName === "electronic-sports") {
                        viewTitleSon("游戏电竞","欢迎来到游戏电竞区,游戏电竞迷的家","C.Yang")
                        document.title = "游戏电竞";
                    }
                    else if (urlName === "movie-television") {
                        viewTitleSon("影视区","欢迎来到影视专区,影视迷的家","C.Yang")
                        document.title = "影视区";
                    }
                    else if (urlName === "reprint-news") {
                        viewTitleSon("搬运区","欢迎来到搬运专区,发帖注明转载源","C.Yang")
                        document.title = "搬运区";
                    }
                };
                let viewCenter = function (jsonElement) {
                    let urlName = Urlname;
                    let faherDiv = $(".subject");
                        for (let i = 0; i < jsonElement[0].length;i++) {
                            faherDiv.append(`
                            <div class="subject-center">
                                <div class="subject-center-title">
                                    <a 
                                    href='http://localhost/forum1/webView/reply/${urlName}-${jsonElement[0][i]}-1.html'>${jsonElement[2][i]}
                                    </a>
                                </div>
                                <div class="subject-center-name"><span>${jsonElement[1][i]}</span><br><span>${jsonElement[3][i]}</span></div>
                                <div class="subject-center-time">${jsonElement[4][i]}</div>
                            </div> 
                        `);
                        }
                };
                let viewCurrentBottomBar = function (pageNumber) {
                    pageNumber = Number(pageNumber);
                    let currentNumber = Number(currentPageNumber);
                    let urlName = Urlname;
                    let fatherDiv = $(".bottom-navigation-bar");
                    //总页数小于5
                    if (pageNumber <= 5) {
                        for (let i = 0; i < pageNumber; i++) {
                            if (i === 0) {
                                fatherDiv.append(`
                                    <a id="bottom-navigation-bar-0" href="http://localhost/forum1/webView/page/${urlName}.html">1</a>
                                `);
                            }else {
                                fatherDiv.append(`
                                    <a id="bottom-navigation-bar-${i}" href="http://localhost/forum1/webView/page/${urlName}-${i}.html">${i+1}</a>
                                `);
                            }
                        }
                        return true
                    }
                    //总页数大于5
                    else {
                        //第一页
                        fatherDiv.append(`
                            <a id="bottom-navigation-bar-0" href="http://localhost/forum1/webView/page/${urlName}.html">1</a>
                        `);
                        //当前页数小于5
                        if (currentNumber < 4) {
                            for (let i = 1; i < 5; i++) {
                                fatherDiv.append(`
                                    <a id="bottom-navigation-bar-${i}" href="http://localhost/forum1/webView/page/${urlName}-${i}.html">${i+1}</a>
                                `);
                            }
                            fatherDiv.append(`
                                <span>...</span>
                                <a  id="bottom-navigation-bar-${pageNumber-1}" href="http://localhost/forum1/webView/page/${urlName}-${pageNumber-1}.html">${pageNumber}</a>
                                <input type="number" id="jump-number">
                                <button id="jump-page">跳转</button>    
                            `);
                        }
                        //当前页数是最后5页
                        else if (currentNumber +4 > pageNumber) {
                            fatherDiv.append(`
                                <span>...</span>         
                            `);
                            for (let i = pageNumber-4; i < pageNumber-1; i++) {
                                console.log(i);
                                fatherDiv.append(`
                                    <a  id="bottom-navigation-bar-${i}" href="http://localhost/forum1/webView/page/${urlName}-${i}.html">${i+1}</a>  
                                `);
                            }
                            fatherDiv.append(`
                                <a  id="bottom-navigation-bar-${pageNumber-1}" href="http://localhost/forum1/webView/page/${urlName}-${pageNumber-1}.html">${pageNumber}</a>
                                <input type="number" id="jump-number">    
                                <button id="jump-page">跳转</button>
                            `);
                        }
                        else {
                            fatherDiv.append(`
                                <span>...</span>
                                <a id="bottom-navigation-bar-${currentNumber-1}"
                                   href="http://localhost/forum1/webView/page/${urlName}-${currentNumber-1}.html">${currentNumber}</a>  
                                <a id="bottom-navigation-bar-${currentNumber}" 
                                   href="http://localhost/forum1/webView/page/${urlName}-${currentNumber}.html">${currentNumber+1}</a>
                                <a id="bottom-navigation-bar-${currentNumber+1}" 
                                   href="http://localhost/forum1/webView/page/${urlName}-${currentNumber+1}.html">${currentNumber+2}</a>  
                            `);
                            fatherDiv.append(`
                                <span>...</span>
                                <a id="bottom-navigation-bar-${pageNumber}" 
                                    href="http://localhost/forum1/webView/page/${urlName}-${pageNumber-1}.html">${pageNumber}</a>
                                <input type="number" id="jump-number">  
                                <button id="jump-page">跳转</button>  
                            `);
                        }
                        return true
                    }


                };
                let viewBottomBarColor = function (currentPage) {
                    let id = `bottom-navigation-bar-${currentPage}`;
                    document.getElementById(id).style.background = "rgb(181,0,0)"
                    document.getElementById(id).style.color = "#ffffff"
                };
                let jumpPage = function (totalPageNumber) {
                    let jumpPageNumber = Number($('#jump-number').val());
                    if (totalPageNumber < jumpPageNumber || jumpPageNumber <= 0) {
                        alert("找不到页面")
                        return false;
                    }else {
                        if (jumpPageNumber === 1) {
                            window.location.href = `http://localhost/forum1/webView/page/${Urlname}.html`;
                            return true;
                        }else {
                            window.location.href = `http://localhost/forum1/webView/page/${Urlname}-${jumpPageNumber-1}.html`;
                        }
                    }

                };
                let jumpButton = function () {
                    document.getElementById("jump-page").onclick = function () {
                        let request = new XMLHttpRequest();
                        let url = `../../../forum1/phpServer/queryPageNumber.php?bbs=${Urlname}`;
                        request.open("GET", url);
                        request.send();
                        request.onreadystatechange = function () {
                            if (request.readyState == 4) {
                                if (request.status == 200 || request.status == 304) {
                                    jumpPage(request.responseText);
                                }
                            }
                        };
                    }
                };


                let request = new XMLHttpRequest();
                let page = this.getPage();
                let url = `../../../forum1/phpServer/bbsPage.php?bbs=${Urlname}&page=${page}`;
                request.open("GET",url);
                request.send();
                request.onreadystatechange = function () {
                    if (request.readyState == 4) {
                        if (request.status == 200 || request.status == 304) {
                            viewCenter(JSON.parse(request.responseText));
                            viewTitle();
                        }
                    }
                };
                let request2 = new XMLHttpRequest();
                let url2 = `../../../forum1/phpServer/getPageNumber.php?state=${Urlname}`;
                request2.open("GET",url2);
                request2.send();
                request2.onreadystatechange = function () {
                    if (request2.readyState == 4) {
                        if (request2.status == 200 || request2.status == 304) {
                            viewCurrentBottomBar(request2.responseText)
                            viewBottomBarColor(currentPageNumber);
                            jumpButton();
                        }
                    }
                }
            },
            methods: {
                getUrlName : function () {
                    let url = window.location.href;
                    url = url.substring(37,50);
                    if (url === "spain-la-liga") {
                        return "spain-la-liga";
                    }else if (url === "england-leagu") {
                        return "england-league";
                    }else if (url === "germany-bunde") {
                        return "germany-bundesliga";
                    }else if (url === "italia-serie." || url === "italia-serie-") {
                        return "italia-serie";
                    }else if (url === "inter-footbal") {
                        return "inter-football";
                    }else if (url === "chinese-footb") {
                        return "chinese-football";
                    }else if (url === "chinese-baske") {
                        return "chinese-basketball";
                    }else if (url === "usa-narrow-ba") {
                        return "usa-narrow-band";
                    }else if (url === "leisure-time." || url === "leisure-time-") {
                        return "leisure-time";
                    }else if (url === "electronic-sp") {
                        return "electronic-sports";
                    }else if (url === "movie-televis") {
                        return "movie-television";
                    }else if (url === "reprint-news." || url === "reprint-news-") {
                        return "reprint-news";
                    }
                },
                getPage: function () {
                    let urlName = this.getUrlName();
                    let currentUrl = window.location.href;
                    if (urlName === "spain-la-liga") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(51,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "england-league") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(52,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "germany-bundesliga") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(56,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "italia-serie") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(50,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "inter-football") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(52,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "chinese-football") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(54,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "chinese-basketball") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(56,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "usa-narrow-band") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(53,50+(currentUrl.length-55));
                        }
                    }else if (urlName === "leisure-time") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(50,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "electronic-sports") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(55,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "movie-television") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(54,50+(currentUrl.length-55));
                        }
                    }
                    else if (urlName === "reprint-news") {
                        if (currentUrl === `http://localhost/forum1/webView/page/${urlName}.html`) {
                            return 0
                        }else {
                            return currentUrl.substring(50,50+(currentUrl.length-55));
                        }
                    }

                },
                submit:function () {
                    let urlName = this.getUrlName();
                    let title = $('#release-page-title').val();
                    let text = $('#release-page-text').val();
                    let getName = function (session) {
                        if (session === "") {
                            alert("请登录后在发帖")
                            return false;
                        }else if (title === "" || text === "") {
                            alert("标题/正文没有填写")
                            return false;
                        }else if (title.length < 5 || text.length < 5) {
                            alert("标题/正文字数不够")
                            return false;
                        }else {
                            let request = new XMLHttpRequest();
                            let url = `../../../forum1/phpServer/bbsTieZi.php?bbs=${urlName}&name=${session}&title=${title}&text=${text}`;
                            request.open("GET",url);
                            request.send();
                            request.onreadystatechange = function () {
                                if (request.readyState == 4) {
                                    if (request.status == 200 || request.status == 304) {
                                        window.location.href =`../${request.responseText}`;
                                    }
                                }
                            }
                        }
                    }
                    let ajaxGetSession = function () {
                        let request = new XMLHttpRequest();
                        let url = "http://localhost/forum1/phpServer/getLoginSeesion.php";
                        request.open("GET",url);
                        request.send();
                        request.onreadystatechange = function () {
                            if (request.readyState === 4) {
                                if (request.status === 200 || request.status === 304) {
                                    getName(request.responseText)
                                }
                            }
                        }
                    }
                   ajaxGetSession();
                }
            },
        }
    }
})