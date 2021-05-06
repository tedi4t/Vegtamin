const values1 = [
  'یگتفه',
  'یا ﻪﺘﻔﻫ ود',
  'یا ﻪﺘﻔﻫ ﻪﺳ',
  'هناهام',
]

const currentValue = $('section#date-1 label[for="date-1-1"]').html().trim();
const href = window.location.href;
const key1 = href.split('?')[1].split('=')[1];
const value1 = values1[key1];
console.log(value1);
$('section#date-1 label[for="date-1-1"]').html(value1 || currentValue);

// href="../Plan-date-time/index.html" 

$('section#date-btn-wrapper button.date-btn').click(() => {
  $('section#date-2 .date-radio-group input').each(function(index) {
    const checked = $(this).attr('checked') === 'checked';
    if (checked) {
      window.location.href = `../Plan-date-time/index.html?1=${key1}&2=${index}`;
    }
  })
})