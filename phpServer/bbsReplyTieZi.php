<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/30 0030
 * Time: 22:05
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$name = $_GET['name'];
$text = $_GET['text'];
$url = $_GET['url'];
$bbs = $_GET['bbs'];
if ($bbs === 'spain-la-liga') {
    $a->insertSql(
        "reply_spain_la_liga",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_spain_la_liga",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_spain_la_liga",$url),"spain-la-liga-{$url}-");
    echo "reply/spain-la-liga-".$url."-".$a->queryReplyPageNumber("reply_spain_la_liga",$url).".html";

}
else if ($bbs === 'england-league') {
    $a->insertSql(
        "reply_england_league",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_england_league",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_england_league",$url),"england-league-{$url}-");
    echo "reply/england-league-".$url."-".$a->queryReplyPageNumber("reply_england_league",$url).".html";
}
else if ($bbs === 'germany-bundesliga') {
    $a->insertSql(
        "reply_germany_bundesliga",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_germany_bundesliga",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_germany_bundesliga",$url),"germany-bundesliga-{$url}-");
    echo "reply/germany-bundesliga-".$url."-".$a->queryReplyPageNumber("reply_germany_bundesliga",$url).".html";
}
else if ($bbs === 'italia-serie') {
    $a->insertSql(
        "reply_italia_serie",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_italia_serie",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_italia_serie",$url),"italia-serie-{$url}-");
    echo "reply/italia-serie-".$url."-".$a->queryReplyPageNumber("reply_italia_serie",$url).".html";
}
else if ($bbs === 'inter-football') {
    $a->insertSql(
        "reply_inter_football",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_inter_football",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_inter_football",$url),"inter-football-{$url}-");
    echo "reply/inter-football-".$url."-".$a->queryReplyPageNumber("reply_inter_football",$url).".html";
}
else if ($bbs === 'chinese-football') {
    $a->insertSql(
        "reply_chinese_football",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_chinese_football",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_chinese_football",$url),"chinese-football-{$url}-");
    echo "reply/chinese-football-".$url."-".$a->queryReplyPageNumber("reply_chinese_football",$url).".html";
}
else if ($bbs === 'chinese-basketball') {
    $a->insertSql(
        "reply_chinese_basketball",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_chinese_basketball",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_chinese_basketball",$url),"chinese-basketball-{$url}-");
    echo "reply/chinese-basketball-".$url."-".$a->queryReplyPageNumber("reply_chinese_basketball",$url).".html";
}
else if ($bbs === 'usa-narrow-band') {
    $a->insertSql(
        "reply_usa_nba",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_usa_nba",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_usa_nba",$url),"usa-narrow-band-{$url}-");
    echo "reply/usa-narrow-band-".$url."-".$a->queryReplyPageNumber("reply_usa_nba",$url).".html";
}
else if ($bbs === 'leisure-time') {
    $a->insertSql(
        "reply_leisure_time",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_leisure_time",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_leisure_time",$url),"leisure-time-{$url}-");
    echo "reply/leisure-time-".$url."-".$a->queryReplyPageNumber("reply_leisure_time",$url).".html";
}
else if ($bbs === 'electronic-sports') {
    $a->insertSql(
        "reply_game_sports",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_game_sports",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_game_sports",$url),"electronic-sports-{$url}-");
    echo "reply/electronic-sports-".$url."-".$a->queryReplyPageNumber("reply_game_sports",$url).".html";
}
else if ($bbs === 'movie-television') {
    $a->insertSql(
        "reply_movie_television",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_movie_television",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_movie_television",$url),"movie-television-{$url}-");
    echo "reply/movie-television-".$url."-".$a->queryReplyPageNumber("reply_movie_television",$url).".html";
}
else if ($bbs === 'reprint-news') {
    $a->insertSql(
        "reply_reprint_news",["url","name","text","end_time"],
        [$url,$name,$text],true,false
    );
    $a->updateReplyTime("bbs_reprint_news",$url);
    $a->isReplyFile($a->queryReplyPageNumber("reply_reprint_news",$url),"reprint-news-{$url}-");
    echo "reply/reprint-news-".$url."-".$a->queryReplyPageNumber("reply_reprint_news",$url).".html";
}
?>