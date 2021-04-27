$('.toggler').click(function() {
  $(this).toggleClass('active');
});

$('section#plan-items-error').click(function() {
  const currentOpacity = $(this).css('opacity');
  const opacity = currentOpacity == 0 ? 1 : 0;
  $(this).css('opacity', opacity);
});