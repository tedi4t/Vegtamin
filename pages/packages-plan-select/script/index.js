$('section#goods .good').click(function() {
  $('section#good-overlay-section .good-overlay-bg').css({
    "z-index": "100",
    "opacity": "1",
    "transition-duration": ".5s",
  })

  $('section#good-overlay-section .good-overlay').css({
    "transform": "translateY(0)",
    "transition-duration": ".5s",
  })
})

$('section#good-overlay-section .good-overlay img.close-btn, section#good-overlay-section .good-overlay-bg').click(function() {
  $('section#good-overlay-section .good-overlay-bg').css({
    "z-index": "-1",
    "opacity": "0",
  })

  $('section#good-overlay-section .good-overlay').css({
    "transform": "translateY(100%)",
  })
})