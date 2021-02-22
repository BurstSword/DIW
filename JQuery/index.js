

/* $(function(){
 $(".div1").click(function(){
   $(this).hide(1500,function(){
     $(this).show(1500);
   });
 });
}); */

/*  $(function(){
   $(".div2").click(function(){
     $(".div1").toggle(1000);
   });
 }); */

/*  $(function(){
  $(".div2").click(function () {
    if ( $( ".div1" ).is( ":hidden" ) ) {
      $( ".div1" ).slideDown(2000);
    } else {
      $( ".div1" ).slideUp(200);
    }
  });
}); */

 /* $(function(){
  $(".div1").click(function(){
    $(this).fadeIn(2000);
  });
});  */

/* $(function(){
 $(".div1").click(function(){
   $(this).fadeOut(2000,
     function(){
       $(this).fadeIn(2000);
     });
 });
});  */

/* $(function () {
  $(".div2").click(function () {
    $(".div1").fadeToggle(2000);
  })
});  */

/* $(function () {
 $(".div2").click(function () {
   $(".div1").slideToggle(2000);
 })
});  */

 /* $(function(){
  $(".div2").click(function () {
    if ( $( ".div1" ).is( ":hidden" ) ) {
      $( ".div1" ).slideDown(2000);
    } else {
      $( ".div1" ).hide();
    }
  });
});  */ 

/* $(function () {
  $(".div2").click(function () {
    $("#textito").text("Holi nuevo");
  })
}); */

/* $(function () {
  $(".div2").click(function () {
    $("#textito").html("Holi nuevo");
  })
}); */

/* $(function () {
  $(".div2").click(function () {
    $("#textito").after("<h1>Holi nuevo<h1>");
  })
}); */

/* $(function () {
  $(".div2").click(function () {
    $("#textito").before("<h1>Holi nuevo<h1>");
  })
}); */

$(document).ready(function(){
  $(".div2").click(function(){
    $(".div1").slideUp(5000);
  });
  $(".div3").click(function(){
    $(".div1").stop();
  });
});
