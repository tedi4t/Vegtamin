$('section#orders-1 button#state-toggler').click(function(e) {
  e.preventDefault();
  $(this)
    .parent()
    .parent()
    .parent()
    .toggleClass('unactive');
})