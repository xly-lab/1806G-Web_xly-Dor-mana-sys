/**
 * Created by luqingying on 2018/4/8.
 */
$(document).ready(function(){
    $(".Room").click(function(){
        var roomnum = $(this).find("input").val();
        $("#room-num-red").text(roomnum);
    });
  $(".choose_bed").hide();//选择床位页面阴藏
  $(".choose_confirm").hide();//确认页面阴藏
  $(".jump-to-my").hide();//跳转提示页面阴藏
  //床位选择后，确认点击事件
  $("#select").click(function(){
    var roommessage = $("#room-num-red").text();
    if(roommessage == "还未选寝室"){
      alert("您还未选寝室");
    }
    else{
      $("#chooseroom").removeClass("active").addClass("success").find("span").html("<img src='img/greenclick.png'>");//UI改变
      $("#choosebed").addClass("active");
      $(".choose_room").hide();
      $(".choose_bed").show();
    }
  });
  //床位选择后，确认点击事件
  $("#select-bed").click(function(){
    var roommessage = $("#room-num-red-next").text();
    if(roommessage == "还未选床位"){
      alert("您还未选床位");
    }
    else{
      $("#choosebed").removeClass("active").addClass("success").find("span").html("<img src='img/greenclick.png'>");
      $("#confirm").addClass("active");
      $(".choose_bed").hide();
      $(".choose_confirm").show();
    }
  });
  //确认信息页面 点击事件
  $(".Bed-choosed>ul>li").click(function () {
    if($(this).hasClass("clicked")){
      alert("该床位已有人！");
    }
    else {
      if (confirm("确认选择此床位？")) {
        $(this).addClass("clicked");
        $("#room-num-red-next").html("你所选床号为" + $(this).index());
      }
    }
  });
  $(".affirm_news>button").click(function () {
    $("#confirm").removeClass("active").addClass("success").find("span").html("<img src='img/greenclick.png'>");
    $(".choose_confirm").hide();
    $(".jump-to-my").show();
    var timer=setInterval( function(){
    	location.href="mydo.html"
    },1000)
  });
});
