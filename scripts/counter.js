$('.good-buy-btn-quantity-wrapper .good-buy-quantity').click(function() {
  const classList = $(this).attr('class').split(' ');
  const addItem = classList.includes('plus');

  const valueItem = $(this)
    .parent()
    .children('.good-btn-quantity-value')
    .children('.value')
  
  const valueStr = valueItem.html();
  
  const value = parseInt(valueStr);
  $(this)
    .parent()
    .children('.good-buy-quantity.minus')
    .attr('disabled', (value === 1 && !addItem) ? true : false);

  if (addItem || value !== 1) {
    valueItem.html(addItem ? value + 1 : value - 1);
  }
})