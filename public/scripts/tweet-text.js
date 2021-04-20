$( () => {

  $('#tweet-text').on('focus', function() {
    $(this).css('background-color', '#f7f7f7')
  })
  
  $('#tweet-text').on('blur', function() {
    $(this).css('background-color', 'inherit')
  })
  
  })