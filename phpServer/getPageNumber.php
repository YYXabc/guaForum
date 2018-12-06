<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/13 0013
 * Time: 17:39
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$state = $_GET['state'];
if ($state === 'spain-la-liga') {
    echo $a->queryPageNumber("bbs_spain_la_liga");
}
else if ($state === 'england-league') {
    echo $a->queryPageNumber("bbs_england_league");
}
else if ($state === 'germany-bundesliga') {
    echo $a->queryPageNumber("bbs_germany_bundesliga");
}
else if ($state === 'italia-serie') {
    echo $a->queryPageNumber("bbs_italia_serie");
}
else if ($state === 'inter-football') {
    echo $a->queryPageNumber("bbs_inter_football");
}
else if ($state === 'chinese-football') {
    echo $a->queryPageNumber("bbs_chinese_football");
}
else if ($state === 'chinese-basketball') {
    echo $a->queryPageNumber("bbs_chinese_basketball");
}
else if ($state === 'usa-narrow-band') {
    echo $a->queryPageNumber("bbs_usa_nba");
}
else if ($state === 'leisure-time') {
    echo $a->queryPageNumber("bbs_leisure_time");
}
else if ($state === 'electronic-sports') {
    echo $a->queryPageNumber("bbs_game_sports");
}
else if ($state === 'movie-television') {
    echo $a->queryPageNumber("bbs_movie_television");
}
else if ($state === 'reprint-news') {
    echo $a->queryPageNumber("bbs_reprint_news");
}
?>