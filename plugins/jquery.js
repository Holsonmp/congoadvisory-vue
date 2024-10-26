// plugins/jquery.js
export default defineNuxtPlugin(() => {
    if (process.client) {
      return import('/assets/js/vendor/jquery-3.6.0.min.js').then(() => {
        // jQuery est maintenant disponible globalement
        window.$ = window.jQuery;
      });
    }
  });
  