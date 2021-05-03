$('section#overlays .dropdown-toggle-overlay').click(function() {
    const dropdownGroup = $(this).parent();
    const dropdownItems = $(dropdownGroup).children('.dropdown-items');
    const hidden = dropdownItems.hasClass('hidden-second');
    let checkedValue;
    $(dropdownItems)
      .children()
      .each(function() {
        const checked = $(this)
          .children('input')
          .prop("checked")
        if (checked) {
          checkedValue = $(this)
            .children('label')
            .html()
            .trim();
        }
      })
  
    const idCounterArr = $(this)
      .parent()
      .attr('id')
      .split('');
    const idCounter = idCounterArr[idCounterArr.length - 1];

    const textValue = $(`#text-${idCounter}`).html().trim();

    const value = checkedValue || textValue;
      
    if (hidden) {
      dropdownItems.css('display', 'grid');
      $(this).children('img.dropdown-icon').attr('src', '../../../assets/icons/tick-down-green.svg')
      dropdownItems.removeClass('hidden-second');
      $(dropdownGroup)
        .children('.date-title')
        .children('h4')
        .css('display', 'none')
    } else {
      dropdownItems.css('display', 'none');
      $(this).children('img.dropdown-icon').attr('src', '../../../assets/icons/tick-up-green.svg')
      dropdownItems.addClass('hidden-second')
      $(dropdownGroup)
        .children('.date-title')
        .children('h4')
        .css('display', 'block')
        .html(value)
    }
  })