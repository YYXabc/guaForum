<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/12/3 0003
 * Time: 6:07
 */
session_start();
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a = new sqlSuperClass();
$a->connectSql();
echo $a->getUserName($_SESSION['user_account']);
?>