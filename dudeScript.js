console.log('testcase');

$(".menuButton").on("click", function () {
    console.log('button clicked');
});

$("#apple").on("click", function () {
    $(".littleGuy").html("<img src='images/chew.gif'>");
});

$("#kibble").on("click", function () {
    $(".littleGuy").html("<img src='images/full.gif'>");
});

$("#pear").on("click", function () {
    $(".littleGuy").html("<img src='images/stop.gif'>");
});

$("#cold").on("click", function () {
    $(".littleGuy").html("<img src='images/sleep.png'>");
});

$("#blankie").on("click", function () {
    $(".littleGuy").html("<img src='images/sleep-blankie.png'>");
});

$("#footOut").on("click", function () {
    $(".littleGuy").html("<img src='images/sleep-foot.png'>");
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