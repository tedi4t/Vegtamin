$('section#frequency').click(() => {
  const checked = $('section#frequency input:checked').length;
  if (checked === 1) {
    $('section#frequency button.frequency-btn').attr('disabled', false);
  }
})

$('section#frequency button.frequency-btn').click(() => {
  $('section#frequency .frequency-radio-group input').each(function(index) {
    const checked = $(this).attr('checked') === 'checked';
    if (checked) {
      window.location.href = `../Plan-date/index.html?1=${index}`;
    }
  })
})
