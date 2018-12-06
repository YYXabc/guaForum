<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/27 0027
 * Time: 0:00
 */
session_start();
include "sqlSuperClass.php";
$user = $_GET['user'];
$pass = $_GET['pass'];
$a = new sqlSuperClass();
$a->connectSql();
$b = $a->getIsLogin($user,$pass);
if ($b === "yes") {
    echo "yes";
    $_SESSION['user_account'] = $user;
}
?>