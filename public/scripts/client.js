/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  const createTweetElement = function(tweetData) {
    const tweet = `<article class="tweet">
    <header>
      <div class="userInfo">
        <img src=${tweetData.user.avatars}>
        <span class="userName">${tweetData.user.name}</span>
      </div>
      <span class="userHandler">${tweetData.user.handle}</span>
    </header>
    <p> ${tweetData.content.text}</p>
  
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
    for (const tweet of tweetsArr) {
      $("#tweet-container").append(createTweetElement(tweet));

    }
  };


  renderTweets(data)
  


 });

