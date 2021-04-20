$( () => {

$('#tweet-text').on('input', function() {
  
  let chars = this.value.length;
  let remainingChars = 140 - chars;
  let counter = $(this).parent().children('.ctrl').children('.counter');
  console.log(counter[0].innerText = remainingChars);

})

})