let indexText = new Vue({
    el:"#app",
    data: {

    },
    components: {
        'my-index-content-football': {
            template:'' +
            '<div class="container">\n' +
            '    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n' +
            '        <div class="plate">\n' +
            '            <div class="plate-title">{{title}}</div>\n' +
            '            <div class="plate-text">\n' +
            '                <div class="col-lg-6" v-for="(item, index) in areaName">\n' +
            '                    <a :href=url[index]>{{areaName[index]}}</a>\n' +
            '                    <p>版主:{{moderator[index]}}</p>\n' +
            '                </div>\n' +
            '                <span>&nbsp;</span>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>',
            data: function () {
                return {
                    title:"足球专区",
                    url:['webView/page/spain-la-liga.html','webView/page/england-league.html'
                        ,'webView/page/germany-bundesliga.html','webView/page/italia-serie.html'
                        ,'webView/page/inter-football.html','webView/page/chinese-football.html'],
                    moderator:['C.Yang','C.Yang','C.Yang','C.Yang','C.Yang','C.Yang'],
                    areaName:['『西甲专区』','『英超专区』','『德甲专区』','『意甲专区』','『国际足球』','『中国足球』']
                }
            }
        },
        'my-index-content-basketball': {
            template: '' +
            '<div class="container">\n' +
            '    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n' +
            '        <div class="plate">\n' +
            '            <div class="plate-title">{{title}}</div>\n' +
            '            <div class="plate-text">\n' +
            '                <div class="col-lg-6" v-for="(item, index) in areaName">\n' +
            '                    <a :href=url[index]>{{areaName[index]}}</a>\n' +
            '                    <p>版主:{{moderator[index]}}</p>\n' +
            '                </div>\n' +
            '                <span>&nbsp;</span>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>',
            data: function () {
                return {
                    title:"篮球专区",
                    url:['webView/page/chinese-basketball.html','webView/page/usa-narrow-band.html'],
                    moderator:['C.Yang','C.Yang'],
                    areaName:['『中国篮球』','『NBA区』']
                }
            }
        },
        'my-index-content-news': {
            template: '' +
            '<div class="container">\n' +
            '    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n' +
            '        <div class="plate">\n' +
            '            <div class="plate-title">今夜还吹着风</div>\n' +
            '            <div class="plate-text">\n' +
            '                <div class="col-lg-6" v-for="(item, index) in areaName">\n' +
            '                    <a :href=url[index]>{{areaName[index]}}</a>\n' +
            '                    <p>版主:{{moderator[index]}}</p>\n' +
            '                </div>\n' +
            '                <span>&nbsp;</span>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>',
            data: function () {
                return {
                    title:"足球专区",
                    url:['webView/page/leisure-time.html','webView/page/electronic-sports.html'
                        ,'webView/page/movie-television.html','webView/page/reprint-news.html'],
                    moderator:['C.Yang','C.Yang','C.Yang','C.Yang'],
                    areaName:['『茶余饭后』','『游戏电竞』','『影视区』','『搬运区』']
                }
            }
        },
        'my-index-footer': {
            template:'' +
            '   <footer>\n' +
            '        <div class="container">\n' +
            '            <div class="col-sm-5" style="">\n' +
            '                <ul class="list-inline">\n' +
            '                    <li><h6>Copyright ©_杨宇欣_</h6></li>\n' +
            '                    <li><h6>Follow me :</h6></li>\n' +
            '                    <li><span class="glyphicon glyphicon-envelope"><a :href="url.QQ"> QQ</a></span></li>\n' +
            '                    <li><span class="glyphicon glyphicon-envelope"><a :href="url.douban"> 豆瓣</a></span></li>\n' +
            '                </ul>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </footer>',
            data: function () {
                return {
                    url : {
                        'QQ':'http://wpa.qq.com/msgrd?v=3&uin=404115964&site=qq&menu=yes',
                        'douban':'https://www.douban.com'
                    }
                }
            }
        }
    }
})