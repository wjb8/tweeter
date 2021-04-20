$( () => {

$('#tweet-text').on('input', function() {
  
  let chars = this.value.length;
  let remainingChars = 140 - chars;
  let counter = $(this).parent().children('.ctrl').children('.counter');
  counter[0].innerText = remainingChars;

  if (remainingChars <= 0) {
    $(counter[0]).css('color', 'red')
  }

  if (remainingChars > 0) {
    $(counter[0]).css('color', 'rgb(107, 107, 107)')
  }

})

})