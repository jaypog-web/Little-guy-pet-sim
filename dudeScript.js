console.log('testcase');

$(".menuButton").on("click", function () {
    console.log('button clicked');
});

$("#apple").on("click", function () {
    $(".littleGuy").html("<img src='images/chew.gif'>");
});

$("#sleep").on("click", function () {
    $(".littleGuy").html("<img src='images/sleep.png'>");
});

$("#scarf").on("click", function () {
    $(".littleGuy").html("<img src='images/scarf.png'>");
});

var togglePoke = true;

$("#togglePoke").on("click", function () {
    $("#pokeR").toggle();
    if (togglePoke == true) {
        $(".littleGuy").html("<img src='images/pokeLeft.png'>");
        $(this).html("<div class='menuButton' id='pokeL'>Poke (<-)</div>");
        togglePoke = false;
    }

    else {
        $(".littleGuy").html("<img src='images/pokeRight.png'>");
        $(this).html("<div class='menuButton' id='pokeL'>Poke (->)</div>");
        togglePoke = true;
    }
});

$("#compress").on("click", function () {
    $(".littleGuy").html("<img src='images/compress.png'>");
});

$("#reset").on("click", function () {
    $(".littleGuy").html("<img src='images/base.png'>");
});