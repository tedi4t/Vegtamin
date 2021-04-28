$('section#orders-1 button#state-toggler').click(function() {
  $(this)
    .parent()
    .parent()
    .parent()
    .toggleClass('unactive');
})