let vueReply = new Vue({
    el:"#app",
    data: {

    },
    props:['dd'],
    components:{
        'my-center':{
            template:'' +
            '   <div class="container">\n' +
            '        <div class="col-lg-12">\n' +
            '            <div class="body">\n' +
            '                <div class="body-top">\n' +
            '                    <a v-for="(item, index) in url" :href="item">{{name[index]}}</a>\n' +
            '                    <input type="text">\n' +
            '                    <button>搜索</button>\n' +
            '                </div>\n' +
            '                <div class="body-center">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>' +
            '        <div class="col-lg-12">' +
            '           <div class="bottom-navigation-bar"></div>' +
            '        </div>' +
            '        <div class="col-lg-12">' +
            '           <div class="submit">' +
            '               <div class="submit-reply">' +
            '                   <textarea id="release-page-text" rows="5"></textarea ><button @click="submit">提交</button>' +
            '               </div>' +
            '           </div>' +
            '        </div>' +
            '    </div>',
            data: function () {
                return {
                    url:['../page/spain-la-liga.html','../page/england-league.html','../page/germany-bundesliga.html','../page/italia-serie.html'
                        ,'../page/inter-football.html','../page/chinese-football.html','../page/chinese-basketball.html','../page/usa-narrow-band.html'
                        ,'../page/leisure-time.html','../page/electronic-sports.html','../page/movie-television.html','../page/reprint-news.html'],
                    name:['西甲专区','英超专区','德甲专区','意甲专区','国际足球','中国足球','中国篮球','NBA区','茶余饭后','游戏电竞','影视区','搬运区']
                }
            },
            created: function () {
                let urlName = this.getPageName();
                let urlNumber = Number(this.getUrlNumber());
                let pageNumber = this.getPageNumber();

                let viewReleaseMessage = function (releaseName) {
                    let fatherDiv = $(".body-center-main-title-message");

                    if (urlName === "spain-la-liga") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·西甲专区 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "england-league") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·英超专区 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "germany-bundesliga") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·德甲专区 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "italia-serie") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·意甲专区 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "inter-football") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·国际足球 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "chinese-football") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·中国足球 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "chinese-basketball") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·中国篮球 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "usa-narrow-band") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·NBA专区 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }else if (urlName === "leisure-time") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·茶余饭后 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "electronic-sports") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·游戏电竞 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "movie-television") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·影视区 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                    else if (urlName === "reprint-news") {
                        fatherDiv.text(`由 ${releaseName}发表在 瓜皮论坛·搬运区 http://localhost/forum1/webView/page/spain-la-liga.html`);
                    }
                }
                let viewMessage = function (element) {
                    let father = $(".body-center");
                    if (pageNumber === "1") {
                        father.append(`
                            <div class="body-center-title">${element[1][0]}</div>
                            <div class="body-center-main">
                                <div class="body-center-main-message">
                                    <div class="body-center-main-message-name">${element[0][0]}</div> 
                                    <div class="body-center-main-message-time">${element[3][0]}</div>
                                </div>
                                <div class="body-center-main-title">
                                    <div class="body-center-main-title-title">${element[1][0]}</div>
                                    <div class="body-center-main-title-message">
                                       
                                    </div>
                                </div>
                                <div class="body-center-main-text">
                                    ${element[2][0]}
                                </div>
                            </div>
                        `)
                        viewReleaseMessage(element[0][0])
                        for (let i = 1; i < element[0].length; i++) {
                            father.append(`
                                <div class="body-center-reply">
                                    <div class="body-center-reply-message">
                                        <div class="body-center-reply-message-name">${element[0][i]}</div>
                                        <div class="body-center-reply-message-time">${element[3][i]}</div>
                                        <div class="body-center-reply-message-count">${(pageNumber-1)*10+i}楼</div>
                                    </div>
                                    <div class="body-center-reply-text">
                                        ${element[2][i]}
                                    </div>
                                </div>
                            `)
                        }
                    }else {
                        for (let i = 0; i < element[0].length; i++) {
                            father.append(`
                                <div class="body-center-reply">
                                    <div class="body-center-reply-message">
                                        <div class="body-center-reply-message-name">${element[0][i]}</div>
                                        <div class="body-center-reply-message-time">${element[3][i]}</div>
                                        <div class="body-center-reply-message-count">${(pageNumber-1)*10+i}楼</div>
                                    </div>
                                    <div class="body-center-reply-text">
                                        ${element[2][i]}
                                    </div>
                                </div>
                            `)
                        }
                    }
                };
                let viewCurrentBottomBar = function (totalPageNumber) {
                    totalPageNumber = Number(totalPageNumber);
                    let currentNumber = Number(pageNumber);
                    let fatherDiv = $(".bottom-navigation-bar");

                    //总页数小于5
                    if (totalPageNumber <= 5) {
                        for (let i = 0; i < totalPageNumber; i++) {
                            fatherDiv.append(`
                                <a id="bottom-navigation-bar-${i+1}" 
                                    href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${i+1}.html">${i+1}
                                </a>
                            `);
                        }
                        return true
                    }
                    //总页数大于5
                    else {
                        //第一页
                        fatherDiv.append(`
                            <a id="bottom-navigation-bar-1" 
                            href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-1.html">1
                            </a>
                        `);
                        //当前页数小于5
                        if (currentNumber < 4) {
                            for (let i = 2; i < 5; i++) {
                                fatherDiv.append(`
                                    <a id="bottom-navigation-bar-${i}" 
                                    href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${i}.html">${i}
                                    </a>
                                `);
                            }
                            fatherDiv.append(`
                                <span>...</span>
                                <a  id="bottom-navigation-bar-${totalPageNumber}" 
                                href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${totalPageNumber}.html">${totalPageNumber}
                                </a>
                                <input type="number" id="jump-number">
                                <button id="jump-page">跳转</button>    
                            `);
                        }
                        //当前页数是最后5页
                        else if (currentNumber +3 > totalPageNumber) {
                            fatherDiv.append(`
                                <span>...</span>         
                            `);
                            for (let i = totalPageNumber-3; i < totalPageNumber; i++) {
                                fatherDiv.append(`
                                    <a  id="bottom-navigation-bar-${i}" 
                                    href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${i}.html">${i}
                                    </a>  
                                `);
                            }
                            fatherDiv.append(`
                                <a  id="bottom-navigation-bar-${totalPageNumber}" 
                                href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${totalPageNumber}.html">${totalPageNumber}
                                </a>
                                <input type="number" id="jump-number">    
                                <button id="jump-page">跳转</button>
                            `);
                        }
                        else {
                            fatherDiv.append(`
                                <span>...</span>
                                <a id="bottom-navigation-bar-${currentNumber-1}"
                                   href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${currentNumber-1}.html">${currentNumber-1}</a>  
                                <a id="bottom-navigation-bar-${currentNumber}" 
                                   href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${currentNumber}.html">${currentNumber}</a>
                                <a id="bottom-navigation-bar-${currentNumber+1}" 
                                   href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${currentNumber+1}.html">${currentNumber+1}</a>  
                            `);
                            fatherDiv.append(`
                                <span>...</span>
                                <a id="bottom-navigation-bar-${totalPageNumber}" 
                                    href="http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${totalPageNumber}.html">${totalPageNumber}</a>
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
                        window.location.href = `http://localhost/forum1/webView/reply/${urlName}-${urlNumber}-${jumpPageNumber}.html`;
                    }

                };
                let jumpButton = function () {
                    document.getElementById("jump-page").onclick = function () {
                        let request = new XMLHttpRequest();
                        let url = `../../../forum1/phpServer/getReplyPageNumber.php?bbs=${urlName}&urlNumber=${urlNumber}`;
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
                let url = `../../../forum1/phpServer/bbsReply.php?bbs=${urlName}&urlNumber=${urlNumber}&pageNumber=${pageNumber}`;
                request.open("GET",url);
                request.send();
                request.onreadystatechange = function () {
                    if (request.readyState == 4) {
                        if (request.status == 200 || request.status == 304) {
                            viewMessage(JSON.parse(request.responseText));
                        }
                    }
                };

                let request2 = new XMLHttpRequest();
                let url2 = `../../../forum1/phpServer/getReplyPageNumber.php?bbs=${urlName}&urlNumber=${urlNumber}`;
                request2.open("GET",url2);
                request2.send();
                request2.onreadystatechange = function () {
                    if (request2.readyState == 4) {
                        if (request2.status == 200 || request2.status == 304) {
                            viewCurrentBottomBar(request2.responseText)
                            viewBottomBarColor(pageNumber)
                            jumpButton();
                        }
                    }
                };
            },
            methods: {
                getPageName : function () {
                    let url = window.location.href;
                    url = url.substring(38,51);
                    if (url === "spain-la-liga") {
                        return "spain-la-liga";
                    }else if (url === "england-leagu") {
                        return "england-league";
                    }else if (url === "germany-bunde") {
                        return "germany-bundesliga";
                    }else if (url === "italia-serie-") {
                        return "italia-serie";
                    }else if (url === "inter-footbal") {
                        return "inter-football";
                    }else if (url === "chinese-footb") {
                        return "chinese-football";
                    }else if (url === "chinese-baske") {
                        return "chinese-basketball";
                    }else if (url === "usa-narrow-ba") {
                        return "usa-narrow-band";
                    }else if (url === "leisure-time-") {
                        return "leisure-time";
                    }else if (url === "electronic-sp") {
                        return "electronic-sports";
                    }else if (url === "movie-televis") {
                        return "movie-television";
                    }else if (url === "reprint-news-") {
                        return "reprint-news";
                    }
                },
                getUrlNumber: function () {
                    let urlName = this.getPageName();
                    let currentUrl = window.location.href;
                    if (urlName === "spain-la-liga") {
                        return currentUrl.substring(52,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "england-league") {
                        return currentUrl.substring(53,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "germany-bundesliga") {
                        return currentUrl.substring(57,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "italia-serie") {
                        return currentUrl.substring(51,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "inter-football") {
                        return currentUrl.substring(53,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "chinese-football") {
                        return currentUrl.substring(55,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "chinese-basketball") {
                        return currentUrl.substring(57,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "usa-narrow-band") {
                        return currentUrl.substring(54,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "leisure-time") {
                        return currentUrl.substring(51,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "electronic-sports") {
                        return currentUrl.substring(56,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "movie-television") {
                        return currentUrl.substring(55,50+(currentUrl.length-55)).split("-")[0];
                    }
                    else if (urlName === "reprint-news") {
                        return currentUrl.substring(51,50+(currentUrl.length-55)).split("-")[0];
                    }
                },
                getPageNumber:function () {
                    let urlName = this.getPageName();
                    let currentUrl = window.location.href;
                    if (urlName === "spain-la-liga") {
                        return currentUrl.substring(52,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "england-league") {
                        return currentUrl.substring(53,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "germany-bundesliga") {
                        return currentUrl.substring(57,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "italia-serie") {
                        return currentUrl.substring(54,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "inter-football") {
                        return currentUrl.substring(53,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "chinese-football") {
                        return currentUrl.substring(55,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "chinese-basketball") {
                        return currentUrl.substring(57,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "usa-narrow-band") {
                        return currentUrl.substring(54,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "leisure-time") {
                        return currentUrl.substring(51,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "electronic-sports") {
                        return currentUrl.substring(56,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "movie-television") {
                        return currentUrl.substring(55,50+(currentUrl.length-55)).split("-")[1];
                    }
                    else if (urlName === "reprint-news") {
                        return currentUrl.substring(51,50+(currentUrl.length-55)).split("-")[1];
                    }
                },
                submit:function () {
                    let urlName = this.getPageName();
                    let urlNumber = this.getUrlNumber()
                    let text = $('#release-page-text').val();
                    let getName = function (session) {
                        if (session === "") {
                            alert("请登录后在发帖")
                            return false;
                        }else if (text === "") {
                            alert("正文没有填写")
                            return false;
                        }else if (text.length < 5) {
                            alert("标题/正文字数不够")
                            return false;
                        }else {
                            let request = new XMLHttpRequest();
                            let url = `../../../forum1/phpServer/bbsReplyTieZi.php?bbs=${urlName}&name=${session}&text=${text}&url=${urlNumber}`;
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
/*
                    if (name === false) {
                        alert("请登录后在发帖")
                        return false;
                    } else if (text === "") {
                        alert("正文没有填写")
                        return false;
                    }else if (text.length < 5) {
                        alert("标题/正文字数不够")
                        return false;
                    }else {
                        let request = new XMLHttpRequest();
                        let url = `../../../forum1/phpServer/bbsReplyTieZi.php?bbs=${urlName}&name=${name}&text=${text}&url=${urlNumber}`;
                        request.open("GET",url);
                        request.send();
                        request.onreadystatechange = function () {
                            if (request.readyState == 4) {
                                if (request.status == 200 || request.status == 304) {
                                    window.location.href =`../${request.responseText}`;
                                }
                            }
                        }
                    }*/
                }
            }
        }
    }
})