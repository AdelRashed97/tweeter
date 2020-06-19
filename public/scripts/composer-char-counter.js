$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on("keyup",function(event) {
    const charLength = $(this).val().length;
    const counterVal = 140 - charLength;
    const counter = $(this).closest("form").find(".counter");
    counter.val(counterVal);
    if (counterVal < 0) {
      counter.addClass("limit-exceeded");
    } else {
      counter.removeClass("limit-exceeded")
    }
    
    

    
  });
});