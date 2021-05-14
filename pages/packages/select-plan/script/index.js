let activePackage;
let totalItems = 0;

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
$('section#goods .good .good-buy-btn').click(function() {
  activePackage = $(this)
    .parent()
    .parent()
    .parent();
  showGoodOverlay();

  const name = $(activePackage)
    .children('.good-heading')
    .children('.good-info')
    .children('h3')
    .html()
    .trim();

  const imgSrc = $(activePackage)
    .children('.good-heading')
    .children('.good-photo')
    .children('img')
    .attr('src');

  $('section#good-overlay-section .good-overlay .good-title').html(name);
  $('section#good-overlay-section .good-overlay img.good-img').attr('src', imgSrc);
})

// hide
$('section#good-overlay-section .good-overlay img.close-btn, section#good-overlay-section .good-overlay-bg').click(function() {
  hideGoodOverlay();
  $('section#good-overlay-section .good-btn-quantity-value .value')
    .html('1');
})

// add active
$('section#good-overlay-section button.good-buy-btn').click(function() {
  $(activePackage).addClass('active');
  $(activePackage)
    .children('.good-buy')
    .children('.good-buy-btn-wrapper')
    .css('display', 'none')
  
  $(activePackage)
    .children('.good-buy')
    .children('.good-buy-btn-quantity-wrapper')
    .css('display', 'flex')

  $('section#date-btn-wrapper').css('display', 'none');
  $('section#good-overlay-wrapper').css('display', 'block');
  hideGoodOverlay();

  const overlayQuantity = $('section#good-overlay-section .good-btn-quantity-value .value')
    .html();

  $('section#good-overlay-section .good-btn-quantity-value .value')
    .html('1');

  $(activePackage)
    .children('.good-buy')
    .children('.good-buy-btn-quantity-wrapper')
    .children()
    .children('.good-btn-quantity-value')
    .children('.value')
    .html(overlayQuantity)
})

$('.good-items, section#good-overlay-section button.good-buy-btn').click(function() {
  totalItems = 0;

  $('.good').each(function() {
    const active = $(this).hasClass('active');
    if (active) {
      const amount = parseInt(
        $(this)
          .children('.good-buy')
          .children('.good-buy-btn-quantity-wrapper')
          .children()
          .children('.good-btn-quantity-value')
          .children('.value')
          .html()
          .trim()
        );

      totalItems += amount;
    }
  })

  $('#total-items').html(totalItems)
})