$('.navbar-collapse').click(() => {
  $('.dark-bg-nav').css({
    "opacity": "0.6",
    "z-index": "20",
  })

  $('.navbar-items-block').css({
    "transform": "translateX(0)",
    "transition-duration": ".6s"
  })
})

$('.close-button').click(() => {
  $('.dark-bg-nav').css({
    "opacity": "0",
    "z-index": "0",
  })

  $('.navbar-items-block').css({
    "transform": "translateX(100%)",
  })
})

