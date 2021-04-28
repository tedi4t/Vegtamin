let activePackage;

function showGoodOverlay() {
  $('section#good-overlay-section .good-overlay-bg').css({
    "z-index": "100",
    "opacity": "1",
    "transition-duration": ".5s",
  })

  $('section#good-overlay-section .good-overlay').css({
    "transform": "translateY(0)",
    "transition-duration": ".5s",
  })
}

function hideGoodOverlay() {
  $('section#good-overlay-section .good-overlay-bg').css({
    "z-index": "-1",
    "opacity": "0",
  })

  $('section#good-overlay-section .good-overlay').css({
    "transform": "translateY(100%)",
  })
}

// show
$('section#goods .good').click(function() {
  activePackage = this;
  showGoodOverlay();
})

// hide
$('section#good-overlay-section .good-overlay img.close-btn, section#good-overlay-section .good-overlay-bg').click(function() {
  hideGoodOverlay();
})

// add active
$('section#good-overlay-section button.good-buy-btn').click(function() {
  $(activePackage).addClass('active');
  $('section#date-btn-wrapper').css('display', 'none');
  $('section#good-overlay-wrapper').css('display', 'block');
  hideGoodOverlay();
})