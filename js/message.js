/**
 * Created by luqingying on 2018/4/14.
 */
$(document).ready(function () {
    var n = 0;

    $(".interests").click(function () {
            if($(this).hasClass("btn-primary")){
                $(this).removeClass("btn-primary");
                n--;
                if(n<=10)
                {
                  $(".error_choose").hide();
                }
            }
            else{

                if(n<10){
                    $(this).addClass("btn-primary");
                    n++;
                  $(".error_choose").hide();
                }
                else{
                    $(".error_choose").show();
                }
            }
            var a=n<10?"0"+n:n;
            $("#interests-num").html(a);
    });
});
