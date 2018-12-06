<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/30 0030
 * Time: 18:22
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$state = $_GET['bbs'];
$urlNumber = $_GET['urlNumber'];
if ($state === 'spain-la-liga') {
    echo $a->queryReplyPageNumber("reply_spain_la_liga",$urlNumber);
}
else if ($state === 'england-league') {
    echo $a->queryReplyPageNumber("reply_england_league",$urlNumber);
}
else if ($state === 'germany-bundesliga') {
    echo $a->queryReplyPageNumber("reply_germany_bundesliga",$urlNumber);
}
else if ($state === 'italia-serie') {
    echo $a->queryReplyPageNumber("reply_italia_serie",$urlNumber);
}
else if ($state === 'inter-football') {
    echo $a->queryReplyPageNumber("reply_inter_football",$urlNumber);
}
else if ($state === 'chinese-football') {
    echo $a->queryReplyPageNumber("reply_chinese_football",$urlNumber);
}
else if ($state === 'chinese-basketball') {
    echo $a->queryReplyPageNumber("reply_chinese_basketball",$urlNumber);
}
else if ($state === 'usa-narrow-band') {
    echo $a->queryReplyPageNumber("reply_usa_nba",$urlNumber);
}
else if ($state === 'leisure-time') {
    echo $a->queryReplyPageNumber("reply_leisure_time",$urlNumber);
}
else if ($state === 'electronic-sports') {
    echo $a->queryReplyPageNumber("reply_game_sports",$urlNumber);
}
else if ($state === 'movie-television') {
    echo $a->queryReplyPageNumber("reply_movie_television",$urlNumber);
}
else if ($state === 'reprint-news') {
    echo $a->queryReplyPageNumber("reply_reprint_news",$urlNumber);
}
?>