// Default JavaScript Functions and Initiations
import WebFont from 'webfontloader'

if ( 'querySelector' in document && 'addEventListener' in window ) {
  document.documentElement.className += 'js';
}

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Lato:400,700']
  }
});