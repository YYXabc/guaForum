<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/29 0029
 * Time: 18:38
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$state = $_GET['state'];
if ($state === "name") {
    $name = $_GET['name'];
    $sql = "select user_name from user where user_name='{$name}' limit 1";
    if(!$a->isRegisterInformation($sql,"user_name")) {
        echo "已经存在";
        return true;
    }

}
else if ($state === "account") {
    $account = $_GET['account'];
    $sql = "select user_account from user where user_account='{$account}' limit 1";
    if(!$a->isRegisterInformation($sql,"user_name")) {
        echo "已经存在";
        return true;
    }
}else if ($state === "register") {
    $name = $_GET['name'];
    $account = $_GET['account'];
    $pass = $_GET['pass'];
    $sqlName = "select user_name from user where user_name='{$name}' limit 1";
    $sqlAccount = "select user_account from user where user_account='{$account}' limit 1";
    if(!$a->isRegisterInformation($sqlName,"user_name")) {
        echo "昵称已经存在";
        return true;
    }
    else if(!$a->isRegisterInformation($sqlAccount,"user_name")) {
        echo "账户已经存在";
        return true;
    }
    else {
        $a->insertSql("user",["user_account","user_name","user_pass","user_date"],
            [$account,$name,$pass],true,false);
        echo "注册成功";
        return true;
    }
}

?>