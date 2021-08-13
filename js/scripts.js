// Business Logic goes up here??

function avg(lazyInput, breakfastInput, friendsInput, dishesInput, parentsInput, sleepInput) {
  return Math.ceil((lazyInput + breakfastInput + friendsInput + dishesInput + parentsInput + sleepInput) / 6);
}
// UI down below

$(document).ready(function() {
  $("form#langSelect").submit(function(event) {
    event.preventDefault();

    const userNameInput = $("input#userName").val();
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
    if (result === 3) {
      $("#cSharp").show();
    } else if (result === 1) {
      $("#ruby").show();
    } else if (result === 2) {
      $("#python").show();
    }
    $("#output").text(result);
    $(".userName").text(userNameInput);
    
    $("#submit").hide();
    $("#again").show();

    $("#again").click(function() {
      location.reload();
    });
  });
});