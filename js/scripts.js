// Business Logic goes up here??

function avg(lazyInput, breakfastInput, friendsInput) {
  return (lazyInput + breakfastInput + friendsInput) / 3;
}
// UI down below

$(document).ready(function() {
  $("form#langSelect").submit(function(event) {
    event.preventDefault();
    const lazyInput = parseInt($("input:radio[name=lazy]:checked").val());
    console.log(lazyInput);
    const breakfastInput = parseInt($("input:radio[name=breakfast]:checked").val());
    console.log(breakfastInput);
    const friendsInput = parseInt($("input:radio[name=friends]:checked").val());
    console.log(friendsInput);
    let result = avg(lazyInput, breakfastInput, friendsInput);
    if (result === 3) {
      $("#cSharp").show();
    } else if (result === 1) {
      $("#ruby").show();
    } else if (result === 2) {
      $("#python").show();
    }
    $("#output").text(result);
  });
});