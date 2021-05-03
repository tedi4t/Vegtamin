$('.dropdown-toggle').click(function() {
  const dropdownGroup = $(this).parent();
  const dropdownItems = $(dropdownGroup).children('.dropdown-items');
  const hidden = dropdownItems.hasClass('hidden');

  if (hidden) {
    dropdownItems.css('display', 'block');
    $(this).children('img.dropdown-icon').attr('src', '../../../assets/icons/tick-down-green.svg')
    dropdownItems.removeClass('hidden')
  } else {
    dropdownItems.css('display', 'none');
    $(this).children('img.dropdown-icon').attr('src', '../../../assets/icons/tick-up-green.svg')
    dropdownItems.addClass('hidden')
  }
})