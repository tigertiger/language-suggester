
function avg(lazyInput, breakfastInput, friendsInput, dishesInput, parentsInput, sleepInput) {
  return Math.round((lazyInput + breakfastInput + friendsInput + dishesInput + parentsInput + sleepInput) / 6);
}

function blink_text() {
  $('#blink').fadeOut(250);
  $('#blink').fadeIn(250);
}
setInterval(blink_text, 500);




$(document).ready(function() {
  $("form#langSelect").submit(function(event) {
    event.preventDefault();

    const userNameInput = $("input#userName").val();
    const favColorInput = $("#favColor").val();
    const lazyInput = parseInt($("input:radio[name=lazy]:checked").val());
    console.log(lazyInput);
    const breakfastInput = parseInt($("input:radio[name=breakfast]:checked").val());
    console.log(breakfastInput);
    const friendsInput = parseInt($("input:radio[name=friends]:checked").val());
    console.log(friendsInput);
    const dishesInput = parseInt($("input:radio[name=dishes]:checked").val());
    console.log(dishesInput);
    const parentsInput = parseInt($("input:radio[name=parents]:checked").val());
    console.log(parentsInput);
    const sleepInput = parseInt($("input:radio[name=sleep]:checked").val());
    console.log(sleepInput);

    let result = avg(lazyInput, breakfastInput, friendsInput, dishesInput, parentsInput, sleepInput);
    if (result === 1 || result === 2) {
      $("#cSharp").show();
    } else if (result === 6 || result === 5) {
      $("#ruby").show();
    } else if (result === 3 || result === 4) {
      $("#python").show();
    }
    $("#output").text(result);
    $(".userName").text(userNameInput);
    $(".lang").css("background-color", favColorInput);

    $("#bubbleWrap").show();
    $("#submit").hide();
    $("#again").show();

    $("#again").click(function() {
      location.reload();
    });
  });
});