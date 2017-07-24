$(document).on('click', '.collapsible-panel .header', function() {
  $(this).closest('.collapsible-panel').toggleClass('collapsible-panel-extended');
});
