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

$('button.good-buy-btn').click(function() {
  $(this)
    .parent('.good-buy-btn-wrapper')
    .css('display', 'none');

  $(this)
    .parent('.good-buy-btn-wrapper')
    .parent()
    .children('.good-buy-btn-quantity-wrapper')
    .css('display', 'block');

  $(this)
    .parent()
    .parent()
    .parent()
    .addClass('active')

  $(this)
    .parent()
    .parent()
    .parent()
    .children('.good-tick-active')
    .css('display', 'block  ')

  $(this)
    .parent()
    .parent()
    .parent('.good-tick-active')
    .addClass('d-block')

  $('section#good-overlay-wrapper')
    .css('display', 'block');
})