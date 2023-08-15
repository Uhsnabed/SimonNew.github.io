$(document).keypress(function(){
$("h1").text("Level 1");
});
$(".btn1").click(function(){
 var b1 = new Audio("sounds/green.mp3");
  b1.play();


$(".btn2").click(function(){
   var b2 = new Audio("sounds/red.mp3");
   b2.play();
    });

$(".btn3").click(function(){
       var b3 = new Audio("sounds/yellow.mp3");
       b3.play();
        });
 
$(".btn4").click(function(){
            var b4 = new Audio("sounds/blue.mp3");
            b4.play();  
            });       

        


});