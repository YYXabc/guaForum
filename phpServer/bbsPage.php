<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/9 0009
 * Time: 15:53
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$bbs = $_GET['bbs'];
$page = $_GET['page']*10;
if ($bbs === 'spain-la-liga') {
    echo json_encode($a->queryBbsCenter("bbs_spain_la_liga",$page),true);
}

else if ($bbs === 'england-league') {
    echo json_encode($a->queryBbsCenter("bbs_england_league",$page),true);
}

else if ($bbs === 'germany-bundesliga') {
    echo json_encode($a->queryBbsCenter("bbs_germany_bundesliga",$page),true);
}

else if ($bbs === 'italia-serie') {
    echo json_encode($a->queryBbsCenter("bbs_italia_serie",$page),true);
}

else if ($bbs === 'inter-football') {
    echo json_encode($a->queryBbsCenter("bbs_inter_football",$page),true);
}

else if ($bbs === 'chinese-football') {
    echo json_encode($a->queryBbsCenter("bbs_chinese_football",$page),true);
}

else if ($bbs === 'chinese-basketball') {
    echo json_encode($a->queryBbsCenter("bbs_chinese_basketball",$page),true);
}

else if ($bbs === 'usa-narrow-band') {
    echo json_encode($a->queryBbsCenter("bbs_usa_nba",$page),true);
}

else if ($bbs === 'leisure-time') {
    echo json_encode($a->queryBbsCenter("bbs_leisure_time",$page),true);
}
else if ($bbs === 'electronic-sports') {
    echo json_encode($a->queryBbsCenter("bbs_game_sports",$page),true);
}

else if ($bbs === 'movie-television') {
    echo json_encode($a->queryBbsCenter("bbs_movie_television",$page),true);
}

else if ($bbs === 'reprint-news') {
    echo json_encode($a->queryBbsCenter("bbs_reprint_news",$page),true);
}
?>