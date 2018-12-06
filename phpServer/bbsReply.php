<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/29 0029
 * Time: 17:10
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$bbs = $_GET['bbs'];
$urlNumber = $_GET['urlNumber'];
$pageNumber = ($_GET['pageNumber']-1)*10;
if ($bbs === 'spain-la-liga') {
    echo json_encode($a->queryBbsReply("reply_spain_la_liga",$urlNumber,$pageNumber),true);
}else if ($bbs === 'england-league') {
    echo json_encode($a->queryBbsReply("reply_england_league",$urlNumber,$pageNumber),true);
}else if ($bbs === 'germany-bundesliga') {
    echo json_encode($a->queryBbsReply("reply_germany_bundesliga",$urlNumber,$pageNumber),true);
}else if ($bbs === 'italia-serie') {
    echo json_encode($a->queryBbsReply("reply_italia_serie",$urlNumber,$pageNumber),true);
}else if ($bbs === 'inter-football') {
    echo json_encode($a->queryBbsReply("reply_inter_football",$urlNumber,$pageNumber),true);
}else if ($bbs === 'chinese-football') {
    echo json_encode($a->queryBbsReply("reply_chinese_football",$urlNumber,$pageNumber),true);
}else if ($bbs === 'chinese-basketball') {
    echo json_encode($a->queryBbsReply("reply_chinese_basketball",$urlNumber,$pageNumber),true);
}else if ($bbs === 'usa-narrow-band') {
    echo json_encode($a->queryBbsReply("reply_usa_nba",$urlNumber,$pageNumber),true);
}else if ($bbs === 'leisure-time') {
    echo json_encode($a->queryBbsReply("reply_leisure_time",$urlNumber,$pageNumber),true);
}else if ($bbs === 'electronic-sports') {
    echo json_encode($a->queryBbsReply("reply_game_sports",$urlNumber,$pageNumber),true);
}else if ($bbs === 'movie-television') {
    echo json_encode($a->queryBbsReply("reply_movie_television",$urlNumber,$pageNumber),true);
}else if ($bbs === 'reprint-news') {
    echo json_encode($a->queryBbsReply("reply_reprint_news",$urlNumber,$pageNumber),true);
}
?>