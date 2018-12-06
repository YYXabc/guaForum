<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/18 0018
 * Time: 19:42
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
echo $a->getUserName($_GET['user']);
?>