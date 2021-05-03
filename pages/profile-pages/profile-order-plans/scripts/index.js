$('section#orders-1 button#state-toggler').click(function(e) {
  e.preventDefault();
  const unactive = $(this)
  .parent()
  .parent()
  .parent()
  .hasClass('unactive');

  $(this).html(!unactive ? 'لﺎﻌﻓ ﺮﯿﻏ' : 'لاعف')

  $(this)
    .parent()
    .parent()
    .parent()
    .toggleClass('unactive');
})