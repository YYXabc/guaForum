<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/18 0018
 * Time: 21:43
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$bbs = $_GET["bbs"];
if ($bbs === 'spain-la-liga') {
    echo ($a->queryPageNumber("bbs_spain_la_liga"));
}else if ($bbs === 'england-league') {
    echo ($a->queryPageNumber("bbs_england_league"));
}else if ($bbs === 'germany-bundesliga') {
    echo ($a->queryPageNumber("bbs_germany_bundesliga"));
}else if ($bbs === 'italia-serie') {
    echo ($a->queryPageNumber("bbs_italia_serie"));
}else if ($bbs === 'inter-football') {
    echo ($a->queryPageNumber("bbs_inter_football"));
}else if ($bbs === 'chinese-football') {
    echo ($a->queryPageNumber("chinese-football"));
}else if ($bbs === 'chinese-basketball') {
    echo ($a->queryPageNumber("bbs_chinese_basketball"));
}else if ($bbs === 'usa-narrow-band') {
    echo ($a->queryPageNumber("bbs_usa_nba"));
}else if ($bbs === 'leisure-time') {
    echo ($a->queryPageNumber("bbs_leisure_time"));
}else if ($bbs === 'electronic-sports') {
    echo ($a->queryPageNumber("bbs_game_sports"));
}else if ($bbs === 'movie-television') {
    echo ($a->queryPageNumber("bbs_movie_television"));
}else if ($bbs === 'reprint-news') {
    echo ($a->queryPageNumber("bbs_reprint_news"));
}
?>