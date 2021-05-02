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

$('section#overlays .edit-frequency .success').click(function() {
  const checkedInput = 
    $('section#overlays .edit-frequency .date-radio-group input:checked');

  const checkedLabel = $(checkedInput)
    .parent()
    .children('label')
    .html();

  $('section#frame-items-section .frame-items-main .frame-item')
    .each(function() {
      $(this)
        .children('.good-name')
        .html(checkedLabel)
    })

  console.log(checkedLabel);

  hideOverlays();
})