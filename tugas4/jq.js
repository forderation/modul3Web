$(document).ready(function(){
  $("#tombol1").click(function(){
    $("#kotak").width("300px");
    $("#kotak").height("300px");
  });
  $("#tombol2").click(function(){
    var nilai = $("#kotak").width();
    alert(nilai);
  });
  $("#tombol3").click(function(){
    $("#kotak").css("background-color","blue");
  });
});
