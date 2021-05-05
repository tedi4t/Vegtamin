$('.good-buy-btn-quantity-wrapper .good-buy-quantity').click(function() {
  const classList = $(this).attr('class').split(' ');
  const addItem = classList.includes('plus');

  const valueItem = $(this)
    .parent()
    .children('.good-btn-quantity-value')
    .children('.value')
  
  const valueStr = valueItem.html();
  
  const value = parseInt(valueStr);
  // $(this)
  //   .parent()
  //   .children('.good-buy-quantity.minus')
  //   .attr('disabled', (value === 1 && !addItem) ? true : false);

  if (!addItem && value === 1) {
    const goodElement = $(this)
      .parent()
      .parent()
      .parent()
      .parent()

    const isGood = goodElement.attr('class').split(' ').includes('good');

    if (isGood) {
      $(goodElement).removeClass('active');

      $(goodElement)
        .children('.good-buy')
        .children('.good-buy-btn-wrapper')
        .css('display', 'block')

      $(goodElement)
        .children('.good-buy')
        .children('.good-buy-btn-quantity-wrapper')
        .css('display', 'none')

      $(goodElement)
        .children('.good-tick-active')
        .css('display', 'none')

      if ($('section#goods .good.active').length === 0) {
        $('section#good-overlay-wrapper')
          .css('display', 'none');
      }
    }
  } else {
    valueItem.html(addItem ? value + 1 : value - 1);
  }
})