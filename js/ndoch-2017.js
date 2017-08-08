$(document).on('click', '.collapsible-panel .header', function() {
  $(this).closest('.collapsible-panel').toggleClass('collapsible-panel-extended');
});

$(document).ready(function() {
    $('.interactive-tooltip').tooltipster({
      theme: 'tooltipster-light',
      trigger: 'click',
      contentAsHTML: true,
      maxWidth: 500,
    });
});
