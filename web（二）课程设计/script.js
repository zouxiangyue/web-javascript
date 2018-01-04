$(function(){
    //导航栏的弹出层效果
		var get=document.getElementsByTagName('li')
    for(var i=0;i<get.length;i++){
      get[i].onmouseover=function(){
          this.className="show"
      }
      get[i].onmouseout=function(){
          this.className=""
      }
    };//for
    //设置搜索框里默认字效果
    $(".search").focus(function(){
      var va = $(this).val();
      if (va == "请输入搜索内容") {
        $(this).val("");
      }
    })
    $(".search").blur(function(){
      var va = $(this).val();
      if (va == "") {
        $(this).val("请输入搜索内容");
      }
    });
    //设置图片的更换效果
    var i=1,t;
    var len=$(".img").length;
    var getImg=document.getElementsByClassName("img");
    function moveImg(){
      if(i==len)i=1;
      while(i<len){
         getImg[0].src=getImg[i].src
         i++;
         break;
      }
    }
    t=setInterval(moveImg,2000);
    getImg[0].onmouseover=function(){
      clearInterval(t)//取消图片的替换
    };
    getImg[0].onmouseout=function(){
      t=setInterval(moveImg,2500)//恢复图片的替换
    };
    //设置content中的鼠标事件
    $(".content_art").mouseover(function(){
      $(this).css("background-color","#f2f2f2")
    });
    $(".content_art").mouseout(function(){
      $(this).css("background-color","#fff")
    });
    //登录注册效果
    $(".sign1").bind({"click":function(){
      $(".sign_in").css("display","block");
      $(".sign0").css("display","block");
      $(".sign_in .cha").css("display","block");}                    
    });
    $(".sign2").bind({"click":function(){
      $(".sign_up").css("display","block");
      $(".sign0").css("display","block");
      $(".sign_up .cha").css("display","block");}                    
    });
    //点击×号退出登录注册界面
    $(".cha").click(function(){
      $(".sign_in").css("display","none");
      $(".sign_up").css("display","none");
      $(".sign0").css("display","none");
      $(".cha").css("display","none");
    });
    //点击登录注册返回首页
    $("input[type=button]").click(function(){
      $(".sign_in").css("display","none");
      $(".sign_up").css("display","none");
      $(".sign0").css("display","none");
      $(".cha").css("display","none");
    });
    $("input[type=text]").focus(function(){
      $(this).css("border","2px solid #3ff")
      $(".search").css("border","1px solid #dcdcdc")
    })
    //表单或得焦点亮高显示
    $(" sign input[type=password]").focus(function(){
      $(this).css("border","2px solid #3ff");
    })
    $("input[type=text]").blur(function(){
      $(this).css("border","1px solid #888");
      $(".search").css("border","1px solid #dcdcdc");
    })
    $("input[type=password]").blur(function(){
      $(this).css("border","1px solid #888")
    })
	});
