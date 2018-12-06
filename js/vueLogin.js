let Login = new Vue({
    el:"#app",
    data: {

    },
    created: function() {
        window.onload = function () {
            if (window.location.href === "http://localhost/forum1/webView/user-register.html") {
                document.getElementsByClassName('login-title')[0].setAttribute('style',
                    'color: rgb(150,150,150);text-decoration:none'
                )
            }else {
                document.getElementsByClassName('login-title')[1].setAttribute('style',
                    'color: rgb(150,150,150);text-decoration:none'
                )
            }
        }
    },
    components: {
        'my-login': {
            template:'' +
            '       <div class="my-login-father">\n' +
            '            <div class="my-login">\n' +
            '                <a :href="url.login" class="login-title">登录</a>\n' +
            '                <span class="test">&nbsp;&nbsp;·&nbsp;&nbsp;</span>\n' +
            '                <a :href="url.register" class="login-title">注册</a>\n' +
            '            </div>\n' +
            '            <div class="my-input">\n' +
            '                <input type="text" class="input-1" placeholder="账号" id="user-name">\n' +
            '                <input type="password" class="input-2" placeholder="密码" id="user-pass">\n' +
            '            </div>\n' +
            '            <div class="my-login-button">\n' +
            '                <button id="id-login-button" @click="ajaxLogin">登录</button>\n' +
            '            </div>' +
            '            <div class="my-login-error"></div>' +
            '        </div>',
            data: function () {
                return {
                    url:{
                        login : "http://localhost/forum1/webView/user-login.html",
                        register : "http://localhost/forum1/webView/user-register.html"
                    }
                }
            },
            methods: {
                ajaxLogin: function () {
                    let errorDiv= function (isEmpty) {
                        let str = ".my-login-error";
                        if (isEmpty) {
                            $(str).text("账号,或密码为空,请重试");
                        }else {
                            $(str).text("账号,或密码错误,请重试");
                        }
                        $(str).fadeIn(1000);
                        $(str).css("display","flex");
                        setTimeout(function () {
                            $(str).fadeOut(1000);
                        },3000)
                    };
                    let user = document.getElementById('user-name').value;
                    let pass = document.getElementById('user-pass').value;
                    if (user === "" || pass === "") {
                        errorDiv(true);
                    }else {
                        let request = new XMLHttpRequest();
                        let url = `http://localhost/forum1/phpServer/login.php?user=${user}&pass=${pass}`;
                        request.open("GET",url);
                        request.send();
                        request.onreadystatechange = function () {
                            if (request.readyState == 4) {
                                if (request.status == 200 || request.status == 304) {
                                    if (request.responseText === "yes") {
                                        window.location.href = "http://localhost/forum1/";
                                    }else {
                                        errorDiv(false);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        'my-register': {
            template:'' +
            '    <div class="my-login-father">\n' +
            '        <div class="my-login">\n' +
            '            <a :href="url.login" class="login-title">登录</a> ' +
            '            <span class="test">&nbsp;&nbsp;·&nbsp;&nbsp;</span>\n' +
            '            <a :href="url.register" class="login-title">注册</a>\n' +
            '        </div>\n' +
            '        <div class="my-input">\n' +
            '            <input type="text" class="input-1" v-model="name" placeholder="你的昵称" @blur="isName" id="user-name" @focus="hideErrorDiv(1)">' +
            '            <input type="text" class="input-3" v-model="account" placeholder="手机号" id="user-account" @blur="isAccount" @focus="hideErrorDiv(2)">\n' +
            '            <input type="password" class="input-3"  v-model="pass" placeholder="密码/6-15位可用符号为_,@,#,*,(,),-,+,=,!,`.~" id="user-pass" @input="isPass">\n' +
            '            <input type="password" class="input-2" v-model="pass2" placeholder="再次输入密码" id="user-pass-more" @input="isPassMore">\n' +
            '        </div>' +
            '        <div class="my-login-button">\n' +
            '            <button id="id-login-button" class="register-button" @click="ajaxRegister">注册</button>\n' +
            '        </div>' +
            '        <div class="my-login-error"></div>' +
            '    </div>',
            data: function () {
                return {
                    url:{
                        login : "http://localhost/forum1/webView/user-login.html",
                        register : "http://localhost/forum1/webView/user-register.html",
                    },
                    name: "",
                    account: "",
                    pass: "",
                    pass2: "",
                    regExp:{
                        name: /^[0-9a-zA-Z\u4E00-\u9FA5\_]{2,10}$/,
                        account: /^1[234578]\d{9}$/,
                        pass: /^[0-9a-zA-Z\_\@\#\*\(\)\-\+\=\!\`\~]{6,15}$/
                    },
                    error: {
                        name: "昵称,格式不正确,2-10个字符,只能包含英文中文下划线,不能包含空格",
                        account: "手机号码,格式不正确,只能输入11位数手机号码",
                        pass:"格式错误6-15位可用符号为_,@,#,*,(,),-,+,=,!,`.~",
                        pass1:"两次密码不相同",
                        pass2:"输入密码不相同"
                    }
                }
            },
            methods: {//昵称 格式不正确，需要是2-15个字符，只能包含英文中文下划线，不能包含空格。
                'ajaxRegister': function () {
                    let errorDiv =  function (message) {
                        let str = ".my-login-error";
                        $(str).text(message);
                        $(str).fadeIn(500);
                        $(str).css("display","flex");
                    }
                    let backTime = function () {
                        let test = function (val) {
                            return new Promise(function (resolve,reject) {
                                if (val === 1) {
                                    setTimeout(function () {
                                        reject(window.location.href = "../index.html");
                                    },1000);
                                }
                                setTimeout(function () {
                                    errorDiv(`注册成功${val}秒后自动跳转到主页`);
                                    resolve (val-1)
                                },1000)
                            })
                        }
                        let p = new Promise(function (resolve,reject) {
                            resolve(5)
                        })
                        p.then(test)
                            .then(test)
                            .then(test)
                            .then(test)
                            .then(test)
                    }
                    if (this.name === "" || this.account === "" || this.pass === "" || this.pass2 === "") {
                        this.errorDiv("信息没有输入完整");
                        return false;
                    }
                    else if (!this.regExp.name.test(this.name)){
                        this.errorDiv(this.error.name);
                        return false;
                    }
                    else if (!this.regExp.account.test(this.account)){
                        this.errorDiv(this.error.account);
                        return false;
                    }
                    else if (!this.regExp.pass.test(this.pass)){
                        this.errorDiv(this.error.pass);
                        return false;
                    }
                    else if (this.pass !== this.pass2) {
                        this.errorDiv(this.error.pass1);
                        return false
                    }else {
                        let request = new XMLHttpRequest();
                        let url = `http://localhost/forum1/phpServer/register.php?state=register&name=${this.name}&account=${this.account}&pass=${this.pass}`;
                        request.open("GET",url);
                        request.send();
                        request.onreadystatechange = function () {
                            if (request.readyState == 4) {
                                if (request.status == 200 || request.status == 304) {
                                    console.log(request.responseText);
                                    if (request.responseText === "昵称已经存在"){
                                        errorDiv("昵称已经存在")
                                    }else if (request.responseText === "账户已经存在") {
                                        errorDiv("电话号码已被注册")
                                    }else if (request.responseText === "注册成功") {
                                        backTime();
                                    }
                                }
                            }
                        }
                    }

                },
                'errorDiv': function (message) {
                    let str = ".my-login-error";
                    $(str).text(message);
                    $(str).fadeIn(500);
                    $(str).css("display","flex");
                },
                'hideErrorDiv': function (arge) {
                    let text = $(".my-login-error").text()
                    switch (arge) {
                        case 1:
                            if (text === "昵称已经存在" || text ==="昵称,格式不正确,2-10个字符,只能包含英文中文下划线,不能包含空格"){
                                $(".my-login-error").hide()
                            }

                            break;
                        case 2:
                            if (text === "电话号码已被注册" || text ==="手机号码,格式不正确,只能输入11位数手机号码"){
                                $(".my-login-error").hide()
                            }
                            break;

                    }

                },
                'isName': function () {
                    let errorDiv = function (message) {
                        if(!message){
                            message="昵称已经存在";
                        }
                        let str = ".my-login-error";
                        $(str).text(message);
                        $(str).fadeIn(500);
                        $(str).css("display","flex");
                    };
                    let name = this.name;
                    if (name !== "") {
                        if (!this.regExp.name.test(name)) {
                            this.errorDiv(this.error.name);
                        }else {
                            let request = new XMLHttpRequest();
                            let url = `http://localhost/forum1/phpServer/register.php?state=name&name=${name}`;
                            request.open("GET",url);
                            request.send();
                            request.onreadystatechange = function () {
                                if (request.readyState == 4) {
                                    if (request.status == 200 || request.status == 304) {
                                        if (request.responseText === "已经存在"){
                                            errorDiv();
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                'isAccount': function () {
                    let errorDiv = function (message) {
                        if(!message){
                            message="电话号码已被注册";
                        }
                        let str = ".my-login-error";
                        $(str).text(message);
                        $(str).fadeIn(500);
                        $(str).css("display","flex");
                    };
                    let account = this.account;
                    if (account !== "") {
                        if (!this.regExp.account.test(account)) {
                            errorDiv(this.error.account);
                        }else {
                            let request = new XMLHttpRequest();
                            let url = `http://localhost/forum1/phpServer/register.php?state=account&account=${account}`;
                            request.open("GET",url);
                            request.send();
                            request.onreadystatechange = function () {
                                if (request.readyState == 4) {
                                    if (request.status == 200 || request.status == 304) {
                                        if (request.responseText === "已经存在"){
                                            errorDiv();
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                'isPass': function () {
                    if (this.pass !== ""){
                        if (this.pass2 !== "") {
                            if (!this.regExp.pass.test(this.pass)) {
                                $('#user-pass').css("border","2px solid rgb(234,111,90)")
                                this.errorDiv(this.error.pass);
                            }else {
                                if (this.pass !== this.pass2) {
                                    $('#user-pass-more').css("border","2px solid rgb(234,111,90)")
                                    $('#user-pass').css({"border":"1px solid rgb(200,200,200)","border-bottom":"0"});
                                    this.errorDiv(this.error.pass1);
                                }else {
                                    $('#user-pass').css({"border":"1px solid rgb(200,200,200)","border-bottom":"0"});
                                    $('#user-pass-more').css({"border":"1px solid rgb(200,200,200)","border-bottom":"0"});
                                    $(".my-login-error").hide()
                                }
                            }
                        }else {
                            if (!this.regExp.pass.test(this.pass)) {
                                $('#user-pass').css("border","2px solid rgb(234,111,90)")
                                this.errorDiv(this.error.pass);
                            }else {
                                $('#user-pass').css({"border":"1px solid rgb(200,200,200)","border-bottom":"0"});
                                $(".my-login-error").hide()
                            }
                        }
                    }else {
                        $('#user-pass').css({"border":"1px solid rgb(200,200,200)","border-bottom":"0"});
                        $(".my-login-error").hide()
                    }
                },
                'isPassMore': function () {
                    if (this.pass !== "" && this.pass2 !== "") {
                        if (this.pass !== this.pass2) {
                            $('#user-pass-more').css("border","2px solid rgb(234,111,90)")
                            this.errorDiv(this.error.pass2)
                        }else {
                            $('#user-pass-more').css({"border":"1px solid rgb(200,200,200)","border-bottom":"0"});
                            $(".my-login-error").hide()
                        }
                    }else {
                        $('#user-pass-more').css({"border":"1px solid rgb(200,200,200)","border-bottom":"0"});
                        $(".my-login-error").hide()
                    }
                }
            }
        }
    }
});