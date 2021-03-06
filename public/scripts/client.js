/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
// use jquery hide method to keep the error message hidden
  $("#error-message").hide().removeClass("hidden");

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  const createTweetElement = function(tweetData) {
    const tweet = `<article class="tweet">
    <header>
      <div class="userInfo">
        <img src=${tweetData.user.avatars}>
        <span class="userName">${tweetData.user.name}</span>
      </div>
      <span class="userHandler">${tweetData.user.handle}</span>
    </header>
    <p> ${escape(tweetData.content.text)}</p>
  
    <footer>
     <span class="date">${moment(tweetData["created_at"]).fromNow()} </span>
     <div class="userReaction">
      <i class="fas fa-flag fa-xs"></i>
      <i class="fas fa-retweet fa-xs"></i>
      <i class="fas fa-heart fa-xs"></i>
     </div>
    </footer>
  
  </article>`;
    return tweet;
  };
  
  const renderTweets = function(tweetsArr) {
    tweetsArr.reverse(); // now first element is the latest tweet
    for (const tweet of tweetsArr) {
      $("#tweet-container").append(createTweetElement(tweet));

    }
  };

  const loadTweets = function() {
    $.ajax({
      method:"GET",
      url:"/tweets",
      dataType:"json"
    }).then((data) =>{
      $("#tweet-container").empty();
      return data;
    })
      .then((data)=>renderTweets(data));
      

  };

  loadTweets();


  $("form").on("submit",function(event) {
    event.preventDefault();
    $("#error-message").slideUp();

    const tweet = $(this).find("#tweet-text").val();
    if (tweet === "" || tweet === null) {
      $("#error-message").empty().append(`<i class="fas fa-times fa-xs"></i> Cannot submit an empty tweet`).slideDown();


    } else if (tweet.length > 140) {
      $("#error-message").empty().append(`<i class="fas fa-times fa-xs"></i> Tweet can not exceed 140 characters`).slideDown();
      
    } else {

      $.ajax(
        {
          method:"Post",
          url: "/tweets",
          data:$(this).serialize(),
    
    
        }
      ).then(() => loadTweets());
  
      const tweetBox = $(this).find("#tweet-text");
      tweetBox.val("");
      tweetBox.focus();
      //clear counter
      $(".counter").text(140);
    }

  });
  


 });

