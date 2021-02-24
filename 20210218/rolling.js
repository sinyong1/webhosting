var banner_letf = 0;
var img_cnt =0;
var first =1;
var last;
var interval;

$(document).ready(function(){
$("rolling_wrap a").each(function (){
    $(this).css("letf",banner_left);
banner_left +=$(this).width()+5;
$(this).attr("id","contetn"+(++img_cnt));
});

last=img_cnt;
startAction();

$(".content").hover(
    function() { stopAction(); },
    function() {startAction(); });
});
function startAction()
{
interval=setInterval(function (){
    $(".rolling_wrap a").each(function (){
        $(this).css("left",$(this).position().left-1);
    });
    var firtst_content = $("#content"+first);
    var last_content =$("#content"+last);

    if(firtst_content.position().left <"-"+$(first_content).width())
    {
first_content.css("left",last_content.position().left+last_content.width()+5);
firtst++;
lst++;
if(last > img_cnt){last=1;}
if(first> img_cnt){fist=1;}

      }
   },15);
}

function stopAction(){
    clearInterval(interval);
}