$('.dropdown-toggle').click(function() {
  const dropdownGroup = $(this).closest('.dropdown');
  const dropdownItems = $(dropdownGroup).children('.dropdown-items');
  const hidden = dropdownItems.hasClass('hidden');

  if (hidden) {
    dropdownItems.hide(500);
    dropdownItems.removeClass('hidden');
  } else {
    dropdownItems.show(500);
    dropdownItems.addClass('hidden');
  }
})