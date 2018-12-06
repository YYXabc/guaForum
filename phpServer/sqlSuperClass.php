<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/26 0026
 * Time: 23:09
 */
class sqlSuperClass{
    protected $servername = "localhost";
    protected $username = "root";
    protected $password = "";
    protected $dbname = "forum";
    protected $conn;
    protected $sql;
    protected $result;


    // 创建连接
    public function connectSql(){
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        if ($this->conn->connect_error) {
            die("连接失败: " . $this->conn->connect_error);
        }
    }

    public function getSql(){
        return $this->sql;
    }

    public function getConn(){
        return $this->conn;
    }

    public function getResult(){
        return $this->result = $this->conn->query($this->sql);
    }

    public function getIsLogin($user, $pass){
        $this->sql = "select user_account,user_pass from user";
        $userArray = array();
        $passArray = array();
        $this->result = $this->getResult();
        if ($this->result->num_rows > 0) {
            while ($row = $this->result->fetch_assoc()) {
                array_push($userArray, $row['user_account']);
                array_push($passArray, $row['user_pass']);
            }
        }
        for ($i = 0; $i < count($userArray); $i++) {
            if ($userArray[$i] === $user && $passArray[$i] === $pass) {
                return "yes";
            }
        }
        return false;
    }

    public function getUserName($user){
        $this->sql = "select user_name from user where user_account={$user}";
        $name = "";
        $this->result = $this->getResult();
        if ($this->result->num_rows > 0) {
            while ($row = $this->result->fetch_assoc()) {
                $name = $row['user_name'];
            }
        }
        return $name;
    }

    public function isRegisterInformation($sql, $sqlElementName){
        $this->sql = $sql;
        $sqlName = "";
        $this->result = $this->getResult();
        if ($this->result->num_rows > 0) {
            while ($row = $this->result->fetch_assoc()) {
                $sqlName = $row[$sqlElementName];
            }
        }
        if ($sqlName === "") {
            return true;
        } else {
            return false;
        }
    }

    /*
     * 插入方法
     * 表名Array
     * 元素名字Array
     * 数据 //如果有timestamp不用传入
     * 是否需要插入CURRENT_TIMESTAMP
     * */
    public function insertSql($tableName, $element, $data, $ifInsertDate, $ifEndDate){
        $str = 'insert into ' . $tableName . '(';
        for ($i = 0; $i < count($element); $i++) {
            $str = $str . $element[$i] . ',';
        }
        $str = substr($str, 0, strlen($str) - 1);
        $str = $str . ") values(";
        for ($i = 0; $i < count($data); $i++) {
            $str = $str . "'";
            $str = $str . $data[$i] . "',";
        }
        if ($ifInsertDate) {
            $str = $str . "CURRENT_TIMESTAMP";
        }
        if ($ifEndDate) {
            $str = $str . ",CURRENT_TIMESTAMP";
        }
        else if($ifInsertDate && $ifEndDate){
            $str = substr($str, 0, strlen($str) - 1);
        }
        $str = $str . ")";
        $this->sql = $str;
        $this->conn->query($this->sql);
    }

    //查询方法-子类重写
    public function querySql(){

    }

    //查询应该跳转的主页URL
    public function queryUrl($tableName,$name){
        $this->sql = "select url from {$tableName} where name='{$name}' ORDER BY url desc LIMIT 0,1";
        $this->result = $this->getResult();
        $url = "";
        if ($this->result->num_rows > 0) {
            while ($row = $this->result->fetch_assoc()) {
                $url = $row['url'];
            }
        }
        if ($url !== "") {
            return "{$url}";
        } else {
            return false;
        }
    }

    //查询页面页数
    public function queryPageNumber($tableName){
        $this->sql = "select count(url) from {$tableName}";
        $this->result = $this->getResult();
        $pageNumber = "";
        if ($this->result->num_rows > 0) {
            while ($row = $this->result->fetch_assoc()) {
                $pageNumber = $row['count(url)'];
            }
        }
        if ($pageNumber !== "") {
            return ceil($pageNumber / 10);
        } else {
            return false;
        }
    }
    //查询回复表页面数
    public function queryReplyPageNumber($tableName,$urlNumber){
        $this->sql = "select count(url) from {$tableName} WHERE url={$urlNumber}";
        $this->result = $this->getResult();
        $pageNumber = "";
        if ($this->result->num_rows > 0) {
            while ($row = $this->result->fetch_assoc()) {
                $pageNumber = $row['count(url)'];
            }
        }
        if ($pageNumber !== "") {
            return ceil((int)($pageNumber) / 10);
        } else {
            return false;
        }
    }
    //查询主页信息,标题,作者等
    public function queryBbsCenter($tableName, $page){
        $pageNumber = (int)$page;
        $this->sql = "select url,name,title,start_time,end_time from {$tableName} order by end_time desc limit {$pageNumber},10";
        $this->result = $this->getResult();
        $urlId = array();
        $name = array();
        $title = array();
        $startTime = array();
        $endTime = array();
        if ($this->result->num_rows > 0) {
            while ($row = $this->result->fetch_assoc()) {
                array_push($urlId, $row['url']);
                array_push($name, $row['name']);
                array_push($title, $row['title']);
                array_push($startTime, $row['start_time']);
                array_push($endTime, $row['end_time']);
            }
        }
        return [$urlId, $name, $title, $startTime, $endTime];
    }

