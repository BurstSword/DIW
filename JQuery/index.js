/* $(function(){
    $(".div1").dblclick(function redimensionarDiv(){
        var finalWidth = '250px';
        var finalHeight = '250px';
        if($(this).css('width')=='250px') {
            finalWidth = '800px';
            finalHeight = '70px';
        }
        $(".div1").animate({width: finalWidth, height: finalHeight});
    });
    
})
 */

/* $(function(){
    $("td").hover(entraMouse, saleMouse);
    function entraMouse() {
        $(this).css("background-color", "#ff0");
      }
      
      function saleMouse() {
        $(this).css("background-color", "#fff");
      }
})
 */
/* $(function(){
    $("#text1").focus(changeFocus);
    $("#text2").focus(changeFocus);
    $("#text1").blur(blurFocus);
    $("#text2").blur(blurFocus);
})



function changeFocus() {
  
  $(this).css("color", "#f00");
}
function blurFocus() {
  
    $(this).css("color", "#000");
  }
 */
  $( function() {
    $("input").tooltip();
  } );