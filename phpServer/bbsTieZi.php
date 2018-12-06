<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/11 0011
 * Time: 17:30
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$name = $_GET['name'];
$title = $_GET['title'];
$text = $_GET['text'];
$bbs = $_GET['bbs'];
if ($bbs === 'spain-la-liga') {
    $a->insertSql(
        "bbs_spain_la_liga",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_spain_la_liga",$name);
    $a->insertSql(
        "reply_spain_la_liga",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_spain_la_liga'),"spain-la-liga-");
    $a->newFileReply("spain-la-liga-".$queryUrl."-1.html");
    echo "reply/spain-la-liga-".($queryUrl)."-1".".html";
}

else if ($bbs === 'england-league') {
    $a->insertSql(
        "bbs_england_league",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_england_league",$name);
    $a->insertSql(
        "reply_england_league",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_england_league'),"england-league-");
    $a->newFileReply("england-league-".$queryUrl."-1.html");
    echo "reply/england-league-".$queryUrl."-1".".html";
}

else if ($bbs === 'germany-bundesliga') {
    $a->insertSql(
        "bbs_germany_bundesliga",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );

    $queryUrl = $a->queryUrl("bbs_germany_bundesliga",$name);
    $a->insertSql(
        "reply_germany_bundesliga",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_germany_bundesliga'),"germany-bundesliga-");
    $a->newFileReply("germany-bundesliga-".$queryUrl."-1.html");
    echo "reply/germany-bundesliga-".$queryUrl."-1".".html";
}

else if ($bbs === 'italia-serie'){
    $a->insertSql(
        "bbs_italia_serie",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_italia_serie",$name);
    $a->insertSql(
        "reply_italia_serie",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_italia_serie'),"italia-serie-");
    $a->newFileReply("italia-serie-".$queryUrl."-1.html");
    echo "reply/italia-serie-".$queryUrl."-1".".html";
}

else if ($bbs === 'inter-football') {
    $a->insertSql(
        "bbs_inter_football",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_inter_football",$name);
    $a->insertSql(
        "reply_inter_football",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_inter_football'),"inter-football-");
    $a->newFileReply("inter-football-".($queryUrl)."-1.html");
    echo "reply/inter-football-".($queryUrl)."-1".".html";
}

else if ($bbs === 'chinese-football') {
    $a->insertSql(
        "bbs_chinese_football",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_chinese_football",$name);
    $a->insertSql(
        "reply_chinese_football",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_chinese_football'),"chinese-football-");
    $a->newFileReply("chinese-football-".$queryUrl."-1.html");
    echo "reply/chinese-football-".$queryUrl."-1".".html";
}

else if ($bbs === 'chinese-basketball') {
    $a->insertSql(
        "bbs_chinese_basketball",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_chinese_basketball",$name);
    $a->insertSql(
        "reply_chinese_basketball",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_chinese_basketball'),"chinese-basketball-");
    $a->newFileReply("chinese-basketball-".$queryUrl."-1.html");
    echo "reply/chinese-basketball-".$queryUrl."-1".".html";
}

else if ($bbs === 'usa-narrow-band') {
    $a->insertSql(
        "bbs_usa_nba",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_usa_nba",$name);
    $a->insertSql(
        "reply_usa_nba",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_usa_nba'),"usa-narrow-band-");
    $a->newFileReply("usa-narrow-band-".$queryUrl."-1.html");
    echo "reply/usa-narrow-band-".$queryUrl."-1".".html";
}

else if ($bbs === 'leisure-time') {
    $a->insertSql(
        "bbs_leisure_time",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_leisure_time",$name);
    $a->insertSql(
        "reply_leisure_time",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_leisure_time'),"leisure-time-");
    $a->newFileReply("leisure-time-".$queryUrl."-1.html");
    echo "reply/leisure-time-".$queryUrl."-1".".html";
}

else if ($bbs === 'electronic-sports') {
    $a->insertSql(
        "bbs_game_sports",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_game_sports",$name);
    $a->insertSql(
        "reply_game_sports",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_game_sports'),"electronic-sports-");
    $a->newFileReply("electronic-sports-".$queryUrl."-1.html");
    echo "reply/electronic-sports-".$queryUrl."-1".".html";
}

else if ($bbs === 'movie-television') {
    $a->insertSql(
        "bbs_movie_television",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_movie_television",$name);
    $a->insertSql(
        "reply_movie_television",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_movie_television'),"movie-television-");
    $a->newFileReply("movie-television-".$queryUrl."-1.html");
    echo "reply/movie-television-".$queryUrl."-1".".html";
}

else if ($bbs === 'reprint-news') {
    $a->insertSql(
        "bbs_reprint_news",["name","title","text","start_time","end_time"],
        [$name,$title,$text],true,true
    );
    $queryUrl = $a->queryUrl("bbs_reprint_news",$name);
    $a->insertSql(
        "reply_reprint_news",["url","name","title","text","end_time"],
        [$queryUrl,$name,$title,$text],true,false
    );
    $a->isPageFile($a->queryPageNumber('bbs_reprint_news'),"reprint-news-");
    $a->newFileReply("reprint-news-".$queryUrl."-1.html");
    echo "reply/reprint-news-".$queryUrl."-1".".html";
}
?>