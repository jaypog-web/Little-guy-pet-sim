console.log('testcase');

$(".menuButton").on("click", function () {
    console.log('button clicked');

    // To test -- delete
    $(this).addClass("clickedButton");
});

$("#feed").on("click", function () {
    $(".littleGuy").html("<img src='images/chew.gif'>");
});

$("#sleep").on("click", function () {
    $(".littleGuy").html("<img src='images/sleep.png'>");
});

$("#scarf").on("click", function () {
    $(".littleGuy").html("<img src='images/scarf.png'>");
});

$("#poke").on("click", function () {
    $(".littleGuy").html("<img src='images/pokeLeft.png'>");
});

$("#compress").on("click", function () {
    $(".littleGuy").html("<img src='images/compress.png'>");
});

$("#reset").on("click", function () {
    $(".littleGuy").html("<img src='images/base.png'>");
});