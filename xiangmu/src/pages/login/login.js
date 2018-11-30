$("#dl").click(function(){
    $.ajax({
  url:"http://www.liyangyf.com/ctrl/login.php",
  data:{
      user:$("#user").val(),
      pass:$("#pass").val()
  },
  success:function(res){
    $.cookie($("#user").val(),$("#user").val())
switch(res){
  case"0":$("#yz").html("用户密码不符合");break;
  case"1":$("#yz").html("用户名密码为空，并且客户端没有cookie");break;
  default:
 res=JSON.parse(res)
  console.log(res)
  $("#yz").html("欢迎"+res.user+"登录即可跳转会员页面");
  setTimeout(function(){
   location.href = "member.html"
  },2000)
}
  }
})
  }) 

  