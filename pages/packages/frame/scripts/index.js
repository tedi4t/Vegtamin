$('section#frame-items-section .trash').click(function() {
  $(this)
    .parent('.frame-item')
    .remove()
})