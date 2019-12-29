import jQuery from 'jquery';

((($, window) => {

  // Wrap each word in a heading ribbon with a span.
  $('.heading--ribbon-branding, .heading--ribbon-highlight').each(function () {
    const $this = $(this);

    // Can the browser support the "box-decoration-break" property?
    if ('CSS' in window
      && 'supports' in window.CSS
      && CSS.supports('(-webkit-box-decoration-break: clone) or (box-decoration-break: clone)')) {
      // Wrap the text with a single span.
      $this.wrapInner('<span></span>');
    }
    else {
      // Wrap every word with a span.
      const newString = $this.text().replace(/\S+/g, '<span>$&</span>');
      $this.html(newString);
    }
  });

}))(jQuery, window);
