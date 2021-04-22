$(() => {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = tweetData => {
  // console.log(tweetData.created_at);
    return `
  <article class="tweets">

  <h3 class="header">
  <div class="user-info">
  <img class="user-photo" src=${tweetData.user.avatars}>
    <p>${tweetData.user.name}</p>
    </div>
    <p class="username">${tweetData.user.handle}</p>
    </h3>
  
  <p class="content">${escape(tweetData.content.text)}</p>
  <footer class="footer">
    <time class="timeago" datetime=${tweetData.created_at}></time>
    <div class="links">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
    </div>
  </footer>

</article>
`;

  };

  const renderTweets = tweets => {
  
    for (let tweet of tweets) {
      let $newTweet = createTweetElement(tweet);
      $('#tweets-container').append($newTweet);
    }
    timeago.render(document.querySelectorAll('.timeago'));
  };

  const loadTweets = () => {
  
    $.ajax('/tweets', { method: 'GET' })
      .then(tweets => renderTweets(tweets));
  
  };


  $('.error').hide();

  loadTweets();

  $('#tweet-submit').submit(event => {
    event.preventDefault();
    
    
    const message = $('#tweet-text').val();
      
    if (message.length === 0) {
      $('#empty').slideDown('slow');
      return false;
    }
      
    if (message.length > 140) {
      $('#long').slideDown('slow');
      return false;
    }

    $.post('/tweets', $('#tweet-text').serialize())
      .then(() => {
        $('#tweet-text').val('');
        $("#tweets-container").empty();
        $('#error').remove();
        loadTweets();
      });

  });
  
  
});