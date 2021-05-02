$('.trash').click(function() {
  $(this)
    .parent()
    .parent()
    .remove()
})