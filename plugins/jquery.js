// plugins/jquery.js
import $ from 'jquery';

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.$ = $;
    window.jQuery = $; 
  }
});
