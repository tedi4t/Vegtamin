let activeItemDelete;

function hideOverlays() {
  $('section#overlays .bg-dark').css({
    "z-index": "-1",
    "opacity": "0",
  })

  $('section#overlays .delete-confirmation').css({
    "transform": "translateY(100%)",
  })

  $('section#overlays .edit-frequency').css({
    "transform": "translateY(100%)",
  })
}

function showDeleteOverlay() {
  $('section#overlays .bg-dark').css({
    "z-index": "100",
    "opacity": "1",
    "transition-duration": ".4s"
  })

  $('section#overlays .delete-confirmation').css({
    "transform": "translateX(0)",
  })
}

$('.frame-items-main .trash').click(function() {
  activeDelete = this;

  showDeleteOverlay();
})

$('.frame-items-title .trash').click(function() {
  activeDelete = 
    $('section#frame-items-section .frame-items-main .frame-item').first();

  showDeleteOverlay();
})

$('.edit').click(function() {
  $('section#overlays .bg-dark').css({
    "z-index": "100",
    "opacity": "1",
    "transition-duration": ".4s"
  })

  $('section#overlays .edit-frequency').css({
    "transform": "translateX(0)",
  })
})

$('section#overlays .bg-dark').click(hideOverlays);
$('section#overlays .delete-confirmation .fail').click(hideOverlays);

$('section#overlays .delete-confirmation .success').click(function() {
  $(activeDelete)
    .parent('')
    .remove()

  hideOverlays();
})

$('section#overlays .edit-frequency .fail').click(hideOverlays);

$('section#overlays .edit-frequency .success').click(function() {
  $('section#overlays .edit-frequency .date-item').each(function() {
    const dropdownItems = $(this).children('.dropdown-items');
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
      .attr('id')
      .split('');
    const idCounter = idCounterArr[idCounterArr.length - 1];

    const textValue = $(`#text-${idCounter}`).html().trim();

    const value = checkedValue || textValue;
    $(`#text-${idCounter}`).html(value)
  })

  hideOverlays();
})

