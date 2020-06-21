function isUnicode(str) {
  var p = /^[\u0600-\u06FF\s]+$/;

  if (p.test(str))
    return true;
  return false;
}

var dir = $('input');

dir.keyup(function () {
  if (isUnicode($(this).val())) {
    $(this).css('direction', 'rtl');
  } else {
    $(this).css('direction', 'ltr');
  }
  if ($(this).val() === '' || $(this).val() === null) {
    $(this).css('direction', 'rtl');
  }

});