    //查看有没有主页,如果没有就调用创建
    public function isPageFile($pageNumber, $pageName){
        for ($i = $pageNumber - 1; $i > 0; $i--) {
            if (file_exists("../webView/page/{$pageName}{$i}.html")) {
            } else {
                $this->newFilePage("{$pageName}{$i}.html");
            }
        }

    }
    //查看有没有回复页,如果没有就调用创建
    public function isReplyFile($pageNumber, $pageName){
        for ($i = $pageNumber; $i > 0; $i--) {
            if (file_exists("../webView/reply/{$pageName}{$i}.html")) {
            } else {
                $this->newFileReply("{$pageName}{$i}.html");
            }
        }

    }
    //查询回复表
    public function queryBbsReply($tableName,$urlNumber,$page) {
        $pageNumber = (int)$page;
        $urlNumber = (int)$urlNumber;
        $this->sql = "select *from {$tableName} WHERE url={$urlNumber} ORDER BY end_time limit {$pageNumber},10";
        $this->result = $this->getResult();
        $name = array();
        $title = array();
        $text = array();
        $endTime = array();
        if ($this->result->num_rows > 0) {
            while ($row = $this->result->fetch_assoc()) {
                array_push($name, $row['name']);
                array_push($title, $row['title']);
                array_push($text, $row['text']);
                array_push($endTime, $row['end_time']);
            }
        }
        return [$name,$title,$text,$endTime];
    }
    //更新帖子表中的回复时间
    public function updateReplyTime($tableName,$url) {
        $this->sql = "update {$tableName} set end_time = CURRENT_TIMESTAMP WHERE url={$url}";
        $this->conn->query($this->sql);
    }
    /*更改FriendSql状态
     * $tableName 表名
     * $element　元素名例如['request_state','receive_state']
     * $state 状态　1 or 2 or 3
     * $user 元素名例如['request_user','receive_user']
     */
    function updateFriendSql($tableName, $element, $state, $user, $data){
        $str = "UPDATE {$tableName} set ";
        for ($i = 0; $i < count($element); $i++) {
            $str = $str . "{$element[$i]} = " . $state[$i] . ",";
        }
        $str = substr($str, 0, strlen($str) - 1);
        $str = $str . " WHERE ";
        for ($i = 0; $i < count($user); $i++) {
            $str = $str . "{$user[$i]} = '" . $data[$i] . "' AND ";
        }
        $str = substr($str, 0, strlen($str) - 4);
        $this->sql = $str;
        $this->conn->query($this->sql);
    }

    //删除方法
    function deleteSql(){
    }

    //新建page文件
    public function newFilePage($pageName){
        $myfile = fopen("../webView/page/{$pageName}", "w");
        $html = "
            <!DOCTYPE html>
            <html lang=\"en\">
            <head>
            <meta charset=\"UTF-8\">
                <title>瓜皮论坛</title>
                <link rel=\"stylesheet\" href=\"../../css/bootstrap.min.css\">
                <link rel=\"stylesheet\" href=\"../../css/navigation-bar-css.css\">
                <link rel=\"stylesheet\" href=\"../../css/page-css.css\">
                <script src=\"../../js/jquery-3.2.1.js\" type=\"text/javascript\"></script>
                <script src=\"../../js/bootstrap.min.js\" type=\"text/javascript\"></script>
                <script src=\"../../js/vue.min.js\"></script>
            </head>
            <body>
                <div id=\"app\">
                    <my-navigation-bar></my-navigation-bar>
                    <my-spain-la-liga>
                        <side-navigation-bar slot=\"side-navigation-bar\"></side-navigation-bar>
                        <subject-theme slot=\"subject-theme\"></subject-theme>
                    </my-spain-la-liga>
                    <my-index-footer></my-index-footer>
                </div>
                <script src=\"../../js/vueNavigationBar.js\"></script>
                <script src=\"../../js/vueIndex.js\"></script>
                <script src=\"../../js/vueSpainLaLiga.js\"></script>
            </body>
            </html>
             ";
        fwrite($myfile, $html);
    }
    //新建Reply文件
    public function newFileReply($replyName) {
        $myfile = fopen("../webView/reply/{$replyName}", "w");
        $html = "
            <!DOCTYPE html>
            <html lang=\"en\">
            <head>
                <meta charset=\"UTF-8\">
                <title>瓜皮论坛</title>
                <link rel=\"stylesheet\" href=\"../../css/bootstrap.min.css\">
                <link rel=\"stylesheet\" href=\"../../css/navigation-bar-css.css\">
                <link rel=\"stylesheet\" href=\"../../css/reply-css.css\">
                <script src=\"../../js/jquery-3.2.1.js\" type=\"text/javascript\"></script>
                <script src=\"../../js/bootstrap.min.js\" type=\"text/javascript\"></script>
                <script src=\"../../js/vue.min.js\"></script>
            </head>
            <body>
                <div id=\"app\">
                    <my-navigation-bar></my-navigation-bar>
                    <my-center></my-center>
                    <my-index-footer></my-index-footer>
                </div>
                <script src=\"../../js/vueNavigationBar.js\"></script>
                <script src=\"../../js/vueIndex.js\"></script>
                <script src=\"../../js/vueReply.js\"></script>
                </body>
            </html>
           
        ";
        fwrite($myfile, $html);
    }
}
?>