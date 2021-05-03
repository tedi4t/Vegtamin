let found = false;
let totalItems = 0;

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

$('section#choice .item-wrap').click(function() {
  const classesChoice = $(this).attr('class').split(' ');
  classesChoice.splice(classesChoice.indexOf('item-wrap'), 1);
  const className = classesChoice[0];
  const goodNameSelector = className.split('-')[1];
  console.log(goodNameSelector);

  $(this)
    .parent()
    .children()
    .children()
    .removeClass('active');

  $(this)
    .children()
    .addClass('active');

  if (goodNameSelector === 'all') {
    $('section#goods .good-items')
    .children()
    .css('display', 'block');
  } else {
    $('section#goods .good-items')
    .children()
    .each(function() {
      const classes = $(this).attr('class').split(' ');
      classes.splice(classes.indexOf('good'), 1);
      const goodName = classes[0];
      $(this).css('display', goodName === goodNameSelector ? 'block' : 'none');
    })
  }
})

$('.good-items').click(function() {
  totalItems = 0;

  $('.good').each(function() {
    const active = $(this).hasClass('active');
    if (active) {
      const amount = parseInt(
        $(this)
          .children('.good-buy')
          .children('.good-buy-btn-quantity-wrapper')
          .children()
          .children('.good-btn-quantity-value')
          .children('.value')
          .html()
          .trim()
        );

      totalItems += amount;
    }
  })

  $('#total-items').html(totalItems)
})

$('.post-item').click(function() {
  const postItemVal = $(this)
    .children('label')
    .html()
  $(this)
    .parent()
    .parent()
    .parent()
    .parent()
    .children('.good-buy')
    .children('.good-buy-btn-quantity-wrapper')
    .children()
    .children('.good-btn-quantity-value')
    .children('.post')
    .html(postItemVal);
})