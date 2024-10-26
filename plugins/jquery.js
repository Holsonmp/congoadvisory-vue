// plugins/jquery.js
import jQuery from 'jquery';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.$ = window.jQuery = jQuery;
  }
});
