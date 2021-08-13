// Business Logic goes up here??


// UI down below

$(document).ready(function() {
  $("form#langSelect").submit(function(event) {
    event.preventDefault();
    const lazy = parseInt($("input:radio[name=lazy]:checked").val());
    const breakfast = parseInt($("input:radio[name=breakfast]:checked").val());
    const friends = parseInt($("input:radio[name=friends]:checked").val());

    if (lazy + breakfast + friends === 3) {
      $("#cSharp").show();
    } else if (lazy + breakfast + friends > 6) {
      $("#ruby").show();
    } else {
      $("#python").show();
    }

  });
});