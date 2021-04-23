$('.dropdown-toggle').click(function() {
  const dropdownGroup = $(this).closest('.dropdown');
  const dropdownItems = $(dropdownGroup).children('.dropdown-items');
  console.log(dropdownItems);
  const hidden = dropdownItems.hasClass('hidden');

  console.log('click');
  console.log(dropdownItems);
  console.log(hidden);

  if (hidden) {
    dropdownItems.css('display', 'block');
    $(this).children('img.dropdown-icon').attr('src', '../../assets/icons/tick-down-green.svg')
    dropdownItems.removeClass('hidden')
  } else {
    dropdownItems.css('display', 'none');
    $(this).children('img.dropdown-icon').attr('src', '../../assets/icons/tick-up-green.svg')
    dropdownItems.addClass('hidden')
  }
})