var banner_letf = 0;
var img_cnt =0;
var first =1;
var last;
var interval;

$(document).ready(function(){
$(this).css("letf",banner_left);
banner_left +=$(this).width()+5;
$(this).attr("id","contetn"+(++img_cnt));
});

last=img_cnt;
startAction();
$(".content").hover(
    function(){stopAction();},
    function({startAction(); }) ;
});
https://greatps1215.tistory.com/13