// plugins/imagesLoaded.js
import imagesLoaded from 'imagesloaded';
import jQuery from 'jquery';

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.$ = window.jQuery = jQuery;
    $.fn.imagesLoaded = imagesLoaded;
  }
});
