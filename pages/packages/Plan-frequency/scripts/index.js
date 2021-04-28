$('section#frequency').click(() => {
  console.log('changed');
  const checked = $('section#frequency input:checked').length;
  if (checked === 1) {
    $('section#frequency button.frequency-btn').attr('disabled', false);
  }
})

$('section#frequency button.frequency-btn').click(() => {
  window.location.href='../Plan-date-2/index.html';
})
