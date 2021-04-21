$('#selectors .selector').click(function() {
  $('#selectors .selector').removeClass('active');
  $(this).addClass('active');
  const forSection = $(this).attr('data-parent');

  $('section#selector-1, section#selector-2, section#selector-3').css({
    "display": "none"
  })

  $(`section#${forSection}`).css({
    "display": "block"
  })
})