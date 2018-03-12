// Default JavaScript Functions and Initiations
if ( 'querySelector' in document && 'addEventListener' in window ) {
  document.documentElement.className += 'js';
}

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Lato:400,700']
  }
});