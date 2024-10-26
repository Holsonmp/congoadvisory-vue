// plugins/jquery.js
import jQuery from 'jquery';

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.$ = window.jQuery = jQuery; // rendre jQuery global
  }
});
