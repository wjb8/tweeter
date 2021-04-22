$(() => {

  $('#tweet-text').on('focus', function() {
    $(this).css('background-color', '#f7f7f7');
  });
  
  $('#tweet-text').on('blur', function() {
    $(this).css('background-color', 'inherit');
  });

  $('#tweet-text').on('input', function() {
    if ($('#tweet-text').val().length > 0) {
      $('#empty').slideUp('slow');
    }

    if ($('#tweet-text').val().length <= 140) {
      $('#long').slideUp('slow');
    }
  });
  
});