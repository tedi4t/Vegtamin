const values1 = [
  'یگتفه',
  'یا ﻪﺘﻔﻫ ود',
  'یا ﻪﺘﻔﻫ ﻪﺳ',
  'هناهام',
]

const values2 = [
  'ﺎﻫ‌ﻪﺒﻨﺸﮑﯾ',
  'ﺎﻫ‌ﻪﺒﻨﺷ',
  'ﺎﻫ‌ﻪﺒﻨﺷ‌ﻪﺳ',
  'ﺎﻫ‌ﻪﺒﻨﺷود',
]

const currentValue1 = $('section#date-1 label[for="date-1-1"]').html().trim();
const currentValue3 = $('section#date-3 label[for="date-3-1"]').html().trim();
const href = window.location.href;
console.log(href);
const values = href.split('?')[1].split('&').map(item => item.split('=')[1]);
$('section#date-1 label[for="date-1-1"]').html(values1[values[0]] || currentValue1);
$('section#date-3 label[for="date-3-1"]').html(values2[values[1]] || currentValue3);