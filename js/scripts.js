
function avg(lazyInput, breakfastInput, friendsInput, dishesInput, parentsInput, sleepInput, saturdayInput) {
  return ((lazyInput + breakfastInput + friendsInput + dishesInput + parentsInput + sleepInput + saturdayInput) / 3.5);
}


$(document).ready(function() {
  $("form#langSelect").submit(function(event) {
    event.preventDefault();

    const userNameInput = $("input#userName").val();
    const favColorInput = $("#favColor").val();
    const lazyInput = parseInt($("input:radio[name=lazy]:checked").val());
    const breakfastInput = parseInt($("input:radio[name=breakfast]:checked").val());
    const friendsInput = parseInt($("input:radio[name=friends]:checked").val());
    const dishesInput = parseInt($("input:radio[name=dishes]:checked").val());
    const parentsInput = parseInt($("input:radio[name=parents]:checked").val());
    const sleepInput = parseInt($("input:radio[name=sleep]:checked").val());
    const saturdayInput = parseInt($("input:radio[name=saturday]:checked").val());

    let result = avg(lazyInput, breakfastInput, friendsInput, dishesInput, parentsInput, sleepInput, saturdayInput);
    if (result <= 3) {
      $("#cSharp").show();
    } else if (result >= 5) {
      $("#ruby").show();
    } else if (result > 3 && result < 5) {
      $("#python").show();
    }

    // let result = avg(lazyInput, breakfastInput, friendsInput, dishesInput, parentsInput, sleepInput, saturdayInput);
    // if (result === 1 || result === 2) {
    //   $("#cSharp").show();
    // } else if (result === 6 || result === 5) {
    //   $("#ruby").show();
    // } else if (result === 3 || result === 4) {
    //   $("#python").show();
    // }
 console.log(result);
    $(".userName").text(userNameInput);
    $(".miniBubble").css("background-color", favColorInput);

    $("#langSelect").hide();
    $("#intro").hide();
    $("#chosen").show();
    $("#bubbleWrap").show();
    $("#miniWrap").show();
    $("#again").show();

    $("#again").click(function() {
      location.reload();
    });

  });
  function blink_text() {
    $('#blink').fadeOut(250);
    $('#blink').fadeIn(250);
  }
  setInterval(blink_text, 500);
});