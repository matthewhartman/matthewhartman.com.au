// Default JavaScript Functions and Initiations
import WebFont from 'webfontloader'

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Lato:400,700']
  }
});

(function() {
  'use strict'
  var header = document.querySelector('.header');
  var colours = ['orangered', 'black', 'midnightblue', 'darkslateblue', 'indigo', 'crimson']
  var random = Math.random();
  var totalColours = colours.length;
  var randomIndex = Math.floor(random * totalColours);
  var randomColour = colours[randomIndex];
  header.style.background = randomColour;
  var style = document.querySelector('head').insertAdjacentHTML('beforeend', '<style type="text/css"> \
      a { color: ' + randomColour + '; } \
      a:hover, a:focus { color: ' + randomColour + '; } \
    </style> \
  ');
}())