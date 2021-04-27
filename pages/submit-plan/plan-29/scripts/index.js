$('.toggler').click(function() {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('section#plan-items-error').css('opacity', 1);
    $('section#frame-btn-wrapper .btn-text').html('ﯽﯾﺎﻬﻧ ﺖﺒﺛ');
  } else {
    $('section#plan-items-error').css('opacity', 0);
    $('section#frame-btn-wrapper .btn-text').html('رﺎﺒﺘﻋا ﺶﯾاﺰﻓا');
  }
});
