$('section#frame-btn-wrapper button.date-btn').click(function() {
  const walletValue = parseInt($('section#wallet .text').html());
  const inputValue = parseInt($('input#charge-id').val());
  const radioValue = $('section#wallet-charge .date-radio-group input:checked');
  const radioLabelText = $(radioValue)
    .parent()
    .children('label')
    .children('.text')
    .html();

  const radioLabelValue = parseInt(
    radioLabelText
      .trim()
      .split('\n')[1]
      .trim()
  );

  $('section#wallet .text').html(`${walletValue + (inputValue || radioLabelValue)},000`);
})