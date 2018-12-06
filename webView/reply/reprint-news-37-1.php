
            <?php session_start(); ?>
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>瓜皮论坛</title>
                <link rel="stylesheet" href="../../css/bootstrap.min.css">
                <link rel="stylesheet" href="../../css/navigation-bar-css.css">
                <link rel="stylesheet" href="../../css/reply-css.css">
                <script src="../../js/jquery-3.2.1.js" type="text/javascript"></script>
                <script src="../../js/bootstrap.min.js" type="text/javascript"></script>
                <script src="../../js/vue.min.js"></script>
            </head>
            <body>
                <div id="app">
                    <my-navigation-bar></my-navigation-bar>
                    <my-center></my-center>
                    <my-index-footer></my-index-footer>
                </div>
                <script src="../../js/vueNavigationBar.js"></script>
                <script src="../../js/vueIndex.js"></script>
                <script src="../../js/vueReply.js"></script>
                </body>
            </html>
            <?php include "/../../phpServer/isLoginState.php"; $a = new isLoginState(); $a->updateNavState(); ?>
        