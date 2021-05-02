let slideOffsetX;

$('#selectors .selector').click(function() {
  $('#selectors .selector').removeClass('active');
  $(this).addClass('active');
  const forSection = $(this).attr('data-parent');

  $('section#selector-1, section#selector-2, section#selector-3').css({
    "display": "none"
  })

  $(`section#${forSection}`).css({
    "display": "block"
  })
})

$('.left-tick-carousel').click(function() {
  const goodsBlock = $(this)
    .parent()
    .children('.goods-block');

  const translateX = goodsBlock.css('transform');
  const transformMatrix = translateX.split(', ');
  const currentOffsetX = parseInt(transformMatrix[4]);
  if (currentOffsetX <= 0 && currentOffsetX > -998) {
    if (slideOffsetX === undefined) {
      slideOffsetX = Math.abs(currentOffsetX);
    }
    transformMatrix[4] -= slideOffsetX;
    console.log(transformMatrix.join(', '))
  
    goodsBlock.css('transform', transformMatrix.join(', '));    
  }
})

$('.right-tick-carousel').click(function() {
  const goodsBlock = $(this)
    .parent()
    .children('.goods-block');

  const translateX = goodsBlock.css('transform');
  const transformMatrix = translateX.split(', ');
  const currentOffsetX = parseInt(transformMatrix[4]);
  if (currentOffsetX < 0 && currentOffsetX >= -998) {
    if (slideOffsetX === undefined) {
      slideOffsetX = Math.abs(currentOffsetX);
    }
  
    transformMatrix[4] = parseInt(transformMatrix[4]) + slideOffsetX;
    console.log(transformMatrix.join(', '))
  
    goodsBlock.css('transform', transformMatrix.join(', '));
  }
})