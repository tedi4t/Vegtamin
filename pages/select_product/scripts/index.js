let found = false;

$('#search #search-input').change(function() {
  found = $(this).val().length === 0 ? true : false;
  if (found) {
    $('section#not-found').css('display', 'none');
    $('section#goods').css('display', 'block');
  } else {
    $('section#goods').css('display', 'none');
    $('section#not-found').css('display', 'block');
  }
})