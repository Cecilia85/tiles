//bussiness logic//
var square1;
var box1;
var square2;
var box2;
var square3;
var box3;
var square4;
var box4;



var compare = function() {

if ((square1 === 1) && (square4 === 1)) {
    $("img#bear1,img#bear2").fadeOut();
} else if ((square2 ===1) && (square3 === 1)) {
     $("img#duck1,img#duck2").fadeOut();
   }
// } else if ((box1 === 1) && (box2 === 1)) {
//       $("img#bear1,img#duck1").hide();
//       $("img#back1, img#back2").fadeIn();
//
// } else if ((box1 === 1) && (box3 === 1)) {
//       $("img#bear1,img#duck2").hide();
//       $("img#back1, img#back3").fadeIn();
// }
console.log(square1, square2, square3, square4);
console.log(box1,box2,box3,box4);
};
//user interface logic//

$(document).ready(function() {
  $("img#back1").click(function() {
    $("img#back1").hide();
    $("img#bear1").show();

    square1= 1;
    box1=1;
     compare();
  });
  $("img#back2").click(function() {
    $("img#back2").hide();
    $("img#duck1").show();

    square2=1;
    box2=1;
    compare();
  });
  $("img#back3").click(function() {
    $("img#back3").hide();
    $("img#duck2").show();

    square3=1;
    box3=1;
    compare();
  });
  $("img#back4").click(function() {
    $("img#back4").hide();
    $("img#bear2").show();

    square4=1;
    box4=1;
    compare();
  });
});
