$('.radio-item').click(function() {
  const radioGroup = $(this).closest('.radio-group').first();
  $(radioGroup).children('.radio-item').removeClass('active');
  $(this).addClass('active');
  $(radioGroup).find('.radio-item input[type="radio"]').attr('checked', false);
  $(this).children('input[type="radio"]').attr('checked', true);
})