$( () => {

$('#tweet-text').on('input', function() {
  
  let chars = this.value.length;
  let remainingChars = 140 - chars;
  let counter = $(this).parent().children('.ctrl').children('.counter')[0];
  counter.innerText = remainingChars;

  if (remainingChars <= 0) {
    $(counter).css('color', 'red')
  }

  if (remainingChars > 0) {
    $(counter).css('color', 'rgb(107, 107, 107)')
  }

})

})