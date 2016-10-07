$(function () {
    /*导航栏样式*/
    $("nav ul li a").on("click",function () {
        $(this).addClass("active").parents("li").siblings("li").children("a").removeClass("active");
    });

    /*固定定位样式实现*/
    $(".ex-show").mouseover(function () {
        $(".ex-hide").show();
    }).mouseleave(function () {
        // $(".ex-hide").hide();
    });

    /*tab栏实现*/
    $(".product-content>ul>li").on("click",function () {
        $(this).siblings("li").children("div").hide();
        $(this).children("div").show();
        $(".product-mian").hide();

        /*设置点击后的字体样式*/
        $(this).siblings("li").children("span").css({
            fontWeight: "normal",
            color:""
        });
        $(this).children("span").css({
            fontWeight: "bold",
            color:"#05a300"
        });


        /*点击的同时判断一下这个问题*/
        /*footer栏不能被定位的盒子记下来的问题解决*/
        var minheight =$(".product-mian").height();
        if( minheight > 453){
            var x = minheight - 453 + 30;
            $("footer").css({
                marginTop:x+'px'   /*453*/
            })
        }else if(minheight < 453){
            $("footer").css({
                marginTop:"0px"   /*453*/
            })
        }
        if($(".product-mian").hide()){
            $("footer").css({
                marginTop:"0px"   /*453*/
            })
        }
        $(".product-mian").hide()
    })

    /*footer栏不能被定位的盒子记下来的问题解决*/
    var minheight =$(".product-mian").height();
    if( minheight > 453){
        var x = minheight - 453 + 30;
        $("footer").css({
            marginTop:x+'px'   /*453*/
        })
    }else if(minheight < 453){
        $("footer").css({
            marginTop:"0px"   /*453*/
        })
    }
    /*加入我们--li标签里面的内容自动挤下去底部盒子*/

        var conheight =$("#job .content").height();
        if( conheight > 453){
            var x = conheight - 453 + 280;
            $("footer").css({
                marginTop:x+'px'   /*453*/
            })
        }else if(conheight < 453){
            $("footer").css({
                marginTop:"0px"   /*453*/
            })
        }
    /*页面刷新时要设置，页面被点击时也要被设置--这是一个灵感-BUg*/
       $("body").click(function () {

           if($("#job .content").height()){
               var conheight =$("#job .content").height();
               if( conheight > 453){
                   var xx = conheight - 453 + 280;
                   $("footer").css({
                       marginTop:xx+'px'   /*453*/
                   })
               }else if(conheight < 453){
                   $("footer").css({
                       marginTop:"0px"   /*453*/
                   })
               }


           }else if($("#pteds").height()){


               /*在线应聘*/
               var ptedheight =$("#pteds").height();
               if( ptedheight > 453){
                   var x = ptedheight - 453 + 280;
                   $("footer").css({
                       marginTop:x+'px'   /*453*/
                   })
               }else if(ptedheight < 453){
                   $("footer").css({
                       marginTop:"0px"   /*453*/
                   })
               }
           }
       });
})



