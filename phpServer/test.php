<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/27 0027
 * Time: 23:15
 */
/*
$myfile = fopen("../webView/".$_GET['test'].".html", "w");
$txt = "<h1>test</h1>";
fwrite($myfile, $txt);*/
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
for ($i = 1; $i < 10; $i++) {
    //echo $i;
    $a->insertSql(
        "bbs_spain_la_liga",["name","title","text","start_time","end_time"],
        ["Radiohead","notTimeTest".$i,"notTimeTest".$i],true,true
    );
}

/*echo json_encode($a->queryBbsCenter("bbs_inter_football",0),true);*/
?>