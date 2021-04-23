$('.trash').click(function() {
  $('section#overlays .bg-dark').css({
    "z-index": "100",
    "opacity": "1",
    "transition-duration": ".4s"
  })

  $('section#overlays .delete-confirmation').css({
    "transform": "translateX(0)",
  })
})

$('.edit').click(function() {
  $('section#overlays .bg-dark').css({
    "z-index": "100",
    "opacity": "1",
    "transition-duration": ".4s"
  })

  $('section#overlays .edit-frequency').css({
    "transform": "translateX(0)",
  })
})

$('section#overlays .bg-dark').click(function() {
  $('section#overlays .bg-dark').css({
    "z-index": "-1",
    "opacity": "0",
  })

  $('section#overlays .delete-confirmation').css({
    "transform": "translateY(100%)",
  })

  $('section#overlays .edit-frequency').css({
    "transform": "translateY(100%)",
  })
})
