$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on("keyup",function(event) {
    const charLength = ($this).val().length;
    const counterVal = 124 - charLength;
    console.log(counterVal);

    
  })
})